"""Convert paper.tex (IEEEtran conference) into an IEEE-format camera-ready .docx for ISASF 2026.

Layout follows the IEEE A4 conference template: Times New Roman, title 24 pt,
body 10 pt justified with a first-line indent, two columns after the author block,
section heads in small caps, captions 8 pt, references 8 pt.
ISASF camera-ready rules: first-page header and footer (left-aligned), centred
page numbers from page 2 on, file name ISASF_132.
"""
import copy
import re
import sys

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Mm, Pt, Emu

PAPER = r"E:\Thesis Project file\AniruddhA_Dev_Nath_Parater_Efficient_UI_Code_Generation_Using_QLoRA_on_an_Extended_WebSight_Dataset_new"
BUILD = r"E:\Thesis Project file\_build_camera"
ASSETS = r"C:\Users\Arnob\AppData\Local\Temp\claude\d6c8181322e7aae7\1b2893c5-760b-4731-935d-72f7afac7130\scratchpad"
OUT = sys.argv[1] if len(sys.argv) > 1 else rf"{PAPER}\ISASF_132.docx"

HEADER_TEXT = "2026 Intelligent Sensing and Autonomous Systems for Sustainable Future (ISASF)"
FOOTER_TEXT = "979-8-3195-3350-0/26/$31.00 \u00a92026 IEEE"

FONT = "Times New Roman"
COL_W = Mm(88.0)          # IEEE A4 column width
GAP = Mm(4.2)

tex = open(rf"{PAPER}\paper.tex", encoding="utf-8").read()
aux = open(rf"{BUILD}\paper.aux", encoding="utf-8").read()
bbl = open(rf"{BUILD}\paper.bbl", encoding="utf-8").read()

# ---------------------------------------------------------------- labels / citations
LABELS = {}
for key, val in re.findall(r"\\newlabel\{([^}]+)\}\{\{(.*?)\}\{", aux):
    LABELS[key] = re.sub(r"\\mbox\s*\{([^}]*)\}", r"\1", val).replace("{", "").replace("}", "").strip()
CITE = {k: i + 1 for i, k in enumerate(re.findall(r"\\bibitem\{([^}]+)\}", bbl))}


def cite_text(keys):
    nums = sorted(CITE[k.strip()] for k in keys.split(","))
    out, i = [], 0
    while i < len(nums):
        j = i
        while j + 1 < len(nums) and nums[j + 1] == nums[j] + 1:
            j += 1
        if j - i >= 2:
            out.append(f"[{nums[i]}]\u2013[{nums[j]}]")
        else:
            out.extend(f"[{n}]" for n in nums[i:j + 1])
        i = j + 1
    return ", ".join(out)


# ---------------------------------------------------------------- inline math -> runs
SYM = {r"\in": " \u2208 ", r"\times": "\u00d7", r"\Delta": "\u0394", r"\alpha": "\u03b1", r"\theta": "\u03b8",
       r"\ll": " \u226a ", r"\ge": " \u2265 ", r"\mid": " | ", r"\cdot": "\u00b7", r"\sum": "\u2211",
       r"\log": "log ", r"\min": "min", r"\checkmark": "\u2713", r"\downarrow": "\u2193", r"\le": " \u2264 "}
UPRIGHT_GREEK = {"\u0394", "\u2211", "\u2208", "\u00d7", "\u226a", "\u2265", "\u2264", "\u00b7", "\u2713", "\u2193"}


def read_group(s, i):
    """Return (content, next_index) for a {...} group or single token at s[i]."""
    if s[i] == "{":
        depth, j = 0, i
        while True:
            if s[j] == "{":
                depth += 1
            elif s[j] == "}":
                depth -= 1
                if depth == 0:
                    return s[i + 1:j], j + 1
            j += 1
    if s[i] == "\\":
        m = re.match(r"\\[a-zA-Z]+", s[i:])
        return m.group(0), i + len(m.group(0))
    return s[i], i + 1


