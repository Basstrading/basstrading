export interface VilleData {
  slug: string;
  ville: string;
  region: string;
  regionCode: string;
  intro: string;
  shortDesc: string;
  financement: string;
  testimonial: { text: string; author: string };
  // Champs optionnels pour villes prioritaires — boost contenu unique SEO
  economicContext?: string;
  whyTrade?: string;
}

export const villes: VilleData[] = [
  {
    slug: "paris",
    ville: "Paris",
    region: "Île-de-France",
    regionCode: "IDF",
    shortDesc: "Capitale financière — Euronext, La Défense, communauté de traders en expansion.",
    intro:
      "Paris concentre la majorité de l\u2019activité financière française. Entre Euronext, les desks de trading de La Défense et une communauté de traders indépendants en pleine expansion, c\u2019est ici que les ambitions se transforment en résultats. Mais la proximité avec les marchés ne suffit pas — il faut la bonne méthode.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour l\u2019Île-de-France : dispositif AIF (Aide Individuelle à la Formation) accessible. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l\u2019apprentissage dans une ambiance incroyable. La qualité de l\u2019enseignement de Bass est remarquable et remarquée. Merci pour tout.",
      author: "Laurent Ouanich",
    },
    economicContext:
      "Paris est la première place financière française et la troisième européenne après Londres et Francfort. Le quartier de La Défense concentre les desks de trading des grandes banques (BNP Paribas, Société Générale, Crédit Agricole CIB), les filiales françaises des américaines (Goldman Sachs, JPMorgan), et plus de 180 000 emplois dans la finance. Euronext Paris cote plus de 800 sociétés et héberge le CAC 40, le SBF 120 et l\u2019indice MSCI France. Le bassin parisien représente 30 % du PIB français — la liquidité, les opportunités et la culture trading y sont uniques.",
    whyTrade:
      "Se former au trading à Paris a un avantage structurel : densité d\u2019événements professionnels (conférences AMF, salons trading, meetups DAX/ES), accès aux brokers Futures réglementés AMF, communauté de prop firm traders active. Pour les Parisiens en reconversion, l\u2019AIF Île-de-France complète le CPF jusqu\u2019à zéro reste à charge. Sébastien Constant organise les sessions parisiennes en présentiel intensif sur 3-4 jours, dans des espaces de coworking centraux (75008, 75009, 75017).",
  },
  {
    slug: "lyon",
    ville: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    regionCode: "AURA",
    shortDesc: "Capitale économique du sud-est — tissu entrepreneurial dense, communauté tech.",
    intro:
      "Lyon est la capitale économique du sud-est, avec un tissu entrepreneurial dense et une communauté tech en forte croissance. De Confluence à la Part-Dieu, les traders lyonnais cherchent à se professionnaliser — avec des outils que les formations classiques n\u2019enseignent pas.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la région AURA : dispositif CARED (Contrat d\u2019Aide et de Retour à l\u2019Emploi Durable) et pass région formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au séminaire à Malaga. Bass est une personne fort sympathique et bon pédagogue, fort d\u2019avoir établi une belle communauté. Nous avons pu ressentir un réel mérite à son apprentissage.",
      author: "Lorton",
    },
    economicContext:
      "Lyon est la deuxième aire urbaine de France avec 2,3 millions d\u2019habitants. Son écosystème économique repose sur un tissu de PME industrielles, un pôle bancaire historique (Crédit Lyonnais devenu LCL, Caisse d\u2019Épargne Rhône-Alpes), et une communauté tech parmi les plus actives du pays (French Tech Lyon). La Part-Dieu est le 2e quartier d\u2019affaires français après La Défense, avec 80 000 emplois tertiaires. Lyon abrite aussi de nombreux family offices et gérants indépendants — un pôle naturel pour les traders qui veulent professionnaliser leur activité.",
    whyTrade:
      "Trader depuis Lyon offre un équilibre rare : proximité des grands centres financiers (3 h de Paris en TGV, 2 h de Genève), qualité de vie supérieure, coûts immobiliers raisonnables. Pour les Lyonnais en reconversion, le dispositif CARED de la région AURA finance jusqu\u2019à 100 % les formations qualifiantes en trading. Le pass formation région permet de cumuler avec le CPF. Sébastien Constant organise les sessions lyonnaises en présentiel à Confluence ou à la Part-Dieu, dans des espaces de coworking équipés écran-clavier-data feed.",
  },
  {
    slug: "marseille",
    ville: "Marseille",
    region: "Provence-Alpes-Côte d\u2019Azur",
    regionCode: "PACA",
    shortDesc: "Porte sur la Méditerranée — profils atypiques, entrepreneurs, reconvertis.",
    intro:
      "Marseille, première porte sur la Méditerranée, attire des profils atypiques — entrepreneurs, indépendants, reconvertis — qui veulent maîtriser les marchés sans passer par les circuits traditionnels. L\u2019énergie de la ville se retrouve dans l\u2019approche directe du mentorat BASS.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la région PACA : dispositif ARES (Aide Régionale à l\u2019Emploi et aux Stages) et chéquier formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Rencontré à un séminaire, Bass est un très bon formateur et une très bonne personne, bienveillant. Je vous recommande sa formation pour compléter vos connaissances en bourse ou même pour commencer dans ce domaine.",
      author: "Va Fr",
    },
    economicContext:
      "Marseille est la deuxième commune de France et le premier port méditerranéen pour les conteneurs. Son économie s\u2019articule autour du Grand Port Maritime, de l\u2019industrie maritime/logistique et d\u2019un pôle digital en forte croissance (The Camp, Aix-Marseille French Tech). La place financière y est moins dense qu\u2019à Paris ou Lyon, mais une communauté significative de traders indépendants opère depuis Marseille — souvent avec un profil entrepreneurial atypique : reconvertis du shipping, du commerce, des professions libérales. La proximité de Monaco (1 h 30) ouvre aussi des opportunités d\u2019asset management.",
    whyTrade:
      "Trader depuis Marseille offre un avantage géographique : fuseau horaire européen idéal pour les séances US (ouverture NYSE 15 h 30 heure française), coût de la vie inférieur de 30 % à Paris, ensoleillement qui réduit le burn-out hivernal des traders intraday. Pour les Marseillais en reconversion, le dispositif ARES finance jusqu\u2019à 4 000 € les formations professionnalisantes. Le chéquier formation PACA complète le CPF. Sébastien Constant organise les sessions marseillaises en présentiel intensif au Vieux-Port ou dans le 2e arrondissement.",
  },
  {
    slug: "toulouse",
    ville: "Toulouse",
    region: "Occitanie",
    regionCode: "OCC",
    shortDesc: "Capitale aéronautique — ingénieurs et profils analytiques exigeants.",
    intro:
      "Toulouse, capitale aéronautique et spatiale, abrite des ingénieurs et des profils analytiques qui comprennent la rigueur. Le trading institutionnel demande cette même précision — analyser les données, pas suivre des indicateurs. La communauté de traders toulousains est discrète mais ambitieuse.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour l\u2019Occitanie : dispositif Qualif Pro et aide régionale à la formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l\u2019apprentissage dans une ambiance incroyable. La qualité de l\u2019enseignement de Bass est remarquable et remarquée. Merci pour tout.",
      author: "Laurent Ouanich",
    },
    economicContext:
      "Toulouse, capitale de l\u2019aéronautique et de l\u2019espatial avec Airbus, ATR, Thales Alenia Space et le CNES, abrite plus de 35 000 ingénieurs. Quatrième aire urbaine de France avec 1,5 million d\u2019habitants. La culture analytique y est dominante : ingénieurs, mathématiciens appliqués, profils data. C\u2019est un terrain naturellement fertile pour le trading systématique et quantitatif. Le pôle French Tech Toulouse compte plus de 600 startups et un fond d\u2019investissement régional actif (IRDI Capital Investissement).",
    whyTrade:
      "Pour les profils analytiques toulousains, le trading institutionnel est une extension naturelle de leur formation initiale. La rigueur acquise en école d\u2019ingénieur (ENAC, ISAE-SUPAERO, INSA Toulouse) s\u2019applique directement à la lecture du Market Profile et de l\u2019Order Flow — méthodes basées sur la donnée, pas sur l\u2019intuition. Le dispositif Qualif Pro Occitanie finance les formations qualifiantes jusqu\u2019à 3 000 €. Sébastien Constant organise les sessions toulousaines au cœur du quartier Compans-Caffarelli ou à Saint-Cyprien.",
  },
  {
    slug: "bordeaux",
    ville: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    regionCode: "NAQ",
    shortDesc: "Qualité de vie et ambition — entrepreneurs et cadres en quête d\u2019un edge.",
    intro:
      "Bordeaux attire entrepreneurs et cadres en quête de qualité de vie sans sacrifier leurs ambitions professionnelles. Le trading depuis Bordeaux, c\u2019est possible — à condition d\u2019avoir les bons outils. Pas des indicateurs retardés, mais la lecture du flux institutionnel en temps réel.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Nouvelle-Aquitaine : dispositif Qualif Emploi et aide individuelle régionale. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au séminaire à Malaga. Bass est une personne fort sympathique et bon pédagogue, fort d\u2019avoir établi une belle communauté. Nous avons pu ressentir un réel mérite à son apprentissage.",
      author: "Lorton",
    },
    economicContext:
      "Bordeaux a connu une transformation économique majeure ces dix dernières années avec l\u2019arrivée de la LGV (Paris-Bordeaux en 2 h) et l\u2019afflux de cadres et d\u2019entrepreneurs cherchant qualité de vie et opportunités. La métropole bordelaise concentre 800 000 habitants et plus de 300 startups (Bordeaux French Tech). Le secteur du conseil, de l\u2019immobilier et des family offices y est en forte croissance — une concentration naturelle de patrimoines à investir et de profils orientés performance. La proximité avec La Rochelle, Bayonne et le Pays Basque élargit le bassin de recrutement.",
    whyTrade:
      "Trader depuis Bordeaux combine qualité de vie et infrastructure : 2 h de Paris en TGV, accès direct aux principaux brokers Futures réglementés AMF, communauté trading discrète mais solide via les meetups Bordeaux Investment & Trading. Pour les Bordelais en reconversion, le dispositif Qualif Emploi Nouvelle-Aquitaine finance jusqu\u2019à 3 500 € les formations qualifiantes. Sébastien Constant organise les sessions bordelaises en présentiel intensif aux Quais de Paludate ou aux Bassins à Flot.",
  },
  {
    slug: "lille",
    ville: "Lille",
    region: "Hauts-de-France",
    regionCode: "HDF",
    shortDesc: "Carrefour européen — à 1h de Paris, Londres et Bruxelles.",
    intro:
      "Lille, à 1h de Paris, Londres et Bruxelles, est un carrefour européen où l\u2019accès aux marchés financiers est naturel. Les traders lillois cherchent une méthode solide pour se différencier — pas un énième cours sur le RSI, mais une compréhension réelle de la structure du marché.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour les Hauts-de-France : dispositif AIRE (Aide Individuelle Régionale vers l\u2019Emploi) et pass formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Rencontré à un séminaire, Bass est un très bon formateur et une très bonne personne, bienveillant. Je vous recommande sa formation pour compléter vos connaissances en bourse ou même pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "nantes",
    ville: "Nantes",
    region: "Pays de la Loire",
    regionCode: "PDL",
    shortDesc: "Métropole dynamique de l\u2019Ouest — numérique, entrepreneuriat, pragmatisme.",
    intro:
      "Nantes, métropole dynamique de l\u2019Ouest, voit émerger une nouvelle génération de traders indépendants. Entre le numérique et l\u2019entrepreneuriat, les Nantais veulent des outils concrets — pas de la théorie. Le Market Profile et l\u2019Order Flow répondent à cette exigence de pragmatisme.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour les Pays de la Loire : dispositif Visa Métiers et aide régionale à la formation continue. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l\u2019apprentissage dans une ambiance incroyable. La qualité de l\u2019enseignement de Bass est remarquable et remarquée. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "strasbourg",
    ville: "Strasbourg",
    region: "Grand Est",
    regionCode: "GES",
    shortDesc: "Capitale européenne — croisée France-Allemagne, culture financière riche.",
    intro:
      "Strasbourg, capitale européenne, offre une perspective unique sur les marchés. À la croisée de la France et de l\u2019Allemagne, les traders strasbourgeois ont accès à une culture financière riche. Il leur manque souvent l\u2019outil décisif : la lecture du flux d\u2019ordres institutionnel.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour le Grand Est : dispositif Form\u2019Avenir et chéquier formation régional. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au séminaire à Malaga. Bass est une personne fort sympathique et bon pédagogue, fort d\u2019avoir établi une belle communauté. Nous avons pu ressentir un réel mérite à son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "nice",
    ville: "Nice",
    region: "Provence-Alpes-Côte d\u2019Azur",
    regionCode: "PACA",
    shortDesc: "Côte d\u2019Azur — hub discret de traders sérieux entre mer et finance.",
    intro:
      "Nice, entre mer et finance, attire des traders qui veulent combiner cadre de vie exceptionnel et performance sur les marchés. La Côte d\u2019Azur n\u2019est pas qu\u2019une destination vacances — c\u2019est un hub discret de traders sérieux qui cherchent l\u2019edge institutionnel.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la région PACA : dispositif ARES et chéquier formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Rencontré à un séminaire, Bass est un très bon formateur et une très bonne personne, bienveillant. Je vous recommande sa formation pour compléter vos connaissances en bourse ou même pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "montpellier",
    ville: "Montpellier",
    region: "Occitanie",
    regionCode: "OCC",
    shortDesc: "Ville jeune et tech — profils analytiques issus de l\u2019écosystème startup.",
    intro:
      "Montpellier, ville jeune et en pleine croissance, voit sa communauté de traders s\u2019étoffer chaque année. L\u2019écosystème tech et startup montpelliérain produit des profils analytiques qui comprennent vite la valeur du Market Profile et de l\u2019Order Flow face aux méthodes classiques.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour l\u2019Occitanie : dispositif Qualif Pro et aide régionale à la formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l\u2019apprentissage dans une ambiance incroyable. La qualité de l\u2019enseignement de Bass est remarquable et remarquée. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "rennes",
    ville: "Rennes",
    region: "Bretagne",
    regionCode: "BRE",
    shortDesc: "Hub numérique breton — rigueur et méthode structurée.",
    intro:
      "Rennes, hub numérique de la Bretagne, forme des profils techniques qui s\u2019orientent de plus en plus vers le trading. La rigueur bretonne se marie bien avec l\u2019approche BASS : pas de raccourcis, pas de promesses, juste une méthode structurée basée sur les données réelles du marché.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Bretagne : dispositif QUALIF Emploi et chéquier formation Bretagne. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au séminaire à Malaga. Bass est une personne fort sympathique et bon pédagogue, fort d\u2019avoir établi une belle communauté. Nous avons pu ressentir un réel mérite à son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "grenoble",
    ville: "Grenoble",
    region: "Auvergne-Rhône-Alpes",
    regionCode: "AURA",
    shortDesc: "Capitale des Alpes — ingénieurs et scientifiques habitués à la donnée.",
    intro:
      "Grenoble, capitale des Alpes et berceau de l\u2019innovation technologique, produit des ingénieurs et des scientifiques habitués à la donnée. Le trading par Market Profile et Order Flow parle leur langage : structure, volume, probabilités — pas des patterns subjectifs.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la région AURA : dispositif CARED et pass région formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Rencontré à un séminaire, Bass est un très bon formateur et une très bonne personne, bienveillant. Je vous recommande sa formation pour compléter vos connaissances en bourse ou même pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "toulon",
    ville: "Toulon",
    region: "Provence-Alpes-Côte d\u2019Azur",
    regionCode: "PACA",
    shortDesc: "Base navale et littoral — militaires en reconversion, indépendants déterminés.",
    intro:
      "Toulon, entre base navale et littoral méditerranéen, abrite une communauté de traders discrets mais déterminés. Militaires en reconversion, cadres du secteur maritime, indépendants — tous partagent le même objectif : une méthode qui fonctionne sur les marchés réels, pas en théorie.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la région PACA : dispositif ARES et chéquier formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l\u2019apprentissage dans une ambiance incroyable. La qualité de l\u2019enseignement de Bass est remarquable et remarquée. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "aix-en-provence",
    ville: "Aix-en-Provence",
    region: "Provence-Alpes-Côte d\u2019Azur",
    regionCode: "PACA",
    shortDesc: "Ville universitaire du sud — profils éduqués en quête de l\u2019étape suivante.",
    intro:
      "Aix-en-Provence, ville universitaire et économique du sud, allie qualité de vie et ambition. Les traders aixois sont souvent des profils éduqués qui ont testé les indicateurs classiques et cherchent maintenant l\u2019étape suivante — comprendre la mécanique réelle du marché.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la région PACA : dispositif ARES et chéquier formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au séminaire à Malaga. Bass est une personne fort sympathique et bon pédagogue, fort d\u2019avoir établi une belle communauté. Nous avons pu ressentir un réel mérite à son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "rouen",
    ville: "Rouen",
    region: "Normandie",
    regionCode: "NOR",
    shortDesc: "À 1h de Paris — mêmes outils institutionnels, coût de vie accessible.",
    intro:
      "Rouen, à 1h de Paris, offre un cadre de vie accessible sans sacrifier la proximité avec les centres financiers. Les traders rouennais veulent les mêmes outils que les professionnels parisiens — Market Profile, Order Flow, Gamma — sans le prix de la vie francilienne.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Normandie : dispositif Qualif Individuel et aide régionale à la formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Rencontré à un séminaire, Bass est un très bon formateur et une très bonne personne, bienveillant. Je vous recommande sa formation pour compléter vos connaissances en bourse ou même pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "dijon",
    ville: "Dijon",
    region: "Bourgogne-Franche-Comté",
    regionCode: "BFC",
    shortDesc: "Patrimoine et rigueur — traders en quête d\u2019une méthode professionnelle.",
    intro:
      "Dijon, au cœur de la Bourgogne, est une ville de patrimoine et de rigueur. Les traders dijonnais qui ont dépassé le stade débutant cherchent une méthode professionnelle — pas un autre cours sur les moyennes mobiles, mais une lecture structurée du marché comme les institutionnels.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Bourgogne-Franche-Comté : dispositif PRIC (Programme Régional d\u2019Intérêt Collectif) et aide individuelle. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l\u2019apprentissage dans une ambiance incroyable. La qualité de l\u2019enseignement de Bass est remarquable et remarquée. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "angers",
    ville: "Angers",
    region: "Pays de la Loire",
    regionCode: "PDL",
    shortDesc: "Première ville où il fait bon vivre — trading sérieux, cadre optimal.",
    intro:
      "Angers, première ville où il fait bon vivre en France, attire ceux qui veulent construire une activité de trading sérieuse dans un cadre de vie optimal. La méthode BASS s\u2019adresse à ceux qui veulent plus que des indicateurs — une compréhension complète de la structure du marché.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour les Pays de la Loire : dispositif Visa Métiers et aide régionale à la formation continue. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au séminaire à Malaga. Bass est une personne fort sympathique et bon pédagogue, fort d\u2019avoir établi une belle communauté. Nous avons pu ressentir un réel mérite à son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "reims",
    ville: "Reims",
    region: "Grand Est",
    regionCode: "GES",
    shortDesc: "À 45 min de Paris en TGV — proximité parisienne, coût de vie réduit.",
    intro:
      "Reims, ville du champagne et de l\u2019industrie, est à 45 minutes de Paris en TGV. Les traders rémois bénéficient de la proximité parisienne sans le coût de la vie. Ce qu\u2019il leur faut : une formation qui enseigne les vrais outils du trading institutionnel — pas les indicateurs grand public.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour le Grand Est : dispositif Form\u2019Avenir et chéquier formation régional. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Rencontré à un séminaire, Bass est un très bon formateur et une très bonne personne, bienveillant. Je vous recommande sa formation pour compléter vos connaissances en bourse ou même pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "nimes",
    ville: "Nîmes",
    region: "Occitanie",
    regionCode: "OCC",
    shortDesc: "Entre Provence et Languedoc — traders indépendants en quête de structure.",
    intro:
      "Nîmes, entre Provence et Languedoc, est une ville de caractère où les traders indépendants cherchent à se structurer. Le trading n\u2019est pas réservé à Paris — avec les bons outils (Market Profile, Order Flow, Gamma), on trade aussi bien depuis Nîmes que depuis La Défense.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour l\u2019Occitanie : dispositif Qualif Pro et aide régionale à la formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l\u2019apprentissage dans une ambiance incroyable. La qualité de l\u2019enseignement de Bass est remarquable et remarquée. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "le-havre",
    ville: "Le Havre",
    region: "Normandie",
    regionCode: "NOR",
    shortDesc: "Premier port français — ville de flux, commerce et échanges internationaux.",
    intro:
      "Le Havre, premier port français, est une ville de commerce et d\u2019échanges internationaux. Les traders havrais comprennent les flux — de marchandises comme de capitaux. La méthode BASS prolonge cette logique : lire les flux d\u2019ordres réels pour anticiper les mouvements de prix.",
    financement:
      "Éligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Normandie : dispositif Qualif Individuel et aide régionale à la formation. Reste à charge possible : 0\u00a0€.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au séminaire à Malaga. Bass est une personne fort sympathique et bon pédagogue, fort d\u2019avoir établi une belle communauté. Nous avons pu ressentir un réel mérite à son apprentissage.",
      author: "Lorton",
    },
  },
];

export function getVilleBySlug(slug: string): VilleData | undefined {
  return villes.find((v) => v.slug === slug);
}

export function getAllVilleSlugs(): string[] {
  return villes.map((v) => v.slug);
}
