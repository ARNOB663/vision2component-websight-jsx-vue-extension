import re
import fitz

P = r"E:\Thesis Project file\AniruddhA_Dev_Nath_Parater_Efficient_UI_Code_Generation_Using_QLoRA_on_an_Extended_WebSight_Dataset_new"
tex = open(rf"{P}\paper.tex", encoding="utf-8").read()
letter = open(rf"{P}\response_letter.tex", encoding="utf-8").read()
src = re.sub(r"\{,\}", ",", tex + letter)
src_nums = set(re.findall(r"\d+(?:[.,]\d+)*", src))

g = fitz.open(r"E:\Thesis Project file\presentation_guide\ISASF2026_Paper132_Speech_and_QA.pdf")
txt = " ".join(p.get_text() for p in g)
txt = re.sub(r"-\n", "", txt)
nums = re.findall(r"\d+(?:[.,]\d+)*", txt)

# numbers that are not paper facts (dates, slide numbers, timings, metric ranges, generic counts)
benign = {"1", "2", "3", "4", "5", "8", "9", "10", "12", "13", "14", "15", "0", "30", "45", "100", "2026", "132",
          "19", "11", "6", "7", "16"}
missing = sorted({n for n in nums if n not in src_nums and n not in benign}, key=lambda s: float(s.replace(",", "")))
print("numbers in guide:", len(nums), "| distinct:", len(set(nums)))
print("not found in paper or response letter:", missing or "none")
for n in missing:
    for m in re.finditer(re.escape(n), txt):
        print(f"   {n}: ...{txt[max(0, m.start() - 70):m.end() + 40]}...".replace("\n", " "))
        break
