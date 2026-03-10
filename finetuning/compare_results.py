"""
Compare LoRA vs QLoRA vs DoRA evaluation results.

Loads results JSONs produced by evaluate.py and visual_eval.py,
generates comparison tables, bar charts, and radar plots.

Usage:
    python finetuning/compare_results.py
"""

import os
import json
from pathlib import Path

import numpy as np
import matplotlib.pyplot as plt
import matplotlib

matplotlib.rcParams["figure.dpi"] = 150
matplotlib.rcParams["savefig.bbox"] = "tight"

# ═══════════════════════════════════════════════════════════════════════════════
# PATHS
# ═══════════════════════════════════════════════════════════════════════════════
PROJECT_ROOT = Path(__file__).resolve().parent.parent
RESULTS_DIR = PROJECT_ROOT / "finetuning" / "results"
CHARTS_DIR = RESULTS_DIR / "charts"
METHODS = ["lora", "qlora", "dora"]
METHOD_LABELS = {"lora": "LoRA", "qlora": "QLoRA", "dora": "DoRA"}
TASKS = ["html", "jsx", "vue"]


def load_json(path):
    if not path.exists():
        return None
    with open(path, "r") as f:
        return json.load(f)


# ═══════════════════════════════════════════════════════════════════════════════
# LOAD ALL RESULTS
# ═══════════════════════════════════════════════════════════════════════════════
def load_all_results():
    data = {}
    for method in METHODS:
        entry = {}

        train_metrics = load_json(RESULTS_DIR / f"{method}_training_metrics.json")
        eval_results = load_json(RESULTS_DIR / f"{method}_eval_results.json")
        visual_results = load_json(RESULTS_DIR / f"{method}_visual_results.json")

        if train_metrics:
            entry["training"] = train_metrics
        if eval_results:
            entry["eval"] = eval_results
        if visual_results:
            entry["visual"] = visual_results

        if entry:
            data[method] = entry

    return data


# ═══════════════════════════════════════════════════════════════════════════════
# TABLES
# ═══════════════════════════════════════════════════════════════════════════════
def print_training_table(data):
    print("\n" + "=" * 80)
    print("  TRAINING EFFICIENCY COMPARISON")
    print("=" * 80)
    header = f"{'Metric':<28} {'LoRA':>14} {'QLoRA':>14} {'DoRA':>14}"
    print(header)
    print("-" * 80)

    rows = [
        ("Trainable Params", "trainable_params", lambda v: f"{v:,}"),
        ("Trainable %", "trainable_pct", lambda v: f"{v:.2%}"),
        ("Peak VRAM (GiB)", "peak_vram_gb", lambda v: f"{v:.2f}"),
        ("Training Time (hrs)", "training_time_hours", lambda v: f"{v:.2f}"),
        ("Final Train Loss", "final_train_loss", lambda v: f"{v:.4f}" if v else "N/A"),
        ("Final Eval Loss", "final_eval_loss", lambda v: f"{v:.4f}" if v else "N/A"),
    ]

    for label, key, fmt in rows:
        vals = []
        for m in METHODS:
            t = data.get(m, {}).get("training", {})
            v = t.get(key)
            vals.append(fmt(v) if v is not None else "N/A")
        print(f"  {label:<26} {vals[0]:>14} {vals[1]:>14} {vals[2]:>14}")


def print_code_metrics_table(data):
    print("\n" + "=" * 80)
    print("  CODE QUALITY METRICS (averaged across tasks)")
    print("=" * 80)
    header = f"{'Metric':<28} {'LoRA':>14} {'QLoRA':>14} {'DoRA':>14}"
    print(header)
    print("-" * 80)

    metrics = [
        ("Parse Success Rate", "avg_parse_success_rate", lambda v: f"{v:.2%}"),
        ("BLEU-4", "avg_bleu4", lambda v: f"{v:.4f}"),
        ("CodeBLEU", "avg_codebleu", lambda v: f"{v:.4f}"),
        ("ROUGE-L", "avg_rouge_l", lambda v: f"{v:.4f}"),
        ("ChrF", "avg_chrf", lambda v: f"{v:.4f}"),
        ("Avg Latency (s)", "avg_inference_latency_s", lambda v: f"{v:.2f}"),
    ]

    for label, key, fmt in metrics:
        vals = []
        for m in METHODS:
            e = data.get(m, {}).get("eval", {})
            v = e.get(key)
            vals.append(fmt(v) if v is not None else "N/A")
        print(f"  {label:<26} {vals[0]:>14} {vals[1]:>14} {vals[2]:>14}")

    # Per-task breakdown
    for task in TASKS:
        print(f"\n  --- {task.upper()} ---")
        task_metrics = ["parse_success_rate", "bleu4", "codebleu", "rouge_l", "chrf"]
        for metric in task_metrics:
            vals = []
            for m in METHODS:
                e = data.get(m, {}).get("eval", {})
                pt = e.get("per_task", {}).get(task, {})
                v = pt.get(metric)
                if v is not None:
                    if metric == "parse_success_rate":
                        vals.append(f"{v:.2%}")
                    else:
                        vals.append(f"{v:.4f}")
                else:
                    vals.append("N/A")
            print(f"    {metric:<24} {vals[0]:>14} {vals[1]:>14} {vals[2]:>14}")


