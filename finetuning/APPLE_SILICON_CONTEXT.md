## Apple Silicon (MPS) fine-tuning context

### What works on Mac
- **LoRA / DoRA**: supported on Apple Silicon using PyTorch **MPS**.
- **QLoRA (4-bit / bitsandbytes)**: **not supported** on Apple Silicon (requires CUDA). Use LoRA/DoRA on Mac.

### Install (macOS)
From repo root:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -U pip
pip install -r finetuning/requirements-mac.txt
python -m playwright install chromium
```

### Data (important)
Your prepared JSONL contains absolute image paths like `file:///E:/...` if it was generated on Windows.
On macOS you must either:

- **Option A (recommended)**: regenerate JSONL on the Mac:

```bash
python finetuning/prepare_data.py
```

- **Option B**: rewrite the image paths in existing JSONL to your Mac images folder:

```bash
python finetuning/rewrite_jsonl_image_paths.py \
  --in-jsonl finetuning/data/train.jsonl \
  --out-jsonl finetuning/data_mac/train.jsonl \
  --new-img-dir /Users/<you>/<repo>/data/websight_50k/images

python finetuning/rewrite_jsonl_image_paths.py \
  --in-jsonl finetuning/data/val.jsonl \
  --out-jsonl finetuning/data_mac/val.jsonl \
  --new-img-dir /Users/<you>/<repo>/data/websight_50k/images

python finetuning/rewrite_jsonl_image_paths.py \
  --in-jsonl finetuning/data/test.jsonl \
  --out-jsonl finetuning/data_mac/test.jsonl \
  --new-img-dir /Users/<you>/<repo>/data/websight_50k/images
```

If you use `data_mac/`, copy it back to `finetuning/data/` (or point your scripts to it).

### Run training on Mac (LoRA/DoRA)

```bash
python finetuning/train.py --method lora
python finetuning/train.py --method dora
```

Resume after interruption:

```bash
python finetuning/train.py --method lora --resume
python finetuning/train.py --method dora --resume
```

### Continue the remaining tasks on this PC
To continue from Mac -> PC:
- Copy `finetuning/outputs/<method>/` (includes `checkpoint-*` and `final_adapter/`)
- Copy `finetuning/results/` (optional, metrics)
- Make sure both machines have the same `finetuning/configs/<method>.json` hyperparameters.

On PC, resume with:

```powershell
py -3.11 finetuning/train.py --method lora --resume
py -3.11 finetuning/train.py --method dora --resume
```

