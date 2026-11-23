"""Fill the ISASF 2026 template with the paper's content (paper 132).

Every number shown on a slide is listed in VERIFY and checked against the final paper.tex
before anything is written, so the deck cannot drift from the paper.
"""
import copy
import re

from pptx import Presentation
from pptx.chart.data import CategoryChartData
from pptx.dml.color import RGBColor
from pptx.enum.chart import XL_CHART_TYPE, XL_LABEL_POSITION
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.oxml.ns import qn
from pptx.util import Inches, Pt, Emu

D = r"C:\Users\Arnob\AppData\Local\Temp\claude\d6c8181322e7aae7\1b2893c5-760b-4731-935d-72f7afac7130\scratchpad"
PAPER = r"E:\Thesis Project file\AniruddhA_Dev_Nath_Parater_Efficient_UI_Code_Generation_Using_QLoRA_on_an_Extended_WebSight_Dataset_new"
OUT = r"E:\Thesis Project file\ISASF2026_Paper132_Presentation.pptx"

tex = open(rf"{PAPER}\paper.tex", encoding="utf-8").read()
bbl = open(r"E:\Thesis Project file\_build_camera\paper.bbl", encoding="utf-8").read()

# ------------------------------------------------------------------ verification
VERIFY = [
    "15,588", "15,752", "98.96\\%", "0.9786", "99.5\\%", "0.90 and 0.96", "1,504", "9{,}889", "85/10/5",
    "25,215", "2,964", "1,488", "496", "r{=}64", "\\alpha{=}128", "1{\\times}10^{-4}", "3 epochs", "2,048",
    "RTX 3070 Ti (8\\,GB)", "3,152 steps, about 34\\,h", "437 of its 496", "87.7\\%", "0.027", "0.722",
    "52.24 to 80.73", "0.520 to 0.735", "$p=0.33$", "$p=0.87$", "11.2\\,s", "2.18\\,GiB", "6.4\\,s", "4.59\\,GiB",
    "12.9\\,s", "3.30\\,GiB", "22.9\\,s", "6.47\\,GiB", "1.75$\\times$", "0.210 SSIM [0.183, 0.239]",
    "SSIM 0.623 vs.\\ 0.094", "$p \\ge 0.08$", "14,805", "about 600 tokens", "484 real web pages",
    "100 pages", "First 25 pages only", "On the 25 pages also given to the zero-shot 3B model", "0.515", "0.563", "$-0.048$", "(LPIPS 0.515 vs.\\ 0.563",
    # Table I values
    "0.509 & 0.711 & \\textbf{0.716} & \\textbf{0.716}", "8.43 & 11.56 & \\textbf{12.09} & 11.94",
    "0.681 & 0.563 & \\textbf{0.515} & 0.524", "96.24 & 99.46 & \\textbf{99.93} & \\textbf{99.93}",
    "52.24 & 54.31 & \\textbf{80.73} & 78.41", "0.520 & 0.575 & \\textbf{0.735} & 0.713",
    # Table III values
    "0.686 & 11.02 & 0.507 & 94 / -- / --", "0.458 & 6.78 & 0.753 & 96 / 13 / 90",
    "0.668 & 9.99 & 0.631 & 100 / 93 / 99", "0.667 & 9.99 & 0.617 & 100 / 98 / 99",
    "0.627 & 9.16 & 0.650 & 100 / 88 / 100", "0.607 & 9.25 & 0.639 & 100 / 88 / 96",
    # model-comparison CIs
    "$-0.009$ [$-0.015$, $-0.003$]", "+0.15\\,dB [0.01, 0.30]", "+2.3 [1.6, 3.0]", "+0.022 [0.015, 0.028]",
    "+0.005 [$-0.004$, 0.014]", "PSNR +0.53\\,dB [0.29, 0.77]",
    # fine-tuned 3B statements
    "raising its BLEU-4 from 54.31 to 78.41 and lowering its LPIPS from 0.563 to 0.524",
    "51\\% more GPU memory and 15\\% more time per sample",
    "Qwen2.5-VL-3B fine-tuned with the same recipe does not outperform it",
    "PSR 99.93\\%, equal to QLoRA (3B)",
]
missing = [v for v in VERIFY if v not in tex]
assert not missing, f"not found in paper.tex: {missing}"
print(f"verified {len(VERIFY)} values against paper.tex")

