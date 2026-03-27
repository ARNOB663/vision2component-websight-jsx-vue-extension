"""
Visual fidelity evaluation: render generated code and compare with originals.

Pipeline:
  1. Load predictions JSON from evaluate.py
  2. For each prediction, wrap code in an HTML page with Tailwind CDN
  3. Render with Playwright headless Chromium (Batched & Multi-tab) -> screenshot
  4. Compare with original screenshot using SSIM, PSNR, and GPU-accelerated LPIPS

Optimizations:
  - Multi-tab concurrent page rendering (default 10 tabs)
  - Original image caching (avoids repeated disk I/O + resize)
  - ThreadPool for CPU-bound SSIM/PSNR computation
  - GPU-accelerated LPIPS (batched)
  - Resumable with periodic progress checkpoints
  - Skip re-rendering screenshots that exist on disk (for resume)

Prerequisites:
    pip install playwright scikit-image lpips
    python -m playwright install chromium

Usage:
    python finetuning/visual_eval.py --method qlora
    python finetuning/visual_eval.py --method base
    python finetuning/visual_eval.py --method qwen2.5
    python finetuning/visual_eval.py --method qlora --max-samples 50
    python finetuning/visual_eval.py --method qlora --concurrent-pages 15 --render-wait 300
"""

import os
import json
import argparse
import asyncio
import tempfile
import concurrent.futures
from pathlib import Path

import numpy as np
from PIL import Image
from skimage.metrics import structural_similarity as ssim
from skimage.metrics import peak_signal_noise_ratio as psnr
from tqdm import tqdm

try:
    import torch
    import lpips as lpips_module
    
    DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
    _LPIPS_FN = lpips_module.LPIPS(net='alex', verbose=False).to(DEVICE)
    _LPIPS_FN.eval()
    HAS_LPIPS = True
    print(f"  [OPT] LPIPS loaded on {DEVICE}")
except ImportError:
    HAS_LPIPS = False
    _LPIPS_FN = None
    DEVICE = "cpu"
    print("  [WARN] lpips not installed. Run: pip install lpips")
except Exception as e:
    HAS_LPIPS = False
    _LPIPS_FN = None
    DEVICE = "cpu"
    print(f"  [WARN] LPIPS init failed: {e}")

# ═══════════════════════════════════════════════════════════════════════════════
# PATHS & CONFIG
# ═══════════════════════════════════════════════════════════════════════════════
PROJECT_ROOT = Path(__file__).resolve().parent.parent
RESULTS_DIR = PROJECT_ROOT / "finetuning" / "results"
IMG_DIR = PROJECT_ROOT / "data" / "websight_50k" / "images"

VIEWPORT_W = 1280
VIEWPORT_H = 960

DEFAULT_CONCURRENT_PAGES = 10
DEFAULT_RENDER_WAIT_MS = 500
MAX_EVAL_WORKERS = 4

# Cache for resized original images (avoid repeated disk I/O + PIL resize)
_ORIGINAL_IMAGE_CACHE: dict = {}


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
async def render_screenshot(page, html_content: str, output_path: str, render_wait_ms: int = DEFAULT_RENDER_WAIT_MS):
    """Render HTML content in Playwright and save screenshot."""
    tmp = tempfile.NamedTemporaryFile(suffix=".html", delete=False, mode="w", encoding="utf-8")
    tmp.write(html_content)
    tmp.close()

    try:
        await page.goto(f"file:///{tmp.name}", wait_until="networkidle", timeout=15000)
        await page.wait_for_timeout(render_wait_ms)
        await page.screenshot(path=output_path, full_page=False)
    except Exception as e:
        pass  # Silently skip renderer crashes (usually syntactically broken code)
    finally:
        os.unlink(tmp.name)


