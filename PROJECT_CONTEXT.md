# Project Context: Vision2Component Pipeline & Fine-Tuning

This document captures the full context, decisions, and workflows from the thesis project: **converting WebSight HTML into React JSX and Vue SFC**, then **fine-tuning Qwen2-VL-2B** for image-to-code with LoRA, QLoRA, and DoRA.

---

## 1. Project Overview

The project has two main phases:

| Phase | Goal | Main Artifacts |
|-------|------|----------------|
| **A. Data generation** | Convert HTML snippets from WebSight into valid React JSX and Vue 3 SFCs using Qwen2.5-Coder-7B (4-bit). | `websight_50k_gen.csv` with `original_html`, `jsx_code`, `vue_code`, `llm_generated_idea`, validation flags |
| **B. Fine-tuning** | Fine-tune Qwen2-VL-2B-Instruct for **image → code** (HTML, JSX, Vue) using LoRA, QLoRA, and DoRA; evaluate and compare. | Adapters in `finetuning/outputs/`, metrics in `finetuning/results/` |

**Thesis aim:** Compare parameter-efficient fine-tuning methods (LoRA, QLoRA, DoRA) for a single vision-language model on multi-task UI screenshot-to-code generation, with code quality, visual fidelity, and efficiency metrics.

---

## 2. Data Generation Pipeline (Phase A)

### 2.1 What It Does

- **Input:** WebSight dataset rows: `id`, `image_path`, `text` (original HTML), optional `llm_generated_idea`.
- **Process:** For each row, the pipeline:
  1. Optionally uses `llm_generated_idea` as design context in the prompt (improves placeholder images and component relevance).
  2. Calls Qwen2.5-Coder-7B (4-bit) to generate JSX and Vue from the HTML.
  3. Validates JSX with `@babel/parser` and Vue with `@vue/compiler-sfc` via Node.js.
  4. Applies a self-repair loop (configurable retries) if validation fails.
- **Output:** Appends one row at a time to `data/websight_50k/websight_50k_gen.csv`. Progress is tracked in `data/websight_50k/progress.txt` for **resumable** runs.

### 2.2 Key Scripts and Usage

| Script | Purpose |
|--------|--------|
| `download_websight.py` | Download 50k WebSight samples (in batches of 10k). |
| `run_pipeline.py` | Main pipeline: load CSV, generate JSX/Vue, validate, save to CSV, resume from `progress.txt`. |
| `extract_components.py` | Extract generated JSX/Vue from CSV into `test-react/` and `test-vue/` for manual inspection. |

**Typical commands:**

```powershell
# Test run
py -3.11 run_pipeline.py --samples 5

# Scale up (resumable)
py -3.11 run_pipeline.py --samples 100
py -3.11 run_pipeline.py --samples 30000 --batch-size 4

# Process all remaining
py -3.11 run_pipeline.py --samples all --batch-size 4

# Reset and start over
py -3.11 run_pipeline.py --reset --samples 5
```

### 2.3 Design Context: `llm_generated_idea`

- The pipeline accepts an optional **design context** string per sample (e.g. `llm_generated_idea`).
- When present, it is included in the system/user prompt for both HTML→JSX and HTML→Vue so the model produces more relevant placeholders and layout.
- In `run_pipeline.py`, `gen_validate()` takes `idea: str = ""` and passes it into `p_html_to_jsx` and `p_html_to_vue`.

### 2.4 Validation and Self-Repair

- **JSX:** Validated with Node + `@babel/parser`.
- **Vue:** Validated with Node + `@vue/compiler-sfc`.
- If validation fails, the model is re-prompted with the error (self-repair) for a limited number of tries (e.g. 2).
- Rows are only written when both JSX and Vue parse successfully (or after max retries); CSV columns include `jsx_valid` and `vue_valid`.

### 2.5 Performance and Limits

- **Batch size:** Default 4; reduce to 2 if GPU OOM (e.g. RTX 3070 Ti 8GB).
- **Max tokens:** Default 2048; increase (e.g. 3072) for very large HTML/components.
- **Throughput:** ~100 samples in ~60 minutes with batch size 4; 30k samples require many hours and are designed to be **resumable**.
- **Memory:** If memory errors occur during download or generation, use smaller batches, `gc.collect()`, and `torch.cuda.empty_cache()` (already used in pipeline where relevant).

