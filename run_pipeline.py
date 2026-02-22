"""
HTML -> JSX + Vue SFC generation pipeline.

Resumable, saves one row at a time, tracks progress.
Optimized for RTX 3070 Ti (4-bit quantization).

Usage:
    python run_pipeline.py                  # process 5 samples (default, batch size 4)
    python run_pipeline.py --samples 100    # process 100 samples
    python run_pipeline.py --samples all    # process all remaining
    python run_pipeline.py --batch-size 8   # larger batches
    python run_pipeline.py --reset          # reset progress and start over
"""

import os
import re
import gc
import csv
import json
import time
import argparse
import subprocess
import threading
from typing import Tuple, Dict, List, Optional

import pandas as pd
from tqdm import tqdm
# torch & transformers are imported lazily inside main() so the script
# can be parsed even when these packages live in a specific venv.

# ═══════════════════════════════════════════════════════════════════════════════
# CONFIG
# ═══════════════════════════════════════════════════════════════════════════════
IN_CSV = "data/websight_50k/websight_50k.csv"
OUT_CSV = "data/websight_50k/websight_50k_gen.csv"
PROGRESS_FILE = "data/websight_50k/progress.txt"
HTML_COL = "text"

PICSUM_HERO_W, PICSUM_HERO_H = 1600, 900
PICSUM_LOGO_W, PICSUM_LOGO_H = 300, 300
PICSUM_IMG_W, PICSUM_IMG_H = 900, 600

MODEL_NAME = "Qwen/Qwen2.5-Coder-7B-Instruct"
MAX_INPUT_CHARS = 8000  # Truncate excessively long HTML inputs

OUT_COLS = [
    "id", "image_path", "text", "llm_generated_idea",
    "jsx_code", "vue_sfc", "jsx_valid", "vue_valid", "jsx_error", "vue_error",
]

# ═══════════════════════════════════════════════════════════════════════════════
# TOPIC-BASED PLACEHOLDER IMAGES (static.photos)
# ═══════════════════════════════════════════════════════════════════════════════
STATIC_PHOTOS_CATEGORIES = [
    "travel", "food", "nature", "technology", "business", "architecture",
    "animals", "fashion", "sports", "music", "health", "education",
    "people", "city", "beach", "mountain", "ocean", "cars", "art",
    "abstract", "office", "real-estate", "restaurant", "gaming",
    "fitness", "wedding", "interior", "garden", "space", "medical",
]

IDEA_TO_CATEGORY = {
    "travel": "travel",    "agency": "travel",     "tourism": "travel",
    "hotel": "travel",     "vacation": "travel",    "flight": "travel",
    "food": "food",        "restaurant": "restaurant", "cafe": "food",
    "recipe": "food",      "cooking": "food",       "bakery": "food",
    "nature": "nature",    "garden": "garden",      "outdoor": "nature",
    "plant": "garden",     "flower": "garden",      "forest": "nature",
    "tech": "technology",  "technology": "technology", "software": "technology", "app": "technology",
    "startup": "technology", "saas": "technology",  "digital": "technology",
    "business": "business", "company": "business",  "corporate": "business",
    "consulting": "business", "finance": "business", "accounting": "business",
    "real estate": "real-estate", "property": "real-estate", "realty": "real-estate",
    "fashion": "fashion",  "clothing": "fashion",   "e-commerce": "fashion",
    "boutique": "fashion", "apparel": "fashion",    "jewelry": "fashion",
    "sport": "sports",     "fitness": "fitness",    "gym": "fitness",
    "yoga": "fitness",     "athletic": "sports",
    "music": "music",      "band": "music",         "concert": "music",
    "podcast": "music",    "audio": "music",
    "health": "health",    "medical": "medical",    "hospital": "medical",
    "wellness": "health",  "pharmacy": "medical",   "dental": "medical",
    "education": "education", "school": "education", "university": "education",
    "learning": "education", "academy": "education", "course": "education",
    "nonprofit": "people", "charity": "people",     "community": "people",
    "volunteer": "people", "foundation": "people",
    "architecture": "architecture", "building": "architecture",
    "construction": "architecture",
    "animal": "animals",   "pet": "animals",        "wildlife": "animals",
    "dog": "animals",      "cat": "animals",        "veterinary": "animals",
    "car": "cars",         "auto": "cars",          "vehicle": "cars",
    "automotive": "cars",  "motor": "cars",
    "art": "art",          "design": "art",         "creative": "art",
    "gallery": "art",      "photography": "art",    "portfolio": "art",
    "wedding": "wedding",  "event": "wedding",      "celebration": "wedding",
    "beach": "beach",      "ocean": "ocean",        "sea": "ocean",
    "marine": "ocean",     "surf": "beach",
    "mountain": "mountain", "hiking": "mountain",   "adventure": "mountain",
    "city": "city",        "urban": "city",         "downtown": "city",
    "office": "office",    "workspace": "office",   "coworking": "office",
    "space": "space",      "astronomy": "space",    "science": "space",
    "interior": "interior", "home": "interior",     "decor": "interior",
    "furniture": "interior", "renovation": "interior",
    "gaming": "gaming",    "game": "gaming",        "esport": "gaming",
}

