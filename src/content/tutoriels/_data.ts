export interface TutorielData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string; // "Sierra Chart", "Configuration", "Outils"
  intro: string;
  steps: { title: string; content: string }[];
  tips: string[];
  faq: { question: string; answer: string }[];
  related: string[]; // other tutorial slugs
}

export const tutoriels: TutorielData[] = [
  {
    slug: "configurer-sierra-chart-market-profile",
    title: "Configurer Sierra Chart pour le Market Profile",
    metaTitle:
      "Configurer Sierra Chart pour le Market Profile (Guide Complet 2026)",
    metaDescription:
      "Tutoriel complet pour configurer Sierra Chart pour le Market Profile : TPO Profile, Volume Profile, Initial Balance, Value Area. Etape par etape avec captures d'ecran et conseils des pros.",
    category: "Sierra Chart",
    intro:
      "Sierra Chart est le standard professionnel pour le Market Profile. Mais sa configuration peut deconcerter les debutants : trop d'options, terminologie technique, parametres caches. Ce tutoriel complet te montre exactement comment configurer Sierra Chart pour utiliser le Market Profile comme un trader pro.",
    steps: [
      {
        title: "Etape 1 : Souscrire au data feed CME",
        content:
          "Pour utiliser le Market Profile sur Futures, il faut un data feed temps reel CME. Dans Sierra Chart : File → Open Trading Platform → Choisir Denali Exchange Data Feed (le moins cher) ou Rithmic. Compter 13 $/mois pour CME Level 1 + 12 $/mois pour CME Level 2 (Order Book). Sans le Level 2, pas de Footprint correct.",
      },
      {
        title: "Etape 2 : Charger le contrat Futures (ES, NQ, etc.)",
        content:
          "File → Find Symbol → taper 'ESM6' (E-mini S&P 500 juin 2026) ou 'NQM6' (Nasdaq juin 2026). Important : utilise toujours le contrat front month (le plus liquide). Le contrat 'ES#' (continous adjusted) est utile pour les backtests historiques mais pas pour le live.",
      },
      {
        title: "Etape 3 : Ajouter l'etude TPO Profile",
        content:
          "Clique droit sur le chart → Studies → Add Custom Study → 'TPO Profile Chart'. Parametres recommandes : Period Type = Day, Time Period in Minutes = 30 (standard CBOT), Display Volume Profile = Yes, Value Area Percentage = 70%. Le profil affiche maintenant les TPO (lettres) et le Volume Profile en parallele.",
      },
      {
        title: "Etape 4 : Configurer la Value Area et le POC",
        content:
          "Dans les options du TPO Profile : active 'Display Value Area High/Low Lines' et 'Display POC Line'. Couleurs recommandees : VAH/VAL en jaune, POC en blanc, Naked POC en orange. Ces niveaux sont la base de l'analyse Market Profile — ils doivent etre tres visibles.",
      },
      {
        title: "Etape 5 : Ajouter l'Initial Balance (IB)",
        content:
          "Le IB est la range des 60 premieres minutes de la session RTH. Sierra Chart le calcule automatiquement si tu actives 'Display Initial Balance' dans le TPO Profile. Time Period for Initial Balance = 60 minutes. Le IB delimite ouvre la 'fair value zone' de la journee.",
      },
      {
        title: "Etape 6 : Configurer la session RTH (Regular Trading Hours)",
        content:
          "Tres important : le Market Profile classique se calcule UNIQUEMENT sur la session RTH (15h30 — 22h00 heure francaise pour ES/NQ). Dans le TPO Profile : 'Use Specified Session Times' = Yes, Session 1 Begin = 08:30 CT, Session 1 End = 15:00 CT. Le profil overnight est calcule separement.",
      },
      {
        title: "Etape 7 : Sauvegarder le chartbook",
        content:
          "File → Save Chartbook As → 'BASS_MarketProfile_ES.cht'. Tu peux ensuite recharger ta configuration en 1 clic. Recommandation : un chartbook par instrument (ES, NQ, GC, CL) pour eviter les erreurs.",
      },
    ],
    tips: [
      "Les TPO se mettent a jour en live — pas besoin de rafraichir manuellement",
      "Active 'Display TPO Letters' = Yes pour voir les lettres (A, B, C…) qui correspondent aux 30-min brackets",
      "Le 'Composite Profile' (semaine ou mois) se cree avec un TPO Profile separe avec Period Type = Week",
      "Pour copier la config sur un autre symbole : clique droit → Copy Studies → Apply to Symbol",
      "Backup ton fichier .cht et tes ACSIL studies dans un cloud — Sierra Chart ne sauvegarde pas en ligne",
    ],
    faq: [
      {
        question: "Sierra Chart est-il payant ?",
        answer:
          "Oui. Plan Standard : 26 $/mois. Plan Package 11 (recommande pour Market Profile + Footprint) : 36 $/mois. Plus le data feed (CME Level 1 + Level 2 : 25 $/mois). Total : ~60 $/mois pour une config pro complete.",
      },
      {
        question: "Peut-on utiliser le Market Profile gratuitement ?",
        answer:
          "Sur TradingView avec un compte gratuit, oui — mais le Volume Profile gratuit est tres limite (pas en temps reel, pas multi-sessions). Pour du Market Profile pro avec Volume Profile et Footprint, Sierra Chart reste le standard.",
      },
      {
        question: "Quelle alternative a Sierra Chart pour le Market Profile ?",
        answer:
          "ATAS et NinjaTrader proposent du Market Profile correct. Mais Sierra Chart reste superieur pour la rapidite, la stabilite et la profondeur des options. C'est pourquoi 90% des traders pros institutionnels l'utilisent.",
      },
    ],
    related: ["configurer-sierra-chart-footprint", "sierra-chart-vs-ninjatrader", "indicateurs-essentiels-sierra-chart"],
  },
  {
    slug: "configurer-sierra-chart-footprint",
    title: "Configurer le Footprint Chart sur Sierra Chart",
    metaTitle:
      "Configurer le Footprint sur Sierra Chart 2026 : Guide Etape par Etape",
    metaDescription:
      "Tutoriel complet pour configurer le Footprint Chart sur Sierra Chart : Numbers Bars, Cluster Bars, Bid/Ask volume, Imbalances, Delta. Configuration optimale pour ES et NQ.",
    category: "Sierra Chart",
    intro:
      "Le Footprint Chart est l'outil le plus puissant pour lire l'order flow en temps reel. Sur Sierra Chart, il s'appelle 'Numbers Bars' ou 'Cluster Bars'. Voici comment le configurer pour voir exactement ce que voient les traders institutionnels.",
    steps: [
      {
        title: "Etape 1 : Verifier l'abonnement aux donnees Level 2",
        content:
          "Le Footprint a besoin du Bid/Ask volume — donc du data feed CME Level 2 (Order Book). File → Trading Platform → verifier que CME Level 2 est actif. Sans ce feed, le Footprint affiche des donnees incompletes (delta 0 partout).",
      },
      {
        title: "Etape 2 : Charger le contrat avec un timeframe approprie",
        content:
          "Le Footprint se lit mieux sur des bars 'Number of Trades' ou 'Volume Bars' (pas time bars). Recommandation : Range Bars de 4-8 ticks pour ES, 8-16 ticks pour NQ. Sinon, classique 5-min time bars pour debuter.",
      },
      {
        title: "Etape 3 : Ajouter l'etude Numbers Bars",
        content:
          "Studies → Add Custom Study → 'Numbers Bars Calculated Values'. Cette etude affiche les chiffres bid/ask par niveau de prix sur chaque bar. Parametres : Display Mode = 'Bid x Ask', Tick Multiplier = 1 (par defaut). Active 'Display Imbalance' pour mettre en evidence les desequilibres.",
      },
      {
        title: "Etape 4 : Configurer les Imbalances",
        content:
          "Les imbalances sont les niveaux ou bid >> ask (ou inverse) — signal d'agression institutionnelle. Dans Numbers Bars : Imbalance Percentage = 200 (200 % de difference entre bid et ask). Couleurs recommandees : Buy Imbalance = vert clair, Sell Imbalance = rouge clair.",
      },
      {
        title: "Etape 5 : Ajouter le Delta Volume",
        content:
          "Studies → Add Custom Study → 'Volume Delta'. Affiche le delta (achats agressifs - ventes agressives) par bar. Display = Histogram or Line. Le delta est le signal #1 du Footprint : delta positif fort = pression acheteuse, delta negatif fort = pression vendeuse.",
      },
      {
        title: "Etape 6 : Ajouter le CVD (Cumulative Volume Delta)",
        content:
          "Studies → Cumulative Delta. Affiche le delta cumule sur la session. Le CVD montre la PRESSION cumulative — les divergences entre prix et CVD sont des signaux puissants (prix monte mais CVD descend = vendeurs absorbent les acheteurs = retournement probable).",
      },
      {
        title: "Etape 7 : Configurer les couleurs et la taille",
        content:
          "Click droit sur Numbers Bars → Color and Size Bar Settings. Recommandation : font size 11-12, color background neutre (gris fonce), couleurs bid/ask contrastees (cyan/magenta ou vert/rouge). La lisibilite est cruciale en lecture rapide.",
      },
    ],
    tips: [
      "Active 'Show Number Bars Calculated Values At Last Price' pour voir le bid/ask en cours en bas du chart",
      "Combine Numbers Bars + Volume Profile sur le meme chart — la confluence est puissante",
      "Pour les scalpers : utilise des Tick Bars (50-200 ticks) au lieu de time bars",
      "Le 'Stacked Imbalance' (3+ imbalances consecutifs) est un signal d'absorption — important",
      "Backup ta config Numbers Bars dans un .scsf pour reutiliser sur d'autres symboles",
    ],
    faq: [
      {
        question: "Quelle est la difference entre Footprint et Volume Profile ?",
        answer:
          "Le Volume Profile montre le volume cumule par niveau de prix sur une session entiere (ou plusieurs). Le Footprint montre le volume bid/ask par niveau de prix sur CHAQUE bar individuellement. Le Footprint est dynamique (par bar), le Volume Profile est statique (par periode).",
      },
      {
        question: "Le Footprint marche-t-il sur le Forex ?",
        answer:
          "Non. Le Forex n'a pas de centralized order book — donc pas de bid/ask volume reel. Le Footprint marche uniquement sur les marches centralises avec book consolide : Futures CME, actions US, certaines cryptos sur exchange centralise (Binance Futures).",
      },
      {
        question: "Combien coute la configuration Footprint complete ?",
        answer:
          "Sierra Chart Package 11 (36 $/mois) inclut le Numbers Bars Calculated Values. Plus CME Level 2 (12 $/mois). Total : ~48 $/mois pour Footprint pro complet sur Futures CME.",
      },
    ],
    related: ["configurer-sierra-chart-market-profile", "indicateurs-essentiels-sierra-chart", "sierra-chart-vs-atas"],
  },
  {
    slug: "sierra-chart-vs-ninjatrader",
    title: "Sierra Chart vs NinjaTrader",
    metaTitle:
      "Sierra Chart vs NinjaTrader 2026 : Comparatif Pro pour Order Flow",
    metaDescription:
      "Sierra Chart vs NinjaTrader 2026 : duel des deux plateformes pro pour Order Flow et Market Profile. Performance, prix, ecosysteme, prop firms compatibles. Lequel choisir ?",
    category: "Sierra Chart",
    intro:
      "Sierra Chart et NinjaTrader sont les deux plateformes pro de reference pour le trading Futures avec Order Flow et Market Profile. Sierra est le standard institutionnel, NinjaTrader le plus user-friendly. Voici le comparatif complet.",
    steps: [
      {
        title: "Performance et stabilite",
        content:
          "Sierra Chart est ecrit en C++ pur, optimise pour la vitesse extreme. Lag minimal meme avec 50+ studies. NinjaTrader est en C# (.NET) — un peu plus lent sur les charts complexes, mais largement suffisant pour la plupart des traders. Pour le HFT scalping : Sierra. Pour le day trading classique : equivalent.",
      },
      {
        title: "Prix et abonnement",
        content:
          "Sierra Chart : 26 $/mois (Standard) — 36 $/mois (Package 11 avec Footprint). NinjaTrader : licence lifetime 1 099 $ ou 50 $/mois en location. Sierra moins cher au depart, NinjaTrader rentable apres 2-3 ans.",
      },
      {
        title: "Order Flow et Footprint",
        content:
          "Sierra Chart Numbers Bars : standard institutionnel, le plus complet. NinjaTrader Order Flow + : tres bon, plus visuel et plus facile a configurer. Pour debutants : NinjaTrader plus accessible. Pour pros : Sierra plus puissant.",
      },
      {
        title: "Market Profile",
        content:
          "Sierra Chart TPO Profile : tres complet, beaucoup d'options (Composite, Split Profile, Open Type). NinjaTrader Market Profile : correct mais moins profond. Pour Market Profile avance : Sierra. Pour basics : NinjaTrader suffit.",
      },
      {
        title: "Compatibilite prop firms",
        content:
          "Topstep : NinjaTrader natif (recommande), Sierra possible via Rithmic. Apex : NinjaTrader natif, Sierra via Rithmic. Bulenox : Tradovate natif, NinjaTrader et Sierra possibles. MFFU : NinjaTrader, Sierra via Rithmic. NinjaTrader plus universellement supporte.",
      },
      {
        title: "Communaute et support",
        content:
          "Sierra Chart : communaute pro, forums techniques actifs, support email reactif (24h). NinjaTrader : communaute massive (1M+ users), tutoriels YouTube abondants, ecosysteme d'addons Apex. Pour debuter : NinjaTrader. Pour pro : Sierra.",
      },
    ],
    tips: [
      "Pour les eleves BASS Trading : Sierra Chart est recommande (cours bases dessus)",
      "NinjaTrader propose une demo gratuite illimitee — utilise-la pour decider",
      "Sierra Chart fonctionne sur Mac via Wine ou Parallels (pas natif)",
      "NinjaTrader 8 (current) > NinjaTrader 7 (legacy) — toujours utiliser la version 8",
      "Pour multi-monitor setups complexes : Sierra plus stable",
    ],
    faq: [
      {
        question: "NinjaTrader ou Sierra Chart pour debuter ?",
        answer:
          "NinjaTrader pour la facilite d'apprentissage et l'interface plus moderne. Sierra Chart si tu veux directement l'outil pro et que tu acceptes une courbe d'apprentissage plus raide. Pour les eleves BASS, Sierra Chart est recommande car le cursus est base dessus.",
      },
      {
        question: "Peut-on connecter Sierra Chart a Topstep ?",
        answer:
          "Oui via le data feed Rithmic. Sierra Chart Standard + Rithmic data feed = compatible Topstep. Configuration plus complexe que NinjaTrader mais resultat identique en trading.",
      },
      {
        question: "Sierra Chart marche sur Mac ?",
        answer:
          "Pas nativement. Solutions : (1) Wine (gratuit mais instable), (2) Parallels Desktop avec Windows VM (recommande, 80 €/an), (3) Cloud Windows VPS (10-30 $/mois). Beaucoup de traders Mac utilisent NinjaTrader car il existe une version Mac native via Java.",
      },
    ],
    related: ["configurer-sierra-chart-market-profile", "configurer-sierra-chart-footprint", "sierra-chart-prix"],
  },
  {
    slug: "sierra-chart-vs-atas",
    title: "Sierra Chart vs ATAS",
    metaTitle:
      "Sierra Chart vs ATAS 2026 : Quelle Plateforme Order Flow Choisir ?",
    metaDescription:
      "Sierra Chart vs ATAS 2026 : duel des deux plateformes specialisees Order Flow. Performance, prix, ergonomie. Comparatif honnete pour traders Futures.",
    category: "Sierra Chart",
    intro:
      "Sierra Chart et ATAS sont les deux plateformes les plus utilisees pour l'Order Flow institutionnel. Sierra est le standard depuis 20+ ans, ATAS un challenger russe en forte croissance. Voici comparaison sans concession.",
    steps: [
      {
        title: "Order Flow et Footprint",
        content:
          "Sierra Chart Numbers Bars : tres complet, customisation profonde. ATAS Cluster Chart : interface plus moderne, visuel plus immediat. Pour pros : Sierra (plus de controle). Pour visuel rapide : ATAS.",
      },
      {
        title: "Prix",
        content:
          "Sierra Chart Package 11 : 36 $/mois. ATAS Lifetime : 1 100 $ (achat unique) ou 80 $/mois en location. ATAS plus cher au depart, mais lifetime rentable apres 14 mois.",
      },
      {
        title: "Performance",
        content:
          "Sierra Chart en C++ : ultra-rapide, tres stable meme avec 100+ instruments. ATAS en C# : performant aussi mais plus consommateur de RAM. Sur multi-monitor 4K : Sierra l'emporte.",
      },
      {
        title: "Indicateurs proprietaires",
        content:
          "ATAS a des indicateurs Order Flow uniques (Cluster Search, Big Trades, Speed of Tape). Sierra Chart a un ecosysteme massif de studies via ACSIL (C++ scripts). Pour creativite : ATAS. Pour profondeur : Sierra.",
      },
      {
        title: "Compatibilite prop firms",
        content:
          "Sierra : compatible toutes prop firms via Rithmic/CQG. ATAS : compatible Rithmic, CQG, Quik. Equivalent en pratique pour les prop firms americaines.",
      },
    ],
    tips: [
      "ATAS propose 14 jours d'essai gratuit — teste les deux avant de choisir",
      "Sierra Chart a une plus grande communaute francophone",
      "Pour Market Profile avance : Sierra Chart est superieur a ATAS",
      "ATAS a une UI plus moderne mais peut etre verbose",
      "Les eleves BASS utilisent majoritairement Sierra Chart",
    ],
    faq: [
      {
        question: "ATAS marche-t-il sur Mac ?",
        answer:
          "Non, ATAS est Windows uniquement. Sur Mac : Parallels Desktop + Windows VM (80 €/an).",
      },
      {
        question: "ATAS ou Sierra pour les eleves BASS ?",
        answer:
          "Sierra Chart car le cursus BASS est base dessus. Si tu utilises deja ATAS et que tu veux pas changer, c'est OK — la methode (Market Profile, Order Flow) s'applique sur les deux.",
      },
      {
        question: "Quelle est la meilleure pour les debutants ?",
        answer:
          "ATAS est plus visuel et plus facile a prendre en main les premiers jours. Sierra Chart a une courbe d'apprentissage plus raide mais paye sur le long terme.",
      },
    ],
    related: ["sierra-chart-vs-ninjatrader", "configurer-sierra-chart-footprint", "sierra-chart-prix"],
  },
  {
    slug: "sierra-chart-prix",
    title: "Sierra Chart Prix : Combien Ca Coute Vraiment en 2026",
    metaTitle:
      "Sierra Chart Prix 2026 : Le Vrai Cout (Plateforme + Data Feed CME)",
    metaDescription:
      "Combien coute vraiment Sierra Chart en 2026 ? Detail complet : abonnement plateforme, data feed CME Level 1 et Level 2, frais brokers. Le calcul precis pour budgeter.",
    category: "Sierra Chart",
    intro:
      "Le prix de Sierra Chart est souvent mal compris : la plateforme seule ne suffit pas, il faut aussi un data feed et eventuellement un broker. Voici le calcul precis du cout total mensuel pour une configuration pro complete.",
    steps: [
      {
        title: "Abonnement plateforme Sierra Chart",
        content:
          "Sierra Chart propose 4 packages principaux. Package 1 (Standard) : 26 $/mois — basics. Package 5 : 30 $/mois — ajoute le Trading et l'Advanced Custom Studies. Package 11 : 36 $/mois — RECOMMANDE pour Market Profile + Footprint complet. Package 22 : 64 $/mois — fonctionnalites avancees (rare). Pour les eleves BASS : Package 11.",
      },
      {
        title: "Data feed Sierra Chart Denali (le plus economique)",
        content:
          "Sierra propose son propre feed : Denali Exchange Data Feed. CME Level 1 (Top of Book) : 13 $/mois. CME Level 2 (Order Book complet, necessaire pour Footprint) : 12 $/mois supplementaires. CME Level 1 + 2 ensemble : 25 $/mois. Il existe aussi des feeds gratuits historiques.",
      },
      {
        title: "Data feed alternatif : Rithmic",
        content:
          "Rithmic est l'alternative pro a Denali. Plus cher (40 $/mois pour CME Level 1 + 2) mais inclus avec certains brokers Futures. Avantage : compatibilite native avec Topstep, Apex, Bulenox. Si tu utilises ces prop firms, Rithmic est probablement deja inclus.",
      },
      {
        title: "Frais d'echange CME (mandatory)",
        content:
          "Le CME facture des frais de market data : 1 $/mois pour les particuliers (waived si professionnel paye). Sierra Chart facture ces frais separement. Total mandatory : 1 $/mois CME + cout data feed = 26 $ minimum (Denali Level 1 + CME).",
      },
      {
        title: "Configuration recommandee BASS Trading",
        content:
          "Package 11 (36 $) + Denali CME Level 1 + 2 (25 $) + frais CME (1 $) = 62 $/mois total. Si tu utilises une prop firm avec Rithmic inclus : Package 11 (36 $) seul = 36 $/mois. Toujours moins cher que NinjaTrader Lifetime amortie sur 1 an (91 $/mois).",
      },
      {
        title: "Cout broker (si trading personnel hors prop firm)",
        content:
          "Si tu trades avec ton propre capital (pas prop firm) : il faut un broker Futures comme AMP Global, NinjaTrader Brokerage, Optimus Futures. Commissions : 1.50 $ — 2.50 $ par contract round-turn (RT). Pour 5 trades/jour : ~250 $/mois en commissions. En prop firm, les commissions sont incluses (ou facturees par contract a un tarif similaire).",
      },
    ],
    tips: [
      "Sierra Chart offre 1 mois d'essai gratuit — utilise-le pour valider la config",
      "Si tu trades occasionnellement, abonnement mensuel. Si tu trades quotidiennement, paiement annuel (-15%)",
      "Le data feed Denali est moins cher que Rithmic mais Rithmic est plus stable a haute frequence",
      "Pour les abonnements famille : 1 abonnement = 1 PC + 1 backup PC, pas 2 utilisateurs distincts",
      "Mac users : ajouter Parallels Desktop (80 €/an) au budget",
    ],
    faq: [
      {
        question: "Sierra Chart a-t-il une version gratuite ?",
        answer:
          "Non, pas de version gratuite, mais un essai de 30 jours qui permet de tester toutes les fonctionnalites. Apres le mois d'essai, abonnement obligatoire pour continuer.",
      },
      {
        question: "Peut-on payer Sierra Chart annuellement ?",
        answer:
          "Oui, paiement annuel disponible avec une reduction de ~15 % vs mensuel. Package 11 mensuel : 36 $ x 12 = 432 $. Annuel : ~370 $/an. Economie : 60 $/an environ.",
      },
      {
        question: "Faut-il payer un abonnement separe pour le Footprint ?",
        answer:
          "Non, le Footprint (Numbers Bars) est inclus dans le Package 11 de Sierra Chart. Mais il faut le data feed CME Level 2 (12 $/mois en plus du Level 1) pour avoir les donnees bid/ask correctes.",
      },
    ],
    related: ["configurer-sierra-chart-market-profile", "configurer-sierra-chart-footprint", "sierra-chart-vs-ninjatrader"],
  },
  {
    slug: "indicateurs-essentiels-sierra-chart",
    title: "10 Indicateurs Essentiels Sierra Chart pour Market Profile",
    metaTitle:
      "10 Indicateurs Essentiels Sierra Chart 2026 (Market Profile + Order Flow)",
    metaDescription:
      "Les 10 indicateurs incontournables sur Sierra Chart pour le trading Market Profile et Order Flow : TPO, VWAP, CVD, Numbers Bars, Volume Profile. Configuration optimale.",
    category: "Sierra Chart",
    intro:
      "Sierra Chart propose plus de 1 000 etudes (indicateurs). Mais pour le trading Market Profile + Order Flow, seules 10 sont vraiment essentielles. Voici la liste exacte avec les parametres optimaux.",
    steps: [
      {
        title: "1. TPO Profile Chart",
        content:
          "L'etude principale pour le Market Profile. Affiche les TPO (lettres) et le Volume Profile en parallele. Parametres : Period Type = Day, Time Period = 30 min, Display Volume Profile = Yes, Value Area % = 70.",
      },
      {
        title: "2. Volume Profile (separement du TPO)",
        content:
          "Volume Profile permet d'analyser le volume sur differentes periodes (jour, semaine, mois, composite). Add Custom Study → Volume by Price. Tres utile pour identifier HVN (High Volume Nodes) et LVN (Low Volume Nodes).",
      },
      {
        title: "3. VWAP (Volume Weighted Average Price)",
        content:
          "Le niveau de prix moyen pondere par le volume — utilise par TOUS les institutionnels comme reference d'execution. Add Custom Study → VWAP. Active les bandes VWAP (1 et 2 ecart-types) pour identifier les zones d'achat/vente extremes.",
      },
      {
        title: "4. Numbers Bars (Footprint)",
        content:
          "Le Footprint Chart de Sierra. Voir le Bid/Ask volume par niveau de prix sur chaque bar. Voir le tutoriel dedie pour la config detaillee.",
      },
      {
        title: "5. Volume Delta (Histogram)",
        content:
          "Affiche le delta (achats agressifs - ventes agressives) par bar. Histogramme rouge/vert. Le delta est le signal #1 du Footprint — divergence delta/prix = retournement probable.",
      },
      {
        title: "6. Cumulative Volume Delta (CVD)",
        content:
          "Le delta cumule sur la session. Permet de detecter les divergences de pression (prix qui monte mais CVD qui descend = absorption vendeurs).",
      },
      {
        title: "7. ATR (Average True Range)",
        content:
          "Volatility measure standard. Utilise pour calibrer les stop loss et le sizing. ATR 14 periods sur timeframe quotidien. Si ATR(14) ES = 50 ticks, ton stop minimum est ~10-15 ticks.",
      },
      {
        title: "8. Initial Balance Lines",
        content:
          "Les lignes hautes et basses des 60 premieres minutes RTH. Inclus dans TPO Profile mais peut etre ajoute separement comme support/resistance lines pour la journee.",
      },
      {
        title: "9. Naked POC (POC du jour precedent non visite)",
        content:
          "Le POC du jour D-1 non visite par le prix actuel devient un aimant — le prix tend a revenir le visiter. Sierra Chart a une etude dediee : 'Naked POC Indicator'. Critique pour les trades de mean reversion.",
      },
      {
        title: "10. Volume Profile Composite (multi-jours)",
        content:
          "Composite Profile sur 5-10 jours pour voir les zones de valeur sur le moyen terme. Add Custom Study → Volume Profile (Period Type = Custom Days, Days = 10). Identifie les niveaux structurels macro.",
      },
    ],
    tips: [
      "Ne pas surcharger : 4-5 etudes max sur le chart principal, le reste sur charts secondaires",
      "Sauvegarde ta config dans un .cht (chartbook) pour reutiliser",
      "Couleurs recommandees : VAH/VAL jaune, POC blanc, VWAP cyan, IB orange",
      "Backup tes ACSIL studies (.cpp) avant tout update Sierra Chart",
      "Active 'Display Bar Period in Title' pour voir le timeframe en cours",
    ],
    faq: [
      {
        question: "Combien d'indicateurs maximum sur un chart ?",
        answer:
          "Recommandation pro : 4-5 etudes sur le chart principal pour eviter la surcharge cognitive. Au-dela, on perd la lisibilite. Si besoin de plus, utilise des charts secondaires lies (linked).",
      },
      {
        question: "Le Naked POC est-il toujours fiable ?",
        answer:
          "Non, c'est un indicateur de probabilite, pas une garantie. Le Naked POC marche mieux dans les marches en range. En tendance forte, il peut rester nake plusieurs jours. Toujours combiner avec contexte.",
      },
      {
        question: "Faut-il utiliser le RSI sur Sierra Chart ?",
        answer:
          "Pas pour la methode BASS. Le RSI est un indicateur retard derivant du prix. La methode BASS prefere les indicateurs LEADING bases sur le volume et la structure : Volume Profile, Order Flow, Footprint. Le RSI peut compleer mais n'est pas central.",
      },
    ],
    related: ["configurer-sierra-chart-market-profile", "configurer-sierra-chart-footprint", "sierra-chart-prix"],
  },
  {
    slug: "comment-passer-evaluation-prop-firm",
    title: "Comment Passer une Evaluation Prop Firm : Guide Complet",
    metaTitle:
      "Comment Passer une Evaluation Prop Firm 2026 : 8 Etapes pour Reussir",
    metaDescription:
      "Guide complet pour passer une evaluation prop firm en 2026 : preparation, regles a respecter, gestion du risque, erreurs a eviter. Methode pas a pas par Sebastien Constant.",
    category: "Prop Firms",
    intro:
      "Les evaluations prop firms ont un taux de reussite de 5-10 %. Pourquoi ? Parce que la majorite des traders abordent l'eval comme un trade normal — alors que c'est un exercice tres specifique avec ses propres regles. Voici la methode pour aborder l'evaluation avec rigueur et discipline.",
    steps: [
      {
        title: "Etape 1 : Choisir la bonne taille de compte",
        content:
          "Erreur classique : commencer avec 100K ou 150K parce que 'plus c'est gros, mieux c'est'. Faux. Pour ta premiere eval, prends le 50K (49 $ chez Topstep). Tu apprends les regles, tu valides ta methode, et tu reduis le risque psychologique. Une fois passe, tu peux scaler.",
      },
      {
        title: "Etape 2 : Lire les regles ATTENTIVEMENT",
        content:
          "Avant le 1er trade : passe 30 minutes a lire les regles complètes. Daily Loss Limit, Maximum Loss Limit, Trailing Drawdown, jours minimums, regles de consistency. 80 % des violations sont dues a une mauvaise comprehension des regles. Note les seuils sur un papier visible.",
      },
      {
        title: "Etape 3 : Definir ton plan de trading specifique pour l'eval",
        content:
          "Plan eval = different du plan trading classique. Objectifs : (1) atteindre le target en respectant le drawdown, (2) PAS maximiser le profit. Risquer max 1 % par trade, viser 2-3 trades par jour max, stops serres. La discipline > l'agressivite.",
      },
      {
        title: "Etape 4 : Trader UNIQUEMENT pendant les heures de forte liquidite",
        content:
          "Pour Futures CME : 15:30 — 18:00 heure francaise (open US). Apres 22:00 : volume faible, slippage eleve, risque de violation accidentelle. Ne pas trader pendant les news majeures (NFP, CPI, FOMC) sauf si c'est ta specialite.",
      },
      {
        title: "Etape 5 : Utiliser un outil de risk management",
        content:
          "x-trade.ai (inclus chez les eleves BASS) coupe automatiquement tes positions quand tu approches du Daily Loss Limit, du nombre max de trades, ou apres un cooldown. Sans automatisation, 30 % des eleves font une erreur de discipline a un moment. Avec : risque de violation = 0.",
      },
      {
        title: "Etape 6 : Tenir un journal de trading detaille",
        content:
          "Apres chaque trade : note l'analyse pre-entry, le setup, le resultat, l'erreur eventuelle, le ressenti. Le journal n'est pas pour la prop firm — c'est pour TOI. Identifier les patterns d'erreurs est ce qui fait la difference entre les 5 % qui passent et les 95 % qui echouent.",
      },
      {
        title: "Etape 7 : Eviter les 5 erreurs fatales",
        content:
          "(1) Revenge trading apres un loss. (2) Augmenter la taille pour 'rattraper'. (3) Trader sans setup clair (FOMO). (4) Ignorer le drawdown trailing en pensant 'il bougera pas'. (5) Trader le dimanche soir sur Asia open quand la liquidite est nulle. Chacune de ces erreurs viole l'eval.",
      },
      {
        title: "Etape 8 : Apres avoir passe — gerer le funded",
        content:
          "Le funded est plus difficile que l'eval, paradoxalement. Pourquoi ? Parce que tu as deja paye, tu as la pression de generer des payouts. Conseil : trade EXACTEMENT comme pendant l'eval les 30 premiers jours. Pas de changement de risque, pas de nouvelle strategie. Stabilise ton edge avant de scaler.",
      },
    ],
    tips: [
      "Backteste ta methode 3 mois minimum avant de payer une eval",
      "Demarre toujours avec la taille de compte la plus petite",
      "Utilise un compte demo de la meme prop firm 2 semaines avant l'eval reelle",
      "Compose ton stop loss en fonction de l'ATR — pas en fonction de l'argent",
      "Prevois un budget de 3-5 evals avant de passer (taux d'echec = 80-90 %)",
    ],
    faq: [
      {
        question: "Combien de temps pour passer une eval prop firm ?",
        answer:
          "Topstep : minimum 5 jours actifs (pas de duree max sur Express). FTMO : minimum 4 jours actifs sur Phase 1. Apex : pas de duree minimum. La majorite des passages reussis se font en 15-30 jours. Si tu passes en 1-2 jours, attention : c'est probablement de la chance, pas une methode reproductible.",
      },
      {
        question: "Pourquoi 90 % des traders echouent l'eval ?",
        answer:
          "1. Mauvaise comprehension des regles (Daily Loss, drawdown). 2. Trading emotionnel (revenge, FOMO). 3. Sizing trop agressif. 4. Methode non backtestee. 5. Trading sur news sans preparation. 6. Pas d'outil de risk management. 7. Trader fatigue/distrait.",
      },
      {
        question: "Quelle prop firm est la plus facile a passer ?",
        answer:
          "Aucune n'est 'facile' — toutes ont 80-90 % de taux d'echec. Mais certaines ont des regles plus permissives : Bulenox (drawdown statique disponible), Take Profit Trader (drawdown End of Day), Fast Track Trading (drawdown statique sur certains plans). Topstep et FTMO sont plus strictes mais plus fiables long terme.",
      },
    ],
    related: ["sierra-chart-prix", "indicateurs-essentiels-sierra-chart", "configurer-sierra-chart-market-profile"],
  },
  {
    slug: "trader-es-mini-sp500-debutant",
    title: "Trader l'E-mini S&P 500 (ES) : Guide pour Debutant",
    metaTitle:
      "Trader l'E-mini S&P 500 (ES) Pour Debutants 2026 : Guide Complet",
    metaDescription:
      "Comment commencer a trader l'E-mini S&P 500 (ES) en 2026 : tick size, valeur, sessions, levier, frais. Guide debutant par les traders BASS — methode Market Profile.",
    category: "Marches",
    intro:
      "L'E-mini S&P 500 (symbole ES) est le contrat futures le plus liquide du monde. C'est le marche favori des traders pros et des prop firms. Voici tout ce qu'il faut savoir pour commencer a trader l'ES correctement.",
    steps: [
      {
        title: "Comprendre le contrat ES",
        content:
          "ES = E-mini S&P 500. Tick size : 0.25 point = 12.50 USD. Tick value : 50 USD par point complet. Margin overnight broker : ~12 000 USD. Margin intraday prop firm : 50-300 USD selon firm. Heures de trading (electronique CME Globex) : 24/5 (sauf weekend), session principale RTH 15:30-22:00 heure FR.",
      },
      {
        title: "Le micro E-mini (MES) : pour debuter",
        content:
          "MES = Micro E-mini S&P. Meme produit, taille divisee par 10. Tick : 1.25 USD (vs 12.50). Pour debuter avec moins de risque : trade le MES en 10 contrats vs 1 ES — meme exposure mathematique mais granularity plus fine pour le risk management. Recommande pendant l'apprentissage.",
      },
      {
        title: "Les sessions a connaitre",
        content:
          "(1) Globex Asia : 23:00 — 09:00 FR — volume faible, eviter. (2) European Cash : 09:00 — 15:30 FR — volume moyen, prudent. (3) RTH (Regular Trading Hours) US : 15:30 — 22:00 FR — c'est LE moment pour trader l'ES. (4) After-hours : 22:00 — 23:00 FR — volume baisse rapidement.",
      },
      {
        title: "Les news qui bougent l'ES",
        content:
          "Top 5 : (1) Non-Farm Payrolls (NFP) — 1er vendredi du mois 14:30 FR. (2) FOMC Rate Decision — 8 fois par an 20:00 FR. (3) CPI — milieu du mois 14:30 FR. (4) Earnings season (Apple, MSFT, NVDA) — apres 22:00 FR. (5) GDP, ISM, Retail Sales. Eviter de trader 30 min avant et 1h apres.",
      },
      {
        title: "La methode Market Profile sur l'ES",
        content:
          "Niveaux a tracer chaque jour : (1) IB High/Low (60 min initiales RTH). (2) VAH/VAL/POC du jour precedent. (3) Naked POCs des 5 derniers jours. (4) VWAP intraday. (5) Composite POC sur 5-10 jours. La methode BASS combine ces niveaux avec l'Order Flow pour timing precis des entries.",
      },
      {
        title: "Les types de journees ES (Market Profile)",
        content:
          "(1) Trend Day — IB cassee tot, prix ne revient jamais. Edge : trade with the trend. (2) Normal Day — tout reste dans IB extremes. Edge : fade les extremes. (3) Normal Variation — IB depassee de peu. (4) Neutral Day — incertitude. (5) Double Distribution Day — 2 zones de valeur distinctes. Identifier le type de journee est cle.",
      },
      {
        title: "Les couts de trading sur ES",
        content:
          "Commissions broker : 1.50 — 4.00 USD round-turn (RT). Exchange fees CME : 0.94 USD RT. Total : 2.44 — 4.94 USD par trade RT. En prop firm Topstep : ~4.50 USD RT inclus. Pour 5 trades/jour x 22 jours = 100-500 USD/mois en commissions. A budgeter.",
      },
    ],
    tips: [
      "Commence avec MES (1/10e d'ES) pendant 3-6 mois minimum",
      "Trade UNIQUEMENT pendant le RTH 15:30-22:00 FR les premiers mois",
      "Apprend a tracer les niveaux Market Profile manuellement avant d'utiliser des automatismes",
      "Ne trade JAMAIS sur Asia open (23:00 FR) en debutant — volume trop faible",
      "Suis les contrats roll dates (3eme vendredi de chaque mois pair) pour eviter les bugs de continuity",
    ],
    faq: [
      {
        question: "Quelle prop firm est la meilleure pour trader l'ES ?",
        answer:
          "Topstep est specialisee Futures CME (incluant ES) et reste le standard. Apex Trader Funding pour multi-comptes ES. Bulenox pour drawdown statique. FTMO ne propose pas l'ES (uniquement CFDs/Forex).",
      },
      {
        question: "Combien de capital faut-il pour trader l'ES ?",
        answer:
          "En broker classique : margin overnight ~12 000 USD pour 1 contrat ES. En day trading : margin reduite ~500 USD/contrat. En prop firm Topstep : aucun capital requis — tu paies l'evaluation puis tu trades avec le capital de la firm.",
      },
      {
        question: "Comment configurer Sierra Chart pour trader l'ES ?",
        answer:
          "Voir notre tutoriel dedie : configurer-sierra-chart-market-profile. Symbole : 'ESM6' (juin 2026) ou contrat front month en cours. Data feed CME Level 1 + 2 obligatoire pour Footprint.",
      },
    ],
    related: ["configurer-sierra-chart-market-profile", "indicateurs-essentiels-sierra-chart", "comment-passer-evaluation-prop-firm"],
  },
  {
    slug: "trader-nasdaq-nq-debutant",
    title: "Trader le Nasdaq (NQ) : Guide pour Debutant",
    metaTitle:
      "Trader le Nasdaq Futures (NQ) Pour Debutants 2026 : Guide Complet",
    metaDescription:
      "Comment trader le Nasdaq E-mini Futures (NQ) en 2026 : tick size, volatilite, sessions, methode Market Profile. Guide debutant par les traders BASS.",
    category: "Marches",
    intro:
      "Le NQ (Nasdaq E-mini Futures) est le 2eme contrat futures le plus liquide apres l'ES. Plus volatil, plus rapide, et plus rentable — mais aussi plus dangereux pour les debutants. Voici comment l'aborder correctement.",
    steps: [
      {
        title: "Comprendre le contrat NQ",
        content:
          "NQ = E-mini Nasdaq-100 Futures. Tick size : 0.25 point = 5 USD. Tick value : 20 USD par point complet. Volatilite quotidienne moyenne : 200-400 points (vs 30-50 pour ES). Plus volatil = plus de mouvement = plus d'opportunites mais plus de risque.",
      },
      {
        title: "Le micro NQ (MNQ) : essentiel pour debuter",
        content:
          "MNQ = Micro Nasdaq. Tick = 0.50 USD. Pour 1 NQ = 10 MNQ en exposure. Avec la volatilite NQ, debuter directement en NQ est risque. Commence MNQ pendant 3-6 mois — meme apprentissage, 1/10e du risque.",
      },
      {
        title: "Volatilite et sizing NQ",
        content:
          "NQ peut bouger de 50 points en 5 minutes sur news. Stop loss minimum recommande : 30 ticks (30 x 5 USD = 150 USD/contrat). Si tu risques 1 % d'un compte 50K (500 USD), tu peux trader max 3 contrats avec stop 30 ticks. Sizing strict obligatoire.",
      },
      {
        title: "Les sessions NQ",
        content:
          "Idem ES (Globex 24/5). Mais le NQ est particulierement volatil pendant : (1) Open US 15:30-16:30 FR — volume + news. (2) Mid-day US 17:30-18:30 FR — souvent meilleure liquidite. (3) Close 21:30-22:00 FR — volume + volatilite. Eviter Asia open (23:00 FR) pour debutants.",
      },
      {
        title: "Les news specifiques NQ",
        content:
          "Le NQ est domine par les Magnificent 7 (AAPL, MSFT, GOOG, AMZN, META, NVDA, TSLA). Les earnings de ces companies (souvent apres 22:00 FR) bougent massivement le NQ. NVDA earnings = +/- 5 % du NQ instantane. Eviter de trader 1h avant/apres ces earnings sauf strategie dediee.",
      },
      {
        title: "La methode Market Profile sur NQ",
        content:
          "Identique a l'ES mais avec les niveaux NQ specifiques. Particularite NQ : volatilite plus forte = wicks plus marques sur les Naked POCs et les VAH/VAL. Le NQ tend a 'tester' les niveaux plus violemment puis a rebondir. Patience sur les entries — pas de rush.",
      },
      {
        title: "Couts de trading NQ",
        content:
          "Commissions identiques a l'ES en pourcentage. En prop firm Topstep/Apex : ~4.50 USD RT. La volatilite NQ rend les pertes plus rapides — risk management strict obligatoire avec x-trade.ai ou equivalent.",
      },
    ],
    tips: [
      "MNQ pendant minimum 3 mois avant de passer NQ — la volatilite peut detruire un compte rapidement",
      "Trade NQ pendant l'open US uniquement les 6 premiers mois",
      "Le NQ est correle a l'ES mais avec un beta de 1.3-1.5 — il bouge plus fort",
      "Ne JAMAIS trader le NQ pendant Tesla earnings sans preparation specifique",
      "Le NQ wicke 50 % plus que l'ES — stops larges ou stop tight + re-entry strategie",
    ],
    faq: [
      {
        question: "NQ ou ES pour debuter ?",
        answer:
          "ES pour debuter. Plus liquide, moins volatil, plus stable. Une fois maitre l'ES (apres 6-12 mois), tu peux ajouter le NQ. Beaucoup de traders pros tradent les deux en parallele car correle mais avec timing legerement different.",
      },
      {
        question: "Combien faut-il pour passer en prop firm sur NQ ?",
        answer:
          "Idem ES : Topstep 50K = 49 $/mois. Apex 50K = 147 $ one-time. La taille du compte est en USD nominal, pas specifique a un instrument. Tu peux trader ES et NQ sur le meme compte funded.",
      },
      {
        question: "Le NQ est-il manipule ?",
        answer:
          "Comme tout marche futures liquide, il y a du spoofing et de l'iceberg orders. Mais le CME a des regles strictes anti-manipulation. Le NQ est l'un des marches les MOINS manipules au monde grace a la regulation CFTC. Le 'feeling de manipulation' vient souvent d'une mauvaise comprehension de la microstructure.",
      },
    ],
    related: ["trader-es-mini-sp500-debutant", "configurer-sierra-chart-market-profile", "comment-passer-evaluation-prop-firm"],
  },
  {
    slug: "configurer-x-trade-ai-risk-management",
    title: "Configurer x-trade.ai : Risk Management Auto",
    metaTitle:
      "Configurer x-trade.ai 2026 : Risk Management Auto pour Prop Firms",
    metaDescription:
      "Guide complet pour configurer x-trade.ai en 2026 : Daily Loss Limit, Trailing Stop, Max Trades, Cooldown Timer. Outil dedie aux eleves BASS — coupe les positions automatiquement.",
    category: "Outils",
    intro:
      "x-trade.ai est l'outil de risk management automatique developpe par Sebastien Constant pour les eleves BASS. Il coupe automatiquement les positions quand tu depasses tes limites — eliminant 95 % des erreurs de discipline. Voici comment le configurer pour passer une eval prop firm.",
    steps: [
      {
        title: "Etape 1 : Acceder a x-trade.ai",
        content:
          "x-trade.ai est inclus a vie pour les eleves BASS Trading (mentorat ou seminaire Malaga). Login : x-trade.ai → connecter ton compte broker (Topstep, Apex, NinjaTrader Brokerage, AMP). API key generee dans le dashboard de la prop firm.",
      },
      {
        title: "Etape 2 : Configurer le Daily Loss Limit",
        content:
          "Premier parametre vital : Daily Loss Limit. Pour un compte Topstep 50K : DLL = 1 000 USD. x-trade.ai ferme TOUTES les positions et bloque les nouvelles entries des que ta perte cumulative atteint 80 % du DLL (= 800 USD pour Topstep 50K). Marge de securite vs le seuil reel.",
      },
      {
        title: "Etape 3 : Configurer le Trailing Daily Stop",
        content:
          "Trailing Daily Stop : protege les profits intra-journaliers. Si tu es +500 USD et que tu redescends a +200 USD (perte de 60 % du profit max), x-trade.ai ferme les positions. Empeche le 'donner ses gains' classique apres une bonne matinee.",
      },
      {
        title: "Etape 4 : Configurer Max Trades / Jour",
        content:
          "Max Trades per Day : 5 (recommande). Limite l'overtrading. Apres 5 trades dans la journee : nouvelles entries bloquees. Si tu fais 5 trades et que tu es en perte, x-trade.ai t'oblige a t'arreter — exactement ce que la discipline manuelle n'arrive jamais a faire.",
      },
      {
        title: "Etape 5 : Configurer Cooldown Timer",
        content:
          "Apres une perte : cooldown de 15-30 minutes obligatoire avant le prochain trade. Empeche le 'revenge trading' — la 1ere cause d'echec en eval. Pendant le cooldown : x-trade.ai bloque toute nouvelle entry, meme si tu cliques 'Buy' sur la plateforme.",
      },
      {
        title: "Etape 6 : Configurer Consecutive Losses Lock",
        content:
          "3 pertes consecutives = lock pour la journee. Apres 3 pertes d'affilee, x-trade.ai ferme tout et bloque jusqu'au lendemain. Tres protecteur — empeche les spirales emotionnelles. Un trader pro accepte de perdre 3 fois et de s'arreter — le debutant veut 'rattraper'.",
      },
      {
        title: "Etape 7 : Configurer Max Position Size",
        content:
          "Limite de taille par trade : 3 contrats max sur Topstep 50K (recommande). Empeche le sizing emotionnel. Si tu passes manuel a 5 contrats, x-trade.ai annule l'ordre. Discipline imposee = aucun risque de violation par sizing aggressif.",
      },
      {
        title: "Etape 8 : Tester en demo avant live",
        content:
          "Avant de connecter sur un compte funded, teste en demo Topstep ou Apex pendant 1-2 semaines. Verifie que les seuils sont bien configures, que les ordres sont bien annules quand depasses, que le cooldown fonctionne. Une mauvaise config peut couter cher.",
      },
    ],
    tips: [
      "Toujours mettre des seuils LEGEREMENT plus stricts que les regles de la prop firm (marge de securite)",
      "Active les notifications mobiles pour etre alerte des coupures auto",
      "Backup ta config x-trade.ai en JSON — peut etre re-importee sur nouveau compte",
      "Le mode 'eval mode' est plus strict que le mode 'funded' — utilise-le pendant l'evaluation",
      "Combine avec un journal de trading pour tracer les coupures auto et identifier les patterns",
    ],
    faq: [
      {
        question: "x-trade.ai est-il compatible avec toutes les prop firms ?",
        answer:
          "Compatible avec : Topstep, Apex Trader Funding, Bulenox, MFFU, Take Profit Trader, Fast Track Trading (toutes les prop firms Futures via Rithmic ou Tradovate). FTMO/FundedNext (Forex/CFD via MT4/MT5) en cours d'integration.",
      },
      {
        question: "Combien coute x-trade.ai ?",
        answer:
          "x-trade.ai PRO est inclus a vie pour les eleves du mentorat BASS Trading et les participants au seminaire Malaga. Pour le grand public : abonnement mensuel 49-99 USD selon plan. Voir x-trade.ai pour les details.",
      },
      {
        question: "x-trade.ai peut-il vraiment empecher les violations ?",
        answer:
          "Oui dans 99 % des cas. Les rares violations restantes sont dues a : (1) gap d'ouverture (inevitable), (2) news majeure pendant lock (rare), (3) bug technique broker (tres rare). En usage normal, x-trade.ai elimine les violations comportementales — qui represent 95 % des echecs prop firm.",
      },
    ],
    related: ["comment-passer-evaluation-prop-firm", "configurer-sierra-chart-market-profile", "indicateurs-essentiels-sierra-chart"],
  },
];

export function getTutorielBySlug(slug: string) {
  return tutoriels.find((t) => t.slug === slug);
}
