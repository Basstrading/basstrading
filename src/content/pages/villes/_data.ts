export interface VilleData {
  slug: string;
  ville: string;
  region: string;
  regionCode: string;
  intro: string;
  financement: string;
  testimonial: { text: string; author: string };
}

export const villes: VilleData[] = [
  {
    slug: "paris",
    ville: "Paris",
    region: "Ile-de-France",
    regionCode: "IDF",
    intro:
      "Paris concentre la majorite de l'activite financiere francaise. Entre Euronext, les desks de trading de La Defense et une communaute de traders independants en pleine expansion, c'est ici que les ambitions se transforment en resultats. Mais la proximite avec les marches ne suffit pas — il faut la bonne methode.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour l'Ile-de-France : dispositif AIF (Aide Individuelle a la Formation) accessible. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "lyon",
    ville: "Lyon",
    region: "Auvergne-Rhone-Alpes",
    regionCode: "AURA",
    intro:
      "Lyon est la capitale economique du sud-est, avec un tissu entrepreneurial dense et une communaute tech en forte croissance. De Confluence a la Part-Dieu, les traders lyonnais cherchent a se professionnaliser — avec des outils que les formations classiques n'enseignent pas.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la region AURA : dispositif CARED (Contrat d'Aide et de Retour a l'Emploi Durable) et pass region formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "marseille",
    ville: "Marseille",
    region: "Provence-Alpes-Cote d'Azur",
    regionCode: "PACA",
    intro:
      "Marseille, premiere porte sur la Mediterranee, attire des profils atypiques — entrepreneurs, independants, reconvertis — qui veulent maitriser les marches sans passer par les circuits traditionnels. L'energie de la ville se retrouve dans l'approche directe du mentorat BASS.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la region PACA : dispositif ARES (Aide Regionale a l'Emploi et aux Stages) et chequier formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Rencontre a un seminaire, Bass est un tres bon formateur et une tres bonne personne, bienveillant. Je vous recommande sa formation pour completer vos connaissances en bourse ou meme pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "toulouse",
    ville: "Toulouse",
    region: "Occitanie",
    regionCode: "OCC",
    intro:
      "Toulouse, capitale aeronautique et spatiale, abrite des ingenieurs et des profils analytiques qui comprennent la rigueur. Le trading institutionnel demande cette meme precision — analyser les donnees, pas suivre des indicateurs. La communaute de traders toulousains est discrete mais ambitieuse.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour l'Occitanie : dispositif Qualif Pro et aide regionale a la formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "bordeaux",
    ville: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    regionCode: "NAQ",
    intro:
      "Bordeaux attire entrepreneurs et cadres en quete de qualite de vie sans sacrifier leurs ambitions professionnelles. Le trading depuis Bordeaux, c'est possible — a condition d'avoir les bons outils. Pas des indicateurs retardes, mais la lecture du flux institutionnel en temps reel.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Nouvelle-Aquitaine : dispositif Qualif Emploi et aide individuelle regionale. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "lille",
    ville: "Lille",
    region: "Hauts-de-France",
    regionCode: "HDF",
    intro:
      "Lille, a 1h de Paris, Londres et Bruxelles, est un carrefour europeen ou l'acces aux marches financiers est naturel. Les traders lillois cherchent une methode solide pour se differencier — pas un enieme cours sur le RSI, mais une comprehension reelle de la structure du marche.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour les Hauts-de-France : dispositif AIRE (Aide Individuelle Regionale vers l'Emploi) et pass formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Rencontre a un seminaire, Bass est un tres bon formateur et une tres bonne personne, bienveillant. Je vous recommande sa formation pour completer vos connaissances en bourse ou meme pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "nantes",
    ville: "Nantes",
    region: "Pays de la Loire",
    regionCode: "PDL",
    intro:
      "Nantes, metropole dynamique de l'Ouest, voit emerger une nouvelle generation de traders independants. Entre le numerique et l'entrepreneuriat, les Nantais veulent des outils concrets — pas de la theorie. Le Market Profile et l'Order Flow repondent a cette exigence de pragmatisme.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour les Pays de la Loire : dispositif Visa Metiers et aide regionale a la formation continue. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "strasbourg",
    ville: "Strasbourg",
    region: "Grand Est",
    regionCode: "GES",
    intro:
      "Strasbourg, capitale europeenne, offre une perspective unique sur les marches. A la croisee de la France et de l'Allemagne, les traders strasbourgeois ont acces a une culture financiere riche. Il leur manque souvent l'outil decisif : la lecture du flux d'ordres institutionnel.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour le Grand Est : dispositif Form'Avenir et chequier formation regional. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "nice",
    ville: "Nice",
    region: "Provence-Alpes-Cote d'Azur",
    regionCode: "PACA",
    intro:
      "Nice, entre mer et finance, attire des traders qui veulent combiner cadre de vie exceptionnel et performance sur les marches. La Cote d'Azur n'est pas qu'une destination vacances — c'est un hub discret de traders serieux qui cherchent l'edge institutionnel.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la region PACA : dispositif ARES et chequier formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Rencontre a un seminaire, Bass est un tres bon formateur et une tres bonne personne, bienveillant. Je vous recommande sa formation pour completer vos connaissances en bourse ou meme pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "montpellier",
    ville: "Montpellier",
    region: "Occitanie",
    regionCode: "OCC",
    intro:
      "Montpellier, ville jeune et en pleine croissance, voit sa communaute de traders s'etoffer chaque annee. L'ecosysteme tech et startup montpellierain produit des profils analytiques qui comprennent vite la valeur du Market Profile et de l'Order Flow face aux methodes classiques.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour l'Occitanie : dispositif Qualif Pro et aide regionale a la formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "rennes",
    ville: "Rennes",
    region: "Bretagne",
    regionCode: "BRE",
    intro:
      "Rennes, hub numerique de la Bretagne, forme des profils techniques qui s'orientent de plus en plus vers le trading. La rigueur bretonne se marie bien avec l'approche BASS : pas de raccourcis, pas de promesses, juste une methode structuree basee sur les donnees reelles du marche.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Bretagne : dispositif QUALIF Emploi et chequier formation Bretagne. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "grenoble",
    ville: "Grenoble",
    region: "Auvergne-Rhone-Alpes",
    regionCode: "AURA",
    intro:
      "Grenoble, capitale des Alpes et berceau de l'innovation technologique, produit des ingenieurs et des scientifiques habitues a la donnee. Le trading par Market Profile et Order Flow parle leur langage : structure, volume, probabilites — pas des patterns subjectifs.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la region AURA : dispositif CARED et pass region formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Rencontre a un seminaire, Bass est un tres bon formateur et une tres bonne personne, bienveillant. Je vous recommande sa formation pour completer vos connaissances en bourse ou meme pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "toulon",
    ville: "Toulon",
    region: "Provence-Alpes-Cote d'Azur",
    regionCode: "PACA",
    intro:
      "Toulon, entre base navale et littoral mediterraneen, abrite une communaute de traders discrets mais determines. Militaires en reconversion, cadres du secteur maritime, independants — tous partagent le meme objectif : une methode qui fonctionne sur les marches reels, pas en theorie.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la region PACA : dispositif ARES et chequier formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "aix-en-provence",
    ville: "Aix-en-Provence",
    region: "Provence-Alpes-Cote d'Azur",
    regionCode: "PACA",
    intro:
      "Aix-en-Provence, ville universitaire et economique du sud, allie qualite de vie et ambition. Les traders aixois sont souvent des profils eduques qui ont teste les indicateurs classiques et cherchent maintenant l'etape suivante — comprendre la mecanique reelle du marche.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la region PACA : dispositif ARES et chequier formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "rouen",
    ville: "Rouen",
    region: "Normandie",
    regionCode: "NOR",
    intro:
      "Rouen, a 1h de Paris, offre un cadre de vie accessible sans sacrifier la proximite avec les centres financiers. Les traders rouennais veulent les memes outils que les professionnels parisiens — Market Profile, Order Flow, Gamma — sans le prix de la vie francilienne.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Normandie : dispositif Qualif Individuel et aide regionale a la formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Rencontre a un seminaire, Bass est un tres bon formateur et une tres bonne personne, bienveillant. Je vous recommande sa formation pour completer vos connaissances en bourse ou meme pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "dijon",
    ville: "Dijon",
    region: "Bourgogne-Franche-Comte",
    regionCode: "BFC",
    intro:
      "Dijon, au coeur de la Bourgogne, est une ville de patrimoine et de rigueur. Les traders dijonnais qui ont depasse le stade debutant cherchent une methode professionnelle — pas un autre cours sur les moyennes mobiles, mais une lecture structuree du marche comme les institutionnels.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Bourgogne-Franche-Comte : dispositif PRIC (Programme Regional d'Interet Collectif) et aide individuelle. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "angers",
    ville: "Angers",
    region: "Pays de la Loire",
    regionCode: "PDL",
    intro:
      "Angers, premiere ville ou il fait bon vivre en France, attire ceux qui veulent construire une activite de trading serieuse dans un cadre de vie optimal. La methode BASS s'adresse a ceux qui veulent plus que des indicateurs — une comprehension complete de la structure du marche.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour les Pays de la Loire : dispositif Visa Metiers et aide regionale a la formation continue. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage.",
      author: "Lorton",
    },
  },
  {
    slug: "reims",
    ville: "Reims",
    region: "Grand Est",
    regionCode: "GES",
    intro:
      "Reims, ville du champagne et de l'industrie, est a 45 minutes de Paris en TGV. Les traders remois beneficient de la proximite parisienne sans le cout de la vie. Ce qu'il leur faut : une formation qui enseigne les vrais outils du trading institutionnel — pas les indicateurs grand public.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour le Grand Est : dispositif Form'Avenir et chequier formation regional. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Rencontre a un seminaire, Bass est un tres bon formateur et une tres bonne personne, bienveillant. Je vous recommande sa formation pour completer vos connaissances en bourse ou meme pour commencer dans ce domaine.",
      author: "Va Fr",
    },
  },
  {
    slug: "nimes",
    ville: "Nimes",
    region: "Occitanie",
    regionCode: "OCC",
    intro:
      "Nimes, entre Provence et Languedoc, est une ville de caractere ou les traders independants cherchent a se structurer. Le trading n'est pas reserve a Paris — avec les bons outils (Market Profile, Order Flow, Gamma), on trade aussi bien depuis Nimes que depuis La Defense.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour l'Occitanie : dispositif Qualif Pro et aide regionale a la formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Un stage intensif et immersif en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee. Merci pour tout.",
      author: "Laurent Ouanich",
    },
  },
  {
    slug: "le-havre",
    ville: "Le Havre",
    region: "Normandie",
    regionCode: "NOR",
    intro:
      "Le Havre, premier port francais, est une ville de commerce et d'echanges internationaux. Les traders havrais comprennent les flux — de marchandises comme de capitaux. La methode BASS prolonge cette logique : lire les flux d'ordres reels pour anticiper les mouvements de prix.",
    financement:
      "Eligible CPF via EMSCA (Qualiopi). Financement France Travail disponible. Pour la Normandie : dispositif Qualif Individuel et aide regionale a la formation. Reste a charge possible : 0 euros.",
    testimonial: {
      text: "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage.",
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
