"""Check every custom.bib entry against Semantic Scholar: title, first author, year, venue."""
import difflib
import json
import re
import sys
import time
import urllib.parse
import urllib.request

BIB = sys.argv[1]
text = open(BIB, encoding="utf-8").read()
entries = re.findall(r"@(\w+)\{([^,]+),(.*?)\n\}", text, re.S)


def field(body, name):
    m = re.search(rf"\b{name}\s*=\s*\{{(.*?)\}}\s*,?\s*$", body, re.M | re.S)
    return re.sub(r"[{}]", "", m.group(1)).strip() if m else ""


def s2(title):
    q = urllib.parse.quote(title)
    url = (f"https://api.semanticscholar.org/graph/v1/paper/search?query={q}&limit=3"
           "&fields=title,venue,year,authors,externalIds,journal,publicationVenue")
    for attempt in range(5):
        try:
            with urllib.request.urlopen(url, timeout=30) as r:
                return json.load(r).get("data", [])
        except Exception as e:  # rate limit: back off
            time.sleep(4 * (attempt + 1))
    return []


out = []
for kind, key, body in entries:
    title, author, year = field(body, "title"), field(body, "author"), field(body, "year")
    venue = field(body, "booktitle") or field(body, "journal") or field(body, "howpublished")
    hits = s2(title)
    best = max(hits, key=lambda h: difflib.SequenceMatcher(None, h["title"].lower(), title.lower()).ratio(),
               default=None)
    if not best:
        out.append(f"{key}: NOT FOUND on Semantic Scholar")
        continue
    sim = difflib.SequenceMatcher(None, best["title"].lower(), title.lower()).ratio()
    first_bib = re.split(r"\band\b", author)[0].split(",")[0].strip().split()[-1] if author else ""
    first_s2 = best["authors"][0]["name"].split()[-1] if best.get("authors") else ""
    pv = (best.get("publicationVenue") or {}).get("name", "")
    flags = []
    if sim < 0.9:
        flags.append(f"TITLE? s2='{best['title']}'")
    if first_bib and first_s2 and first_bib.lower() != first_s2.lower():
        flags.append(f"FIRST AUTHOR? bib={first_bib} s2={first_s2}")
    if year and best.get("year") and str(best["year"]) != year:
        flags.append(f"YEAR? bib={year} s2={best['year']}")
    out.append(f"{key}\n    bib: {venue} ({year}); {len(re.split(r' and ', author))} author field(s)"
               f"\n    s2 : venue='{best.get('venue')}' pubVenue='{pv}' year={best.get('year')} "
               f"authors={len(best.get('authors', []))} first={first_s2} ids={list((best.get('externalIds') or {}).keys())}"
               + (f"\n    !! {' | '.join(flags)}" if flags else ""))
    time.sleep(1.2)

print("\n".join(out))
