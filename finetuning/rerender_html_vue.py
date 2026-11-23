"""Re-render the HTML and Vue tasks with the same blank-render check used for JSX.

Motivation
----------
rerender_jsx.py introduced a check that treats a page producing no visible
content as a failed render (scored at the worst metric value) instead of
screenshotting a blank white page, which scores a deceptively high SSIM against
the predominantly white WebSight references.

That check was applied only to JSX, leaving the evaluation inconsistent across
tasks. This script applies the identical procedure to HTML and Vue so that all
three tasks are measured the same way and per-task renderability can be
reported for each.

No model inference is required; renders come from the saved predictions.

Usage:  py -3.10 rerender_html_vue.py [--max-samples N] [--concurrency N]
"""
import argparse
import asyncio
import json
import os
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image
from skimage.metrics import structural_similarity as ssim
from skimage.metrics import peak_signal_noise_ratio as psnr

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
TEST_JSONL = ROOT / "data" / "test.jsonl"

VIEWPORT_W, VIEWPORT_H = 1280, 960
METHODS = ["base", "qwen2.5", "qlora"]
TASKS = ["html", "vue"]

# Reuse the wrappers from visual_eval.py without importing the module
# (its top level pulls in torch/lpips).
_src = (ROOT / "visual_eval.py").read_text(encoding="utf-8")
_ns: dict = {}
exec(_src[_src.index("def _prepare_jsx_for_browser"):_src.index("WRAPPERS = {")], _ns)
WRAPPERS = {"html": _ns["wrap_html_as_page"], "vue": _ns["wrap_vue_as_html"]}

_orig_cache: dict = {}


def load_original(path: str) -> np.ndarray:
    if path not in _orig_cache:
        _orig_cache[path] = np.array(
            Image.open(path).convert("RGB").resize((VIEWPORT_W, VIEWPORT_H)))
    return _orig_cache[path]


def build_image_map() -> dict:
    """(task, index) -> original screenshot path, matching evaluate.py ordering."""
    mapping, idx = {}, {"html": 0, "jsx": 0, "vue": 0}
    with open(TEST_JSONL, encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            s = json.loads(line)
            img, prompt = None, ""
            for part in s["messages"][0]["content"]:
                if part["type"] == "image":
                    img = part["image"].replace("file:///", "")
                elif part["type"] == "text":
                    prompt = part["text"]
            if "React JSX" in prompt or "GeneratedComponent" in prompt:
                t = "jsx"
            elif "Vue 3" in prompt or "SFC" in prompt:
                t = "vue"
            else:
                t = "html"
            mapping[(t, idx[t])] = img
            idx[t] += 1
    return mapping


def score(original_path, render_path) -> dict:
    if not original_path or not os.path.exists(original_path):
        return {"ssim": 0.0, "psnr": 0.0, "error": "original missing"}
    if not os.path.exists(render_path):
        return {"ssim": 0.0, "psnr": 0.0, "error": "render failed"}
    orig = load_original(original_path)
    rend = np.array(Image.open(render_path).convert("RGB").resize((VIEWPORT_W, VIEWPORT_H)))
    s = float(ssim(orig, rend, channel_axis=2, data_range=255))
    p = float(psnr(orig, rend, data_range=255))
    if not np.isfinite(p) or p > 100:
        p = 100.0
    return {"ssim": round(s, 4), "psnr": round(p, 2)}


async def render_task(browser, method, task, image_map, max_samples, concurrency):
    preds = json.loads((RESULTS / f"{method}_predictions.json").read_text(encoding="utf-8"))
    entries = preds[task]
    if max_samples:
        entries = entries[:max_samples]

    outdir = RESULTS / f"{method}_renders_{task}_fixed"
    outdir.mkdir(exist_ok=True)
    wrapper = WRAPPERS[task]

    ctx = await browser.new_context(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})
    pages = [await ctx.new_page() for _ in range(concurrency)]
    queue: asyncio.Queue = asyncio.Queue()
    for pg in pages:
        await queue.put(pg)

    results, done = {}, 0
    total = len(entries)

    async def one(i, entry):
        nonlocal done
        out = str(outdir / f"{task}_{i}.png")
        html = wrapper(entry["prediction"])
        tmp = tempfile.NamedTemporaryFile(suffix=".html", delete=False,
                                          mode="w", encoding="utf-8")
        tmp.write(html)
        tmp.close()
        page = await queue.get()
        try:
            await page.goto("file:///" + tmp.name.replace("\\", "/"),
                            wait_until="networkidle", timeout=20000)
            await page.wait_for_timeout(500)
            has_content = await page.evaluate(
                "() => { const b=document.body; if(!b) return false;"
                " const t=(b.innerText||'').trim();"
                " const n=b.querySelectorAll('*').length;"
                " return t.length>0 || n>3; }")
            if has_content:
                await page.screenshot(path=out, full_page=False)
            elif os.path.exists(out):
                os.remove(out)
        except Exception:
            if os.path.exists(out):
                os.remove(out)
        finally:
            await queue.put(page)
            os.unlink(tmp.name)
        results[i] = score(image_map.get((task, i)), out)
        done += 1
        if done % 100 == 0:
            print(f"    {method}/{task}: {done}/{total}", flush=True)

    await asyncio.gather(*(one(i, e) for i, e in enumerate(entries)))
    await ctx.close()

    per = [results[i] for i in sorted(results)]
    ok = [r for r in per if "error" not in r]
    return {
        "n_samples": len(per),
        "n_rendered": len(ok),
        "n_failed": len(per) - len(ok),
        "avg_ssim": round(float(np.mean([r["ssim"] for r in per])), 4),
        "avg_psnr": round(float(np.mean([r["psnr"] for r in per])), 2),
    }


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max-samples", type=int, default=None)
    ap.add_argument("--concurrency", type=int, default=10)
    args = ap.parse_args()

    imap = build_image_map()
    from playwright.async_api import async_playwright

    out = {}
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for m in METHODS:
            out[m] = {}
            for t in TASKS:
                print(f"\n=== {m} / {t} ===", flush=True)
                r = await render_task(browser, m, t, imap,
                                      args.max_samples, args.concurrency)
                out[m][t] = r
                print(f"  rendered {r['n_rendered']}/{r['n_samples']} "
                      f"| SSIM {r['avg_ssim']} | PSNR {r['avg_psnr']}", flush=True)
        await browser.close()

    (RESULTS / "html_vue_rerender_results.json").write_text(
        json.dumps(out, indent=2), encoding="utf-8")

    print("\n" + "=" * 70)
    print("CORRECTED HTML / VUE RESULTS")
    print("=" * 70)
    for t in TASKS:
        print(f"\n[{t.upper()}]")
        print(f"  {'method':10s} {'rendered':>13s} {'SSIM':>8s} {'PSNR':>8s}")
        for m in METHODS:
            r = out[m][t]
            print(f"  {m:10s} {r['n_rendered']:>6d}/{r['n_samples']:<6d} "
                  f"{r['avg_ssim']:>8.4f} {r['avg_psnr']:>8.2f}")
    print(f"\nsaved -> {RESULTS / 'html_vue_rerender_results.json'}")


if __name__ == "__main__":
    asyncio.run(main())