DEFAULT_CATEGORY = "nature"


def extract_category(idea: str) -> str:
    """Extract a static.photos category from the llm_generated_idea text."""
    if not idea or str(idea).strip() == "" or str(idea).strip() == "nan":
        return DEFAULT_CATEGORY
    idea_lower = idea.lower()
    # Sort keywords longest-first so "esport" matches before "sport",
    # "interior" before "design", etc.
    sorted_keywords = sorted(IDEA_TO_CATEGORY.items(), key=lambda x: len(x[0]), reverse=True)
    for keyword, category in sorted_keywords:
        if keyword in idea_lower:
            return category
    return DEFAULT_CATEGORY


def topic_image(category: str, seed: int, w: int, h: int) -> str:
    """Generate a static.photos URL for a topic-relevant placeholder image."""
    img_id = (seed % 200) + 1
    return f"https://static.photos/{category}/{w}x{h}/{img_id}.webp"


# ═══════════════════════════════════════════════════════════════════════════════
# IMAGE SANITIZATION
# ═══════════════════════════════════════════════════════════════════════════════
def picsum(seed: int, w: int, h: int) -> str:
    """Legacy fallback - generates a random Picsum URL."""
    return f"https://picsum.photos/seed/{seed}/{w}/{h}"


def sanitize_html_assets(html: str, seed: int, category: str = DEFAULT_CATEGORY) -> str:
    s = html
    hero_url = topic_image(category, seed, PICSUM_HERO_W, PICSUM_HERO_H)
    img_url = topic_image(category, seed, PICSUM_IMG_W, PICSUM_IMG_H)
    s = re.sub(
        r"background-image:\s*url\(['\"]?[^'\")]+['\"]?\)",
        lambda m: f"background-image: url('{hero_url}')",
        s, flags=re.IGNORECASE,
    )
    s = re.sub(r"https?://source\.unsplash\.com/[^\s\"')]+", img_url, s)
    s = re.sub(r"https?://images\.unsplash\.com/[^\s\"')]+", img_url, s)

    img_counter = [0]  # mutable counter for unique images

    def repl_img(tag):
        full = tag.group(0)
        lower = full.lower()
        is_logo = "logo" in lower
        w, h = (PICSUM_LOGO_W, PICSUM_LOGO_H) if is_logo else (PICSUM_IMG_W, PICSUM_IMG_H)
        img_counter[0] += 1
        url = topic_image(category, seed + img_counter[0], w, h)
        full = re.sub(r'src\s*=\s*["\'][^"\']*["\']', f'src="{url}"', full, flags=re.IGNORECASE)
        if re.search(r"\salt\s*=", full, flags=re.IGNORECASE) is None:
            full = full[:-1] + ' alt="Image">'
        return full

    s = re.sub(r"<img\b[^>]*\bsrc\s*=\s*['\"][^'\"]*['\"][^>]*>", repl_img, s, flags=re.IGNORECASE)
    return s


def enforce_topic_images_in_code(code: str, seed: int, category: str = DEFAULT_CATEGORY) -> str:
    """Replace any non-topic image URLs in LLM output with topic-relevant ones."""
    s = code
    img_url = topic_image(category, seed, PICSUM_IMG_W, PICSUM_IMG_H)
    s = re.sub(r"https?://source\.unsplash\.com/[^\s\"')]+", img_url, s)
    s = re.sub(r"https?://images\.unsplash\.com/[^\s\"')]+", img_url, s)

    img_counter = [0]

    def repl_src(m):
        url = m.group(1)
        # Keep static.photos and picsum URLs as-is
        if "static.photos" in url or "picsum.photos" in url:
            return m.group(0)
        img_counter[0] += 1
        return f'src="{topic_image(category, seed + img_counter[0], PICSUM_IMG_W, PICSUM_IMG_H)}"'

    s = re.sub(r'src\s*=\s*"([^"]+)"', repl_src, s)
    s = re.sub(r"src\s*=\s*'([^']+)'", lambda m: repl_src(m).replace('"', "'"), s)
    return s


