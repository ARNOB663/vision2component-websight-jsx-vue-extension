"""JSX renderability under a lenient harness (reviewer R3.12).

The strict harness (rerender_jsx.py) strips ES imports, so a component that
uses e.g. react-bootstrap's <Container> or react-router's <Link> crashes on an
undefined identifier and is scored as a failed render. This script re-renders
those samples with every identifier imported from a non-React module replaced
by a stub: capitalised names become a <div> that keeps className and children
(member access such as Card.Body also yields a stub); lowercase names become a
no-op function. It shows how much of each model's JSX failure rate is due to
library imports rather than broken code.

Only predictions that import a non-React module are re-rendered; every other
sample would produce the same page as under the strict harness, so its strict
score is reused.

Usage:  py -3.10 rerender_jsx_lenient.py [--concurrency N]
"""
import argparse
import asyncio
import json
import os
import re
import tempfile
from pathlib import Path

import numpy as np

from rerender_jsx import _ns, build_jsx_image_map, score, VIEWPORT_W, VIEWPORT_H

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"
METHODS = ["base", "qwen2.5", "qlora"]
REACT_MODULES = {"react", "react-dom", "react-dom/client"}
prepare_jsx = _ns["_prepare_jsx_for_browser"]

IMPORT_RE = re.compile(r"(?m)^[ \t]*import\s+([^;'\"]*?)\s+from\s+['\"]([^'\"]+)['\"]")

STUB_HELPERS = """
const __stub = (name) => new Proxy(
  function (props) {
    props = props || {};
    return React.createElement('div', {className: props.className, style: props.style}, props.children);
  },
  {get: (t, k) => (typeof k === 'string' && /^[A-Z]/.test(k)) ? __stub(name + '.' + k) : t[k]}
);
const __noop = () => (() => ({}));
"""


def imported_names(code):
    """Local names bound by imports from non-React modules."""
    names = []
    for clause, module in IMPORT_RE.findall(code):
        if module in REACT_MODULES or module.endswith(".css"):
            continue
        clause = clause.strip()
        ns = re.match(r"\*\s+as\s+([A-Za-z_$][\w$]*)", clause)
        if ns:
            names.append(ns.group(1))
            continue
        braces = re.search(r"\{([^}]*)\}", clause)
        default = clause[:braces.start()] if braces else clause
        default = default.strip().rstrip(",").strip()
        if default:
            names.append(default)
        if braces:
            for part in braces.group(1).split(","):
                part = part.strip()
                if part:
                    names.append(part.split(" as ")[-1].strip())
    return [n for n in dict.fromkeys(names) if re.fullmatch(r"[A-Za-z_$][\w$]*", n)]


def wrap_jsx_lenient(jsx_code):
    code, component = prepare_jsx(jsx_code)
    if component is None:
        return ("<!DOCTYPE html><html><head><meta charset=\"utf-8\">"
                "</head><body></body></html>")
    # A name the component declares itself must not get a second (stub) declaration
    names = [n for n in imported_names(jsx_code)
             if not re.search(r"\b(const|let|var|function|class)\s+" + re.escape(n) + r"\b", code)]
    stubs = "\n".join(
        f"const {n} = __stub('{n}');" if n[0].isupper() else f"const {n} = __noop();"
        for n in names
    )
    return f"""<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.24.7/babel.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
</head><body>
<div id="root"></div>
<script type="text/babel" data-presets="react">
{STUB_HELPERS}
{stubs}
{code}

try {{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement({component}));
}} catch (e) {{
  document.getElementById('root').innerHTML = '';
}}
</script>
</body></html>"""


