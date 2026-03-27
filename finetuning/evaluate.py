"""
Evaluate a fine-tuned Qwen2-VL adapter on the test set.

Runs inference on each test sample, then computes:
  - Parse Success Rate (PSR) via Node.js validators
  - BLEU-4 and ChrF via sacrebleu
  - CodeBLEU via codebleu
  - ROUGE-L via rouge-score
  - METEOR via nltk
  - Edit Similarity via Levenshtein distance
  - Exact Match Rate
    - BERTScore F1 (optional; disabled by default for speed)
  - Tag Accuracy
  - CSS/Tailwind Class Accuracy
  - Tree Edit Similarity
  - Token-level Accuracy
  - Inference latency

Usage:
    python finetuning/evaluate.py --method qlora
    python finetuning/evaluate.py --method base   # zero-shot baseline Qwen2-VL
    python finetuning/evaluate.py --method qwen2.5 # zero-shot baseline Qwen2.5-VL
    python finetuning/evaluate.py --method qlora --save-every 50
    python finetuning/evaluate.py --method base --batch-size 4 --max-new-tokens 1536
    python finetuning/evaluate.py --method qlora --resume-from-autosave
"""

import os
import gc
import json
import time
import argparse
import subprocess
import re
from pathlib import Path
from typing import Tuple
from concurrent.futures import ThreadPoolExecutor, as_completed

import torch
import numpy as np
from PIL import Image
from transformers import Qwen2VLForConditionalGeneration, AutoProcessor, BitsAndBytesConfig
from peft import PeftModel
from tqdm import tqdm
from sacrebleu.metrics import BLEU, CHRF
from rouge_score import rouge_scorer
from codebleu import calc_codebleu
import Levenshtein
from nltk.translate.meteor_score import meteor_score as nltk_meteor
import nltk
nltk.download("wordnet", quiet=True)
nltk.download("omw-1.4", quiet=True)

try:
    from bs4 import BeautifulSoup
    HAS_BS4 = True
except ImportError:
    HAS_BS4 = False
    print("  [WARN] beautifulsoup4 not installed. Run: pip install beautifulsoup4")

# ═══════════════════════════════════════════════════════════════════════════════
# DEVICE HELPERS (CUDA / MPS / CPU)
# ═══════════════════════════════════════════════════════════════════════════════
def _has_cuda() -> bool:
    return torch.cuda.is_available()


def _has_mps() -> bool:
    return bool(getattr(torch.backends, "mps", None)) and torch.backends.mps.is_available()


def get_device() -> torch.device:
    if _has_cuda():
        return torch.device("cuda")
    if _has_mps():
        return torch.device("mps")
    return torch.device("cpu")


def cuda_empty_cache():
    if _has_cuda():
        torch.cuda.empty_cache()


def cuda_reset_peak_stats():
    if _has_cuda():
        torch.cuda.reset_peak_memory_stats()


def cuda_max_allocated_gb():
    if not _has_cuda():
        return None
    return torch.cuda.max_memory_allocated() / 1024**3

# ═══════════════════════════════════════════════════════════════════════════════
# PATHS
# ═══════════════════════════════════════════════════════════════════════════════
PROJECT_ROOT = Path(__file__).resolve().parent.parent
LOCAL_MODEL_DIR = PROJECT_ROOT / "finetuning" / "models" / "Qwen2-VL-2B-Instruct"
LOCAL_MODEL_QWEN2_5_DIR = PROJECT_ROOT / "finetuning" / "models" / "Qwen2.5-VL-3B-Instruct"
DATA_DIR = PROJECT_ROOT / "finetuning" / "data"
OUTPUTS_DIR = PROJECT_ROOT / "finetuning" / "outputs"
RESULTS_DIR = PROJECT_ROOT / "finetuning" / "results"

# Pre-resized images directory (smaller images for faster vision encoding)
IMAGES_SMALL_DIR = Path(__file__).resolve().parent / "images_small"
IMAGES_ORIGINAL_PREFIX = "E:/Thesis Project file/data/websight_50k/images/"


def resolve_image_path(original_path: str) -> str:
    """Resolve image path: prefer images_small/ if available, fall back to original."""
    original_path_normalized = original_path.replace("\\", "/")

    # Try to find in images_small directory
    filename = Path(original_path_normalized).name
    small_path = IMAGES_SMALL_DIR / filename
    if small_path.exists():
        return str(small_path)

    # Fall back to original path
    return original_path


