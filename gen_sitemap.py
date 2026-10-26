"""Plan du site (sitemap.xml) de basstrading.fr : les pages publiques et tous les articles du blog, avec la date de
dernière modification réelle (dateModified de la page, sinon git). Relancé à chaque publication d'article (Studio Créateur, blogsite.js).
Exclus : pages privées (studio, espace, paiement), pages « merci » et de paiement, pages marquées noindex, archives.

Usage : python gen_sitemap.py   (depuis la racine du site)
"""
import pathlib
import re
import subprocess
from datetime import date

RACINE = pathlib.Path(__file__).parent
SITE = "https://basstrading.fr"
# /formation-offerte/ redirige vers /p/formation-offerte/ (vercel.json, 21/10/2026 : seule adresse qui note l'origine de
# chaque inscrit) : on annonce la page servie par le Studio ; l'ancien fichier ne sert plus qu'à dater l'entrée.
PAGES = [("index.html", "/", "1.0"), ("blog/index.html", "/blog/", "0.9"), ("formation-offerte/index.html", "/p/formation-offerte/", "0.9"),
         ("malaga/index.html", "/malaga/", "0.8"), ("marketprofile/index.html", "/marketprofile/", "0.8"), ("formations/index.html", "/formations/", "0.8"),
         ("formation-carnet-d-ordres/index.html", "/formation-carnet-d-ordres/", "0.8"), ("avis-bass-trading/index.html", "/avis-bass-trading/", "0.6"),
         ("cgv.html", "/cgv/", "0.2"), ("confidentialite.html", "/confidentialite/", "0.2"),
         ("mentions-legales.html", "/mentions-legales/", "0.2"), ("auteur/sebastien-constant/index.html", "/auteur/sebastien-constant/", "0.6")]


def derniere_modif(fichier: pathlib.Path) -> str:
    # La vraie date de mise à jour annoncée par la page (dateModified de ses données structurées) ; à défaut, la date
    # du dernier commit. (Ticket SEO P1-c, 20/10/2026 : la date git datait des retouches techniques, faux signal de fraîcheur.)
    m = re.search(r'"dateModified"\s*:\s*"(\d{4}-\d{2}-\d{2})', fichier.read_text(encoding="utf-8", errors="ignore"))
    if m:
        return m.group(1)
    r = subprocess.run(["git", "log", "-1", "--format=%cs", "--", str(fichier)], cwd=RACINE, capture_output=True, text=True)
    return r.stdout.strip() or date.today().isoformat()


entrees = []
for f, chemin, prio in PAGES:
    p = RACINE / f
    if p.exists() and "noindex" not in p.read_text(encoding="utf-8", errors="ignore"):
        entrees.append((chemin, derniere_modif(p), prio))
for article in sorted((RACINE / "blog").glob("*/index.html")):
    if "noindex" in article.read_text(encoding="utf-8", errors="ignore"):
        continue
    entrees.append((f"/blog/{article.parent.name}/", derniere_modif(article), "0.8"))

xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for chemin, modif, prio in entrees:
    xml.append(f"  <url><loc>{SITE}{chemin}</loc><lastmod>{modif}</lastmod><priority>{prio}</priority></url>")
xml.append("</urlset>")
(RACINE / "sitemap.xml").write_text("\n".join(xml) + "\n", encoding="utf-8")
print(f"sitemap.xml : {len(entrees)} pages")
