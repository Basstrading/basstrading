import Link from "next/link";

export default function CTACard({
  label = "Mentorat",
  title = "Apprenez a lire le volume comme un pro.",
  description = "70 heures de formation, Footprint + Market Profile + Order Flow. Sierra Chart configure. 10 places max.",
}: {
  label?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="cta-card">
      <div className="cta-card-label">{label}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href="/#candidater" className="btn-p">
        Verifier mon eligibilite{" "}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
}
