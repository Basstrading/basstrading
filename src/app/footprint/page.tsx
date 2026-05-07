import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import {
  CollectionPageJsonLd,
  FaqJsonLd,
  BreadcrumbJsonLd,
} from "@/lib/jsonld";
import BlogTOC from "@/components/BlogTOC";
import CTACard from "@/components/CTACard";
import FAQ from "@/components/FAQ";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata = generateSeoMetadata({
  title: "Footprint Chart : Le Guide Complet pour Lire le Volume Bid/Ask",
  description:
    "Tout sur le Footprint Chart : delta, imbalance, absorption, CVD, lecture bid/ask par bougie. Guide francophone par Sébastien Constant.",
  path: "/footprint/",
});

const toc = [
  { id: "definition", label: "Qu'est-ce que le Footprint Chart ?" },
  { id: "lire", label: "Comment lire un Footprint" },
  { id: "delta", label: "Le Delta : la pression directionnelle" },
  { id: "imbalance", label: "L'Imbalance : les déséquilibres" },
  { id: "absorption", label: "L'Absorption : la défense institutionnelle" },
  { id: "cvd", label: "Le CVD en parallèle" },
  { id: "applications", label: "Applications en trading" },
  { id: "guides", label: "Tous les guides" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  {
    question: "Qu'est-ce qu'un Footprint Chart ?",
    answer:
      "Le Footprint Chart est une représentation graphique du volume bid (vendeurs agressifs) et ask (acheteurs agressifs) à chaque niveau de prix à l'intérieur de chaque bougie. Là où une bougie classique ne montre que open/high/low/close, le Footprint éclate la bougie en lignes de prix avec le volume précis échangé à chaque niveau, séparé entre acheteurs et vendeurs.",
  },
  {
    question: "Footprint ou chandelier japonais : que choisir ?",
    answer:
      "Les chandeliers japonais sont une vue résumée du passé. Le Footprint est une vue détaillée de l'activité. Pour analyser une zone précise, le Footprint est largement supérieur. Pour avoir une vue d'ensemble multi-séances, les chandeliers restent pratiques. La meilleure approche : chandeliers en multi-timeframe + Footprint sur l'unité de trading.",
  },
  {
    question: "Quelles plateformes affichent le Footprint Chart ?",
    answer:
      "Sierra Chart (référence professionnelle, paramétrage fin), Bookmap (avec heatmap de liquidité), ATAS (interface moderne), NinjaTrader, MotiveWave. TradingView a ajouté un Volume Footprint mais reste limité face à Sierra Chart pour le trading professionnel.",
  },
  {
    question: "Quel timeframe utiliser pour le Footprint ?",
    answer:
      "Pour le scalping : 1 à 5 minutes en time-based, ou 500 à 2000 contrats en volume-based (préféré). Pour le day trading : 5 à 15 minutes ou 5000-10000 contrats en volume. Le volume-based est généralement plus lisible car il normalise l'activité — chaque bougie représente la même quantité d'activité, indépendamment de l'heure.",
  },
  {
    question: "Comment identifier l'absorption sur le Footprint ?",
    answer:
      "L'absorption se reconnaît à : (1) volume anormalement élevé à un niveau de prix fixe sans déplacement correspondant, (2) delta fort dans une direction sans suivi du prix, (3) wicks répétés au même niveau. C'est le signal qu'une grosse main absorbe les ordres agressifs avec ses propres ordres limites passifs. Précurseur classique de retournement.",
  },
  {
    question: "Footprint et Market Profile : pourquoi les combiner ?",
    answer:
      "Le Market Profile vous dit où sont les niveaux structurels (VAH, VAL, POC). Le Footprint vous dit ce qui s'y passe en temps réel quand le prix les teste. Cette confluence est l'approche dominante des traders professionnels : structure macro (Market Profile) + lecture micro (Footprint + Order Flow).",
  },
];

export default function FootprintHubPage() {
  return (
    <>
      <ReadingProgress />
      <CollectionPageJsonLd
        name="Footprint Chart — Guide complet et articles"
        description="Tout sur le Footprint Chart : delta, imbalance, absorption, CVD, applications."
        url="/footprint/"
        articleUrls={[
          "/blog/footprint-chart-trading/",
          "/blog/delta-footprint-trading/",
          "/blog/imbalance-footprint/",
          "/blog/absorption-order-flow/",
          "/blog/cvd-cumulative-volume-delta/",
        ]}
      />
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Footprint Chart" },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Footprint Chart</span>
          </nav>
          <div className="blog-hero-cat">Hub thématique</div>
          <h1 className="blog-hero-title">
            Footprint Chart.<br />
            Le volume éclaté par prix.
          </h1>
          <p className="blog-hero-desc">
            Delta, imbalance, absorption, CVD — tout ce qu&apos;il faut
            pour lire le Footprint comme un trader institutionnel. Guide
            francophone par <Link href="/sebastien-constant/">Sébastien Constant</Link>.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <aside className="article-sidebar">
          <BlogTOC items={toc} />
        </aside>
        <article className="article-body">
          <h2 id="definition">Qu&apos;est-ce que le Footprint Chart ?</h2>

          <p>
            Le <strong>Footprint Chart</strong> est une représentation
            graphique avancée qui éclate chaque bougie en lignes de prix,
            avec le volume bid (ordres vendeurs agressifs) et ask (ordres
            acheteurs agressifs) affiché à chaque niveau. Là où une bougie
            classique ne montre que quatre points (open, high, low, close),
            le Footprint en montre des dizaines — un par niveau de prix
            traversé pendant la bougie.
          </p>

          <p>
            Cette densité d&apos;information transforme la lecture du
            marché. Vous ne voyez plus simplement le résultat d&apos;une
            bougie, vous voyez <em>comment</em> elle s&apos;est construite :
            où l&apos;agression a été la plus forte, où elle a été
            absorbée, où les déséquilibres se sont créés.
          </p>

          <p>
            Pour une introduction complète,{" "}
            <Link href="/blog/footprint-chart-trading/">
              lire le guide : Footprint Chart, lire le volume comme un pro
            </Link>
            .
          </p>

          <h2 id="lire">Comment lire un Footprint Chart</h2>

          <p>
            Un Footprint affiche typiquement deux colonnes par niveau de
            prix à l&apos;intérieur de chaque bougie :
          </p>

          <ul>
            <li>
              <strong>Bid volume</strong> (à gauche) — volume des ordres
              vendeurs qui ont frappé le bid (vente agressive).
            </li>
            <li>
              <strong>Ask volume</strong> (à droite) — volume des ordres
              acheteurs qui ont frappé l&apos;ask (achat agressif).
            </li>
          </ul>

          <p>
            La somme bid + ask donne le volume total à ce niveau. La
            différence ask − bid donne le <strong>delta</strong> à ce
            niveau. Une coloration (souvent verte/rouge) indique
            visuellement la dominance.
          </p>

          <p>
            Variantes courantes : Bid-Ask Imbalance, Volume-only,
            Delta-only.
          </p>

          <h2 id="delta">Le Delta : la pression directionnelle</h2>

          <p>
            Le <strong>delta</strong> à un niveau de prix est la
            différence entre volume ask et volume bid. Un delta positif =
            dominance acheteuse ; un delta négatif = dominance vendeuse.
          </p>

          <p>Trois lectures essentielles :</p>

          <ul>
            <li>
              <strong>Delta aligné avec le prix</strong> — confirmation de
              tendance.
            </li>
            <li>
              <strong>Delta divergent</strong> — alerte de retournement.
              Une bougie haussière avec delta négatif signale une absorption
              haussière.
            </li>
            <li>
              <strong>Delta extrême sans déplacement</strong> — absorption
              massive, mur institutionnel à défendre.
            </li>
          </ul>

          <p>
            <Link href="/blog/delta-footprint-trading/">
              Lire le guide complet : Delta Footprint Trading
            </Link>
          </p>

          <h2 id="imbalance">L&apos;Imbalance : les déséquilibres</h2>

          <p>
            Une <strong>imbalance</strong> sur le Footprint est un
            déséquilibre fort entre bid et ask à un niveau. Seuil
            classique : <strong>3:1</strong>. Une imbalance isolée est
            anodine ; plusieurs imbalances consécutives dans la même
            direction (cluster) signalent une accélération institutionnelle.
          </p>

          <p>
            Les imbalances aux niveaux structurels (VAH, VAL, POC) sont
            particulièrement significatives. Une imbalance acheteuse sur
            VAL (support de Value Area) annonce souvent un rebond.
          </p>

          <p>
            <Link href="/blog/imbalance-footprint/">
              Lire le guide complet : Imbalance Footprint
            </Link>
          </p>

          <h2 id="absorption">L&apos;Absorption : la défense institutionnelle</h2>

          <p>
            L&apos;<strong>absorption</strong> est le pattern le plus
            fiable du Footprint. Elle se produit quand des ordres passifs
            de grande taille absorbent des ordres agressifs en sens opposé
            sans que le prix bouge.
          </p>

          <p>Trois signatures visuelles :</p>

          <ul>
            <li>
              <strong>Volume anormal à un niveau fixe</strong> — 3 à 5 fois
              le volume des niveaux voisins.
            </li>
            <li>
              <strong>Delta fort sans suivi du prix</strong> — les
              agresseurs n&apos;arrivent pas à pousser le prix.
            </li>
            <li>
              <strong>Wicks répétés au même niveau</strong> — sur plusieurs
              bougies consécutives.
            </li>
          </ul>

          <p>
            L&apos;absorption précède statistiquement un retournement.
            Plus le volume absorbé est élevé, plus le retournement est
            probable et fort.
          </p>

          <p>
            <Link href="/blog/absorption-order-flow/">
              Lire le guide complet : Absorption en Order Flow
            </Link>
          </p>

          <h2 id="cvd">Le CVD en parallèle du Footprint</h2>

          <p>
            Le <strong>CVD (Cumulative Volume Delta)</strong> additionne le
            delta de chaque bougie sur la séance. Il révèle la tendance
            globale de l&apos;agression au-delà du prix.
          </p>

          <p>
            Le couple Footprint + CVD donne deux niveaux de lecture
            complémentaires : le Footprint pour la lecture micro (bougie
            par bougie), le CVD pour la lecture macro (séance entière). Une
            divergence prix/CVD sur l&apos;ensemble de la séance, confirmée
            par une absorption Footprint, est un setup de retournement à
            très haute probabilité.
          </p>

          <p>
            <Link href="/blog/cvd-cumulative-volume-delta/">
              Lire le guide complet : CVD Cumulative Volume Delta
            </Link>
          </p>

          <h2 id="applications">Applications en trading</h2>

          <h3>Validation des entrées sur niveaux Market Profile</h3>

          <p>
            Quand le prix atteint un niveau{" "}
            <Link href="/market-profile/">Market Profile</Link> (VAH, VAL,
            POC, Naked POC), on attend la validation Footprint avant
            d&apos;entrer. Absorption + delta favorable + imbalance dans
            le sens du trade = setup à haute probabilité.
          </p>

          <h3>Détection des retournements en intraday</h3>

          <p>
            Une fin de tendance se manifeste par : delta divergent,
            absorption massive contre la tendance, imbalances contre-
            tendance. Ces trois signaux conjoints permettent de sortir
            avant le retournement majeur.
          </p>

          <h3>Filtrage des breakouts</h3>

          <p>
            Un breakout valide affiche : volume élevé, delta aligné,
            cluster d&apos;imbalances dans le sens. Un faux breakout
            affiche le contraire. Cette distinction filtre la majorité des
            faux signaux que l&apos;analyse technique classique laisse
            passer.
          </p>

          <h3>Gestion fine des positions</h3>

          <p>
            Le Footprint permet de gérer la position bougie par bougie. Un
            delta qui s&apos;inverse alors qu&apos;on est en position est
            un signal de coupe partielle. Une nouvelle absorption alignée
            est un signal d&apos;ajout.
          </p>

          <CTACard
            label="Mentorat Footprint"
            title="Lisez le Footprint comme les institutionnels."
            description="Sessions de trading live quotidiennes, configuration Sierra Chart fournie, méthode Footprint + Market Profile + Order Flow enseignée en confluence."
          />

          <h2 id="guides">Tous les guides Footprint</h2>

          <div className="related-grid">
            <Link href="/blog/footprint-chart-trading/" className="related-card">
              <div className="related-cat">Pilier</div>
              <h3>Footprint Chart : lire le volume comme un pro</h3>
              <p>L&apos;article de référence : delta, déséquilibres, absorption.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/delta-footprint-trading/" className="related-card">
              <div className="related-cat">Delta</div>
              <h3>Delta Footprint Trading</h3>
              <p>Volume delta, agressivité acheteurs/vendeurs, lectures alignées et divergentes.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/imbalance-footprint/" className="related-card">
              <div className="related-cat">Pattern</div>
              <h3>Imbalance Footprint</h3>
              <p>Détecter et trader les déséquilibres de volume — clusters d&apos;imbalances.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/absorption-order-flow/" className="related-card">
              <div className="related-cat">Pattern</div>
              <h3>Absorption en Order Flow</h3>
              <p>Détecter quand les institutionnels absorbent les ordres — précurseur de retournement.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/cvd-cumulative-volume-delta/" className="related-card">
              <div className="related-cat">CVD</div>
              <h3>CVD : Cumulative Volume Delta</h3>
              <p>Le delta cumulé sur la séance — divergences avec le prix, retournements macro.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/sierra-chart-configuration/" className="related-card">
              <div className="related-cat">Setup</div>
              <h3>Sierra Chart : configuration complète</h3>
              <p>Le setup pas à pas pour configurer Sierra Chart avec les bons paramètres Footprint.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
          </div>

          <h2 id="faq">Questions fréquentes sur le Footprint Chart</h2>

          <CTACard />
        </article>
      </div>

      <FAQ items={faq} />

      <section className="form-sec" id="candidater">
        <div className="form-inner">
          <div className="sec-label">Candidature</div>
          <h2 className="sec-title">Maîtriser le Footprint en mentorat.</h2>
          <p className="sec-desc">
            Sessions live quotidiennes. Configuration Sierra Chart fournie.
            Vérifiez votre éligibilité en 15 minutes.
          </p>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/#candidater" className="btn-p">
              Candidater au mentorat BASS{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
