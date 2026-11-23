"""Visual check of the generated JSX / Vue targets (reviewer R3.3; supports R1.1 / R3.1).

Parsers only show that the teacher's (Qwen2.5-Coder-7B) components are
syntactically valid. For every image in the fine-tuning set (train/val/test)
this renders the original WebSight HTML, the generated JSX and the generated Vue
SFC with the harness and viewport used in the paper (visual_eval.py wrappers,
1280x960) and measures how closely each component reproduces its source page:

    fidelity = SSIM(render of JSX or Vue, render of the source HTML)

at 640x480 RGB. Both sides come from the same browser and viewport, so a
faithful conversion scores close to 1.

For the 496 test images the reference renders are also saved and scored against
the original WebSight screenshot exactly like the model outputs (SSIM/PSNR at
1280x960, LPIPS at 512x384): the score a model would get by reproducing the
reference code perfectly.

Images are processed test-first, then in a fixed random order, with a
checkpoint every 200 images, so a partial run is still a random sample.

Usage:  py -3.10 teacher_render_check.py [--concurrency 4] [--max-images N] [--limit N]
        --max-images N  render the first N images (test set, then the random order)
                        and report on those; a later run without it completes the rest
        --limit N       smoke test: no report file
"""
import argparse
import asyncio
import ctypes
import io
import json
import os
import random
import sys
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image
from skimage.metrics import structural_similarity as ssim

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
DATA = ROOT / "data"
TASKS = ["html", "jsx", "vue"]
VIEWPORT_W, VIEWPORT_H = 1280, 960
FID_W, FID_H = 640, 480
PARTIAL = RESULTS / "teacher_render_partial.json"

# Same page wrappers as the paper's harness (see rerender_html_vue.py)
_src = (ROOT / "visual_eval.py").read_text(encoding="utf-8")
_ns: dict = {}
exec(_src[_src.index("def _prepare_jsx_for_browser"):_src.index("WRAPPERS = {")], _ns)
WRAPPERS = {"html": _ns["wrap_html_as_page"], "jsx": _ns["wrap_jsx_as_html"],
            "vue": _ns["wrap_vue_as_html"]}
WAIT_MS = {"html": 500, "jsx": 600, "vue": 500}
HAS_CONTENT_JS = ("() => { const b=document.body; if(!b) return false;"
                  " const t=(b.innerText||'').trim();"
                  " const n=b.querySelectorAll('*').length;"
                  " return t.length>0 || n>3; }")


def task_of(prompt):
    if "React JSX" in prompt or "GeneratedComponent" in prompt:
        return "jsx"
    if "Vue 3" in prompt or "SFC" in prompt:
        return "vue"
    return "html"


def load_targets():
    """Ordered {image name: {split, path, test_index, html, jsx, vue}}; test images first."""
    images = {}
    for split in ["test", "train", "val"]:
        test_index = 0
        for line in (DATA / f"{split}.jsonl").read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            user, assistant = json.loads(line)["messages"]
            prompt = next(p["text"] for p in user["content"] if p["type"] == "text")
            path = next(p["image"] for p in user["content"] if p["type"] == "image").replace("file:///", "")
            name = Path(path).name
            entry = images.setdefault(name, {"split": split, "path": path})
            task = task_of(prompt)
            entry[task] = assistant["content"]
            if split == "test" and task == "html":
                entry["test_index"] = test_index
                test_index += 1
    test = [n for n, e in images.items() if e["split"] == "test"]
    rest = [n for n, e in images.items() if e["split"] != "test"]
    random.Random(42).shuffle(rest)
    return {n: images[n] for n in test + rest}


async def render(page, code, task):
    """Screenshot bytes of the rendered page, or None for a failed / blank render."""
    tmp = tempfile.NamedTemporaryFile(suffix=".html", delete=False, mode="w", encoding="utf-8")
    tmp.write(WRAPPERS[task](code))
    tmp.close()
    try:
        await page.goto(Path(tmp.name).as_uri(), wait_until="networkidle", timeout=20000)
        await page.wait_for_timeout(WAIT_MS[task])
        if not await page.evaluate(HAS_CONTENT_JS):
            return None
        return await page.screenshot(full_page=False)
    except Exception:
        return None
    finally:
        os.unlink(tmp.name)


def small(png):
    return np.array(Image.open(io.BytesIO(png)).convert("RGB").resize((FID_W, FID_H)))


async def process(page, name, entry):
    shots = {t: await render(page, entry[t], t) for t in TASKS}
    if "test_index" in entry:
        for t, png in shots.items():
            out = RESULTS / f"reference_renders_{t}" / f"{t}_{entry['test_index']}.png"
            if png:
                out.write_bytes(png)
            elif out.exists():
                out.unlink()
    rec = {"split": entry["split"], **{f"{t}_ok": shots[t] is not None for t in TASKS}}
    base = small(shots["html"]) if shots["html"] else None
    for t in ["jsx", "vue"]:
        rec[f"{t}_vs_html"] = (round(float(ssim(small(shots[t]), base, channel_axis=2, data_range=255)), 4)
                               if base is not None and shots[t] else None)
    return rec