# ═══════════════════════════════════════════════════════════════════════════════
# PERSISTENT NODE.JS VALIDATOR
# ═══════════════════════════════════════════════════════════════════════════════
class NodeValidator:
    def __init__(self):
        self.process = None
        self.start_process()

    def start_process(self):
        if self.process and self.process.poll() is None:
            return  # Already running
        # Kill zombie process if any
        if self.process:
            try:
                self.process.kill()
            except Exception:
                pass
            self.process = None
        
        node_script = r"""
const { parse: parseVue } = require("@vue/compiler-sfc");
const parser = require("@babel/parser");
const readline = require('readline');

const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
    terminal: false 
});

rl.on('line', (line) => {
  if (!line) return;
  try {
    const msg = JSON.parse(line);
    let result = { ok: true };
    
    if (msg.type === 'jsx') {
      try {
        parser.parse(msg.code, { sourceType: "module", plugins: ["jsx", "typescript"] });
      } catch (e) {
        result = { ok: false, error: String(e.message || e) };
      }
    } else if (msg.type === 'vue') {
      try {
        const res = parseVue(msg.code, { filename: "Component.vue" });
        const errs = res.errors || [];
        if (errs.length) {
            result = { ok: false, error: String(errs[0]) };
        }
      } catch (e) {
        result = { ok: false, error: String(e.message || e) };
      }
    } else {
        result = { ok: false, error: "Unknown type" };
    }
    process.stdout.write(JSON.stringify(result) + "\n");
  } catch (e) {
    process.stdout.write(JSON.stringify({ ok: false, error: "JSON parse error" }) + "\n");
  }
});
"""
        self.process = subprocess.Popen(
            ["node", "-e", node_script],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            bufsize=1  # Line buffered
        )

    def validate(self, type_: str, code: str) -> Tuple[bool, str]:
        if not self.process or self.process.poll() is not None:
            self.start_process()
        
        try:
            # Send request
            payload = json.dumps({"type": type_, "code": code})
            self.process.stdin.write(payload + "\n")
            self.process.stdin.flush()
            
            # Read response
            response_line = self.process.stdout.readline()
            if not response_line:
                return False, "Validator process crashed or returned empty response"
            
            result = json.loads(response_line)
            return result.get("ok", False), result.get("error", "")
            
        except Exception as e:
            # Restart on failure
            if self.process:
                self.process.kill()
            self.process = None
            return False, f"Validator RPC error: {str(e)}"

    def close(self):
        if self.process:
            self.process.stdin.close()
            self.process.terminate()
            self.process.wait()

# Global validator instance
validator = None


# ═══════════════════════════════════════════════════════════════════════════════
# PROMPTS
# ═══════════════════════════════════════════════════════════════════════════════
def p_html_to_jsx(html: str, idea: str = "") -> str:
    design = ""
    if idea and str(idea).strip():
        design = f"""
Design context (use to guide layout and placeholder images):
{str(idea).strip()}
"""
    return f"""You are a strict frontend compiler.
Convert the given HTML into a single React component.
{design}Rules:
- Output ONLY code.
- Export a named component: GeneratedComponent
- Preserve Tailwind classes.
- Use className (not class).
- Convert inline style strings to JSX objects.
- Do NOT include <html>, <head>, <body>, or external <link> tags.
- If there are <img> tags, keep the src URLs as provided (they are topic-relevant placeholders).
- Ensure valid JSX.

HTML:
```html
{html}
```""".strip()


def p_html_to_vue(html: str, idea: str = "") -> str:
    design = ""
    if idea and str(idea).strip():
        design = f"""
Design context (use to guide layout and placeholder images):
{str(idea).strip()}
"""
    return f"""You are a strict frontend compiler.
Convert the given HTML into a Vue 3 Single File Component (SFC).
{design}Rules:
- Output ONLY code.
- Must be valid .vue SFC with <template> and <script setup>.
- Preserve Tailwind classes.
- Do NOT include <html>, <head>, <body>, or external <link> tags.
- If there are <img> tags, keep the src URLs as provided (they are topic-relevant placeholders).
- Ensure valid Vue SFC.

HTML:
```html
{html}
```""".strip()