def load_model(args):
    """Loads processor and base model with PEFT adapter (if qlora)."""
    from transformers import AutoProcessor
    from peft import PeftModel

    is_qlora = args.method == "qlora"
    is_qwen2_5 = args.method == "qwen2.5"
    
    # Placeholder for model directories, as they are not defined in the original script.
    # You would typically define these paths based on your project structure or arguments.
    LOCAL_MODEL_DIR = PROJECT_ROOT / "models" / "qwen2_vl_base" # Example path
    LOCAL_MODEL_QWEN2_5_DIR = PROJECT_ROOT / "models" / "qwen2_5_vl_base" # Example path

    base_model_path = str(LOCAL_MODEL_QWEN2_5_DIR) if is_qwen2_5 else str(LOCAL_MODEL_DIR)

    # 1) Processor
    processor = AutoProcessor.from_pretrained(base_model_path)
    if processor.tokenizer.pad_token is None:
        processor.tokenizer.pad_token = processor.tokenizer.eos_token

    # 2) Base Model
    model_kwargs = {
        "device_map": "auto",
        "attn_implementation": "sdpa",
        "torch_dtype": torch.bfloat16
    }
    
    # Optional 4-bit load for QLoRA
    if is_qlora:
        from transformers import BitsAndBytesConfig
        model_kwargs["quantization_config"] = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_compute_dtype=torch.bfloat16,
            bnb_4bit_quant_type="nf4",
            bnb_4bit_use_double_quant=True
        )

    print(f"Loading base model from: {base_model_path}")
    if is_qwen2_5:
        from transformers import Qwen2_5_VLForConditionalGeneration
        model = Qwen2_5_VLForConditionalGeneration.from_pretrained(base_model_path, **model_kwargs)
    else:
        from transformers import Qwen2VLForConditionalGeneration
        model = Qwen2VLForConditionalGeneration.from_pretrained(base_model_path, **model_kwargs)
    
    # 3) Load PEFT adapter if qlora
    if is_qlora:
        print(f"Loading PEFT adapter for QLoRA from: {args.method_path}")
        model = PeftModel.from_pretrained(model, args.method_path)
        model = model.merge_and_unload() # Merge LoRA weights for inference
    
    model.eval()
    return processor, model


def _get_cached_original(original_path: str) -> np.ndarray:
    """Return the resized original image array, using a cache to avoid repeated I/O."""
    if original_path in _ORIGINAL_IMAGE_CACHE:
        return _ORIGINAL_IMAGE_CACHE[original_path]
    arr = np.array(Image.open(original_path).convert("RGB").resize((VIEWPORT_W, VIEWPORT_H)))
    _ORIGINAL_IMAGE_CACHE[original_path] = arr
    return arr


