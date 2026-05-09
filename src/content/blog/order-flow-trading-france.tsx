export default function OrderFlowTradingFrance() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que l&apos;Order Flow ?</h2>

      <p>
        L&apos;Order Flow, c&apos;est la lecture du flux reel des ordres sur le
        marche. Pas des chandeliers. Pas des moyennes mobiles. Pas des patterns
        graphiques que tout le monde voit au meme moment.{" "}
        <strong>
          Le flux brut : qui achete, qui vend, a quel prix, et avec quelle
          agressivite.
        </strong>
      </p>

      <p>
        Chaque transaction sur un marche financier est le resultat d&apos;un
        acheteur et d&apos;un vendeur qui se rencontrent. L&apos;Order Flow
        analyse cette rencontre en temps reel. Quand un acheteur decide de
        &quot;taper&quot; l&apos;Ask (acheter au prix vendeur), c&apos;est un
        ordre agressif — il paie le spread pour entrer immediatement. Cette
        agressivite, visible dans le Time &amp; Sales et le Footprint Chart,
        revele les intentions reelles des participants.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cle</div>
        <h4>Le prix ne bouge pas a cause des indicateurs</h4>
        <p>
          Le prix bouge parce que des ordres sont executes. L&apos;Order Flow est
          la seule methode qui lit directement cette mecanique — tout le reste
          est derive, retarde, ou filtre.
        </p>
      </div>

      <p>
        Contrairement a l&apos;analyse technique qui interprete le passe (le prix
        a fait X, donc il fera Y), l&apos;Order Flow lit le present. Vous voyez
        l&apos;agressivite des acheteurs et vendeurs{" "}
        <strong>au moment ou elle se produit</strong>, pas apres coup.
      </p>

      <p>
        L&apos;Order Flow regroupe plusieurs outils complementaires : le{" "}
        <strong>DOM</strong> (Depth of Market), le{" "}
        <strong>Time &amp; Sales</strong> (ou Tape), le{" "}
        <strong>Footprint Chart</strong>, et le <strong>CVD</strong> (Cumulative
        Volume Delta). Ensemble, ils offrent une vision complete de
        l&apos;activite reelle du marche.
      </p>

      <hr />

      <h2 id="france">
        Pourquoi l&apos;Order Flow reste meconnu en France
      </h2>

      <p>
        La France a une culture trading dominee par l&apos;analyse technique
        classique, le Forex retail et les CFDs. Trois facteurs qui rendent
        l&apos;Order Flow encore rare et sous-represente dans l&apos;Hexagone.
      </p>

      <h3>1. La domination du Forex retail</h3>

      <p>
        Le Forex spot est un marche decentralise. Il n&apos;y a{" "}
        <strong>pas de carnet d&apos;ordres centralise</strong>. Le volume
        affiche par votre broker Forex ne represente que sa propre liquidite, pas
        le marche reel. Resultat : l&apos;Order Flow est structurellement limite
        sur le Forex. Et comme 80% des traders particuliers francais tradent le
        Forex, l&apos;Order Flow n&apos;existe tout simplement pas dans leur
        vocabulaire.
      </p>

      <h3>2. La barriere technique</h3>

      <p>
        L&apos;Order Flow necessite des{" "}
        <strong>donnees de marche professionnelles</strong> — les flux CME, les
        donnees de profondeur Level 2. Ces donnees coutent entre 50 et 150$ par
        mois. Ajoutez Sierra Chart (le logiciel de reference) et vous avez une
        barriere d&apos;entree que la plupart des debutants ne franchissent
        jamais.
      </p>

      <h3>3. Peu de formateurs qualifies</h3>

      <p>
        Enseigner l&apos;Order Flow demande de le pratiquer quotidiennement sur
        des marches reels avec des outils professionnels. En France, la majorite
        des formateurs trading viennent du Forex ou de l&apos;analyse technique
        classique.{" "}
        <strong>
          Les formateurs qui tradent reellement en Order Flow au quotidien se
          comptent sur les doigts d&apos;une main.
        </strong>
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
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>{" "}
          Bon a savoir
        </div>
        <p>
          Aux Etats-Unis, l&apos;Order Flow est enseigne dans les prop firms et
          les desks institutionnels depuis les annees 2000. En France, c&apos;est
          reste confidentiel jusqu&apos;a tres recemment. BASS Trading est
          l&apos;un des rares programmes a l&apos;enseigner de maniere
          structuree.
        </p>
      </div>

      <hr />

      <h2 id="institutionnel">Le flux institutionnel</h2>

      <p>
        Les institutionnels — banques, hedge funds, market makers — ne tradent
        pas comme vous. Ils ne posent pas des ordres limites visibles et
        n&apos;achetent pas au marche d&apos;un coup. Leur objectif :{" "}
        <strong>
          accumuler ou distribuer des positions massives sans deplacer le prix
          contre eux.
        </strong>
      </p>

      <h3>Les ordres Iceberg</h3>

      <p>
        Un iceberg est un ordre dont seule une fraction est visible dans le
        carnet d&apos;ordres. Un institutionnel veut acheter 5 000 contrats ES ?
        Il affiche 50 lots, se fait remplir, et recharge automatiquement. Dans le
        DOM, vous voyez 50 lots disparaitre et reapparaitre instantanement au
        meme prix. <strong>C&apos;est un signal d&apos;absorption massif.</strong>
      </p>

      <h3>Le Spoofing</h3>

      <p>
        Le spoofing consiste a placer de gros ordres limites sans intention de
        les executer, pour creer une fausse impression de support ou resistance.
        Bien qu&apos;illegal depuis le Dodd-Frank Act, il reste present.
        L&apos;Order Flow vous apprend a le detecter — un gros bid qui disparait
        des que le prix s&apos;en approche est un signal clair.
      </p>

      <h3>L&apos;absorption</h3>

      <p>
        L&apos;absorption se produit quand un gros volume est echange a un niveau
        de prix <strong>sans que le prix ne bouge</strong>. C&apos;est le signe
        qu&apos;un participant massif absorbe toute la pression opposee. Si le
        prix est en chute et que l&apos;absorption apparait, c&apos;est souvent
        le signal d&apos;un retournement imminent.
      </p>

      <hr />

      <h2 id="outils">Les outils de l&apos;Order Flow</h2>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Outil</th>
            <th>Ce qu&apos;il montre</th>
            <th>Utilisation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DOM (Depth of Market)</td>
            <td>
              Ordres limites en attente a chaque niveau de prix
            </td>
            <td>
              Lire la liquidite en temps reel, detecter les icebergs
            </td>
          </tr>
          <tr>
            <td>Time &amp; Sales (Tape)</td>
            <td>
              Chaque transaction executee avec prix, volume et agresseur
            </td>
            <td>
              Tape Reading — lire le rythme et l&apos;urgence du marche
            </td>
          </tr>
          <tr>
            <td>Footprint Chart</td>
            <td>
              Volume bid/ask par niveau de prix dans chaque bougie
            </td>
            <td>Desequilibres, absorption, delta par niveau</td>
          </tr>
          <tr>
            <td>CVD (Cumulative Volume Delta)</td>
            <td>
              Difference cumulee entre volume acheteur et vendeur
            </td>
            <td>Divergences prix/volume, confirmation de tendance</td>
          </tr>
          <tr>
            <td>Numbers Bars</td>
            <td>
              Bid x Ask a chaque niveau de prix dans la bougie
            </td>
            <td>Analyse fine de l&apos;activite par tick</td>
          </tr>
        </tbody>
      </table>

      <p>
        Ces outils ne sont pas des indicateurs au sens classique. Ils ne
        calculent rien a partir du prix — ils{" "}
        <strong>affichent directement l&apos;activite reelle</strong>.
        C&apos;est la difference fondamentale entre l&apos;Order Flow et
        l&apos;analyse technique.
      </p>

      <hr />

      <h2 id="vs-at">Order Flow vs Analyse Technique classique</h2>

      <p>
        L&apos;analyse technique classique — chandeliers,
        supports/resistances, RSI, MACD — analyse le{" "}
        <strong>resultat</strong> de l&apos;activite du marche (le prix).
        L&apos;Order Flow analyse la <strong>cause</strong> (les ordres
        eux-memes).
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Critere</th>
            <th>Analyse Technique</th>
            <th>Order Flow</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Donnees analysees</td>
            <td>Prix passe (OHLC)</td>
            <td>Ordres executes en temps reel</td>
          </tr>
          <tr>
            <td>Timing</td>
            <td>Retarde (confirme apres coup)</td>
            <td>Temps reel (anticipe)</td>
          </tr>
          <tr>
            <td>Volume</td>
            <td>Barres de volume agregees</td>
            <td>Volume decompose bid/ask par niveau</td>
          </tr>
          <tr>
            <td>Qui l&apos;utilise</td>
            <td>Retail, swing traders</td>
            <td>Prop firms, desks institutionnels, scalpers</td>
          </tr>
          <tr>
            <td>Barriere d&apos;entree</td>
            <td>Faible (MT4 gratuit)</td>
            <td>Moyenne (Sierra Chart + donnees CME)</td>
          </tr>
          <tr>
            <td>Edge reel</td>
            <td>Diminue (tout le monde voit les memes patterns)</td>
            <td>Durable (peu de traders le maitrisent)</td>
          </tr>
        </tbody>
      </table>

      <div className="key-concept">
        <div className="key-concept-label">Realite du marche</div>
        <h4>Les patterns graphiques ne font pas bouger le prix</h4>
        <p>
          Un &quot;double bottom&quot; n&apos;existe pas dans la mecanique du
          marche. Ce qui existe, c&apos;est une zone ou les vendeurs ont ete
          absorbes deux fois par des acheteurs plus puissants. L&apos;Order Flow
          vous montre cette absorption — le pattern n&apos;est que sa consequence
          visuelle.
        </p>
      </div>

      <p>
        L&apos;analyse technique n&apos;est pas inutile — elle donne un cadre.
        Mais utilisee seule, elle n&apos;offre aucun avantage competitif. Quand
        tout le monde voit la meme resistance, le meme pattern, le meme signal
        RSI — <strong>ou est votre edge ?</strong> L&apos;Order Flow apporte
        cette couche de lecture que 95% des traders n&apos;ont pas.
      </p>

      <hr />

      <h2 id="carnet">Le carnet d&apos;ordres en pratique</h2>

      <p>
        Le carnet d&apos;ordres (DOM) affiche les ordres limites en attente de
        chaque cote du prix actuel. Cote Bid (acheteurs), cote Ask (vendeurs). La
        dynamique entre ces deux cotes determine la direction du prix.
      </p>

      <h3>Lire la pression en temps reel</h3>

      <p>
        Quand les ordres Ask sont systematiquement &quot;tapes&quot; (acheteurs
        agressifs) et que les ordres Bid se remplissent lentement,{" "}
        <strong>la pression est acheteuse</strong>. Le prix monte parce que les
        acheteurs acceptent de payer des prix de plus en plus eleves — ils sont
        urgents.
      </p>

      <p>
        A l&apos;inverse, quand les Bids sont attaques par des vendeurs agressifs
        et que les Ask restent intacts, la pression est vendeuse. Le prix
        descend.
      </p>

      <h3>La liquidite comme aimant</h3>

      <p>
        Les gros paquets d&apos;ordres limites agissent comme des aimants pour le
        prix. Si 2 000 lots sont poses en Bid a un niveau precis, le prix a
        tendance a migrer vers ce niveau. Pourquoi ? Parce que les algorithmes et
        les institutionnels cherchent la liquidite pour remplir leurs ordres.{" "}
        <strong>Le prix va la ou la liquidite se trouve.</strong>
      </p>

      <h3>Le &quot;Pull&quot; et le &quot;Stack&quot;</h3>

      <p>
        Quand un gros ordre limite est retire juste avant que le prix ne
        l&apos;atteigne (pull), c&apos;est un signal que le support ou la
        resistance etait fictif. Quand des ordres limites s&apos;empilent
        progressivement a un niveau (stack), c&apos;est un signal de conviction
        reelle.
      </p>

      <hr />

      <h2 id="commencer">Comment commencer l&apos;Order Flow</h2>

      <p>
        L&apos;Order Flow a une courbe d&apos;apprentissage. Voici un chemin
        structure pour demarrer.
      </p>

      <ol>
        <li>
          <strong>Choisir les bons marches</strong> — Commencez par les Futures
          (ES, NQ). Marches centralises, donnees fiables, liquidite suffisante.
        </li>
        <li>
          <strong>Installer Sierra Chart</strong> — C&apos;est le standard.
          Configurez le Footprint Chart et le DOM. Le mentorat BASS fournit les
          templates pre-configures.
        </li>
        <li>
          <strong>Abonnement donnees CME</strong> — Indispensable pour les
          donnees Level 2 et le Footprint en temps reel.
        </li>
        <li>
          <strong>Observer avant de trader</strong> — Passez 2 a 4 semaines a
          observer le DOM et le Tape sans prendre de position. Notez les patterns
          recurrents.
        </li>
        <li>
          <strong>Se former avec un mentor</strong> — L&apos;Order Flow ne
          s&apos;apprend pas seul. Sans feedback, vous interpretez mal les
          signaux et developpez de mauvaises habitudes.
        </li>
      </ol>

      <div className="info-box">
        <div className="info-box-title">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>{" "}
          Erreur courante
        </div>
        <p>
          Ne commencez pas par le Tape Reading pur. C&apos;est la competence la
          plus avancee de l&apos;Order Flow. Commencez par le Footprint Chart —
          il offre une vue structuree et plus lisible du flux. Le Tape viendra
          naturellement avec l&apos;experience.
        </p>
      </div>

      <hr />

      <h2 id="bass">BASS Trading et l&apos;Order Flow</h2>

      <p>
        Le mentorat BASS Trading est le programme le plus complet en France pour
        apprendre l&apos;Order Flow. 70 heures de formation structuree, des
        sessions live quotidiennes, et un setup Sierra Chart pre-configure.
      </p>

      <p>Ce que vous apprenez :</p>

      <ul>
        <li>
          <strong>Market Profile</strong> — La structure du marche, les niveaux
          cles, les types de journees
        </li>
        <li>
          <strong>Footprint Chart</strong> — Delta, imbalances, absorption,
          stacked imbalances
        </li>
        <li>
          <strong>CVD et Tape Reading</strong> — Divergences, confirmation,
          lecture du flux en temps reel
        </li>
        <li>
          <strong>DOM et carnet d&apos;ordres</strong> — Liquidite, icebergs,
          pression directionnelle
        </li>
        <li>
          <strong>x-trade.ai</strong> — Gestion du risque automatique, protection
          de votre capital
        </li>
        <li>
          <strong>Prop Firms</strong> — Preparation specifique aux challenges
          (FTMO, Topstep, Apex, Bulenox, Fast Track Trading)
        </li>
      </ul>

      <p>
        La formation est certifiee <strong>Qualiopi via EMSCA</strong> et
        eligible CPF. 10 places maximum par session pour garantir un
        accompagnement personnalise.
      </p>
    </>
  );
}
