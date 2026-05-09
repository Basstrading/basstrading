import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/jsonld";
import FAQ from "@/components/FAQ";

export const metadata = generateSeoMetadata({
  title: "BASS Trading : Arnaque ou Vraie Formation ? Verifications 2026",
  description:
    "BASS Trading est-il une arnaque ? Verifications factuelles 2026 : certification Qualiopi/EMSCA, eligibilite CPF, 126 avis Trustpilot 4.9/5, formateur actif sur les marches. Le verdict honnete.",
  path: "/bass-trading-arnaque-ou-pas/",
});

const faq = [
  {
    question: "BASS Trading est-il une arnaque ?",
    answer:
      "Non. BASS Trading est certifie Qualiopi via le partenariat EMSCA, eligible CPF, dispose de 126 avis verifies 4.9/5 sur Trustpilot, et son fondateur Sebastien Constant trade en direct chaque jour devant ses eleves. Tous les marqueurs d'une formation legitime sont presents.",
  },
  {
    question: "Comment verifier qu'une formation trading n'est pas une arnaque ?",
    answer:
      "Verifie : (1) la certification Qualiopi de l'organisme, (2) l'inscription sur Mon Compte Formation, (3) l'existence d'avis verifies sur Trustpilot ou Google, (4) que le formateur trade reellement en live devant ses eleves, (5) qu'il n'y a aucune promesse de gain garanti, (6) que l'entreprise est immatriculee au RCS.",
  },
  {
    question: "Sebastien Constant trade-t-il vraiment ?",
    answer:
      "Oui. Sebastien Constant est trader actif depuis plus de 10 ans et trade en live chaque jour devant ses eleves. Il prepare les eleves au passage en prop firm (FTMO, Topstep, Fast Track Trading, Bulenox) avec la methode Market Profile et Order Flow. Son outil x-trade.ai est utilise par les eleves pour automatiser la gestion du risque.",
  },
  {
    question: "Quels sont les drapeaux rouges des arnaques au trading ?",
    answer:
      "Promesses de gains garantis, copy trading 'sans risque', recrutement aggressif sur Instagram/TikTok, prix exorbitant (30 000-50 000 euros) avec contenu generique, formateur qui ne trade pas en live, absence d'avis verifies, pas d'inscription Mon Compte Formation. Une formation honnete n'a aucune de ces caracteristiques.",
  },
  {
    question: "Le mentorat BASS est-il finance par le CPF ?",
    answer:
      "Oui, BASS Trading est eligible CPF via le partenariat EMSCA, organisme certifie Qualiopi. Tu peux financer tout ou partie du mentorat avec ton compte formation selon ton solde. Verifie ton solde sur moncompteformation.gouv.fr.",
  },
];

const Check = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24,
      background: "#15A848",
      color: "#fff",
      borderRadius: "50%",
      flexShrink: 0,
      marginRight: 12,
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: 14, height: 14 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

const Cross = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24,
      background: "#E03434",
      color: "#fff",
      borderRadius: "50%",
      flexShrink: 0,
      marginRight: 12,
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: 14, height: 14 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </span>
);

