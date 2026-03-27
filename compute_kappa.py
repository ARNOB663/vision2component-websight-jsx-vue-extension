"""
Compute dataset quality metrics for thesis:
  - Cohen's Kappa (Node.js vs Python validators)
  - PABAK (Prevalence-Adjusted Bias-Adjusted Kappa) for imbalanced classes
  - Percentage agreement
  - Completeness and uniqueness checks

Usage:
    py -3.11 compute_kappa.py
"""

import re
import pandas as pd
from sklearn.metrics import cohen_kappa_score, confusion_matrix

CSV_PATH = "data/websight_50k/websight_50k_gen.csv"


def pabak(y1, y2):
    """Prevalence-Adjusted Bias-Adjusted Kappa.
    Corrects Cohen's Kappa for extreme class imbalance (Byrt et al., 1993)."""
    n = len(y1)
    agree = sum(a == b for a, b in zip(y1, y2))
    po = agree / n
    return 2 * po - 1


# ── Validator Set 1: Python Heuristic (same as Kaggle notebook) ──
def validate_jsx_python_heuristic(code):
    if not isinstance(code, str) or not code.strip():
        return False
    if "GeneratedComponent" not in code and "export" not in code:
        return False
    if code.count("(") != code.count(")"):
        return False
    if code.count("{") != code.count("}"):
        return False
    return True


def validate_vue_python_heuristic(code):
    if not isinstance(code, str) or not code.strip():
        return False
    if "<template>" not in code or "</template>" not in code:
        return False
    return True


# ── Validator Set 2: Python Structural (stricter, independent) ──
def validate_jsx_python_structural(code):
    if not isinstance(code, str) or not code.strip():
        return False
    if not re.search(r'(function\s+\w+|const\s+\w+\s*=|export\s+default)', code):
        return False
    if not re.search(r'return\s*\(?\s*<', code):
        return False
    if code.count("(") != code.count(")"):
        return False
    if code.count("{") != code.count("}"):
        return False
    if not re.search(r'<\w+[\s/>]', code):
        return False
    return True


def validate_vue_python_structural(code):
    if not isinstance(code, str) or not code.strip():
        return False
    if "<template>" not in code or "</template>" not in code:
        return False
    template_match = re.search(r'<template>(.*?)</template>', code, re.DOTALL)
    if not template_match or not template_match.group(1).strip():
        return False
    if not re.search(r'<\w+[\s/>]', template_match.group(1)):
        return False
    return True


