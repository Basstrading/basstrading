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
  title: "Volume Profile : Le Guide Complet pour Trader le Volume par Prix",
  description:
    "Tout sur le Volume Profile : HVN, LVN, Naked POC, Session, Daily, Composite, Fixed Range. Guide francophone par Sébastien Constant.",
  path: "/volume-profile/",
});

const toc = [
  { id: "definition", label: "Qu'est-ce que le Volume Profile ?" },
  { id: "vs-market", label: "Volume Profile vs Market Profile" },
  { id: "concepts", label: "HVN, LVN, POC, Naked POC" },
  { id: "types", label: "Les types de Volume Profile" },
  { id: "applications", label: "Applications en trading" },
  { id: "outils", label: "Outils et plateformes" },
  { id: "guides", label: "Tous les guides" },
  { id: "faq", label: "Questions fréquentes" },
];

const faq = [
  {
    question: "Qu'est-ce que le Volume Profile ?",
    answer:
      "Le Volume Profile est un outil d'analyse qui distribue le volume échangé non pas dans le temps (comme les indicateurs de volume classiques en bas du graphique) mais par niveau de prix. Il révèle où le marché a accepté la valeur (volume élevé) et où il l'a rejetée (volume faible) sur une période donnée.",
  },
  {
    question: "Volume Profile ou Market Profile : lequel utiliser ?",
    answer:
      "Les deux sont complémentaires. Le Market Profile mesure le temps passé à chaque niveau de prix (TPO). Le Volume Profile mesure le volume échangé. Quand temps et volume convergent à un niveau, c'est un support institutionnel majeur. La meilleure approche : utiliser les deux en superposition.",
  },
  {
    question: "Que signifient HVN et LVN ?",
    answer:
      "HVN signifie High Volume Node — un niveau de prix où le volume est anormalement élevé, souvent un support/résistance majeur. LVN signifie Low Volume Node — un niveau où le volume est faible, souvent traversé rapidement. Les HVN agissent comme aimants, les LVN comme zones d'expansion.",
  },
  {
    question: "Qu'est-ce qu'un Naked POC ?",
    answer:
      "Un Naked POC (vPOC nu) est un Point of Control de séance précédente qui n'a pas encore été retouché. Statistiquement, le marché vient retester ces niveaux dans 70-80 % des cas dans les jours qui suivent. Identifier les Naked POC sur les 5-10 dernières séances donne une carte précise des cibles probables.",
  },
  {
    question: "Comment afficher le Volume Profile sur ma plateforme ?",
    answer:
      "Sierra Chart est la référence professionnelle (Volume Profile natif, paramétrage fin). ATAS l'inclut dans son offre standard. Bookmap propose un Volume Profile combiné à la heatmap de liquidité. TradingView a un Volume Profile basique mais limité (Fixed Range, Session, Visible Range). Pour le trading professionnel, Sierra Chart reste le choix par défaut.",
  },
  {
    question: "Quelle période de Volume Profile utiliser ?",
    answer:
      "Trois périodes essentielles : Session Volume Profile (séance en cours, scalping/day trading), Daily Volume Profile (chaque séance individuelle, pour identifier les Naked POC), Composite Volume Profile (cumul multi-jours, pour les niveaux structurels majeurs).",
  },
];