CITE = {k: i + 1 for i, k in enumerate(re.findall(r"\\bibitem\{([^}]+)\}", bbl))}
C = lambda *keys: ", ".join(f"[{CITE[k]}]" for k in keys)

# ------------------------------------------------------------------ style
NAVY = RGBColor(0x0E, 0x28, 0x41)      # template dk2
TEAL = RGBColor(0x15, 0x60, 0x82)      # template accent1
TINT = RGBColor(0xE6, 0xEF, 0xF5)
LIGHT = RGBColor(0xF3, 0xF6, 0xF8)
GREY = RGBColor(0x55, 0x5E, 0x66)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
BODY_FONT = "Aptos"

prs = Presentation(rf"{D}\deck\structure.pptx")
S = list(prs.slides)
assert len(S) == 14


def ph(slide, kind):
    for sh in slide.placeholders:
        t = sh.placeholder_format.type
        if kind == "title" and t in (1, 3):
            return sh
        if kind == "body" and t in (2, 4, 7):
            return sh
    return None


def remove(shape):
    shape._element.getparent().remove(shape._element)


def set_title(slide, text, size=30):
    t = ph(slide, "title")
    t.left, t.top, t.width, t.height = Inches(0.5), Inches(1.05), Inches(9.0), Inches(0.7)
    tf = t.text_frame
    tf.clear()
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.LEFT
    r = p.add_run()
    r.text = text
    r.font.size = Pt(size)
    r.font.bold = True
    r.font.color.rgb = NAVY


def textbox(slide, x, y, w, h, paras, size=16, anchor=MSO_ANCHOR.TOP, name=None):
    """paras: list of str or list of (text, dict) runs; dict keys: b, i, color, size."""
    tb = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    if name:
        tb.name = name
    tf = tb.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = anchor
    tf.margin_left = tf.margin_right = Inches(0.05)
    for i, para in enumerate(paras):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        runs = para if isinstance(para, list) else [(para, {})]
        for text, o in runs:
            r = p.add_run()
            r.text = text
            r.font.size = Pt(o.get("size", size))
            r.font.bold = o.get("b", False)
            r.font.italic = o.get("i", False)
            r.font.color.rgb = o.get("color", RGBColor(0x1F, 0x1F, 0x1F))
            r.font.name = BODY_FONT
        p.space_after = Pt(o.get("after", 6) if runs else 6)
    return tb


def bullets(slide, x, y, w, h, items, size=16, gap=8):
    """Bulleted list in a text box (bullets set via XML)."""
    tb = textbox(slide, x, y, w, h, [[(t, {})] if isinstance(t, str) else t for t in items], size)
    for p in tb.text_frame.paragraphs:
        pPr = p._p.get_or_add_pPr()
        pPr.set("marL", str(Inches(0.28)))
        pPr.set("indent", str(-Inches(0.24)))
        bu = pPr.makeelement(qn("a:buChar"), {"char": "\u2022"})
        pPr.append(bu)
        p.space_after = Pt(gap)
    return tb


def card(slide, x, y, w, h, head, body, size=14, fill=LIGHT, head_color=TEAL):
    box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(w), Inches(h))
    box.adjustments[0] = 0.06
    box.fill.solid()
    box.fill.fore_color.rgb = fill
    box.line.fill.background()
    box.shadow.inherit = False
    box.name = f"Card {head}"
    textbox(slide, x + 0.15, y + 0.1, w - 0.3, h - 0.2,
            [[(head, {"b": True, "color": head_color, "size": size + 2})]] +
            [p if isinstance(p, list) else [(p, {})] for p in body], size)


def table(slide, x, y, w, rows, col_w, size=13, bold_cells=(), header_rows=1, hl_cols=(), row_h=0.36,
          left_cols=(0,)):
    nr, nc = len(rows), len(rows[0])
    gt = slide.shapes.add_table(nr, nc, Inches(x), Inches(y), Inches(w), Inches(row_h * nr))
    tb = gt.table
    tbl_pr = gt._element.graphic.graphicData.tbl.tblPr
    tbl_pr.set("bandRow", "0")
    tbl_pr.set("firstRow", "0")
    for j, cw in enumerate(col_w):
        tb.columns[j].width = Inches(cw)
    for i in range(nr):
        tb.rows[i].height = Inches(row_h)
        for j in range(nc):
            c = tb.cell(i, j)
            c.margin_left = c.margin_right = Inches(0.06)
            c.margin_top = c.margin_bottom = Inches(0.02)
            c.vertical_anchor = MSO_ANCHOR.MIDDLE
            c.fill.solid()
            if i < header_rows:
                c.fill.fore_color.rgb = NAVY
            elif j in hl_cols:
                c.fill.fore_color.rgb = TINT
            else:
                c.fill.fore_color.rgb = WHITE if i % 2 else LIGHT
            tf = c.text_frame
            tf.clear()
            tf.word_wrap = True
            p = tf.paragraphs[0]
            p.alignment = PP_ALIGN.LEFT if j in left_cols else PP_ALIGN.CENTER
            r = p.add_run()
            r.text = rows[i][j]
            r.font.size = Pt(size)
            r.font.name = BODY_FONT
            r.font.bold = i < header_rows or (i, j) in bold_cells
            r.font.color.rgb = WHITE if i < header_rows else RGBColor(0x1F, 0x1F, 0x1F)
    gt.name = "Results table"
    return gt


