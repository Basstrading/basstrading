# BASS Trading — Documentation SEO & Architecture

**Site** : https://basstrading.fr
**Stack** : Next.js 16.2.2 + React 19 + TypeScript
**Repo** : github.com/Basstrading/basstrading (branche `nextjs`)
**Hosting** : Vercel (projet `basstrading`, org `hubtradings-projects`)
**Indexation** : 2 avril 2026 — domaine encore en sandbox Google jusqu'à juin/juillet
**Dernière mise à jour de cette doc** : 9 mai 2026

---

## ⚡ Quick reference

| Action | Commande |
|---|---|
| Build local | `cd basstrading-next && npx next build` |
| Dev server | `cd basstrading-next && npm run dev` |
| Push GitHub | `git push origin nextjs` |
| Deploy prod direct | `cd basstrading-next && vercel deploy --prod --yes` |
| Vercel project link | `.vercel/project.json` (orgId, projectId) |

⚠️ **Production branch** : Vercel n'auto-deploy pas `nextjs` en prod. Soit faire `vercel deploy --prod --yes` en CLI, soit "Promote to Production" dans le dashboard après chaque push.

---

## 📊 État actuel du site (mai 2026)

- **254 pages** statiques générées
- **51 blog posts** (`/blog/[slug]/`)
- **20 villes formation** (`/formation-trading/[ville]/`)
- **12 termes glossaire** (`/glossaire/[term]/`)
- **10 prop firms reviews** (`/prop-firm/[slug]/`)
- **8 comparatifs prop firms** (`/comparatif/[slug]/`)
- **10 tutoriels Sierra Chart** (`/tutoriels/[slug]/`)
- **5 cours pédagogiques** (`/cours/[slug]/`)
- **9 hubs thématiques** (Market Profile, Order Flow, Footprint, Volume Profile, Sierra Chart, Bookmap, Auction Market Theory, Liquidité, VWAP)
- **5 pages money keywords** (avis, prix, arnaque, qui marche, comparatif Xeilos supprimé)

---

## ✅ Phases livrées

### Phase 1-4 — Fondations SEO (avant cette session)
- 51 blog posts SEO sur Market Profile, Order Flow, Footprint, prop firms, fiscalité
- 4 hubs thématiques (Market Profile, Order Flow, Footprint, Volume Profile)
- 20 pages "Formation Trading [Ville]" (programmatic local SEO)
- 12 termes glossaire avec schema DefinedTerm
- Page `/sebastien-constant/` (E-E-A-T auteur)
- Sitemap, robots.txt, llms.txt configurés
- Schema JSON-LD : Organization, Course, Article, FAQ, Breadcrumb, Person, DefinedTerm

### Session 9 mai 2026 — Phases 5 à 7 + cleanup

#### 🎯 Fix prix Malaga 1290€ → 1490€
- Toutes occurrences nettoyées : page, countdown, JSON-LD, llms.txt
- Countdown bascule vers la date du séminaire (28 sept 2026)
- EventJsonLd avec une seule offer 1490 EUR + 3 reviews vérifiés
- **Stripe** : nouveau Payment Link `00w00i4Za0jT25W0yK9EI0t` branché dans `malaga/page.tsx:17`

