"""
Recalculate CodeBLEU for all methods using prediction files.

CodeBLEU 0.7.0 natively supports: javascript, python, java, c, cpp, etc.
It does NOT support 'html', so we use 'javascript' for all UI tasks
(html/jsx/vue) since the code contains JS-like syntax and this gives
meaningful syntax/dataflow scores rather than 0.

Usage:
    py -3.11 finetuning/calc_codebleu_all.py
"""

import sys
import json
from pathlib import Path

from codebleu import calc_codebleu


RESULTS_DIR = Path(__file__).resolve().parent / "results"
METHODS = ["base", "qwen2.5", "qlora"]

# CodeBLEU doesn't support 'html' natively, use 'javascript' for all UI tasks
TASK_LANG_MAP = {
    "html": "javascript",
    "jsx": "javascript",
    "vue": "javascript",
}


def recalc_codebleu_for_method(method_name):
    preds_file = RESULTS_DIR / f"{method_name}_predictions.json"
    eval_file = RESULTS_DIR / f"{method_name}_eval_results.json"

    if not preds_file.exists():
        print(f"  [SKIP] {method_name}: no predictions file found at {preds_file}")
        return

    print(f"\n{'='*60}")
    print(f"  Recalculating CodeBLEU for {method_name.upper()}")
    print(f"{'='*60}")

    with open(preds_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    task_scores = {}

    for task, samples in data.items():
        if not samples:
            print(f"  [{task}] No samples, skipping.")
            continue

        refs = [item["reference"] for item in samples]
        preds = [item["prediction"] for item in samples]
        cb_lang = TASK_LANG_MAP.get(task, "javascript")

        print(f"  [{task}] Calculating CodeBLEU for {len(refs)} samples (lang={cb_lang})...")

        try:
            # Suppress internal prints from codebleu
            import os
            old_stdout = sys.stdout
            sys.stdout = open(os.devnull, "w")
            res = calc_codebleu(
                references=refs,
                predictions=preds,
                lang=cb_lang,
                weights=(0.25, 0.25, 0.25, 0.25),
            )
            sys.stdout.close()
            sys.stdout = old_stdout

            score = res["codebleu"]
            print(f"    -> CodeBLEU ({task}): {score:.4f}")
            print(f"       ngram_match:    {res['ngram_match_score']:.4f}")
            print(f"       weighted_ngram: {res['weighted_ngram_match_score']:.4f}")
            print(f"       syntax_match:   {res['syntax_match_score']:.4f}")
            print(f"       dataflow_match: {res['dataflow_match_score']:.4f}")
            task_scores[task] = score
        except Exception as e:
            sys.stdout = old_stdout
            print(f"    [ERROR] Failed for {task}: {e}")
            import traceback
            traceback.print_exc()
            task_scores[task] = 0.0

    # Update evaluation results JSON
    if eval_file.exists() and task_scores:
        with open(eval_file, "r", encoding="utf-8") as f:
            eval_data = json.load(f)

        if "per_task" in eval_data:
            for task, score in task_scores.items():
                if task in eval_data["per_task"]:
                    eval_data["per_task"][task]["codebleu"] = round(score, 4)

            # Recalculate average across all tasks
            all_cb = [
                eval_data["per_task"][t].get("codebleu", 0.0)
                for t in eval_data["per_task"]
            ]
            eval_data["avg_codebleu"] = round(sum(all_cb) / len(all_cb), 4) if all_cb else 0.0

        with open(eval_file, "w", encoding="utf-8") as f:
            json.dump(eval_data, f, indent=4)

        print(f"\n  -> Updated {eval_file.name}  (avg_codebleu={eval_data['avg_codebleu']:.4f})")
    else:
        print(f"\n  [WARN] Could not update {eval_file.name} (file missing or no scores)")


if __name__ == "__main__":
    print("=" * 60)
    print("  CodeBLEU Recalculation for All Methods")
    print("=" * 60)

    for method in METHODS:
        recalc_codebleu_for_method(method)

    # Print summary
    print(f"\n{'='*60}")
    print("  SUMMARY")
    print(f"{'='*60}")
    for method in METHODS:
        eval_file = RESULTS_DIR / f"{method}_eval_results.json"
        if eval_file.exists():
            with open(eval_file, "r", encoding="utf-8") as f:
                d = json.load(f)
            avg = d.get("avg_codebleu", 0.0)
            per_task = {t: d.get("per_task", {}).get(t, {}).get("codebleu", 0.0) for t in ["html", "jsx", "vue"]}
            print(f"  {method:>10}: avg={avg:.4f}  html={per_task['html']:.4f}  jsx={per_task['jsx']:.4f}  vue={per_task['vue']:.4f}")

    print("\nDone! Now run: py -3.11 finetuning/compare_results.py")
