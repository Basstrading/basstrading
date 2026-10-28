"""Maillage par grappes de basstrading.fr (offensive SEO du 28/10/2026), régénéré à CHAQUE publication d'article :
- bloc « Dans la même série » en bas de chaque article (pilier, pages filles, offre liée, formation offerte) ;
- section « Tous les guides, par thème » de l'accueil ;
- section « Tous les guides, par thème » de llms.txt.
Idempotent (blocs entre marqueurs). Un article dont le slug n'est dans aucune grappe est rangé par mots-clés (RANGEMENT).

Appelé par gen_sitemap.py (lui-même lancé par blogsite.js du Studio à chaque publication), ou à la main :
    python gen_grappes.py
"""
import html
import pathlib
import re

RACINE = pathlib.Path(__file__).parent
SITE = "https://basstrading.fr"
OFFRE_TOUT = ("/formations/", "Toutes les formations de Bass", "plus de 250 leçons vidéo, du débutant au Market Profile avancé.")
# (nom, pilier, pages filles, (offre, libellé, détail)) — le pilier « méthode » prend le relais de types-trading-differences dès qu'il existe.
GRAPPES = [
    ("Market Profile", "market-profile-guide-complet",
     ["volume-profile-guide", "value-area-trading", "market-profile-vs-volume-profile", "auction-market-theory", "sierra-chart-configuration"],
     ("/marketprofile/", "La formation Market Profile", "16 leçons vidéo pour lire un profil TPO, 57 €.")),
    ("Order flow et carnet d'ordres", "order-flow-trading-france",
     ["carnet-ordres-dom-futures", "order-flow-vs-price-action", "tape-reading-flux-ordres", "absorption-order-flow", "cvd-cumulative-volume-delta", "scalping-nasdaq-carnet-ordres", "smc-trading"],
     ("/formation-carnet-d-ordres/", "La formation carnet d'ordres", "Carnet d'ordre Mastery, pour lire le DOM et le flux d'ordres.")),
    ("Footprint", "footprint-chart-trading",
     ["imbalance-footprint", "delta-footprint-trading", "absorption-order-flow", "footprint-tradingview", "cvd-cumulative-volume-delta", "atas-avis"],
     ("/formation-footprint/", "La formation Footprint", "Footprint Mastery, 23 leçons vidéo et 17 classes virtuelles, 790 €.")),
    ("Trouver sa méthode de trading", "methode-de-trading",
     ["types-trading-differences", "debuter-trading-zero-guide", "combien-temps-apprendre-trading", "devenir-trader-sans-diplome", "livre-trading",
      "formation-trading", "formation-trading-gratuite", "quelle-formation-trading-choisir", "arnaque-trading"],
     OFFRE_TOUT),
    ("Futures du Nasdaq et plateformes", "nasdaq-futures-nq-mnq",
     ["nq-ou-mnq", "horaires-futures-nasdaq-heure-paris", "day-trading-futures", "vwap-trading", "vwap-ancre", "ninjatrader-avis", "tradovate-avis", "atas-avis", "sierra-chart-configuration"],
     OFFRE_TOUT),
    ("Gestion du risque et prop firms", "combien-risquer-par-trade",
     ["perte-maximale-journaliere-trading", "chasse-aux-stops-trading", "pyramider-position-trading", "drawdown-prop-firm-futures", "premier-payout-prop-firm", "prop-firm-funded-trader"],
     OFFRE_TOUT),
]
# Rangement d'un nouvel article inconnu : premier motif trouvé dans le slug.
RANGEMENT = [(r"market-profile|value-area|volume-profile|tpo|poc|initial-balance|auction", "Market Profile"),
             (r"footprint|imbalance|delta|absorption", "Footprint"),
             (r"order-flow|carnet|dom|tape|scalp|liquidit", "Order flow et carnet d'ordres"),
             (r"vwap|nasdaq|nq|mnq|futures|sierra|ninjatrader|tradovate|atas|plateforme|horaire", "Futures du Nasdaq et plateformes"),
             (r"risque|stop|drawdown|prop-firm|payout|perte|pyramid|position", "Gestion du risque et prop firms"),
             (r".", "Trouver sa méthode de trading")]

