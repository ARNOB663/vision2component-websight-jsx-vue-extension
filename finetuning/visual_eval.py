"""
Visual fidelity evaluation: render generated code and compare with originals.

Pipeline:
  1. Load predictions JSON from evaluate.py
  2. For each prediction, wrap code in an HTML page with Tailwind CDN
  3. Render with Playwright headless Chromium -> screenshot
  4. Compare with original screenshot using SSIM and PSNR

Prerequisites:
    pip install playwright scikit-image
    python -m playwright install chromium

Usage:
    python finetuning/visual_eval.py --method lora
    python finetuning/visual_eval.py --method qlora
    python finetuning/visual_eval.py --method dora
    python finetuning/visual_eval.py --method lora --max-samples 50
"""

import os
import json
import argparse
import asyncio
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image
from skimage.metrics import structural_similarity as ssim
from skimage.metrics import peak_signal_noise_ratio as psnr
from tqdm import tqdm

# ═══════════════════════════════════════════════════════════════════════════════
# PATHS
# ═══════════════════════════════════════════════════════════════════════════════
PROJECT_ROOT = Path(__file__).resolve().parent.parent
RESULTS_DIR = PROJECT_ROOT / "finetuning" / "results"
IMG_DIR = PROJECT_ROOT / "data" / "websight_50k" / "images"

VIEWPORT_W = 1280
VIEWPORT_H = 960


# ═══════════════════════════════════════════════════════════════════════════════
# HTML WRAPPERS
# ═══════════════════════════════════════════════════════════════════════════════
def wrap_jsx_as_html(jsx_code: str) -> str:
    """Wrap JSX into a standalone HTML page using Babel standalone + React CDN."""
    return f"""<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
</head><body>
<div id="root"></div>
<script type="text/babel">
{jsx_code}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(
  typeof GeneratedComponent !== 'undefined' ? GeneratedComponent : () => React.createElement('div', null, 'No component')
));
</script>
</body></html>"""


def wrap_vue_as_html(vue_sfc: str) -> str:
    """Extract template from Vue SFC and render as plain HTML with Tailwind."""
    import re
    template_match = re.search(r'<template>(.*?)</template>', vue_sfc, re.DOTALL)
    template_html = template_match.group(1).strip() if template_match else vue_sfc

    return f"""<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<script src="https://cdn.tailwindcss.com"></script>
</head><body>
{template_html}
</body></html>"""


def wrap_html_as_page(html_code: str) -> str:
    """Wrap raw HTML in a full page with Tailwind if not already a full page."""
    if '<html' in html_code.lower():
        return html_code
    return f"""<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<script src="https://cdn.tailwindcss.com"></script>
</head><body>
{html_code}
</body></html>"""


WRAPPERS = {
    "html": wrap_html_as_page,
    "jsx": wrap_jsx_as_html,
    "vue": wrap_vue_as_html,
}


