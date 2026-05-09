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
  title: "Auction Market Theory : Le Cadre Theorique du Market Profile (Steidlmayer)",
  description:
    "Auction Market Theory expliquee en francais : la theorie de Peter Steidlmayer derriere le Market Profile. Balance, imbalance, rotation factor, day types. Le cadre fondamental que peu de traders FR maitrisent.",
  path: "/auction-market-theory/",
});

const toc = [
  { id: "definition", label: "Qu'est-ce que l'Auction Market Theory ?" },
  { id: "steidlmayer", label: "L'origine : J. Peter Steidlmayer" },
  { id: "principe", label: "Le principe de l'enchere bilaterale" },
  { id: "balance", label: "Balance vs Imbalance" },
  { id: "exploration", label: "Exploration et acceptation" },
  { id: "rotation", label: "Le Rotation Factor" },
  { id: "day-types", label: "Les types de journees" },
  { id: "applications", label: "Applications pratiques" },
  { id: "faq", label: "Questions frequentes" },
];

const faq = [
  {
    question: "Qui est J. Peter Steidlmayer ?",
    answer:
      "J. Peter Steidlmayer est un trader americain qui a developpe l'Auction Market Theory et le Market Profile dans les annees 1980 au Chicago Board of Trade (CBOT). Il etait aussi membre du board du CME. Son livre 'Markets and Market Logic' (1985) est la reference fondamentale. Il a transforme la facon dont les traders pros lisent le marche.",
  },
  {
    question: "Auction Market Theory et Market Profile : quelle difference ?",
    answer:
      "L'Auction Market Theory est la THEORIE — le cadre conceptuel qui explique pourquoi le marche bouge. Le Market Profile est l'OUTIL pratique pour visualiser cette theorie en charts (TPO Profile). Comprendre l'AMT donne sens au Market Profile. Sans la theorie, on lit le profil sans le comprendre.",
  },
  {
    question: "L'Auction Market Theory s'applique-t-elle au Forex ?",
    answer:
      "Oui en principe — toute place de marche fonctionne par enchere bilaterale (acheteurs vs vendeurs). Mais sur le Forex retail, les donnees sont fragmentees entre brokers, donc le Market Profile y est moins fiable. L'AMT comme cadre theorique reste valable, mais l'outil Market Profile fonctionne mieux sur les Futures CME, les actions liquides, et les cryptos centralisees.",
  },
  {
    question: "Combien de temps pour maitriser l'Auction Market Theory ?",
    answer:
      "Les concepts de base (balance, imbalance, exploration, acceptation) se comprennent en 1-2 semaines. La maitrise complete (lecture des day types, rotation factor, application en trading live) prend 6-12 mois de pratique quotidienne. Le mentorat avec live trading accelere la courbe.",
  },
  {
    question: "Faut-il lire 'Markets and Market Logic' de Steidlmayer ?",
    answer:
      "Oui, c'est le livre fondamental. Mais attention : il est tres dense, sec, parfois redondant. Les lecteurs francophones peuvent commencer par 'Mind Over Markets' de James Dalton (lecture plus accessible et pedagogique de la meme theorie). Les eleves BASS Trading recoivent une synthese pratique adaptee au trading moderne.",
  },
];