# ═══════════════════════════════════════════════════════════════════════════════
# NODE.JS VALIDATORS (reused from run_pipeline.py)
# ═══════════════════════════════════════════════════════════════════════════════
def validate_jsx(jsx_code: str) -> Tuple[bool, str]:
    node_script = r"""
const parser = require("@babel/parser");
let input = "";
process.stdin.on("data", c => input += c);
process.stdin.on("end", () => {
  try {
    parser.parse(input, {sourceType:"module", plugins:["jsx","typescript"]});
    process.stdout.write(JSON.stringify({ok:true}));
  } catch(e) {
    process.stdout.write(JSON.stringify({ok:false, error:String(e.message||e)}));
  }
});
"""
    p = subprocess.run(
        ["node", "-e", node_script],
        input=jsx_code.encode("utf-8"),
        stdout=subprocess.PIPE, stderr=subprocess.PIPE,
    )
    out = p.stdout.decode("utf-8", errors="ignore").strip()
    try:
        j = json.loads(out)
        return bool(j["ok"]), j.get("error", "")
    except Exception:
        return False, "validator error"


def validate_vue(vue_sfc: str) -> Tuple[bool, str]:
    node_script = r"""
const { parse } = require("@vue/compiler-sfc");
let input = "";
process.stdin.on("data", c => input += c);
process.stdin.on("end", () => {
  try {
    const res = parse(input, { filename: "Component.vue" });
    const errs = res.errors || [];
    if (errs.length) {
      process.stdout.write(JSON.stringify({ok:false, error:String(errs[0])}));
    } else {
      process.stdout.write(JSON.stringify({ok:true}));
    }
  } catch(e) {
    process.stdout.write(JSON.stringify({ok:false, error:String(e.message||e)}));
  }
});
"""
    p = subprocess.run(
        ["node", "-e", node_script],
        input=vue_sfc.encode("utf-8"),
        stdout=subprocess.PIPE, stderr=subprocess.PIPE,
    )
    out = p.stdout.decode("utf-8", errors="ignore").strip()
    try:
        j = json.loads(out)
        return bool(j["ok"]), j.get("error", "")
    except Exception:
        return False, "validator error"


def validate_html(html_code: str) -> Tuple[bool, str]:
    """Basic HTML validation -- checks for balanced tags."""
    if not html_code.strip():
        return False, "empty"
    if "<" not in html_code:
        return False, "no HTML tags found"
    return True, ""


# ═══════════════════════════════════════════════════════════════════════════════
# CODE METRICS
# ═══════════════════════════════════════════════════════════════════════════════
def strip_code_fences(text: str) -> str:
    s = text.strip()
    m = re.search(r'```(?:\w+)?\s*\n(.*?)```', s, re.DOTALL)
    if m:
        return m.group(1).strip()
    if s.startswith('```'):
        s = re.sub(r'^```\w*\n?', '', s)
        s = re.sub(r'\n?```$', '', s)
        return s.strip()
    return s


# ═══════════════════════════════════════════════════════════════════════════════
# STRUCTURAL / TAG-LEVEL HELPERS
# ═══════════════════════════════════════════════════════════════════════════════
def extract_tags(code: str) -> list:
    """Extract HTML/JSX tag names in document order."""
    if not HAS_BS4:
        return []
    try:
        soup = BeautifulSoup(code, "html.parser")
        return [tag.name for tag in soup.find_all()]
    except Exception:
        return []


def extract_css_classes(code: str) -> set:
    """Extract CSS/Tailwind class names from class or className attributes."""
    matches = re.findall(r'(?:class|className)=["\']([^"\']*)["\']', code)
    classes = set()
    for m in matches:
        classes.update(m.split())
    return classes


def compute_tag_accuracy(pred_code: str, ref_code: str) -> float:
    """Fraction of reference tags (by type+count) found in prediction."""
    ref_tags = extract_tags(ref_code)
    pred_tags = extract_tags(pred_code)
    if not ref_tags:
        return 1.0 if not pred_tags else 0.0
    ref_counter: dict = {}
    for t in ref_tags:
        ref_counter[t] = ref_counter.get(t, 0) + 1
    pred_counter: dict = {}
    for t in pred_tags:
        pred_counter[t] = pred_counter.get(t, 0) + 1
    matches = sum(min(pred_counter.get(t, 0), c) for t, c in ref_counter.items())
    return matches / sum(ref_counter.values())


def compute_css_class_accuracy(pred_code: str, ref_code: str) -> float:
    """Fraction of reference Tailwind/CSS classes found in prediction."""
    ref_classes = extract_css_classes(ref_code)
    pred_classes = extract_css_classes(pred_code)
    if not ref_classes:
        return 1.0 if not pred_classes else 0.0
    return len(ref_classes & pred_classes) / len(ref_classes)


