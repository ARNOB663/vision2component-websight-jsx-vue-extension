"""
Download 50k WebSight samples in 5 batches of 10k each.
Saves images to disk and metadata to CSV per batch, then merges.

Memory-safe: closes images immediately, flushes to CSV every 500 rows.

Usage:
    python download_websight.py
"""

import os
import gc
import csv
import pandas as pd
from datasets import load_dataset
from tqdm import tqdm

# ── Config ──
TOTAL = 50_000
BATCH_SIZE = 10_000
NUM_BATCHES = TOTAL // BATCH_SIZE  # 5
FLUSH_EVERY = 500  # write to disk every N rows to save memory

OUT_DIR = "data/websight_50k"
IMG_DIR = os.path.join(OUT_DIR, "images")
FINAL_CSV = os.path.join(OUT_DIR, "websight_50k.csv")

os.makedirs(IMG_DIR, exist_ok=True)

# ── Load dataset in streaming mode ──
print("Connecting to HuggingFaceM4/WebSight (streaming)...")
ds_stream = load_dataset(
    "HuggingFaceM4/WebSight",
    split="train",
    streaming=True,
)

# ── CSV field names (written once per batch file) ──
FIELDNAMES = ["id", "image_path", "text", "llm_generated_idea"]

# ── Download in batches ──
stream_iter = iter(ds_stream)
batch_csvs = []

for batch_num in range(NUM_BATCHES):
    batch_start = batch_num * BATCH_SIZE
    batch_end = batch_start + BATCH_SIZE
    batch_csv = os.path.join(OUT_DIR, f"batch_{batch_num + 1}.csv")

    print(f"\n{'='*60}")
    print(f"Batch {batch_num + 1}/{NUM_BATCHES}  |  Rows {batch_start}-{batch_end - 1}")
    print(f"{'='*60}")

    # Check if batch already downloaded (resume support)
    if os.path.exists(batch_csv):
        existing = pd.read_csv(batch_csv, encoding="utf-8")
        if len(existing) == BATCH_SIZE:
            print(f"  Already exists with {len(existing)} rows, skipping.")
            batch_csvs.append(batch_csv)
            # Still need to advance the iterator
            for _ in tqdm(range(BATCH_SIZE), desc=f"Skipping batch {batch_num + 1}"):
                try:
                    next(stream_iter)
                except StopIteration:
                    break
            continue

    rows_written = 0
    file_handle = open(batch_csv, "w", newline="", encoding="utf-8")
    writer = csv.DictWriter(file_handle, fieldnames=FIELDNAMES)
    writer.writeheader()

    for i in tqdm(range(BATCH_SIZE), desc=f"Batch {batch_num + 1}"):
        global_idx = batch_start + i

        try:
            ex = next(stream_iter)
        except StopIteration:
            print(f"  Dataset exhausted at index {global_idx}")
            break

        row = {"id": global_idx}

        # Save image and immediately close to free memory
        img = ex.get("image", None)
        if img is not None:
            img_path = os.path.join(IMG_DIR, f"{global_idx:06d}.png")
            img.save(img_path)
            img.close()
            row["image_path"] = img_path
        else:
            row["image_path"] = ""

        # Save text fields
        row["text"] = "" if ex.get("text") is None else str(ex["text"])
        row["llm_generated_idea"] = "" if ex.get("llm_generated_idea") is None else str(ex["llm_generated_idea"])

        writer.writerow(row)
        rows_written += 1

        # Flush to disk periodically
        if rows_written % FLUSH_EVERY == 0:
            file_handle.flush()
            gc.collect()

    file_handle.close()
    batch_csvs.append(batch_csv)
    gc.collect()

    print(f"  Saved {rows_written} rows to: {batch_csv}")

# ── Merge all batches into one CSV ──
print(f"\n{'='*60}")
print("Merging all batches...")
print(f"{'='*60}")

all_dfs = [pd.read_csv(f, encoding="utf-8") for f in batch_csvs]
merged = pd.concat(all_dfs, ignore_index=True)
merged.to_csv(FINAL_CSV, index=False, encoding="utf-8")

print(f"\nFinal CSV : {FINAL_CSV}")
print(f"Total rows: {len(merged)}")
print(f"Columns   : {list(merged.columns)}")
print(f"File size : {os.path.getsize(FINAL_CSV) / 1024 / 1024:.1f} MB")
print(f"Images in : {IMG_DIR}")
print(f"\nDone!")
