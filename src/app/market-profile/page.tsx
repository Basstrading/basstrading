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
  title: "Market Profile : Guide Complet pour Lire la Structure du Marché",
  description:
    "Tout sur le Market Profile : Value Area, POC, Initial Balance, types de journées, lecture TPO, composite profile. Guide francophone par Sébastien Constant.",
  path: "/market-profile/",
});

const toc = [
  { id: "definition", label: "Qu'est-ce que le Market Profile ?" },
  { id: "concepts", label: "Les concepts fondamentaux" },
  { id: "vocabulaire", label: "POC, Value Area, VAH, VAL" },
  { id: "types-journees", label: "Les types de journées" },
  { id: "patterns", label: "Patterns avancés (composite, single prints)" },
  { id: "applications", label: "Applications en trading" },
  { id: "guides", label: "Tous les guides" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  {
    question: "Qu'est-ce que le Market Profile en trading ?",
    answer:
      "Le Market Profile est un outil d'analyse développé par J. Peter Steidlmayer dans les années 1980 au Chicago Board of Trade. Il organise l'activité du marché par prix et par temps via des TPO (Time Price Opportunity), révélant où la valeur est acceptée (Value Area), rejetée, et où se concentrent les volumes (Point of Control). Là où les chandeliers montrent ce qui s'est passé, le Market Profile montre pourquoi.",
  },
  {
    question: "À quoi sert la Value Area ?",
    answer:
      "La Value Area délimite la zone de prix où environ 70 % de l'activité de la séance s'est produite. Ses bornes sont la Value Area High (VAH) et la Value Area Low (VAL). Les institutionnels considèrent cette zone comme le consensus de valeur du marché. En dehors, le marché est en exploration ou en rejet. C'est la référence centrale pour planifier une séance.",
  },
  {
    question: "Quelle différence entre Market Profile et Volume Profile ?",
    answer:
      "Le Market Profile mesure le temps passé à chaque niveau de prix (TPO). Le Volume Profile mesure le volume échangé. Les deux sont complémentaires : quand temps et volume convergent, c'est un support institutionnel majeur. Quand ils divergent, le niveau est moins fiable. Les meilleurs traders utilisent les deux en superposition.",
  },
  {
    question: "Sur quels marchés le Market Profile fonctionne-t-il ?",
    answer:
      "Le Market Profile est universel mais brille particulièrement sur les Futures (E-mini S&P 500, Nasdaq, indices européens, matières premières). Plus le marché est liquide et centralisé, plus la lecture est fiable. Sur le forex retail (données fragmentées entre brokers), la lecture est moins précise. Sur les actions liquides et les crypto majeures, il fonctionne aussi.",
  },
  {
    question: "Combien de temps pour maîtriser le Market Profile ?",
    answer:
      "Comptez 3 à 6 mois pour comprendre les concepts fondamentaux (Value Area, POC, types de journées) et 12 à 18 mois pour les appliquer en trading rentable. La courbe est plus rapide avec un mentorat structuré, où vous voyez la lecture en direct chaque jour. En autodidacte avec uniquement des livres (Mind Over Markets, Markets in Profile), comptez 2 à 3 ans pour atteindre l'aisance.",
  },
  {
    question: "Quel logiciel utiliser pour le Market Profile ?",
    answer:
      "Sierra Chart est le standard professionnel — paramètres TPO complets, templates, support natif des données CME. ATAS est une alternative plus accessible avec une interface moderne. Bookmap est utile en complément pour visualiser le carnet d'ordres en parallèle. TradingView a ajouté des outils Volume Profile mais reste limité face à Sierra Chart pour le trading professionnel.",
  },
];

export default function MarketProfileHubPage() {
  return (
    <>
      <ReadingProgress />
      <CollectionPageJsonLd
        name="Market Profile — Guide complet et articles"
        description="Tout sur le Market Profile : Value Area, POC, Initial Balance, types de journées, composite profile, applications."
        url="/market-profile/"
        articleUrls={[
          "/blog/market-profile-guide-complet/",
          "/blog/auction-market-theory/",
          "/blog/value-area-trading/",
          "/blog/poc-point-of-control/",
          "/blog/initial-balance-trading/",
          "/blog/types-journees-market-profile/",
          "/blog/composite-profile-market-profile/",
          "/blog/poor-high-low-market-profile/",
          "/blog/single-prints-market-profile/",
          "/blog/volume-profile-guide/",
        ]}
      />
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Market Profile" },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Market Profile</span>
          </nav>
          <div className="blog-hero-cat">Hub thématique</div>
          <h1 className="blog-hero-title">
            Market Profile.<br />
            La carte de la valeur.
          </h1>
          <p className="blog-hero-desc">
            Tout ce qu&apos;il faut savoir sur le Market Profile : Value
            Area, POC, Initial Balance, types de journées, lecture TPO. La
            méthode de référence des desks institutionnels — décryptée par{" "}
            <Link href="/sebastien-constant/">Sébastien Constant</Link>.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <aside className="article-sidebar">
          <BlogTOC items={toc} />
        </aside>
        <article className="article-body">
          <h2 id="definition">Qu&apos;est-ce que le Market Profile ?</h2>

          <p>
            Le <strong>Market Profile</strong> est un outil d&apos;analyse
            du marché développé dans les années 1980 par{" "}
            <strong>J. Peter Steidlmayer</strong>, trader au Chicago Board
            of Trade. Son objectif : organiser l&apos;activité de trading
            d&apos;une manière qui révèle <em>où</em> et <em>pourquoi</em>{" "}
            le marché trouve la valeur, plutôt que de simplement lister les
            mouvements de prix passés.
          </p>

          <p>
            Concrètement, le Market Profile transforme un graphique de prix
            classique en distribution statistique. Chaque demi-heure de
            trading est représentée par une lettre (TPO — Time Price
            Opportunity). En empilant ces lettres sur l&apos;axe vertical
            des prix, on obtient un profil — souvent en cloche pour les
            séances équilibrées, allongé pour les séances de tendance.
          </p>

          <p>
            Pour une introduction complète,{" "}
            <Link href="/blog/market-profile-guide-complet/">
              lire le guide complet du Market Profile
            </Link>
            .
          </p>

          <h2 id="concepts">Les concepts fondamentaux</h2>

          <h3>L&apos;Auction Market Theory (AMT)</h3>

          <p>
            Le marché est un mécanisme d&apos;enchères bilatérales. Le prix
            monte pour trouver des vendeurs, descend pour trouver des
            acheteurs. Quand il a trouvé les deux, il oscille en équilibre.
            Cette logique simple est le fondement théorique du Market
            Profile.{" "}
            <Link href="/blog/auction-market-theory/">
              Lire le guide complet de l&apos;Auction Market Theory
            </Link>
            .
          </p>

          <h3>L&apos;acceptation et le rejet de prix</h3>

          <p>
            L&apos;acceptation se produit quand le marché passe du temps à
            un niveau (volume élevé, nombreux TPO, consolidation). C&apos;
            est le consensus des participants. Le rejet est l&apos;inverse :
            le marché passe rapidement, peu de volume, wick ou tail sur le
            profil.
          </p>

          <h3>L&apos;équilibre et le déséquilibre</h3>

          <p>
            Un marché en équilibre affiche un profil en cloche — Value Area
            stable, prix oscillant entre VAH et VAL. Un marché en
            déséquilibre affiche un profil allongé — Value Areas successives
            décalées dans la même direction. Cette distinction guide le
            choix entre stratégies de mean reversion et de tendance.
          </p>

          <h3>L&apos;Initial Balance (IB)</h3>

          <p>
            L&apos;<Link href="/blog/initial-balance-trading/">Initial
            Balance</Link> correspond à la première heure de trading. Elle
            définit les premières bornes de la séance et oriente souvent le
            reste de la journée. Une IB étroite annonce une expansion
            probable. Une IB large annonce une journée de range. La cassure
            d&apos;IB en milieu de séance est un signal majeur.
          </p>

          <h2 id="vocabulaire">POC, Value Area, VAH, VAL</h2>

          <h3>POC — Point of Control</h3>

          <p>
            Le <Link href="/blog/poc-point-of-control/"><strong>Point
            of Control</strong></Link> est le niveau de prix où le plus de
            TPO se sont accumulés. C&apos;est le centre gravitationnel du
            profil — le prix le plus accepté par le marché sur la période.
            Le POC agit fréquemment comme un aimant : un marché qui s&apos;
            éloigne y revient statistiquement avec une probabilité élevée.
          </p>

          <h3>Value Area</h3>

          <p>
            La <Link href="/blog/value-area-trading/"><strong>Value
            Area</strong></Link> est la zone qui contient environ 70 % de
            l&apos;activité de la séance. Elle correspond à un écart-type
            autour du POC. C&apos;est la zone de consensus de valeur. En
            dehors, le marché est en exploration.
          </p>

          <h3>VAH — Value Area High</h3>

          <p>
            La borne supérieure de la Value Area. Niveau de résistance majeur
            quand le prix vient la tester par le bas. La cassure de VAH
            signale souvent le début d&apos;une expansion haussière.
          </p>

          <h3>VAL — Value Area Low</h3>

          <p>
            La borne inférieure de la Value Area. Symétrique à VAH —
            résistance majeure par le haut, support majeur par le bas. Le
            duo VAL/VAH balise la séance comme un canal statistique.
          </p>

          <h2 id="types-journees">Les types de journées Market Profile</h2>

          <p>
            Steidlmayer a identifié plusieurs archétypes de journées. Les
            reconnaître tôt dans la séance permet d&apos;adapter sa
            stratégie : Trend Day (suivre la tendance), Normal Day (fade
            les extrêmes), Neutral Day (indécision, attendre), Double
            Distribution Day (deux zones distinctes), Trending Day
            (tendance prolongée).
          </p>

          <p>
            <Link href="/blog/types-journees-market-profile/">
              Lire le guide complet : les types de journées Market Profile
            </Link>
            .
          </p>

          <h2 id="patterns">Patterns avancés du Market Profile</h2>

          <h3>Composite Profile</h3>

          <p>
            Le{" "}
            <Link href="/blog/composite-profile-market-profile/">
              composite profile
            </Link>{" "}
            agrège plusieurs séances en un seul profil. Il révèle les
            niveaux structurels majeurs (POC composite, Value Area
            composite) qui dominent une période — semaine, mois, trimestre.
            Indispensable pour comprendre le contexte macro avant chaque
            séance.
          </p>

          <h3>Single Prints</h3>

          <p>
            Les{" "}
            <Link href="/blog/single-prints-market-profile/">
              single prints
            </Link>{" "}
            sont des niveaux de prix avec un seul TPO — c&apos;est-à-dire
            traversés une seule fois pendant la séance. Ils signalent un
            mouvement rapide et un niveau structurel à risque. Les single
            prints restés ouverts (non remplis) sont fréquemment retestés.
          </p>

          <h3>Poor High / Poor Low</h3>

          <p>
            Un{" "}
            <Link href="/blog/poor-high-low-market-profile/">
              poor high (ou poor low)
            </Link>{" "}
            est un extrême de séance qui n&apos;a pas été suffisamment
            « travaillé » — peu de TPO au niveau, pas de rejet franc. Ces
            extrêmes sont statistiquement réattaqués par le marché qui
            cherche à compléter la liquidité — ce sont des targets de
            confiance pour les retours suivants.
          </p>

          <h2 id="applications">Applications concrètes</h2>

          <h3>Préparer la séance</h3>

          <p>
            Avant l&apos;ouverture, on identifie les niveaux clés des
            séances précédentes : POC veille, VAH/VAL veille, Naked POC non
            testé, IB. Ces niveaux servent de références pour les entrées
            et les invalidations. Le composite profile sur 5-10 séances
            donne le contexte macro.
          </p>

          <h3>Lire l&apos;ouverture</h3>

          <p>
            Le type d&apos;ouverture (Open-Drive, Open-Test-Drive, Open-
            Rejection-Reverse, Open-Auction) renseigne sur la conviction
            des participants. Un Open-Drive vers le haut sans rotation
            indique un consensus haussier — opportunité de tendance.
          </p>

          <h3>Identifier les zones d&apos;entrée</h3>

          <p>
            Les retests de VAH/VAL, les retours sur POC, les rebonds sur
            Naked POC et les cassures d&apos;Initial Balance sont les
            zones classiques d&apos;entrée. La confluence avec l&apos;
            <Link href="/order-flow/">Order Flow</Link> (absorption,
            imbalance, delta favorable) augmente significativement la
            probabilité de réussite.
          </p>

          <h3>Gérer la position</h3>

          <p>
            Les niveaux Market Profile servent aussi de cibles et d&apos;
            invalidations. Stop sous VAL ou au-delà du Naked POC. Targets
            sur VAH, POC suivant, ou prolongation de la Value Area.
          </p>

          <CTACard
            label="Mentorat Market Profile"
            title="Apprenez à lire la structure du marché en direct."
            description="Sessions de trading live quotidiennes. Méthode complète : Market Profile, Order Flow, Footprint, Gamma. Configuration Sierra Chart fournie."
          />

          <h2 id="guides">Tous les guides Market Profile</h2>

          <p>
            Les articles de référence du blog BASS Trading consacrés au
            Market Profile et aux concepts liés.
          </p>

          <div className="related-grid">
            <Link href="/blog/market-profile-guide-complet/" className="related-card">
              <div className="related-cat">Pilier</div>
              <h3>Market Profile : le guide complet</h3>
              <p>Origine, concepts fondamentaux, Value Area, POC, types de journées — l&apos;article de référence pour démarrer.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/auction-market-theory/" className="related-card">
              <div className="related-cat">Théorie</div>
              <h3>Auction Market Theory</h3>
              <p>La logique du marché : acceptation, rejet, équilibre, déséquilibre — la théorie qui sous-tend le Market Profile.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/value-area-trading/" className="related-card">
              <div className="related-cat">Concept</div>
              <h3>Value Area en trading</h3>
              <p>VAH, VAL, 70 % d&apos;activité — la zone de consensus de valeur.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/poc-point-of-control/" className="related-card">
              <div className="related-cat">Concept</div>
              <h3>POC — Point of Control</h3>
              <p>Le centre de gravité du profil — l&apos;aimant institutionnel.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/initial-balance-trading/" className="related-card">
              <div className="related-cat">Concept</div>
              <h3>Initial Balance</h3>
              <p>La première heure de trading — comment elle oriente le reste de la séance.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/types-journees-market-profile/" className="related-card">
              <div className="related-cat">Patterns</div>
              <h3>Types de journées</h3>
              <p>Trend Day, Normal, Neutral, Double Distribution — reconnaître l&apos;archétype tôt.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/composite-profile-market-profile/" className="related-card">
              <div className="related-cat">Avancé</div>
              <h3>Composite Profile</h3>
              <p>Agrégation multi-séance — révèle les niveaux structurels majeurs.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/single-prints-market-profile/" className="related-card">
              <div className="related-cat">Pattern</div>
              <h3>Single Prints</h3>
              <p>Niveaux à un seul TPO — signaux de rapidité et zones de retest probables.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/poor-high-low-market-profile/" className="related-card">
              <div className="related-cat">Pattern</div>
              <h3>Poor High / Poor Low</h3>
              <p>Extrêmes mal travaillés — targets de retour à haute probabilité.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/volume-profile-guide/" className="related-card">
              <div className="related-cat">Cousin</div>
              <h3>Volume Profile</h3>
              <p>Le complément volumétrique du Market Profile : HVN, LVN, Naked POC.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
          </div>

          <h2 id="faq">Questions fréquentes sur le Market Profile</h2>

          <CTACard />
        </article>
      </div>

      <FAQ items={faq} />

      <section className="form-sec" id="candidater">
        <div className="form-inner">
          <div className="sec-label">Candidature</div>
          <h2 className="sec-title">Maîtriser le Market Profile en mentorat.</h2>
          <p className="sec-desc">
            Mentorat sélectif. Sessions live quotidiennes. Vérifiez votre
            éligibilité en 15 minutes.
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
