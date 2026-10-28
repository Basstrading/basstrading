"""Flux Atom du blog (blog/feed.xml) : tous les articles publiés, date réelle (dateModified), annoncé aux moteurs par
robots.txt et par WebSub (hub public de Google). Sert de second plan du site, plus vite relu que sitemap.xml.

Usage : python gen_feed.py   (depuis la racine du site), puis, une fois en ligne :
        python gen_feed.py --ping   (prévient le hub WebSub que le flux a changé)
Ne tourne PAS automatiquement à la publication d'un article (blogsite.js du Studio n'ajoute que l'article, le blog et le
plan du site) : le relancer après une série d'articles, et commiter blog/feed.xml.
"""
import html
import pathlib
import re
import sys
import urllib.parse
import urllib.request
from datetime import date

RACINE = pathlib.Path(__file__).parent
SITE = "https://basstrading.fr"
FLUX = f"{SITE}/blog/feed.xml"
HUB = "https://pubsubhubbub.appspot.com/"


def champ(motif, texte):
    m = re.search(motif, texte, re.S)
    return html.unescape(m.group(1).strip()) if m else ""


entrees = []
for article in (RACINE / "blog").glob("*/index.html"):
    t = article.read_text(encoding="utf-8", errors="ignore")
    if re.search(r'<meta[^>]+name="robots"[^>]+noindex', t):
        continue
    titre = re.sub(r"\s*(—|\|)\s*(BASS|Bass) Trading\s*$", "", champ(r"<title>(.*?)</title>", t))
    resume = champ(r'<meta name="description" content="([^"]*)"', t)
    publie = champ(r'"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})', t) or date.today().isoformat()
    modifie = champ(r'"dateModified"\s*:\s*"(\d{4}-\d{2}-\d{2})', t) or publie
    entrees.append((modifie, publie, f"{SITE}/blog/{article.parent.name}/", titre, resume))
entrees.sort(reverse=True)

x = lambda s: html.escape(s, quote=True)
xml = ['<?xml version="1.0" encoding="utf-8"?>', '<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="fr">',
       "  <title>BASS Trading : le blog</title>",
       "  <subtitle>Market Profile, order flow, footprint, carnet d'ordres et futures du Nasdaq, par Sébastien Constant (Bass).</subtitle>",
       f'  <link rel="self" type="application/atom+xml" href="{FLUX}"/>', f'  <link rel="hub" href="{HUB}"/>',
       f'  <link rel="alternate" type="text/html" href="{SITE}/blog/"/>', f"  <id>{SITE}/blog/</id>",
       f"  <updated>{entrees[0][0]}T00:00:00Z</updated>",
       f"  <author><name>Sébastien Constant (Bass)</name><uri>{SITE}/auteur/sebastien-constant/</uri></author>"]
for modifie, publie, url, titre, resume in entrees:
    xml += ["  <entry>", f"    <title>{x(titre)}</title>", f'    <link rel="alternate" type="text/html" href="{url}"/>', f"    <id>{url}</id>",
            f"    <published>{publie}T00:00:00Z</published>", f"    <updated>{modifie}T00:00:00Z</updated>", f"    <summary>{x(resume)}</summary>", "  </entry>"]
xml.append("</feed>")
(RACINE / "blog" / "feed.xml").write_text("\n".join(xml) + "\n", encoding="utf-8")
print(f"blog/feed.xml : {len(entrees)} articles")

if "--ping" in sys.argv:
    donnees = urllib.parse.urlencode({"hub.mode": "publish", "hub.url": FLUX}).encode()
    r = urllib.request.urlopen(urllib.request.Request(HUB, data=donnees, method="POST"), timeout=20)
    print("WebSub :", r.status)
