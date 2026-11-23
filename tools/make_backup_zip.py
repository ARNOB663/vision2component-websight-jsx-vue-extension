"""Back up the artifacts that are not in git and are expensive to recreate."""
import glob
import os
import time
import zipfile

BASE = r"E:\Thesis Project file"
OUT = r"E:\ISASF2026_models_and_results_backup.zip"

patterns = [
    r"finetuning\outputs\qlora\final_adapter\*",
    r"finetuning\outputs\qlora_3b\final_adapter\*",
    r"finetuning\outputs\*\checkpoint-*\trainer_state.json",
    r"finetuning\results\*.json",
    r"finetuning\results\comparison_table.tex",
    r"finetuning\data\*.jsonl",
    r"data\websight_50k\websight_50k_gen.csv",
    r"data\design2code\**\*",
    r"data\design2code_raw\**\*",
]
files = []
for pat in patterns:
    files += [f for f in glob.glob(os.path.join(BASE, pat), recursive=True) if os.path.isfile(f)]
files = sorted(set(files))
start = time.time()
with zipfile.ZipFile(OUT, "w", allowZip64=True) as z:
    for f in files:
        arc = os.path.relpath(f, BASE).replace("\\", "/")
        ct = zipfile.ZIP_STORED if f.lower().endswith((".png", ".safetensors", ".jpg")) else zipfile.ZIP_DEFLATED
        z.write(f, arc, compress_type=ct)
with zipfile.ZipFile(OUT) as z:
    bad = z.testzip()
    n = len(z.namelist())
print("files", len(files), "| entries", n, "| CRC:", "OK" if bad is None else f"BAD {bad}",
      "| size GB", round(os.path.getsize(OUT) / 1e9, 2), "| min", round((time.time() - start) / 60, 1))
for key in ("qlora/final_adapter/adapter_model.safetensors", "qlora_3b/final_adapter/adapter_model.safetensors"):
    print(key, any(key in f.replace("\\", "/") for f in files))
