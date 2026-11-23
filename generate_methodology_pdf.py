"""
Generate a PDF of the rewritten Section IV (Methodology).

Structure (matches the paper; data prep stays in Section III-D):
  A. Model Configuration
  B. QLoRA Fine-Tuning Procedure   (equations 1-3 + Table IV hyperparameters)
  C. Evaluation Framework          (equations 4-6)

- Fig. 1 uses methodology_diagram_simple.pdf.
- Citations only on equations: (1) LoRA [13], (2) QLoRA [10], (6) SSIM [28].
- No RTX 3070 Ti / 8 GB references anywhere.

Usage:  py -3.10 generate_methodology_pdf.py
"""
import os
from fpdf import FPDF, XPos, YPos

BASE = r"e:\Thesis Project file"
OUTPUT = os.path.join(BASE, "thesis_methodology.pdf")
DIAGRAM = os.path.join(BASE, "methodology_diagram_simple.png")  # PNG for raster embed
FONT_DIR = r"C:\Windows\Fonts"


class PaperPDF(FPDF):
    FONT = "ArialUni"

    def __init__(self):
        super().__init__()
        self.add_font(self.FONT, "", os.path.join(FONT_DIR, "arial.ttf"))
        self.add_font(self.FONT, "B", os.path.join(FONT_DIR, "arialbd.ttf"))
        self.add_font(self.FONT, "I", os.path.join(FONT_DIR, "ariali.ttf"))
        self.add_font(self.FONT, "BI", os.path.join(FONT_DIR, "arialbi.ttf"))
        self.set_auto_page_break(auto=True, margin=25)
        self.eq_no = 0

    def header(self):
        if self.page_no() > 1:
            self.set_font(self.FONT, "I", 8)
            self.set_text_color(100, 100, 100)
            self.cell(0, 5, "Parameter-Efficient UI Code Generation Using QLoRA",
                      align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            self.set_draw_color(180, 180, 180)
            self.line(10, 13, 200, 13)
            self.ln(4)
            self.set_text_color(0, 0, 0)

    def footer(self):
        self.set_y(-15)
        self.set_font(self.FONT, "I", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 10, f"Page {self.page_no()}", align="C")
        self.set_text_color(0, 0, 0)

    def section(self, title):
        self.set_font(self.FONT, "B", 15)
        self.set_text_color(15, 50, 110)
        self.cell(0, 10, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_draw_color(15, 50, 110)
        self.line(10, self.get_y(), 200, self.get_y())
        self.set_text_color(0, 0, 0)
        self.ln(4)

    def sub(self, title):
        self.ln(1)
        self.set_font(self.FONT, "B", 12)
        self.set_text_color(30, 70, 140)
        self.cell(0, 9, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(0, 0, 0)
        self.ln(1.5)

    def subsub(self, title):
        self.set_font(self.FONT, "B", 10.5)
        self.set_text_color(50, 90, 155)
        self.cell(0, 8, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(0, 0, 0)
        self.ln(0.5)

    def body(self, text):
        self.set_font(self.FONT, "", 10)
        self.multi_cell(0, 5.5, text, align="J", markdown=True,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(2.5)

    def bullet(self, bold, rest):
        self.set_font(self.FONT, "", 10)
        self.set_x(15)
        self.cell(5, 5.5, "•")
        self.set_left_margin(20)
        self.set_x(20)
        self.multi_cell(0, 5.5, f"**{bold}** {rest}", align="J", markdown=True,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_left_margin(10)
        self.set_x(10)
        self.ln(1)

    def equation(self, text, ref=None):
        self.eq_no += 1
        self.ln(1)
        self.set_font(self.FONT, "I", 10.5)
        y0 = self.get_y()
        shown = text + (f"   [{ref}]" if ref else "")
        self.multi_cell(170, 6.5, shown, align="C",
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        y1 = self.get_y()
        self.set_xy(180, y0 + (y1 - y0) / 2 - 3)
        self.set_font(self.FONT, "", 10)
        self.cell(20, 6, f"({self.eq_no})", align="R")
        self.set_xy(10, y1)
        self.ln(2.5)

    def figure(self, path, caption, width=150):
        if self.get_y() > 160:
            self.add_page()
        x = (210 - width) / 2
        self.image(path, x=x, w=width)
        self.ln(2)
        self.set_font(self.FONT, "I", 9)
        self.set_text_color(60, 60, 60)
        self.multi_cell(0, 5, caption, align="C",
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(0, 0, 0)
        self.ln(4)

    def bibtex_section(self, entries):
        """Render BibTeX entries in a monospace code block on a fresh page."""
        self.add_page()
        self.set_font(self.FONT, "B", 15)
        self.set_text_color(15, 50, 110)
        self.cell(0, 10, "Bibliography Entries (BibTeX)",
                  new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_draw_color(15, 50, 110)
        self.line(10, self.get_y(), 200, self.get_y())
        self.set_text_color(0, 0, 0)
        self.ln(4)
        self.set_font(self.FONT, "I", 9.5)
        self.multi_cell(0, 5.5,
                        "Add these to your .bib file (or as \\bibitem entries). "
                        "hu2021lora and dettmers2023qlora are already in your "
                        "references; only wang2004ssim is new.",
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(3)
        for label, code in entries:
            self.set_font(self.FONT, "B", 9.5)
            self.set_text_color(30, 70, 140)
            self.multi_cell(0, 5.5, label, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            self.set_text_color(0, 0, 0)
            self.ln(0.5)
            # Code block with light background
            y0 = self.get_y()
            self.set_font("Courier", "", 8.3)
            nlines = code.count("\n") + 1
            box_h = nlines * 4.2 + 3
            self.set_fill_color(244, 246, 249)
            self.set_draw_color(210, 214, 220)
            self.rect(12, y0, 186, box_h, style="DF")
            self.set_xy(15, y0 + 1.5)
            for line in code.split("\n"):
                self.set_x(15)
                self.cell(0, 4.2, line, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            self.set_y(y0 + box_h)
            self.ln(4)

    def table(self, title, rows, col_w=(60, 78)):
        """Two-column boxed table with a title above it (IEEE style)."""
        if self.get_y() > 205:
            self.add_page()
        total = sum(col_w)
        x0 = (190 - total) / 2 + 10
        # Title
        self.set_font(self.FONT, "", 9)
        self.set_text_color(0, 0, 0)
        self.set_x(x0)
        self.cell(total, 5, title, align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1)
        # Top rule
        y = self.get_y()
        self.set_draw_color(0, 0, 0)
        self.set_line_width(0.4)
        self.line(x0, y, x0 + total, y)
        self.ln(1)
        # Header row
        self.set_x(x0)
        self.set_font(self.FONT, "B", 9.5)
        self.cell(col_w[0], 6, "Parameter")
        self.cell(col_w[1], 6, "Value", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        y = self.get_y()
        self.set_line_width(0.2)
        self.line(x0, y, x0 + total, y)
        self.ln(0.5)
        # Body rows
        self.set_font(self.FONT, "", 9.5)
        for k, v in rows:
            self.set_x(x0)
            self.cell(col_w[0], 5.6, k)
            self.cell(col_w[1], 5.6, v, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        # Bottom rule
        y = self.get_y()
        self.set_line_width(0.4)
        self.line(x0, y, x0 + total, y)
        self.set_line_width(0.2)
        self.ln(4)


def build():
    pdf = PaperPDF()
    pdf.add_page()

    pdf.section("IV.  METHODOLOGY")
    pdf.body(
        "The proposed methodology is a three-stage pipeline: (i) construction and "
        "preparation of the extended dataset (Section III), (ii) parameter-efficient "
        "fine-tuning of the base model with QLoRA, and (iii) automated evaluation along "
        "code-level, visual-fidelity, and efficiency dimensions. Given a UI screenshot as "
        "input, each model is asked to generate HTML with Tailwind CSS, a React JSX "
        "component, and a Vue 3 SFC using identical task-specific prompts. Fig. 1 "
        "illustrates the overall workflow."
    )
    pdf.figure(DIAGRAM, "Fig. 1.  Proposed Pipeline.")

    pdf.sub("A.  Model Configuration")
    pdf.body(
        "Three configurations are compared in order to isolate the effect of "
        "parameter-efficient adaptation from the effect of scale:"
    )
    pdf.bullet("Qwen2-VL-2B-Instruct (Base):",
               "the 2B-parameter vision-language model, evaluated zero-shot;")
    pdf.bullet("Qwen2-VL-2B-Instruct + QLoRA:",
               "the same backbone fine-tuned on the extended dataset with QLoRA;")
    pdf.bullet("Qwen2.5-VL-3B-Instruct (Base):",
               "a newer, larger 3B model, evaluated zero-shot to test whether scale "
               "alone can match task-specific adaptation.")
    pdf.body(
        "All models receive identical prompts, the same visual-token budget, and "
        "identical decoding: greedy decoding (no sampling) with a maximum of 1,536 new "
        "tokens per generation, which covers the length of the overwhelming majority of "
        "reference outputs. Inference uses batched generation with memory-efficient "
        "(SDPA/FlashAttention) attention kernels."
    )

    pdf.sub("B.  QLoRA Fine-Tuning Procedure")
    pdf.body(
        "QLoRA combines 4-bit quantization of the frozen base weights with trainable "
        "low-rank adapters. Following the low-rank adaptation of Hu et al. (2021), the "
        "update to a pretrained weight matrix W0 in R^(d×k) is constrained to a "
        "low-rank decomposition"
    )
    pdf.equation("h  =  W0·x + ΔW·x  =  W0·x + (α/r)·B·A·x")
    pdf.body(
        "where A in R^(r×k) and B in R^(d×r) are the only trainable matrices, "
        "r << min(d, k) is the adapter rank, and α is a scaling factor. In QLoRA "
        "(Dettmers et al., 2023), the frozen weights are stored in 4-bit NormalFloat "
        "(NF4) with double quantization and dequantized on the fly during the forward "
        "pass:"
    )
    pdf.equation("h  =  dequant(c1, c2, W_NF4)·x + (α/r)·B·A·x")
    pdf.body(
        "where c1, c2 are the first- and second-level quantization constants. Adapters "
        "of rank r = 64 with α = 128 and dropout 0.05 are attached to all attention and "
        "feed-forward projections (q_proj, k_proj, v_proj, o_proj, gate_proj, up_proj, "
        "down_proj); the adapters are trained in FP16 while the backbone remains frozen "
        "in NF4."
    )
    pdf.body(
        "Training minimizes the causal language-modeling loss computed __only__ on the "
        "assistant's code tokens. With image I, prompt p, and reference code "
        "y = (y_1, ..., y_T), the objective is"
    )
    pdf.equation("L(θ)  =  − ∑ (t in T_code)  log pθ( y_t | y_<t, I, p )")
    pdf.body(
        "where T_code indexes the assistant tokens; image and prompt positions are "
        "excluded from the loss by label masking, so the model learns code generation "
        "without altering its visual-encoder representations. Optimization uses AdamW "
        "with a learning rate of 1×10^-4, 100 warmup steps, weight decay 0.01, batch "
        "size 1 with gradient accumulation 8 (effective batch 8), and 3 epochs over the "
        "25,215 multi-task training examples, with a validation pass over the 2,964 "
        "validation examples after the final step. Gradient checkpointing and FP16 mixed "
        "precision keep peak training memory low. Table IV lists the hyperparameters."
    )
    pdf.table(
        "TABLE IV.  QLoRA Fine-Tuning Hyperparameters",
        [
            ("Base model", "Qwen2-VL-2B-Instruct"),
            ("Quantization", "4-bit NF4 (double quant.)"),
            ("LoRA rank (r)", "64"),
            ("LoRA alpha (α)", "128"),
            ("LoRA dropout", "0.05"),
            ("Learning rate", "1 × 10^-4"),
            ("Warmup steps", "100"),
            ("Weight decay", "0.01"),
            ("Batch size", "1 (×8 accum.)"),
            ("Epochs", "3"),
            ("Max sequence length", "2,048"),
            ("Optimizer", "AdamW"),
            ("Precision", "FP16 adapters, NF4 base"),
        ],
    )

    pdf.sub("C.  Evaluation Framework")
    pdf.body(
        "All three models are evaluated on the 1,488 held-out test conversations. "
        "Metrics are computed per task (HTML, JSX, Vue) and then averaged, so that no "
        "task dominates the aggregate. Three complementary dimensions are measured."
    )

    pdf.subsub("1)  Code-Level Metrics")
    pdf.body(
        "Parse Success Rate (PSR) measures executable syntactic validity as the "
        "fraction of generated outputs accepted by a production-grade parser "
        "(@babel/parser for JSX, @vue/compiler-sfc for Vue):"
    )
    pdf.equation("PSR  =  (1/N) ∑ 1[ parse(ŷᵢ) = success ]")
    pdf.body(
        "Similarity to the reference code is measured by BLEU-4, its code-aware "
        "extension CodeBLEU (which adds AST-match and data-flow components), ROUGE-L, "
        "ChrF, METEOR, and BERTScore F1. Character-level closeness is captured by edit "
        "similarity based on the Levenshtein distance Lev(·,·):"
    )
    pdf.equation("EditSim(ŷ, y)  =  1 − Lev(ŷ, y) / max(|ŷ|, |y|)")
    pdf.body(
        "Structure is assessed by tag accuracy (the fraction of reference HTML/JSX tags "
        "recovered in the prediction), tree edit similarity - Eq. (5) applied to the "
        "sequences of markup tags rather than characters - and token-level accuracy, "
        "the fraction of aligned tokens that match exactly."
    )

    pdf.subsub("2)  Visual-Fidelity Metrics")
    pdf.body(
        "Each generated component is rendered in a headless Chromium browser "
        "(Playwright) at a 1280×960 viewport: raw HTML is wrapped in a full page with "
        "Tailwind, JSX is mounted as a React component, and the Vue template is "
        "extracted and rendered. The screenshot of the render is compared against the "
        "original WebSight screenshot. Structural similarity is computed following "
        "Wang et al. (2004):"
    )
    pdf.equation("SSIM(u, v)  =  (2μᵤμᵥ + C1)(2σᵤᵥ + C2)"
                 "  /  (μᵤ² + μᵥ² + C1)(σᵤ² + σᵥ² + C2)")
    pdf.body(
        "with local means μ, variances σ², covariance σᵤᵥ, and stabilization constants "
        "C1, C2. PSNR is reported as 10·log10(MAX²/MSE) in dB, and perceptual "
        "similarity by LPIPS computed from deep AlexNet features, where lower is "
        "better. Samples whose code fails to render are scored zero, so visual scores "
        "jointly reflect renderability and appearance."
    )

    pdf.subsub("3)  Efficiency Metrics")
    pdf.body(
        "Inference latency is the wall-clock generation time averaged per sample under "
        "batched inference, and memory cost is the peak allocated GPU memory (GiB) "
        "recorded during inference. Together these determine deployability on "
        "consumer-grade hardware."
    )

    # ---- Bibliography entries for the equation citations ----
    pdf.bibtex_section([
        ("hu2021lora  (LoRA, Eq. 1)  -- already reference [13]",
         "@article{hu2021lora,\n"
         "  author  = {Hu, Edward J. and Shen, Yelong and Wallis, Phillip and\n"
         "             Allen-Zhu, Zeyuan and Li, Yuanzhi and Wang, Shean and\n"
         "             Wang, Lu and Chen, Weizhu},\n"
         "  title   = {LoRA: Low-Rank Adaptation of Large Language Models},\n"
         "  journal = {arXiv preprint arXiv:2106.09685},\n"
         "  year    = {2021}\n"
         "}"),
        ("dettmers2023qlora  (QLoRA, Eq. 2)  -- already reference [10]",
         "@article{dettmers2023qlora,\n"
         "  author  = {Dettmers, Tim and Pagnoni, Artidoro and Holtzman, Ari and\n"
         "             Zettlemoyer, Luke},\n"
         "  title   = {QLoRA: Efficient Finetuning of Quantized LLMs},\n"
         "  journal = {arXiv preprint arXiv:2305.14314},\n"
         "  year    = {2023}\n"
         "}"),
        ("wang2004ssim  (SSIM, Eq. 6)  -- NEW, must be added",
         "@article{wang2004ssim,\n"
         "  author  = {Wang, Zhou and Bovik, Alan C. and Sheikh, Hamid R. and\n"
         "             Simoncelli, Eero P.},\n"
         "  title   = {Image Quality Assessment: From Error Visibility to\n"
         "             Structural Similarity},\n"
         "  journal = {IEEE Transactions on Image Processing},\n"
         "  volume  = {13},\n"
         "  number  = {4},\n"
         "  pages   = {600--612},\n"
         "  year    = {2004}\n"
         "}"),
    ])

    pdf.output(OUTPUT)
    print("PDF written to:", OUTPUT)
    print("Pages:", pdf.page_no(), "| Equations:", pdf.eq_no)


if __name__ == "__main__":
    build()