#### 🧹 Cleanup massif (29 occurrences sur 25+ fichiers)
- Suppression complète du claim **"700K finances cumulés par les élèves"** partout (page d'accueil, Malaga, sebastien-constant, formation-trading, formation-trading/[ville], 10 blog posts, llms.txt)
- Suppression des comparatifs **BASS vs concurrents** : `/bass-trading-vs-xeilos/` supprimé, entrées "vs Trading Académie" et "vs Tradosaure" retirées du data file `comparatifs/_data.ts`
- Footer purgé des mentions concurrents
- Reformulation neutre vers la valeur méthodologique (Market Profile + Order Flow institutionnel)

#### Phase 5 — Programmatic SEO (30 pages)
**Architecture data-driven** : 3 fichiers data + 3 routes dynamiques.

- `/prop-firm/[slug]/` — 10 reviews prop firms (FTMO, Topstep, Apex, Fast Track, Bulenox, MFFU, TFT, FundedNext, E8, TPT) avec **Review schema** (étoiles SERP)
- `/comparatif/[slug]/` — 8 comparatifs entre prop firms (FTMO vs Topstep, Topstep vs Apex, Apex vs Bulenox, etc.)
- `/tutoriels/[slug]/` — 10 tutoriels Sierra Chart francophones (configurer Market Profile, Footprint, comparatifs, prix, indicateurs essentiels) avec **HowTo schema**
- 3 hubs avec CollectionPageJsonLd

**Files** :
- `src/content/prop-firms/_data.ts` (10 entrées)
- `src/content/comparatifs/_data.ts` (8 entrées)
- `src/content/tutoriels/_data.ts` (10 entrées)

#### Phase 6 — 5 piliers institutionnels (E-E-A-T topical authority)
Cible le **vide éditorial FR** identifié par l'analyse concurrentielle (Café de la Bourse, ABC Bourse, Boursorama : 0-3/10 sur trading institutionnel).

- `/sierra-chart/` — Hub Sierra Chart francophone (~3500 mots)
- `/bookmap/` — Guide Bookmap heatmap/iceberg/spoofing (~3000 mots, vide total FR)
- `/auction-market-theory/` — Cadre Steidlmayer (~3000 mots)
- `/liquidite-marches/` — Pools, stop hunts, sweeps anti-ICT (~3500 mots)
- `/vwap-institutionnel/` — VWAP avancé : anchored, multi-sessions, std dev bands (~3000 mots)

**Architecture** : chaque pilier en hub-and-spoke avec TOC, FAQ, internal linking massif vers `/blog/*` et `/tutoriels/*`.

#### Phase 7 — Section `/cours/` pédagogique
**5 cours structurés** en leçons numérotées (~30 leçons, ~15 000 mots de contenu pédagogique).

- `/cours/liquidite-marches-pro/` (7 leçons) — pools, sweeps, stop hunts, 3 setups
- `/cours/lecture-carnet-ordres-pro/` (6 leçons) — DOM, spoofing, iceberg, T&S
- `/cours/footprint-mastery/` (6 leçons) — anatomie, imbalances, absorption, exhaustion
- `/cours/psychologie-trading-pro/` (6 leçons) — biais, tilt, routine, journal, drawdown
- `/cours/risk-management-pro/` (6 leçons) — Kelly, fractional Kelly, DLL, x-trade.ai

**Schema** : `Course` + `Syllabus` + `CourseInstance` pour rich results Google.

**File** : `src/content/cours/_data.ts`

---

## 🎯 Phases prévues (pas encore faites)

### ✅ Phase 8 — Enrichir les top blog posts (LIVRÉE 9 mai 2026)
**Articles enrichis avec sections concrètes + internal linking massif vers Phases 5/6/7** :
- `/blog/footprint-chart-trading/` — +1500 mots : setup pratique chiffré sur ES, configuration Sierra Chart, alternatives (NinjaTrader, ATAS, Bookmap), 5 erreurs courantes, FAQ enrichie
- `/blog/fiscalite-trading-france/` — +2000 mots : 3 cas chiffrés concrets (particulier, prop firm, mix), formulaires exacts (2042, 2074, 2042-C-PRO, 3916), 5 optimisations légales (PEA, SASU, report MV, conversion devise, donation), checklist annuelle
- `/blog/order-flow-trading-france/` — section "Pour aller plus loin" avec liens vers tous les hubs Phase 6 + cours Phase 7
- `/blog/market-profile-guide-complet/` — section "Ressources MP" avec liens hubs/satellites/outils/prop firms
- `/blog/meilleur-broker-futures/` — section "Alternative prop firms" + comparatif détaillé broker vs prop firm + liens vers les 10 prop firms reviews

**Impact attendu** : +30-50% rankings sur ces pages via Google QDF (Query Deserves Freshness) + topical authority renforcée par le maillage interne.

### Phase 9 — Méga-pilier `/methode-institutionnelle/`
**Objectif** : créer la **page racine d'autorité topique** qui agrège tous les piliers existants (Market Profile + Order Flow + Footprint + Volume Profile + AMT + Liquidité + VWAP + Sierra Chart + Bookmap).

**Format** : 5000-7000 mots, hub-and-spoke pointant vers tous les piliers et les cours principaux.

**Effort** : ~2h.
**Impact** : signal d'autorité topique fort pour Google. Ranking sur "trading institutionnel français", "méthode institutionnelle trader", "lecture institutionnelle marché".

### Phase 10 — Glossaire enrichi (12 → 50+ termes)
**Actuellement** : 12 termes glossaire (POC, VAH, VAL, etc.).
**Cible** : 50+ termes (ajouter Open Drive, Open Rejection, Naked POC, HVN, LVN, Composite Profile, Initial Balance, Tail, Single Print, Stacked Imbalance, Spoofing, Iceberg, Time and Sales, Tape Reading, VWAP, Anchored VWAP, etc.).

**Format** : page courte par terme (200-400 mots) + DefinedTerm schema. Long-tail SEO massif.

**Effort** : ~3h pour 40 nouveaux termes.

### Phase 11 — Schema enrichi avancé
- **VideoObject** schema pour `bass-malaga-video.mp4` et toute vidéo intégrée
- **Speakable** schema pour rich results voice search
- **HowTo** schema sur certains blog posts tutoriels (configurer Sierra Chart, Apprendre VWAP, etc.)
- **CourseInstance** schema avec dates concrètes pour le mentorat

**Effort** : ~1h.

### Phase 12 — Optimisation des images
- Compression WebP/AVIF de toutes les images existantes (~30 photos Sebastien)
- Lazy loading systématique
- `<picture>` avec sources multiples
- Alt text optimisé SEO

**Effort** : ~2h.

### Phase 13 — Multi-langue (anglais)
**Question stratégique** : ouvrir le marché anglophone ? Le concurrent anglophone est saturé (Topstep blog, FTMO blog, etc.). Mais le contenu institutionnel BASS pourrait performer en EN.

**Effort** : énorme (1-2 semaines minimum).
**Décision** : à valider avec utilisateur si stratégique ou non.

---

## 🌐 Actions SEO HORS code (à faire par l'utilisateur)

### Backlinks (le nerf de la guerre)
Le SEO technique de basstrading.fr est solide. Le frein principal = autorité de domaine (38 jours d'âge).

**Priorités backlinks** :
1. **Podcasts trading FR** — DM aux animateurs (Marc Trader, Bourse Direct podcasts, Cryptoast trading)
2. **Article invité** sur Boursorama, Café de la Bourse, ABC Bourse (même les concurrents — ça crée des backlinks)
3. **Wikipedia FR** — éditer la page "Market Profile" et citer un article basstrading.fr en source
4. **Annuaires Qualiopi / Mon Compte Formation** (officiels)
5. **Trustpilot widget** visible sur le site (déjà ?) — pour rich snippet stars
6. **YouTube** — créer une chaîne avec extraits sessions live, lier vers basstrading.fr en bio
7. **LinkedIn** — Sebastien doit poster régulièrement avec lien vers blog posts

### Search Console
- Demander **inspection manuelle** sur les nouvelles pages clés (sierra-chart, bookmap, cours)
- Vérifier que **toutes les pages** sont indexées (Coverage report)
- Surveiller les Performance reports pour repérer les opportunités CTR

### Trustpilot
- Encourager les nouveaux élèves à laisser des avis (atteindre 200+ avis)
- Plus d'avis = plus de fiabilité signal

### Patience (sandbox Google)
- Domaine indexé le 2 avril 2026 = sandbox jusqu'à juin/juillet 2026 (3-6 mois standard)
- Vraie courbe de croissance attendue **après juillet 2026**, indépendamment du contenu

---

## 🏗️ Architecture du code

### Folders structurels
```
basstrading-next/
├── src/
│   ├── app/                    Routes Next.js (App Router)
│   │   ├── page.tsx            Homepage
│   │   ├── layout.tsx          Layout root (Nav, Footer, Lenis)
│   │   ├── sitemap.ts          Sitemap.xml dynamique
│   │   ├── robots.ts           Robots.txt
│   │   ├── blog/[slug]/        51 blog posts
│   │   ├── glossaire/[term]/   12 termes
│   │   ├── formation-trading/  Hub villes (20 villes)
│   │   ├── prop-firm/[slug]/   10 reviews (Phase 5)
│   │   ├── comparatif/[slug]/  8 comparatifs (Phase 5)
│   │   ├── tutoriels/[slug]/   10 tutos Sierra (Phase 5)
│   │   ├── cours/[slug]/       5 cours (Phase 7)
│   │   ├── sierra-chart/       Pillar Phase 6
│   │   ├── bookmap/            Pillar Phase 6
│   │   ├── auction-market-theory/  Pillar Phase 6
│   │   ├── liquidite-marches/  Pillar Phase 6
│   │   ├── vwap-institutionnel/  Pillar Phase 6
│   │   ├── market-profile/     Pillar pré-existant
│   │   ├── order-flow/         Pillar pré-existant
│   │   ├── footprint/          Pillar pré-existant
│   │   ├── volume-profile/     Pillar pré-existant
│   │   ├── malaga/             Page séminaire
│   │   ├── candidater/         Form (+ /candidater-en-ligne, /candidater-presentiel)
│   │   ├── sebastien-constant/ Page auteur (E-E-A-T)
│   │   └── [pages money keywords]/  avis, prix, arnaque, qui-marche
│   ├── content/                Data files (data-driven content)
│   │   ├── blog/_meta.ts       Meta des 51 articles
│   │   ├── blog/*.tsx          Contenu des articles (un .tsx par article)
│   │   ├── glossaire/_data.ts  12 termes
│   │   ├── pages/villes/_data.ts  20 villes
│   │   ├── prop-firms/_data.ts    10 prop firms (Phase 5)
│   │   ├── comparatifs/_data.ts   8 comparatifs (Phase 5)
│   │   ├── tutoriels/_data.ts     10 tutos (Phase 5)
│   │   └── cours/_data.ts          5 cours (Phase 7)
│   ├── components/             Components réutilisables (Nav, Footer, FAQ, BlogTOC, etc.)
│   └── lib/
│       ├── constants.ts        SITE constants (name, url, author, logo)
│       ├── seo.ts              generateSeoMetadata() helper
│       └── jsonld.tsx          JSON-LD components (Organization, Course, Article, FAQ, Person, DefinedTerm, Event, Review, Product, Breadcrumb, CollectionPage)
└── public/
    ├── llms.txt                Pour LLM (ChatGPT, Claude, Perplexity)
    ├── images/                 Photos Sebastien + visuels
    └── favicon.svg
```

### Pattern data-driven (à respecter pour scalabilité)
Pour ajouter du contenu en masse, suivre le pattern Phase 5/7 :

1. Créer `src/content/[type]/_data.ts` avec un export `[type]: TypeData[]`
2. Définir l'interface `TypeData` avec tous les champs SEO (slug, metaTitle, metaDescription, etc.)
3. Créer `src/app/[type]/[slug]/page.tsx` qui :
   - `generateStaticParams()` retourne les slugs
   - `generateMetadata()` génère les meta SEO
   - Render utilise les données du data file
4. Créer `src/app/[type]/page.tsx` (hub) qui liste tous les éléments
5. Ajouter les URLs au sitemap dans `src/app/sitemap.ts`
6. Ajouter un lien Footer si pertinent

### Schemas JSON-LD utilisés
| Schema | Utilisation |
|---|---|
| `Organization` | Homepage, layout root |
| `Person` | `/sebastien-constant/`, articles |
| `Course` | Hub principal + section /cours/ |
| `Article` | Blog posts |
| `FAQPage` | Toute page avec FAQ |
| `Breadcrumb` | Toutes pages internes |
| `DefinedTerm` / `DefinedTermSet` | Glossaire |
| `Review` + `AggregateRating` | Prop firms, avis-bass-trading, malaga |
| `Product` | avis-bass-trading, malaga |
| `Event` (`EducationEvent`) | Malaga |
| `HowTo` | Tutoriels |
| `CollectionPage` | Tous les hubs |
| `Syllabus` / `CourseInstance` | Cours individuels |

---

## 📈 Métriques actuelles (Search Console au 9 mai 2026)

**Source** : exports CSV fournis par l'utilisateur le 9 mai.

- Clics : 93 (38 jours)
- Impressions : ~3 300
- CTR moyen : ~3%
- Position moyenne : 8.0
- CTR Mobile : 7.88% ✅
- CTR Desktop : 1.62% ❌ (gros levier d'amélioration)

**Top queries** :
- "bass trading" → 19 clics, position 2.4 (brand)
- 51 queries avec 0 clic à position 8-15 (gros gisement de CTR à activer)

**Top pages** :
- Homepage : 32 clics, position 3.7
- `/blog/market-profile-guide-complet/` : 11 clics, position 7.6
- `/blog/order-flow-trading-france/` : 9 clics, position 8.2
- `/blog/footprint-chart-trading/` : 6 clics, position 13.4

---

## 📚 Mémoire utilisateur (rappels session)

1. **Style design** : Apple AirPods light/clean — fond blanc, typo noire massive, pas de dark mode.
2. **Pas de claim "700K finances par les élèves"** — supprimé partout, ne plus l'utiliser.
3. **Pas de comparatif BASS vs concurrents** (Xeilos, Trading Academie, Tradosaure) — on ne parle pas des concurrents.
4. **Principe directeur** : "on apporte de la valeur, ça démontre notre expertise". Le contenu doit être utile et pédagogique en lui-même, pas une vitrine de claims.
5. **Stratégie SEO low-comp** validée : traduire/adapter les tutos Sierra Chart anglophones (vide FR), créer des cours techniques (liquidité, carnet d'ordres, footprint).
6. **Concurrents identifiés à analyser pour gaps de contenu** (sans publier de comparatifs publics) : alti-trading.fr, xeilos.fr, trading-institut.com, cafedelabourse.com, abcbourse.com, andlil.com, boursorama.com.

---

## 🎯 Décisions stratégiques actées

| Décision | Date | Motivation |
|---|---|---|
| Branche `nextjs` = production sur Vercel | mai 2026 | Migration HTML statique → Next.js |
| Architecture data-driven pour content scalable | mai 2026 | Permettre de scaler à 100+ pages sans dupliquer de code |
| Cibler le vide éditorial institutionnel FR | mai 2026 | Tous les concurrents FR notés 0-5/10 sur ces sujets — opportunité massive |
| Format "cours" en leçons numérotées | mai 2026 | Différencié des blog posts pour ne pas cannibaliser, format E-E-A-T |
| Schema Course + Syllabus pour rich results | mai 2026 | Encore peu utilisé en FR, opportunité de différenciation SERP |
| Pas de comparatifs vs concurrents | mai 2026 | Décision utilisateur : on parle pas des concurrents, on apporte de la valeur |

---

*Cette doc doit être mise à jour à chaque phase livrée pour rester source de vérité.*
