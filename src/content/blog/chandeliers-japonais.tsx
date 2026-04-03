export default function ChandeliersJaponais() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce qu&apos;un chandelier japonais ?</h2>
      <p>Le chandelier japonais est la repr&eacute;sentation graphique la plus utilis&eacute;e en trading. Chaque bougie condense quatre informations : le prix d&apos;ouverture, le plus haut, le plus bas et la cl&ocirc;ture — sur une p&eacute;riode donn&eacute;e. En un coup d&apos;&oelig;il, vous voyez qui a gagn&eacute; la bataille entre acheteurs et vendeurs.</p>
      <p>L&apos;invention revient &agrave; <strong>Munehisa Homma</strong>, un marchand de riz japonais du XVIIIe si&egrave;cle. Il a compris avant tout le monde que le prix ne refl&egrave;te pas seulement la valeur — il refl&egrave;te l&apos;<strong>&eacute;motion</strong> des participants. Les chandeliers sont une lecture psychologique du march&eacute;.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Un chandelier est un r&eacute;sum&eacute;, pas une explication</h4>
        <p>Un chandelier vous dit le r&eacute;sultat d&apos;une bataille. Le Footprint Chart vous montre la bataille elle-m&ecirc;me — qui a achet&eacute;, qui a vendu, &agrave; quel prix, avec quelle agressivit&eacute;. Le chandelier est le score final. Le Footprint est le match complet.</p>
      </div>

      <hr />

      <h2 id="anatomie">Anatomie d&apos;un chandelier</h2>

      <h3>Le corps (body)</h3>
      <p>Le rectangle entre l&apos;ouverture et la cl&ocirc;ture. <strong>Corps vert/blanc</strong> = la cl&ocirc;ture est au-dessus de l&apos;ouverture (haussier). <strong>Corps rouge/noir</strong> = la cl&ocirc;ture est en dessous de l&apos;ouverture (baissier). Plus le corps est grand, plus la conviction est forte.</p>

      <h3>Les m&egrave;ches (shadows/wicks)</h3>
      <p>Les traits fins au-dessus et en dessous du corps. La <strong>m&egrave;che haute</strong> montre le plus haut atteint puis rejet&eacute;. La <strong>m&egrave;che basse</strong> montre le plus bas atteint puis rejet&eacute;. De longues m&egrave;ches = forte ind&eacute;cision ou rejet violent d&apos;un niveau.</p>

      <h3>Ce que le chandelier ne dit pas</h3>
      <p>Le chandelier ne montre pas le volume &eacute;chang&eacute; &agrave; chaque prix. Il ne montre pas si les acheteurs &eacute;taient agressifs (market orders) ou passifs (limit orders). Il ne montre pas la chronologie interne de la bougie. Toutes ces informations sont dans le Footprint.</p>

      <hr />

      <h2 id="patterns-renversement">10 patterns de renversement</h2>

      <h3>1. Marteau (Hammer)</h3>
      <p>Petite bougie avec une longue m&egrave;che basse, en fin de tendance baissi&egrave;re. Les vendeurs ont pouss&eacute; le prix vers le bas mais les acheteurs ont tout repris. Signal haussier — mais seulement sur un niveau de support volume (VAL, POC).</p>

      <h3>2. &Eacute;toile filante (Shooting Star)</h3>
      <p>L&apos;inverse du marteau : longue m&egrave;che haute, petit corps en bas. En fin de tendance haussi&egrave;re. Les acheteurs ont essay&eacute; de pousser plus haut mais les vendeurs ont rejet&eacute;. Signal baissier.</p>

      <h3>3. Engulfing haussier</h3>
      <p>Une grosse bougie verte qui &quot;avale&quot; enti&egrave;rement la bougie rouge pr&eacute;c&eacute;dente. Renversement haussier puissant quand il appara&icirc;t sur un support volume avec un delta positif sur le Footprint.</p>

      <h3>4. Engulfing baissier</h3>
      <p>L&apos;inverse : grosse bougie rouge qui avale la verte pr&eacute;c&eacute;dente. Signal de retournement baissier. Fiable sur une r&eacute;sistance volume (VAH, Naked POC).</p>

      <h3>5. &Eacute;toile du matin (Morning Star)</h3>
      <p>Pattern &agrave; 3 bougies : grande rouge, petite ind&eacute;cision (doji ou toupie), grande verte. Le march&eacute; h&eacute;site puis les acheteurs prennent le contr&ocirc;le. Signal haussier fort.</p>

      <h3>6. &Eacute;toile du soir (Evening Star)</h3>
      <p>L&apos;inverse : grande verte, ind&eacute;cision, grande rouge. Retournement baissier. Plus fiable pr&egrave;s d&apos;une r&eacute;sistance Market Profile.</p>

      <h3>7. Harami haussier</h3>
      <p>Petite bougie verte contenue dans le corps de la grande bougie rouge pr&eacute;c&eacute;dente. La pression vendeuse s&apos;&eacute;puise. Moins puissant que l&apos;engulfing — n&eacute;cessite confirmation.</p>

      <h3>8. Harami baissier</h3>
      <p>Petite rouge dans le corps de la grande verte. La pression acheteuse faiblit. Attention : sans volume confirmant, c&apos;est souvent juste une pause.</p>

      <h3>9. Piercing Line</h3>
      <p>Apr&egrave;s une baisse, ouverture en gap baissier puis cl&ocirc;ture au-dessus du milieu de la bougie rouge pr&eacute;c&eacute;dente. Les acheteurs contre-attaquent. Signal haussier mod&eacute;r&eacute;.</p>

      <h3>10. Trois soldats blancs / Trois corbeaux noirs</h3>
      <p>Trois bougies cons&eacute;cutives dans la m&ecirc;me direction avec des corps croissants. Signal fort de renversement — mais v&eacute;rifiez que le volume accompagne. Trois bougies vertes sans volume = rallye fragile.</p>

      <hr />

      <h2 id="patterns-continuation">5 patterns de continuation</h2>

      <h3>1. Rising Three Methods</h3>
      <p>Grande bougie verte, puis 3 petites bougies rouges qui restent dans le corps de la premi&egrave;re, puis nouvelle grande bougie verte. La tendance reprend apr&egrave;s une br&egrave;ve consolidation.</p>

      <h3>2. Falling Three Methods</h3>
      <p>L&apos;inverse baissier. Grande rouge, 3 petites vertes, grande rouge. La tendance baissi&egrave;re continue.</p>

      <h3>3. Marubozu</h3>
      <p>Bougie sans m&egrave;che — ouverture = plus bas (haussier) ou plus haut (baissier). Conviction totale. Quand c&apos;est accompagn&eacute; de stacked imbalances sur le Footprint, c&apos;est un signal de continuation tr&egrave;s fort.</p>

      <h3>4. Fen&ecirc;tres (Windows/Gaps)</h3>
      <p>Un espace vide entre deux bougies. Gap haussier = force acheteuse. Gap baissier = force vendeuse. Les gaps tendent &agrave; &ecirc;tre combl&eacute;s — comme les single prints en Market Profile.</p>

      <h3>5. Toupie en tendance (Spinning Top)</h3>
      <p>Petit corps, m&egrave;ches &eacute;gales. En pleine tendance, c&apos;est une pause — pas un renversement. La tendance reprend g&eacute;n&eacute;ralement dans la m&ecirc;me direction.</p>

      <hr />

      <h2 id="patterns-indecision">5 patterns d&apos;ind&eacute;cision</h2>

      <h3>1. Doji standard</h3>
      <p>Ouverture = cl&ocirc;ture (ou presque). Ni les acheteurs ni les vendeurs n&apos;ont gagn&eacute;. En isol&eacute;, ce n&apos;est pas un signal. Mais apr&egrave;s une longue tendance, c&apos;est un avertissement.</p>

      <h3>2. Dragonfly Doji</h3>
      <p>Longue m&egrave;che basse, pas de m&egrave;che haute. Comme un marteau mais avec ouverture = cl&ocirc;ture. Haussier en fin de baisse.</p>

      <h3>3. Gravestone Doji</h3>
      <p>Longue m&egrave;che haute, pas de m&egrave;che basse. Baissier en fin de hausse — les acheteurs ont &eacute;t&eacute; compl&egrave;tement repouss&eacute;s.</p>

      <h3>4. Long-Legged Doji</h3>
      <p>Longues m&egrave;ches des deux c&ocirc;t&eacute;s. Ind&eacute;cision extr&ecirc;me — le march&eacute; est tiraillé&eacute; entre acheteurs et vendeurs. Souvent pr&eacute;curseur d&apos;un mouvement violent.</p>

      <h3>5. Toupie (Spinning Top)</h3>
      <p>Similaire au doji mais avec un petit corps. L&apos;ind&eacute;cision domine mais un camp a l&eacute;g&egrave;rement l&apos;avantage. &Agrave; confirmer par le volume et le contexte.</p>

      <hr />

      <h2 id="timeframes">Quels timeframes ?</h2>
      <p>Les chandeliers fonctionnent sur tous les timeframes, mais leur fiabilit&eacute; augmente avec la p&eacute;riode. Un marteau en daily a plus de poids qu&apos;un marteau en 5 minutes — plus de participants ont contribu&eacute; &agrave; sa formation.</p>
      <p>Pour le day trading sur Futures (ES, NQ), les timeframes de r&eacute;f&eacute;rence sont le <strong>5 minutes</strong> et le <strong>15 minutes</strong>. Mais le vrai edge n&apos;est pas dans le timeframe — il est dans ce que vous regardez &agrave; l&apos;int&eacute;rieur de la bougie (Footprint).</p>

      <hr />

      <h2 id="limites">Les limites des chandeliers</h2>
      <p>Les patterns de chandeliers ont &eacute;t&eacute; d&eacute;velopp&eacute;s pour le march&eacute; du riz au XVIIIe si&egrave;cle. Les march&eacute;s modernes sont domin&eacute;s par le trading algorithmique et les ordres institutionnels. La forme de la bougie seule ne suffit plus.</p>

      <h3>Probl&egrave;me principal : pas de volume granulaire</h3>
      <p>Deux bougies identiques visuellement peuvent cacher des r&eacute;alit&eacute;s oppos&eacute;es. L&apos;une est soutenue par de l&apos;absorption institutionnelle massive. L&apos;autre est un mouvement cr&eacute;eux sans conviction. Vous ne voyez pas la diff&eacute;rence sans le Footprint.</p>

      <div className="info-box">
        <div className="info-box-title">R&egrave;gle d&apos;or</div>
        <p>Ne tradez jamais un pattern de chandelier seul. Exigez toujours : (1) un niveau de support/r&eacute;sistance volume (Market Profile), (2) une confirmation par le flux d&apos;ordres (Footprint ou delta), (3) un contexte coh&eacute;rent (type de journ&eacute;e).</p>
      </div>

      <hr />

      <h2 id="footprint">Du chandelier au Footprint</h2>
      <p>Le Footprint Chart est l&apos;&eacute;volution naturelle du chandelier japonais. Au lieu de voir 4 chiffres (OHLC), vous voyez le volume Bid &times; Ask &agrave; chaque niveau de prix &agrave; l&apos;int&eacute;rieur de la bougie.</p>
      <p>Un &quot;marteau&quot; avec de l&apos;absorption acheteuse visible sur le Footprint (gros volume Bid sans descente du prix) est un signal 10 fois plus fiable que le m&ecirc;me marteau lu uniquement par sa forme. Vous passez de l&apos;interpr&eacute;tation subjective &agrave; la lecture objective.</p>

      <hr />

      <h2 id="strategies">3 strat&eacute;gies combinant chandeliers et volume</h2>

      <h3>1. Engulfing + absorption Footprint</h3>
      <p>Identifiez un engulfing haussier sur un VAL. V&eacute;rifiez sur le Footprint : y a-t-il de l&apos;absorption acheteuse (gros volume Bid sans descente du prix) ? Des stacked imbalances acheteurs ? Si oui, entrez long avec un stop sous le VAL.</p>

      <h3>2. Doji + divergence delta</h3>
      <p>Un doji apr&egrave;s une tendance, combin&eacute; &agrave; une divergence du delta cumulatif (prix fait un nouveau high mais le CVD fait un lower high). Le chandelier montre l&apos;ind&eacute;cision, le delta montre que les acheteurs s&apos;&eacute;puisent.</p>

      <h3>3. Marubozu + Market Profile breakout</h3>
      <p>Un marubozu qui casse la Value Area avec des single prints dans le sillage. C&apos;est un jour de tendance en formation. Le chandelier montre la conviction, le Market Profile montre l&apos;initiative — tradez dans le sens du mouvement.</p>

      <hr />

      <h2 id="erreurs">5 erreurs courantes</h2>

      <h3>1. Trader chaque pattern</h3>
      <p>Un marteau en milieu de range ne vaut rien. Le contexte d&eacute;termine la valeur du pattern — pas sa forme seule.</p>

      <h3>2. Ignorer le volume</h3>
      <p>Un engulfing sans volume est une illusion. V&eacute;rifiez toujours que le mouvement est accompagn&eacute; de volume r&eacute;el.</p>

      <h3>3. M&eacute;moriser sans comprendre</h3>
      <p>Apprendre 50 patterns par c&oelig;ur ne sert &agrave; rien si vous ne comprenez pas la psychologie derri&egrave;re chaque bougie — qui a eu peur, qui a pris le contr&ocirc;le, pourquoi.</p>

      <h3>4. Oublier le timeframe sup&eacute;rieur</h3>
      <p>Un marteau en 5 minutes n&apos;a aucun poids si le daily est en plein sell-off. Alignez toujours vos chandeliers avec la tendance du timeframe sup&eacute;rieur.</p>

      <h3>5. Ne pas &eacute;voluer vers le Footprint</h3>
      <p>Les chandeliers sont un bon point de d&eacute;part. Mais si vous voulez un edge r&eacute;el sur les Futures, vous devez voir &agrave; l&apos;int&eacute;rieur de la bougie. Le Footprint est l&apos;&eacute;tape suivante.</p>

      <hr />

      <h2 id="bass">Apprendre avec BASS Trading</h2>
      <p>Le mentorat BASS Trading vous apprend &agrave; lire les chandeliers dans leur contexte — pas comme des patterns isol&eacute;s, mais comme des &eacute;l&eacute;ments d&apos;un puzzle plus large int&eacute;grant le Market Profile, le Volume Profile et l&apos;Order Flow.</p>
      <p>S&eacute;bastien Constant montre en live comment il combine la lecture des bougies avec le Footprint Chart pour prendre des d&eacute;cisions pr&eacute;cises sur ES et NQ. Chaque session est une le&ccedil;on concr&egrave;te.</p>
    </>
  );
}
