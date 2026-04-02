export default function VolumeProfileGuide() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que le Volume Profile ?</h2>
      <p>La grande majorit&eacute; des traders analysent le volume de mani&egrave;re verticale : combien de contrats ont &eacute;t&eacute; &eacute;chang&eacute;s sur cette bougie, cette heure, cette journ&eacute;e. C&apos;est utile. Mais &ccedil;a r&eacute;pond &agrave; la question &quot;quand&quot;, pas &agrave; la question &quot;o&ugrave;&quot;.</p>
      <p>Le <strong>Volume Profile</strong> retourne l&apos;axe. Il affiche le volume &eacute;chang&eacute; &agrave; chaque niveau de prix sous forme d&apos;histogramme horizontal. Vous voyez imm&eacute;diatement : &agrave; 4520 sur le S&amp;P 500, il y a eu 1,2 million de contrats &eacute;chang&eacute;s. &Agrave; 4518, seulement 80 000. Cette diff&eacute;rence radicale raconte une histoire que les chandeliers classiques ne peuvent pas vous dire.</p>
      <p>En termes simples : le Volume Profile transforme chaque niveau de prix en question &quot;est-ce que le march&eacute; <strong>accepte</strong> ce prix ?&quot; Un niveau avec beaucoup de volume est un niveau d&apos;acceptation — les deux camps (acheteurs et vendeurs) y ont trouv&eacute; un accord. Un niveau avec peu de volume est un niveau de rejet — le march&eacute; y est pass&eacute; vite, sans conviction.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept fondamental</div>
        <h4>Le prix cherche &agrave; faciliter les &eacute;changes</h4>
        <p>Le march&eacute; n&apos;est pas une bataille al&eacute;atoire. C&apos;est un m&eacute;canisme d&apos;ench&egrave;res qui cherche constamment &agrave; trouver un prix &quot;juste&quot; — l&agrave; o&ugrave; acheteurs et vendeurs s&apos;accordent. Le Volume Profile visualise ce processus : les zones de fort volume sont les zones d&apos;accord, les zones de faible volume sont les zones de d&eacute;saccord.</p>
      </div>

      <h2 id="composants">Les composants cl&eacute;s du Volume Profile</h2>
      <p>Avant de trader avec le Volume Profile, vous devez ma&icirc;triser son vocabulaire. Ces niveaux sont vos rep&egrave;res quotidiens.</p>

      <h3>Le Point of Control (POC)</h3>
      <p>Le <strong>POC</strong> est le niveau de prix o&ugrave; le plus grand volume a &eacute;t&eacute; &eacute;chang&eacute; sur la p&eacute;riode analys&eacute;e. C&apos;est le prix d&apos;&eacute;quilibre absolu — l&agrave; o&ugrave; la majorit&eacute; des participants ont accept&eacute; de transacter. Le march&eacute; a une tendance naturelle &agrave; graviter vers son POC, en particulier dans les phases de consolidation.</p>
      <p>Un POC qui &quot;migre&quot; vers le haut au fil des sessions indique une pression acheteuse. Un POC qui descend session apr&egrave;s session r&eacute;v&egrave;le une distribution vendeuse. La position du POC par rapport au prix actuel vous donne une lecture instantan&eacute;e du biais directionnel.</p>

      <h3>La Value Area (VA)</h3>
      <p>La <strong>Value Area</strong> est la zone de prix contenant <strong>70% du volume total</strong> de la session. Ce chiffre n&apos;est pas arbitraire — il correspond &agrave; un &eacute;cart-type dans une distribution normale, l&apos;id&eacute;e &eacute;tant que 70% des transactions se font dans la &quot;zone de valeur&quot; accept&eacute;e par le march&eacute;.</p>
      <ul>
        <li><strong>VAH (Value Area High)</strong> : la borne haute de la Value Area. C&apos;est souvent une r&eacute;sistance puissante.</li>
        <li><strong>VAL (Value Area Low)</strong> : la borne basse. C&apos;est souvent un support de premier ordre.</li>
      </ul>
      <p>La r&egrave;gle fondamentale des institutionnels : si le march&eacute; ouvre <strong>dans</strong> la Value Area de la veille, il y a une probabilit&eacute; statistique de 70% qu&apos;il aille tester les deux bornes (VA rotation). Si le march&eacute; ouvre <strong>hors</strong> de la Value Area, deux sc&eacute;narios s&apos;affrontent : il revient dans la VA (retour &agrave; la valeur) ou il accepte ce nouveau niveau (extension de range).</p>

      <h3>Les HVN (High Volume Nodes)</h3>
      <p>Les <strong>HVN</strong> sont des zones de fort volume dans le profil — des &quot;pics&quot; dans l&apos;histogramme. Ce sont des zones d&apos;attraction : le march&eacute; y revient naturellement car il y a eu un consensus fort. En pratique, un HVN agit comme un aimant et peut ralentir ou arr&ecirc;ter un mouvement en cours.</p>

      <h3>Les LVN (Low Volume Nodes)</h3>
      <p>Les <strong>LVN</strong> sont des zones de faible volume — des &quot;creux&quot; dans le profil. Ils repr&eacute;sentent des zones de d&eacute;saccord o&ugrave; le march&eacute; est pass&eacute; rapidement, sans s&apos;arr&ecirc;ter. En pratique, un LVN offre peu de r&eacute;sistance au prix : quand le march&eacute; traverse un LVN, il acc&eacute;l&egrave;re souvent jusqu&apos;au prochain HVN.</p>

      <div className="info-box">
        <div className="info-box-title">R&egrave;gle pratique LVN</div>
        <p>Un LVN entre deux HVN est un point de d&eacute;cision. Le prix s&apos;y retrouve souvent apr&egrave;s une p&eacute;riode de congestion dans un HVN. Si le march&eacute; traverse le LVN avec du volume agressif, il a de fortes chances d&apos;atteindre le HVN suivant rapidement — d&apos;o&ugrave; l&apos;int&eacute;r&ecirc;t de placer ses objectifs de trades sur les HVN oppos&eacute;s.</p>
      </div>

      <h2 id="types">Les types de Volume Profile</h2>
      <p>Tous les Volume Profiles ne se valent pas. Le choix de la p&eacute;riode analys&eacute;e change radicalement l&apos;information obtenue.</p>

      <table className="compare-table">
        <thead><tr><th>Type</th><th>P&eacute;riode analys&eacute;e</th><th>Usage</th></tr></thead>
        <tbody>
          <tr><td>Session VP</td><td>Une seule session (jour)</td><td>Niveaux intrajournaliers, day trading</td></tr>
          <tr><td>Visible Range VP</td><td>Ce qui est visible &agrave; l&apos;&eacute;cran</td><td>Analyse rapide, adaptative au zoom</td></tr>
          <tr><td>Fixed Range VP</td><td>Plage de dates d&eacute;finie manuellement</td><td>Analyse d&apos;une structure sp&eacute;cifique, swing</td></tr>
          <tr><td>Composite VP</td><td>Plusieurs sessions empil&eacute;es</td><td>Niveaux de r&eacute;f&eacute;rence macro, position trading</td></tr>
        </tbody>
      </table>

      <p>En day trading sur futures (ES, NQ, YM, CL), le <strong>Session VP</strong> et le <strong>Composite VP</strong> sont vos outils quotidiens. Le Session VP vous donne les niveaux de la veille (vPOC J-1, VAH J-1, VAL J-1) — des r&eacute;f&eacute;rences utilis&eacute;es par la quasi-totalit&eacute; des traders institutionnels. Le Composite VP sur 5 &agrave; 20 jours r&eacute;v&egrave;le les zones d&apos;accumulation et de distribution en cours.</p>

      <h2 id="hvn-lvn">Utiliser les HVN et LVN en pratique</h2>
      <p>La vraie puissance du Volume Profile r&eacute;side dans sa capacit&eacute; &agrave; pr&eacute;dire le comportement du prix aux niveaux de volume. Voici comment les professionnels les utilisent.</p>

      <h3>Le retour au POC</h3>
      <p>Le POC exerce une force gravitationnelle. Un march&eacute; qui s&apos;&eacute;loigne de son POC finit statistiquement par y revenir, surtout si ce POC est &quot;naked&quot; — non retest&eacute; depuis sa formation. Un <strong>Naked POC</strong> (vPOC) est l&apos;un des niveaux les plus fiables du Volume Profile : c&apos;est un prix d&apos;&eacute;quilibre en suspens, une dette du march&eacute;.</p>

      <h3>Les breakouts de Value Area</h3>
      <p>Un breakout au-dessus de la VAH avec un volume croissant et une acceptance (le march&eacute; y reste plusieurs minutes) est haussier. L&apos;objectif logique : le prochain HVN au-dessus. L&apos;inverse pour un breakdown sous la VAL. <strong>La cl&eacute; est l&apos;acceptance</strong> : un faux breakout revient rapidement dans la VA, un vrai breakout s&apos;y installe.</p>

      <h3>Les LVN comme zones de transition</h3>
      <p>Imaginez deux HVN &agrave; 4500 et 4520, s&eacute;par&eacute;s par un LVN &agrave; 4510. Si le march&eacute; est dans le HVN de 4500 et commence &agrave; monter avec du volume agressif, le LVN de 4510 offrira peu de r&eacute;sistance — le march&eacute; le traversera rapidement. Votre target naturel : 4520 (le HVN suivant). C&apos;est de la physique du march&eacute;.</p>

      <h2 id="strategies">Strat&eacute;gies de trading avec le Volume Profile</h2>

      <h3>1. Le retour &agrave; la Value Area (VA Rotation)</h3>
      <p>Setup classique : le march&eacute; ouvre dans la Value Area de la session pr&eacute;c&eacute;dente. Le principe de rotation stipule qu&apos;il y a 70% de chances que le march&eacute; teste les deux extr&ecirc;mes de la VA (VAH et VAL). Vous tradez le mouvement vers le bord oppos&eacute;. Stop serr&eacute; au-del&agrave; du dernier HVN significatif.</p>

      <h3>2. Le rebond sur vPOC (Naked POC)</h3>
      <p>Identifiez un vPOC d&apos;une session r&eacute;cente non retest&eacute;. Quand le march&eacute; revient sur ce niveau, observez le comportement sur le <a href="/blog/footprint-chart-trading/">Footprint Chart</a> : absorption des ordres sell ? Delta positif ? Ces confluences transforment un niveau th&eacute;orique en opportunit&eacute; concr&egrave;te.</p>

      <h3>3. Le breakout de VA confirm&eacute;</h3>
      <p>Un breakout au-dessus de la VAH est valide si : (1) le march&eacute; accepte au-dessus pendant 2 &agrave; 3 TPO (15-30 minutes en journ&eacute;e), (2) le volume augmente sur le breakout, (3) pas d&apos;absorption vendeuse visible au <a href="/blog/footprint-chart-trading/">Footprint</a>. Target : prochain HVN ou VAH de la session suivante.</p>

      <h3>4. Le squeeze entre LVN</h3>
      <p>Si le prix oscille entre deux LVN (zone de &quot;no man&apos;s land&quot;), il cherche un HVN pour s&apos;installer. Les mouvements dans ces zones sont souvent rapides et tranchants. Ne tentez pas de trapper ces zones — attendez que le march&eacute; atteigne un HVN et montrez-y des signes de stabilisation avant d&apos;entrer.</p>

      <h2 id="vs-mp">Volume Profile vs Market Profile</h2>
      <p>La confusion entre les deux est fr&eacute;quente. Voici les diff&eacute;rences essentielles.</p>

      <table className="compare-table">
        <thead><tr><th>Crit&egrave;re</th><th>Volume Profile</th><th>Market Profile</th></tr></thead>
        <tbody>
          <tr><td>Mesure</td><td>Volume r&eacute;el &eacute;chang&eacute;</td><td>Temps pass&eacute; (lettres TPO)</td></tr>
          <tr><td>POC</td><td>Prix avec le plus de volume</td><td>Prix avec le plus de TPO</td></tr>
          <tr><td>Value Area</td><td>70% du volume</td><td>70% des TPO</td></tr>
          <tr><td>Avantage</td><td>Montre l&apos;argent r&eacute;el</td><td>Montre l&apos;acceptation temporelle</td></tr>
          <tr><td>Limite</td><td>D&eacute;pend de la qualit&eacute; des donn&eacute;es</td><td>Moins pr&eacute;cis sur les plateformes modernes</td></tr>
        </tbody>
      </table>

      <p>En pratique, les deux POC ne co&iuml;ncident pas toujours — et c&apos;est informatif. Si le vPOC (volume) est plus bas que le tPOC (temps), le march&eacute; a pass&eacute; du temps en haut mais &eacute;chang&eacute; plus de volume en bas. Cela peut indiquer une distribution : les institutions ont vendu en haut pendant que le retail tradait en bas.</p>

      <blockquote>
        <strong>R&egrave;gle d&apos;or :</strong> Utilisez le Market Profile pour la structure macro (quel type de journ&eacute;e, quelle phase du march&eacute;), et le Volume Profile pour les niveaux pr&eacute;cis de support/r&eacute;sistance. Les deux ensemble sont plus puissants que chacun s&eacute;par&eacute;ment.
      </blockquote>

      <h2 id="vwap">Le VWAP et ses extensions</h2>
      <p>Le <strong>VWAP</strong> (Volume Weighted Average Price) est le prix moyen pond&eacute;r&eacute; par le volume depuis le d&eacute;but de la session. C&apos;est le benchmark de r&eacute;f&eacute;rence des institutionnels : un large trader qui bat le VWAP a bien ex&eacute;cut&eacute; sa journ&eacute;e.</p>
      <p>Le VWAP seul est utile mais insuffisant. Les extensions (VWAP bands, anchored VWAP) sont bien plus puissantes :</p>
      <ul>
        <li><strong>VWAP standard</strong> : reset quotidien. S&eacute;pare la pression acheteuse (prix au-dessus) de la pression vendeuse (prix en dessous).</li>
        <li><strong>Anchored VWAP</strong> : calcul&eacute; depuis un &eacute;v&eacute;nement cl&eacute; (gap, point bas majeur, annonce macro). Utilis&eacute; par les desks institutionnels pour mesurer leur prix moyen d&apos;entr&eacute;e.</li>
        <li><strong>VWAP bands (&plusmn;1&sigma;, &plusmn;2&sigma;)</strong> : les d&eacute;viations statistiques. Un prix &agrave; +2&sigma; est statistiquement surachet&eacute; en intraday — les mean reversion traders l&apos;utilisent comme signal de retournement.</li>
      </ul>
      <p>La confluence VWAP + POC + VAH/VAL est l&apos;une des configurations les plus fiables du day trading sur futures. Quand ces trois niveaux convergent en un seul point, vous avez un niveau de haute probabilit&eacute;.</p>

      <h2 id="sierra">Configuration sur Sierra Chart</h2>
      <p>Sierra Chart est la r&eacute;f&eacute;rence professionnelle pour le Volume Profile. Voici la configuration recommand&eacute;e pour d&eacute;marrer.</p>

      <h3>Ajouter un Volume Profile</h3>
      <p>Dans Sierra Chart, ajoutez l&apos;&eacute;tude &quot;Volume by Price&quot; (ou &quot;Volume Profile&quot;) depuis le menu Analysis &gt; Add Custom Study. Choisissez la r&eacute;solution (taille des blocs en ticks), activez l&apos;affichage du POC, de la Value Area, et des sous-niveaux (HVN coloration). Le guide complet de configuration Sierra Chart est disponible dans notre article d&eacute;di&eacute;.</p>

      <h3>Param&egrave;tres essentiels</h3>
      <ul>
        <li><strong>Value Area % :</strong> 70% (standard institutionnel)</li>
        <li><strong>Profile type :</strong> Session ou Composite selon votre horizon</li>
        <li><strong>POC color :</strong> rouge ou jaune pour visibilit&eacute; maximale</li>
        <li><strong>VAH/VAL :</strong> lignes horizontales persistantes pour r&eacute;f&eacute;rence</li>
        <li><strong>Naked POC :</strong> activer l&apos;extension jusqu&apos;au retour du prix</li>
      </ul>

      <p>Pour une configuration compl&egrave;te pas &agrave; pas, consultez notre guide <a href="/blog/sierra-chart-configuration/">Sierra Chart : configuration compl&egrave;te</a>. Vous y trouverez les templates utilis&eacute;s dans le mentorat BASS.</p>

      <h2 id="bass">Apprendre le Volume Profile avec BASS Trading</h2>
      <p>Le Volume Profile est un outil puissant mais qui demande de la pratique pour d&eacute;velopper un &quot;&oelig;il&quot; automatique. Savoir reconna&icirc;tre instantan&eacute;ment un profil en D (tendance), en P (distribution), en b (accumulation) ou en cloche (&eacute;quilibre) — &ccedil;a s&apos;acquiert par l&apos;exposition r&eacute;p&eacute;t&eacute;e, pas par la lecture.</p>
      <p>Dans le mentorat BASS Trading, le Volume Profile est int&eacute;gr&eacute; d&egrave;s le premier module. Chaque session de trading en live commence par une analyse des profils de la veille et des niveaux cl&eacute;s du jour. S&eacute;bastien annote les profils en temps r&eacute;el, explique les d&eacute;cisions de trading par rapport &agrave; ces niveaux, et accompagne les traders jusqu&apos;&agrave; ce que la lecture devienne instinctive.</p>
    </>
  );
}