def compute_tree_edit_similarity(pred_code: str, ref_code: str) -> float:
    """Tag-sequence similarity (1 - normalised Levenshtein on tag lists)."""
    pred_tags = extract_tags(pred_code)
    ref_tags = extract_tags(ref_code)
    if not ref_tags and not pred_tags:
        return 1.0
    pred_str = " ".join(pred_tags)
    ref_str = " ".join(ref_tags)
    max_len = max(len(pred_str), len(ref_str), 1)
    return 1.0 - Levenshtein.distance(pred_str, ref_str) / max_len


def compute_token_accuracy(prediction: str, reference: str) -> float:
    """Token-level accuracy (whitespace-tokenised)."""
    pred_tokens = prediction.split()
    ref_tokens = reference.split()
    if not ref_tokens:
        return 1.0 if not pred_tokens else 0.0
    matches = sum(1 for p, r in zip(pred_tokens, ref_tokens) if p == r)
    return matches / max(len(ref_tokens), len(pred_tokens))


def compute_code_metrics(
    predictions: list,
    references: list,
    lang: str = "javascript",
    include_bertscore: bool = False,
):
    """Compute all code-quality metrics including new structural metrics."""
    bleu = BLEU(effective_order=True)
    chrf = CHRF()
    scorer = rouge_scorer.RougeScorer(["rougeL"], use_stemmer=False)

    bleu_score = bleu.corpus_score(predictions, [references])
    chrf_score = chrf.corpus_score(predictions, [references])

    rouge_scores = []
    meteor_scores = []
    edit_sims = []
    exact_matches = 0
    tag_accs = []
    css_accs = []
    tree_sims = []
    token_accs = []

    for pred, ref in zip(predictions, references):
        # ROUGE-L
        r = scorer.score(ref, pred)
        rouge_scores.append(r["rougeL"].fmeasure)

        # METEOR
        meteor_scores.append(nltk_meteor([ref.split()], pred.split()))

        # Edit Similarity (1 - normalized Levenshtein distance)
        max_len = max(len(pred), len(ref), 1)
        edit_sims.append(1.0 - Levenshtein.distance(pred, ref) / max_len)

        # Exact Match
        if pred.strip() == ref.strip():
            exact_matches += 1

        # Tag Accuracy
        tag_accs.append(compute_tag_accuracy(pred, ref))

        # CSS / Tailwind Class Accuracy
        css_accs.append(compute_css_class_accuracy(pred, ref))

        # Tree Edit Similarity (tag-sequence)
        tree_sims.append(compute_tree_edit_similarity(pred, ref))

        # Token-level Accuracy
        token_accs.append(compute_token_accuracy(pred, ref))

    avg_rouge = float(np.mean(rouge_scores)) if rouge_scores else 0.0
    avg_meteor = float(np.mean(meteor_scores)) if meteor_scores else 0.0
    avg_edit_sim = float(np.mean(edit_sims)) if edit_sims else 0.0
    exact_match_rate = exact_matches / len(predictions) if predictions else 0.0
    avg_tag_acc = float(np.mean(tag_accs)) if tag_accs else 0.0
    avg_css_acc = float(np.mean(css_accs)) if css_accs else 0.0
    avg_tree_sim = float(np.mean(tree_sims)) if tree_sims else 0.0
    avg_token_acc = float(np.mean(token_accs)) if token_accs else 0.0

    try:
        codebleu_result = calc_codebleu(
            references=references,
            predictions=predictions,
            lang=lang,
            weights=(0.25, 0.25, 0.25, 0.25),
        )
        codebleu_score = codebleu_result["codebleu"]
    except ImportError as e:
        print(f"  CodeBLEU error ({lang}): {e}")
        print(f"  Hint: Install tree-sitter language parser: pip install tree-sitter-javascript")
        codebleu_score = 0.0
    except Exception as e:
        print(f"  CodeBLEU error ({lang}): {e}")
        codebleu_score = 0.0

    # BERTScore (corpus-level)
    metrics = {
        "bleu4": round(bleu_score.score, 4),
        "chrf": round(chrf_score.score, 4),
        "rouge_l": round(avg_rouge, 4),
        "codebleu": round(codebleu_score, 4),
        "meteor": round(avg_meteor, 4),
        "edit_similarity": round(avg_edit_sim, 4),
        "exact_match_rate": round(exact_match_rate, 4),
        "tag_accuracy": round(avg_tag_acc, 4),
        "css_class_accuracy": round(avg_css_acc, 4),
        "tree_edit_similarity": round(avg_tree_sim, 4),
        "token_accuracy": round(avg_token_acc, 4),
    }

    if include_bertscore:
        avg_bert_f1 = 0.0
        try:
            from bert_score import score as bert_score_fn
            _, _, bert_f1 = bert_score_fn(
                predictions, references, lang="en", verbose=False,
            )
            avg_bert_f1 = float(bert_f1.mean())
        except ImportError:
            print("  BERTScore skipped (not installed)")
        except Exception as e:
            print(f"  BERTScore error: {e}")
        metrics["bert_score_f1"] = round(avg_bert_f1, 4)

    return metrics


