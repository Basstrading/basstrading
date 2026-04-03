export default function PoorHighLowMarketProfile() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce qu&apos;un Poor High et un Poor Low ?</h2>
      <p>En Market Profile, un <strong>Poor High</strong> est un sommet de session sans rejet clair — le prix s&apos;est simplement arr&ecirc;t&eacute; de monter sans que les vendeurs aient vraiment pris le contr&ocirc;le. Un <strong>Poor Low</strong> est l&apos;inverse : un creux sans rejet acheteur marqu&eacute;.</p>
      <p>Techniquement, un poor extreme appara&icirc;t quand le profil TPO montre un sommet ou un creux <strong>plat</strong>, sans single prints ni tail. L&apos;auction est incompl&egrave;te — le march&eacute; n&apos;a pas fini son travail &agrave; cet extr&ecirc;me. Il y reviendra.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Un poor extreme est une affaire non termin&eacute;e</h4>
        <p>Le march&eacute; fonctionne par enchères. Quand une ench&egrave;re s&apos;arr&ecirc;te sans conclusion nette (pas d&apos;excess, pas de rejet), c&apos;est comme une vente aux ench&egrave;res interrompue. Le march&eacute; reviendra tester ce niveau — la probabilit&eacute; est tr&egrave;s &eacute;lev&eacute;e.</p>
      </div>

      <hr />

      <h2 id="excess">L&apos;Excess : l&apos;oppos&eacute; du poor extreme</h2>
      <p>Pour comprendre le poor extreme, il faut comprendre son oppos&eacute; : l&apos;<strong>excess</strong>. L&apos;excess se produit quand le march&eacute; rejette clairement un niveau de prix avec des single prints ou une &quot;tail&quot; (queue) de 2 TPO ou plus &agrave; l&apos;extr&ecirc;me du profil.</p>

      <h3>Buying tail (excess bas)</h3>
      <p>En bas du profil, des acheteurs agressifs ont repouss&eacute; le prix vers le haut, laissant des single prints. Le march&eacute; a dit : &quot;ce prix est trop bas, on n&apos;en veut pas&quot;. L&apos;auction basse est <strong>compl&egrave;te</strong>.</p>

      <h3>Selling tail (excess haut)</h3>
      <p>En haut du profil, des vendeurs agressifs ont repouss&eacute; le prix vers le bas. Le march&eacute; a dit : &quot;ce prix est trop &eacute;lev&eacute;&quot;. L&apos;auction haute est <strong>compl&egrave;te</strong>.</p>

      <h3>Poor extreme = pas d&apos;excess</h3>
      <p>Quand l&apos;extr&ecirc;me du profil est plat — pas de tail, pas de single prints, juste un arr&ecirc;t passif — personne n&apos;a vraiment rejet&eacute; ce prix. L&apos;auction est <strong>incompl&egrave;te</strong>. Le march&eacute; a une affaire non termin&eacute;e.</p>

      <hr />

      <h2 id="identification">Comment identifier un poor extreme</h2>

      <h3>Sur le profil TPO</h3>
      <p>Regardez le sommet et le creux du profil de la session. Si le haut du profil montre <strong>plusieurs lettres TPO align&eacute;es horizontalement</strong> sans single prints au-dessus, c&apos;est un Poor High. Le profil est &quot;coup&eacute; net&quot; en haut, comme si quelqu&apos;un avait pos&eacute; un couvercle.</p>

      <h3>Visuellement</h3>
      <p>Un excess ressemble &agrave; une pointe de fl&egrave;che — &eacute;troit, avec des single prints qui pointent vers l&apos;extr&ecirc;me. Un poor extreme ressemble &agrave; un mur — plat, large, sans pointe. C&apos;est la diff&eacute;rence cl&eacute;.</p>

      <h3>Causes fr&eacute;quentes</h3>
      <p>Les poor extremes se forment souvent pendant les rotations de midi (lunch hour), en fin de session (le march&eacute; s&apos;arr&ecirc;te par manque de participants, pas par rejet), ou quand une news externe interrompt le mouvement en cours.</p>

      <table className="compare-table">
        <thead><tr><th>Crit&egrave;re</th><th>Excess (auction compl&egrave;te)</th><th>Poor Extreme (auction incompl&egrave;te)</th></tr></thead>
        <tbody>
          <tr><td>Forme</td><td>Pointu — single prints, tail</td><td>Plat — pas de single prints</td></tr>
          <tr><td>Signification</td><td>Rejet clair du prix</td><td>Arr&ecirc;t passif, pas de rejet</td></tr>
          <tr><td>Probabilit&eacute; de revisit</td><td>Faible &agrave; mod&eacute;r&eacute;e</td><td>&Eacute;lev&eacute;e</td></tr>
          <tr><td>Action</td><td>Utiliser comme S/R fiable</td><td>Anticiper un retour du prix</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="psychologie">La psychologie derri&egrave;re le poor extreme</h2>
      <p>Pourquoi le march&eacute; laisse-t-il une auction incompl&egrave;te ? Parce que le mouvement s&apos;est arr&ecirc;t&eacute; pour des raisons <strong>externes au flux d&apos;ordres</strong>, pas par un v&eacute;ritable rejet.</p>

      <h3>Le lunch hour</h3>
      <p>Le march&eacute; est en tendance le matin, fait un high &agrave; 11h30, puis les participants partent d&eacute;jeuner. Le volume s&apos;eff&egrave;fondre. Le prix arr&ecirc;te de monter — pas parce que les vendeurs sont l&agrave;, mais parce que plus personne ne pousse. R&eacute;sultat : Poor High.</p>

      <h3>La cl&ocirc;ture de session</h3>
      <p>Le march&eacute; fait un low &agrave; 15h55, 5 minutes avant la cl&ocirc;ture. Le mouvement baissier est coup&eacute; par la fin de la session. Pas de rejet acheteur — juste le temps qui s&apos;arr&ecirc;te. R&eacute;sultat : Poor Low qui sera probablement test&eacute; le lendemain.</p>

      <h3>Interruption par une news</h3>
      <p>Le march&eacute; monte vers un nouveau high quand un headline tombe et provoque un sell-off soudain. Le high n&apos;a pas &eacute;t&eacute; rejet&eacute; par le march&eacute; — il a &eacute;t&eacute; interrompu par un &eacute;v&eacute;nement. Le march&eacute; voudra retester ce niveau une fois la poussi&egrave;re retomb&eacute;e.</p>

      <hr />

      <h2 id="signification">Ce que signifie un poor extreme</h2>

      <h3>Un aimant &agrave; prix</h3>
      <p>Le poor extreme agit comme un <strong>aimant</strong>. Le march&eacute; est attir&eacute; vers les niveaux o&ugrave; l&apos;auction est incompl&egrave;te. C&apos;est un des principes fondamentaux de l&apos;Auction Market Theory : le march&eacute; cherche toujours &agrave; compl&eacute;ter ses enchères.</p>

      <h3>Haute probabilit&eacute; de revisit</h3>
      <p>Les &eacute;tudes empiriques et l&apos;exp&eacute;rience montrent que les poor extremes sont revisit&eacute;s dans plus de <strong>80% des cas</strong>, souvent dans les 1-3 sessions suivantes. C&apos;est l&apos;un des concepts les plus fiables en Market Profile.</p>

      <h3>Direction probable</h3>
      <p>Un Poor High sugg&egrave;re que le march&eacute; ira plus haut. Un Poor Low sugg&egrave;re que le march&eacute; ira plus bas. Ce n&apos;est pas une certitude, mais c&apos;est un biais directionnel &agrave; forte probabilit&eacute;.</p>

      <div className="info-box">
        <div className="info-box-title">En pratique</div>
        <p>Chaque matin, v&eacute;rifiez si la session pr&eacute;c&eacute;dente a laiss&eacute; un Poor High ou un Poor Low. Si oui, vous avez un biais directionnel pour la journ&eacute;e — le march&eacute; ira probablement tester ce niveau.</p>
      </div>

      <hr />

      <h2 id="strategies">3 strat&eacute;gies</h2>

      <h3>1. Trader vers le poor extreme</h3>
      <p>Le poor extreme est votre cible. Si le jour pr&eacute;c&eacute;dent a laiss&eacute; un Poor High 30 points au-dessus du close, cherchez des achats pour viser ce niveau. Combinez avec l&apos;analyse de l&apos;ouverture (au-dessus ou en dessous de la Value Area) pour confirmer le biais.</p>

      <h3>2. Fade au poor extreme</h3>
      <p>Quand le prix atteint le poor extreme et que l&apos;Order Flow montre de l&apos;absorption (gros volume sans progression), le poor extreme peut devenir un vrai point de retournement. Le march&eacute; a compl&eacute;t&eacute; son auction — maintenant il peut repartir dans l&apos;autre sens.</p>

      <h3>3. Continuation &agrave; travers le poor extreme</h3>
      <p>Si le prix traverse le poor extreme avec du momentum et des stacked imbalances, c&apos;est un signal de continuation. Le march&eacute; ne s&apos;arr&ecirc;te pas l&agrave; — il utilise le poor extreme comme un tremplin pour aller plus loin. Le stop se place de l&apos;autre c&ocirc;t&eacute; du poor extreme.</p>

      <hr />

      <h2 id="exemples">Exemples sur ES</h2>

      <h3>Sc&eacute;nario 1 : Poor High combl&eacute; le lendemain</h3>
      <p>Lundi, le ES fait un high &agrave; 5 285 sans excess — le volume a simplement diminu&eacute; en fin de matin&eacute;e. Poor High. Mardi, le march&eacute; ouvre en Value Area et commence &agrave; monter. &Agrave; 5 280, l&apos;Order Flow montre de l&apos;agressivit&eacute; acheteuse. Le prix atteint 5 285, traverse, et fait un nouveau high &agrave; 5 298 avec un excess propre (single prints). L&apos;auction haute est maintenant compl&egrave;te.</p>

      <h3>Sc&eacute;nario 2 : Poor Low comme target</h3>
      <p>Mercredi, le ES fait un low &agrave; 5 220 sans rejet — l&apos;apr&egrave;s-midi &eacute;tait calme et le prix s&apos;est simplement pos&eacute;. Poor Low. Jeudi, le march&eacute; ouvre sous le POC avec des Market Internals baissiers. Vous cherchez des ventes vers 5 220. Le prix y arrive, l&apos;absorption appara&icirc;t sur le Footprint. Prise de b&eacute;n&eacute;fice sur le short — le poor low est combl&eacute;.</p>

      <hr />

      <h2 id="sierra-chart">Configuration Sierra Chart</h2>

      <h3>Afficher le profil TPO</h3>
      <p>Utilisez le <strong>TPO Profile Chart</strong> de Sierra Chart. Affichez le profil de la veille et de la session en cours c&ocirc;te &agrave; c&ocirc;te. Les extr&ecirc;mes du profil sont imm&eacute;diatement visibles.</p>

      <h3>Rep&eacute;rer les poor extremes</h3>
      <p>Comparez les extr&ecirc;mes : le haut du profil est-il pointu (excess) ou plat (poor) ? Sierra Chart ne marque pas automatiquement les poor extremes — c&apos;est une lecture visuelle que vous d&eacute;veloppez avec la pratique.</p>

      <h3>Marquer les niveaux</h3>
      <p>Utilisez les lignes horizontales pour marquer les poor highs et poor lows des sessions pr&eacute;c&eacute;dentes. Ces niveaux deviennent vos cibles ou vos zones de r&eacute;action pour la session en cours.</p>

      <hr />

      <h2 id="erreurs">Erreurs &agrave; &eacute;viter</h2>

      <h3>1. Confondre excess et poor extreme</h3>
      <p>Si le profil montre 2-3 single prints au sommet, c&apos;est un excess — pas un poor high. La distinction est cruciale car les implications sont oppos&eacute;es. L&apos;excess dit &quot;le march&eacute; a rejet&eacute; ce prix&quot;. Le poor dit &quot;le march&eacute; y reviendra&quot;.</p>

      <h3>2. Trader le poor extreme sans contexte</h3>
      <p>Un Poor High ne signifie pas &quot;achetez imm&eacute;diatement&quot;. V&eacute;rifiez le type de journ&eacute;e, l&apos;ouverture par rapport &agrave; la Value Area, et les Market Internals. Le poor extreme donne un biais, pas un signal d&apos;entr&eacute;e.</p>

      <h3>3. Ignorer le temps &eacute;coul&eacute;</h3>
      <p>Un poor extreme d&apos;hier a plus de chances d&apos;&ecirc;tre combl&eacute; qu&apos;un poor extreme d&apos;il y a 2 semaines. Plus le temps passe, plus d&apos;autres facteurs entrent en jeu. Priorisez les poor extremes r&eacute;cents.</p>

      <h3>4. S&apos;attendre &agrave; un fill exact</h3>
      <p>Le march&eacute; ne touche pas toujours le niveau exact du poor extreme au tick pr&egrave;s. Parfois il s&apos;en approche &agrave; quelques ticks. Utilisez une zone plut&ocirc;t qu&apos;un prix exact.</p>

      <hr />

      <h2 id="bass">Apprendre avec BASS Trading</h2>
      <p>L&apos;identification des poor extremes et leur exploitation est un des piliers du mentorat BASS Trading. S&eacute;bastien Constant commence chaque session par l&apos;analyse du profil de la veille : o&ugrave; sont les poor extremes ? O&ugrave; est l&apos;excess ? Quel est le biais pour la journ&eacute;e ?</p>
      <p>Avec la pratique en Market Replay, vous d&eacute;veloppez l&apos;&oelig;il pour rep&eacute;rer instantan&eacute;ment un poor extreme et int&eacute;grer cette information dans votre plan de trading quotidien.</p>
    </>
  );
}