export default function ArnaquePage() {
  return (
    <>
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "BASS Trading arnaque ?" },
        ]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Arnaque ou pas ?</span>
          </nav>
          <div className="blog-hero-cat">Verifications</div>
          <h1 className="blog-hero-title">
            BASS Trading : arnaque<br />
            ou vraie formation ?
          </h1>
          <p className="blog-hero-desc">
            Tu veux verifier avant de candidater ? Bonne reflexe. Voici toutes
            les verifications factuelles que tu peux faire toi-meme — avec les
            sources publiques officielles.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <article className="article-body" style={{ margin: "0 auto" }}>
          <div
            style={{
              padding: 24,
              background: "rgba(21,168,72,.08)",
              borderLeft: "4px solid #15A848",
              borderRadius: 8,
              marginBottom: 32,
            }}
          >
            <strong style={{ display: "block", marginBottom: 8, fontSize: 18 }}>
              Verdict immediat : BASS Trading n&apos;est pas une arnaque.
            </strong>
            <p style={{ margin: 0 }}>
              Tous les marqueurs objectifs d&apos;une formation legitime sont
              presents : certification Qualiopi, eligibilite CPF, 126 avis
              verifies, formateur actif sur les marches. Detail ci-dessous —
              avec les sources publiques.
            </p>
          </div>

          <h2>Les 6 verifications a faire pour distinguer une vraie formation</h2>
          <p>
            Le marche francais des formations trading est sature
            d&apos;arnaques : promesses de gains garantis, copy trading
            miraculeux, mentorats a 50 000 € avec contenu vide. Voici les 6
            verifications factuelles a faire — pour BASS Trading et pour
            n&apos;importe quelle autre formation.
          </p>

          <h3>
            <Check />
            Verification 1 : Certification Qualiopi
          </h3>
          <p>
            BASS Trading est certifie Qualiopi via le partenariat avec EMSCA.
            Qualiopi est la certification obligatoire pour tout organisme de
            formation finance par fonds publics (CPF, Pole Emploi, Region).
            <strong> Comment verifier :</strong> data.gouv.fr publie la liste
            des organismes certifies, et l&apos;inscription apparait sur Mon
            Compte Formation.
          </p>

          <h3>
            <Check />
            Verification 2 : Eligibilite CPF
          </h3>
          <p>
            La formation BASS Trading est inscrite sur Mon Compte Formation et
            finançable par CPF. Une arnaque ne peut <strong>jamais</strong>{" "}
            etre eligible CPF — l&apos;Etat verifie chaque organisme. Verifie
            ton solde sur{" "}
            <a
              href="https://www.moncompteformation.gouv.fr"
              target="_blank"
              rel="noopener nofollow"
            >
              moncompteformation.gouv.fr
            </a>
            .
          </p>

          <h3>
            <Check />
            Verification 3 : Avis verifies Trustpilot
          </h3>
          <p>
            <strong>4.9/5 sur 126 avis</strong> sur Trustpilot — plateforme
            independante qui verifie l&apos;authenticite des avis. Une arnaque
            n&apos;a pas 126 avis 5 etoiles cumules sur des annees. Verifie
            toi-meme :{" "}
            <a
              href="https://fr.trustpilot.com/review/basstrading.fr"
              target="_blank"
              rel="noopener"
            >
              fr.trustpilot.com/review/basstrading.fr
            </a>
            .
          </p>

          <h3>
            <Check />
            Verification 4 : Formateur actif sur les marches
          </h3>
          <p>
            Sebastien Constant trade en direct <strong>chaque jour</strong>{" "}
            devant ses eleves — analyse Market Profile, lecture Order Flow et
            decisions en temps reel. Une arnaque a un &quot;coach&quot; qui
            ne trade jamais et qui parle uniquement marketing.{" "}
            <Link href="/sebastien-constant/">
              Voir le parcours de Sebastien →
            </Link>
          </p>

          <h3>
            <Check />
            Verification 5 : Aucune promesse de gain garanti
          </h3>
          <p>
            BASS Trading n&apos;a <strong>aucune</strong> promesse de gain. Le
            site precise meme l&apos;essentiel : 90% des traders perdent de
            l&apos;argent, le trading comporte des risques. Une formation qui
            te promet &quot;500 € par jour garanti&quot; est{" "}
            <strong>toujours</strong> une arnaque.
          </p>

          <h3>
            <Check />
            Verification 6 : Entreprise immatriculee
          </h3>
          <p>
            Voir{" "}
            <Link href="/mentions-legales/">les mentions legales</Link>{" "}
            pour le numero SIRET, la forme juridique et l&apos;adresse de
            l&apos;entreprise. Une arnaque ne publie pas ces informations.
          </p>

          <h2>Les 5 drapeaux rouges qui ne trompent pas</h2>
          <p>
            Pour reperer une arnaque trading, cherche ces signaux :
          </p>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li style={{ display: "flex", alignItems: "flex-start", marginBottom: 16 }}>
              <Cross />
              <div>
                <strong>&quot;Gains garantis&quot; / &quot;500 € par jour&quot;</strong>
                <br />
                Aucune formation serieuse ne garantit des gains. Le trading
                est un metier risque.
              </div>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", marginBottom: 16 }}>
              <Cross />
              <div>
                <strong>Recrutement Instagram/TikTok agressif</strong>
                <br />
                Un trader pro n&apos;a pas besoin de te DM avec des
                screenshots de PnL fakes.
              </div>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", marginBottom: 16 }}>
              <Cross />
              <div>
                <strong>Pas d&apos;eligibilite CPF / Qualiopi</strong>
                <br />
                Une formation trading legitime en France passe la
                certification.
              </div>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", marginBottom: 16 }}>
              <Cross />
              <div>
                <strong>Formateur qui ne trade pas en live</strong>
                <br />
                Si le &quot;coach&quot; ne te montre jamais une vraie session
                live, fuis.
              </div>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start" }}>
              <Cross />
              <div>
                <strong>Prix &gt; 20 000 € pour une formation generique</strong>
                <br />
                Un mentorat premium peut couter 5 000-15 000 € — au-dela,
                c&apos;est presque toujours du marketing.
              </div>
            </li>
          </ul>

          <h2>BASS Trading vs les arnaques : la difference factuelle</h2>
          <p>
            Compare les faits :
          </p>
          <ul>
            <li>
              <strong>Trustpilot :</strong> 126 avis verifies 4.9/5 (vs avis
              fakes ou inexistants).
            </li>
            <li>
              <strong>CPF :</strong> Eligible Mon Compte Formation (vs aucune
              certification).
            </li>
            <li>
              <strong>Qualiopi :</strong> Certifie via EMSCA (vs aucune
              certification).
            </li>
            <li>
              <strong>Live trading :</strong> Quotidien, devant les eleves (vs
              videos preregistres).
            </li>
            <li>
              <strong>Outil proprietaire :</strong> x-trade.ai (vs simple cours
              video).
            </li>
            <li>
              <strong>Promesses :</strong> Aucune garantie de gain (vs
              &quot;deviens millionnaire en 3 mois&quot;).
            </li>
          </ul>

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
              Verifie toi-meme avant de candidater
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Lis les 126 avis sur Trustpilot, verifie l&apos;eligibilite CPF,
              regarde une session live. Puis decide.
            </p>
            <Link
              href="/avis-bass-trading/"
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
              Voir les 126 avis verifies →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
