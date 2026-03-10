"""
Rewrite image file URIs in prepared JSONL to a new images directory.

This is useful when you generated train/val/test JSONL on Windows (paths like
file:///E:/.../images/000123.png) but want to run training on macOS/Linux.

Usage:
    python finetuning/rewrite_jsonl_image_paths.py ^
        --in-jsonl finetuning/data/train.jsonl ^
        --out-jsonl finetuning/data_mac/train.jsonl ^
        --new-img-dir /Users/you/project/data/websight_50k/images
"""

import os
import json
import argparse
from pathlib import Path


def _extract_image_uri(sample: dict) -> str | None:
    try:
        for part in sample["messages"][0]["content"]:
            if part.get("type") == "image":
                return part.get("image")
    except Exception:
        return None
    return None


def _set_image_uri(sample: dict, new_uri: str) -> None:
    for part in sample["messages"][0]["content"]:
        if part.get("type") == "image":
            part["image"] = new_uri
            return


def _basename_from_uri(uri: str) -> str:
    # Handles: file:///E:/path/to/000123.png, file:////Users/me/.../000123.png
    if uri.startswith("file:///"):
        raw = uri[len("file:///") :]
    elif uri.startswith("file://"):
        raw = uri[len("file://") :]
        while raw.startswith("/"):
            raw = raw[1:]
        raw = "/" + raw
    else:
        raw = uri
    return os.path.basename(raw)


def main():
    p = argparse.ArgumentParser(description="Rewrite JSONL image paths to new images directory")
    p.add_argument("--in-jsonl", required=True, help="Input JSONL (train/val/test)")
    p.add_argument("--out-jsonl", required=True, help="Output JSONL path")
    p.add_argument("--new-img-dir", required=True, help="Absolute path to images folder on this machine")
    args = p.parse_args()

    in_path = Path(args.in_jsonl)
    out_path = Path(args.out_jsonl)
    new_img_dir = Path(args.new_img_dir).expanduser().resolve()
    out_path.parent.mkdir(parents=True, exist_ok=True)

    n_total = 0
    n_rewritten = 0
    n_missing = 0

    with in_path.open("r", encoding="utf-8") as fin, out_path.open("w", encoding="utf-8") as fout:
        for line in fin:
            line = line.strip()
            if not line:
                continue
            n_total += 1
            sample = json.loads(line)

            uri = _extract_image_uri(sample)
            if not uri:
                fout.write(json.dumps(sample, ensure_ascii=False) + "\n")
                continue

            fname = _basename_from_uri(uri)
            new_abs = (new_img_dir / fname).resolve()
            if not new_abs.exists():
                n_missing += 1

            new_uri = f"file:///{new_abs.as_posix()}"
            _set_image_uri(sample, new_uri)
            n_rewritten += 1
            fout.write(json.dumps(sample, ensure_ascii=False) + "\n")

    print(f"Done. total={n_total} rewritten={n_rewritten} missing_images={n_missing}")
    print(f"Output: {out_path}")


if __name__ == "__main__":
    main()

