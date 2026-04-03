export default function SupportResistanceTrading() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce qu&apos;un support et une r&eacute;sistance ?</h2>
      <p>Un <strong>support</strong> est un niveau de prix o&ugrave; la demande est suffisamment forte pour emp&ecirc;cher le prix de descendre davantage. Une <strong>r&eacute;sistance</strong> est un niveau o&ugrave; l&apos;offre est suffisamment forte pour emp&ecirc;cher le prix de monter. C&apos;est le concept le plus fondamental en trading.</p>
      <p>Mais voici le probl&egrave;me : la plupart des traders dessinent des lignes horizontales &agrave; l&apos;&oelig;il et appellent &ccedil;a des &quot;supports&quot; et des &quot;r&eacute;sistances&quot;. C&apos;est subjectif, impr&eacute;cis, et souvent inutile. Les vrais niveaux qui comptent sont ceux o&ugrave; le <strong>volume a r&eacute;ellement &eacute;t&eacute; &eacute;chang&eacute;</strong>.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Les vrais S/R sont bas&eacute;s sur le volume, pas sur le prix</h4>
        <p>Une ligne trac&eacute;e sur un ancien plus bas est un souhait. Un POC, un VAH ou un VAL repr&eacute;sente l&apos;endroit o&ugrave; des milliers de contrats ont &eacute;t&eacute; &eacute;chang&eacute;s. Les institutionnels d&eacute;fendent ces niveaux parce qu&apos;ils y ont des positions. C&apos;est &ccedil;a, un vrai support.</p>
      </div>

      <hr />

      <h2 id="types-classiques">Les S/R classiques</h2>

      <h3>Niveaux horizontaux</h3>
      <p>Les plus simples : anciens plus hauts, anciens plus bas, zones de congestion visibles. Probl&egrave;me : &agrave; quel prix exact ? Le &quot;support &agrave; 4500&quot; est-il &agrave; 4498 ? 4502 ? La zone est floue.</p>

      <h3>Trendlines</h3>
      <p>Lignes obliques reliant des plus bas (support ascendant) ou des plus hauts (r&eacute;sistance descendante). Extr&ecirc;mement subjectives — changez un point d&apos;ancrage et la trendline change compl&egrave;tement.</p>

      <h3>Pivot Points</h3>
      <p>Calcul&eacute;s &agrave; partir du High, Low et Close de la veille. Populaires chez les day traders. Math&eacute;matiquement pr&eacute;cis mais d&eacute;connect&eacute;s du volume r&eacute;el &eacute;chang&eacute;.</p>

      <h3>Niveaux ronds</h3>
      <p>4500, 5000, 15000 — les chiffres ronds attirent des ordres. C&apos;est psychologique : les humains pensent en chiffres ronds. R&eacute;el mais faible comme niveau de d&eacute;cision seul.</p>

      <h3>Moyennes mobiles</h3>
      <p>SMA 50, SMA 200 utilis&eacute;es comme supports/r&eacute;sistances dynamiques. Le prix &quot;rebondit&quot; souvent sur la SMA 200 — mais c&apos;est une proph&eacute;tie auto-r&eacute;alisatrice. Quand elle casse, le mouvement est violent.</p>

      <hr />

      <h2 id="pourquoi-ca-marche">Pourquoi les S/R fonctionnent</h2>

      <h3>M&eacute;moire du march&eacute;</h3>
      <p>Les traders se souviennent des niveaux o&ugrave; ils ont gagn&eacute; ou perdu de l&apos;argent. Les institutions se souviennent des niveaux o&ugrave; elles ont accumul&eacute; des positions. Le march&eacute; a une m&eacute;moire — et elle est inscrite dans le volume.</p>

      <h3>Int&eacute;r&ecirc;t institutionnel</h3>
      <p>Les gros joueurs (hedge funds, banques, market makers) placent des ordres massifs &agrave; certains niveaux. Ces ordres cr&eacute;ent des &quot;murs&quot; que le prix a du mal &agrave; franchir. Le Market Profile r&eacute;v&egrave;le ces niveaux objectivement.</p>

      <h3>Proph&eacute;tie auto-r&eacute;alisatrice</h3>
      <p>Quand des millions de traders voient le m&ecirc;me support, ils placent des ordres au m&ecirc;me endroit. Le support &quot;tient&quot; — pas parce que le niveau est magique, mais parce que le consensus cr&eacute;e le rebond. Et quand le consensus &eacute;choue, c&apos;est la capitulation.</p>

      <hr />

      <h2 id="limites">Les limites des S/R classiques</h2>

      <h3>Subjectivit&eacute;</h3>
      <p>Demandez &agrave; 10 traders de dessiner les supports sur le m&ecirc;me graphique : vous obtiendrez 10 r&eacute;ponses diff&eacute;rentes. Ce n&apos;est pas de l&apos;analyse — c&apos;est de l&apos;interpr&eacute;tation.</p>

      <h3>Faux breakouts</h3>
      <p>Le prix casse un support, tout le monde vend, puis le prix remonte. Les &quot;stops hunt&quot; sont fr&eacute;quents autour des niveaux classiques parce que tout le monde place ses stops au m&ecirc;me endroit.</p>

      <h3>Aucune validation par le volume</h3>
      <p>Un ancien plus bas &agrave; 4450 n&apos;est un support que si du volume y a &eacute;t&eacute; &eacute;chang&eacute;. Si le prix a simplement travers&eacute; ce niveau rapidement, il n&apos;y a personne pour le d&eacute;fendre. Le prix le traverse &agrave; nouveau sans probl&egrave;me.</p>

      <hr />

      <h2 id="market-profile-sr">Les S/R Market Profile : les vrais niveaux</h2>

      <h3>POC (Point of Control)</h3>
      <p>Le prix o&ugrave; le plus de volume a &eacute;t&eacute; &eacute;chang&eacute; sur une session. C&apos;est le prix &quot;juste&quot; selon le march&eacute;. Les <strong>Naked POC</strong> (POC non revisit&eacute;s de sessions pr&eacute;c&eacute;dentes) sont des aimants &agrave; prix — le march&eacute; y revient presque toujours.</p>

      <h3>VAH et VAL (Value Area High / Low)</h3>
      <p>Les bornes de la zone o&ugrave; 70% du volume a &eacute;t&eacute; &eacute;chang&eacute;. Le VAH agit comme r&eacute;sistance, le VAL comme support. Ces niveaux sont calcul&eacute;s math&eacute;matiquement — z&eacute;ro subjectivit&eacute;.</p>

      <h3>HVN et LVN</h3>
      <p><strong>High Volume Nodes</strong> : zones de forte concentration de volume sur le Volume Profile. Le prix a tendance &agrave; &quot;coller&quot; &agrave; ces zones — ce sont des aimants. <strong>Low Volume Nodes</strong> : zones de faible volume. Le prix les traverse rapidement — ce sont des barri&egrave;res fragiles mais aussi des zones de transition rapide.</p>

      <h3>Pourquoi c&apos;est sup&eacute;rieur</h3>
      <p>Un POC &agrave; 4512.50 est un fait, pas une opinion. Des milliers de contrats y ont &eacute;t&eacute; &eacute;chang&eacute;s. Les institutions qui ont ouvert des positions &agrave; ce prix vont le d&eacute;fendre. C&apos;est un support ou une r&eacute;sistance fond&eacute; sur la <strong>r&eacute;alit&eacute;</strong> du march&eacute;.</p>

      <div className="info-box">
        <div className="info-box-title">En pratique</div>
        <p>Chaque matin, identifiez les 5 niveaux cl&eacute;s : POC du jour pr&eacute;c&eacute;dent, VAH, VAL, et les Naked POCs r&eacute;cents. Ce sont vos vrais S/R pour la journ&eacute;e. Oubliez les trendlines.</p>
      </div>

      <hr />

      <h2 id="vwap-sr">Le VWAP comme S/R dynamique</h2>
      <p>Le <strong>VWAP</strong> (Volume Weighted Average Price) est le prix moyen pond&eacute;r&eacute; par le volume. C&apos;est le prix auquel le march&eacute; a &eacute;chang&eacute; le plus de volume en moyenne sur la session. Les institutions l&apos;utilisent comme r&eacute;f&eacute;rence d&apos;ex&eacute;cution.</p>

      <h3>VWAP comme support/r&eacute;sistance</h3>
      <p>Le prix au-dessus du VWAP = les acheteurs du jour sont en profit, biais haussier. Le prix en dessous = les acheteurs du jour perdent, biais baissier. Le VWAP agit comme un &quot;centre de gravit&eacute;&quot; autour duquel le prix oscille.</p>

      <h3>Les bandes VWAP (&plusmn;1 SD, &plusmn;2 SD)</h3>
      <p>Les d&eacute;viations standard du VWAP agissent comme des niveaux de S/R dynamiques. &agrave; +1 SD, les acheteurs sont bien en profit — prise de b&eacute;n&eacute;fices probable. &agrave; -1 SD, les acheteurs souffrent — achat de &quot;valeur&quot; possible. Les extremes &agrave; &plusmn;2 SD sont rares et signalent un mouvement excessif.</p>

      <h3>Previous Day VWAP</h3>
      <p>Le VWAP de la session pr&eacute;c&eacute;dente reste un niveau important le jour suivant. Le prix le teste souvent en d&eacute;but de session. C&apos;est un S/R que beaucoup de traders ignorent mais que les institutions surveillent.</p>

      <hr />

      <h2 id="order-flow-confirmation">Confirmer les S/R par l&apos;Order Flow</h2>
      <p>Un niveau de S/R bas&eacute; sur le volume (POC, VAH, VWAP) est un niveau <strong>potentiel</strong> de r&eacute;action. L&apos;Order Flow vous dit s&apos;il est r&eacute;ellement d&eacute;fendu en temps r&eacute;el.</p>

      <h3>Absorption au S/R</h3>
      <p>Le prix arrive sur un VAL. Sur le Footprint, vous voyez un gros volume Bid (vendeurs agressifs) mais le prix ne descend pas. Quelqu&apos;un absorbe. C&apos;est la confirmation ultime que le support tient.</p>

      <h3>Imbalance au S/R</h3>
      <p>Le prix teste une r&eacute;sistance (VAH). Sur le Footprint, des stacked imbalances vendeurs apparaissent — les vendeurs dominent agressivement. La r&eacute;sistance tient. Si au contraire des imbalances acheteurs apparaissent et le prix traverse le VAH, c&apos;est un breakout l&eacute;gitime.</p>

      <h3>Delta au S/R</h3>
      <p>Le delta cumulatif qui s&apos;inverse &agrave; un niveau de S/R est un signal de retournement. Si le prix teste un support avec un delta de plus en plus positif, les acheteurs prennent le dessus — le support tiendra probablement.</p>

      <hr />

      <h2 id="hierarchie">Hi&eacute;rarchie des niveaux</h2>

      <table className="compare-table">
        <thead><tr><th>Niveau</th><th>Fiabilit&eacute;</th><th>Pourquoi</th></tr></thead>
        <tbody>
          <tr><td>Naked POC (non revisit&eacute;)</td><td>Tr&egrave;s &eacute;lev&eacute;e</td><td>Aimant &agrave; prix — le march&eacute; y revient presque toujours</td></tr>
          <tr><td>VAH / VAL du jour pr&eacute;c&eacute;dent</td><td>&Eacute;lev&eacute;e</td><td>70% du volume y a &eacute;t&eacute; &eacute;chang&eacute; — niveaux institutionnels</td></tr>
          <tr><td>POC du jour pr&eacute;c&eacute;dent</td><td>&Eacute;lev&eacute;e</td><td>Prix juste — positions massives &agrave; d&eacute;fendre</td></tr>
          <tr><td>VWAP</td><td>Mod&eacute;r&eacute;e &agrave; &eacute;lev&eacute;e</td><td>R&eacute;f&eacute;rence d&apos;ex&eacute;cution institutionnelle</td></tr>
          <tr><td>HVN (Volume Profile)</td><td>Mod&eacute;r&eacute;e</td><td>Zone d&apos;int&eacute;r&ecirc;t historique</td></tr>
          <tr><td>Previous Day High / Low</td><td>Mod&eacute;r&eacute;e</td><td>Psychologique + ordres stop accumul&eacute;s</td></tr>
          <tr><td>Niveaux ronds</td><td>Faible &agrave; mod&eacute;r&eacute;e</td><td>Psychologique uniquement</td></tr>
          <tr><td>Trendlines dessin&eacute;es</td><td>Faible</td><td>Subjectives — pas de base volume</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="strategies">4 strat&eacute;gies avec les S/R volume</h2>

      <h3>1. Rebond sur VAL avec absorption</h3>
      <p>Le prix descend sur le VAL. Le Footprint montre de l&apos;absorption acheteuse. Le delta s&apos;inverse. Entr&eacute;e long, stop sous le VAL, target POC.</p>

      <h3>2. Rejet au VAH avec imbalances</h3>
      <p>Le prix monte au VAH. Stacked imbalances vendeurs sur le Footprint. Le delta tourne n&eacute;gatif. Entr&eacute;e short, stop au-dessus du VAH, target POC ou VAL.</p>

      <h3>3. Breakout du Value Area</h3>
      <p>Le prix casse le VAH avec du volume et des stacked imbalances acheteurs. Pas de retour dans la Value Area. C&apos;est un breakout l&eacute;gitime — tradez la continuation vers le prochain HVN ou Naked POC.</p>

      <h3>4. Magnet trade vers un Naked POC</h3>
      <p>Un Naked POC existe 50 points au-dessus. Le march&eacute; est en rotation. Achetez les pullbacks — le prix sera attir&eacute; vers ce Naked POC comme un aimant. C&apos;est un trade haute probabilit&eacute;.</p>

      <hr />

      <h2 id="erreurs">6 erreurs fr&eacute;quentes</h2>

      <h3>1. Dessiner trop de niveaux</h3>
      <p>Si votre graphique ressemble &agrave; un arc-en-ciel de lignes horizontales, vous n&apos;avez aucun edge. Gardez 5-7 niveaux cl&eacute;s maximum par session.</p>

      <h3>2. Traiter tous les S/R de la m&ecirc;me mani&egrave;re</h3>
      <p>Un Naked POC et une trendline n&apos;ont pas le m&ecirc;me poids. Hi&eacute;rarchisez vos niveaux.</p>

      <h3>3. Ignorer le type de journ&eacute;e</h3>
      <p>En jour de tendance, les supports classiques cassent les uns apr&egrave;s les autres. En jour de rotation, les S/R tiennent. Le Market Profile vous dit quel sc&eacute;nario est en cours.</p>

      <h3>4. Pas de confirmation Order Flow</h3>
      <p>Acheter aveugl&eacute;ment sur un support sans v&eacute;rifier le flux d&apos;ordres, c&apos;est du gambling. V&eacute;rifiez l&apos;absorption ou les imbalances avant d&apos;entrer.</p>

      <h3>5. Stops trop serr&eacute;s sur les S/R</h3>
      <p>Le prix &quot;teste&quot; souvent le support en le d&eacute;passant de quelques ticks avant de rebondir. Si votre stop est trop serr&eacute;, vous &ecirc;tes sorti avant le rebond. Donnez de l&apos;espace.</p>

      <h3>6. Oublier les Naked POCs</h3>
      <p>Beaucoup de traders ne tracent m&ecirc;me pas les Naked POCs. C&apos;est l&apos;un des niveaux les plus fiables en Market Profile — ne les n&eacute;gligez pas.</p>

      <hr />

      <h2 id="bass">Apprendre les vrais S/R avec BASS Trading</h2>
      <p>Le mentorat BASS Trading vous apprend &agrave; identifier les niveaux qui comptent — pas les lignes que tout le monde dessine, mais les zones o&ugrave; l&apos;argent r&eacute;el a &eacute;t&eacute; &eacute;chang&eacute;. Market Profile, Volume Profile, VWAP, et confirmation par l&apos;Order Flow.</p>
      <p>Chaque session live avec S&eacute;bastien commence par l&apos;identification des niveaux cl&eacute;s de la journ&eacute;e. Vous voyez en temps r&eacute;el comment le prix r&eacute;agit &agrave; ces niveaux et comment l&apos;Order Flow confirme ou infirme le setup.</p>
    </>
  );
}
