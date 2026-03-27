"""
Fine-tune Qwen2-VL-2B-Instruct with QLoRA.

Downloads the base model to finetuning/models/ on first run.
Loads multi-task JSONL data prepared by prepare_data.py.

Resume behaviour:
- Training: use --resume to continue from last checkpoint (saved every save_steps).
- If the run stops after training but before validation: run again without --resume;
  the script will detect the saved adapter and run validation only, then save metrics.

Usage:
    python finetuning/train.py
    python finetuning/train.py --resume
"""

import os
import gc
import json
import time
import argparse
from pathlib import Path

import torch
import pandas as pd
from PIL import Image
from transformers import (
    Qwen2VLForConditionalGeneration,
    AutoProcessor,
    BitsAndBytesConfig,
    TrainingArguments,
    Trainer,
    TrainerCallback,
)
from peft import LoraConfig, get_peft_model, PeftModel, TaskType, prepare_model_for_kbit_training
from torch.utils.data import Dataset

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

class StepTimingCallback(TrainerCallback):
    """Track measured step timing so tqdm ETA can be sanity-checked."""

    def __init__(self):
        self.run_start_time = None
        self.last_log_time = None
        self.initial_step = None
        self.last_log_step = 0
        self.summary = {
            "measured_avg_sec_per_step": None,
            "measured_last_log_sec_per_step": None,
            "measured_timing_logs": 0,
        }

    def on_train_begin(self, args, state, control, **kwargs):
        now = time.perf_counter()
        self.run_start_time = now
        self.last_log_time = now
        self.initial_step = None
        self.last_log_step = state.global_step

    def on_step_begin(self, args, state, control, **kwargs):
        if self.initial_step is None:
            self.initial_step = state.global_step

    def on_log(self, args, state, control, logs=None, **kwargs):
        if self.run_start_time is None or logs is None:
            return

        now = time.perf_counter()
        elapsed = now - self.run_start_time
        step_delta = state.global_step - self.last_log_step
        time_delta = now - self.last_log_time

        total_step_delta = state.global_step - (self.initial_step or 0)
        overall_avg = None
        if total_step_delta > 0 and elapsed > 0:
            overall_avg = elapsed / total_step_delta
            logs["measured_avg_sec_per_step"] = round(overall_avg, 3)
            logs["measured_elapsed_min"] = round(elapsed / 60, 2)
            self.summary["measured_avg_sec_per_step"] = round(overall_avg, 3)

        if step_delta > 0 and time_delta > 0:
            interval_avg = time_delta / step_delta
            logs["measured_last_log_sec_per_step"] = round(interval_avg, 3)
            self.summary["measured_last_log_sec_per_step"] = round(interval_avg, 3)
            self.summary["measured_timing_logs"] += 1
            print(
                f"  Measured timing: {interval_avg:.2f} sec/step over last {step_delta} steps "
                f"({overall_avg:.2f} sec/step overall)"
            )

        self.last_log_time = now
        self.last_log_step = state.global_step


# ═══════════════════════════════════════════════════════════════════════════════
# PATHS
# ═══════════════════════════════════════════════════════════════════════════════
PROJECT_ROOT = Path(__file__).resolve().parent.parent
MODEL_ID = "Qwen/Qwen2-VL-2B-Instruct"
LOCAL_MODEL_DIR = PROJECT_ROOT / "finetuning" / "models" / "Qwen2-VL-2B-Instruct"
DATA_DIR = PROJECT_ROOT / "finetuning" / "data"
CONFIGS_DIR = PROJECT_ROOT / "finetuning" / "configs"
OUTPUTS_DIR = PROJECT_ROOT / "finetuning" / "outputs"


