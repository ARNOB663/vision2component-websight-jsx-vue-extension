"""Collect every revision experiment into the tables used for the rebuttal.

Prints whatever is available; missing experiments are reported as pending.

Sources (results/):
  {m}_eval_results.json                    code metrics (WebSight test)
  html_vue_rerender_results.json, jsx_rerender_results.json, lpips_all_recomputed.json
                                           visual metrics, paper models
  qlora_3b_visual_fixed.json               visual metrics, fine-tuned 3B (websight_visual.py)
  jsx_lenient_rerender_results.json        JSX under the lenient harness
  teacher_render_check.json                reference-code ceiling, teacher fidelity
  bootstrap_ci.json                        95% CIs / paired tests
  {m}_latency_eval_results.json + _predictions.json   controlled latency
  design2code_results.json                 Design2Code visual metrics

Usage:  py -3.10 revision_tables.py
"""
import json
import re
from pathlib import Path

import numpy as np

RESULTS = Path(__file__).resolve().parent / "results"
LOGS = Path(__file__).resolve().parent / "logs"
METHODS = ["base", "qwen2.5", "qlora", "qlora_3b"]
LABEL = {"base": "Base 2B (zero-shot)", "qwen2.5": "Qwen2.5 3B (zero-shot)",
         "qlora": "QLoRA 2B", "qlora_3b": "QLoRA 3B"}
TASKS = ["html", "jsx", "vue"]


def load(name):
    p = RESULTS / name
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else None


def header(title):
    print("\n" + "=" * 96 + f"\n{title}\n" + "=" * 96)


def visual(m):
    """Per-task SSIM/PSNR/LPIPS/render rate with the corrected (strict) harness."""
    if m == "qlora_3b":
        v = load("qlora_3b_visual_fixed.json")
        if not v:
            return None
        return {t: {"ssim": v[t]["ssim"], "psnr": v[t]["psnr"], "lpips": v[t]["lpips"],
                    "rend": v[t]["rendered"] / v[t]["n"]} for t in TASKS}
    hv, jx, lp = load("html_vue_rerender_results.json"), load("jsx_rerender_results.json"), \
        load("lpips_all_recomputed.json")
    out = {}
    for t in TASKS:
        s = jx[m] if t == "jsx" else hv[m][t]
        out[t] = {"ssim": s["avg_ssim"], "psnr": s["avg_psnr"], "lpips": lp[m][t],
                  "rend": s["n_rendered"] / s["n_samples"]}
    return out


def main_table():
    header("WebSight test set (1,488 samples) -- overall = mean of HTML/JSX/Vue")
    cols = ["PSR", "BLEU-4", "CodeBLEU", "SSIM", "PSNR", "LPIPS↓", "JSX rend."]
    print(f"{'model':24s}" + "".join(f"{c:>10s}" for c in cols))
    for m in METHODS:
        ev, vis = load(f"{m}_eval_results.json"), visual(m)
        if not ev or not vis:
            print(f"{LABEL[m]:24s}  pending")
            continue
        row = [ev["avg_parse_success_rate"] * 100, ev["avg_bleu4"], ev["avg_codebleu"],
               np.mean([vis[t]["ssim"] for t in TASKS]), np.mean([vis[t]["psnr"] for t in TASKS]),
               np.mean([vis[t]["lpips"] for t in TASKS]), vis["jsx"]["rend"] * 100]
        print(f"{LABEL[m]:24s}" + "".join(f"{x:>10.3f}" if abs(x) < 10 else f"{x:>10.2f}" for x in row))
    tc = load("teacher_render_check.json")
    if tc:
        c = tc["test_reference_vs_original_screenshot"]["overall"]
        print(f"{'reference code (ceiling)':24s}{'':>30s}{c['ssim']:>10.3f}{c['psnr']:>10.2f}{c['lpips']:>10.3f}")

    print("\nper task (SSIM / LPIPS / render rate):")
    for m in METHODS:
        vis = visual(m)
        if vis:
            print(f"  {LABEL[m]:24s}" + "  ".join(
                f"{t}: {vis[t]['ssim']:.3f} / {vis[t]['lpips']:.3f} / {vis[t]['rend']:.1%}" for t in TASKS))


def lenient_table():
    header("JSX under the strict (paper) vs lenient (library imports stubbed) harness")
    le, jx = load("jsx_lenient_rerender_results.json"), load("jsx_rerender_results.json")
    if not le:
        print("pending")
        return
    for m in ["base", "qwen2.5", "qlora"]:
        print(f"  {LABEL[m]:24s} library imports {le[m]['n_with_library_imports']:3d}/496   "
              f"rendered {jx[m]['n_rendered']/496:6.1%} -> {le[m]['n_rendered']/496:6.1%}   "
              f"SSIM {jx[m]['avg_ssim']:.3f} -> {le[m]['avg_ssim']:.3f}   LPIPS -> {le[m]['avg_lpips']:.3f}")


def ci_table():
    header("95% bootstrap CIs, paired differences a - b (overall; LPIPS lower is better)")
    b = load("bootstrap_ci.json")
    if not b:
        print("pending")
        return
    for name in ["ssim", "lpips", "psnr", "codebleu", "bleu4"]:
        for key, d in b["metrics"][name]["paired"].items():
            a, o = key.split("_minus_")
            d = d["overall"]
            print(f"  {name:9s} {LABEL[a]:>22s} - {LABEL[o]:24s} {d['value']:+9.4f} "
                  f"[{d['ci_low']:+.4f}, {d['ci_high']:+.4f}]  p={d['p_value']:.3f}")


