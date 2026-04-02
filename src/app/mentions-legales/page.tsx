import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Mentions legales",
  description:
    "Mentions legales du site basstrading.fr — Sebastien Constant, BASS Trading.",
  path: "/mentions-legales/",
  noIndex: true,
});

export default function MentionsLegalesPage() {
  return (
    <>
      <Link href="/" className="legal-back">
        &larr; Retour au site
      </Link>
      <div className="legal">
        <h1>Mentions legales</h1>

        <h2>1. Editeur du site</h2>
        <p>
          Nom : Sebastien Constant
          <br />
          Nom commercial : BASS Trading
          <br />
          Statut : Societe en cours d&apos;immatriculation
          <br />
          SIRET : En cours d&apos;obtention
          <br />
          Adresse : Malaga, Espagne
          <br />
          Email : contact@basstrading.fr
        </p>

        <h2>2. Directeur de la publication</h2>
        <p>Sebastien Constant — contact@basstrading.fr</p>

        <h2>3. Hebergeur</h2>
        <p>
          Cloudflare, Inc.
          <br />
          101 Townsend St, San Francisco, CA 94107, Etats-Unis
          <br />
          www.cloudflare.com
        </p>

        <h2>4. Organisme de formation partenaire</h2>
        <p>
          Les formations certifiees Qualiopi et eligibles CPF sont dispensees en
          partenariat avec :
          <br />
          EMSCA — Organisme de formation certifie Qualiopi
          <br />
          Region parisienne, France
        </p>

        <h2>5. Propriete intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu du site basstrading.fr (textes, images,
          videos, graphismes, logo, marques) est la propriete exclusive de
          Sebastien Constant / BASS Trading, sauf mention contraire. Toute
          reproduction, representation, modification, publication ou adaptation
          de tout ou partie du site, quel que soit le moyen ou le procede
          utilise, est interdite sans autorisation ecrite prealable.
        </p>

        <h2>6. Limitation de responsabilite</h2>
        <p>
          Le trading sur les marches financiers comporte des risques de perte en
          capital. Les informations et formations proposees sur ce site ne
          constituent en aucun cas un conseil en investissement. Les performances
          passees ne prejugent pas des performances futures. Sebastien Constant /
          BASS Trading ne saurait etre tenu responsable des pertes financieres
          subies par les utilisateurs de ce site.
        </p>

        <h2>7. Liens hypertextes</h2>
        <p>
          Le site basstrading.fr peut contenir des liens vers des sites tiers.
          Ces liens sont fournis a titre informatif. BASS Trading n&apos;exerce
          aucun controle sur le contenu de ces sites et decline toute
          responsabilite quant a leur contenu.
        </p>

        <h2>8. Droit applicable</h2>
        <p>
          Les presentes mentions legales sont soumises au droit francais. Tout
          litige relatif a l&apos;utilisation du site basstrading.fr sera soumis
          a la competence exclusive des tribunaux francais.
        </p>

        <p style={{ marginTop: "40px", fontSize: ".75rem", color: "#86868B" }}>
          Derniere mise a jour : 27 mars 2026
        </p>
      </div>
    </>
  );
}
