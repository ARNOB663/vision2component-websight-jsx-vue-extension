"""Assemble the final Table V / Table VI values from the fully corrected runs.

Sources:
  jsx_rerender_results.json       (JSX  : SSIM, PSNR, renderability)
  html_vue_rerender_results.json  (HTML/Vue: SSIM, PSNR, renderability)
  lpips_all_recomputed.json       (LPIPS for all three tasks)

All three tasks now use identical methodology: a page that renders no visible
content is a failed render and is scored at the worst value of each metric
(0 for SSIM/PSNR, 1 for LPIPS) instead of being screenshotted blank or dropped.

Usage:  py -3.10 final_tables.py
"""
import json
from pathlib import Path

RESULTS = Path(__file__).resolve().parent / "results"
METHODS = ["base", "qwen2.5", "qlora"]
LABEL = {"base": "Base (2B)", "qwen2.5": "Qwen2.5 (3B)", "qlora": "QLoRA (2B)"}

jsxr = json.loads((RESULTS / "jsx_rerender_results.json").read_text())
hv = json.loads((RESULTS / "html_vue_rerender_results.json").read_text())
lp = json.loads((RESULTS / "lpips_all_recomputed.json").read_text())

# per-task assembly
T = {}
for m in METHODS:
    T[m] = {
        "html": {"ssim": hv[m]["html"]["avg_ssim"], "psnr": hv[m]["html"]["avg_psnr"],
                 "rend": hv[m]["html"]["n_rendered"], "n": hv[m]["html"]["n_samples"]},
        "jsx":  {"ssim": jsxr[m]["avg_ssim"], "psnr": jsxr[m]["avg_psnr"],
                 "rend": jsxr[m]["n_rendered"], "n": jsxr[m]["n_samples"]},
        "vue":  {"ssim": hv[m]["vue"]["avg_ssim"], "psnr": hv[m]["vue"]["avg_psnr"],
                 "rend": hv[m]["vue"]["n_rendered"], "n": hv[m]["vue"]["n_samples"]},
    }

print("=" * 78)
print("TABLE VI  --  per-task (SSIM + renderability)")
print("=" * 78)
for task in ["html", "jsx", "vue"]:
    print(f"\n[{task.upper()}]")
    print(f"  {'model':14s} {'SSIM':>8s} {'PSNR':>8s} {'rendered':>14s} {'rend %':>8s}")
    for m in METHODS:
        d = T[m][task]
        pct = d["rend"] / d["n"] * 100
        print(f"  {LABEL[m]:14s} {d['ssim']:>8.4f} {d['psnr']:>8.2f} "
              f"{d['rend']:>6d}/{d['n']:<6d} {pct:>7.1f}%")

print("\n" + "=" * 78)
print("TABLE V  --  overall (mean of HTML, JSX, Vue)")
print("=" * 78)
print(f"{'model':14s} {'SSIM':>8s} {'PSNR':>8s} {'LPIPS':>8s}")
overall = {}
for m in METHODS:
    s = sum(T[m][t]["ssim"] for t in ["html", "jsx", "vue"]) / 3
    p = sum(T[m][t]["psnr"] for t in ["html", "jsx", "vue"]) / 3
    l = lp[m]["overall"]
    overall[m] = (s, p, l)
    print(f"{LABEL[m]:14s} {s:>8.4f} {p:>8.2f} {l:>8.4f}")

print("\n" + "=" * 78)
print("PAPER-READY (3 decimals / 2 for PSNR)  + who is best")
print("=" * 78)
bs = max(METHODS, key=lambda m: overall[m][0])
bp = max(METHODS, key=lambda m: overall[m][1])
bl = min(METHODS, key=lambda m: overall[m][2])
print(f"  SSIM      {' & '.join(f'{overall[m][0]:.3f}' for m in METHODS)}   best: {LABEL[bs]}")
print(f"  PSNR (dB) {' & '.join(f'{overall[m][1]:.2f}' for m in METHODS)}   best: {LABEL[bp]}")
print(f"  LPIPS     {' & '.join(f'{overall[m][2]:.3f}' for m in METHODS)}   best: {LABEL[bl]}")

print("\n" + "=" * 78)
print("CLAIMS TO UPDATE")
print("=" * 78)
gain = (overall["qlora"][0] - overall["base"][0]) / overall["base"][0] * 100
print(f"  QLoRA vs Base SSIM gain : {gain:+.1f}%   (paper currently says +146.3%)")
print(f"  QLoRA SSIM {overall['qlora'][0]:.3f} vs Qwen2.5 {overall['qwen2.5'][0]:.3f}")
print("\n  Renderability (%) for the Rendered rows:")
for task in ["html", "jsx", "vue"]:
    vals = " / ".join(f"{T[m][task]['rend']/T[m][task]['n']*100:.1f}" for m in METHODS)
    print(f"    {task:5s}: {vals}   (base / qwen2.5 / qlora)")