export default function AMTPage() {
  return (
    <>
      <ReadingProgress />
      <CollectionPageJsonLd
        name="Auction Market Theory — Guide francophone complet"
        description="Auction Market Theory expliquee en francais : Steidlmayer, balance/imbalance, rotation factor, day types."
        url="/auction-market-theory/"
        articleUrls={[
          "/blog/auction-market-theory/",
          "/blog/market-profile-guide-complet/",
          "/blog/types-journees-market-profile/",
          "/blog/value-area-trading/",
          "/blog/initial-balance-trading/",
        ]}
      />
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Auction Market Theory" }]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Auction Market Theory</span>
          </nav>
          <div className="blog-hero-cat">Hub thematique</div>
          <h1 className="blog-hero-title">
            Auction Market Theory.<br />
            Le cadre derriere tout.
          </h1>
          <p className="blog-hero-desc">
            Le cadre theorique developpe par J. Peter Steidlmayer dans les
            annees 1980 — la fondation conceptuelle du Market Profile, du
            Volume Profile et de toute la lecture institutionnelle moderne.
            Decryptee en francais par{" "}
            <Link href="/sebastien-constant/">Sebastien Constant</Link>.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <aside className="article-sidebar">
          <BlogTOC items={toc} />
        </aside>
        <article className="article-body">
          <h2 id="definition">Qu&apos;est-ce que l&apos;Auction Market Theory ?</h2>

          <p>
            L&apos;<strong>Auction Market Theory (AMT)</strong> est le cadre
            conceptuel qui explique <em>pourquoi</em> le marche bouge — et
            comment le lire correctement. Developpee dans les annees 1980 par{" "}
            <strong>J. Peter Steidlmayer</strong>, trader pro au Chicago
            Board of Trade, c&apos;est la theorie qui sous-tend le Market
            Profile, le Volume Profile, et toute la lecture institutionnelle
            moderne.
          </p>

          <p>
            Le postulat central de l&apos;AMT : <strong>le marche est une
            enchere bilaterale continue</strong>. Les acheteurs et les
            vendeurs s&apos;affrontent en permanence pour determiner la
            valeur d&apos;un actif. Le prix monte pour TROUVER des vendeurs
            (l&apos;enchere acheteuse remonte), descend pour TROUVER des
            acheteurs (l&apos;enchere vendeuse descend), et oscille en
            equilibre quand les deux sont satisfaits.
          </p>

          <p>
            Cette logique simple change tout. Au lieu de regarder le prix
            comme une suite de chandeliers (vue chartiste classique), on le
            voit comme un <strong>processus dynamique d&apos;enchere</strong>{" "}
            avec des phases claires : <em>exploration</em>, <em>acceptation</em>,
            <em> rejet</em>, <em>balance</em>, <em>imbalance</em>.
          </p>

          <h2 id="steidlmayer">L&apos;origine : J. Peter Steidlmayer</h2>

          <p>
            <strong>J. Peter Steidlmayer</strong> est ne en 1939 dans
            l&apos;Illinois. Trader pro depuis les annees 1960 au Chicago
            Board of Trade, il etait aussi membre du board du Chicago
            Mercantile Exchange (CME). Confronte a la difficulte de lire le
            marche avec les outils chartistes classiques, il developpe dans
            les annees 1980 une approche radicalement nouvelle :{" "}
            <strong>le TPO (Time Price Opportunity)</strong>.
          </p>

          <p>
            Le concept de TPO est simple mais revolutionnaire : chaque
            demi-heure de trading est representee par une lettre (A, B, C,
            D…). Quand on empile ces lettres sur l&apos;axe des prix, on
            obtient une <strong>distribution statistique</strong> qui revele
            ou le marche a passe le plus de TEMPS — donc ou il a accepte la
            valeur. Le profil resultant est le Market Profile.
          </p>

          <p>
            Steidlmayer a publie ses idees dans plusieurs livres :{" "}
            <em>Markets and Market Logic</em> (1985, le fondamental),{" "}
            <em>Steidlmayer on Markets</em> (1989), et <em>The Steidlmayer
            Method</em> (2003). Ces livres sont denses, parfois repetitifs,
            mais ils restent les references absolues pour qui veut maitriser
            l&apos;AMT.
          </p>

          <p>
            Pour les lecteurs francophones, James Dalton a popularise les
            idees de Steidlmayer dans des livres plus accessibles :{" "}
            <em>Mind Over Markets</em> (1993) et <em>Markets in Profile</em>{" "}
            (2007). Ce sont les ouvrages recommandes pour debuter.
          </p>

          <h2 id="principe">Le principe de l&apos;enchere bilaterale</h2>

          <p>
            Pour comprendre l&apos;AMT, imagine une vente aux encheres
            traditionnelle :
          </p>

          <ul>
            <li>
              <strong>Le commissaire-priseur monte le prix</strong> tant que
              de nouveaux acheteurs leve la main.
            </li>
            <li>
              <strong>Quand plus personne ne suit</strong>, le prix s&apos;
              arrete et redescend pour trouver le dernier acheteur prêt à
              monter.
            </li>
            <li>
              <strong>Le prix final</strong> est celui qui satisfait le plus
              gros nombre de participants.
            </li>
          </ul>

          <p>
            Le marche financier fonctionne <em>exactement</em> comme ca, mais{" "}
            <strong>de maniere bilaterale et continue</strong>. Le prix monte
            pour trouver des vendeurs (offer-driven), descend pour trouver
            des acheteurs (bid-driven). Quand il a trouve les deux dans une
            zone donnee, il oscille en equilibre — la fameuse{" "}
            <strong>Value Area</strong>.
          </p>

          <h2 id="balance">Balance vs Imbalance</h2>

          <p>
            Deux etats fondamentaux du marche en AMT :
          </p>

          <h3>Balance (Equilibre)</h3>
          <p>
            Le marche oscille dans une range delimitee. Les acheteurs et les
            vendeurs sont d&apos;accord sur la zone de valeur. Visuellement
            sur le Market Profile : profil en cloche (Gaussien), Value Area
            stable, prix qui rebondit entre VAH et VAL. C&apos;est le mode
            par defaut du marche — il passe environ 70-80 % de son temps en
            balance.
          </p>

          <p>
            <strong>Strategie en balance</strong> : mean reversion. Vendre
            les extremes hauts (VAH), acheter les extremes bas (VAL), prendre
            ses gains au POC. C&apos;est la base du day trading sur ES en
            session normale.
          </p>

          <h3>Imbalance (Desequilibre)</h3>
          <p>
            Le marche bouge unidirectionnellement, sans pause. Une partie a
            pris le dessus — les acheteurs ou les vendeurs imposent leur
            vision. Visuellement sur le Market Profile : profil allonge,
            Value Areas successives decalees dans la meme direction, peu de
            rotation. C&apos;est le mode trend day.
          </p>

          <p>
            <strong>Strategie en imbalance</strong> : trade with the trend.
            Acheter les retracements vers le POC ou la VWAP, ne pas fader
            les extremes. C&apos;est typiquement les jours de news majeures
            (NFP, FOMC) ou de cassure de range pluri-jours.
          </p>

          <p>
            Pour aller plus loin sur les types de journees,{" "}
            <Link href="/blog/types-journees-market-profile/">
              lire le guide des Types de Journees Market Profile
            </Link>
            .
          </p>

          <h2 id="exploration">Exploration et acceptation</h2>

          <p>
            Deux concepts cle de l&apos;AMT :
          </p>

          <h3>Exploration</h3>
          <p>
            Le marche s&apos;ecarte de la zone d&apos;equilibre pour
            <strong> tester</strong> de nouveaux niveaux. Visuellement : peu
            de TPO empiles, wicks ou tails sur le profil, mouvement rapide.
            L&apos;exploration peut etre suivie d&apos;une <em>acceptation</em>{" "}
            (le marche reste au nouveau niveau) ou d&apos;un <em>rejet</em>{" "}
            (retour rapide vers la zone d&apos;origine).
          </p>

          <h3>Acceptation</h3>
          <p>
            Le marche reste a un niveau pendant plusieurs demi-heures (TPO).
            Visuellement : empilement de TPO, formation d&apos;une nouvelle
            Value Area, consolidation. L&apos;acceptation valide le nouveau
            niveau comme zone de valeur — il devient un support/resistance
            structurel pour les sessions futures.
          </p>

          <p>
            <strong>Lecture pratique</strong> : quand le marche casse la
            Value Area haute (VAH) en exploration et reste au-dessus pendant
            2-3 TPO, c&apos;est une acceptation — la VAH devient le nouveau
            support. Si au contraire il revient sous la VAH en moins de 30
            min, c&apos;etait un rejet — la VAH redevient resistance.
          </p>

          <h2 id="rotation">Le Rotation Factor</h2>

          <p>
            Le <strong>Rotation Factor</strong> est un indicateur quantitatif
            developpe par Steidlmayer pour mesurer la <strong>conviction
            directionnelle</strong> du marche pendant la session. Calcule sur
            chaque demi-heure (TPO) :
          </p>

          <ul>
            <li>
              <strong>+1</strong> si le high de la TPO &gt; high de la TPO
              precedente (extension haute).
            </li>
            <li>
              <strong>-1</strong> si le high de la TPO &lt; high de la TPO
              precedente (recul du haut).
            </li>
            <li>Idem pour les lows.</li>
            <li>
              <strong>Total Rotation Factor</strong> de la session = somme
              des +1 / -1 sur l&apos;ensemble des TPO.
            </li>
          </ul>

          <p>
            Interpretation :
          </p>

          <ul>
            <li>
              <strong>Rotation Factor &gt; +5</strong> : conviction haussiere
              forte, trend up day.
            </li>
            <li>
              <strong>Rotation Factor &lt; -5</strong> : conviction baissiere
              forte, trend down day.
            </li>
            <li>
              <strong>-3 a +3</strong> : journee neutre, balance.
            </li>
          </ul>

          <p>
            Le Rotation Factor est calcule automatiquement par Sierra Chart
            (etude TPO Profile, parametre &quot;Display Rotation Factor&quot;).
            C&apos;est un excellent confirmateur du type de journee.
          </p>

          <h2 id="day-types">Les types de journees</h2>

          <p>
            Steidlmayer et Dalton ont identifie 5 types de journees fondamentales
            que tout trader Market Profile doit connaitre :
          </p>

          <ol>
            <li>
              <strong>Normal Day</strong> — Initial Balance large, journee
              entiere reste a l&apos;interieur de l&apos;IB. Strategie : fade
              les extremes.
            </li>
            <li>
              <strong>Normal Variation Day</strong> — Initial Balance moyenne,
              extension de moins de 50 % de l&apos;IB d&apos;un cote.
              Strategie : trade with the IB extension.
            </li>
            <li>
              <strong>Trend Day</strong> — Initial Balance petite, cassure
              tot avec extension &gt; 100 %. Strategie : trade with the trend,
              ne JAMAIS fader.
            </li>
            <li>
              <strong>Double Distribution Day</strong> — deux Value Areas
              distinctes dans la session. Souvent separees par une news en
              milieu de journee. Strategie : trade chaque distribution
              separement.
            </li>
            <li>
              <strong>Neutral Day</strong> — extensions des deux cotes de
              l&apos;IB. Indecision. Strategie : attendre la confirmation,
              eviter de trader en journee.
            </li>
          </ol>

          <p>
            Pour la classification detaillee avec exemples ES,{" "}
            <Link href="/blog/types-journees-market-profile/">
              lire le guide complet des Types de Journees
            </Link>
            .
          </p>

          <h2 id="applications">Applications pratiques en trading</h2>

          <p>
            L&apos;AMT n&apos;est pas qu&apos;une theorie academique — c&apos;est
            un cadre directement applicable au trading quotidien :
          </p>

          <ul>
            <li>
              <strong>Identification du type de journee</strong> apres la 1re
              heure (IB) — guide toute la strategie de la session.
            </li>
            <li>
              <strong>Trade execution sur les niveaux structurels</strong> —
              VAH/VAL/POC du jour precedent, Naked POCs des sessions passees.
            </li>
            <li>
              <strong>Detection des cassures vraies vs fausses</strong> via
              l&apos;analyse acceptation/rejet apres une cassure.
            </li>
            <li>
              <strong>Calibration du sizing</strong> — risque plus eleve en
              trend day, plus faible en neutral day.
            </li>
            <li>
              <strong>Confluence avec Order Flow</strong> — l&apos;AMT donne
              le QUOI (niveaux), l&apos;Order Flow donne le QUAND
              (timing). Combinaison gagnante.
            </li>
          </ul>

          <p>
            Pour la mise en pratique en live trading, le mentorat BASS
            Trading enseigne l&apos;AMT en 12 modules avec sessions
            quotidiennes ou Sebastien Constant applique le cadre en temps
            reel sur les Futures.
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
              Maitriser l&apos;AMT en mentorat
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Le mentorat BASS Trading enseigne l&apos;Auction Market Theory
              en profondeur, avec live trading quotidien et application
              concrete sur Futures CME (ES, NQ, GC).
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
