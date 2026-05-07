import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/lib/jsonld";
import CTACard from "@/components/CTACard";
import FAQ from "@/components/FAQ";

export const metadata = generateSeoMetadata({
  title: "Comparatif Formation Trading 2026 : 5 Formats Comparés",
  description:
    "Comparatif des 5 formats de formation trading en 2026 : autodidacte, VOD, en ligne CPF, présentiel CPF, mentorat premium. Avantages, limites, prix réels, public cible.",
  path: "/formation-trading/comparatif/",
});

const faq = [
  {
    question: "Quel format de formation trading choisir en 2026 ?",
    answer:
      "Le bon format dépend de votre profil : autodidacte si vous êtes très autonome avec budget limité, VOD pour découvrir, formation en ligne CPF pour structurer sans déplacement, présentiel CPF pour l'effet groupe, mentorat premium pour le suivi individualisé. Plus votre niveau est avancé, plus le mentorat individuel apporte de valeur ajoutée.",
  },
  {
    question: "Une formation autodidacte peut-elle suffire ?",
    answer:
      "Statistiquement non. 80 % des autodidactes abandonnent en moins d'un an. Les ressources gratuites (YouTube, livres) permettent d'acquérir le vocabulaire et les bases conceptuelles, mais ne remplacent pas un mentor qui corrige vos biais en temps réel. Pour rentabiliser votre temps, investir dans une formation structurée multiplie par 2-3 votre vitesse de progression.",
  },
  {
    question: "VOD ou présentiel : que privilégier ?",
    answer:
      "La VOD convient aux profils très autonomes avec discipline solide — vous regardez quand vous voulez, à votre rythme. Le présentiel apporte l'effet groupe, l'accountability sociale, les questions en direct et l'immersion totale sur 3-5 jours. Le présentiel coûte plus cher mais accélère la progression sur les concepts complexes (Market Profile, Order Flow).",
  },
  {
    question: "Pourquoi choisir un mentorat plutôt qu'une formation classique ?",
    answer:
      "Un mentorat individualise l'accompagnement avec un nombre limité de places (5 à 20 max), un suivi régulier et une adaptation à votre style. Une formation classique vend un programme standardisé à des dizaines voire centaines d'élèves. Pour les traders qui ont déjà les bases mais stagnent, le mentorat est mathématiquement plus efficace qu'une nouvelle formation théorique.",
  },
  {
    question: "Combien investir pour une formation trading sérieuse ?",
    answer:
      "Comptez 1 500 à 8 000 € selon le format. VOD : 500-2 000 €. Formation certifiante CPF : 2 000-4 000 €. Mentorat premium : 4 000-8 000 €. Au-delà du prix de la formation, prévoyez 5 000 à 15 000 € de coût total avant la première année rentable (matériel, abonnements logiciel, données CME, frais prop firm, capital perdu en phase d'apprentissage).",
  },
];

interface FormatRow {
  format: string;
  prix: string;
  duree: string;
  cpf: string;
  suivi: string;
  publicCible: string;
  forces: string[];
  limites: string[];
}

