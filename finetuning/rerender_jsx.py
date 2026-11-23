"""Re-render the JSX task with the fixed browser wrapper and recompute SSIM/PSNR.

Why this exists
---------------
The original JSX visual evaluation produced an identical score (0.748) for all
three models. Two bugs caused it:

  1. Generated components are ES modules (`import React ...` / `export default`).
     Inside `<script type="text/babel">` the `import` statement is a syntax
     error that aborts the whole block, so nothing ever mounted.
  2. The unpinned `@babel/standalone` CDN build now ships ESM and fails with
     "Cannot use import statement outside a module" even for trivial input.

Both are fixed in visual_eval.py (`_prepare_jsx_for_browser`, pinned CDN, and a
blank-page check so a failed render scores zero instead of matching the mostly
white reference).

This script re-renders ONLY the JSX task from the saved predictions -- no model
inference is required -- and reports the corrected per-model numbers.

Usage:  py -3.10 rerender_jsx.py [--max-samples N] [--concurrency N]
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

# Reuse the fixed wrapper from visual_eval.py without importing the module
# (its top level pulls in torch/lpips, which are not needed here).
_src = (ROOT / "visual_eval.py").read_text(encoding="utf-8")
_ns: dict = {}
exec(_src[_src.index("def _prepare_jsx_for_browser"):_src.index("def wrap_vue_as_html")], _ns)
wrap_jsx_as_html = _ns["wrap_jsx_as_html"]

_orig_cache: dict = {}


def load_original(path: str) -> np.ndarray:
    if path not in _orig_cache:
        _orig_cache[path] = np.array(
            Image.open(path).convert("RGB").resize((VIEWPORT_W, VIEWPORT_H)))
    return _orig_cache[path]


def build_jsx_image_map() -> dict:
    """Map JSX sample index -> original screenshot path (same order as evaluate.py)."""
    mapping, idx = {}, 0
    with open(TEST_JSONL, encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            sample = json.loads(line)
            img, prompt = None, ""
            for part in sample["messages"][0]["content"]:
                if part["type"] == "image":
                    img = part["image"].replace("file:///", "")
                elif part["type"] == "text":
                    prompt = part["text"]
            if "React JSX" in prompt or "GeneratedComponent" in prompt:
                mapping[idx] = img
                idx += 1
    return mapping


def score(original_path: str, render_path: str) -> dict:
    if not original_path or not os.path.exists(original_path):
        return {"ssim": 0.0, "psnr": 0.0, "error": "original missing"}
    if not os.path.exists(render_path):
        # failed render (syntax error / nothing mounted) -> scored zero
        return {"ssim": 0.0, "psnr": 0.0, "error": "render failed"}
    orig = load_original(original_path)
    rend = np.array(Image.open(render_path).convert("RGB").resize((VIEWPORT_W, VIEWPORT_H)))
    s = float(ssim(orig, rend, channel_axis=2, data_range=255))
    p = float(psnr(orig, rend, data_range=255))
    if not np.isfinite(p) or p > 100:
        p = 100.0
    return {"ssim": round(s, 4), "psnr": round(p, 2)}


async def render_method(browser, method: str, image_map: dict,
                        max_samples: int, concurrency: int) -> dict:
    preds = json.loads((RESULTS / f"{method}_predictions.json").read_text(encoding="utf-8"))
    entries = preds["jsx"]
    if max_samples:
        entries = entries[:max_samples]

    outdir = RESULTS / f"{method}_renders_jsx_fixed"
    outdir.mkdir(exist_ok=True)

    ctx = await browser.new_context(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})
    pages = [await ctx.new_page() for _ in range(concurrency)]
    queue: asyncio.Queue = asyncio.Queue()
    for pg in pages:
        await queue.put(pg)

    results: dict = {}
    done_ct = 0
    total = len(entries)

    async def one(i, entry):
        nonlocal done_ct
        out = str(outdir / f"jsx_{i}.png")
        html = wrap_jsx_as_html(entry["prediction"])
        tmp = tempfile.NamedTemporaryFile(suffix=".html", delete=False,
                                          mode="w", encoding="utf-8")
        tmp.write(html)
        tmp.close()
        page = await queue.get()
        try:
            await page.goto("file:///" + tmp.name.replace("\\", "/"),
                            wait_until="networkidle", timeout=20000)
            await page.wait_for_timeout(600)
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
        results[i] = score(image_map.get(i), out)
        done_ct += 1
        if done_ct % 50 == 0:
            print(f"    {method}: {done_ct}/{total}", flush=True)

    await asyncio.gather(*(one(i, e) for i, e in enumerate(entries)))
    await ctx.close()

    per_sample = [results[i] for i in sorted(results)]
    rendered = [r for r in per_sample if "error" not in r]
    failed = len(per_sample) - len(rendered)
    return {
        "method": method,
        "n_samples": len(per_sample),
        "n_rendered": len(rendered),
        "n_failed": failed,
        "avg_ssim": round(float(np.mean([r["ssim"] for r in per_sample])), 4),
        "avg_psnr": round(float(np.mean([r["psnr"] for r in per_sample])), 2),
        "avg_ssim_rendered_only": (round(float(np.mean([r["ssim"] for r in rendered])), 4)
                                   if rendered else 0.0),
        "per_sample": per_sample,
    }


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max-samples", type=int, default=None)
    ap.add_argument("--concurrency", type=int, default=8)
    args = ap.parse_args()

    image_map = build_jsx_image_map()
    print(f"JSX originals mapped: {len(image_map)}")

    from playwright.async_api import async_playwright
    out = {}
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for m in METHODS:
            print(f"\n=== {m} ===", flush=True)
            out[m] = await render_method(browser, m, image_map,
                                         args.max_samples, args.concurrency)
            r = out[m]
            print(f"  rendered {r['n_rendered']}/{r['n_samples']} "
                  f"(failed {r['n_failed']}) | SSIM {r['avg_ssim']} | PSNR {r['avg_psnr']}")
        await browser.close()

    (RESULTS / "jsx_rerender_results.json").write_text(
        json.dumps({m: {k: v for k, v in d.items() if k != "per_sample"}
                    for m, d in out.items()}, indent=2), encoding="utf-8")

    print("\n" + "=" * 66)
    print("CORRECTED JSX VISUAL RESULTS")
    print("=" * 66)
    print(f"{'method':10s} {'rendered':>12s} {'failed':>7s} {'SSIM':>8s} {'PSNR':>8s}")
    for m in METHODS:
        r = out[m]
        print(f"{m:10s} {r['n_rendered']:>6d}/{r['n_samples']:<5d} {r['n_failed']:>7d} "
              f"{r['avg_ssim']:>8.4f} {r['avg_psnr']:>8.2f}")
    print("\n(old paper value was 0.748 for ALL three models)")
    print(f"saved -> {RESULTS / 'jsx_rerender_results.json'}")


if __name__ == "__main__":
    asyncio.run(main())