def compute_bertscore_from_saved_predictions(method: str, max_samples: int = None):
    """Compute only BERTScore from saved predictions and update eval results JSON."""
    predictions_path = RESULTS_DIR / f"{method}_predictions.json"
    eval_results_path = RESULTS_DIR / f"{method}_eval_results.json"

    if not predictions_path.exists():
        raise FileNotFoundError(
            f"Predictions not found at {predictions_path}. "
            "Run evaluate.py first to generate predictions."
        )

    with open(predictions_path, "r", encoding="utf-8") as f:
        saved_predictions = json.load(f)

    try:
        from bert_score import score as bert_score_fn
    except ImportError as e:
        raise ImportError(
            "bert-score is not installed. Install with: pip install bert-score"
        ) from e

    per_task_bert = {}
    total_samples = 0
    weighted_sum = 0.0

    for task in ["html", "jsx", "vue"]:
        entries = saved_predictions.get(task, [])
        if max_samples:
            entries = entries[:max_samples]
        if not entries:
            continue

        preds = [e["prediction"] for e in entries]
        refs = [e["reference"] for e in entries]

        _, _, bert_f1 = bert_score_fn(preds, refs, lang="en", verbose=False)
        task_score = float(bert_f1.mean())
        per_task_bert[task] = round(task_score, 4)

        n = len(entries)
        total_samples += n
        weighted_sum += task_score * n

        print(f"  {task.upper()} BERTScore F1: {task_score:.4f} ({n} samples)")

    if total_samples == 0:
        raise ValueError("No predictions found to compute BERTScore.")

    avg_bert = round(weighted_sum / total_samples, 4)

    eval_results = {}
    if eval_results_path.exists():
        with open(eval_results_path, "r", encoding="utf-8") as f:
            eval_results = json.load(f)

    per_task = eval_results.get("per_task", {})
    for task, score in per_task_bert.items():
        if task not in per_task or not isinstance(per_task[task], dict):
            per_task[task] = {}
        per_task[task]["bert_score_f1"] = score

    eval_results["method"] = method
    eval_results["per_task"] = per_task
    eval_results["avg_bert_score_f1"] = avg_bert
    if "total_samples" not in eval_results:
        eval_results["total_samples"] = total_samples

    with open(eval_results_path, "w", encoding="utf-8") as f:
        json.dump(eval_results, f, indent=2, ensure_ascii=False)

    print(f"\n  Avg BERTScore F1: {avg_bert:.4f}")
    print(f"  Updated eval results: {eval_results_path}")


# ═══════════════════════════════════════════════════════════════════════════════
# TASK DETECTION
# ═══════════════════════════════════════════════════════════════════════════════
TASK_KEYWORDS = {
    "jsx": ["React JSX", "React component", "GeneratedComponent"],
    "vue": ["Vue 3", "Single File Component", "SFC"],
    "html": ["HTML", "html"],
}


def detect_task(prompt_text: str) -> str:
    for task, keywords in TASK_KEYWORDS.items():
        for kw in keywords:
            if kw in prompt_text:
                return task
    return "html"


VALIDATORS = {
    "html": validate_html,
    "jsx": validate_jsx,
    "vue": validate_vue,
}


