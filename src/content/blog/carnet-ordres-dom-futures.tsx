export default function CarnetOrdresDomFutures() {
  return (
    <>
      <h2 id="definition">
        Qu&apos;est-ce que le DOM (Depth of Market) ?
      </h2>
      <p>
        Le DOM (Depth of Market), egalement connu sous le nom de Level 2,
        ladder ou carnet d&apos;ordres, est un outil qui affiche en temps reel
        l&apos;ensemble des ordres limites en attente sur un marche.
        Contrairement au graphique de prix qui montre l&apos;historique des
        transactions executees, le DOM revele l&apos;
        <strong>intention future</strong> des participants — ou les acheteurs et
        vendeurs sont positionnes et en quelle quantite.
      </p>

      <p>
        Sur les marches futures regules comme le CME (Chicago Mercantile
        Exchange), toutes les transactions passent par un carnet centralise.
        Chaque ordre limit place est visible dans le DOM, ce qui en fait un
        outil de transparence sans equivalent dans d&apos;autres marches (les
        actions, par exemple, ont des dark pools qui rendent le Level 2
        partiel).
      </p>

      <div className="callout">
        <p>
          <strong>Avantage futures :</strong> Sur l&apos;ES, NQ ou CL, le DOM
          reflete l&apos;ensemble des ordres limites en attente dans le carnet
          officiel du CME. C&apos;est une vision quasi-exhaustive de
          l&apos;intention de liquidite — contrairement aux marches OTC ou une
          grande partie des ordres est invisible.
        </p>
      </div>

      <p>
        Le DOM est affiche sous forme de &quot;ladder&quot; (echelle) : les prix
        sont listes verticalement, avec le prix actuel au centre. En dessous,
        les <strong>bids</strong> (ordres d&apos;achat limites) en vert/bleu
        indiquant les volumes en attente a chaque niveau. Au-dessus, les{" "}
        <strong>asks</strong> (ordres de vente limites) en rouge indiquant les
        volumes de vente en attente. L&apos;ecart entre le meilleur bid et le
        meilleur ask est le <strong>spread</strong>.
      </p>

      <h2 id="structure">
        Structure et lecture du carnet d&apos;ordres
      </h2>
      <p>
        Comprendre la structure du DOM est la premiere etape. Voici un exemple
        representatif du carnet d&apos;ordres de l&apos;ES (E-mini S&amp;P 500
        Futures) :
      </p>

      <div className="dom-mockup">
        <div className="dom-header">
          <span>BIDS (Acheteurs)</span>
          <span>PRIX</span>
          <span>ASKS (Vendeurs)</span>
        </div>
        <div className="dom-row">
          <div className="bid-vol"></div>
          <div className="price">5604.75</div>
          <div className="ask-vol">148</div>
        </div>
        <div className="dom-row">
          <div className="bid-vol"></div>
          <div className="price">5604.50</div>
          <div className="ask-vol">89</div>
        </div>
        <div className="dom-row">
          <div className="bid-vol"></div>
          <div className="price">5604.25</div>
          <div className="ask-vol wall">1 850</div>
        </div>
        <div className="dom-row">
          <div className="bid-vol"></div>
          <div className="price">5604.00</div>
          <div className="ask-vol">312</div>
        </div>
        <div className="dom-row">
          <div className="bid-vol"></div>
          <div className="price current">5603.75</div>
          <div className="ask-vol">— PRIX ACTUEL —</div>
        </div>
        <div className="dom-row">
          <div className="bid-vol">275</div>
          <div className="price">5603.50</div>
          <div className="ask-vol"></div>
        </div>
        <div className="dom-row">
          <div className="bid-vol">190</div>
          <div className="price">5603.25</div>
          <div className="ask-vol"></div>
        </div>
        <div className="dom-row">
          <div className="bid-vol wall">2 400</div>
          <div className="price">5603.00</div>
          <div className="ask-vol"></div>
        </div>
        <div className="dom-row">
          <div className="bid-vol">145</div>
          <div className="price">5602.75</div>
          <div className="ask-vol"></div>
        </div>
        <div className="dom-row">
          <div className="bid-vol">88</div>
          <div className="price">5602.50</div>
          <div className="ask-vol"></div>
        </div>
      </div>

      <p>
        Dans cet exemple, deux elements ressortent immediatement : un{" "}
        <strong>mur vendeur de 1 850 contrats</strong> a 5604.25 et un{" "}
        <strong>mur acheteur de 2 400 contrats</strong> a 5603.00. Ces
        concentrations anormales de liquidite sont des zones cles a surveiller.
      </p>

      <h3>Les informations cles du DOM</h3>
      <ul>
        <li>
          <strong>Best bid / Best ask :</strong> Les meilleurs prix actuellement
          disponibles (juste en dessous et au-dessus du prix actuel).
          L&apos;ecart entre eux est le spread.
        </li>
        <li>
          <strong>Profondeur du carnet :</strong> Le nombre de niveaux de prix
          affiches. La plupart des plateformes montrent 5-20 niveaux de chaque
          cote.
        </li>
        <li>
          <strong>Volume par niveau :</strong> Le nombre de contrats en attente a
          chaque prix. C&apos;est la donnee principale d&apos;analyse.
        </li>
        <li>
          <strong>Desequilibre global bid/ask :</strong> La difference totale
          entre le volume bid et ask visible dans le DOM. Un desequilibre fort
          cote bid suggere une pression haussiere potentielle.
        </li>
      </ul>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="val">10</div>
          <div className="lbl">Niveaux de profondeur standard</div>
        </div>
        <div className="metric-card">
          <div className="val">1 tick</div>
          <div className="lbl">Resolution minimum (ES = 0.25 pt)</div>
        </div>
        <div className="metric-card">
          <div className="val">&lt;1ms</div>
          <div className="lbl">Frequence de mise a jour</div>
        </div>
        <div className="metric-card">
          <div className="val">5x</div>
          <div className="lbl">Ratio minimal pour un &quot;mur&quot;</div>
        </div>
      </div>

      <h2 id="murs">Murs d&apos;achat et murs de vente</h2>
      <p>
        Un <strong>mur</strong> (wall ou ice wall) dans le DOM est une
        concentration de volume sur un seul niveau de prix qui depasse
        significativement les niveaux environnants. Dans notre exemple, 2 400
        contrats sur un seul prix alors que les niveaux adjacents n&apos;en
        affichent que 88-275 constitue un mur evident.
      </p>

      <h3>Mur vendeur (Ask wall)</h3>
      <p>
        Un mur vendeur cree une <strong>resistance de liquidite</strong> : pour
        que le prix franchisse ce niveau, les acheteurs doivent absorber tous ces
        contrats en vente. Plus le mur est grand, plus il faudra de volume
        agressif cote achat pour le traverser. En pratique, les prix
        &quot;s&apos;etirent&quot; contre les gros murs avant de les traverser
        ou de rebondir.
      </p>

      <p>Trois comportements possibles face a un mur vendeur :</p>
      <ul>
        <li>
          <strong>Absorption :</strong> Le prix monte progressivement, consommant
          le mur contrat par contrat. Le mur diminue et finalement disparait —
          signal haussier (les vendeurs ont ete absorbes, les acheteurs
          controlent).
        </li>
        <li>
          <strong>Rebond :</strong> Le prix s&apos;approche du mur, le tape
          reading revele peu d&apos;interet a ces niveaux, le prix recule.
          Signal de resistance validee.
        </li>
        <li>
          <strong>Disparition soudaine :</strong> Le mur disparait avant que le
          prix ne l&apos;atteigne — signal de spoofing (voir section suivante).
        </li>
      </ul>

      <h3>Mur acheteur (Bid wall)</h3>
      <p>
        Logique inverse : un mur bid cree un support de liquidite. Pour que le
        prix descende sous ce niveau, les vendeurs doivent traverser ce volume
        massif. Les murs bid sont souvent places par des acteurs institutionnels
        pour defendre un niveau de prix ou signaler leur intention d&apos;achat.
        Sur l&apos;ES, un mur bid de 1 500+ contrats sur un support technique
        (ex : VAL du jour precedent) merite une attention particuliere.
      </p>

      <div className="callout blue">
        <p>
          <strong>Astuce DOM :</strong> Observez la velocite de consommation
          d&apos;un mur. Un mur de 1 000 contrats qui fond de 200 contrats
          toutes les 5 secondes est en cours d&apos;absorption agressive —
          contexte tres different d&apos;un mur qui reste stable pendant 10
          minutes et agit comme support authentique.
        </p>
      </div>

      <h2 id="dynamique">
        DOM dynamique : lire le flux en temps reel
      </h2>
      <p>
        Le DOM n&apos;est pas statique — il change a chaque milliseconde. Des
        ordres sont places, modifies, retires en permanence. La lecture du{" "}
        <strong>DOM dynamique</strong> consiste a observer ces changements en
        temps reel pour decoder l&apos;intention des participants.
      </p>

      <h3>Signaux a surveiller dans le DOM dynamique</h3>

      <table className="data-table">
        <thead>
          <tr>
            <th>Signal</th>
            <th>Description</th>
            <th>Interpretation</th>
            <th>Fiabilite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Renforcement du bid</td>
            <td>Volume croissant sur plusieurs niveaux bid</td>
            <td>Acheteurs s&apos;organisent, pression haussiere</td>
            <td>
              <span className="tag-green">Elevee</span>
            </td>
          </tr>
          <tr>
            <td>Retrait du bid</td>
            <td>Volume bid diminue rapidement sans trade</td>
            <td>Acheteurs se retirent, support fragile</td>
            <td>
              <span className="tag-green">Elevee</span>
            </td>
          </tr>
          <tr>
            <td>Mur qui disparait</td>
            <td>Gros volume disparait avant d&apos;etre touche</td>
            <td>Probable spoofing, ne pas faire confiance</td>
            <td>
              <span className="tag-orange">Contextuelle</span>
            </td>
          </tr>
          <tr>
            <td>Absorption silencieuse</td>
            <td>
              Gros mur qui fond sans acceleration de prix
            </td>
            <td>
              Absorption institutionnelle, retournement possible
            </td>
            <td>
              <span className="tag-green">Elevee si confirmee</span>
            </td>
          </tr>
          <tr>
            <td>Ecrasement du spread</td>
            <td>Bid et ask se rapprochent, spread reduit</td>
            <td>Augmentation de liquidite, move imminent</td>
            <td>
              <span className="tag-orange">Moderee</span>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>La vitesse de consommation des ordres</h3>
      <p>
        L&apos;un des indicateurs les plus importants du DOM dynamique est la{" "}
        <strong>velocite de consommation</strong>. Quand le prix atteint un
        niveau, a quelle vitesse les ordres sont-ils executes ? Une consommation
        lente suggere un manque d&apos;interet ; une consommation rapide indique
        une forte conviction directionnelle.
      </p>

      <p>
        Sur Sierra Chart ou Bookmap, vous pouvez visualiser cette velocite via
        des outils comme le &quot;pulling&quot; indicator qui mesure la rapidite
        a laquelle les ordres sont retires/executes. Plus la vitesse est elevee,
        plus le signal est fort.
      </p>

      <h2 id="spoofing">
        Spoofing, layering et manipulation du DOM
      </h2>
      <p>
        Le spoofing est la pratique consistant a placer de gros ordres dans le
        DOM pour creer une illusion de liquidite, puis a les retirer avant
        qu&apos;ils ne soient executes. Bien qu&apos;illegal et sanctionne par
        la CFTC et la SEC, il reste une realite du marche que tout trader DOM
        doit connaitre.
      </p>

      <h3>Reconnaitre le spoofing</h3>
      <p>
        Le spoof classique se deroule ainsi : un acteur place 2 000 contrats en
        bid a 5600 sur l&apos;ES. D&apos;autres participants voient ce
        &quot;soutien&quot; massif et achetent au-dessus de 5600, faisant monter
        le prix. Quand le prix monte suffisamment, le spoofer retire ses 2 000
        contrats bid et vend a ces prix eleves. Le support fictif disparait et
        le prix peut rechuter.
      </p>

      <p>Indicateurs d&apos;un spoofing probable :</p>
      <ul>
        <li>
          Volume anormalement eleve qui apparait soudainement sur un seul niveau
        </li>
        <li>
          Ce volume disparait integralement des que le prix s&apos;en approche a
          2-3 ticks
        </li>
        <li>
          Pattern repetitif sur plusieurs sessions (memes niveaux de prix, meme
          comportement)
        </li>
        <li>
          Le volume reapparait quelques ticks plus loin apres s&apos;etre
          deplace
        </li>
      </ul>

      <div className="callout warning">
        <p>
          <strong>Regle anti-spoofing :</strong> Ne jamais baser une decision
          d&apos;entree <em>uniquement</em> sur un gros ordre dans le DOM.
          Attendez que le prix interagisse avec ce niveau et observez si le
          volume resiste ou se retire. La confirmation vient de la{" "}
          <em>consommation</em> des ordres, pas de leur simple presence.
        </p>
      </div>

      <h3>Layering</h3>
      <p>
        Le layering est une forme plus sophistiquee de spoofing : au lieu
        d&apos;un seul gros ordre, l&apos;acteur place plusieurs ordres a des
        niveaux differents, creant l&apos;impression d&apos;une &quot;mur de
        liquidite&quot; etage. L&apos;objectif est de creer une perception de
        pression directionnelle sur plusieurs niveaux. Le layering est encore
        plus difficile a detecter que le spoofing simple.
      </p>

      <h3>Protections pratiques contre la manipulation</h3>
      <ul>
        <li>
          Utiliser le{" "}
          <a href="/blog/tape-reading-flux-ordres/">tape reading</a> (Time &amp;
          Sales) en parallele pour confirmer les executions reelles
        </li>
        <li>
          Verifier le{" "}
          <a href="/blog/delta-footprint-trading/">delta</a> — le delta doit
          confirmer la direction suggeree par le DOM
        </li>
        <li>
          Observer le comportement du volume sur 2-3 niveaux autour du mur
          suspect
        </li>
        <li>
          Attendre une <strong>depassee confirmee</strong> (le prix a traverse le
          niveau et les nouvelles bougies se forment au-dela)
        </li>
      </ul>

      <h2 id="iceberg">Ordres iceberg : la liquidite cachee</h2>
      <p>
        Un ordre iceberg est un gros ordre limit qui n&apos;affiche qu&apos;une
        petite portion de son volume reel dans le DOM. Par exemple, un acteur
        institutionnel voulant vendre 5 000 contrats ne va pas les afficher en
        totalite — cela signalerait ses intentions et deplacerait le prix avant
        meme d&apos;etre execute. Il va afficher 100 contrats, se faire
        executer, et reafficher automatiquement 100 contrats jusqu&apos;a
        epuisement des 5 000.
      </p>

      <h3>Comment detecter les icebergs</h3>
      <p>
        La detection des icebergs est une competence avancee. Les signaux :
      </p>
      <ul>
        <li>
          <strong>Volume execute disproportionne :</strong> Sur le tape reading,
          vous voyez 3 000 contrats s&apos;executer a un meme prix alors que le
          DOM n&apos;affichait que 100 contrats a ce niveau. Les
          &quot;100&quot; se rechargent en permanence — c&apos;est un iceberg.
        </li>
        <li>
          <strong>Prix qui &quot;colle&quot; a un niveau :</strong> Malgre une
          pression directionnelle soutenue, le prix reste bloque a un meme
          niveau pendant plusieurs minutes. Un iceberg en face absorbe chaque
          tentative.
        </li>
        <li>
          <strong>Delta paradoxal :</strong> Grosse pression bid (delta tres
          positif) mais prix qui n&apos;avance pas — probable iceberg vendeur
          qui absorbe.
        </li>
      </ul>

      <p>
        Les icebergs sont souvent utilises par des{" "}
        <strong>acteurs institutionnels</strong> pour accumuler ou distribuer de
        grosses positions discretement. Les identifier est une fenetre sur
        l&apos;activite des &quot;smart money&quot;.
      </p>

      <h2 id="confluence">
        Confluence DOM + Footprint + Volume Profile
      </h2>
      <p>
        Le DOM seul peut induire en erreur — spoofing, icebergs, donnees
        partielles. Sa vraie puissance emerge quand il est integre dans une
        analyse multi-outil. Les meilleures configurations apparaissent quand
        DOM, Footprint et Volume Profile racontent la meme histoire.
      </p>

      <h3>DOM + Footprint</h3>
      <p>
        Le DOM montre les intentions (ordres futurs) ; le{" "}
        <a href="/blog/footprint-chart-trading/">Footprint</a> montre les
        executions passees. Quand un mur bid dans le DOM coincide avec une{" "}
        <a href="/blog/imbalance-footprint/">stacked imbalance bullish</a> sur
        le Footprint recent, la zone est doublement validee — les acheteurs
        avaient deja agi de facon agressive a ce niveau ET ils defendent
        maintenant ce meme niveau avec des ordres limites.
      </p>

      <h3>DOM + Volume Profile</h3>
      <p>
        Un mur dans le DOM sur la VAL, la VAH ou le POC du{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a> de la session
        precedente n&apos;est pas un hasard. Les institutionnels connaissent ces
        niveaux et y positionnent leurs ordres limites. Quand un mur bid
        apparait exactement sur la VAL du jour J-1, c&apos;est un signal de
        defense de valeur par les grands operateurs.
      </p>

      <h3>Exemple d&apos;analyse combinee</h3>
      <p>
        <strong>Situation :</strong> L&apos;ES ouvre la journee. La VAL du jour
        precedent est a 5600. On observe dans le DOM un mur bid de 1 800
        contrats a 5600. Sur le Footprint des 5 premieres minutes, les bougies
        proches de 5600 montrent des stacked ask imbalances (les acheteurs ont
        defendu ce niveau agressivement). Le CVD remonte depuis 5600.
      </p>

      <p>
        <strong>Lecture :</strong> Triple confluence (mur DOM, stacked
        imbalances Footprint, CVD haussier sur niveau Volume Profile). Le setup
        long a 5600.25 avec stop sous 5599.50 est haute probabilite.
        L&apos;objectif naturel est le POC (si plus bas) ou la VAH.
      </p>

      <div className="callout">
        <p>
          <strong>Principe de convergence :</strong> Plus les outils convergent
          sur la meme zone, plus la conviction dans le setup augmente. DOM seul
          = 40% de confiance. DOM + Footprint = 65%. DOM + Footprint + Volume
          Profile = 80%+. Attendez toujours 2-3 confluences avant
          d&apos;entrer.
        </p>
      </div>

      <h2 id="setups">Setups pratiques bases sur le DOM</h2>

      <h3>Setup 1 : Le mur absorbe</h3>
      <p>
        <strong>Contexte :</strong> Un mur vendeur de 1 200 contrats apparait
        sur le NQ a un niveau de resistance. Sur les 3 minutes suivantes, le
        tape reading montre que ce volume fond progressivement — 900, 600, 300,
        disparait. Le prix n&apos;a pas recule pendant l&apos;absorption.
      </p>
      <p>
        <strong>Signal :</strong> Absorption complete = les vendeurs ont ete
        &quot;consommes&quot; par des acheteurs agressifs. Le marche peut
        maintenant avancer sans resistance a ce niveau. Entree long sur la
        bougie qui franchit le niveau avec delta positif et volume solide.
      </p>

      <h3>Setup 2 : La defense de mur</h3>
      <p>
        <strong>Contexte :</strong> L&apos;ES retrace vers 5600 (support
        technique + mur bid de 900 contrats dans le DOM). Le prix atteint
        5600.25 et le tape reading montre des gros lots d&apos;achat. Le mur
        bid reste intact, voire se renforce legerement.
      </p>
      <p>
        <strong>Signal :</strong> Le support est defendu activement. Entree long
        sur 5600.50 avec stop sous le mur a 5599.75. La resilience du mur
        valide le support.
      </p>

      <h3>Setup 3 : Le vide de liquidite</h3>
      <p>
        <strong>Contexte :</strong> Dans le DOM du CL, vous observez que les
        niveaux entre 79.50 et 80.00 sont presque vides cote ask — 20-30
        contrats par niveau. Un gros mur ask est positionne a 80.00. Le prix est
        a 79.40.
      </p>
      <p>
        <strong>Signal :</strong> Si le prix commence a monter avec conviction
        (delta positif, acheteurs agressifs), il peut accelerer vers 80.00 en
        consommant rapidement ces 50 cents de liquidite faible. Ce type de
        &quot;vacuum&quot; au-dessus du prix actuel est un setup de projection
        court terme haute probabilite.
      </p>

      <h2 id="limites">
        Limites du DOM : ce qu&apos;il ne montre pas
      </h2>
      <p>
        Malgre sa puissance sur les futures, le DOM a des limites structurelles
        qu&apos;il faut integrer dans son approche.
      </p>

      <h3>1. Les dark pools et ordres OTC</h3>
      <p>
        Une portion significative des transactions institutionnelles passe par
        des dark pools (marches prives sans affichage public). Ces transactions
        n&apos;apparaissent jamais dans le DOM. Pour les indices et le petrole,
        l&apos;impact est limite sur les futures CME, mais sur les actions, le
        DOM Level 2 est tres partiel.
      </p>

      <h3>2. La vitesse de manipulation</h3>
      <p>
        Les algorithmes HFT peuvent placer et retirer des ordres en
        microsecondes. Ce que vous voyez dans le DOM a un instant T peut avoir
        change completement a T+1ms. La plupart des plateformes retail affichent
        un DOM avec un delai de 50-200ms, ce qui laisse le temps aux HFT de
        manipuler avant que vous ne voyiez la mise a jour.
      </p>

      <h3>3. L&apos;intention ≠ l&apos;execution</h3>
      <p>
        Le DOM montre des intentions, pas des engagements. Un ordre limit peut
        etre retire a tout moment. Seules les transactions du tape reading (Time
        &amp; Sales) representent des executions reelles et irrevocables.
      </p>

      <div className="callout warning">
        <p>
          <strong>Recommandation :</strong> Utilisez le DOM comme outil de
          contexte et de surveillance des niveaux cles, jamais comme seul
          declencheur d&apos;entree. Confirmez toujours avec le tape reading et
          le delta avant d&apos;executer. Le DOM revele le terrain de bataille ;
          le Footprint vous dit qui est en train de gagner.
        </p>
      </div>

      <h3>4. La difficulte de lecture en temps reel</h3>
      <p>
        Le DOM change trop vite pour etre &quot;lu&quot; manuellement en temps
        reel sur les instruments tres liquides (ES pendant les heures actives).
        Des outils comme Bookmap ou les visualisations de flux DOM de Sierra
        Chart transforment ces donnees en representations visuelles plus
        exploitables (heatmaps, histogrammes). Ces outils sont indispensables
        pour depasser la lecture manuelle.
      </p>

      <h3>Alternatives et complements au DOM</h3>
      <ul>
        <li>
          <strong>Bookmap :</strong> Visualisation heatmap du DOM sur le temps —
          revele les patterns de placement et retrait d&apos;ordres sur
          plusieurs heures.
        </li>
        <li>
          <strong>ATAS / Sierra Chart :</strong> DOM integre avec Footprint pour
          une analyse combinee.
        </li>
        <li>
          <strong>Market Depth Indicator :</strong> Affiche le desequilibre
          global bid/ask du DOM sur un graphique standard.
        </li>
        <li>
          <strong>CVD :</strong> Le{" "}
          <a href="/blog/cvd-cumulative-volume-delta/">CVD</a> confirme si les
          transactions reelles sont coherentes avec ce que le DOM suggere.
        </li>
      </ul>
    </>
  );
}
