"""Compute the corrected Table V / Table VI numbers after the JSX re-render.

Overall SSIM/PSNR in Table V is the mean over the three tasks, so fixing the
JSX task changes the overall figures too. This script reports old vs new for
both tables so the paper can be updated consistently.

Run after rerender_jsx.py.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
METHODS = ["base", "qwen2.5", "qlora"]
LABEL = {"base": "Base (2B)", "qwen2.5": "Qwen2.5 (3B)", "qlora": "QLoRA (2B)"}


def main():
    new = json.loads((RESULTS / "jsx_rerender_results.json").read_text(encoding="utf-8"))

    rows = {}
    for m in METHODS:
        vis = json.loads((RESULTS / f"{m}_visual_results.json").read_text(encoding="utf-8"))
        pt = vis["per_task"]
        old_jsx_ssim = pt["jsx"]["avg_ssim"]
        old_jsx_psnr = pt["jsx"]["avg_psnr"]
        new_jsx_ssim = new[m]["avg_ssim"]
        new_jsx_psnr = new[m]["avg_psnr"]

        html_s, vue_s = pt["html"]["avg_ssim"], pt["vue"]["avg_ssim"]
        html_p, vue_p = pt["html"]["avg_psnr"], pt["vue"]["avg_psnr"]

        rows[m] = {
            "html_ssim": html_s, "vue_ssim": vue_s,
            "old_jsx_ssim": old_jsx_ssim, "new_jsx_ssim": new_jsx_ssim,
            "old_overall_ssim": vis["avg_ssim"],
            "new_overall_ssim": round((html_s + new_jsx_ssim + vue_s) / 3, 4),
            "old_overall_psnr": vis["avg_psnr"],
            "new_overall_psnr": round((html_p + new_jsx_psnr + vue_p) / 3, 2),
            "old_jsx_psnr": old_jsx_psnr, "new_jsx_psnr": new_jsx_psnr,
            "rendered": new[m]["n_rendered"], "failed": new[m]["n_failed"],
            "n": new[m]["n_samples"],
        }

    print("=" * 74)
    print("TABLE VI  -- JSX row (per-task SSIM)")
    print("=" * 74)
    print(f"{'model':14s} {'OLD SSIM':>9s} {'NEW SSIM':>9s} {'rendered':>12s} {'failed':>7s}")
    for m in METHODS:
        r = rows[m]
        print(f"{LABEL[m]:14s} {r['old_jsx_ssim']:>9.4f} {r['new_jsx_ssim']:>9.4f} "
              f"{r['rendered']:>6d}/{r['n']:<5d} {r['failed']:>7d}")

    print()
    print("=" * 74)
    print("TABLE V  -- overall SSIM / PSNR (mean of HTML, JSX, Vue)")
    print("=" * 74)
    print(f"{'model':14s} {'SSIM old':>9s} {'SSIM new':>9s} {'PSNR old':>9s} {'PSNR new':>9s}")
    for m in METHODS:
        r = rows[m]
        print(f"{LABEL[m]:14s} {r['old_overall_ssim']:>9.4f} {r['new_overall_ssim']:>9.4f} "
              f"{r['old_overall_psnr']:>9.2f} {r['new_overall_psnr']:>9.2f}")

    print()
    print("=" * 74)
    print("CLAIMS TO RE-CHECK IN THE PAPER")
    print("=" * 74)
    b, q = rows["base"], rows["qlora"]
    w = rows["qwen2.5"]
    old_gain = (b["old_overall_ssim"] and
                (q["old_overall_ssim"] - b["old_overall_ssim"]) / b["old_overall_ssim"] * 100)
    new_gain = (b["new_overall_ssim"] and
                (q["new_overall_ssim"] - b["new_overall_ssim"]) / b["new_overall_ssim"] * 100)
    print(f"  QLoRA vs Base SSIM gain : {old_gain:+.1f}%  ->  {new_gain:+.1f}%")
    print(f"  QLoRA vs Qwen2.5 SSIM   : {q['old_overall_ssim']:.4f} vs {w['old_overall_ssim']:.4f}"
          f"  ->  {q['new_overall_ssim']:.4f} vs {w['new_overall_ssim']:.4f}")
    winner = max(METHODS, key=lambda m: rows[m]["new_overall_ssim"])
    print(f"  highest overall SSIM now: {LABEL[winner]}")
    print()
    print("  Renderability (new, worth reporting):")
    for m in METHODS:
        r = rows[m]
        print(f"    {LABEL[m]:14s} {r['rendered']}/{r['n']} JSX outputs rendered "
              f"({r['rendered']/r['n']*100:.1f}%)")


if __name__ == "__main__":
    main()
