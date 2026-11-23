"""Recompute LPIPS for all three tasks from the corrected renders.

Runs after rerender_jsx.py and rerender_html_vue.py. Uses the saved corrected
renders, so no browser work is needed.

Failed renders (no screenshot) are assigned the worst LPIPS value of 1.0,
matching the zero assigned to SSIM/PSNR, rather than being dropped from the
average as in the original implementation.

Usage:  py -3.10 recompute_lpips_all.py
"""
import json
from pathlib import Path

import numpy as np
import torch
import lpips as lpips_module
from PIL import Image

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
TEST_JSONL = ROOT / "data" / "test.jsonl"
VIEWPORT_W, VIEWPORT_H = 1280, 960
# LPIPS is evaluated on a downscaled copy. The AlexNet backbone was trained on
# small crops, so full 1280x960 input costs a great deal of compute without
# changing the relative ordering of the models; 512x384 keeps the same aspect
# ratio and runs several times faster.
LPIPS_W, LPIPS_H = 512, 384
METHODS = ["base", "qwen2.5", "qlora"]
TASKS = ["html", "jsx", "vue"]
FAILED_LPIPS = 1.0

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
print(f"LPIPS device: {DEVICE}")
net = lpips_module.LPIPS(net="alex", verbose=False).to(DEVICE).eval()
_cache: dict = {}


def to_tensor(arr):
    t = torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).float() / 255.0
    return (t * 2.0 - 1.0).to(DEVICE)


def original_tensor(path):
    if path not in _cache:
        arr = np.array(Image.open(path).convert("RGB").resize((LPIPS_W, LPIPS_H)))
        _cache[path] = to_tensor(arr)
    return _cache[path]


def build_image_map():
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


def main():
    imap = build_image_map()
    n = sum(1 for k in imap if k[0] == "html")
    print(f"samples per task: {n}\n")

    # Resume support: per-(method,task) partial results are checkpointed so an
    # interrupted run does not have to start over.
    ckpt = RESULTS / "lpips_partial.json"
    out = json.loads(ckpt.read_text()) if ckpt.exists() else {}

    for m in METHODS:
        out.setdefault(m, {})
        for t in TASKS:
            if t in out[m]:
                print(f"  {m:8s} {t:5s} LPIPS = {out[m][t]:.4f}  (cached)", flush=True)
                continue
            rdir = RESULTS / f"{m}_renders_{t}_fixed"
            vals = []
            with torch.no_grad():
                for i in range(n):
                    shot = rdir / f"{t}_{i}.png"
                    op = imap.get((t, i))
                    if not op or not shot.exists():
                        vals.append(FAILED_LPIPS)
                        continue
                    rend = np.array(Image.open(shot).convert("RGB")
                                    .resize((LPIPS_W, LPIPS_H)))
                    vals.append(float(net(original_tensor(op), to_tensor(rend)).item()))
            out[m][t] = round(float(np.mean(vals)), 4)
            ckpt.write_text(json.dumps(out, indent=2), encoding="utf-8")
            print(f"  {m:8s} {t:5s} LPIPS = {out[m][t]:.4f}", flush=True)
        out[m]["overall"] = round(float(np.mean([out[m][t] for t in TASKS])), 4)
        ckpt.write_text(json.dumps(out, indent=2), encoding="utf-8")
        print(f"  {m:8s} OVERALL = {out[m]['overall']:.4f}\n", flush=True)

    (RESULTS / "lpips_all_recomputed.json").write_text(json.dumps(out, indent=2),
                                                       encoding="utf-8")
    print("=" * 60)
    print("CORRECTED LPIPS (lower is better)")
    print("=" * 60)
    print(f"{'method':10s} {'HTML':>8s} {'JSX':>8s} {'Vue':>8s} {'OVERALL':>9s}")
    for m in METHODS:
        r = out[m]
        print(f"{m:10s} {r['html']:>8.4f} {r['jsx']:>8.4f} {r['vue']:>8.4f} {r['overall']:>9.4f}")
    print(f"\nsaved -> {RESULTS / 'lpips_all_recomputed.json'}")


if __name__ == "__main__":
    main()
