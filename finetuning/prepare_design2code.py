"""Build a Design2Code test set in the same format as data/test.jsonl (reviewers R1.2 / R3.8).

Design2Code (Si et al., NAACL 2025) has 484 real-world web pages with full-page
screenshots. The models were trained on single-screen 16:9 WebSight screenshots,
so each page is reduced to its first screen: the top 16:9 crop (1280x720 for a
1280-wide page; the one shorter page is padded with white). The crop is
  - downscaled to 640x360 as model input (as finetuning/images_small), and
  - kept at full size as the reference for visual scoring (as the WebSight originals).

Every page gets the three task prompts used in data/test.jsonl. The HTML task
keeps the page's real HTML as reference; JSX / Vue have no reference code and
are scored visually only. Pages are written in a fixed random order, so the
first N pages (evaluate.py --max-samples 3N) are a random sample.

Usage:  py -3.10 prepare_design2code.py
"""
import json
import random
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent
RAW = ROOT.parent / "data" / "design2code_raw"
OUT = ROOT.parent / "data" / "design2code"
TEST_JSONL = ROOT / "data" / "test.jsonl"
OUT_JSONL = ROOT / "data" / "design2code_test.jsonl"
INPUT_SIZE = (640, 360)


def task_prompts():
    """The HTML / JSX / Vue prompts of the WebSight test set, in test-set order."""
    prompts = []
    for line in TEST_JSONL.read_text(encoding="utf-8").splitlines()[:3]:
        user = json.loads(line)["messages"][0]
        prompts.append(next(p["text"] for p in user["content"] if p["type"] == "text"))
    return prompts


def first_screen(img):
    w, h = img.size
    crop_h = round(w * 9 / 16)
    if h >= crop_h:
        return img.crop((0, 0, w, crop_h))
    canvas = Image.new("RGB", (w, crop_h), "white")
    canvas.paste(img, (0, 0))
    return canvas


def main():
    (OUT / "screens").mkdir(parents=True, exist_ok=True)
    (OUT / "inputs").mkdir(parents=True, exist_ok=True)
    prompts = task_prompts()
    ids = sorted((p.stem for p in RAW.glob("*.png")), key=int)
    random.Random(42).shuffle(ids)

    lines = []
    for page_id in ids:
        name = f"d2c_{page_id}.png"
        screen = first_screen(Image.open(RAW / f"{page_id}.png").convert("RGB"))
        screen.save(OUT / "screens" / name)
        screen.resize(INPUT_SIZE, Image.LANCZOS).save(OUT / "inputs" / name)
        html = (RAW / f"{page_id}.html").read_text(encoding="utf-8", errors="ignore")
        image_uri = "file:///" + str(OUT / "inputs" / name).replace("\\", "/")
        for prompt, reference in zip(prompts, [html, "", ""]):
            lines.append(json.dumps({"messages": [
                {"role": "user", "content": [{"type": "image", "image": image_uri},
                                             {"type": "text", "text": prompt}]},
                {"role": "assistant", "content": reference},
            ]}, ensure_ascii=False))

    OUT_JSONL.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"{len(ids)} pages -> {len(lines)} test conversations: {OUT_JSONL}")
    print(f"screens (scoring reference): {OUT / 'screens'}")
    print(f"inputs (640x360 model input): {OUT / 'inputs'}")


if __name__ == "__main__":
    main()