const formats: FormatRow[] = [
  {
    format: "Autodidacte",
    prix: "0 à 200 €",
    duree: "12-36 mois",
    cpf: "Non",
    suivi: "Aucun",
    publicCible: "Profils très autonomes, budget zéro, longue patience",
    forces: [
      "Coût quasi nul",
      "Liberté totale du rythme",
      "Choix complet des sources (YouTube, livres, podcasts)",
    ],
    limites: [
      "80 % d'abandon en moins d'un an",
      "Pas de feedback sur vos erreurs",
      "Difficile d'éviter les pièges et les méthodes inefficaces",
      "Aucune certification reconnue",
    ],
  },
  {
    format: "VOD (Vidéo à la demande)",
    prix: "500 à 2 000 €",
    duree: "1-3 mois",
    cpf: "Rarement",
    suivi: "Forum/groupe, pas de mentor",
    publicCible: "Niveaux débutants à intermédiaires autonomes",
    forces: [
      "Prix accessible",
      "Flexibilité totale (regardez quand vous voulez)",
      "Bonne ressource pour découvrir un concept",
    ],
    limites: [
      "Contenu enregistré, jamais à jour temps réel",
      "Pas d'interaction réelle",
      "Vous regardez sans pratiquer activement",
      "Peu d'engagement → taux d'achèvement bas",
    ],
  },
  {
    format: "Formation en ligne CPF",
    prix: "2 000 à 4 000 €",
    duree: "2-6 mois",
    cpf: "Oui",
    suivi: "Live hebdomadaire, communauté",
    publicCible: "Reconvertis, salariés, demandeurs d'emploi",
    forces: [
      "Éligible CPF (financement public possible)",
      "Certification Qualiopi, parfois RNCP",
      "Live trading hebdomadaire ou bimensuel",
      "Communauté d'entraide",
    ],
    limites: [
      "Reste à charge 150 € depuis avril 2026",
      "Distance réduit l'engagement vs présentiel",
      "Plafond RS = 1 500 € (CPF complet uniquement sur RNCP)",
    ],
  },
  {
    format: "Formation présentielle CPF",
    prix: "2 500 à 5 000 €",
    duree: "3-10 jours intensifs",
    cpf: "Oui",
    suivi: "Sessions live + suivi 1-3 mois",
    publicCible: "Profils en reconversion totale, demandeurs d'emploi, indépendants",
    forces: [
      "Immersion totale 3-5 jours",
      "Effet groupe et accountability sociale",
      "Questions en direct, ajustement temps réel",
      "Éligible CPF + AIF régionales possibles",
    ],
    limites: [
      "Coût déplacement/hébergement à ajouter (sauf BASS qui se déplace dans 20 villes)",
      "Dates fixes (moins flexible que VOD)",
      "Concentration intense — fatigue cognitive",
    ],
  },
  {
    format: "Mentorat premium",
    prix: "4 000 à 8 000 €",
    duree: "70+ heures sur 6-12 mois",
    cpf: "Possible (selon organisme)",
    suivi: "Live trading quotidien, suivi individualisé",
    publicCible: "Traders qui ont les bases mais stagnent, ambitions prop firm",
    forces: [
      "Sessions de trading live quotidiennes (pas hebdomadaires)",
      "10-15 places max — suivi individualisé",
      "Accès longue durée (6-12 mois ou à vie)",
      "Outils inclus (souvent un risk manager comme x-trade.ai)",
      "Méthode pro complète (Market Profile + Order Flow + Footprint)",
    ],
    limites: [
      "Investissement le plus élevé",
      "Demande engagement et autonomie",
      "Sélection à l'entrée (pas pour tout le monde)",
    ],
  },
];

