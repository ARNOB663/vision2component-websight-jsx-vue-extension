"""5-minute deck: keep Title, Introduction, Methodology, WebSight, Efficiency, Design2Code, Conclusion,
References, Thank you. Drop Abstract, Literature Review, Dataset, Discussion, Limitations."""
from pptx import Presentation

SRC = r"E:\Thesis Project file\ISASF2026_Paper132_Presentation.pptx"
OUT = r"E:\Thesis Project file\ISASF2026_Paper132_Presentation_5min.pptx"
DROP = {"Abstract", "Literature Review", "Dataset and Training Setup", "Discussion", "Future Scope and Limitations"}

prs = Presentation(SRC)
sld_ids = prs.slides._sldIdLst
for slide, sid in list(zip(prs.slides, list(sld_ids))):
    title = slide.shapes.title.text_frame.text if slide.shapes.title is not None else ""
    if title in DROP:
        prs.part.drop_rel(sid.rId)
        sld_ids.remove(sid)
prs.save(OUT)
print([s.shapes.title.text_frame.text for s in Presentation(OUT).slides])