def main():
    df = pd.read_csv(CSV_PATH, encoding="utf-8")
    n = len(df)
    print(f"Loaded {n} samples from {CSV_PATH}\n")

    # ── Node.js results (ground truth from CSV) ──
    node_jsx = df["jsx_valid"].astype(bool).tolist()
    node_vue = df["vue_valid"].astype(bool).tolist()

    # ── Python heuristic results ──
    py_h_jsx = [validate_jsx_python_heuristic(c) for c in df["jsx_code"]]
    py_h_vue = [validate_vue_python_heuristic(c) for c in df["vue_sfc"]]

    # ── Python structural results ──
    py_s_jsx = [validate_jsx_python_structural(c) for c in df["jsx_code"]]
    py_s_vue = [validate_vue_python_structural(c) for c in df["vue_sfc"]]

    # ═══════════════════════════════════════════════════
    # 1. COHEN'S KAPPA + PABAK: Node.js vs Python Heuristic
    # ═══════════════════════════════════════════════════
    kappa_jsx_h = cohen_kappa_score(node_jsx, py_h_jsx)
    kappa_vue_h = cohen_kappa_score(node_vue, py_h_vue)
    pabak_jsx_h = pabak(node_jsx, py_h_jsx)
    pabak_vue_h = pabak(node_vue, py_h_vue)
    agree_jsx_h = sum(a == b for a, b in zip(node_jsx, py_h_jsx))
    agree_vue_h = sum(a == b for a, b in zip(node_vue, py_h_vue))

    print("=" * 60)
    print("1. Node.js vs Python Heuristic Validator")
    print("=" * 60)

    cm = confusion_matrix(node_jsx, py_h_jsx, labels=[False, True])
    print(f"\n  JSX:")
    print(f"    Agreement:  {agree_jsx_h}/{n} ({agree_jsx_h/n:.4%})")
    print(f"    Cohen's k:  {kappa_jsx_h:.4f}")
    print(f"    PABAK:      {pabak_jsx_h:.4f}")
    print(f"    Confusion matrix (rows=Node.js, cols=Python):")
    print(f"                   Py=Invalid  Py=Valid")
    print(f"      Node=Invalid {cm[0][0]:>9d}  {cm[0][1]:>8d}")
    print(f"      Node=Valid   {cm[1][0]:>9d}  {cm[1][1]:>8d}")

    cm = confusion_matrix(node_vue, py_h_vue, labels=[False, True])
    print(f"\n  Vue:")
    print(f"    Agreement:  {agree_vue_h}/{n} ({agree_vue_h/n:.4%})")
    print(f"    Cohen's k:  {kappa_vue_h:.4f}")
    print(f"    PABAK:      {pabak_vue_h:.4f}")
    print(f"    Confusion matrix (rows=Node.js, cols=Python):")
    print(f"                   Py=Invalid  Py=Valid")
    print(f"      Node=Invalid {cm[0][0]:>9d}  {cm[0][1]:>8d}")
    print(f"      Node=Valid   {cm[1][0]:>9d}  {cm[1][1]:>8d}")

    # ═══════════════════════════════════════════════════
    # 2. COHEN'S KAPPA + PABAK: Node.js vs Python Structural
    # ═══════════════════════════════════════════════════
    kappa_jsx_s = cohen_kappa_score(node_jsx, py_s_jsx)
    kappa_vue_s = cohen_kappa_score(node_vue, py_s_vue)
    pabak_jsx_s = pabak(node_jsx, py_s_jsx)
    pabak_vue_s = pabak(node_vue, py_s_vue)
    agree_jsx_s = sum(a == b for a, b in zip(node_jsx, py_s_jsx))
    agree_vue_s = sum(a == b for a, b in zip(node_vue, py_s_vue))

    print(f"\n{'=' * 60}")
    print("2. Node.js vs Python Structural Validator")
    print("=" * 60)

    cm = confusion_matrix(node_jsx, py_s_jsx, labels=[False, True])
    print(f"\n  JSX:")
    print(f"    Agreement:  {agree_jsx_s}/{n} ({agree_jsx_s/n:.4%})")
    print(f"    Cohen's k:  {kappa_jsx_s:.4f}")
    print(f"    PABAK:      {pabak_jsx_s:.4f}")
    print(f"    Confusion matrix:")
    print(f"                   Py=Invalid  Py=Valid")
    print(f"      Node=Invalid {cm[0][0]:>9d}  {cm[0][1]:>8d}")
    print(f"      Node=Valid   {cm[1][0]:>9d}  {cm[1][1]:>8d}")

    cm = confusion_matrix(node_vue, py_s_vue, labels=[False, True])
    print(f"\n  Vue:")
    print(f"    Agreement:  {agree_vue_s}/{n} ({agree_vue_s/n:.4%})")
    print(f"    Cohen's k:  {kappa_vue_s:.4f}")
    print(f"    PABAK:      {pabak_vue_s:.4f}")
    print(f"    Confusion matrix:")
    print(f"                   Py=Invalid  Py=Valid")
    print(f"      Node=Invalid {cm[0][0]:>9d}  {cm[0][1]:>8d}")
    print(f"      Node=Valid   {cm[1][0]:>9d}  {cm[1][1]:>8d}")

    # ═══════════════════════════════════════════════════
    # 3. COHEN'S KAPPA + PABAK: Python Heuristic vs Structural
    # ═══════════════════════════════════════════════════
    kappa_jsx_pp = cohen_kappa_score(py_h_jsx, py_s_jsx)
    pabak_jsx_pp = pabak(py_h_jsx, py_s_jsx)
    pabak_vue_pp = pabak(py_h_vue, py_s_vue)
    # Vue: both Python validators may agree on everything (no variance)
    try:
        kappa_vue_pp = cohen_kappa_score(py_h_vue, py_s_vue)
    except Exception:
        kappa_vue_pp = float('nan')

    print(f"\n{'=' * 60}")
    print("3. Python Heuristic vs Python Structural")
    print("=" * 60)
    print(f"  JSX Cohen's k: {kappa_jsx_pp:.4f}  |  PABAK: {pabak_jsx_pp:.4f}")
    print(f"  Vue Cohen's k: {kappa_vue_pp:.4f}  |  PABAK: {pabak_vue_pp:.4f}")

    # ═══════════════════════════════════════════════════
    # 4. SUMMARY: Average PABAK (the right metric for imbalanced data)
    # ═══════════════════════════════════════════════════
    avg_pabak_jsx = (pabak_jsx_h + pabak_jsx_s + pabak_jsx_pp) / 3
    avg_pabak_vue = (pabak_vue_h + pabak_vue_s + pabak_vue_pp) / 3

    print(f"\n{'=' * 60}")
    print("4. AVERAGE PAIRWISE PABAK (3 validators)")
    print("   (Prevalence-Adjusted Bias-Adjusted Kappa)")
    print("=" * 60)
    print(f"  JSX avg PABAK: {avg_pabak_jsx:.4f}")
    print(f"  Vue avg PABAK: {avg_pabak_vue:.4f}")
    print(f"  Overall:       {(avg_pabak_jsx + avg_pabak_vue) / 2:.4f}")

    # ═══════════════════════════════════════════════════
    # 5. ADDITIONAL QUALITY METRICS
    # ═══════════════════════════════════════════════════
    print(f"\n{'=' * 60}")
    print("5. ADDITIONAL DATA QUALITY METRICS")
    print("=" * 60)

    jsx_nonempty = sum(1 for c in df["jsx_code"] if isinstance(c, str) and c.strip())
    vue_nonempty = sum(1 for c in df["vue_sfc"] if isinstance(c, str) and c.strip())
    html_nonempty = sum(1 for c in df["text"] if isinstance(c, str) and c.strip())
    idea_nonempty = int(df["llm_generated_idea"].notna().sum())

    print(f"\n  Completeness (non-empty fields):")
    print(f"    HTML:               {html_nonempty}/{n} ({html_nonempty/n:.2%})")
    print(f"    JSX code:           {jsx_nonempty}/{n} ({jsx_nonempty/n:.2%})")
    print(f"    Vue SFC:            {vue_nonempty}/{n} ({vue_nonempty/n:.2%})")
    print(f"    Design description: {idea_nonempty}/{n} ({idea_nonempty/n:.2%})")

    jsx_unique = df["jsx_code"].dropna().nunique()
    vue_unique = df["vue_sfc"].dropna().nunique()
    html_unique = df["text"].dropna().nunique()

    print(f"\n  Uniqueness (distinct code outputs):")
    print(f"    HTML:  {html_unique}/{n} ({html_unique/n:.2%})")
    print(f"    JSX:   {jsx_unique}/{n} ({jsx_unique/n:.2%})")
    print(f"    Vue:   {vue_unique}/{n} ({vue_unique/n:.2%})")

    jsx_has_error = sum(1 for e in df["jsx_error"] if isinstance(e, str) and e.strip())
    vue_has_error = sum(1 for e in df["vue_error"] if isinstance(e, str) and e.strip())
    jsx_repaired = sum(1 for v, e in zip(df["jsx_valid"], df["jsx_error"])
                       if v == True and isinstance(e, str) and e.strip())
    vue_repaired = sum(1 for v, e in zip(df["vue_valid"], df["vue_error"])
                       if v == True and isinstance(e, str) and e.strip())

    print(f"\n  Validation error details:")
    print(f"    JSX samples with errors logged: {jsx_has_error}")
    print(f"    Vue samples with errors logged: {vue_has_error}")
    print(f"    JSX repaired (valid despite error): {jsx_repaired}")
    print(f"    Vue repaired (valid despite error): {vue_repaired}")

    # ═══════════════════════════════════════════════════
    # THESIS-READY SUMMARY
    # ═══════════════════════════════════════════════════
    print(f"\n{'=' * 60}")
    print("THESIS-READY SUMMARY TABLE")
    print("=" * 60)
    print(f"""
NOTE: Cohen's Kappa is unreliable with extreme class imbalance
(99.99% valid). PABAK corrects for this (Byrt et al., 1993).

| Validator Pair                 | JSX Agreement | JSX PABAK | Vue Agreement | Vue PABAK |
|--------------------------------|---------------|-----------|---------------|-----------|
| Node.js vs Python Heuristic    | {agree_jsx_h/n:.2%}        | {pabak_jsx_h:.4f}    | {agree_vue_h/n:.2%}        | {pabak_vue_h:.4f}    |
| Node.js vs Python Structural   | {agree_jsx_s/n:.2%}        | {pabak_jsx_s:.4f}    | {agree_vue_s/n:.2%}        | {pabak_vue_s:.4f}    |
| Python Heuristic vs Structural | {sum(a==b for a,b in zip(py_h_jsx,py_s_jsx))/n:.2%}        | {pabak_jsx_pp:.4f}    | {sum(a==b for a,b in zip(py_h_vue,py_s_vue))/n:.2%}        | {pabak_vue_pp:.4f}    |

Overall average PABAK: {(avg_pabak_jsx + avg_pabak_vue) / 2:.4f}

Completeness: HTML {html_nonempty/n:.2%}, JSX {jsx_nonempty/n:.2%}, Vue {vue_nonempty/n:.2%}, Design ctx {idea_nonempty/n:.2%}
Uniqueness:   HTML {html_unique/n:.2%}, JSX {jsx_unique/n:.2%}, Vue {vue_unique/n:.2%}
""")


if __name__ == "__main__":
    main()
