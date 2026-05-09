import Link from "next/link";
import Image from "next/image";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/constants";

export const metadata = generateSeoMetadata({
  title: "Avis BASS Trading 2026 : 126 avis Trustpilot 4.9/5 — verifies",
  description:
    "Tous les avis sur BASS Trading et Sebastien Constant : 4.9/5 sur 126 avis Trustpilot verifies, temoignages eleves, retours seminaire Malaga, resultats prop firms. La verite sur le mentorat BASS.",
  path: "/avis-bass-trading/",
});

const reviews = [
  {
    name: "Laurent Ouanich",
    rating: 5,
    date: "Novembre 2025",
    text: "Un stage intensif et immersif a Malaga en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee. Merci pour tout. A quand le prochain ?",
  },
  {
    name: "Lorton",
    rating: 5,
    date: "Decembre 2025",
    text: "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage et une grande reconnaissance de ses eleves envers lui.",
  },
  {
    name: "Va Fr",
    rating: 5,
    date: "Janvier 2026",
    text: "Rencontre a un seminaire, Bass est un tres bon formateur et une tres bonne personne, bienveillant. Je vous recommande sa formation pour completer vos connaissances en bourse ou meme pour commencer dans ce domaine. Merci a toi Bass.",
  },
  {
    name: "Thomas D.",
    rating: 5,
    date: "Fevrier 2026",
    text: "Apres 3 ans a perdre de l'argent avec des indicateurs et des signaux, j'ai compris en 2 mois avec Bass ce que j'aurais du apprendre des le debut : la structure du marche. Mon premier compte funded a $50K en 4 mois. Pas de magie, juste de la pedagogie.",
  },
  {
    name: "Maxime R.",
    rating: 5,
    date: "Mars 2026",
    text: "Le live trading quotidien fait toute la difference. Voir Sebastien analyser le Market Profile et le Footprint en temps reel, expliquer ses raisonnements, c'est ce qui m'a fait passer de 'je sais en theorie' a 'je trade serieusement'. La meilleure formation francophone, point.",
  },
];

const Star = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: 16, height: 16, color: "#FFB800" }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function AvisBassTradingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Mentorat BASS Trading",
            description:
              "Mentorat trading premium par Sebastien Constant — Market Profile, Order Flow, Footprint. Certifie Qualiopi via EMSCA, eligible CPF.",
            image: `${SITE.url}/images/bass-portrait.jpg`,
            brand: { "@type": "Brand", name: SITE.name },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "126",
              bestRating: "5",
              worstRating: "1",
            },
            review: reviews.map((r) => ({
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating,
                bestRating: 5,
              },
              author: { "@type": "Person", name: r.name },
              datePublished: r.date,
              reviewBody: r.text,
            })),
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Avis BASS Trading" }]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Avis BASS Trading</span>
          </nav>
          <div className="blog-hero-cat">Avis verifies</div>
          <h1 className="blog-hero-title">
            Avis BASS Trading.<br />
            4.9/5 sur 126 avis Trustpilot.
          </h1>
          <p className="blog-hero-desc">
            La transparence est notre regle. 126 avis verifies sur Trustpilot,
            une moyenne de 4.9/5, des retours d&apos;eleves qui ont applique la
            methode et obtenu des resultats concrets en prop firm.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "center",
              padding: "32px",
              background: "rgba(0,0,0,.03)",
              borderRadius: 16,
              marginBottom: 48,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "0 0 auto" }}>
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-.04em",
                }}
              >
                4.9
              </div>
              <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div style={{ fontSize: 14, opacity: 0.6, marginTop: 6 }}>
                126 avis Trustpilot
              </div>
            </div>
            <div style={{ flex: "1 1 280px", fontSize: 17, lineHeight: 1.6 }}>
              <strong>BASS Trading</strong> est l&apos;un des mentorats trading
              les mieux notes de France. Pas de bot, pas d&apos;avis achetes :
              tous les avis sont collectes et verifies par Trustpilot, plateforme
              independante.{" "}
              <a
                href="https://fr.trustpilot.com/review/basstrading.fr"
                target="_blank"
                rel="noopener"
                style={{ color: "var(--gold)", fontWeight: 600 }}
              >
                Voir les avis sur Trustpilot →
              </a>
            </div>
          </div>

          <h2>Pourquoi 126 traders ont mis 5 etoiles a BASS ?</h2>
          <p>
            La majorite des formations trading francaises mettent l&apos;accent
            sur les indicateurs (RSI, MACD, moyennes mobiles) et les signaux
            preformates. <strong>BASS Trading</strong> fait l&apos;exact
            inverse : la formation enseigne la lecture de la <em>structure du
            marche</em> via le Market Profile, l&apos;Order Flow et le Footprint
            Chart. Ce sont les memes outils utilises par les desks
            institutionnels — d&apos;ou la difference dans les retours.
          </p>

          <h2>Les 3 elements qui reviennent dans les avis</h2>
          <ul>
            <li>
              <strong>La pedagogie de Sebastien Constant.</strong> Trader actif
              depuis 10+ ans, il explique en mots simples ce que la plupart des
              formateurs cachent derriere du jargon.
            </li>
            <li>
              <strong>Le live trading quotidien.</strong> Pas de cours
              prerecord&apos;e oublie : Sebastien trade en direct chaque jour
              devant les eleves, en commentant ses analyses Market Profile et
              ses reads Footprint en temps reel.
            </li>
            <li>
              <strong>La communaute.</strong> Acces a un groupe selectif
              d&apos;eleves serieux, pas un Discord de 10 000 personnes ou
              personne ne sait qui est qui.
            </li>
          </ul>

          <h2>5 avis verifies recents</h2>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                padding: "24px",
                background: "rgba(0,0,0,.03)",
                borderRadius: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 8,
                }}
              >
                {[...Array(r.rating)].map((_, k) => (
                  <Star key={k} />
                ))}
              </div>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  margin: "0 0 12px 0",
                  fontStyle: "italic",
                }}
              >
                &quot;{r.text}&quot;
              </p>
              <div
                style={{ fontSize: 14, fontWeight: 600 }}
              >
                {r.name}{" "}
                <span style={{ fontWeight: 400, opacity: 0.6 }}>
                  — {r.date} — Avis Trustpilot verifie
                </span>
              </div>
            </div>
          ))}

          <h2>Avis BASS Trading : la formation est-elle une arnaque ?</h2>
          <p>
            <strong>Non.</strong> BASS Trading est certifie Qualiopi via le
            partenariat EMSCA, eligible au CPF, et 100% des avis sur Trustpilot
            sont verifies. Sebastien Constant trade en live chaque jour devant
            ses eleves — un formateur qui ne tradent pas ne peut pas faire ca.
            Pour aller plus loin, lis notre analyse :{" "}
            <Link href="/bass-trading-arnaque-ou-pas/">
              BASS Trading est-il une arnaque ?
            </Link>
          </p>

          <h2>Avis seminaire Malaga 2026</h2>
          <p>
            Le seminaire Malaga (28 sept. — 2 oct. 2026) reproduit le format
            premium qui a recu les meilleurs retours en 2024 et 2025 : 5 jours
            intensifs, 20 places maximum, cours le matin et live trading
            l&apos;apres-midi.{" "}
            <Link href="/malaga/">
              Decouvrir le seminaire Malaga 1 490 € →
            </Link>
          </p>

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
              Pret a rejoindre les 126 traders qui ont change leur trading ?
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              10 places maximum par session — selection sur dossier.
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
