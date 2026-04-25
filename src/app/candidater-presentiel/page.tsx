import { Suspense } from "react";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/jsonld";
import PresentielForm from "./PresentielForm";
import "./presentiel.css";

export const metadata = generateSeoMetadata({
  title: "Candidater — Formation Présentielle",
  description:
    "Candidatez pour la formation trading présentielle BASS. Session intensive 3-4 jours, 8 places max par ville. Éligible CPF. Sébastien Constant se déplace dans toute la France.",
  path: "/candidater-presentiel/",
});

export default function CandidaterPresentielPage() {
  return (
    <div className="cp-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Candidater", url: "/candidater/" },
          { name: "Formation Présentielle" },
        ]}
      />

      <section className="cp-hero">
        <div className="cp-inner">
          <div className="cp-badge">Présentiel — 8 places max</div>
          <h1 className="cp-title">Candidater — Formation Présentielle</h1>
          <p className="cp-sub">
            Session intensive 3-4 jours. 8 places maximum par ville.
            <br />
            Sébastien Constant se déplace dans toute la France.
          </p>
        </div>
      </section>

      <section className="cp-form-sec">
        <div className="cp-form-inner">
          <Suspense fallback={null}>
            <PresentielForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
