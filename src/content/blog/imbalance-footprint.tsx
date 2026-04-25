export default function ImbalanceFootprint() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce qu&apos;une imbalance Footprint ?</h2>
      <p>Sur un <a href="/blog/footprint-chart-trading/">Footprint Chart</a>, chaque barre de prix affiche le volume transact&eacute; &agrave; chaque niveau de prix sous une forme bid&times;ask — par exemple <strong>250&times;820</strong>. Cela signifie que 250 contrats ont &eacute;t&eacute; vendus &agrave; ce prix (bid agressif) contre 820 achet&eacute;s (ask agressif). Quand l&apos;un des deux c&ocirc;t&eacute;s domine massivement l&apos;autre, on parle d&apos;<strong>imbalance</strong> (d&eacute;s&eacute;quilibre).</p>

      <p>Techniquement, une imbalance est d&eacute;finie comme un ratio o&ugrave; un c&ocirc;t&eacute; d&eacute;passe l&apos;autre d&apos;un facteur pr&eacute;d&eacute;fini — g&eacute;n&eacute;ralement <strong>3:1 ou 4:1</strong>. Dans notre exemple 250&times;820, le ratio est 3,28 c&ocirc;t&eacute; ask : c&apos;est une imbalance bullish, signalant que les acheteurs ont frapp&eacute; l&apos;ask de fa&ccedil;on disproportionn&eacute;e &agrave; ce niveau de prix.</p>

      <div className="callout">
        <p><strong>Principe cl&eacute; :</strong> Une imbalance n&apos;indique pas forc&eacute;ment la direction finale du march&eacute;. Elle r&eacute;v&egrave;le <em>o&ugrave;</em> et <em>comment</em> les transactions ont eu lieu. Coupl&eacute;e au contexte (Volume Profile, structure, delta), elle devient un outil de pr&eacute;cision redoutable.</p>
      </div>

      <p>Les imbalances sont particuli&egrave;rement pris&eacute;es par les traders order flow parce qu&apos;elles cartographient visuellement l&apos;agressivit&eacute; des participants. L&agrave; o&ugrave; un chandelier japonais classique montre uniquement ouverture/haute/basse/cl&ocirc;ture, le Footprint r&eacute;v&egrave;le chaque niveau de prix contest&eacute; et son d&eacute;s&eacute;quilibre — une information invisible aux traders conventionnels.</p>

      <h2 id="lecture">Comment lire les imbalances sur un Footprint Chart</h2>
      <p>Sur Sierra Chart ou Bookmap, les imbalances sont g&eacute;n&eacute;ralement surlighn&eacute;es en couleur. Les imbalances bullish (c&ocirc;t&eacute; ask dominant) apparaissent en <strong>vert ou bleu</strong>, les imbalances bearish (c&ocirc;t&eacute; bid dominant) en <strong>rouge ou orange</strong>. Cette visualisation permet d&apos;identifier d&apos;un coup d&apos;&oelig;il les zones de d&eacute;s&eacute;quilibre sans calculer chaque ratio manuellement.</p>

      <h3>Structure d&apos;une bougie Footprint avec imbalances</h3>
      <p>Imaginez une bougie haussi&egrave;re sur l&apos;ES. Au niveau de prix le plus bas, on lit <strong>180&times;620</strong> — imbalance bullish forte (ratio 3,4). Au niveau suivant, <strong>210&times;890</strong> — encore une imbalance bullish (ratio 4,2). Au sommet, <strong>340&times;1100</strong> — ratio 3,2. Ces trois niveaux cons&eacute;cutifs avec des imbalances dans la m&ecirc;me direction forment des <strong>stacked imbalances</strong>, un signal de forte conviction directionnelle.</p>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="val">3:1</div>
          <div className="lbl">Ratio standard imbalance</div>
        </div>
        <div className="metric-card">
          <div className="val">4:1</div>
          <div className="lbl">Ratio fort / haute conviction</div>
        </div>
        <div className="metric-card">
          <div className="val">3+</div>
          <div className="lbl">Niveaux pour stacked imbalance</div>
        </div>
        <div className="metric-card">
          <div className="val">70%</div>
          <div className="lbl">Taux de retour sur zones unfilled</div>
        </div>
      </div>

      <h3>Les deux types fondamentaux</h3>
      <ul>
        <li><strong>Ask imbalance (bullish) :</strong> Les acheteurs frappent l&apos;ask agressivement. Volume ask &gt;&gt; Volume bid. Marque une zone d&apos;absorption des vendeurs ou d&apos;initiation haussi&egrave;re.</li>
        <li><strong>Bid imbalance (bearish) :</strong> Les vendeurs frappent le bid agressivement. Volume bid &gt;&gt; Volume ask. Marque une zone d&apos;absorption des acheteurs ou d&apos;initiation baissi&egrave;re.</li>
      </ul>

      <h2 id="ratios">Ratios et seuils : calibrer votre sensibilit&eacute;</h2>
      <p>Le choix du ratio conditionne directement votre lecture du march&eacute;. Un ratio trop bas (2:1) g&eacute;n&eacute;rera des faux signaux en quantit&eacute; ; trop &eacute;lev&eacute; (5:1), vous passerez &agrave; c&ocirc;t&eacute; de nombreuses imbalances valides. La calibration optimale d&eacute;pend de l&apos;instrument et de la p&eacute;riode.</p>

      <table className="data-table">
        <thead>
          <tr><th>Instrument</th><th>Ratio recommand&eacute;</th><th>Tick size</th><th>Contexte</th></tr>
        </thead>
        <tbody>
          <tr><td>ES (S&amp;P 500 Futures)</td><td>3:1 &agrave; 4:1</td><td>0.25</td><td>Liquide, nombreuses imbalances</td></tr>
          <tr><td>NQ (Nasdaq Futures)</td><td>3:1</td><td>0.25</td><td>Volatil, imbalances fr&eacute;quentes</td></tr>
          <tr><td>CL (Crude Oil)</td><td>4:1 &agrave; 5:1</td><td>0.01</td><td>Moins liquide, seuil plus strict</td></tr>
          <tr><td>GC (Gold)</td><td>3:1</td><td>0.10</td><td>Mouvements lents, imbalances nettes</td></tr>
          <tr><td>ZB (T-Bond)</td><td>4:1</td><td>1/32</td><td>Institutionnel, seuil &eacute;lev&eacute; recommand&eacute;</td></tr>
        </tbody>
      </table>

      <p>En pratique, la plupart des traders order flow utilisent <strong>3:1 comme filtre de base</strong> puis affinent avec le contexte. Une imbalance 3:1 en plein milieu d&apos;un range a moins de valeur qu&apos;une imbalance 3:1 sur un niveau de support cl&eacute; du <a href="/blog/volume-profile-guide/">Volume Profile</a>.</p>

      <div className="callout warning">
        <p><strong>Attention :</strong> Sur des sessions &agrave; faible volume (pre-market, apr&egrave;s 16h sur l&apos;ES), les ratios sont naturellement exag&eacute;r&eacute;s. Un 10:1 sur 50 contrats n&apos;a pas la m&ecirc;me signification qu&apos;un 4:1 sur 800 contrats. Contextualisez toujours par le volume absolu, pas uniquement le ratio.</p>
      </div>

      <h2 id="stacked">Stacked Imbalances : la puissance des d&eacute;s&eacute;quilibres empil&eacute;s</h2>
      <p>Les stacked imbalances sont la version amplifi&eacute;e de l&apos;imbalance classique. Elles se produisent quand <strong>3 niveaux de prix cons&eacute;cutifs ou plus</strong> pr&eacute;sentent des imbalances dans la m&ecirc;me direction au sein d&apos;une m&ecirc;me bougie. Cette configuration indique une conviction directionnelle exceptionnelle et cr&eacute;e des zones de haute probabilit&eacute; pour les retours de prix.</p>

      <h3>Pourquoi les stacked imbalances sont-elles importantes ?</h3>
      <p>La logique sous-jacente est celle des ench&egrave;res : quand un camp a frapp&eacute; de fa&ccedil;on r&eacute;p&eacute;t&eacute;e et disproportionn&eacute;e sur plusieurs niveaux cons&eacute;cutifs, il a cr&eacute;&eacute; un d&eacute;s&eacute;quilibre structurel. Le march&eacute;, qui fonctionne comme un m&eacute;canisme d&apos;ench&egrave;res bilat&eacute;rales (cf. <a href="/blog/auction-market-theory/">Auction Market Theory</a>), a tendance &agrave; revenir tester ces zones pour compl&eacute;ter l&apos;ench&egrave;re — c&apos;est-&agrave;-dire pour permettre &agrave; l&apos;autre camp de r&eacute;pondre.</p>

      <ul>
        <li><strong>Stacked bullish imbalances :</strong> Plusieurs niveaux avec ask &gt;&gt; bid dans une bougie haussi&egrave;re. Zone de support future. Le prix y reviendra souvent pour trouver des acheteurs.</li>
        <li><strong>Stacked bearish imbalances :</strong> Plusieurs niveaux avec bid &gt;&gt; ask dans une bougie baissi&egrave;re. Zone de r&eacute;sistance future. Le prix y reviendra souvent pour trouver des vendeurs.</li>
      </ul>

      <h3>Identifier les stacked imbalances sur Sierra Chart</h3>
      <p>Dans Sierra Chart, activez l&apos;affichage des imbalances dans les param&egrave;tres du Footprint. Les stacked imbalances se visualisent comme une colonne de cellules surlighn&eacute;es de la m&ecirc;me couleur sur plusieurs niveaux verticaux. Plus la colonne est longue, plus le d&eacute;s&eacute;quilibre empil&eacute; est significatif. Une colonne de 5-6 niveaux cons&eacute;cutifs est un signal rare mais tr&egrave;s puissant.</p>

      <div className="callout blue">
        <p><strong>Setup classique :</strong> Identifier une stacked bearish imbalance dans une bougie de vente impulsive, noter la zone de prix concern&eacute;e, puis attendre que le prix remonte vers cette zone en session suivante pour initier une position short avec un risk/reward favorable.</p>
      </div>

      <h2 id="unfilled">Zones non remplies : les aimants du march&eacute;</h2>
      <p>Une zone d&apos;imbalance &quot;non remplie&quot; (unfilled imbalance) est une zone o&ugrave; le d&eacute;s&eacute;quilibre initial n&apos;a jamais &eacute;t&eacute; combl&eacute; par un retour de prix. Elle reste marqu&eacute;e sur le Footprint jusqu&apos;&agrave; ce que le march&eacute; y revienne et que les transactions se d&eacute;roulent de fa&ccedil;on plus &eacute;quilibr&eacute;e &agrave; ces niveaux.</p>

      <h3>La th&eacute;orie du retour sur les unfilled zones</h3>
      <p>Selon la th&eacute;orie des ench&egrave;res, le march&eacute; cherche en permanence &agrave; <strong>faciliter les &eacute;changes</strong>. Un prix o&ugrave; les transactions ont &eacute;t&eacute; fortement d&eacute;s&eacute;quilibr&eacute;es est un prix o&ugrave; l&apos;ench&egrave;re &eacute;tait &quot;incompl&egrave;te&quot; — un camp a domin&eacute; mais l&apos;autre n&apos;a pas pu ou voulu r&eacute;pondre &agrave; ce moment. Lors d&apos;un retour futur sur cette zone, on s&apos;attend &agrave; voir le camp perdant revenir tenter de corriger ce d&eacute;s&eacute;quilibre.</p>

      <p>En pratique, les statistiques montrent que <strong>60-75% des unfilled imbalances</strong> sont revisit&eacute;es dans les sessions suivantes. Ce taux varie selon :</p>
      <ul>
        <li>La distance parcourue depuis la cr&eacute;ation de l&apos;imbalance</li>
        <li>Le contexte de march&eacute; global (tendance forte vs range)</li>
        <li>Le volume absolu lors de la cr&eacute;ation de l&apos;imbalance</li>
        <li>La pr&eacute;sence d&apos;autres niveaux techniques confluents</li>
      </ul>

      <h3>Comment trader les unfilled imbalances</h3>
      <p>La m&eacute;thode la plus commune consiste &agrave; noter les zones d&apos;unfilled imbalances sur les s&eacute;ances pr&eacute;c&eacute;dentes et &agrave; les utiliser comme <strong>niveaux de prix cibles</strong> ou comme <strong>zones de r&eacute;action</strong> lors d&apos;une extension. Si le march&eacute; a cr&eacute;&eacute; une stacked bearish imbalance &agrave; 5600-5602 sur l&apos;ES hier, ces niveaux deviennent des zones de surveillance prioritaires pour aujourd&apos;hui.</p>

      <h2 id="bullish-bearish">Types d&apos;imbalances : bullish, bearish et absorptions</h2>
      <p>Au-del&agrave; de la simple classification bid/ask, les imbalances prennent diff&eacute;rentes significations selon leur position dans la structure de prix et la dynamique globale de la bougie.</p>

      <table className="data-table">
        <thead>
          <tr><th>Type</th><th>Position</th><th>Signification</th><th>Signal</th></tr>
        </thead>
        <tbody>
          <tr><td><span className="tag-green">Ask imbalance</span></td><td>Bas de bougie haussi&egrave;re</td><td>Initiation d&apos;achat agressif</td><td>Continuation haussi&egrave;re</td></tr>
          <tr><td><span className="tag-green">Ask imbalance</span></td><td>Bas de bougie baissi&egrave;re</td><td>Absorption des vendeurs par acheteurs</td><td>Possible retournement</td></tr>
          <tr><td><span className="tag-red">Bid imbalance</span></td><td>Haut de bougie baissi&egrave;re</td><td>Initiation de vente agressive</td><td>Continuation baissi&egrave;re</td></tr>
          <tr><td><span className="tag-red">Bid imbalance</span></td><td>Haut de bougie haussi&egrave;re</td><td>Absorption des acheteurs par vendeurs</td><td>Possible retournement</td></tr>
        </tbody>
      </table>

      <h3>Imbalances d&apos;absorption</h3>
      <p>Le cas le plus int&eacute;ressant est celui des imbalances contra-tendance — quand on trouve une ask imbalance dans une bougie baissi&egrave;re, ou une bid imbalance dans une bougie haussi&egrave;re. Ces configurations indiquent de l&apos;<a href="/blog/absorption-order-flow/">absorption</a> : le camp dominant de la bougie tente d&apos;avancer mais rencontre une r&eacute;sistance disproportionn&eacute;e de l&apos;autre camp. Si cette absorption est suffisamment importante, elle peut mener &agrave; un retournement ou au moins &agrave; une pause de la tendance.</p>

      <h2 id="confluence">Confluence avec Volume Profile, Delta et structure</h2>
      <p>Les imbalances seules peuvent g&eacute;n&eacute;rer des faux signaux. C&apos;est en les combinant avec d&apos;autres outils que leur valeur pr&eacute;dictive augmente significativement. Les meilleures opportunit&eacute;s apparaissent quand plusieurs &eacute;l&eacute;ments convergent.</p>

      <h3>Imbalances + Volume Profile</h3>
      <p>Une stacked imbalance bullish qui se forme exactement sur la VAL (Value Area Low) ou le POC d&apos;une session pr&eacute;c&eacute;dente est un signal de forte conviction. Elle confirme que des acheteurs ont d&eacute;fendu activement un niveau de valeur reconnu par le march&eacute;. &Agrave; l&apos;inverse, une stacked bearish imbalance sur la VAH (Value Area High) valide une r&eacute;sistance technique par des donn&eacute;es order flow concr&egrave;tes.</p>

      <h3>Imbalances + Delta</h3>
      <p>Le <a href="/blog/delta-footprint-trading/">delta</a> et les imbalances sont compl&eacute;mentaires. Le delta mesure le d&eacute;s&eacute;quilibre global d&apos;une bougie (somme de tous les ask trades moins tous les bid trades). Les imbalances localisent pr&eacute;cis&eacute;ment &agrave; quels niveaux de prix ce d&eacute;s&eacute;quilibre s&apos;est manifest&eacute;. Une bougie avec un delta n&eacute;gatif qui pr&eacute;sente des stacked bearish imbalances dans sa partie haute confirme une distribution institutionnelle organis&eacute;e.</p>

      <h3>Imbalances + CVD</h3>
      <p>Le <a href="/blog/cvd-cumulative-volume-delta/">CVD (Cumulative Volume Delta)</a> r&eacute;v&egrave;le les tendances de long terme du d&eacute;s&eacute;quilibre. Si le CVD chute r&eacute;guli&egrave;rement depuis plusieurs jours ET que les bougies r&eacute;centes montrent des stacked bearish imbalances r&eacute;currentes, la configuration de vente est robuste et multi-timeframe.</p>

      <div className="callout">
        <p><strong>R&egrave;gle des 3 confluences :</strong> Ne tradez une imbalance que si au moins 2 autres &eacute;l&eacute;ments convergent — niveau de Volume Profile, delta, CVD, structure horizontale (support/r&eacute;sistance), ou contexte de session (ouverture, cl&ocirc;ture Europe, CME open). Deux signaux = setup valide ; un seul = trop risqu&eacute;.</p>
      </div>

      <h2 id="setups">Setups concrets bas&eacute;s sur les imbalances</h2>
      <p>Voyons maintenant comment construire des entr&eacute;es pr&eacute;cises &agrave; partir des imbalances en conditions r&eacute;elles de march&eacute;.</p>

      <h3>Setup 1 : Retour sur stacked imbalance + Volume Profile</h3>
      <p><strong>Contexte :</strong> March&eacute; ES en session de nuit. Bougie impulsive baissi&egrave;re avec stacked bearish imbalances entre 5598 et 5602. Le POC du jour pr&eacute;c&eacute;dent se situe &agrave; 5600.</p>
      <p><strong>Plan :</strong> Attendre le retour sur la zone 5598-5602 en session r&eacute;guli&egrave;re. Observer le comportement (delta, tape reading, absorption). Si le prix arrive sur la zone avec un delta neutre &agrave; positif mais que les vendeurs reprennent la main (delta se retourne n&eacute;gatif, bougies avec bid imbalances), initier un short avec stop au-dessus de 5603 (au-dessus de la stacked zone).</p>

      <h3>Setup 2 : Unfilled imbalance comme target</h3>
      <p><strong>Contexte :</strong> Le march&eacute; NQ pr&eacute;sente une unfilled bullish imbalance &agrave; 21480-21490 cr&eacute;&eacute;e deux sessions plus t&ocirc;t lors d&apos;un move haussier fort. Le march&eacute; a retrac&eacute; depuis et approche de cette zone.</p>
      <p><strong>Plan :</strong> Utiliser la zone 21480-21490 comme cible pour une position longue ouverte plus bas. Surveiller si le prix ralentit ou acc&eacute;l&egrave;re sur cette zone. Un ralentissement avec delta n&eacute;gatif (vendeurs r&eacute;agissent &agrave; leur unfilled zone) invite &agrave; all&eacute;ger la position. Une travers&eacute;e nette (delta positif maintenu) sugg&egrave;re une continuation vers les zones d&apos;imbalances suivantes.</p>

      <h3>Setup 3 : Exhaustion via imbalances contradictoires</h3>
      <p><strong>Contexte :</strong> Le CL monte depuis l&apos;ouverture. La derni&egrave;re bougie bullish montre une ask imbalance forte sur les 3 premiers niveaux mais une bid imbalance au niveau le plus haut (le haut de la bougie). Le delta de la bougie commence &agrave; diverger (moins positif que les bougies pr&eacute;c&eacute;dentes malgr&eacute; la continuit&eacute; haussi&egrave;re).</p>
      <p><strong>Plan :</strong> L&apos;imbalance contra-tendance au sommet de la bougie combin&eacute;e &agrave; la divergence de delta signale une possible exhaustion. R&eacute;duire les positions longues, serrer les stops, ne pas initier de nouveaux longs jusqu&apos;&agrave; confirmation.</p>

      <h2 id="erreurs">Erreurs fr&eacute;quentes dans l&apos;analyse des imbalances</h2>
      <p>L&apos;analyse des imbalances est puissante mais comporte des pi&egrave;ges courants qui peuvent conduire &agrave; des pertes &eacute;vitables.</p>

      <h3>1. Traiter chaque imbalance comme un signal</h3>
      <p>Dans une session active sur l&apos;ES, des dizaines d&apos;imbalances se forment &agrave; la minute. La grande majorit&eacute; n&apos;ont aucune signification op&eacute;rationnelle. Seules les imbalances en confluence avec des niveaux de prix importants m&eacute;ritent attention.</p>

      <h3>2. Ignorer le volume absolu</h3>
      <p>Un ratio 5:1 sur 40 contrats est statistiquement moins fiable qu&apos;un ratio 3:1 sur 600 contrats. Le volume absolu valide la signification du d&eacute;s&eacute;quilibre. Fixer un seuil minimum de volume (ex : 200 contrats sur l&apos;ES) pour qu&apos;une imbalance soit prise en compte.</p>

      <h3>3. Anticiper avant confirmation</h3>
      <p>L&apos;erreur classique est d&apos;entrer en position d&egrave;s que le prix approche d&apos;une unfilled imbalance, sans attendre de signal de r&eacute;action (tape reading, delta, comportement tick). Attendez que le march&eacute; <em>montre</em> sa r&eacute;action avant d&apos;entrer.</p>

      <div className="callout warning">
        <p><strong>Rappel important :</strong> Les imbalances ne sont pas des niveaux magiques. Ce sont des zones o&ugrave; le march&eacute; a montr&eacute; un d&eacute;s&eacute;quilibre pass&eacute;. Les march&eacute;s &eacute;voluent et ces zones peuvent &ecirc;tre travers&eacute;es sans r&eacute;action si le contexte macro ou la structure globale ont chang&eacute; depuis leur cr&eacute;ation.</p>
      </div>

      <h3>4. Sur-param&eacute;trer les outils</h3>
      <p>Il est tentant d&apos;ajuster constamment les ratios pour que les imbalances &quot;collent&quot; aux mouvements pass&eacute;s. Cette approche de curve-fitting rend l&apos;outil inutilisable en temps r&eacute;el. D&eacute;finissez votre ratio, testez-le pendant 30 jours minimum, et n&apos;ajustez qu&apos;avec des donn&eacute;es statistiques solides.</p>

      <h3>5. N&eacute;gliger la temporalit&eacute; des unfilled zones</h3>
      <p>Une unfilled imbalance cr&eacute;&eacute;e il y a 3 mois a beaucoup moins de pertinence qu&apos;une cr&eacute;&eacute;e il y a 2 sessions. Plus les zones sont r&eacute;centes et le volume absolu &eacute;lev&eacute;, plus elles sont fiables. Certains traders n&apos;utilisent que les zones des 5 derni&egrave;res sessions.</p>
    </>
  );
}
