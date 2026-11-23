"""Bootstrap 95% confidence intervals and paired significance tests (reviewer R3.9).

Resamples the 496 test *images* with replacement. Each image carries one HTML,
one JSX and one Vue sample, so the three tasks are resampled together, and the
same resamples are used for every model (paired comparison).

Every metric is recomputed exactly as reported in the paper:
  BLEU-4, CodeBLEU   corpus-level per task (sacrebleu / codebleu, as evaluate.py
                     and calc_codebleu_all.py)
  Edit sim., PSR     per-sample means (as evaluate.py)
  SSIM, PSNR         per-sample scores from the saved corrected renders, using
                     the scoring function of rerender_html_vue.py
  LPIPS              AlexNet at 512x384, as recompute_lpips_all.py (run on CPU)
Failed renders get the worst value (SSIM/PSNR 0, LPIPS 1). Overall = mean of
the three task values, as in Table V.

Models are included when their predictions and renders exist (qlora_3b is added
once websight_visual.py has rendered it). Per-sample scores are cached in
results/per_sample_scores.json and only missing models are computed. Results go
to results/bootstrap_ci.json.

Usage:  py -3.10 bootstrap_ci.py [--n-boot 1000] [--n-boot-codebleu 500] [--workers 6]
"""
import argparse
import io
import json
import os
import contextlib
from multiprocessing import Pool
from pathlib import Path

import numpy as np
import Levenshtein

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
ALL_METHODS = ["base", "qwen2.5", "qlora", "qlora_3b"]
LABEL = {"base": "Base (2B)", "qwen2.5": "Qwen2.5 (3B)", "qlora": "QLoRA (2B)",
         "qlora_3b": "QLoRA (3B)"}
# (a, b): report a - b
PAIRS = [("qlora", "base"), ("qlora", "qwen2.5"), ("qlora", "qlora_3b"),
         ("qlora_3b", "qwen2.5"), ("qlora_3b", "base")]
TASKS = ["html", "jsx", "vue"]
SEED = 42
LPIPS_W, LPIPS_H = 512, 384
FAILED_LPIPS = 1.0


def available_methods():
    return [m for m in ALL_METHODS
            if (RESULTS / f"{m}_predictions.json").exists()
            and all((RESULTS / f"{m}_renders_{t}_fixed").is_dir() for t in TASKS)]


# ═══════════════════════════════════════════════════════════════════════════════
# PER-SAMPLE SCORES
# ═══════════════════════════════════════════════════════════════════════════════
def _ssim_psnr_job(job):
    """Score every render that shares one original screenshot, then free it."""
    import rerender_html_vue
    original, renders = job
    out = []
    for render in renders:
        r = rerender_html_vue.score(original, render)
        out.append((r["ssim"], r["psnr"]))
    rerender_html_vue._orig_cache.clear()
    return out


def compute_per_sample(preds, methods, workers):
    """{method: {task: {ssim, psnr, lpips, edit_sim, parse_ok}}} for the given methods."""
    from rerender_html_vue import build_image_map
    imap = build_image_map()

    print(f"Computing per-sample SSIM/PSNR from saved renders for {methods}...")
    # jobs/keys: one entry per (method, task, sample); grouped by original image
    # so each worker holds a single full-size screenshot at a time.
    n = len(preds[methods[0]]["html"])
    jobs, keys, groups = [], [], []
    for i in range(n):
        renders = []
        for m in methods:
            for t in TASKS:
                path = str(RESULTS / f"{m}_renders_{t}_fixed" / f"{t}_{i}.png")
                jobs.append((imap[(t, i)], path))
                keys.append((m, t, i))
                renders.append(path)
        assert len({imap[(t, i)] for t in TASKS}) == 1
        groups.append((imap[("html", i)], renders))
    with Pool(workers) as pool:
        sp = [r for group in pool.map(_ssim_psnr_job, groups) for r in group]

    print("Computing per-sample LPIPS on CPU...")
    import torch
    import lpips as lpips_module
    from PIL import Image
    net = lpips_module.LPIPS(net="alex", verbose=False).eval()

    def to_tensor(arr):
        return torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).float() / 255.0 * 2.0 - 1.0

    current, orig = None, None
    lp = []
    with torch.no_grad():
        for original, render in jobs:
            if not os.path.exists(render):
                lp.append(FAILED_LPIPS)
                continue
            if original != current:
                current, orig = original, to_tensor(np.array(
                    Image.open(original).convert("RGB").resize((LPIPS_W, LPIPS_H))))
            rend = to_tensor(np.array(Image.open(render).convert("RGB").resize((LPIPS_W, LPIPS_H))))
            lp.append(float(net(orig, rend).item()))

    out = {m: {t: {"ssim": [], "psnr": [], "lpips": []} for t in TASKS} for m in methods}
    for (m, t, _), (s, p), l in zip(keys, sp, lp):
        out[m][t]["ssim"].append(s)
        out[m][t]["psnr"].append(p)
        out[m][t]["lpips"].append(l)

    for m in methods:
        for t in TASKS:
            samples = preds[m][t]
            out[m][t]["edit_sim"] = [
                1.0 - Levenshtein.distance(s["prediction"], s["reference"])
                / max(len(s["prediction"]), len(s["reference"]), 1)
                for s in samples
            ]
            out[m][t]["parse_ok"] = [1.0 if s["parse_ok"] else 0.0 for s in samples]
    return out