export default function VolumeProfileHubPage() {
  return (
    <>
      <ReadingProgress />
      <CollectionPageJsonLd
        name="Volume Profile — Guide complet et articles"
        description="Tout sur le Volume Profile : HVN, LVN, Naked POC, Session, Composite, applications."
        url="/volume-profile/"
        articleUrls={[
          "/blog/volume-profile-guide/",
          "/blog/poc-point-of-control/",
          "/blog/value-area-trading/",
          "/blog/composite-profile-market-profile/",
          "/blog/market-profile-guide-complet/",
          "/blog/auction-market-theory/",
        ]}
      />
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Volume Profile" },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Volume Profile</span>
          </nav>
          <div className="blog-hero-cat">Hub thématique</div>
          <h1 className="blog-hero-title">
            Volume Profile.<br />
            Le volume distribué par prix.
          </h1>
          <p className="blog-hero-desc">
            HVN, LVN, Naked POC, Session vs Composite — tout ce qu&apos;
            il faut pour lire le Volume Profile et identifier les niveaux
            institutionnels. Guide francophone par{" "}
            <Link href="/sebastien-constant/">Sébastien Constant</Link>.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <aside className="article-sidebar">
          <BlogTOC items={toc} />
        </aside>
        <article className="article-body">
          <h2 id="definition">Qu&apos;est-ce que le Volume Profile ?</h2>

          <p>
            Le <strong>Volume Profile</strong> est un outil d&apos;analyse
            qui distribue le volume échangé par niveau de prix sur une
            période donnée. Là où les indicateurs de volume classiques
            affichent le volume horizontalement en bas du graphique
            (volume par bougie temporelle), le Volume Profile l&apos;
            affiche verticalement à côté du prix — révélant à quels
            niveaux le marché a échangé le plus de contrats.
          </p>

          <p>
            Cette représentation transforme la lecture du marché. Vous ne
            voyez plus seulement <em>quand</em> le volume a été élevé, vous
            voyez <em>où</em>. Cette information est cruciale parce que
            les niveaux de fort volume agissent comme des aimants
            institutionnels : le marché y revient statistiquement avec une
            probabilité élevée.
          </p>

          <p>
            Pour une introduction complète,{" "}
            <Link href="/blog/volume-profile-guide/">
              lire le guide : Volume Profile, le guide complet
            </Link>
            .
          </p>

          <h2 id="vs-market">Volume Profile vs Market Profile</h2>

          <p>
            La confusion entre Volume Profile et{" "}
            <Link href="/market-profile/">Market Profile</Link> est
            fréquente. Les deux affichent une distribution verticale, mais
            ils mesurent des choses différentes.
          </p>

          <h3>Market Profile — distribution du temps</h3>

          <p>
            Le Market Profile mesure le <strong>temps</strong> passé à
            chaque niveau de prix, via les TPO. Une lettre est attribuée à
            chaque demi-heure ; en empilant les lettres on obtient un
            profil. Plus un niveau a de TPO, plus le marché y a passé de
            temps — donc plus il a été accepté temporellement.
          </p>

          <h3>Volume Profile — distribution du volume</h3>

          <p>
            Le Volume Profile mesure le <strong>volume</strong> échangé à
            chaque niveau, indépendamment du temps. Un niveau peut avoir
            beaucoup de TPO mais peu de volume (acceptation lente, faibles
            convictions) ou peu de TPO mais beaucoup de volume (forte
            activité concentrée, fortes convictions).
          </p>

          <h3>Pourquoi combiner les deux</h3>

          <p>
            Quand temps et volume convergent — beaucoup de TPO ET beaucoup
            de volume au même niveau —, c&apos;est un support
            institutionnel de premier ordre. Quand ils divergent, le
            niveau est moins fiable. Les traders professionnels affichent
            les deux profils en superposition pour identifier les zones de
            convergence.
          </p>

          <h2 id="concepts">HVN, LVN, POC, Naked POC : le vocabulaire</h2>

          <h3>POC — Point of Control</h3>

          <p>
            Le{" "}
            <Link href="/blog/poc-point-of-control/">
              <strong>Point of Control</strong>
            </Link>{" "}
            du Volume Profile est le niveau de prix qui a accumulé le plus
            de volume sur la période. C&apos;est le centre de gravité du
            profil — le prix le plus échangé. Le POC agit comme un aimant :
            un marché qui s&apos;éloigne y revient fréquemment.
          </p>

          <h3>HVN — High Volume Node</h3>

          <p>
            Un <strong>HVN</strong> est un niveau de prix où le volume est
            localement élevé — pic dans la distribution. Plusieurs HVN
            apparaissent souvent dans une séance, en plus du POC. Chaque
            HVN agit comme un support/résistance secondaire. Un HVN testé
            plusieurs fois sans être cassé renforce son rôle structurel.
          </p>

          <h3>LVN — Low Volume Node</h3>

          <p>
            Un <strong>LVN</strong> est l&apos;inverse : un niveau où le
            volume est localement faible — creux dans la distribution. Les
            LVN sont des zones de transit rapide — le marché les traverse
            sans s&apos;y attarder. Une cassure de LVN signale souvent une
            expansion vers le HVN suivant.
          </p>

          <h3>Naked POC (vPOC nu)</h3>

          <p>
            Un <strong>Naked POC</strong> est un POC de séance précédente
            qui n&apos;a pas encore été retouché. Statistiquement, le
            marché vient retester ces niveaux dans la majorité des cas
            dans les jours qui suivent. Identifier les Naked POC des 5-10
            dernières séances donne une carte précise des cibles probables
            de la semaine en cours.
          </p>

          <p>
            La{" "}
            <Link href="/blog/value-area-trading/">Value Area du Volume Profile</Link>{" "}
            (souvent notée vVAH/vVAL) délimite la zone qui contient 70 % du
            volume sur la période — équivalent volumétrique de la Value Area
            classique du Market Profile.
          </p>

          <h2 id="types">Les types de Volume Profile</h2>

          <h3>Session Volume Profile</h3>

          <p>
            Affiche le Volume Profile de la séance en cours uniquement. Se
            met à jour en temps réel. Usage : scalping et day trading —
            identifier le POC du jour, les HVN intra-séance, les niveaux
            d&apos;exécution institutionnels.
          </p>

          <h3>Daily Volume Profile</h3>

          <p>
            Un Volume Profile par séance, affiché côte à côte. Usage :
            identifier les Naked POC des séances précédentes, comparer
            les profils journaliers (séance équilibrée vs tendancielle),
            repérer les niveaux récurrents.
          </p>

          <h3>Composite Volume Profile</h3>

          <p>
            Cumul du volume sur plusieurs jours, semaines ou mois. Usage :
            identifier les niveaux structurels majeurs — POC hebdomadaire,
            mensuel, trimestriel. Ces niveaux sont extrêmement respectés
            par les institutionnels.{" "}
            <Link href="/blog/composite-profile-market-profile/">
              Lire le guide composite profile
            </Link>
            .
          </p>

          <h3>Fixed Range Volume Profile</h3>

          <p>
            Volume Profile sur une période arbitraire définie par le
            trader (ex. depuis le dernier high majeur, depuis l&apos;
            ouverture européenne). Usage : analyser une phase spécifique
            du marché.
          </p>

          <h3>Visible Range Volume Profile</h3>

          <p>
            Volume Profile calculé uniquement sur la zone visible à
            l&apos;écran. Pratique pour analyser un retest spécifique sans
            définir manuellement les bornes.
          </p>

          <h2 id="applications">Applications en trading</h2>

          <h3>Identifier les niveaux d&apos;entrée</h3>

          <p>
            Les HVN sont des zones d&apos;entrée privilégiées en mean
            reversion : le prix qui s&apos;en éloigne y revient
            fréquemment. La confluence avec le{" "}
            <Link href="/market-profile/">Market Profile</Link> (HVN qui
            coïncide avec VAH ou VAL) augmente significativement la
            probabilité.
          </p>

          <h3>Définir les cibles</h3>

          <p>
            Les HVN servent aussi de cibles. Un trade de cassure d&apos;
            LVN peut viser le HVN suivant. Un trade de retournement peut
            viser le POC. Cette logique de niveau-à-niveau remplace
            avantageusement les targets en pourcentages arbitraires.
          </p>

          <h3>Trader les Naked POC</h3>

          <p>
            La stratégie classique : identifier les Naked POC des 5-10
            dernières séances, attendre que le marché s&apos;en
            rapproche, prendre une entrée vers ces niveaux avec un stop
            au-delà du dernier extrême. Probabilité statistique élevée de
            retest.
          </p>

          <h3>Filtrer les breakouts</h3>

          <p>
            Un breakout d&apos;une zone de fort volume (HVN majeur) sans
            confirmation de volume est suspect. Un breakout accompagné
            d&apos;une transition vers un LVN au-delà est crédible — le
            marché a quitté la zone d&apos;acceptation.
          </p>

          <h3>Confluence avec l&apos;Order Flow</h3>

          <p>
            Le Volume Profile donne le contexte structurel ;{" "}
            <Link href="/order-flow/">l&apos;Order Flow</Link> donne la
            validation d&apos;exécution. Une absorption{" "}
            <Link href="/footprint/">Footprint</Link> sur un HVN majeur du
            Volume Profile = setup à très haute probabilité. Cette triple
            confluence (Market Profile + Volume Profile + Order Flow) est
            la base de la méthode BASS.
          </p>

          <CTACard
            label="Mentorat Volume Profile"
            title="Maîtrisez la lecture du volume par prix."
            description="Sessions de trading live quotidiennes. Volume Profile, Market Profile et Order Flow enseignés en confluence. Configuration Sierra Chart fournie."
          />

          <h2 id="outils">Outils et plateformes</h2>

          <h3>Sierra Chart — la référence</h3>

          <p>
            Sierra Chart propose un Volume Profile natif extrêmement
            paramétrable : Session, Daily, Composite, Fixed Range, Visible
            Range. Données CME en temps réel. Support natif des Footprint
            et Market Profile en parallèle. Le standard professionnel.{" "}
            <Link href="/blog/sierra-chart-configuration/">
              Lire le guide de configuration Sierra Chart
            </Link>
            .
          </p>

          <h3>ATAS — l&apos;accessible</h3>

          <p>
            ATAS inclut un Volume Profile complet dans son offre standard,
            avec une interface plus moderne que Sierra Chart. Bonne option
            pour démarrer.
          </p>

          <h3>Bookmap — Volume Profile + heatmap</h3>

          <p>
            Bookmap combine le Volume Profile à sa heatmap de liquidité
            unique. Visualisation 3D originale, complémentaire à Sierra
            Chart pour superposer Volume Profile et carnet d&apos;ordres
            en temps réel.
          </p>

          <h3>TradingView — limité</h3>

          <p>
            TradingView propose Fixed Range, Session et Visible Range
            Volume Profile. Le Composite et le Daily ne sont pas natifs.
            Suffisant pour l&apos;analyse, insuffisant pour le trading
            professionnel sur Futures.
          </p>

          <h2 id="guides">Tous les guides Volume Profile</h2>

          <div className="related-grid">
            <Link href="/blog/volume-profile-guide/" className="related-card">
              <div className="related-cat">Pilier</div>
              <h3>Volume Profile : le guide complet</h3>
              <p>HVN, LVN, Naked POC, types de Volume Profile, applications.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/poc-point-of-control/" className="related-card">
              <div className="related-cat">Concept</div>
              <h3>POC — Point of Control</h3>
              <p>Le centre de gravité du profil — l&apos;aimant institutionnel.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/value-area-trading/" className="related-card">
              <div className="related-cat">Concept</div>
              <h3>Value Area en trading</h3>
              <p>Les bornes VAH/VAL, équivalentes en Volume Profile et Market Profile.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/composite-profile-market-profile/" className="related-card">
              <div className="related-cat">Avancé</div>
              <h3>Composite Profile</h3>
              <p>Agrégation multi-séance — niveaux structurels majeurs.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/market-profile-guide-complet/" className="related-card">
              <div className="related-cat">Cousin</div>
              <h3>Market Profile : le guide complet</h3>
              <p>Le complément temporel du Volume Profile.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/auction-market-theory/" className="related-card">
              <div className="related-cat">Théorie</div>
              <h3>Auction Market Theory</h3>
              <p>La logique du marché derrière le Volume Profile.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/footprint-chart-trading/" className="related-card">
              <div className="related-cat">Order Flow</div>
              <h3>Footprint Chart</h3>
              <p>Le complément micro du Volume Profile : volume bid/ask par niveau et par bougie.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
            <Link href="/blog/sierra-chart-configuration/" className="related-card">
              <div className="related-cat">Setup</div>
              <h3>Sierra Chart : configuration complète</h3>
              <p>Le setup pas à pas pour configurer Sierra Chart avec les bons paramètres Volume Profile.</p>
              <span className="related-link">Lire &rarr;</span>
            </Link>
          </div>

          <h2 id="faq">Questions fréquentes sur le Volume Profile</h2>

          <CTACard />
        </article>
      </div>

      <FAQ items={faq} />

      <section className="form-sec" id="candidater">
        <div className="form-inner">
          <div className="sec-label">Candidature</div>
          <h2 className="sec-title">Maîtriser le Volume Profile en mentorat.</h2>
          <p className="sec-desc">
            Sessions live quotidiennes. Volume Profile + Market Profile +
            Order Flow en confluence. Vérifiez votre éligibilité en 15
            minutes.
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