# ------------------------------------------------------------------ 1. title
s = S[0]
t = ph(s, "title")
t.text_frame.text = "Parameter-Efficient UI Code Generation Using QLoRA on an Extended WebSight Dataset"
for r in t.text_frame.paragraphs[0].runs:
    r.font.size = Pt(30)
    r.font.bold = True
    r.font.color.rgb = NAVY
st = ph(s, "body")
st.left, st.top, st.width, st.height = Inches(0.5), Inches(3.94), Inches(9.0), Inches(1.81)
lines = [
    ("Aniruddha Dev Nath, Anitya Barua, Antu Chowdhury, Arnab Biswas", 18, True),
    ("Dept. of Computer Science and Engineering, East Delta University and", 14, False),
    ("International Islamic University Chittagong, Bangladesh", 14, False),
    ("ISASF-2026 | 19 November 2026 (Hybrid) | Paper ID 132", 14, False),
    ("Western Sydney University, Sydney, Australia", 14, False),
]
tf = st.text_frame
tf.clear()
for i, (txt, sz, b) in enumerate(lines):
    p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = txt
    r.font.size = Pt(sz)
    r.font.bold = b
s.notes_slide.notes_text_frame.text = (
    "Introduce the authors and the one-line idea: we teach a small vision-language model, on a single 8 GB "
    "consumer GPU, to turn a UI screenshot into HTML, React or Vue code.")

# ------------------------------------------------------------------ 2. abstract
s = S[1]
set_title(s, "Abstract")
remove(ph(s, "body"))
bullets(s, 0.6, 1.95, 8.8, 4.2, [
    [("Problem: ", {"b": True}), ("screenshot-to-code datasets pair images with HTML only, and large vision-language "
                                   "models are costly to run without datacenter hardware or a commercial API.", {})],
    [("Data: ", {"b": True}), ("we extend WebSight with React JSX and Vue 3 targets generated by Qwen2.5-Coder-7B and "
                                "checked by production parsers; 15,588 of 15,752 samples have both valid targets.", {})],
    [("Models: ", {"b": True}), ("Qwen2-VL-2B fine-tuned with QLoRA on a single 8 GB GPU; Qwen2.5-VL-3B fine-tuned "
                                  "with the same recipe does not outperform it.", {})],
    [("WebSight results: ", {"b": True}), ("BLEU-4 rises from 52.2 to 80.7 over the base model; renders are perceptually "
                                            "closer than zero-shot Qwen2.5-VL-3B (LPIPS 0.515 vs. 0.563), while SSIM is tied.", {})],
    [("Real pages (Design2Code): ", {"b": True}), ("SSIM +0.21 over the base model, but outputs are much shorter than the originals.", {})],
], size=15, gap=7)
textbox(s, 0.6, 6.25, 8.8, 0.5, [[("Keywords: ", {"b": True, "color": TEAL}),
                                   ("code generation, multi-task learning, parameter-efficient fine-tuning, QLoRA, "
                                    "user interfaces, vision-language models", {"i": True})]], 12)
s.notes_slide.notes_text_frame.text = (
    "Summarise in four sentences: the data gap (HTML only), our dataset extension, the QLoRA fine-tuning on one 8 GB "
    "GPU, and the two headline results. Stress that SSIM is statistically tied with the zero-shot 3B model.")

# ------------------------------------------------------------------ 3. introduction
s = S[2]
set_title(s, "Introduction")
remove(ph(s, "body"))
card(s, 0.5, 1.95, 2.85, 3.05, "Background",
     ["UI designs are translated into code by hand, which is slow and repetitive.",
      f"Screenshot-to-code research mostly targets HTML {C('laurencon2024unlocking', 'si2025design2code')}."])
