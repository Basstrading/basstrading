import type { Metadata } from "next";
import Link from "next/link";
import PayPalCheckout from "./PayPalCheckout";
import "./paypal.css";

export const metadata: Metadata = {
  title: "Paiement PayPal — Seminaire Malaga | BASS Trading",
  description:
    "Paiement securise PayPal pour le seminaire trading Malaga avec Sebastien Constant. Paiement en 4x sans frais disponible.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://basstrading.fr/malaga/paypal/" },
};

export default function MalagaPayPalPage() {
  return (
    <>
      <nav className="pp-nav">
        <a href="https://basstrading.fr" className="pp-nav-logo">
          BASS
        </a>
        <Link href="/malaga/" className="pp-nav-back">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Retour
        </Link>
      </nav>

      <main className="pp-shell">
        <div className="pp-card">
          <div className="pp-badge">Paiement PayPal — Seminaire Malaga</div>
          <h1>Reglement par PayPal</h1>
          <p className="pp-sub">
            Page de paiement dediee. Tu seras redirige vers PayPal pour
            finaliser ta reservation en toute securite.
          </p>

          <div className="pp-price">
            1 290<span>euros</span>
          </div>
          <div className="pp-price-sub">
            Seminaire complet — 5 jours a Malaga, 28 sept. au 2 oct. 2026
          </div>

          <div className="pp-info-4x">
            <div className="pp-info-4x-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect x="2" y="6" width="20" height="14" rx="2" />
                <line x1="2" y1="11" x2="22" y2="11" />
              </svg>
            </div>
            <div>
              <strong>Paiement en 4x sans frais disponible</strong>
              <span>
                Choisis &quot;Payer en 4 fois&quot; lors du checkout PayPal
                (selon eligibilite)
              </span>
            </div>
          </div>

          <PayPalCheckout />

          <div className="pp-secure">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Paiement securise via PayPal — chiffrement SSL
          </div>

          <div className="pp-alt">
            Tu preferes payer par CB ou Klarna ?
            <br />
            <Link href="/malaga/#inscription">
              Retour vers les options CB / Klarna 3x &rarr;
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