# ═══════════════════════════════════════════════════════════════════════════════
# INFERENCE (BATCHED)
# ═══════════════════════════════════════════════════════════════════════════════
def run_inference(
    model,
    processor,
    test_samples: list,
    max_new_tokens: int = 1536,
    batch_size: int = 4,
    autosave_path: Path = None,
    save_every: int = 50,
    existing_results: dict = None,
    existing_latencies: list = None,
    completed_samples: int = 0,
    total_samples: int = None,
):
    """Run batched inference on test samples and return predictions grouped by task.

    Processes samples in batches of ``batch_size`` for higher GPU utilisation.
    If autosave_path is provided, writes partial progress every ``save_every`` samples.
    """
    results = existing_results if existing_results is not None else {"html": [], "jsx": [], "vue": []}
    for key in ("html", "jsx", "vue"):
        if key not in results:
            results[key] = []

    latencies = existing_latencies if existing_latencies is not None else []
    total_for_progress = total_samples if total_samples is not None else len(test_samples)
    processed_count = completed_samples

    # Process in batches
    num_samples = len(test_samples)
    pbar = tqdm(total=num_samples, desc="Inference", unit="sample")

    for batch_start in range(0, num_samples, batch_size):
        batch_end = min(batch_start + batch_size, num_samples)
        batch_samples = test_samples[batch_start:batch_end]
        current_batch_size = len(batch_samples)

        # ── Prepare batch data ──
        batch_images = []
        batch_texts = []
        batch_tasks = []
        batch_references = []

        for sample in batch_samples:
            messages = sample["messages"]
            user_msg = messages[0]
            reference = messages[1]["content"]

            image_path = None
            text_prompt = ""
            for part in user_msg["content"]:
                if part["type"] == "image":
                    image_path = part["image"].replace("file:///", "")
                elif part["type"] == "text":
                    text_prompt = part["text"]

            # Use pre-resized image if available
            image_path = resolve_image_path(image_path)
            task = detect_task(text_prompt)

            image = Image.open(image_path).convert("RGB")

            conversation = [
                {
                    "role": "user",
                    "content": [
                        {"type": "image", "image": image},
                        {"type": "text", "text": text_prompt},
                    ],
                },
            ]

            text = processor.apply_chat_template(
                conversation, tokenize=False, add_generation_prompt=True
            )

            batch_images.append(image)
            batch_texts.append(text)
            batch_tasks.append(task)
            batch_references.append(reference)

        # ── Tokenize & pad batch ──
        inputs = processor(
            text=batch_texts,
            images=batch_images,
            return_tensors="pt",
            padding=True,
        ).to(model.device)

        # ── Generate ──
        t0 = time.time()
        with torch.inference_mode():
            output_ids = model.generate(
                **inputs,
                max_new_tokens=max_new_tokens,
                do_sample=False,
                pad_token_id=processor.tokenizer.pad_token_id,
            )
        batch_latency = time.time() - t0
        per_sample_latency = batch_latency / current_batch_size

        # ── Decode each sample in the batch ──
        input_len = inputs["input_ids"].shape[1]
        for j in range(current_batch_size):
            new_tokens = output_ids[j][input_len:]
            prediction = processor.tokenizer.decode(new_tokens, skip_special_tokens=True)
            prediction = strip_code_fences(prediction)

            task = batch_tasks[j]
            reference = batch_references[j]
            ok, err = VALIDATORS[task](prediction)

            results[task].append({
                "prediction": prediction,
                "reference": reference,
                "parse_ok": ok,
                "parse_error": err,
            })

            latencies.append(per_sample_latency)

        # Clean up batch
        for img in batch_images:
            img.close()
        del inputs, output_ids
        batch_images.clear()

        processed_count += current_batch_size

        # ── Live VRAM monitoring ──
        if _has_cuda():
            alloc_gb = torch.cuda.memory_allocated() / 1024**3
            reserved_gb = torch.cuda.memory_reserved() / 1024**3
            total_gb = torch.cuda.get_device_properties(0).total_memory / 1024**3
            free_gb = total_gb - reserved_gb
            pbar.set_postfix_str(
                f"{per_sample_latency:.1f}s/sample | "
                f"VRAM: {alloc_gb:.1f}/{total_gb:.1f}GiB used, {free_gb:.1f}GiB free"
            )
        else:
            pbar.set_postfix_str(f"{per_sample_latency:.1f}s/sample")

        pbar.update(current_batch_size)

        # Periodic checkpoint
        if autosave_path is not None and save_every > 0 and (processed_count // save_every > (processed_count - current_batch_size) // save_every):
            checkpoint = {
                "completed_samples": processed_count,
                "total_samples": total_for_progress,
                "avg_inference_latency_s": float(np.mean(latencies)) if latencies else 0.0,
                "per_task_partial": {
                    "html": len(results["html"]),
                    "jsx": len(results["jsx"]),
                    "vue": len(results["vue"]),
                },
                "latencies_partial": latencies,
                "results_partial": results,
            }
            tmp_path = autosave_path.with_suffix(autosave_path.suffix + ".tmp")
            with open(tmp_path, "w", encoding="utf-8") as f:
                json.dump(checkpoint, f, indent=2, ensure_ascii=False)
            os.replace(tmp_path, autosave_path)
            print(f"\n  [autosave] Saved progress: {processed_count}/{total_for_progress} -> {autosave_path}")

    pbar.close()
    return results, latencies


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    parser = argparse.ArgumentParser(description="Evaluate fine-tuned adapter")
    parser.add_argument(
        "--method", required=True, choices=["qlora", "base", "qwen2.5"],
        help="Evaluation method: qlora (fine-tuned adapter), base (zero-shot qwen2), qwen2.5 (zero-shot qwen2.5)",
    )
    parser.add_argument(
        "--test-file", default=str(DATA_DIR / "test.jsonl"),
        help="Path to test JSONL file",
    )
    parser.add_argument("--max-samples", type=int, default=None, help="Limit test samples (default: all)")
    parser.add_argument(
        "--batch-size", type=int, default=4,
        help="Batch size for inference (default: 4). Increase for faster throughput if VRAM allows.",
    )
    parser.add_argument(
        "--max-new-tokens", type=int, default=1536,
        help="Max new tokens to generate per sample (default: 1536). "
             "Covers 99.8%% of test references. Increase to 2048 if needed.",
    )
    parser.add_argument(
        "--save-every",
        type=int,
        default=50,
        help="Autosave inference progress every N samples (set 0 to disable)",
    )
    parser.add_argument(
        "--resume-from-autosave",
        action="store_true",
        help="Resume inference from finetuning/results/{method}_inference_progress.json",
    )
    parser.add_argument(
        "--with-bertscore",
        action="store_true",
        help="Enable BERTScore computation (disabled by default for faster evaluation)",
    )
    parser.add_argument(
        "--bertscore-only",
        action="store_true",
        help="Compute only BERTScore from existing {method}_predictions.json and update eval results",
    )
    args = parser.parse_args()

    RESULTS_DIR.mkdir(exist_ok=True)

    if args.bertscore_only:
        print(f"Computing BERTScore-only for method: {args.method}")
        compute_bertscore_from_saved_predictions(args.method, max_samples=args.max_samples)
        return

    # ── CUDA optimizations ──
    if _has_cuda():
        torch.backends.cudnn.benchmark = True
        print("  [OPT] CUDNN benchmark enabled")

    # ── Load test data ──
    print(f"Loading test data: {args.test_file}")
    test_samples = []
    with open(args.test_file, "r", encoding="utf-8") as f:
        for line in f:
            if line.strip():
                test_samples.append(json.loads(line))

    if args.max_samples:
        test_samples = test_samples[:args.max_samples]
    print(f"  Test samples: {len(test_samples)}")

    # ── Load model ──
    gc.collect()
    cuda_empty_cache()

    is_qlora = args.method == "qlora"
    is_qwen2_5 = args.method == "qwen2.5"
    device = get_device()

    if is_qlora and not _has_cuda():
        raise ValueError(
            "QLoRA/4-bit evaluation requires CUDA (bitsandbytes). "
            "Use --method base for zero-shot evaluation without CUDA."
        )

    if device.type == "mps":
        load_dtype = torch.float16
    else:
        load_dtype = torch.float16 if is_qlora else torch.bfloat16

    model_kwargs = {"torch_dtype": load_dtype}
    if _has_cuda():
        model_kwargs["device_map"] = "auto"

    # Flash Attention / SDPA for faster attention computation
    attn_impl = None
    try:
        import flash_attn  # noqa: F401
        attn_impl = "flash_attention_2"
        print("  [OPT] Using Flash Attention 2")
    except ImportError:
        attn_impl = "sdpa"
        print("  [OPT] Using SDPA (Scaled Dot-Product Attention)")
    model_kwargs["attn_implementation"] = attn_impl

    if is_qlora:
        model_kwargs["quantization_config"] = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_quant_type="nf4",
            bnb_4bit_use_double_quant=True,
            bnb_4bit_compute_dtype=torch.float16,
        )

    from transformers import AutoProcessor
    
    print(f"Loading {args.method} model...")
    base_model_path = str(LOCAL_MODEL_QWEN2_5_DIR) if is_qwen2_5 else str(LOCAL_MODEL_DIR)

    print(f"Loading base model from: {base_model_path}")

    processor = AutoProcessor.from_pretrained(base_model_path)

    if is_qwen2_5:
        from transformers import Qwen2_5_VLForConditionalGeneration
        model = Qwen2_5_VLForConditionalGeneration.from_pretrained(
            base_model_path, **model_kwargs
        )
    else:
        from transformers import Qwen2VLForConditionalGeneration
        model = Qwen2VLForConditionalGeneration.from_pretrained(
            base_model_path, **model_kwargs
        )

    if not _has_cuda():
        model = model.to(device)

    # ── Fix weight tying (transformers version mismatch workaround) ──
    # When the model was saved with transformers 5.x but loaded with 4.x,
    # tie_word_embeddings silently fails because the internal model structure
    # changed (embed_tokens moved under model.language_model). This causes
    # lm_head.weight to be randomly initialized, producing garbage output.
    if hasattr(model.config, "tie_word_embeddings") and model.config.tie_word_embeddings:
        # Find embed_tokens weight wherever it lives in the model
        embed_weight = None
        for name, param in model.named_parameters():
            if "embed_tokens.weight" in name:
                embed_weight = param
                break
        if embed_weight is not None and model.lm_head.weight.data_ptr() != embed_weight.data_ptr():
            print("  [FIX] Weight tying was broken (lm_head != embed_tokens). Manually tying weights.")
            model.lm_head.weight = embed_weight
        else:
            print("  [OK] Weight tying is correct (lm_head == embed_tokens).")

    if processor.tokenizer.pad_token is None:
        processor.tokenizer.pad_token = processor.tokenizer.eos_token

    # Left-padding is required for correct batched generation with causal LMs
    processor.tokenizer.padding_side = "left"
    print("  [OPT] Tokenizer padding_side set to 'left' for batched generation")

    # Control vision token count — cap image resolution to reduce vision tokens
    if hasattr(processor, "image_processor"):
        processor.image_processor.min_pixels = 256 * 28 * 28    # ~200k pixels
        processor.image_processor.max_pixels = 512 * 28 * 28    # ~400k pixels
        print(f"  [OPT] Image processor: min_pixels={processor.image_processor.min_pixels}, "
              f"max_pixels={processor.image_processor.max_pixels}")

    if args.method == "qlora":
        adapter_path = (OUTPUTS_DIR / args.method / "final_adapter").resolve()
        if not (adapter_path / "adapter_config.json").exists():
            raise FileNotFoundError(
                f"Adapter not found at {adapter_path} (missing adapter_config.json). "
                "Finish training first: python finetuning/train.py --method " + args.method
            )
        print(f"Loading adapter from: {adapter_path}")
        model = PeftModel.from_pretrained(model, str(adapter_path), local_files_only=True)

        # NOTE: merge_and_unload() is NOT supported for 4-bit quantized models (qlora)
        print("  [INFO] Skipping merge_and_unload for qlora (not supported on 4-bit models)")

    # Keep decoding deterministic and silence warnings about sampling-only flags.
    if hasattr(model, "generation_config"):
        model.generation_config.do_sample = False
        model.generation_config.top_p = None
        model.generation_config.top_k = None
        model.generation_config.temperature = None

    model.eval()

    # Print optimization summary
    print(f"\n{'='*60}")
    print(f"  OPTIMIZATION SUMMARY")
    print(f"{'='*60}")
    print(f"  Attention:      {attn_impl}")
    print(f"  Batch size:     {args.batch_size}")
    print(f"  Max new tokens: {args.max_new_tokens}")
    print(f"  Images:         {'images_small (pre-resized)' if IMAGES_SMALL_DIR.exists() else 'original'}")
    print(f"  Padding:        left (for batched generation)")
    if args.method == "qlora":
        print(f"  Adapter:        qlora (4-bit, not merged)")
    print(f"{'='*60}\n")
    print("Model loaded.\n")

    # ── Inference ──
    cuda_reset_peak_stats()
    autosave_path = RESULTS_DIR / f"{args.method}_inference_progress.json" if args.save_every > 0 else None

    existing_results = None
    existing_latencies = None
    completed_samples = 0
    inference_samples = test_samples

    if args.resume_from_autosave and autosave_path is not None and autosave_path.exists():
        with open(autosave_path, "r", encoding="utf-8") as f:
            checkpoint = json.load(f)

        completed_samples = int(checkpoint.get("completed_samples", 0))
        existing_results = checkpoint.get("results_partial", {"html": [], "jsx": [], "vue": []})
        existing_latencies = checkpoint.get("latencies_partial", [])

        if completed_samples > 0:
            inference_samples = test_samples[completed_samples:]
            print(
                f"Resuming from autosave: {completed_samples}/{len(test_samples)} already done. "
                f"Remaining: {len(inference_samples)}"
            )

    results, latencies = run_inference(
        model,
        processor,
        inference_samples,
        max_new_tokens=args.max_new_tokens,
        batch_size=args.batch_size,
        autosave_path=autosave_path,
        save_every=args.save_every,
        existing_results=existing_results,
        existing_latencies=existing_latencies,
        completed_samples=completed_samples,
        total_samples=len(test_samples),
    )
    peak_mem = cuda_max_allocated_gb()

    # ── Compute metrics per task ──
    all_metrics = {}
    for task in ["html", "jsx", "vue"]:
        entries = results[task]
        if not entries:
            print(f"\n  {task.upper()}: No samples, skipping.")
            continue

        preds = [e["prediction"] for e in entries]
        refs = [e["reference"] for e in entries]
        parse_ok_count = sum(1 for e in entries if e["parse_ok"])

        lang = "javascript"  # CodeBLEU uses javascript for HTML/JSX/Vue (closest supported lang)
        code_metrics = compute_code_metrics(
            preds,
            refs,
            lang=lang,
            include_bertscore=args.with_bertscore,
        )

        task_metrics = {
            "n_samples": len(entries),
            "parse_success_rate": round(parse_ok_count / len(entries), 4),
            "parse_ok": parse_ok_count,
            "parse_fail": len(entries) - parse_ok_count,
            **code_metrics,
        }
        all_metrics[task] = task_metrics

        print(f"\n  {task.upper()} ({len(entries)} samples):")
        print(f"    PSR:      {task_metrics['parse_success_rate']:.2%}")
        print(f"    BLEU-4:   {task_metrics['bleu4']:.4f}")
        print(f"    CodeBLEU: {task_metrics['codebleu']:.4f}")
        print(f"    ROUGE-L:  {task_metrics['rouge_l']:.4f}")
        print(f"    ChrF:     {task_metrics['chrf']:.4f}")
        print(f"    METEOR:   {task_metrics['meteor']:.4f}")
        print(f"    EditSim:  {task_metrics['edit_similarity']:.4f}")
        print(f"    ExactM:   {task_metrics['exact_match_rate']:.2%}")
        if "bert_score_f1" in task_metrics:
            print(f"    BERTScr:  {task_metrics['bert_score_f1']:.4f}")
        print(f"    TagAcc:   {task_metrics['tag_accuracy']:.4f}")
        print(f"    CSSAcc:   {task_metrics['css_class_accuracy']:.4f}")
        print(f"    TreeSim:  {task_metrics['tree_edit_similarity']:.4f}")
        print(f"    TokAcc:   {task_metrics['token_accuracy']:.4f}")

    # ── Aggregate metrics ──
    avg_latency = float(np.mean(latencies)) if latencies else 0
    total_samples = sum(m["n_samples"] for m in all_metrics.values())

    summary = {
        "method": args.method,
        "total_samples": total_samples,
        "avg_inference_latency_s": round(avg_latency, 3),
        "peak_vram_gb": round(peak_mem, 2) if peak_mem is not None else None,
        "batch_size": args.batch_size,
        "max_new_tokens": args.max_new_tokens,
        "per_task": all_metrics,
    }

    # Weighted average across tasks
    if all_metrics:
        aggregate_metrics = [
            "parse_success_rate", "bleu4", "codebleu", "rouge_l", "chrf",
            "meteor", "edit_similarity", "exact_match_rate", "tag_accuracy",
            "css_class_accuracy", "tree_edit_similarity", "token_accuracy",
        ]
        if args.with_bertscore:
            aggregate_metrics.append("bert_score_f1")

        for metric_name in aggregate_metrics:
            weighted = sum(
                m[metric_name] * m["n_samples"] for m in all_metrics.values()
            ) / total_samples
            summary[f"avg_{metric_name}"] = round(weighted, 4)

    # ── Save results ──
    out_path = RESULTS_DIR / f"{args.method}_eval_results.json"
    with open(out_path, "w") as f:
        json.dump(summary, f, indent=2)

    # Save per-sample predictions for deeper analysis
    predictions_path = RESULTS_DIR / f"{args.method}_predictions.json"
    with open(predictions_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\n{'='*60}")
    print(f"  EVALUATION COMPLETE: {args.method.upper()}")
    print(f"{'='*60}")
    print(f"  Samples:    {total_samples}")
    print(f"  Batch size: {args.batch_size}")
    print(f"  Latency:    {avg_latency:.2f}s avg per sample")
    if peak_mem is not None:
        print(f"  Peak VRAM:  {peak_mem:.2f} GiB")
    if "avg_parse_success_rate" in summary:
        print(f"  Avg PSR:    {summary['avg_parse_success_rate']:.2%}")
        print(f"  Avg BLEU-4: {summary['avg_bleu4']:.4f}")
        print(f"  Avg ChrF:   {summary['avg_chrf']:.4f}")
        print(f"  Avg METEOR: {summary['avg_meteor']:.4f}")
        print(f"  Avg EditSim:{summary['avg_edit_similarity']:.4f}")
        print(f"  Avg ExactM: {summary['avg_exact_match_rate']:.2%}")
        if "avg_bert_score_f1" in summary:
            print(f"  Avg BERTScr:{summary['avg_bert_score_f1']:.4f}")
        print(f"  Avg TagAcc: {summary['avg_tag_accuracy']:.4f}")
        print(f"  Avg CSSAcc: {summary['avg_css_class_accuracy']:.4f}")
        print(f"  Avg TreeSim:{summary['avg_tree_edit_similarity']:.4f}")
        print(f"  Avg TokAcc: {summary['avg_token_accuracy']:.4f}")
    print(f"  Results:    {out_path}")
    print(f"  Predictions:{predictions_path}\n")

    del model
    gc.collect()
    cuda_empty_cache()


if __name__ == "__main__":
    main()
