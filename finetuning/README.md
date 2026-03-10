# Fine-Tuning Qwen2-VL-2B with LoRA, QLoRA, DoRA

Fine-tune `Qwen/Qwen2-VL-2B-Instruct` (vision-language model) for multi-task UI screenshot-to-code generation (HTML, React JSX, Vue SFC) using three parameter-efficient methods, then evaluate and compare.

## Prerequisites

- Python 3.11
- NVIDIA GPU with 8+ GB VRAM (tested on RTX 3070 Ti)
- Node.js (for JSX/Vue parse validation)
- Completed data generation (`data/websight_50k/websight_50k_gen.csv` + images)

```powershell
pip install -r requirements.txt
python -m playwright install chromium
```

### Apple Silicon (Mac)

- Use **LoRA/DoRA** on MPS (Apple GPU). **QLoRA is CUDA-only**.
- Install deps with `finetuning/requirements-mac.txt`.
- See `finetuning/APPLE_SILICON_CONTEXT.md` for the exact workflow (including fixing Windows `file:///E:/...` image paths).

## Pipeline Overview

```
prepare_data.py  -->  train.py  -->  evaluate.py  -->  visual_eval.py  -->  compare_results.py
   (filter &          (fine-tune      (code metrics:     (render & compare    (tables, charts,
    split data)        3 methods)      PSR, BLEU, etc.)   SSIM, PSNR)          LaTeX, ranking)
```

## Step 1: Prepare Data

Filters valid rows from the generated CSV (where both JSX and Vue parsed successfully), creates three training conversations per image (image->HTML, image->JSX, image->Vue), and splits into train/val/test.

```powershell
py -3.11 finetuning/prepare_data.py
```

**Output:** `finetuning/data/train.jsonl`, `val.jsonl`, `test.jsonl`

**Split:** 85% train / 10% val / 5% test (grouped by image ID so all 3 tasks for the same image stay in the same split).

## Step 2: Fine-Tune

Train one method at a time (each uses the same hyperparameters for fair comparison). The base model is downloaded automatically to `finetuning/models/` on first run.

```powershell
# QLoRA (recommended first -- lowest VRAM usage)
py -3.11 finetuning/train.py --method qlora

# LoRA
py -3.11 finetuning/train.py --method lora

# DoRA
py -3.11 finetuning/train.py --method dora

# Resume interrupted training (picks up from last checkpoint)
py -3.11 finetuning/train.py --method qlora --resume
py -3.11 finetuning/train.py --method lora --resume
py -3.11 finetuning/train.py --method dora --resume
```

**Where checkpoints are saved:** In this directory, under `finetuning/outputs/{method}/` (e.g. `finetuning/outputs/qlora/checkpoint-500`, `checkpoint-1000`, …). `--resume` uses the latest checkpoint in that folder.

**Checkpointing:** A checkpoint is saved at the end of each epoch (or every N steps if configured in configs) to `finetuning/outputs/{method}/`. If your PC shuts down mid-training, use `--resume` to continue from the last saved checkpoint instead of restarting.

**Evaluation during training:** Disabled by default (`eval_strategy: no`). After training finishes, the script saves the adapter, clears GPU memory, then runs **one validation pass** on `val.jsonl` (eval loss only) and writes `final_eval_loss` into the metrics file. This avoids OOM that can occur when validating during training.

**Resume behaviour:**
- **Training:** Use `--resume` to continue from the last checkpoint (e.g. after a crash or timeout).
- **Validation only:** If training completed (adapter saved) but the run stopped before or during validation, run the same command again **without** `--resume`. The script will detect the saved adapter, run validation only, and update the metrics file.

**Output:** Adapter in `finetuning/outputs/{method}/final_adapter/`, metrics (including `final_eval_loss`) in `finetuning/results/{method}_training_metrics.json`.

### Method Differences

| Method | Base Model Precision | Adapter | Key Difference |
|--------|---------------------|---------|----------------|
| LoRA   | fp16/bf16           | Low-rank matrices on linear layers | Standard baseline |
| QLoRA  | 4-bit NF4           | Same LoRA adapters, quantized base | ~50% less VRAM |
| DoRA   | fp16/bf16           | Weight-decomposed LoRA (magnitude + direction) | Better adaptation stability |

### Shared Hyperparameters

- Learning rate: 1e-4, warmup: 10%
- Epochs: 3, batch size: 1, gradient accumulation: 8
- LoRA rank: 64, alpha: 128, dropout: 0.05
- Target modules: q/k/v/o/gate/up/down projections
- Gradient checkpointing: enabled

Configs are in `finetuning/configs/{method}.json` -- edit these to tune hyperparameters.

## Step 3: Evaluate (Code Metrics)

Run inference on the test set and compute code-quality metrics. Also supports `--method base` to test the un-finetuned model as a zero-shot baseline.

