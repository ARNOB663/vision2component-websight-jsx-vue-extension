"""
Generate a PDF of the revised Abstract and Introduction.

Renders abstract_and_intro.tex content using fpdf2, matching the styling of
generate_thesis_pdf.py.

Citation keys are mapped to the LNCS reference numbering used in the submitted
paper so the preview reads with real citation markers.

Usage:
    py -3.10 generate_abstract_intro_pdf.py
"""
import os
import re
from fpdf import FPDF, XPos, YPos

# ── Paths ──
BASE = r"e:\Thesis Project file"
OUTPUT = os.path.join(BASE, "thesis_abstract_intro.pdf")
WINDOWS_FONT_DIR = r"C:\Windows\Fonts"

TITLE = "Parameter-Efficient UI-to-Code Generation Using QLoRA on an Extended WebSight Dataset"
AUTHORS = "Aniruddha Dev Nath, Anitya Barua"
AFFILIATION = ("Department of Computer Science and Engineering, "
               "East Delta University, Bangladesh")
EMAILS = "{223002912, 223003012}@eastdelta.edu.bd"

# ── Citation keys -> LNCS reference numbers (from the submitted bibliography) ──
CITE_MAP = {
    "beltramelli2017pix2code": 2,
    "byrt1993pabak": 5,
    "dettmers2023qlora": 8,
    "feng2023uicoder": 11,
    "han2024peft": 12,
    "hu2021lora": 13,
    "hui2024qwen25coder": 14,
    "laurencon2024websight": 16,
    "lee2023pix2struct": 17,
    "lester2021prompttuning": 18,
    "li2024design2code": 19,
    "nguyen2015remaui": 20,
    "wang2024qwen2vl": 23,
}


def cite(*keys):
    """Render one or more citation keys as an LNCS-style bracketed marker."""
    nums = sorted(CITE_MAP[k] for k in keys)
    return "[" + ", ".join(str(n) for n in nums) + "]"


