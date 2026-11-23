"""Re-run the JSX/Vue/HTML parse validators on saved predictions and fix PSR.

Needed for qlora_3b: its first batches were scored while finetuning/node_modules
was missing, so every Node.js check returned "validator error". The generated
code is unaffected; only parse_ok / parse_error and the PSR figures change.

Usage:  py -3.10 revalidate.py --run qlora_3b   (reads/writes results/{run}_*.json)
"""
import argparse
import json
from pathlib import Path

from evaluate import VALIDATORS

RESULTS = Path(__file__).resolve().parent / "results"
TASKS = ["html", "jsx", "vue"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--run", required=True, help="e.g. qlora_3b or qlora_3b_design2code")
    args = ap.parse_args()

    pred_path = RESULTS / f"{args.run}_predictions.json"
    eval_path = RESULTS / f"{args.run}_eval_results.json"
    preds = json.loads(pred_path.read_text(encoding="utf-8"))
    summary = json.loads(eval_path.read_text(encoding="utf-8"))

    for t in TASKS:
        changed = 0
        for s in preds[t]:
            ok, err = VALIDATORS[t](s["prediction"])
            changed += ok != s["parse_ok"]
            s["parse_ok"], s["parse_error"] = ok, err
        n_ok = sum(s["parse_ok"] for s in preds[t])
        pt = summary["per_task"][t]
        pt.update(parse_ok=n_ok, parse_fail=len(preds[t]) - n_ok,
                  parse_success_rate=round(n_ok / len(preds[t]), 4))
        print(f"{t:5s} parse ok {n_ok}/{len(preds[t])}  ({changed} labels changed)")

    total = sum(summary["per_task"][t]["n_samples"] for t in TASKS)
    summary["avg_parse_success_rate"] = round(
        sum(summary["per_task"][t]["parse_success_rate"] * summary["per_task"][t]["n_samples"]
            for t in TASKS) / total, 4)
    summary["revalidated"] = True

    pred_path.write_text(json.dumps(preds, indent=2, ensure_ascii=False), encoding="utf-8")
    eval_path.write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print(f"avg PSR {summary['avg_parse_success_rate']:.4f}  -> updated {pred_path.name}, {eval_path.name}")


if __name__ == "__main__":
    main()
