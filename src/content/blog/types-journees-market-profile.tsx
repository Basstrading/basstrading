export default function TypesJourneesMarketProfile() {
  return (
    <>
      <p>
        Chaque jour de trading a une personnalite. Si vous tradez un Trend Day
        comme un Range Day, vous perdez de l&apos;argent. Si vous attendez une
        cassure sur un Normal Day, vous attendez pour rien. Le probleme n&apos;est
        pas votre setup — c&apos;est que vous n&apos;avez pas identifie{" "}
        <strong>le type de journee</strong> dans lequel vous evoluez.
      </p>

      <p>
        Le{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a>{" "}
        classe chaque session en six configurations distinctes. Ces types de
        journees en Market Profile ne sont pas de la theorie academique —
        c&apos;est un cadre operationnel developpe par J. Peter Steidlmayer et
        affine par Jim Dalton dans <em>Mind Over Markets</em>. Comprendre ces
        six configurations, c&apos;est savoir a l&apos;avance quel comportement
        adopter, ou placer vos ordres, et surtout quand ne pas trader.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Principe fondamental</div>
        <h4>Le type de journee dicte la strategie</h4>
        <p>
          Avant de chercher un signal d&apos;entree, posez-vous cette question :
          dans quel type de journee suis-je ? La reponse change tout — votre
          gestion du risque, vos objectifs, et meme votre decision de rester
          devant l&apos;ecran ou non.
        </p>
      </div>

      <hr />

      <h2 id="pourquoi">
        Pourquoi identifier le type de journee change tout
      </h2>

      <p>
        La majorite des traders retail appliquent la meme strategie quel que soit
        le contexte. Breakout le lundi, breakout le mardi, breakout le vendredi.
        Ils ne comprennent pas pourquoi leurs resultats sont irreguliers. La
        reponse est simple : environ <strong>80% des journees</strong> sont des
        journees de range ou de rotation, et seulement 20% sont des journees
        directionnelles. Appliquer une strategie de breakout dans un marche en
        rotation, c&apos;est comme pecher en plein desert.
      </p>

      <p>
        L&apos;
        <a href="/blog/auction-market-theory/">Auction Market Theory</a>{" "}
        nous enseigne que le marche alterne entre deux phases : l&apos;
        <strong>equilibre</strong> (le marche tourne autour d&apos;une zone de
        valeur) et le <strong>desequilibre</strong> (le marche migre vers une
        nouvelle zone de valeur). Chaque type de journee est une expression de
        cette dynamique.
      </p>

      <p>
        En identifiant le type de journee tot dans la session, vous pouvez :
      </p>

      <ul>
        <li>
          <strong>Adapter votre strategie</strong> — fader les extremes sur un
          Normal Day, suivre le mouvement sur un Trend Day
        </li>
        <li>
          <strong>Calibrer vos objectifs</strong> — un Non-Trend Day ne donnera
          pas un move de 50 points sur le S&amp;P 500
        </li>
        <li>
          <strong>Gerer votre risque intelligemment</strong> — elargir vos stops
          sur un jour volatile, les serrer sur un jour compresse
        </li>
        <li>
          <strong>Eviter les pieges</strong> — ne pas shorter un breakout qui
          est en realite le debut d&apos;un Trend Day
        </li>
      </ul>

      <div className="info-box">
        <div className="info-box-title">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          A retenir
        </div>
        <p>
          Le type de journee ne se decide pas a l&apos;avance — il se{" "}
          <strong>revele progressivement</strong>. C&apos;est l&apos;Initial
          Balance et les premieres extensions qui vous donnent les indices.
          L&apos;art du trader Market Profile, c&apos;est de lire ces indices
          en temps reel et d&apos;adapter son plan en consequence.
        </p>
      </div>

      <hr />

      <h2 id="normal">Le Normal Day : le marche en equilibre</h2>

      <p>
        Le Normal Day est le type de journee le plus classique selon la
        classification originale de Steidlmayer. C&apos;est une journee ou le
        marche trouve rapidement son equilibre et y reste — la fameuse courbe en
        cloche que tout le monde associe au Market Profile.
      </p>

      <h3>Caracteristiques du Normal Day</h3>

      <ul>
        <li>
          <strong>Initial Balance large</strong> — Les premieres periodes (A et
          B) couvrent une grande partie du range de la journee, souvent{" "}
          <strong>85% ou plus</strong> du range total
        </li>
        <li>
          <strong>Profil en cloche</strong> — La distribution des TPO forme une
          courbe gaussienne presque parfaite, avec le maximum d&apos;activite
          au centre
        </li>
        <li>
          <strong>Extensions limitees</strong> — Le prix depasse peu ou pas
          l&apos;Initial Balance dans les periodes suivantes
        </li>
        <li>
          <strong>Presence de &quot;locals&quot;</strong> — Historiquement, ce
          type de journee etait domine par les traders de floor qui fournissaient
          la liquidite
        </li>
      </ul>

      <p>
        En realite, le Normal Day pur est <strong>rare</strong>. Avec
        l&apos;evolution des marches electroniques et la disparition du trading
        de floor, on le voit beaucoup moins qu&apos;a l&apos;epoque de
        Steidlmayer. C&apos;est neanmoins un modele theorique important car il
        represente l&apos;equilibre parfait — un marche ou personne
        n&apos;impose de direction.
      </p>

      <h3>Comment trader un Normal Day</h3>

      <p>
        La strategie optimale est le <strong>mean reversion</strong> pur. Le
        marche oscille autour du POC (Point of Control) et rejette les extremes.
        Vous vendez pres du VAH et achetez pres du VAL, avec des objectifs
        modestes vers le centre de la Value Area. Les stops se placent au-dela
        des extremes de l&apos;Initial Balance.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cle</div>
        <h4>Le Normal Day comme reference</h4>
        <p>
          Meme si le Normal Day pur est rare, il sert de{" "}
          <strong>base de comparaison</strong>. Chaque autre type de journee est
          une deviation par rapport a cette distribution ideale. C&apos;est en
          comprenant l&apos;equilibre parfait qu&apos;on peut identifier les
          desequilibres.
        </p>
      </div>

      <hr />

      <h2 id="normal-variation">
        Le Normal Variation Day : l&apos;equilibre perturbe
      </h2>

      <p>
        Le Normal Variation Day est la version &quot;reelle&quot; du Normal Day
        — celle que vous verrez le plus souvent sur vos ecrans. La difference :
        un acteur de l&apos;Other Timeframe (OTF) intervient a un moment de la
        session et pousse le prix au-dela de l&apos;Initial Balance dans{" "}
        <strong>une direction</strong>.
      </p>

      <h3>Caracteristiques du Normal Variation Day</h3>

      <ul>
        <li>
          <strong>Initial Balance moderee</strong> — Ni trop large, ni trop
          etroite — elle represente environ <strong>50 a 70%</strong> du range
          total de la journee
        </li>
        <li>
          <strong>Extension dans une direction</strong> — Le prix casse un cote
          de l&apos;IB et explore de nouveaux niveaux, mais le mouvement reste
          contenu
        </li>
        <li>
          <strong>Profil legerement asymetrique</strong> — La distribution
          penche d&apos;un cote, avec une queue (tail) dans la direction de
          l&apos;extension
        </li>
        <li>
          <strong>Value Area decalee</strong> — La zone de valeur migre
          legerement dans la direction de l&apos;extension, mais ne
          s&apos;eloigne pas radicalement de l&apos;IB
        </li>
      </ul>

      <p>
        C&apos;est le type de journee le plus frequent sur les marches Futures
        modernes. Un gros acteur (institution, fonds) intervient et deplace le
        prix, mais le mouvement ne prend pas assez d&apos;ampleur pour devenir
        directionnel. Le marche absorbe le flux, s&apos;ajuste, puis revient en
        partie vers l&apos;equilibre.
      </p>

      <h3>Comment trader un Normal Variation Day</h3>

      <p>
        L&apos;approche mixte fonctionne ici. Vous pouvez :
      </p>

      <ul>
        <li>
          Prendre le <strong>breakout de l&apos;IB</strong> dans la direction de
          l&apos;extension avec un objectif limite (1x a 1.5x la taille de
          l&apos;IB)
        </li>
        <li>
          <strong>Fader l&apos;extreme</strong> une fois l&apos;extension
          epuisee, avec un retour vers le POC comme objectif
        </li>
        <li>
          Utiliser la <strong>VAH/VAL de la veille</strong> comme reference pour
          juger si l&apos;extension est justifiee ou excessive
        </li>
      </ul>

      <hr />

      <h2 id="trend">Le Trend Day : la journee directionnelle</h2>

      <p>
        Le Trend Day est la journee que tout trader reve de capturer — et celle
        qui detruit ceux qui la tradent a contre-sens. C&apos;est une journee de{" "}
        <strong>desequilibre total</strong> ou le marche migre dans une seule
        direction du debut a la fin de la session.
      </p>

      <h3>Caracteristiques du Trend Day</h3>

      <ul>
        <li>
          <strong>Initial Balance etroite</strong> — C&apos;est le signal le
          plus fiable. L&apos;IB est anormalement petite, representant moins de{" "}
          <strong>25-30%</strong> du range final
        </li>
        <li>
          <strong>Extensions multiples et unidirectionnelles</strong> — Chaque
          nouvelle periode TPO etend le range dans la meme direction
        </li>
        <li>
          <strong>Profil allonge et fin</strong> — Pas de courbe en cloche ici,
          mais un profil en &quot;doigt&quot; (elongated profile) avec peu de
          TPO a chaque niveau
        </li>
        <li>
          <strong>Single prints abondants</strong> — Le prix passe peu de temps
          a chaque niveau, laissant des single prints sur une grande partie du
          range
        </li>
        <li>
          <strong>Cloture pres de l&apos;extreme</strong> — Le marche ferme sur
          ses plus hauts (Trend Day haussier) ou ses plus bas (Trend Day
          baissier)
        </li>
      </ul>

      <p>
        Le Trend Day en Market Profile represente environ{" "}
        <strong>10 a 15% des sessions</strong>. C&apos;est peu, mais ces
        journees generent une part disproportionnee des profits des traders
        directionnels. Jim Dalton l&apos;explique clairement : un Trend Day est
        une migration de valeur — le marche rejette completement la zone de
        valeur precedente et en etablit une nouvelle.
      </p>

      <h3>Les signaux d&apos;alerte d&apos;un Trend Day</h3>

      <p>
        Plusieurs indices peuvent vous alerter tot dans la session :
      </p>

      <ul>
        <li>
          L&apos;ouverture se fait <strong>en dehors de la Value Area de la
          veille</strong> (Open Drive)
        </li>
        <li>
          L&apos;Initial Balance est exceptionnellement <strong>etroite</strong>{" "}
          par rapport a la moyenne des 20 derniers jours
        </li>
        <li>
          Le prix <strong>ne revient jamais tester l&apos;IB</strong> apres
          l&apos;avoir cassee — chaque pullback est achete (ou vendu) avant
          d&apos;atteindre le range initial
        </li>
        <li>
          Le{" "}
          <a href="/blog/volume-profile-guide/">Volume Profile</a> montre un
          volume croissant dans la direction du mouvement
        </li>
      </ul>

      <h3>Comment trader un Trend Day</h3>

      <p>
        La regle absolue : <strong>ne fadez jamais un Trend Day</strong>.
        C&apos;est la lecon la plus couteuse que les traders apprennent. Sur un
        Trend Day, chaque pullback est une opportunite d&apos;entrer dans le
        sens du mouvement, pas de prendre un trade contrarian.
      </p>

      <p>
        La technique classique : entrez sur la cassure de l&apos;IB dans la
        direction du mouvement, ou sur les pullbacks vers les niveaux de single
        prints. Les objectifs sont ouverts — laissez courir votre position avec
        un trailing stop. Un Trend Day peut facilement doubler ou tripler
        l&apos;Initial Balance.
      </p>

      <div className="info-box">
        <div className="info-box-title">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          Piege classique
        </div>
        <p>
          Le plus gros piege sur un Trend Day : shorter un marche qui vient de
          monter de 30 points en pensant &quot;ca doit corriger&quot;. Sur un
          vrai Trend Day, la correction ne vient pas — ou quand elle vient,
          c&apos;est le lendemain. Vous devez accepter que le marche peut
          rester irrationnel plus longtemps que votre compte ne peut rester
          solvable.
        </p>
      </div>

      <hr />

      <h2 id="double-distribution">
        Le Double Distribution Day : deux zones de valeur
      </h2>

      <p>
        Le Double Distribution Day est l&apos;une des configurations les plus
        interessantes — et les plus revelantes — du Market Profile. Comme son
        nom l&apos;indique, le profil de la journee montre{" "}
        <strong>deux distributions distinctes</strong> reliees par une zone de
        single prints.
      </p>

      <h3>Caracteristiques du Double Distribution Day</h3>

      <ul>
        <li>
          <strong>Deux zones de valeur visibles</strong> — Le profil ressemble a
          une lettre &quot;B&quot; ou une lettre &quot;P&quot;, avec deux
          concentrations de TPO
        </li>
        <li>
          <strong>Single prints au milieu</strong> — La zone de transition entre
          les deux distributions est marquee par des single prints, signe
          d&apos;un deplacement rapide du prix
        </li>
        <li>
          <strong>Initial Balance dans une distribution</strong> — Les periodes
          A et B forment la premiere zone de valeur
        </li>
        <li>
          <strong>Migration nette</strong> — A un moment precis de la session,
          le marche quitte brutalement la premiere zone pour etablir la seconde
        </li>
      </ul>

      <p>
        Ce type de journee raconte une histoire precise : le marche etait en
        equilibre a un niveau, un catalyseur est intervenu (annonce economique,
        flux institutionnel massif, cassure technique), et le marche a migre
        vers un nouvel equilibre. Les single prints entre les deux distributions
        sont la preuve que le deplacement a ete rapide et decisif — le marche
        n&apos;a pas &quot;negocie&quot; ces niveaux intermediaires.
      </p>

      <h3>Pourquoi le Double Distribution Day est important</h3>

      <p>
        Les single prints laissees par un Double Distribution Day deviennent des{" "}
        <strong>references pour les sessions suivantes</strong>. Ce sont des
        zones de faible acceptation — si le marche revient les tester, il va
        soit les traverser rapidement (confirmant le desequilibre), soit les
        combler (signalant un retour a l&apos;ancienne zone de valeur).
      </p>

      <h3>Comment trader un Double Distribution Day</h3>

      <p>
        Deux scenarios :
      </p>

      <ul>
        <li>
          <strong>Pendant la transition</strong> — Si vous identifiez la
          migration en cours, suivez le mouvement. La cassure de la premiere
          distribution avec volume est un signal fort.
        </li>
        <li>
          <strong>Les jours suivants</strong> — Utilisez les single prints comme
          niveaux de support/resistance. Un retour sur la zone de single prints
          offre souvent un excellent ratio risque/recompense, que ce soit pour
          un rebond (continuation) ou un fill (reversion).
        </li>
      </ul>

      <hr />

      <h2 id="non-trend">
        Le Non-Trend Day : compression avant explosion
      </h2>

      <p>
        Le Non-Trend Day est le cauchemar du trader impatient. Le range est
        minimal, la volatilite est au plancher, et rien ne semble se passer. Le
        profil est <strong>compact et aplati</strong>, avec des TPO empiles sur
        une plage de prix tres etroite.
      </p>

      <h3>Caracteristiques du Non-Trend Day</h3>

      <ul>
        <li>
          <strong>Range extremement reduit</strong> — Souvent{" "}
          <strong>inferieur a 50%</strong> du range quotidien moyen
        </li>
        <li>
          <strong>Profil large et plat</strong> — Beaucoup de TPO a chaque
          niveau, formant un rectangle plutot qu&apos;une cloche
        </li>
        <li>
          <strong>Pas d&apos;extension significative</strong> — Ni les acheteurs
          ni les vendeurs ne prennent le controle
        </li>
        <li>
          <strong>Volume faible</strong> — L&apos;absence de conviction se
          traduit par un volume en baisse par rapport a la moyenne
        </li>
        <li>
          <strong>POC central et plat</strong> — Le Point of Control se situe au
          milieu du range, sans migration significative
        </li>
      </ul>

      <p>
        Le Non-Trend Day survient typiquement avant des evenements majeurs
        (FOMC, NFP, earnings), les vendredis apres-midi, ou pendant les
        periodes de vacances. Le marche est en attente — il accumule de
        l&apos;energie potentielle qui sera liberee lors du prochain catalyseur.
      </p>

      <h3>Le piege du Non-Trend Day</h3>

      <p>
        Le piege classique : trader de petites oscillations dans un range
        minuscule et se faire decouper par les spreads et les commissions. Sur
        un Non-Trend Day, le ratio risque/recompense est generalement mauvais
        car les mouvements sont trop petits pour compenser les couts de
        transaction.
      </p>

      <h3>Comment reagir face a un Non-Trend Day</h3>

      <p>
        L&apos;approche la plus rentable est souvent de{" "}
        <strong>ne pas trader</strong>. Serieusement. Un Non-Trend Day est un
        signal de preparation : le marche accumule, et le mouvement qui suit
        sera d&apos;autant plus fort. Utilisez cette journee pour analyser les
        niveaux cles, positionner vos alertes, et preparer votre plan pour la
        cassure qui viendra.
      </p>

      <p>
        Si vous tradez quand meme, restez sur du <strong>scalping
        ultra-court</strong> avec des positions reduites, en achetant le bas du
        range et en vendant le haut — sans attendre de breakout.
      </p>

      <hr />

      <h2 id="neutral">Le Neutral Day : indecision pure</h2>

      <p>
        Le Neutral Day est souvent confondu avec le Non-Trend Day, mais il
        s&apos;en distingue de maniere importante. Sur un Neutral Day, le marche{" "}
        <strong>bouge</strong> — il casse l&apos;Initial Balance des deux cotes
        — mais il ne va nulle part. C&apos;est l&apos;expression d&apos;une{" "}
        <strong>lutte entre acheteurs et vendeurs</strong> ou aucun camp ne
        parvient a imposer sa direction.
      </p>

      <h3>Caracteristiques du Neutral Day</h3>

      <ul>
        <li>
          <strong>Extension dans les deux directions</strong> — Le prix casse
          l&apos;IB par le haut ET par le bas au cours de la session
        </li>
        <li>
          <strong>Profil large</strong> — Le range total est respectable, mais
          la distribution ne montre pas de direction claire
        </li>
        <li>
          <strong>Long tails (queues)</strong> — Des rejets visibles aux deux
          extremes du profil
        </li>
        <li>
          <strong>Cloture pres du milieu</strong> — Le prix finit generalement
          dans la zone centrale, confirmant l&apos;absence de consensus
        </li>
      </ul>

      <h3>Neutral Day vs Neutral Day extreme</h3>

      <p>
        Dalton distingue deux variantes :
      </p>

      <ul>
        <li>
          <strong>Neutral Day</strong> — Le prix casse l&apos;IB des deux cotes,
          mais les extensions restent modestes. La cloture se fait pres du
          centre.
        </li>
        <li>
          <strong>Neutral Day extreme</strong> — Le prix casse l&apos;IB des
          deux cotes avec des extensions significatives, mais ferme clairement
          pres d&apos;un extreme. Cela signale que malgre l&apos;indecision de
          la journee, un camp commence a prendre le dessus — ce qui donne un
          biais directionnel pour le lendemain.
        </li>
      </ul>

      <h3>Comment trader un Neutral Day</h3>

      <p>
        L&apos;approche est clairement <strong>mean reversion</strong>. Fadez
        les cassures de l&apos;IB dans les deux directions avec des objectifs
        vers le POC ou le milieu du range. Chaque extension qui echoue a se
        maintenir est une opportunite de trade contrarian. Les stops se placent
        au-dela des extensions, car si le marche parvient finalement a tenir
        un extreme, la journee pourrait evoluer en Trend Day.
      </p>

      <hr />

      <h2 id="identifier">
        Comment identifier le type de journee en temps reel
      </h2>

      <p>
        La theorie est belle, mais l&apos;execution se fait en temps reel. Vous
        ne saurez jamais avec certitude le type de journee avant sa fin. En
        revanche, vous pouvez reduire l&apos;incertitude progressivement en
        suivant une methode structuree.
      </p>

      <h3>Etape 1 : Analysez le contexte avant l&apos;ouverture</h3>

      <p>
        Avant la session, identifiez :
      </p>

      <ul>
        <li>
          <strong>Le type de journee de la veille</strong> — Un Non-Trend Day
          est souvent suivi d&apos;un jour directionnel. Un Trend Day est
          souvent suivi d&apos;une consolidation.
        </li>
        <li>
          <strong>La position du prix par rapport a la Value Area de la
          veille</strong> — Un gap au-dessus de la VAH augmente la probabilite
          d&apos;un Trend Day haussier
        </li>
        <li>
          <strong>Le calendrier economique</strong> — Les publications majeures
          (FOMC, NFP, CPI) favorisent les Trend Days ou les Double Distribution
          Days
        </li>
      </ul>

      <h3>Etape 2 : Observez l&apos;Initial Balance</h3>

      <p>
        Apres les 60 premieres minutes, vous avez votre premiere indication
        majeure :
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Taille de l&apos;IB</th>
            <th>Signal</th>
            <th>Types de journee probables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IB tres etroite ({"<"} 30% de la moyenne)</td>
            <td>Forte probabilite de cassure</td>
            <td>Trend Day, Double Distribution</td>
          </tr>
          <tr>
            <td>IB moderee (50-80% de la moyenne)</td>
            <td>Journee equilibree probable</td>
            <td>Normal Variation, Neutral Day</td>
          </tr>
          <tr>
            <td>IB tres large ({">"} 100% de la moyenne)</td>
            <td>Activite concentree tot dans la session</td>
            <td>Normal Day, Non-Trend (reste de session)</td>
          </tr>
        </tbody>
      </table>

      <h3>Etape 3 : Surveillez les extensions post-IB</h3>

      <p>
        C&apos;est ici que le type de journee se precise :
      </p>

      <ul>
        <li>
          <strong>Pas d&apos;extension</strong> → Normal Day ou Non-Trend Day
        </li>
        <li>
          <strong>Extension d&apos;un cote uniquement</strong> → Normal
          Variation Day ou debut de Trend Day
        </li>
        <li>
          <strong>Extensions des deux cotes</strong> → Neutral Day
        </li>
        <li>
          <strong>Extensions continues dans une direction</strong> → Trend Day
          en formation
        </li>
      </ul>

      <h3>Etape 4 : Confirmez avec le volume et l&apos;Order Flow</h3>

      <p>
        Le{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a>{" "}
        en intraday donne des indices supplementaires. Un Trend Day montre un
        volume croissant dans la direction du mouvement. Un Neutral Day montre
        un volume equilibre. Un Non-Trend Day montre un volume en baisse. Ces
        confirmations vous aident a affiner votre lecture en temps reel.
      </p>

      <hr />

      <h2 id="strategies">
        Strategies adaptees a chaque type de journee
      </h2>

      <p>
        Voici un recapitulatif operationnel pour adapter votre trading au type
        de journee identifie. Ce tableau est votre aide-memoire — imprimez-le
        et gardez-le a cote de votre ecran.
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Type de journee</th>
            <th>Strategie principale</th>
            <th>Taille de position</th>
            <th>Objectif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal Day</td>
            <td>Mean reversion sur VAH/VAL</td>
            <td>Standard</td>
            <td>POC ou milieu de VA</td>
          </tr>
          <tr>
            <td>Normal Variation</td>
            <td>Breakout IB + fade de l&apos;extension</td>
            <td>Standard</td>
            <td>1x-1.5x IB ou retour POC</td>
          </tr>
          <tr>
            <td>Trend Day</td>
            <td>Suivre le mouvement, acheter les pullbacks</td>
            <td>Reduite au depart, pyramider</td>
            <td>Ouvert (trailing stop)</td>
          </tr>
          <tr>
            <td>Double Distribution</td>
            <td>Suivre la migration ou trader les single prints</td>
            <td>Standard a agressive</td>
            <td>Nouvelle Value Area</td>
          </tr>
          <tr>
            <td>Non-Trend</td>
            <td>Pas de trade ou scalping minimal</td>
            <td>Minimale</td>
            <td>Extremes du range etroit</td>
          </tr>
          <tr>
            <td>Neutral Day</td>
            <td>Fader les extensions, mean reversion</td>
            <td>Standard</td>
            <td>POC ou milieu du range</td>
          </tr>
        </tbody>
      </table>

      <div className="key-concept">
        <div className="key-concept-label">Principe operationnel</div>
        <h4>La taille de position suit le type de journee</h4>
        <p>
          Sur un Trend Day, commencez petit et pyramidez a mesure que le
          mouvement se confirme. Sur un Non-Trend Day, reduisez drastiquement
          ou ne tradez pas. Sur un Neutral Day, gardez une taille standard mais
          prenez des profits rapidement. L&apos;adaptation de la taille de
          position au contexte est ce qui separe les traders rentables des
          perdants chroniques.
        </p>
      </div>

      <h3>La gestion des transitions</h3>

      <p>
        Un point crucial que beaucoup de traders negligent : un type de journee
        peut evoluer en cours de session. Un Neutral Day peut devenir un Trend
        Day si une cassure tient et que le volume confirme. Un Non-Trend Day
        peut exploser en Trend Day suite a une news. Vous devez rester flexible
        et <strong>reclassifier</strong> la journee a mesure que de nouvelles
        informations arrivent.
      </p>

      <p>
        C&apos;est la que l&apos;experience intervient. Avec la pratique, vous
        developperez un sens intuitif pour detecter quand le marche change de
        regime. Le Market Profile vous donne le cadre analytique — votre temps
        d&apos;ecran vous donne la vitesse d&apos;execution.
      </p>

      <hr />

      <h2 id="initial-balance">
        Le role de l&apos;Initial Balance dans l&apos;identification
      </h2>

      <p>
        L&apos;Initial Balance (IB) — le range de la premiere heure de trading
        — est sans doute la variable la plus importante pour identifier le type
        de journee. Ce n&apos;est pas un hasard si Steidlmayer et Dalton y
        consacrent des chapitres entiers dans leurs ouvrages. L&apos;IB
        represente le <strong>premier referendum</strong> du marche : le vote
        initial des participants sur la valeur du jour.
      </p>

      <h3>Pourquoi la premiere heure est decisive</h3>

      <p>
        Pendant l&apos;Initial Balance, trois categories de participants
        s&apos;expriment :
      </p>

      <ul>
        <li>
          <strong>Les traders de continuation</strong> — Ceux qui agissent sur
          les positions overnight et les gaps
        </li>
        <li>
          <strong>Les institutions</strong> — Qui executent les ordres accumules
          avant l&apos;ouverture
        </li>
        <li>
          <strong>Les market makers</strong> — Qui etablissent la fourchette de
          liquidite pour la session
        </li>
      </ul>

      <p>
        La taille de l&apos;IB qui en resulte reflete l&apos;intensite de ce
        vote initial. Une IB large signifie que ces acteurs ont deja exprime
        l&apos;essentiel de leur vue — il reste peu d&apos;energie pour la
        suite. Une IB etroite signifie qu&apos;ils retiennent leur souffle —
        et que l&apos;explosion viendra plus tard.
      </p>

      <h3>L&apos;IB comme predicteur statistique</h3>

      <p>
        Sur les marches Futures (ES, NQ, CL), les statistiques montrent des
        correlations claires :
      </p>

      <ul>
        <li>
          Quand l&apos;IB est dans le{" "}
          <strong>quartile inferieur</strong> (25% des IB les plus petites sur
          20 jours), la probabilite d&apos;un Trend Day ou d&apos;un Double
          Distribution Day augmente significativement
        </li>
        <li>
          Quand l&apos;IB est dans le{" "}
          <strong>quartile superieur</strong>, la probabilite d&apos;un Normal
          Day ou d&apos;un Non-Trend Day (pour le reste de la session) est
          elevee
        </li>
        <li>
          Une IB mediane est le scenario le plus ambigu — c&apos;est la que
          l&apos;analyse en temps reel des extensions devient cruciale
        </li>
      </ul>

      <h3>Mesurer l&apos;IB relative</h3>

      <p>
        Ne regardez jamais la taille de l&apos;IB en valeur absolue. Un IB de
        10 points sur le S&amp;P 500 peut etre enorme ou minuscule selon le
        contexte. La bonne methode : calculez la{" "}
        <strong>moyenne des IB sur les 20 derniers jours</strong> et comparez
        l&apos;IB du jour a cette reference. C&apos;est le ratio IB/IB_moy
        qui compte, pas les points bruts.
      </p>

      <div className="info-box">
        <div className="info-box-title">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          Methode pratique
        </div>
        <p>
          Sur Sierra Chart, creez une feuille de calcul simple qui enregistre
          l&apos;IB de chaque jour et calcule automatiquement la moyenne mobile
          sur 20 jours. En un coup d&apos;oeil, vous saurez si l&apos;IB du
          jour est dans le quartile bas, median ou haut — et donc quels types
          de journees sont les plus probables.
        </p>
      </div>

      <h3>Le type d&apos;ouverture comme filtre supplementaire</h3>

      <p>
        Dalton identifie quatre types d&apos;ouverture qui complementent
        l&apos;analyse de l&apos;IB :
      </p>

      <ul>
        <li>
          <strong>Open Drive</strong> — Le prix s&apos;eloigne de
          l&apos;ouverture sans jamais revenir. Signal fort de Trend Day.
        </li>
        <li>
          <strong>Open Test Drive</strong> — Le prix teste brievement un
          niveau (gap fill partiel, test de la VA veille) puis part dans
          l&apos;autre direction. Signal de Normal Variation ou Trend Day.
        </li>
        <li>
          <strong>Open Rejection Reverse</strong> — Le prix tente une direction,
          echoue, et repart dans l&apos;autre sens. Signal de Neutral Day ou
          Double Distribution.
        </li>
        <li>
          <strong>Open Auction</strong> — Le prix oscille sans direction claire
          autour de l&apos;ouverture. Signal de Normal Day ou Non-Trend Day.
        </li>
      </ul>

      <p>
        En combinant le type d&apos;ouverture, la taille de l&apos;IB et les
        premieres extensions post-IB, vous disposez d&apos;un systeme de
        classification precis qui vous place en avance sur 90% des traders
        retail.
      </p>

      <hr />

      <h2 id="synthese">Synthese : les 6 types de journees en un tableau</h2>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>IB</th>
            <th>Profil</th>
            <th>Frequence</th>
            <th>Biais</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal Day</td>
            <td>Large ({">"} 85% du range)</td>
            <td>Cloche classique</td>
            <td>Rare</td>
            <td>Mean reversion</td>
          </tr>
          <tr>
            <td>Normal Variation</td>
            <td>Moderee (50-70%)</td>
            <td>Cloche legerement asymetrique</td>
            <td>Tres frequent</td>
            <td>Mixte</td>
          </tr>
          <tr>
            <td>Trend Day</td>
            <td>Etroite ({"<"} 30%)</td>
            <td>Allonge / doigt</td>
            <td>10-15% des sessions</td>
            <td>Directionnel</td>
          </tr>
          <tr>
            <td>Double Distribution</td>
            <td>Variable</td>
            <td>Forme en B ou P</td>
            <td>Moderee</td>
            <td>Migration de valeur</td>
          </tr>
          <tr>
            <td>Non-Trend</td>
            <td>Tres etroite</td>
            <td>Rectangle aplati</td>
            <td>Frequent (avant events)</td>
            <td>Pas de trade</td>
          </tr>
          <tr>
            <td>Neutral Day</td>
            <td>Moderee</td>
            <td>Large, symetrique</td>
            <td>Frequent</td>
            <td>Mean reversion</td>
          </tr>
        </tbody>
      </table>

      <p>
        Maitriser les types de journees en Market Profile, c&apos;est passer
        d&apos;un trading reactif a un trading proactif. Au lieu de reagir aux
        mouvements du prix, vous anticipez le comportement du marche en
        identifiant le regime dans lequel il opere. C&apos;est cette capacite de
        lecture qui fait la difference entre un trader qui subit le marche et un
        trader qui le comprend.
      </p>

      <p>
        Commencez par noter chaque jour le type de journee observe. Apres
        quelques semaines, vous remarquerez des sequences recurrentes — et vous
        saurez instinctivement quand adapter votre approche. Le{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a> n&apos;est
        pas qu&apos;un outil graphique. C&apos;est un cadre de pensee. Et les
        types de journees en sont la grammaire.
      </p>
    </>
  );
}
