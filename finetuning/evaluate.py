"""
Evaluate a fine-tuned Qwen2-VL adapter on the test set.

Runs inference on each test sample, then computes:
  - Parse Success Rate (PSR) via Node.js validators
  - BLEU-4 and ChrF via sacrebleu
  - CodeBLEU via codebleu
  - ROUGE-L via rouge-score
  - Inference latency

Usage:
    python finetuning/evaluate.py --method lora
    python finetuning/evaluate.py --method qlora
    python finetuning/evaluate.py --method dora
    python finetuning/evaluate.py --method base   # zero-shot baseline
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

import torch
import numpy as np
from PIL import Image
from transformers import Qwen2VLForConditionalGeneration, AutoProcessor, BitsAndBytesConfig
from peft import PeftModel
from tqdm import tqdm
from sacrebleu.metrics import BLEU, CHRF
from rouge_score import rouge_scorer
from codebleu import calc_codebleu

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
DATA_DIR = PROJECT_ROOT / "finetuning" / "data"
OUTPUTS_DIR = PROJECT_ROOT / "finetuning" / "outputs"
RESULTS_DIR = PROJECT_ROOT / "finetuning" / "results"


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


def compute_code_metrics(predictions: list, references: list, lang: str = "javascript"):
    """Compute BLEU-4, ChrF, ROUGE-L, and CodeBLEU for a list of pred/ref pairs."""
    bleu = BLEU(effective_order=True)
    chrf = CHRF()
    scorer = rouge_scorer.RougeScorer(["rougeL"], use_stemmer=False)

    bleu_score = bleu.corpus_score(predictions, [references])
    chrf_score = chrf.corpus_score(predictions, [references])

    rouge_scores = []
    for pred, ref in zip(predictions, references):
        r = scorer.score(ref, pred)
        rouge_scores.append(r["rougeL"].fmeasure)
    avg_rouge = float(np.mean(rouge_scores)) if rouge_scores else 0.0

    try:
        codebleu_result = calc_codebleu(
            references=references,
            predictions=predictions,
            lang=lang,
            weights=(0.25, 0.25, 0.25, 0.25),
        )
        codebleu_score = codebleu_result["codebleu"]
    except Exception as e:
        print(f"  CodeBLEU error ({lang}): {e}")
        codebleu_score = 0.0

    return {
        "bleu4": round(bleu_score.score, 4),
        "chrf": round(chrf_score.score, 4),
        "rouge_l": round(avg_rouge, 4),
        "codebleu": round(codebleu_score, 4),
    }


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
# INFERENCE
# ═══════════════════════════════════════════════════════════════════════════════
def run_inference(model, processor, test_samples: list, max_new_tokens: int = 2048):
    """Run inference on test samples and return predictions grouped by task."""
    results = {"html": [], "jsx": [], "vue": []}

    latencies = []

    for sample in tqdm(test_samples, desc="Inference", unit="sample"):
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
        inputs = processor(
            text=[text], images=[image], return_tensors="pt", padding=True
        ).to(model.device)

        t0 = time.time()
        with torch.no_grad():
            output_ids = model.generate(
                **inputs,
                max_new_tokens=max_new_tokens,
                do_sample=False,
                temperature=1.0,
                pad_token_id=processor.tokenizer.pad_token_id,
            )
        latency = time.time() - t0
        latencies.append(latency)

        new_tokens = output_ids[0][inputs["input_ids"].shape[1]:]
        prediction = processor.tokenizer.decode(new_tokens, skip_special_tokens=True)
        prediction = strip_code_fences(prediction)

        ok, err = VALIDATORS[task](prediction)

        results[task].append({
            "prediction": prediction,
            "reference": reference,
            "parse_ok": ok,
            "parse_error": err,
        })

        image.close()
        del inputs, output_ids
        torch.cuda.empty_cache()

    return results, latencies


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    parser = argparse.ArgumentParser(description="Evaluate fine-tuned adapter")
    parser.add_argument(
        "--method", required=True, choices=["lora", "qlora", "dora", "base"],
        help="Method to evaluate (or 'base' for zero-shot)",
    )
    parser.add_argument(
        "--test-file", default=str(DATA_DIR / "test.jsonl"),
        help="Path to test JSONL file",
    )
    parser.add_argument("--max-samples", type=int, default=None, help="Limit test samples")
    args = parser.parse_args()

    RESULTS_DIR.mkdir(exist_ok=True)

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
    device = get_device()

    if is_qlora and not _has_cuda():
        raise ValueError(
            "QLoRA/4-bit evaluation requires CUDA (bitsandbytes). "
            "On Apple Silicon use --method lora, --method dora, or --method base."
        )

    if device.type == "mps":
        load_dtype = torch.float16
    else:
        load_dtype = torch.float16 if is_qlora else torch.bfloat16

    model_kwargs = {"torch_dtype": load_dtype}
    if _has_cuda():
        model_kwargs["device_map"] = "auto"

    if is_qlora:
        model_kwargs["quantization_config"] = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_quant_type="nf4",
            bnb_4bit_use_double_quant=True,
            bnb_4bit_compute_dtype=torch.float16,
        )

    print(f"\nLoading base model from: {LOCAL_MODEL_DIR}")
    model = Qwen2VLForConditionalGeneration.from_pretrained(
        str(LOCAL_MODEL_DIR), **model_kwargs
    )
    if not _has_cuda():
        model = model.to(device)
    processor = AutoProcessor.from_pretrained(str(LOCAL_MODEL_DIR))

    if processor.tokenizer.pad_token is None:
        processor.tokenizer.pad_token = processor.tokenizer.eos_token

    if args.method != "base":
        adapter_path = (OUTPUTS_DIR / args.method / "final_adapter").resolve()
        if not (adapter_path / "adapter_config.json").exists():
            raise FileNotFoundError(
                f"Adapter not found at {adapter_path} (missing adapter_config.json). "
                "Finish training first: python finetuning/train.py --method " + args.method
            )
        print(f"Loading adapter from: {adapter_path}")
        model = PeftModel.from_pretrained(model, str(adapter_path), local_files_only=True)

    model.eval()
    print("Model loaded.\n")

    # ── Inference ──
    cuda_reset_peak_stats()
    results, latencies = run_inference(model, processor, test_samples)
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

        lang = "javascript" if task in ("jsx", "html") else "javascript"
        code_metrics = compute_code_metrics(preds, refs, lang=lang)

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

    # ── Aggregate metrics ──
    avg_latency = float(np.mean(latencies)) if latencies else 0
    total_samples = sum(m["n_samples"] for m in all_metrics.values())

    summary = {
        "method": args.method,
        "total_samples": total_samples,
        "avg_inference_latency_s": round(avg_latency, 3),
        "peak_vram_gb": round(peak_mem, 2) if peak_mem is not None else None,
        "per_task": all_metrics,
    }

    # Weighted average across tasks
    if all_metrics:
        for metric_name in ["parse_success_rate", "bleu4", "codebleu", "rouge_l", "chrf"]:
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
    print(f"  Latency:    {avg_latency:.2f}s avg per sample")
    if peak_mem is not None:
        print(f"  Peak VRAM:  {peak_mem:.2f} GiB")
    if "avg_parse_success_rate" in summary:
        print(f"  Avg PSR:    {summary['avg_parse_success_rate']:.2%}")
        print(f"  Avg BLEU-4: {summary['avg_bleu4']:.4f}")
        print(f"  Avg ChrF:   {summary['avg_chrf']:.4f}")
    print(f"  Results:    {out_path}")
    print(f"  Predictions:{predictions_path}\n")

    del model
    gc.collect()
    cuda_empty_cache()


if __name__ == "__main__":
    main()