def per_sample_scores(preds, methods, workers):
    """Cached per-sample scores; computes and caches only the missing methods."""
    cache = RESULTS / "per_sample_scores.json"
    scores = json.loads(cache.read_text()) if cache.exists() else {}
    missing = [m for m in methods if m not in scores]
    if missing:
        scores.update(compute_per_sample(preds, missing, workers))
        cache.write_text(json.dumps(scores))
    else:
        print(f"Using cached per-sample scores: {cache}")
    return scores


# ═══════════════════════════════════════════════════════════════════════════════
# CODEBLEU WORKERS (corpus-level, recomputed per resample)
# ═══════════════════════════════════════════════════════════════════════════════
_W = {}


def _init_codebleu_worker(methods, n_boot, n_images):
    _W["preds"] = load_predictions(methods)
    _W["idx"] = resample_indices(n_boot, n_images)


def _codebleu_job(job):
    from codebleu import calc_codebleu
    m, t, b = job
    samples = _W["preds"][m][t]
    rows = range(len(samples)) if b < 0 else _W["idx"][b]
    with contextlib.redirect_stdout(io.StringIO()):
        r = calc_codebleu(
            references=[samples[i]["reference"] for i in rows],
            predictions=[samples[i]["prediction"] for i in rows],
            lang="javascript",
            weights=(0.25, 0.25, 0.25, 0.25),
        )
    return m, t, b, r["codebleu"]


# ═══════════════════════════════════════════════════════════════════════════════
# HELPERS
# ═══════════════════════════════════════════════════════════════════════════════
def load_predictions(methods):
    return {m: json.loads((RESULTS / f"{m}_predictions.json").read_text(encoding="utf-8"))
            for m in methods}


def resample_indices(n_boot, n_images):
    return np.random.default_rng(SEED).integers(0, n_images, size=(n_boot, n_images))


def published_values(methods):
    """Values in the paper's tables (or, for qlora_3b, its own result files)."""
    hv = json.loads((RESULTS / "html_vue_rerender_results.json").read_text())
    jx = json.loads((RESULTS / "jsx_rerender_results.json").read_text())
    lp = json.loads((RESULTS / "lpips_all_recomputed.json").read_text())
    pub = {}
    for m in methods:
        ev = json.loads((RESULTS / f"{m}_eval_results.json").read_text())
        fixed = RESULTS / f"{m}_visual_fixed.json"
        vf = json.loads(fixed.read_text()) if fixed.exists() else None
        pub[m] = {}
        for t in TASKS:
            pt = ev["per_task"][t]
            if vf:
                vis = {"ssim": vf[t]["ssim"], "psnr": vf[t]["psnr"], "lpips": vf[t]["lpips"]}
            else:
                v = jx[m] if t == "jsx" else hv[m][t]
                vis = {"ssim": v["avg_ssim"], "psnr": v["avg_psnr"], "lpips": lp[m][t]}
            pub[m][t] = {"bleu4": pt["bleu4"], "codebleu": pt["codebleu"],
                         "edit_sim": pt["edit_similarity"], "psr": pt["parse_success_rate"],
                         **vis}
    return pub


