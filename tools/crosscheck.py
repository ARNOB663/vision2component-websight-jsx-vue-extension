"""Cross-check ISASF_132.docx against the LaTeX paper.pdf: text, citations, references, numbers."""
import difflib
import re
import unicodedata

import fitz
from docx import Document

LATEX_PDF = r"E:\Thesis Project file\_build_camera\paper.pdf"
DOCX = r"E:\Thesis Project file\AniruddhA_Dev_Nath_Parater_Efficient_UI_Code_Generation_Using_QLoRA_on_an_Extended_WebSight_Dataset_new\ISASF_132.docx"
TEX = r"E:\Thesis Project file\AniruddhA_Dev_Nath_Parater_Efficient_UI_Code_Generation_Using_QLoRA_on_an_Extended_WebSight_Dataset_new\paper.tex"
BBL = r"E:\Thesis Project file\_build_camera\paper.bbl"


def norm(s):
    s = unicodedata.normalize("NFKC", s)
    s = s.replace("\u2212", "-").replace("\u2013", "-").replace("\u2014", "-")
    s = s.replace("\u201c", '"').replace("\u201d", '"').replace("\u2019", "'").replace("\u2018", "'")
    s = s.replace("\u00a0", " ").replace("\u202f", " ").replace("\u2009", " ")
    s = re.sub(r"-\s*\n\s*", "", s)          # undo end-of-line hyphenation
    s = re.sub(r"\s+", " ", s)
    return s.strip()


# ---- LaTeX PDF text (body only, before References)
lp = fitz.open(LATEX_PDF)
ltxt = norm(" ".join(p.get_text() for p in lp))
# ---- DOCX text: body paragraphs + tables in document order
d = Document(DOCX)
body = d.element.body
parts = []
for el in body.iterchildren():
    tag = el.tag.split("}")[1]
    if tag == "p":
        parts.append("".join(t.text or "" for t in el.iter() if t.tag.endswith("}t")))
    elif tag == "tbl":
        for tc in el.iter():
            if tc.tag.endswith("}tc"):
                parts.append("".join(t.text or "" for t in tc.iter() if t.tag.endswith("}t")))
dtxt = norm(" ".join(parts))

# 1) citation markers in reading order (body only: cut at References)
def cites(s):
    body = s[: s.upper().rfind("REFERENCES [1]")]   # the reference-list heading
    return re.findall(r"\[(\d+)\](?:-\[(\d+)\])?", body)


print("   heading found:", "REFERENCES [1]" in ltxt.upper(), "REFERENCES [1]" in dtxt.upper())


lc, dc = cites(ltxt), cites(dtxt)
print("== citation markers: latex", len(lc), "docx", len(dc), "| identical sequence:", lc == dc)
if lc != dc:
    for op in difflib.SequenceMatcher(None, lc, dc).get_opcodes():
        if op[0] != "equal":
            print("   diff", op, lc[op[1]:op[2]], dc[op[3]:op[4]])

# every citation key in the .tex maps to the same number as LaTeX's .bbl order
bbl = open(BBL, encoding="utf-8").read()
order = re.findall(r"\\bibitem\{([^}]+)\}", bbl)
tex = open(TEX, encoding="utf-8").read()
tex_body = "\n".join(l for l in tex.splitlines() if not l.lstrip().startswith("%"))
keys = [k.strip() for g in re.findall(r"\\cite\{([^}]*)\}", tex_body) for k in g.split(",")]
first_use = list(dict.fromkeys(keys))
print("== cited keys:", len(first_use), "| bib entries:", len(order),
      "| numbered in order of first citation:", first_use == order)
print("   unused bib entries:", sorted(set(order) - set(keys)) or "none",
      "| cited but missing:", sorted(set(keys) - set(order)) or "none")

# 2) reference list entries
def refs(s):
    i = s.upper().rfind("REFERENCES")
    tail = s[i:]
    return [m.strip() for m in re.split(r"\[\d+\]", tail)[1:]]


lr, dr = refs(ltxt), refs(dtxt)
print("== reference entries: latex", len(lr), "docx", len(dr))
bad = 0
for n, (a, b) in enumerate(zip(lr, dr), 1):
    a2 = re.sub(r"\s", "", a).rstrip(".")
    b2 = re.sub(r"\s", "", b).rstrip(".")
    a2 = re.sub(r"\d+$", "", a2) if not b2.endswith(a2[-4:]) else a2   # strip trailing page number noise
    r = difflib.SequenceMatcher(None, a2, b2).ratio()
    if r < 0.97:
        bad += 1
        print(f"   [{n}] similarity {r:.3f}\n     latex: {a[:150]}\n     docx : {b[:150]}")
print("   reference entries differing:", bad)

# 3) numbers (all decimal / integer tokens) in body text
def numbers(s):
    i = s.upper().rfind("REFERENCES")
    s = s[:i]
    s = re.sub(r"\[\d+\](-\[\d+\])?", " ", s)
    return re.findall(r"\d+(?:[.,]\d+)*", s)


from collections import Counter
ln, dn = Counter(numbers(ltxt)), Counter(numbers(dtxt))
only_l = {k: v - dn.get(k, 0) for k, v in ln.items() if v > dn.get(k, 0)}
only_d = {k: v - ln.get(k, 0) for k, v in dn.items() if v > ln.get(k, 0)}
print("== numeric tokens: latex", sum(ln.values()), "docx", sum(dn.values()))
print("   in LaTeX but missing/fewer in docx:", only_l)
print("   in docx but not in LaTeX:", only_d)

# 4) word-level text comparison of the body
def words(s):
    i = s.upper().rfind("REFERENCES")
    s = s[:i]
    s = re.sub(r"\[\d+\](-\[\d+\])?", " ", s)
    return re.findall(r"[A-Za-z]{3,}", s.lower())


lw, dw = words(ltxt), words(dtxt)
sm = difflib.SequenceMatcher(None, lw, dw, autojunk=False)
print("== words: latex", len(lw), "docx", len(dw), "| similarity", round(sm.ratio(), 4))
for op in sm.get_opcodes():
    if op[0] != "equal":
        a, b = " ".join(lw[op[1]:op[2]]), " ".join(dw[op[3]:op[4]])
        if len(a) + len(b) > 0:
            print(f"   {op[0]:8s} latex[{a[:90]}]  docx[{b[:90]}]")
