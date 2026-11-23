"""Recompute CodeBLEU for the WebSight runs with a fixed hash seed.

CodeBLEU's dataflow match iterates over Python sets, so its JSX score (and, by
~1e-4, Vue) depends on the per-process hash seed: unseeded runs of the same
predictions gave JSX values up to 0.01 apart. This script re-executes itself
with PYTHONHASHSEED=0 and rewrites per_task.codebleu / avg_codebleu in
results/{method}_eval_results.json. bootstrap_ci.py uses the same seed.

Usage:  py -3.10 recalc_codebleu_seeded.py [methods...]
"""
import contextlib
import io
import json
import os
import subprocess
import sys
from pathlib import Path

RESULTS = Path(__file__).resolve().parent / "results"
METHODS = ["base", "qwen2.5", "qlora", "qlora_3b"]
TASKS = ["html", "jsx", "vue"]

if os.environ.get("PYTHONHASHSEED") != "0":
    sys.exit(subprocess.call([sys.executable, *sys.argv], env={**os.environ, "PYTHONHASHSEED": "0"}))

from codebleu import calc_codebleu  # noqa: E402

for m in sys.argv[1:] or METHODS:
    preds = json.loads((RESULTS / f"{m}_predictions.json").read_text(encoding="utf-8"))
    path = RESULTS / f"{m}_eval_results.json"
    ev = json.loads(path.read_text())
    for t in TASKS:
        with contextlib.redirect_stdout(io.StringIO()):
            r = calc_codebleu([s["reference"] for s in preds[t]], [s["prediction"] for s in preds[t]],
                              lang="javascript", weights=(0.25, 0.25, 0.25, 0.25))
        old = ev["per_task"][t]["codebleu"]
        ev["per_task"][t]["codebleu"] = round(r["codebleu"], 4)
        print(f"{m:9s} {t:5s} {old:.4f} -> {r['codebleu']:.4f}", flush=True)
    ev["avg_codebleu"] = round(sum(ev["per_task"][t]["codebleu"] for t in TASKS) / len(TASKS), 4)
    ev["codebleu_hashseed"] = 0
    path.write_text(json.dumps(ev, indent=2))
    print(f"{m:9s} avg   -> {ev['avg_codebleu']:.4f}", flush=True)