### 2.6 Test Apps (React / Vue)

- **React:** `test-react/` — Vite + Tailwind; lists components from extracted JSX, click to render.
- **Vue:** `test-vue/` — Vite + Tailwind; same idea for Vue SFCs.
- If some React components fail to render (e.g. missing imports or invalid JSX), increase `max_tokens` or fix prompts; validation only checks parse success, not runtime correctness.

---

## 3. Fine-Tuning Pipeline (Phase B)

### 3.1 Goal

- **Model:** `Qwen/Qwen2-VL-2B-Instruct` (vision-language).
- **Task:** Multi-task **image → code**: given a UI screenshot, generate HTML, React JSX, or Vue SFC (one output type per training example).
- **Methods:** LoRA, QLoRA, DoRA (same data and comparable hyperparameters for fair comparison).
- **Outputs:** Trained adapters, code-quality metrics, visual-fidelity metrics (SSIM/PSNR), and efficiency stats (trainable params, peak VRAM, time, latency).

### 3.2 Data Preparation

- **Input:** `data/websight_50k/websight_50k_gen.csv` with columns: `id`, `image_path`, `original_html`, `jsx_code`, `vue_code`, `llm_generated_idea`, `jsx_valid`, `vue_valid`.
- **Filter:** Only rows where **both** `jsx_valid == True` and `vue_valid == True`.
- **Tasks:** For each image, three conversation types are created:
  - Image → HTML  
  - Image → JSX  
  - Image → Vue  
- **Split:** 85% train / 10% val / 5% test, **grouped by image ID** so all three tasks for the same image stay in the same split (no leakage).

**Script:** `finetuning/prepare_data.py`

**Output:** `finetuning/data/train.jsonl`, `val.jsonl`, `test.jsonl` (and optionally image paths/copies as needed).

### 3.3 Training

- **Script:** `finetuning/train.py --method lora|qlora|dora`
- **Base model:** Downloaded automatically to `finetuning/models/` on first run.
- **Resume:** Use `--resume` to continue from the latest checkpoint in `finetuning/outputs/{method}/`.

**Method summary:**

| Method | Base precision | Adapter | VRAM (approx.) | Use case |
|--------|----------------|---------|----------------|----------|
| LoRA  | fp16/bf16      | Low-rank on q/k/v/o, gate, up/down | ~15GB+ | Kaggle P100/T4 x2 |
| QLoRA | 4-bit NF4      | LoRA on quantized base | ~6–8GB | Local (e.g. RTX 3070 Ti) |
| DoRA  | fp16/bf16      | Weight-decomposed LoRA | ~15GB+ | Kaggle P100/T4 x2 |

**Shared hyperparameters (see `finetuning/configs/*.json`):**

- Learning rate 1e-4, warmup steps (e.g. 100; `warmup_ratio` was deprecated and replaced with `warmup_steps`).
- Epochs: 3, batch size 1, gradient accumulation 8.
- LoRA r=64, alpha=128, dropout=0.05; target modules: q/k/v/o, gate, up, down.
- Gradient checkpointing enabled.
- Save/eval: On Kaggle notebook, `save_steps=500`, `eval_steps=500` for frequent checkpoints within 12h sessions.

### 3.4 Critical Fix: Image Token Mismatch (Qwen2-VL)

**Problem:** `ValueError: Mismatch in 'image' token count between text and 'input_ids'` when image resolution was high (e.g. 2560×1440 → very large number of image tokens).

**Cause:** Using `truncation=True` in the processor truncated **image** tokens, while the text side still expected the original count, causing a mismatch.

**Fix (in `VLCodeDataset` and processor):**

1. **Limit image pixels upfront:** e.g. `min_pixels=256*28*28`, `max_pixels=512*28*28` in `AutoProcessor.from_pretrained(...)` so the model receives a bounded number of image tokens.
2. **No truncation in processor:** Do not use `truncation=True` for the multimodal call.
3. **Manual truncation:** If `input_ids` still exceed `max_length`, truncate **from the end** (so image tokens at the start are kept), and set labels for the truncated prompt tokens to `-100` so they are not used for loss.
4. **Collator:** Use dynamic padding in `VLDataCollator` for variable-length sequences.

### 3.5 Evaluation (Code Quality)

