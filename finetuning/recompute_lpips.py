"""Recompute LPIPS for the JSX task using the corrected renders.

The original LPIPS suffered from the same defect as SSIM: every JSX sample
rendered as a blank page, so all three models scored an identical 0.4506, and
that value propagated into the overall LPIPS in Table V.

This script reuses the corrected renders produced by rerender_jsx.py (no
browser work required) and recomputes:
  * per-model JSX LPIPS
  * overall LPIPS = mean(HTML, JSX_new, Vue), keeping the unchanged HTML/Vue
    per-task values from the original run

Failed renders (no screenshot: syntax error or nothing mounted) are scored at
the worst observed distance rather than dropped, mirroring how failed renders
are scored zero for SSIM. Dropping them would reward a model for failing.

Usage:  py -3.10 recompute_lpips.py
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
METHODS = ["base", "qwen2.5", "qlora"]
FAILED_LPIPS = 1.0  # worst-case perceptual distance for a non-render

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
print(f"LPIPS device: {DEVICE}")
net = lpips_module.LPIPS(net="alex", verbose=False).to(DEVICE).eval()

_cache: dict = {}


def to_tensor(arr: np.ndarray) -> torch.Tensor:
    t = torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).float() / 255.0
    return (t * 2.0 - 1.0).to(DEVICE)


def original_tensor(path: str) -> torch.Tensor:
    if path not in _cache:
        arr = np.array(Image.open(path).convert("RGB").resize((VIEWPORT_W, VIEWPORT_H)))
        _cache[path] = to_tensor(arr)
    return _cache[path]


def jsx_image_map() -> dict:
    mapping, idx = {}, 0
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
                mapping[idx] = img
                idx += 1
    return mapping


def main():
    imap = jsx_image_map()
    n_total = len(imap)
    print(f"JSX samples: {n_total}\n")

    out = {}
    for m in METHODS:
        rdir = RESULTS / f"{m}_renders_jsx_fixed"
        vals, n_failed = [], 0
        with torch.no_grad():
            for i in range(n_total):
                shot = rdir / f"jsx_{i}.png"
                orig_path = imap.get(i)
                if not orig_path or not shot.exists():
                    vals.append(FAILED_LPIPS)
                    n_failed += 1
                    continue
                rend = np.array(Image.open(shot).convert("RGB")
                                .resize((VIEWPORT_W, VIEWPORT_H)))
                d = net(original_tensor(orig_path), to_tensor(rend)).item()
                vals.append(float(d))
                if (i + 1) % 100 == 0:
                    print(f"  {m}: {i+1}/{n_total}", flush=True)

        old = json.loads((RESULTS / f"{m}_visual_results.json").read_text(encoding="utf-8"))
        pt = old["per_task"]
        new_jsx = float(np.mean(vals))
        new_overall = float(np.mean([pt["html"]["avg_lpips"], new_jsx, pt["vue"]["avg_lpips"]]))

        out[m] = {
            "jsx_lpips_old": pt["jsx"]["avg_lpips"],
            "jsx_lpips_new": round(new_jsx, 4),
            "overall_lpips_old": old["avg_lpips"],
            "overall_lpips_new": round(new_overall, 4),
            "html_lpips": pt["html"]["avg_lpips"],
            "vue_lpips": pt["vue"]["avg_lpips"],
            "n_failed": n_failed,
        }
        print(f"  {m}: JSX {pt['jsx']['avg_lpips']} -> {new_jsx:.4f} "
              f"| overall {old['avg_lpips']} -> {new_overall:.4f}\n")

    (RESULTS / "lpips_recomputed.json").write_text(json.dumps(out, indent=2),
                                                   encoding="utf-8")

    print("=" * 72)
    print("CORRECTED LPIPS  (lower is better)")
    print("=" * 72)
    print(f"{'model':12s} {'JSX old':>9s} {'JSX new':>9s} {'overall old':>12s} {'overall new':>12s}")
    for m in METHODS:
        r = out[m]
        print(f"{m:12s} {r['jsx_lpips_old']:>9.4f} {r['jsx_lpips_new']:>9.4f} "
              f"{r['overall_lpips_old']:>12.4f} {r['overall_lpips_new']:>12.4f}")
    print(f"\nsaved -> {RESULTS / 'lpips_recomputed.json'}")


if __name__ == "__main__":
    main()
