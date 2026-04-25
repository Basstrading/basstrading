export default function InitialBalance() {
  return (
    <>
      <p>
        La premiere heure de trading contient plus d&apos;informations que la
        plupart des traders n&apos;en extraient en une journee entiere. Pendant
        que la majorite fixe ses indicateurs retardes, les operateurs qui
        maitrisent l&apos;<strong>Initial Balance</strong> savent deja quel type
        de journee se dessine, quelle direction le marche va probablement
        prendre, et ou placer leurs ordres.
      </p>

      <p>
        L&apos;Initial Balance n&apos;est pas un simple concept theorique —
        c&apos;est le socle operationnel du{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a>. Depuis
        les travaux fondateurs de J. Peter Steidlmayer au Chicago Board of Trade
        jusqu&apos;aux raffinements de Jim Dalton dans{" "}
        <em>Markets in Profile</em>, cette notion a prouve sa valeur sur des
        decennies de donnees. Elle reste, selon mon experience, l&apos;un des
        outils les plus fiables pour anticiper le comportement du marche des les
        premieres minutes de la session.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Principe fondamental</div>
        <h4>L&apos;Initial Balance est la fondation de votre journee</h4>
        <p>
          Avant de chercher un setup, avant d&apos;ouvrir une position, posez-vous
          cette question : quelle est la taille de l&apos;IB et que me dit-elle
          sur le comportement probable du marche aujourd&apos;hui ? La reponse
          conditionne tout — votre biais, vos cibles, votre gestion du risque.
        </p>
      </div>

      <hr />

      <h2 id="definition">Qu&apos;est-ce que l&apos;Initial Balance ?</h2>

      <p>
        L&apos;Initial Balance (IB) designe le range de prix forme pendant la{" "}
        <strong>premiere heure de la session reguliere</strong>. Sur les marches
        futures americains (ES, NQ, YM, RTY), cela correspond aux 60 premieres
        minutes apres l&apos;ouverture a 9h30 ET — soit les periodes A et B du{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a>, chaque
        periode representant 30 minutes.
      </p>

      <p>
        Dans la terminologie classique de Steidlmayer, l&apos;IB represente le
        terrain initial sur lequel les participants locaux — les market makers du
        floor — etablissaient les premiers prix de la session. C&apos;est la
        zone ou l&apos;offre et la demande trouvent un premier point
        d&apos;equilibre. Le reste de la journee se definit ensuite{" "}
        <strong>par rapport a cette reference</strong> : le prix reste-t-il dans
        l&apos;IB ? L&apos;etend-il d&apos;un cote ? Des deux ?
      </p>

      <p>
        L&apos;Initial Balance se compose de deux elements simples :
      </p>

      <ul>
        <li>
          <strong>IB High (IBH)</strong> — Le prix le plus haut atteint pendant
          la premiere heure
        </li>
        <li>
          <strong>IB Low (IBL)</strong> — Le prix le plus bas atteint pendant la
          premiere heure
        </li>
      </ul>

      <p>
        La difference entre les deux donne l&apos;<strong>IB Range</strong> — la
        taille de l&apos;Initial Balance. C&apos;est cette mesure qui va
        conditionner votre lecture de la journee.
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
          Precision importante
        </div>
        <p>
          L&apos;IB se calcule sur la <strong>session reguliere uniquement</strong>
          {" "} (RTH — Regular Trading Hours). Le pre-market n&apos;entre pas dans le
          calcul. C&apos;est une erreur frequente chez les debutants : integrer le
          Globex dans l&apos;IB fausse completement l&apos;analyse.
        </p>
      </div>

      <p>
        Pourquoi la premiere heure specifiquement ? Parce que c&apos;est le
        moment ou les flux institutionnels sont les plus denses. Les hedge funds,
        les desks prop et les algorithmes deploient une grande partie de leur
        volume dans les 60 premieres minutes. L&apos;IB capture cette
        information et la cristallise en deux niveaux de reference pour le reste
        de la session.
      </p>

      <hr />

      <h2 id="calcul">
        Comment calculer l&apos;IB (avec exemples sur ES et NQ)
      </h2>

      <p>
        Le calcul de l&apos;Initial Balance est deliberement simple. La
        puissance de l&apos;outil ne vient pas de sa complexite mathematique mais
        de ce qu&apos;il revele sur la structure du marche.
      </p>

      <h3>Formule</h3>

      <ul>
        <li>
          <strong>IBH</strong> = Plus haut entre 9h30 ET et 10h30 ET
        </li>
        <li>
          <strong>IBL</strong> = Plus bas entre 9h30 ET et 10h30 ET
        </li>
        <li>
          <strong>IB Range</strong> = IBH - IBL
        </li>
        <li>
          <strong>IB Mid</strong> = (IBH + IBL) / 2
        </li>
      </ul>

      <h3>Exemple sur le E-mini S&amp;P 500 (ES)</h3>

      <p>
        Le 15 mars 2024, le ES ouvre a 5185.50. Pendant la premiere heure, il
        monte a 5198.25 et descend a 5178.00 :
      </p>

      <ul>
        <li>IBH = 5198.25</li>
        <li>IBL = 5178.00</li>
        <li>IB Range = 20.25 points</li>
        <li>IB Mid = 5188.125</li>
      </ul>

      <p>
        Un IB Range de 20 points sur le ES est{" "}
        <strong>moderement etroit</strong> — la moyenne historique recente se
        situe autour de 25-30 points. Cela suggere qu&apos;un mouvement
        directionnel au-dela de l&apos;IB est probable dans l&apos;apres-midi.
      </p>

      <h3>Exemple sur le E-mini Nasdaq 100 (NQ)</h3>

      <p>
        Meme jour, le NQ ouvre a 18,245. Premiere heure : high a 18,342, low a
        18,198.
      </p>

      <ul>
        <li>IBH = 18,342</li>
        <li>IBL = 18,198</li>
        <li>IB Range = 144 points</li>
        <li>IB Mid = 18,270</li>
      </ul>

      <p>
        Sur le NQ, un IB Range de 144 points est dans la{" "}
        <strong>moyenne basse</strong>. Le Nasdaq etant plus volatile que le ES,
        il faut calibrer son analyse a l&apos;instrument. Un IB de 144 points
        sur le NQ n&apos;a pas la meme signification qu&apos;un IB de 144
        points sur le ES (qui serait enorme).
      </p>

      <h3>Les extensions de l&apos;IB</h3>

      <p>
        Au-dela du range brut, les traders Market Profile calculent les{" "}
        <strong>extensions de l&apos;IB</strong> — des niveaux projetes a partir
        de l&apos;IBH et de l&apos;IBL :
      </p>

      <ul>
        <li>
          <strong>1x extension haussiere</strong> = IBH + IB Range
        </li>
        <li>
          <strong>1.5x extension haussiere</strong> = IBH + (IB Range x 1.5)
        </li>
        <li>
          <strong>2x extension haussiere</strong> = IBH + (IB Range x 2)
        </li>
        <li>
          <strong>1x extension baissiere</strong> = IBL - IB Range
        </li>
        <li>
          <strong>1.5x extension baissiere</strong> = IBL - (IB Range x 1.5)
        </li>
        <li>
          <strong>2x extension baissiere</strong> = IBL - (IB Range x 2)
        </li>
      </ul>

      <p>
        Ces niveaux servent de <strong>cibles de profit</strong> et de{" "}
        <strong>zones d&apos;alerte</strong>. Statistiquement, quand le prix
        casse l&apos;IB d&apos;un cote, il atteint au minimum l&apos;extension
        1x dans la majorite des cas.
      </p>

      <hr />

      <h2 id="taille">
        Taille de l&apos;IB : ce qu&apos;elle revele sur la journee a venir
      </h2>

      <p>
        C&apos;est ici que l&apos;Initial Balance passe d&apos;un simple outil
        de mesure a un veritable instrument de prediction. La{" "}
        <strong>taille relative de l&apos;IB</strong> — comparee a sa moyenne
        historique — est l&apos;un des meilleurs indicateurs du type de journee
        qui vous attend.
      </p>

      <h3>IB etroit (inferieur a la moyenne)</h3>

      <p>
        Un IB etroit signifie que la premiere heure n&apos;a pas genere
        beaucoup de mouvement. Cela peut sembler ennuyeux, mais c&apos;est en
        realite un signal d&apos;alerte. Un IB compresse indique que les
        participants de l&apos;Other Timeframe (OTF) — les institutionnels —
        n&apos;ont pas encore montre leur main. Ils attendent, et quand ils
        agiront, le mouvement sera souvent directionnel et puissant.
      </p>

      <ul>
        <li>
          Probabilite elevee de <strong>cassure directionnelle</strong> dans
          l&apos;apres-midi
        </li>
        <li>
          Favorise les{" "}
          <a href="/blog/types-journees-market-profile/">Trend Days</a> et les
          Double Distribution Days
        </li>
        <li>
          Les extensions au-dela de l&apos;IB sont souvent{" "}
          <strong>multiples</strong> (1.5x, 2x ou plus)
        </li>
        <li>
          C&apos;est le moment de <strong>ne pas fader</strong> — la cassure de
          l&apos;IB est souvent un signal de continuation, pas de retour
        </li>
      </ul>

      <h3>IB large (superieur a la moyenne)</h3>

      <p>
        Un IB large signifie que la premiere heure a deja genere un mouvement
        significatif. La bataille entre acheteurs et vendeurs a eu lieu tot — et
        souvent, le gros du mouvement est deja fait.
      </p>

      <ul>
        <li>
          Probabilite elevee de <strong>journee de range</strong> — le prix
          reste confine dans l&apos;IB ou la depasse peu
        </li>
        <li>
          Favorise les Normal Days et les Normal Variation Days
        </li>
        <li>
          Les extensions sont <strong>limitees</strong> — souvent 0.5x ou moins
        </li>
        <li>
          Strategies de <strong>mean reversion</strong> privilegiees — acheter
          pres de l&apos;IBL, vendre pres de l&apos;IBH
        </li>
      </ul>

      <h3>IB moyen</h3>

      <p>
        Un IB dans la moyenne ne donne pas de signal clair en soi. C&apos;est le
        contexte supplementaire — le type d&apos;ouverture, la position par
        rapport a la Value Area de la veille, les niveaux de volume — qui
        tranchera. Restez neutre et attendez que le marche montre sa main.
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Taille de l&apos;IB</th>
            <th>Signal</th>
            <th>Type de journee probable</th>
            <th>Strategie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Etroit (&lt; moyenne)</td>
            <td>Compression avant expansion</td>
            <td>Trend Day, Double Distribution</td>
            <td>Breakout, suivi de tendance</td>
          </tr>
          <tr>
            <td>Moyen (= moyenne)</td>
            <td>Pas de biais clair</td>
            <td>Normal Variation, Neutral</td>
            <td>Attendre confirmation</td>
          </tr>
          <tr>
            <td>Large (&gt; moyenne)</td>
            <td>Mouvement deja fait</td>
            <td>Normal Day, Range Day</td>
            <td>Mean reversion dans l&apos;IB</td>
          </tr>
        </tbody>
      </table>

      <div className="key-concept">
        <div className="key-concept-label">Concept cle</div>
        <h4>La taille relative, pas absolue</h4>
        <p>
          Un IB de 15 points sur le ES peut etre etroit en periode de forte
          volatilite (VIX a 30) et large en periode calme (VIX a 12). Comparez
          toujours l&apos;IB du jour a la{" "}
          <strong>moyenne des 20 derniers jours</strong> pour contextualiser.
          C&apos;est la deviation par rapport a la norme qui compte.
        </p>
      </div>

      <hr />

      <h2 id="extensions">
        Extensions au-dela de l&apos;IB : le signal directionnel
      </h2>

      <p>
        Une fois l&apos;IB etabli a 10h30 ET, le jeu commence vraiment.
        L&apos;observation cle est simple : <strong>le prix casse-t-il
        l&apos;IBH ou l&apos;IBL, et avec quelle conviction ?</strong> C&apos;est
        ce mecanisme d&apos;extension qui transforme l&apos;IB d&apos;un simple
        range en un outil predictif.
      </p>

      <h3>Extension dans une direction (one-sided)</h3>

      <p>
        Quand le prix casse un seul cote de l&apos;IB — par exemple l&apos;IBH
        vers le haut — sans jamais menacer l&apos;autre cote, c&apos;est le
        signe d&apos;un <strong>flux directionnel clair</strong>. Un acteur OTF
        (Other Timeframe) impose sa conviction. Ce scenario est typique des
        Normal Variation Days et des Trend Days.
      </p>

      <ul>
        <li>
          Plus l&apos;extension est large par rapport a l&apos;IB Range, plus le
          mouvement est convaincu
        </li>
        <li>
          Une extension de 1x ou plus dans une direction confirme la presence
          d&apos;un acteur institutionnel agressif
        </li>
        <li>
          Le retour dans l&apos;IB apres une extension est un{" "}
          <strong>signal de faiblesse</strong> du mouvement
        </li>
      </ul>

      <h3>Extension dans les deux directions (two-sided)</h3>

      <p>
        Quand le prix casse d&apos;abord l&apos;IBH, puis revient et casse
        l&apos;IBL (ou l&apos;inverse), c&apos;est le signe d&apos;un marche
        indecis ou les deux camps se battent. Ce scenario produit souvent un{" "}
        <strong>Neutral Day</strong> — une journee ou le range final depasse
        l&apos;IB des deux cotes, mais sans conviction directionnelle nette.
      </p>

      <h3>Pas d&apos;extension</h3>

      <p>
        Si le prix ne casse ni l&apos;IBH ni l&apos;IBL pendant toute la
        session, vous etes dans un <strong>Normal Day classique</strong> — le
        marche est en equilibre total. Ces journees sont rares mais signalent
        souvent une accumulation avant un mouvement significatif le lendemain.
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
          Regle de Dalton
        </div>
        <p>
          Jim Dalton insiste sur un point dans <em>Markets in Profile</em> : ce
          n&apos;est pas la cassure de l&apos;IB en soi qui compte, mais{" "}
          <strong>l&apos;acceptation du prix au-dela de l&apos;IB</strong>. Si
          le prix casse l&apos;IBH de 3 ticks puis revient immediatement, ce
          n&apos;est pas une vraie extension. Il faut que le prix{" "}
          <strong>s&apos;installe</strong> au-dessus de l&apos;IBH — idealement
          avec plusieurs TPOs rotant au-dela du niveau — pour confirmer
          l&apos;extension.
        </p>
      </div>

      <hr />

      <h2 id="types-journees">
        IB et types de journees : la connexion directe
      </h2>

      <p>
        L&apos;Initial Balance est la cle de voute de la classification des{" "}
        <a href="/blog/types-journees-market-profile/">
          types de journees en Market Profile
        </a>
        . Chaque configuration de journee se definit en grande partie par la
        relation entre l&apos;IB et le range final de la session. Comprendre
        cette connexion, c&apos;est pouvoir identifier le type de journee{" "}
        <strong>en temps reel</strong>, pas apres coup.
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Type de journee</th>
            <th>Taille de l&apos;IB</th>
            <th>Extensions</th>
            <th>IB / Range total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal Day</td>
            <td>Large</td>
            <td>Aucune ou minime</td>
            <td>85-100%</td>
          </tr>
          <tr>
            <td>Normal Variation Day</td>
            <td>Moyenne a large</td>
            <td>1 direction, moderee</td>
            <td>50-70%</td>
          </tr>
          <tr>
            <td>Trend Day</td>
            <td>Etroit</td>
            <td>1 direction, extreme</td>
            <td>15-30%</td>
          </tr>
          <tr>
            <td>Double Distribution Day</td>
            <td>Etroit a moyen</td>
            <td>1 direction, puis rotation</td>
            <td>25-40%</td>
          </tr>
          <tr>
            <td>Neutral Day</td>
            <td>Moyenne</td>
            <td>2 directions, symetriques</td>
            <td>40-60%</td>
          </tr>
          <tr>
            <td>Non-Trend Day</td>
            <td>Tres etroit</td>
            <td>Aucune significative</td>
            <td>80-100%</td>
          </tr>
        </tbody>
      </table>

      <p>
        La logique est intuitive. Un <strong>Trend Day</strong> commence avec un
        IB compresse parce que les institutionnels n&apos;ont pas encore pris
        position — puis le mouvement explose dans une direction. A l&apos;inverse,
        un <strong>Normal Day</strong> commence avec un IB large parce que le
        marche a deja explore l&apos;essentiel de son range dans la premiere
        heure.
      </p>

      <p>
        Ce qui rend cette classification operationnelle, c&apos;est qu&apos;elle
        vous permet d&apos;anticiper le comportement du marche{" "}
        <strong>pendant la session</strong>, pas uniquement de l&apos;analyser
        apres la cloture. A 10h30, vous connaissez votre IB. A 11h00, vous
        observez la premiere tentative d&apos;extension. A midi, vous avez une
        conviction forte sur le type de journee — et votre strategie est deja
        adaptee.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">En pratique</div>
        <h4>Le workflow d&apos;identification en temps reel</h4>
        <p>
          10h30 ET : notez l&apos;IB Range et comparez a la moyenne 20 jours.
          11h00 : observez si le prix tente de casser l&apos;IBH ou l&apos;IBL.
          12h00 : evaluez l&apos;ampleur de l&apos;extension et le nombre de
          TPOs au-dela de l&apos;IB. Vous avez maintenant assez de donnees pour
          classifier la journee et adapter votre plan.
        </p>
      </div>

      <hr />

      <h2 id="open-types">
        Les 4 types d&apos;ouverture (Open Drive, Open Test Drive, Open
        Rejection Reverse, Open Auction)
      </h2>

      <p>
        Jim Dalton a affine l&apos;analyse de l&apos;Initial Balance en
        introduisant une classification des <strong>types d&apos;ouverture</strong>{" "}
        dans <em>Mind Over Markets</em>. L&apos;idee est que la facon dont le
        marche ouvre — les premieres 15 a 30 minutes — donne des indices
        cruciaux sur la conviction directionnelle{" "}
        <strong>avant meme que l&apos;IB ne soit complete</strong>.
      </p>

      <p>
        Ces quatre types d&apos;ouverture se classent du plus convaincu au moins
        convaincu :
      </p>

      <h3>1. Open Drive (OD)</h3>

      <p>
        Le marche ouvre et se deplace agressivement dans une direction{" "}
        <strong>sans jamais revenir tester le prix d&apos;ouverture</strong>.
        C&apos;est le type d&apos;ouverture le plus puissant. Il signale
        qu&apos;un acteur OTF a une conviction forte et deploie du volume des
        l&apos;ouverture. L&apos;Open Drive est souvent precurseur d&apos;un{" "}
        <strong>Trend Day</strong>.
      </p>

      <ul>
        <li>Le prix d&apos;ouverture est souvent le high ou le low de la journee</li>
        <li>Jamais de retour au prix d&apos;ouverture pendant la session</li>
        <li>Volume concentre dans la direction du drive</li>
        <li>
          <strong>Action</strong> : entrer dans la direction du drive des la
          confirmation, ne pas attendre la fin de l&apos;IB
        </li>
      </ul>

      <h3>2. Open Test Drive (OTD)</h3>

      <p>
        Le marche ouvre, teste brievement la direction opposee pour{" "}
        <strong>verifier l&apos;absence de contrepartie</strong>, puis se retourne
        et drive dans la direction principale. C&apos;est un Open Drive avec une
        phase de confirmation initiale. Le test echoue rapidement (quelques
        minutes) et le mouvement directionnel reprend avec conviction.
      </p>

      <ul>
        <li>
          Le test initial dure typiquement <strong>5 a 15 minutes</strong>
        </li>
        <li>Le volume sur le test est faible — pas de conviction adverse</li>
        <li>Le retournement est rapide et le drive qui suit est agressif</li>
        <li>
          <strong>Action</strong> : entrer apres l&apos;echec du test, quand le
          prix repasse dans la direction dominante
        </li>
      </ul>

      <h3>3. Open Rejection Reverse (ORR)</h3>

      <p>
        Le marche ouvre et se deplace dans une direction, mais{" "}
        <strong>rencontre une resistance significative</strong> et se retourne
        completement. Contrairement a l&apos;Open Test Drive, le mouvement
        initial est plus long et a plus de conviction apparente — c&apos;est un
        vrai piege. Le retournement se fait avec force et le marche finit par
        aller dans la direction opposee au mouvement initial.
      </p>

      <ul>
        <li>
          Le mouvement initial peut durer <strong>20 a 40 minutes</strong>
        </li>
        <li>Le rejet est visible par un pic de volume au point de retournement</li>
        <li>Le prix traverse le prix d&apos;ouverture et continue au-dela</li>
        <li>
          <strong>Action</strong> : ne pas poursuivre le mouvement initial,
          attendre le rejet et entrer dans la direction opposee
        </li>
      </ul>

      <h3>4. Open Auction (OA)</h3>

      <p>
        Le marche ouvre sans conviction directionnelle claire. Le prix oscille
        autour du prix d&apos;ouverture, testant les deux directions sans
        s&apos;engager. C&apos;est le type d&apos;ouverture le plus frequent —
        et celui qui necessite le plus de patience. L&apos;Open Auction produit
        souvent des{" "}
        <a href="/blog/types-journees-market-profile/">Normal Days</a> ou des
        Neutral Days.
      </p>

      <ul>
        <li>Pas de direction dominante dans les 30 premieres minutes</li>
        <li>Le prix d&apos;ouverture est proche du centre de l&apos;IB</li>
        <li>Volume distribue de maniere equilibree dans les deux directions</li>
        <li>
          <strong>Action</strong> : attendre la fin de l&apos;IB pour prendre
          position, privilegier le mean reversion
        </li>
      </ul>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Type d&apos;ouverture</th>
            <th>Conviction</th>
            <th>Journee probable</th>
            <th>Frequence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open Drive</td>
            <td>Tres forte</td>
            <td>Trend Day</td>
            <td>~10%</td>
          </tr>
          <tr>
            <td>Open Test Drive</td>
            <td>Forte</td>
            <td>Trend / Normal Variation</td>
            <td>~15%</td>
          </tr>
          <tr>
            <td>Open Rejection Reverse</td>
            <td>Moderee (piege)</td>
            <td>Normal Variation</td>
            <td>~20%</td>
          </tr>
          <tr>
            <td>Open Auction</td>
            <td>Faible</td>
            <td>Normal / Neutral / Range</td>
            <td>~55%</td>
          </tr>
        </tbody>
      </table>

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
          L&apos;erreur classique
        </div>
        <p>
          Dalton previent dans <em>Mind Over Markets</em> : l&apos;erreur la plus
          couteuse est de confondre un Open Rejection Reverse avec un Open Drive.
          Le trader qui entre long sur le mouvement initial d&apos;un ORR se
          retrouve pris a contre-pied quand le retournement survient. C&apos;est
          pourquoi il faut toujours attendre la confirmation — le vrai drive se
          distingue par l&apos;<strong>absence totale de retour</strong> au prix
          d&apos;ouverture.
        </p>
      </div>

      <hr />

      <h2 id="strategies">
        3 strategies basees sur l&apos;Initial Balance
      </h2>

      <p>
        La theorie de l&apos;Initial Balance ne vaut rien sans application
        concrete. Voici trois strategies que j&apos;utilise quotidiennement et
        que j&apos;enseigne dans mes formations. Chacune correspond a un
        scenario de marche specifique.
      </p>

      <h3>Strategie 1 : Le Breakout de l&apos;IB etroit</h3>

      <p>
        <strong>Quand l&apos;utiliser :</strong> IB Range inferieur a 75% de la
        moyenne 20 jours, pas d&apos;Open Drive.
      </p>

      <p>
        <strong>Setup :</strong> un IB compresse signale une expansion a venir.
        Vous attendez la cassure de l&apos;IBH ou de l&apos;IBL avec
        confirmation.
      </p>

      <ul>
        <li>
          <strong>Entree</strong> : sur la cassure de l&apos;IBH (long) ou de
          l&apos;IBL (short), apres que{" "}
          <strong>2 TPOs minimum se sont imprimes au-dela</strong> du niveau
          casse
        </li>
        <li>
          <strong>Stop</strong> : au milieu de l&apos;IB (IB Mid). Si le prix
          revient au centre de l&apos;IB, la these est invalidee
        </li>
        <li>
          <strong>Cible 1</strong> : extension 1x de l&apos;IB
        </li>
        <li>
          <strong>Cible 2</strong> : extension 1.5x de l&apos;IB
        </li>
        <li>
          <strong>Gestion</strong> : deplacer le stop au breakeven apres avoir
          atteint la cible 1, laisser courir vers la cible 2
        </li>
      </ul>

      <p>
        Cette strategie a un taux de reussite d&apos;environ{" "}
        <strong>55-60%</strong> sur le ES, mais un ratio rendement/risque
        superieur a 2:1 grace aux extensions multiples. Sur un an, elle genere
        un edge positif significatif.
      </p>

      <h3>Strategie 2 : Le Fade de l&apos;IB large</h3>

      <p>
        <strong>Quand l&apos;utiliser :</strong> IB Range superieur a 125% de la
        moyenne 20 jours, Open Auction identifie.
      </p>

      <p>
        <strong>Setup :</strong> un IB large signale que le mouvement principal
        est deja fait. Le prix va probablement osciller a l&apos;interieur de
        l&apos;IB pour le reste de la session.
      </p>

      <ul>
        <li>
          <strong>Entree long</strong> : quand le prix reteste l&apos;IBL
          depuis l&apos;interieur de l&apos;IB, avec un signe de rejet (meche,{" "}
          <a href="/blog/footprint-chart-trading/">empreinte d&apos;absorption</a>
          {" "}sur le footprint)
        </li>
        <li>
          <strong>Entree short</strong> : quand le prix reteste l&apos;IBH avec
          un signe de rejet
        </li>
        <li>
          <strong>Stop</strong> : 2-3 points au-dela de l&apos;IBH ou de
          l&apos;IBL (selon la direction)
        </li>
        <li>
          <strong>Cible</strong> : IB Mid, puis l&apos;extreme oppose de l&apos;IB
        </li>
        <li>
          <strong>Gestion</strong> : prendre 50% au milieu de l&apos;IB, trail
          le reste vers l&apos;extreme oppose
        </li>
      </ul>

      <p>
        Le Fade de l&apos;IB large fonctionne particulierement bien les
        vendredis et lors des sessions post-FOMC, quand le marche a deja fait
        son mouvement.
      </p>

      <h3>Strategie 3 : L&apos;Open Drive Follow</h3>

      <p>
        <strong>Quand l&apos;utiliser :</strong> Open Drive identifie dans les
        15 premieres minutes, le prix ne revient pas au prix d&apos;ouverture.
      </p>

      <p>
        <strong>Setup :</strong> c&apos;est la strategie la plus agressive car
        elle n&apos;attend pas la completion de l&apos;IB. L&apos;Open Drive
        etant le signal le plus fort de conviction directionnelle, vous entrez
        tot pour capturer le maximum du mouvement.
      </p>

      <ul>
        <li>
          <strong>Entree</strong> : des que le drive est confirme (pas de retour
          au prix d&apos;ouverture apres 15 minutes), entrer dans la direction
          du drive sur le premier pullback mineur
        </li>
        <li>
          <strong>Stop</strong> : au prix d&apos;ouverture de la session. Si le
          prix revient a l&apos;ouverture, l&apos;Open Drive est invalide
        </li>
        <li>
          <strong>Cible</strong> : pas de cible fixe — laisser courir. Les
          Open Drive produisent souvent les plus gros mouvements de la journee
        </li>
        <li>
          <strong>Gestion</strong> : trail stop progressif sous chaque nouveau
          low (pour un long) ou au-dessus de chaque nouveau high (pour un short)
        </li>
      </ul>

      <p>
        L&apos;Open Drive est rare — environ <strong>10% des sessions</strong>.
        Mais quand il se produit, c&apos;est l&apos;opportunite a ne pas
        manquer. Le prix d&apos;ouverture sera souvent l&apos;extreme de la
        journee, et le mouvement peut atteindre 2x a 3x l&apos;IB Range moyen.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Mon conseil</div>
        <h4>Ne tradez pas les trois strategies le meme jour</h4>
        <p>
          A 10h30, vous avez votre IB. Choisissez UNE strategie en fonction de
          la taille de l&apos;IB et du type d&apos;ouverture. Si l&apos;IB est
          etroit avec un Open Auction, c&apos;est la strategie 1 (Breakout). Si
          l&apos;IB est large, c&apos;est la strategie 2 (Fade). Si vous avez
          un Open Drive, c&apos;est la strategie 3 immediatement. Mixer les
          approches dans la meme session est la recette de la confusion.
        </p>
      </div>

      <hr />

      <h2 id="statistiques">
        Statistiques IB sur le ES : les chiffres qui comptent
      </h2>

      <p>
        La force de l&apos;Initial Balance, c&apos;est qu&apos;elle est{" "}
        <strong>testable statistiquement</strong>. Contrairement aux
        indicateurs subjectifs ou aux patterns chartistes ouverts a
        l&apos;interpretation, l&apos;IB produit des donnees binaires : le prix
        a-t-il casse l&apos;IBH ? L&apos;IBL ? De combien ? Voici les
        chiffres cles sur le E-mini S&amp;P 500, compiles sur les dernieres
        annees.
      </p>

      <h3>Frequence des extensions</h3>

      <ul>
        <li>
          Le prix casse l&apos;IBH ou l&apos;IBL dans{" "}
          <strong>environ 85% des sessions</strong>
        </li>
        <li>
          Extension dans une seule direction :{" "}
          <strong>~55% des sessions</strong> (signal directionnel)
        </li>
        <li>
          Extension dans les deux directions :{" "}
          <strong>~30% des sessions</strong> (Neutral Day)
        </li>
        <li>
          Aucune extension : <strong>~15% des sessions</strong> (Normal Day ou
          Non-Trend Day)
        </li>
      </ul>

      <h3>Ampleur des extensions</h3>

      <ul>
        <li>
          Quand le prix casse l&apos;IBH, il atteint l&apos;extension 1x dans{" "}
          <strong>~65% des cas</strong>
        </li>
        <li>
          Il atteint l&apos;extension 1.5x dans{" "}
          <strong>~40% des cas</strong>
        </li>
        <li>
          Il atteint l&apos;extension 2x dans{" "}
          <strong>~20% des cas</strong>
        </li>
        <li>
          Les extensions 2x+ sont fortement correlees aux Trend Days
        </li>
      </ul>

      <h3>Correlation IB etroit / mouvement directionnel</h3>

      <ul>
        <li>
          Quand l&apos;IB est dans le{" "}
          <strong>quartile inferieur</strong> (les 25% les plus etroits), la
          probabilite d&apos;une extension 1.5x ou plus monte a{" "}
          <strong>~70%</strong>
        </li>
        <li>
          A l&apos;inverse, quand l&apos;IB est dans le quartile superieur, la
          probabilite que le prix reste dans l&apos;IB depasse{" "}
          <strong>60%</strong>
        </li>
      </ul>

      <h3>Timing des extensions</h3>

      <ul>
        <li>
          <strong>50% des extensions</strong> se produisent avant 12h00 ET —
          la periode C ou D en Market Profile
        </li>
        <li>
          <strong>30% des extensions</strong> se produisent entre 12h00 et
          14h00 ET — souvent le &quot;lunch move&quot;
        </li>
        <li>
          <strong>20% des extensions</strong> se produisent apres 14h00 ET —
          le rally ou sell-off de fin de session
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
          Construisez votre propre base de donnees
        </div>
        <p>
          Ces statistiques sont des moyennes generales. Le comportement de
          l&apos;IB varie selon le regime de volatilite, la saison, et les
          evenements macro. Je recommande a chaque trader de compiler ses propres
          statistiques sur{" "}
          <strong>les 6 derniers mois glissants</strong> pour avoir des donnees
          adaptees au contexte actuel du marche. Un simple tableur suffit : notez
          l&apos;IB Range, le type d&apos;extension, et le range total de chaque
          session.
        </p>
      </div>

      <hr />

      <h2 id="sierra-chart">Configurer l&apos;IB sur Sierra Chart</h2>

      <p>
        <a href="/blog/sierra-chart-configuration/">Sierra Chart</a> est la
        plateforme de reference pour le trading Market Profile. Configurer
        l&apos;Initial Balance y est simple mais quelques reglages font toute
        la difference.
      </p>

      <h3>Etape 1 : Afficher le Market Profile avec IB</h3>

      <ul>
        <li>
          Ouvrez un graphique intraday sur l&apos;instrument souhaite (ES, NQ,
          etc.)
        </li>
        <li>
          Allez dans <strong>Chart &gt; Studies</strong>
        </li>
        <li>
          Ajoutez l&apos;etude <strong>&quot;TPO Profile Chart&quot;</strong>
        </li>
        <li>
          Dans les parametres de l&apos;etude, section{" "}
          <strong>&quot;Session Times&quot;</strong>, verifiez que la session RTH
          commence bien a 9h30 ET
        </li>
        <li>
          Activez <strong>&quot;Highlight Initial Balance Range&quot;</strong>{" "}
          dans les options d&apos;affichage — cela mettra en surbrillance les
          periodes A et B
        </li>
      </ul>

      <h3>Etape 2 : Ajouter les lignes IB High et IB Low</h3>

      <ul>
        <li>
          Dans les parametres du TPO Profile, activez{" "}
          <strong>&quot;Show Initial Balance Lines&quot;</strong>
        </li>
        <li>
          Choisissez une couleur distinctive — personnellement, j&apos;utilise
          le bleu pour l&apos;IBH et le rouge pour l&apos;IBL
        </li>
        <li>
          Activez l&apos;option{" "}
          <strong>&quot;Extend Initial Balance Lines&quot;</strong> pour que
          les lignes s&apos;etendent a droite du profil jusqu&apos;a la fin de
          la session
        </li>
      </ul>

      <h3>Etape 3 : Afficher les extensions de l&apos;IB</h3>

      <ul>
        <li>
          Sierra Chart ne propose pas les extensions IB nativement dans le TPO
          Profile. Deux options :
        </li>
        <li>
          <strong>Option 1 (simple)</strong> : utilisez l&apos;outil de dessin
          horizontal pour tracer manuellement les niveaux d&apos;extension 1x,
          1.5x et 2x chaque matin apres 10h30 ET
        </li>
        <li>
          <strong>Option 2 (automatisee)</strong> : utilisez un spreadsheet
          study custom (Sierra Chart supporte les formules de tableur integrees)
          pour calculer automatiquement IBH + IB Range, IBH + 1.5 x IB Range,
          etc.
        </li>
      </ul>

      <h3>Etape 4 : Ajouter l&apos;IB Range en valeur numerique</h3>

      <ul>
        <li>
          Ajoutez un <strong>Text Drawing</strong> ou un{" "}
          <strong>Chart Value</strong> pour afficher l&apos;IB Range en points
          directement sur le graphique
        </li>
        <li>
          Comparez-le visuellement a la moyenne que vous maintenez dans votre
          journal de trading
        </li>
      </ul>

      <h3>Reglages recommandes pour le Market Profile</h3>

      <ul>
        <li>
          <strong>Periode TPO</strong> : 30 minutes (standard)
        </li>
        <li>
          <strong>Session</strong> : RTH uniquement pour l&apos;IB (vous pouvez
          afficher le Globex separement)
        </li>
        <li>
          <strong>Couleurs IB</strong> : distinctes du reste du profil pour un
          reperage instantane
        </li>
        <li>
          <strong>Affichage split</strong> : un ecran avec le TPO Profile, un
          ecran avec le{" "}
          <a href="/blog/footprint-chart-trading/">Footprint Chart</a> pour
          confirmer les extensions avec le volume
        </li>
      </ul>

      <div className="key-concept">
        <div className="key-concept-label">Astuce pro</div>
        <h4>Le template de session</h4>
        <p>
          Creez un template Sierra Chart dedie a votre analyse IB : TPO Profile
          en RTH avec IB en surbrillance, lignes d&apos;extension tracees,{" "}
          <a href="/blog/vwap-trading-guide/">VWAP</a> en overlay, et un
          footprint en sous-fenetre. Sauvegardez ce template et chargez-le
          chaque matin a 9h25 ET. En 5 minutes, votre workspace est pret pour la
          session.
        </p>
      </div>

      <hr />

      <h2>
        L&apos;Initial Balance comme discipline quotidienne
      </h2>

      <p>
        L&apos;Initial Balance n&apos;est pas un indicateur de plus a empiler
        sur votre graphique. C&apos;est un <strong>cadre de reflexion</strong>{" "}
        qui structure votre analyse de chaque session. La premiere heure vous
        donne un IB Range, un type d&apos;ouverture, et des niveaux de
        reference. Le reste de la journee se lit a travers ce prisme.
      </p>

      <p>
        Ce que j&apos;observe chez les traders qui progressent le plus, c&apos;est
        qu&apos;ils font de l&apos;IB leur{" "}
        <strong>premiere lecture de la session</strong>. Avant le{" "}
        <a href="/blog/footprint-chart-trading/">footprint</a>, avant le{" "}
        <a href="/blog/cvd-cumulative-volume-delta/">CVD</a>, avant les
        indicateurs derivees — l&apos;IB. Parce que c&apos;est le seul outil
        qui vous dit, en un chiffre, si le marche est en phase
        d&apos;equilibre ou sur le point de bouger.
      </p>

      <p>
        Les travaux de Steidlmayer et de Dalton sur le Market Profile ont
        survécu a 40 ans d&apos;evolution des marches pour une raison
        simple : ils capturent la{" "}
        <a href="/blog/auction-market-theory/">
          dynamique fondamentale de l&apos;enchère
        </a>
        {" "} — la rencontre entre acheteurs et vendeurs dans le temps. L&apos;Initial
        Balance est l&apos;expression la plus pure de cette dynamique a
        l&apos;echelle d&apos;une session. Maitrisez-la, et vous aurez un
        avantage que 90% des traders retail n&apos;ont pas : la capacite de
        lire la journee avant qu&apos;elle ne se deroule.
      </p>
    </>
  );
}
