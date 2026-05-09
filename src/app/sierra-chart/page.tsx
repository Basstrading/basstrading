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
  title: "Sierra Chart : Guide Complet Francophone (Setup, Footprint, Market Profile)",
  description:
    "Sierra Chart en francais : installation, configuration data feed CME, Market Profile, Footprint, Order Flow, ACSIL, raccourcis. Le seul guide francophone professionnel — par Sebastien Constant.",
  path: "/sierra-chart/",
});

const toc = [
  { id: "presentation", label: "Pourquoi Sierra Chart ?" },
  { id: "installation", label: "Installation et premier lancement" },
  { id: "data-feeds", label: "Data feeds : Denali, Rithmic, CQG" },
  { id: "packages", label: "Choisir son package (Standard, 5, 11, 22)" },
  { id: "chartbook", label: "Organiser un chartbook professionnel" },
  { id: "studies", label: "Les studies essentielles" },
  { id: "raccourcis", label: "Raccourcis clavier indispensables" },
  { id: "acsil", label: "ACSIL : coder ses propres indicateurs" },
  { id: "trading", label: "Passer des ordres depuis Sierra" },
  { id: "tutoriels", label: "Tous les tutoriels Sierra Chart" },
  { id: "faq", label: "Questions frequentes" },
];

const faq = [
  {
    question: "Sierra Chart est-il fait pour les debutants ?",
    answer:
      "Non, Sierra Chart est concu pour les traders professionnels. L'interface est dense, les options nombreuses, la courbe d'apprentissage rebute. Pour debuter, NinjaTrader ou TradingView sont plus accessibles. Mais une fois la methode institutionnelle maitrisee (Market Profile, Order Flow), Sierra Chart devient irremplacable. La majorite des traders pros francophones l'utilisent.",
  },
  {
    question: "Combien coute Sierra Chart par mois en 2026 ?",
    answer:
      "Plateforme : Package Standard 26 $/mois, Package 11 (recommande pour Market Profile + Footprint) 36 $/mois, Package 22 (avancé) 64 $/mois. Plus le data feed : Denali CME Level 1 + 2 = 25 $/mois. Total config pro complete : environ 60 $/mois. Frais d'echange CME : 1 $/mois additionnel. Voir notre tutoriel detaille sur les prix Sierra Chart.",
  },
  {
    question: "Sierra Chart vs NinjaTrader : lequel choisir ?",
    answer:
      "Sierra Chart est plus rapide, plus stable, et meilleur pour le Market Profile et Order Flow institutionnel. NinjaTrader est plus user-friendly, meilleur pour debuter, et licence lifetime disponible. Pour les traders pros qui veulent le standard institutionnel : Sierra Chart. Pour debuter sans abonnement mensuel a long terme : NinjaTrader.",
  },
  {
    question: "Sierra Chart fonctionne-t-il sur Mac ?",
    answer:
      "Pas nativement. Sierra Chart est Windows uniquement. Solutions sur Mac : (1) Parallels Desktop avec une VM Windows (recommande, environ 80 €/an), (2) Wine (gratuit mais instable), (3) Cloud VPS Windows (10-30 $/mois). NinjaTrader propose une alternative Mac native via Java si tu ne veux pas de VM.",
  },
  {
    question: "Quelles sont les studies les plus importantes sur Sierra Chart ?",
    answer:
      "Pour la methode institutionnelle : TPO Profile (Market Profile), Volume Profile, Numbers Bars (Footprint), Volume Delta + Cumulative Delta (CVD), VWAP, Initial Balance Lines, Naked POC. Ces 7 studies couvrent 90 % des besoins. Voir notre liste detaillee des 10 indicateurs essentiels Sierra Chart.",
  },
  {
    question: "Peut-on coder ses propres indicateurs sur Sierra Chart ?",
    answer:
      "Oui via l'API ACSIL (Advanced Custom Study Interface and Language). C'est du C++ moderne avec un compileur integre. Documentation complete sur le site Sierra Chart. Pour les utilisateurs qui ne codent pas, des milliers de studies tierces sont disponibles gratuitement ou en commercial via les communautes Sierra Chart.",
  },
];

