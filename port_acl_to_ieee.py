r"""
Port the ACL submission source into the OFFICIAL IEEE conference template
(IEEE-conference-template-062824) for ICCIT 2026, WITHOUT altering a single
word or sentence of the paper.

Base template : templte/IEEE-conference-template-062824/IEEE-conference-template-062824.tex
Content source: the ACL acl_latex.tex

Kept from the official template, verbatim:
  - the preamble (documentclass, \usepackage{cite}, amsmath/amssymb/amsfonts,
    algorithmic, graphicx, textcomp, xcolor, \def\BibTeX)
  - the DEFAULT author block (1st..6th "Given Name Surname" placeholders).
    These placeholders also satisfy ICCIT's double-blind rule.
  - the DEFAULT \begin{IEEEkeywords} block

Taken from the ACL source, verbatim (zero words changed):
  - the title
  - the abstract
  - the entire body, sections 1-7

Markup-only changes applied to the body:
  - [H] -> [htbp] and \FloatBarrier removed
    Fixes the two-column gap WITHOUT relocating the tables: [H] forbids
    floating (-> column breaks -> gaps), while [t] would force every table
    to a column top (-> tables cluster away from their text). [htbp] tries
    "here" first, preserving the original text-then-table flow, and only
    falls back if the table genuinely will not fit.
    Tables that were not [H] in the ACL source are left exactly as they were,
    including the full-width \begin{table*}[t] (table* cannot take h/b in a
    two-column layout -- LaTeX permits only t/p).
  - \citet{x} -> \cite{x}                  (the official template uses the
    `cite` package, which has no \citet; IEEE style is numeric anyway)

Deviations from the official template, and why:
  - `a4paper` added: ICCIT requires the A4 template.
  - `booktabs` + `array` added: the body's tables use \toprule/\midrule/
    \bottomrule, which the stock template does not load.

Usage:
    py -3.10 port_acl_to_ieee.py
"""
import io
import os
import re

BASE = r"e:\Thesis Project file"
TEMPLATE = os.path.join(BASE, "templte", "IEEE-conference-template-062824",
                        "IEEE-conference-template-062824.tex")
ACL_TEX = (r"C:\Users\Arnob\AppData\Local\Temp\claude\e--Thesis-Project-file"
           r"\1afc65b5-b93c-466b-9ad7-9d13bf7042dd\scratchpad\aclzip\latex\acl_latex.tex")
OUT_TEX = os.path.join(BASE, "iccit_submission", "paper.tex")


def read(path):
    with io.open(path, encoding="utf-8", errors="replace") as f:
        return f.read()


def between(src, start, end):
    i = src.index(start) + len(start)
    return src[i:src.index(end, i)]


def main():
    tpl = read(TEMPLATE)
    acl = read(ACL_TEX)

    # ── From the OFFICIAL template, verbatim ──────────────────────────────
    # preamble: everything before \begin{document}
    preamble = tpl[:tpl.index(r"\begin{document}")].rstrip()

    # default author block: from \author{ up to the line before \maketitle
    author = tpl[tpl.index(r"\author{"):tpl.index(r"\maketitle")].rstrip()

    # default keywords block
    keywords = (r"\begin{IEEEkeywords}"
                + between(tpl, r"\begin{IEEEkeywords}", r"\end{IEEEkeywords}")
                + r"\end{IEEEkeywords}")

    # ── From the ACL source, verbatim ─────────────────────────────────────
    title = re.search(r"\\title\{(.+?)\}\s*\n", acl, re.DOTALL).group(1).strip()
    abstract = between(acl, r"\begin{abstract}", r"\end{abstract}").strip("\n")
    body = acl[acl.index(r"\section{Introduction}"):
               acl.index(r"\begin{thebibliography}")].rstrip()

    # ── Markup-only fixes to the body ─────────────────────────────────────
    # [H] (float package) means "put it EXACTLY here, never float". In a
    # two-column layout, when an [H] table does not fit in the space left in
    # the column, LaTeX must break the column -> the large blank gaps.
    #
    # [t] would fix the gaps but forces every table to a column top, so the
    # tables cluster together away from the text that introduces them.
    #
    # [htbp] keeps the original "text, then box" flow (h = here, tried first)
    # while giving LaTeX fallbacks (top/bottom/float page) so it never has to
    # leave a gap.
    n_H = body.count(r"\begin{table}[H]")
    body = body.replace(r"\begin{table}[H]", r"\begin{table}[htbp]")

    lines = body.split("\n")
    n_fb = sum(1 for ln in lines if ln.strip() == r"\FloatBarrier")
    body = "\n".join(ln for ln in lines if ln.strip() != r"\FloatBarrier")

    n_citet = len(re.findall(r"\\citet\{", body))
    body = body.replace(r"\citet{", r"\cite{")

    # ── Preamble deviations (documented above) ────────────────────────────
    preamble = preamble.replace(r"\documentclass[conference]{IEEEtran}",
                                r"\documentclass[conference,a4paper]{IEEEtran}")
    preamble = preamble.replace(r"\usepackage{xcolor}",
                                "\\usepackage{xcolor}\n"
                                "\\usepackage{booktabs}  % body tables use \\toprule/\\midrule/\\bottomrule\n"
                                "\\usepackage{array}")

    header = r"""%% ===================================================================
%% ICCIT 2026 submission -- built on the OFFICIAL IEEE conference template
%% (IEEE-conference-template-062824), A4.
%%
%% Title, abstract and body are byte-for-byte identical to the ACL source;
%% only LaTeX markup changed. Regenerate with port_acl_to_ieee.py.
%%
%% The DEFAULT author block and DEFAULT keywords from the IEEE template are
%% kept as-is. The placeholder author names also satisfy ICCIT double-blind.
%%
%% ICCIT 2026: max SIX (6) pages incl. references | A4 | double-blind |
%% single PDF | https://cmt3.research.microsoft.com/ICCITconf2026 | 31 Jul 2026
%% ===================================================================
"""

    out = (
        header
        + preamble
        + "\n\n\\begin{document}\n\n"
        + "\\title{" + title + "}\n\n"
        + "%% ---- DEFAULT author block from the official IEEE template (kept verbatim) ----\n"
        + "%% ICCIT is double-blind; these placeholders must stay until camera-ready.\n"
        + author + "\n\n"
        + "\\maketitle\n\n"
        + "\\begin{abstract}\n" + abstract + "\n\\end{abstract}\n\n"
        + "%% ---- DEFAULT keywords from the official IEEE template (kept verbatim) ----\n"
        + "%% Replace with real index terms when you are ready.\n"
        + keywords + "\n\n"
        + body
        + "\n\n"
        + "%% The ACL source had BOTH a manual thebibliography (b1-b6, never cited by\n"
        + "%% any \\cite{}) AND \\bibliography{custom}, which produced two References\n"
        + "%% sections. The phantom list is dropped; all 36 citations resolve via custom.bib.\n"
        + "\\bibliographystyle{IEEEtran}\n"
        + "\\bibliography{custom}\n\n"
        + "\\end{document}\n"
    )

    with io.open(OUT_TEX, "w", encoding="utf-8", newline="\n") as f:
        f.write(out)

    print("Wrote:", OUT_TEX)
    print()
    print("  title    :", title[:64])
    print("  abstract :", len(abstract), "chars")
    print("  body     :", len(body), "chars")
    print()
    print("  markup-only changes:")
    print("    [H] -> [htbp]        :", n_H)
    print("    \\FloatBarrier removed:", n_fb)
    print("    \\citet -> \\cite      :", n_citet)


if __name__ == "__main__":
    main()