STYLE_SERIE = ('<style>.serie-w{background:#FFF;color:#1D1D1F;border-top:1px solid #F5F5F7}.serie{max-width:1060px;margin:0 auto;padding:56px 24px;font-family:inherit;box-sizing:border-box}'
               '.serie-l{font-size:.6rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#0066FF;margin-bottom:8px}'
               '.serie-w .serie h2{font-size:1.4rem;font-weight:800;letter-spacing:-.5px;color:#1D1D1F!important;margin:0 0 18px;font-family:inherit}'
               '.serie ul{list-style:none;padding:0;margin:0 0 22px;display:grid;grid-template-columns:repeat(2,1fr);gap:8px 24px}'
               '.serie-w .serie li a{color:#1D1D1F!important;font-size:.9rem;line-height:1.45;text-decoration:none;border-bottom:1px solid #D2D2D7}.serie li a:hover{color:#0066FF}'
               '.serie li.pil a{font-weight:700}.serie-o{background:#F5F5F7;border-radius:14px;padding:18px 20px;font-size:.88rem;line-height:1.55;color:#1D1D1F}'
               '.serie-w .serie-o a{color:#0066FF!important;font-weight:700}@media(max-width:700px){.serie ul{grid-template-columns:1fr}}</style>')
STYLE_ACCUEIL = ('<style>.gt{max-width:1160px;margin:0 auto;padding:40px 24px 90px}.gt-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}'
                 '.gt-col h3{font-size:1rem;font-weight:800;margin:0 0 10px;color:inherit}.gt-col ul{list-style:none;padding:0;margin:0 0 12px}.gt-col li{margin:0 0 7px;font-size:.84rem;line-height:1.4}'
                 '.gt-col li a{color:inherit;opacity:.8;text-decoration:none}.gt-col li a:hover{opacity:1;text-decoration:underline}.gt-offre{font-size:.8rem;font-weight:700;color:#0066FF;text-decoration:none}'
                 '.gt-t{font-size:clamp(1.4rem,3vw,2rem);font-weight:900;letter-spacing:-1px;margin:0 0 28px;text-align:center}@media(max-width:900px){.gt-grid{grid-template-columns:1fr}}</style>')


def article(s):
    p = RACINE / "blog" / s / "index.html"
    return p if p.exists() else None


def publie(p):
    return not re.search(r'<meta[^>]+name="robots"[^>]+noindex', p.read_text(encoding="utf-8", errors="ignore"))


def meta(s):
    t = article(s).read_text(encoding="utf-8", errors="ignore")
    titre = html.unescape(re.search(r"<title>(.*?)</title>", t, re.S).group(1).strip())
    titre = re.sub(r"\s*(—|\|)\s*(BASS|Bass) Trading\s*$", "", titre)
    d = re.search(r'<meta name="description" content="([^"]*)"', t)
    return titre, html.unescape(d.group(1)) if d else ""


def grappes():
    """Les grappes avec leurs membres publiés, nouveaux articles inconnus rangés par mots-clés."""
    connus = {s for _, p, f, _ in GRAPPES for s in [p] + f}
    tous = sorted(d.name for d in (RACINE / "blog").iterdir() if (d / "index.html").exists() and publie(d / "index.html"))
    extra = {}
    for s in tous:
        if s not in connus:
            nom = next(n for motif, n in RANGEMENT if re.search(motif, s))
            extra.setdefault(nom, []).append(s)
    sortie = []
    for nom, pilier, filles, offre in GRAPPES:
        membres = [s for s in [pilier] + filles + extra.get(nom, []) if article(s) and publie(article(s))]
        sortie.append((nom, membres, offre))
    return sortie