card(s, 3.575, 1.95, 2.85, 3.05, "Motivation",
     ["Production frontends are written as React or Vue components.",
      "Commercial APIs add per-token cost and send unreleased designs to a third party."])
card(s, 6.65, 1.95, 2.85, 3.05, "Research gap",
     ["No dataset pairs screenshots with validated React and Vue code.",
      "Can a small model adapted on consumer hardware compete with a larger one?"])
box = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5), Inches(5.25), Inches(9.0), Inches(1.45))
box.adjustments[0] = 0.08
box.fill.solid()
box.fill.fore_color.rgb = TINT
box.line.fill.background()
box.shadow.inherit = False
box.name = "Why it is hard"
textbox(s, 0.7, 5.33, 8.6, 1.3, [
    [("Why it is hard: ", {"b": True, "color": NAVY}),
     ("used zero-shot, Qwen2-VL-2B imports UI libraries in 437 of its 496 JSX outputs despite an instruction "
      "to use only Tailwind CSS.", {})]], 15, anchor=MSO_ANCHOR.MIDDLE)
s.notes_slide.notes_text_frame.text = (
    "Background, motivation, gap. End with the concrete difficulty: small models used zero-shot ignore framework "
    "conventions (437 of 496 JSX outputs import UI libraries).")

# ------------------------------------------------------------------ 4. literature review
s = S[3]
set_title(s, "Literature Review")
remove(ph(s, "body"))
rows = [
    ["Work", "Approach", "Output"],
    [f"pix2code {C('beltramelli2017pix2code')}", "CNN encoder + RNN decoder, synthetic GUIs", "DSL code"],
    [f"WebSight {C('laurencon2024unlocking')}", "Synthetic screenshot-HTML dataset", "HTML"],
    [f"Design2Code {C('si2025design2code')}", "Benchmark of 484 real web pages", "HTML"],
    [f"Web2Code {C('yun2024web2code')}, WebCode2M {C('gui2025webcode2m')}", "Large webpage-to-code corpora", "HTML"],
    [f"DCGen {C('wan2025dcgen')}", "Segment screenshot, generate, assemble", "HTML"],
    [f"UICoder {C('wu2024uicoder')}", "LLM fine-tuned with compiler and VLM feedback", "SwiftUI"],
    ["This work", "Two VLMs (Qwen2-VL-2B, Qwen2.5-VL-3B) fine-tuned with QLoRA on one 8 GB GPU",
     "HTML, React JSX, Vue SFC"],
]
table(s, 0.5, 1.95, 9.0, rows, [2.75, 4.0, 2.25], size=13, bold_cells={(7, 0), (7, 1), (7, 2)}, row_h=0.42,
      left_cols=(0, 1))
for j in range(3):
    c = s.shapes[-1].table.cell(7, j)
    c.fill.fore_color.rgb = TINT
textbox(s, 0.5, 5.55, 9.0, 1.1, [
    [("Gap: ", {"b": True, "color": NAVY}),
     ("these systems output HTML/CSS or platform UI code and rely on large or proprietary models or on training "
      "at scale; none provides validated React or Vue targets for screenshots or adapts a small open model on "
      "consumer hardware.", {})]], 14)
s.notes_slide.notes_text_frame.text = (
    "Walk down the table quickly. The key contrast is the last row: framework-native outputs and a small model on "
    "consumer hardware.")

# ------------------------------------------------------------------ 5. methodology
s = S[4]
set_title(s, "Methodology")
remove(ph(s, "body"))
pic = s.shapes.add_picture(rf"{D}\fig1.png", Inches(0.5), Inches(1.9), height=Inches(4.75))
pic.name = "Pipeline figure"
steps = [
    ("1  Dataset extension", "Qwen2.5-Coder-7B converts each WebSight HTML page into a React JSX and a Vue 3 SFC; "
                             "parser validation with up to two repair attempts."),
    ("2  QLoRA fine-tuning", "Qwen2-VL-2B-Instruct and Qwen2.5-VL-3B-Instruct, 4-bit NF4 weights, LoRA rank 64 "
                             "(\u03b1 = 128); one screenshot \u2192 HTML, JSX or Vue."),
    ("3  Evaluation", "Code metrics (PSR, BLEU-4, CodeBLEU) and visual metrics on rendered pages (SSIM, PSNR, LPIPS), "
                      "with paired bootstrap 95% CIs."),
]
y = 1.95
for head, body in steps:
    textbox(s, 5.45, y, 4.1, 1.55, [[(head, {"b": True, "color": TEAL, "size": 16})], body], 14)
    y += 1.6