def p_fix_jsx(bad: str, err: str) -> str:
    return f"""Fix the following React JSX so it parses with Babel.

Rules:
- Output ONLY corrected code.
- Keep component name GeneratedComponent.
- Keep Tailwind classes.
- No <html>/<head>/<body>/<link>.
- Do not introduce Unsplash; keep Picsum if images exist.

Babel error:
{err}

Code:
{bad}""".strip()


def p_fix_vue(bad: str, err: str) -> str:
    return f"""Fix the following Vue SFC so it parses with @vue/compiler-sfc.

Rules:
- Output ONLY corrected code.
- Must contain <template> and <script setup>.
- No <html>/<head>/<body>/<link> in template.
- Do not introduce Unsplash; keep Picsum if images exist.

Compiler error:
{err}

Code:
{bad}""".strip()


# ═══════════════════════════════════════════════════════════════════════════════
# BATCHED LLM GENERATION
# ═══════════════════════════════════════════════════════════════════════════════
def strip_code_fences(text: str) -> str:
    """Remove markdown code fences (```lang ... ```) from LLM output."""
    s = text.strip()
    m = re.search(r'```(?:\w+)?\s*\n(.*?)```', s, re.DOTALL)
    if m:
        return m.group(1).strip()
    if s.startswith('```'):
        s = re.sub(r'^```\w*\n?', '', s)
        s = re.sub(r'\n?```$', '', s)
        return s.strip()
    return s


def llm_generate_batch(prompts: List[str], max_new_tokens: int = 2048) -> List[str]:
    """Generate code for a batch of prompts using Qwen (greedy, batched)."""
    if not prompts:
        return []
        
    messages_batch = [[{"role": "user", "content": p}] for p in prompts]
    texts = [tokenizer.apply_chat_template(m, tokenize=False, add_generation_prompt=True) for m in messages_batch]
    
    # Padding is essential for batching (padding_side already set on tokenizer)
    inputs = tokenizer(texts, return_tensors="pt", padding=True).to(model.device)
    
    with torch.no_grad():
        out = model.generate(
            **inputs,
            max_new_tokens=max_new_tokens,
            do_sample=False,  # Greedy decoding — faster & deterministic
            pad_token_id=tokenizer.eos_token_id,
        )
    
    # Decode outputs
    results = []
    for i, seq in enumerate(out):
        new_tokens = seq[inputs["input_ids"].shape[1]:]  # all seqs padded to same length
        txt = tokenizer.decode(new_tokens, skip_special_tokens=True)
        results.append(strip_code_fences(txt))
        
    # Cleanup — free GPU memory after every generation call
    del inputs, out
    gc.collect()
    torch.cuda.empty_cache()
    
    return results


