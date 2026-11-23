"""Abstract length, sentence lengths and naming consistency for paper.tex."""
import re
import sys

t = open(sys.argv[1], encoding="utf-8").read()
body = "\n".join(l for l in t.splitlines() if not l.lstrip().startswith("%"))

ab = body[body.index(r"\begin{abstract}") + 16:body.index(r"\end{abstract}")]
ab = re.sub(r"\\[a-zA-Z]+|[{}$\\]", " ", ab)
print("abstract words:", len(ab.split()))
sents = re.split(r"(?<=[.;])\s+(?=[A-Z])", ab.strip())
print("abstract sentences:", len(sents), " longest:", max(len(s.split()) for s in sents), "words")

main = body[body.index(r"\section{Introduction}"):body.index(r"\bibliographystyle")]
txt = re.sub(r"\\begin\{(table|tabular|figure|equation)\}.*?\\end\{\1\}", " ", main, flags=re.S)
txt = re.sub(r"\\(cite|ref|label|eqref)\{[^}]*\}", "X", txt)
txt = re.sub(r"\\[a-zA-Z]+\*?", " ", txt)
txt = re.sub(r"[{}$~\\]", " ", txt)
txt = re.sub(r"\s+", " ", txt)
ss = [s for s in re.split(r"(?<=[.!?])\s+(?=[A-Z(])", txt) if len(s.split()) > 3]
L = sorted(((len(s.split()), s) for s in ss), reverse=True)
print("body sentences:", len(ss), " mean words:", round(sum(l for l, _ in L) / len(L), 1))
print("sentences > 40 words:", sum(l > 40 for l, _ in L))
for l, s in L[:10]:
    print(f"  {l:3d} | {s[:150]}")

print("\nnaming of the models in running text:")
for pat in [r"QLoRA \(2B\)", r"fine-tuned 2B model", r"\bQLoRA\b(?! \()", r"the fine-tuned model",
            r"zero-shot 3B model", r"QLoRA \(3B\)", r"fine-tuned 3B model", r"3B model fine-tuned",
            r"the base model", r"\bwe\b", r"\bWe\b"]:
    print(f"  {pat:24s} {len(re.findall(pat, txt))}")

print("\nnon-referential 'This'/'These' sentence openers:")
for m in re.finditer(r"(?<=[.] )(This|These|That|It) (is|are|was|were|shows?|means?|explains?)\b[^.]{0,60}", txt):
    print("  ...", m.group(0))