s.notes_slide.notes_text_frame.text = (
    "Three stages, shown in the pipeline figure. Mention that the same task prompts are used for every model, and "
    "that visual metrics compare renders with the original screenshot.")

# ------------------------------------------------------------------ 5b. dataset & training
s = S[5]
set_title(s, "Dataset and Training Setup")
remove(ph(s, "body"))
stats = [("15,588", "of 15,752 samples with valid\nJSX and Vue targets (98.96%)"),
         ("0.9786", "mean PABAK agreement\nof three validators"),
         ("99.5% / 100%", "JSX / Vue targets that render\n(median SSIM 0.90 / 0.96)")]
x = 0.5
for big, small in stats:
    b = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(1.95), Inches(2.85), Inches(1.75))
    b.adjustments[0] = 0.08
    b.fill.solid()
    b.fill.fore_color.rgb = LIGHT
    b.line.fill.background()
    b.shadow.inherit = False
    b.name = f"Stat {big}"
    textbox(s, x + 0.1, 2.0, 2.65, 0.75, [[(big, {"b": True, "color": TEAL, "size": 30})]], 30,
            anchor=MSO_ANCHOR.MIDDLE).text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER
    tb = textbox(s, x + 0.1, 2.75, 2.65, 0.9, [small], 13)
    tb.text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER
    x += 3.075
card(s, 0.5, 3.95, 4.4, 2.75, "Data", [
    "First 10,000 extended samples; 9,889 pass both validations.",
    "Split 85/10/5 by image: 25,215 training, 2,964 validation and 1,488 test examples.",
    "Render check on 2,000 images (all 496 test images + 1,504 training/validation images)."], 13)
card(s, 5.1, 3.95, 4.4, 2.75, "Training and baselines", [
    "QLoRA 2B: RTX 3070 Ti (8 GB); AdamW, lr 1\u00d710\u207b\u2074, 3 epochs, effective batch 8, sequences \u2264 2,048 tokens.",
    "Baselines: Qwen2-VL-2B and Qwen2.5-VL-3B zero-shot.",
    "Qwen2.5-VL-3B + QLoRA: same data, 1 epoch (3,152 steps, about 34 h), BF16."], 13)
s.notes_slide.notes_text_frame.text = (
    "Data quality: parser validation, three-validator agreement, and a render check against the source pages. "
    "The fine-tuned 3B baseline answers the reviewers' request for a fairer comparison; note it had one epoch.")

# ------------------------------------------------------------------ 6. results: WebSight
s = S[6]
set_title(s, "Results: WebSight Test Set (1,488 samples)")
remove(ph(s, "body"))
rows = [
    ["Metric", "Base 2B\n(zero-shot)", "Qwen2.5-VL-3B\n(zero-shot)", "QLoRA 2B\n(ours)", "QLoRA 3B\n(1 epoch)"],
    ["SSIM \u2191", "0.509", "0.711", "0.716", "0.716"],
    ["PSNR (dB) \u2191", "8.43", "11.56", "12.09", "11.94"],
    ["LPIPS \u2193", "0.681", "0.563", "0.515", "0.524"],
    ["Parse success (%)", "96.24", "99.46", "99.93", "99.93"],
    ["BLEU-4", "52.24", "54.31", "80.73", "78.41"],
    ["CodeBLEU", "0.520", "0.575", "0.735", "0.713"],
]
bold = {(1, 3), (1, 4), (2, 3), (3, 3), (4, 3), (4, 4), (5, 3), (6, 3)}
table(s, 0.5, 1.9, 5.6, rows, [1.6, 1.0, 1.05, 0.95, 1.0], size=12, bold_cells=bold, hl_cols=(3,), row_h=0.42)
bullets(s, 6.3, 1.9, 3.3, 4.8, [
    [("Fine-tuning the 2B model: ", {"b": True}),
     ("BLEU\u20114 52.24\u00a0\u2192\u00a080.73, CodeBLEU 0.520\u00a0\u2192\u00a00.735.", {})],
    [("Fine-tuning the 3B model: ", {"b": True}),
     ("BLEU\u20114 54.31\u00a0\u2192\u00a078.41, LPIPS 0.563\u00a0\u2192\u00a00.524.", {})],
    [("QLoRA 2B vs. zero-shot 3B: ", {"b": True}), ("LPIPS and PSNR significantly better; SSIM tied (p\u00a0=\u00a00.33).", {})],
    [("Upper bound: ", {"b": True}), ("the reference code itself reaches SSIM 0.722.", {})],
], size=13, gap=8)
textbox(s, 0.5, 5.2, 5.6, 0.6, [[("Mean over HTML, JSX and Vue. Bold = best or joint best; failed renders get "
                                  "the worst score.", {"i": True, "color": GREY})]], 11)