def compare_images(original_path: str, rendered_path: str) -> dict:
    """Compute SSIM, PSNR, and LPIPS between original and rendered screenshots."""
    try:
        if not os.path.exists(rendered_path):
            raise ValueError("Rendered screenshot missing (likely syntax error in code).")

        orig = _get_cached_original(original_path)
        rend = np.array(Image.open(rendered_path).convert("RGB").resize((VIEWPORT_W, VIEWPORT_H)))

        ssim_val = ssim(orig, rend, channel_axis=2, data_range=255)
        psnr_val = psnr(orig, rend, data_range=255)

        # Cap PSNR at 100 dB for identical images (avoids inf poisoning averages)
        if not np.isfinite(psnr_val) or psnr_val > 100.0:
            psnr_val = 100.0

        result = {"ssim": round(float(ssim_val), 4), "psnr": round(float(psnr_val), 2)}

        # LPIPS (lower = more similar, GPU accelerated)
        if HAS_LPIPS and _LPIPS_FN is not None:
            try:
                import torch as _t
                orig_t = _t.from_numpy(orig).permute(2, 0, 1).unsqueeze(0).float() / 255.0
                rend_t = _t.from_numpy(rend).permute(2, 0, 1).unsqueeze(0).float() / 255.0
                # LPIPS expects [-1, 1]
                orig_t = orig_t * 2.0 - 1.0
                rend_t = rend_t * 2.0 - 1.0
                
                # Move to GPU if available
                orig_t = orig_t.to(DEVICE)
                rend_t = rend_t.to(DEVICE)
                
                with _t.no_grad():
                    lpips_val = _LPIPS_FN(orig_t, rend_t).item()
                result["lpips"] = round(float(lpips_val), 4)
            except Exception as e:
                result["lpips"] = None
        else:
            result["lpips"] = None

        return result
    except Exception as e:
        return {"ssim": 0.0, "psnr": 0.0, "lpips": None, "error": str(e)}


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN LOOP
# ═══════════════════════════════════════════════════════════════════════════════
def save_visual_progress(progress_path: Path, payload: dict):
    """Atomically save visual evaluation progress checkpoint."""
    tmp_path = progress_path.with_suffix(progress_path.suffix + ".tmp")
    with open(tmp_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    os.replace(tmp_path, progress_path)


async def run_visual_eval(
    method: str,
    max_samples: int = None,
    save_every: int = 50,
    auto_resume: bool = True,
    concurrent_pages: int = DEFAULT_CONCURRENT_PAGES,
    render_wait_ms: int = DEFAULT_RENDER_WAIT_MS,
):
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
    progress_path = RESULTS_DIR / f"{method}_visual_progress.json"

    visual_results = {}
    completed_total = 0

    if auto_resume and progress_path.exists():
        try:
            with open(progress_path, "r", encoding="utf-8") as f:
                checkpoint = json.load(f)
            visual_results = checkpoint.get("visual_results_partial", {}) or {}
            completed_total = int(checkpoint.get("completed_total", 0))
            print(f"Resuming visual eval from checkpoint: {completed_total} completed")
        except Exception as e:
            print(f"  [WARN] Could not load checkpoint {progress_path}: {e}")
            visual_results = {}
            completed_total = 0

    print(f"\n{'='*60}")
    print(f"  VISUAL EVALUATION: {method.upper()}")
    print(f"  Optimizations: {concurrent_pages} Tabs, threadpool={MAX_EVAL_WORKERS}, LPIPS={DEVICE}")
    print(f"  Render wait:  {render_wait_ms}ms, image cache=ON")
    print(f"{'='*60}\n")

    # Threadpool for CPU-bound SSIM and GPU-bound LPIPS processing
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=MAX_EVAL_WORKERS)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": VIEWPORT_W, "height": VIEWPORT_H}
        )
        
        # Pool of Playwright pages for concurrency
        pages = [await context.new_page() for _ in range(concurrent_pages)]
        page_queue = asyncio.Queue()
        for page in pages:
            await page_queue.put(page)
            
        semaphore = asyncio.Semaphore(concurrent_pages)

        for task in ["html", "jsx", "vue"]:
            entries = all_predictions.get(task, [])
            if not entries:
                continue

            if max_samples:
                entries = entries[:max_samples]

            wrapper = WRAPPERS[task]
            task_data = visual_results.get(task, {}) if isinstance(visual_results.get(task, {}), dict) else {}
            task_scores = task_data.get("per_sample", []) if isinstance(task_data.get("per_sample", []), list) else []
            if len(task_scores) > len(entries):
                task_scores = task_scores[:len(entries)]
            start_idx = len(task_scores)

            print(f"  {task.upper()} ({len(entries)} samples):")
            if start_idx > 0:
                print(f"    Resuming {task} from sample {start_idx}/{len(entries)}")
                
            if start_idx >= len(entries):
                continue
                
            task_results_dict = {j: task_scores[j] for j in range(start_idx)}

            pbar = tqdm(total=len(entries) - start_idx, desc=f"  Evaluating {task}", unit="img")

            async def process_entry(i, entry):
                """Acquires a Playwright page, renders the HTML, and computes metrics in a threadpool."""
                render_path = str(render_dir / f"{task}_{i}.png")
                
                # Skip re-rendering if screenshot already exists (resume optimisation)
                if not os.path.exists(render_path):
                    async with semaphore:
                        page = await page_queue.get()
                        try:
                            prediction = entry["prediction"]
                            html_page = wrapper(prediction)
                            await render_screenshot(page, html_page, render_path, render_wait_ms)
                        finally:
                            await page_queue.put(page)

                # Free the browser tab, calculate scores in ThreadPool
                original_img = image_map.get((task, i))
                loop = asyncio.get_running_loop()
                if original_img and os.path.exists(original_img):
                    scores = await loop.run_in_executor(executor, compare_images, original_img, render_path)
                else:
                    scores = {"ssim": 0.0, "psnr": 0.0, "error": "original not found"}
                
                return i, scores

            pending = set()
            for i in range(start_idx, len(entries)):
                pending.add(asyncio.create_task(process_entry(i, entries[i])))
                
            last_saved_total = completed_total
            
            while pending:
                done, pending = await asyncio.wait(pending, return_when=asyncio.FIRST_COMPLETED)
                for task_obj in done:
                    try:
                        i, scores = task_obj.result()
                        task_results_dict[i] = scores
                        completed_total += 1
                        pbar.update(1)
                        
                        if save_every > 0 and (completed_total - last_saved_total) >= save_every:
                            last_saved_total = completed_total
                            
                            # Construct up-to-date partial scores
                            current_scores = [task_results_dict[j] for j in sorted(task_results_dict.keys())]
                            valid_ssim = [s["ssim"] for s in current_scores if "error" not in s]
                            valid_psnr = [s["psnr"] for s in current_scores if "error" not in s]
                            valid_lpips = [s["lpips"] for s in current_scores if "error" not in s and s.get("lpips") is not None]

                            partial_task_summary = {
                                "n_samples": len(entries),
                                "n_rendered": len(valid_ssim),
                                "avg_ssim": round(float(np.mean(valid_ssim)), 4) if valid_ssim else 0.0,
                                "avg_psnr": round(float(np.mean(valid_psnr)), 2) if valid_psnr else 0.0,
                                "avg_lpips": round(float(np.mean(valid_lpips)), 4) if valid_lpips else None,
                                "per_sample": current_scores,
                            }
                            visual_results[task] = partial_task_summary

                            progress_payload = {
                                "method": method,
                                "max_samples": max_samples,
                                "save_every": save_every,
                                "completed_total": completed_total,
                                "visual_results_partial": visual_results,
                            }
                            save_visual_progress(progress_path, progress_payload)
                    except Exception as e:
                        print(f"\nError processing a screenshot: {e}")

            pbar.close()
            
            # Finalize this specific task
            task_scores = [task_results_dict[j] for j in sorted(task_results_dict.keys())]
            valid_ssim = [s["ssim"] for s in task_scores if "error" not in s]
            valid_psnr = [s["psnr"] for s in task_scores if "error" not in s]
            valid_lpips = [s["lpips"] for s in task_scores if "error" not in s and s.get("lpips") is not None]

            task_summary = {
                "n_samples": len(entries),
                "n_rendered": len(valid_ssim),
                "avg_ssim": round(float(np.mean(valid_ssim)), 4) if valid_ssim else 0.0,
                "avg_psnr": round(float(np.mean(valid_psnr)), 2) if valid_psnr else 0.0,
                "std_ssim": round(float(np.std(valid_ssim)), 4) if valid_ssim else 0.0,
                "std_psnr": round(float(np.std(valid_psnr)), 2) if valid_psnr else 0.0,
                "avg_lpips": round(float(np.mean(valid_lpips)), 4) if valid_lpips else None,
                "std_lpips": round(float(np.std(valid_lpips)), 4) if valid_lpips else None,
                "per_sample": task_scores,
            }
            visual_results[task] = task_summary

            print(f"    SSIM:  {task_summary['avg_ssim']:.4f} +/- {task_summary['std_ssim']:.4f}")
            print(f"    PSNR:  {task_summary['avg_psnr']:.2f} +/- {task_summary['std_psnr']:.2f}")
            if task_summary['avg_lpips'] is not None:
                print(f"    LPIPS: {task_summary['avg_lpips']:.4f} +/- {task_summary['std_lpips']:.4f}")

        await browser.close()
    
    executor.shutdown(wait=True)

    # ── Aggregate ──
    all_ssim = []
    all_psnr = []
    all_lpips = []
    for task_data in visual_results.values():
        for s in task_data.get("per_sample", []):
            if "error" not in s:
                all_ssim.append(s["ssim"])
                all_psnr.append(s["psnr"])
                if s.get("lpips") is not None:
                    all_lpips.append(s["lpips"])

    summary = {
        "method": method,
        "avg_ssim": round(float(np.mean(all_ssim)), 4) if all_ssim else 0.0,
        "avg_psnr": round(float(np.mean(all_psnr)), 2) if all_psnr else 0.0,
        "avg_lpips": round(float(np.mean(all_lpips)), 4) if all_lpips else None,
        "total_rendered": len(all_ssim),
        "per_task": {
            task: {k: v for k, v in data.items() if k != "per_sample"}
            for task, data in visual_results.items()
        },
    }

    out_path = RESULTS_DIR / f"{method}_visual_results.json"
    with open(out_path, "w") as f:
        json.dump(summary, f, indent=2)

    if progress_path.exists():
        try:
            progress_path.unlink()
            print(f"  Removed checkpoint: {progress_path}")
        except OSError:
            pass

    print(f"\n{'='*60}")
    print(f"  VISUAL EVAL COMPLETE: {method.upper()}")
    print(f"{'='*60}")
    print(f"  Total rendered: {len(all_ssim)}")
    print(f"  Avg SSIM:       {summary['avg_ssim']:.4f}")
    print(f"  Avg PSNR:       {summary['avg_psnr']:.2f}")
    if summary['avg_lpips'] is not None:
        print(f"  Avg LPIPS:      {summary['avg_lpips']:.4f}")
    print(f"  Results:        {out_path}")
    print(f"  Renders:        {render_dir}\n")


