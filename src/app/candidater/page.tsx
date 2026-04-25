import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/jsonld";
import "./candidater.css";

export const metadata = generateSeoMetadata({
  title: "Candidater | Présentiel ou En ligne",
  description:
    "Choisissez votre format de formation BASS Trading : présentiel intensif dans 20 villes en France ou formation en ligne avec live trading quotidien à 15h30.",
  path: "/candidater/",
});

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 16, height: 16, flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function CandidaterPage() {
  return (
    <div className="cand-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Candidater" },
        ]}
      />

      <section className="cand-hero">
        <div className="sec-center">
          <div className="cand-badge">
            <span className="v-dot" /> Deux formats disponibles
          </div>
          <h1 className="cand-title">
            Choisissez votre <em>format</em>
          </h1>
          <p className="cand-sub">
            La même méthode. Le même formateur. Deux façons d&apos;apprendre.
          </p>
        </div>
      </section>

      <section className="cand-cards-sec">
        <div className="cand-cards">
          {/* PRÉSENTIEL */}
          <div className="cand-card cand-card-presentiel">
            <div className="cand-card-label">Présentiel</div>
            <h2 className="cand-card-title">Formation Présentielle</h2>
            <p className="cand-card-desc">
              Session intensive en France, animée par Sébastien Constant en personne.
            </p>
            <ul className="cand-card-list">
              <li><Check /> 3-4 jours consécutifs intensifs</li>
              <li><Check /> En France, dans votre ville</li>
              <li><Check /> 8 places maximum</li>
              <li><Check /> Suivi individuel garanti</li>
              <li><Check /> Certifié Qualiopi — éligible CPF</li>
            </ul>
            <Link href="/candidater-presentiel/" className="cand-card-cta cand-cta-gold">
              Candidater — Présentiel <Arrow />
            </Link>
          </div>

          {/* EN LIGNE */}
          <div className="cand-card cand-card-enligne">
            <div className="cand-card-label">En ligne</div>
            <h2 className="cand-card-title">Formation En Ligne</h2>
            <p className="cand-card-desc">
              Accès immédiat aux 250 vidéos + live trading quotidien avec Sébastien.
            </p>
            <ul className="cand-card-list">
              <li><Check /> 250 vidéos de formation</li>
              <li><Check /> Live trading quotidien à 15h30 FR</li>
              <li><Check /> Partage d&apos;écran en direct</li>
              <li><Check /> Accompagnement personnalisé</li>
              <li><Check /> Certifié Qualiopi — éligible CPF</li>
            </ul>
            <Link href="/candidater-en-ligne/" className="cand-card-cta cand-cta-blue">
              Candidater — En ligne <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
