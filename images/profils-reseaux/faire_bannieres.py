"""Bannières homogènes pour tous les réseaux de Bass (22/10/2026 : « mets un truc homogène à tous mes réseaux »,
« prends celui de LinkedIn »). Même mise en page que la bannière LinkedIn, refaite en haute qualité depuis la photo
d'origine (../bass-pointing.jpg) : photo à gauche fondue dans le fond sombre, texte à droite.
Usage : python faire_bannieres.py  → banniere-x.png, banniere-youtube.png, banniere-facebook.png, banniere-linkedin.png"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ICI = Path(__file__).parent
PHOTO = Image.open(ICI.parent / 'bass-pointing.jpg').convert('RGB')
FOND = (10, 14, 22)
VERT = (46, 204, 113)
BLANC = (245, 247, 250)
GRIS = (190, 198, 210)
GRAS = 'C:/Windows/Fonts/segoeuib.ttf'
DEMI = 'C:/Windows/Fonts/seguisb.ttf'


def police(f, t):
    return ImageFont.truetype(f, t)


def banniere(W, H, zone, nom, photo_x=None):
    """zone = (x0, y0, x1, y1) : partie visible partout (zone sûre). photo_x : bord gauche de la photo."""
    x0, y0, x1, y1 = zone
    zh = y1 - y0
    im = Image.new('RGB', (W, H), FOND)
    # Photo : hauteur de la zone sûre agrandie de 25 %, collée à gauche de la zone, fondue à droite et à gauche.
    ph = int(zh * 1.25) if H > zh * 1.3 else H
    p = PHOTO.resize((int(PHOTO.width * ph / PHOTO.height), ph), Image.LANCZOS)
    px = x0 if photo_x is None else photo_x
    py = y0 + (zh - ph) // 2 if H > zh * 1.3 else 0
    masque = Image.new('L', p.size, 255)
    md = ImageDraw.Draw(masque)
    fondu_d, fondu_g = int(p.width * 0.45), int(p.width * 0.12)
    for i in range(fondu_d):
        md.line([(p.width - 1 - i, 0), (p.width - 1 - i, p.height)], fill=int(255 * (i / fondu_d) ** 1.6))
    for i in range(fondu_g):
        md.line([(i, 0), (i, p.height)], fill=min(255, int(255 * (i / fondu_g))))
    if H > zh * 1.3:  # fondu haut et bas quand la bannière dépasse la photo (YouTube)
        haut = Image.new('L', p.size, 255); hd = ImageDraw.Draw(haut); f = int(p.height * 0.18)
        for i in range(f):
            v = int(255 * i / f); hd.line([(0, i), (p.width, i)], fill=v); hd.line([(0, p.height - 1 - i), (p.width, p.height - 1 - i)], fill=v)
        from PIL import ImageChops
        masque = ImageChops.multiply(masque, haut)
    im.paste(p, (px, py), masque)
    # Texte à droite, dans la zone sûre.
    d = ImageDraw.Draw(im)
    tx = x0 + int((x1 - x0) * 0.50)
    larg = x1 - tx - int(zh * 0.08)
    t_titre = int(zh * 0.155)
    while police(GRAS, t_titre).getlength('Je forme des traders') > larg:
        t_titre -= 2
    f_sur, f_titre, f_sous = police(GRAS, int(t_titre * 0.30)), police(GRAS, t_titre), police(DEMI, int(t_titre * 0.36))
    y = y0 + int(zh * 0.20)
    d.text((tx, y), 'FORMATEUR EN TRADING · 10 ANS', font=f_sur, fill=VERT)
    y += int(t_titre * 0.62)
    d.text((tx, y), 'Je forme des traders', font=f_titre, fill=BLANC)
    y += int(t_titre * 1.12)
    d.text((tx, y), 'à ', font=f_titre, fill=BLANC)
    xa = tx + f_titre.getlength('à ')
    d.text((xa, y), 'lire le marché', font=f_titre, fill=VERT)
    d.text((xa + f_titre.getlength('lire le marché'), y), '.', font=f_titre, fill=BLANC)
    y += int(t_titre * 1.35)
    d.text((tx, y), 'Futures Nasdaq · Carnet d’ordres · Gestion du risque', font=f_sous, fill=GRIS)
    f_site = police(GRAS, int(t_titre * 0.32))
    site = 'basstrading.fr'
    d.text((x1 - int(zh * 0.06) - f_site.getlength(site), y1 - int(zh * 0.14)), site, font=f_site, fill=BLANC)
    im.save(ICI / nom, optimize=True)
    print(nom, W, H)


# X : 1500 × 500 ; la photo de profil couvre le bas à gauche (~x 40-375), on décale la photo pour que Bass reste visible.
banniere(1500, 500, (0, 0, 1500, 500), 'banniere-x.png', photo_x=320)
# YouTube : 2560 × 1440, zone visible sur tous les écrans = 1546 × 423 au centre.
banniere(2560, 1440, (507, 508, 2053, 931), 'banniere-youtube.png')
# Facebook : 1640 × 624 (le téléphone coupe les côtés : on garde une marge).
banniere(1640, 624, (90, 0, 1550, 624), 'banniere-facebook.png', photo_x=150)
# LinkedIn : 1584 × 396, pour remplacer l'actuelle (800 px) par une version nette.
banniere(1584, 396, (0, 0, 1584, 396), 'banniere-linkedin.png', photo_x=60)
