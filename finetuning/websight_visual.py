"""Visual metrics for one model's WebSight test predictions (e.g. the new qlora_3b).

Same procedure as the corrected numbers in Tables V/VI (rerender_jsx.py,
rerender_html_vue.py, recompute_lpips_all.py): render every HTML/JSX/Vue
prediction at 1280x960, a blank page is a failed render scored at the worst
value, SSIM/PSNR at 1280x960, LPIPS (AlexNet) at 512x384.

Renders go to results/{method}_renders_{task}_fixed/ like the other models;
summary to results/{method}_visual_fixed.json.

Usage:  py -3.10 websight_visual.py --method qlora_3b [--concurrency 6]
"""
import argparse
import asyncio
import json
from pathlib import Path

import numpy as np

from design2code_visual import render_all, lpips_scores, TASKS
from rerender_html_vue import build_image_map, score

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--method", required=True)
    ap.add_argument("--concurrency", type=int, default=6)
    args = ap.parse_args()

    imap = build_image_map()
    preds = json.loads((RESULTS / f"{args.method}_predictions.json").read_text(encoding="utf-8"))

    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--disable-gpu"])
        for t in TASKS:
            print(f"rendering {args.method}/{t}", flush=True)
            await render_all(browser, [s["prediction"] for s in preds[t]], t,
                             RESULTS / f"{args.method}_renders_{t}_fixed", args.concurrency)
        await browser.close()

    out = {"method": args.method}
    for t in TASKS:
        pairs = [(imap[(t, i)], RESULTS / f"{args.method}_renders_{t}_fixed" / f"{t}_{i}.png")
                 for i in range(len(preds[t]))]
        sp = [score(o, str(r)) for o, r in pairs]
        out[t] = {"n": len(pairs), "rendered": int(sum(r.exists() for _, r in pairs)),
                  "ssim": round(float(np.mean([s["ssim"] for s in sp])), 4),
                  "psnr": round(float(np.mean([s["psnr"] for s in sp])), 2),
                  "lpips": round(float(np.mean(lpips_scores(pairs))), 4)}
        print(f"  {t:5s} rendered {out[t]['rendered']}/{out[t]['n']}  SSIM {out[t]['ssim']:.4f}  "
              f"PSNR {out[t]['psnr']:.2f}  LPIPS {out[t]['lpips']:.4f}", flush=True)
    out["overall"] = {k: round(float(np.mean([out[t][k] for t in TASKS])), 4)
                      for k in ["ssim", "psnr", "lpips"]}
    (RESULTS / f"{args.method}_visual_fixed.json").write_text(json.dumps(out, indent=2))
    print(f"overall: {out['overall']}\nsaved -> {RESULTS / (args.method + '_visual_fixed.json')}")


if __name__ == "__main__":
    asyncio.run(main())
