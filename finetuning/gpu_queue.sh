#!/usr/bin/env bash
# GPU jobs that follow the Qwen2.5-VL-3B QLoRA training, run one after another.
# Waits until train.py has saved the final 3B adapter, so it can be started while
# training is still running.
#
# Usage:  bash finetuning/gpu_queue.sh      (logs in finetuning/logs/)
cd "$(dirname "$0")" || exit 1
mkdir -p logs
export PYTHONUNBUFFERED=1
STATUS=logs/gpu_queue_status.log

log() { echo "$(date '+%a %H:%M:%S')  $*" | tee -a "$STATUS"; }

run() {  # run <name> <args...>
    local name=$1; shift
    log "START $name"
    py -3.10 evaluate.py "$@" > "logs/$name.log" 2>&1
    log "END   $name (exit $?)"
}

log "waiting for 3B training to finish"
until [ -f outputs/qlora_3b/final_adapter/adapter_config.json ]; do sleep 60; done
log "training finished"

# 1. Fine-tuned 3B on the WebSight test set (R1.3 / R3.4)
run eval_qlora_3b --method qlora_3b --batch-size 24

# 2. Controlled latency: same 48 samples, same batch size for every model (R3.10)
for m in base qlora qlora_3b qwen2.5; do
    run "latency_$m" --method "$m" --tag latency --max-samples 48 --batch-size 8
done

# 3. Design2Code real-world pages (R1.2 / R3.8): a random 200 of the 484 pages
#    (600 samples); zero-shot 3B on 25 pages, as it does not fit in 8 GB in bf16.
#    Extend later with a larger --max-samples plus --resume-from-autosave.
D2C="--tag design2code --test-file data/design2code_test.jsonl"
run d2c_qlora    --method qlora    $D2C --batch-size 40 --max-samples 600
run d2c_base     --method base     $D2C --batch-size 20 --max-samples 600
run d2c_qlora_3b --method qlora_3b $D2C --batch-size 24 --max-samples 600
run d2c_qwen2.5  --method qwen2.5  $D2C --batch-size 20 --max-samples 75

log "queue finished"
