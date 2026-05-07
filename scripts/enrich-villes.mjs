// Enrichit les 5 villes prioritaires (Paris, Lyon, Marseille, Toulouse, Bordeaux)
// avec economicContext + whyTrade pour booster l'unicité SEO.
//
// Le _data.ts utilise des escapes Unicode ’ pour les apostrophes typographiques
// — l'Edit inline depuis Claude ne match pas, d'où ce script qui opère en bytes.
//
// Usage: node scripts/enrich-villes.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, "..", "src", "content", "pages", "villes", "_data.ts");

const enrichments = {
  paris: {
    economicContext:
      "Paris est la première place financière française et la troisième européenne après Londres et Francfort. Le quartier de La Défense concentre les desks de trading des grandes banques (BNP Paribas, Société Générale, Crédit Agricole CIB), les filiales françaises des américaines (Goldman Sachs, JPMorgan), et plus de 180 000 emplois dans la finance. Euronext Paris cote plus de 800 sociétés et héberge le CAC 40, le SBF 120 et l\\u2019indice MSCI France. Le bassin parisien représente 30 % du PIB français — la liquidité, les opportunités et la culture trading y sont uniques.",
    whyTrade:
      "Se former au trading à Paris a un avantage structurel : densité d\\u2019événements professionnels (conférences AMF, salons trading, meetups DAX/ES), accès aux brokers Futures réglementés AMF, communauté de prop firm traders active. Pour les Parisiens en reconversion, l\\u2019AIF Île-de-France complète le CPF jusqu\\u2019à zéro reste à charge. Sébastien Constant organise les sessions parisiennes en présentiel intensif sur 3-4 jours, dans des espaces de coworking centraux (75008, 75009, 75017).",
  },
  lyon: {
    economicContext:
      "Lyon est la deuxième aire urbaine de France avec 2,3 millions d\\u2019habitants. Son écosystème économique repose sur un tissu de PME industrielles, un pôle bancaire historique (Crédit Lyonnais devenu LCL, Caisse d\\u2019Épargne Rhône-Alpes), et une communauté tech parmi les plus actives du pays (French Tech Lyon). La Part-Dieu est le 2e quartier d\\u2019affaires français après La Défense, avec 80 000 emplois tertiaires. Lyon abrite aussi de nombreux family offices et gérants indépendants — un pôle naturel pour les traders qui veulent professionnaliser leur activité.",
    whyTrade:
      "Trader depuis Lyon offre un équilibre rare : proximité des grands centres financiers (3 h de Paris en TGV, 2 h de Genève), qualité de vie supérieure, coûts immobiliers raisonnables. Pour les Lyonnais en reconversion, le dispositif CARED de la région AURA finance jusqu\\u2019à 100 % les formations qualifiantes en trading. Le pass formation région permet de cumuler avec le CPF. Sébastien Constant organise les sessions lyonnaises en présentiel à Confluence ou à la Part-Dieu, dans des espaces de coworking équipés écran-clavier-data feed.",
  },
  marseille: {
    economicContext:
      "Marseille est la deuxième commune de France et le premier port méditerranéen pour les conteneurs. Son économie s\\u2019articule autour du Grand Port Maritime, de l\\u2019industrie maritime/logistique et d\\u2019un pôle digital en forte croissance (The Camp, Aix-Marseille French Tech). La place financière y est moins dense qu\\u2019à Paris ou Lyon, mais une communauté significative de traders indépendants opère depuis Marseille — souvent avec un profil entrepreneurial atypique : reconvertis du shipping, du commerce, des professions libérales. La proximité de Monaco (1 h 30) ouvre aussi des opportunités d\\u2019asset management.",
    whyTrade:
      "Trader depuis Marseille offre un avantage géographique : fuseau horaire européen idéal pour les séances US (ouverture NYSE 15 h 30 heure française), coût de la vie inférieur de 30 % à Paris, ensoleillement qui réduit le burn-out hivernal des traders intraday. Pour les Marseillais en reconversion, le dispositif ARES finance jusqu\\u2019à 4 000 € les formations professionnalisantes. Le chéquier formation PACA complète le CPF. Sébastien Constant organise les sessions marseillaises en présentiel intensif au Vieux-Port ou dans le 2e arrondissement.",
  },
  toulouse: {
    economicContext:
      "Toulouse, capitale de l\\u2019aéronautique et de l\\u2019espatial avec Airbus, ATR, Thales Alenia Space et le CNES, abrite plus de 35 000 ingénieurs. Quatrième aire urbaine de France avec 1,5 million d\\u2019habitants. La culture analytique y est dominante : ingénieurs, mathématiciens appliqués, profils data. C\\u2019est un terrain naturellement fertile pour le trading systématique et quantitatif. Le pôle French Tech Toulouse compte plus de 600 startups et un fond d\\u2019investissement régional actif (IRDI Capital Investissement).",
    whyTrade:
      "Pour les profils analytiques toulousains, le trading institutionnel est une extension naturelle de leur formation initiale. La rigueur acquise en école d\\u2019ingénieur (ENAC, ISAE-SUPAERO, INSA Toulouse) s\\u2019applique directement à la lecture du Market Profile et de l\\u2019Order Flow — méthodes basées sur la donnée, pas sur l\\u2019intuition. Le dispositif Qualif Pro Occitanie finance les formations qualifiantes jusqu\\u2019à 3 000 €. Sébastien Constant organise les sessions toulousaines au cœur du quartier Compans-Caffarelli ou à Saint-Cyprien.",
  },
  bordeaux: {
    economicContext:
      "Bordeaux a connu une transformation économique majeure ces dix dernières années avec l\\u2019arrivée de la LGV (Paris-Bordeaux en 2 h) et l\\u2019afflux de cadres et d\\u2019entrepreneurs cherchant qualité de vie et opportunités. La métropole bordelaise concentre 800 000 habitants et plus de 300 startups (Bordeaux French Tech). Le secteur du conseil, de l\\u2019immobilier et des family offices y est en forte croissance — une concentration naturelle de patrimoines à investir et de profils orientés performance. La proximité avec La Rochelle, Bayonne et le Pays Basque élargit le bassin de recrutement.",
    whyTrade:
      "Trader depuis Bordeaux combine qualité de vie et infrastructure : 2 h de Paris en TGV, accès direct aux principaux brokers Futures réglementés AMF, communauté trading discrète mais solide via les meetups Bordeaux Investment & Trading. Pour les Bordelais en reconversion, le dispositif Qualif Emploi Nouvelle-Aquitaine finance jusqu\\u2019à 3 500 € les formations qualifiantes. Sébastien Constant organise les sessions bordelaises en présentiel intensif aux Quais de Paludate ou aux Bassins à Flot.",
  },
};

