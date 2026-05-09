import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/jsonld";
import FAQ from "@/components/FAQ";

export const metadata = generateSeoMetadata({
  title: "Prix Formation Trading 2026 : Combien Ca Coute Vraiment ? (Le Vrai Calcul)",
  description:
    "Combien coute une vraie formation trading en France en 2026 ? Comparatif des prix : mentorats premium (3 000-15 000€), seminaires (1 000-3 000€), formations CPF, prop firms. Le vrai calcul transparent par Sebastien Constant.",
  path: "/prix-formation-trading/",
});

const faq = [
  {
    question: "Combien coute une formation trading serieuse en France en 2026 ?",
    answer:
      "Une formation trading serieuse en France coute entre 1 000 et 15 000 euros selon le format. Un seminaire intensif (3-5 jours) coute 1 000-3 000 euros. Un mentorat premium (suivi 6-12 mois) coute 3 000-15 000 euros. Les 'formations' a moins de 500 euros sont generalement des cours preregistres sans suivi.",
  },
  {
    question: "Le CPF peut-il financer une formation trading ?",
    answer:
      "Oui, si l'organisme de formation est certifie Qualiopi et que la formation est inscrite sur Mon Compte Formation. BASS Trading est eligible CPF via le partenariat EMSCA. Le CPF peut financer tout ou partie de la formation selon ton solde.",
  },
  {
    question: "Pourquoi un mentorat trading coute plus cher qu'une formation classique ?",
    answer:
      "Un mentorat inclut un suivi individuel avec un trader actif, des sessions live trading quotidiennes, l'acces a une communaute selective, et generalement des outils proprietaires (comme x-trade.ai). Le cout reflete le temps reel du formateur, pas le cout de production d'une video.",
  },
  {
    question: "Combien coute le seminaire Malaga BASS Trading ?",
    answer:
      "Le seminaire Malaga 2026 (28 septembre - 2 octobre 2026) coute 1 490 euros pour 5 jours intensifs, 20 places maximum. Paiement 3x sans frais via Klarna disponible. Hebergement et transport non inclus.",
  },
  {
    question: "Y a-t-il des arnaques sur les prix des formations trading ?",
    answer:
      "Oui, attention a deux extremes : (1) les formations a 99 euros qui sont juste des PDF recycles, (2) les mentorats a 30 000-50 000 euros qui promettent l'independance financiere garantie. Une formation honnete a un prix coherent avec le temps de mentorat et n'fait jamais de promesse de gain.",
  },
];

export default function PrixFormationTradingPage() {
  return (
    <>
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Prix formation trading" },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Prix formation trading</span>
          </nav>
          <div className="blog-hero-cat">Transparence prix</div>
          <h1 className="blog-hero-title">
            Prix formation trading.<br />
            Combien ca coute vraiment ?
          </h1>
          <p className="blog-hero-desc">
            Le vrai calcul transparent par Sebastien Constant — trader actif
            depuis 10+ ans. Pas de jargon, pas de baratin marketing : ce que tu
            paies en 2026, et pourquoi.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>Le vrai prix d&apos;une formation trading en France en 2026</h2>
          <p>
            Soyons direct : le prix d&apos;une formation trading dit beaucoup
            sur sa qualite. Trop bas, c&apos;est du contenu generique recycle.
            Trop cher, c&apos;est du marketing avec des promesses irrealistes.
            Voici la grille honnete des prix du marche francais en 2026.
          </p>

          <div
            style={{
              overflowX: "auto",
              margin: "32px 0",
              border: "1px solid rgba(0,0,0,.08)",
              borderRadius: 12,
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(0,0,0,.04)" }}>
                  <th style={{ padding: 16, textAlign: "left" }}>Format</th>
                  <th style={{ padding: 16, textAlign: "left" }}>Prix 2026</th>
                  <th style={{ padding: 16, textAlign: "left" }}>Ce que tu obtiens</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Cours en ligne</td>
                  <td style={{ padding: 16 }}>50 - 500 €</td>
                  <td style={{ padding: 16 }}>Videos preregistres, pas de suivi</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Seminaire intensif</td>
                  <td style={{ padding: 16 }}>1 000 - 3 000 €</td>
                  <td style={{ padding: 16 }}>3-5 jours en presentiel, format groupe</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)", background: "rgba(255,184,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Seminaire Malaga BASS</td>
                  <td style={{ padding: 16, fontWeight: 700 }}>1 490 €</td>
                  <td style={{ padding: 16 }}>5 jours, 20 places, live trading quotidien</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Mentorat premium</td>
                  <td style={{ padding: 16 }}>3 000 - 15 000 €</td>
                  <td style={{ padding: 16 }}>Suivi 6-12 mois, sessions live, communaute</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Mentorats &quot;haut de gamme&quot;</td>
                  <td style={{ padding: 16 }}>15 000 - 50 000 €</td>
                  <td style={{ padding: 16 }}>Souvent du marketing — meme contenu</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Le mentorat BASS Trading : le rapport contenu/prix</h2>
          <p>
            Le mentorat BASS Trading inclut <strong>70 heures de cursus en
            12 modules</strong> (Market Profile, Order Flow, Footprint, CVD,
            Tape Reading, Options, Market Makers), <strong>les sessions live
            trading quotidiennes</strong> avec Sebastien, l&apos;acces{" "}
            <strong>a vie a x-trade.ai</strong> (outil de gestion du risque
            automatique), et l&apos;acces a la communaute selective. Eligible
            CPF via EMSCA (Qualiopi).
          </p>
          <p>
            Le prix exact depend de la formule (en ligne vs presentiel, formule
            seminaire ou mentorat 12 mois) et de ton solde CPF eventuel. Pour
            obtenir le prix personnalise, candidate via{" "}
            <Link href="/candidater/">la page candidature</Link> — reponse sous
            48h.
          </p>

          <h2>Les 5 erreurs les plus chères en formation trading</h2>
          <ol>
            <li>
              <strong>Acheter une formation a 99 €</strong> en pensant
              economiser : tu vas y passer 6 mois pour rien et perdre 5 000 €
              sur les marches en parallele.
            </li>
            <li>
              <strong>Payer 30 000 € un &quot;mentorat haut de gamme&quot;</strong>{" "}
              dont le contenu reel vaut 5 000 €. Le marketing ne fait pas la
              qualite.
            </li>
            <li>
              <strong>Choisir une formation sans formateur actif sur les
              marches.</strong> Si le formateur ne trade plus, son enseignement
              est perime.
            </li>
            <li>
              <strong>Negliger le CPF.</strong> Beaucoup de traders ignorent que
              leur formation peut etre partiellement ou totalement financee.
            </li>
            <li>
              <strong>Confondre formation et signaux.</strong> Un service de
              signaux a 50 €/mois n&apos;est pas une formation — c&apos;est une
              dependance.
            </li>
          </ol>

          <h2>Combien coute le seminaire Malaga 2026 ?</h2>
          <p>
            Le seminaire Malaga 2026 coute <strong>1 490 €</strong> pour 5 jours
            intensifs (28 septembre — 2 octobre 2026), 20 places maximum.
            Paiement <strong>3x sans frais via Klarna</strong> disponible.
            Inclus : 5 jours de formation, sessions live trading quotidiennes,
            x-trade.ai a vie, replays a vie, acces a la communaute. Hebergement
            et transport non inclus.{" "}
            <Link href="/malaga/">Voir le programme complet →</Link>
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
              Connaitre le prix exact pour ton profil
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Reponse sous 48h. Selection sur dossier — 10 places max par
              session.
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
              Candidater — devis personnalise →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
