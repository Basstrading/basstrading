import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/jsonld";
import FAQ from "@/components/FAQ";

export const metadata = generateSeoMetadata({
  title: "BASS Trading vs Xeilos : Comparatif Honnete 2026 (Methode, Prix, Resultats)",
  description:
    "BASS Trading vs Xeilos en 2026 : comparatif honnete des deux mentorats trading francais. Methode (Market Profile vs ICT), prix, format, communaute, resultats. Qui choisir selon ton profil ?",
  path: "/bass-trading-vs-xeilos/",
});

const faq = [
  {
    question: "BASS Trading et Xeilos enseignent-ils la meme chose ?",
    answer:
      "Non. BASS Trading enseigne le Market Profile, l'Order Flow et le Footprint Chart — la methode institutionnelle. Xeilos enseigne principalement la methode ICT (Inner Circle Trader) et le Smart Money Concept. Ce sont deux philosophies differentes : BASS lit le volume reel, ICT lit les patterns de manipulation.",
  },
  {
    question: "Lequel des deux est le moins cher ?",
    answer:
      "Les deux mentorats sont dans la fourchette premium (3 000-10 000 euros). BASS Trading est eligible CPF via EMSCA (Qualiopi), ce qui peut reduire le cout reel selon ton solde compte formation.",
  },
  {
    question: "Quel mentorat choisir si je veux passer en prop firm ?",
    answer:
      "Les deux peuvent t'aider mais avec des approches differentes. BASS Trading a plus de 700 000 dollars de comptes finances cumules par ses eleves en prop firms (FTMO, Topstep, etc.) grace a la methode Market Profile. La methode ICT enseignee par Xeilos peut aussi marcher mais avec un style plus intraday/scalping.",
  },
  {
    question: "Le live trading quotidien est-il inclus dans les deux ?",
    answer:
      "BASS Trading propose des sessions live trading quotidiennes avec Sebastien Constant. Xeilos propose egalement du contenu live mais le format peut differer. Le live quotidien est un differenciateur cle de BASS.",
  },
];

export default function BassVsXeilosPage() {
  return (
    <>
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "BASS Trading vs Xeilos" },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>BASS vs Xeilos</span>
          </nav>
          <div className="blog-hero-cat">Comparatif</div>
          <h1 className="blog-hero-title">
            BASS Trading vs Xeilos.<br />
            Lequel choisir en 2026 ?
          </h1>
          <p className="blog-hero-desc">
            Comparatif honnete des deux mentorats trading francophones premium.
            Methode, prix, format, communaute, resultats : la verite sans
            langue de bois pour t&apos;aider a choisir selon ton profil.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>BASS Trading et Xeilos : deux philosophies differentes</h2>
          <p>
            BASS Trading et Xeilos sont les deux mentorats trading francophones
            les plus reconnus en 2026. Mais ils n&apos;enseignent pas la meme
            chose. Comprendre la difference avant de choisir te fera economiser
            des milliers d&apos;euros et des mois de pratique.
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
                  <th style={{ padding: 16, textAlign: "left" }}>Critere</th>
                  <th style={{ padding: 16, textAlign: "left" }}>BASS Trading</th>
                  <th style={{ padding: 16, textAlign: "left" }}>Xeilos</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Methode principale</td>
                  <td style={{ padding: 16 }}>Market Profile + Order Flow + Footprint</td>
                  <td style={{ padding: 16 }}>Smart Money / ICT</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Philosophie</td>
                  <td style={{ padding: 16 }}>Lecture du volume institutionnel</td>
                  <td style={{ padding: 16 }}>Lecture des manipulations de prix</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Logiciel</td>
                  <td style={{ padding: 16 }}>Sierra Chart (standard pro)</td>
                  <td style={{ padding: 16 }}>TradingView, MT5</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Live trading quotidien</td>
                  <td style={{ padding: 16, fontWeight: 700 }}>Oui, chaque jour</td>
                  <td style={{ padding: 16 }}>Variable</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Note Trustpilot</td>
                  <td style={{ padding: 16, fontWeight: 700 }}>4.9/5 (126 avis)</td>
                  <td style={{ padding: 16 }}>Variable</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Eligible CPF</td>
                  <td style={{ padding: 16, fontWeight: 700 }}>Oui (Qualiopi via EMSCA)</td>
                  <td style={{ padding: 16 }}>A verifier</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Outil proprietaire</td>
                  <td style={{ padding: 16 }}>x-trade.ai (risk management)</td>
                  <td style={{ padding: 16 }}>—</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Marches</td>
                  <td style={{ padding: 16 }}>Futures (ES, NQ) prioritaire</td>
                  <td style={{ padding: 16 }}>Forex, indices</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  <td style={{ padding: 16, fontWeight: 600 }}>Seminaire en presentiel</td>
                  <td style={{ padding: 16, fontWeight: 700 }}>Malaga 5 jours (1 490 €)</td>
                  <td style={{ padding: 16 }}>Selon edition</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>BASS Trading : pour qui ?</h2>
          <p>
            BASS Trading est fait pour toi si :
          </p>
          <ul>
            <li>
              Tu veux trader les <strong>Futures (ES, NQ, indices)</strong> ou
              tout marche avec du volume reel.
            </li>
            <li>
              Tu cherches une methode <strong>institutionnelle, structurelle</strong>{" "}
              — pas des patterns subjectifs.
            </li>
            <li>
              Tu veux un <strong>live trading quotidien</strong> avec un
              formateur qui trade lui-meme tous les jours.
            </li>
            <li>
              Tu veux pouvoir <strong>financer via CPF</strong> (Qualiopi).
            </li>
            <li>
              Tu vises une <strong>prop firm</strong> (FTMO, Topstep, Fast
              Track) — les eleves BASS ont cumule 700 000 $+ finances.
            </li>
          </ul>

          <h2>Xeilos : pour qui ?</h2>
          <p>
            Xeilos est fait pour toi si :
          </p>
          <ul>
            <li>
              Tu veux apprendre la methode <strong>Smart Money / ICT</strong>{" "}
              (Inner Circle Trader).
            </li>
            <li>
              Tu trades plutot <strong>Forex et indices</strong> sur
              TradingView/MT5.
            </li>
            <li>
              Tu prefere une approche <strong>scalping/intraday</strong> basee
              sur les liquidity grabs et les market structures.
            </li>
          </ul>

          <h2>Verdict honnete</h2>
          <p>
            Les deux mentorats sont serieux. Mais ils s&apos;adressent a des
            traders differents. Si tu veux comprendre <strong>pourquoi le prix
            bouge</strong> (volume institutionnel, contraintes des operateurs),
            BASS Trading est plus profond. Si tu veux apprendre a{" "}
            <strong>lire les patterns de manipulation</strong> sur Forex/MT5,
            Xeilos est plus specifique.
          </p>
          <p>
            BASS Trading a un avantage objectif : <strong>4.9/5 sur 126 avis
            Trustpilot verifies</strong>, eligibilite CPF officielle, et un
            outil proprietaire (x-trade.ai) pour automatiser la gestion du
            risque.{" "}
            <Link href="/avis-bass-trading/">Voir tous les avis BASS →</Link>
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
              Tester la methode BASS avant de t&apos;engager
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Le seminaire Malaga (5 jours, 1 490 €) est le meilleur format
              pour decouvrir la methode en condition reelle.
            </p>
            <Link
              href="/malaga/"
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
              Voir Malaga 2026 →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
