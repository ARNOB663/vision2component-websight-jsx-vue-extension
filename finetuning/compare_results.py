"""
Compare Base vs QLoRA evaluation results.

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
METHODS = ["base", "qwen2.5", "qlora"]
METHOD_LABELS = {"base": "Base (Zero-Shot)", "qlora": "QLoRA", "qwen2.5": "Qwen2.5-VL"}
TASKS = ["html", "jsx", "vue"]


def load_json(path):
    if not path.exists():
        return None
    with open(path, "r", encoding="utf-8") as f:
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
    print("\n" + "=" * 65)
    print("  TRAINING EFFICIENCY (QLoRA)")
    print("=" * 65)
    header = f"{'Metric':<28} {'QLoRA':>14}"
    print(header)
    print("-" * 65)

    rows = [
        ("Trainable Params", "trainable_params", lambda v: f"{v:,}"),
        ("Trainable %", "trainable_pct", lambda v: f"{v:.2%}"),
        ("Peak VRAM (GiB)", "peak_vram_gb", lambda v: f"{v:.2f}"),
        ("Training Time (hrs)", "training_time_hours", lambda v: f"{v:.2f}"),
        ("Final Train Loss", "final_train_loss", lambda v: f"{v:.4f}" if v else "N/A"),
        ("Final Eval Loss", "final_eval_loss", lambda v: f"{v:.4f}" if v else "N/A"),
    ]

    for label, key, fmt in rows:
        t = data.get("qlora", {}).get("training", {})
        v = t.get(key)
        val = fmt(v) if v is not None else "N/A"
        print(f"  {label:<26} {val:>14}")


def print_code_metrics_table(data):
    print("\n" + "=" * 65)
    print("  CODE QUALITY METRICS (averaged across tasks)")
    print("=" * 65)
    header = f"{'Metric':<28} {'Base':>14} {'Qwen2.5':>14} {'QLoRA':>14}"
    print(header)
    print("-" * 65)

    metrics = [
        ("Parse Success Rate", "avg_parse_success_rate", lambda v: f"{v:.2%}"),
        ("BLEU-4", "avg_bleu4", lambda v: f"{v:.4f}"),
        ("CodeBLEU", "avg_codebleu", lambda v: f"{v:.4f}"),
        ("ROUGE-L", "avg_rouge_l", lambda v: f"{v:.4f}"),
        ("ChrF", "avg_chrf", lambda v: f"{v:.4f}"),
        ("METEOR", "avg_meteor", lambda v: f"{v:.4f}"),
        ("Edit Similarity", "avg_edit_similarity", lambda v: f"{v:.4f}"),
        ("Exact Match Rate", "avg_exact_match_rate", lambda v: f"{v:.2%}"),
        ("BERTScore F1", "avg_bert_score_f1", lambda v: f"{v:.4f}"),
        ("Tag Accuracy", "avg_tag_accuracy", lambda v: f"{v:.4f}"),
        ("CSS Class Acc", "avg_css_class_accuracy", lambda v: f"{v:.4f}"),
        ("Tree Edit Sim", "avg_tree_edit_similarity", lambda v: f"{v:.4f}"),
        ("Token Accuracy", "avg_token_accuracy", lambda v: f"{v:.4f}"),
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
        task_metrics = ["parse_success_rate", "bleu4", "codebleu", "rouge_l", "chrf",
                        "meteor", "edit_similarity", "exact_match_rate",
                        "bert_score_f1", "tag_accuracy", "css_class_accuracy",
                        "tree_edit_similarity", "token_accuracy"]
        for metric in task_metrics:
            vals = []
            for m in METHODS:
                e = data.get(m, {}).get("eval", {})
                pt = e.get("per_task", {}).get(task, {})
                v = pt.get(metric)
                if v is not None:
                    if metric == "parse_success_rate" or metric == "exact_match_rate":
                        vals.append(f"{v:.2%}")
                    else:
                        vals.append(f"{v:.4f}")
                else:
                    vals.append("N/A")
            print(f"    {metric:<24} {vals[0]:>14} {vals[1]:>14} {vals[2]:>14}")


def print_visual_table(data):
    print("\n" + "=" * 65)
    print("  VISUAL FIDELITY METRICS")
    print("=" * 65)

    header = f"{'Metric':<28} {'Base':>14} {'Qwen2.5':>14} {'QLoRA':>14}"
    print(header)
    print("-" * 65)

    for metric, fmt in [("avg_ssim", lambda v: f"{v:.4f}"), ("avg_psnr", lambda v: f"{v:.2f}"), ("avg_lpips", lambda v: f"{v:.4f}")]:
        vals = []
        for m in METHODS:
            vis = data.get(m, {}).get("visual", {})
            v = vis.get(metric)
            vals.append(fmt(v) if v is not None else "N/A")
        if "ssim" in metric:
            label = "SSIM (avg)"
        elif "psnr" in metric:
            label = "PSNR (avg)"
        else:
            label = "LPIPS (avg, lower=better)"
        print(f"  {label:<26} {vals[0]:>14} {vals[1]:>14} {vals[2]:>14}")

    for task in TASKS:
        print(f"\n  --- {task.upper()} ---")
        for metric in ["avg_ssim", "avg_psnr", "avg_lpips"]:
            vals = []
            for m in METHODS:
                vis = data.get(m, {}).get("visual", {})
                pt = vis.get("per_task", {}).get(task, {})
                v = pt.get(metric)
                if v is not None:
                    if "psnr" in metric:
                        vals.append(f"{v:.2f}")
                    else:
                        vals.append(f"{v:.4f}")
                else:
                    vals.append("N/A")
            if "ssim" in metric:
                label = "SSIM"
            elif "psnr" in metric:
                label = "PSNR"
            else:
                label = "LPIPS"
            print(f"    {label:<24} {vals[0]:>14} {vals[1]:>14} {vals[2]:>14}")


# ═══════════════════════════════════════════════════════════════════════════════
# LATEX EXPORT
# ═══════════════════════════════════════════════════════════════════════════════
def export_latex_table(data):
    """Export a LaTeX-ready comparison table."""
    lines = []
    lines.append(r"\begin{table}[h]")
    lines.append(r"\centering")
    lines.append(r"\caption{Base vs Qwen2.5 vs QLoRA Fine-Tuned Performance for UI Code Generation}")
    lines.append(r"\label{tab:comparison}")
    lines.append(r"\begin{tabular}{lccc}")
    lines.append(r"\hline")
    lines.append(r"\textbf{Metric} & \textbf{Base (2B)} & \textbf{Qwen2.5 (3B)} & \textbf{QLoRA} \\")
    lines.append(r"\hline")

    rows = [
        ("Trainable Params (\\%)", "training", "trainable_pct", lambda v: f"{v*100:.2f}"),
        ("Peak VRAM (GiB)", "training", "peak_vram_gb", lambda v: f"{v:.2f}"),
        ("Training Time (hrs)", "training", "training_time_hours", lambda v: f"{v:.2f}"),
        ("Parse Success Rate", "eval", "avg_parse_success_rate", lambda v: f"{v*100:.1f}\\%"),
        ("BLEU-4", "eval", "avg_bleu4", lambda v: f"{v:.4f}"),
        ("CodeBLEU", "eval", "avg_codebleu", lambda v: f"{v:.4f}"),
        ("ROUGE-L", "eval", "avg_rouge_l", lambda v: f"{v:.4f}"),
        ("ChrF", "eval", "avg_chrf", lambda v: f"{v:.4f}"),
        ("METEOR", "eval", "avg_meteor", lambda v: f"{v:.4f}"),
        ("Edit Similarity", "eval", "avg_edit_similarity", lambda v: f"{v:.4f}"),
        ("Exact Match", "eval", "avg_exact_match_rate", lambda v: f"{v*100:.1f}\\%"),
        ("BERTScore F1", "eval", "avg_bert_score_f1", lambda v: f"{v:.4f}"),
        ("Tag Accuracy", "eval", "avg_tag_accuracy", lambda v: f"{v:.4f}"),
        ("CSS Class Acc", "eval", "avg_css_class_accuracy", lambda v: f"{v:.4f}"),
        ("Tree Edit Sim", "eval", "avg_tree_edit_similarity", lambda v: f"{v:.4f}"),
        ("Token Accuracy", "eval", "avg_token_accuracy", lambda v: f"{v:.4f}"),
        ("SSIM", "visual", "avg_ssim", lambda v: f"{v:.4f}"),
        ("PSNR", "visual", "avg_psnr", lambda v: f"{v:.2f}"),
        ("LPIPS", "visual", "avg_lpips", lambda v: f"{v:.4f}"),
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
                                        "avg_inference_latency_s", "avg_lpips")
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
    with open(latex_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"\n  LaTeX table saved to: {latex_path}")


# ═══════════════════════════════════════════════════════════════════════════════
# CHARTS
# ═══════════════════════════════════════════════════════════════════════════════
def plot_bar_chart(data):
    """Bar charts for key metrics across methods."""
    CHARTS_DIR.mkdir(exist_ok=True)
    colors = {"base": "#95A5A6", "qwen2.5": "#2E86C1", "qlora": "#F58518"}

    chart_metrics = [
        ("Parse Success Rate", "eval", "avg_parse_success_rate", True),
        ("BLEU-4", "eval", "avg_bleu4", True),
        ("CodeBLEU", "eval", "avg_codebleu", True),
        ("ROUGE-L", "eval", "avg_rouge_l", True),
        ("ChrF", "eval", "avg_chrf", True),
        ("METEOR", "eval", "avg_meteor", True),
        ("Edit Similarity", "eval", "avg_edit_similarity", True),
        ("Peak VRAM (GiB)", "eval", "peak_vram_gb", False),
        ("Inference Latency (s)", "eval", "avg_inference_latency_s", False),
    ]

    fig, axes = plt.subplots(3, 3, figsize=(18, 12))
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

        bars = ax.bar(method_names, vals, color=bar_colors, width=0.4)

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

    plt.suptitle("Base vs QLoRA -- Evaluation Metrics", fontsize=14, fontweight="bold")
    plt.tight_layout()

    path = CHARTS_DIR / "metrics_comparison.png"
    plt.savefig(path)
    plt.savefig(path.with_suffix(".pdf"))
    plt.close()
    print(f"  Bar chart saved to: {path} and .pdf")


def plot_radar_chart(data):
    """Radar chart comparing methods across normalized metrics."""
    CHARTS_DIR.mkdir(exist_ok=True)

    metrics_config = [
        ("PSR", "eval", "avg_parse_success_rate"),
        ("BLEU-4", "eval", "avg_bleu4"),
        ("CodeBLEU", "eval", "avg_codebleu"),
        ("ROUGE-L", "eval", "avg_rouge_l"),
        ("ChrF", "eval", "avg_chrf"),
        ("METEOR", "eval", "avg_meteor"),
        ("EditSim", "eval", "avg_edit_similarity"),
        ("BERTScr", "eval", "avg_bert_score_f1"),
        ("TreeSim", "eval", "avg_tree_edit_similarity"),
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
    colors = {"base": "#95A5A6", "qwen2.5": "#2E86C1", "qlora": "#F58518"}

    for m in METHODS:
        values = method_values[m] + method_values[m][:1]
        ax.plot(angles, values, "o-", linewidth=2, label=METHOD_LABELS[m], color=colors[m])
        ax.fill(angles, values, alpha=0.1, color=colors[m])

    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(labels, fontsize=10)
    ax.set_ylim(0, 1.1)
    ax.legend(loc="upper right", bbox_to_anchor=(1.3, 1.1))
    ax.set_title("Base vs QLoRA (normalized)", fontsize=13, fontweight="bold", pad=20)

    path = CHARTS_DIR / "radar_comparison.png"
    plt.savefig(path)
    plt.savefig(path.with_suffix(".pdf"))
    plt.close()
    print(f"  Radar chart saved to: {path} and .pdf")


def plot_per_task_bars(data):
    """Grouped bar chart: per-task PSR, BLEU-4, and CodeBLEU."""
    CHARTS_DIR.mkdir(exist_ok=True)

    fig, axes = plt.subplots(1, 3, figsize=(20, 5))
    colors = {"base": "#95A5A6", "qwen2.5": "#2E86C1", "qlora": "#F58518"}
    x = np.arange(len(TASKS))
    width = 0.25

    for ax, (metric, title, fmt) in zip(axes, [
        ("parse_success_rate", "Parse Success Rate by Task", "{:.1%}"),
        ("bleu4", "BLEU-4 by Task", "{:.4f}"),
        ("codebleu", "CodeBLEU by Task", "{:.4f}"),
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
        ax.set_xticks(x + width / 2)
        ax.set_xticklabels([t.upper() for t in TASKS])
        ax.legend()

    plt.tight_layout()
    path = CHARTS_DIR / "per_task_comparison.png"
    plt.savefig(path)
    plt.savefig(path.with_suffix(".pdf"))
    plt.close()
    print(f"  Per-task chart saved to: {path} and .pdf")


# ═══════════════════════════════════════════════════════════════════════════════
# RANKING
# ═══════════════════════════════════════════════════════════════════════════════
def print_ranking(data):
    """Rank methods by a weighted composite score."""
    weights = {
        "avg_parse_success_rate": 0.20,
        "avg_bleu4": 0.10,
        "avg_codebleu": 0.15,
        "avg_rouge_l": 0.05,
        "avg_chrf": 0.05,
        "avg_meteor": 0.05,
        "avg_edit_similarity": 0.05,
        "avg_bert_score_f1": 0.10,
        "avg_tree_edit_similarity": 0.15,
    }

    # Add visual weight if available
    has_visual = any(data.get(m, {}).get("visual") for m in METHODS)
    if has_visual:
        weights["avg_ssim_visual"] = 0.20
        total_w = sum(weights.values())
        weights = {k: v / total_w for k, v in weights.items()}

    print("\n" + "=" * 65)
    print("  OVERALL RANKING")
    print("=" * 65)

    scores = {}
    for m in METHODS:
        score = 0
        for key, w in weights.items():
            if key == "avg_ssim_visual":
                v = data.get(m, {}).get("visual", {}).get("avg_ssim", 0) or 0
            else:
                v = data.get(m, {}).get("eval", {}).get(key, 0) or 0

            score += v * w
        # Penalize for LPIPS (lower is better, so subtract weighted LPIPS)
        lpips_val = data.get(m, {}).get("visual", {}).get("avg_lpips", None)
        if lpips_val is not None:
            score -= (lpips_val * 0.15)

        scores[m] = round(score, 4)

    ranked = sorted(scores.items(), key=lambda x: x[1], reverse=True)
    for rank, (method, score) in enumerate(ranked, 1):
        print(f"  #{rank}  {METHOD_LABELS[method]:<20}  composite score: {score:.4f}")


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
    if data.get("qlora", {}).get("training"):
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