def math_runs(s, fmt=frozenset(), upright=False):
    runs, i = [], 0
    while i < len(s):
        c = s[i]
        if c in " \t\n":
            i += 1
            continue
        if c in "_^":
            g, i = read_group(s, i + 1)
            for t, f in math_runs(g, fmt | {"sub" if c == "_" else "sup"}, upright):
                runs.append((t, f))
            continue
        if c == "{":
            g, i = read_group(s, i)
            runs += math_runs(g, fmt, upright)
            continue
        if c == "\\":
            m = re.match(r"\\[a-zA-Z]+|\\.", s[i:])
            cmd = m.group(0)
            i += len(cmd)
            if cmd in (r"\mathrm", r"\mathbb", r"\mathcal"):
                g, i = read_group(s, i)
                if cmd == r"\mathbb":
                    runs.append(({"R": "\u211d"}[g], fmt))
                elif cmd == r"\mathcal":
                    runs.append(({"L": "\u2112", "T": "\U0001d4af"}[g], fmt))
                else:
                    runs += math_runs(g, fmt, True)
            elif cmd == r"\frac":
                a, i = read_group(s, i)
                b, i = read_group(s, i)
                runs += math_runs(a, fmt, upright) + [("/", fmt)] + math_runs(b, fmt, upright)
            elif cmd == r"\hat":
                g, i = read_group(s, i)
                runs += math_runs(g, fmt, upright) + [("\u0302", fmt)]
            elif cmd == r"\log":
                # "log" + subscript stays tight (log10); otherwise a space before the argument
                runs.append(("log" if i < len(s) and s[i] == "_" else "log ", fmt))
            elif cmd in SYM:
                t = SYM[cmd]
                runs.append((t, fmt if (t.strip() in UPRIGHT_GREEK or cmd in (r"\log", r"\min")) else fmt | {"i"}))
            elif cmd in (r"\left", r"\right", r"\,", r"\;", r"\!"):
                pass
            else:
                raise ValueError(f"unknown math command {cmd} in {s}")
            continue
        if c.isalpha():
            runs.append((c, fmt if upright else fmt | {"i"}))
        elif c == "-":
            runs.append(("\u2212", fmt))
        elif c in "=<>" and "sub" not in fmt and "sup" not in fmt:
            runs.append((f" {c} ", fmt))
        elif c == ",":
            runs.append((", ", fmt))
        else:
            runs.append((c, fmt))
        i += 1
    return runs


# ---------------------------------------------------------------- text (LaTeX) -> runs
def text_runs(s, fmt=frozenset()):
    runs, i, buf = [], 0, []

    def flush():
        if buf:
            runs.append(("".join(buf), fmt))
            buf.clear()

    while i < len(s):
        c = s[i]
        if c == "$":
            j = s.index("$", i + 1)
            flush()
            runs += math_runs(s[i + 1:j], fmt)
            i = j + 1
            continue
        if c == "\\":
            m = re.match(r"\\[a-zA-Z]+\*?|\\.", s[i:])
            cmd = m.group(0)
            i += len(cmd)
            simple = {r"\%": "%", r"\&": "&", r"\_": "_", r"\,": "\u202f", r"\ ": " ", r"\$": "$", r"\#": "#",
                      r"\{": "{", r"\}": "}"}
            if cmd in simple:
                buf.append(simple[cmd])
                continue
            flush()
            if cmd in (r"\textbf", r"\textit", r"\emph", r"\texttt", r"\textsuperscript", r"\textsc"):
                g, i = read_group(s, i)
                add = {r"\textbf": "b", r"\textit": "i", r"\emph": "i", r"\texttt": "tt",
                       r"\textsuperscript": "sup", r"\textsc": "sc"}[cmd]
                runs += text_runs(g, fmt | {add})
            elif cmd == r"\cite":
                g, i = read_group(s, i)
                runs.append((cite_text(g), fmt))
            elif cmd == r"\ref":
                g, i = read_group(s, i)
                runs.append((LABELS[g], fmt))
            elif cmd == r"\eqref":
                g, i = read_group(s, i)
                runs.append((f"({LABELS[g]})", fmt))
            elif cmd in (r"\label",):
                _, i = read_group(s, i)
            elif cmd in (r"\cmark",):
                runs.append(("\u2713", fmt))
            elif cmd in (r"\xmark",):
                runs.append(("\u00d7", fmt))
            elif cmd in (r"\newblock", r"\relax", r"\BIBentryALTinterwordspacing", r"\BIBentrySTDinterwordspacing"):
                pass
            elif cmd == r"\url":
                g, i = read_group(s, i)
                runs.append((g, fmt))
            else:
                raise ValueError(f"unknown text command {cmd} near: {s[max(0, i - 40):i + 20]}")
            continue
        if c == "{" or c == "}":
            i += 1
            continue
        if c == "~":
            buf.append("\u00a0")
        elif s.startswith("``", i):
            buf.append("\u201c")
            i += 1
        elif s.startswith("''", i):
            buf.append("\u201d")
            i += 1
        elif s.startswith("---", i):
            buf.append("\u2014")
            i += 2
        elif s.startswith("--", i):
            buf.append("\u2013")
            i += 1
        elif c == "'":
            buf.append("\u2019")
        elif c == "`":
            buf.append("\u2018")
        elif c in "\n\t":
            buf.append(" ")
        else:
            buf.append(c)
        i += 1
    flush()
    # collapse whitespace across runs
    out, prev_space = [], True
    for t, f in runs:
        t = re.sub(r"[ \n]+", " ", t)
        if prev_space:
            t = t.lstrip(" ")
        if t:
            out.append((t, f))
            prev_space = t.endswith(" ")
    return out