class PaperPDF(FPDF):
    """FPDF subclass styled to match generate_thesis_pdf.py."""

    FONT_NAME = "ArialUni"

    def __init__(self, font_dir=WINDOWS_FONT_DIR):
        super().__init__()
        self.add_font(self.FONT_NAME, "", os.path.join(font_dir, "arial.ttf"))
        self.add_font(self.FONT_NAME, "B", os.path.join(font_dir, "arialbd.ttf"))
        self.add_font(self.FONT_NAME, "I", os.path.join(font_dir, "ariali.ttf"))
        self.add_font(self.FONT_NAME, "BI", os.path.join(font_dir, "arialbi.ttf"))
        self.set_auto_page_break(auto=True, margin=25)

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

    # ── Title block ──
    def title_block(self):
        self.set_font(self.FONT_NAME, "B", 15)
        self.set_text_color(15, 50, 110)
        self.multi_cell(0, 7, TITLE, align="C",
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(0, 0, 0)
        self.ln(3)

        self.set_font(self.FONT_NAME, "B", 10.5)
        self.multi_cell(0, 5.5, AUTHORS, align="C",
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_font(self.FONT_NAME, "", 9.5)
        self.set_text_color(70, 70, 70)
        self.multi_cell(0, 5, AFFILIATION, align="C",
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.multi_cell(0, 5, EMAILS, align="C",
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(0, 0, 0)
        self.ln(6)

    # ── Headings ──
    def section_title(self, num, title):
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

    # ── Text ──
    def body(self, text, size=10):
        self.set_font(self.FONT_NAME, "", size)
        self.multi_cell(0, 5.5, text, align="J", markdown=True,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(3)

    def abstract_block(self, text):
        """Indented, slightly smaller justified block for the abstract body."""
        self.set_left_margin(20)
        self.set_right_margin(20)
        self.set_x(20)
        self.set_font(self.FONT_NAME, "", 9.5)
        self.multi_cell(0, 5.2, text, align="J", markdown=True,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_left_margin(10)
        self.set_right_margin(10)
        self.set_x(10)
        self.ln(3)

    def abstract_heading(self):
        self.set_left_margin(20)
        self.set_x(20)
        self.set_font(self.FONT_NAME, "B", 11)
        self.cell(0, 7, "Abstract", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_left_margin(10)
        self.set_x(10)
        self.ln(1)

    def quote_block(self, text):
        """Indented italic display quote, used for the research question."""
        self.ln(1)
        left = 22
        self.set_left_margin(left)
        self.set_right_margin(20)
        self.set_x(left)
        # Vertical rule
        y0 = self.get_y()
        self.set_font(self.FONT_NAME, "I", 10)
        self.multi_cell(0, 5.5, text, align="J",
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        y1 = self.get_y()
        self.set_draw_color(15, 50, 110)
        self.set_line_width(0.6)
        self.line(left - 4, y0, left - 4, y1 - 1)
        self.set_line_width(0.2)
        self.set_left_margin(10)
        self.set_right_margin(10)
        self.set_x(10)
        self.ln(4)

    def numbered_item(self, number, bold_part, rest):
        self.set_font(self.FONT_NAME, "", 10)
        self.set_x(12)
        self.cell(7, 5.5, f"{number}.")
        self.set_x(19)
        self.set_left_margin(19)
        self.multi_cell(0, 5.5, f"**{bold_part}** {rest}", align="J",
                        markdown=True, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_left_margin(10)
        self.set_x(10)
        self.ln(2.5)


def build_pdf():
    pdf = PaperPDF()
    pdf.add_page()
    pdf.title_block()

    # ── ABSTRACT ──
    pdf.abstract_heading()
    pdf.abstract_block(
        "Converting user interface (UI) screenshots into executable frontend code is "
        "typically approached by scaling ever larger vision-language models (VLMs), a "
        "strategy that places the resulting systems beyond the reach of teams without "
        "datacenter hardware or a commercial API budget. This paper asks whether the "
        "opposite strategy works: whether a compact 2B VLM, adapted with Quantized "
        "Low-Rank Adaptation (QLoRA), can generate framework-native frontend code "
        "directly from a screenshot on consumer hardware. Progress on this question is "
        "blocked by a data gap — existing screenshot-to-code datasets pair images "
        "with plain HTML only, while production frontends are component-based. We "
        "therefore first extend the WebSight dataset by generating React JSX and Vue 3 "
        "Single File Component (SFC) equivalents for each HTML sample using "
        "Qwen2.5-Coder-7B, validating every output with production-grade parsers "
        "(@babel/parser, @vue/compiler-sfc) under a two-attempt self-repair loop. Of "
        "15,752 processed samples, 15,588 (98.96%) yielded both a valid JSX and a valid "
        "Vue target; three independent validators agree on these labels with a mean "
        "PABAK of 0.9786. Using 9,889 of these samples, we fine-tune "
        "Qwen2-VL-2B-Instruct with QLoRA on a single 8 GB consumer GPU under a "
        "multi-task objective that maps one screenshot to all three targets. The "
        "fine-tuned model reaches a 99.93% parse success rate and improves BLEU-4 by "
        "54.5% and CodeBLEU by 41.0% over the un-adapted 2B baseline; it also exceeds "
        "the larger zero-shot Qwen2.5-VL-3B by 48.6% BLEU-4 and 27.7% CodeBLEU while "
        "running in 2.89 GiB of VRAM at 4.45 s per sample. **The practical implication "
        "is that framework-native UI-to-code generation no longer requires cloud "
        "infrastructure: it fits on a single consumer GPU, which allows frontend teams "
        "to automate design-to-code conversion without per-token API cost and without "
        "transmitting unreleased designs to a third party.**"
    )

    pdf.set_left_margin(20)
    pdf.set_x(20)
    pdf.set_font(pdf.FONT_NAME, "", 9.5)
    pdf.multi_cell(0, 5.2,
                   "**Keywords:** UI-to-code generation · Vision-language models · "
                   "QLoRA · Parameter-efficient fine-tuning · Multi-task learning · "
                   "Frontend code generation",
                   align="J", markdown=True, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.set_left_margin(10)
    pdf.set_x(10)
    pdf.ln(7)

    # ── SECTION 1: INTRODUCTION ──
    pdf.section_title(1, "Introduction")

    pdf.body(
        "Frontend development begins with a design. Interfaces are composed in tools "
        "such as Figma or Sketch, handed to engineers, and then rebuilt by hand in "
        "code. This handoff is repetitive and consumes engineering time that produces "
        "no new functionality, which is why automating it has been an active research "
        f"goal for nearly a decade {cite('beltramelli2017pix2code', 'nguyen2015remaui')}. "
        "Advances in large language models and multimodal systems have made the goal "
        "newly plausible, and a generation of AI-assisted design-to-code tools has "
        "followed."
    )

    # ── 1.1 Problem Statement ──
    pdf.subsection_title("1.1", "Problem Statement")

    pdf.body(
        "Progress has been real but narrow. Early systems established feasibility: "
        f"pix2code {cite('beltramelli2017pix2code')} paired a CNN encoder with an RNN "
        "decoder to emit a domain-specific language from GUI screenshots, and REMAUI "
        f"{cite('nguyen2015remaui')} recovered layout hierarchies from mobile "
        "interfaces using computer vision and handcrafted rules. Transformer-based "
        "vision-language models widened the scope considerably: Pix2Struct "
        f"{cite('lee2023pix2struct')} learned screenshot parsing as a pretraining "
        f"objective, and WebSight {cite('laurencon2024websight')} demonstrated "
        "screenshot-to-HTML generation at scale."
    )

    pdf.body(
        "Across this progression, one property has not changed: __the output is plain "
        "HTML__. Modern production frontends are not written in plain HTML. They are "
        "built from components — React with JSX, Vue with Single File Components "
        "— and HTML output cannot be dropped into such a codebase. It must be "
        "manually translated into component form: markup restructured, class rewritten "
        "as className, inline styles converted to objects, and the result decomposed "
        "into a component boundary. That translation reintroduces precisely the manual "
        "effort the automation was meant to eliminate. A system that returns HTML has "
        "not finished the job; it has moved it."
    )

    pdf.body(
        "The obvious remedy — prompting a large multimodal model to emit React or "
        "Vue directly — trades one barrier for another. Such models require "
        "datacenter-class hardware or a commercial API. The API route imposes "
        "per-token cost that scales with usage, and, more consequentially for many "
        "organizations, requires transmitting unreleased product designs to a third "
        "party. For teams that cannot do this, no option currently exists."
    )

    pdf.body(
        "Two obstacles stand between the field and framework-native generation on "
        "accessible hardware. The first is capacity: small VLMs are assumed too weak "
        "for structured code generation, so the field has scaled up rather than "
        "adapting down. Parameter-efficient fine-tuning (PEFT) makes that assumption "
        f"worth retesting. LoRA {cite('hu2021lora')}, QLoRA {cite('dettmers2023qlora')}, "
        f"and prompt tuning {cite('lester2021prompttuning')} achieve competitive "
        "performance while updating only a small fraction of parameters "
        f"{cite('han2024peft')}, and QLoRA in particular combines 4-bit quantization "
        "with low-rank adapters to bring training within reach of a single consumer "
        "GPU. Whether this suffices for multi-framework UI-to-code generation is "
        "untested."
    )

    pdf.body(
        "The second obstacle is data, and it is the reason the first has gone "
        "untested. Adapting a model to emit React and Vue requires supervision pairing "
        "screenshots with validated React and Vue targets. No such dataset exists. "
        "Every available screenshot-to-code corpus, WebSight included, terminates at "
        "HTML. The capacity question cannot be answered until the data gap is closed, "
        "which is why this paper closes it first."
    )

    pdf.body("This work therefore addresses the following question:")

    pdf.quote_block(
        "Can a compact vision-language model, adapted with parameter-efficient "
        "fine-tuning under consumer hardware constraints, generate validated "
        "framework-native frontend code — HTML, React JSX, and Vue 3 SFC — "
        "directly from a UI screenshot, and how does it compare against a larger model "
        "applied zero-shot?"
    )

    pdf.body(
        "Answering this matters beyond benchmark scores. If the answer is yes, "
        "UI-to-code generation ceases to be infrastructure-gated. It becomes something "
        "a team can run locally, on hardware already on the desk, over designs that "
        "never leave the building."
    )

    # ── 1.2 Contributions ──
    pdf.subsection_title("1.2", "Contributions")
    pdf.body("This paper makes three contributions:")

    pdf.numbered_item(
        1, "An extended, validated multi-framework dataset.",
        f"We extend WebSight {cite('laurencon2024websight')} by generating React JSX "
        "and Vue 3 SFC equivalents for each screenshot-HTML pair using Qwen2.5-Coder-7B "
        f"{cite('hui2024qwen25coder')}. Every generated component is validated by "
        "production-grade AST parsers (@babel/parser for JSX, @vue/compiler-sfc for "
        "Vue) with a two-attempt self-repair loop, and label reliability is quantified "
        "by three independent validators achieving a mean PABAK of 0.9786. Of 15,752 "
        "processed samples, 15,588 (98.96%) produced both a valid JSX and a valid Vue "
        "target."
    )

    pdf.numbered_item(
        2, "Parameter-efficient adaptation for multi-framework generation.",
        f"We fine-tune Qwen2-VL-2B-Instruct {cite('wang2024qwen2vl')} with QLoRA "
        f"{cite('dettmers2023qlora')} on 8 GB of consumer VRAM, under a multi-task "
        "objective in which a single screenshot maps to all three code targets, and "
        "compare it against both the un-adapted 2B model and a larger zero-shot "
        "Qwen2.5-VL-3B."
    )

    pdf.numbered_item(
        3, "Multi-dimensional evaluation.",
        "We evaluate along three axes that prior benchmarks tend to treat in isolation "
        "— code-level correctness and similarity, rendered visual fidelity, and "
        "deployment cost (latency and peak VRAM) — addressing the gap identified "
        f"by Design2Code {cite('li2024design2code')}, where visual similarity alone is "
        "shown to be a poor proxy for usable code."
    )

    pdf.ln(2)

    # ── 1.3 Organization ──
    pdf.subsection_title("1.3", "Organization of the Paper")
    pdf.body(
        "The remainder of this paper is organized as follows. Section 2 reviews "
        "related work in UI-to-code generation and parameter-efficient fine-tuning, "
        "and situates the gap this work addresses. Section 3 describes the "
        "construction of the extended WebSight dataset, its parser-based validation, "
        "and the inter-validator agreement analysis. Section 4 presents the "
        "methodology, covering model configuration, the QLoRA fine-tuning procedure, "
        "and the evaluation framework. Section 5 reports experimental results across "
        "code-level, visual, and efficiency metrics, together with a per-task "
        "breakdown. Section 6 analyzes the error modes of each model. Section 7 "
        "discusses the practical implications of the approach, states its limitations, "
        "identifies directions for future research, and concludes."
    )

    pdf.output(OUTPUT)
    print(f"PDF written to: {OUTPUT}")
    print(f"Pages: {pdf.page_no()}")


if __name__ == "__main__":
    build_pdf()
