import re
import sys
from collections import Counter

tex = open(sys.argv[1], encoding="utf-8").read()
body = tex[tex.index(r"\begin{abstract}"):]
body = "\n".join(l for l in body.splitlines() if not l.lstrip().startswith("%"))
print("body characters:", len(body))

print("\n== em dashes (--- or unicode):", len(re.findall(r"---|—", body)))

vocab = (r"crucial|pivotal|delve|showcas\w*|underscor\w*|highlight\w*|comprehensive|landscape|"
         r"seamless\w*|remarkabl\w*|groundbreaking|massively|vastly|markedly|dramatically|profound\w*|"
         r"robust\w*|leverag\w*|via|yield\w*|testament|tapestry|intricate|multifaceted|very|severely|"
         r"tightly|strictly|notably|fundamentally|critically|substantially|in order to|remains?|despite|"
         r"beyond|linked to|in other words|essentially|key|valuable|enhanc\w*|foster\w*|holistic|"
         r"interplay|serves as|stands as|additionally|moreover|furthermore")
hits = Counter(m.group(0).lower() for m in re.finditer(rf"\b({vocab})\b", body, re.I))
print("\n== pattern words:", dict(hits) or "none")

print("\n== 'where' / 'in which':")
for m in re.finditer(r"[^.\n]{0,50}\b(where|in which)\b[^.\n]{0,40}", body, re.I):
    print("  ...", m.group(0).strip())

print("\n== 'significant*' (must be backed by a test):")
for m in re.finditer(r"[^.\n]{0,60}significan\w*[^.\n]{0,50}", body, re.I):
    print("  ...", m.group(0).strip())

print("\n== '-ing' tails after a comma (superficial analysis check):")
for m in re.finditer(r",\s+(highlighting|underscoring|emphasizing|ensuring|reflecting|showcasing|"
                     r"contributing|demonstrating|indicating|suggesting|making|allowing|enabling)\b[^.\n]{0,60}",
                     body, re.I):
    print("  ...", m.group(0).strip())
