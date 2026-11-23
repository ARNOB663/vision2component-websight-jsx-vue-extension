"""Package the extended WebSight dataset (15,588 samples with valid JSX and Vue) into one zip on E:.

Files are streamed straight into the zip, so no temporary copies are created.
PNGs are stored (already compressed); text files are deflated.
"""
import csv
import io
import os
import time
import zipfile

import pandas as pd

SRC = r"E:\Thesis Project file\data\websight_50k"
OUT = r"E:\ISASF2026_WebSight_JSX_Vue_Dataset.zip"
ROOT = "ISASF2026_WebSight_JSX_Vue_Dataset"
PROGRESS = r"E:\ISASF2026_WebSight_JSX_Vue_Dataset.progress.txt"

df = pd.read_csv(os.path.join(SRC, "websight_50k_gen.csv"))
is_true = lambda s: s.astype(str).str.lower() == "true"
valid = df[is_true(df.jsx_valid) & is_true(df.vue_valid)].copy()
assert len(df) == 15752 and len(valid) == 15588, (len(df), len(valid))

README = f"""# Extended WebSight: React JSX and Vue 3 targets for UI screenshots

Dataset accompanying the paper
"Parameter-Efficient UI Code Generation Using QLoRA on an Extended WebSight Dataset"
(ISASF 2026, Paper ID 132).

Authors: Aniruddha Dev Nath, Anitya Barua, Antu Chowdhury, Arnab Biswas.

## Contents

{len(valid):,} samples. Each WebSight page was converted into a React JSX component and a Vue 3 Single File
Component by Qwen2.5-Coder-7B, and both targets passed production parsers (@babel/parser for JSX,
@vue/compiler-sfc for Vue) in a self-repair loop with up to two repair attempts.
Of the 15,752 processed samples, 15,750 had a valid JSX target, 15,590 a valid Vue target, and
{len(valid):,} (98.96%) both; only those are included here.

    samples/<id>/
        screenshot_2560x1440.png   original WebSight screenshot (high resolution)
        screenshot_640x360.png     downscaled copy (low resolution, used for evaluation)
        page.html                  original WebSight HTML (Tailwind CSS)
        component.jsx              React functional component (Tailwind CSS)
        component.vue              Vue 3 Single File Component (Tailwind CSS)
        description.txt            LLM-generated description of the page (from WebSight)
    metadata.csv                   one row per sample: id, folder, description

## Source and license

The screenshots, HTML and descriptions come from WebSight (Laurencon et al., 2024,
HuggingFaceM4/WebSight). Use of those parts must follow the WebSight license and terms.
The JSX and Vue targets were generated for this work.

## Citation

If you use this dataset, please cite the paper above and the WebSight dataset.
"""

start = time.time()
with zipfile.ZipFile(OUT, "w", allowZip64=True) as z:
    z.writestr(f"{ROOT}/README.md", README, compress_type=zipfile.ZIP_DEFLATED)
    buf = io.StringIO()
    w = csv.writer(buf)
    w.writerow(["id", "folder", "description"])
    for _, r in valid.iterrows():
        w.writerow([int(r.id), f"samples/{int(r.id):06d}", r.llm_generated_idea])
    z.writestr(f"{ROOT}/metadata.csv", buf.getvalue(), compress_type=zipfile.ZIP_DEFLATED)

    for n, (_, r) in enumerate(valid.iterrows(), 1):
        sid = f"{int(r.id):06d}"
        base = f"{ROOT}/samples/{sid}"
        z.write(os.path.join(SRC, "images", f"{sid}.png"), f"{base}/screenshot_2560x1440.png",
                compress_type=zipfile.ZIP_STORED)
        z.write(os.path.join(SRC, "images_small", f"{sid}.png"), f"{base}/screenshot_640x360.png",
                compress_type=zipfile.ZIP_STORED)
        for name, text in (("page.html", r.text), ("component.jsx", r.jsx_code),
                           ("component.vue", r.vue_sfc), ("description.txt", r.llm_generated_idea)):
            z.writestr(f"{base}/{name}", str(text), compress_type=zipfile.ZIP_DEFLATED)
        if n % 500 == 0 or n == len(valid):
            el = time.time() - start
            with open(PROGRESS, "w") as f:
                f.write(f"{n}/{len(valid)} samples, {el / 60:.1f} min, ETA {el / n * (len(valid) - n) / 60:.1f} min\n")

# verify
with zipfile.ZipFile(OUT) as z:
    names = z.namelist()
    bad = z.testzip()
print("entries", len(names), "| expected", 2 + 6 * len(valid), "| CRC check:", "OK" if bad is None else f"BAD {bad}")
print("size GB", round(os.path.getsize(OUT) / 1e9, 2), "| minutes", round((time.time() - start) / 60, 1))
