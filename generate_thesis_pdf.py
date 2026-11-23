"""
Generate a PDF of the remaining thesis sections (Methodology, Results, Error Analysis,
Conclusion) with embedded methodology diagram and evaluation charts.

Faithfully renders remaining_sections.tex content using fpdf2.
"""
import os
from fpdf import FPDF, XPos, YPos

# ── Paths ──
BASE = r"e:\Thesis Project file"
DIAGRAM = os.path.join(BASE, "methodology_diagram_simple.png")
CHARTS_DIR = os.path.join(BASE, "finetuning", "results", "charts")
OUTPUT = os.path.join(BASE, "thesis_remaining_sections.pdf")

# Windows system fonts directory
WINDOWS_FONT_DIR = r"C:\Windows\Fonts"


def get_font_dir():
    """Use Windows system fonts (Segoe UI or Arial) - no downloads needed."""
    return WINDOWS_FONT_DIR


class ThesisPDF(FPDF):
    """Custom FPDF subclass styled for an academic thesis."""

    FONT_NAME = "ArialUni"

    def __init__(self, font_dir):
        super().__init__()
        # Register Arial TTF for full Unicode support
        self.add_font(self.FONT_NAME, "", os.path.join(font_dir, "arial.ttf"))
        self.add_font(self.FONT_NAME, "B", os.path.join(font_dir, "arialbd.ttf"))
        self.add_font(self.FONT_NAME, "I", os.path.join(font_dir, "ariali.ttf"))
        self.add_font(self.FONT_NAME, "BI", os.path.join(font_dir, "arialbi.ttf"))
        self.set_auto_page_break(auto=True, margin=25)
        self._figure_counter = 0
        self._table_counter = 0
        self._section_counter = 0

    # ── Header / Footer ──
    def header(self):
        if self.page_no() > 1:
            self.set_font(self.FONT_NAME, "I", 8)
            self.set_text_color(100, 100, 100)
            self.cell(0, 5, "Parameter-Efficient UI Code Generation Using QLoRA",
                      align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            self.set_draw_color(180, 180, 180)
            self.line(10, 13, 200, 13)
            self.ln(4)
            self.set_text_color(0, 0, 0)

    def footer(self):
        self.set_y(-15)
        self.set_font(self.FONT_NAME, "I", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 10, f"Page {self.page_no()}", align="C")
        self.set_text_color(0, 0, 0)

    # ── Heading helpers ──
    def section_title(self, title):
        self._section_counter += 1
        num = self._section_counter + 3  # Starts at Section 4
        self.set_font(self.FONT_NAME, "B", 15)
        self.set_text_color(15, 50, 110)
        self.cell(0, 10, f"{num}.  {title}",
                  new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_draw_color(15, 50, 110)
        self.line(10, self.get_y(), 200, self.get_y())
        self.set_text_color(0, 0, 0)
        self.ln(4)

    def subsection_title(self, num, title):
        self.set_font(self.FONT_NAME, "B", 12)
        self.set_text_color(30, 70, 140)
        self.cell(0, 9, f"{num}  {title}",
                  new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(0, 0, 0)
        self.ln(2)

    def subsubsection_title(self, num, title):
        self.set_font(self.FONT_NAME, "B", 10.5)
        self.set_text_color(50, 90, 155)
        self.cell(0, 8, f"{num}  {title}",
                  new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(0, 0, 0)
        self.ln(1)

    # ── Text helpers ──
    def body_text(self, text):
        self.set_font(self.FONT_NAME, "", 10)
        self.multi_cell(0, 5.5, text,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(3)

    def bold_inline(self, bold_text, rest_text):
        """Print bold text followed by normal text on the same conceptual line."""
        self.set_font(self.FONT_NAME, "B", 10)
        self.write(5.5, bold_text)
        self.set_font(self.FONT_NAME, "", 10)
        self.write(5.5, rest_text)
        self.ln(7)

    def bold_paragraph(self, bold_text):
        self.set_font(self.FONT_NAME, "B", 10)
        self.multi_cell(0, 5.5, bold_text,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_font(self.FONT_NAME, "", 10)

    def italic_text(self, text):
        self.set_font(self.FONT_NAME, "I", 10)
        self.multi_cell(0, 5.5, text,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_font(self.FONT_NAME, "", 10)
        self.ln(2)

    # ── List helpers ──
    def numbered_item(self, number, bold_part, rest):
        x_start = self.get_x()
        self.set_font(self.FONT_NAME, "", 10)
        self.cell(8, 5.5, f"{number}.")
        self.set_font(self.FONT_NAME, "B", 10)
        bw = self.get_string_width(bold_part + " ")
        self.cell(bw, 5.5, bold_part + " ")
        self.set_font(self.FONT_NAME, "", 10)
        # remaining width
        remaining_w = 190 - 8 - bw
        if remaining_w < 40:
            self.ln()
            self.set_x(x_start + 8)
            remaining_w = 182
        self.multi_cell(remaining_w, 5.5, rest,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(2)

    def bullet_item(self, bold_part, rest):
        x_start = self.get_x()
        self.set_font(self.FONT_NAME, "", 10)
        bullet_indent = 15
        self.set_x(bullet_indent)
        self.cell(5, 5.5, "\u2022")  # bullet character
        self.set_font(self.FONT_NAME, "B", 10)
        bw = self.get_string_width(bold_part + " ")
        self.cell(bw, 5.5, bold_part + " ")
        self.set_font(self.FONT_NAME, "", 10)
        remaining_w = 190 - (bullet_indent - 10) - 5 - bw
        if remaining_w < 40:
            self.ln()
            self.set_x(bullet_indent + 5)
            remaining_w = 190 - (bullet_indent - 10) - 5
        self.multi_cell(remaining_w, 5.5, rest,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1.5)

    def bullet_plain(self, text):
        """Simple bullet without bold part."""
        self.set_font(self.FONT_NAME, "", 10)
        self.set_x(15)
        self.cell(5, 5.5, "\u2022")
        self.multi_cell(170, 5.5, text,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1.5)

    # ── Figure helper ──
    def add_figure(self, path, caption, width=170):
        self._figure_counter += 1
        if not os.path.exists(path):
            self.set_font(self.FONT_NAME, "I", 9)
            self.set_text_color(180, 0, 0)
            self.cell(0, 6, f"[Figure {self._figure_counter}: image not found at {os.path.basename(path)}]",
                      new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            self.set_text_color(0, 0, 0)
            self.ln(3)
            return

        # Check if we need a page break for the image
        if self.get_y() > 200:
            self.add_page()

        x = (210 - width) / 2
        self.image(path, x=x, w=width)
        self.ln(3)
        self.set_font(self.FONT_NAME, "I", 9)
        self.set_text_color(60, 60, 60)
        self.multi_cell(0, 5, f"Figure {self._figure_counter + 1}: {caption}",
                        align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(0, 0, 0)
        self.ln(5)

    # ── Table helper ──
    def add_table(self, caption, headers, rows, col_widths=None):
        self._table_counter += 1

        # Check if we need a page break
        estimated_height = (len(rows) + 2) * 6 + 15
        if self.get_y() + estimated_height > 270:
            self.add_page()

        # Caption
        self.set_font(self.FONT_NAME, "B", 9.5)
        self.set_text_color(30, 70, 140)
        self.multi_cell(0, 5, caption,
                        align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(0, 0, 0)
        self.ln(3)

        num_cols = len(headers)
        if col_widths is None:
            col_widths = [190 / num_cols] * num_cols

        # Center the table
        table_width = sum(col_widths)
        x_offset = (210 - table_width) / 2
        self.set_x(x_offset)

        # Header row
        self.set_font(self.FONT_NAME, "B", 8.5)
        self.set_fill_color(220, 235, 250)
        self.set_draw_color(150, 170, 200)
        for i, h in enumerate(headers):
            self.cell(col_widths[i], 7, h, border=1, fill=True, align="C")
        self.ln()

        # Data rows
        self.set_font(self.FONT_NAME, "", 8.5)
        for row_idx, row in enumerate(rows):
            self.set_x(x_offset)
            fill = row_idx % 2 == 1
            if fill:
                self.set_fill_color(242, 246, 252)
            for i, cell in enumerate(row):
                align = "L" if i == 0 else "C"
                self.cell(col_widths[i], 6, str(cell), border=1,
                          fill=fill, align=align)
            self.ln()
        self.ln(5)


def build_pdf():
    font_dir = get_font_dir()
    pdf = ThesisPDF(font_dir)
    pdf.set_title("Parameter-Efficient UI Code Generation Using QLoRA - Remaining Sections")
    pdf.set_author("Thesis")
    pdf.add_page()

    # ══════════════════════════════════════════════
    #  TITLE PAGE
    # ══════════════════════════════════════════════
    pdf.ln(30)
    pdf.set_font(pdf.FONT_NAME, "B", 20)
    pdf.set_text_color(15, 50, 110)
    pdf.multi_cell(0, 10,
                   "Parameter-Efficient UI Code Generation\n"
                   "Using QLoRA on an Extended WebSight Dataset",
                   align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(6)
    pdf.set_font(pdf.FONT_NAME, "", 13)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 8, "Remaining Thesis Sections (4 \u2013 7)",
             align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(4)
    pdf.set_font(pdf.FONT_NAME, "I", 11)
    pdf.cell(0, 8, "Methodology  \u00b7  Experimental Results  \u00b7  Error Analysis  \u00b7  Conclusion",
             align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.set_text_color(0, 0, 0)
    pdf.ln(10)
    pdf.set_draw_color(15, 50, 110)
    pdf.line(50, pdf.get_y(), 160, pdf.get_y())
    pdf.ln(15)

    # ══════════════════════════════════════════════
    #  SECTION 4: METHODOLOGY
    # ══════════════════════════════════════════════
    pdf.add_page()
    pdf.section_title("Methodology")

    pdf.body_text(
        "This section describes the overall experimental pipeline, the models under comparison, "
        "the fine-tuning procedure, and the evaluation framework used to assess multi-task UI code generation."
    )

    # 4.1 Overview
    pdf.subsection_title("4.1", "Overview")

    pdf.body_text(
        "The proposed methodology follows a three-stage pipeline: (i) model preparation and optional "
        "fine-tuning, (ii) multi-task inference on the held-out test set, and (iii) automated evaluation "
        "using both code-level and visual-fidelity metrics. Given a UI screenshot as input, each model is "
        "tasked with generating frontend code in three target formats\u2014HTML with Tailwind CSS, React JSX, "
        "and Vue 3 SFC\u2014using identical task-specific prompts. Figure 2 illustrates the overall workflow."
    )

    # Methodology diagram
    pdf.add_figure(
        DIAGRAM,
        "Overall methodology: screenshot-to-code generation and evaluation pipeline.",
        width=170
    )

    # 4.2 Model Selection and Configuration
    pdf.subsection_title("4.2", "Model Selection and Configuration")

    pdf.body_text(
        "Three model configurations are compared to investigate the effect of parameter-efficient "
        "fine-tuning versus scaling on UI code generation:"
    )

    pdf.numbered_item(1, "Qwen2-VL-2B-Instruct (Base):",
                      "A 2-billion parameter vision-language model from the Qwen2-VL family, "
                      "evaluated in zero-shot mode. This serves as the baseline, representing the "
                      "capability of a small VLM without any task-specific adaptation.")
    pdf.numbered_item(2, "Qwen2-VL-2B-Instruct + QLoRA (Fine-tuned):",
                      "The same 2B base model, fine-tuned on the extended WebSight dataset using QLoRA. "
                      "The base weights are quantized to 4-bit NF4 precision, while low-rank adapters "
                      "are trained in FP16. This configuration tests whether parameter-efficient "
                      "fine-tuning on a small model can significantly boost performance.")
    pdf.numbered_item(3, "Qwen2.5-VL-3B-Instruct (Base):",
                      "A newer 3-billion parameter model from the Qwen2.5-VL family, evaluated in "
                      "zero-shot mode. This tests whether a larger, more recent architecture can match "
                      "or exceed the fine-tuned smaller model without any task-specific training.")

    pdf.body_text(
        "All models use the same inference configuration: greedy decoding (temperature = 0), "
        "a maximum of 1,536 new tokens, and batch sizes optimized for GPU utilization. Images are "
        "pre-resized to reduce vision token counts and accelerate inference."
    )

    # 4.3 QLoRA Fine-Tuning Procedure
    pdf.subsection_title("4.3", "QLoRA Fine-Tuning Procedure")

    pdf.body_text(
        "The fine-tuning follows the QLoRA methodology, which combines 4-bit quantization with "
        "low-rank adaptation. Table 6 summarizes the hyperparameter configuration."
    )

    # Table 6: QLoRA Hyperparameters
    pdf.add_table(
        "Table 6: QLoRA Fine-Tuning Hyperparameters",
        ["Parameter", "Value"],
        [
            ["Base model", "Qwen2-VL-2B-Instruct"],
            ["Quantization", "4-bit NF4, double quantization"],
            ["LoRA rank (r)", "64"],
            ["LoRA alpha (\u03b1)", "128"],
            ["LoRA dropout", "0.05"],
            ["Target modules", "q, k, v, o, gate, up, down proj."],
            ["Learning rate", "1 \u00d7 10\u207b\u2074"],
            ["Epochs", "3"],
            ["Batch size", "1 (gradient accum. = 8)"],
            ["Warmup steps", "100"],
            ["Max sequence length", "2,048 tokens"],
            ["Optimizer", "AdamW"],
            ["Gradient checkpointing", "Enabled"],
            ["Hardware", "NVIDIA RTX 3070 Ti (8 GB)"],
        ],
        col_widths=[70, 100]
    )

    pdf.body_text(
        "The LoRA adapters are applied to all attention and feed-forward projection layers "
        "(q_proj, k_proj, v_proj, o_proj, gate_proj, up_proj, down_proj), enabling the model to "
        "learn task-specific representations while keeping the quantized base frozen. The training "
        "uses 25,215 multi-task examples (three tasks per image: HTML, JSX, Vue) over 3 epochs. "
        "During training, labels are masked so that the loss is computed only on the assistant's "
        "code output, not on the image tokens or the user prompt."
    )

    # 4.4 Evaluation Framework
    pdf.subsection_title("4.4", "Evaluation Framework")

    pdf.body_text(
        "The evaluation is conducted on 1,488 held-out test samples (496 per task) and "
        "employs two complementary evaluation dimensions:"
    )

    # 4.4.1 Code-Level Metrics
    pdf.subsubsection_title("4.4.1", "Code-Level Metrics")

    code_metrics = [
        ("Parse Success Rate (PSR):",
         "Percentage of generated code that passes AST-level parsing using production-grade "
         "parsers\u2014@babel/parser for JSX and @vue/compiler-sfc for Vue."),
        ("BLEU-4:",
         "Measures n-gram overlap between generated and reference code."),
        ("CodeBLEU:",
         "A code-aware variant of BLEU that incorporates syntax (AST match), dataflow, "
         "and weighted n-gram components."),
        ("ROUGE-L:",
         "Evaluates longest common subsequence similarity."),
        ("ChrF:",
         "Character n-gram F-score, robust to tokenization differences."),
        ("METEOR:",
         "Precision/recall metric with synonym and stemming awareness."),
        ("Edit Similarity:",
         "1 \u2212 normalized Levenshtein distance, measuring character-level closeness."),
        ("BERTScore F1:",
         "Semantic similarity via contextual embeddings."),
        ("Tag Accuracy:",
         "Fraction of reference HTML/JSX tags recovered in the prediction."),
        ("Tree Edit Similarity:",
         "Structural similarity based on tag-sequence Levenshtein distance."),
    ]
    for bold, rest in code_metrics:
        pdf.bullet_item(bold, rest)

    # 4.4.2 Visual Fidelity Metrics
    pdf.subsubsection_title("4.4.2", "Visual Fidelity Metrics")

    pdf.body_text(
        "Generated code is rendered in a headless Chromium browser via Playwright, and the "
        "resulting screenshots are compared pixel-by-pixel against the original WebSight images:"
    )

    vis_metrics = [
        ("SSIM:", "Structural similarity index (0\u20131; higher is better)."),
        ("PSNR:", "Peak signal-to-noise ratio in dB (higher is better)."),
        ("LPIPS:", "Learned perceptual image patch similarity (lower is better)."),
    ]
    for bold, rest in vis_metrics:
        pdf.bullet_item(bold, rest)

    # 4.4.3 Efficiency Metrics
    pdf.subsubsection_title("4.4.3", "Efficiency Metrics")

    pdf.body_text(
        "Inference latency (seconds per sample) and peak VRAM consumption (GiB) are recorded "
        "to assess practical deployment feasibility on consumer-grade GPUs (tested on NVIDIA "
        "RTX 3070 Ti, 8 GB VRAM)."
    )

    # ══════════════════════════════════════════════
    #  SECTION 5: EXPERIMENTAL RESULTS
    # ══════════════════════════════════════════════
    pdf.add_page()
    pdf.section_title("Experimental Results")

    # 5.1 Overall Performance Comparison
    pdf.subsection_title("5.1", "Overall Performance Comparison")

    pdf.body_text(
        "Table 7 presents the aggregated evaluation results across all three tasks (HTML, JSX, "
        "Vue) for the three model configurations. The QLoRA fine-tuned model achieves the highest "
        "scores across nearly all code-level and visual-fidelity metrics."
    )

    # Table 7: Overall Results
    pdf.add_table(
        "Table 7: Overall performance comparison across all tasks (averaged). Best values in bold.",
        ["Metric", "Base (2B)", "Qwen2.5 (3B)", "QLoRA (2B)"],
        [
            ["PSR (%)", "96.24", "99.46", "99.93"],
            ["BLEU-4", "52.24", "54.31", "80.73"],
            ["CodeBLEU", "0.519", "0.573", "0.732"],
            ["ROUGE-L", "0.567", "0.614", "0.812"],
            ["ChrF", "59.76", "64.78", "84.02"],
            ["METEOR", "0.531", "0.589", "0.780"],
            ["Edit Sim.", "0.498", "0.537", "0.774"],
            ["BERTScore F1", "0.908", "0.908", "0.957"],
            ["Tag Accuracy", "0.564", "0.641", "0.874"],
            ["Tree Edit Sim.", "0.507", "0.532", "0.807"],
            ["SSIM", "0.507", "0.735", "0.736"],
            ["PSNR (dB)", "9.62", "11.95", "12.21"],
            ["LPIPS \u2193", "0.674", "0.464", "0.452"],
            ["Latency (s) \u2193", "7.28", "42.59", "4.45"],
            ["VRAM (GiB) \u2193", "6.51", "8.59", "2.89"],
        ],
        col_widths=[42, 42, 52, 50]
    )

    pdf.body_text(
        "The QLoRA fine-tuned model outperforms the base Qwen2-VL-2B by substantial margins: "
        "+54.6% in BLEU-4, +41.1% in CodeBLEU, +43.3% in ROUGE-L, and +45.1% in SSIM. Compared "
        "to the larger Qwen2.5-VL-3B zero-shot model, QLoRA still leads by +48.7% in BLEU-4 and "
        "+27.8% in CodeBLEU, demonstrating that task-specific fine-tuning on a smaller model can "
        "surpass a larger untrained model."
    )

    # Insert metrics comparison chart
    chart_metrics = os.path.join(CHARTS_DIR, "metrics_comparison.png")
    pdf.add_figure(
        chart_metrics,
        "Side-by-side bar chart comparison of key evaluation metrics across all three model configurations.",
        width=175
    )

    # 5.2 Per-Task Analysis
    pdf.subsection_title("5.2", "Per-Task Analysis")

    pdf.body_text(
        "Table 8 presents the per-task breakdown for key metrics, revealing important differences "
        "across generation targets."
    )

    # Table 8: Per-Task
    pdf.add_table(
        "Table 8: Per-task performance for selected metrics.",
        ["Task", "Metric", "Base (2B)", "Qwen2.5 (3B)", "QLoRA (2B)"],
        [
            ["HTML", "PSR (%)", "100.0", "100.0", "100.0"],
            ["", "BLEU-4", "64.69", "59.16", "83.23"],
            ["", "CodeBLEU", "0.639", "0.607", "0.774"],
            ["", "SSIM", "0.387", "0.732", "0.752"],
            ["JSX", "PSR (%)", "94.76", "98.79", "100.0"],
            ["", "BLEU-4", "38.86", "50.46", "81.32"],
            ["", "CodeBLEU", "0.459", "0.523", "0.696"],
            ["", "SSIM", "0.748", "0.748", "0.748"],
            ["Vue", "PSR (%)", "93.95", "99.60", "99.80"],
            ["", "BLEU-4", "53.16", "53.31", "77.64"],
            ["", "CodeBLEU", "0.460", "0.590", "0.728"],
            ["", "SSIM", "0.387", "0.724", "0.708"],
        ],
        col_widths=[25, 35, 40, 45, 45]
    )

    pdf.body_text(
        "Several observations emerge from the per-task analysis:"
    )

    pdf.bold_inline(
        "HTML ",
        "is the easiest task, with 100% PSR across all models. The base model scores a "
        "higher BLEU-4 than Qwen2.5 (64.69 vs. 59.16), likely due to the newer model's "
        "more aggressive reformatting."
    )

    pdf.bold_inline(
        "JSX ",
        "shows the largest gap: QLoRA achieves 81.32 BLEU-4 versus 38.86 for the base "
        "model (+109%), while raising PSR from 94.76% to 100%."
    )

    pdf.bold_inline(
        "Vue ",
        "follows a similar trend\u2014QLoRA improves BLEU-4 from 53.16 to 77.64 (+46%) and "
        "reduces parse failures from ~6% to 0.20%."
    )

    # Insert per-task comparison chart
    chart_per_task = os.path.join(CHARTS_DIR, "per_task_comparison.png")
    pdf.add_figure(
        chart_per_task,
        "Per-task comparison of Parse Success Rate, BLEU-4, and CodeBLEU across HTML, JSX, and Vue.",
        width=170
    )

    # 5.3 Resource Efficiency
    pdf.subsection_title("5.3", "Resource Efficiency")

    pdf.body_text(
        "A key finding is the resource efficiency of the QLoRA approach. The fine-tuned model "
        "requires only 2.89 GiB of VRAM at inference\u201455.6% less than the base model (6.51 GiB) "
        "and 66.4% less than Qwen2.5-VL-3B (8.59 GiB). Inference latency is also lowest at "
        "4.45 seconds per sample, compared to 7.28 s for the base and 42.59 s for Qwen2.5-VL-3B. "
        "The significantly higher latency of Qwen2.5-VL-3B is attributable to its larger parameter "
        "count (3B vs. 2B) and higher-precision computation (BFloat16 vs. 4-bit quantized)."
    )

    # Table 9: Resource Efficiency
    pdf.add_table(
        "Table 9: Resource Efficiency Comparison",
        ["Metric", "Base (2B)", "Qwen2.5 (3B)", "QLoRA (2B)", "QLoRA Savings"],
        [
            ["Peak VRAM (GiB)", "6.51", "8.59", "2.89", "55.6\u201366.4% less"],
            ["Latency (s/sample)", "7.28", "42.59", "4.45", "38.9\u201389.6% faster"],
        ],
        col_widths=[38, 30, 34, 34, 54]
    )

    pdf.body_text(
        "These results demonstrate that QLoRA fine-tuning not only improves output quality but "
        "also reduces inference cost, making it highly suitable for deployment on consumer-grade GPUs."
    )

    # 5.4 Analysis
    pdf.subsection_title("5.4", "Analysis: Why Models Perform Differently")

    pdf.bold_paragraph("Why QLoRA outperforms the base model:")
    pdf.body_text(
        "The base model was pre-trained on general vision-language tasks but lacks task-specific "
        "training for screenshot-to-code with JSX/Vue targets. QLoRA adapts attention and "
        "feed-forward layers to learn: (a) visual UI to code mappings, (b) framework-specific "
        "syntax (className for JSX, <template> for Vue), and (c) Tailwind CSS vocabulary."
    )

    pdf.bold_paragraph("Why QLoRA outperforms the larger Qwen2.5-VL-3B:")
    pdf.body_text(
        "Despite 50% more parameters, Qwen2.5-VL-3B lacks task-specific knowledge. It produces "
        "reasonable but stylistically different code, resulting in lower textual similarity despite "
        "producing visually comparable outputs."
    )

    pdf.bold_paragraph("Why Qwen2.5-VL-3B achieves competitive visual scores:")
    pdf.body_text(
        "The 3B model's higher capacity allows it to understand UI layouts well enough for visually "
        "similar output through different code paths (BERTScore 0.908 indicates semantic similarity, "
        "while lower BLEU-4 shows surface-level differences)."
    )

    # Insert radar chart
    chart_radar = os.path.join(CHARTS_DIR, "radar_comparison.png")
    pdf.add_figure(
        chart_radar,
        "Radar chart showing normalized performance comparison across key metrics.",
        width=150
    )

    # ══════════════════════════════════════════════
    #  SECTION 6: ERROR ANALYSIS
    # ══════════════════════════════════════════════
    pdf.add_page()
    pdf.section_title("Error Analysis")

    # 6.1 Quantitative Error Analysis
    pdf.subsection_title("6.1", "Quantitative Error Analysis")

    pdf.body_text(
        "Table 10 quantifies the primary error categories observed across model outputs on the "
        "1,488 test samples."
    )

    # Table 10: Error Breakdown
    pdf.add_table(
        "Table 10: Quantitative error breakdown by model (% of test samples).",
        ["Error Type", "Base (2B)", "Qwen2.5 (3B)", "QLoRA (2B)"],
        [
            ["Parse failure (JSX)", "5.24%", "1.21%", "0.00%"],
            ["Parse failure (Vue)", "6.05%", "0.40%", "0.20%"],
            ["Low edit sim. (<0.3)", "18.7%", "12.4%", "3.2%"],
            ["Exact match rate", "0.00%", "0.00%", "0.60%"],
            ["Token acc. <5%", "72.8%", "61.3%", "24.1%"],
        ],
        col_widths=[48, 45, 48, 49]
    )

    pdf.body_text(
        "Parse failures are largely eliminated by QLoRA for JSX (0.00%) and nearly eliminated "
        "for Vue (0.20%, corresponding to only 1 sample out of 496). The base model, by contrast, "
        "fails to produce parseable JSX in 5.24% of cases and Vue in 6.05% of cases. Common parse "
        "errors in the base model include unclosed JSX expressions, missing className conversions "
        "(using class instead), and malformed Vue <template> blocks."
    )

    pdf.body_text(
        "Low edit similarity samples (below 0.3) indicate outputs that are substantially different "
        "from the reference. Only 3.2% of QLoRA outputs fall into this category compared to 18.7% "
        "for the base, reflecting the fine-tuned model's closer adherence to expected code structure."
    )

    pdf.body_text(
        "Token accuracy remains relatively low even for QLoRA (18.26% on average), indicating "
        "that exact token-level replication is not achieved. This is expected in code generation "
        "tasks where semantically equivalent code can differ in whitespace, variable naming, "
        "and ordering of CSS classes."
    )

    # 6.2 Qualitative Error Analysis
    pdf.subsection_title("6.2", "Qualitative Error Analysis")

    pdf.body_text("Qualitative inspection of model outputs reveals distinct failure modes:")

    pdf.bold_paragraph("Base Qwen2-VL-2B:")
    pdf.body_text(
        "Frequently produces HTML-like output even when prompted for JSX or Vue, suggesting the "
        "model's pre-training distribution is heavily biased toward HTML. It also tends to "
        "hallucinate CSS class names not present in the reference and occasionally generates "
        "incomplete component structures (e.g., missing export statements in JSX)."
    )

    pdf.bold_paragraph("Qwen2.5-VL-3B:")
    pdf.body_text(
        "Generates more structurally correct outputs but tends to deviate stylistically from the "
        "reference\u2014applying its own formatting conventions, reordering elements, and substituting "
        "equivalent but different Tailwind classes. This explains why its BLEU-4 and CodeBLEU "
        "scores remain moderate despite high PSR and BERTScore values: the semantic content is "
        "preserved but surface-level code differs."
    )

    pdf.bold_paragraph("QLoRA fine-tuned model:")
    pdf.body_text(
        "Closely mirrors the reference code structure, Tailwind class usage, and component "
        "organization. Its primary remaining errors are in complex nested layouts where the "
        "model may truncate deeply nested elements due to the 1,536-token generation limit, "
        "and in rare cases where CSS class ordering differs from the reference without "
        "affecting visual output."
    )

    # 6.3 Visual Fidelity Analysis
    pdf.subsection_title("6.3", "Visual Fidelity Analysis")

    pdf.body_text(
        "The visual evaluation reveals an interesting pattern: while QLoRA achieves the highest "
        "SSIM (0.736) and lowest LPIPS (0.452) on average, the Qwen2.5-VL-3B model performs "
        "comparably (SSIM = 0.735, LPIPS = 0.464). This suggests that the larger model "
        "compensates for code-level differences through equivalent visual rendering\u2014the generated "
        "code may differ textually but produces visually similar outputs when rendered. However, "
        "the base Qwen2-VL-2B shows substantially lower visual fidelity (SSIM = 0.507), "
        "confirming that its code-level errors directly translate to degraded visual output."
    )

    # ══════════════════════════════════════════════
    #  SECTION 7: CONCLUSION
    # ══════════════════════════════════════════════
    pdf.add_page()
    pdf.section_title("Conclusion")

    # 7.1 Summary of Contributions
    pdf.subsection_title("7.1", "Summary of Contributions")

    pdf.body_text(
        "This work presents a comprehensive pipeline for multi-task UI code generation from "
        "screenshots, with three key contributions:"
    )

    pdf.numbered_item(1, "Extended WebSight Dataset:",
                      "The original WebSight dataset was extended by generating validated React "
                      "JSX and Vue 3 SFC code for each HTML sample using Qwen2.5-Coder-7B. The "
                      "extended dataset of 9,889 validated samples, each with three code variants, "
                      "provides a new multi-framework benchmark for UI-to-code research. Quality was "
                      "verified through three independent validators achieving an average PABAK of 0.9786.")
    pdf.numbered_item(2, "QLoRA Fine-Tuning for UI Code Generation:",
                      "QLoRA fine-tuning of a 2B-parameter VLM achieves substantial improvements over "
                      "zero-shot baselines. The fine-tuned model improves BLEU-4 by 54.6%, CodeBLEU by "
                      "41.1%, and SSIM by 45.1% over the base model, while also outperforming the larger "
                      "3B-parameter Qwen2.5-VL model across all code-level metrics.")
    pdf.numbered_item(3, "Multi-Dimensional Evaluation:",
                      "A comprehensive evaluation framework combining 13 code-level metrics, 3 visual-fidelity "
                      "metrics, and efficiency metrics provides a holistic assessment that addresses limitations "
                      "of benchmarks relying solely on visual similarity.")

    # 7.2 Key Findings
    pdf.subsection_title("7.2", "Key Findings")

    pdf.body_text(
        "The results support two important findings."
    )

    pdf.bold_inline(
        "Finding 1: ",
        "Parameter-efficient fine-tuning outperforms model scaling for targeted code generation "
        "tasks: the 2B QLoRA model consistently surpasses the larger 3B zero-shot model while "
        "using 66.4% less VRAM and providing 9.6\u00d7 faster inference."
    )

    pdf.bold_inline(
        "Finding 2: ",
        "The gap between code-level and visual-level metrics highlights that surface-level code "
        "similarity (BLEU, edit distance) and rendered visual similarity (SSIM, LPIPS) capture "
        "complementary aspects of generation quality\u2014a model may produce visually equivalent "
        "output using different code patterns."
    )

    # 7.3 Limitations
    pdf.subsection_title("7.3", "Limitations")

    pdf.body_text("Several limitations should be acknowledged:")

    limitations = [
        ("Synthetic dataset:",
         "The WebSight dataset consists of synthetically generated web pages, which may not "
         "fully represent the complexity and diversity of real-world production UIs with dynamic "
         "content, API integrations, and accessibility requirements."),
        ("Single fine-tuning method:",
         "While the title references LoRA, QLoRA, and DoRA, the experimental comparison is limited "
         "to QLoRA fine-tuning versus zero-shot baselines. A direct comparison of LoRA, QLoRA, "
         "and DoRA under identical conditions remains for future work due to hardware constraints "
         "(8 GB VRAM)."),
        ("Token generation limit:",
         "The 1,536-token limit causes truncation on approximately 0.2% of complex samples. "
         "Longer generation windows would improve coverage at the cost of increased latency."),
        ("Static evaluation:",
         "The rendered visual comparison captures only static appearance. Interactive behaviors "
         "(animations, hover effects, responsive breakpoints) are not evaluated."),
    ]
    for bold, rest in limitations:
        pdf.bullet_item(bold, rest)

    # 7.4 Future Work
    pdf.subsection_title("7.4", "Future Work")

    pdf.body_text("Several directions for future research are identified:")

    future = [
        ("Comparative PEFT study:",
         "A systematic comparison of LoRA, QLoRA, DoRA, and adapter-based methods on the "
         "same dataset and base model would clarify the relative effectiveness of each "
         "adaptation strategy for code generation."),
        ("Larger and real-world datasets:",
         "Extending the pipeline to real-world UI datasets (e.g., screenshots scraped from "
         "production websites) and scaling to the full 1.92M WebSight samples would test "
         "generalization and scalability."),
        ("Interactive and responsive evaluation:",
         "Developing evaluation metrics that capture responsive layout behavior across "
         "viewports, accessibility compliance (WCAG), and interactive element functionality "
         "would provide a more complete quality assessment."),
        ("Iterative refinement:",
         "Integrating self-repair loops during inference\u2014where the model receives validation "
         "errors and regenerates failed code\u2014could further improve PSR and code quality."),
        ("Cross-framework transfer:",
         "Investigating whether fine-tuning on one framework (e.g., React) transfers to "
         "improved generation in related frameworks (e.g., Vue, Svelte) would explore the "
         "model's ability to learn generalizable UI patterns rather than framework-specific syntax."),
    ]
    for bold, rest in future:
        pdf.bullet_item(bold, rest)

    # ══════════════════════════════════════════════
    #  REFERENCES
    # ══════════════════════════════════════════════
    pdf.add_page()
    pdf.set_font(pdf.FONT_NAME, "B", 15)
    pdf.set_text_color(15, 50, 110)
    pdf.cell(0, 10, "References", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.set_draw_color(15, 50, 110)
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.set_text_color(0, 0, 0)
    pdf.ln(6)

    refs = [
        "[37] P. Wang et al., \u201cQwen2-VL: Enhancing Vision-Language Model\u2019s Perception of the World at Any Resolution,\u201d arXiv:2409.12191, 2024.",
        "[38] E. J. Hu et al., \u201cLoRA: Low-Rank Adaptation of Large Language Models,\u201d Proc. ICLR, 2022.",
        "[39] S. Bai et al., \u201cQwen2.5-VL Technical Report,\u201d arXiv:2502.13923, 2025.",
        "[40] K. Papineni et al., \u201cBLEU: A Method for Automatic Evaluation of Machine Translation,\u201d Proc. ACL, pp. 311\u2013318, 2002.",
        "[41] S. Ren et al., \u201cCodeBLEU: A Method for Automatic Evaluation of Code Synthesis,\u201d arXiv:2009.10297, 2020.",
        "[42] C.-Y. Lin, \u201cROUGE: A Package for Automatic Evaluation of Summaries,\u201d Text Summarization Branches Out, pp. 74\u201381, 2004.",
        "[43] T. Zhang et al., \u201cBERTScore: Evaluating Text Generation with BERT,\u201d Proc. ICLR, 2020.",
        "[44] Microsoft, \u201cPlaywright: End-to-End Testing for Modern Web Apps,\u201d https://playwright.dev, 2024.",
        "[45] Z. Wang et al., \u201cImage Quality Assessment: From Error Visibility to Structural Similarity,\u201d IEEE Trans. Image Processing, vol. 13, no. 4, pp. 600\u2013612, 2004.",
        "[46] R. Zhang et al., \u201cThe Unreasonable Effectiveness of Deep Features as a Perceptual Metric,\u201d Proc. CVPR, pp. 586\u2013595, 2018.",
        "[47] T. Dettmers et al., \u201cQLoRA: Efficient Finetuning of Quantized Language Models,\u201d NeurIPS, 2023.",
        "[48] D. Liu et al., \u201cDoRA: Weight-Decomposed Low-Rank Adaptation,\u201d arXiv:2402.09353, 2024.",
    ]

    pdf.set_font(pdf.FONT_NAME, "", 9)
    for ref in refs:
        pdf.multi_cell(0, 5, ref, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        pdf.ln(2)

    # ── Save ──
    pdf.output(OUTPUT)
    print(f"\n{'='*60}")
    print(f"  PDF saved to: {OUTPUT}")
    print(f"  Pages: {pdf.page_no()}")
    print(f"  Figures: {pdf._figure_counter}")
    print(f"  Tables: {pdf._table_counter}")
    print(f"{'='*60}")


if __name__ == "__main__":
    build_pdf()
