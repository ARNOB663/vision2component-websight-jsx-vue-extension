"""Live progress view for the revision experiments.

Usage:
    py -3.10 finetuning/progress.py                    # all jobs, print once
    py -3.10 finetuning/progress.py --watch 30         # refresh every 30 s (Ctrl+C to stop)
    py -3.10 finetuning/progress.py --train --watch 30 # 3B training detail + loss vs. 2B run
"""
import argparse
import json
import re
import subprocess
import time
from datetime import datetime, timedelta
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
LOGS = ROOT / "logs"
# The 3B run was started before logs/ existed; its log lives in the session scratchpad.
TRAIN_LOG = Path(r"C:\Users\Arnob\AppData\Local\Temp\claude\e--Thesis-Project-file"
                 r"\1b2893c5-760b-4731-935d-72f7afac7130\scratchpad\train_3b.log")
# 2B run's logged losses; same data, seed and order, so steps line up with the 3B run
REF_STATE = ROOT / "outputs" / "qlora" / "checkpoint-9456" / "trainer_state.json"
BAR = 32
SPARK = "▁▂▃▄▅▆▇█"

GREEN, YELLOW, GREY, BOLD, RESET = "\033[32m", "\033[33m", "\033[90m", "\033[1m", "\033[0m"


def bar(frac):
    filled = int(round(frac * BAR))
    return "[" + "#" * filled + "-" * (BAR - filled) + f"] {frac:6.1%}"


def tail(path, n_bytes=20000):
    if not path.exists():
        return ""
    with open(path, "rb") as f:
        f.seek(0, 2)
        f.seek(max(f.tell() - n_bytes, 0))
        return f.read().decode("utf-8", errors="ignore")


def parse_hms(s):
    parts = [int(p) for p in s.strip().split(":")]
    while len(parts) < 3:
        parts.insert(0, 0)
    h, m, sec = parts
    return timedelta(hours=h, minutes=m, seconds=sec)


def training_status():
    if (ROOT / "outputs" / "qlora_3b" / "final_adapter" / "adapter_config.json").exists():
        return f"{GREEN}done (3,152/3,152 steps, adapter saved){RESET}"
    text = tail(TRAIN_LOG)
    if not text:
        return f"{GREY}no log yet{RESET}"
    if "TRAINING COMPLETE" in text:
        return f"{GREEN}done{RESET}"
    if "Traceback" in text:
        return f"{YELLOW}ERROR -- see {TRAIN_LOG}{RESET}"
    if "RESUME: Training already saved" in text or "Adapter saved" in text:
        return f"{YELLOW}training finished, running validation pass{RESET}"
    m = re.findall(r"(\d+)/(\d+) \[([\d:]+)<([\d:]+),\s*([\d.]+)s/it\]", text)
    if not m:
        return f"{GREY}loading model / data...{RESET}"
    step, total, elapsed, remaining, rate = m[-1]
    step, total = int(step), int(total)
    eta = datetime.now() + parse_hms(remaining)
    losses = re.findall(r"'loss': '([\d.]+)'", text)
    loss = f"  loss {float(losses[-1]):.4f}" if losses else ""
    return (f"{bar(step / total)}  step {step}/{total}  {float(rate):.1f} s/step{loss}\n"
            f"      elapsed {elapsed}  remaining {remaining}  ETA {eta:%a %H:%M}")


def sparkline(values, lo, hi):
    span = (hi - lo) or 1.0
    return "".join(SPARK[min(int((v - lo) / span * len(SPARK)), len(SPARK) - 1)] for v in values)


def training_detail():
    text = TRAIN_LOG.read_text(encoding="utf-8", errors="ignore") if TRAIN_LOG.exists() else ""
    totals = re.findall(r"\d+/(\d+) \[", text)
    total = int(totals[-1]) if totals else 3152
    logs = []
    for loss, gn, lr, ep in re.findall(
            r"\{'loss': '([\d.]+)', 'grad_norm': '([^']+)', 'learning_rate': '([^']+)', "
            r"'epoch': '([\d.e-]+)'", text):
        logs.append((round(float(ep) * total), float(loss), gn, float(lr)))
    ref = {}
    if REF_STATE.exists():
        ref = {e["step"]: e["loss"] for e in json.loads(REF_STATE.read_text())["log_history"]
               if "loss" in e}

    lines = [f"{BOLD}Qwen2.5-VL-3B + QLoRA  --  {datetime.now():%a %d %b %H:%M:%S}{RESET}",
             gpu_line(), "", training_status(), ""]
    if not logs:
        lines.append(f"{GREY}no loss logged yet (first value at step 10){RESET}")
        return "\n".join(lines)

    lines.append(f"{'step':>6s} {'3B loss':>9s} {'2B loss':>9s} {'lr':>10s} {'grad norm':>10s}")
    for step, loss, gn, lr in logs[-8:]:
        r = ref.get(step)
        lines.append(f"{step:>6d} {loss:>9.4f} {(f'{r:.4f}' if r is not None else '-'):>9s} "
                     f"{lr:>10.2e} {gn:>10s}")

    # Loss curve: mean loss per bucket of logged steps, same buckets for both runs
    n_buckets = min(48, len(logs))
    edges = np.linspace(0, len(logs), n_buckets + 1).astype(int)
    b3 = [np.mean([l for _, l, _, _ in logs[a:b]]) for a, b in zip(edges[:-1], edges[1:])]
    b2 = [np.mean([ref[s] for s, _, _, _ in logs[a:b] if s in ref] or [np.nan])
          for a, b in zip(edges[:-1], edges[1:])]
    valid = [v for v in b3 + b2 if not np.isnan(v)]
    lo, hi = min(valid), max(valid)
    lines += ["", f"loss curve, steps {logs[0][0]}-{logs[-1][0]} (low = better, shared scale {lo:.3f}-{hi:.3f})",
              f"  3B {sparkline(b3, lo, hi)}",
              f"  2B {sparkline([v if not np.isnan(v) else hi for v in b2], lo, hi)}"]
    recent = logs[-5:]
    r2 = [ref[s] for s, _, _, _ in recent if s in ref]
    if r2:
        lines.append(f"\nmean of last {len(recent)} logged losses:  3B {np.mean([l for _, l, _, _ in recent]):.4f}"
                     f"   2B at same steps {np.mean(r2):.4f}")
    return "\n".join(lines)


