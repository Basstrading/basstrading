import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/jsonld";
import FAQ from "@/components/FAQ";

export const metadata = generateSeoMetadata({
  title: "Formation Trading Qui Marche : Les 6 Criteres Verifies (2026)",
  description:
    "Quelle formation trading marche vraiment en 2026 ? Les 6 criteres objectifs pour distinguer une formation efficace d'un cours marketing. Methode institutionnelle, formateur actif, suivi, communaute, certification.",
  path: "/formation-trading-qui-marche/",
});

const faq = [
  {
    question: "Quelle formation trading marche vraiment ?",
    answer:
      "Une formation trading qui marche reunit 6 criteres : methode institutionnelle (Market Profile, Order Flow, pas des indicateurs), formateur actif sur les marches, sessions live trading, communaute selective, certification Qualiopi/CPF, et zero promesse de gain garanti. BASS Trading reunit ces 6 criteres.",
  },
  {
    question: "Combien de temps pour reussir avec une formation trading ?",
    answer:
      "Avec une vraie formation et de la rigueur, compte 6-12 mois pour stabiliser un edge et passer ta premiere prop firm. Sans formation serieuse, la majorite des traders mettent 3-5 ans (ou abandonnent). La formation accelere l'apprentissage en supprimant les detours inutiles.",
  },
  {
    question: "Pourquoi 90% des formations trading ne marchent pas ?",
    answer:
      "Parce qu'elles enseignent des indicateurs retardes (RSI, MACD, moyennes mobiles), des patterns subjectifs, ou des signaux preformates. La majorite des formations sont concues pour vendre du contenu, pas pour former des traders. Une formation qui marche enseigne la structure du marche, pas des recettes.",
  },
  {
    question: "Faut-il un capital pour suivre une formation trading ?",
    answer:
      "Non. Tu peux apprendre en compte demo pendant ta formation, puis passer en prop firm pour trader avec un capital fourni (FTMO, Topstep, Fast Track). C'est le modele standard du trading professionnel : la prop firm fournit le capital, tu fournis la methode et la discipline. Pas besoin de capital personnel pour commencer.",
  },
];

