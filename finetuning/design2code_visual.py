"""Render and score Design2Code predictions (reviewers R1.2 / R3.8).

Uses exactly the visual pipeline of the paper (visual_eval.py wrappers, 1280x960
viewport, blank page = failed render scored at the worst value; SSIM/PSNR via
rerender_html_vue.score, LPIPS AlexNet at 512x384). The reference image is the
first-screen crop made by prepare_design2code.py.

"reference" renders each page's real Design2Code HTML (HTML task only) as a
ceiling for the harness on real pages.

Reads results/{method}_design2code_predictions.json (evaluate.py --tag design2code).
Writes results/design2code_results.json and results/design2code_per_sample.json.

Usage:  py -3.10 design2code_visual.py [--methods base qlora ...] [--concurrency 6]
"""
import argparse
import asyncio
import json
import os
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image

from rerender_html_vue import score, VIEWPORT_W, VIEWPORT_H

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
RENDERS = RESULTS / "d2c_renders"
TEST_JSONL = ROOT / "data" / "design2code_test.jsonl"
SCREENS = ROOT.parent / "data" / "design2code" / "screens"
TASKS = ["html", "jsx", "vue"]
ALL_METHODS = ["base", "qwen2.5", "qlora", "qlora_3b"]

_src = (ROOT / "visual_eval.py").read_text(encoding="utf-8")
_ns: dict = {}
exec(_src[_src.index("def _prepare_jsx_for_browser"):_src.index("WRAPPERS = {")], _ns)
WRAPPERS = {"html": _ns["wrap_html_as_page"], "jsx": _ns["wrap_jsx_as_html"],
            "vue": _ns["wrap_vue_as_html"]}
HAS_CONTENT_JS = ("() => { const b=document.body; if(!b) return false;"
                  " const t=(b.innerText||'').trim();"
                  " const n=b.querySelectorAll('*').length;"
                  " return t.length>0 || n>3; }")


def load_test():
    """Per task: list of (screen crop path, reference code), in evaluate.py order."""
    out = {t: [] for t in TASKS}
    # split on "\n" only: real pages contain U+2028 etc., which splitlines() breaks on
    for line in TEST_JSONL.read_text(encoding="utf-8").split("\n"):
        if not line.strip():
            continue
        user, assistant = json.loads(line)["messages"]
        prompt = next(p["text"] for p in user["content"] if p["type"] == "text")
        image = next(p["image"] for p in user["content"] if p["type"] == "image")
        task = ("jsx" if "React JSX" in prompt or "GeneratedComponent" in prompt
                else "vue" if "Vue 3" in prompt or "SFC" in prompt else "html")
        out[task].append((str(SCREENS / Path(image).name), assistant["content"]))
    return out


async def render_all(browser, codes, task, outdir, concurrency):
    outdir.mkdir(parents=True, exist_ok=True)
    ctx = await browser.new_context(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})
    pages = [await ctx.new_page() for _ in range(concurrency)]
    queue: asyncio.Queue = asyncio.Queue()
    for pg in pages:
        await queue.put(pg)

    async def one(i, code):
        out = outdir / f"{task}_{i}.png"
        tmp = tempfile.NamedTemporaryFile(suffix=".html", delete=False, mode="w", encoding="utf-8")
        tmp.write(WRAPPERS[task](code))
        tmp.close()
        page = await queue.get()
        try:
            await page.goto(Path(tmp.name).as_uri(), wait_until="networkidle", timeout=20000)
            await page.wait_for_timeout(600 if task == "jsx" else 500)
            if await page.evaluate(HAS_CONTENT_JS):
                await page.screenshot(path=str(out), full_page=False)
            elif out.exists():
                out.unlink()
        except Exception:
            if out.exists():
                out.unlink()
        finally:
            await queue.put(page)
            os.unlink(tmp.name)

    await asyncio.gather(*(one(i, c) for i, c in enumerate(codes)))
    await ctx.close()