# ═══════════════════════════════════════════════════════════════════════════════
# SCREENSHOT + COMPARISON
# ═══════════════════════════════════════════════════════════════════════════════
async def render_screenshot(page, html_content: str, output_path: str):
    """Render HTML content in Playwright and save screenshot."""
    tmp = tempfile.NamedTemporaryFile(suffix=".html", delete=False, mode="w", encoding="utf-8")
    tmp.write(html_content)
    tmp.close()

    try:
        await page.goto(f"file:///{tmp.name}", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(1000)
        await page.screenshot(path=output_path, full_page=False)
    except Exception as e:
        print(f"    Render error: {e}")
    finally:
        os.unlink(tmp.name)


def compare_images(original_path: str, rendered_path: str) -> dict:
    """Compute SSIM and PSNR between original and rendered screenshots."""
    try:
        orig = np.array(Image.open(original_path).convert("RGB").resize((VIEWPORT_W, VIEWPORT_H)))
        rend = np.array(Image.open(rendered_path).convert("RGB").resize((VIEWPORT_W, VIEWPORT_H)))

        ssim_val = ssim(orig, rend, channel_axis=2, data_range=255)
        psnr_val = psnr(orig, rend, data_range=255)

        return {"ssim": round(float(ssim_val), 4), "psnr": round(float(psnr_val), 2)}
    except Exception as e:
        return {"ssim": 0.0, "psnr": 0.0, "error": str(e)}


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════
async def run_visual_eval(method: str, max_samples: int = None):
    from playwright.async_api import async_playwright

    predictions_path = RESULTS_DIR / f"{method}_predictions.json"
    if not predictions_path.exists():
        print(f"ERROR: {predictions_path} not found. Run evaluate.py first.")
        return

    with open(predictions_path, "r", encoding="utf-8") as f:
        all_predictions = json.load(f)

    # Load test JSONL to get original image paths
    test_path = PROJECT_ROOT / "finetuning" / "data" / "test.jsonl"
    test_samples = []
    with open(test_path, "r", encoding="utf-8") as f:
        for line in f:
            if line.strip():
                test_samples.append(json.loads(line))

    # Build image path map from test samples
    image_map = {}
    idx_counters = {"html": 0, "jsx": 0, "vue": 0}
    for sample in test_samples:
        user_msg = sample["messages"][0]
        img_path = None
        prompt = ""
        for part in user_msg["content"]:
            if part["type"] == "image":
                img_path = part["image"].replace("file:///", "")
            elif part["type"] == "text":
                prompt = part["text"]

        if "React JSX" in prompt or "GeneratedComponent" in prompt:
            task = "jsx"
        elif "Vue 3" in prompt or "SFC" in prompt:
            task = "vue"
        else:
            task = "html"

        idx = idx_counters[task]
        image_map[(task, idx)] = img_path
        idx_counters[task] += 1

    # Create temp dir for rendered screenshots
    render_dir = RESULTS_DIR / f"{method}_renders"
    render_dir.mkdir(exist_ok=True)

    print(f"\n{'='*60}")
    print(f"  VISUAL EVALUATION: {method.upper()}")
    print(f"{'='*60}\n")

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": VIEWPORT_W, "height": VIEWPORT_H}
        )
        page = await context.new_page()

        visual_results = {}

        for task in ["html", "jsx", "vue"]:
            entries = all_predictions.get(task, [])
            if not entries:
                continue

            if max_samples:
                entries = entries[:max_samples]

            wrapper = WRAPPERS[task]
            task_scores = []

            print(f"  {task.upper()} ({len(entries)} samples):")

            for i, entry in enumerate(tqdm(entries, desc=f"  Rendering {task}", unit="comp")):
                prediction = entry["prediction"]

                html_page = wrapper(prediction)
                render_path = str(render_dir / f"{task}_{i}.png")
                await render_screenshot(page, html_page, render_path)

                original_img = image_map.get((task, i))
                if original_img and os.path.exists(original_img):
                    scores = compare_images(original_img, render_path)
                else:
                    scores = {"ssim": 0.0, "psnr": 0.0, "error": "original not found"}

                task_scores.append(scores)

            valid_ssim = [s["ssim"] for s in task_scores if "error" not in s]
            valid_psnr = [s["psnr"] for s in task_scores if "error" not in s]

            task_summary = {
                "n_samples": len(entries),
                "n_rendered": len(valid_ssim),
                "avg_ssim": round(float(np.mean(valid_ssim)), 4) if valid_ssim else 0.0,
                "avg_psnr": round(float(np.mean(valid_psnr)), 2) if valid_psnr else 0.0,
                "std_ssim": round(float(np.std(valid_ssim)), 4) if valid_ssim else 0.0,
                "std_psnr": round(float(np.std(valid_psnr)), 2) if valid_psnr else 0.0,
                "per_sample": task_scores,
            }
            visual_results[task] = task_summary

            print(f"    SSIM: {task_summary['avg_ssim']:.4f} +/- {task_summary['std_ssim']:.4f}")
            print(f"    PSNR: {task_summary['avg_psnr']:.2f} +/- {task_summary['std_psnr']:.2f}")

        await browser.close()

    # ── Aggregate ──
    all_ssim = []
    all_psnr = []
    for task_data in visual_results.values():
        for s in task_data["per_sample"]:
            if "error" not in s:
                all_ssim.append(s["ssim"])
                all_psnr.append(s["psnr"])

    summary = {
        "method": method,
        "avg_ssim": round(float(np.mean(all_ssim)), 4) if all_ssim else 0.0,
        "avg_psnr": round(float(np.mean(all_psnr)), 2) if all_psnr else 0.0,
        "total_rendered": len(all_ssim),
        "per_task": {
            task: {k: v for k, v in data.items() if k != "per_sample"}
            for task, data in visual_results.items()
        },
    }

    out_path = RESULTS_DIR / f"{method}_visual_results.json"
    with open(out_path, "w") as f:
        json.dump(summary, f, indent=2)

    print(f"\n{'='*60}")
    print(f"  VISUAL EVAL COMPLETE: {method.upper()}")
    print(f"{'='*60}")
    print(f"  Total rendered: {len(all_ssim)}")
    print(f"  Avg SSIM:       {summary['avg_ssim']:.4f}")
    print(f"  Avg PSNR:       {summary['avg_psnr']:.2f}")
    print(f"  Results:        {out_path}")
    print(f"  Renders:        {render_dir}\n")


def main():
    parser = argparse.ArgumentParser(description="Visual fidelity evaluation")
    parser.add_argument("--method", required=True, choices=["lora", "qlora", "dora", "base"])
    parser.add_argument("--max-samples", type=int, default=None,
                        help="Max samples per task to evaluate")
    args = parser.parse_args()

    asyncio.run(run_visual_eval(args.method, args.max_samples))


if __name__ == "__main__":
    main()