s.notes_slide.notes_text_frame.text = (
    "Read the highlighted column. Be careful with the claim: on SSIM the fine-tuned 2B is statistically tied with "
    "both 3B models; its clear wins are LPIPS, PSNR and the code metrics. SSIM is close to its 0.722 ceiling.")

# ------------------------------------------------------------------ 6b. efficiency and model comparison
s = S[7]
set_title(s, "Results: Efficiency and Model Comparison")
remove(ph(s, "body"))
cd = CategoryChartData()
cd.categories = ["Base 2B", "QLoRA 2B", "QLoRA 3B", "Qwen2.5-VL-3B"]
cd.add_series("Seconds per sample", (6.4, 11.2, 12.9, 22.9))
gf = s.shapes.add_chart(XL_CHART_TYPE.BAR_CLUSTERED, Inches(0.4), Inches(1.9), Inches(4.5), Inches(2.3), cd)
cd2 = CategoryChartData()
cd2.categories = ["Base 2B", "QLoRA 2B", "QLoRA 3B", "Qwen2.5-VL-3B"]
cd2.add_series("Peak GPU memory (GiB)", (4.59, 2.18, 3.30, 6.47))
gf2 = s.shapes.add_chart(XL_CHART_TYPE.BAR_CLUSTERED, Inches(0.4), Inches(4.3), Inches(4.5), Inches(2.3), cd2)
for g, title, fmt in ((gf, "Latency (s/sample, batch 8, 24 samples)", "0.0"),
                      (gf2, "Peak GPU memory (GiB)", "0.00")):
    ch = g.chart
    ch.has_legend = False
    ch.has_title = True
    ch.chart_title.text_frame.text = title
    ch.chart_title.text_frame.paragraphs[0].runs[0].font.size = Pt(12)
    ch.chart_title.text_frame.paragraphs[0].runs[0].font.bold = True
    pl = ch.plots[0]
    pl.gap_width = 60
    pl.has_data_labels = True
    pl.data_labels.number_format = fmt
    pl.data_labels.number_format_is_linked = False
    pl.data_labels.position = XL_LABEL_POSITION.OUTSIDE_END
    pl.data_labels.font.size = Pt(11)
    ser = pl.series[0]
    ser.format.fill.solid()
    ser.format.fill.fore_color.rgb = TEAL
    pt = ser.points[1]
    pt.format.fill.solid()
    pt.format.fill.fore_color.rgb = NAVY
    ch.category_axis.tick_labels.font.size = Pt(11)
    ch.category_axis.reverse_order = True
    va = ch.value_axis
    va.visible = False
    va.has_major_gridlines = False
    g.name = title
card(s, 5.15, 1.9, 4.35, 2.25, "Efficiency", [
    "QLoRA 2B halves the memory of its base model and is about twice as fast as the zero-shot 3B; QLoRA 3B "
    "needs 51% more memory and 15% more time than QLoRA 2B.",
    "It is 1.75\u00d7 slower than the 16-bit base model, consistent with the dequantization overhead "
    "reported for QLoRA."], 13)
card(s, 5.15, 4.3, 4.35, 2.4, "QLoRA 2B vs. QLoRA 3B (95% CI)", [
    "SSIM tied (p = 0.87).",
    "2B slightly better: LPIPS \u22120.009 [\u22120.015, \u22120.003], PSNR +0.15 dB, BLEU-4 +2.3, CodeBLEU +0.022.",
    "The 3B had 1 epoch instead of 3."], 13)
s.notes_slide.notes_text_frame.text = (
    "Latency was re-measured under identical conditions after the reviews: same 24 samples, batch size 8. Be honest "
    "that 4-bit inference is slower than 16-bit; the gain is memory. The fine-tuned 3B does not beat the 2B, but it "
    "only had one epoch, so this is not proof that size never helps.")

