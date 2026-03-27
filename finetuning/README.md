# Fine-Tuning Qwen2-VL-2B with QLoRA

Fine-tune `Qwen/Qwen2-VL-2B-Instruct` (vision-language model) for multi-task UI screenshot-to-code generation (HTML, React JSX, Vue SFC) using QLoRA, then evaluate and compare against the base model.

## Prerequisites

- Python 3.11
- NVIDIA GPU with 8+ GB VRAM (tested on RTX 3070 Ti)
- Node.js (for JSX/Vue parse validation)
- Completed data generation (`data/websight_50k/websight_50k_gen.csv` + images)

```powershell
pip install -r requirements.txt
python -m playwright install chromium
```

## Step 0: Download Base Models

The `Qwen2-VL-2B` base model is downloaded automatically during training. 
However, to evaluate the updated **Qwen2.5-VL-3B-Instruct** model, run its dedicated download script first:

```powershell
.venv311\Scripts\python.exe download_qwen2_5.py
```

## Pipeline Overview

```
prepare_data.py  -->  train.py  -->  evaluate.py  -->  visual_eval.py  -->  compare_results.py
   (filter &          (QLoRA         (code metrics:     (render & compare    (tables, charts,
    split data)        fine-tune)     PSR, BLEU, etc.)   SSIM, PSNR)          LaTeX, ranking)
```

## Step 1: Prepare Data

Filters valid rows from the generated CSV (where both JSX and Vue parsed successfully), creates three training conversations per image (image->HTML, image->JSX, image->Vue), and splits into train/val/test.

```powershell
py -3.11 finetuning/prepare_data.py
```

**Output:** `finetuning/data/train.jsonl`, `val.jsonl`, `test.jsonl`

**Split:** 85% train / 10% val / 5% test (grouped by image ID so all 3 tasks for the same image stay in the same split).

## Step 2: Fine-Tune (QLoRA)

Train the model using QLoRA (4-bit quantized base model with LoRA adapters). The base model is downloaded automatically to `finetuning/models/` on first run.

```powershell
# Train
py -3.11 finetuning/train.py

# Resume interrupted training (picks up from last checkpoint)
py -3.11 finetuning/train.py --resume
```

**Where checkpoints are saved:** In `finetuning/outputs/qlora/` (e.g. `checkpoint-500`, `checkpoint-1000`, …). `--resume` uses the latest checkpoint.

**Timing note:** The live tqdm `s/it` estimate can drift after resume, logging, or checkpoint saves. Prefer the script's `Measured timing: ... sec/step` line for the real recent throughput; that measured value is also written into `finetuning/results/qlora_training_metrics.json`.

**Evaluation during training:** Disabled by default (`eval_strategy: no`). After training finishes, the script saves the adapter, clears GPU memory, then runs **one validation pass** on `val.jsonl` (eval loss only) and writes `final_eval_loss` into the metrics file.

**Resume behaviour:**
- **Training:** Use `--resume` to continue from the last checkpoint (e.g. after a crash or timeout).
- **Validation only:** If training completed (adapter saved) but the run stopped before validation, run the same command again **without** `--resume`. The script will detect the saved adapter, run validation only, and update the metrics file.

**Output:** Adapter in `finetuning/outputs/qlora/final_adapter/`, metrics in `finetuning/results/qlora_training_metrics.json`.

### QLoRA Hyperparameters

- Learning rate: 1e-4, warmup: 100 steps
- Epochs: 3, batch size: 1, gradient accumulation: 8
- LoRA rank: 64, alpha: 128, dropout: 0.05
- Target modules: q/k/v/o/gate/up/down projections
- Quantization: 4-bit NF4 with double quantization
- Gradient checkpointing: enabled

Config is in `finetuning/configs/qlora.json` — edit to tune hyperparameters.

## Step 3: Evaluate (Code Metrics)

Run inference on the test set and compute code-quality metrics. Supports `--method base` to test the un-finetuned model as a zero-shot baseline.

**Activate the virtual environment first:**
```powershell
.venv311\Scripts\activate
```

### Run Evaluation

```powershell
.venv311\Scripts\python.exe evaluate.py --method base     # zero-shot baseline Qwen2-VL
.venv311\Scripts\python.exe evaluate.py --method qwen2.5    # zero-shot baseline Qwen2.5-VL (run download_qwen2_5.py first)
.venv311\Scripts\python.exe evaluate.py --method qlora    # fine-tuned model
 .venv311\Scripts\python.exe evaluate.py --method qwen2.5 --batch-size 20
 .venv311\Scripts\python.exe evaluate.py --method qwen2.5 --resume-from-autosave --batch-size 20
```

### Resume After Interruption

```powershell
.venv311\Scripts\python.exe evaluate.py --method qlora --resume-from-autosave
```

### Adjust Batch Size & Samples

```powershell
# Quick test run (8 samples)
.venv311\Scripts\python.exe evaluate.py --method base --max-samples 8 --batch-size 2

# Increase batch size for faster speed (watch VRAM)
.venv311\Scripts\python.exe evaluate.py --method qlora --batch-size 20

# Evaluate more samples
.venv311\Scripts\python.exe evaluate.py --method qlora --max-samples 500
```

### BERTScore (Separate Pass)

```powershell
.venv311\Scripts\python.exe evaluate.py --method qlora --bertscore-only
```

### All CLI Arguments