def print_visual_table(data):
    print("\n" + "=" * 80)
    print("  VISUAL FIDELITY METRICS")
    print("=" * 80)

    header = f"{'Metric':<28} {'LoRA':>14} {'QLoRA':>14} {'DoRA':>14}"
    print(header)
    print("-" * 80)

    for metric, fmt in [("avg_ssim", lambda v: f"{v:.4f}"), ("avg_psnr", lambda v: f"{v:.2f}")]:
        vals = []
        for m in METHODS:
            vis = data.get(m, {}).get("visual", {})
            v = vis.get(metric)
            vals.append(fmt(v) if v is not None else "N/A")
        label = "SSIM (avg)" if "ssim" in metric else "PSNR (avg)"
        print(f"  {label:<26} {vals[0]:>14} {vals[1]:>14} {vals[2]:>14}")

    for task in TASKS:
        print(f"\n  --- {task.upper()} ---")
        for metric in ["avg_ssim", "avg_psnr"]:
            vals = []
            for m in METHODS:
                vis = data.get(m, {}).get("visual", {})
                pt = vis.get("per_task", {}).get(task, {})
                v = pt.get(metric)
                if v is not None:
                    vals.append(f"{v:.4f}" if "ssim" in metric else f"{v:.2f}")
                else:
                    vals.append("N/A")
            label = "SSIM" if "ssim" in metric else "PSNR"
            print(f"    {label:<24} {vals[0]:>14} {vals[1]:>14} {vals[2]:>14}")


# ═══════════════════════════════════════════════════════════════════════════════
# LATEX EXPORT
# ═══════════════════════════════════════════════════════════════════════════════
def export_latex_table(data):
    """Export a LaTeX-ready comparison table."""
    lines = []
    lines.append(r"\begin{table}[h]")
    lines.append(r"\centering")
    lines.append(r"\caption{Comparison of LoRA, QLoRA, and DoRA for UI Code Generation}")
    lines.append(r"\label{tab:comparison}")
    lines.append(r"\begin{tabular}{lccc}")
    lines.append(r"\hline")
    lines.append(r"\textbf{Metric} & \textbf{LoRA} & \textbf{QLoRA} & \textbf{DoRA} \\")
    lines.append(r"\hline")

    rows = [
        ("Trainable Params (\%)", "training", "trainable_pct", lambda v: f"{v*100:.2f}"),
        ("Peak VRAM (GiB)", "training", "peak_vram_gb", lambda v: f"{v:.2f}"),
        ("Training Time (hrs)", "training", "training_time_hours", lambda v: f"{v:.2f}"),
        ("Parse Success Rate", "eval", "avg_parse_success_rate", lambda v: f"{v*100:.1f}\\%"),
        ("BLEU-4", "eval", "avg_bleu4", lambda v: f"{v:.4f}"),
        ("CodeBLEU", "eval", "avg_codebleu", lambda v: f"{v:.4f}"),
        ("ROUGE-L", "eval", "avg_rouge_l", lambda v: f"{v:.4f}"),
        ("ChrF", "eval", "avg_chrf", lambda v: f"{v:.4f}"),
        ("SSIM", "visual", "avg_ssim", lambda v: f"{v:.4f}"),
        ("PSNR", "visual", "avg_psnr", lambda v: f"{v:.2f}"),
        ("Inference Latency (s)", "eval", "avg_inference_latency_s", lambda v: f"{v:.2f}"),
    ]

    for label, section, key, fmt in rows:
        vals = []
        for m in METHODS:
            s = data.get(m, {}).get(section, {})
            v = s.get(key)
            vals.append(fmt(v) if v is not None else "N/A")

        # Bold the best value
        best_idx = None
        numeric_vals = []
        for v in vals:
            try:
                numeric_vals.append(float(v.replace("\\%", "").replace(",", "")))
            except ValueError:
                numeric_vals.append(None)

        higher_is_better = key not in ("peak_vram_gb", "training_time_hours",
                                        "avg_inference_latency_s")
        valid_nums = [n for n in numeric_vals if n is not None]
        if valid_nums:
            best = max(valid_nums) if higher_is_better else min(valid_nums)
            best_idx = numeric_vals.index(best)

        formatted = []
        for i, v in enumerate(vals):
            if i == best_idx and v != "N/A":
                formatted.append(r"\textbf{" + v + "}")
            else:
                formatted.append(v)

        lines.append(f"{label} & {' & '.join(formatted)} \\\\")

    lines.append(r"\hline")
    lines.append(r"\end{tabular}")
    lines.append(r"\end{table}")

    latex_path = RESULTS_DIR / "comparison_table.tex"
    with open(latex_path, "w") as f:
        f.write("\n".join(lines))

    print(f"\n  LaTeX table saved to: {latex_path}")


