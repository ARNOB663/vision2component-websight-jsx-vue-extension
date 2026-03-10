"""
Prepare fine-tuning data from the generated CSV.

Filters valid samples, creates multi-task JSONL (image->HTML/JSX/Vue),
and splits into train/val/test (85/10/5) by image ID.

Usage:
    python finetuning/prepare_data.py
        -> uses websight_10k.csv, writes train/val/test to finetuning/data/
    python finetuning/prepare_data.py --csv data/websight_50k/websight_rest.csv --out-dir finetuning/data/rest
        -> creates rest train/val/test in finetuning/data/rest/
"""

import os
import json
import argparse
import random

import pandas as pd

# ── Config ──
CSV_PATH = "data/websight_50k/websight_10k.csv"
IMG_DIR = "data/websight_50k/images"
OUT_DIR = "finetuning/data"

TRAIN_RATIO = 0.85
VAL_RATIO = 0.10
TEST_RATIO = 0.05

SEED = 42

# ── Task prompts ──
PROMPTS = {
    "html": (
        "Convert this UI screenshot into clean HTML with Tailwind CSS classes. "
        "Output only the HTML code, no explanations."
    ),
    "jsx": (
        "Convert this UI screenshot into a React JSX component. "
        "Export a named function component called GeneratedComponent. "
        "Use Tailwind CSS for styling. Convert inline styles to JSX objects. "
        "Use className instead of class. Output only the code."
    ),
    "vue": (
        "Convert this UI screenshot into a Vue 3 Single File Component (SFC). "
        "Include <template> and <script setup> sections. "
        "Use Tailwind CSS for styling. Output only the code."
    ),
}

CODE_COLS = {
    "html": "text",
    "jsx": "jsx_code",
    "vue": "vue_sfc",
}


def build_conversation(image_abs_path: str, task: str, code: str) -> dict:
    """Build a single Qwen2-VL chat-format conversation."""
    return {
        "messages": [
            {
                "role": "user",
                "content": [
                    {"type": "image", "image": f"file:///{image_abs_path}"},
                    {"type": "text", "text": PROMPTS[task]},
                ],
            },
            {
                "role": "assistant",
                "content": code,
            },
        ],
    }


def main():
    parser = argparse.ArgumentParser(description="Prepare fine-tuning JSONL data")
    parser.add_argument("--csv", default=CSV_PATH, help="Path to generated CSV")
    parser.add_argument("--img-dir", default=IMG_DIR, help="Path to images folder")
    parser.add_argument("--out-dir", default=OUT_DIR, help="Output directory for JSONL files")
    args = parser.parse_args()

    os.makedirs(args.out_dir, exist_ok=True)
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

    print(f"Loading CSV: {args.csv}")
    df = pd.read_csv(args.csv, encoding="utf-8")
    print(f"  Total rows: {len(df)}")
    print(f"  Columns: {list(df.columns)}")

    # ── Filter valid rows ──
    mask = (df["jsx_valid"] == True) & (df["vue_valid"] == True)
    valid = df[mask].copy()
    print(f"\n  Rows with both JSX + Vue valid: {len(valid)}")

    if len(valid) == 0:
        print("ERROR: No valid rows found. Exiting.")
        return

    # Verify images exist
    missing = 0
    for _, row in valid.iterrows():
        img_path = os.path.join(project_root, args.img_dir, f"{int(row['id']):06d}.png")
        if not os.path.exists(img_path):
            missing += 1

    if missing > 0:
        print(f"  WARNING: {missing} images not found on disk.")

    # ── Split by image ID ──
    ids = sorted(valid["id"].unique().tolist())
    random.seed(SEED)
    random.shuffle(ids)

    n = len(ids)
    n_train = int(n * TRAIN_RATIO)
    n_val = int(n * VAL_RATIO)

    train_ids = set(ids[:n_train])
    val_ids = set(ids[n_train : n_train + n_val])
    test_ids = set(ids[n_train + n_val :])

    print(f"\n  Split ({n} unique images):")
    print(f"    Train: {len(train_ids)} ({len(train_ids)/n:.1%})")
    print(f"    Val:   {len(val_ids)} ({len(val_ids)/n:.1%})")
    print(f"    Test:  {len(test_ids)} ({len(test_ids)/n:.1%})")

    # ── Build JSONL files ──
    splits = {"train": train_ids, "val": val_ids, "test": test_ids}
    counts = {s: {t: 0 for t in PROMPTS} for s in splits}

    files = {}
    for split_name in splits:
        path = os.path.join(args.out_dir, f"{split_name}.jsonl")
        files[split_name] = open(path, "w", encoding="utf-8")

    for _, row in valid.iterrows():
        row_id = int(row["id"])

        if row_id in train_ids:
            split = "train"
        elif row_id in val_ids:
            split = "val"
        elif row_id in test_ids:
            split = "test"
        else:
            continue

        img_abs = os.path.join(project_root, args.img_dir, f"{row_id:06d}.png")
        img_abs = img_abs.replace("\\", "/")

        for task, col in CODE_COLS.items():
            code = str(row[col]) if pd.notna(row[col]) else ""
            if not code.strip():
                continue

            conv = build_conversation(img_abs, task, code)
            files[split].write(json.dumps(conv, ensure_ascii=False) + "\n")
            counts[split][task] += 1

    for f in files.values():
        f.close()

    # ── Summary ──
    print(f"\n{'='*60}")
    print("JSONL files created:")
    print(f"{'='*60}")
    total = 0
    for split_name in ["train", "val", "test"]:
        path = os.path.join(args.out_dir, f"{split_name}.jsonl")
        n_lines = sum(counts[split_name].values())
        total += n_lines
        size_mb = os.path.getsize(path) / 1024 / 1024
        print(f"  {split_name:5s}: {n_lines:>6d} examples ({size_mb:.1f} MB)")
        for task in PROMPTS:
            print(f"         {task:4s}: {counts[split_name][task]:>6d}")
    print(f"  {'total':5s}: {total:>6d} examples")
    print(f"\nOutput: {os.path.abspath(args.out_dir)}")


if __name__ == "__main__":
    main()