- **Script:** `finetuning/evaluate.py --method lora|qlora|dora|base`
  - `--method base`: zero-shot baseline (no adapter).
- **Metrics:** Parse Success Rate (PSR), BLEU-4, CodeBLEU, ROUGE-L, ChrF, inference latency.
- **Validation:** On Kaggle there is no Node.js; the script uses **Python-based** validators for JSX, Vue, and HTML (e.g. regex/AST-style checks or lightweight parsers) so evaluation runs without Node.
- **Output:** `finetuning/results/{method}_eval_results.json`, `{method}_predictions.json`.

### 3.6 Visual Evaluation (SSIM / PSNR)

- **Script:** `finetuning/visual_eval.py --method lora|qlora|dora`
- Renders generated HTML/JSX/Vue in a headless browser (Playwright), takes screenshots, and compares to the original WebSight image using **SSIM** and **PSNR** (e.g. `skimage.metrics`).
- **Output:** `finetuning/results/{method}_visual_results.json`, rendered screenshots in `finetuning/results/{method}_renders/`.

### 3.7 Comparison and Reporting

- **Script:** `finetuning/compare_results.py`
- Loads training metrics, code eval, and visual eval JSONs for all methods.
- Produces: console tables, bar charts, radar plots, per-task comparison, and a **LaTeX-ready table** for the thesis.
- **Output:** `finetuning/results/charts/*.png`, `finetuning/results/comparison_table.tex`, and a composite ranking.

---

## 4. Running on Kaggle

### 4.1 Why Kaggle

- LoRA and DoRA use **full (fp16) base model** and need ~15GB+ VRAM.
- Local GPU (e.g. RTX 3070 Ti 8GB) is sufficient for **QLoRA** only.
- Kaggle free tier offers **GPU T4 x2** or **P100** (15GB+), so LoRA and DoRA are run there; QLoRA can be run locally or on Kaggle.

### 4.2 Kaggle Setup