# ═══════════════════════════════════════════════════════════════════════════════
# CHARTS
# ═══════════════════════════════════════════════════════════════════════════════
def plot_bar_chart(data):
    """Bar charts for key metrics across methods."""
    CHARTS_DIR.mkdir(exist_ok=True)
    colors = {"lora": "#4C78A8", "qlora": "#F58518", "dora": "#54A24B"}

    chart_metrics = [
        ("Parse Success Rate", "eval", "avg_parse_success_rate", True),
        ("BLEU-4", "eval", "avg_bleu4", True),
        ("CodeBLEU", "eval", "avg_codebleu", True),
        ("ROUGE-L", "eval", "avg_rouge_l", True),
        ("ChrF", "eval", "avg_chrf", True),
        ("Peak VRAM (GiB)", "training", "peak_vram_gb", False),
        ("Inference Latency (s)", "eval", "avg_inference_latency_s", False),
    ]

    fig, axes = plt.subplots(2, 4, figsize=(18, 8))
    axes = axes.flatten()

    for idx, (title, section, key, higher_better) in enumerate(chart_metrics):
        ax = axes[idx]
        vals = []
        method_names = []
        bar_colors = []

        for m in METHODS:
            s = data.get(m, {}).get(section, {})
            v = s.get(key, 0)
            vals.append(v if v else 0)
            method_names.append(METHOD_LABELS[m])
            bar_colors.append(colors[m])

        bars = ax.bar(method_names, vals, color=bar_colors, width=0.5)

        for bar, val in zip(bars, vals):
            ax.text(bar.get_x() + bar.get_width() / 2, bar.get_height(),
                    f"{val:.4f}" if val < 1 else f"{val:.2f}",
                    ha="center", va="bottom", fontsize=8)

        ax.set_title(title, fontsize=10, fontweight="bold")
        ax.set_ylim(0, max(vals) * 1.2 if vals and max(vals) > 0 else 1)

    # Hide unused subplot
    if len(chart_metrics) < len(axes):
        for i in range(len(chart_metrics), len(axes)):
            axes[i].set_visible(False)

    plt.suptitle("LoRA vs QLoRA vs DoRA -- Evaluation Metrics", fontsize=14, fontweight="bold")
    plt.tight_layout()

    path = CHARTS_DIR / "metrics_comparison.png"
    plt.savefig(path)
    plt.close()
    print(f"  Bar chart saved to: {path}")


def plot_radar_chart(data):
    """Radar chart comparing methods across normalized metrics."""
    CHARTS_DIR.mkdir(exist_ok=True)

    metrics_config = [
        ("PSR", "eval", "avg_parse_success_rate"),
        ("BLEU-4", "eval", "avg_bleu4"),
        ("CodeBLEU", "eval", "avg_codebleu"),
        ("ROUGE-L", "eval", "avg_rouge_l"),
        ("ChrF", "eval", "avg_chrf"),
    ]

    # Add visual metrics if available
    if any(data.get(m, {}).get("visual") for m in METHODS):
        metrics_config.append(("SSIM", "visual", "avg_ssim"))

    labels = [m[0] for m in metrics_config]
    num_vars = len(labels)

    # Collect values
    method_values = {}
    for m in METHODS:
        vals = []
        for _, section, key in metrics_config:
            s = data.get(m, {}).get(section, {})
            vals.append(s.get(key, 0) or 0)
        method_values[m] = vals

    # Normalize to [0, 1] per metric
    for i in range(num_vars):
        col_vals = [method_values[m][i] for m in METHODS]
        max_val = max(col_vals) if max(col_vals) > 0 else 1
        for m in METHODS:
            method_values[m][i] /= max_val

    angles = np.linspace(0, 2 * np.pi, num_vars, endpoint=False).tolist()
    angles += angles[:1]

    fig, ax = plt.subplots(figsize=(8, 8), subplot_kw=dict(polar=True))
    colors = {"lora": "#4C78A8", "qlora": "#F58518", "dora": "#54A24B"}

    for m in METHODS:
        values = method_values[m] + method_values[m][:1]
        ax.plot(angles, values, "o-", linewidth=2, label=METHOD_LABELS[m], color=colors[m])
        ax.fill(angles, values, alpha=0.1, color=colors[m])

    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(labels, fontsize=10)
    ax.set_ylim(0, 1.1)
    ax.legend(loc="upper right", bbox_to_anchor=(1.3, 1.1))
    ax.set_title("Method Comparison (normalized)", fontsize=13, fontweight="bold", pad=20)

    path = CHARTS_DIR / "radar_comparison.png"
    plt.savefig(path)
    plt.close()
    print(f"  Radar chart saved to: {path}")