def bloc_serie(slug, gs):
    parts = []
    for nom, membres, (url, lib, det) in gs:
        if slug not in membres:
            continue
        lis = "".join(f'<li class="{"pil" if i == 0 else ""}"><a href="/blog/{m}/">{html.escape(meta(m)[0], quote=False)}</a></li>'
                      for i, m in enumerate(membres) if m != slug)
        offre = (f'<div class="serie-o"><a href="{url}">{lib}</a> : {det} '
                 f'Pour commencer sans payer : <a href="/p/formation-offerte/?src=serie-{slug}">la formation offerte</a> (7 leçons vidéo).</div>')
        parts.append(f'<aside class="serie" aria-label="Dans la même série"><div class="serie-l">Dans la même série</div>'
                     f'<h2>{html.escape(nom, quote=False)}</h2><ul>{lis}</ul>{offre}</aside>')
    return "<!-- serie:debut -->" + STYLE_SERIE + '<div class="serie-w">' + "".join(parts) + "</div><!-- serie:fin -->\n" if parts else ""


def ecrire_si_change(p, t):
    if p.read_text(encoding="utf-8") != t:
        p.write_text(t, encoding="utf-8", newline="")
        return 1
    return 0


def main():
    gs = grappes()
    n = 0
    for d in sorted((RACINE / "blog").iterdir()):
        p = d / "index.html"
        if not p.exists():
            continue
        t0 = p.read_text(encoding="utf-8")
        t = re.sub(r"<!-- serie:debut -->.*?<!-- serie:fin -->\n?", "", t0, flags=re.S)
        b = bloc_serie(d.name, gs)
        if b and "<footer" in t:
            i = t.find("<footer")
            t = t[:i] + b + t[i:]
        n += ecrire_si_change(p, t)
    # Accueil
    acc = RACINE / "index.html"
    t = re.sub(r"<!-- guides:debut -->.*?<!-- guides:fin -->\n?", "", acc.read_text(encoding="utf-8"), flags=re.S)
    cols = "".join(f'<div class="gt-col"><h3>{html.escape(nom, quote=False)}</h3><ul>'
                   + "".join(f'<li><a href="/blog/{m}/">{html.escape(meta(m)[0], quote=False)}</a></li>' for m in membres)
                   + f'</ul><a class="gt-offre" href="{url}">{lib} &rarr;</a></div>' for nom, membres, (url, lib, _) in gs)
    guides = (f'<!-- guides:debut -->{STYLE_ACCUEIL}<section class="gt" id="guides" aria-label="Tous les guides par thème">'
              f'<h2 class="gt-t">Tous les guides, par thème</h2><div class="gt-grid">{cols}</div></section><!-- guides:fin -->\n')
    i = t.find('<footer class="footer">')
    if i > 0:
        n += ecrire_si_change(acc, t[:i] + guides + t[i:])
    # llms.txt
    lignes = ["<!-- grappes:debut -->", "## Tous les guides, par thème", ""]
    for nom, membres, (url, lib, det) in gs:
        lignes.append(f"### {nom}")
        for k, s in enumerate(membres):
            titre, d = meta(s)
            lignes.append(f"- [{titre}]({SITE}/blog/{s}/){' (guide pilier)' if k == 0 else ''}: {d}")
        lignes += [f"- Formation liée : [{lib}]({SITE}{url}), {det}", ""]
    lignes.append("<!-- grappes:fin -->")
    llms = RACINE / "llms.txt"
    t = re.sub(r"<!-- grappes:debut -->.*?<!-- grappes:fin -->\n?", "", llms.read_text(encoding="utf-8"), flags=re.S)
    t = t.replace("## Profils officiels", "\n".join(lignes) + "\n\n## Profils officiels", 1)
    t = re.sub(r"\n{3,}(<!-- grappes:debut -->)", r"\n\n\1", t)
    n += ecrire_si_change(llms, t)
    print(f"grappes : {n} fichier(s) mis à jour")
    return n


if __name__ == "__main__":
    main()
