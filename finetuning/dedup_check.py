"""Train/test near-duplicate audit and re-scoring (reviewer R3.7).

For every test image, finds its most similar training image by
  html  : Jaccard similarity of word 5-gram shingles of the WebSight HTML
  text  : the same on the visible text only (tags stripped)
  image : 256-bit difference hash (dHash) of the 640x360 screenshot
A test image is a near-duplicate when its HTML Jaccard reaches the threshold
(0.8, the usual near-duplicate cut-off for training-data deduplication; 0.5 is
reported as a stricter sensitivity check). All models are then re-scored on the
test images that remain.

Requires results/per_sample_scores.json (produced by bootstrap_ci.py).

Usage:  py -3.10 dedup_check.py
"""
import contextlib
import io
import json
import re
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import sparse

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
DATA = ROOT / "data"
SMALL_IMAGES = ROOT.parent / "data" / "websight_50k" / "images_small"
METHODS = ["base", "qwen2.5", "qlora"]
LABEL = {"base": "Base (2B)", "qwen2.5": "Qwen2.5 (3B)", "qlora": "QLoRA (2B)"}
TASKS = ["html", "jsx", "vue"]
SHINGLE = 5
THRESHOLDS = [0.8, 0.5]
HASH_SIDE = 16


def html_by_image(jsonl):
    """Ordered {image file name: WebSight HTML} from the HTML-task conversations."""
    out = {}
    for line in (DATA / jsonl).read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        user, assistant = json.loads(line)["messages"]
        prompt = next(p["text"] for p in user["content"] if p["type"] == "text")
        if "React JSX" in prompt or "GeneratedComponent" in prompt or "Vue 3" in prompt or "SFC" in prompt:
            continue
        image = next(p["image"] for p in user["content"] if p["type"] == "image")
        out[Path(image).name] = assistant["content"]
    return out


def shingles(text):
    words = re.findall(r"\w+", text.lower())
    return {" ".join(words[i:i + SHINGLE]) for i in range(max(len(words) - SHINGLE + 1, 1))}


