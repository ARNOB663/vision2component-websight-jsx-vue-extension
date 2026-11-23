import re
import sys
from pathlib import Path

folder = Path(sys.argv[1])
tex = (folder / "paper.tex").read_text(encoding="utf-8")
body = "\n".join(l for l in tex.splitlines() if not l.lstrip().startswith("%"))
used = {k.strip() for g in re.findall(r"\\cite\{([^}]*)\}", body) for k in g.split(",")}
bib = set(re.findall(r"^@\w+\{([^,]+),", (folder / "custom.bib").read_text(encoding="utf-8"), re.M))
print("cited:", len(used), " in bib:", len(bib))
print("cited but missing from bib:", sorted(used - bib))
print("in bib but never cited:", sorted(bib - used))
refs = re.findall(r"\\ref\{([^}]*)\}", body)
labels = set(re.findall(r"\\label\{([^}]*)\}", body))
print("refs to missing labels:", sorted(set(refs) - labels))
print("TODO comments:", sum("TODO" in l for l in tex.splitlines()))
