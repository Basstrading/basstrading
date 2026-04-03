export default function AnalyseTechniqueTrading() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que l&apos;analyse technique ?</h2>
      <p>L&apos;analyse technique est l&apos;&eacute;tude des mouvements de prix pass&eacute;s pour anticiper les mouvements futurs. Elle repose sur l&apos;id&eacute;e que tout — fondamentaux, news, &eacute;motions — est d&eacute;j&agrave; refl&eacute;t&eacute; dans le prix. Pas besoin de lire les bilans comptables ou de suivre les discours de la Fed : le graphique vous dit tout.</p>
      <p>C&apos;est la m&eacute;thode la plus r&eacute;pandue chez les traders particuliers. Et c&apos;est aussi la plus mal utilis&eacute;e. La majorit&eacute; des traders qui perdent de l&apos;argent utilisent l&apos;analyse technique — pas parce qu&apos;elle est mauvaise, mais parce qu&apos;ils s&apos;arr&ecirc;tent &agrave; la surface.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>L&apos;analyse technique classique est n&eacute;cessaire mais insuffisante</h4>
        <p>Les indicateurs retard&eacute;s (RSI, MACD, moyennes mobiles) vous disent ce qui s&apos;est pass&eacute;. Le Market Profile et l&apos;Order Flow vous montrent ce qui se passe <strong>maintenant</strong> — et qui le fait. C&apos;est la diff&eacute;rence entre regarder dans le r&eacute;troviseur et regarder &agrave; travers le pare-brise.</p>
      </div>

      <hr />

      <h2 id="histoire">Bref historique</h2>
      <p>L&apos;analyse technique n&apos;est pas n&eacute;e avec les ordinateurs. Au XVIIIe si&egrave;cle, <strong>Munehisa Homma</strong> d&eacute;veloppait les chandeliers japonais pour trader le riz &agrave; Osaka. Il &eacute;tait d&eacute;j&agrave; convaincu que l&apos;&eacute;motion des participants &eacute;tait lisible dans les prix.</p>
      <p>En 1900, <strong>Charles Dow</strong> pose les bases modernes avec la Dow Theory : les prix int&egrave;grent tout, les tendances existent, et le volume confirme. C&apos;est encore le socle de l&apos;AT aujourd&apos;hui.</p>
      <p>Dans les ann&eacute;es 1970-80, l&apos;informatisation des march&eacute;s fait exploser les indicateurs techniques : RSI (Wilder, 1978), MACD (Appel, 1979), Bollinger Bands (1983). Tout le monde a soudain acc&egrave;s &agrave; des outils auparavant r&eacute;serv&eacute;s aux institutions.</p>
      <p>Paradoxe : plus ces outils se d&eacute;mocratisent, moins ils donnent d&apos;avantage. Quand tout le monde regarde le m&ecirc;me RSI en survente, qui reste-t-il pour acheter au bon moment ?</p>

      <hr />

      <h2 id="piliers">Les 3 piliers de l&apos;analyse technique</h2>

      <h3>1. Le prix int&egrave;gre tout</h3>
      <p>Toute information disponible — b&eacute;n&eacute;fices, taux d&apos;int&eacute;r&ecirc;t, g&eacute;opolitique, &eacute;motions — est d&eacute;j&agrave; dans le prix. Pas besoin d&apos;analyser les fondamentaux s&eacute;par&eacute;ment. C&apos;est un principe puissant mais incomplet : le prix int&egrave;gre tout, mais il ne vous dit pas <strong>qui</strong> ach&egrave;te ou vend.</p>

      <h3>2. Les prix &eacute;voluent en tendance</h3>
      <p>Les march&eacute;s ne sont pas al&eacute;atoires. Les tendances existent et persistent jusqu&apos;&agrave; ce qu&apos;un &eacute;v&eacute;nement les inverse. Identifier la tendance dominante est la premi&egrave;re &eacute;tape de toute analyse. Le probl&egrave;me : quand vous la voyez sur un indicateur retard&eacute;, elle est souvent d&eacute;j&agrave; avanc&eacute;e.</p>

      <h3>3. L&apos;histoire se r&eacute;p&egrave;te</h3>
      <p>Les patterns se reproduisent parce que la psychologie humaine ne change pas. La peur, la cupidit&eacute;, le FOMO cr&eacute;ent les m&ecirc;mes structures graphiques d&eacute;cennie apr&egrave;s d&eacute;cennie. Mais &quot;se r&eacute;p&egrave;te&quot; ne signifie pas &quot;de mani&egrave;re identique&quot; — c&apos;est l&agrave; que beaucoup se trompent.</p>

      <hr />

      <h2 id="outils-classiques">Les outils classiques</h2>

      <h3>Moyennes mobiles</h3>
      <p>La SMA 20, la SMA 50, la SMA 200 — les plus populaires. Elles lissent le bruit et montrent la tendance. Croisement de la 50 au-dessus de la 200 = &quot;Golden Cross&quot;. En dessous = &quot;Death Cross&quot;. Probl&egrave;me : quand le signal appara&icirc;t, le mouvement est d&eacute;j&agrave; bien entam&eacute;.</p>

      <h3>RSI (Relative Strength Index)</h3>
      <p>Oscillateur entre 0 et 100. Au-dessus de 70 = &quot;surachat&quot;, en dessous de 30 = &quot;survente&quot;. En th&eacute;orie, on ach&egrave;te en survente et on vend en surachat. En pratique, les march&eacute;s tendanciels restent en surachat pendant des semaines. Le RSI seul est un pi&egrave;ge.</p>

      <h3>MACD</h3>
      <p>Convergence/divergence de moyennes mobiles. Utile pour les divergences (prix monte, MACD descend), mais retard&eacute; par nature. Le temps que le MACD confirme un retournement, le mouvement a souvent fait 50% de son parcours.</p>

      <h3>Bollinger Bands</h3>
      <p>Bandes de volatilit&eacute; autour d&apos;une moyenne mobile. Le prix touche la bande sup&eacute;rieure = potentiellement &eacute;tir&eacute;. Touche la bande inf&eacute;rieure = potentiellement survendu. Mais en tendance forte, le prix &quot;surfe&quot; sur la bande sans jamais revenir &agrave; la moyenne.</p>

      <h3>Fibonacci</h3>
      <p>Retracements &agrave; 38.2%, 50%, 61.8%. Des niveaux &quot;magiques&quot; qui fonctionnent... quand ils fonctionnent. Pas de base statistique solide pour expliquer pourquoi le march&eacute; respecterait ces ratios. Ce qui se passe r&eacute;ellement : les traders placent des ordres &agrave; ces niveaux, cr&eacute;ant une proph&eacute;tie auto-r&eacute;alisatrice temporaire.</p>

      <h3>Trendlines et patterns chartistes</h3>
      <p>T&ecirc;te-&eacute;paules, triangles, drapeaux, double top/bottom. Visuellement satisfaisants, mais hautement subjectifs. Deux traders dessinent rarement la m&ecirc;me trendline sur le m&ecirc;me graphique.</p>

      <hr />

      <h2 id="limites">Les limites de l&apos;analyse technique classique</h2>

      <h3>1. Tout est retard&eacute;</h3>
      <p>Les indicateurs techniques sont calcul&eacute;s &agrave; partir des prix pass&eacute;s. Par d&eacute;finition, ils sont en retard. Quand le RSI passe en survente, les vendeurs ont d&eacute;j&agrave; fait leur travail. Vous achetez apr&egrave;s la bataille.</p>

      <h3>2. La proph&eacute;tie auto-r&eacute;alisatrice</h3>
      <p>Si des millions de traders regardent le m&ecirc;me support &agrave; 4500 sur le ES, ils placent tous des achats &agrave; 4500. Le prix rebondit. &quot;L&apos;analyse technique marche !&quot; Non — c&apos;est le consensus qui a cr&eacute;&eacute; le rebond. Et quand les institutionnels d&eacute;cident de casser ce consensus, tous ces ordres deviennent du carburant pour le mouvement inverse.</p>

      <h3>3. Aucune information sur le volume</h3>
      <p>Un chandelier vert de 20 points avec 500 contrats et un chandelier vert de 20 points avec 50 000 contrats se ressemblent &agrave; l&apos;&oelig;il nu. Pourtant, ils racontent des histoires totalement diff&eacute;rentes. L&apos;AT classique ignore cette dimension cruciale.</p>

      <h3>4. Le curve-fitting</h3>
      <p>Optimiser un RSI sur 14 p&eacute;riodes plut&ocirc;t que 12 parce que &ccedil;a fonctionne mieux sur l&apos;historique. Puis d&eacute;couvrir que &ccedil;a ne marche plus en temps r&eacute;el. L&apos;AT classique encourage l&apos;optimisation retroactive — un pi&egrave;ge mortel.</p>

      <div className="info-box">
        <div className="info-box-title">La v&eacute;rit&eacute; inconfortable</div>
        <p>90% des traders particuliers perdent de l&apos;argent. La majorit&eacute; utilisent exclusivement l&apos;analyse technique classique. Corr&eacute;lation n&apos;est pas causalit&eacute;, mais la question m&eacute;rite d&apos;&ecirc;tre pos&eacute;e : et si les outils &eacute;taient insuffisants ?</p>
      </div>

      <hr />

      <h2 id="market-profile">Le Market Profile : voir o&ugrave; le volume a r&eacute;ellement &eacute;t&eacute; &eacute;chang&eacute;</h2>
      <p>Le Market Profile, d&eacute;velopp&eacute; par <strong>Peter Steidlmayer</strong> au CBOT dans les ann&eacute;es 1980, r&eacute;pond &agrave; la question que l&apos;AT classique ignore : <strong>&agrave; quels prix le march&eacute; a-t-il pass&eacute; le plus de temps ?</strong></p>
      <p>Au lieu de tracer des indicateurs d&eacute;riv&eacute;s du prix, le Market Profile organise l&apos;activit&eacute; par blocs de 30 minutes (TPO — Time Price Opportunity). Vous voyez imm&eacute;diatement o&ugrave; le march&eacute; accepte le prix (haute concentration de TPO) et o&ugrave; il le rejette (faible concentration).</p>

      <h3>Les niveaux cl&eacute;s</h3>
      <p><strong>POC (Point of Control)</strong> : le prix o&ugrave; le plus de volume a &eacute;t&eacute; &eacute;chang&eacute;. C&apos;est le prix &quot;juste&quot; selon le march&eacute;. <strong>Value Area</strong> (VAH/VAL) : la zone o&ugrave; 70% du volume a &eacute;t&eacute; &eacute;chang&eacute;. Ces niveaux sont objectifs — pas de dessin subjectif.</p>

      <h3>Pourquoi c&apos;est sup&eacute;rieur</h3>
      <p>Un support en AT classique, c&apos;est une ligne que vous dessinez. Un VAL en Market Profile, c&apos;est l&apos;endroit o&ugrave; des <strong>milliers de contrats ont r&eacute;ellement &eacute;t&eacute; &eacute;chang&eacute;s</strong>. Lequel vous semble plus fiable ?</p>

      <hr />

      <h2 id="order-flow">L&apos;Order Flow : voir qui ach&egrave;te et qui vend</h2>
      <p>L&apos;Order Flow va encore plus loin que le Market Profile. Il d&eacute;compose chaque transaction pour r&eacute;v&eacute;ler <strong>qui est agressif</strong> (acheteurs market vs vendeurs market) &agrave; chaque niveau de prix.</p>
      <p>Le Footprint Chart montre le volume Bid &times; Ask &agrave; chaque niveau. Les d&eacute;s&eacute;quilibres (imbalances), l&apos;absorption, le delta cumulatif — tout est visible en temps r&eacute;el. Vous ne devinez plus : vous <strong>voyez</strong> la force.</p>

      <h3>L&apos;avantage r&eacute;el</h3>
      <p>Quand un indicateur RSI dit &quot;surachat&quot;, le Footprint peut montrer de l&apos;absorption acheteuse massive — signe que des institutionnels accumulent malgr&eacute; le prix &eacute;lev&eacute;. Le RSI vous aurait fait vendre. Le Footprint vous aurait fait rester long. La diff&eacute;rence entre gagner et perdre.</p>

      <hr />

      <h2 id="comparaison">AT classique vs Market Profile + Order Flow</h2>

      <table className="compare-table">
        <thead><tr><th>Crit&egrave;re</th><th>AT classique</th><th>Market Profile + Order Flow</th></tr></thead>
        <tbody>
          <tr><td>Donn&eacute;es</td><td>Prix pass&eacute;s uniquement</td><td>Volume r&eacute;el + flux d&apos;ordres en temps r&eacute;el</td></tr>
          <tr><td>Niveaux cl&eacute;s</td><td>Subjectifs (trendlines, supports dessin&eacute;s)</td><td>Objectifs (POC, VAH, VAL, VWAP)</td></tr>
          <tr><td>Timing</td><td>Retard&eacute; (indicateurs lag)</td><td>Temps r&eacute;el (footprint, delta)</td></tr>
          <tr><td>Contexte</td><td>Aucun (type de journ&eacute;e, rotation)</td><td>Complet (type de journ&eacute;e, phase d&apos;auction)</td></tr>
          <tr><td>Qui l&apos;utilise</td><td>Traders particuliers</td><td>Traders institutionnels et professionnels</td></tr>
          <tr><td>Edge</td><td>Diminu&eacute; (tout le monde a les m&ecirc;mes indicateurs)</td><td>Pr&eacute;serv&eacute; (peu de particuliers ma&icirc;trisent)</td></tr>
          <tr><td>Courbe d&apos;apprentissage</td><td>Faible (facile &agrave; apprendre, dur &agrave; rentabiliser)</td><td>Plus raide (dur &agrave; apprendre, plus facile &agrave; rentabiliser)</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="combiner">Comment combiner AT, Market Profile et Order Flow</h2>
      <p>L&apos;id&eacute;e n&apos;est pas de jeter l&apos;analyse technique classique &agrave; la poubelle. C&apos;est de la mettre &agrave; sa juste place : un <strong>filtre de contexte</strong>, pas un g&eacute;n&eacute;rateur de signaux.</p>

      <h3>La hi&eacute;rarchie</h3>
      <p><strong>Market Profile</strong> donne le contexte macro : type de journ&eacute;e, niveaux cl&eacute;s, direction probable. <strong>Order Flow</strong> donne le timing micro : quand entrer, o&ugrave; placer le stop. <strong>AT classique</strong> donne un filtre suppl&eacute;mentaire : la tendance de fond, les divergences long terme.</p>

      <h3>Workflow concret</h3>
      <p>1. Market Profile : identifier le type de journ&eacute;e (rotation ? tendance ?) et les niveaux cl&eacute;s (POC, VAH, VAL).</p>
      <p>2. AT classique : la tendance journali&egrave;re est-elle haussi&egrave;re ou baissi&egrave;re ? Y a-t-il une divergence sur le daily ?</p>
      <p>3. Order Flow : au niveau identifi&eacute;, que montre le Footprint ? Absorption ? Imbalance ? Le delta confirme-t-il ?</p>
      <p>4. D&eacute;cision : entrer seulement si les 3 couches convergent.</p>

      <hr />

      <h2 id="erreurs">7 erreurs &agrave; &eacute;viter</h2>

      <h3>1. Accumuler les indicateurs</h3>
      <p>RSI + MACD + Stochastique + Bollinger sur le m&ecirc;me graphique. Plus d&apos;indicateurs = plus de confusion. La plupart mesurent la m&ecirc;me chose diff&eacute;remment. Simplifiez.</p>

      <h3>2. Ignorer le volume</h3>
      <p>Un breakout sans volume est un faux breakout. Le volume est la seule confirmation valable d&apos;un mouvement de prix. Si vous ne regardez pas le volume, vous tradez &agrave; l&apos;aveugle.</p>

      <h3>3. Dessiner des supports subjectifs</h3>
      <p>Vous pouvez dessiner une trendline qui justifie n&apos;importe quelle th&egrave;se. Les niveaux Market Profile sont calcul&eacute;s math&eacute;matiquement — pas de biais de confirmation.</p>

      <h3>4. Optimiser sur l&apos;historique</h3>
      <p>Un RSI &agrave; 7 p&eacute;riodes fonctionne mieux sur les 6 derniers mois ? Parfait. Il ne fonctionnera probablement plus sur les 6 prochains. Le curve-fitting est l&apos;ennemi num&eacute;ro 1 du trader technique.</p>

      <h3>5. Trader les patterns sans contexte</h3>
      <p>Un marteau (hammer) n&apos;a de valeur qu&apos;en fin de tendance baissi&egrave;re, sur un niveau de support volume, avec de l&apos;absorption visible. Sans contexte, c&apos;est juste une bougie avec une m&egrave;che.</p>

      <h3>6. Ignorer les types de journ&eacute;e</h3>
      <p>Une strat&eacute;gie de breakout ne fonctionne pas un jour de rotation. Une strat&eacute;gie de mean reversion ne fonctionne pas un jour de tendance. Le Market Profile vous dit quel type de journ&eacute;e se d&eacute;veloppe — l&apos;AT classique ne le fait pas.</p>

      <h3>7. Croire que l&apos;AT suffit</h3>
      <p>L&apos;AT classique est un point de d&eacute;part, pas une destination. Les traders qui percent sont ceux qui &eacute;voluent vers des outils qui montrent la r&eacute;alit&eacute; du march&eacute; : <strong>o&ugrave;</strong> le volume se concentre et <strong>qui</strong> est agressif.</p>

      <hr />

      <h2 id="bass">Apprendre l&apos;analyse compl&egrave;te avec BASS Trading</h2>
      <p>Le mentorat BASS Trading ne vous apprend pas &agrave; coller des indicateurs sur un graphique. Il vous apprend &agrave; <strong>lire le march&eacute;</strong> — Market Profile pour le contexte, Order Flow pour le timing, et oui, les bases de l&apos;AT pour filtrer.</p>
      <p>S&eacute;bastien Constant trade les Futures ES et NQ en live chaque jour. Vous voyez comment il combine ces trois couches d&apos;analyse en temps r&eacute;el, avec des explications &agrave; chaque d&eacute;cision. Pas de th&eacute;orie abstraite — du trading concret.</p>
    </>
  );
}
