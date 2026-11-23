import collections
import os
import random
import zipfile

import pandas as pd

ZIP = r"E:\ISASF2026_WebSight_JSX_Vue_Dataset.zip"
SRC = r"E:\Thesis Project file\data\websight_50k"
ROOT = "ISASF2026_WebSight_JSX_Vue_Dataset"
EXPECTED = {"screenshot_2560x1440.png", "screenshot_640x360.png", "page.html", "component.jsx",
            "component.vue", "description.txt"}

z = zipfile.ZipFile(ZIP)
per = collections.defaultdict(set)
for n in z.namelist():
    parts = n.split("/")
    if len(parts) == 4 and parts[1] == "samples":
        per[parts[2]].add(parts[3])
incomplete = [k for k, v in per.items() if v != EXPECTED]
print("sample folders:", len(per), "| incomplete:", len(incomplete))

df = pd.read_csv(os.path.join(SRC, "websight_50k_gen.csv")).set_index("id")
random.seed(0)
ids = random.sample(sorted(per), 40)
mism = 0
for sid in ids:
    r = df.loc[int(sid)]
    base = f"{ROOT}/samples/{sid}"
    checks = [
        (z.read(f"{base}/screenshot_2560x1440.png"), open(os.path.join(SRC, "images", f"{sid}.png"), "rb").read()),
        (z.read(f"{base}/screenshot_640x360.png"), open(os.path.join(SRC, "images_small", f"{sid}.png"), "rb").read()),
        (z.read(f"{base}/page.html").decode(), str(r.text)),
        (z.read(f"{base}/component.jsx").decode(), str(r.jsx_code)),
        (z.read(f"{base}/component.vue").decode(), str(r.vue_sfc)),
    ]
    mism += sum(a != b for a, b in checks)
print("random samples compared:", len(ids), "| byte mismatches:", mism)

meta = pd.read_csv(z.open(f"{ROOT}/metadata.csv"))
print("metadata rows:", len(meta), "| README bytes:", len(z.read(f"{ROOT}/README.md")))

# extract one sample to check it opens normally
out = r"C:\Users\Arnob\AppData\Local\Temp\claude\d6c8181322e7aae7\1b2893c5-760b-4731-935d-72f7afac7130\scratchpad\zip_sample"
for n in z.namelist():
    if n.startswith(f"{ROOT}/samples/{ids[0]}/"):
        z.extract(n, out)
from PIL import Image
im = Image.open(os.path.join(out, ROOT, "samples", ids[0], "screenshot_2560x1440.png"))
print("extracted sample", ids[0], "image size", im.size)
