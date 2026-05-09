import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import {
  CollectionPageJsonLd,
  FaqJsonLd,
  BreadcrumbJsonLd,
} from "@/lib/jsonld";
import BlogTOC from "@/components/BlogTOC";
import FAQ from "@/components/FAQ";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata = generateSeoMetadata({
  title: "VWAP Institutionnel : Anchored, Multi-Sessions, Std Dev Bands (Guide Avance)",
  description:
    "VWAP avance pour traders pros : anchored VWAP, multi-sessions, deviations standards (1, 2, 3 sigmas), VWAP composite, lecture institutionnelle. Guide francophone par Sebastien Constant.",
  path: "/vwap-institutionnel/",
});

const toc = [
  { id: "definition", label: "Qu'est-ce que le VWAP ?" },
  { id: "calcul", label: "Calcul : la formule exacte" },
  { id: "sessions", label: "VWAP intraday vs multi-sessions" },
  { id: "anchored", label: "Anchored VWAP : ancrage strategique" },
  { id: "bands", label: "Std Deviations Bands (1, 2, 3 sigmas)" },
  { id: "lecture", label: "Lecture institutionnelle du VWAP" },
  { id: "applications", label: "Applications pratiques en trading" },
  { id: "configuration", label: "Configuration sur Sierra Chart" },
  { id: "faq", label: "Questions frequentes" },
];

const faq = [
  {
    question: "Pourquoi les institutionnels utilisent-ils le VWAP ?",
    answer:
      "Le VWAP (Volume Weighted Average Price) est le prix de reference d'execution institutionnel. Quand un fond gere 100 millions et doit acheter 500 contrats sur ES, il vise une execution proche du VWAP de la session pour mesurer la qualite de son fill. C'est aussi un benchmark pour les algos: TWAP, POV, Implementation Shortfall sont tous compares au VWAP.",
  },
  {
    question: "VWAP intraday ou anchored : quelle difference ?",
    answer:
      "Le VWAP intraday se calcule sur la session en cours uniquement (reset chaque jour a l'ouverture). L'anchored VWAP commence a un point precis choisi par le trader (debut de tendance, news majeure, premier swing high) et se calcule depuis ce point. L'anchored VWAP est plus puissant pour les analyses pluri-jours car il mesure le prix moyen pondere depuis un EVENEMENT, pas depuis l'ouverture arbitraire.",
  },
  {
    question: "Les bandes de deviation standard du VWAP ont-elles un sens ?",
    answer:
      "Oui. Les bandes a 1, 2, 3 sigmas autour du VWAP delimitent les zones d'expansion statistique. ~68% du temps le prix reste dans 1 sigma, ~95% dans 2 sigmas, ~99% dans 3 sigmas (loi normale). En pratique, les rejets statistiques aux bandes 2-3 sigmas sont des signaux de mean reversion. Combiner avec Market Profile pour confirmer.",
  },
  {
    question: "Le VWAP marche-t-il sur le Forex ?",
    answer:
      "Le VWAP fonctionne, mais attention: sur Forex retail le volume affiche est celui du broker (fragmente, pas le volume reel du marche). Donc le VWAP Forex retail est moins precis que sur Futures CME (ou le volume est centralise et public). Pour le Forex serieux, viser des sources de volume aggregees (Tick volume si pas mieux).",
  },
  {
    question: "VWAP vs moyenne mobile 200 : laquelle utiliser ?",
    answer:
      "Les deux mesurent des choses differentes. La MM 200 est une moyenne mathematique simple de 200 bars. Le VWAP est une moyenne ponderee par le VOLUME — donne plus d'importance aux niveaux ou il y a eu beaucoup d'echanges. Pour un trader institutionnel, le VWAP est superieur car il reflete le prix d'execution moyen reel. La MM 200 reste utile pour le contexte macro tendanciel.",
  },
];