# ---------------------------------------------------------------- docx helpers
doc = Document()
st = doc.styles["Normal"]
st.font.name = FONT
st.font.size = Pt(10)
st.element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
pf = st.paragraph_format
pf.space_before = Pt(0)
pf.space_after = Pt(0)
pf.line_spacing = 1.0


def add_runs(p, runs, size=None, base=frozenset()):
    for t, f in runs:
        f = set(f) | set(base)
        r = p.add_run(t)
        r.font.name = FONT
        r._element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
        if size:
            r.font.size = Pt(size)
        r.bold = "b" in f or None
        r.italic = "i" in f or None
        if "tt" in f:
            r.font.name = "Courier New"
            r._element.rPr.rFonts.set(qn("w:hAnsi"), "Courier New")
            r.font.size = Pt((size or 10) - 1)
        if "sub" in f:
            r.font.subscript = True
        if "sup" in f:
            r.font.superscript = True
        if "sc" in f:
            r.font.small_caps = True
    return p


def para(runs=(), align=WD_ALIGN_PARAGRAPH.JUSTIFY, indent=True, size=10, before=0, after=0, keep=False,
         base=frozenset()):
    p = doc.add_paragraph()
    p.alignment = align
    f = p.paragraph_format
    f.first_line_indent = Mm(3.6) if indent else None
    f.space_before, f.space_after = Pt(before), Pt(after)
    f.keep_with_next = keep or None
    if size == 10 and runs:
        # IEEE template body pitch, measured from the ISASF template (~10.9 pt)
        f.line_spacing_rule = WD_LINE_SPACING.EXACTLY
        f.line_spacing = Pt(11)
    add_runs(p, runs, size, base)
    return p


def set_cols(section, num, space=GAP):
    sectPr = section._sectPr
    cols = sectPr.find(qn("w:cols"))
    if cols is None:
        cols = OxmlElement("w:cols")
        sectPr.append(cols)
    cols.set(qn("w:num"), str(num))
    cols.set(qn("w:space"), str(int(space.twips if hasattr(space, "twips") else space / 635)))


def page_field(p):
    r = p.add_run()
    for tag, txt in (("begin", None), (None, " PAGE "), ("end", None)):
        if tag:
            fc = OxmlElement("w:fldChar")
            fc.set(qn("w:fldCharType"), tag)
            r._element.append(fc)
        else:
            it = OxmlElement("w:instrText")
            it.set(qn("xml:space"), "preserve")
            it.text = txt
            r._element.append(it)
    r.font.name = FONT
    r.font.size = Pt(10)


def cell_border(cell, **edges):
    tcPr = cell._element.get_or_add_tcPr()
    b = tcPr.find(qn("w:tcBorders"))
    if b is None:
        b = OxmlElement("w:tcBorders")
        tcPr.append(b)
    for edge, val in edges.items():
        el = OxmlElement(f"w:{edge}")
        el.set(qn("w:val"), "single" if val else "nil")
        if val:
            el.set(qn("w:sz"), str(val))
            el.set(qn("w:color"), "000000")
            el.set(qn("w:space"), "0")
        b.append(el)


def no_table_borders(table):
    tblPr = table._element.tblPr
    b = OxmlElement("w:tblBorders")
    for e in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement(f"w:{e}")
        el.set(qn("w:val"), "nil")
        b.append(el)
    tblPr.append(b)