def eval_status(method):
    done = RESULTS / f"{method}_eval_results.json"
    prog = RESULTS / f"{method}_inference_progress.json"
    if done.exists() and (not prog.exists() or done.stat().st_mtime >= prog.stat().st_mtime):
        return f"{GREEN}done{RESET}"
    if prog.exists():
        p = json.loads(prog.read_text())
        frac = p["completed_samples"] / p["total_samples"]
        return f"{bar(frac)}  {p['completed_samples']}/{p['total_samples']} samples"
    return f"{GREY}queued{RESET}"


def file_status(result, running_hint=None):
    if (RESULTS / result).exists():
        return f"{GREEN}done{RESET}"
    if running_hint and running_hint():
        return f"{YELLOW}running{RESET}"
    return f"{GREY}queued{RESET}"


def bootstrap_hint():
    return (RESULTS / "per_sample_scores.json").exists()


def gpu_line():
    try:
        out = subprocess.run(
            ["nvidia-smi", "--query-gpu=memory.used,memory.total,utilization.gpu",
             "--format=csv,noheader,nounits"],
            capture_output=True, text=True, timeout=10).stdout.strip()
        used, total, util = [x.strip() for x in out.split(",")]
        return f"GPU {int(used)/1024:.1f}/{int(total)/1024:.1f} GiB used, {util}% busy"
    except Exception:
        return "GPU status unavailable"


def render():
    bs = "bootstrap_ci.json"
    latency_done = sum((RESULTS / f"{m}_latency_eval_results.json").exists()
                       for m in ["base", "qlora", "qlora_3b", "qwen2.5"])
    rows = [
        ("GPU", "#1  3B QLoRA training", training_status()),
        ("GPU", "#1  3B QLoRA evaluation", eval_status("qlora_3b")),
        ("GPU", "    Latency re-run (4 models)",
         f"{GREEN}done{RESET}" if latency_done == 4 else
         (f"{YELLOW}{latency_done}/4 models{RESET}" if latency_done else f"{GREY}queued{RESET}")),
        ("GPU", "#2  Design2Code: QLoRA 2B", eval_status("qlora_design2code")),
        ("GPU", "#2  Design2Code: base 2B", eval_status("base_design2code")),
        ("GPU", "#2  Design2Code: QLoRA 3B", eval_status("qlora_3b_design2code")),
        ("CPU", "#2  Design2Code visual scoring", file_status("design2code_results.json")),
        ("CPU", "#5  Output lengths", file_status("output_length_stats.json")),
        ("CPU", "#4  Bootstrap CIs",
         file_status(bs) if (RESULTS / bs).exists()
         else (f"{YELLOW}running: bootstrap resampling{RESET}" if bootstrap_hint()
               else f"{YELLOW}running: scoring renders{RESET}")),
        ("CPU", "#6  Near-duplicate check", file_status("dedup_check.json")),
        ("CPU", "#8  JSX lenient re-render", file_status("jsx_lenient_rerender_results.json")),
        ("CPU", "#7  Teacher render check", file_status("teacher_render_check.json")),
    ]
    lines = [f"{BOLD}Revision experiments  --  {datetime.now():%a %d %b %H:%M:%S}{RESET}",
             gpu_line(), ""]
    for dev, name, status in rows:
        lines.append(f"[{dev}] {name:34s} {status}")
    queue_log = LOGS / "gpu_queue_status.log"
    if queue_log.exists():
        last = queue_log.read_text(encoding="utf-8").strip().splitlines()[-1:]
        lines += ["", f"GPU queue: {last[0] if last else '-'}"]
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--watch", type=int, default=0, help="refresh interval in seconds")
    ap.add_argument("--train", action="store_true", help="show 3B training detail")
    args = ap.parse_args()
    view = training_detail if args.train else render
    if not args.watch:
        print(view())
        return
    try:
        while True:
            print("\033[2J\033[H" + view(), flush=True)
            time.sleep(args.watch)
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