| Argument | Default | Description |
|---|---|---|
| `--method` | *required* | `base` or `qlora` |
| `--batch-size` | `4` | Samples per batch. Watch VRAM in terminal to tune. |
| `--max-samples` | all | Number of test samples to evaluate |
| `--max-new-tokens` | `1536` | Max generated tokens (covers 99.8% of references) |
| `--save-every` | `50` | Autosave progress every N samples (0 to disable) |
| `--resume-from-autosave` | off | Resume from last checkpoint |
| `--with-bertscore` | off | Include BERTScore (slow) |
| `--bertscore-only` | off | Compute BERTScore from saved predictions only |
| `--test-file` | `data/test.jsonl` | Path to test JSONL file |

### VRAM Monitoring

During inference, the progress bar shows **live VRAM usage**:

```
Inference:  12/300 [02:30<1:00:00, 3.2s/sample | VRAM: 5.2/12.0GiB used, 6.8GiB free]
```

- **`free` > 3 GiB**: Safe to increase `--batch-size`
- **`free` < 1 GiB**: Reduce `--batch-size` to avoid OOM

### Speed Optimizations (Applied Automatically)

| Optimization | Effect |
|---|---|
| Flash Attention 2 / SDPA | ~30-50% faster attention |
| Pre-resized images (`images_small/`) | Fewer vision tokens |
| `min_pixels` / `max_pixels` cap | Controls vision token count |
| Batch inference (default 4) | Better GPU utilization |
| `cudnn.benchmark` | Faster convolutions |
| `torch.inference_mode()` | Faster than `no_grad()` |

### Metrics Computed

| Metric | What It Measures |
|--------|-----------------|
| **Parse Success Rate (PSR)** | % of generated code that passes AST parsing |
| **BLEU-4** | N-gram overlap with reference code |
| **CodeBLEU** | Code-aware BLEU (syntax + dataflow + AST match) |
| **ROUGE-L** | Longest common subsequence similarity |
| **ChrF** | Character n-gram F-score |
| **METEOR** | Precision/recall with synonym awareness |
| **Edit Similarity** | 1 − normalized Levenshtein distance |
| **Exact Match Rate** | % of outputs identical to reference |
| **BERTScore F1** | Semantic similarity using contextual embeddings |
| **Tag Accuracy** | Fraction of reference HTML/JSX tags recovered |
| **CSS/Tailwind Class Accuracy** | Fraction of reference classes recovered |
| **Tree Edit Similarity** | Similarity of DOM tag sequence structure |
| **Token-level Accuracy** | Exact token match ratio |
| **Inference Latency** | Average seconds per generation |

**Output:** `finetuning/results/{method}_eval_results.json`, `{method}_predictions.json`

## Step 4: Visual Evaluation (SSIM / PSNR / LPIPS)

Renders generated code in a headless Chromium browser, screenshots it, and compares pixel-by-pixel against the original WebSight screenshot.

```powershell
.venv311\Scripts\python.exe visual_eval.py --method qlora
.venv311\Scripts\python.exe visual_eval.py --method base
.venv311\Scripts\python.exe visual_eval.py --method qwen2.5

# Limit samples for faster testing
.venv311\Scripts\python.exe visual_eval.py --method qlora --max-samples 50
```

### All CLI Arguments

| Argument | Default | Description |
|---|---|---|
| `--method` | *required* | `base` or `qlora` |
| `--max-samples` | all | Max samples per task to evaluate |
| `--save-every` | `50` | Autosave progress every N samples |
| `--no-resume` | off | Ignore checkpoint, start from scratch |
| `--concurrent-pages` | `10` | Chromium tabs for parallel rendering |
| `--render-wait` | `500` | Milliseconds to wait after page load |

**Output:** `finetuning/results/{method}_visual_results.json`, rendered screenshots in `finetuning/results/{method}_renders/`

## Step 5: Compare Results

Generates comparison tables, bar charts, radar plots, and a LaTeX-ready table comparing base model vs QLoRA.

```powershell
py -3.11 finetuning/compare_results.py
```

**Output:**
- Console: formatted comparison tables + overall ranking
- `finetuning/results/charts/metrics_comparison.png` — bar charts
- `finetuning/results/charts/radar_comparison.png` — radar plot
- `finetuning/results/charts/per_task_comparison.png` — per-task breakdown
- `finetuning/results/comparison_table.tex` — LaTeX table for thesis

## Folder Structure

```
finetuning/
├── prepare_data.py        # Filter CSV, create multi-task JSONL, split
├── train.py               # QLoRA trainer
├── evaluate.py            # Inference + code metrics (PSR, BLEU, CodeBLEU, etc.)
├── visual_eval.py         # Render components + SSIM/PSNR comparison
├── compare_results.py     # Base vs QLoRA: tables, charts, LaTeX output
├── configs/
│   └── qlora.json         # QLoRA hyperparameters
├── models/                # Base model (auto-downloaded)
├── data/                  # Train/val/test splits (auto-generated)
├── outputs/               # Adapter checkpoints (auto-generated)
│   └── qlora/
└── results/               # Evaluation outputs (auto-generated)
    └── charts/
```

## Quick Start (Full Pipeline)

```powershell
# 1. Prepare data
py -3.11 finetuning/prepare_data.py

# 2. Fine-tune with QLoRA
py -3.11 finetuning/train.py

# 3. Evaluate models
# Download the new Qwen2.5-VL base model first
py -3.11 finetuning/download_qwen2_5.py

# Run evaluations
py -3.11 finetuning/evaluate.py --method base
py -3.11 finetuning/evaluate.py --method qwen2.5
py -3.11 finetuning/evaluate.py --method qlora

# 4. Visual eval
.venv311\Scripts\python.exe visual_eval.py --method base
.venv311\Scripts\python.exe visual_eval.py --method qwen2.5
.venv311\Scripts\python.exe visual_eval.py --method qlora

# 5. Compare
py -3.11 finetuning/compare_results.py
```