def summarize(per_image):
    recs = list(per_image.values())
    out = {"n_images": len(recs),
           "by_split": {s: sum(r["split"] == s for r in recs) for s in ["train", "val", "test"]}}
    for t in TASKS:
        out[f"{t}_render_rate"] = round(float(np.mean([r[f"{t}_ok"] for r in recs])), 4)
    for t in ["jsx", "vue"]:
        v = np.array([r[f"{t}_vs_html"] for r in recs if r[f"{t}_vs_html"] is not None])
        out[f"{t}_vs_html"] = {
            "n_pairs": int(len(v)),
            "mean": round(float(v.mean()), 4), "median": round(float(np.median(v)), 4),
            "p10": round(float(np.percentile(v, 10)), 4),
            "share_ge_0.9": round(float((v >= 0.9).mean()), 4),
            "share_ge_0.8": round(float((v >= 0.8).mean()), 4),
            "share_lt_0.5": round(float((v < 0.5).mean()), 4),
        }
    return out


def test_ceiling(targets):
    """Score the saved reference renders against the original screenshots, as for model outputs."""
    import torch
    import lpips as lpips_module
    from rerender_html_vue import score

    net = lpips_module.LPIPS(net="alex", verbose=False).eval()

    def tens(path):
        arr = np.array(Image.open(path).convert("RGB").resize((512, 384)))
        return torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).float() / 255.0 * 2.0 - 1.0

    tests = {e["test_index"]: e["path"] for e in targets.values() if "test_index" in e}
    out = {}
    for t in TASKS:
        s, p, lp, ok = [], [], [], 0
        for i, orig in sorted(tests.items()):
            render_path = RESULTS / f"reference_renders_{t}" / f"{t}_{i}.png"
            r = score(orig, str(render_path))
            s.append(r["ssim"])
            p.append(r["psnr"])
            if render_path.exists():
                ok += 1
                with torch.no_grad():
                    lp.append(float(net(tens(orig), tens(render_path)).item()))
            else:
                lp.append(1.0)
        out[t] = {"n": len(tests), "rendered": ok, "ssim": round(float(np.mean(s)), 4),
                  "psnr": round(float(np.mean(p)), 2), "lpips": round(float(np.mean(lp)), 4)}
    out["overall"] = {k: round(float(np.mean([out[t][k] for t in TASKS])), 4) for k in ["ssim", "psnr", "lpips"]}
    return out


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--concurrency", type=int, default=4)
    ap.add_argument("--limit", type=int, default=None)
    ap.add_argument("--max-images", type=int, default=None)
    args = ap.parse_args()

    if sys.platform == "win32":  # stay out of the way of the GPU training job
        ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x4000)

    for t in TASKS:
        (RESULTS / f"reference_renders_{t}").mkdir(exist_ok=True)
    targets = load_targets()
    n = args.limit or args.max_images
    names = list(targets)[:n] if n else list(targets)
    per_image = json.loads(PARTIAL.read_text()) if PARTIAL.exists() else {}
    todo = [n for n in names if n not in per_image]
    print(f"{len(names)} images ({len(per_image)} already done, {len(todo)} to render)", flush=True)

    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--disable-gpu"])
        ctx = await browser.new_context(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})
        queue: asyncio.Queue = asyncio.Queue()
        for n in todo:
            queue.put_nowait(n)

        async def worker():
            page = await ctx.new_page()
            while not queue.empty():
                n = queue.get_nowait()
                per_image[n] = await process(page, n, targets[n])
                if len(per_image) % 200 == 0:
                    PARTIAL.write_text(json.dumps(per_image))
                    print(f"  {len(per_image)}/{len(names)}", flush=True)
            await page.close()

        await asyncio.gather(*(worker() for _ in range(args.concurrency)))
        await browser.close()
    PARTIAL.write_text(json.dumps(per_image))

    report = summarize({n: per_image[n] for n in names})
    if args.limit:  # smoke test: no report file, no test-set scoring
        print(json.dumps(report, indent=2))
        return
    report["test_reference_vs_original_screenshot"] = test_ceiling(targets)
    (RESULTS / "teacher_render_check.json").write_text(json.dumps(report, indent=2))

    print("\n" + "=" * 72)
    print(f"TEACHER TARGETS RENDERED ({report['n_images']} images: {report['by_split']})")
    print("=" * 72)
    print("render rate: " + "  ".join(f"{t} {report[f'{t}_render_rate']:.2%}" for t in TASKS))
    for t in ["jsx", "vue"]:
        f = report[f"{t}_vs_html"]
        print(f"{t.upper()} vs source HTML render: SSIM mean {f['mean']:.4f} median {f['median']:.4f} "
              f"p10 {f['p10']:.4f} | >=0.9: {f['share_ge_0.9']:.1%}  >=0.8: {f['share_ge_0.8']:.1%}  "
              f"<0.5: {f['share_lt_0.5']:.1%}")
    c = report["test_reference_vs_original_screenshot"]
    print("\nTest-set references vs original screenshot (same scoring as model outputs):")
    for t in TASKS + ["overall"]:
        print(f"  {t:8s} SSIM {c[t]['ssim']:.4f}  PSNR {c[t]['psnr']:.2f}  LPIPS {c[t]['lpips']:.4f}"
              + (f"  rendered {c[t]['rendered']}/{c[t]['n']}" if t != "overall" else ""))
    print(f"\nsaved -> {RESULTS / 'teacher_render_check.json'}")


if __name__ == "__main__":
    asyncio.run(main())
