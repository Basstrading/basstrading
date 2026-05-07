export interface GlossaryTerm {
  slug: string;
  term: string;
  acronym?: string;
  short: string; // 1 phrase
  definition: string; // 1-2 phrases
  details: string[]; // paragraphes
  example: string; // exemple concret
  relatedSlugs: string[]; // autres termes du glossaire
  fullArticleSlug?: string; // article blog complémentaire
  hubSlug?: string; // hub thématique parent (market-profile, order-flow, footprint, volume-profile)
}

export const terms: GlossaryTerm[] = [
  {
    slug: "poc",
    term: "Point of Control",
    acronym: "POC",
    short: "Le niveau de prix où le plus de volume (ou de TPO) s'est accumulé sur la période — le centre de gravité du profil.",
    definition:
      "Le Point of Control (POC) est le niveau de prix qui a accumulé le plus de volume échangé — ou le plus de TPO en Market Profile classique — sur une période donnée. C'est le prix le plus accepté par le marché.",
    details: [
      "Le POC apparaît visuellement comme la barre la plus longue d'un Volume Profile, ou la ligne de TPO la plus large d'un Market Profile. Il marque le consensus de valeur des participants pendant la session analysée.",
      "Le POC agit comme un aimant institutionnel. Statistiquement, le marché qui s'en éloigne tend à y revenir — c'est ce qu'on appelle le retest du POC. Plus le POC est concentré (forte densité de volume sur peu de niveaux), plus l'attraction est forte.",
      "Distinction importante : le POC du Volume Profile (vPOC) est calculé sur le volume, le POC du Market Profile (TPO POC) sur le temps. Les deux convergent souvent, mais peuvent diverger lors de mouvements rapides à fort volume sans temps passé.",
    ],
    example:
      "Sur une session ES en équilibre, le POC se forme à 4 980. Le prix monte à 5 005 en milieu de séance puis revient retester 4 980 dans l'heure qui suit — pattern classique d'aimant POC. Une entrée long sur ce retest avec stop sous 4 975 offre un R:R favorable.",
    relatedSlugs: ["vah", "val", "naked-poc", "tpo"],
    fullArticleSlug: "poc-point-of-control",
    hubSlug: "market-profile",
  },
  {
    slug: "vah",
    term: "Value Area High",
    acronym: "VAH",
    short: "La borne supérieure de la Value Area — résistance majeure de la séance.",
    definition:
      "La Value Area High (VAH) est le prix le plus haut de la Value Area, c'est-à-dire la zone qui contient environ 70 % de l'activité de trading de la période. C'est une résistance structurelle majeure.",
    details: [
      "La VAH délimite avec la VAL le canal statistique d'acceptation de valeur. Quand le prix atteint la VAH par le bas, il rencontre la zone où les vendeurs reprennent statistiquement le contrôle. Le rejet sous la VAH est un signal de retour vers le POC.",
      "La cassure franche de la VAH — confirmée par du volume et de l'imbalance acheteuse — signale souvent le début d'une expansion haussière. Le marché a quitté la zone d'équilibre et cherche à établir une nouvelle Value Area plus haut.",
      "La VAH de la veille (Previous Day Value Area High, ou pdVAH) reste un niveau de référence majeur pour la séance suivante. Les institutionnels la gardent en mémoire comme borne de la fair value précédente.",
    ],
    example:
      "Sur le NQ, la VAH d'hier à 17 550 est testée à l'ouverture. Le prix tente la cassure puis rejette nettement avec un footprint de delta négatif fort. Setup short typique : entrée sous 17 545 avec target POC veille à 17 480.",
    relatedSlugs: ["val", "poc", "tpo", "naked-poc"],
    fullArticleSlug: "value-area-trading",
    hubSlug: "market-profile",
  },
  {
    slug: "val",
    term: "Value Area Low",
    acronym: "VAL",
    short: "La borne inférieure de la Value Area — support majeur de la séance.",
    definition:
      "La Value Area Low (VAL) est le prix le plus bas de la Value Area. Symétrique à la VAH, elle marque la limite basse de la zone de consensus de valeur (70 % de l'activité).",
    details: [
      "La VAL est un support structurel. Quand le prix descend tester la VAL, il rencontre la zone où les acheteurs interviennent statistiquement. Le rebond sur VAL renvoie le marché vers le POC ou la VAH.",
      "La cassure de la VAL avec volume et imbalance vendeuse signale une expansion baissière. Le marché quitte la zone d'équilibre par le bas, souvent pour rejoindre un POC ou un Naked POC inférieur.",
      "Comme la VAH, la pdVAL (Value Area Low de la séance précédente) est un niveau institutionnel surveillé. Le respect ou le franchissement de la pdVAL au début de séance oriente la lecture de la journée.",
    ],
    example:
      "Sur le ES, le prix descend à VAL = 4 970. Footprint montre absorption acheteuse (delta négatif sans déplacement). Entrée long à 4 972, stop sous 4 965, target POC à 4 980 puis VAH à 4 990.",
    relatedSlugs: ["vah", "poc", "tpo", "naked-poc"],
    fullArticleSlug: "value-area-trading",
    hubSlug: "market-profile",
  },
  {
    slug: "tpo",
    term: "Time Price Opportunity",
    acronym: "TPO",
    short: "L'unité de base du Market Profile — une lettre par demi-heure de trading.",
    definition:
      "Un TPO (Time Price Opportunity) est l'unité de mesure du Market Profile : chaque demi-heure de trading est représentée par une lettre alphabétique placée à côté de chaque niveau de prix touché pendant cette période.",
    details: [
      "Steidlmayer a inventé le système TPO dans les années 1980 pour visualiser le temps passé à chaque niveau de prix. La séance commence par 'A' (première demi-heure), puis 'B', 'C', etc. À la fin de la session, en empilant les lettres horizontalement, on obtient le profil — la distribution du temps par prix.",
      "Plus de TPO à un niveau = plus de temps passé = plus d'acceptation. C'est la métrique fondamentale qui distingue le Market Profile du Volume Profile (qui mesure le volume échangé, pas le temps).",
      "Sur les futures américains, on utilise typiquement 13 lettres (A à M) pour les 6h30 de Regular Trading Hours. Sur l'ETH (Extended Trading Hours), on étend l'alphabet pour couvrir les 23h. Sierra Chart et la plupart des plateformes Market Profile gèrent ce paramétrage.",
    ],
    example:
      "Sur l'ES, à 4 985, on compte 8 TPO (A, B, F, G, H, K, L, M) — niveau très accepté. À 5 002, on compte 1 TPO (D) — single print, niveau de transit rapide. Le marché y reviendra probablement le tester.",
    relatedSlugs: ["poc", "vah", "val", "naked-poc"],
    hubSlug: "market-profile",
  },
  {
    slug: "naked-poc",
    term: "Naked POC",
    acronym: "vPOC nu",
    short: "Un POC de séance précédente qui n'a pas encore été retouché par le prix actuel.",
    definition:
      "Un Naked POC (ou vPOC nu) est un Point of Control d'une séance antérieure que le marché n'a pas retesté depuis. C'est une cible institutionnelle à haute probabilité de retest dans les jours suivants.",
    details: [
      "Statistiquement, les marchés liquides retestent leurs Naked POC dans 70 à 80 % des cas dans les 5 séances suivantes. Cette propriété fait des Naked POC l'un des outils de planification les plus puissants pour le day trading sur futures.",
      "Identifier les Naked POC consiste à scanner les 5-10 séances précédentes et marquer chaque POC qui n'a pas été touché depuis sa formation. Sierra Chart et ATAS proposent des indicateurs natifs pour automatiser ce repérage.",
      "Le Naked POC le plus proche du prix actuel devient souvent la cible de moindre résistance. Quand le marché casse une zone d'équilibre, sa première destination logique est fréquemment le Naked POC le plus proche dans la direction du mouvement.",
    ],
    example:
      "Lundi, l'ES forme un POC à 4 950. Le marché monte ensuite jusqu'à 5 020 sans jamais retester 4 950. Vendredi, après une cassure baissière de la Value Area, ce Naked POC à 4 950 devient la cible naturelle. Setup short avec target sur ce niveau.",
    relatedSlugs: ["poc", "vah", "val", "lvn"],
    hubSlug: "volume-profile",
  },
  {
    slug: "hvn",
    term: "High Volume Node",
    acronym: "HVN",
    short: "Un niveau de prix où le volume est anormalement élevé — support/résistance majeur.",
    definition:
      "Un High Volume Node (HVN) est un pic local dans la distribution du Volume Profile : un niveau de prix où le volume échangé est nettement supérieur aux niveaux voisins. C'est une zone où le marché a trouvé du consensus.",
    details: [
      "Les HVN agissent comme des supports et résistances institutionnels. Plus un HVN est massif, plus il est respecté. Les HVN composites (cumul sur plusieurs séances ou semaines) sont particulièrement puissants — ils représentent des zones où des positions importantes ont été construites.",
      "Le POC est par définition le HVN le plus prononcé du profil. Mais un profil peut contenir plusieurs HVN secondaires, formant des zones de support/résistance multiples. Une séance équilibrée typique présente 2-4 HVN distincts.",
      "Trader les HVN consiste à fader les approches : vendre quand le prix monte vers un HVN par le bas, acheter quand il descend dessus par le haut. La confluence avec les niveaux Market Profile (VAH, VAL, POC) augmente la probabilité.",
    ],
    example:
      "Sur le NQ, le Volume Profile composite de la semaine montre un HVN majeur à 17 800 (4 fois le volume des niveaux voisins). Le mardi suivant, le prix descend dessus depuis 17 950. Long à 17 805 avec stop sous 17 780, target 17 870 (HVN supérieur).",
    relatedSlugs: ["lvn", "poc", "naked-poc"],
    fullArticleSlug: "volume-profile-guide",
    hubSlug: "volume-profile",
  },
  {
    slug: "lvn",
    term: "Low Volume Node",
    acronym: "LVN",
    short: "Un niveau de prix où le volume est faible — zone de transit rapide.",
    definition:
      "Un Low Volume Node (LVN) est un creux local dans la distribution du Volume Profile : un niveau de prix où peu de volume s'est échangé. C'est une zone de rejet, traversée rapidement par le marché.",
    details: [
      "Les LVN sont l'inverse des HVN. Là où un HVN concentre l'activité, le LVN la repousse — le marché y passe vite parce que ni les acheteurs ni les vendeurs n'y trouvent de valeur. Les LVN apparaissent typiquement après des breakouts violents ou des news.",
      "Trader les LVN demande une logique différente des HVN. On ne fade pas un LVN — on le traverse. Une cassure de LVN avec volume signale une expansion vers le HVN suivant. Inversement, un échec de cassure de LVN annonce un retour vers le HVN d'origine.",
      "Les LVN sont aussi de mauvais niveaux d'invalidation pour les stops. Un stop placé exactement sur un LVN sera fréquemment touché en transit, car le marché ne respecte pas le niveau. Toujours placer les stops au-delà d'un HVN proche, pas sur un LVN.",
    ],
    example:
      "Profile composite ES : HVN à 4 950, LVN à 4 970, HVN à 4 990. Le marché casse 4 970 avec volume à la hausse — cassure de LVN. Cible naturelle : HVN à 4 990. Stop sous le HVN précédent à 4 950, pas sur le LVN.",
    relatedSlugs: ["hvn", "poc", "naked-poc"],
    fullArticleSlug: "volume-profile-guide",
    hubSlug: "volume-profile",
  },
  {
    slug: "vwap",
    term: "Volume Weighted Average Price",
    acronym: "VWAP",
    short: "Le prix moyen pondéré par les volumes — référence d'exécution institutionnelle.",
    definition:
      "Le VWAP (Volume Weighted Average Price) est la moyenne du prix pondérée par les volumes échangés sur une période donnée. C'est la référence d'exécution utilisée par les desks institutionnels pour évaluer la qualité de leurs ordres.",
    details: [
      "Un trader institutionnel qui exécute un gros ordre cherche à le placer 'au VWAP ou mieux' : acheter sous le VWAP, vendre au-dessus. Cette contrainte explique pourquoi le VWAP agit comme un aimant intra-séance — les grands ordres tendent à se positionner autour de cette ligne.",
      "Le VWAP standard est calculé sur la séance, repartant de zéro chaque jour. Les variantes multi-timeframe (VWAP hebdomadaire, mensuel, annuel) donnent des références institutionnelles plus longues. Les écarts-types autour du VWAP (généralement ±1σ et ±2σ) délimitent des bandes de fair value.",
      "Application pratique : en début de séance, identifier le VWAP comme niveau de bascule. Le prix au-dessus du VWAP avec écart-type +1σ atteint = zone de surachat. Sous le VWAP avec −1σ atteint = zone de survente. Combiner avec absorption Order Flow pour valider l'entrée.",
    ],
    example:
      "Sur le NQ ouvre à 17 600. À 11h, le VWAP de séance est à 17 612, +1σ à 17 638. Le prix touche 17 640 puis rejette avec absorption. Setup short au VWAP+1σ, target VWAP à 17 612, stop au-dessus de 17 645.",
    relatedSlugs: ["poc", "delta", "absorption"],
    fullArticleSlug: "vwap-trading-guide",
    hubSlug: "order-flow",
  },
  {
    slug: "delta",
    term: "Delta",
    acronym: "Δ",
    short: "La différence entre volume agressif acheteur et vendeur — pression directionnelle.",
    definition:
      "Le Delta est la différence entre le volume échangé à l'ask (acheteurs agressifs) et le volume échangé au bid (vendeurs agressifs) sur une période donnée. Un delta positif signale une dominance acheteuse ; un delta négatif, une dominance vendeuse.",
    details: [
      "Le delta peut être lu à plusieurs échelles : par tick (chaque transaction), par bougie (somme du delta sur la bougie), par séance (CVD — Cumulative Volume Delta). Chaque échelle donne une lecture différente de la pression directionnelle.",
      "Le signal le plus puissant est le delta divergent : prix qui monte mais delta négatif = absorption haussière ou retournement imminent. Prix qui descend mais delta positif = absorption baissière ou rebond imminent. Ces divergences précèdent statistiquement les retournements.",
      "Attention au delta extrême sans déplacement : delta de +3000 sur une bougie alors que le prix n'a monté que de 2 ticks = absorption massive par les vendeurs passifs. Signal très fort de défense institutionnelle d'un niveau — souvent suivi d'un retournement.",
    ],
    example:
      "Sur l'ES, bougie 5 minutes : prix monte de +1 point, delta = −800. Les acheteurs agressifs absorbent. Sur la bougie suivante, le prix s'effondre de 4 points avec delta −1500 et imbalance vendeuse — la divergence delta avait anticipé le retournement.",
    relatedSlugs: ["cvd", "absorption", "imbalance"],
    fullArticleSlug: "delta-footprint-trading",
    hubSlug: "footprint",
  },
  {
    slug: "cvd",
    term: "Cumulative Volume Delta",
    acronym: "CVD",
    short: "Le delta cumulé sur une session — courbe de pression directionnelle macro.",
    definition:
      "Le CVD (Cumulative Volume Delta) est la somme cumulative du delta depuis le début de la séance (ou d'une période plus longue). Il s'affiche comme une courbe parallèle au graphique du prix et révèle la tendance globale de l'agression institutionnelle.",
    details: [
      "Quand prix et CVD montent ensemble, la tendance haussière est confirmée par l'agression acheteuse. Quand prix et CVD descendent ensemble, la tendance baissière est confirmée par l'agression vendeuse. Cette confluence est le pattern le plus simple du Footprint.",
      "Les divergences prix/CVD sont les signaux les plus utilisés. Si le prix fait un nouveau high mais que le CVD ne le suit pas (ou recule), l'agression acheteuse s'épuise — retournement probable. Symétrique pour les nouveaux lows non confirmés par le CVD.",
      "Le CVD multi-timeframe (séance + jour + semaine) donne des lectures complémentaires. Une divergence sur le CVD séance dans une tendance haussière de CVD hebdomadaire est typiquement une correction temporaire, pas un retournement majeur.",
    ],
    example:
      "Sur le ES en séance, le prix forme un double top à 5 015 mais le CVD du second top est nettement inférieur au CVD du premier top. Divergence baissière classique. Entrée short à 5 010, stop au-dessus de 5 020, cible POC à 4 985.",
    relatedSlugs: ["delta", "absorption", "imbalance"],
    fullArticleSlug: "cvd-cumulative-volume-delta",
    hubSlug: "footprint",
  },
  {
    slug: "imbalance",
    term: "Imbalance",
    short: "Un déséquilibre fort entre volume bid et ask à un niveau de prix donné.",
    definition:
      "Une imbalance est un déséquilibre extrême entre les volumes bid et ask à un niveau de prix précis sur le Footprint Chart. Le seuil classique est de 3:1 ou 4:1 — le volume dans une direction est au moins 3 à 4 fois supérieur à l'autre.",
    details: [
      "Une imbalance isolée a peu de valeur prédictive. Mais plusieurs imbalances consécutives dans la même direction (cluster d'imbalances) signalent une accélération institutionnelle franche. C'est un signal d'agression coordonnée.",
      "Les imbalances aux niveaux structurels (VAH, VAL, POC, Naked POC, HVN, VWAP) sont particulièrement significatives. Une imbalance acheteuse sur VAL est un setup de rebond classique. Une imbalance vendeuse sur VAH annonce souvent un rejet et un retour vers le POC.",
      "Plateformes comme Sierra Chart et ATAS surlignent automatiquement les imbalances en couleur. Un Footprint sans imbalance visible signale une séance équilibrée. Multiplication des imbalances = phase de breakout ou de capitulation.",
    ],
    example:
      "Sur le NQ, sur 3 bougies consécutives, on observe 7 imbalances acheteuses (ratio 4:1) et zéro imbalance vendeuse. Le prix monte de 25 points sur ces 3 bougies. Continuation probable — entrée long sur le pullback, stop sous la dernière imbalance majeure.",
    relatedSlugs: ["delta", "absorption", "cvd"],
    fullArticleSlug: "imbalance-footprint",
    hubSlug: "footprint",
  },
  {
    slug: "absorption",
    term: "Absorption",
    short: "Quand des ordres passifs absorbent les ordres agressifs sans que le prix bouge.",
    definition:
      "L'absorption se produit quand des ordres limites passifs de grande taille absorbent des ordres market agressifs en sens opposé sans que le prix se déplace de manière correspondante. C'est la signature d'une présence institutionnelle qui défend un niveau.",
    details: [
      "Trois signatures visuelles de l'absorption : (1) volume anormalement élevé à un niveau de prix fixe, (2) delta fort dans une direction sans que le prix bouge, (3) wicks répétés au même niveau sur plusieurs bougies. La combinaison des trois augmente la fiabilité du signal.",
      "L'absorption précède statistiquement un retournement. Plus le volume absorbé est important, plus le retournement subséquent est probable et fort. Un niveau qui absorbe 2-3 fois le volume moyen sans céder est un mur institutionnel à respecter.",
      "Distinction avec une simple consolidation : la consolidation montre du volume équilibré sans direction agressive. L'absorption montre une agression franche dans une direction qui se heurte à un mur invisible. Le delta révèle cette différence.",
    ],
    example:
      "Sur l'ES, le prix descend sur VAL = 4 970. 5 bougies consécutives montrent du volume vendeur agressif (delta −500 à −800 chacune) mais le prix tient à 4 970-4 972. Absorption acheteuse confirmée. Retournement haussier probable — entrée long à la première imbalance acheteuse.",
    relatedSlugs: ["delta", "cvd", "imbalance"],
    fullArticleSlug: "absorption-order-flow",
    hubSlug: "order-flow",
  },
];

export function getTermBySlug(slug: string) {
  return terms.find((t) => t.slug === slug);
}