def visible_text(html):
    return re.sub(r"<[^>]+>", " ", re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", html, flags=re.S))


def max_jaccard(test_docs, train_docs):
    """Exact Jaccard of shingle sets; returns (max similarity, argmax) per test doc."""
    vocab = {}
    def encode(docs):
        rows, cols = [], []
        for r, doc in enumerate(docs):
            for s in shingles(doc):
                rows.append(r)
                cols.append(vocab.setdefault(s, len(vocab)))
        return rows, cols
    tr_rows, tr_cols = encode(train_docs)
    te_rows, te_cols = encode(test_docs)
    shape_cols = len(vocab)
    tr = sparse.csr_matrix((np.ones(len(tr_rows), np.float32), (tr_rows, tr_cols)),
                           shape=(len(train_docs), shape_cols))
    te = sparse.csr_matrix((np.ones(len(te_rows), np.float32), (te_rows, te_cols)),
                           shape=(len(test_docs), shape_cols))
    inter = (te @ tr.T).toarray()
    union = np.asarray(te.sum(1)) + np.asarray(tr.sum(1)).T - inter
    jac = inter / np.maximum(union, 1)
    return jac.max(axis=1), jac.argmax(axis=1)


def dhash(name):
    g = np.asarray(Image.open(SMALL_IMAGES / name).convert("L")
                   .resize((HASH_SIDE + 1, HASH_SIDE)), dtype=np.int16)
    return (g[:, 1:] > g[:, :-1]).flatten()


def subset_scores(preds, scores, keep):
    """Overall (mean of tasks) metrics for the kept test-image indices."""
    from codebleu import calc_codebleu
    from sacrebleu.metrics import BLEU
    bleu = BLEU(effective_order=True)
    out = {}
    for m in METHODS:
        per = {k: [] for k in ["ssim", "lpips", "psnr", "codebleu", "bleu4", "edit_sim", "psr"]}
        for t in TASKS:
            s = scores[m][t]
            for k, src in [("ssim", "ssim"), ("lpips", "lpips"), ("psnr", "psnr"),
                           ("edit_sim", "edit_sim"), ("psr", "parse_ok")]:
                per[k].append(float(np.mean(np.asarray(s[src])[keep])))
            p = [preds[m][t][i]["prediction"] for i in keep]
            r = [preds[m][t][i]["reference"] for i in keep]
            per["bleu4"].append(bleu.corpus_score(p, [r]).score)
            with contextlib.redirect_stdout(io.StringIO()):
                per["codebleu"].append(calc_codebleu(references=r, predictions=p, lang="javascript",
                                                     weights=(0.25, 0.25, 0.25, 0.25))["codebleu"])
        out[m] = {k: round(float(np.mean(v)), 4) for k, v in per.items()}
    return out


def main():
    cache = RESULTS / "per_sample_scores.json"
    if not cache.exists():
        raise FileNotFoundError(f"{cache} missing -- run bootstrap_ci.py first")
    scores = json.loads(cache.read_text())
    preds = {m: json.loads((RESULTS / f"{m}_predictions.json").read_text(encoding="utf-8"))
             for m in METHODS}

    train = html_by_image("train.jsonl")
    test = html_by_image("test.jsonl")
    test_names, train_names = list(test), list(train)
    assert len(test_names) == len(preds["qlora"]["html"])
    # predictions are in test order, so index i of every task <-> test_names[i]
    assert all(preds["qlora"]["html"][i]["reference"] == test[n] for i, n in enumerate(test_names))
    print(f"train images: {len(train_names)}   test images: {len(test_names)}")

    html_sim, html_nn = max_jaccard([test[n] for n in test_names], [train[n] for n in train_names])
    text_sim, _ = max_jaccard([visible_text(test[n]) for n in test_names],
                              [visible_text(train[n]) for n in train_names])

    tr_hash = np.stack([dhash(n) for n in train_names])
    te_hash = np.stack([dhash(n) for n in test_names])
    img_dist = np.array([(tr_hash != h).sum(axis=1).min() for h in te_hash]) / tr_hash.shape[1]

    def dist(a):
        return {f"p{q}": round(float(np.percentile(a, q)), 4) for q in [50, 90, 95, 99, 100]}

    report = {
        "n_train_images": len(train_names), "n_test_images": len(test_names),
        "shingle_words": SHINGLE,
        "max_train_similarity": {"html_jaccard": dist(html_sim), "text_jaccard": dist(text_sim),
                                 "image_dhash_min_distance": dist(img_dist)},
        "exact_html_duplicates": int((html_sim >= 0.999).sum()),
        "closest_pairs": [
            {"test": test_names[i], "train": train_names[html_nn[i]],
             "html_jaccard": round(float(html_sim[i]), 4)}
            for i in np.argsort(-html_sim)[:10]
        ],
        "thresholds": {},
    }

    full = list(range(len(test_names)))
    report["full_test_set"] = subset_scores(preds, scores, full)
    for th in THRESHOLDS:
        keep = [i for i in full if html_sim[i] < th]
        report["thresholds"][str(th)] = {
            "n_removed": len(full) - len(keep),
            "n_kept": len(keep),
            "scores_on_kept": subset_scores(preds, scores, keep),
        }

    (RESULTS / "dedup_check.json").write_text(json.dumps(report, indent=2))

    print("\nMax similarity of each test image to its nearest training image:")
    for k, v in report["max_train_similarity"].items():
        print(f"  {k:26s} " + "  ".join(f"{q}={x:.3f}" for q, x in v.items()))
    print(f"  exact HTML duplicates: {report['exact_html_duplicates']}")
    print("\nMost similar test/train pairs (HTML Jaccard):")
    for p in report["closest_pairs"][:5]:
        print(f"  {p['test']} ~ {p['train']}  {p['html_jaccard']:.3f}")

    print("\nOverall scores, full test set vs. after removing near-duplicates:")
    cols = ["ssim", "lpips", "psnr", "codebleu", "bleu4", "edit_sim", "psr"]
    print(f"  {'subset':22s} {'model':14s}" + "".join(f"{c:>9s}" for c in cols))
    rows = [("full (n=%d)" % len(full), report["full_test_set"])]
    rows += [(f"Jaccard<{th} (n={report['thresholds'][str(th)]['n_kept']})",
              report["thresholds"][str(th)]["scores_on_kept"]) for th in THRESHOLDS]
    for name, sc in rows:
        for m in METHODS:
            print(f"  {name:22s} {LABEL[m]:14s}" + "".join(f"{sc[m][c]:>9.4f}" for c in cols))
    print(f"\nsaved -> {RESULTS / 'dedup_check.json'}")


if __name__ == "__main__":
    main()