export default function VWAPInstitutionnelPage() {
  return (
    <>
      <ReadingProgress />
      <CollectionPageJsonLd
        name="VWAP Institutionnel — Guide francophone avance"
        description="Le VWAP avance pour traders pros: anchored, multi-sessions, std dev bands, lecture institutionnelle."
        url="/vwap-institutionnel/"
        articleUrls={[
          "/blog/vwap-trading-guide/",
          "/blog/market-profile-guide-complet/",
          "/blog/initial-balance-trading/",
          "/blog/volume-profile-guide/",
        ]}
      />
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "VWAP institutionnel" }]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>VWAP institutionnel</span>
          </nav>
          <div className="blog-hero-cat">Hub thematique</div>
          <h1 className="blog-hero-title">
            VWAP institutionnel.<br />
            Le prix d&apos;execution des pros.
          </h1>
          <p className="blog-hero-desc">
            Le VWAP est l&apos;indicateur le plus utilise par les desks
            institutionnels — pourtant tres peu de traders francophones le
            maitrisent au-dela du basique. Anchored VWAP, multi-sessions,
            deviations standards : guide avance par{" "}
            <Link href="/sebastien-constant/">Sebastien Constant</Link>.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <aside className="article-sidebar">
          <BlogTOC items={toc} />
        </aside>
        <article className="article-body">
          <h2 id="definition">Qu&apos;est-ce que le VWAP ?</h2>

          <p>
            Le <strong>VWAP</strong> (Volume Weighted Average Price) est le{" "}
            <strong>prix moyen pondere par le volume</strong> sur une periode
            donnee. C&apos;est l&apos;indicateur de reference des desks
            institutionnels — utilise comme benchmark d&apos;execution pour
            tous les algos de trading professionnels.
          </p>

          <p>
            La logique : si un fond doit executer 1 000 contrats sur ES, il
            ne peut pas tout acheter d&apos;un coup (cela bougerait le prix
            massivement). Il fractionne l&apos;ordre sur la session. La
            qualite de son execution est mesuree contre le VWAP : si le prix
            moyen d&apos;achat est sous le VWAP de la session, c&apos;est une
            bonne execution. Si c&apos;est au-dessus, c&apos;est mauvais.
          </p>

          <p>
            Pour les traders directionnels (vous et moi), le VWAP est{" "}
            <strong>une zone d&apos;equilibre psychologique</strong>. Les
            institutionnels cherchent a entrer pres du VWAP. Donc le prix
            tend a etre attire vers le VWAP — c&apos;est un aimant. C&apos;est
            ce qui en fait un niveau de support/resistance puissant.
          </p>

          <h2 id="calcul">Calcul : la formule exacte</h2>

          <p>
            Formule du VWAP :
          </p>

          <pre style={{ background: "rgba(0,0,0,.04)", padding: 16, borderRadius: 8, overflow: "auto" }}>
{`VWAP = SUM(Prix * Volume) / SUM(Volume)`}
          </pre>

          <p>
            Avec :
          </p>
          <ul>
            <li>
              <strong>Prix</strong> = typique price = (High + Low + Close) /
              3 pour chaque bar (ou tick price selon implementation).
            </li>
            <li>
              <strong>Volume</strong> = volume echange sur la bar.
            </li>
            <li>
              La somme se fait <strong>cumulativement depuis le debut de
              la session</strong> (ou depuis l&apos;ancrage pour anchored
              VWAP).
            </li>
          </ul>

          <p>
            <strong>Exemple concret</strong> sur ES :
          </p>

          <ul>
            <li>Bar 1 : Prix 4500, Volume 1000 → contribution = 4 500 000.</li>
            <li>Bar 2 : Prix 4502, Volume 2000 → contribution = 9 004 000.</li>
            <li>Bar 3 : Prix 4498, Volume 1500 → contribution = 6 747 000.</li>
          </ul>

          <p>
            VWAP apres 3 bars = (4 500 000 + 9 004 000 + 6 747 000) / (1000 +
            2000 + 1500) = 20 251 000 / 4500 ={" "}
            <strong>4500.22</strong>.
          </p>

          <p>
            Le VWAP donne plus de poids aux niveaux ou il y a eu beaucoup de
            volume — d&apos;ou le nom &quot;ponderee par le volume&quot;.
          </p>

          <h2 id="sessions">VWAP intraday vs multi-sessions</h2>

          <h3>VWAP intraday classique</h3>
          <p>
            Le VWAP standard se calcule sur la session en cours uniquement.
            Il reset chaque matin a l&apos;ouverture (RTH 15:30 heure
            francaise pour ES). C&apos;est le VWAP de reference pour les day
            traders.
          </p>

          <h3>VWAP weekly / monthly</h3>
          <p>
            Pour les swing traders, le VWAP weekly (calcule depuis le lundi
            ouverture) ou monthly (depuis le 1er du mois) donne une lecture
            macro. Ces VWAPs longs sont des niveaux structurels rarement
            casses sans event majeur.
          </p>

          <h3>VWAP composite (multi-jours)</h3>
          <p>
            Le composite VWAP se calcule sur N jours glissants (5, 10, 20).
            Il lisse les variations intraday et donne le prix moyen
            d&apos;execution institutionnel sur la periode. Tres utile pour
            identifier des points pivots sur 1-2 semaines.
          </p>

          <h2 id="anchored">Anchored VWAP : ancrage strategique</h2>

          <p>
            L&apos;<strong>anchored VWAP</strong> est une technique avancee
            popularisee par Brian Shannon (auteur de &quot;Maximum Trading
            Gains with Anchored VWAP&quot;). Au lieu de demarrer le calcul a
            l&apos;ouverture de la session, on l&apos;ancre a un{" "}
            <strong>EVENEMENT</strong> precis :
          </p>

          <ul>
            <li>
              <strong>Debut d&apos;une nouvelle tendance</strong> (apres une
              cassure majeure).
            </li>
            <li>
              <strong>News majeure</strong> (FOMC, NFP, earnings d&apos;une
              big cap).
            </li>
            <li>
              <strong>Premier swing high/low</strong> apres un retournement.
            </li>
            <li>
              <strong>Cassure d&apos;une zone de range</strong> pluri-jours.
            </li>
            <li>
              <strong>IPO ou listing initial</strong> sur les actions
              individuelles.
            </li>
          </ul>

          <p>
            La logique : depuis cet evenement, quel est le prix moyen
            pondere d&apos;execution ? C&apos;est le niveau ou les
            institutionnels qui ont entre apres l&apos;evenement sont a
            break-even. Si le prix descend sous l&apos;anchored VWAP, ces
            traders sont en perte — pression vendeuse potentielle. Si le
            prix reste au-dessus, ces traders sont en gain — la tendance
            tient.
          </p>

          <h3>Exemple sur ES : anchored VWAP depuis FOMC</h3>
          <p>
            Le 1er fevrier 2026, FOMC dovish — prix passe de 4500 a 4580 en
            30 minutes. Ancre le VWAP au moment de l&apos;annonce (15:00 FR).
            Pendant les jours suivants, l&apos;anchored VWAP devient le
            niveau de reference : tant que le prix reste au-dessus, le
            momentum FOMC tient. Si le prix re-traverse le anchored VWAP,
            c&apos;est le signal que le mouvement post-FOMC est annule.
          </p>

          <h2 id="bands">Std Deviations Bands (1, 2, 3 sigmas)</h2>

          <p>
            Les <strong>bandes de deviation standard</strong> autour du VWAP
            sont l&apos;equivalent des Bollinger Bands mais ponderees par le
            volume. Elles delimitent des zones statistiques d&apos;expansion :
          </p>

          <ul>
            <li>
              <strong>Bande 1 sigma (1 ecart-type)</strong> : ~68 % du temps,
              le prix reste a l&apos;interieur. Mean reversion legere.
            </li>
            <li>
              <strong>Bande 2 sigma (2 ecarts-types)</strong> : ~95 % du
              temps, le prix reste a l&apos;interieur. Mean reversion forte
              quand atteinte.
            </li>
            <li>
              <strong>Bande 3 sigma (3 ecarts-types)</strong> : ~99 % du
              temps, le prix reste a l&apos;interieur. Atteindre 3 sigmas est
              un evenement statistique majeur — souvent suivi de reversion.
            </li>
          </ul>

          <h3>Strategie aux bandes</h3>
          <p>
            Quand le prix touche la bande 2 sigma <strong>en dehors d&apos;un
            trend day clair</strong>, c&apos;est une zone de mean reversion.
            Combiner avec :
          </p>

          <ul>
            <li>Confirmation absorption sur Footprint (delta divergence).</li>
            <li>Niveau Market Profile (VAH/VAL aux memes prix).</li>
            <li>Pool de liquidite proche (high of day, naked POC).</li>
          </ul>

          <p>
            L&apos;entree se fait <strong>au touch de la bande 2 sigma + un
            de ces 3 confirmateurs</strong>. Stop au-dela de la bande 3
            sigma. Target le VWAP (mean reversion classique).
          </p>

          <h2 id="lecture">Lecture institutionnelle du VWAP</h2>

          <p>
            Lecture pro du VWAP en 4 points :
          </p>

          <h3>1. Position du prix par rapport au VWAP</h3>
          <p>
            <strong>Au-dessus du VWAP</strong> = momentum haussier intraday,
            les institutionnels qui ont achete depuis l&apos;ouverture sont
            en gain.{" "}
            <strong>En dessous</strong> = momentum baissier, ils sont en
            perte. Cette information binaire est deja un edge.
          </p>

          <h3>2. Pente du VWAP</h3>
          <p>
            <strong>VWAP qui monte</strong> = pression acheteuse sur la
            session. <strong>VWAP qui descend</strong> = pression vendeuse.
            <strong> VWAP plat</strong> = balance, range. La pente du VWAP
            est plus fiable que la pente d&apos;une moyenne mobile pour
            mesurer la conviction.
          </p>

          <h3>3. Tests successifs du VWAP</h3>
          <p>
            Quand le prix vient tester le VWAP plusieurs fois sur une session
            sans le casser, c&apos;est un signal de structure forte. Chaque
            test successif sans cassure est une opportunite d&apos;entry
            dans la direction de la pente.
          </p>

          <h3>4. Cassure du VWAP avec volume</h3>
          <p>
            Une cassure du VWAP <strong>avec volume eleve</strong> est un
            signal de retournement intraday. Une cassure avec volume faible
            est probablement un fakeout.
          </p>

          <h2 id="applications">Applications pratiques en trading</h2>

          <h3>Strategie 1 : Mean reversion au VWAP</h3>
          <p>
            En range day, vendre quand le prix touche bande 2 sigma haute du
            VWAP, acheter quand il touche bande 2 sigma basse. Stop a la
            bande 3 sigma. Target VWAP. RR typique : 1:2.
          </p>

          <h3>Strategie 2 : Pullback to VWAP en trend day</h3>
          <p>
            En trend up day, acheter chaque retracement vers le VWAP. Stop
            sous le VWAP avec marge. Target le high of day. Tres efficace
            les jours de news.
          </p>

          <h3>Strategie 3 : Break of VWAP avec volume</h3>
          <p>
            Quand le VWAP est plat depuis 1-2 heures et que le prix le casse
            avec un gros pic de volume, entrer dans la direction de la
            cassure. Stop de l&apos;autre cote du VWAP. Target la bande 2
            sigma dans la direction.
          </p>

          <h3>Strategie 4 : Anchored VWAP sur news</h3>
          <p>
            Apres une news majeure, ancrer le VWAP au moment de
            l&apos;annonce. Trader chaque pullback vers ce anchored VWAP
            dans la direction du mouvement post-news. Reset si le prix casse
            l&apos;anchored VWAP — la news est neutralisee.
          </p>

          <h2 id="configuration">Configuration sur Sierra Chart</h2>

          <p>
            Configuration optimale du VWAP sur Sierra Chart :
          </p>

          <ol>
            <li>
              Add Custom Study → <strong>Volume Weighted Average Price</strong>.
            </li>
            <li>
              Parametres : Volume Period Type = Day, Volume Period = 1.
              Display Reference Lines = Yes.
            </li>
            <li>
              Activer <strong>Std Deviation Bands</strong> : Standard
              Deviation 1 = ON, Standard Deviation 2 = ON, Standard
              Deviation 3 = OFF (3 est rarement utile au quotidien).
            </li>
            <li>
              Couleurs : VWAP en cyan, Bande 1 en jaune, Bande 2 en orange.
            </li>
            <li>
              Pour anchored VWAP : ajouter une seconde instance de l&apos;etude
              avec Volume Period Type = User-Defined, Start Date/Time = ton
              ancrage.
            </li>
          </ol>

          <p>
            Pour le VWAP basique et son utilisation en trading,{" "}
            <Link href="/blog/vwap-trading-guide/">
              lire le guide VWAP debutant
            </Link>
            . Pour la configuration generale Sierra Chart,{" "}
            <Link href="/sierra-chart/">voir le hub Sierra Chart</Link>.
          </p>

          <FAQ items={faq} />

          <div
            style={{
              padding: 32,
              background: "var(--ink)",
              color: "var(--pure)",
              borderRadius: 16,
              marginTop: 48,
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "var(--pure)", marginBottom: 12 }}>
              Maitriser le VWAP institutionnel en mentorat
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Le mentorat BASS Trading enseigne le VWAP avance (anchored,
              multi-sessions, std dev bands) avec live trading quotidien sur
              Futures CME.
            </p>
            <Link
              href="/candidater/"
              style={{
                display: "inline-block",
                padding: "16px 32px",
                background: "var(--gold)",
                color: "var(--ink)",
                borderRadius: 100,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Candidater au mentorat →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
