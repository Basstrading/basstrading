import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  CourseJsonLd,
  FaqJsonLd,
} from "@/lib/jsonld";
import { villes } from "@/content/pages/villes/_data";

export const metadata = generateSeoMetadata({
  title: "Formation Trading 2026 : Le Guide Complet + 20 Villes en France",
  description:
    "Formation trading 2026 : guide complet pour choisir, financement CPF/Qualiopi, méthode pro (Market Profile, Order Flow), prix réels, sessions présentielles dans 20 villes. Par Sébastien Constant.",
  path: "/formation-trading/",
});

const pillarFaq = [
  {
    question: "Quelle est la meilleure formation trading en France en 2026 ?",
    answer:
      "Il n'existe pas de réponse universelle — la meilleure formation dépend de votre niveau, votre style (intraday, swing, scalping) et vos objectifs (autonomie, prop firm, gestion). Critères objectifs : un formateur qui trade en live (peau dans le jeu), une certification Qualiopi, un suivi individuel, et une méthode basée sur la structure du marché (Market Profile, Order Flow) plutôt que sur des indicateurs retardés.",
  },
  {
    question: "Une formation trading est-elle éligible au CPF ?",
    answer:
      "Oui, certaines formations trading sont éligibles au CPF, à condition d'être dispensées par un organisme certifié Qualiopi et de mener à une certification inscrite au RNCP ou au RS. Depuis le 2 avril 2026, un reste à charge forfaitaire de 150 € s'applique à toute formation financée via le CPF, et les certifications RS sont plafonnées à 1 500 € mobilisables.",
  },
  {
    question: "Combien coûte une formation trading sérieuse ?",
    answer:
      "Une formation trading sérieuse coûte entre 1 500 € et 8 000 € selon le format. Les formations VOD tournent autour de 500 à 2 000 €. Les formations certifiantes Qualiopi/CPF se situent entre 2 000 et 4 000 €. Les mentorats premium (suivi individuel, live trading, accès longue durée) montent à 4 000-8 000 €.",
  },
  {
    question: "Combien de temps pour devenir trader rentable ?",
    answer:
      "6 à 18 mois en moyenne avec un mentorat structuré et une pratique quotidienne. Sans accompagnement, comptez 1 à 3 ans, avec un risque élevé d'abandon. La rentabilité durable demande 3 ingrédients : une méthode robuste, une discipline psychologique, et un capital suffisant pour absorber la phase d'apprentissage.",
  },
  {
    question: "Faut-il un diplôme pour suivre une formation trading ?",
    answer:
      "Non. Aucun diplôme n'est requis pour devenir trader indépendant ou prop firm trader. Les formations trading sont ouvertes à toute personne majeure, quel que soit son parcours scolaire. Les compétences évaluées sont la rigueur, la gestion des émotions et la capacité à appliquer une méthode.",
  },
  {
    question: "Peut-on apprendre le trading en autodidacte ?",
    answer:
      "Techniquement oui, mais statistiquement les autodidactes mettent 2 à 3 fois plus longtemps à devenir rentables et abandonnent dans 80 % des cas en moins d'un an. Les ressources gratuites (YouTube, livres) permettent d'acquérir les bases, mais ne remplacent pas un mentor qui corrige vos biais en temps réel.",
  },
  {
    question: "Quelle différence entre une formation trading et un mentorat ?",
    answer:
      "Une formation transmet un programme standardisé à un groupe (souvent 50 à 500 élèves). Un mentorat individualise l'accompagnement avec un nombre limité de places (5 à 20 max), un suivi régulier et une adaptation à votre style. Le mentorat coûte plus cher mais accélère drastiquement la progression.",
  },
  {
    question: "Quels marchés trader après une formation ?",
    answer:
      "Les Futures (E-mini S&P 500, Nasdaq, indices européens) sont privilégiés par les formations professionnelles : marché centralisé, données transparentes, levier maîtrisable et accès aux prop firms. Le Forex retail est déconseillé. Le choix dépend de votre méthode : Market Profile et Order Flow brillent sur les Futures.",
  },
];

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 14, height: 14 }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function FormationTradingIndex() {
  return (
    <div className="ville-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Formation Trading" },
        ]}
      />
      <CourseJsonLd />
      <FaqJsonLd items={pillarFaq} />

      {/* HERO */}
      <section className="v-hero">
        <div className="v-hero-content">
          <div className="v-hero-badge">
            <span className="v-dot" /> 20 villes — 8 places max par session
          </div>
          <h1 className="v-hero-title">
            Formation Trading en <em>France</em>
            <br />
            <span>Présentiel &amp; En ligne</span>
          </h1>
          <p className="v-hero-sub">
            Sébastien Constant se déplace dans toute la France.
            <br />
            Sessions intensives de 3-4 jours, 8 participants maximum.
            <br />
            Éligible CPF via EMSCA (Qualiopi).
          </p>
          <div className="v-hero-ctas">
            <Link href="/#candidater" className="v-cta-primary">
              Candidater au mentorat <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* GUIDE PILIER — Formation Trading 2026 */}
      <section className="v-sec v-sec-light" style={{ paddingTop: 80 }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px" }}>
          <div className="sec-label">Le guide complet</div>
          <h2 className="sec-title" style={{ marginBottom: 24 }}>
            Formation Trading 2026 :<br />
            comment choisir sans se tromper
          </h2>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--g1)", marginBottom: 32 }}>
            Vous avez économisé pour vous former. Vous avez vu vingt publicités
            qui promettent de vous transformer en trader rentable en six
            semaines. Vous voulez savoir laquelle vaut votre temps et votre
            argent. Ce guide vous donne la grille de lecture qu&apos;utilisent
            les traders professionnels — sans complaisance, sans dénigrement,
            juste les critères objectifs.
          </p>

          <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "1.6rem", letterSpacing: -0.5, margin: "48px 0 16px" }}>Pourquoi 90 % des formations trading ne mènent à rien</h3>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            La majorité des élèves d&apos;une formation trading classique ne
            deviennent jamais rentables. Ce n&apos;est pas un secret de
            l&apos;industrie : l&apos;ESMA estime que 74 à 89 % des comptes
            retail perdent de l&apos;argent. Trois raisons structurelles
            l&apos;expliquent.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <strong>1. La formation enseigne des indicateurs, pas la structure du marché.</strong> Le contenu type d&apos;une formation retail
            est calibré pour rassurer le débutant : RSI, MACD, moyennes
            mobiles, Fibonacci, chandeliers japonais. Ces outils sont visibles,
            faciles à enseigner, et donnent une <em>impression</em> de méthode.
            Le problème : ils sont tous retardés par construction. Quand un
            indicateur signale, le mouvement est déjà en cours.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            Les traders professionnels n&apos;utilisent quasiment pas
            d&apos;indicateurs. Ils lisent la structure du marché en temps
            réel : où passe le volume, où la valeur est acceptée ou rejetée,
            qui achète et vend en agressif. Cette lecture s&apos;appuie sur le{" "}
            <Link href="/market-profile/">Market Profile</Link>, l&apos;
            <Link href="/order-flow/">Order Flow</Link> et le{" "}
            <Link href="/footprint/">Footprint Chart</Link> — des outils que
            95 % des formations retail ignorent.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <strong>2. Personne ne trade en live devant les élèves.</strong> Une formation trading sans démonstration en direct est
            un cours théorique. Vous ne saurez jamais comment le formateur
            réagit à un stop touché à 2 ticks près, à un drawdown de 3 % en
            pleine séance, à un trade perdant qui se transforme en setup
            gagnant. La psychologie du trading se transmet par observation,
            pas par PowerPoint.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <strong>3. Aucun suivi individuel.</strong> Les formations vendues à des centaines d&apos;élèves ne peuvent pas
            individualiser le coaching. Or chaque trader a un profil
            psychologique, un capital, une disponibilité différents. Sans
            adaptation, la même méthode produit 10 % de réussites et 90 %
            d&apos;abandons.
          </p>

          <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "1.6rem", letterSpacing: -0.5, margin: "48px 0 16px" }}>Les 7 critères pour choisir une formation trading</h3>
          <ol style={{ lineHeight: 1.75, paddingLeft: 24 }}>
            <li style={{ marginBottom: 14 }}><strong>Le formateur trade-t-il en direct devant ses élèves ?</strong> Demandez à voir une vraie session de trading enregistrée, sans coupes, avec écrans visibles. Si le formateur ne peut pas le fournir, passez. C&apos;est le filtre numéro un.</li>
            <li style={{ marginBottom: 14 }}><strong>Quelle méthode est enseignée ?</strong> Indicateurs uniquement = mauvais signal. Price action seule = moyen. Price action + structure = bon. Market Profile + Order Flow + Footprint = méthode professionnelle.</li>
            <li style={{ marginBottom: 14 }}><strong>Le programme est-il certifié Qualiopi ?</strong> Sans Qualiopi, aucun financement public possible. Cherchez l&apos;attestation sur le site officiel. Bonus : titre RNCP ou certification RS pour le sérieux institutionnel.</li>
            <li style={{ marginBottom: 14 }}><strong>Combien de places par cohorte ?</strong> Plus de 30 places = formation industrielle. 15-30 = formation standard. Moins de 15 = mentorat individualisé. Adaptez votre choix à votre besoin de personnalisation.</li>
            <li style={{ marginBottom: 14 }}><strong>Quels résultats vérifiables des élèves ?</strong> Comptes financés en prop firm, retraits effectués, avis Trustpilot vérifiés, vidéos de témoignages non scriptées.</li>
            <li style={{ marginBottom: 14 }}><strong>Combien d&apos;heures de cours et quel suivi ?</strong> Une formation trading sérieuse demande 60 à 100 heures de contenu pédagogique, plus un suivi individuel sur 3 à 12 mois. En dessous de 40 heures, c&apos;est un mini-cours.</li>
            <li style={{ marginBottom: 14 }}><strong>Quelle politique de remboursement ?</strong> Une garantie satisfait-ou-remboursé sur 7-14 jours est un signe de confiance. Un contrat sans aucune sortie possible est un drapeau rouge.</li>
          </ol>

          <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "1.6rem", letterSpacing: -0.5, margin: "48px 0 16px" }}>CPF, Qualiopi, RNCP : que veulent vraiment dire ces certifications</h3>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <strong>Qualiopi</strong> est une certification qualité obligatoire depuis le 1er janvier 2022 pour tout organisme de formation qui souhaite accéder aux financements publics et mutualisés (CPF, OPCO, France Travail). Elle atteste que le processus pédagogique respecte un référentiel de 7 critères. Ce qu&apos;elle <em>ne dit pas</em> : la qualité du formateur ou la pertinence de la méthode.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <strong>CPF</strong> permet à tout actif d&apos;accumuler des droits à formation (jusqu&apos;à 8 000 € maximum sur une carrière). Pour qu&apos;une formation soit éligible CPF, elle doit : être dispensée par un organisme Qualiopi, mener à une certification inscrite au RNCP ou au RS, et être référencée sur la plateforme Mon Compte Formation.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <strong>Évolution majeure 2026</strong> : depuis le 2 avril 2026, un reste à charge forfaitaire de <strong>150 €</strong> s&apos;applique à toute formation financée par le CPF (sauf demandeurs d&apos;emploi et financements employeur). Les certifications RS sont par ailleurs plafonnées à <strong>1 500 €</strong> mobilisables.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <strong>RNCP</strong> (Répertoire National des Certifications Professionnelles) atteste qu&apos;un titre professionnel est reconnu par l&apos;État français à un niveau donné (du niveau 3 CAP au niveau 7 Master/Bac+5). Pour le trading, des titres RNCP de niveau 7 existent — signal sérieux mais ne garantit pas la rentabilité personnelle.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <strong>RS</strong> (Répertoire Spécifique) recense des certifications de compétences plus ciblées que les titres RNCP. Beaucoup de formations trading sont inscrites au RS plutôt qu&apos;au RNCP, car la spécialisation est plus étroite. Le RS donne accès au CPF avec le plafond de 1 500 €.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <Link href="/blog/formation-trading-cpf-qualiopi/">
              Lire le guide complet : Formation trading CPF — comment choisir en 2026
            </Link>
          </p>

          <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "1.6rem", letterSpacing: -0.5, margin: "48px 0 16px" }}>Combien coûte vraiment une formation trading</h3>
          <ul style={{ lineHeight: 1.75, paddingLeft: 24 }}>
            <li style={{ marginBottom: 14 }}><strong>0 à 500 €</strong> : YouTube, ebooks, formations introductives sur Udemy. Utiles pour découvrir le vocabulaire, jamais suffisants pour devenir rentable.</li>
            <li style={{ marginBottom: 14 }}><strong>500 à 2 000 €</strong> : formations VOD et webinaires. Contenu enregistré, peu d&apos;interaction. Convient aux profils très autonomes avec des bases solides.</li>
            <li style={{ marginBottom: 14 }}><strong>2 000 à 4 000 €</strong> : formations certifiantes Qualiopi/CPF. Fourchette standard d&apos;une vraie formation certifiée éligible CPF (40 à 80 heures de cours).</li>
            <li style={{ marginBottom: 14 }}><strong>4 000 à 8 000 €</strong> : mentorats premium. À ce niveau, vous payez l&apos;individualisation : 10-15 places max, live trading quotidien, accès longue durée, outils inclus. C&apos;est la catégorie du <Link href="/">mentorat BASS Trading</Link>.</li>
            <li style={{ marginBottom: 14 }}><strong>Plus de 8 000 €</strong> : formations institutionnelles, cursus longs (titre RNCP niveau 7, MBA Finance). Réservé aux profils en reconversion totale.</li>
          </ul>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            <strong>Coût total réel</strong> : au-delà de la formation elle-même, comptez le matériel (PC + 2-3 écrans, 1 500-3 000 €), les abonnements logiciel (Sierra Chart + données CME — environ 200 €/mois), les frais de prop firm évaluation (300-1 000 €), et le capital perdu en phase d&apos;apprentissage (1 000-5 000 €). Total : <strong>5 000 à 15 000 €</strong> avant la première année rentable.
          </p>

          <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "1.6rem", letterSpacing: -0.5, margin: "48px 0 16px" }}>Méthode professionnelle vs méthode retail</h3>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            La fracture la plus importante entre une formation trading sérieuse et une formation grand public, c&apos;est la <strong>méthode</strong>. Les formations professionnelles enseignent les outils utilisés sur les desks institutionnels.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            Le <Link href="/market-profile/"><strong>Market Profile</strong></Link>, développé dans les années 1980 au Chicago Board of Trade, organise l&apos;activité par prix et par temps. Il révèle où la valeur est acceptée (Value Area), où elle est rejetée, et où se concentrent les volumes (POC).
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            L&apos;<Link href="/order-flow/"><strong>Order Flow</strong></Link> analyse les ordres réellement exécutés en temps réel via le DOM, le Time &amp; Sales et le <Link href="/footprint/">Footprint Chart</Link>. Cette lecture révèle l&apos;intention des participants institutionnels.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            Le <Link href="/volume-profile/"><strong>Volume Profile</strong></Link> et le VWAP complètent l&apos;arsenal. Combinés, ces outils donnent une lecture structurelle complète : où trader (Market Profile), avec quelle pression (Order Flow), à quel prix (Volume Profile).
          </p>

          <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "1.6rem", letterSpacing: -0.5, margin: "48px 0 16px" }}>Combien de temps pour devenir trader rentable</h3>
          <p style={{ lineHeight: 1.75, marginBottom: 16 }}>
            La <Link href="/blog/combien-temps-apprendre-trading/">durée d&apos;apprentissage du trading</Link> est la question la plus mal répondue de l&apos;industrie. Voici les ordres de grandeur réalistes.
          </p>
          <ul style={{ lineHeight: 1.75, paddingLeft: 24 }}>
            <li style={{ marginBottom: 14 }}><strong>3 à 6 mois</strong> : bases techniques et compte démo. Configuration Sierra Chart, lecture Market Profile, journal de trading.</li>
            <li style={{ marginBottom: 14 }}><strong>6 à 12 mois</strong> : premier compte réel et phase d&apos;échec. Psychologie réelle (peur, avidité, biais de revanche). Phase qui élimine 80 % des candidats.</li>
            <li style={{ marginBottom: 14 }}><strong>12 à 18 mois</strong> : première rentabilité régulière avec une méthode robuste et un mentorat structuré. Pas spectaculaire (20-50 %/an sur prop firm est très bon), mais reproductible.</li>
            <li style={{ marginBottom: 14 }}><strong>2 à 5 ans</strong> : maîtrise et capacité à tenir la durée. Tenir une rentabilité sur 3-5 ans en traversant plusieurs régimes de marché.</li>
          </ul>

          <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "1.6rem", letterSpacing: -0.5, margin: "48px 0 16px" }}>Les pièges à éviter</h3>
          <ol style={{ lineHeight: 1.75, paddingLeft: 24 }}>
            <li style={{ marginBottom: 14 }}><strong>La promesse de rentabilité rapide.</strong> &quot;Devenez trader rentable en 30 jours&quot;, &quot;5 000 € par mois après ma formation&quot;. Mathématiquement impossibles.</li>
            <li style={{ marginBottom: 14 }}><strong>Les bots et signaux Telegram.</strong> Une formation qui inclut un &quot;groupe de signaux&quot; crée de la dépendance, pas de la compétence. Quand le formateur disparaît, l&apos;élève est démuni.</li>
            <li style={{ marginBottom: 14 }}><strong>Le formateur qui n&apos;a jamais tradé professionnellement.</strong> Vérifiez le parcours : compte vérifiable chez une prop firm ? Sessions live observables ?</li>
            <li style={{ marginBottom: 14 }}><strong>Les contrats verrouillés.</strong> Paiement intégral non remboursable, sans période d&apos;essai = signal extrêmement négatif.</li>
            <li style={{ marginBottom: 14 }}><strong>La pression commerciale agressive.</strong> &quot;Plus que 2 places&quot;, &quot;Promo qui se termine ce soir&quot;. Une vraie formation ne se vend pas, elle se choisit.</li>
            <li style={{ marginBottom: 14 }}><strong>Les écoles qui ne montrent jamais leurs trades.</strong> Si pendant la phase commerciale, le formateur refuse de trader en direct devant vous, c&apos;est rédhibitoire.</li>
          </ol>
        </div>
      </section>

      {/* MÉTHODE RÉSUMÉE */}
      <section className="v-sec v-sec-dark">
        <div className="sec-center">
          <div
            className="sec-label"
            style={{ color: "rgba(255,255,255,.25)" }}
          >
            La méthode
          </div>
          <h2 className="sec-title" style={{ color: "var(--pure)" }}>
            Ce que vous apprendrez
          </h2>
          <p className="v-method-intro">
            BASS n&apos;enseigne pas des indicateurs. BASS enseigne à lire la
            structure du marché — comme les institutionnels.
          </p>
        </div>
        <div className="v-method-block">
          <div className="v-method-grid">
            <div className="v-method-card">
              <h3>Options &amp; Gamma</h3>
              <p>
                Positionnement des options, walls gamma, flip — comprendre les
                contraintes des market makers avant d&apos;ouvrir un trade.
              </p>
            </div>
            <div className="v-method-card">
              <h3>Market Profile</h3>
              <p>
                Mécanisme d&apos;enchères, Value Area, POC, Initial Balance —
                savoir où le marché accepte la valeur et où il la rejette.
              </p>
            </div>
            <div className="v-method-card">
              <h3>VWAP Multi-Timeframe</h3>
              <p>
                4 niveaux de VWAP (annuel, mensuel, hebdomadaire, daily) avec
                écarts-types pour identifier les zones à fort enjeu.
              </p>
            </div>
            <div className="v-method-card">
              <h3>CVD &amp; Tape Reading</h3>
              <p>
                Pression directionnelle réelle, divergences CVD/prix, lecture du
                Time &amp; Sales — le timing d&apos;exécution précis.
              </p>
            </div>
            <div className="v-method-card">
              <h3>x-trade.ai</h3>
              <p>
                Risk manager institutionnel inclus. Coupe vos positions
                automatiquement — limite journalière, drawdown max, verrouillage.
              </p>
            </div>
            <div className="v-method-card">
              <h3>Prop Firms</h3>
              <p>
                Préparation complète aux évaluations FTMO, Topstep, Apex,
                Bulenox — méthode institutionnelle adaptée aux règles
                spécifiques de chaque firm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU PILIER — POURQUOI CETTE FORMATION */}
      <section className="v-sec v-sec-light">
        <div className="sec-center">
          <div className="sec-label">Pourquoi cette formation</div>
          <h2 className="sec-title">
            Une formation trading conçue pour la rentabilité durable
          </h2>
        </div>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            color: "var(--g1)",
            lineHeight: 1.85,
            fontSize: "1rem",
          }}
        >
          <p style={{ marginBottom: 24 }}>
            La majorité des formations trading vendent une promesse — gagner sa
            vie en quelques mois, retrouver sa liberté financière, devenir
            indépendant. La formation BassTrading vend l&apos;inverse : une
            méthode rigoureuse, une pratique exigeante et une discipline
            construite jour après jour. C&apos;est moins glamour, mais c&apos;est
            ce qui produit des traders rentables sur la durée.
          </p>
          <p style={{ marginBottom: 24 }}>
            Sébastien Constant trade en live tous les jours sur les Futures
            (Nasdaq, S&amp;P 500, DAX). Quand on enseigne ce qu&apos;on
            pratique réellement, le programme reste calibré sur la réalité du
            marché — pas sur la théorie qu&apos;on trouve dans les livres. La
            méthode institutionnelle (Market Profile, Order Flow, Footprint)
            est celle qu&apos;utilisent les desks de trading professionnels.
          </p>

          <h3
            style={{
              color: "var(--bk)",
              fontSize: "1.4rem",
              fontWeight: 800,
              marginTop: 40,
              marginBottom: 16,
            }}
          >
            Ce qui distingue cette formation
          </h3>
          <p style={{ marginBottom: 16 }}>
            Quatre piliers structurent l&apos;intégralité du programme — chacun
            travaillé en profondeur, avec sessions live et exercices pratiques.
          </p>
          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 22,
              listStyle: "disc",
            }}
          >
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Lecture de la structure du marché.
              </strong>{" "}
              Vous apprenez à identifier les zones où le marché accepte la
              valeur (Value Area, POC) et celles où il la rejette. C&apos;est la
              base de toute prise de décision rationnelle. Sans cette lecture,
              vous tradez à l&apos;aveugle, en suivant des indicateurs en
              retard.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Compréhension du flux d&apos;ordres.
              </strong>{" "}
              Order Flow et CVD vous montrent la pression directionnelle
              réelle. Vous voyez qui achète, qui vend, et à quel prix. C&apos;est
              le timing d&apos;exécution précis qui transforme un setup correct
              en trade gagnant.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Maîtrise du risque institutionnel.
              </strong>{" "}
              x-trade.ai (inclus dans la formation) coupe automatiquement vos
              positions quand vous dépassez vos limites journalières ou votre
              drawdown maximum. Plus de revenge trading, plus de tilt qui
              détruit un compte en une après-midi.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Préparation prop firm.
              </strong>{" "}
              Si vous voulez trader avec du capital institutionnel, la formation
              vous prépare aux combines des principales prop firms (Apex, Topstep,
              MyFundedFutures). Évaluation, drawdown trailing, scaling — tout y
              passe.
            </li>
          </ul>

          <h3
            style={{
              color: "var(--bk)",
              fontSize: "1.4rem",
              fontWeight: 800,
              marginTop: 40,
              marginBottom: 16,
            }}
          >
            Le parcours pédagogique
          </h3>
          <p style={{ marginBottom: 16 }}>
            La formation se déroule en trois phases distinctes — chacune
            essentielle, aucune ne peut être sautée.
          </p>
          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 22,
              listStyle: "decimal",
            }}
          >
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Phase 1 — Immersion (3-4 jours présentiel ou équivalent
                distanciel).
              </strong>{" "}
              Sessions intensives en groupe restreint (8 participants max).
              Présentation complète de la méthode, premières analyses encadrées,
              démonstrations live de Sébastien sur les marchés du jour. À la
              fin, vous savez lire un graphique avec les outils
              institutionnels.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Phase 2 — Application encadrée (8 à 12 semaines).
              </strong>{" "}
              Vous tradez sur démo en appliquant la méthode. Sessions live
              hebdomadaires de débriefing avec Sébastien et les autres
              participants. Chaque trade est journalisé, analysé, corrigé.
              C&apos;est la phase où vos défauts cachés remontent à la
              surface.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Phase 3 — Autonomie progressive (3 à 6 mois).
              </strong>{" "}
              Passage en réel avec un capital limité. x-trade.ai protège votre
              compte. Vous ajustez votre style à votre tempérament. Objectif :
              être prêt pour une combine prop firm avec un edge mesurable et
              une discipline éprouvée.
            </li>
          </ul>

          <h3
            style={{
              color: "var(--bk)",
              fontSize: "1.4rem",
              fontWeight: 800,
              marginTop: 40,
              marginBottom: 16,
            }}
          >
            À qui s&apos;adresse cette formation
          </h3>
          <p style={{ marginBottom: 16 }}>
            La formation est conçue pour trois profils précis. Si vous ne vous
            reconnaissez dans aucun, mieux vaut commencer par les ressources
            gratuites de l&apos;écosystème (HubTrading.fr, Guide-Trading.fr)
            avant d&apos;investir dans un programme premium.
          </p>
          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 22,
              listStyle: "disc",
            }}
          >
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Le trader intermédiaire qui plafonne.
              </strong>{" "}
              Vous tradez depuis 6-24 mois, vos résultats sont incohérents,
              vous savez que la méthode autodidacte a atteint sa limite. La
              formation vous fournit le cadre institutionnel et l&apos;encadrement
              qui manquent.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Le candidat prop firm.
              </strong>{" "}
              Vous voulez trader avec du capital institutionnel et passer les
              combines (Apex, Topstep, MyFundedFutures). La formation prépare
              spécifiquement à ces évaluations, avec x-trade.ai comme garde-fou.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: "var(--bk)" }}>
                Le professionnel en reconversion.
              </strong>{" "}
              Vous quittez votre métier pour vivre du trading dans 12-24 mois.
              Vous avez un capital de transition (10-50K€), de la discipline
              acquise dans votre vie pro, et besoin d&apos;un parcours
              structuré. La formation vous fait gagner 12-18 mois sur la
              courbe d&apos;apprentissage.
            </li>
          </ul>

          <h3
            style={{
              color: "var(--bk)",
              fontSize: "1.4rem",
              fontWeight: 800,
              marginTop: 40,
              marginBottom: 16,
            }}
          >
            Financement CPF, France Travail et plan formation
          </h3>
          <p style={{ marginBottom: 16 }}>
            La formation est dispensée en partenariat avec EMSCA, organisme
            certifié <strong style={{ color: "var(--bk)" }}>Qualiopi</strong>.
            Cette certification ouvre l&apos;accès au financement CPF, France
            Travail (ex-Pôle Emploi), et au plan de formation employeur si
            vous êtes salarié.
          </p>
          <p style={{ marginBottom: 16 }}>
            Concrètement, plusieurs options existent : utiliser vos droits CPF
            (avec un reste à charge forfaitaire de 150 € depuis avril 2026),
            obtenir un financement France Travail si vous êtes en transition
            pro, négocier une prise en charge dans le plan de formation de
            votre entreprise, ou opter pour un paiement direct en plusieurs
            fois. Les modalités exactes sont discutées lors du rendez-vous
            d&apos;orientation préalable à toute candidature.
          </p>

          <h3
            style={{
              color: "var(--bk)",
              fontSize: "1.4rem",
              fontWeight: 800,
              marginTop: 40,
              marginBottom: 16,
            }}
          >
            Présentiel ou distanciel ?
          </h3>
          <p style={{ marginBottom: 16 }}>
            La formation existe dans deux formats équivalents en contenu, mais
            différents en expérience.
          </p>
          <p style={{ marginBottom: 16 }}>
            Le <strong style={{ color: "var(--bk)" }}>présentiel</strong> se
            déroule dans 20 villes en France, en sessions intensives de 3-4
            jours. Sébastien se déplace, le groupe est limité à 8 participants,
            l&apos;immersion est totale. C&apos;est le format le plus efficace
            pour absorber rapidement une grande quantité de contenu et créer un
            réseau de pairs durable. Les sessions se confirment dès 8 inscrits
            par ville — rejoignez la liste d&apos;attente de votre ville pour
            être prévenu.
          </p>
          <p style={{ marginBottom: 16 }}>
            Le <strong style={{ color: "var(--bk)" }}>distanciel</strong> se
            fait via sessions live hebdomadaires en visioconférence sur la
            même durée totale. Format adapté si vous ne pouvez pas vous
            déplacer, ou si vous préférez étaler l&apos;apprentissage sur 3-4
            mois. Les sessions sont enregistrées et accessibles à vie.
          </p>
          <p style={{ marginBottom: 16 }}>
            Une troisième option, plus exclusive, est le programme immersif à
            Málaga — quelques jours en résidence avec Sébastien, sessions
            trading le matin, debrief l&apos;après-midi. Format réservé aux
            traders confirmés ou aux candidats prop firm.
          </p>
        </div>
      </section>

      {/* LISTE DES 20 VILLES */}
      <section className="v-sec v-sec-light">
        <div className="sec-center">
          <div className="sec-label">20 villes</div>
          <h2 className="sec-title">
            Choisissez votre ville
          </h2>
          <p
            style={{
              color: "var(--g1)",
              fontSize: ".95rem",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 48px",
            }}
          >
            Sébastien se déplace dans toute la France. La session se confirme
            dès 8 inscrits — rejoignez la liste d&apos;attente de votre ville.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          {villes.map((v) => (
            <Link
              key={v.slug}
              href={`/formation-trading/${v.slug}/`}
              style={{
                display: "block",
                padding: "24px 28px",
                background: "var(--g4)",
                borderRadius: 14,
                transition: "all .2s",
                textDecoration: "none",
              }}
              className="pilier-ville-card"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    color: "var(--bk)",
                    letterSpacing: "-.5px",
                  }}
                >
                  {v.ville}
                </span>
                <span
                  style={{
                    fontSize: ".6rem",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase" as const,
                    color: "var(--g2)",
                  }}
                >
                  {v.region}
                </span>
              </div>
              <p
                style={{
                  fontSize: ".82rem",
                  color: "var(--g1)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {v.shortDesc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* PREUVES */}
      <section className="v-sec v-sec-light" style={{ paddingTop: 0 }}>
        <div className="v-stats">
          <div className="v-stat">
            <div className="v-stat-num">4.9/5</div>
            <div className="v-stat-label">126 avis Trustpilot</div>
          </div>
          <div className="v-stat">
            <div className="v-stat-num">10+</div>
            <div className="v-stat-label">Ans d&apos;expérience</div>
          </div>
          <div className="v-stat">
            <div className="v-stat-num">20</div>
            <div className="v-stat-label">Villes en France</div>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="v-sec v-sec-light" style={{ paddingTop: 0 }}>
        <div className="sec-center">
          <div className="sec-label">Format</div>
          <h2 className="sec-title">Comment ça fonctionne</h2>
        </div>
        <div className="v-format-grid">
          <div className="v-format-item">
            <div className="v-format-label">Format</div>
            <div className="v-format-value">
              Présentiel intensif, 3-4 jours consécutifs
            </div>
          </div>
          <div className="v-format-item">
            <div className="v-format-label">Groupe</div>
            <div className="v-format-value">
              8 participants maximum (suivi individuel garanti)
            </div>
          </div>
          <div className="v-format-item">
            <div className="v-format-label">Lieu</div>
            <div className="v-format-value">
              Centre-ville — confirmé 2 semaines avant la session
            </div>
          </div>
          <div className="v-format-item">
            <div className="v-format-label">Financement</div>
            <div className="v-format-value">
              Éligible CPF via EMSCA (Qualiopi). Reste à charge possible : 0&nbsp;€.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="v-final-cta">
        <div className="sec-center">
          <h2 className="sec-title" style={{ color: "var(--pure)" }}>
            Prêt à trader comme un institutionnel ?
          </h2>
          <p style={{ color: "rgba(255,255,255,.4)", marginBottom: 36 }}>
            20 villes en France. 8 places maximum par session.
            <br />
            Formation en ligne disponible immédiatement.
          </p>
          <Link
            href="/#candidater"
            className="v-cta-primary"
            style={{ display: "inline-flex" }}
          >
            Candidater au mentorat BASS <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
