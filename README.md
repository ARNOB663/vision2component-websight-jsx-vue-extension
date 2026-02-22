# Vision2Component: WebSight HTML to JSX + Vue SFC Pipeline

Converts HTML from the [WebSight](https://huggingface.co/datasets/HuggingFaceM4/WebSight) dataset into valid React JSX and Vue 3 SFC components using Qwen2.5-Coder-7B (4-bit quantized).

## Requirements

- Python 3.11
- Node.js (for JSX/Vue validation)
- NVIDIA GPU with 8GB+ VRAM (tested on RTX 3070 Ti)

## Setup

```powershell
# Install Python dependencies
pip install -r requirements.txt

# Install Node.js validators
npm install @babel/parser @vue/compiler-sfc
```

## Download Dataset
 
Download 50k WebSight samples (in 5 batches of 10k):

```powershell
py -3.11 download_websight.py
```

## Run Pipeline

Generate JSX + Vue components from HTML. Saves one row at a time and auto-resumes on re-run. Uses batched inference and greedy decoding for optimal GPU utilization.

```powershell
# First run - test with 5 samples (batch size 4)
py -3.11 run_pipeline.py --samples 5

# Continue with more samples
py -3.11 run_pipeline.py --samples 100
py -3.11 run_pipeline.py --samples 1000

# Process all remaining (batch size 4)
py -3.11 run_pipeline.py --samples all --batch-size 4

# Reset progress and start over
py -3.11 run_pipeline.py --reset --samples 5
```

### Performance Flags

| Flag | Default | Description |
|------|---------|-------------|
| `--batch-size` | 4 | Number of prompts per GPU batch. Lower to 2 if OOM. |
| `--max-tokens` | 2048 | Max output tokens per generation. Increase for very complex pages. |

```powershell
# Larger batches (more VRAM usage, faster throughput)
py -3.11 run_pipeline.py --samples all --batch-size 8

# Reduce batch size if out-of-memory
py -3.11 run_pipeline.py --samples all --batch-size 2

# Increase output limit for complex components
py -3.11 run_pipeline.py --samples all --max-tokens 3072
```

Output is saved to `data/websight_50k/websight_50k_gen.csv` with progress tracked in `data/websight_50k/progress.txt`.

## Test Components

### 1. Extract components from CSV

```powershell
py -3.11 extract_components.py
```

### 2. React test app

```powershell
cd test-react
npm install
npm run dev
```

### 3. Vue test app

```powershell
cd test-vue
npm install
npm run dev
```

Both apps show a sidebar listing all generated components. Click any to render it.

## Project Structure

```
.
├── run_pipeline.py          # Main generation pipeline (resumable)
├── download_websight.py     # Download 50k WebSight samples
├── extract_components.py    # Extract JSX/Vue from CSV into test projects
├── requirements.txt         # Python dependencies
├── package.json             # Node.js dependencies (validators)
├── data/
│   └── websight_50k/
│       ├── websight_50k.csv       # Input dataset (50k rows)
│       ├── websight_50k_gen.csv   # Generated output (JSX + Vue)
│       └── progress.txt           # Resume tracker
├── test-react/              # React test app (Vite + Tailwind)
├── test-vue/                # Vue test app (Vite + Tailwind)
├── Qwen25_Coder_7B_4bit_Pipeline.ipynb  # Notebook version
└── Data exploration.ipynb   # Dataset exploration
```