def main():
    parser = argparse.ArgumentParser(description="Visual fidelity evaluation")
    parser.add_argument("--method", required=True, choices=["qlora", "base", "qwen2.5"])
    parser.add_argument("--max-samples", type=int, default=None,
                        help="Max samples per task to evaluate")
    parser.add_argument("--save-every", type=int, default=50,
                        help="Autosave visual progress every N rendered samples (0 disables)")
    parser.add_argument("--no-resume", action="store_true",
                        help="Ignore existing visual progress checkpoint and start from the beginning")
    parser.add_argument("--concurrent-pages", type=int, default=DEFAULT_CONCURRENT_PAGES,
                        help=f"Number of Chromium tabs for parallel rendering (default: {DEFAULT_CONCURRENT_PAGES})")
    parser.add_argument("--render-wait", type=int, default=DEFAULT_RENDER_WAIT_MS,
                        help=f"Milliseconds to wait after page load before screenshot (default: {DEFAULT_RENDER_WAIT_MS})")
    args = parser.parse_args()

    asyncio.run(
        run_visual_eval(
            args.method,
            args.max_samples,
            save_every=args.save_every,
            auto_resume=not args.no_resume,
            concurrent_pages=args.concurrent_pages,
            render_wait_ms=args.render_wait,
        )
    )

if __name__ == "__main__":
    main()