export default function FormationQuiMarchePage() {
  return (
    <>
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Formation trading qui marche" },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Formation trading qui marche</span>
          </nav>
          <div className="blog-hero-cat">Methode</div>
          <h1 className="blog-hero-title">
            Formation trading<br />
            qui marche vraiment.
          </h1>
          <p className="blog-hero-desc">
            90% des formations trading francaises ne marchent pas. Voici les 6
            criteres objectifs pour distinguer celle qui fera de toi un trader
            rentable — versus celle qui te fera perdre 6 mois et 3 000 €.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <h2>Pourquoi 90% des formations trading ne marchent pas</h2>
          <p>
            La verite que personne ne dit : la majorite des formations trading
            francaises sont concues pour <strong>vendre du contenu</strong>,
            pas pour former des traders. Elles enseignent des indicateurs
            (RSI, MACD, moyennes mobiles), des patterns subjectifs, ou des
            signaux preformates. Resultat : tu progresses pendant 2 mois, puis
            tu stagnes — parce que la methode n&apos;a pas de vraie
            fondation.
          </p>
          <p>
            Une formation trading qui marche enseigne <strong>la structure du
            marche</strong> : pourquoi le prix bouge, qui le fait bouger,
            comment lire l&apos;activite institutionnelle en temps reel. Cette
            comprehension est <em>universelle</em> — elle marche sur les
            Futures, le Forex, les indices, les cryptos.
          </p>

          <h2>Les 6 criteres d&apos;une formation trading qui marche</h2>

          <h3>Critere 1 : Methode institutionnelle (pas des indicateurs)</h3>
          <p>
            Une formation qui marche enseigne <strong>Market Profile, Order
            Flow, Footprint Chart, CVD, VWAP</strong> — les outils utilises par
            les desks institutionnels. Pas du RSI, pas du MACD, pas des
            chandeliers japonais comme outil principal. Ces outils traditionnels
            sont retardes par definition.
          </p>
          <p>
            <Link href="/blog/market-profile-guide-complet/">
              Comprendre le Market Profile →
            </Link>
            {" — "}
            <Link href="/blog/order-flow-trading-france/">
              L&apos;Order Flow explique →
            </Link>
          </p>

          <h3>Critere 2 : Formateur actif sur les marches</h3>
          <p>
            Le formateur doit <strong>trader chaque jour devant ses eleves</strong>.
            Pas en theorie, pas en backtest. Un formateur qui ne trade plus
            (ou qui n&apos;a jamais trade pour de vrai) enseigne du contenu
            perime. Sebastien Constant est trader actif depuis 10+ ans et trade
            en live quotidien devant ses eleves —{" "}
            <Link href="/sebastien-constant/">voir son parcours</Link>.
          </p>

          <h3>Critere 3 : Sessions live trading regulieres</h3>
          <p>
            Voir un trader pro analyser le marche en <strong>temps reel</strong>{" "}
            est l&apos;experience pedagogique la plus precieuse. Tu vois le
            doute, l&apos;hesitation, la prise de decision sous pression — ce
            que les videos preregistres ne montrent jamais. Le live quotidien
            est un differentiateur cle.
          </p>

          <h3>Critere 4 : Communaute selective</h3>
          <p>
            Une formation qui marche limite le nombre de places. Pas un Discord
            de 10 000 personnes anonymes. Une vraie communaute de traders
            engages, qui s&apos;entraident, qui partagent leurs analyses. BASS
            Trading limite a <strong>10 places maximum par session</strong> —
            pour garder la qualite du suivi.
          </p>

          <h3>Critere 5 : Certification Qualiopi / Eligible CPF</h3>
          <p>
            La certification Qualiopi est obligatoire pour tout organisme de
            formation finance par fonds publics. C&apos;est aussi un{" "}
            <strong>marqueur de serieux</strong>. Une formation eligible CPF
            est verifiee par l&apos;Etat — une arnaque ne peut jamais y etre
            inscrite. BASS Trading est eligible CPF via le partenariat EMSCA.
          </p>

          <h3>Critere 6 : Zero promesse de gain garanti</h3>
          <p>
            Une formation honnete n&apos;a <strong>aucune</strong> promesse de
            gain. Le trading est un metier risque — 90% des traders perdent.
            Une formation qui te promet &quot;500 € par jour&quot; est
            automatiquement une arnaque. La meilleure formation enseigne la
            methode et la rigueur — les resultats dependent de toi.
          </p>

          <h2>Le mentorat BASS Trading reunit les 6 criteres</h2>
          <p>
            Le mentorat <strong>BASS Trading</strong> par Sebastien Constant
            reunit les 6 criteres :
          </p>
          <ul>
            <li>
              <strong>Methode institutionnelle :</strong> 70 heures sur Market
              Profile, Order Flow, Footprint, CVD, Tape Reading, Options.
            </li>
            <li>
              <strong>Formateur actif :</strong> Sebastien trade 10+ ans, en
              live chaque jour devant les eleves, sur les memes marches que
              ceux qu&apos;il enseigne (Futures CME).
            </li>
            <li>
              <strong>Live trading :</strong> Sessions quotidiennes en groupe.
            </li>
            <li>
              <strong>Communaute selective :</strong> 10 places max par
              session, selection sur dossier.
            </li>
            <li>
              <strong>Certification :</strong> Qualiopi via EMSCA, eligible
              CPF.
            </li>
            <li>
              <strong>Zero promesse :</strong> 4.9/5 sur 126 avis Trustpilot
              verifies — sans aucune garantie de gain.
            </li>
          </ul>

          <h2>Les 4 erreurs qui empechent une formation de marcher</h2>
          <ol>
            <li>
              <strong>Suivre la formation sans pratiquer.</strong> Le savoir
              theorique sans application pratique ne donne aucun resultat.
            </li>
            <li>
              <strong>Sauter les fondamentaux.</strong> Vouloir scalper le NQ
              avant de comprendre le Market Profile, c&apos;est garanti
              d&apos;echouer.
            </li>
            <li>
              <strong>Risquer trop de capital trop vite.</strong> Garde-toi de
              passer en compte reel avant d&apos;avoir 3-6 mois de demo
              consistante.
            </li>
            <li>
              <strong>Trader sans plan, sans journal.</strong> Une formation
              qui marche t&apos;impose un plan de trading et un journal —
              et te donne les outils pour les tenir.
            </li>
          </ol>

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
              Tester la methode avant de t&apos;engager
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
              pour decouvrir la methode BASS en condition reelle.
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
