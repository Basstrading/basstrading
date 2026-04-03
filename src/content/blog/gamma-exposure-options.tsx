export default function GammaExposure() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que le Gamma Exposure ?</h2>
      <p>
        Chaque jour, des milliards de dollars en options expirent ou changent de
        mains sur les marches americains. Derriere chaque contrat d&apos;option,
        il y a un <strong>dealer</strong> (une banque, un market maker) qui doit
        couvrir son risque en temps reel. Le{" "}
        <strong>Gamma Exposure (GEX)</strong> mesure exactement cette obligation
        de couverture — et c&apos;est la que le prix des futures trouve ses
        rails invisibles.
      </p>
      <p>
        En termes simples, le GEX quantifie combien de contrats futures les
        dealers doivent acheter ou vendre pour chaque mouvement de 1 % du
        sous-jacent. Quand le GEX est eleve et positif, les dealers agissent
        comme des amortisseurs : ils vendent quand le prix monte et achetent
        quand il baisse. Quand le GEX est negatif, c&apos;est l&apos;inverse —
        les dealers amplifient chaque mouvement, et le marche devient explosif.
      </p>
      <p>
        Ce n&apos;est pas de la theorie academique. Les plus grands hedge funds
        — Citadel, Optiver, Susquehanna — utilisent le gamma exposure comme
        carte routiere quotidienne. Et depuis quelques annees, cette information
        est devenue accessible aux traders independants. Comprendre le GEX,
        c&apos;est comprendre <strong>pourquoi</strong> le ES (S&amp;P 500
        futures) rebondit a certains niveaux avec une precision chirurgicale, et
        pourquoi d&apos;autres jours il traverse tout sans s&apos;arreter.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Definition precise</div>
        <h4>
          GEX = Σ (Open Interest × Gamma × 100 × Prix du sous-jacent²) pour
          chaque strike
        </h4>
        <p>
          Le Gamma Exposure agrege le gamma de toutes les options ouvertes a
          chaque strike, pondere par l&apos;open interest et le prix du
          sous-jacent. Le resultat indique la quantite de couverture en dollars
          que les dealers doivent effectuer par mouvement de 1 % — un flux
          mecanique, previsible, et exploitable.
        </p>
      </div>

      <hr />

      <h2 id="mecanisme">
        Le mecanisme : pourquoi les dealers couvrent leur gamma
      </h2>
      <p>
        Pour comprendre le GEX, il faut d&apos;abord comprendre ce que fait un
        dealer d&apos;options. Quand vous achetez un call sur le SPX, le dealer
        vous le vend. Il est maintenant <strong>short gamma</strong> — ce qui
        signifie que son risque augmente a mesure que le prix bouge. Pour rester
        neutre (delta-neutral), il doit se couvrir en permanence.
      </p>
      <p>
        Voici le mecanisme concret, etape par etape :
      </p>
      <ul>
        <li>
          <strong>Le trader achete un call 5200 sur le SPX.</strong> Le dealer
          vend ce call. Son delta est maintenant negatif — il est
          synthetiquement short le marche.
        </li>
        <li>
          <strong>Le SPX monte vers 5200.</strong> Le delta du call augmente
          (grace au gamma). Le dealer doit acheter des futures ES pour rester
          neutre.
        </li>
        <li>
          <strong>Le SPX redescend.</strong> Le delta du call diminue. Le dealer
          revend les futures qu&apos;il avait achetes.
        </li>
      </ul>
      <p>
        Ce cycle d&apos;achat dans les baisses et de vente dans les hausses est
        le <strong>hedging dynamique</strong>. A l&apos;echelle du marche, quand
        des milliards de dollars de gamma doivent etre couverts, ce flux
        mecanique des dealers devient le flux dominant — plus puissant que
        n&apos;importe quel hedge fund individuel.
      </p>

      <div className="info-box">
        <div className="info-box-title">Le gamma en une phrase</div>
        <p>
          Le gamma mesure la vitesse a laquelle le delta d&apos;une option
          change quand le sous-jacent bouge de 1 point. Plus le gamma est eleve
          (options proches du strike, proches de l&apos;expiration), plus le
          dealer doit ajuster sa couverture frequemment et agressivement.
        </p>
      </div>

      <p>
        Ce qui rend le GEX si puissant, c&apos;est que ce flux est{" "}
        <strong>non-discretionnaire</strong>. Le dealer ne choisit pas de couvrir
        ou non — il <em>doit</em> le faire pour respecter ses limites de risque.
        C&apos;est un flux mecanique, previsible, et qui se repete a chaque tick
        du marche. Quand vous voyez le ES rebondir exactement sur un niveau GEX,
        ce n&apos;est pas de la magie — c&apos;est de la mecanique.
      </p>
      <p>
        La taille de ce flux est considerable. Les estimations varient, mais les
        dealers couvrent collectivement entre{" "}
        <strong>3 et 8 milliards de dollars</strong> de delta par jour sur le SPX
        seul. C&apos;est l&apos;equivalent de plusieurs dizaines de milliers de
        contrats ES — un flux capable de definir la direction intrajournaliere.
      </p>

      <hr />

      <h2 id="positif-negatif">
        Gamma positif vs negatif : deux regimes de marche
      </h2>
      <p>
        Le signe du GEX net change radicalement le comportement du marche.
        Comprendre dans quel regime on se trouve est la premiere etape avant
        toute decision de trading.
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Caracteristique</th>
            <th>Gamma positif (Long Gamma)</th>
            <th>Gamma negatif (Short Gamma)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Position des dealers</td>
            <td>Acheteurs de gamma (clients net vendeurs d&apos;options)</td>
            <td>Vendeurs de gamma (clients net acheteurs d&apos;options)</td>
          </tr>
          <tr>
            <td>Comportement de couverture</td>
            <td>Vendent dans les hausses, achetent dans les baisses</td>
            <td>Achetent dans les hausses, vendent dans les baisses</td>
          </tr>
          <tr>
            <td>Effet sur le prix</td>
            <td>Compression — le marche est &quot;colle&quot;</td>
            <td>Amplification — le marche est explosif</td>
          </tr>
          <tr>
            <td>Volatilite realisee</td>
            <td>Faible — range serre, mean-reversion</td>
            <td>Elevee — breakouts violents, gaps</td>
          </tr>
          <tr>
            <td>Strategie adaptee</td>
            <td>Scalping en range, retour a la moyenne</td>
            <td>Breakout, trend-following, stops larges</td>
          </tr>
          <tr>
            <td>Analogie</td>
            <td>Rouler sur une autoroute droite</td>
            <td>Rouler sur de la glace noire</td>
          </tr>
        </tbody>
      </table>

      <p>
        En <strong>gamma positif</strong>, le marche entre dans un regime de
        compression. Les dealers absorbent la pression directionnelle en
        permanence. C&apos;est le scenario typique des journees de faible
        volatilite ou le ES oscille dans un range de 20-30 points toute la
        journee. Les traders qui tentent des breakouts se font systematiquement
        pieger — le marche revient toujours au centre. C&apos;est
        l&apos;environnement ideal pour les strategies de retour a la moyenne :
        vendre les extremes du range, acheter les creux.
      </p>
      <p>
        En <strong>gamma negatif</strong>, tout change. Les dealers doivent
        acheter quand le prix monte (pour couvrir leurs calls vendus dont le
        delta explose) et vendre quand il baisse. Ils amplifient chaque
        mouvement. C&apos;est le regime des sell-offs violents, des cascades de
        liquidation, et des rallyes de short-squeeze. La volatilite realisee
        peut etre 2 a 3 fois superieure a celle des periodes de gamma positif.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Le flip point</div>
        <h4>
          Le niveau Zero Gamma est le seuil ou le marche change de regime
        </h4>
        <p>
          Au-dessus du Zero Gamma, les dealers sont en couverture stabilisatrice
          (gamma positif). En dessous, ils deviennent amplificateurs (gamma
          negatif). Identifier ce niveau chaque matin est la premiere chose a
          faire avant d&apos;ouvrir un trade.
        </p>
      </div>

      <p>
        Les transitions entre regimes sont souvent les moments les plus
        profitables. Quand le marche passe de gamma positif a gamma negatif
        (typiquement en traversant le Zero Gamma a la baisse), l&apos;explosion
        de volatilite qui s&apos;ensuit est spectaculaire. Les traders qui
        comprennent cette dynamique positionnent leurs breakout trades
        exactement a ces niveaux de transition.
      </p>

      <hr />

      <h2 id="niveaux">
        Les niveaux GEX cles : Put Wall, Call Wall, Zero Gamma
      </h2>
      <p>
        La carte GEX ne se resume pas a un chiffre positif ou negatif.
        Plusieurs niveaux structurels emergent de la distribution du gamma a
        travers les strikes, et chacun a un role precis dans l&apos;action du
        prix.
      </p>

      <h3>1. Le Put Wall</h3>
      <p>
        Le <strong>Put Wall</strong> est le strike ou la concentration de gamma
        lie aux puts est la plus elevee. C&apos;est le niveau ou les dealers
        doivent acheter le plus agressivement si le prix baisse — un support
        mecanique massif. Le Put Wall agit comme un plancher : le prix peut le
        tester, mais le traverser demande une force vendeuse considerable.
      </p>
      <p>
        Quand le Put Wall cede, c&apos;est generalement le signal d&apos;une
        acceleration baissiere majeure. Les dealers qui achetaient a ce niveau
        se retrouvent obliges de vendre (ils passent en gamma negatif), creant
        un effet de cascade.
      </p>

      <h3>2. Le Call Wall</h3>
      <p>
        Le <strong>Call Wall</strong> est le strike avec la plus forte
        concentration de gamma lie aux calls. C&apos;est la resistance
        mecanique — le plafond du range probable. Quand le prix approche du
        Call Wall, les dealers vendent agressivement des futures pour couvrir
        leurs calls. Le prix est litteralement repousse vers le bas.
      </p>
      <p>
        Le Call Wall sert aussi de cible pour les mouvements haussiers. Dans un
        environnement de gamma positif, le prix est souvent &quot;attire&quot;
        vers le strike ou la concentration de gamma est maximale — un phenomene
        appele <strong>pin risk</strong> ou &quot;magnetic effect&quot;.
      </p>

      <h3>3. Le Zero Gamma (Gamma Flip)</h3>
      <p>
        Le <strong>Zero Gamma</strong> est le niveau ou le gamma net des
        dealers passe de positif a negatif. C&apos;est le niveau le plus
        important de la carte GEX. Au-dessus, le marche est en mode
        compression. En dessous, il est en mode amplification.
      </p>
      <p>
        Le Zero Gamma est rarement un support ou une resistance au sens
        classique — c&apos;est plutot un <strong>seuil de regime</strong>. Le
        prix peut le traverser facilement, mais le comportement du marche change
        radicalement de part et d&apos;autre. C&apos;est la frontiere entre
        deux mondes.
      </p>

      <h3>4. Les Gamma Strikes (Niveaux secondaires)</h3>
      <p>
        Au-dela des trois niveaux principaux, chaque strike avec un open
        interest significatif cree une zone de gamma localisee. Ces &quot;gamma
        strikes&quot; agissent comme des micro-supports et micro-resistances
        intrajournaliers. Les traders avances les utilisent pour affiner leurs
        entrees et sorties, en les combinant avec le{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a> et le{" "}
        <a href="/blog/vwap-trading-guide/">VWAP</a>.
      </p>

      <div className="info-box">
        <div className="info-box-title">Le GEX est un outil de positionnement</div>
        <p>
          Les niveaux GEX changent chaque jour avec l&apos;open interest et
          l&apos;expiration des options. Il est essentiel de recalculer la carte
          GEX chaque matin avant l&apos;ouverture. Les niveaux de la veille
          n&apos;ont plus de validite — le marche des options se renouvelle en
          permanence.
        </p>
      </div>

      <hr />

      <h2 id="lire-gex">Comment lire une carte GEX (interpretation)</h2>
      <p>
        Une carte GEX typique affiche un histogramme ou chaque barre represente
        le gamma exposure net a un strike donne. Les barres positives (souvent
        en vert) representent le gamma des calls, les barres negatives (en
        rouge) le gamma des puts. Voici comment l&apos;interpreter
        concretement, etape par etape.
      </p>

      <h3>Etape 1 : Identifier le GEX net total</h3>
      <p>
        La premiere information est le signe du GEX agrege. Positif ? Le marche
        est en mode compression. Negatif ? Mode amplification. Ce chiffre seul
        vous dit deja quel type de strategie privilegier pour la journee.
      </p>

      <h3>Etape 2 : Reperer les murs</h3>
      <p>
        Identifiez le Put Wall (la barre negative la plus large) et le Call
        Wall (la barre positive la plus large). Ces deux niveaux definissent
        le <strong>range probable</strong> de la journee. En gamma positif, le
        prix a une forte probabilite de rester entre ces deux murs.
      </p>

      <h3>Etape 3 : Localiser le Zero Gamma</h3>
      <p>
        Trouvez le niveau ou la somme cumulee du gamma passe de positif a
        negatif. Ce niveau est votre ligne de demarcation. Au-dessus, vous
        tradez en mode mean-reversion. En dessous, vous tradez en mode
        breakout.
      </p>

      <h3>Etape 4 : Evaluer la symetrie</h3>
      <p>
        Un GEX fortement asymetrique (beaucoup plus de gamma sur les puts que
        sur les calls, ou inversement) indique un biais directionnel du marche
        des options. Une forte concentration de puts signifie que les
        institutionnels se couvrent contre une baisse — mais aussi que le
        support mecanique est solide.
      </p>

      <h3>Etape 5 : Comparer avec le prix actuel</h3>
      <p>
        Ou se situe le prix par rapport aux niveaux GEX ? Au milieu du range
        Put Wall / Call Wall, les flux sont equilibres. Pres d&apos;un mur, le
        prix subit une pression directionnelle forte. Au-dela d&apos;un mur, le
        risque d&apos;acceleration augmente drastiquement.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Regle pratique</div>
        <h4>
          Le GEX explique le &quot;pourquoi&quot;, pas le &quot;quand&quot;
        </h4>
        <p>
          Le GEX vous dit ou se trouvent les flux mecaniques et quel regime de
          marche vous etes. Il ne vous dit pas quand le prix va atteindre un
          niveau. Pour le timing, combinez le GEX avec l&apos;
          <a href="/blog/order-flow-trading-france/">order flow</a> — le flux
          reel des ordres en temps reel.
        </p>
      </div>

      <hr />

      <h2 id="market-profile">
        GEX + Market Profile : la convergence ultime
      </h2>
      <p>
        Si le GEX vous donne la carte des flux mecaniques des options, le{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a> vous
        donne la carte des flux reels du marche futures. Quand les deux
        convergent sur un meme niveau, la probabilite de reaction du prix
        devient exceptionnelle.
      </p>

      <h3>
        Confluence 1 : Put Wall + HVN (High Volume Node)
      </h3>
      <p>
        Un <strong>Put Wall</strong> qui coincide avec un{" "}
        <strong>High Volume Node</strong> sur le Volume Profile cree une zone de
        support doublement validee. D&apos;un cote, les dealers achetent
        mecaniquement des futures a ce niveau. De l&apos;autre, le HVN
        represente une zone d&apos;acceptation de prix historique ou les
        participants ont deja echange massivement. Double raison de rebondir.
      </p>

      <h3>
        Confluence 2 : Call Wall + Excess / Poor High
      </h3>
      <p>
        Un <strong>Call Wall</strong> aligne avec un excess ou un poor high
        identifie sur le{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a>{" "}
        signifie que le plafond mecanique des options coincide avec une zone
        d&apos;inachevement structurel. Soit le prix est repousse par les
        dealers (et le poor high persiste), soit les flux sont suffisants pour
        traverser les deux — et l&apos;acceleration est d&apos;autant plus
        violente.
      </p>

      <h3>
        Confluence 3 : Zero Gamma + Single Prints
      </h3>
      <p>
        Les single prints sur le Market Profile representent des zones de
        transition rapide — le prix est passe vite, laissant un vide. Quand le
        Zero Gamma se trouve dans une zone de single prints, le changement de
        regime est amplifie par le manque de structure. C&apos;est le scenario
        d&apos;acceleration maximale : le prix traverse le Zero Gamma, passe en
        gamma negatif, et il n&apos;y a aucune structure de volume pour le
        freiner.
      </p>

      <div className="info-box">
        <div className="info-box-title">La superposition des cartes</div>
        <p>
          Chaque matin, tracez les niveaux GEX (Put Wall, Call Wall, Zero
          Gamma) sur votre graphique Market Profile. Identifiez les confluences.
          Les zones ou les deux cartes se superposent deviennent vos niveaux
          prioritaires — ceux ou vous attendez un signal d&apos;order flow pour
          agir.
        </p>
      </div>

      <p>
        Cette approche multi-couches — options (GEX) + structure (Market
        Profile) + execution (
        <a href="/blog/order-flow-trading-france/">Order Flow</a>) — est au
        coeur de la methodologie enseignee chez BASS Trading. Chaque couche
        valide les autres, reduisant les faux signaux et augmentant le ratio
        risque/rendement.
      </p>

      <hr />

      <h2 id="strategies">3 strategies basees sur le GEX</h2>

      <h3>Strategie 1 : Le Gamma Pinning (compression)</h3>
      <p>
        <strong>Environnement :</strong> GEX net fortement positif, prix entre
        le Put Wall et le Call Wall. C&apos;est le scenario de compression
        maximale — les dealers &quot;epinglent&quot; le prix autour du strike a
        gamma maximal.
      </p>
      <p>
        <strong>Execution :</strong> Identifiez le strike avec le plus fort
        gamma (souvent un nombre rond comme 5200, 5250). Ce strike est votre
        point d&apos;ancrage. Vendez quand le prix s&apos;ecarte de 10-15
        points au-dessus, achetez quand il s&apos;ecarte de 10-15 points en
        dessous. Le stop est place au-dela du prochain gamma strike. La cible
        est un retour au strike central.
      </p>
      <p>
        <strong>Gestion du risque :</strong> Cette strategie fonctionne tant que
        le GEX reste positif. Surveillez les mises a jour intrajournalieres du
        GEX. Si le marche se rapproche du Zero Gamma, coupez immediatement —
        le regime va changer.
      </p>

      <h3>Strategie 2 : Le Gamma Squeeze (explosion)</h3>
      <p>
        <strong>Environnement :</strong> GEX net negatif ou en transition vers
        le negatif. Le prix approche ou traverse le Zero Gamma.
      </p>
      <p>
        <strong>Execution :</strong> Quand le prix casse le Zero Gamma a la
        baisse, les dealers passent en mode amplificateur. Attendez la
        confirmation par l&apos;
        <a href="/blog/order-flow-trading-france/">order flow</a> (absorption
        echouee, delta negatif sur les footprint charts). Entrez short avec un
        stop au-dessus du Zero Gamma. La cible est le Put Wall — ou au-dela si
        le Put Wall cede.
      </p>
      <p>
        <strong>Gestion du risque :</strong> Les mouvements en gamma negatif
        sont rapides et violents. Utilisez des stops plus larges (la volatilite
        est elevee) mais des tailles de position plus petites. Le ratio
        risque/rendement est souvent excellent (2:1 minimum) grace a
        l&apos;amplification mecanique.
      </p>

      <h3>Strategie 3 : Le Wall Fade (rejet aux extremes)</h3>
      <p>
        <strong>Environnement :</strong> GEX net positif, prix qui approche du
        Put Wall ou du Call Wall.
      </p>
      <p>
        <strong>Execution :</strong> Quand le prix touche le Call Wall en gamma
        positif, les dealers vendent massivement des futures. Cherchez un signal
        de rejet : un{" "}
        <a href="/blog/vwap-trading-guide/">rejet au VWAP</a> superieur, une
        divergence delta, ou une absorption visible sur le{" "}
        <a href="/blog/order-flow-trading-france/">footprint chart</a>. Entrez
        short avec un stop 5-10 points au-dessus du Call Wall. La cible est le
        milieu du range GEX.
      </p>
      <p>
        Meme logique inversee au Put Wall : le prix touche le support mecanique,
        les dealers achetent, et vous cherchez un signal d&apos;entree long.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Regle d&apos;or</div>
        <h4>Jamais le GEX seul — toujours avec confirmation</h4>
        <p>
          Le GEX definit les zones et le regime. L&apos;order flow et le Market
          Profile fournissent le timing et la confirmation. Entrer sur un niveau
          GEX sans confirmation, c&apos;est jouer a pile ou face avec un biais
          statistique — le biais est la, mais la variance aussi.
        </p>
      </div>

      <hr />

      <h2 id="outils">Outils et sources de donnees GEX</h2>
      <p>
        Le calcul du GEX necessite les donnees d&apos;open interest par strike,
        le gamma de chaque option, et un modele de positionnement des dealers.
        Voici les principales sources accessibles aux traders independants :
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Outil</th>
            <th>Type</th>
            <th>Prix</th>
            <th>Points forts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SpotGamma</td>
            <td>Plateforme specialisee</td>
            <td>~$50-250/mois</td>
            <td>
              Reference du secteur, niveaux GEX quotidiens, alertes de regime,
              modele proprietaire
            </td>
          </tr>
          <tr>
            <td>GammaLab (Menthor Q)</td>
            <td>Plateforme specialisee</td>
            <td>~$30-100/mois</td>
            <td>
              Interface intuitive, historique GEX, backtesting des niveaux
            </td>
          </tr>
          <tr>
            <td>Unusual Whales</td>
            <td>Flux d&apos;options</td>
            <td>~$40-80/mois</td>
            <td>
              Flux temps reel, dark pool, GEX integre, interface moderne
            </td>
          </tr>
          <tr>
            <td>CBOE Open Interest Data</td>
            <td>Donnees brutes</td>
            <td>Gratuit (delayed)</td>
            <td>
              Donnees source, calcul manuel possible, pas de modele
              proprietaire
            </td>
          </tr>
          <tr>
            <td>Python + yfinance/CBOE API</td>
            <td>DIY</td>
            <td>Gratuit</td>
            <td>
              Controle total du modele, personnalisation, apprentissage profond
              du mecanisme
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        Pour les traders qui veulent calculer le GEX eux-memes, le processus de
        base est le suivant :
      </p>
      <ul>
        <li>
          <strong>Recuperer l&apos;open interest</strong> de toutes les options
          SPX/SPY (ou l&apos;indice de votre choix) par strike et par
          expiration.
        </li>
        <li>
          <strong>Calculer le gamma</strong> de chaque option avec le modele
          Black-Scholes (ou une approximation numerique).
        </li>
        <li>
          <strong>Determiner le positionnement</strong> — les dealers sont
          generalement short les options que les clients achetent (calls et
          puts). Le gamma des calls est positif pour les dealers (ils achetent
          dans les baisses), le gamma des puts est negatif (ils vendent dans les
          baisses).
        </li>
        <li>
          <strong>Agreger par strike</strong> : GEX(strike) = OI × Gamma × 100
          × Spot². Sommez pour obtenir le GEX net.
        </li>
      </ul>

      <div className="info-box">
        <div className="info-box-title">Les donnees sont en retard</div>
        <p>
          L&apos;open interest officiel est publie une fois par jour (apres la
          cloture). Les variations intrajournalieres du GEX dependent du volume
          d&apos;options en temps reel, qui est plus difficile a obtenir.
          Les plateformes comme SpotGamma utilisent des modeles propriétaires
          pour estimer le GEX intrajournalier — une approximation, pas une
          verite absolue.
        </p>
      </div>

      <hr />

      <h2 id="limites">Les limites du GEX</h2>
      <p>
        Le GEX est un outil puissant, mais il ne faut pas le transformer en
        boule de cristal. Voici ses limites reelles, sans langue de bois.
      </p>

      <h3>1. Le probleme du positionnement</h3>
      <p>
        Le calcul du GEX repose sur une hypothese cruciale : les dealers sont
        short les options que les clients achetent. En realite, c&apos;est plus
        nuance. Certaines options sont achetees par des market makers entre eux,
        d&apos;autres sont vendues par des clients (les vendeurs de puts
        couverts, par exemple). L&apos;hypothese &quot;dealer = short&quot; est
        une simplification qui fonctionne statistiquement, mais qui peut etre
        fausse sur des strikes specifiques.
      </p>

      <h3>2. Les expirations multiples</h3>
      <p>
        Le GEX agrege les options de toutes les expirations. Mais une option
        expirant demain a un gamma bien plus eleve qu&apos;une option expirant
        dans 3 mois, meme avec le meme open interest. Les jours
        d&apos;expiration majeurs (OPEX — Options Expiration, typiquement le
        3eme vendredi du mois), la carte GEX change drastiquement en quelques
        heures. Les niveaux calcules le matin peuvent etre obsoletes
        l&apos;apres-midi.
      </p>

      <h3>3. Le marche ne suit pas toujours les options</h3>
      <p>
        Le GEX mesure les flux mecaniques des dealers. Mais le marche est aussi
        influence par des flux non lies aux options : les buybacks d&apos;actions,
        les rebalancings de fonds, les nouvelles macroeconomiques, les
        interventions de la Fed. Un GEX positif massif n&apos;a pas empeche le
        marche de chuter lors de la crise COVID en mars 2020 — les flux
        macroeconomiques ont ecrase les flux d&apos;options.
      </p>

      <h3>4. La democratisation reduit l&apos;edge</h3>
      <p>
        Plus de traders utilisent le GEX, plus les niveaux sont anticipes, et
        moins l&apos;avantage est net. Les Put Wall et Call Wall sont maintenant
        publies sur des dizaines de sites. Les niveaux deviennent des propheties
        auto-realisatrices (ce qui peut les renforcer) ou des pieges a
        liquidite (ce qui peut les affaiblir). L&apos;edge n&apos;est plus dans
        la connaissance du GEX seul, mais dans sa{" "}
        <strong>combinaison avec d&apos;autres outils</strong>.
      </p>

      <h3>5. Le SPX/SPY bias</h3>
      <p>
        Le GEX est principalement pertinent sur les indices americains (SPX,
        SPY, QQQ) ou le marche des options est gigantesque et liquide. Sur les
        marches europeens, les matieres premieres, ou les cryptos, les flux
        d&apos;options sont beaucoup plus petits et le GEX est moins fiable
        comme indicateur de regime.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Perspective</div>
        <h4>Le GEX est une couche, pas un systeme</h4>
        <p>
          Le Gamma Exposure Trading est une composante precieuse d&apos;une
          approche multi-couches. Il definit le regime de volatilite et les
          niveaux mecaniques. Le{" "}
          <a href="/blog/market-profile-guide-complet/">Market Profile</a>{" "}
          apporte la structure. L&apos;
          <a href="/blog/order-flow-trading-france/">Order Flow</a> apporte le
          timing. Ensemble, ces trois dimensions forment un cadre de lecture du
          marche complet — capable de s&apos;adapter a tous les regimes.
        </p>
      </div>
    </>
  );
}
