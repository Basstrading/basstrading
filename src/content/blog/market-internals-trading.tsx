export default function MarketInternalsTrading() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que les Market Internals ?</h2>
      <p>Les Market Internals sont des indicateurs de <strong>sant&eacute; globale du march&eacute;</strong>. Au lieu de regarder un seul instrument (ES, NQ), ils mesurent ce que fait l&apos;ensemble du march&eacute; actions — combien de titres montent vs descendent, o&ugrave; va le volume, et quelle est la pression directionnelle globale.</p>
      <p>C&apos;est comme prendre le pouls du patient plut&ocirc;t que de regarder un seul sympt&ocirc;me. Le ES peut monter, mais si les Market Internals sont faibles, le rallye est fragile. Le ES peut baisser, mais si les internals sont forts, la baisse est une opportunit&eacute; d&apos;achat.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Les internals confirment ou infirment le prix</h4>
        <p>Le prix du ES vous dit <strong>quoi</strong>. Les Market Internals vous disent <strong>pourquoi</strong> et <strong>si c&apos;est durable</strong>. Un rallye sur le ES avec un TICK n&eacute;gatif et un ADD qui descend est un rallye en sursis. Un sell-off avec un TICK positif et un VOLD fort est probablement un flush temporaire.</p>
      </div>

      <hr />

      <h2 id="tick">NYSE TICK</h2>

      <h3>D&eacute;finition</h3>
      <p>Le NYSE TICK mesure, &agrave; chaque instant, le nombre de titres du NYSE qui ont &eacute;t&eacute; trad&eacute;s sur un uptick moins le nombre de titres trad&eacute;s sur un downtick. C&apos;est un indicateur de <strong>pression directionnelle instantan&eacute;e</strong>.</p>

      <h3>Lire le TICK</h3>
      <p><strong>TICK positif</strong> = plus de titres montent que descendent sur leur dernier trade. <strong>TICK n&eacute;gatif</strong> = plus de titres descendent. Le TICK oscille g&eacute;n&eacute;ralement entre -500 et +500 en conditions normales.</p>

      <h3>Les extr&ecirc;mes</h3>
      <p>Un TICK au-del&agrave; de <strong>+1000</strong> signale une pression acheteuse massive — presque tout le NYSE monte en m&ecirc;me temps. C&apos;est rare et puissant. Un TICK en dessous de <strong>-1000</strong> signale une pression vendeuse extr&ecirc;me.</p>

      <h3>TICK cumulatif</h3>
      <p>Le TICK cumulatif (somme de toutes les lectures TICK sur la journ&eacute;e) montre le biais intraday. Un TICK cumulatif en hausse toute la journ&eacute;e = pression acheteuse persistante. En baisse = pression vendeuse persistante. C&apos;est un des meilleurs filtres pour confirmer un trend day.</p>

      <table className="compare-table">
        <thead><tr><th>Lecture TICK</th><th>Signification</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>&gt; +1000</td><td>Pression acheteuse extr&ecirc;me</td><td>Attention au retournement si r&eacute;p&eacute;t&eacute;</td></tr>
          <tr><td>+500 &agrave; +1000</td><td>Biais acheteur fort</td><td>Chercher des longs sur pullback</td></tr>
          <tr><td>-500 &agrave; +500</td><td>Neutre / rotation</td><td>Mean reversion, range trading</td></tr>
          <tr><td>-1000 &agrave; -500</td><td>Biais vendeur fort</td><td>Chercher des shorts sur rallye</td></tr>
          <tr><td>&lt; -1000</td><td>Pression vendeuse extr&ecirc;me</td><td>Attention au rebond si r&eacute;p&eacute;t&eacute;</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="add">ADD (Advance-Decline)</h2>

      <h3>D&eacute;finition</h3>
      <p>L&apos;ADD mesure le nombre de titres du NYSE qui avancent (prix en hausse vs cl&ocirc;ture pr&eacute;c&eacute;dente) moins le nombre qui d&eacute;clinent. C&apos;est un indicateur de <strong>largeur du mouvement</strong> (breadth).</p>

      <h3>Ce qu&apos;il r&eacute;v&egrave;le</h3>
      <p>Le ES peut monter parce que 5 mega-caps (Apple, Microsoft, Nvidia...) tirent l&apos;indice — mais si l&apos;ADD est n&eacute;gatif, la majorit&eacute; des actions baissent. C&apos;est un rallye &eacute;troit et fragile. &Agrave; l&apos;inverse, un ES qui monte avec un ADD fortement positif = rallye large et sain.</p>

      <h3>Divergences ADD/prix</h3>
      <p>Le signal le plus puissant de l&apos;ADD est la <strong>divergence</strong>. Le ES fait de nouveaux plus hauts mais l&apos;ADD fait des plus bas — de moins en moins de titres participent au rallye. C&apos;est un avertissement s&eacute;rieux : le mouvement s&apos;&eacute;puise.</p>

      <div className="info-box">
        <div className="info-box-title">En pratique</div>
        <p>Affichez l&apos;ADD en bas de votre chart ES principal. Quand le ES et l&apos;ADD &eacute;voluent dans la m&ecirc;me direction, suivez la tendance. Quand ils divergent, m&eacute;fiez-vous et resserrez vos stops.</p>
      </div>

      <hr />

      <h2 id="vold">VOLD (Up/Down Volume)</h2>

      <h3>D&eacute;finition</h3>
      <p>Le VOLD mesure le volume total des titres NYSE qui avancent moins le volume des titres qui d&eacute;clinent. Il montre <strong>o&ugrave; va l&apos;argent</strong> — pas juste combien de titres bougent, mais avec quel volume.</p>

      <h3>Diff&eacute;rence avec l&apos;ADD</h3>
      <p>L&apos;ADD compte le nombre de titres. Le VOLD pond&egrave;re par le volume. Un titre qui avance avec 10 millions d&apos;actions &eacute;chang&eacute;es p&egrave;se plus dans le VOLD qu&apos;un titre avec 100 000 actions. Le VOLD capture l&apos;<strong>intention financi&egrave;re</strong> derri&egrave;re le mouvement.</p>

      <h3>Lecture</h3>
      <p>VOLD fortement positif = le gros de l&apos;argent va dans les titres en hausse. C&apos;est le soutien le plus concret d&apos;un rallye. VOLD fortement n&eacute;gatif = l&apos;argent fuit les actions — sell-off soutenu par le volume.</p>

      <hr />

      <h2 id="combiner">Combiner les 3 internals</h2>

      <h3>Confirmation triple</h3>
      <p>Quand le TICK, l&apos;ADD et le VOLD pointent tous dans la m&ecirc;me direction, la conviction est forte. Les 3 disent : &quot;le march&eacute; entier bouge dans cette direction avec volume et largeur&quot;. C&apos;est le moment de suivre la tendance, pas de la contrer.</p>

      <h3>Divergence interne</h3>
      <p>Quand les internals divergent entre eux, le signal est ambigu. Par exemple : TICK positif (achats agressifs) mais ADD n&eacute;gatif (plus de titres baissent) et VOLD n&eacute;gatif (l&apos;argent va dans les baissiers). Traduction : quelques gros titres montent mais le march&eacute; large est faible. Prudence.</p>

      <h3>Le filtre id&eacute;al</h3>
      <p>Utilisez les internals comme <strong>filtre</strong>, pas comme signal d&apos;entr&eacute;e. Votre setup vient du Market Profile et de l&apos;Order Flow. Les internals confirment ou infirment. Si votre setup est long et les 3 internals sont n&eacute;gatifs, passez votre tour.</p>

      <hr />

      <h2 id="market-profile">Internals + Market Profile</h2>

      <h3>Confirmer le type de journ&eacute;e</h3>
      <p>Le Market Profile vous dit &quot;est-ce un jour de rotation ou de tendance ?&quot;. Les internals confirment. Un jour de rotation a des internals plats et oscillants. Un trend day a des internals fortement directionnels toute la journ&eacute;e.</p>

      <h3>Valider les breakouts</h3>
      <p>Le prix casse le VAH. Est-ce un vrai breakout ou un faux ? V&eacute;rifiez les internals. Si le TICK fait un nouveau high au moment du breakout et que l&apos;ADD/VOLD confirment, c&apos;est un breakout l&eacute;gitime. Si les internals sont tièdes, m&eacute;fiez-vous.</p>

      <hr />

      <h2 id="order-flow">Internals + Order Flow</h2>

      <h3>Le setup ultime</h3>
      <p>Le prix arrive sur un VAL (Market Profile). Le Footprint montre de l&apos;absorption acheteuse (Order Flow). Le TICK vient de faire un extr&ecirc;me bas (-1000) et remonte (Market Internals). C&apos;est la convergence de trois couches d&apos;analyse : structure, flux, et sant&eacute; globale. Ce sont les setups &agrave; plus haute probabilit&eacute;.</p>

      <h3>TICK extr&ecirc;me + absorption</h3>
      <p>Un TICK &agrave; -1200 pendant que le Footprint montre de l&apos;absorption acheteuse massive sur un support volume — c&apos;est un des signaux de retournement les plus fiables en intraday. La panique de masse (TICK extr&ecirc;me) est absorb&eacute;e par des institutionnels (Footprint). Le rebond est imminent.</p>

      <hr />

      <h2 id="strategies">4 strat&eacute;gies</h2>

      <h3>1. TICK extr&ecirc;me reversal</h3>
      <p>Le TICK touche -1200. Le prix est sur un support Market Profile (VAL ou Naked POC). Le Footprint montre de l&apos;absorption. Entr&eacute;e long avec un stop sous le support. Target : POC ou VWAP. Probabilit&eacute; &eacute;lev&eacute;e de rebond.</p>

      <h3>2. Divergence ADD</h3>
      <p>Le ES fait un nouveau high intraday mais l&apos;ADD fait un lower high. Le rallye perd sa largeur. Cherchez des shorts sur le prochain test de r&eacute;sistance (VAH), confirm&eacute; par des imbalances vendeuses sur le Footprint.</p>

      <h3>3. Confirmation VOLD pour trend following</h3>
      <p>Le march&eacute; est en tendance haussi&egrave;re. Le VOLD est fortement positif et en hausse. Chaque pullback vers le VWAP ou le POC est une opportunit&eacute; d&apos;achat — les internals confirment que la tendance est saine et soutenue par le volume.</p>

      <h3>4. Triple confirmation</h3>
      <p>TICK, ADD et VOLD tous fortement directionnels + breakout de la Value Area + stacked imbalances sur le Footprint. C&apos;est le setup de convergence maximale. Rare mais tr&egrave;s fiable. Tradez dans le sens du mouvement avec conviction.</p>

      <hr />

      <h2 id="sierra-chart">Configuration Sierra Chart</h2>

      <h3>Symboles</h3>
      <p>Sur Sierra Chart avec les donn&eacute;es CME/DTN : <strong>$TICK</strong> pour le NYSE TICK, <strong>$ADD</strong> pour l&apos;Advance-Decline, <strong>$VOLD</strong> pour le Up/Down Volume. Les symboles peuvent varier selon votre fournisseur de donn&eacute;es.</p>

      <h3>Disposition recommand&eacute;e</h3>
      <p>Affichez les 3 internals en sous-fen&ecirc;tres sous votre chart ES principal. Utilisez des histogrammes pour le TICK et des lignes pour l&apos;ADD et le VOLD. Ajoutez une ligne z&eacute;ro et des lignes horizontales aux niveaux &plusmn;1000 sur le TICK.</p>

      <h3>TICK cumulatif</h3>
      <p>Cr&eacute;ez un chart s&eacute;par&eacute; avec le TICK cumulatif (somme running du TICK). Affichez-le en ligne ou en histogramme. C&apos;est votre boussole intraday — si le TICK cumulatif monte, le biais est haussier.</p>

      <div className="info-box">
        <div className="info-box-title">Inclus dans le mentorat</div>
        <p>Les templates Sierra Chart du mentorat BASS incluent les 3 Market Internals pr&eacute;-configur&eacute;s avec les bonnes couleurs, les bons seuils, et le TICK cumulatif. Pr&ecirc;t &agrave; l&apos;emploi d&egrave;s le premier jour.</p>
      </div>

      <hr />

      <h2 id="erreurs">5 erreurs &agrave; &eacute;viter</h2>

      <h3>1. Se fier &agrave; un seul internal</h3>
      <p>Le TICK seul peut &ecirc;tre trompeur — un spike isol&eacute; &agrave; +1200 ne signifie pas grand-chose. Exigez la confirmation de l&apos;ADD et du VOLD avant de prendre une d&eacute;cision.</p>

      <h3>2. Mauvais timeframe</h3>
      <p>Les internals sont des indicateurs <strong>intraday</strong>. Ils se remettent &agrave; z&eacute;ro chaque jour. N&apos;essayez pas de les utiliser pour des swings de plusieurs jours.</p>

      <h3>3. Trader les internals pendant les news</h3>
      <p>Au moment de la publication d&apos;une news majeure (FOMC, NFP), les internals deviennent extr&ecirc;mement volatils. Les spikes ne sont pas exploitables — attendez que le march&eacute; se stabilise (15-30 minutes apr&egrave;s la news).</p>

      <h3>4. Surcharger l&apos;analyse</h3>
      <p>Les 3 internals de base (TICK, ADD, VOLD) suffisent. N&apos;ajoutez pas 10 autres indicateurs de breadth. Plus d&apos;indicateurs = plus de confusion et de d&eacute;cisions paralis&eacute;es.</p>

      <h3>5. Ignorer les internals en jour de tendance</h3>
      <p>C&apos;est justement les jours de tendance que les internals sont les plus utiles. Ils confirment que le mouvement est soutenu par l&apos;ensemble du march&eacute; — vous pouvez tenir vos positions avec confiance.</p>

      <hr />

      <h2 id="bass">Apprendre avec BASS Trading</h2>
      <p>Les Market Internals font partie int&eacute;grante de la m&eacute;thode BASS Trading. S&eacute;bastien Constant les v&eacute;rifie en d&eacute;but de chaque session pour &eacute;tablir le biais du jour, et les surveille en continu pour confirmer ses d&eacute;cisions d&apos;entr&eacute;e et de sortie.</p>
      <p>Les sessions live montrent comment int&eacute;grer les internals dans un workflow complet : Market Profile pour le contexte, Order Flow pour le timing, et Market Internals pour la confirmation de la sant&eacute; globale du march&eacute;.</p>
    </>
  );
}