let content = readFileSync(filePath, "utf-8");
let changes = 0;

for (const [slug, data] of Object.entries(enrichments)) {
  // Pattern: trouve la fermeture de testimonial pour cette ville et insère après.
  // On cherche `slug: "<slug>"` puis le `},` qui clôt le testimonial puis le `},` qui clôt l'objet ville.
  // Stratégie: chercher dans la zone du slug, repérer le `testimonial: { ... },` et insérer juste après.

  const slugIdx = content.indexOf(`slug: "${slug}"`);
  if (slugIdx === -1) {
    console.warn(`[skip] slug not found: ${slug}`);
    continue;
  }

  // Cherche le bloc testimonial à partir du slug
  const testimonialIdx = content.indexOf("testimonial: {", slugIdx);
  if (testimonialIdx === -1) {
    console.warn(`[skip] testimonial not found for: ${slug}`);
    continue;
  }

  // Trouve la fermeture du testimonial: `}` puis `,` puis `\n` puis `  }`
  // Pattern fiable: chercher "    },\n" après testimonialIdx (fermeture testimonial)
  // puis "  },\n" (fermeture objet ville)
  const testimonialClose = content.indexOf("    },", testimonialIdx);
  if (testimonialClose === -1) {
    console.warn(`[skip] testimonial close not found for: ${slug}`);
    continue;
  }

  // Position d'insertion: juste après la virgule qui ferme testimonial
  const insertPos = testimonialClose + "    },".length;

  // Vérifie idempotence — si economicContext déjà présent, skip
  const checkRange = content.slice(slugIdx, testimonialClose + 50);
  if (checkRange.includes("economicContext")) {
    console.log(`[skip] already enriched: ${slug}`);
    continue;
  }

  const insertion = `\n    economicContext:\n      "${data.economicContext}",\n    whyTrade:\n      "${data.whyTrade}",`;

  content = content.slice(0, insertPos) + insertion + content.slice(insertPos);
  changes++;
  console.log(`[ok] enriched: ${slug}`);
}

if (changes > 0) {
  writeFileSync(filePath, content, "utf-8");
  console.log(`\n${changes} ville(s) enrichie(s). Fichier sauvegardé.`);
} else {
  console.log("\nAucun changement.");
}