1. **Account:** [kaggle.com](https://kaggle.com); verify phone number to enable free GPU.
2. **Notebook:** Create new Notebook → set **Accelerator** to **GPU T4 x2** (or P100), enable **Internet**.
3. **Data:** Upload two datasets (as zip):
   - **finetune-data.zip:** contains `train.jsonl`, `val.jsonl`, `test.jsonl`.
   - **websight-images.zip:** contains an `images/` folder with the **resized** PNGs used in the JSONL (see below).

### 4.3 Image Size and Upload Format

- **Do not** upload 50k full-resolution (e.g. 2560×1440) images: too large (~54GB) and slow; the model resizes internally anyway.
- **Recommended:** Resize only the **images that appear in the JSONL** (e.g. ~15,588 unique images for train/val/test) to something like **640×360** (or similar) so the zip is ~1–2 GB.
- Use **.zip** (Kaggle handles it); avoid .rar if extraction is unreliable.
- A separate script was used to produce this resized subset; paths in JSONL must match the paths inside the zip (e.g. `images/<id>.png`).

### 4.4 Kaggle Notebook: Paths and Resume

- **Notebook:** `finetuning/kaggle_finetune.ipynb` — self-contained (setup, data load, configs, train, evaluate, compare, download results).
- **Data paths:** Kaggle mounts inputs under `/kaggle/input/`; the notebook uses **recursive search** (e.g. `os.walk`) to find `train.jsonl`, `val.jsonl`, `test.jsonl` and the images folder, so it works whether the dataset is at `/kaggle/input/finetune-data/` or `/kaggle/input/datasets/finetune-data/`.
- **Image path rewrite:** After locating the images directory, the notebook rewrites image paths in the JSONL to the Kaggle path (e.g. `/kaggle/input/.../images/...`).
- **Resume:** Training checks `finetuning/outputs/{method}/` for the latest checkpoint and resumes from it (same as `--resume` locally). With **save_steps=500** and **eval_steps=500**, you get frequent checkpoints so that after a 12h session limit you can re-run the same method in a new session and continue.

### 4.5 Session Limits and Parallel Accounts

- **Limit:** Free GPU sessions have a **12-hour** maximum per run.
- **After 12h:** Re-run the same notebook (same method); it will **resume from the last checkpoint**.
- **Weekly quota:** ~30 hours/week GPU per account (check Kaggle’s current policy).
- **Using another Kaggle ID for DoRA:** Yes. You can run **LoRA on one account** and **DoRA on another** in parallel; each account has its own 30h/week quota. Same notebook and same data; only change `METHOD` to `"lora"` or `"dora"` per notebook. Do not run two methods in the same notebook on the same GPU; run one method per session per account.

### 4.6 Typical Kaggle Workflow

1. Upload `kaggle_finetune.ipynb` and add the two datasets (finetune-data zip, websight-images zip).
2. Run cells 1–6 (setup, data discovery, configs, imports, train function, eval function).
3. Set `METHOD = "qlora"` (or `"lora"` / `"dora"`) and run training (cell 7).
4. If the session ends, start a new session, re-run up to cell 7; training will resume from the latest checkpoint.
5. Run evaluation (cell 8), then compare (cell 9), then download results (cell 10).
6. For the other methods, repeat with a new session (or another account) and the corresponding `METHOD`.

---

## 5. Evaluation Metrics Summary

| Category | Metrics | Purpose |
|----------|---------|--------|
| **Code quality** | Parse Success Rate (PSR), BLEU-4, CodeBLEU, ROUGE-L, ChrF | Correctness and similarity to reference |
| **Visual fidelity** | SSIM, PSNR | Pixel/structure similarity of rendered output to original screenshot |
| **Efficiency** | Trainable parameters, peak VRAM, training time, inference latency | Compare cost and speed across LoRA, QLoRA, DoRA |

---

## 6. Important Fixes and Conventions

- **warmup_ratio deprecated:** Replaced with `warmup_steps` (e.g. 100) in `TrainingArguments` and in `finetuning/configs/*.json`.
- **nvidia-smi on Kaggle:** Not available unless a GPU is attached; enable GPU in Session settings.
- **JSONL not found on Kaggle:** Use recursive search over `/kaggle/input/` (e.g. `os.walk`) to find `train.jsonl`/`val.jsonl`/`test.jsonl` regardless of dataset folder name.

---

## 7. Project File Structure (Key Files)

```
.
├── README.md                    # Data generation + test apps
├── PROJECT_CONTEXT.md           # This file (full chat context)
├── run_pipeline.py              # HTML → JSX/Vue pipeline (resumable)
├── download_websight.py         # Download WebSight 50k
├── extract_components.py        # Extract JSX/Vue to test-react / test-vue
├── requirements.txt             # Python deps (incl. trl, qwen-vl-utils, etc.)
├── package.json                 # Node validators (@babel/parser, @vue/compiler-sfc)
├── data/websight_50k/
│   ├── websight_50k.csv         # Raw WebSight
│   ├── websight_50k_gen.csv     # Generated JSX/Vue + validation
│   └── progress.txt             # Resume state
├── test-react/                  # React test app
├── test-vue/                    # Vue test app
└── finetuning/
    ├── README.md                # Fine-tuning + Kaggle instructions
    ├── kaggle_finetune.ipynb    # Self-contained Kaggle notebook
    ├── prepare_data.py          # CSV → train/val/test JSONL
    ├── train.py                 # LoRA/QLoRA/DoRA training
    ├── evaluate.py              # Code metrics (Python validators for Kaggle)
    ├── visual_eval.py           # SSIM/PSNR via Playwright
    ├── compare_results.py       # Tables, charts, LaTeX
    ├── configs/lora.json, qlora.json, dora.json
    ├── models/                  # Base Qwen2-VL-2B (auto-downloaded)
    ├── data/                    # train/val/test JSONL
    ├── outputs/                 # Adapters (lora/, qlora/, dora/)
    └── results/                 # Eval JSON + charts + LaTeX
```

---

## 8. Quick Reference: Commands

**Data generation:**
```powershell
py -3.11 run_pipeline.py --samples 5
py -3.11 run_pipeline.py --samples all --batch-size 4
```

**Fine-tuning (local):**
```powershell
py -3.11 finetuning/prepare_data.py
py -3.11 finetuning/train.py --method qlora
py -3.11 finetuning/train.py --method qlora --resume
```

**Evaluation:**
```powershell
py -3.11 finetuning/evaluate.py --method qlora
py -3.11 finetuning/visual_eval.py --method qlora --max-samples 50
py -3.11 finetuning/compare_results.py
```

**Kaggle:** Use `finetuning/kaggle_finetune.ipynb` with the steps in Section 4 above.
