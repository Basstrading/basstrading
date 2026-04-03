import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/jsonld";
import EnLigneForm from "./EnLigneForm";
import "./enligne.css";

export const metadata = generateSeoMetadata({
  title: "Candidater — Formation En Ligne",
  description:
    "Candidatez pour la formation trading en ligne BASS. 250 vidéos + live trading quotidien à 15h30 avec Sébastien Constant. Partage d\u2019écran + accompagnement personnalisé. Éligible CPF.",
  path: "/candidater-en-ligne/",
});

export default function CandidaterEnLignePage() {
  return (
    <div className="cl-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Candidater", url: "/candidater/" },
          { name: "Formation En Ligne" },
        ]}
      />

      <section className="cl-hero">
        <div className="cl-inner">
          <div className="cl-badge">En ligne — Accès immédiat</div>
          <h1 className="cl-title">Candidater — Formation En Ligne</h1>
          <p className="cl-sub">
            250 vidéos + live trading quotidien à l&apos;ouverture US (15h30 heure française)
            <br />
            + accompagnement personnalisé.
          </p>
        </div>
      </section>

      <section className="cl-form-sec">
        <div className="cl-form-inner">
          {/* ENCART INFO */}
          <div className="cl-info-box">
            <div className="cl-info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <strong>Live trading quotidien — 15h30 heure française</strong>
              <p>
                Le live trading se tient chaque jour à l&apos;ouverture des marchés
                américains — 15h30 heure française. Sébastien trade en direct avec
                partage d&apos;écran. Assurez-vous d&apos;être disponible sur ce créneau.
              </p>
            </div>
          </div>

          <EnLigneForm />
        </div>
      </section>
    </div>
  );
}