# ------------------------------------------------------------------ 6c. Design2Code
s = S[8]
set_title(s, "Results: Real Web Pages (Design2Code)")
remove(ph(s, "body"))
rows = [
    ["Model", "SSIM \u2191", "PSNR \u2191", "LPIPS \u2193", "Rendered %\nHTML/JSX/Vue"],
    ["Real HTML (bound)", "0.686", "11.02", "0.507", "94 / \u2013 / \u2013"],
    ["Base 2B", "0.458", "6.78", "0.753", "96 / 13 / 90"],
    ["QLoRA 2B (ours)", "0.668", "9.99", "0.631", "100 / 93 / 99"],
    ["QLoRA 3B", "0.667", "9.99", "0.617", "100 / 98 / 99"],
    ["Qwen2.5-VL-3B*", "0.627", "9.16", "0.650", "100 / 88 / 100"],
    ["QLoRA 2B*", "0.607", "9.25", "0.639", "100 / 88 / 96"],
]
g = table(s, 0.5, 1.9, 5.6, rows, [1.75, 0.85, 0.85, 0.85, 1.3], size=12, row_h=0.42)
for j in range(5):
    g.table.cell(3, j).fill.fore_color.rgb = TINT
textbox(s, 0.5, 4.95, 5.6, 0.9, [[("Random 100 of 484 pages, first screen only; *first 25 pages. Not comparable "
                                   "with the scores of Si et al. (different crop and metrics).", {"i": True, "color": GREY})]], 11)
bullets(s, 6.3, 1.9, 3.3, 4.8, [
    [("Fine-tuning still helps: ", {"b": True}), ("QLoRA 2B +0.210 SSIM over the base model (p\u00a0<\u00a00.001); "
                                                   "QLoRA 3B reaches a similar SSIM (0.667).", {})],
    [("Tied ", {"b": True}), ("with QLoRA 3B (p\u00a0\u2265\u00a00.08) and, on 25 pages, with zero-shot Qwen2.5-VL-3B.", {})],
    [("Weakness: ", {"b": True}), ("outputs are about 600 tokens, while real HTML has a median of 14,805 tokens.", {})],
], size=14, gap=10)
s.notes_slide.notes_text_frame.text = (
    "This answers the reviewers' concern about synthetic-only evaluation. Fine-tuning still helps strongly against the "
    "base model, but on real pages the 2B is only tied with the 3B models, and it writes much shorter code than the "
    "originals. The 25-page comparison has little statistical power.")

# ------------------------------------------------------------------ 7. discussion
s = S[9]
set_title(s, "Discussion")
remove(ph(s, "body"))
card(s, 0.5, 1.95, 4.4, 2.3, "Teacher circularity", [
    "Code metrics partly reward the teacher's style, so visual metrics are primary.",
    "On Design2Code, with no teacher code, fine-tuning still improves every visual metric."], 15)
card(s, 5.1, 1.95, 4.4, 2.3, "Renderability", [
    "Base 2B JSX failures come mostly from UI-library imports.",
    "With imports stubbed, 87.7% render and the SSIM gap shrinks to 0.027."], 15)
card(s, 0.5, 4.45, 4.4, 2.25, "Model size", [
    "The fine-tuned 3B did not outperform the 2B: tied on SSIM, slightly behind on the other metrics.",
    "With one epoch it may be under-trained; we did not test this."], 15)
card(s, 5.1, 4.45, 4.4, 2.25, "Efficiency trade-off", [
    "4-bit weights save memory, not time: QLoRA 2B uses 2.18 GiB but needs 11.2 s per sample at batch 8."], 15)
s.notes_slide.notes_text_frame.text = (
    "Interpretation, with the caveats the reviewers raised. Each card states what the data supports and no more.")