export default function ComparatifFormationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Formation Trading", url: "/formation-trading/" },
          { name: "Comparatif" },
        ]}
      />
      <FaqJsonLd items={faq} />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <Link href="/formation-trading/">Formation Trading</Link>
            <span className="sep">/</span>
            <span>Comparatif</span>
          </nav>
          <div className="blog-hero-cat">Comparatif</div>
          <h1 className="blog-hero-title">
            Comparatif Formation Trading 2026 :<br />
            5 formats comparés.
          </h1>
          <p className="blog-hero-desc">
            Autodidacte, VOD, en ligne CPF, présentiel CPF, mentorat premium —
            les 5 formats existants comparés objectivement : prix, durée,
            financement, public cible, forces et limites.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>Comment lire ce comparatif</h2>
          <p>
            Il n&apos;y a pas de format &quot;meilleur&quot; dans l&apos;absolu — il y a un
            format adapté à <strong>votre profil</strong>, votre budget,
            votre niveau actuel et vos objectifs. Ce comparatif vous donne
            les critères objectifs pour choisir, sans biais commercial.
          </p>
          <p>
            Cinq formats existent en France en 2026 : autodidacte, VOD
            (vidéo à la demande), formation en ligne CPF, formation
            présentielle CPF, mentorat premium. Chacun a son public, ses
            avantages et ses limites.
          </p>

          {formats.map((f) => (
            <div
              key={f.format}
              style={{
                marginTop: 48,
                paddingTop: 32,
                borderTop: "2px solid var(--g4)",
              }}
            >
              <h2 style={{ marginBottom: 12 }}>{f.format}</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 12,
                  marginBottom: 24,
                  fontSize: ".88rem",
                }}
              >
                <div>
                  <div style={{ color: "var(--g2)", fontSize: ".7rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>Prix</div>
                  <div style={{ fontWeight: 700 }}>{f.prix}</div>
                </div>
                <div>
                  <div style={{ color: "var(--g2)", fontSize: ".7rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>Durée</div>
                  <div style={{ fontWeight: 700 }}>{f.duree}</div>
                </div>
                <div>
                  <div style={{ color: "var(--g2)", fontSize: ".7rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>CPF</div>
                  <div style={{ fontWeight: 700 }}>{f.cpf}</div>
                </div>
                <div>
                  <div style={{ color: "var(--g2)", fontSize: ".7rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>Suivi</div>
                  <div style={{ fontWeight: 700 }}>{f.suivi}</div>
                </div>
              </div>
              <p>
                <strong>Public cible :</strong> {f.publicCible}
              </p>
              <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "1.1rem", marginTop: 20 }}>Forces</h3>
              <ul>
                {f.forces.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
              <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "1.1rem", marginTop: 16 }}>Limites</h3>
              <ul>
                {f.limites.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </div>
          ))}

          <h2 style={{ marginTop: 56 }}>Tableau récapitulatif</h2>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>Format</th>
                <th>Prix</th>
                <th>Durée</th>
                <th>CPF</th>
              </tr>
            </thead>
            <tbody>
              {formats.map((f) => (
                <tr key={f.format}>
                  <td>{f.format}</td>
                  <td>{f.prix}</td>
                  <td>{f.duree}</td>
                  <td>{f.cpf}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Comment choisir le format adapté à votre profil</h2>
          <p>Quatre questions pour vous orienter :</p>
          <ol>
            <li>
              <strong>Quel est votre niveau actuel ?</strong>{" "}
              Débutant total : commencez par autodidacte (3-6 mois) puis
              passez à une formation structurée. Avec quelques bases :
              formation en ligne CPF ou présentielle. Stagnant après
              plusieurs essais : passez direct au mentorat premium.
            </li>
            <li>
              <strong>Quel budget avez-vous ?</strong>{" "}
              0-1 000 € : autodidacte + livres. 1 000-3 000 € : VOD ou
              formation en ligne CPF. 3 000-5 000 € : présentiel CPF.
              5 000-8 000 € : mentorat premium.
            </li>
            <li>
              <strong>Êtes-vous autonome ou avez-vous besoin d&apos;accountability ?</strong>{" "}
              Très autonome : autodidacte ou VOD suffisent. Besoin de
              cadre : formation en ligne CPF avec lives hebdomadaires.
              Besoin d&apos;immersion : présentiel CPF. Besoin de
              correction temps réel : mentorat premium.
            </li>
            <li>
              <strong>Visez-vous prop firm, indépendance ou amélioration personnelle ?</strong>{" "}
              Prop firm : mentorat premium avec préparation spécifique.
              Indépendance long terme : présentiel CPF + suivi.
              Amélioration personnelle : VOD ou formation en ligne CPF.
            </li>
          </ol>

          <h2>Le positionnement BASS Trading</h2>
          <p>
            Le <Link href="/">mentorat BASS Trading</Link> se positionne
            dans la catégorie <strong>mentorat premium</strong>. Cursus de
            70 heures, 10 places maximum par session, sessions de trading
            live quotidiennes par Sébastien Constant, x-trade.ai inclus à
            vie. Certification Qualiopi via EMSCA, éligible CPF.
          </p>
          <p>
            La formation est dispensée en ligne et également en présentiel
            dans <Link href="/formation-trading/">20 villes en France</Link>{" "}
            (Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes,
            Strasbourg, Nice, Montpellier, Rennes, Grenoble, Toulon,
            Aix-en-Provence, Rouen, Dijon, Angers, Reims, Nîmes, Le Havre).
          </p>
          <p>
            Pour vérifier votre éligibilité au mentorat BASS,{" "}
            <Link href="/#candidater">candidatez ici</Link>. Un appel
            découverte de 15 minutes permet de valider l&apos;adéquation
            entre votre profil et le programme.
          </p>

          <CTACard />
        </article>
      </div>

      <FAQ items={faq} />

      <section className="form-sec" id="candidater">
        <div className="form-inner">
          <div className="sec-label">Candidature</div>
          <h2 className="sec-title">Prêt à choisir votre format ?</h2>
          <p className="sec-desc">
            Le mentorat BASS recrute un nombre limité de traders par
            session. Vérifiez votre éligibilité en 15 minutes — aucun
            engagement.
          </p>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/#candidater" className="btn-p">
              Candidater au mentorat BASS{" "}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                width="14"
                height="14"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
