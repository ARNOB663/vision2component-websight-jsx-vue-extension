"""
Extract JSX and Vue components from the generated CSV into test projects.

Usage:
    python extract_components.py
    python extract_components.py --csv data/websight_50k/websight_50k_gen.csv
"""

import os
import argparse
import pandas as pd

CSV_PATH = "data/websight_50k/websight_50k_gen.csv"
REACT_DIR = "test-react/src/components"
VUE_DIR = "test-vue/src/components"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--csv", default=CSV_PATH)
    args = parser.parse_args()

    df = pd.read_csv(args.csv, encoding="utf-8")
    print(f"Loaded {len(df)} rows from {args.csv}")

    os.makedirs(REACT_DIR, exist_ok=True)
    os.makedirs(VUE_DIR, exist_ok=True)

    jsx_count = 0
    vue_count = 0
    react_imports = []
    vue_imports = []

    for _, row in df.iterrows():
        row_id = int(row["id"])
        jsx_code = str(row.get("jsx_code", "")) if pd.notna(row.get("jsx_code")) else ""
        vue_code = str(row.get("vue_sfc", "")) if pd.notna(row.get("vue_sfc")) else ""
        jsx_valid = row.get("jsx_valid", False)
        vue_valid = row.get("vue_valid", False)

        # Write JSX component
        if jsx_valid and len(jsx_code.strip()) > 10:
            filepath = os.path.join(REACT_DIR, f"Component_{row_id}.jsx")
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(jsx_code)
            react_imports.append(row_id)
            jsx_count += 1

        # Write Vue component
        if vue_valid and len(vue_code.strip()) > 10:
            filepath = os.path.join(VUE_DIR, f"Component_{row_id}.vue")
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(vue_code)
            vue_imports.append(row_id)
            vue_count += 1

    # Generate React component registry (just IDs, App handles loading)
    lines = []
    lines.append("// Auto-generated - list of component IDs")
    lines.append(f"const components = {react_imports};")
    lines.append("export default components;")
    lines.append("")
    with open(os.path.join(REACT_DIR, "index.js"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    # Generate Vue component registry (static imports)
    lines = []
    lines.append("// Auto-generated - do not edit")
    for rid in vue_imports:
        lines.append(f'import Component_{rid} from "./Component_{rid}.vue";')
    lines.append("")
    lines.append("const components = [")
    for rid in vue_imports:
        lines.append(f'  {{ id: {rid}, component: Component_{rid} }},')
    lines.append("];")
    lines.append("")
    lines.append("export default components;")
    lines.append("")
    with open(os.path.join(VUE_DIR, "index.js"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"\nExtracted:")
    print(f"  JSX: {jsx_count} components -> {REACT_DIR}/")
    print(f"  Vue: {vue_count} components -> {VUE_DIR}/")
    print(f"\nNext steps:")
    print(f"  cd test-react && npm install && npm run dev")
    print(f"  cd test-vue && npm install && npm run dev")


if __name__ == "__main__":
    main()
