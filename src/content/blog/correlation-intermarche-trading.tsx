export default function CorrelationIntermarcheTrading() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que la corr&eacute;lation intermarch&eacute;s ?</h2>
      <p>La corr&eacute;lation intermarch&eacute;s est l&apos;&eacute;tude des relations entre diff&eacute;rentes classes d&apos;actifs : indices actions, obligations, devises, mati&egrave;res premi&egrave;res. Aucun march&eacute; ne bouge en isolation — comprendre ces liens vous donne un avantage contextuel que la majorit&eacute; des day traders ignorent.</p>
      <p>Quand vous tradez le ES ou le NQ, vous ne tradez pas un instrument isol&eacute;. Vous tradez un &eacute;cosyst&egrave;me o&ugrave; les bonds, le dollar, le VIX et les commodities influencent directement le comportement du prix. Ignorer ces corr&eacute;lations, c&apos;est conduire en ne regardant qu&apos;un seul r&eacute;troviseur.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Les divergences intermarch&eacute;s sont des signaux haute valeur</h4>
        <p>Quand des actifs habituellement corr&eacute;l&eacute;s divergent, quelque chose d&apos;important se passe. Le NQ fait de nouveaux highs mais le ES stagne ? Les techs tirent seules — c&apos;est fragile. Le ES monte mais les bonds montent aussi ? Le march&eacute; h&eacute;site entre risk-on et risk-off.</p>
      </div>

      <hr />

      <h2 id="correlations-cles">Les corr&eacute;lations cl&eacute;s</h2>

      <h3>ES et NQ</h3>
      <p>Le S&amp;P 500 (ES) et le Nasdaq 100 (NQ) sont positivement corr&eacute;l&eacute;s &agrave; plus de 0.90 en temps normal. Quand le NQ surperforme le ES, les techs m&egrave;nent le march&eacute; (risk-on tech). Quand le NQ sous-performe, c&apos;est un signal de rotation ou de faiblesse tech.</p>

      <h3>Indices et Bonds (ZN, ZB)</h3>
      <p>Historiquement, les obligations (Treasury Futures — ZN pour le 10 ans, ZB pour le 30 ans) sont <strong>inversement corr&eacute;l&eacute;es</strong> aux indices actions. Quand les actions baissent, les investisseurs fuient vers la s&eacute;curit&eacute; des bonds (flight to quality) — les bonds montent.</p>

      <h3>Indices et VIX</h3>
      <p>Le VIX (indice de volatilit&eacute; implicite) est <strong>inversement corr&eacute;l&eacute;</strong> au S&amp;P 500. Quand le march&eacute; baisse, la peur monte et le VIX explose. Quand le march&eacute; est calme et haussier, le VIX s&apos;effondre. Un VIX qui monte alors que le ES monte aussi est un signal d&apos;alerte.</p>

      <h3>Dollar (DX) et march&eacute;s</h3>
      <p>Un dollar fort (DX en hausse) met g&eacute;n&eacute;ralement la pression sur les indices actions (les multinationales US gagnent moins &agrave; l&apos;&eacute;tranger) et sur les mati&egrave;res premi&egrave;res (libell&eacute;es en dollars). Un dollar faible est g&eacute;n&eacute;ralement favorable aux actions et &agrave; l&apos;or.</p>

      <h3>Or (GC) et Dollar</h3>
      <p>L&apos;or est traditionnellement <strong>inversement corr&eacute;l&eacute;</strong> au dollar. Dollar faible = or en hausse. C&apos;est aussi une valeur refuge — l&apos;or monte en p&eacute;riode de crise ou d&apos;incertitude, m&ecirc;me si le dollar monte aussi.</p>

      <h3>P&eacute;trole (CL) et march&eacute;s</h3>
      <p>Le crude oil (CL) est influenc&eacute; par le dollar, la demande &eacute;conomique, et la g&eacute;opolitique. Un CL en forte hausse peut signaler de l&apos;inflation — n&eacute;gatif pour les bonds et potentiellement pour les actions si les taux montent.</p>

      <table className="compare-table">
        <thead><tr><th>Paire</th><th>Corr&eacute;lation typique</th><th>Quand &ccedil;a diverge</th></tr></thead>
        <tbody>
          <tr><td>ES / NQ</td><td>Positive forte (&gt;0.90)</td><td>Rotation sectorielle, faiblesse tech</td></tr>
          <tr><td>ES / ZN (bonds)</td><td>Inverse</td><td>Les deux montent = confusion risk-on/off</td></tr>
          <tr><td>ES / VIX</td><td>Inverse forte</td><td>Les deux montent = stress cach&eacute;</td></tr>
          <tr><td>ES / DX (dollar)</td><td>Inverse mod&eacute;r&eacute;e</td><td>Forte corr&eacute;lation en p&eacute;riode de crise</td></tr>
          <tr><td>GC (or) / DX</td><td>Inverse</td><td>Les deux montent en crise = flight to safety</td></tr>
          <tr><td>CL / ES</td><td>Variable</td><td>CL explose = risque d&apos;inflation</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="mesurer">Mesurer la corr&eacute;lation</h2>

      <h3>Coefficient de corr&eacute;lation</h3>
      <p>Le coefficient va de -1 (parfaitement inverse) &agrave; +1 (parfaitement positive). 0 = aucune corr&eacute;lation. En pratique, les corr&eacute;lations intermarch&eacute;s varient entre 0.3 et 0.95 selon les p&eacute;riodes.</p>

      <h3>Fen&ecirc;tres glissantes</h3>
      <p>La corr&eacute;lation n&apos;est pas fixe — elle &eacute;volue. La corr&eacute;lation ES/NQ peut passer de 0.95 &agrave; 0.70 en quelques jours lors d&apos;une rotation sectorielle. Utilisez des fen&ecirc;tres de 20-30 jours pour suivre l&apos;&eacute;volution.</p>

      <h3>Quand les corr&eacute;lations cassent</h3>
      <p>Les corr&eacute;lations se renforcent en crise (tout baisse ensemble) et peuvent se d&eacute;coupler en p&eacute;riode de transition. Quand une corr&eacute;lation historique casse, c&apos;est un signal que quelque chose de fondamental change dans le march&eacute;.</p>

      <hr />

      <h2 id="divergences">Les divergences intermarch&eacute;s</h2>

      <h3>Le signal le plus puissant</h3>
      <p>Quand deux actifs habituellement corr&eacute;l&eacute;s divergent, c&apos;est un signal de haute valeur. La divergence r&eacute;v&egrave;le une tension sous la surface que le prix seul ne montre pas.</p>

      <h3>NQ/ES divergence</h3>
      <p>Le NQ fait de nouveaux highs intraday mais le ES ne suit pas. Traduction : seules les tech-stocks poussent le march&eacute;. Le rallye est &eacute;troit et vuln&eacute;rable. Si les techs fl&eacute;chissent, tout descend. C&apos;est un contexte o&ugrave; les longs sont &agrave; risque.</p>

      <h3>ES/Bonds divergence</h3>
      <p>Le ES monte et les bonds (ZN) montent aussi. Normalement ils sont inversement corr&eacute;l&eacute;s. Quand les deux montent, le march&eacute; ne sait pas s&apos;il est en risk-on (actions) ou risk-off (bonds). Cette confusion pr&eacute;c&egrave;de souvent un mouvement directionnel fort — dans un sens ou l&apos;autre.</p>

      <h3>ES/VIX divergence</h3>
      <p>Le ES fait de nouveaux highs mais le VIX ne baisse pas (ou monte). La complaisance est absente — les options traders ach&egrave;tent de la protection malgr&eacute; le rallye. C&apos;est un avertissement : le &quot;smart money&quot; se couvre.</p>

      <div className="info-box">
        <div className="info-box-title">Conseil</div>
        <p>Notez les divergences intermarch&eacute;s dans votre analyse pr&eacute;-session. Si le ES a fait un nouveau high hier mais que les bonds ont aussi mont&eacute; et le VIX n&apos;a pas baiss&eacute;, votre biais pour la journ&eacute;e devrait &ecirc;tre prudent, m&ecirc;me si le chart ES semble haussier.</p>
      </div>

      <hr />

      <h2 id="bonds">Bonds et indices : la relation cl&eacute;</h2>

      <h3>Le 10 ans (ZN) comme indicateur avvanc&eacute;</h3>
      <p>Les Treasury Futures (ZN pour le 10 ans, ZB pour le 30 ans) r&eacute;agissent souvent <strong>avant</strong> les indices actions. Un sell-off sur les bonds peut pr&eacute;c&eacute;der un sell-off sur les actions de quelques minutes &agrave; quelques heures.</p>

      <h3>Taux et actions</h3>
      <p>Quand les taux montent rapidement (bonds baissent), les actions souffrent — le co&ucirc;t du capital augmente, les valorisations tech sont compress&eacute;es. Quand les taux baissent (bonds montent), les actions b&eacute;n&eacute;ficient de conditions financi&egrave;res plus souples.</p>

      <h3>Flight to quality</h3>
      <p>En panique de march&eacute;, l&apos;argent fuit les actions et va dans les bonds. Si vous voyez les bonds exploser &agrave; la hausse, pr&eacute;parez-vous &agrave; un sell-off sur les indices — ou confirmez qu&apos;il est d&eacute;j&agrave; en cours.</p>

      <hr />

      <h2 id="dollar">Dollar et commodities</h2>

      <h3>Le dollar comme thermom&egrave;tre</h3>
      <p>Le Dollar Index (DX) refl&egrave;te la force relative du dollar US. Un dollar fort = les investisseurs cherchent la s&eacute;curit&eacute; du dollar (risk-off) ou les taux US attirent les capitaux. Un dollar faible = risk-on, les capitaux vont vers les actifs risqu&eacute;s.</p>

      <h3>Impact sur le ES/NQ</h3>
      <p>Sur le moyen terme, un dollar en baisse est g&eacute;n&eacute;ralement positif pour les actions US (exportations plus comp&eacute;titives, liquidit&eacute; mondiale en hausse). Sur le court terme (intraday), la corr&eacute;lation est plus faible — mais les mouvements violents du dollar (apr&egrave;s une d&eacute;cision de la Fed) impactent imm&eacute;diatement les Futures.</p>

      <h3>Or et dollar en crise</h3>
      <p>En temps normal, l&apos;or et le dollar sont inversement corr&eacute;l&eacute;s. Mais en crise majeure, les deux peuvent monter ensemble — le march&eacute; cherche toute forme de s&eacute;curit&eacute;. C&apos;est un signal de panique g&eacute;n&eacute;ralis&eacute;e.</p>

      <hr />

      <h2 id="strategies">3 strat&eacute;gies</h2>

      <h3>1. Divergence ES/NQ comme filtre</h3>
      <p>Chaque matin, comparez le positionnement du ES et du NQ par rapport &agrave; leur Value Area respective. Si le NQ est au-dessus de son VAH mais le ES est encore dans sa VA, le rallye est tir&eacute; par les techs. Soyez prudent sur les longs ES — privil&eacute;giez le NQ pour les achats.</p>

      <h3>2. Bonds comme confirmation</h3>
      <p>Avant de prendre un long sur le ES &agrave; un support Market Profile, v&eacute;rifiez les bonds. Si les bonds baissent (taux montent) au m&ecirc;me moment, votre long est &agrave; contre-courant du flux obligataire. Si les bonds sont stables ou en hausse, votre long a le vent dans le dos.</p>

      <h3>3. VIX comme alerte</h3>
      <p>Le VIX a un seuil psychologique autour de 20. Au-dessus de 20, la volatilit&eacute; est &eacute;lev&eacute;e — les ranges intraday sont plus larges, les stops doivent &ecirc;tre plus larges. En dessous de 12, la complaisance r&egrave;gne — tout mouvement de VIX vers 15+ peut d&eacute;clencher un sell-off. Adaptez votre sizing en cons&eacute;quence.</p>

      <hr />

      <h2 id="sierra-chart">Configuration multi-charts</h2>

      <h3>Layout recommand&eacute;</h3>
      <p>&Eacute;cran principal : ES (chart principal avec Market Profile + Footprint). &Eacute;cran secondaire ou sous-fen&ecirc;tres : NQ, ZN (bonds 10Y), DX (dollar), VIX. Vous voyez l&apos;&eacute;cosyst&egrave;me entier d&apos;un coup d&apos;&oelig;il.</p>

      <h3>Overlay charts</h3>
      <p>Sierra Chart permet d&apos;afficher le NQ en overlay sur le chart ES. Vous voyez instantan&eacute;ment quand les deux divergent. M&ecirc;me principe avec les bonds : ZN invers&eacute; en overlay sur le ES montre la corr&eacute;lation en temps r&eacute;el.</p>

      <h3>Alertes</h3>
      <p>Configurez des alertes Sierra Chart sur les niveaux cl&eacute;s des actifs corr&eacute;l&eacute;s : VIX qui passe au-dessus de 20, DX qui casse un support, ZN qui fait un nouveau high. Ces alertes enrichissent votre contextualisation sans que vous ayez &agrave; surveiller tous les charts en permanence.</p>

      <hr />

      <h2 id="erreurs">5 erreurs &agrave; &eacute;viter</h2>

      <h3>1. Croire que les corr&eacute;lations sont constantes</h3>
      <p>La corr&eacute;lation ES/bonds peut s&apos;inverser pendant des semaines enti&egrave;res. Ne tradez pas une corr&eacute;lation historique sans v&eacute;rifier qu&apos;elle est active actuellement.</p>

      <h3>2. Surcompliquer l&apos;analyse</h3>
      <p>Surveillez 3-4 actifs corr&eacute;l&eacute;s, pas 15. ES, NQ, ZN et VIX suffisent pour 90% des situations. Ajoutez le DX et le GC si n&eacute;cessaire, mais ne noyez pas votre analyse.</p>

      <h3>3. Ignorer les changements de r&eacute;gime</h3>
      <p>En p&eacute;riode de hausse des taux (Fed hawkish), la corr&eacute;lation bonds/actions change de dynamique. En p&eacute;riode d&apos;inflation &eacute;lev&eacute;e, les corr&eacute;lations traditionnelles se brisent. Restez flexible.</p>

      <h3>4. Trader la corr&eacute;lation sans setup</h3>
      <p>&quot;Les bonds baissent donc le ES va monter&quot; — ce n&apos;est pas un trade. La corr&eacute;lation donne un <strong>biais</strong>, pas un signal d&apos;entr&eacute;e. Vous avez toujours besoin d&apos;un setup Market Profile + Order Flow pour entrer.</p>

      <h3>5. N&eacute;gliger le timing</h3>
      <p>Les corr&eacute;lations ne sont pas instantan&eacute;es. Les bonds peuvent commencer &agrave; baisser 30 minutes avant que le ES ne r&eacute;agisse. Ne pr&eacute;cipitez pas vos entr&eacute;es — la divergence peut prendre du temps &agrave; se mat&eacute;rialiser sur votre instrument principal.</p>

      <hr />

      <h2 id="bass">Apprendre avec BASS Trading</h2>
      <p>Le mentorat BASS Trading int&egrave;gre l&apos;analyse intermarch&eacute;s dans chaque session. S&eacute;bastien surveille les bonds, le VIX et le rapport ES/NQ en temps r&eacute;el pour contextualiser ses d&eacute;cisions. Les templates Sierra Chart incluent les charts multi-instruments pr&eacute;-configur&eacute;s.</p>
      <p>Vous apprenez &agrave; lire l&apos;&eacute;cosyst&egrave;me complet, pas juste un graphique isol&eacute;. C&apos;est cette vision macro qui diff&eacute;rencie un trader qui comprend le march&eacute; d&apos;un trader qui suit aveugl&eacute;ment un indicateur.</p>
    </>
  );
}