def summarize(full, boots):
    lo, hi = np.percentile(boots, [2.5, 97.5])
    return {"value": round(float(full), 4), "ci_low": round(float(lo), 4),
            "ci_high": round(float(hi), 4)}


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--n-boot", type=int, default=1000)
    ap.add_argument("--n-boot-codebleu", type=int, default=500)
    ap.add_argument("--workers", type=int, default=6)
    args = ap.parse_args()

    from sacrebleu.metrics import BLEU

    methods = available_methods()
    pairs = [(a, b) for a, b in PAIRS if a in methods and b in methods]
    print(f"models: {methods}")
    preds = load_predictions(methods)
    n_images = len(preds["qlora"]["html"])
    scores = per_sample_scores(preds, methods, args.workers)
    idx = resample_indices(args.n_boot, n_images)

    # metric -> method -> task -> (full value, bootstrap array)
    res = {}

    # Per-sample-mean metrics
    for metric in ["ssim", "psnr", "lpips", "edit_sim", "parse_ok"]:
        name = "psr" if metric == "parse_ok" else metric
        res[name] = {}
        for m in methods:
            res[name][m] = {}
            for t in TASKS:
                a = np.asarray(scores[m][t][metric])
                res[name][m][t] = (a.mean(), a[idx].mean(axis=1))

    # BLEU-4: corpus-level from per-segment sufficient statistics
    bleu = BLEU(effective_order=True)
    res["bleu4"] = {}
    for m in methods:
        res["bleu4"][m] = {}
        for t in TASKS:
            samples = preds[m][t]
            stats = np.asarray(bleu._extract_corpus_statistics(
                [s["prediction"] for s in samples], [[s["reference"] for s in samples]]))
            full = bleu._compute_score_from_stats(stats.sum(axis=0).tolist()).score
            boots = np.array([bleu._compute_score_from_stats(stats[row].sum(axis=0).tolist()).score
                              for row in idx])
            res["bleu4"][m][t] = (full, boots)

    # CodeBLEU: corpus-level, recomputed per resample (b = -1 is the full test set)
    nb = args.n_boot_codebleu
    jobs = [(m, t, b) for m in methods for t in TASKS for b in range(-1, nb)]
    print(f"CodeBLEU: {len(jobs)} corpus evaluations on {args.workers} workers...")
    # CodeBLEU's dataflow match iterates over sets, so JSX scores depend on the hash
    # seed; spawned workers inherit this (same seed as recalc_codebleu_seeded.py)
    os.environ["PYTHONHASHSEED"] = "0"
    cb = {m: {t: [None, np.zeros(nb)] for t in TASKS} for m in methods}
    with Pool(args.workers, initializer=_init_codebleu_worker,
              initargs=(methods, args.n_boot, n_images)) as pool:
        for k, (m, t, b, v) in enumerate(pool.imap_unordered(_codebleu_job, jobs, chunksize=4)):
            if b < 0:
                cb[m][t][0] = v
            else:
                cb[m][t][1][b] = v
            if (k + 1) % 500 == 0:
                print(f"  {k + 1}/{len(jobs)}", flush=True)
    res["codebleu"] = {m: {t: tuple(cb[m][t]) for t in TASKS} for m in methods}

    # ── Reproduction check against the published tables ──
    pub = published_values(methods)
    print("\nReproduction check (recomputed vs published):")
    worst = 0.0
    for name in ["bleu4", "codebleu", "edit_sim", "psr", "ssim", "psnr", "lpips"]:
        for m in methods:
            for t in TASKS:
                full = res[name][m][t][0]
                rel = abs(full - pub[m][t][name]) / max(abs(pub[m][t][name]), 1e-9)
                worst = max(worst, rel)
                if rel > 0.002:
                    print(f"  MISMATCH {name:8s} {m:8s} {t:5s} recomputed={full:.4f} "
                          f"published={pub[m][t][name]:.4f}")
    print(f"  largest relative deviation: {worst:.4%}")

    # ── Summaries: per task, overall (mean of tasks), paired differences ──
    out = {"n_boot": args.n_boot, "n_boot_codebleu": nb, "n_images": n_images,
           "methods": methods, "metrics": {}}
    for name, per_m in res.items():
        entry, overall = {}, {}
        for m in methods:
            n = min(len(per_m[m][t][1]) for t in TASKS)
            full = np.mean([per_m[m][t][0] for t in TASKS])
            boots = np.mean([per_m[m][t][1][:n] for t in TASKS], axis=0)
            overall[m] = (full, boots)
            entry[m] = {"overall": summarize(full, boots),
                        **{t: summarize(*per_m[m][t]) for t in TASKS}}
        diffs = {}
        for a, b in pairs:
            d = {}
            for scope in ["overall"] + TASKS:
                fa, ba = overall[a] if scope == "overall" else per_m[a][scope]
                fb, bb = overall[b] if scope == "overall" else per_m[b][scope]
                n = min(len(ba), len(bb))
                delta = ba[:n] - bb[:n]
                p = 2 * min((delta <= 0).mean(), (delta >= 0).mean())
                d[scope] = {**summarize(fa - fb, delta), "p_value": round(float(min(p, 1.0)), 4)}
            diffs[f"{a}_minus_{b}"] = d
        out["metrics"][name] = {"models": entry, "paired": diffs}

    (RESULTS / "bootstrap_ci.json").write_text(json.dumps(out, indent=2))

    print("\n" + "=" * 92)
    print(f"OVERALL (mean of HTML/JSX/Vue) with 95% bootstrap CI  "
          f"[B={args.n_boot}; CodeBLEU B={nb}]")
    print("=" * 92)
    order = ["ssim", "lpips", "psnr", "codebleu", "bleu4", "edit_sim", "psr"]
    for name in order:
        cells = "  ".join(
            f"{LABEL[m]} {s['value']:.4f} [{s['ci_low']:.4f},{s['ci_high']:.4f}]"
            for m in methods for s in [out["metrics"][name]["models"][m]["overall"]])
        print(f"{name:9s} {cells}")

    print("\nPAIRED DIFFERENCES a - b  (95% CI, two-sided bootstrap p)")
    for a, b in pairs:
        print(f"\n  {LABEL[a]} - {LABEL[b]}")
        for name in order:
            d = out["metrics"][name]["paired"][f"{a}_minus_{b}"]
            cells = "  ".join(
                f"{scope}: {d[scope]['value']:+.4f} [{d[scope]['ci_low']:+.4f},{d[scope]['ci_high']:+.4f}] p={d[scope]['p_value']:.3f}"
                for scope in ["overall"] + TASKS)
            print(f"    {name:9s} {cells}")
    print(f"\nsaved -> {RESULTS / 'bootstrap_ci.json'}")


if __name__ == "__main__":
    main()
