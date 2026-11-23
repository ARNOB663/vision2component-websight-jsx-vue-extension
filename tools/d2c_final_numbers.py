"""All Design2Code numbers for the paper, from the final scoring run."""
import json
import re
import sys

import numpy as np

sys.path.insert(0, r"E:\Thesis Project file\finetuning")
from revision_tables import paired_bootstrap  # noqa: E402

R = r"E:\Thesis Project file\finetuning\results"
ps = json.load(open(rf"{R}\design2code_per_sample.json"))
d = json.load(open(rf"{R}\design2code_results.json"))
T = ["html", "jsx", "vue"]
K = ["ssim", "psnr", "lpips"]


def page(m, n):
    return {k: np.mean([np.asarray(ps[m][t][k][:n], float) for t in T], axis=0) for k in K}


print("n_common", d["n_common_pages"])
for m in ["reference", "base", "qlora", "qlora_3b", "qwen2.5"]:
    if m == "reference":
        print("reference", {k: round(np.mean(ps[m]["html"][k]), 4) for k in K})
        continue
    n = len(ps[m]["html"]["ssim"])
    o = {k: round(float(np.mean([np.mean(ps[m][t][k]) for t in T])), 4) for k in K}
    rend = [int(sum(ps[m][t]["rendered"])) for t in T]
    pt = {t: round(float(np.mean(ps[m][t]["ssim"])), 4) for t in T}
    print(f"{m:9s} n={n} overall {o} rendered {rend} per-task SSIM {pt}")

print("\n100-page paired bootstrap")
for a, b in [("qlora", "base"), ("qlora", "qlora_3b"), ("qlora_3b", "base")]:
    pa, pb = page(a, 100), page(b, 100)
    for k in K:
        v, lo, hi, p = paired_bootstrap(pa[k], pb[k])
        print(f"  {a}-{b} {k:5s} {v:+.4f} [{lo:+.4f}, {hi:+.4f}] p={p:.4f}")

print("\n25-page comparison with zero-shot 3B")
for m in ["qlora", "qlora_3b", "base", "qwen2.5"]:
    pm = page(m, 25)
    print(f"  {m:9s} 25-page overall", {k: round(float(pm[k].mean()), 4) for k in K})
for a, b in [("qlora", "qwen2.5"), ("qlora_3b", "qwen2.5")]:
    pa, pb = page(a, 25), page(b, 25)
    for k in K:
        v, lo, hi, p = paired_bootstrap(pa[k], pb[k])
        print(f"  {a}-{b} {k:5s} {v:+.4f} [{lo:+.4f}, {hi:+.4f}] p={p:.4f}")

r = ps["reference"]["html"]
ok = np.array(r["rendered"])
print("\nreference rendered", ok.sum(), " SSIM on rendered", round(np.mean(np.array(r["ssim"])[ok]), 4))
print("qlora html SSIM on those pages", round(np.mean(np.array(ps["qlora"]["html"]["ssim"])[ok]), 4))

preds = json.load(open(rf"{R}\base_design2code_predictions.json", encoding="utf-8"))["jsx"]
imp = [bool(re.search(r"^\s*import\s+.*from\s+['\"](?!react['\"])", x["prediction"], re.M)) for x in preds]
rend = ps["base"]["jsx"]["rendered"]
print("base JSX failed renders", sum(not x for x in rend), " of which import a library", sum(i and not x for i, x in zip(imp, rend)))
q = json.load(open(rf"{R}\qwen2.5_design2code_predictions.json", encoding="utf-8"))
print("qwen2.5 cap hits", {t: sum(x["n_generated_tokens"] >= 1536 for x in q[t]) for t in T},
      " mean tokens", {t: round(np.mean([x["n_generated_tokens"] for x in q[t]])) for t in T})