def batch_latencies_from_log(m):
    """Per-sample latency of each batch from the tqdm postfix (runs saved before
    evaluate.py stored per_sample_latency_s); 0.1 s resolution."""
    log = LOGS / f"latency_{m}.log"
    if not log.exists():
        return None
    seen = {}
    for n, lat in re.findall(r"(\d+)/\d+ \[[^\]]*?[\d.]+s/sample, ([\d.]+)s/sample \|",
                             log.read_text(encoding="utf-8", errors="ignore")):
        seen.setdefault(int(n), float(lat))
    out, prev = [], 0
    for n in sorted(seen):
        out += [seen[n]] * (n - prev)
        prev = n
    return out


def latency_table():
    header("Controlled latency: same test samples (in file order), batch size 8, greedy, "
           "max 1,536 new tokens")
    rows = {}
    for m in METHODS:
        ev, pr = load(f"{m}_latency_eval_results.json"), load(f"{m}_latency_predictions.json")
        if ev and pr:
            lat = ev.get("per_sample_latency_s") or batch_latencies_from_log(m)
            rows[m] = (ev, lat, pr)
    if not rows:
        print("pending")
        return
    n_shared = min(len(lat) for _, lat, _ in rows.values())
    print(f"{'model':24s}{'n':>4s}{'s/sample':>10s}{'s/sample':>10s}{'peak VRAM':>11s}"
          f"{'mean tok':>10s}{'cap hits':>10s}")
    print(f"{'':24s}{'':>4s}{'(all n)':>10s}{f'(first {n_shared})':>10s}")
    for m in METHODS:
        if m not in rows:
            print(f"{LABEL[m]:24s}  pending")
            continue
        # samples are image-major (html, jsx, vue per image), so a prefix of
        # n_shared samples is the first n_shared / 3 entries of every task
        ev, lat, pr = rows[m]
        toks = [s["n_generated_tokens"] for t in TASKS for s in pr[t][:n_shared // 3]]
        print(f"{LABEL[m]:24s}{len(lat):>4d}{ev['avg_inference_latency_s']:>10.2f}"
              f"{np.mean(lat[:n_shared]):>10.2f}{ev['peak_vram_gb']:>9.2f}GB"
              f"{np.mean(toks):>10.0f}{np.mean(np.array(toks) >= 1536):>10.1%}")


def paired_bootstrap(a, b, n_boot=10000, seed=0):
    """Mean of a - b over pages, 95% percentile CI and two-sided p (sign flips of the CI)."""
    d = np.asarray(a, float) - np.asarray(b, float)
    rng = np.random.default_rng(seed)
    boots = d[rng.integers(0, len(d), size=(n_boot, len(d)))].mean(axis=1)
    p = 2 * min(np.mean(boots <= 0), np.mean(boots >= 0))
    return d.mean(), np.percentile(boots, 2.5), np.percentile(boots, 97.5), min(p, 1.0)


def design2code_table():
    header("Design2Code: random 100 of 484 real web pages (first screen, seed 42)")
    d, ps = load("design2code_results.json"), load("design2code_per_sample.json")
    if not d:
        print("pending")
        return
    r = d["reference"]["html"]
    print(f"  {'real HTML (ceiling)':24s} SSIM {r['ssim']:.3f}  PSNR {r['psnr']:.2f}  LPIPS {r['lpips']:.3f}")
    for m in METHODS:
        if m not in d:
            print(f"  {LABEL[m]:24s} not run")
            continue
        o = d[m]["overall"]
        rend = " / ".join(f"{d[m][t]['rendered'] / d[m][t]['n']:.0%}" for t in TASKS)
        print(f"  {LABEL[m]:24s} SSIM {o['ssim']:.3f}  PSNR {o['psnr']:.2f}  LPIPS {o['lpips']:.3f}  "
              f"rendered html/jsx/vue {rend}  (n={d[m]['html']['n']} pages)")
    print("  per task (SSIM / LPIPS):")
    for m in METHODS:
        if m in d:
            print(f"    {LABEL[m]:22s}" + "  ".join(
                f"{t}: {d[m][t]['ssim']:.3f} / {d[m][t]['lpips']:.3f}" for t in TASKS))
    if not ps:
        return
    n = d["n_common_pages"]
    print(f"\n  paired bootstrap over the {n} shared pages (page = mean of its 3 tasks; 10,000 resamples)")
    page = {m: {k: np.mean([ps[m][t][k][:n] for t in TASKS], axis=0) for k in ["ssim", "psnr", "lpips"]}
            for m in METHODS if m in ps}
    for a, b in [("qlora", "base"), ("qlora", "qlora_3b"), ("qlora_3b", "base")]:
        if a in page and b in page:
            for k in ["ssim", "psnr", "lpips"]:
                v, lo, hi, p = paired_bootstrap(page[a][k], page[b][k])
                print(f"    {k:6s} {LABEL[a]:>9s} - {LABEL[b]:20s} {v:+.4f} [{lo:+.4f}, {hi:+.4f}]  p={p:.3f}")


if __name__ == "__main__":
    main_table()
    lenient_table()
    ci_table()
    latency_table()
    design2code_table()
