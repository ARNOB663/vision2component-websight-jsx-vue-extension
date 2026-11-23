#!/usr/bin/env bash
# Trimmed GPU queue for the Wednesday deadline. Waits for the running qlora_3b
# WebSight evaluation to finish, re-validates its first batches (validators were
# broken before node_modules was reinstalled), then runs the controlled latency
# test and Design2Code on a random 100 pages.
#
# Usage:  bash finetuning/gpu_queue2.sh      (logs in finetuning/logs/)
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

log "queue2: waiting for the qlora_3b evaluation to finish"
until [ -f results/qlora_3b_eval_results.json ]; do sleep 60; done
sleep 60
py -3.10 revalidate.py --run qlora_3b > logs/revalidate_qlora_3b.log 2>&1
log "revalidated qlora_3b (exit $?)"

# Controlled latency: same samples and batch size for every model (R3.10).
# The zero-shot 3B does not fit in 8 GB in bf16 and is far slower, so 24 samples.
for m in base qlora qlora_3b; do
    run "latency_$m" --method "$m" --tag latency --max-samples 48 --batch-size 8
done
run latency_qwen2.5 --method qwen2.5 --tag latency --max-samples 24 --batch-size 8

# Design2Code real-world pages (R1.2 / R3.8): a random 100 of the 484 pages.
D2C="--tag design2code --test-file data/design2code_test.jsonl --max-samples 300"
run d2c_qlora    --method qlora    $D2C --batch-size 40
run d2c_base     --method base     $D2C --batch-size 20
run d2c_qlora_3b --method qlora_3b $D2C --batch-size 24

log "queue2 finished"