def lpips_scores(pairs):
    import torch
    import lpips as lpips_module
    net = lpips_module.LPIPS(net="alex", verbose=False).eval()

    def tens(path):
        arr = np.array(Image.open(path).convert("RGB").resize((512, 384)))
        return torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).float() / 255.0 * 2.0 - 1.0

    vals = []
    with torch.no_grad():
        for orig, render in pairs:
            vals.append(float(net(tens(orig), tens(render)).item()) if render.exists() else 1.0)
    return vals


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--methods", nargs="+", default=None)
    ap.add_argument("--concurrency", type=int, default=6)
    args = ap.parse_args()

    test = load_test()
    methods = args.methods or [m for m in ALL_METHODS
                               if (RESULTS / f"{m}_design2code_predictions.json").exists()]
    runs = []
    for m in methods:
        preds = json.loads((RESULTS / f"{m}_design2code_predictions.json").read_text(encoding="utf-8"))
        runs += [(m, t, [s["prediction"] for s in preds[t]]) for t in TASKS]
    # Pages are in random order and each model covers a prefix; the ceiling uses the
    # largest prefix evaluated, the cross-model comparison the shortest one.
    n_pages = max(len(c) for _, _, c in runs)
    n_common = min(len(c) for _, _, c in runs)
    runs.insert(0, ("reference", "html", [code for _, code in test["html"][:n_pages]]))

    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--disable-gpu"])
        for m, t, codes in runs:
            print(f"rendering {m}/{t} ({len(codes)})", flush=True)
            await render_all(browser, codes, t, RENDERS / f"{m}_{t}", args.concurrency)
        await browser.close()

    results, per_sample = {}, {}
    for m, t, codes in runs:
        pairs = [(test[t][i][0], RENDERS / f"{m}_{t}" / f"{t}_{i}.png") for i in range(len(codes))]
        sp = [score(o, str(r)) for o, r in pairs]
        lp = lpips_scores(pairs)
        per_sample.setdefault(m, {})[t] = {"ssim": [s["ssim"] for s in sp],
                                           "psnr": [s["psnr"] for s in sp], "lpips": lp,
                                           "rendered": [r.exists() for _, r in pairs]}
        results.setdefault(m, {})[t] = {
            "n": len(codes), "rendered": int(sum(r.exists() for _, r in pairs)),
            "ssim": round(float(np.mean([s["ssim"] for s in sp])), 4),
            "psnr": round(float(np.mean([s["psnr"] for s in sp])), 2),
            "lpips": round(float(np.mean(lp)), 4),
        }
        print(f"  {m:10s} {t:5s} rendered {results[m][t]['rendered']}/{len(codes)}  "
              f"SSIM {results[m][t]['ssim']:.4f}  PSNR {results[m][t]['psnr']:.2f}  "
              f"LPIPS {results[m][t]['lpips']:.4f}", flush=True)
    for m in methods:
        results[m]["overall"] = {k: round(float(np.mean([results[m][t][k] for t in TASKS])), 4)
                                 for k in ["ssim", "psnr", "lpips"]}
        results[m]["overall_common_pages"] = {
            k: round(float(np.mean([np.mean(per_sample[m][t][k][:n_common]) for t in TASKS])), 4)
            for k in ["ssim", "psnr", "lpips"]}
    results["n_common_pages"] = n_common

    (RESULTS / "design2code_results.json").write_text(json.dumps(results, indent=2))
    (RESULTS / "design2code_per_sample.json").write_text(json.dumps(per_sample))

    print("\n" + "=" * 70)
    print("DESIGN2CODE (484 real pages, first screen) -- overall = mean of HTML/JSX/Vue")
    print("=" * 70)
    r = results["reference"]["html"]
    print(f"  real HTML (ceiling)  SSIM {r['ssim']:.4f}  PSNR {r['psnr']:.2f}  LPIPS {r['lpips']:.4f}")
    for m in methods:
        o, c = results[m]["overall"], results[m]["overall_common_pages"]
        rend = " / ".join(f"{results[m][t]['rendered']}" for t in TASKS)
        print(f"  {m:20s} SSIM {o['ssim']:.4f}  PSNR {o['psnr']:.2f}  LPIPS {o['lpips']:.4f}  "
              f"rendered html/jsx/vue {rend}  (n={results[m]['html']['n']} pages)")
        print(f"  {'':20s} on the {n_common} pages all models share: SSIM {c['ssim']:.4f}  "
              f"PSNR {c['psnr']:.2f}  LPIPS {c['lpips']:.4f}")
    print(f"\nsaved -> {RESULTS / 'design2code_results.json'}")


if __name__ == "__main__":
    asyncio.run(main())