# ═══════════════════════════════════════════════════════════════════════════════
# PIPELINE
# ═══════════════════════════════════════════════════════════════════════════════
def process_batch(rows: pd.DataFrame, batch_indices: List[int], repair_tries: int = 2, max_tokens: int = 2048) -> List[Dict]:
    """Process a batch of rows to generate JSX and Vue."""
    
    results = []
    for _ in range(len(rows)):
        results.append({
            "jsx_code": "", "vue_sfc": "",
            "jsx_valid": False, "vue_valid": False,
            "jsx_error": "", "vue_error": ""
        })
        
    # Pre-process inputs
    htmls = []
    jsxs = [""] * len(rows)
    vues = [""] * len(rows)
    seeds = []
    categories = []
    
    for i, (_, row) in enumerate(rows.iterrows()):
        seed = int(row["id"]) if ("id" in rows.columns and pd.notna(row["id"])) else batch_indices[i]
        idea = "" if pd.isna(row.get("llm_generated_idea")) else str(row["llm_generated_idea"])
        cat = extract_category(idea)
        
        raw_html = "" if pd.isna(row[HTML_COL]) else str(row[HTML_COL])
        # Truncate excessively long HTML to avoid slow tokenization
        if len(raw_html) > MAX_INPUT_CHARS:
            raw_html = raw_html[:MAX_INPUT_CHARS]
        sanitized_html = sanitize_html_assets(raw_html, seed, category=cat)
        
        htmls.append(sanitized_html)
        seeds.append(seed)
        categories.append(cat)
        
        # Save sanitized html to result immediately
        results[i]["html_sanitized"] = sanitized_html

    # --- Generate JSX (First Pass) ---
    ideas = [str(rows.iloc[i].get("llm_generated_idea", "")) for i in range(len(htmls))]
    jsx_prompts = [p_html_to_jsx(h, ideas[i]) for i, h in enumerate(htmls)]
    jsx_outputs = llm_generate_batch(jsx_prompts, max_new_tokens=max_tokens)
    
    for i, code in enumerate(jsx_outputs):
        code = enforce_topic_images_in_code(code, seeds[i], categories[i])
        jsxs[i] = code
        results[i]["jsx_code"] = code

    # --- Start Vue generation while we validate JSX (async) ---
    vue_prompts = [p_html_to_vue(h, ideas[i]) for i, h in enumerate(htmls)]
    vue_results_holder = [None]  # mutable container for thread result
    
    def generate_vue_async():
        vue_results_holder[0] = llm_generate_batch(vue_prompts, max_new_tokens=max_tokens)
    
    vue_thread = threading.Thread(target=generate_vue_async)
    vue_thread.start()
    
    # --- Validate JSX (runs on CPU while GPU generates Vue) ---
    jsx_retry_indices = []
    jsx_retry_prompts = []
    
    for i in range(len(jsxs)):
        ok, err = validator.validate("jsx", jsxs[i])
        results[i]["jsx_valid"] = ok
        results[i]["jsx_error"] = err
        if not ok:
            jsx_retry_indices.append(i)
            jsx_retry_prompts.append(p_fix_jsx(jsxs[i], err))
    
    # --- Wait for Vue generation to finish ---
    vue_thread.join()
    vue_outputs = vue_results_holder[0]
    
    for i, code in enumerate(vue_outputs):
        code = enforce_topic_images_in_code(code, seeds[i], categories[i])
        vues[i] = code
        results[i]["vue_sfc"] = code
    
    # --- Retry JSX failures ---
    for _ in range(repair_tries):
        if not jsx_retry_indices:
            break
        fixed = llm_generate_batch(jsx_retry_prompts, max_new_tokens=max_tokens)
        new_indices, new_prompts = [], []
        for j, code in enumerate(fixed):
            idx = jsx_retry_indices[j]
            code = enforce_topic_images_in_code(code, seeds[idx], categories[idx])
            ok, err = validator.validate("jsx", code)
            results[idx]["jsx_code"] = code
            results[idx]["jsx_valid"] = ok
            results[idx]["jsx_error"] = err
            if not ok:
                new_indices.append(idx)
                new_prompts.append(p_fix_jsx(code, err))
        jsx_retry_indices, jsx_retry_prompts = new_indices, new_prompts

    # --- Validate Vue ---
    vue_retry_indices = []
    vue_retry_prompts = []
    
    for i in range(len(vues)):
        ok, err = validator.validate("vue", vues[i])
        results[i]["vue_valid"] = ok
        results[i]["vue_error"] = err
        if not ok:
            vue_retry_indices.append(i)
            vue_retry_prompts.append(p_fix_vue(vues[i], err))
    
    # --- Retry Vue failures ---
    for _ in range(repair_tries):
        if not vue_retry_indices:
            break
        fixed = llm_generate_batch(vue_retry_prompts, max_new_tokens=max_tokens)
        new_indices, new_prompts = [], []
        for j, code in enumerate(fixed):
            idx = vue_retry_indices[j]
            code = enforce_topic_images_in_code(code, seeds[idx], categories[idx])
            ok, err = validator.validate("vue", code)
            results[idx]["vue_sfc"] = code
            results[idx]["vue_valid"] = ok
            results[idx]["vue_error"] = err
            if not ok:
                new_indices.append(idx)
                new_prompts.append(p_fix_vue(code, err))
        vue_retry_indices, vue_retry_prompts = new_indices, new_prompts

    return results


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    parser = argparse.ArgumentParser(description="HTML -> JSX + Vue pipeline (Optimized)")
    parser.add_argument("--samples", default="5", help="Number of samples to process, or 'all'")
    parser.add_argument("--batch-size", type=int, default=4, help="Batch size for LLM inference (default: 4)")
    parser.add_argument("--max-tokens", type=int, default=2048, help="Max new tokens per generation (default: 2048)")
    parser.add_argument("--reset", action="store_true", help="Reset progress")
    args = parser.parse_args()

    # Initialize Validator
    global validator
    validator = NodeValidator()

    sample_size = None if args.samples.lower() == "all" else int(args.samples)
    BATCH_SIZE = args.batch_size

    # --- Reset if requested ---
    if args.reset:
        for f in [OUT_CSV, PROGRESS_FILE]:
            if os.path.exists(f):
                os.remove(f)
                print(f"Deleted {f}")
        print("Progress reset.\n")

    # --- Load input ---
    print(f"Loading: {IN_CSV}")
    df = pd.read_csv(IN_CSV)
    total = len(df)
    assert HTML_COL in df.columns, f"Missing '{HTML_COL}' column"

    # --- Read progress ---
    start_idx = 0
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, "r") as f:
            start_idx = int(f.read().strip())

    end_idx = min(start_idx + sample_size, total) if sample_size else total
    todo = end_idx - start_idx

    if todo <= 0:
        print(f"\nAll done! {start_idx}/{total} rows processed.")
        validator.close()
        return

    print(f"\nProgress: {start_idx}/{total} done")
    print(f"Processing: {todo} rows (Batch size: {BATCH_SIZE})")

    # --- Load model ---
    print(f"\nLoading {MODEL_NAME} in 4-bit...")
    global torch, tokenizer, model
    import torch
    from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig

    gc.collect()
    torch.cuda.empty_cache()

    bnb = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_use_double_quant=True,
        bnb_4bit_compute_dtype=torch.float16,
    )

    tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME, use_fast=True)
    tokenizer.padding_side = "left"  # Important for batched generation
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
    
    model = AutoModelForCausalLM.from_pretrained(
        MODEL_NAME,
        quantization_config=bnb,
        device_map="cuda:0",
        torch_dtype=torch.float16,
    )
    
    # Ensure generation config matches our manual greedy decoding to silence warnings
    model.generation_config.do_sample = False
    model.generation_config.temperature = None
    model.generation_config.top_p = None
    model.generation_config.top_k = None
    print("Model loaded.\n")

    # --- Open output CSV ---
    os.makedirs(os.path.dirname(OUT_CSV) or ".", exist_ok=True)
    write_header = (start_idx == 0) or not os.path.exists(OUT_CSV)
    f_out = open(OUT_CSV, "a" if not write_header else "w", newline="", encoding="utf-8")
    writer = csv.DictWriter(f_out, fieldnames=OUT_COLS)
    if write_header:
        writer.writeheader()

    # --- Process Loop ---
    jsx_ok_count = 0
    vue_ok_count = 0
    t_start = time.time()

    pbar = tqdm(total=todo, desc="Generating", unit="row")
    
    current_idx = start_idx
    while current_idx < end_idx:
        next_idx = min(current_idx + BATCH_SIZE, end_idx)
        batch_rows = df.iloc[current_idx:next_idx]
        batch_indices = list(range(current_idx, next_idx))
        
        try:
            results = process_batch(batch_rows, batch_indices, max_tokens=args.max_tokens)
            
            for i, res in enumerate(results):
                # Build row
                out_row = {}
                
                # Recover original row context
                orig_row = batch_rows.iloc[i]
                
                for c in OUT_COLS:
                    if c in res:
                        out_row[c] = res[c]
                    elif c in orig_row.index:
                        out_row[c] = "" if pd.isna(orig_row[c]) else orig_row[c]
                    else:
                        out_row[c] = ""
                
                writer.writerow(out_row)
                
                if res["jsx_valid"]: jsx_ok_count += 1
                if res["vue_valid"]: vue_ok_count += 1
                
            f_out.flush()
            
            # Update progress file
            with open(PROGRESS_FILE, "w") as pf:
                pf.write(str(next_idx))
                
            pbar.update(next_idx - current_idx)
            current_idx = next_idx
            
            # GC after every batch to prevent VRAM fragmentation
            gc.collect()
            torch.cuda.synchronize()
            torch.cuda.empty_cache()
                
        except Exception as e:
            print(f"\nError in batch {current_idx}-{next_idx}: {e}")
            import traceback
            traceback.print_exc()
            break

    pbar.close()
    f_out.close()
    validator.close()
    
    elapsed = time.time() - t_start
    print(f"\n{'='*60}")
    print(f"DONE - Processed {todo} rows in {elapsed/60:.1f} min")
    print(f"  Speed    : {elapsed/todo:.1f}s per row")
    print(f"  JSX Valid: {jsx_ok_count}/{todo} ({jsx_ok_count/todo:.1%})")
    print(f"  Vue Valid: {vue_ok_count}/{todo} ({vue_ok_count/todo:.1%})")

if __name__ == "__main__":
    main()