def cell_margins(table, lr=40, tb=10):
    tblPr = table._element.tblPr
    m = OxmlElement("w:tblCellMar")
    for e, v in (("top", tb), ("bottom", tb), ("left", lr), ("right", lr)):
        el = OxmlElement(f"w:{e}")
        el.set(qn("w:w"), str(v))
        el.set(qn("w:type"), "dxa")
        m.append(el)
    tblPr.append(m)


# ---------------------------------------------------------------- page setup, header/footer
sec = doc.sections[0]
sec.page_width, sec.page_height = Mm(210), Mm(297)
sec.top_margin, sec.bottom_margin = Mm(19), Mm(43)
sec.left_margin = sec.right_margin = Mm(14.32)
sec.header_distance, sec.footer_distance = Mm(9), Mm(20)
sec.different_first_page_header_footer = True

hp = sec.first_page_header.paragraphs[0]
hp.alignment = WD_ALIGN_PARAGRAPH.LEFT
add_runs(hp, [(HEADER_TEXT, frozenset())], 10)
fp = sec.first_page_footer.paragraphs[0]
fp.alignment = WD_ALIGN_PARAGRAPH.LEFT
add_runs(fp, [(FOOTER_TEXT, frozenset())], 10)
np_ = sec.footer.paragraphs[0]
np_.alignment = WD_ALIGN_PARAGRAPH.CENTER
page_field(np_)

# ---------------------------------------------------------------- title + authors (one column)
title = re.search(r"\\title\{(.*?)\}\n", tex).group(1)
p = para(text_runs(title), WD_ALIGN_PARAGRAPH.CENTER, False, 24, 0, 12)

author_start = re.search(r"^\\author\{", tex, re.M).start()
author_src = tex[author_start:tex.index(r"\maketitle")]
author_src = "\n".join(l for l in author_src.splitlines() if not l.lstrip().startswith("%"))
blocks = re.split(r"\\and", author_src)
authors = []
for b in blocks:
    name = re.search(r"\\IEEEauthorblockN\{(.*?)\}", b).group(1)
    aff = b[b.index(r"\IEEEauthorblockA{") + len(r"\IEEEauthorblockA{"):]
    aff = aff.rsplit("}", 2 if b is blocks[-1] else 1)[0]
    lines = [l.strip() for l in re.split(r"\\\\", aff) if l.strip()]
    # merge the visual line breaks used only to fit LaTeX columns
    merged = []
    for l in lines:
        if merged and merged[-1].startswith(r"\textit{") and l.startswith(r"\textit{") and (
                l.startswith(r"\textit{and") or l.startswith(r"\textit{University")):
            merged[-1] = merged[-1][:-1] + " " + l[len(r"\textit{"):]
        else:
            merged.append(l)
    authors.append((name, merged))

tbl = doc.add_table(rows=1, cols=len(authors))
tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
no_table_borders(tbl)
cell_margins(tbl, 60, 0)
full_w = Mm(210 - 2 * 14.32)
for c, (name, lines) in zip(tbl.rows[0].cells, authors):
    c.width = Emu(int(full_w / len(authors)))
    cp = c.paragraphs[0]
    cp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    add_runs(cp, [(name, frozenset())], 11)
    for l in lines:
        q = c.add_paragraph()
        q.alignment = WD_ALIGN_PARAGRAPH.CENTER
        add_runs(q, text_runs(l), 9)
para([], WD_ALIGN_PARAGRAPH.LEFT, False, 6, 0, 0)

body_sec = doc.add_section(WD_SECTION.CONTINUOUS)
set_cols(body_sec, 2)
body_sec.different_first_page_header_footer = False

# ---------------------------------------------------------------- body
body = tex[tex.index(r"\begin{abstract}"):tex.index(r"\bibliographystyle")]
body = "\n".join(l for l in body.splitlines() if not l.lstrip().startswith("%"))
body = re.sub(r"(?<!\\)%.*", "", body)

ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
sec_n = sub_n = subsub_n = 0
pending_runin = None
TABLE_N = 0


def heading1(text):
    global sec_n, sub_n
    sec_n += 1
    sub_n = 0
    p = para([], WD_ALIGN_PARAGRAPH.CENTER, False, 10, 8, 4, keep=True)
    add_runs(p, [(f"{ROMAN[sec_n - 1]}. ", frozenset())] + text_runs(text), 10, {"sc"})


def heading2(text):
    global sub_n, subsub_n
    sub_n += 1
    subsub_n = 0
    p = para([], WD_ALIGN_PARAGRAPH.LEFT, False, 10, 6, 3, keep=True)
    add_runs(p, [(f"{chr(64 + sub_n)}. ", frozenset())] + text_runs(text), 10, {"i"})


