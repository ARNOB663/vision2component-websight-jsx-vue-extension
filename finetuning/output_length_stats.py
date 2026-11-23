"""Output-length analysis for the three evaluated models (reviewer R3.10 / R3.11).

Answers: how many tokens each model generates, how often it runs into the
1,536-token cap, and whether batch latency is driven by the longest output.

Sources:
  {method}_predictions.json         (final predictions, per task, test order)
  {method}_inference_progress.json  (per-sample latencies; one value per batch)
  data/test.jsonl                   (processing order of the 1,488 samples)

Note: saved predictions have markdown fences (and any prose after the closing
fence) stripped, so token counts are a lower bound on generated tokens.

Usage:  py -3.10 output_length_stats.py
"""
import json
from pathlib import Path

import numpy as np
from transformers import AutoTokenizer

from evaluate import detect_task

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
MODELS = ROOT / "models"
METHODS = {
    "base": "Qwen2-VL-2B-Instruct",
    "qwen2.5": "Qwen2.5-VL-3B-Instruct",
    "qlora": "Qwen2-VL-2B-Instruct",
}
LABEL = {"base": "Base (2B)", "qwen2.5": "Qwen2.5 (3B)", "qlora": "QLoRA (2B)"}
TASKS = ["html", "jsx", "vue"]
MAX_NEW_TOKENS = 1536
CAP_HIT = MAX_NEW_TOKENS - 11  # allows for the stripped opening fence


def test_order():
    """(task, index within task) for each test sample, in processing order."""
    order, counters = [], {t: 0 for t in TASKS}
    for line in (ROOT / "data" / "test.jsonl").read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        content = json.loads(line)["messages"][0]["content"]
        prompt = next(p["text"] for p in content if p["type"] == "text")
        task = detect_task(prompt)
        order.append((task, counters[task]))
        counters[task] += 1
    return order


def batches_from_latencies(latencies):
    """Group consecutive equal per-sample latencies -> [(start, size, batch_seconds)]."""
    groups, start = [], 0
    for i in range(1, len(latencies) + 1):
        if i == len(latencies) or latencies[i] != latencies[start]:
            size = i - start
            groups.append((start, size, latencies[start] * size))
            start = i
    return groups


order = test_order()
stats = {}
tokenizers = {}

for method, model_dir in METHODS.items():
    if model_dir not in tokenizers:
        tokenizers[model_dir] = AutoTokenizer.from_pretrained(str(MODELS / model_dir))
    tok = tokenizers[model_dir]

    preds = json.loads((RESULTS / f"{method}_predictions.json").read_text(encoding="utf-8"))
    n_tok = {t: [len(tok.encode(s["prediction"], add_special_tokens=False)) for s in preds[t]]
             for t in TASKS}
    ref_tok = {t: [len(tok.encode(s["reference"], add_special_tokens=False)) for s in preds[t]]
               for t in TASKS}

    m = {"per_task": {}}
    for t in TASKS:
        a = np.array(n_tok[t])
        m["per_task"][t] = {
            "mean_tokens": round(float(a.mean()), 1),
            "median_tokens": float(np.median(a)),
            "p95_tokens": float(np.percentile(a, 95)),
            "cap_hit_pct": round(float((a >= CAP_HIT).mean() * 100), 2),
            "ref_mean_tokens": round(float(np.mean(ref_tok[t])), 1),
        }
    all_tok = np.concatenate([n_tok[t] for t in TASKS])
    all_ref = np.concatenate([ref_tok[t] for t in TASKS])
    m["mean_tokens"] = round(float(all_tok.mean()), 1)
    m["cap_hit_pct"] = round(float((all_tok >= CAP_HIT).mean() * 100), 2)
    m["ref_mean_tokens"] = round(float(all_ref.mean()), 1)
    m["ref_within_cap_pct"] = round(float((all_ref <= MAX_NEW_TOKENS).mean() * 100), 2)

    # ── Batch latency vs. longest output in the batch ──
    progress = json.loads((RESULTS / f"{method}_inference_progress.json").read_text(encoding="utf-8"))
    lat = progress["latencies_partial"]
    groups = batches_from_latencies(lat)
    seq_tok = [n_tok[task][j] for task, j in order]
    batch_max = np.array([max(seq_tok[s:s + n]) for s, n, _ in groups])
    batch_sec = np.array([sec for _, _, sec in groups])
    m["batches"] = {
        "n_batches": len(groups),
        "batch_size_mode": int(np.bincount([n for _, n, _ in groups]).argmax()),
        "mean_batch_seconds": round(float(batch_sec.mean()), 1),
        "mean_longest_output_tokens": round(float(batch_max.mean()), 1),
        "batches_with_cap_hit_pct": round(float((batch_max >= CAP_HIT).mean() * 100), 1),
        "corr_longest_output_vs_batch_time": round(float(np.corrcoef(batch_max, batch_sec)[0, 1]), 3),
        "sec_per_longest_token": round(float(batch_sec.sum() / batch_max.sum()), 4),
    }
    stats[method] = m

(RESULTS / "output_length_stats.json").write_text(json.dumps(stats, indent=2))

print("=" * 78)
print("GENERATED TOKENS PER SAMPLE (lower bound: fences stripped)")
print("=" * 78)
print(f"{'model':14s} {'task':5s} {'mean':>7s} {'median':>7s} {'p95':>7s} {'cap hit %':>10s} {'ref mean':>9s}")
for method in METHODS:
    for t in TASKS:
        d = stats[method]["per_task"][t]
        print(f"{LABEL[method]:14s} {t:5s} {d['mean_tokens']:>7.0f} {d['median_tokens']:>7.0f} "
              f"{d['p95_tokens']:>7.0f} {d['cap_hit_pct']:>10.2f} {d['ref_mean_tokens']:>9.0f}")
    d = stats[method]
    print(f"{LABEL[method]:14s} {'ALL':5s} {d['mean_tokens']:>7.0f} {'':>7s} {'':>7s} "
          f"{d['cap_hit_pct']:>10.2f} {d['ref_mean_tokens']:>9.0f}   refs within cap: {d['ref_within_cap_pct']}%")

print("\n" + "=" * 78)
print("BATCH LATENCY vs LONGEST OUTPUT IN BATCH")
print("=" * 78)
for method in METHODS:
    b = stats[method]["batches"]
    print(f"{LABEL[method]:14s} batches={b['n_batches']:3d} (size {b['batch_size_mode']})  "
          f"mean batch={b['mean_batch_seconds']:6.1f}s  longest output={b['mean_longest_output_tokens']:6.0f} tok  "
          f"batches w/ cap hit={b['batches_with_cap_hit_pct']:5.1f}%  r={b['corr_longest_output_vs_batch_time']:.3f}  "
          f"{b['sec_per_longest_token']*1000:.1f} ms/step")
