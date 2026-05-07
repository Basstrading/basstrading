import Link from "next/link";
import Image from "next/image";
import { generateSeoMetadata } from "@/lib/seo";
import { PersonJsonLd, BreadcrumbJsonLd } from "@/lib/jsonld";
import { articles } from "@/content/blog/_meta";

export const metadata = generateSeoMetadata({
  title: "Sébastien Constant — Trader, Formateur Market Profile, Fondateur BASS",
  description:
    "Sébastien Constant : trader actif depuis 10+ ans, spécialiste Market Profile, Order Flow, Footprint. Fondateur du mentorat BASS Trading et créateur de x-trade.ai. 700K $+ financés en prop firms par les élèves.",
  path: "/sebastien-constant/",
});

const featuredSlugs = [
  "market-profile-guide-complet",
  "order-flow-trading-france",
  "footprint-chart-trading",
  "volume-profile-guide",
  "auction-market-theory",
  "tape-reading-flux-ordres",
  "absorption-order-flow",
  "cvd-cumulative-volume-delta",
  "vwap-trading-guide",
];

export default function SebastienConstantPage() {
  const featured = featuredSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean);

  return (
    <>
      <PersonJsonLd
        name="Sébastien Constant"
        jobTitle="Trader et formateur Market Profile, Order Flow"
        description="Trader actif depuis plus de 10 ans, spécialiste Market Profile, Order Flow et Footprint sur les Futures. Fondateur du mentorat BASS Trading. Créateur de x-trade.ai. Formateur certifié via EMSCA (Qualiopi)."
        url="/sebastien-constant/"
        image="/images/bass-portrait.jpg"
        knowsAbout={[
          "Market Profile",
          "Order Flow",
          "Footprint Chart",
          "CVD",
          "Tape Reading",
          "Volume Profile",
          "VWAP",
          "Sierra Chart",
          "Auction Market Theory",
          "Gamma Exposure",
          "Prop Firm Trading",
          "Risk Management",
          "Trading Futures",
        ]}
        sameAs={[
          "https://hubtrading.fr",
          "https://x-trade.ai",
          "https://fr.trustpilot.com/review/basstrading.fr",
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Sébastien Constant" },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Sébastien Constant</span>
          </nav>
          <div className="blog-hero-cat">Auteur</div>
          <h1 className="blog-hero-title">
            Sébastien Constant.<br />
            Trader. Formateur. Auteur.
          </h1>
          <p className="blog-hero-desc">
            Trader actif depuis plus de 10 ans. Spécialiste Market Profile,
            Order Flow et Footprint sur les Futures. Fondateur du mentorat
            BASS Trading. Créateur de x-trade.ai.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: 32,
              alignItems: "flex-start",
              marginBottom: 48,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "0 0 240px",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/bass-portrait.jpg"
                alt="Sébastien Constant — fondateur BASS Trading"
                width={480}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
            <div style={{ flex: "1 1 320px" }}>
              <p>
                <strong>Sébastien Constant</strong> est trader actif depuis
                plus de 10 ans, spécialiste Market Profile, Order Flow et
                Footprint sur les Futures (E-mini S&amp;P 500, Nasdaq, indices
                européens). Plus de <strong>700 000 $ financés en prop firms</strong>
                {" "}cumulés sur les comptes des élèves du programme — preuve
                documentée par captures de retraits authentiques (FTMO,
                Topstep, Bulenox, Fast Track Trading, Deel).
              </p>
              <p>
                Il a fondé le mentorat <Link href="/">BASS Trading</Link>, le
                premier programme français centré sur la lecture structurelle
                du marché — Market Profile, Footprint, Order Flow, Gamma —
                au lieu des indicateurs retardés. Il est aussi le créateur de{" "}
                <a
                  href="https://x-trade.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  x-trade.ai
                </a>
                , l&apos;outil de gestion du risque automatique utilisé par
                les prop firm traders pour protéger leurs comptes contre les
                biais émotionnels.
              </p>
              <p>
                Formateur certifié via <strong>EMSCA</strong>, organisme
                certifié <strong>Qualiopi</strong>. La{" "}
                <Link href="/formation-trading/">formation présentielle</Link>{" "}
                est dispensée dans 20 villes en France et est éligible CPF.
              </p>
            </div>
          </div>

          <h2>Parcours et expertise</h2>

          <p>
            Sébastien a découvert les marchés à la fin des années 2000.
            Autodidacte, il commence par les indicateurs classiques avant de
            réaliser leurs limites. Sa trajectoire bascule à la rencontre du{" "}
            <Link href="/blog/market-profile-guide-complet/">Market Profile</Link>
            {" "}et de l&apos;
            <Link href="/blog/order-flow-trading-france/">Order Flow</Link>
            {" "}— les outils de référence des desks institutionnels et des
            prop trading firms.
          </p>

          <p>
            Pendant plus de 10 ans, il trade quotidiennement sur les Futures
            avec une méthode centrée sur la lecture structurelle du marché :
            Value Area, Point of Control, types de journées, déséquilibres de
            volume, absorption institutionnelle, gamma exposure. Cette
            méthode, il la transmet désormais en mentorat individuel à un
            nombre limité de traders sélectionnés et lors de sessions
            présentielles dans 20 villes en France.
          </p>

          <h3>Domaines d&apos;expertise</h3>

          <ul>
            <li>
              <strong>Market Profile</strong> — Value Area, POC, Initial
              Balance, types de journées, lecture TPO, composite profile
            </li>
            <li>
              <strong>Order Flow</strong> — Tape Reading, DOM (Depth of
              Market), absorption, agressivité acheteurs/vendeurs, spoofing
            </li>
            <li>
              <strong>Footprint Chart</strong> — Delta, imbalance, volume bid/
              ask par niveau, lectures de divergence
            </li>
            <li>
              <strong>CVD (Cumulative Volume Delta)</strong> — delta cumulé
              sur séance, divergences avec le prix
            </li>
            <li>
              <strong>Volume Profile</strong> — HVN, LVN, Naked POC,
              Composite, distribution de volume
            </li>
            <li>
              <strong>VWAP multi-timeframe</strong> — annuel, mensuel,
              hebdomadaire, daily, écarts-types
            </li>
            <li>
              <strong>Options &amp; Gamma exposure</strong> — walls, flip,
              positionnement des market makers
            </li>
            <li>
              <strong>Sierra Chart</strong> — configuration professionnelle
              pour Market Profile et Order Flow
            </li>
            <li>
              <strong>Prop Firm Trading</strong> — méthode de réussite des
              évaluations FTMO, Topstep, Bulenox, Fast Track Trading
            </li>
            <li>
              <strong>Risk Management</strong> — gestion du risque automatique
              via x-trade.ai
            </li>
          </ul>

          <h2>Crédibilité et résultats</h2>

          <p>
            Sébastien trade en direct chaque matin devant ses élèves. Pas de
            capture d&apos;écran sélective, pas de back-test arrangé. Les
            pertes sont visibles au même titre que les gains — c&apos;est la
            condition non négociable de la pédagogie BASS.
          </p>

          <p>
            <strong>Indicateurs de crédibilité publics</strong> :
          </p>

          <ul>
            <li>
              <strong>4,9/5 sur Trustpilot</strong> — 126 avis vérifiés (
              <a
                href="https://fr.trustpilot.com/review/basstrading.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                voir les avis
              </a>
              )
            </li>
            <li>
              <strong>700 000 $+ financés en prop firms</strong> par les élèves
              du programme BASS, documenté par captures de retraits réels
            </li>
            <li>
              <strong>Certification EMSCA Qualiopi</strong> — formation
              éligible CPF dans toute la France
            </li>
            <li>
              <strong>10+ années d&apos;expérience</strong> de trading actif
              sur Futures
            </li>
            <li>
              <strong>Sessions de trading en direct quotidiennes</strong>{" "}
              devant les élèves du mentorat
            </li>
            <li>
              <strong>20 villes en France</strong> couvertes pour la
              formation présentielle
            </li>
          </ul>

          <h2>Mentorat BASS Trading</h2>

          <p>
            Le mentorat BASS recrute un nombre limité de traders par session.
            Sélection à l&apos;entrée via un appel découverte de 15 minutes.
            Cursus structuré : Market Profile, Order Flow, Footprint, Gamma,
            VWAP, Sierra Chart, prop firm preparation. Suivi individuel,
            accès à vie aux ressources, x-trade.ai inclus.
          </p>

          <p>
            <Link href="/formation-trading/">
              Découvrir la formation présentielle (20 villes en France)
            </Link>
            {" "}ou <Link href="/#candidater">candidater au mentorat</Link>.
          </p>

          <h2>Séminaire intensif Malaga</h2>

          <p>
            Une fois par an, Sébastien organise un séminaire intensif de 5
            jours à Malaga. 20 places maximum. Cours le matin, trading live
            ensemble l&apos;après-midi sur les marchés réels.
          </p>

          <p>
            <Link href="/malaga/">Découvrir le séminaire Malaga 2026</Link>
            {" "}— 28 septembre au 2 octobre 2026.
          </p>

          <h2>x-trade.ai — l&apos;outil de gestion du risque</h2>

          <p>
            <a
              href="https://x-trade.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              x-trade.ai
            </a>
            {" "}est l&apos;outil SaaS développé par Sébastien pour protéger
            automatiquement les comptes prop firm contre les biais
            émotionnels : limite de perte journalière, stop suiveur quotidien,
            verrouillage après pertes consécutives, temps de pause forcé.
            Inclus à vie dans le mentorat BASS, disponible aussi en abonnement
            indépendant pour les prop firm traders du monde entier (interface
            FR + EN).
          </p>

          <h2>Articles écrits par Sébastien Constant</h2>

          <p>
            Sébastien rédige et publie sur le blog BASS Trading des guides
            détaillés sur le Market Profile, l&apos;Order Flow, le Footprint
            Chart et la formation trading. Tous ses articles s&apos;appuient
            sur sa pratique quotidienne — aucune théorie déconnectée de la
            réalité opérationnelle.
          </p>

          <div className="related-grid" style={{ marginTop: 32 }}>
            {featured.map((a) => (
              <Link
                key={a!.slug}
                href={`/blog/${a!.slug}/`}
                className="related-card"
              >
                <div className="related-cat">{a!.category}</div>
                <h3>{a!.title}</h3>
                <p>{a!.shortDescription}</p>
                <span className="related-link">Lire &rarr;</span>
              </Link>
            ))}
          </div>

          <p style={{ marginTop: 32 }}>
            <Link href="/blog/">Voir les 50+ articles du blog &rarr;</Link>
          </p>

          <h2>Contact</h2>

          <p>
            Pour toute demande professionnelle (presse, partenariat,
            interview) :{" "}
            <a href="mailto:contact@basstrading.fr">contact@basstrading.fr</a>
          </p>

          <p>
            Pour candidater au mentorat BASS :{" "}
            <Link href="/#candidater">remplir le formulaire de candidature</Link>
            {" "}(réponse sous 48 h).
          </p>
        </article>
      </div>

      <section className="form-sec" id="candidater">
        <div className="form-inner">
          <div className="sec-label">Candidature</div>
          <h2 className="sec-title">Travailler avec Sébastien.</h2>
          <p className="sec-desc">
            Mentorat sélectif. Vérifiez votre éligibilité en 15 minutes.
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