export default function SierraChartHubPage() {
  return (
    <>
      <ReadingProgress />
      <CollectionPageJsonLd
        name="Sierra Chart — Guide complet francophone"
        description="Guide francophone complet de Sierra Chart : installation, data feeds, Market Profile, Footprint, ACSIL, tutoriels."
        url="/sierra-chart/"
        articleUrls={[
          "/tutoriels/configurer-sierra-chart-market-profile/",
          "/tutoriels/configurer-sierra-chart-footprint/",
          "/tutoriels/sierra-chart-vs-ninjatrader/",
          "/tutoriels/sierra-chart-vs-atas/",
          "/tutoriels/sierra-chart-prix/",
          "/tutoriels/indicateurs-essentiels-sierra-chart/",
          "/blog/sierra-chart-configuration/",
        ]}
      />
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Sierra Chart" }]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Sierra Chart</span>
          </nav>
          <div className="blog-hero-cat">Hub thematique</div>
          <h1 className="blog-hero-title">
            Sierra Chart.<br />
            La plateforme des pros.
          </h1>
          <p className="blog-hero-desc">
            Le guide francophone le plus complet sur Sierra Chart : installation,
            configuration data feed CME, Market Profile, Footprint, ACSIL,
            raccourcis, organisation chartbook. Tout ce que les ressources
            anglophones expliquent — adapte pour les traders francophones par{" "}
            <Link href="/sebastien-constant/">Sebastien Constant</Link>.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <aside className="article-sidebar">
          <BlogTOC items={toc} />
        </aside>
        <article className="article-body">
          <h2 id="presentation">Pourquoi Sierra Chart ?</h2>

          <p>
            Sierra Chart est la plateforme de trading <strong>la plus
            utilisee par les traders professionnels Futures francophones</strong>.
            Pas la plus jolie. Pas la plus moderne. Mais la plus rapide, la
            plus stable, et la plus complete pour le Market Profile,
            l&apos;Order Flow et le Footprint Chart.
          </p>

          <p>
            Developpee depuis 1996 par Sierra Chart Inc., la plateforme est
            ecrite en C++ pur — d&apos;ou sa rapidite extreme. Sur un setup
            multi-monitor 4K avec 50+ studies, Sierra Chart reste fluide la ou
            NinjaTrader ou TradingView consomment toute la RAM. Pour les
            scalpers et les traders Order Flow institutionnel, c&apos;est un
            non-negociable.
          </p>

          <p>
            <strong>Trois forces de Sierra Chart</strong> : (1) lecture native
            des donnees CME en Level 1 et Level 2 (DOM complet), (2) studies
            Market Profile et Footprint parmi les plus profondes du marche
            (TPO Profile, Numbers Bars, Volume Profile multi-sessions), (3)
            API ACSIL pour coder ses propres indicateurs en C++.
          </p>

          <p>
            <strong>Trois faiblesses a connaitre</strong> : (1) interface
            datee qui rebute les debutants, (2) Windows uniquement (necessite
            Parallels sur Mac), (3) ressources francophones quasi inexistantes
            — c&apos;est pour combler ce vide que ce guide existe.
          </p>

          <h2 id="installation">Installation et premier lancement</h2>

          <p>
            Le telechargement est gratuit sur sierrachart.com. L&apos;essai de
            30 jours permet de tester toutes les fonctionnalites. Apres
            installation, premier lancement : Sierra propose de creer un
            compte avec un email et un mot de passe. Tu obtiens un
            identifiant <em>account number</em> qui sera ta cle pour toutes
            les futures connexions.
          </p>

          <p>
            La premiere chose a faire apres installation : aller dans{" "}
            <strong>File &rarr; Open Service Packages and Service Levels</strong>{" "}
            et choisir ton package (voir section dediee plus bas). Sans
            package paye, tu utilises le mode demo limite. Pour suivre, on
            recommande de souscrire au Package 11 (36 $/mois) — c&apos;est
            celui qui inclut Market Profile + Footprint complets.
          </p>

          <p>
            Pour la configuration detaillee etape par etape, consulte le
            tutoriel{" "}
            <Link href="/tutoriels/configurer-sierra-chart-market-profile/">
              Configurer Sierra Chart pour le Market Profile
            </Link>
            .
          </p>

          <h2 id="data-feeds">Data feeds : Denali, Rithmic, CQG</h2>

          <p>
            Sans data feed, Sierra Chart est juste un graphique vide. Il y a
            trois data feeds principaux pour le marche US (Futures CME) :
          </p>

          <h3>Denali Exchange Data Feed</h3>
          <p>
            <strong>Le data feed proprietaire de Sierra Chart</strong>. Le
            moins cher : 13 $/mois pour CME Level 1 (Top of Book), 12 $/mois
            additionnels pour CME Level 2 (Order Book complet, necessaire
            pour le Footprint correct). Total Denali Level 1 + 2 :{" "}
            <strong>25 $/mois</strong>. Recommande pour la majorite des
            traders.
          </p>

          <h3>Rithmic</h3>
          <p>
            <strong>L&apos;alternative pro</strong>. Plus cher (40 $/mois pour
            CME Level 1 + 2) mais inclus avec certaines prop firms (Topstep,
            Apex, Bulenox). Si tu utilises ces prop firms, Rithmic est deja
            inclus dans ton abonnement — pas besoin de payer Denali en plus.
          </p>

          <h3>CQG</h3>
          <p>
            <strong>Le standard institutionnel</strong>. Plus cher encore
            (50-80 $/mois) mais ultra-stable. Reserve aux traders pros qui
            scaling massivement. Pour la majorite, Denali ou Rithmic
            suffisent.
          </p>

          <p>
            Configuration data feed : File &rarr; Trading Service &rarr;
            Choisir Denali / Rithmic / CQG &rarr; entrer ton login broker
            (pour Rithmic / CQG) ou compte Sierra (pour Denali).
          </p>

          <h2 id="packages">Choisir son package Sierra Chart</h2>

          <p>
            Sierra Chart propose plusieurs niveaux d&apos;abonnement. Le
            choix depend de tes besoins. Voici les 4 packages principaux :
          </p>

          <h3>Package Standard — 26 $/mois</h3>
          <p>
            Charts basiques, indicateurs standards (RSI, MACD, moyennes
            mobiles, Bollinger Bands), data alerts. <strong>Manque le Market
            Profile et le Footprint complets</strong>. Pour qui : traders qui
            n&apos;ont pas encore decide de la methode et veulent tester.
          </p>

          <h3>Package 5 — 30 $/mois</h3>
          <p>
            Standard + Trading (passer ordres depuis Sierra) + Advanced
            Custom Studies. <strong>Insuffisant pour la methode
            institutionnelle</strong> mais suffisant pour swing trading
            classique.
          </p>

          <h3>Package 11 — 36 $/mois (RECOMMANDE)</h3>
          <p>
            Tout le Package 5 + <strong>TPO Profile complet</strong> + Numbers
            Bars (Footprint) + Volume Profile multi-sessions + ACSIL.
            <strong> C&apos;est le package des eleves BASS Trading.</strong>{" "}
            Toutes les studies de la methode institutionnelle sont incluses.
          </p>

          <h3>Package 22 — 64 $/mois</h3>
          <p>
            Tout le Package 11 + studies avancees (Auto-Trade, advanced
            backtest, market replay). Reserve aux algos et au backtest
            massif. La majorite des traders pros restent au Package 11.
          </p>

          <p>
            Pour le calcul detaille du cout total (plateforme + data feed +
            CME), consulte le tutoriel{" "}
            <Link href="/tutoriels/sierra-chart-prix/">
              Sierra Chart Prix : combien ca coute vraiment en 2026
            </Link>
            .
          </p>

          <h2 id="chartbook">Organiser un chartbook professionnel</h2>

          <p>
            Le <strong>chartbook</strong> est le fichier de configuration
            global de Sierra Chart. Il sauvegarde : tes graphiques, tes
            studies, tes templates, tes liens entre fenetres, tes connexions
            data feed. Format : <code>.cht</code>.
          </p>

          <p>
            Recommandation pro : <strong>1 chartbook par instrument</strong>.
            Un chartbook ES, un NQ, un GC, un CL. Eviter le mega-chartbook
            qui regroupe tout — ca devient illisible apres 6 mois.
          </p>

          <p>
            Structure type d&apos;un chartbook ES :
          </p>
          <ul>
            <li>
              <strong>Chart 1</strong> : ES daily avec Volume Profile mensuel
              (vue macro).
            </li>
            <li>
              <strong>Chart 2</strong> : ES 30-min avec TPO Profile +
              Composite Profile sur 5-10 jours.
            </li>
            <li>
              <strong>Chart 3</strong> : ES 5-min avec VWAP + Naked POC +
              Initial Balance lines (vue intraday).
            </li>
            <li>
              <strong>Chart 4</strong> : ES Range Bars 4 ticks avec Numbers
              Bars (Footprint) + Volume Delta (vue scalping).
            </li>
            <li>
              <strong>Chart 5</strong> : ES DOM (Depth of Market) en colonne
              dediee pour le tape reading.
            </li>
          </ul>

          <p>
            Tous les charts sont <em>linked</em> sur le meme symbole. Quand
            tu changes de contrat (roll vers ESM6 par exemple), tous les
            charts suivent automatiquement.
          </p>

          <h2 id="studies">Les studies essentielles</h2>

          <p>
            Sierra Chart propose <strong>plus de 1 000 studies</strong>{" "}
            (indicateurs). Pour la methode institutionnelle, seules une
            dizaine sont vraiment essentielles. Voici la liste des studies
            qu&apos;un trader pro Sierra Chart doit maitriser :
          </p>

          <ol>
            <li>
              <strong>TPO Profile Chart</strong> — l&apos;etude principale du
              Market Profile.{" "}
              <Link href="/blog/market-profile-guide-complet/">
                Guide complet Market Profile
              </Link>
              .
            </li>
            <li>
              <strong>Volume Profile (Volume by Price)</strong> — la
              distribution du volume par niveau de prix.{" "}
              <Link href="/blog/volume-profile-guide/">
                Guide Volume Profile
              </Link>
              .
            </li>
            <li>
              <strong>Numbers Bars Calculated Values</strong> — le Footprint
              Chart de Sierra.{" "}
              <Link href="/blog/footprint-chart-trading/">
                Guide Footprint
              </Link>
              .
            </li>
            <li>
              <strong>Volume Delta + Cumulative Delta</strong> — la pression
              acheteuse vs vendeuse.{" "}
              <Link href="/blog/cvd-cumulative-volume-delta/">
                Guide CVD
              </Link>
              .
            </li>
            <li>
              <strong>VWAP + Standard Deviations Bands</strong> — le prix de
              reference institutionnel.{" "}
              <Link href="/blog/vwap-trading-guide/">Guide VWAP</Link>.
            </li>
            <li>
              <strong>Initial Balance Lines</strong> — les bornes des 60
              premieres minutes RTH.{" "}
              <Link href="/blog/initial-balance-trading/">
                Guide Initial Balance
              </Link>
              .
            </li>
            <li>
              <strong>Naked POC Indicator</strong> — les POC non visites
              comme aimants.
            </li>
          </ol>

          <p>
            Liste detaillee des 10 indicateurs essentiels (avec les
            parametres optimaux) :{" "}
            <Link href="/tutoriels/indicateurs-essentiels-sierra-chart/">
              10 Indicateurs Essentiels Sierra Chart pour Market Profile
            </Link>
            .
          </p>

          <h2 id="raccourcis">Raccourcis clavier indispensables</h2>

          <p>
            Sierra Chart est entierement utilisable au clavier. Memoriser ces
            raccourcis fait gagner des heures par mois :
          </p>

          <ul>
            <li>
              <strong>F1</strong> — ouvrir l&apos;aide contextuelle (toujours
              utile).
            </li>
            <li>
              <strong>Ctrl + N</strong> — nouveau chart sur le symbole en
              cours.
            </li>
            <li>
              <strong>Ctrl + Shift + R</strong> — Refresh chart data
              (recharge l&apos;historique).
            </li>
            <li>
              <strong>F5</strong> — Save Chartbook (a faire toutes les 30
              min).
            </li>
            <li>
              <strong>+ / -</strong> — zoom in / zoom out (sans Ctrl).
            </li>
            <li>
              <strong>Espace</strong> — recentrer le chart sur la derniere
              bar.
            </li>
            <li>
              <strong>Ctrl + Espace</strong> — auto-scale ON/OFF.
            </li>
            <li>
              <strong>Shift + clic gauche</strong> — placer une trendline
              rapidement.
            </li>
            <li>
              <strong>Ctrl + Z / Y</strong> — undo / redo sur les drawings.
            </li>
            <li>
              <strong>Buy / Sell</strong> via touches B / S (si Trading
              actif).
            </li>
          </ul>

          <h2 id="acsil">ACSIL : coder ses propres indicateurs</h2>

          <p>
            <strong>ACSIL</strong> (Advanced Custom Study Interface and
            Language) est l&apos;API de Sierra Chart pour coder des studies
            custom en <strong>C++ moderne</strong>. C&apos;est ce qui fait
            que Sierra Chart est extensible a l&apos;infini — la majorite des
            outils proprios des traders pros sont des ACSIL custom.
          </p>

          <p>
            Pour debuter avec ACSIL : Sierra Chart fournit un compileur C++
            integre (pas besoin de Visual Studio). Tes fichiers
            <code>.cpp</code> vont dans le dossier <code>ACS_Source</code>.
            Compilation par F7 dans l&apos;editeur ACSIL. Une fois compile,
            ta study apparait dans la liste Add Custom Study comme
            n&apos;importe quelle study native.
          </p>

          <p>
            <strong>Cas d&apos;usage typiques d&apos;ACSIL pour les eleves
            BASS</strong> :
          </p>
          <ul>
            <li>
              Filtrer le TPO Profile par session (RTH only, Asia only,
              Europe only).
            </li>
            <li>
              Detecter automatiquement les <strong>stacked imbalances</strong>{" "}
              sur le Footprint et alerter par son.
            </li>
            <li>
              Calculer un <strong>POC migration</strong> indicator (mesurer
              le deplacement du POC d&apos;une session a l&apos;autre).
            </li>
            <li>
              Connecter Sierra a x-trade.ai via l&apos;API REST pour gestion
              automatique du risque.
            </li>
          </ul>

          <p>
            Pour les non-codeurs, des milliers d&apos;ACSIL studies tierces
            sont disponibles gratuitement sur les forums Sierra Chart (Sierra
            Chart Forum, Reddit r/SierraChart). Le mentorat BASS Trading
            partage egalement ses studies proprios avec les eleves.
          </p>

          <h2 id="trading">Passer des ordres depuis Sierra</h2>

          <p>
            Sierra Chart permet de passer des ordres directement depuis le
            chart si tu utilises le Package 5 ou 11. Configuration : connecter
            ton broker (Tradovate, Optimus, AMP, Rithmic) via{" "}
            <strong>File &rarr; Trade &rarr; Connect to Trading Service</strong>.
          </p>

          <p>
            Methodes de passage d&apos;ordre :
          </p>

          <ul>
            <li>
              <strong>Chart Trade Mode</strong> — clic droit sur le chart pour
              placer Buy Stop / Sell Stop / Limit Order. Ultra rapide pour
              le scalping.
            </li>
            <li>
              <strong>Trade Window</strong> — fenetre dediee avec Buy / Sell
              / OCO buttons. Recommande pour les debutants.
            </li>
            <li>
              <strong>DOM (Depth of Market) Trading</strong> — passer ordres
              directement sur le carnet d&apos;ordres en cliquant sur les
              niveaux. Pour les scalpers Order Flow.
            </li>
            <li>
              <strong>One-Click Trading</strong> — un clic = un ordre execute
              immediatement. <strong>Dangereux pour les debutants</strong> —
              activer uniquement quand tu maitrise.
            </li>
          </ul>

          <p>
            Pour les eleves BASS qui utilisent x-trade.ai, l&apos;outil de
            risk management automatique se branche sur Sierra Chart via
            l&apos;API broker — voir{" "}
            <Link href="/tutoriels/configurer-x-trade-ai-risk-management/">
              Configurer x-trade.ai Risk Management
            </Link>
            .
          </p>

          <h2 id="tutoriels">Tous les tutoriels Sierra Chart</h2>

          <p>
            Pour aller plus loin, retrouve tous les tutoriels Sierra Chart en
            francais sur basstrading.fr :
          </p>

          <ul>
            <li>
              <Link href="/tutoriels/configurer-sierra-chart-market-profile/">
                Configurer Sierra Chart pour le Market Profile
              </Link>
            </li>
            <li>
              <Link href="/tutoriels/configurer-sierra-chart-footprint/">
                Configurer le Footprint Chart sur Sierra Chart
              </Link>
            </li>
            <li>
              <Link href="/tutoriels/sierra-chart-vs-ninjatrader/">
                Sierra Chart vs NinjaTrader : comparatif pro
              </Link>
            </li>
            <li>
              <Link href="/tutoriels/sierra-chart-vs-atas/">
                Sierra Chart vs ATAS : duel des plateformes Order Flow
              </Link>
            </li>
            <li>
              <Link href="/tutoriels/sierra-chart-prix/">
                Sierra Chart Prix : combien ca coute vraiment en 2026
              </Link>
            </li>
            <li>
              <Link href="/tutoriels/indicateurs-essentiels-sierra-chart/">
                10 indicateurs essentiels Sierra Chart
              </Link>
            </li>
            <li>
              <Link href="/blog/sierra-chart-configuration/">
                Configuration Sierra Chart pour les debutants
              </Link>
            </li>
          </ul>

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
              Apprendre Sierra Chart en mentorat
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Le mentorat BASS Trading inclut la formation Sierra Chart
              complete avec sessions live trading quotidiennes, partage de
              chartbooks pros et acces aux ACSIL studies proprios.
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