# ------------------------------------------------------------------ 8. conclusion
s = S[10]
set_title(s, "Conclusion")
remove(ph(s, "body"))
bullets(s, 0.6, 1.95, 8.8, 3.6, [
    "Extended WebSight with more than 15,000 parser-validated React JSX and Vue 3 targets.",
    "Fine-tuned with QLoRA on one 8 GB GPU, the 2B and 3B models both reach 99.93% parse success; the 2B renders on every task.",
    "On WebSight the fine-tuned 2B beats zero-shot Qwen2.5-VL-3B on code similarity, LPIPS and PSNR with a third of its GPU memory; SSIM is tied.",
    "The fine-tuned 3B did not surpass the 2B; on real pages both fine-tuned models keep a large lead over the base model.",
], size=16, gap=10)
box = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5), Inches(5.6), Inches(9.0), Inches(1.1))
box.adjustments[0] = 0.1
box.fill.solid()
box.fill.fore_color.rgb = TINT
box.line.fill.background()
box.shadow.inherit = False
box.name = "Implication"
textbox(s, 0.7, 5.65, 8.6, 1.0, [[("Implication: ", {"b": True, "color": NAVY}),
                                   ("in-domain fine-tuning of a small model can match a larger fine-tuned model on this "
                                    "task, at no per-token cost and with designs kept on-premises; outputs still need review.", {})]],
        14, anchor=MSO_ANCHOR.MIDDLE)
s.notes_slide.notes_text_frame.text = (
    "Close with the measured claims only. The outperforming of the zero-shot 3B holds on WebSight-style pages; "
    "on real pages they are tied.")

# ------------------------------------------------------------------ 9. future scope & limitations
s = S[11]
set_title(s, "Future Scope and Limitations")
remove(ph(s, "body"))
card(s, 0.5, 1.95, 4.4, 4.75, "Limitations", [
    "Synthetic training data: on real pages the model writes far shorter code and SSIM falls from 0.716 to 0.668.",
    "JSX and Vue references come from one teacher model.",
    "Static screenshots only; no interaction or responsiveness.",
    "Single training run per model; the 3B for one epoch."], 15)
card(s, 5.1, 1.95, 4.4, 4.75, "Future work", [
    f"Compare QLoRA with LoRA and DoRA {C('liu2024dora')} on the same hardware.",
    f"Train on longer real-world pages, e.g. WebCode2M {C('gui2025webcode2m')}.",
    "Add interaction-aware metrics.",
    "Add an inference-time self-repair loop driven by validation errors."], 15)
s.notes_slide.notes_text_frame.text = "State the limitations plainly; they come straight from Section VII of the paper."

# ------------------------------------------------------------------ 10. references
s = S[12]
set_title(s, "References")
remove(ph(s, "body"))


def bbl_plain(key):
    m = re.search(r"\\bibitem\{" + re.escape(key) + r"\}\s*(.*?)(?=\\bibitem|\\end\{thebibliography\})", bbl, re.S)
    t = m.group(1)
    t = re.sub(r"\\emph\{([^}]*)\}", r"\1", t)
    t = t.replace("~", " ").replace("``", "\u201c").replace("''", "\u201d").replace("--", "\u2013")
    t = re.sub(r"\\BIBentry\w+|\\newblock|\\url\{([^}]*)\}", lambda mm: mm.group(1) or "", t)
    t = t.replace("{", "").replace("}", "").replace("\\", "")
    return re.sub(r"\s+", " ", t).strip()


keys = ["beltramelli2017pix2code", "laurencon2024unlocking", "si2025design2code", "yun2024web2code",
        "gui2025webcode2m", "dettmers2023qlora", "hu2021lora", "wan2025dcgen", "wu2024uicoder",
        "hui2024qwen25coder", "qwen2vl", "qwen25vl", "liu2024dora"]
keys.sort(key=lambda k: CITE[k])
textbox(s, 0.5, 1.9, 9.0, 4.9, [[(f"[{CITE[k]}]  ", {"b": True, "color": TEAL}), (bbl_plain(k), {})] for k in keys], 10)
for p in s.shapes[-1].text_frame.paragraphs:
    p.space_after = Pt(3)
s.notes_slide.notes_text_frame.text = "Numbers match the reference list of the paper."

# ------------------------------------------------------------------ 11. thank you
s = S[13]
t = ph(s, "title")
t.text_frame.text = "Thank You"
for r in t.text_frame.paragraphs[0].runs:
    r.font.size = Pt(44)
    r.font.bold = True
    r.font.color.rgb = NAVY
st = ph(s, "body")
tf = st.text_frame
tf.clear()
for i, (txt, sz, b) in enumerate([("Questions?", 24, True),
                                  ("Parameter-Efficient UI Code Generation Using QLoRA on an Extended WebSight Dataset", 14, False),
                                  ("ISASF-2026 | Paper ID 132", 14, False)]):
    p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = txt
    r.font.size = Pt(sz)
    r.font.bold = b

prs.save(OUT)
print("saved", OUT, "slides:", len(prs.slides))
