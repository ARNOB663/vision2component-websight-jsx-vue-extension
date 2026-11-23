"""Render the pipeline figure and crop the two display equations from the LaTeX PDF."""
import fitz

B = r"E:\Thesis Project file\_build_camera"
OUT = r"C:\Users\Arnob\AppData\Local\Temp\claude\d6c8181322e7aae7\1b2893c5-760b-4731-935d-72f7afac7130\scratchpad"

# Figure 1 at 600 dpi (the diagram is placed at ~77 mm, so >300 dpi effective)
fig = fitz.open(rf"{B}\methodology_diagram_simple.pdf")
fig[0].get_pixmap(dpi=600).save(rf"{OUT}\fig1.png")
print("fig1", fig[0].rect)

doc = fitz.open(rf"{B}\paper.pdf")


def crop_equation(anchor, number, name):
    for page in doc:
        hits = page.search_for(anchor)
        nums = page.search_for(number)
        if not hits or not nums:
            continue
        # the equation line is where the anchor and the equation number share a baseline
        a, n = min(((h, m) for h in hits for m in nums),
                   key=lambda hm: abs((hm[0].y0 + hm[0].y1) / 2 - (hm[1].y0 + hm[1].y1) / 2))
        if abs((a.y0 + a.y1) / 2 - (n.y0 + n.y1) / 2) > 8:
            continue
        col_left = 41 if a.x0 < page.rect.width / 2 else page.rect.width / 2 + 5
        col_right = n.x1 + 1
        # gather everything (text + vector math) near the equation line
        y0, y1 = min(a.y0, n.y0), max(a.y1, n.y1)
        for d in page.get_drawings():
            r = d["rect"]
            if r.x0 >= col_left - 1 and r.x1 <= col_right + 1 and abs((r.y0 + r.y1) / 2 - (y0 + y1) / 2) < 14:
                y0, y1 = min(y0, r.y0), max(y1, r.y1)
        for b in page.get_text("dict")["blocks"]:
            for l in b.get("lines", []):
                r = fitz.Rect(l["bbox"])
                if r.x0 >= col_left - 1 and r.x1 <= col_right + 1 and abs((r.y0 + r.y1) / 2 - (y0 + y1) / 2) < 12:
                    y0, y1 = min(y0, r.y0), max(y1, r.y1)
        clip = fitz.Rect(col_left, y0 + 0.5, col_right, y1 + 1.5)
        page.get_pixmap(dpi=600, clip=clip).save(rf"{OUT}\{name}.png")
        print(name, "page", page.number + 1, clip, "w/h pt", round(clip.width, 1), round(clip.height, 1))
        return
    raise SystemExit(f"{name} not found")


crop_equation("dequant", "(1)", "eq1")
crop_equation("EditSim", "(2)", "eq2")
