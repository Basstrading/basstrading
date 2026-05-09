export default function FootprintChartTrading() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce qu&apos;un Footprint Chart ?</h2>
      <p>Un chandelier classique vous montre 4 chiffres : Open, High, Low, Close. Et le volume total de la bougie. C&apos;est comme regarder le score final d&apos;un match de foot sans avoir vu le match. Vous savez qui a gagn&eacute;, mais pas <strong>comment</strong>.</p>
      <p>Le Footprint Chart ouvre la bougie. Il d&eacute;compose le volume &eacute;chang&eacute; &agrave; <strong>chaque niveau de prix</strong>, s&eacute;par&eacute; entre les ordres ex&eacute;cut&eacute;s c&ocirc;t&eacute; Bid (vendeurs agressifs) et c&ocirc;t&eacute; Ask (acheteurs agressifs). Vous voyez la bataille tick par tick — qui pousse, qui absorbe, o&ugrave; la force bascule.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Le Footprint r&eacute;v&egrave;le l&apos;intention derri&egrave;re le prix</h4>
        <p>Une bougie verte ne signifie pas que les acheteurs ont gagn&eacute; partout. Le Footprint peut montrer une forte absorption vendeuse dans le haut de la bougie — signe que le rallye est en train de s&apos;essouffler. L&apos;apparence trompe. Le volume ne ment pas.</p>
      </div>

      <p>D&eacute;velopp&eacute; pour les march&eacute;s Futures (CME), le Footprint est devenu l&apos;outil de r&eacute;f&eacute;rence des traders professionnels qui ont besoin de lire le flux d&apos;ordres avec pr&eacute;cision. Aujourd&apos;hui, il est accessible &agrave; tout trader &eacute;quip&eacute; de Sierra Chart et de donn&eacute;es CME.</p>

      <hr />

      <h2 id="composants">Les composants du Footprint</h2>

      <h3>Bid et Ask</h3>
      <p>&Agrave; chaque niveau de prix dans une bougie, le Footprint affiche deux chiffres : le volume ex&eacute;cut&eacute; au <strong>Bid</strong> (ordres de vente agressifs — le vendeur &quot;tape&quot; le Bid) et le volume ex&eacute;cut&eacute; &agrave; l&apos;<strong>Ask</strong> (ordres d&apos;achat agressifs — l&apos;acheteur &quot;tape&quot; l&apos;Ask).</p>
      <p>Format typique : <strong>Bid &times; Ask</strong>. Par exemple, <strong>245 &times; 892</strong> signifie que 245 contrats ont &eacute;t&eacute; vendus agressivement et 892 achet&eacute;s agressivement &agrave; ce niveau de prix. Le d&eacute;s&eacute;quilibre est clair — les acheteurs dominent.</p>

      <h3>Le Delta</h3>
      <p>Le delta est la diff&eacute;rence entre le volume Ask et le volume Bid &agrave; un niveau de prix donn&eacute;. <strong>Delta = Ask - Bid</strong>. Un delta positif signifie plus d&apos;achats agressifs. Un delta n&eacute;gatif, plus de ventes agressives.</p>
      <p>Le delta total de la bougie (somme de tous les deltas par niveau) indique la pression nette. Mais attention : <strong>le delta total peut cacher des r&eacute;alit&eacute;s oppos&eacute;es</strong> &agrave; diff&eacute;rents niveaux de prix. C&apos;est pour &ccedil;a qu&apos;on regarde le Footprint niveau par niveau.</p>

      <h3>Le volume par niveau de prix</h3>
      <p>Le volume total &agrave; chaque niveau (Bid + Ask) r&eacute;v&egrave;le o&ugrave; l&apos;activit&eacute; est concentr&eacute;e. Les niveaux avec le plus de volume sont souvent des <strong>niveaux d&apos;int&eacute;r&ecirc;t institutionnel</strong> — des prix o&ugrave; les gros participants ont accumul&eacute; ou distribu&eacute;.</p>

      <hr />

      <h2 id="imbalances">Lire les d&eacute;s&eacute;quilibres (Imbalances)</h2>
      <p>Un d&eacute;s&eacute;quilibre (imbalance) se produit quand le ratio entre le volume Ask et le volume Bid (ou inversement) d&eacute;passe un seuil significatif — g&eacute;n&eacute;ralement <strong>300% ou plus</strong> (ratio 3:1).</p>

      <h3>Comment les rep&eacute;rer</h3>
      <p>Sierra Chart colore automatiquement les cellules d&eacute;s&eacute;quilibr&eacute;es. Un d&eacute;s&eacute;quilibre acheteur (Ask &gt;&gt; Bid) appara&icirc;t quand le volume Ask &agrave; un niveau de prix est au moins 3 fois sup&eacute;rieur au volume Bid du niveau juste en dessous. L&apos;inverse pour un d&eacute;s&eacute;quilibre vendeur.</p>

      <h3>Stacked Imbalances</h3>
      <p>Quand 3 d&eacute;s&eacute;quilibres ou plus sont empil&eacute;s sur des niveaux de prix cons&eacute;cutifs, c&apos;est un <strong>stacked imbalance</strong> — un signal de forte conviction directionnelle. C&apos;est l&apos;&eacute;quivalent d&apos;une troupe qui avance sur tous les fronts simultan&eacute;ment.</p>

      <div className="info-box">
        <div className="info-box-title">En pratique</div>
        <p>Les stacked imbalances acheteurs en bas d&apos;une bougie, combin&eacute;s &agrave; une zone de Value Area Low du Market Profile, sont un des setups les plus fiables en intraday. C&apos;est la convergence entre la structure macro (Market Profile) et l&apos;action micro (Footprint).</p>
      </div>

      <hr />

      <h2 id="absorption">L&apos;absorption</h2>
      <p>L&apos;absorption est le ph&eacute;nom&egrave;ne inverse du d&eacute;s&eacute;quilibre. Elle se produit quand un <strong>gros volume est &eacute;chang&eacute; &agrave; un niveau de prix sans que le prix ne bouge significativement</strong>.</p>
      <p>Concr&egrave;tement : le prix arrive &agrave; un niveau, les vendeurs attaquent massivement (gros volume Bid), mais le prix ne descend pas. Quelqu&apos;un absorbe toute cette pression vendeuse. C&apos;est g&eacute;n&eacute;ralement un institutionnel qui accumule une position acheteuse.</p>

      <h3>Absorption et retournement</h3>
      <p>L&apos;absorption en bas d&apos;un mouvement baissier est souvent le <strong>premier signal d&apos;un retournement</strong>. Le prix a &eacute;t&eacute; pouss&eacute; vers le bas, les vendeurs agressifs ont vid&eacute; leur &eacute;nergie, et un acheteur massif a tout absorb&eacute;. Le prochain mouvement sera probablement haussier.</p>
      <p>Identifiez l&apos;absorption dans le Footprint : un niveau de prix avec un volume total tr&egrave;s &eacute;lev&eacute;, un delta proche de z&eacute;ro ou l&eacute;g&egrave;rement positif, et un prix qui refuse de descendre davantage.</p>

      <hr />

      <h2 id="cvd">Le Delta cumulatif (CVD)</h2>
      <p>Le CVD (Cumulative Volume Delta) est le total cumul&eacute; de tous les deltas dans le temps. Il trace une courbe qui montre la pression nette acheteur/vendeur sur la dur&eacute;e.</p>

      <h3>Divergences prix/CVD</h3>
      <p>La divergence est le signal le plus puissant du CVD. Si le prix fait de nouveaux plus hauts mais que le CVD fait des plus bas, cela signifie que <strong>le rallye n&apos;est plus soutenu par de vrais acheteurs agressifs</strong>. Le prix monte par manque de vendeurs, pas par force acheteuse. C&apos;est un signe d&apos;&eacute;puisement.</p>
      <p>L&apos;inverse est vrai : si le prix fait de nouveaux plus bas mais que le CVD remonte, les vendeurs perdent leur force — un retournement haussier est probable.</p>

      <h3>Confirmation de tendance</h3>
      <p>Quand le prix et le CVD &eacute;voluent dans la m&ecirc;me direction, la tendance est saine. Les acheteurs (ou vendeurs) agressifs soutiennent activement le mouvement. C&apos;est la configuration o&ugrave; il faut suivre la tendance, pas la contrer.</p>

      <hr />

      <h2 id="patterns">Patterns concrets</h2>

      <table className="compare-table">
        <thead><tr><th>Pattern</th><th>Ce qu&apos;il montre</th><th>Signal</th></tr></thead>
        <tbody>
          <tr><td>Stacked Imbalances (acheteur)</td><td>3+ d&eacute;s&eacute;quilibres Ask cons&eacute;cutifs</td><td>Forte pression acheteuse, continuation haussi&egrave;re probable</td></tr>
          <tr><td>Stacked Imbalances (vendeur)</td><td>3+ d&eacute;s&eacute;quilibres Bid cons&eacute;cutifs</td><td>Forte pression vendeuse, continuation baissi&egrave;re probable</td></tr>
          <tr><td>Exhaustion</td><td>Gros volume + delta extr&ecirc;me en fin de mouvement</td><td>&Eacute;puisement de la tendance, retournement imminent</td></tr>
          <tr><td>Absorption Reversal</td><td>Gros volume, delta faible, prix stable</td><td>Un participant massif absorbe — retournement probable</td></tr>
          <tr><td>Divergence CVD</td><td>Prix fait des nouveaux extr&ecirc;mes, CVD diverge</td><td>Mouvement non soutenu, retournement &agrave; anticiper</td></tr>
          <tr><td>Unfinished Business</td><td>Niveau avec tr&egrave;s peu de volume dans le Footprint</td><td>Le march&eacute; reviendra tester ce niveau (gap de liquidit&eacute;)</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="logiciel">Quel logiciel utiliser ?</h2>
      <p><strong>Sierra Chart</strong> est le standard professionnel pour le Footprint Chart. Son &quot;Numbers Bars&quot; offre la visualisation la plus compl&egrave;te et configurable du march&eacute; : couleurs par delta, seuils d&apos;imbalance personnalisables, affichage Bid &times; Ask, delta cumulatif par bougie.</p>
      <p>Alternatives : ATAS offre une interface plus visuelle mais moins de profondeur. Quantower est un bon compromis. Bookmap excelle en visualisation de la liquidit&eacute;. Mais pour la fiabilit&eacute; des donn&eacute;es et la personnalisation, Sierra Chart reste imbattable.</p>

      <div className="info-box">
        <div className="info-box-title">Inclus dans le mentorat</div>
        <p>Le mentorat BASS Trading fournit les templates Sierra Chart pr&eacute;-configur&eacute;s pour le Footprint, le Market Profile et le CVD. Vous n&apos;avez pas besoin de passer des semaines &agrave; configurer — tout est pr&ecirc;t d&egrave;s le premier jour.</p>
      </div>

      <hr />

      <h2 id="patterns">Les 6 patterns clés à reconnaître sur le Footprint</h2>
      <p>La lecture du Footprint repose sur un nombre limité de patterns récurrents. Les maîtriser vous permet d&apos;identifier les opportunités en quelques secondes, sans surcharger votre processus de décision.</p>

      <h3>1. Stacked Imbalances (déséquilibres empilés)</h3>
      <p>Plusieurs imbalances consécutives dans la même direction sur 3 niveaux de prix ou plus. Sur le Footprint, vous voyez 4-5 niveaux successifs avec un ratio Ask/Bid (ou Bid/Ask) supérieur à 3:1. C&apos;est le signal le plus puissant d&apos;une accélération directionnelle institutionnelle. Setup : entrée dans le sens des stacked imbalances avec stop sous le dernier niveau, target HVN suivant.</p>

      <h3>2. Absorption (la défense d&apos;un niveau)</h3>
      <p>Volume anormalement élevé à un niveau de prix, avec delta extrême dans une direction, mais le prix ne bouge pas. C&apos;est le signal qu&apos;une grosse main absorbe les ordres agressifs. <strong>Trois signatures visuelles</strong> : (1) volume 3-5 fois supérieur aux niveaux voisins, (2) delta de -2000+ sans déplacement de prix, (3) wicks répétés au même niveau sur plusieurs bougies. L&apos;absorption précède statistiquement un retournement.</p>

      <h3>3. Exhaustion (épuisement du mouvement)</h3>
      <p>Pic de volume massif à l&apos;extrême d&apos;un mouvement, suivi d&apos;une chute brutale du delta. Sur le Footprint, la dernière bougie d&apos;une tendance affiche un volume record sur le high (en haussier) ou sur le low (en baissier), puis les bougies suivantes montrent un delta neutre ou inverse. Signal de retournement à haute probabilité, surtout combiné avec un Naked POC ou une zone de Value Area majeure.</p>

      <h3>4. Footprint en P (distribution)</h3>
      <p>Volume concentré dans la partie haute des bougies sur 3-5 bougies consécutives, avec absorption en haut et delta qui s&apos;essouffle. Distribution institutionnelle classique — les vendeurs déchargent leurs positions tout en maintenant l&apos;apparence d&apos;une tendance haussière. Setup : short sur cassure de la VAL formée par cette structure, target POC ou Naked POC inférieur.</p>

      <h3>5. Footprint en b (accumulation)</h3>
      <p>Inverse du P : volume concentré dans la partie basse des bougies, avec absorption en bas et delta qui se redresse. Accumulation institutionnelle — les acheteurs construisent leur position pendant la baisse. Setup : long sur retest VAL avec confluence absorption, target POC.</p>

      <h3>6. Initiative + Continuation</h3>
      <p>Une bougie d&apos;initiative (delta extrême + volume très élevé + déplacement franc du prix) suivie de bougies de continuation (delta aligné, volume soutenu). C&apos;est le pattern de tendance le plus fiable : ne pas trader contre cette structure tant qu&apos;elle est en place. Setup : ajouter à la position dans le sens de l&apos;initiative sur les pullbacks.</p>

      <hr />

      <h2 id="setups">Setups Footprint sur les niveaux Market Profile</h2>
      <p>Le Footprint isolé donne des signaux. Combiné avec les niveaux du <a href="/market-profile/">Market Profile</a> et du <a href="/volume-profile/">Volume Profile</a>, il devient redoutable. Voici les 4 setups de référence.</p>

      <h3>Setup 1 : Rebond sur VAL avec absorption</h3>
      <p><strong>Contexte</strong> : marché en équilibre, prix descend tester la VAL. <strong>Signal Footprint</strong> : volume élevé sur les 2-3 derniers ticks de la VAL, delta très négatif (-1500+) mais le prix tient. Stacked imbalances acheteuses qui apparaissent juste au-dessus. <strong>Entrée</strong> : long à VAL+1 tick. <strong>Stop</strong> : sous le low de la bougie d&apos;absorption. <strong>Target</strong> : POC en T1, VAH en T2.</p>

      <h3>Setup 2 : Rejet sur VAH avec exhaustion</h3>
      <p><strong>Contexte</strong> : prix monte tester la VAH par le bas. <strong>Signal Footprint</strong> : pic de volume sur la VAH, delta extrême (+2000+), puis bougie suivante avec delta neutre ou négatif. <strong>Entrée</strong> : short à VAH-1 tick après confirmation. <strong>Stop</strong> : au-dessus du high d&apos;exhaustion. <strong>Target</strong> : POC en T1, VAL en T2.</p>

      <h3>Setup 3 : Cassure d&apos;Initial Balance avec stacked imbalances</h3>
      <p><strong>Contexte</strong> : Initial Balance définie sur la première heure. Cassure haussière avec volume. <strong>Signal Footprint</strong> : 3+ niveaux consécutifs de stacked imbalances acheteuses au-dessus de l&apos;IB high. Delta cumulé en hausse. <strong>Entrée</strong> : long sur retest IB high. <strong>Stop</strong> : sous l&apos;IB high. <strong>Target</strong> : extension IB (1.5x range IB).</p>

      <h3>Setup 4 : Retest de Naked POC avec absorption</h3>
      <p><strong>Contexte</strong> : Naked POC d&apos;une session précédente non encore retesté. Le prix s&apos;en approche après plusieurs séances. <strong>Signal Footprint</strong> : sur le test du Naked POC, volume anormalement élevé + delta divergent du prix + wicks répétés. <strong>Entrée</strong> : dans le sens du retournement. <strong>Stop</strong> : juste au-delà du Naked POC. <strong>Target</strong> : POC du jour ou VAH/VAL opposée.</p>

      <hr />

      <h2 id="par-marche">Le Footprint par marché : ES, NQ, GC, CL</h2>
      <p>Tous les marchés Futures ne se lisent pas de la même façon sur le Footprint. Voici les spécificités des 4 marchés majeurs.</p>

      <h3>E-mini S&amp;P 500 (ES)</h3>
      <p>Marché de référence pour apprendre le Footprint. Volume massif et propre, ratios d&apos;imbalance fiables (3:1 standard), absorption nette aux niveaux structurels. Les setups Footprint y fonctionnent avec une régularité élevée. Idéal pour démarrer.</p>

      <h3>Nasdaq E-mini (NQ)</h3>
      <p>Plus volatil que l&apos;ES, mouvements plus rapides. Le Footprint y demande une lecture plus rapide — les imbalances apparaissent et disparaissent vite. Les ratios doivent être ajustés (4:1 plutôt que 3:1 pour filtrer le bruit). L&apos;absorption sur NQ est explosive quand elle se confirme.</p>

      <h3>Gold (GC)</h3>
      <p>Marché plus calme que les indices. Le Footprint sur GC est utile mais moins critique — le Volume Profile et les niveaux structurels long terme dominent. Le Footprint sert principalement à timer les entrées sur les niveaux institutionnels (Composite POC mensuel).</p>

      <h3>Crude Oil (CL)</h3>
      <p>Marché à fort régime news (rapports EIA mercredi 16h30). Hors news, le Footprint fonctionne bien et révèle les manipulations institutionnelles fréquentes. Pendant les news, le Footprint devient illisible — éviter de trader dans ces fenêtres.</p>

      <hr />

      <h2 id="erreurs">5 erreurs débutants à éviter avec le Footprint</h2>
      <ol>
        <li><strong>Surcharger l&apos;écran avec trop de timeframes</strong>. Un seul Footprint à la fois suffit. Volume-based (500-2000 contrats) est généralement plus lisible que time-based pour le scalping.</li>
        <li><strong>Confondre delta total et delta par niveau</strong>. Une bougie peut avoir un delta total positif tout en montrant de l&apos;absorption vendeuse en haut. C&apos;est l&apos;information par niveau qui compte, pas le total seul.</li>
        <li><strong>Trader chaque imbalance isolément</strong>. Une imbalance solitaire est du bruit. Seules les stacked imbalances (3+ consécutives) ou les imbalances aux niveaux Market Profile méritent un trade.</li>
        <li><strong>Ignorer le contexte structurel</strong>. Un signal Footprint sans niveau Market Profile/Volume Profile en confluence est moins fiable. Toujours valider d&apos;abord OÙ vous êtes (structure), puis QUOI faire (Footprint).</li>
        <li><strong>Trader le Footprint pendant les news</strong>. Les bougies de news (EIA, FOMC, NFP) affichent du volume colossal mais peu interprétable. Attendre la stabilisation post-news avant de revenir au Footprint.</li>
      </ol>

      <hr />

      <h2 id="vs-mp">Footprint vs Market Profile</h2>

      <table className="compare-table">
        <thead><tr><th>Crit&egrave;re</th><th>Market Profile</th><th>Footprint Chart</th></tr></thead>
        <tbody>
          <tr><td>&Eacute;chelle de temps</td><td>Session enti&egrave;re (macro)</td><td>Bougie par bougie (micro)</td></tr>
          <tr><td>Ce qu&apos;il montre</td><td>Structure du march&eacute;, acceptation du prix</td><td>Flux d&apos;ordres, agressivit&eacute; acheteur/vendeur</td></tr>
          <tr><td>Utilisation principale</td><td>Identifier les niveaux cl&eacute;s et le contexte</td><td>Timer les entr&eacute;es et lire la force en temps r&eacute;el</td></tr>
          <tr><td>Analogie</td><td>La carte du territoire</td><td>Les mouvements des troupes sur le terrain</td></tr>
          <tr><td>Compl&eacute;mentarit&eacute;</td><td>Donne le &quot;o&ugrave;&quot; trader</td><td>Donne le &quot;quand&quot; entrer</td></tr>
        </tbody>
      </table>

      <p>Les deux outils ne sont pas en comp&eacute;tition — ils sont <strong>compl&eacute;mentaires</strong>. Le Market Profile vous dit &quot;le march&eacute; est en rotation autour du POC, la Value Area Low est un support important&quot;. Le Footprint vous dit &quot;sur ce support, je vois de l&apos;absorption acheteuse avec des stacked imbalances — c&apos;est le moment d&apos;entrer long&quot;.</p>

      <hr />

      <h2 id="setup-pratique">Setup pratique : sweep + reversal sur l&apos;ES (exemple chiffr&eacute;)</h2>

      <p>Voici un setup r&eacute;el qu&apos;on retrouve plusieurs fois par semaine sur l&apos;E-mini S&amp;P 500 (ES) en RTH. La m&eacute;canique combine la lecture du Footprint et un niveau structurel Market Profile.</p>

      <h3>Contexte (15h45 — apr&egrave;s ouverture US)</h3>
      <p>L&apos;ES est en range entre 4500 et 4510 depuis 1 heure. Le low of day est &agrave; 4500.50. Sur la session pr&eacute;c&eacute;dente, la VAL (Value Area Low) du jour s&apos;est form&eacute;e &agrave; 4499.75. Les retail longs entr&eacute;s en cours de session ont leurs stops sous le low of day, donc autour de 4500. C&apos;est un pool de liquidit&eacute; &eacute;vident.</p>

      <h3>Le sweep</h3>
      <p>&Agrave; 15h47, l&apos;ES casse 4500.50 brutalement. La bougie 5-min affiche :</p>
      <ul>
        <li>High : 4502.00 — Open : 4501.75 — Low : 4498.25 — Close : 4501.50</li>
        <li>Volume total : 12 400 contrats (vs moyenne 6 800 sur les 20 derni&egrave;res bars).</li>
        <li>Long lower wick &eacute;vident — la m&egrave;che basse fait 3.25 points (13 ticks).</li>
      </ul>

      <h3>Lecture du Footprint sur cette bougie</h3>
      <p>En descendant niveau par niveau (mode Bid x Ask) :</p>
      <ul>
        <li><strong>4498.25</strong> (low de la m&egrave;che) : 1 850 x 120. Vendeurs agressifs massifs au plus bas. Delta -1 730.</li>
        <li><strong>4498.50</strong> : 1 200 x 380. Toujours pression vendeuse.</li>
        <li><strong>4498.75</strong> : 540 x 280. La pression se r&eacute;duit.</li>
        <li><strong>4499.00</strong> : 320 x 920. <strong>Buy imbalance</strong> (ratio 2.9:1). L&apos;absorption commence.</li>
        <li><strong>4499.25</strong> : 180 x 1 040. <strong>Buy imbalance</strong> (ratio 5.8:1).</li>
        <li><strong>4499.50</strong> : 90 x 880. <strong>Buy imbalance stacked</strong> (ratio 9.7:1).</li>
        <li><strong>4500.00</strong> et au-dessus : delta neutre puis positif.</li>
      </ul>

      <p>Lecture : un institutionnel a absorb&eacute; environ 3 000 contrats vendeurs sous 4499 et a ensuite fait remonter le prix avec des stacked imbalances acheteurs. C&apos;est un sweep + reversal class&eacute;que.</p>

      <h3>L&apos;entry</h3>
      <p>LONG &agrave; 4501.00 quand le prix repasse au-dessus du low of day cass&eacute; (4500.50). Stop sous le low du sweep + 1 tick = 4498.00. Risque = 12 ticks = 150 USD/contrat. Target initial : POC du jour pr&eacute;c&eacute;dent &agrave; 4505.50, soit 18 ticks de gain potentiel = ratio 1.5:1.</p>

      <p>R&eacute;alit&eacute; ce jour-l&agrave; : le prix est mont&eacute; jusqu&apos;&agrave; 4506.25 dans les 35 minutes suivantes. Sortie au target = +18 ticks = 225 USD/contrat. RR = 1.5:1.</p>

      <p>Pour la m&eacute;thode compl&egrave;te de lecture des sweeps, voir le{" "}
        <a href="/cours/liquidite-marches-pro/">cours Liquidit&eacute; des march&eacute;s pro</a>{" "}
        (7 le&ccedil;ons d&eacute;taill&eacute;es).
      </p>

      <hr />

      <h2 id="configuration-sierra">Configurer le Footprint sur Sierra Chart</h2>

      <p>Sierra Chart est la plateforme la plus utilis&eacute;e par les traders Footprint francophones pros. Voici la configuration minimale pour acc&eacute;der au Footprint dans des conditions s&eacute;rieuses.</p>

      <h3>Pr&eacute;requis</h3>
      <ol>
        <li><strong>Sierra Chart Package 11</strong> (36 USD/mois) — le Package Standard ne suffit pas, il faut le Numbers Bars Calculated Values.</li>
        <li><strong>Data feed CME Level 2</strong> (Order Book complet) — n&eacute;cessaire pour avoir les volumes Bid/Ask. Denali 25 USD/mois ou Rithmic via prop firm.</li>
        <li>Total config minimum : <strong>~62 USD/mois</strong> tout inclus (Package 11 + Denali Level 1+2 + frais CME).</li>
      </ol>

      <h3>R&eacute;glages essentiels</h3>
      <ul>
        <li><strong>Studies &gt; Add Custom Study</strong> &gt; <strong>Numbers Bars Calculated Values</strong>.</li>
        <li>Display Mode = <strong>&quot;Bid x Ask&quot;</strong> (le standard).</li>
        <li>Display Imbalance = <strong>Yes</strong>. Imbalance Percentage = <strong>200</strong> (3:1) pour d&eacute;butants, 300 (4:1) pour confirm&eacute;s.</li>
        <li>Highlight Stacked Imbalance = <strong>Yes</strong>. Min Stacked Count = <strong>3</strong>.</li>
        <li>Ajouter <strong>Volume Delta</strong> en histogramme sous le chart (subgraph).</li>
        <li>Ajouter <strong>Cumulative Volume Delta (CVD)</strong> en parall&egrave;le pour rep&eacute;rer les divergences prix/delta.</li>
      </ul>

      <p>
        Pour le tutoriel pas &agrave; pas avec captures d&apos;&eacute;cran, voir{" "}
        <a href="/tutoriels/configurer-sierra-chart-footprint/">Configurer le Footprint Chart sur Sierra Chart</a>.
        Pour la liste compl&egrave;te des indicateurs Sierra Chart utiles &agrave; la m&eacute;thode institutionnelle, voir{" "}
        <a href="/tutoriels/indicateurs-essentiels-sierra-chart/">10 indicateurs essentiels Sierra Chart</a>.
      </p>

      <hr />

      <h2 id="alternatives">Alternatives &agrave; Sierra Chart pour le Footprint</h2>

      <h3>NinjaTrader 8 + Order Flow +</h3>
      <p>NinjaTrader propose un addon Order Flow + (gratuit avec licence NinjaTrader Lifetime, ou inclus avec abonnement mensuel). L&apos;interface est plus moderne et plus accessible que Sierra Chart pour d&eacute;buter. Les imbalances sont visualis&eacute;es de fa&ccedil;on plus visuelle. C&apos;est souvent la plateforme recommand&eacute;e pour qui d&eacute;couvre le Footprint avant de migrer sur Sierra Chart pour la rapidit&eacute; pure.</p>

      <h3>ATAS</h3>
      <p>Plateforme russe sp&eacute;cialis&eacute;e Order Flow. Ses Cluster Charts sont l&apos;&eacute;quivalent du Footprint avec une interface visuelle tr&egrave;s soign&eacute;e. ATAS propose des indicateurs Order Flow uniques (Cluster Search, Big Trades Detector, Speed of Tape). Plus cher (1 100 USD lifetime ou 80 USD/mois). Pour comparaison d&eacute;taill&eacute;e, voir{" "}
        <a href="/tutoriels/sierra-chart-vs-atas/">Sierra Chart vs ATAS</a>.
      </p>

      <h3>Bookmap</h3>
      <p>Bookmap n&apos;est pas exactement un Footprint mais est compl&eacute;mentaire. Sa heatmap visualise la liquidit&eacute; <em>post&eacute;e</em> (ordres limit en attente) en temps r&eacute;el — l&agrave; o&ugrave; le Footprint montre la liquidit&eacute; <em>consomm&eacute;e</em>. Beaucoup de traders pros utilisent les deux ensemble. Voir le{" "}
        <a href="/bookmap/">guide complet Bookmap en fran&ccedil;ais</a>.
      </p>

      <hr />

      <h2 id="erreurs-courantes">5 erreurs courantes en lecture Footprint (et comment les &eacute;viter)</h2>

      <ol>
        <li>
          <strong>Lire le Footprint sans contexte structurel.</strong> Une imbalance isol&eacute;e au milieu d&apos;une session sans niveau Market Profile en confluence est un signal faible. Toujours combiner avec VAH, VAL, POC, ou Naked POC. La structure donne le QUOI, le Footprint donne le QUAND.
        </li>
        <li>
          <strong>Trader sans data feed Level 2.</strong> Sans le Level 2, les volumes Bid/Ask sont incomplets. Le Footprint affiche des chiffres mais pas la r&eacute;alit&eacute; — d&eacute;cisions trompeuses garanties. Investis le 12 USD/mois pour le Level 2.
        </li>
        <li>
          <strong>Confondre delta et imbalance.</strong> Le delta total d&apos;une bougie peut &ecirc;tre n&eacute;gatif (bougie baissi&egrave;re) tout en contenant des stacked imbalances acheteurs aux niveaux bas (absorption). Lire niveau par niveau, pas juste le delta global.
        </li>
        <li>
          <strong>Trader le Footprint pendant les news majeures.</strong> NFP, FOMC, CPI : le volume explose, les imbalances apparaissent partout, mais l&apos;information est inexploitable car beaucoup d&apos;ordres sont des HFT scalpers. Attendre 30-45 min apr&egrave;s la news avant de revenir au Footprint.
        </li>
        <li>
          <strong>Ignorer la pace du Tape.</strong> Le Footprint sur une bougie 5-min lente (peu d&apos;activit&eacute;) est moins fiable qu&apos;une bougie sur un march&eacute; actif. Toujours regarder le Time and Sales en parall&egrave;le pour valider la pace.
        </li>
      </ol>

      <hr />

      <h2 id="footprint-faq">Questions fr&eacute;quentes sur le Footprint Chart</h2>

      <h3>Le Footprint marche-t-il sur le Forex ?</h3>
      <p>Non, ou tr&egrave;s mal. Le Forex est un march&eacute; OTC (over-the-counter) sans carnet d&apos;ordres centralis&eacute;. Les volumes affich&eacute;s sont ceux du broker, fragment&eacute;s. Le Footprint a besoin de volumes Bid/Ask r&eacute;els pour fonctionner — ce qui n&apos;existe que sur les Futures CME, certaines actions liquides, et les cryptos sur exchanges centralis&eacute;s (Binance Futures par exemple).</p>

      <h3>Combien de temps pour ma&icirc;triser le Footprint ?</h3>
      <p>Comptez 3-6 mois en demo intensive pour reconna&icirc;tre les patterns visuels (sweeps, absorption, exhaustion) en temps r&eacute;el. 6-12 mois pour le trader avec discipline en compte r&eacute;el. La pratique quotidienne avec feedback est cruciale — un mentorat acc&eacute;l&egrave;re la courbe de mani&egrave;re tr&egrave;s significative.</p>

      <h3>Quel timeframe pour le Footprint ?</h3>
      <p>Pour scalping intraday : Range Bars 4 ticks sur ES, 8 ticks sur NQ. Pour day trading : 5-min ou 15-min time bars. Pour swing intraday : 30-min ou 1h. Le Footprint perd en lisibilit&eacute; sur des bars plus longues (4h+) car trop de niveaux empil&eacute;s.</p>

      <h3>Footprint vs Volume Profile : quelle diff&eacute;rence ?</h3>
      <p>Le Footprint montre le volume Bid/Ask <strong>par bar individuelle</strong>. Le Volume Profile cumule le volume <strong>sur une session enti&egrave;re</strong> (ou plusieurs). Les deux sont compl&eacute;mentaires : Volume Profile pour le contexte structurel (HVN, LVN, POC), Footprint pour le timing pr&eacute;cis des entries.</p>

      <h3>Peut-on coder ses propres indicateurs Footprint ?</h3>
      <p>Oui sur Sierra Chart via l&apos;API ACSIL (Advanced Custom Study Interface and Language). C&apos;est du C++ moderne avec un compileur int&eacute;gr&eacute;. La majorit&eacute; des outils proprios des traders pros sont des ACSIL custom. Pour les non-codeurs, des milliers de studies tierces sont disponibles via les forums Sierra Chart.</p>

      <hr />

      <h2 id="bass">Apprendre le Footprint avec BASS Trading</h2>

      <p>Le Footprint ne s&apos;apprend pas en lisant un article. Il se pratique, se vit en temps r&eacute;el, et n&eacute;cessite un feedback constant. C&apos;est un outil qui demande de l&apos;entra&icirc;nement visuel — comme apprendre &agrave; lire une radio m&eacute;dicale.</p>

      <p>Le mentorat BASS Trading consacre des modules entiers au Footprint Chart, avec des sessions live quotidiennes o&ugrave; S&eacute;bastien analyse le flux en temps r&eacute;el, commente les d&eacute;s&eacute;quilibres, et explique ses d&eacute;cisions d&apos;entr&eacute;e et de sortie.</p>

      <p>
        Pour la m&eacute;thode compl&egrave;te en autonomie, voir le{" "}
        <a href="/cours/footprint-mastery/">cours Footprint mastery (6 le&ccedil;ons avanc&eacute;es)</a>{" "}
        et le{" "}
        <a href="/footprint/">hub Footprint Chart</a>.{" "}
        Pour les outils, voir le{" "}
        <a href="/sierra-chart/">hub Sierra Chart francophone</a>.
      </p>
    </>
  );
}