async def render_method(browser, method, image_map, concurrency):
    preds = json.loads((RESULTS / f"{method}_predictions.json").read_text(encoding="utf-8"))["jsx"]
    strict_dir = RESULTS / f"{method}_renders_jsx_fixed"
    outdir = RESULTS / f"{method}_renders_jsx_lenient"
    outdir.mkdir(exist_ok=True)

    targets = [i for i, s in enumerate(preds) if imported_names(s["prediction"])]
    ctx = await browser.new_context(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})
    pages = [await ctx.new_page() for _ in range(concurrency)]
    queue: asyncio.Queue = asyncio.Queue()
    for pg in pages:
        await queue.put(pg)

    rerendered = {}

    async def one(i):
        out = str(outdir / f"jsx_{i}.png")
        tmp = tempfile.NamedTemporaryFile(suffix=".html", delete=False, mode="w", encoding="utf-8")
        tmp.write(wrap_jsx_lenient(preds[i]["prediction"]))
        tmp.close()
        page = await queue.get()
        try:
            await page.goto("file:///" + tmp.name.replace("\\", "/"),
                            wait_until="networkidle", timeout=20000)
            await page.wait_for_timeout(600)
            has_content = await page.evaluate(
                "() => { const b=document.body; if(!b) return false;"
                " const t=(b.innerText||'').trim();"
                " const n=b.querySelectorAll('*').length;"
                " return t.length>0 || n>3; }")
            if has_content:
                await page.screenshot(path=out, full_page=False)
            elif os.path.exists(out):
                os.remove(out)
        except Exception:
            if os.path.exists(out):
                os.remove(out)
        finally:
            await queue.put(page)
            os.unlink(tmp.name)
        rerendered[i] = out

    await asyncio.gather(*(one(i) for i in targets))
    await ctx.close()

    per_sample, render_paths = [], []
    for i in range(len(preds)):
        path = rerendered.get(i, str(strict_dir / f"jsx_{i}.png"))
        render_paths.append(path)
        per_sample.append(score(image_map.get(i), path))
    ok = [r for r in per_sample if "error" not in r]
    return {
        "n_samples": len(per_sample),
        "n_with_library_imports": len(targets),
        "n_rendered": len(ok),
        "avg_ssim": round(float(np.mean([r["ssim"] for r in per_sample])), 4),
        "avg_psnr": round(float(np.mean([r["psnr"] for r in per_sample])), 2),
        "avg_ssim_rendered_only": round(float(np.mean([r["ssim"] for r in ok])), 4) if ok else 0.0,
    }, render_paths


def lpips_for(paths, image_map):
    """LPIPS as in recompute_lpips_all.py (512x384, failed render = 1.0), on CPU."""
    import torch
    import lpips as lpips_module
    from PIL import Image
    net = lpips_module.LPIPS(net="alex", verbose=False).eval()

    def t(path):
        arr = np.array(Image.open(path).convert("RGB").resize((512, 384)))
        return torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).float() / 255.0 * 2.0 - 1.0

    vals = []
    with torch.no_grad():
        for i, p in enumerate(paths):
            vals.append(float(net(t(image_map[i]), t(p)).item()) if os.path.exists(p) else 1.0)
    return round(float(np.mean(vals)), 4)


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--concurrency", type=int, default=10)
    args = ap.parse_args()

    image_map = build_jsx_image_map()
    strict = json.loads((RESULTS / "jsx_rerender_results.json").read_text())
    strict_lpips = json.loads((RESULTS / "lpips_all_recomputed.json").read_text())

    from playwright.async_api import async_playwright
    out = {}
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for m in METHODS:
            print(f"=== {m} ===", flush=True)
            res, paths = await render_method(browser, m, image_map, args.concurrency)
            res["avg_lpips"] = lpips_for(paths, image_map)
            out[m] = res
        await browser.close()

    (RESULTS / "jsx_lenient_rerender_results.json").write_text(json.dumps(out, indent=2))

    print("\n" + "=" * 86)
    print("JSX: STRICT harness (paper) vs LENIENT harness (library imports stubbed)")
    print("=" * 86)
    print(f"{'model':10s} {'lib-import':>10s} {'rendered strict':>16s} {'rendered lenient':>17s} "
          f"{'SSIM strict':>12s} {'SSIM lenient':>13s} {'LPIPS strict':>13s} {'LPIPS lenient':>14s}")
    for m in METHODS:
        s, l = strict[m], out[m]
        print(f"{m:10s} {l['n_with_library_imports']:>10d} "
              f"{s['n_rendered']:>9d} ({s['n_rendered']/s['n_samples']:5.1%}) "
              f"{l['n_rendered']:>9d} ({l['n_rendered']/l['n_samples']:5.1%}) "
              f"{s['avg_ssim']:>12.4f} {l['avg_ssim']:>13.4f} {strict_lpips[m]['jsx']:>13.4f} {l['avg_lpips']:>14.4f}")
    print(f"\nsaved -> {RESULTS / 'jsx_lenient_rerender_results.json'}")


if __name__ == "__main__":
    asyncio.run(main())
