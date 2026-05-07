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
  title: "Order Flow Trading : Guide Complet pour Lire le Flux d'Ordres",
  description:
    "Tout sur l'Order Flow : DOM, Tape Reading, absorption, CVD, imbalance, spoofing, agressivité. Guide francophone par Sébastien Constant.",
  path: "/order-flow/",
});

const toc = [
  { id: "definition", label: "Qu'est-ce que l'Order Flow ?" },
  { id: "outils", label: "Les 5 outils de l'Order Flow" },
  { id: "dom", label: "Le DOM (Depth of Market)" },
  { id: "tape", label: "Le Tape Reading" },
  { id: "footprint-cvd", label: "Footprint et CVD" },
  { id: "absorption-imbalance", label: "Absorption et imbalance" },
  { id: "spoofing", label: "Spoofing et iceberg" },
  { id: "applications", label: "Applications en trading" },
  { id: "guides", label: "Tous les guides" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  {
    question: "Qu'est-ce que l'Order Flow en trading ?",
    answer:
      "L'Order Flow est l'analyse en temps réel des ordres exécutés sur le marché : qui achète, qui vend, à quel prix, avec quelle agressivité. Contrairement à l'analyse technique classique qui regarde les prix passés, l'Order Flow lit l'activité présente via le carnet d'ordres (DOM), le Time & Sales (tape) et le Footprint Chart. C'est l'outil principal des traders professionnels sur Futures.",
  },
  {
    question: "Order Flow ou analyse technique : laquelle utiliser ?",
    answer:
      "Les deux ne sont pas exclusifs mais l'Order Flow est plus précis. L'analyse technique classique (RSI, MACD, moyennes mobiles) est retardée par construction — elle calcule sur du passé. L'Order Flow lit l'agression institutionnelle en temps réel. Les meilleurs traders combinent une lecture structurelle (Market Profile) pour identifier les zones, et l'Order Flow pour valider l'entrée à la seconde près.",
  },
  {
    question: "Quels outils pour faire de l'Order Flow ?",
    answer:
      "Sierra Chart est la référence professionnelle. Bookmap excelle pour la heatmap de liquidité. ATAS est plus accessible avec une interface moderne. NinjaTrader est une alternative répandue. Côté données, l'abonnement aux flux CME niveau 2 est indispensable pour lire le DOM réel. Comptez 100-250 €/mois pour une configuration complète plateforme + données.",
  },
  {
    question: "L'Order Flow fonctionne-t-il sur tous les marchés ?",
    answer:
      "Il fonctionne mieux sur les marchés centralisés et liquides : Futures (E-mini S&P 500, Nasdaq, indices européens, matières premières), actions à fort volume. Sur le forex retail, l'Order Flow est fragmenté entre brokers et donc peu fiable. Sur les crypto majeures (BTC, ETH), il fonctionne mais demande une plateforme adaptée.",
  },
  {
    question: "Combien de temps pour maîtriser l'Order Flow ?",
    answer:
      "Comptez 6 à 12 mois en mentorat structuré, 18 à 36 mois en autodidacte. La difficulté vient du volume d'informations : DOM, Tape, Footprint, CVD, delta, imbalance — chaque outil demande une lecture spécifique. La progression la plus rapide passe par observer un trader expérimenté en direct.",
  },
  {
    question: "Order Flow et Market Profile : faut-il les combiner ?",
    answer:
      "Oui, c'est la combinaison optimale. Le Market Profile vous dit OÙ trader (niveaux de Value Area, POC, structure). L'Order Flow vous dit QUAND entrer précisément à ces niveaux (absorption, imbalance, delta favorable). Sans Market Profile, l'Order Flow manque de contexte. Sans Order Flow, le Market Profile manque de précision d'exécution.",
  },
  {
    question: "Le spoofing est-il un problème pour l'Order Flow ?",
    answer:
      "Le spoofing (ordres factices retirés avant exécution) existe et brouille la lecture du DOM. Les traders professionnels apprennent à le reconnaître : ordres qui disparaissent quand le prix approche, layering massif sans suivi. Le Footprint Chart, qui montre les transactions réellement exécutées, est moins sensible au spoofing que le DOM seul.",
  },
];

export default function OrderFlowHubPage() {
  return (
    <>
      <ReadingProgress />
      <CollectionPageJsonLd
        name="Order Flow Trading — Guide complet et articles"
        description="Tout sur l'Order Flow : DOM, Tape Reading, absorption, CVD, imbalance, spoofing, applications."
        url="/order-flow/"
        articleUrls={[
          "/blog/order-flow-trading-france/",
          "/blog/carnet-ordres-dom-futures/",
          "/blog/tape-reading-flux-ordres/",
          "/blog/absorption-order-flow/",
          "/blog/cvd-cumulative-volume-delta/",
          "/blog/imbalance-footprint/",
          "/blog/delta-footprint-trading/",
          "/blog/spoofing-iceberg-orders/",
          "/blog/volume-spread-analysis/",
          "/blog/footprint-chart-trading/",
        ]}
      />
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Order Flow" },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Order Flow</span>
          </nav>
          <div className="blog-hero-cat">Hub thématique</div>
          <h1 className="blog-hero-title">
            Order Flow.<br />
            Le flux d&apos;ordres en direct.
          </h1>
          <p className="blog-hero-desc">
            DOM, Tape Reading, Footprint, CVD, absorption, imbalance,
            spoofing — tout ce qu&apos;il faut pour lire l&apos;activité
            institutionnelle en temps réel. Guide francophone par{" "}
            <Link href="/sebastien-constant/">Sébastien Constant</Link>.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <aside className="article-sidebar">
          <BlogTOC items={toc} />
        </aside>
        <article className="article-body">
          <h2 id="definition">Qu&apos;est-ce que l&apos;Order Flow ?</h2>

          <p>
            L&apos;<strong>Order Flow</strong> est l&apos;analyse en temps
            réel du flux d&apos;ordres exécutés sur le marché. Là où
            l&apos;analyse technique classique vous dit ce qui s&apos;est
            passé, l&apos;Order Flow vous dit ce qui se passe maintenant :
            qui achète, qui vend, à quel prix, et avec quelle agressivité.
          </p>

          <p>
            Cette lecture s&apos;appuie sur trois sources de données
            complémentaires :
          </p>

          <ul>
            <li>
              <strong>Le carnet d&apos;ordres (DOM)</strong> — les ordres
              en attente, qui révèlent les intentions des participants.
            </li>
            <li>
              <strong>Le Time &amp; Sales (Tape)</strong> — chaque
              transaction exécutée, prix par prix, avec son volume et son
              agresseur.
            </li>
            <li>
              <strong>Le Footprint Chart</strong> — l&apos;agrégation
              visuelle des transactions par bougie et par niveau de prix.
            </li>
          </ul>

          <p>
            Pour une introduction approfondie,{" "}
            <Link href="/blog/order-flow-trading-france/">
              lire le guide complet de l&apos;Order Flow Trading
            </Link>
            .
          </p>

          <h2 id="outils">Les 5 outils de l&apos;Order Flow</h2>

          <ol>
            <li>
              <strong>DOM (Depth of Market)</strong> — le carnet d&apos;
              ordres en temps réel
            </li>
            <li>
              <strong>Time &amp; Sales (Tape)</strong> — la liste des
              transactions exécutées
            </li>
            <li>
              <strong>Footprint Chart</strong> — la visualisation des
              volumes bid/ask par bougie
            </li>
            <li>
              <strong>CVD (Cumulative Volume Delta)</strong> — le delta
              cumulé sur la séance
            </li>
            <li>
              <strong>VWAP &amp; Volume Profile</strong> — les références
              institutionnelles d&apos;exécution
            </li>
          </ol>

          <h2 id="dom">Le DOM (Depth of Market)</h2>

          <p>
            Le <strong>DOM</strong>, ou Depth of Market, affiche en temps
            réel le carnet d&apos;ordres : bids (acheteurs) sous le prix
            actuel, asks (vendeurs) au-dessus, avec le volume disponible à
            chaque niveau. C&apos;est la vue brute des intentions de
            trading.
          </p>

          <p>Trois lectures clés du DOM :</p>

          <ul>
            <li>
              <strong>Les murs</strong> — concentrations anormales
              d&apos;ordres limites sur un niveau, agissent comme supports/
              résistances institutionnels.
            </li>
            <li>
              <strong>Le spoofing</strong> — gros ordres limites placés
              pour influencer la perception, puis retirés.
            </li>
            <li>
              <strong>Les ordres iceberg</strong> — gros volumes
              fractionnés en petits ordres pour cacher la taille réelle.
            </li>
          </ul>

          <p>
            <Link href="/blog/carnet-ordres-dom-futures/">
              Lire le guide complet : Carnet d&apos;ordres DOM Futures
            </Link>
          </p>

          <h2 id="tape">Le Tape Reading</h2>

          <p>
            Le <strong>Tape Reading</strong> est la lecture du Time &amp;
            Sales — le défilement des transactions exécutées seconde après
            seconde. Chaque ligne contient prix, volume, heure et
            agresseur.
          </p>

          <p>Trois patterns à reconnaître :</p>

          <ul>
            <li>
              <strong>Tape rapide vs lent</strong> — accélération soudaine
              = afflux institutionnel.
            </li>
            <li>
              <strong>Stacked prints</strong> — exécutions répétées au même
              prix, signal d&apos;absorption.
            </li>
            <li>
              <strong>Sweep</strong> — exécutions traversant plusieurs
              niveaux en une seconde, agression institutionnelle.
            </li>
          </ul>

          <p>
            <Link href="/blog/tape-reading-flux-ordres/">
              Lire le guide complet : Tape Reading et flux d&apos;ordres
            </Link>
          </p>

          <h2 id="footprint-cvd">Footprint et CVD</h2>

          <p>
            Le <Link href="/footprint/"><strong>Footprint Chart</strong></Link>
            {" "}agrège visuellement le tape en bougies. Chaque bougie est
            éclatée en niveaux de prix avec volume bid (vendeurs agressifs)
            et ask (acheteurs agressifs) à chaque niveau. Vue la plus dense
            en information sur l&apos;activité.
          </p>

          <p>
            Le <strong>CVD (Cumulative Volume Delta)</strong> additionne le
            delta sur la séance. Une divergence prix/CVD (prix qui monte
            mais CVD qui baisse) annonce souvent un retournement.
          </p>

          <p>
            Lectures complémentaires :{" "}
            <Link href="/blog/footprint-chart-trading/">Footprint Chart</Link>
            {" "}·{" "}
            <Link href="/blog/cvd-cumulative-volume-delta/">CVD expliqué</Link>
            {" "}·{" "}
            <Link href="/blog/delta-footprint-trading/">Delta Footprint</Link>
            .
          </p>

          <h2 id="absorption-imbalance">Absorption et imbalance</h2>

          <h3>L&apos;absorption</h3>

          <p>
            L&apos;<strong>absorption</strong> se produit quand des ordres
            passifs absorbent des ordres agressifs en sens opposé sans que
            le prix bouge. Signal de présence institutionnelle forte —
            précède souvent un retournement.{" "}
            <Link href="/blog/absorption-order-flow/">
              Lire le guide complet
            </Link>
            .
          </p>

          <h3>L&apos;imbalance</h3>

          <p>
            L&apos;<strong>imbalance</strong> est un déséquilibre fort
            entre volume bid et ask à un niveau. Seuil classique 3:1 ou
            4:1. Plusieurs imbalances consécutives signalent une
            accélération institutionnelle.{" "}
            <Link href="/blog/imbalance-footprint/">
              Lire le guide complet
            </Link>
            .
          </p>

          <h2 id="spoofing">Spoofing et ordres iceberg</h2>

          <p>
            Le{" "}
            <Link href="/blog/spoofing-iceberg-orders/">
              spoofing et les ordres iceberg
            </Link>{" "}
            sont les deux principales manipulations du carnet à
            reconnaître. Le spoofing pousse une perception fausse de
            liquidité ; l&apos;iceberg cache la vraie taille d&apos;une
            position. Les deux brouillent la lecture brute du DOM mais
            laissent des signatures dans le Tape et le Footprint.
          </p>

          <p>
            Le{" "}
            <Link href="/blog/volume-spread-analysis/">
              Volume Spread Analysis (VSA)
            </Link>{" "}
            est une école complémentaire à l&apos;Order Flow — lecture du
            spread bid/ask combinée au volume pour détecter les phases
            d&apos;accumulation et de distribution.
          </p>

          <h2 id="applications">Applications en trading</h2>

          <h3>Confluence avec le Market Profile</h3>

          <p>
            Le <Link href="/market-profile/">Market Profile</Link> définit
            les niveaux structurels (VAH, VAL, POC, Naked POC, Initial
            Balance). L&apos;Order Flow valide l&apos;entrée à ces niveaux :
            absorption + delta favorable + imbalance dans le sens du trade =
            setup à haute probabilité.
          </p>

          <h3>Lecture en intraday Futures</h3>

          <p>
            En intraday Futures (ES, NQ, GC, CL), l&apos;Order Flow est la
            lecture dominante après l&apos;ouverture. Tape rapide à
            l&apos;ouverture = agression directionnelle. Absorption sur
            VAL = opportunité de long. CVD divergent en fin de tendance =
            préparer la sortie.
          </p>

          <h3>Validation des breakouts</h3>

          <p>
            Un breakout sans volume ni imbalance favorable est un faux
            signal. Un breakout avec sweep, imbalance et CVD aligné est un
            vrai mouvement. L&apos;Order Flow filtre les faux breakouts
            mieux que tout indicateur technique.
          </p>

          <h3>Gestion fine des positions</h3>

          <p>
            Quand l&apos;Order Flow inverse (absorption opposée, imbalance
            contraire, CVD qui décroche), c&apos;est le signal de coupure
            anticipée — avant même que le stop technique soit touché.
          </p>

          <CTACard
            label="Mentorat Order Flow"
            title="Lisez le flux institutionnel en direct, chaque jour."
            description="Sessions de trading live quotidiennes. DOM, Tape, Footprint, CVD — tous les outils enseignés sur Sierra Chart, en confluence avec le Market Profile."
          />

          <h2 id="guides">Tous les guides Order Flow</h2>

          <div className="related-grid">
            <Link href="/blog/order-flow-trading-france/" className="related-card">
              <div className="related-cat">Pilier</div>
              <h3>Order Flow Trading — guide francophone</h3>
              <p>Carnet d&apos;ordres, Time &amp; Sales, lecture du flux institutionnel.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/carnet-ordres-dom-futures/" className="related-card">
              <div className="related-cat">DOM</div>
              <h3>Carnet d&apos;ordres DOM Futures</h3>
              <p>Structure du carnet, murs, DOM dynamique, ordres iceberg.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/tape-reading-flux-ordres/" className="related-card">
              <div className="related-cat">Tape</div>
              <h3>Tape Reading et flux d&apos;ordres</h3>
              <p>Lire le Time &amp; Sales : tape rapide, stacked prints, sweeps.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/absorption-order-flow/" className="related-card">
              <div className="related-cat">Pattern</div>
              <h3>Absorption en Order Flow</h3>
              <p>Détecter quand les institutionnels absorbent silencieusement les ordres.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/cvd-cumulative-volume-delta/" className="related-card">
              <div className="related-cat">CVD</div>
              <h3>CVD : Cumulative Volume Delta</h3>
              <p>Delta cumulé sur séance, divergences avec le prix.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/imbalance-footprint/" className="related-card">
              <div className="related-cat">Pattern</div>
              <h3>Imbalance Footprint</h3>
              <p>Détecter les déséquilibres de volume — clusters d&apos;imbalances et accélérations.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/delta-footprint-trading/" className="related-card">
              <div className="related-cat">Delta</div>
              <h3>Delta Footprint Trading</h3>
              <p>Volume delta, agressivité acheteurs/vendeurs, lectures alignées et divergentes.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/spoofing-iceberg-orders/" className="related-card">
              <div className="related-cat">Manip</div>
              <h3>Spoofing et ordres iceberg</h3>
              <p>Reconnaître les manipulations du carnet d&apos;ordres et leur signature au Tape.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/volume-spread-analysis/" className="related-card">
              <div className="related-cat">Méthode</div>
              <h3>Volume Spread Analysis (VSA)</h3>
              <p>Lecture du spread bid/ask + volume — accumulation et distribution.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/footprint-chart-trading/" className="related-card">
              <div className="related-cat">Outil</div>
              <h3>Footprint Chart : lire le volume</h3>
              <p>Agrégation visuelle de l&apos;Order Flow : delta, imbalance, absorption.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
          </div>

          <h2 id="faq">Questions fréquentes sur l&apos;Order Flow</h2>

          <CTACard />
        </article>
      </div>

      <FAQ items={faq} />

      <section className="form-sec" id="candidater">
        <div className="form-inner">
          <div className="sec-label">Candidature</div>
          <h2 className="sec-title">Maîtriser l&apos;Order Flow en mentorat.</h2>
          <p className="sec-desc">
            Mentorat sélectif. Sessions live quotidiennes sur Sierra Chart.
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