# ═══════════════════════════════════════════════════════════════════════════════
# DATASET
# ═══════════════════════════════════════════════════════════════════════════════
class VLCodeDataset(Dataset):
    """Loads JSONL conversations and processes them for Qwen2-VL."""

    def __init__(self, jsonl_path: str, processor, max_length: int = 2048):
        self.processor = processor
        self.max_length = max_length
        self.samples = []

        with open(jsonl_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line:
                    self.samples.append(json.loads(line))

        print(f"  Loaded {len(self.samples)} examples from {jsonl_path}")

    def __len__(self):
        return len(self.samples)

    def __getitem__(self, idx):
        sample = self.samples[idx]
        messages = sample["messages"]

        user_msg = messages[0]
        assistant_msg = messages[1]

        image_path = None
        text_prompt = ""
        for part in user_msg["content"]:
            if part["type"] == "image":
                raw = part["image"]
                image_path = raw.replace("file:///", "")
            elif part["type"] == "text":
                text_prompt = part["text"]

        target_code = assistant_msg["content"]

        image = Image.open(image_path).convert("RGB")

        conversation = [
            {
                "role": "user",
                "content": [
                    {"type": "image", "image": image},
                    {"type": "text", "text": text_prompt},
                ],
            },
            {
                "role": "assistant",
                "content": [
                    {"type": "text", "text": target_code},
                ],
            },
        ]

        text = self.processor.apply_chat_template(
            conversation, tokenize=False, add_generation_prompt=False
        )

        # Process without truncation -- image tokens must not be cut
        inputs = self.processor(
            text=[text],
            images=[image],
            padding=False,
            return_tensors="pt",
        )

        input_ids = inputs["input_ids"].squeeze(0)
        attention_mask = inputs["attention_mask"].squeeze(0)

        # Truncate from the END (cuts code, never image tokens at the start)
        if input_ids.shape[0] > self.max_length:
            input_ids = input_ids[:self.max_length]
            attention_mask = attention_mask[:self.max_length]

        # Build labels: mask the prompt, only train on assistant output
        labels = input_ids.clone()

        prompt_text = self.processor.apply_chat_template(
            [conversation[0]], tokenize=False, add_generation_prompt=True
        )
        prompt_tokens = self.processor(
            text=[prompt_text],
            images=[image],
            padding=False,
            return_tensors="pt",
        )
        prompt_len = min(prompt_tokens["input_ids"].shape[1], input_ids.shape[0])
        labels[:prompt_len] = -100

        result = {
            "input_ids": input_ids,
            "attention_mask": attention_mask,
            "labels": labels,
        }
        if "pixel_values" in inputs:
            result["pixel_values"] = inputs["pixel_values"].squeeze(0)
        if "image_grid_thw" in inputs:
            result["image_grid_thw"] = inputs["image_grid_thw"].squeeze(0)

        image.close()
        return result


# ═══════════════════════════════════════════════════════════════════════════════
# MODEL LOADING
# ═══════════════════════════════════════════════════════════════════════════════
def download_model_if_needed():
    """Download base model to local folder on first run."""
    if LOCAL_MODEL_DIR.exists() and any(LOCAL_MODEL_DIR.iterdir()):
        print(f"Base model already cached at: {LOCAL_MODEL_DIR}")
        return

    print(f"Downloading {MODEL_ID} to {LOCAL_MODEL_DIR} ...")
    LOCAL_MODEL_DIR.mkdir(parents=True, exist_ok=True)

    processor = AutoProcessor.from_pretrained(MODEL_ID)
    processor.save_pretrained(str(LOCAL_MODEL_DIR))

    model = Qwen2VLForConditionalGeneration.from_pretrained(
        MODEL_ID, torch_dtype=torch.float16
    )
    model.save_pretrained(str(LOCAL_MODEL_DIR))
    del model
    gc.collect()
    cuda_empty_cache()
    print("Download complete.\n")


def load_model_and_processor(config: dict):
    """Load base model with optional quantization, apply PEFT adapter."""
    model_path = str(LOCAL_MODEL_DIR)
    device = get_device()

    quant_config = None
    if config.get("quantization"):
        if not _has_cuda():
            raise ValueError(
                "QLoRA/4-bit quantization requires CUDA (bitsandbytes)."
            )
        q = config["quantization"]
        compute_dtype = getattr(torch, q.get("bnb_4bit_compute_dtype", "float16"))
        quant_config = BitsAndBytesConfig(
            load_in_4bit=q.get("load_in_4bit", True),
            bnb_4bit_quant_type=q.get("bnb_4bit_quant_type", "nf4"),
            bnb_4bit_use_double_quant=q.get("bnb_4bit_use_double_quant", True),
            bnb_4bit_compute_dtype=compute_dtype,
        )

    gc.collect()
    cuda_empty_cache()

    # MPS is typically fp16; bf16 support is limited.
    if device.type == "mps":
        load_dtype = torch.float16
    else:
        load_dtype = torch.float16 if config.get("fp16") else torch.bfloat16

    model_kwargs = {"torch_dtype": load_dtype}
    if _has_cuda():
        model_kwargs["device_map"] = "auto"
    if quant_config:
        model_kwargs["quantization_config"] = quant_config

    print(f"Loading model from: {model_path}")
    model = Qwen2VLForConditionalGeneration.from_pretrained(model_path, **model_kwargs)
    if not _has_cuda():
        model = model.to(device)

    # ── Fix weight tying (transformers version mismatch workaround) ──
    if hasattr(model.config, "tie_word_embeddings") and model.config.tie_word_embeddings:
        embed_weight = None
        for name, param in model.named_parameters():
            if "embed_tokens.weight" in name:
                embed_weight = param
                break
        if embed_weight is not None and model.lm_head.weight.data_ptr() != embed_weight.data_ptr():
            print("  [FIX] Weight tying was broken. Manually tying lm_head to embed_tokens.")
            model.lm_head.weight = embed_weight

    if quant_config:
        model = prepare_model_for_kbit_training(
            model, use_gradient_checkpointing=config.get("gradient_checkpointing", True)
        )

    processor = AutoProcessor.from_pretrained(
        model_path,
        min_pixels=256 * 28 * 28,
        max_pixels=512 * 28 * 28,
    )

    if processor.tokenizer.pad_token is None:
        processor.tokenizer.pad_token = processor.tokenizer.eos_token

    # ── PEFT adapter ──
    lora_config = LoraConfig(
        r=config["lora_r"],
        lora_alpha=config["lora_alpha"],
        lora_dropout=config["lora_dropout"],
        target_modules=config["target_modules"],
        task_type=TaskType.CAUSAL_LM,
    )

    model = get_peft_model(model, lora_config)

    trainable, total = 0, 0
    for p in model.parameters():
        total += p.numel()
        if p.requires_grad:
            trainable += p.numel()

    print(f"  Total params:     {total:>12,}")
    print(f"  Trainable params: {trainable:>12,} ({trainable/total:.2%})")

    if _has_cuda():
        free, total_mem = torch.cuda.mem_get_info()
        print(f"  GPU: {free / 1024**3:.1f} GiB free / {total_mem / 1024**3:.1f} GiB total\n")
    else:
        print(f"  Device: {device.type}\n")

    return model, processor, {"trainable": trainable, "total": total}


# ═══════════════════════════════════════════════════════════════════════════════
# DATA COLLATOR
# ═══════════════════════════════════════════════════════════════════════════════
class VLDataCollator:
    """Collate variable-length sequences with dynamic padding for Qwen2-VL."""

    def __init__(self, pad_token_id: int):
        self.pad_token_id = pad_token_id

    def __call__(self, features):
        max_len = max(f["input_ids"].shape[0] for f in features)

        input_ids_list = []
        attention_mask_list = []
        labels_list = []

        for f in features:
            seq_len = f["input_ids"].shape[0]
            pad_len = max_len - seq_len

            if pad_len > 0:
                input_ids_list.append(torch.cat([
                    f["input_ids"],
                    torch.full((pad_len,), self.pad_token_id, dtype=f["input_ids"].dtype),
                ]))
                attention_mask_list.append(torch.cat([
                    f["attention_mask"],
                    torch.zeros(pad_len, dtype=f["attention_mask"].dtype),
                ]))
                labels_list.append(torch.cat([
                    f["labels"],
                    torch.full((pad_len,), -100, dtype=f["labels"].dtype),
                ]))
            else:
                input_ids_list.append(f["input_ids"])
                attention_mask_list.append(f["attention_mask"])
                labels_list.append(f["labels"])

        batch = {
            "input_ids": torch.stack(input_ids_list),
            "attention_mask": torch.stack(attention_mask_list),
            "labels": torch.stack(labels_list),
        }

        if "pixel_values" in features[0]:
            batch["pixel_values"] = torch.cat(
                [f["pixel_values"].unsqueeze(0) for f in features], dim=0
            )

        if "image_grid_thw" in features[0]:
            batch["image_grid_thw"] = torch.stack(
                [f["image_grid_thw"] for f in features]
            )

        return batch


# ═══════════════════════════════════════════════════════════════════════════════
# POST-TRAINING VALIDATION (avoids OOM by running after save + memory clear)
# ═══════════════════════════════════════════════════════════════════════════════
def load_model_for_eval(config: dict, adapter_dir: str):
    """Load base model + adapter and processor for eval only (no grad, no checkpointing)."""
    model_path = str(LOCAL_MODEL_DIR)
    device = get_device()
    quant_config = None
    if config.get("quantization"):
        if not _has_cuda():
            raise ValueError(
                "QLoRA/4-bit quantization requires CUDA (bitsandbytes)."
            )
        q = config["quantization"]
        compute_dtype = getattr(torch, q.get("bnb_4bit_compute_dtype", "float16"))
        quant_config = BitsAndBytesConfig(
            load_in_4bit=q.get("load_in_4bit", True),
            bnb_4bit_quant_type=q.get("bnb_4bit_quant_type", "nf4"),
            bnb_4bit_use_double_quant=q.get("bnb_4bit_use_double_quant", True),
            bnb_4bit_compute_dtype=compute_dtype,
        )
    if device.type == "mps":
        load_dtype = torch.float16
    else:
        load_dtype = torch.float16 if config.get("fp16") else torch.bfloat16

    model_kwargs = {"torch_dtype": load_dtype}
    if _has_cuda():
        model_kwargs["device_map"] = "auto"
    if quant_config:
        model_kwargs["quantization_config"] = quant_config
    print("Loading model for validation (base + adapter)...")
    model = Qwen2VLForConditionalGeneration.from_pretrained(model_path, **model_kwargs)
    if not _has_cuda():
        model = model.to(device)
    if quant_config:
        model = prepare_model_for_kbit_training(model, use_gradient_checkpointing=False)
    model = PeftModel.from_pretrained(model, adapter_dir)
    model.eval()
    processor = AutoProcessor.from_pretrained(
        adapter_dir,
        min_pixels=256 * 28 * 28,
        max_pixels=512 * 28 * 28,
    )
    if processor.tokenizer.pad_token is None:
        processor.tokenizer.pad_token = processor.tokenizer.eos_token
    return model, processor


def run_validation_after_training(adapter_dir: str, config: dict):
    """Run one validation pass after training; use small eval batch to avoid OOM."""
    val_path = DATA_DIR / "val.jsonl"
    if not val_path.exists():
        return None
    model, processor = load_model_for_eval(config, adapter_dir)
    val_ds = VLCodeDataset(str(val_path), processor, config["max_seq_length"])
    eval_batch_size = config.get("per_device_eval_batch_size", 1)
    eval_args = TrainingArguments(
        output_dir=adapter_dir,
        per_device_eval_batch_size=eval_batch_size,
        fp16=config["fp16"],
        bf16=config["bf16"],
        report_to="none",
        remove_unused_columns=False,
    )
    trainer = Trainer(
        model=model,
        args=eval_args,
        eval_dataset=val_ds,
        data_collator=VLDataCollator(pad_token_id=processor.tokenizer.pad_token_id),
    )
    result = trainer.evaluate()
    eval_loss = result.get("eval_loss")
    del model, trainer
    gc.collect()
    cuda_empty_cache()
    return eval_loss


# ═══════════════════════════════════════════════════════════════════════════════
# TRAINING
# ═══════════════════════════════════════════════════════════════════════════════
def train(resume: bool = False):
    method = "qlora"
    config_path = CONFIGS_DIR / f"{method}.json"
    if not config_path.exists():
        raise FileNotFoundError(f"Config not found: {config_path}")

    with open(config_path, "r") as f:
        config = json.load(f)

    output_dir = OUTPUTS_DIR / method
    adapter_dir = output_dir / "final_adapter"
    results_dir = PROJECT_ROOT / "finetuning" / "results"
    metrics_path = results_dir / f"{method}_training_metrics.json"
    val_path = DATA_DIR / "val.jsonl"
    has_val = val_path.exists()
    adapter_done = (adapter_dir / "adapter_config.json").exists()

    # ── Resume: training already complete, run or re-run validation only ──
    if adapter_done:
        existing_metrics = {}
        if metrics_path.exists():
            with open(metrics_path, "r") as f:
                existing_metrics = json.load(f)
        if has_val and existing_metrics.get("final_eval_loss") is None:
            print(f"\n{'='*60}")
            print(f"  RESUME: Training already saved. Running validation only.")
            print(f"{'='*60}\n")
            eval_loss = run_validation_after_training(str(adapter_dir), config)
            existing_metrics["final_eval_loss"] = eval_loss
            results_dir.mkdir(exist_ok=True, parents=True)
            with open(metrics_path, "w") as f:
                json.dump(existing_metrics, f, indent=2)
            print(f"  Validation complete. Metrics saved to {metrics_path}\n")
            return
        print("\n  Training and validation already complete. Exiting.")
        print(f"  Adapter: {adapter_dir}\n")
        return

    print(f"\n{'='*60}")
    print(f"  FINE-TUNING: {method.upper()}")
    print(f"  {config['description']}")
    print(f"{'='*60}\n")

    download_model_if_needed()

    model, processor, param_info = load_model_and_processor(config)
    device = get_device()
    if device.type == "mps":
        config = dict(config)
        config["fp16"] = True
        config["bf16"] = False

    # ── Datasets ──
    print("Loading datasets...")
    train_ds = VLCodeDataset(str(DATA_DIR / "train.jsonl"), processor, config["max_seq_length"])
    val_path = DATA_DIR / "val.jsonl"
    has_val = val_path.exists()
    val_ds = VLCodeDataset(str(val_path), processor, config["max_seq_length"]) if has_val else None
    do_eval = config.get("eval_strategy", "no") != "no"
    if do_eval and not val_ds:
        do_eval = False
    if do_eval:
        print("  Validation during training enabled (may increase VRAM; consider eval_strategy='no' + validate_after_training).")
    elif has_val:
        print("  Validation during training disabled; will run validation once after training (saves VRAM).")
    else:
        print("  No val.jsonl: full training, then run evaluate.py after training.")

    # ── Training arguments ──
    os.makedirs(output_dir, exist_ok=True)
    print(f"Checkpoints will be saved to: {output_dir}")
    training_args_kw = dict(
        output_dir=str(output_dir),
        num_train_epochs=config["num_train_epochs"],
        per_device_train_batch_size=config["per_device_train_batch_size"],
        gradient_accumulation_steps=config["gradient_accumulation_steps"],
        learning_rate=config["learning_rate"],
        warmup_steps=config.get("warmup_steps", 100),
        weight_decay=config["weight_decay"],
        fp16=config["fp16"],
        bf16=config["bf16"],
        gradient_checkpointing=config["gradient_checkpointing"],
        logging_steps=config["logging_steps"],
        save_strategy=config["save_strategy"],
        save_steps=config.get("save_steps", 500),
        eval_strategy=config["eval_strategy"],
        eval_steps=config.get("eval_steps", 500),
        save_total_limit=config["save_total_limit"],
        dataloader_num_workers=config["dataloader_num_workers"],
        seed=config["seed"],
        report_to="none",
        remove_unused_columns=False,
        load_best_model_at_end=False,
        optim="adamw_torch",
    )
    if do_eval:
        training_args_kw["load_best_model_at_end"] = True
        training_args_kw["metric_for_best_model"] = "eval_loss"
        training_args_kw["greater_is_better"] = False
    training_args = TrainingArguments(**training_args_kw)

    timing_callback = StepTimingCallback()

    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=train_ds,
        eval_dataset=val_ds if do_eval else None,
        data_collator=VLDataCollator(pad_token_id=processor.tokenizer.pad_token_id),
        callbacks=[timing_callback],
    )

    # ── Train ──
    t_start = time.time()

    cuda_reset_peak_stats()

    resume_checkpoint = None
    if resume and output_dir.exists():
        checkpoints = [d.name for d in output_dir.iterdir() if d.is_dir() and d.name.startswith("checkpoint-")]
        if checkpoints:
            resume_checkpoint = str(output_dir / sorted(checkpoints, key=lambda x: int(x.split("-")[1]))[-1])
            print(f"  Resuming from checkpoint: {resume_checkpoint}")
            # Patch trainer_state.json so save_steps matches local config
            ts_path = Path(resume_checkpoint) / "trainer_state.json"
            if ts_path.exists():
                with open(ts_path, "r") as f:
                    ts = json.load(f)
                local_save_steps = config.get("save_steps", 500)
                if ts.get("save_steps") != local_save_steps:
                    print(f"  Patching checkpoint save_steps: {ts.get('save_steps')} -> {local_save_steps}")
                    ts["save_steps"] = local_save_steps
                    with open(ts_path, "w") as f:
                        json.dump(ts, f, indent=2)
    if resume_checkpoint is None and resume:
        print("  No checkpoint found; starting from scratch.")

    trainer.train(resume_from_checkpoint=resume_checkpoint if resume_checkpoint else False)

    elapsed = time.time() - t_start
    peak_mem = cuda_max_allocated_gb()

    # ── Save adapter ──
    adapter_dir_str = str(adapter_dir)
    model.save_pretrained(adapter_dir_str)
    processor.save_pretrained(adapter_dir_str)
    print(f"\nAdapter saved to: {adapter_dir_str}")

    last_log = trainer.state.log_history[-1] if trainer.state.log_history else {}

    # ── Clear memory before validation (avoids OOM) ──
    del model, trainer
    gc.collect()
    cuda_empty_cache()

    # ── Run validation once after training ──
    final_eval_loss = None
    if has_val:
        final_eval_loss = run_validation_after_training(adapter_dir_str, config)

    # ── Save training metrics (includes eval_loss when validation ran) ──
    metrics = {
        "method": method,
        "trainable_params": param_info["trainable"],
        "total_params": param_info["total"],
        "trainable_pct": param_info["trainable"] / param_info["total"],
        "peak_vram_gb": round(peak_mem, 2) if peak_mem is not None else None,
        "training_time_hours": round(elapsed / 3600, 3),
        "training_time_seconds": round(elapsed, 1),
        "measured_avg_sec_per_step": timing_callback.summary["measured_avg_sec_per_step"],
        "measured_last_log_sec_per_step": timing_callback.summary["measured_last_log_sec_per_step"],
        "measured_timing_logs": timing_callback.summary["measured_timing_logs"],
        "train_samples": len(train_ds),
        "val_samples": len(val_ds) if val_ds else 0,
        "final_train_loss": last_log.get("train_loss"),
        "final_eval_loss": final_eval_loss if final_eval_loss is not None else last_log.get("eval_loss"),
        "epochs": config["num_train_epochs"],
        "lr": config["learning_rate"],
        "lora_r": config["lora_r"],
        "lora_alpha": config["lora_alpha"],
        "quantized": config.get("quantization") is not None,
    }
    results_dir.mkdir(exist_ok=True, parents=True)
    with open(metrics_path, "w") as f:
        json.dump(metrics, f, indent=2)

    print(f"\n{'='*60}")
    print(f"  TRAINING COMPLETE: {method.upper()}")
    print(f"{'='*60}")
    print(f"  Time:       {elapsed/3600:.2f} hours ({elapsed/60:.1f} min)")
    print(f"  Peak VRAM:  {peak_mem:.2f} GiB")
    print(f"  Trainable:  {param_info['trainable']:,} ({param_info['trainable']/param_info['total']:.2%})")
    print(f"  Adapter:    {adapter_dir_str}")
    print(f"  Metrics:    {metrics_path}\n")


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    parser = argparse.ArgumentParser(description="Fine-tune Qwen2-VL-2B-Instruct with QLoRA")
    parser.add_argument(
        "--resume", action="store_true",
        help="Resume training from last checkpoint",
    )
    args = parser.parse_args()

    train(args.resume)


if __name__ == "__main__":
    main()
