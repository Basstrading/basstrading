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
         ("avignon/index.html", "/avignon/", "0.8"), ("marketprofile/index.html", "/marketprofile/", "0.8"), ("formation-footprint/index.html", "/formation-footprint/", "0.8"), ("formations/index.html", "/formations/", "0.8"),
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


# ---- Après chaque publication (offensive SEO du 28/10/2026) ----
# blogsite.js du Studio lance ce script juste après avoir écrit l'article, puis n'ajoute au commit que l'article, le blog et
# ce plan du site. Ici : maillage par grappes (gen_grappes.py : bloc « série » de tous les articles, accueil, llms.txt) et
# flux Atom (gen_feed.py), committés à part pour laisser le dépôt propre (sinon la publication suivante serait refusée).
# Le flux est annoncé au hub WebSub 4 minutes plus tard, en tâche détachée (le temps que Vercel déploie).
# Désactiver le commit (lancement à la main) : variable d'environnement BASS_SANS_COMMIT=1.
def apres_publication():
    import os
    import sys
    sys.path.insert(0, str(RACINE))
    sys.dont_write_bytecode = True  # pas de __pycache__ dans le dépôt
    try:
        import gen_grappes
        gen_grappes.main()
        subprocess.run([sys.executable, "gen_feed.py"], cwd=RACINE, check=True, capture_output=True, text=True)
    except Exception as e:  # le plan du site doit sortir même si le maillage échoue
        print(f"grappes/flux non mis à jour : {e}")
        return
    if os.environ.get("BASS_SANS_COMMIT") or not (RACINE / ".git").exists():
        return
    git = lambda *a: subprocess.run(["git", *a], cwd=RACINE, capture_output=True, text=True)
    git("add", "-u", "--", ".", ":(exclude)blog/index.html", ":(exclude)sitemap.xml")
    if git("diff", "--cached", "--quiet").returncode:
        r = git("commit", "-m", "seo(auto): grappes, accueil, llms.txt et flux mis à jour après publication")
        print("commit maillage :", "ok" if r.returncode == 0 else r.stderr.strip()[:200])
    try:
        options = {"creationflags": 0x00000008 | 0x00000200} if os.name == "nt" else {"start_new_session": True}
        subprocess.Popen([sys.executable, "gen_feed.py", "--ping", "--attendre", "240"], cwd=RACINE, stdin=subprocess.DEVNULL,
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, close_fds=True, **options)
    except Exception as e:
        print(f"WebSub non programmé : {e}")


apres_publication()
