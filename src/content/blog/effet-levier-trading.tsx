export default function EffetLevierTrading() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que l&apos;effet de levier ?</h2>
      <p>L&apos;effet de levier vous permet de contr&ocirc;ler une position plus grande que votre capital. Avec 5 000 &euro; de marge, vous pouvez contr&ocirc;ler un contrat ES (S&amp;P 500 Futures) dont la valeur notionnelle d&eacute;passe 250 000 $. C&apos;est un multiplicateur de force — dans les deux sens.</p>
      <p>Le levier amplifie vos gains. Il amplifie aussi vos pertes. C&apos;est la raison num&eacute;ro 1 pour laquelle les traders d&eacute;butants explosent leur compte. Pas parce que le levier est &quot;dangereux&quot; en soi — mais parce qu&apos;ils ne le comprennent pas et ne le dimensionnent pas correctement.</p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Ne pensez jamais en &quot;levier&quot;. Pensez en &quot;risque par trade&quot;.</h4>
        <p>Le levier 50:1 ou 500:1 n&apos;a aucune importance si vous dimensionnez correctement vos positions. Ce qui compte : combien d&apos;euros risquez-vous si le trade va contre vous ? Si la r&eacute;ponse d&eacute;passe 1-2% de votre capital, votre position est trop grosse.</p>
      </div>

      <hr />

      <h2 id="calcul">Calculer le levier</h2>

      <h3>Formule</h3>
      <p><strong>Levier = Valeur notionnelle / Capital de marge</strong></p>
      <p>Un contrat ES vaut environ 50 &times; le prix du S&amp;P 500. Si le S&amp;P est &agrave; 5 200, un contrat ES = 260 000 $. Si votre marge intraday est de 500 $, votre levier est de 520:1. Oui, <strong>520 pour 1</strong>. C&apos;est &eacute;norme — et c&apos;est pour &ccedil;a que le sizing est critique.</p>

      <h3>Exemples concrets</h3>

      <table className="compare-table">
        <thead><tr><th>Contrat</th><th>Valeur du point</th><th>Valeur notionnelle (~)</th><th>Marge intraday (~)</th><th>Levier effectif</th></tr></thead>
        <tbody>
          <tr><td>ES (E-mini S&amp;P)</td><td>50 $ / point</td><td>260 000 $</td><td>500 $</td><td>~520:1</td></tr>
          <tr><td>NQ (E-mini Nasdaq)</td><td>20 $ / point</td><td>360 000 $</td><td>1 000 $</td><td>~360:1</td></tr>
          <tr><td>MES (Micro E-mini S&amp;P)</td><td>5 $ / point</td><td>26 000 $</td><td>50 $</td><td>~520:1</td></tr>
          <tr><td>MNQ (Micro E-mini Nasdaq)</td><td>2 $ / point</td><td>36 000 $</td><td>100 $</td><td>~360:1</td></tr>
        </tbody>
      </table>

      <div className="info-box">
        <div className="info-box-title">Important</div>
        <p>Le levier sur Futures est implicite — il vient de la structure du contrat, pas d&apos;un param&egrave;tre que vous choisissez. Vous ne &quot;s&eacute;lectionnez&quot; pas un levier 100:1 comme sur un CFD. Vous contr&ocirc;lez le risque par le <strong>nombre de contrats</strong> et la <strong>taille du stop</strong>.</p>
      </div>

      <hr />

      <h2 id="futures-vs-cfd">Futures vs CFD</h2>

      <table className="compare-table">
        <thead><tr><th>Crit&egrave;re</th><th>Futures (CME)</th><th>CFD</th></tr></thead>
        <tbody>
          <tr><td>R&eacute;gulation</td><td>Bourse r&eacute;glement&eacute;e (CME), compensat&deg; centralis&eacute;e</td><td>OTC — votre broker est votre contrepartie</td></tr>
          <tr><td>Transparence</td><td>Carnet d&apos;ordres r&eacute;el, volume v&eacute;rifiable</td><td>Prix fabricu&eacute; par le broker, volume fictif</td></tr>
          <tr><td>Spread</td><td>1 tick (0.25 pt sur ES = 12.50 $)</td><td>Variable, souvent &eacute;largi</td></tr>
          <tr><td>Volume</td><td>Donn&eacute;es r&eacute;elles — base de l&apos;Order Flow</td><td>Pas de volume r&eacute;el exploitable</td></tr>
          <tr><td>Ex&eacute;cution</td><td>Matching centralis&eacute;, pas de &quot;requote&quot;</td><td>Le broker peut refuser, &eacute;largir, glisser</td></tr>
          <tr><td>Conflit d&apos;int&eacute;r&ecirc;t</td><td>Aucun — la bourse est neutre</td><td>Le broker gagne quand vous perdez (souvent B-book)</td></tr>
          <tr><td>Levier r&eacute;glementaire</td><td>D&eacute;fini par la bourse, stable</td><td>Limit&eacute; par l&apos;ESMA en Europe (30:1 max)</td></tr>
        </tbody>
      </table>

      <p>Pour trader avec l&apos;Order Flow et le Market Profile, vous avez besoin de <strong>vraies donn&eacute;es de volume</strong>. Seuls les march&eacute;s Futures offrent cette transparence. Les CFD ne permettent pas de lire le flux d&apos;ordres — vous tradez &agrave; l&apos;aveugle.</p>

      <hr />

      <h2 id="marge">La marge</h2>

      <h3>Marge initiale</h3>
      <p>Le montant minimum pour ouvrir une position. Sur ES, environ 12 000 $ en overnight, 500 $ en intraday (varie selon le broker). C&apos;est un d&eacute;p&ocirc;t de garantie, pas un co&ucirc;t.</p>

      <h3>Marge de maintenance</h3>
      <p>Le montant minimum &agrave; maintenir dans votre compte tant que la position est ouverte. Si votre compte passe en dessous, vous recevez un <strong>appel de marge</strong> (margin call). Le broker peut liquider votre position sans votre accord.</p>

      <h3>Le pi&egrave;ge du margin call</h3>
      <p>Beaucoup de d&eacute;butants utilisent 80-90% de leur marge disponible. Un mouvement de 10 points contre eux d&eacute;clenche un margin call. La position est liquid&eacute;e au pire moment. R&egrave;gle : n&apos;utilisez jamais plus de <strong>20-30% de votre marge disponible</strong>.</p>

      <hr />

      <h2 id="micro-futures">Les Micro Futures : la solution pour d&eacute;buter</h2>
      <p>Les Micro Futures (MES, MNQ, M2K, MYM) sont l&apos;&eacute;quivalent d&apos;un dixi&egrave;me de contrat standard. Le MES vaut <strong>5 $ par point</strong> au lieu de 50 $. Le MNQ vaut <strong>2 $ par point</strong> au lieu de 20 $.</p>

      <h3>Pourquoi c&apos;est id&eacute;al</h3>
      <p>Vous acc&eacute;dez au <strong>m&ecirc;me march&eacute;</strong>, au m&ecirc;me carnet d&apos;ordres, aux m&ecirc;mes donn&eacute;es que les traders institutionnels — mais avec un risque 10 fois moindre. Un stop de 10 points sur MES = 50 $ de risque. Sur ES, c&apos;est 500 $. M&ecirc;me march&eacute;, risque g&eacute;rable.</p>

      <h3>L&apos;erreur classique</h3>
      <p>Passer directement aux contrats full-size parce que les Micros &quot;ne rapportent pas assez&quot;. C&apos;est l&apos;ego qui parle. Apprenez &agrave; &ecirc;tre r&eacute;guli&egrave;rement rentable en Micro avant de scaler. La comp&eacute;tence d&apos;abord, la taille ensuite.</p>

      <hr />

      <h2 id="prop-firm">Prop firms et levier</h2>
      <p>Les prop firms (Topstep, Apex, FTMO, etc.) vous donnent acc&egrave;s &agrave; du capital suppl&eacute;mentaire apr&egrave;s avoir pass&eacute; un &quot;combine&quot; (test). Vous tradez avec leur argent et gardez une part des profits (g&eacute;n&eacute;ralement 80-90%).</p>

      <h3>Le levier amplifi&eacute;</h3>
      <p>Avec un compte funded de 150 000 $, vous pouvez trader jusqu&apos;&agrave; 15 contrats ES. La valeur notionnelle d&eacute;passe 3 millions de dollars. Votre investissement initial : quelques centaines d&apos;euros pour le combine. Le levier r&eacute;el est astronomique.</p>

      <h3>La r&eacute;alit&eacute;</h3>
      <p>La plupart des traders &eacute;chouent au combine ou explosent le compte funded en quelques semaines. Pourquoi ? Mauvais sizing, pas de gestion du risque, &eacute;motions non contr&ocirc;l&eacute;es. Le levier amplifie tout — y compris les mauvaises habitudes.</p>

      <div className="info-box">
        <div className="info-box-title">Conseil BASS</div>
        <p>Ne tentez une prop firm qu&apos;apr&egrave;s au moins 6 mois de rentabilit&eacute; r&eacute;guli&egrave;re en r&eacute;el (Micro Futures). Sinon, vous payez des combines en boucle sans progresser. La prop firm r&eacute;compense la comp&eacute;tence, pas l&apos;espoir.</p>
      </div>

      <hr />

      <h2 id="position-sizing">Position sizing : la cl&eacute; de la survie</h2>

      <h3>La r&egrave;gle des 1-2%</h3>
      <p>Ne risquez jamais plus de <strong>1-2% de votre capital</strong> sur un seul trade. Avec un compte de 10 000 $, votre risque maximum par trade est de 100-200 $.</p>

      <h3>Calcul de la taille de position</h3>
      <p><strong>Nombre de contrats = Risque max / (Stop en points &times; Valeur du point)</strong></p>
      <p>Exemple : capital 10 000 $, risque 1% = 100 $, stop de 8 points sur MES (5 $/point). Risque par contrat = 8 &times; 5 = 40 $. Nombre de contrats = 100 / 40 = <strong>2 MES</strong>.</p>

      <h3>Adapter au stop, pas l&apos;inverse</h3>
      <p>D&eacute;finissez votre stop en fonction du march&eacute; (sous le VAL, sous l&apos;absorption). Puis calculez la taille. Jamais l&apos;inverse. Si le stop n&eacute;cessaire est trop large pour votre capital, ne prenez pas le trade ou r&eacute;duisez la taille.</p>

      <hr />

      <h2 id="danger">Les dangers du sur-levier</h2>

      <h3>Le compte explos&eacute;</h3>
      <p>Un trader avec 5 000 $ qui trade 5 ES (levier ~2600:1). Un mouvement de 20 points contre lui = 5 000 $ de perte. Le compte est &agrave; z&eacute;ro en une seule bougie de 5 minutes. Ce sc&eacute;nario arrive <strong>tous les jours</strong> dans les forums de trading.</p>

      <h3>Le d&eacute;g&acirc;t &eacute;motionnel</h3>
      <p>Perdre 50% de votre capital en un trade ne d&eacute;truit pas seulement votre compte — &ccedil;a d&eacute;truit votre psychologie. La peur de perdre &agrave; nouveau paralyse vos prochaines d&eacute;cisions. Ou pire : le revenge trading — reprendre imm&eacute;diatement position, plus grosse, pour &quot;se refaire&quot;.</p>

      <h3>La spirale du revenge trading</h3>
      <p>Perte &rarr; frustration &rarr; trade impulsif plus gros &rarr; perte plus grosse &rarr; d&eacute;sespoir &rarr; all-in &rarr; compte explos&eacute;. C&apos;est une spirale pr&eacute;visible et &eacute;vitable — si le sizing est correct d&egrave;s le d&eacute;part.</p>

      <hr />

      <h2 id="regles">5 r&egrave;gles d&apos;or</h2>

      <h3>1. Maximum 1-2% de risque par trade</h3>
      <p>Non n&eacute;gociable. M&ecirc;me si le setup est &quot;parfait&quot;. Aucun setup n&apos;est garanti. Prot&eacute;gez votre capital avant tout.</p>

      <h3>2. Calculez avant d&apos;entrer</h3>
      <p>Nombre de contrats, stop loss, risque en dollars. Avant de cliquer sur &quot;Buy&quot;. Pas apr&egrave;s.</p>

      <h3>3. Commencez en Micro Futures</h3>
      <p>MES et MNQ sont votre terrain d&apos;entra&icirc;nement. Apprenez &agrave; &ecirc;tre r&eacute;gulier avant de scaler. La patience est rentable.</p>

      <h3>4. Ne d&eacute;passez jamais 30% de marge utilis&eacute;e</h3>
      <p>Gardez toujours 70% de votre marge disponible en r&eacute;serve. Les mouvements adverses arrivent — vous devez pouvoir les absorber.</p>

      <h3>5. Le levier est un outil, pas un objectif</h3>
      <p>Le but n&apos;est pas d&apos;utiliser le maximum de levier possible. Le but est de gagner r&eacute;guli&egrave;rement avec un risque contr&ocirc;l&eacute;. Le levier vous permet de trader les Futures avec un petit capital — pas de jouer au casino.</p>

      <hr />

      <h2 id="erreurs">5 erreurs fatales</h2>

      <h3>1. Trader full-size trop t&ocirc;t</h3>
      <p>Passer du MES au ES avant d&apos;&ecirc;tre r&eacute;guli&egrave;rement rentable. Le choc &eacute;motionnel de voir 500 $ par point au lieu de 50 $ d&eacute;truit la discipline.</p>

      <h3>2. Ignorer le position sizing</h3>
      <p>&quot;Je prends juste un contrat.&quot; Un contrat ES avec un stop de 30 points = 1 500 $ de risque. Si votre compte fait 10 000 $, c&apos;est 15% de risque. Inacceptable.</p>

      <h3>3. Moyenner &agrave; la baisse sans plan</h3>
      <p>Le trade est en perte, alors vous ajoutez un contrat pour &quot;am&eacute;liorer le prix moyen&quot;. Vous doublez votre risque sans aucune base analytique. C&apos;est du d&eacute;ni, pas de la strat&eacute;gie.</p>

      <h3>4. Ne pas avoir de stop loss</h3>
      <p>&quot;Le march&eacute; va revenir.&quot; Parfois oui. Parfois non. Les pertes sans stop sont les seules qui peuvent d&eacute;truire un compte enti&egrave;rement. Le stop est votre assurance-vie.</p>

      <h3>5. Confondre levier et comp&eacute;tence</h3>
      <p>Gagner 2 000 $ en une journ&eacute;e avec un levier massif ne fait pas de vous un bon trader. C&apos;est la r&eacute;gularit&eacute; sur 6 mois qui compte, pas les coups d&apos;&eacute;clat.</p>

      <hr />

      <h2 id="bass">Ma&icirc;triser le levier avec BASS Trading</h2>
      <p>Le mentorat BASS Trading int&egrave;gre le risk management et le position sizing d&egrave;s le premier jour. S&eacute;bastien Constant ne vous apprend pas &agrave; trader gros — il vous apprend &agrave; trader <strong>juste</strong>. La bonne taille, au bon niveau, avec le bon stop.</p>
      <p>Les sessions live montrent comment dimensionner chaque trade en fonction du setup, du type de journ&eacute;e et du niveau de stop. Vous voyez le processus complet : analyse Market Profile, confirmation Order Flow, puis calcul de position avant l&apos;entr&eacute;e.</p>
    </>
  );
}
