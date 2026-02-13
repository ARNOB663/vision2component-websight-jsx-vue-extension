"""
HTML -> JSX + Vue SFC generation pipeline.

Resumable, saves one row at a time, tracks progress.
Optimized for RTX 3070 Ti (4-bit quantization).

Usage:
    python run_pipeline.py                  # process 5 samples (default)
    python run_pipeline.py --samples 100    # process 100 samples
    python run_pipeline.py --samples all    # process all remaining
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
from typing import Tuple, Dict

import pandas as pd
from tqdm import tqdm

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
    for keyword, category in sorted(IDEA_TO_CATEGORY.items(), key=lambda x: len(x[0]), reverse=True):
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
# NODE.JS VALIDATORS
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
        return False, f"JSX validator error: {out[-200:] if out else p.stderr.decode('utf-8', errors='ignore')[-200:]}"


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
        return False, f"Vue validator error: {out[-200:] if out else p.stderr.decode('utf-8', errors='ignore')[-200:]}"


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
# LLM GENERATION
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


def llm_generate(prompt: str, max_new_tokens: int = 4096) -> str:
    """Generate code using Qwen chat template."""
    messages = [{"role": "user", "content": prompt}]
    text = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
    inputs = tokenizer(text, return_tensors="pt").to(model.device)
    with torch.no_grad():
        out = model.generate(
            **inputs,
            max_new_tokens=max_new_tokens,
            do_sample=True,
            temperature=0.2,
            top_p=0.95,
            pad_token_id=tokenizer.eos_token_id,
        )
    new_tokens = out[0][inputs["input_ids"].shape[1]:]
    txt = tokenizer.decode(new_tokens, skip_special_tokens=True)
    # Free GPU memory
    del inputs, out, new_tokens
    torch.cuda.empty_cache()
    return strip_code_fences(txt)


# ═══════════════════════════════════════════════════════════════════════════════
# PIPELINE (one sample)
# ═══════════════════════════════════════════════════════════════════════════════
def gen_validate(html: str, seed: int, idea: str = "", repair_tries: int = 2, category: str = DEFAULT_CATEGORY) -> Dict[str, str]:
    """Generate and validate JSX + Vue for one HTML sample."""
    html2 = sanitize_html_assets(html, seed, category=category)

    # JSX
    jsx = llm_generate(p_html_to_jsx(html2, idea))
    jsx = enforce_topic_images_in_code(jsx, seed, category=category)
    ok, err = validate_jsx(jsx)
    t = 0
    while (not ok) and t < repair_tries:
        t += 1
        jsx = llm_generate(p_fix_jsx(jsx, err))
        jsx = enforce_topic_images_in_code(jsx, seed, category=category)
        ok, err = validate_jsx(jsx)
    jsx_ok, jsx_err = ok, err

    # Vue
    vue = llm_generate(p_html_to_vue(html2, idea))
    vue = enforce_topic_images_in_code(vue, seed, category=category)
    ok, err = validate_vue(vue)
    t = 0
    while (not ok) and t < repair_tries:
        t += 1
        vue = llm_generate(p_fix_vue(vue, err))
        vue = enforce_topic_images_in_code(vue, seed, category=category)
        ok, err = validate_vue(vue)
    vue_ok, vue_err = ok, err

    return {
        "html_sanitized": html2,
        "jsx_code": jsx,
        "vue_sfc": vue,
        "jsx_valid": jsx_ok,
        "vue_valid": vue_ok,
        "jsx_error": jsx_err,
        "vue_error": vue_err,
    }


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    parser = argparse.ArgumentParser(description="HTML -> JSX + Vue pipeline")
    parser.add_argument("--samples", default="5",
                        help="Number of samples to process this run, or 'all' (default: 5)")
    parser.add_argument("--reset", action="store_true",
                        help="Reset progress and start from scratch")
    args = parser.parse_args()

    sample_size = None if args.samples.lower() == "all" else int(args.samples)

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
    print(f"Dataset: {total} rows, columns: {list(df.columns)}")
    assert HTML_COL in df.columns, f"Missing '{HTML_COL}' column"

    # --- Read progress ---
    start_idx = 0
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, "r") as f:
            start_idx = int(f.read().strip())

    end_idx = min(start_idx + sample_size, total) if sample_size else total
    todo = end_idx - start_idx

    if todo <= 0:
        print(f"\nAll done! {start_idx}/{total} rows already processed.")
        print("Use --reset to start over.")
        return

    print(f"\nProgress: {start_idx}/{total} done")
    print(f"This run: rows {start_idx} to {end_idx - 1} ({todo} rows)")

    # --- Estimate time ---
    eta_min = todo * 36 / 60
    eta_hr = eta_min / 60
    if eta_hr >= 1:
        print(f"Estimated time: ~{eta_hr:.1f} hours")
    else:
        print(f"Estimated time: ~{eta_min:.0f} minutes")

    # --- Load model ---
    print(f"\nLoading {MODEL_NAME} in 4-bit...")
    global torch, tokenizer, model
    import torch
    from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig

    gc.collect()
    torch.cuda.empty_cache()

    free, total_mem = torch.cuda.mem_get_info()
    print(f"GPU: {free / 1024**3:.1f} GiB free / {total_mem / 1024**3:.1f} GiB total")

    bnb = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_use_double_quant=True,
        bnb_4bit_compute_dtype=torch.float16,
    )

    tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME, use_fast=True)
    model = AutoModelForCausalLM.from_pretrained(
        MODEL_NAME,
        quantization_config=bnb,
        device_map="cuda:0",
        torch_dtype=torch.float16,
    )
    print("Model loaded.\n")

    # --- Open output CSV ---
    os.makedirs(os.path.dirname(OUT_CSV) or ".", exist_ok=True)
    write_header = (start_idx == 0) or not os.path.exists(OUT_CSV)
    f_out = open(OUT_CSV, "a" if not write_header else "w", newline="", encoding="utf-8")
    writer = csv.DictWriter(f_out, fieldnames=OUT_COLS)
    if write_header:
        writer.writeheader()

    # --- Process ---
    jsx_ok_count = 0
    vue_ok_count = 0
    t_start = time.time()

    for idx in tqdm(range(start_idx, end_idx), desc="Generating", unit="row"):
        row = df.iloc[idx]
        html = "" if pd.isna(row[HTML_COL]) else str(row[HTML_COL])
        seed = int(row["id"]) if ("id" in df.columns and pd.notna(row["id"])) else idx
        idea = "" if pd.isna(row.get("llm_generated_idea")) else str(row["llm_generated_idea"])
        category = extract_category(idea)

        r = gen_validate(html, seed, idea=idea, repair_tries=2, category=category)

        # Build row
        out_row = {}
        for c in OUT_COLS:
            if c in r:
                out_row[c] = r[c]
            elif c in row.index:
                out_row[c] = "" if pd.isna(row[c]) else row[c]
            else:
                out_row[c] = ""

        # Write immediately
        writer.writerow(out_row)
        f_out.flush()

        # Update progress
        with open(PROGRESS_FILE, "w") as pf:
            pf.write(str(idx + 1))

        if r["jsx_valid"]:
            jsx_ok_count += 1
        if r["vue_valid"]:
            vue_ok_count += 1

        # Periodic GC every 50 rows
        if (idx - start_idx + 1) % 50 == 0:
            gc.collect()
            torch.cuda.empty_cache()

    f_out.close()
    elapsed = time.time() - t_start

    # --- Summary ---
    print(f"\n{'='*60}")
    print(f"DONE - Processed {todo} rows in {elapsed/60:.1f} min")
    print(f"{'='*60}")
    print(f"  Speed    : {elapsed/todo:.1f}s per row")
    print(f"  JSX valid: {jsx_ok_count}/{todo} ({jsx_ok_count/todo:.1%})")
    print(f"  Vue valid: {vue_ok_count}/{todo} ({vue_ok_count/todo:.1%})")
    print(f"  Output   : {OUT_CSV}")
    print(f"  Progress : {start_idx + todo}/{total} total")

    remaining = total - (start_idx + todo)
    if remaining > 0:
        next_eta = remaining * (elapsed / todo) / 3600
        print(f"  Remaining: {remaining} rows (~{next_eta:.1f} hours)")
        print(f"\n  Run again: python run_pipeline.py --samples {min(remaining, 1000)}")
    else:
        print(f"\n  All {total} rows complete!")


if __name__ == "__main__":
    main()
