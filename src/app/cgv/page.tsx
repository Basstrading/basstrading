import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Conditions Generales de Vente",
  description:
    "Conditions generales de vente de BASS Trading — formation et mentorat trading par Sebastien Constant.",
  path: "/cgv/",
  noIndex: true,
});

export default function CGVPage() {
  return (
    <>
      <Link href="/" className="legal-back">
        &larr; Retour au site
      </Link>
      <div className="legal">
        <h1>Conditions Generales de Vente</h1>

        <h2>1. Objet</h2>
        <p>
          Les presentes conditions generales de vente (CGV) regissent les
          relations contractuelles entre Sebastien Constant, exercant sous le nom
          commercial BASS Trading (ci-apres &quot;le Prestataire&quot;), et toute
          personne physique ou morale souhaitant beneficier des services de
          formation en trading proposes sur le site basstrading.fr (ci-apres
          &quot;le Client&quot;).
        </p>

        <h2>2. Services proposes</h2>
        <p>
          Le Prestataire propose des services de formation et de mentorat en
          trading, incluant :
        </p>
        <ul>
          <li>
            Formation video en ligne (Market Profile, Order Flow, Footprint,
            CVD)
          </li>
          <li>Mentorat de groupe avec sessions de trading en live</li>
          <li>Mentorat individuel (1:1)</li>
          <li>Formations presentielles (region parisienne, Malaga)</li>
          <li>
            Acces a l&apos;outil x-trade.ai (pour les eleves du mentorat)
          </li>
        </ul>
        <p>
          Les formations certifiees Qualiopi et eligibles CPF sont dispensees en
          partenariat avec EMSCA.
        </p>

        <h2>3. Inscription et candidature</h2>
        <p>
          L&apos;acces au mentorat est soumis a candidature. Le Prestataire se
          reserve le droit d&apos;accepter ou de refuser toute candidature, sans
          obligation de motivation. Le nombre de places par session est limite.
        </p>

        <h2>4. Tarifs et paiement</h2>
        <p>
          Les tarifs sont communiques lors de l&apos;appel decouverte et
          dependent de la formule choisie. Les prix sont indiques en euros,
          toutes taxes comprises (TTC) ou hors taxes selon le statut du
          Prestataire. Le paiement peut etre effectue par virement bancaire ou
          carte bancaire. Des facilites de paiement peuvent etre proposees au
          cas par cas.
        </p>

        <h2>5. Financement CPF</h2>
        <p>
          Certaines formations sont eligibles au financement via le Compte
          Personnel de Formation (CPF), en partenariat avec EMSCA. Dans ce cas,
          les modalites d&apos;inscription et de financement sont definies par
          EMSCA conformement a la reglementation en vigueur.
        </p>

        <h2>6. Droit de retractation</h2>
        <p>
          Conformement a l&apos;article L221-18 du Code de la consommation, le
          Client dispose d&apos;un delai de 14 jours calendaires a compter de la
          date de souscription pour exercer son droit de retractation, sans avoir
          a justifier de motifs. Ce droit s&apos;exerce par email a
          contact@basstrading.fr. Le remboursement sera effectue dans un delai
          de 14 jours suivant la notification de la retractation.
        </p>
        <p>
          Le droit de retractation ne peut etre exerce si l&apos;execution de la
          formation a commence, avec l&apos;accord du Client, avant
          l&apos;expiration du delai de retractation.
        </p>

        <h2>7. Limitation de responsabilite</h2>
        <p>
          Le trading sur les marches financiers comporte des risques importants
          de perte en capital. Le Prestataire ne garantit aucun resultat
          financier. Les formations proposees ont un but educatif et ne
          constituent en aucun cas un conseil en investissement. Le Client
          reconnait etre informe des risques lies au trading et en assume
          l&apos;entiere responsabilite.
        </p>

        <h2>8. Propriete intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus de formation (videos, documents, outils,
          methodes) sont la propriete exclusive du Prestataire. Toute
          reproduction, diffusion, revente ou partage des contenus de formation
          est strictement interdit et pourra donner lieu a des poursuites
          judiciaires.
        </p>

        <h2>9. Donnees personnelles</h2>
        <p>
          Le traitement des donnees personnelles est decrit dans la Politique de
          confidentialite accessible sur le site basstrading.fr.
        </p>

        <h2>10. Droit applicable et litiges</h2>
        <p>
          Les presentes CGV sont soumises au droit francais. En cas de litige,
          les parties s&apos;engagent a rechercher une solution amiable. A
          defaut, le litige sera soumis aux tribunaux competents.
        </p>

        <h2>11. Mediation</h2>
        <p>
          Conformement aux articles L611-1 et R612-1 du Code de la consommation,
          en cas de litige non resolu, le Client peut recourir gratuitement a un
          mediateur de la consommation. Le mediateur competent est celui du
          secteur de la formation professionnelle.
        </p>

        <p style={{ marginTop: "40px", fontSize: ".75rem", color: "#86868B" }}>
          Derniere mise a jour : 27 mars 2026
        </p>
      </div>
    </>
  );
}