def plot_per_task_bars(data):
    """Grouped bar chart: per-task PSR and BLEU-4."""
    CHARTS_DIR.mkdir(exist_ok=True)

    fig, axes = plt.subplots(1, 2, figsize=(14, 5))
    colors = {"lora": "#4C78A8", "qlora": "#F58518", "dora": "#54A24B"}
    x = np.arange(len(TASKS))
    width = 0.25

    for ax, (metric, title, fmt) in zip(axes, [
        ("parse_success_rate", "Parse Success Rate by Task", "{:.1%}"),
        ("bleu4", "BLEU-4 by Task", "{:.4f}"),
    ]):
        for i, m in enumerate(METHODS):
            vals = []
            for task in TASKS:
                pt = data.get(m, {}).get("eval", {}).get("per_task", {}).get(task, {})
                vals.append(pt.get(metric, 0) or 0)
            bars = ax.bar(x + i * width, vals, width, label=METHOD_LABELS[m], color=colors[m])

            for bar, val in zip(bars, vals):
                ax.text(bar.get_x() + bar.get_width() / 2, bar.get_height(),
                        fmt.format(val), ha="center", va="bottom", fontsize=7)

        ax.set_xlabel("Task")
        ax.set_ylabel(metric)
        ax.set_title(title, fontweight="bold")
        ax.set_xticks(x + width)
        ax.set_xticklabels([t.upper() for t in TASKS])
        ax.legend()

    plt.tight_layout()
    path = CHARTS_DIR / "per_task_comparison.png"
    plt.savefig(path)
    plt.close()
    print(f"  Per-task chart saved to: {path}")


# ═══════════════════════════════════════════════════════════════════════════════
# RANKING
# ═══════════════════════════════════════════════════════════════════════════════
def print_ranking(data):
    """Rank methods by a weighted composite score."""
    weights = {
        "avg_parse_success_rate": 0.25,
        "avg_bleu4": 0.15,
        "avg_codebleu": 0.20,
        "avg_rouge_l": 0.10,
        "avg_chrf": 0.10,
    }

    # Add visual weight if available
    has_visual = any(data.get(m, {}).get("visual") for m in METHODS)
    if has_visual:
        weights["avg_ssim_visual"] = 0.20
        total_w = sum(weights.values())
        weights = {k: v / total_w for k, v in weights.items()}

    print("\n" + "=" * 80)
    print("  OVERALL RANKING")
    print("=" * 80)

    scores = {}
    for m in METHODS:
        score = 0
        for key, w in weights.items():
            if key == "avg_ssim_visual":
                v = data.get(m, {}).get("visual", {}).get("avg_ssim", 0) or 0
            else:
                v = data.get(m, {}).get("eval", {}).get(key, 0) or 0
            score += v * w
        scores[m] = round(score, 4)

    ranked = sorted(scores.items(), key=lambda x: x[1], reverse=True)
    for rank, (method, score) in enumerate(ranked, 1):
        print(f"  #{rank}  {METHOD_LABELS[method]:<8}  composite score: {score:.4f}")


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    print("\nLoading results...")
    data = load_all_results()

    found = [m for m in METHODS if m in data]
    if not found:
        print("ERROR: No results found in", RESULTS_DIR)
        print("Run evaluate.py for at least one method first.")
        return

    print(f"  Found results for: {', '.join(METHOD_LABELS[m] for m in found)}")
    missing = [m for m in METHODS if m not in data]
    if missing:
        print(f"  Missing: {', '.join(METHOD_LABELS[m] for m in missing)}")

    # ── Tables ──
    if any(data.get(m, {}).get("training") for m in METHODS):
        print_training_table(data)

    if any(data.get(m, {}).get("eval") for m in METHODS):
        print_code_metrics_table(data)

    if any(data.get(m, {}).get("visual") for m in METHODS):
        print_visual_table(data)

    # ── Charts ──
    print("\n  Generating charts...")
    try:
        plot_bar_chart(data)
        plot_radar_chart(data)
        plot_per_task_bars(data)
    except Exception as e:
        print(f"  Chart generation error: {e}")

    # ── LaTeX ──
    export_latex_table(data)

    # ── Ranking ──
    print_ranking(data)

    print(f"\n  All outputs saved to: {RESULTS_DIR}/")


if __name__ == "__main__":
    main()
