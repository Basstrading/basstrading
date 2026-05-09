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
              <div className="ft-col-title">Methodes</div>
              <Link href="/market-profile/">Market Profile</Link>
              <Link href="/order-flow/">Order Flow</Link>
              <Link href="/footprint/">Footprint Chart</Link>
              <Link href="/volume-profile/">Volume Profile</Link>
              <Link href="/auction-market-theory/">Auction Market Theory</Link>
              <Link href="/liquidite-marches/">Liquidite</Link>
              <Link href="/vwap-institutionnel/">VWAP institutionnel</Link>
            </div>
            <div className="ft-col">
              <div className="ft-col-title">Outils</div>
              <Link href="/sierra-chart/">Sierra Chart</Link>
              <Link href="/bookmap/">Bookmap</Link>
              <Link href="/glossaire/">Glossaire</Link>
              <Link href="/blog/">Tous les guides</Link>
            </div>
            <div className="ft-col">
              <div className="ft-col-title">A propos</div>
              <Link href="/sebastien-constant/">Sebastien Constant</Link>
              <Link href="/avis-bass-trading/">Avis BASS Trading</Link>
              <Link href="/prix-formation-trading/">Prix formation</Link>
              <Link href="/formation-trading-qui-marche/">Quelle formation ?</Link>
            </div>
            <div className="ft-col">
              <div className="ft-col-title">Ressources</div>
              <Link href="/cours/">Cours techniques</Link>
              <Link href="/prop-firm/">Prop firms</Link>
              <Link href="/comparatif/">Comparatifs</Link>
              <Link href="/tutoriels/">Tutoriels Sierra Chart</Link>
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