```powershell
py -3.11 finetuning/evaluate.py --method qlora
py -3.11 finetuning/evaluate.py --method lora
py -3.11 finetuning/evaluate.py --method dora
py -3.11 finetuning/evaluate.py --method base    # zero-shot baseline

# Test on a smaller subset first
py -3.11 finetuning/evaluate.py --method qlora --max-samples 50
```

### Metrics Computed

| Metric | What It Measures |
|--------|-----------------|
| **Parse Success Rate (PSR)** | % of generated code that passes AST parsing |
| **BLEU-4** | N-gram overlap with reference code |
| **CodeBLEU** | Code-aware BLEU (syntax + dataflow + AST match) |
| **ROUGE-L** | Longest common subsequence similarity |
| **ChrF** | Character n-gram F-score |
| **Inference Latency** | Average seconds per generation |

**Output:** `finetuning/results/{method}_eval_results.json`, `{method}_predictions.json`

## Step 4: Visual Evaluation (SSIM / PSNR)

Renders generated code in a headless Chromium browser, screenshots it, and compares pixel-by-pixel against the original WebSight screenshot.

```powershell
py -3.11 finetuning/visual_eval.py --method qlora
py -3.11 finetuning/visual_eval.py --method lora
py -3.11 finetuning/visual_eval.py --method dora

# Limit samples for faster testing
py -3.11 finetuning/visual_eval.py --method qlora --max-samples 50
```

| Metric | What It Measures |
|--------|-----------------|
| **SSIM** | Structural similarity (layout, contrast, luminance) |
| **PSNR** | Peak signal-to-noise ratio (pixel-level accuracy) |

**Output:** `finetuning/results/{method}_visual_results.json`, rendered screenshots in `finetuning/results/{method}_renders/`

## Step 5: Compare Results

Generates comparison tables, bar charts, radar plots, and a LaTeX-ready table across all evaluated methods.

```powershell
py -3.11 finetuning/compare_results.py
```

**Output:**
- Console: formatted comparison tables + overall ranking
- `finetuning/results/charts/metrics_comparison.png` -- bar charts
- `finetuning/results/charts/radar_comparison.png` -- radar plot
- `finetuning/results/charts/per_task_comparison.png` -- per-task breakdown
- `finetuning/results/comparison_table.tex` -- LaTeX table for thesis

## Folder Structure

```
finetuning/
├── prepare_data.py        # Filter CSV, create multi-task JSONL, split
├── train.py               # Unified trainer: --method lora|qlora|dora
├── evaluate.py            # Inference + code metrics (PSR, BLEU, CodeBLEU, etc.)
├── visual_eval.py         # Render components + SSIM/PSNR comparison
├── compare_results.py     # Tables, charts, LaTeX output, ranking
├── configs/
│   ├── lora.json          # LoRA hyperparameters
│   ├── qlora.json         # QLoRA hyperparameters
│   └── dora.json          # DoRA hyperparameters
├── models/                # Base model (auto-downloaded)
├── data/                  # Train/val/test splits (auto-generated)
├── outputs/               # Adapter checkpoints (auto-generated)
│   ├── lora/
│   ├── qlora/
│   └── dora/
└── results/               # Evaluation outputs (auto-generated)
    └── charts/
```

## Quick Start (Full Pipeline)

```powershell
# 1. Prepare data
py -3.11 finetuning/prepare_data.py

# 2. Fine-tune with QLoRA (fastest, least VRAM)
py -3.11 finetuning/train.py --method qlora

# 3. Evaluate
py -3.11 finetuning/evaluate.py --method qlora

# 4. Visual eval
py -3.11 finetuning/visual_eval.py --method qlora --max-samples 50

# 5. Repeat steps 2-4 for lora and dora, then compare
py -3.11 finetuning/compare_results.py
```

## Running on Kaggle (Recommended for LoRA/DoRA)

LoRA and DoRA require fp16 (no quantization) which needs 15+ GB VRAM. Use Kaggle's free GPU T4 x2 instead of your local 8GB GPU.

### Setup

1. Go to [kaggle.com](https://kaggle.com), verify your phone number to unlock free GPU
2. Create a new Notebook, set Accelerator to **GPU T4 x2**, enable **Internet**

### Upload Data

Prepare two zip files on your local machine:

```
finetune-data.zip       -> contains train.jsonl, val.jsonl, test.jsonl
websight-images.zip     -> contains images/ folder with all PNGs
```

Upload both as Kaggle Datasets (Your Profile -> Datasets -> New Dataset), then add them to the notebook via "Add Data".

### Run

1. Upload `finetuning/kaggle_finetune.ipynb` to Kaggle
2. Run cells 1-6 (setup, data, configs, imports, training function, eval function)
3. In cell 7, set `METHOD = "qlora"` and run training
4. In cell 8, run evaluation
5. In cell 10, download results zip

**Run one method per session** (12hr Kaggle limit). Change `METHOD` to `"lora"` or `"dora"` in subsequent sessions.

After all three are done, run cell 9 (Compare Results) to generate comparison tables and charts.
