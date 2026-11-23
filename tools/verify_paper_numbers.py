"""Recompute the paper's key numbers from the result files and check each one appears in paper.tex."""
import json

import numpy as np

R = r"E:\Thesis Project file\finetuning\results"
TEX = open(r"E:\Thesis Project file\AniruddhA_Dev_Nath_Parater_Efficient_UI_Code_Generation_Using_QLoRA_on_an_Extended_WebSight_Dataset_new\paper.tex",
           encoding="utf-8").read()
T = ["html", "jsx", "vue"]
M = ["base", "qwen2.5", "qlora", "qlora_3b"]
ok, bad = 0, []


def check(label, s):
    global ok
    if s in TEX:
        ok += 1
    else:
        bad.append(f"{label}: '{s}' not found")


def f(x, d):
    return f"{x:.{d}f}"


ev = {m: json.load(open(rf"{R}\{m}_eval_results.json")) for m in M}
ps = json.load(open(rf"{R}\per_sample_scores.json"))
b = json.load(open(rf"{R}\bootstrap_ci.json"))

# Table I
for m in M:
    vis = {k: np.mean([np.mean(ps[m][t][k]) for t in T]) for k in ["ssim", "psnr", "lpips"]}
    check(f"T1 {m} SSIM", f(vis["ssim"], 3)); check(f"T1 {m} PSNR", f(vis["psnr"], 2))
    check(f"T1 {m} LPIPS", f(vis["lpips"], 3))
    check(f"T1 {m} PSR", f(ev[m]["avg_parse_success_rate"] * 100, 2))
    check(f"T1 {m} BLEU", f(ev[m]["avg_bleu4"], 2))
    check(f"T1 {m} CodeBLEU", f(np.mean([ev[m]["per_task"][t]["codebleu"] for t in T]), 3))
    check(f"T1 {m} EditSim", f(ev[m]["avg_edit_similarity"], 3))
    check(f"T1 {m} Tag", f(ev[m]["avg_tag_accuracy"], 3))
    check(f"T1 {m} Tree", f(ev[m]["avg_tree_edit_similarity"], 3))
# Table II
for m in M:
    for t in T:
        pt = ev[m]["per_task"][t]
        check(f"T2 {m}/{t} BLEU", f(pt["bleu4"], 2))
        check(f"T2 {m}/{t} CodeBLEU", f(pt["codebleu"], 3))
        check(f"T2 {m}/{t} SSIM", f(np.mean(ps[m][t]["ssim"]), 3))
# Bootstrap CIs quoted in text
P = b["metrics"]
def ci(metric, key, d):
    o = P[metric]["paired"][key]["overall"]
    return f(o["ci_low"], d), f(o["ci_high"], d)
lo, hi = ci("codebleu", "qlora_minus_qwen2.5", 3); check("CI CodeBLEU 2B-zs3B", f"[{lo}, {hi}]")
lo, hi = ci("codebleu", "qlora_minus_qlora_3b", 3); check("CI CodeBLEU 2B-3B", f"[{lo}, {hi}]")
lo, hi = ci("ssim", "qlora_minus_qwen2.5", 3); check("CI SSIM 2B-zs3B", f"{hi}]")
lo, hi = ci("psnr", "qlora_minus_qwen2.5", 2); check("CI PSNR 2B-zs3B", f"[{lo}, {hi}]")
lo, hi = ci("psnr", "qlora_minus_qlora_3b", 2); check("CI PSNR 2B-3B", f"[{lo}, {hi}]")
lo, hi = ci("bleu4", "qlora_minus_qlora_3b", 1); check("CI BLEU 2B-3B", f"[{lo}, {hi}]")
check("p SSIM 2B-3B", f"p={f(P['ssim']['paired']['qlora_minus_qlora_3b']['overall']['p_value'], 2)}")
check("p SSIM 2B-zs3B", f"p={f(P['ssim']['paired']['qlora_minus_qwen2.5']['overall']['p_value'], 2)}")
# Latency (first 24 samples)
import re, sys
sys.path.insert(0, r"E:\Thesis Project file\finetuning")
from revision_tables import batch_latencies_from_log  # noqa: E402
for m, lab in [("base", "6.4"), ("qlora", "11.2"), ("qlora_3b", "12.9"), ("qwen2.5", "22.9")]:
    e = json.load(open(rf"{R}\{m}_latency_eval_results.json"))
    lat = e.get("per_sample_latency_s") or batch_latencies_from_log(m)
    check(f"latency {m}", f"{np.mean(lat[:24]):.1f}\\,s"); check(f"VRAM {m}", f"{e['peak_vram_gb']:.2f}")
# Design2Code
d2 = json.load(open(rf"{R}\design2code_per_sample.json"))
for m in ["base", "qlora", "qlora_3b"]:
    for k, d in [("ssim", 3), ("psnr", 2), ("lpips", 3)]:
        check(f"T3 {m} {k}", f(np.mean([np.mean(d2[m][t][k]) for t in T]), d))
for k, d in [("ssim", 3), ("psnr", 2), ("lpips", 3)]:
    check(f"T3 ref {k}", f(np.mean(d2["reference"]["html"][k]), d))
    check(f"T3 qwen25 {k}", f(np.mean([np.mean(d2["qwen2.5"][t][k]) for t in T]), d))
    check(f"T3 qlora25 {k}", f(np.mean([np.mean(d2["qlora"][t][k][:25]) for t in T]), d))

print(f"{ok} numbers found in paper.tex")
print("\n".join(bad) if bad else "no mismatches")
