export default function ScalpingFutures() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que le scalping Futures ?</h2>
      <p>Le scalping Futures est un style de trading ultra-court terme qui consiste &agrave; capturer de petits mouvements de prix — g&eacute;n&eacute;ralement entre 2 et 10 ticks — sur les contrats &agrave; terme n&eacute;goci&eacute;s au CME (Chicago Mercantile Exchange). Un scalper ouvre et ferme ses positions en quelques secondes &agrave; quelques minutes. L&apos;objectif n&apos;est pas de pr&eacute;dire une tendance, mais de <strong>lire le flux d&apos;ordres en temps r&eacute;el</strong> et d&apos;exploiter les d&eacute;s&eacute;quilibres micro-structurels du march&eacute;.</p>

      <p>Contrairement au swing trading ou au day trading classique qui s&apos;appuient sur des patterns graphiques et des indicateurs retard&eacute;s, le scalping trading repose sur la lecture directe de ce qui se passe dans le carnet d&apos;ordres, le Footprint et le Tape. Vous ne regardez pas ce que le prix a fait. Vous regardez ce que les participants font <strong>maintenant</strong>.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Le scalping n&apos;est pas du clic rapide</h4>
        <p>Beaucoup confondent scalping et &quot;trading rapide&quot;. Le scalping professionnel est une discipline m&eacute;thodique o&ugrave; chaque entr&eacute;e est justifi&eacute;e par un signal d&apos;Order Flow pr&eacute;cis : une absorption, un d&eacute;s&eacute;quilibre, un shift de delta. La vitesse d&apos;ex&eacute;cution est une cons&eacute;quence, pas un objectif. La pr&eacute;cision prime toujours sur la fr&eacute;quence.</p>
      </div>

      <p>Apr&egrave;s plus de 10 ans de trading sur les Futures CME, je peux affirmer que le scalping est le style qui offre le meilleur ratio progression/temps de march&eacute; — &agrave; condition d&apos;utiliser les bons outils et de comprendre la microstructure. C&apos;est ce que nous allons d&eacute;tailler dans ce guide.</p>

      <hr />

      <h2 id="pourquoi-futures">Pourquoi les Futures sont le meilleur march&eacute; pour scalper</h2>
      <p>Si vous faites du scalping intraday, le choix du march&eacute; est d&eacute;terminant. Les Futures r&eacute;gul&eacute;s du CME offrent des avantages structurels qu&apos;aucun autre march&eacute; ne peut &eacute;galer pour un scalper.</p>

      <h3>Carnet d&apos;ordres centralis&eacute; et transparent</h3>
      <p>Sur le CME, toutes les transactions passent par un carnet centralis&eacute;. Chaque ordre limit&eacute;, chaque ex&eacute;cution, chaque annulation est visible. Il n&apos;y a pas de dark pools, pas de market makers cach&eacute;s, pas d&apos;internalisation des ordres comme sur le Forex ou les CFD. Quand vous lisez le <a href="/blog/carnet-ordres-dom-futures/">DOM sur les Futures</a>, vous voyez la r&eacute;alit&eacute; du march&eacute;.</p>

      <h3>Liquidit&eacute; &eacute;norme et spreads serr&eacute;s</h3>
      <p>L&apos;ES (E-mini S&amp;P 500) traite plus de 1,5 million de contrats par jour. Le NQ (E-mini Nasdaq 100) d&eacute;passe r&eacute;guli&egrave;rement les 800 000 contrats. Cette liquidit&eacute; massive signifie un spread quasiment toujours &agrave; 1 tick, des fills instantan&eacute;s et un slippage minimal — trois conditions essentielles pour le scalping.</p>

      <h3>Levier r&eacute;gul&eacute; et marges intraday</h3>
      <p>Les marges intraday sur les Futures sont nettement inf&eacute;rieures aux marges overnight. Sur l&apos;ES, un scalper peut contr&ocirc;ler un contrat repr&eacute;sentant plus de 250 000 $ avec une marge de 500 &agrave; 1 000 $ selon le broker. Ce levier est r&eacute;gul&eacute; par la CME elle-m&ecirc;me — pas par un broker offshore qui peut changer les r&egrave;gles &agrave; tout moment.</p>

      <h3>Pas de manipulation broker</h3>
      <p>Sur le Forex ou les CFD, votre broker est souvent votre contrepartie. Sur les Futures, votre broker est un interm&eacute;diaire — votre contrepartie est un autre participant du march&eacute;. Pas de stop hunting artificiel, pas de spread &eacute;largi au moment o&ugrave; vous avez besoin de sortir, pas de requotes.</p>

      <table className="compare-table">
        <thead><tr><th>Crit&egrave;re</th><th>Futures CME</th><th>Forex / CFD</th></tr></thead>
        <tbody>
          <tr><td>Carnet d&apos;ordres</td><td>Centralis&eacute;, transparent</td><td>Fragment&eacute;, opaque</td></tr>
          <tr><td>Contrepartie</td><td>March&eacute; r&eacute;gul&eacute;</td><td>Souvent le broker</td></tr>
          <tr><td>Donn&eacute;es de volume</td><td>Volume r&eacute;el tick par tick</td><td>Volume indicatif ou absent</td></tr>
          <tr><td>Spread</td><td>1 tick constant (ES/NQ)</td><td>Variable, &eacute;largi en news</td></tr>
          <tr><td>Outils Order Flow</td><td>DOM, Footprint, Tape natifs</td><td>Tr&egrave;s limit&eacute;s ou inexistants</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="instruments">ES, NQ, CL : quel contrat pour scalper ?</h2>
      <p>Tous les Futures ne se valent pas pour le scalping. Le choix du contrat d&eacute;pend de votre capital, de votre tol&eacute;rance au risque et de votre style de lecture du flux. Voici les trois contrats les plus populaires pour scalper ES NQ et le CL.</p>

      <h3>E-mini S&amp;P 500 (ES)</h3>
      <p>L&apos;ES est le contrat roi du scalping. Sa liquidit&eacute; est la plus profonde de tous les Futures au monde. Le tick vaut 12,50 $, le spread est quasi-permanent &agrave; 1 tick. Le mouvement est fluide, pr&eacute;visible dans sa microstructure, et les niveaux d&apos;absorption sont lisibles dans le DOM. C&apos;est le contrat id&eacute;al pour apprendre le scalping CME.</p>
      <p>Les versions Micro (MES) permettent de d&eacute;buter avec un tick &agrave; 1,25 $ — 10 fois moins de risque par contrat. C&apos;est l&agrave; que je recommande de commencer.</p>

      <h3>E-mini Nasdaq 100 (NQ)</h3>
      <p>Le NQ est plus volatil que l&apos;ES. Son tick vaut 5 $ (ou 0,50 $ sur le MNQ), mais il bouge davantage en amplitude quotidienne. Un scalper sur le NQ peut capturer des mouvements plus amples, mais le risque par trade est &eacute;galement plus &eacute;lev&eacute;. Le NQ est id&eacute;al si vous cherchez de la volatilit&eacute; et que vous ma&icirc;trisez d&eacute;j&agrave; la lecture du Footprint.</p>

      <h3>Crude Oil (CL)</h3>
      <p>Le CL (WTI Crude Oil Futures) est le terrain de jeu des scalpers exp&eacute;riment&eacute;s. Son tick vaut 10 $, sa liquidit&eacute; est excellente pendant les heures US, et ses mouvements peuvent &ecirc;tre tr&egrave;s rapides autour des inventaires p&eacute;troli&egrave;res (EIA). Attention : le CL peut gap intraday et les absorptions y sont moins lisibles que sur l&apos;ES. R&eacute;serv&eacute; aux scalpers confirm&eacute;s.</p>

      <div className="info-box">
        <div className="info-box-title">Recommandation BASS Trading</div>
        <p>Pour un d&eacute;butant en scalping Futures, commencez par le MES (Micro E-mini S&amp;P 500). Ma&icirc;trisez la lecture du DOM et du Footprint sur un instrument liquide et lent avant de passer &agrave; des contrats plus agressifs comme le NQ ou le CL. Le MES vous permet de faire des erreurs &agrave; faible co&ucirc;t tout en d&eacute;veloppant les bons r&eacute;flexes.</p>
      </div>

      <hr />

      <h2 id="outils">Le setup du scalper : DOM, Footprint, Tape Reading</h2>
      <p>Le scalping trading professionnel repose sur trois piliers visuels qui forment un triptyque indissociable. Vous ne pouvez pas scalper efficacement sans ces trois sources d&apos;information synchronis&eacute;es.</p>

      <h3>Le DOM (Depth of Market)</h3>
      <p>Le <a href="/blog/carnet-ordres-dom-futures/">DOM</a> est votre radar principal. Il affiche les ordres limites en attente &agrave; chaque niveau de prix — les bids en dessous, les asks au-dessus. En tant que scalper, vous surveillez trois choses dans le DOM :</p>
      <ul>
        <li><strong>Les murs de liquidit&eacute;</strong> — des niveaux o&ugrave; un volume anormalement &eacute;lev&eacute; d&apos;ordres limites est empil&eacute;. Ces murs agissent comme des aimants ou des barri&egrave;res.</li>
        <li><strong>Le pulling/stacking</strong> — quand des ordres apparaissent et disparaissent rapidement &agrave; un niveau. C&apos;est un signe de spoofing ou de participant h&eacute;sitant.</li>
        <li><strong>L&apos;asym&eacute;trie bid/ask</strong> — si les bids sont significativement plus &eacute;pais que les asks (ou inversement), cela r&eacute;v&egrave;le un biais directionnel &agrave; court terme.</li>
      </ul>

      <h3>Le Footprint Chart</h3>
      <p>Le <a href="/blog/footprint-chart-trading/">Footprint</a> est votre microscope. Il d&eacute;compose chaque bougie en montrant le volume ex&eacute;cut&eacute; au Bid et &agrave; l&apos;Ask &agrave; chaque niveau de prix. Pour le scalper, le Footprint r&eacute;v&egrave;le :</p>
      <ul>
        <li><strong>Les imbalances</strong> — des d&eacute;s&eacute;quilibres 3:1 ou plus entre Ask et Bid, signalant une pression directionnelle agressive.</li>
        <li><strong>Les absorptions</strong> — gros volume &eacute;chang&eacute; sans mouvement de prix, signe qu&apos;un institutionnel accumule.</li>
        <li><strong>Le delta par niveau</strong> — la diff&eacute;rence entre achats et ventes agressifs &agrave; chaque tick de prix.</li>
      </ul>

      <h3>Le Tape Reading (Time &amp; Sales)</h3>
      <p>Le <a href="/blog/tape-reading-flux-ordres/">Tape</a> est votre stethoscope. Il affiche chaque transaction ex&eacute;cut&eacute;e en temps r&eacute;el — le prix, le volume, et si l&apos;ex&eacute;cution a eu lieu au Bid ou &agrave; l&apos;Ask. Le Tape permet de d&eacute;tecter :</p>
      <ul>
        <li><strong>Les prints iceberg</strong> — des ex&eacute;cutions r&eacute;p&eacute;t&eacute;es au m&ecirc;me prix avec un volume constant, signe d&apos;un ordre cach&eacute; massif.</li>
        <li><strong>L&apos;acc&eacute;l&eacute;ration du flux</strong> — quand la vitesse des transactions augmente soudainement, le march&eacute; est sur le point de bouger.</li>
        <li><strong>Les blocs institutionnels</strong> — des transactions de taille anormale qui r&eacute;v&egrave;lent l&apos;entr&eacute;e d&apos;un gros participant.</li>
      </ul>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>La convergence des trois outils</h4>
        <p>Un signal de scalping fiable n&apos;appara&icirc;t jamais sur un seul outil. Quand le DOM montre un mur qui tient, que le Footprint affiche une absorption, et que le Tape confirme des prints icebergs au m&ecirc;me niveau — vous avez une convergence. C&apos;est l&agrave; que le scalper entre en position avec confiance.</p>
      </div>

      <hr />

      <h2 id="strategies">4 strat&eacute;gies de scalping Order Flow concr&egrave;tes</h2>
      <p>Voici quatre strat&eacute;gies que j&apos;utilise quotidiennement et que j&apos;enseigne dans mes formations. Chacune est bas&eacute;e sur un signal d&apos;Order Flow sp&eacute;cifique, avec des crit&egrave;res d&apos;entr&eacute;e, de sortie et de gestion du risque d&eacute;finis.</p>

      <h3>1. Scalp sur absorption au POC</h3>
      <p>Le Point of Control (POC) du Market Profile est le niveau de prix o&ugrave; le plus de volume a &eacute;t&eacute; &eacute;chang&eacute; sur la session. Quand le prix revient tester ce niveau, il y a souvent une r&eacute;action.</p>
      <ul>
        <li><strong>Contexte :</strong> le prix revient sur le POC de la veille ou de la session en cours apr&egrave;s un mouvement directionnel.</li>
        <li><strong>Signal :</strong> absorption visible dans le Footprint (gros volume, delta plat) + ordres limites qui tiennent dans le DOM + prints icebergs dans le Tape.</li>
        <li><strong>Entr&eacute;e :</strong> entr&eacute;e contre le mouvement au niveau du POC, une fois l&apos;absorption confirm&eacute;e sur au moins 2 bougies Footprint.</li>
        <li><strong>Cible :</strong> 4 &agrave; 8 ticks sur l&apos;ES. Stop &agrave; 4 ticks derri&egrave;re le niveau d&apos;absorption.</li>
      </ul>

      <h3>2. Scalp sur stacked imbalances</h3>
      <p>Les stacked imbalances (d&eacute;s&eacute;quilibres empil&eacute;s) sont le signal de momentum le plus puissant dans le Footprint. Trois d&eacute;s&eacute;quilibres cons&eacute;cutifs ou plus indiquent une pression directionnelle agressive et soutenue.</p>
      <ul>
        <li><strong>Contexte :</strong> le march&eacute; est en tendance intraday (confirm&eacute;e par le VWAP et le delta cumulatif).</li>
        <li><strong>Signal :</strong> stacked imbalances dans la direction de la tendance, id&eacute;alement apr&egrave;s un pullback vers le VWAP ou une zone de valeur.</li>
        <li><strong>Entr&eacute;e :</strong> entr&eacute;e dans la direction des imbalances, au premier recul de 1-2 ticks apr&egrave;s la bougie signal.</li>
        <li><strong>Cible :</strong> 6 &agrave; 10 ticks sur l&apos;ES. Stop sous le bas de la bougie d&apos;imbalances.</li>
      </ul>

      <h3>3. Scalp sur flip de delta</h3>
      <p>Le flip de delta se produit quand la pression bascule brutalement d&apos;un c&ocirc;t&eacute; &agrave; l&apos;autre. Par exemple, une s&eacute;rie de bougies &agrave; delta fortement n&eacute;gatif suivie d&apos;une bougie &agrave; delta fortement positif — cela signale que les vendeurs ont &eacute;puis&eacute; leur force et que les acheteurs reprennent le contr&ocirc;le.</p>
      <ul>
        <li><strong>Contexte :</strong> le march&eacute; a fait un mouvement directionnel rapide (flush) et atteint un niveau de support/r&eacute;sistance (VAL, VAH, POC, ou niveau de session pr&eacute;c&eacute;dente).</li>
        <li><strong>Signal :</strong> le delta cumulatif diverge du prix + flip de delta visible sur la derni&egrave;re bougie Footprint.</li>
        <li><strong>Entr&eacute;e :</strong> entr&eacute;e dans la direction du flip, avec confirmation Tape (acc&eacute;l&eacute;ration du flux dans la nouvelle direction).</li>
        <li><strong>Cible :</strong> 4 &agrave; 6 ticks. Stop serr&eacute; &agrave; 3 ticks sous l&apos;extr&ecirc;me du flush.</li>
      </ul>

      <h3>4. Scalp sur iceberg au mur DOM</h3>
      <p>Ce setup combine la lecture du DOM et du Tape. Vous identifiez un mur de liquidit&eacute; important dans le DOM (par exemple 2 000+ contrats sur un niveau de l&apos;ES), puis vous observez le Tape pour voir si des prints icebergs s&apos;ex&eacute;cutent r&eacute;p&eacute;titivement au m&ecirc;me prix.</p>
      <ul>
        <li><strong>Contexte :</strong> le prix s&apos;approche d&apos;un mur visible dans le DOM qui ne recule pas (pas de pulling).</li>
        <li><strong>Signal :</strong> le mur absorbe les ordres agressifs adverses + prints icebergs visibles dans le Tape (ex&eacute;cutions r&eacute;p&eacute;t&eacute;es de m&ecirc;me taille au m&ecirc;me prix).</li>
        <li><strong>Entr&eacute;e :</strong> entr&eacute;e devant le mur (c&ocirc;t&eacute; protection) une fois que les icebergs sont confirm&eacute;s.</li>
        <li><strong>Cible :</strong> 3 &agrave; 6 ticks. Stop si le mur c&egrave;de (le prix traverse le niveau).</li>
      </ul>

      <hr />

      <h2 id="risk-management">Gestion du risque : la r&egrave;gle des 2R</h2>
      <p>En scalping, la gestion du risque n&apos;est pas un ajout — c&apos;est le fondement. Sans une gestion rigoureuse, m&ecirc;me le meilleur scalper finira par exploser son compte. Voici le framework que j&apos;utilise et que j&apos;enseigne.</p>

      <h3>La r&egrave;gle des 2R</h3>
      <p>Chaque trade doit offrir un ratio risque/r&eacute;compense minimum de 1:2, que j&apos;appelle le &quot;2R&quot;. Si votre stop est &agrave; 4 ticks, votre cible minimale est &agrave; 8 ticks. Si votre stop est &agrave; 3 ticks, votre cible est &agrave; 6 ticks. Ce ratio vous permet d&apos;&ecirc;tre rentable m&ecirc;me avec un taux de r&eacute;ussite de 40%.</p>

      <div className="info-box">
        <div className="info-box-title">Math&eacute;matiques du 2R</div>
        <p>Avec un ratio 2R et un taux de r&eacute;ussite de 45% sur 100 trades : 45 trades gagnants &times; 8 ticks = 360 ticks gagn&eacute;s. 55 trades perdants &times; 4 ticks = 220 ticks perdus. R&eacute;sultat net : +140 ticks. Sur l&apos;ES, cela repr&eacute;sente 1 750 $ par contrat. Le 2R transforme un taux de r&eacute;ussite m&eacute;diocre en rentabilit&eacute; solide.</p>
      </div>

      <h3>Le risque par trade</h3>
      <p>Ne risquez jamais plus de <strong>1% de votre capital</strong> sur un seul scalp. Sur un compte de 10 000 $, cela signifie un risque maximal de 100 $ par trade. Sur l&apos;ES &agrave; 12,50 $/tick, cela correspond &agrave; un stop de 8 ticks sur 1 contrat. Sur le MES &agrave; 1,25 $/tick, vous pouvez vous permettre 8 ticks sur 10 contrats Micro.</p>

      <h3>La perte quotidienne maximale</h3>
      <p>Fixez une perte quotidienne maximale de 3% du capital. D&egrave;s que ce seuil est atteint, vous arr&ecirc;tez de trader pour la journ&eacute;e. Pas de &quot;je vais me refaire&quot;, pas de &quot;revenge trading&quot;. Vous fermez la plateforme. Cette r&egrave;gle seule sauvera votre compte de trading au moins une fois par mois.</p>

      <h3>Le sizing progressif</h3>
      <p>Ne passez jamais de 1 contrat &agrave; 5 d&apos;un coup. Augmentez votre taille d&apos;un contrat seulement apr&egrave;s 20 jours de trading rentable cons&eacute;cutifs avec la taille actuelle. La mont&eacute;e en charge doit &ecirc;tre lente et m&eacute;ritoire — jamais &eacute;motionnelle.</p>

      <hr />

      <h2 id="session">Quand scalper : les fen&ecirc;tres de haute liquidit&eacute;</h2>
      <p>Le scalping intraday n&apos;est pas efficace &agrave; toute heure. Les march&eacute;s Futures ont des fen&ecirc;tres de liquidit&eacute; et de volatilit&eacute; sp&eacute;cifiques o&ugrave; les signaux d&apos;Order Flow sont les plus fiables.</p>

      <h3>L&apos;ouverture US (15h30 - 17h00 heure de Paris)</h3>
      <p>C&apos;est la fen&ecirc;tre la plus productive pour le scalper. La session cash US d&eacute;marre &agrave; 15h30, avec un afflux massif de liquidit&eacute; et de volatilit&eacute;. Les 90 premi&egrave;res minutes concentrent souvent 30 &agrave; 40% du volume quotidien. Les mouvements sont rapides, les signaux d&apos;Order Flow sont clairs, et les d&eacute;s&eacute;quilibres dans le Footprint sont prononc&eacute;s.</p>

      <h3>L&apos;ouverture europ&eacute;enne (09h00 - 10h30 heure de Paris)</h3>
      <p>L&apos;ouverture des march&eacute;s europ&eacute;ens apporte une seconde vague de liquidit&eacute; sur les Futures. Le volume est inf&eacute;rieur &agrave; la session US mais suffisant pour scalper l&apos;ES et le NQ. C&apos;est une fen&ecirc;tre int&eacute;ressante pour les traders bas&eacute;s en Europe qui ne veulent pas trader uniquement le soir.</p>

      <h3>La p&eacute;riode &agrave; &eacute;viter : 12h00 - 14h30 heure de Paris</h3>
      <p>Entre la fin de la session europ&eacute;enne du matin et le d&eacute;but de la session US, la liquidit&eacute; chute drastiquement. Le spread peut s&apos;&eacute;largir, les mouvements deviennent al&eacute;atoires, et les signaux d&apos;Order Flow sont bruit&eacute;s. Scalper pendant cette fen&ecirc;tre revient &agrave; jouer &agrave; pile ou face avec un d&eacute;savantage (vous payez les commissions).</p>

      <h3>Les &eacute;v&eacute;nements macro</h3>
      <p>Les annonces &eacute;conomiques majeures (NFP, CPI, FOMC) cr&eacute;ent des fen&ecirc;tres de volatilit&eacute; extr&ecirc;me. Deux approches : soit vous &eacute;vitez compl&egrave;tement ces fen&ecirc;tres (recommand&eacute; pour les d&eacute;butants), soit vous attendez 5 &agrave; 10 minutes apr&egrave;s l&apos;annonce pour scalper le mouvement de continuation ou de reversal une fois que le bruit initial s&apos;est dissip&eacute;.</p>

      <hr />

      <h2 id="psychologie">Scalping et psychologie : g&eacute;rer la vitesse</h2>
      <p>Le scalping est le style de trading le plus exigeant psychologiquement. Vous prenez des dizaines de d&eacute;cisions par session, chacune en quelques secondes. Le stress est constant, les &eacute;motions intenses, et la fatigue mentale arrive vite. Voici comment la g&eacute;rer.</p>

      <h3>Le pi&egrave;ge de l&apos;over-trading</h3>
      <p>Le scalper d&eacute;butant confond activit&eacute; et productivit&eacute;. Il pense que plus il prend de trades, plus il gagnera. C&apos;est l&apos;inverse. Les meilleurs scalpers que je connais prennent entre 3 et 8 trades par session. Ils attendent le signal parfait et frappent avec pr&eacute;cision. Le reste du temps, ils observent. <strong>Le scalping rentable est compos&eacute; &agrave; 80% d&apos;attente et 20% d&apos;action.</strong></p>

      <h3>Le &quot;tilt&quot; du scalper</h3>
      <p>Apr&egrave;s deux ou trois pertes cons&eacute;cutives, votre cerveau veut se &quot;refaire&quot;. Il augmente la taille, ignore les crit&egrave;res d&apos;entr&eacute;e, force des trades qui n&apos;existent pas. C&apos;est le tilt — et c&apos;est la premi&egrave;re cause de ruine chez les scalpers. La solution : une r&egrave;gle m&eacute;canique. Apr&egrave;s 3 pertes cons&eacute;cutives, vous arr&ecirc;tez de trader pendant 30 minutes minimum. Pas de n&eacute;gociation.</p>

      <h3>La routine de session</h3>
      <p>Avant chaque session de scalping, passez 15 minutes &agrave; analyser le contexte : o&ugrave; sont les niveaux cl&eacute;s du Market Profile (POC, VAH, VAL), y a-t-il des annonces &eacute;conomiques pr&eacute;vues, quel est le biais du delta cumulatif depuis l&apos;ouverture. Cette pr&eacute;paration r&eacute;duit l&apos;anxi&eacute;t&eacute; et vous donne un cadre de d&eacute;cision clair.</p>

      <h3>La fatigue cognitive</h3>
      <p>Le scalping mobilise votre attention de mani&egrave;re intense. Apr&egrave;s 90 minutes de scalping actif, votre capacit&eacute; de d&eacute;cision se d&eacute;grade significativement. Limitez vos sessions de scalping &agrave; 90 minutes maximum, puis prenez une pause de 30 minutes. Si vous forcez, vos deux derni&egrave;res heures d&eacute;truiront les gains de la premi&egrave;re.</p>

      <hr />

      <h2 id="capital">Capital n&eacute;cessaire et prop firms pour scalper</h2>
      <p>La question du capital est fondamentale en scalping Futures. Contrairement au Forex o&ugrave; vous pouvez ouvrir un compte &agrave; 100 $, les Futures exigent un capital minimum pour couvrir les marges et absorber les pertes normales.</p>

      <h3>Capital minimum pour scalper en compte propre</h3>
      <p>Pour scalper l&apos;ES (contrat plein), je recommande un minimum de 15 000 &agrave; 20 000 $. Cela vous donne une marge confortable pour tenir des stops de 4 &agrave; 8 ticks tout en respectant la r&egrave;gle du 1% par trade. Pour les Micros (MES), un capital de 2 500 &agrave; 5 000 $ est suffisant pour d&eacute;buter s&eacute;rieusement.</p>

      <h3>L&apos;alternative des prop firms</h3>
      <p>Les <a href="/blog/comparatif-prop-firms/">prop firms</a> ont r&eacute;volutionn&eacute; l&apos;acc&egrave;s au scalping Futures. Pour quelques centaines d&apos;euros, vous acc&eacute;dez &agrave; un compte de 50 000 &agrave; 150 000 $ apr&egrave;s avoir r&eacute;ussi une &eacute;valuation. C&apos;est la voie que je recommande pour les scalpers qui n&apos;ont pas encore le capital pour trader en compte propre.</p>

      <table className="compare-table">
        <thead><tr><th>Option</th><th>Capital requis</th><th>Avantage</th><th>Inconv&eacute;nient</th></tr></thead>
        <tbody>
          <tr><td>Compte propre (MES)</td><td>2 500 - 5 000 $</td><td>Libert&eacute; totale, pas de r&egrave;gles externes</td><td>Gains limit&eacute;s par la taille du compte</td></tr>
          <tr><td>Compte propre (ES)</td><td>15 000 - 20 000 $</td><td>Pas de partage de profits</td><td>Capital &agrave; risque &eacute;lev&eacute;</td></tr>
          <tr><td>Prop firm (evaluation)</td><td>150 - 500 $</td><td>Acc&egrave;s &agrave; un gros capital, risque limit&eacute;</td><td>R&egrave;gles strictes, partage des profits</td></tr>
        </tbody>
      </table>

      <h3>Les r&egrave;gles sp&eacute;cifiques des prop firms pour le scalping</h3>
      <p>Attention : toutes les prop firms ne sont pas adapt&eacute;es au scalping. Certaines imposent un temps minimum de d&eacute;tention (pas de scalping sous 30 secondes), d&apos;autres interdisent le trading pendant les news. V&eacute;rifiez syst&eacute;matiquement : le drawdown maximal quotidien, le drawdown trailing, les restrictions horaires, et les r&egrave;gles sur la dur&eacute;e minimale des trades. Une prop firm qui interdit les trades de moins de 2 minutes n&apos;est pas faite pour un scalper.</p>

      <hr />

      <h2 id="erreurs">Les 7 erreurs fatales du scalper d&eacute;butant</h2>
      <p>En 10 ans d&apos;enseignement, j&apos;ai vu des centaines de scalpers d&eacute;butants commettre les m&ecirc;mes erreurs. Voici les sept plus destructrices — et comment les &eacute;viter.</p>

      <h3>1. Scalper sans lire l&apos;Order Flow</h3>
      <p>Scalper avec des indicateurs techniques classiques (RSI, MACD, moyennes mobiles) sur les Futures, c&apos;est comme conduire une F1 en regardant dans le r&eacute;troviseur. Ces indicateurs sont d&eacute;riv&eacute;s du prix pass&eacute;. Le scalping exige de lire ce qui se passe <strong>maintenant</strong> dans le carnet d&apos;ordres et le flux de transactions. Apprenez le <a href="/blog/footprint-chart-trading/">Footprint</a>, le <a href="/blog/carnet-ordres-dom-futures/">DOM</a> et le <a href="/blog/tape-reading-flux-ordres/">Tape Reading</a> avant de risquer un centime en scalping.</p>

      <h3>2. Ignorer le contexte macro</h3>
      <p>Un signal de scalping n&apos;existe pas dans le vide. Un stacked imbalance haussier dans un march&eacute; en tendance baissi&egrave;re forte est probablement un pi&egrave;ge, pas une opportunit&eacute;. Toujours situer vos scalps dans le contexte du Market Profile : o&ugrave; est le POC, o&ugrave; sont les Value Areas, le march&eacute; est-il en range ou en tendance. Le micro sans le macro est aveugle.</p>

      <h3>3. Trader pendant les heures creuses</h3>
      <p>Scalper l&apos;ES &agrave; 13h00 heure de Paris (entre les sessions), c&apos;est s&apos;exposer &agrave; des mouvements al&eacute;atoires &agrave; faible volume o&ugrave; les signaux d&apos;Order Flow ne sont pas fiables. Respectez les fen&ecirc;tres de haute liquidit&eacute; — votre taux de r&eacute;ussite doublera.</p>

      <h3>4. Ne pas avoir de stop loss</h3>
      <p>Le scalper d&eacute;butant se dit : &quot;Je suis devant l&apos;&eacute;cran, je sortirai manuellement si &ccedil;a va mal.&quot; Non, vous ne sortirez pas. Quand le trade va contre vous de 10 ticks, puis 20, puis 40, votre cerveau se fige. Vous esp&eacute;rez un retour. Le stop loss doit &ecirc;tre plac&eacute; <strong>avant</strong> l&apos;entr&eacute;e en position, &agrave; chaque trade, sans exception.</p>

      <h3>5. Augmenter la taille apr&egrave;s une perte</h3>
      <p>La martingale est la strat&eacute;gie la plus destructrice qui existe. Apr&egrave;s une perte, certains doublent la taille &quot;pour se refaire&quot;. C&apos;est la recette pour transformer une petite perte en catastrophe. La r&egrave;gle est inverse : apr&egrave;s une s&eacute;rie de pertes, vous <strong>r&eacute;duisez</strong> la taille. Vous la r&eacute;augmentez quand la confiance et les r&eacute;sultats reviennent.</p>

      <h3>6. Scalper trop de march&eacute;s en m&ecirc;me temps</h3>
      <p>Chaque contrat Futures a sa propre personnalit&eacute; — sa vitesse, sa profondeur de carnet, ses patterns d&apos;absorption. Un scalper doit ma&icirc;triser <strong>un seul contrat</strong> avant d&apos;en ajouter un deuxi&egrave;me. Commencez par l&apos;ES ou le MES. Tradez-le pendant au moins 3 mois. Apprenez &agrave; reconna&icirc;tre ses comportements comme vous reconnaissez la voix d&apos;un ami. Ensuite seulement, diversifiez.</p>

      <h3>7. N&eacute;gliger le journal de trading</h3>
      <p>Si vous ne notez pas chaque trade — l&apos;entr&eacute;e, la sortie, le signal, l&apos;&eacute;tat &eacute;motionnel, le contexte — vous ne pouvez pas progresser. Le journal de trading est votre miroir. Il r&eacute;v&egrave;le vos biais, vos erreurs r&eacute;currentes, vos fen&ecirc;tres de performance optimale. Les scalpers qui r&eacute;ussissent sont ceux qui rel&egrave;vent obsessionnellement leurs statistiques et ajustent leur approche en cons&eacute;quence.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Le scalping est un m&eacute;tier, pas un hobby</h4>
        <p>Le scalping Futures demande un investissement s&eacute;rieux en formation, en outils et en discipline psychologique. Ce n&apos;est pas un raccourci vers l&apos;argent facile — c&apos;est un m&eacute;tier technique qui r&eacute;compense la rigueur, la patience et la ma&icirc;trise des outils d&apos;Order Flow. Ceux qui l&apos;abordent comme un hobby finissent dans les statistiques des comptes perdants. Ceux qui l&apos;abordent comme une discipline professionnelle trouvent un avantage durable.</p>
      </div>
    </>
  );
}