def body_paragraph(text, indent=True):
    global pending_runin
    runs = text_runs(text)
    if not runs:
        return
    if pending_runin:
        runs = pending_runin + runs
        pending_runin = None
    para(runs, indent=indent)


def table_block(src):
    global TABLE_N
    TABLE_N += 1
    cap = re.search(r"\\caption\{(.*?)\}\n", src).group(1)
    p = para([], WD_ALIGN_PARAGRAPH.CENTER, False, 8, 6, 3, keep=True)
    add_runs(p, [(f"TABLE {ROMAN[TABLE_N - 1]}. ", frozenset())] + text_runs(cap), 8, {"sc"})
    tab = src[src.index(r"\begin{tabular}"):src.index(r"\end{tabular}")]
    tab = re.sub(r"\\begin\{tabular\}\{[^}]*\}", "", tab)
    rows, rule_after = [], set()
    for chunk in re.split(r"\\\\", tab):
        lines = chunk.strip()
        rules = re.findall(r"\\(?:hline|toprule|midrule|bottomrule)", lines)
        content = re.sub(r"\\(?:hline|toprule|midrule|bottomrule)", "", lines).strip()
        if rules and rows and not content:
            rule_after.add(len(rows) - 1)
        if rules and content and rows:
            rule_after.add(len(rows) - 1)
        if content:
            rows.append([c.strip() for c in content.split("&")])
    ncol = max(len(r) for r in rows)
    first_rule = 0  # top rule above row 0
    # header rows = rows before the first internal rule
    header_end = min(rule_after) if rule_after else 0
    t = doc.add_table(rows=len(rows), cols=ncol)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    no_table_borders(t)
    cell_margins(t, 45, 5)
    first_w = 0.30 if ncol == 5 else (0.13 if ncol == 6 else 0.30)
    widths = []
    if ncol == 6:
        fr = [0.10, 0.20, 0.17, 0.18, 0.17, 0.18]
    elif ncol == 5 and "Model" in rows[0][0]:
        fr = [0.30, 0.14, 0.14, 0.15, 0.27]
    else:
        fr = [0.32] + [0.17] * 4
    widths = [Emu(int(COL_W * f)) for f in fr]
    for ri, row in enumerate(rows):
        for ci in range(ncol):
            cell = t.rows[ri].cells[ci]
            cell.width = widths[ci]
            txt = row[ci] if ci < len(row) else ""
            cp = cell.paragraphs[0]
            cp.alignment = WD_ALIGN_PARAGRAPH.LEFT if ci == 0 or (ncol == 6 and ci == 1) else WD_ALIGN_PARAGRAPH.CENTER
            add_runs(cp, text_runs(txt), 8, {"b"} if ri <= header_end else frozenset())
            # paragraph mark at 8 pt so empty cells do not make rows taller
            rpr = cp._p.get_or_add_pPr().get_or_add_rPr() if hasattr(cp._p.get_or_add_pPr(), "get_or_add_rPr") else None
            if rpr is None:
                ppr = cp._p.get_or_add_pPr()
                rpr = ppr.find(qn("w:rPr"))
                if rpr is None:
                    rpr = OxmlElement("w:rPr")
                    ppr.append(rpr)
            for tag in ("w:sz", "w:szCs"):
                el = OxmlElement(tag)
                el.set(qn("w:val"), "16")
                rpr.append(el)
            edges = {}
            if ri == 0:
                edges["top"] = 8
            if ri in rule_after or ri == len(rows) - 1:
                edges["bottom"] = 8 if ri != len(rows) - 1 else 8
            if edges:
                cell_border(cell, **edges)
    # keep table rows together and with caption
    for r in t.rows:
        for c in r.cells:
            for q in c.paragraphs:
                q.paragraph_format.keep_with_next = True
    para([], WD_ALIGN_PARAGRAPH.LEFT, False, 4, 0, 0)


def figure_block(src):
    cap = re.search(r"\\caption\{(.*?)\}\n", src).group(1)
    p = para([], WD_ALIGN_PARAGRAPH.CENTER, False, 10, 6, 0, keep=True)
    p.add_run().add_picture(rf"{ASSETS}\fig1.png", width=Emu(int(COL_W * 0.88)))
    q = para([], WD_ALIGN_PARAGRAPH.CENTER, False, 8, 3, 6)
    add_runs(q, [("Fig.\u00a01. ", frozenset())] + text_runs(cap), 8)


