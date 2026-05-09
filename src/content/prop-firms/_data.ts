export interface PropFirmData {
  slug: string;
  name: string;
  shortName: string;
  rating: string; // "4.5/5"
  ratingValue: number;
  founded: string;
  headquarters: string;
  evaluationFee: string;
  profitSplit: string;
  maxFunding: string;
  intro: string;
  pros: string[];
  cons: string[];
  evaluation: string;
  payout: string;
  bestFor: string;
  verdict: string;
  basssAdvice: string;
}

export const propFirms: PropFirmData[] = [
  {
    slug: "ftmo",
    name: "FTMO",
    shortName: "FTMO",
    rating: "4.7/5",
    ratingValue: 4.7,
    founded: "2015",
    headquarters: "Prague, Republique Tcheque",
    evaluationFee: "155 € — 1 080 € (selon taille du compte)",
    profitSplit: "80 % — 90 % (apres scaling plan)",
    maxFunding: "400 000 USD (scaling jusqu'a 2 M USD)",
    intro:
      "FTMO est la prop firm europeenne la plus etablie du marche. Fondee en 2015 a Prague, elle a finance plus de 100 000 traders dans le monde et reste la reference du secteur — particulierement en France ou son service client francophone et sa fiabilite des paiements lui donnent une longueur d'avance.",
    pros: [
      "Reputation solide depuis 2015 — paiements fiables, equipe stable",
      "Service client francophone et support 24/5",
      "Profit split de 80 % des le passage en compte funded, 90 % apres scaling",
      "Plateforme MT4, MT5, cTrader et DXtrade au choix",
      "Contests et challenges promotionnels frequents (-15 % a -30 %)",
      "Marches : Forex, indices, matieres premieres, cryptos, actions US",
    ],
    cons: [
      "Frais d'evaluation eleves vs concurrents (155 € minimum vs 49 € chez certains)",
      "Pas de Futures CME (contrairement a Topstep, Apex, Bulenox)",
      "Phase 2 obligatoire — 2 etapes avant le funded",
      "Limite de drawdown trailing stricte (5 % daily, 10 % overall)",
    ],
    evaluation:
      "Evaluation en 2 phases : Challenge (objectif +10 % en 30 jours, max 5 % drawdown daily), puis Verification (objectif +5 % en 60 jours). Une fois reussie, le compte funded est attribue avec les memes regles de drawdown. Important : drawdown trailing tant qu'on est en profit — il ne se relache qu'apres avoir touche le profit target initial.",
    payout:
      "Premier payout possible apres 14 jours de trading sur le compte funded (au minimum 4 jours actifs). Profit split a 80 % les premiers payouts, puis 90 % apres scaling. Paiement bancaire (SEPA), Skrill, cryptos. Delai de paiement : 1-2 jours apres demande.",
    bestFor:
      "Traders Forex et indices avec une approche structuree, qui privilegient la fiabilite des paiements a long terme. Profil ideal : swing trader ou day trader sur EURUSD, NAS100, US30, XAUUSD.",
    verdict:
      "FTMO reste le standard contre lequel toutes les autres prop firms sont mesurees. Plus cher mais plus fiable. Pour un trader serieux qui veut construire sur 2-3 ans, c'est le choix le plus sur — et le plus accessible aux Francais.",
    basssAdvice:
      "Les eleves BASS qui passent FTMO le font generalement avec la methode Market Profile + Order Flow sur indices (NAS100, US30). Le drawdown trailing FTMO est strict — on conseille de ne risquer que 0,5 % par trade les premieres semaines pour etablir un track record propre. La methode BASS limite naturellement les risques aux niveaux structurels (VAH/VAL/POC).",
  },
  {
    slug: "topstep",
    name: "Topstep",
    shortName: "Topstep",
    rating: "4.5/5",
    ratingValue: 4.5,
    founded: "2012",
    headquarters: "Chicago, USA",
    evaluationFee: "49 $ — 165 $ / mois (Trading Combine)",
    profitSplit: "100 % des 10 000 premiers $ puis 90 %",
    maxFunding: "150 000 USD (XL Account)",
    intro:
      "Topstep est la prop firm de reference pour le trading sur Futures CME (ES, NQ, YM, RTY, CL, GC). Fondee a Chicago en 2012, elle est la plus ancienne du marche et la seule reellement specialisee Futures — un avantage critique pour les traders qui utilisent le Market Profile et l'Order Flow.",
    pros: [
      "Specialisee Futures CME — la meilleure pour ES, NQ, YM, GC, CL",
      "Profit split exceptionnel : 100 % sur les 10 000 premiers $ puis 90 %",
      "Pas de phase 2 — un seul Trading Combine puis funded",
      "Plateformes pro : Tradovate, NinjaTrader, R Trader",
      "Trailing drawdown tres traders-friendly (se fige une fois positif)",
      "Communaute solide, contenu pedagogique de qualite",
    ],
    cons: [
      "Modele d'abonnement mensuel (49 $ — 165 $ / mois) — peut couter cher si on tarde",
      "Pas de Forex ni d'actions — Futures CME uniquement",
      "Daily Loss Limit calcule sur l'equity, pas le balance",
      "Compte funded resilie automatiquement apres 30 jours sans trade",
    ],
    evaluation:
      "Trading Combine en 1 phase. Atteindre l'objectif de profit (3 000 $ pour le 50K, 6 000 $ pour le 100K, 9 000 $ pour le 150K) en respectant le Daily Loss Limit et le Maximum Loss Limit. Pas de duree minimum — tu peux passer en 1 jour si tu performes (mais 5 jours minimum d'activite avant payout).",
    payout:
      "Apres 5 jours minimum de trading sur le funded. Profit split : 100 % des 10 000 premiers $, puis 90 %. Paiement par virement ACH (US) ou virement international. Delai : 1-3 jours apres demande. Pas de minimum de jours profitables requis pour les payouts (contrairement a FTMO).",
    bestFor:
      "Traders Futures (ES, NQ, GC, CL) qui veulent une approche structurelle pure — Market Profile, Order Flow, Footprint. Ideal pour les eleves BASS qui appliquent la methode sur les Futures.",
    verdict:
      "Si tu trades les Futures, Topstep est le choix par defaut. Profit split, qualite des plateformes, fiabilite des paiements — il n'y a pas mieux pour ES/NQ/GC. Le prix mensuel peut paraitre eleve mais on l'amortit en 1-2 trades reussis.",
    basssAdvice:
      "Topstep est la prop firm n°1 chez les eleves BASS — la methode Market Profile + Order Flow s'applique parfaitement aux Futures CME. Conseil : commencer par le compte 50K (49 $/mois) pour valider la methode en condition reelle avant de passer au 100K ou 150K. Le trailing drawdown qui se fige une fois positif rend Topstep beaucoup moins stressant que FTMO.",
  },
  {
    slug: "apex-trader-funding",
    name: "Apex Trader Funding",
    shortName: "Apex",
    rating: "4.4/5",
    ratingValue: 4.4,
    founded: "2021",
    headquarters: "Texas, USA",
    evaluationFee: "147 $ — 657 $ (one-time)",
    profitSplit: "100 % des 25 000 premiers $ puis 90 %",
    maxFunding: "300 000 USD (jusqu'a 20 comptes simultanes)",
    intro:
      "Apex Trader Funding est devenue en 3 ans la prop firm Futures la plus agressive sur le tarif. Fondee en 2021 au Texas, elle propose des frais d'evaluation one-time (pas mensuel comme Topstep) et permet de cumuler jusqu'a 20 comptes simultanes — un avantage strategique pour scaler les profits.",
    pros: [
      "Frais d'evaluation ONE-TIME (pas mensuel) — moins cher a long terme",
      "Jusqu'a 20 comptes simultanes — multiplie le levier sans augmenter le risque",
      "Profit split : 100 % des 25 000 premiers $ par compte, puis 90 %",
      "Plateformes : Rithmic, Tradovate, NinjaTrader",
      "Promotions frequentes (-50 % a -90 % en periode de soldes)",
      "Marches : Futures CME complets (ES, NQ, GC, CL, etc.)",
    ],
    cons: [
      "Trailing drawdown jusqu'a ce qu'on touche le profit target — strict",
      "Reputation de paiements parfois retardes en 2024 (depuis stabilise en 2025)",
      "Service client moins reactif que Topstep ou FTMO",
      "Regles de consistency (max 30 % du profit en 1 jour) — peut bloquer payouts",
    ],
    evaluation:
      "1 phase : atteindre le profit target (3 000 $ — 12 000 $ selon taille de compte) en respectant le trailing drawdown. Pas de duree minimum, pas de jours minimums de trading. Une fois passe, le compte funded est attribue avec les memes regles + une regle de consistency (max 30 % du profit total en 1 seule journee).",
    payout:
      "Apres 8 jours profitables (pas forcement consecutifs) sur le funded. Profit split : 100 % des 25 000 premiers $ par compte, puis 90 %. Paiement par virement ACH ou Wise. Delai : 3-7 jours.",
    bestFor:
      "Traders Futures qui veulent scaler avec plusieurs comptes en parallele. Profil ideal : trader systematique avec une methode reproductible qui peut tourner sur 5-10 comptes simultanes. Aussi adapte aux scalpers Footprint sur ES/NQ.",
    verdict:
      "Apex est la meilleure alternative a Topstep pour les Futures, particulierement pour les traders qui veulent multi-comptes. Frais one-time + scaling agressif = ROI maximal. Preferer Topstep si tu trades sur 1 seul compte, preferer Apex si tu veux 5+ comptes.",
    basssAdvice:
      "Apex est utilise par les eleves BASS qui veulent multiplier leur effet de levier sans risquer leur capital personnel. Strategie : passer 5-10 evaluations en parallele avec la methode Market Profile, puis trader les memes setups sur tous les comptes simultanement. Le profit split a 100 % sur les 25 K premiers $ de chaque compte = potentiel x5 a x10 vs un compte unique.",
  },
  {
    slug: "fast-track-trading",
    name: "Fast Track Trading",
    shortName: "Fast Track",
    rating: "4.3/5",
    ratingValue: 4.3,
    founded: "2022",
    headquarters: "Floride, USA",
    evaluationFee: "85 $ — 350 $ (one-time)",
    profitSplit: "80 % — 90 %",
    maxFunding: "200 000 USD",
    intro:
      "Fast Track Trading est une prop firm Futures recente (2022) qui mise sur la simplicite et la rapidite. Son nom n'est pas anodin : evaluation en 1 phase, payout possible en 5 jours, et une approche plus permissive sur les regles de drawdown que les concurrents directs.",
    pros: [
      "Evaluation en 1 phase, sans phase 2 obligatoire",
      "Frais one-time (pas d'abonnement mensuel)",
      "Drawdown daily plus permissif que Topstep ou Apex (5 % statique sur certains plans)",
      "Plateformes : Tradovate, NinjaTrader, Rithmic",
      "Premier payout possible apres 5 jours de trading",
    ],
    cons: [
      "Moins connue que Topstep/Apex/FTMO — moins de retours communautaires",
      "Service client en anglais uniquement",
      "Profit split de 80 % standard, 90 % uniquement apres palier",
      "Marches : Futures CME et MES/MNQ uniquement",
    ],
    evaluation:
      "1 phase : atteindre le profit target (selon taille de compte) avec un drawdown maximum statique (pas trailing sur certains plans — un avantage). Pas de duree minimum. Pas de jours minimums obligatoires.",
    payout:
      "Apres 5 jours de trading minimum sur le funded. Profit split : 80 % standard, 90 % a partir du 3eme payout. Paiement par virement ou Wise. Delai : 2-5 jours.",
    bestFor:
      "Traders qui veulent essayer une prop firm Futures sans engagement long. Profil ideal : day trader actif qui veut tester la methode BASS sur Futures sans s'engager sur un abonnement mensuel.",
    verdict:
      "Fast Track est une alternative interessante pour les traders qui trouvent Topstep trop strict ou Apex trop concurrentiel sur les payouts. Tarif raisonnable, drawdown plus permissif, mais reputation moins solide. Bon choix pour une premiere prop firm.",
    basssAdvice:
      "Fast Track Trading est utilise par les eleves BASS comme prop firm 'satellite' — en complement d'un compte Topstep ou Apex principal. Le drawdown plus permissif permet de tester des setups Order Flow plus agressifs sans risquer le compte principal.",
  },
  {
    slug: "bulenox",
    name: "Bulenox",
    shortName: "Bulenox",
    rating: "4.2/5",
    ratingValue: 4.2,
    founded: "2023",
    headquarters: "Etats-Unis",
    evaluationFee: "115 $ — 365 $ (one-time)",
    profitSplit: "80 % — 90 %",
    maxFunding: "250 000 USD",
    intro:
      "Bulenox est une prop firm Futures relativement recente (2023) qui s'est rapidement fait une place grace a un produit clair et des promotions agressives. Sa proposition : evaluation en 1 phase, drawdown statique sur certains plans (pas trailing), et tarifs one-time competitifs.",
    pros: [
      "Drawdown statique disponible (option Master Account) — pas de trailing",
      "Tarifs one-time competitifs",
      "Promotions saisonnieres (-30 % a -50 % regulieres)",
      "Plateformes : Rithmic, Tradovate, NinjaTrader",
      "1 phase d'evaluation, pas de duree minimum",
    ],
    cons: [
      "Moins etablie que Topstep ou Apex — moins de track record long",
      "Profit split de 80 % standard (90 % apres palier)",
      "Service client en anglais uniquement",
      "Regle de consistency stricte sur certains plans",
    ],
    evaluation:
      "1 phase. Atteindre le profit target avec respect du drawdown (statique ou trailing selon plan). Pas de duree minimum. La version Master Account avec drawdown statique est la plus utilisee — elle se rapproche du fonctionnement d'un compte personnel.",
    payout:
      "Premier payout apres 10 jours de trading minimum. Profit split : 80 % standard, 90 % apres 3 payouts cumules. Paiement Wise ou ACH. Delai : 3-7 jours.",
    bestFor:
      "Traders qui cherchent un drawdown statique (sans trailing) — particulierement adapte aux strategies swing ou aux scalpeurs qui veulent eviter le stress du trailing. Profil ideal : eleves BASS appliquant la methode Market Profile sur Futures avec gestion stricte du risque via x-trade.ai.",
    verdict:
      "Bulenox est une alternative serieuse a Topstep et Apex, particulierement pour ceux qui veulent un drawdown statique. Encore jeune mais montee en puissance rapide. A surveiller pour 2026.",
    basssAdvice:
      "Bulenox est de plus en plus populaire chez les eleves BASS pour sa version drawdown statique. Strategie : combiner avec x-trade.ai pour automatiser les Daily Loss Limits et eviter les violations accidentelles. Sur Futures ES/NQ, c'est une excellente alternative pour les strategies swing intraday.",
  },
  {
    slug: "the-funded-trader",
    name: "The Funded Trader",
    shortName: "TFT",
    rating: "4.0/5",
    ratingValue: 4.0,
    founded: "2021",
    headquarters: "Etats-Unis",
    evaluationFee: "59 $ — 1 199 $",
    profitSplit: "80 % — 90 %",
    maxFunding: "600 000 USD",
    intro:
      "The Funded Trader (TFT) est une prop firm americaine fondee en 2021. Elle a connu une croissance rapide grace a des plans flexibles (Standard, Rapid, Royal, Knight) et des frais d'evaluation accessibles. Apres une crise de paiements en 2024, l'entreprise s'est restructuree et a stabilise ses operations en 2025.",
    pros: [
      "Plusieurs plans disponibles (Standard, Rapid, Royal, Knight) — flexibilite",
      "Frais d'evaluation accessibles (a partir de 59 $)",
      "Plateformes : MetaTrader 4, MT5, cTrader, DXtrade, Match-Trader",
      "Marches : Forex, indices, cryptos, actions, matieres premieres",
      "Profit split scalable jusqu'a 90 %",
    ],
    cons: [
      "Crise de paiements en 2024 — reputation a reconstruire",
      "Plans tres differents — peut etre confus pour debutants",
      "Pas de Futures CME (Forex et CFD uniquement)",
      "Service client peut etre lent en periode de forte affluence",
    ],
    evaluation:
      "Variable selon plan. Plan Standard : 2 phases (target +10 % phase 1, +5 % phase 2). Plan Rapid : 1 phase rapide. Plan Royal : objectifs ajustes pour swing traders. Plan Knight : evaluation simulee de courte duree.",
    payout:
      "Bi-mensuel ou apres atteinte de palier de profit selon plan. Profit split jusqu'a 90 %. Paiement Wise, Rise, virement bancaire. Delai : 3-10 jours.",
    bestFor:
      "Traders Forex/CFD qui veulent flexibilite et accessibilite tarifaire. Profil ideal : day trader sur EURUSD, GBPUSD, XAUUSD avec une approche test-and-learn.",
    verdict:
      "TFT est revenue en course apres sa crise de 2024. Pour un trader Forex qui veut tester plusieurs configurations, les plans varies sont un avantage. Pour les Futures, preferer Topstep, Apex ou Bulenox.",
    basssAdvice:
      "TFT est moins recommande pour les eleves BASS qui se concentrent sur Futures CME. Si tu veux trader Forex avec la methode Market Profile (sur EURUSD ou XAUUSD avec sessions Globex), TFT peut etre une option — sinon, oriente-toi vers Topstep ou Apex.",
  },
  {
    slug: "my-funded-futures",
    name: "My Funded Futures",
    shortName: "MFFU",
    rating: "4.3/5",
    ratingValue: 4.3,
    founded: "2023",
    headquarters: "Etats-Unis",
    evaluationFee: "80 $ — 380 $ (one-time)",
    profitSplit: "100 % des 10 000 premiers $ puis 90 %",
    maxFunding: "150 000 USD",
    intro:
      "My Funded Futures (MFFU) est une prop firm Futures americaine lancee en 2023, qui s'est rapidement positionnee comme alternative a Topstep avec un focus sur la transparence des regles et la rapidite des payouts. Elle propose des plans Starter et Expert adaptes a differents profils.",
    pros: [
      "Profit split : 100 % des 10 000 premiers $ puis 90 %",
      "Frais one-time (pas d'abonnement mensuel)",
      "Plateformes : Tradovate, NinjaTrader, Rithmic",
      "1 phase d'evaluation rapide",
      "Drawdown trailing transparent et clairement explique",
      "Promotions regulieres (-20 % a -40 %)",
    ],
    cons: [
      "Moins etablie que Topstep — moins de track record long",
      "Service client en anglais uniquement",
      "Marches : Futures CME uniquement (ES, NQ, GC, CL, etc.)",
      "Regle de consistency sur certains plans",
    ],
    evaluation:
      "1 phase. Atteindre le profit target (3 000 $ — 9 000 $ selon taille) avec respect du trailing drawdown. Pas de duree minimum. Une fois passe, le compte funded est attribue avec les memes regles.",
    payout:
      "Premier payout apres 5 jours de trading minimum. Profit split : 100 % des 10 000 premiers $, puis 90 %. Paiement Wise ou ACH. Delai : 1-3 jours.",
    bestFor:
      "Traders Futures qui cherchent une alternative directe a Topstep avec frais one-time. Profil ideal : day trader sur ES/NQ avec methode structurelle (Market Profile, Order Flow).",
    verdict:
      "MFFU est une excellente alternative a Topstep si tu prefers les frais one-time. Profit split equivalent, qualite des plateformes, transparence des regles. A surveiller pour 2026 — c'est probablement la prop firm Futures qui monte le plus vite.",
    basssAdvice:
      "My Funded Futures est de plus en plus utilise par les eleves BASS comme alternative ou complement a Topstep. La structure de profit split (100 % sur 10 K premiers $) est identique a Topstep, mais les frais one-time peuvent etre plus avantageux a long terme. Strategie : tester d'abord Topstep mensuel, puis basculer sur MFFU one-time une fois la methode validee.",
  },
  {
    slug: "fundednext",
    name: "FundedNext",
    shortName: "FundedNext",
    rating: "4.1/5",
    ratingValue: 4.1,
    founded: "2022",
    headquarters: "Emirats Arabes Unis",
    evaluationFee: "59 $ — 999 $",
    profitSplit: "80 % — 95 %",
    maxFunding: "300 000 USD",
    intro:
      "FundedNext est une prop firm basee aux Emirats fondee en 2022. Elle a su se differencier avec un programme stallion (sans evaluation, paiement immediat) et un profit split tres agressif jusqu'a 95 %. C'est une des prop firms qui a le plus innove sur le modele economique en 2024-2025.",
    pros: [
      "Profit split jusqu'a 95 % — le plus eleve du marche",
      "Programme Stallion : pas d'evaluation, payment immediat",
      "Plans varies : Express, Evaluation, Stallion",
      "Plateformes : MT4, MT5, cTrader, Match-Trader",
      "15 % de profit share durant l'evaluation (avant le funded)",
    ],
    cons: [
      "Pas de Futures CME (Forex et CFD uniquement)",
      "Plans complexes — peut etre confus",
      "Reputation a confirmer sur le long terme",
      "Service client variable selon les heures",
    ],
    evaluation:
      "Selon plan : Evaluation classique 2 phases, Express 1 phase, Stallion sans evaluation (compte direct). La consistency est verifiee sur tous les plans.",
    payout:
      "Bi-mensuel sur les comptes funded. Profit split jusqu'a 95 % apres scaling. Paiement Wise, virement, crypto. Delai : 3-7 jours.",
    bestFor:
      "Traders Forex experimentes qui veulent maximiser leur profit split. Profil ideal : trader confirme avec track record solide qui passe sur le programme Stallion direct.",
    verdict:
      "FundedNext est innovante mais reservee aux traders Forex confirmes. Pour les Futures, preferer Topstep, Apex ou MFFU. Le profit split a 95 % est attractif mais accessible seulement apres plusieurs paliers.",
    basssAdvice:
      "FundedNext n'est pas la prop firm prioritaire pour les eleves BASS qui se concentrent sur Futures. Si tu veux explorer le Forex avec la methode Market Profile sur sessions Globex, le plan Stallion peut etre interessant pour eviter les frais d'evaluation.",
  },
  {
    slug: "e8-funding",
    name: "E8 Funding",
    shortName: "E8",
    rating: "4.0/5",
    ratingValue: 4.0,
    founded: "2021",
    headquarters: "Etats-Unis",
    evaluationFee: "165 $ — 1 250 $",
    profitSplit: "80 %",
    maxFunding: "1 000 000 USD",
    intro:
      "E8 Funding est une prop firm americaine specialisee dans les comptes a haut levier, jusqu'a 1 million USD. Fondee en 2021, elle s'adresse a un public plus avance qui cherche a scaler rapidement avec des objectifs ambitieux et un drawdown plus permissif sur les gros comptes.",
    pros: [
      "Comptes jusqu'a 1 000 000 USD — le plus eleve du marche",
      "8 % daily drawdown — plus permissif que la moyenne",
      "Plateformes : Match-Trader, MetaTrader 5",
      "Marches : Forex, indices, cryptos, matieres premieres",
      "Programme E8 Track : path direct vers funded",
    ],
    cons: [
      "Profit split standard 80 % (pas de scaling jusqu'a 90 %)",
      "Frais d'evaluation eleves",
      "Pas de Futures CME",
      "Reputation moins etablie que FTMO",
    ],
    evaluation:
      "Standard 2 phases ou E8 Track 1 phase rapide. Drawdown daily de 8 % (vs 5 % chez la plupart des concurrents) — plus de marge pour les strategies a forte volatilite.",
    payout:
      "Bi-mensuel apres atteinte palier de profit. Profit split 80 %. Paiement Wise ou virement bancaire. Delai : 3-7 jours.",
    bestFor:
      "Traders ambitieux qui veulent acceder rapidement a des comptes 500K-1M USD. Profil ideal : swing trader confirme sur Forex/indices avec drawdown management strict.",
    verdict:
      "E8 Funding est une option pour ceux qui visent les gros comptes (500K-1M USD). Drawdown plus permissif mais profit split plafonne. Pas la meilleure pour les Futures.",
    basssAdvice:
      "E8 Funding est rarement utilise par les eleves BASS car non-Futures. Si tu veux scaler vers des comptes 500K+ USD avec methode swing sur indices CFD, ca peut etre une option — sinon, reste sur Topstep/Apex pour Futures.",
  },
  {
    slug: "take-profit-trader",
    name: "Take Profit Trader",
    shortName: "TPT",
    rating: "4.2/5",
    ratingValue: 4.2,
    founded: "2022",
    headquarters: "Etats-Unis",
    evaluationFee: "150 $ — 460 $ (one-time)",
    profitSplit: "80 % — 90 %",
    maxFunding: "150 000 USD",
    intro:
      "Take Profit Trader (TPT) est une prop firm Futures americaine fondee en 2022. Elle s'est positionnee comme alternative directe a Topstep avec frais one-time, drawdown statique disponible, et un focus marque sur la transparence des regles. Sa communaute francaise commence a se developper en 2025-2026.",
    pros: [
      "Drawdown statique disponible (option End of Day) — pas de trailing",
      "Frais one-time competitifs",
      "Plateformes : Tradovate, NinjaTrader, Rithmic",
      "1 phase d'evaluation rapide",
      "Profit split scalable jusqu'a 90 %",
      "Promotions saisonnieres frequentes",
    ],
    cons: [
      "Moins etablie que Topstep — track record plus court",
      "Service client en anglais uniquement",
      "Profit split 80 % standard, 90 % apres palier",
      "Marches : Futures CME uniquement",
    ],
    evaluation:
      "1 phase. Atteindre le profit target avec respect du drawdown (statique End of Day ou trailing selon plan). La version End of Day Drawdown se fige une fois la journee terminee — un gros avantage pour les strategies swing.",
    payout:
      "Apres 7 jours de trading minimum. Profit split 80 % standard, 90 % apres 3 payouts. Paiement Wise. Delai : 3-7 jours.",
    bestFor:
      "Traders Futures qui veulent un drawdown statique style 'compte personnel'. Profil ideal : eleves BASS appliquant Market Profile + Order Flow sur ES/NQ avec gestion swing.",
    verdict:
      "Take Profit Trader est une excellente alternative a Topstep pour ceux qui veulent un drawdown statique. Frais one-time + qualite plateformes = valeur correcte. A considerer en complement de Topstep ou Apex.",
    basssAdvice:
      "TPT est utilise par certains eleves BASS qui prefferent un drawdown statique (End of Day) au trailing. Bon complement pour diversifier les prop firms et reduire le risque concentre sur une seule plateforme.",
  },
];

export function getPropFirmBySlug(slug: string) {
  return propFirms.find((p) => p.slug === slug);
}
