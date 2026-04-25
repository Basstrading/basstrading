import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Politique de confidentialite",
  description:
    "Politique de confidentialite de BASS Trading — traitement des donnees personnelles, RGPD.",
  path: "/confidentialite/",
  noIndex: true,
});

export default function ConfidentialitePage() {
  return (
    <>
      <Link href="/" className="legal-back">
        &larr; Retour au site
      </Link>
      <div className="legal">
        <h1>Politique de confidentialite</h1>

        <h2>1. Responsable du traitement</h2>
        <p>
          Sebastien Constant — BASS Trading
          <br />
          Email : contact@basstrading.fr
        </p>

        <h2>2. Donnees collectees</h2>
        <p>
          Lors de l&apos;utilisation du formulaire de candidature, nous
          collectons :
        </p>
        <ul>
          <li>Prenom et nom</li>
          <li>Adresse email</li>
          <li>Experience de trading</li>
          <li>Capital de trading actuel</li>
          <li>Budget formation</li>
          <li>Motivation (texte libre)</li>
        </ul>

        <h2>3. Finalite du traitement</h2>
        <p>Ces donnees sont collectees dans le but de :</p>
        <ul>
          <li>Traiter votre candidature au programme de mentorat</li>
          <li>Vous recontacter pour un appel decouverte</li>
          <li>Adapter notre offre a votre profil</li>
        </ul>

        <h2>4. Base legale</h2>
        <p>
          Le traitement est fonde sur votre consentement (envoi volontaire du
          formulaire) conformement a l&apos;article 6.1.a du RGPD.
        </p>

        <h2>5. Destinataires des donnees</h2>
        <p>
          Vos donnees sont transmises uniquement a Sebastien Constant (BASS
          Trading) et au prestataire technique du formulaire (Formspree Inc.,
          heberge aux Etats-Unis, conforme au Privacy Shield / DPA). Aucune
          donnee n&apos;est vendue ou partagee avec des tiers a des fins
          commerciales.
        </p>

        <h2>6. Duree de conservation</h2>
        <p>
          Vos donnees sont conservees pendant une duree maximale de 24 mois a
          compter de votre derniere interaction. Vous pouvez demander leur
          suppression a tout moment.
        </p>

        <h2>7. Vos droits</h2>
        <p>Conformement au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d&apos;acces a vos donnees personnelles</li>
          <li>Droit de rectification</li>
          <li>Droit a l&apos;effacement (droit a l&apos;oubli)</li>
          <li>Droit a la limitation du traitement</li>
          <li>Droit a la portabilite des donnees</li>
          <li>Droit d&apos;opposition</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous a : contact@basstrading.fr
        </p>

        <h2>8. Cookies</h2>
        <p>
          Ce site n&apos;utilise aucun cookie de suivi ou publicitaire. Seuls
          des cookies strictement necessaires au fonctionnement technique du site
          peuvent etre utilises.
        </p>

        <h2>9. Reclamation</h2>
        <p>
          Si vous estimez que le traitement de vos donnees constitue une
          violation du RGPD, vous pouvez introduire une reclamation aupres de la
          CNIL (Commission Nationale de l&apos;Informatique et des Libertes) :
          www.cnil.fr
        </p>

        <p style={{ marginTop: "40px", fontSize: ".75rem", color: "#86868B" }}>
          Derniere mise a jour : 27 mars 2026
        </p>
      </div>
    </>
  );
}