EQ_N = 0


def equation_block():
    global EQ_N
    EQ_N += 1
    p = para([], WD_ALIGN_PARAGRAPH.CENTER, False, 10, 3, 3)
    p.add_run().add_picture(rf"{ASSETS}\eq{EQ_N}.png", width=Emu(int(COL_W * 0.98)))


def itemize_block(src):
    for item in re.split(r"\\item", src)[1:]:
        p = doc.add_paragraph()
        p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
        f = p.paragraph_format
        f.left_indent = Mm(5)
        f.first_line_indent = Mm(-3.5)
        f.line_spacing_rule = WD_LINE_SPACING.EXACTLY
        f.line_spacing = Pt(11)
        add_runs(p, [("\u2022\t", frozenset())] + text_runs(item.strip()), 10)
        tabs = f.tab_stops
        tabs.add_tab_stop(Mm(5))


pos = 0
pattern = re.compile(
    r"\\begin\{(abstract|IEEEkeywords|itemize|table|figure|equation)\}(.*?)\\end\{\1\}"
    r"|\\(section|subsection|subsubsection)\{(.*?)\}"
    r"|\\renewcommand\{[^}]*\}\{[^}]*\}|\\newcommand\{\\\w+\}\{[^\n]*\}|\\label\{[^}]*\}"
    r"|\\makeatletter.*?\\makeatother",
    re.S)
after_equation = False


def flush_text(chunk):
    global after_equation
    for k, piece in enumerate(re.split(r"\n\s*\n", chunk)):
        if piece.strip():
            body_paragraph(piece.strip(), indent=not (after_equation and k == 0))
            after_equation = False


for m in pattern.finditer(body):
    flush_text(body[pos:m.start()])
    pos = m.end()
    env, content, cmd, arg = m.group(1), m.group(2), m.group(3), m.group(4)
    after_equation = False
    if env == "abstract":
        p = para([], WD_ALIGN_PARAGRAPH.JUSTIFY, False, 9, 0, 6)
        add_runs(p, [("Abstract", {"i"}), ("\u2014", frozenset())] + text_runs(content.strip()), 9, {"b"})
    elif env == "IEEEkeywords":
        p = para([], WD_ALIGN_PARAGRAPH.JUSTIFY, False, 9, 0, 6)
        add_runs(p, [("Keywords\u2014", frozenset())] + text_runs(content.strip()), 9, {"b", "i"})
    elif env == "itemize":
        itemize_block(content)
    elif env == "table":
        table_block(content)
    elif env == "figure":
        figure_block(content)
    elif env == "equation":
        equation_block()
        after_equation = True
    elif cmd == "section":
        heading1(arg)
    elif cmd == "subsection":
        heading2(arg)
    elif cmd == "subsubsection":
        subsub_n += 1
        pending_runin = [(f"{subsub_n}) ", {"i"})] + [(t, set(f) | {"i"}) for t, f in text_runs(arg)] + [(": ", {"i"})]
flush_text(body[pos:])

# ---------------------------------------------------------------- references
p = para([], WD_ALIGN_PARAGRAPH.CENTER, False, 10, 8, 4, keep=True)
add_runs(p, [("References", frozenset())], 10, {"sc"})
items = re.findall(r"\\bibitem\{[^}]+\}\s*(.*?)(?=\\bibitem|\\end\{thebibliography\})", bbl, re.S)
for n, it in enumerate(items, 1):
    q = doc.add_paragraph()
    q.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    f = q.paragraph_format
    f.left_indent = Mm(6)
    f.first_line_indent = Mm(-6)
    f.tab_stops.add_tab_stop(Mm(6))
    add_runs(q, [(f"[{n}]\t", frozenset())] + text_runs(it.strip()), 8)

# automatic hyphenation, as in the LaTeX version (IEEE template permits it)
settings = doc.settings.element
hy = OxmlElement("w:autoHyphenation")
hy.set(qn("w:val"), "true")
dts = settings.find(qn("w:defaultTabStop"))
if dts is not None:
    dts.addnext(hy)
else:
    settings.append(hy)

doc.save(OUT)
print("saved", OUT, "| sections", sec_n, "| tables", TABLE_N, "| equations", EQ_N, "| refs", len(items))
