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

      <h2 id="bass">Apprendre le Footprint avec BASS Trading</h2>
      <p>Le Footprint ne s&apos;apprend pas en lisant un article. Il se pratique, se vit en temps r&eacute;el, et n&eacute;cessite un feedback constant. C&apos;est un outil qui demande de l&apos;entra&icirc;nement visuel — comme apprendre &agrave; lire une radio m&eacute;dicale.</p>
      <p>Le mentorat BASS Trading consacre des modules entiers au Footprint Chart, avec des sessions live quotidiennes o&ugrave; S&eacute;bastien analyse le flux en temps r&eacute;el, commente les d&eacute;s&eacute;quilibres, et explique ses d&eacute;cisions d&apos;entr&eacute;e et de sortie.</p>
    </>
  );
}
