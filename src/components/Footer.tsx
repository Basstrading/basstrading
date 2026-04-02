import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="ft-top">
          <div className="ft-logo">BASS</div>
          <div className="ft-cols">
            <div className="ft-col">
              <div className="ft-col-title">Programme</div>
              <Link href="/#methode">Methode</Link>
              <Link href="/#programme">Programme</Link>
              <Link href="/#certification">Certification</Link>
              <Link href="/#candidater">Candidater</Link>
            </div>
            <div className="ft-col">
              <div className="ft-col-title">Ressources</div>
              <Link href="/blog/market-profile-guide-complet/">
                Market Profile
              </Link>
              <Link href="/blog/footprint-chart-trading/">Footprint Chart</Link>
              <Link href="/blog/order-flow-trading-france/">Order Flow</Link>
              <Link href="/blog/formation-trading-cpf-qualiopi/">
                Formation CPF
              </Link>
            </div>
            <div className="ft-col">
              <div className="ft-col-title">Ecosysteme</div>
              <a href="https://hubtrading.fr" target="_blank" rel="noopener">
                HubTrading.fr
              </a>
              <a href="https://x-trade.ai" target="_blank" rel="noopener">
                x-trade.ai
              </a>
              <a href="mailto:contact@basstrading.fr">Contact</a>
            </div>
          </div>
        </div>
        <div className="ft-bottom">
          <span>&copy; 2026 BASS — Sebastien Constant</span>
          <div>
            <Link href="/mentions-legales/">Mentions legales</Link>
            <Link href="/confidentialite/">Confidentialite</Link>
            <Link href="/cgv/">CGV</Link>
          </div>
        </div>
      </footer>
      <div className="disclaimer">
        Le trading comporte des risques de perte en capital. Les performances
        passees ne prejugent pas des performances futures. Ce site ne constitue
        pas un conseil en investissement.
      </div>
    </>
  );
}
