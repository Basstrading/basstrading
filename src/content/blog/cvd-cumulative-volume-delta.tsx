export default function CvdCumulativeVolumeDelta() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que le CVD ?</h2>
      <p>
        Imaginez une balance. D&apos;un cote, tous les ordres d&apos;achat
        agressifs de la session (les market buy orders, qui frappent
        l&apos;Ask). De l&apos;autre, tous les ordres de vente agressifs (les
        market sell orders, qui frappent le Bid). Le <strong>CVD</strong>{" "}
        (Cumulative Volume Delta) est le solde de cette balance, mis a jour en
        continu depuis l&apos;ouverture.
      </p>
      <p>
        Un CVD positif et croissant dit : depuis l&apos;ouverture, les acheteurs
        agressifs ont domine. Un CVD negatif et decroissant dit : les vendeurs
        agressifs ont pris le dessus. Ce n&apos;est pas le prix qui vous dit ca
        — c&apos;est le <strong>flux d&apos;ordres brut</strong>, sans filtre.
      </p>
      <p>
        La puissance du CVD ne vient pas de sa valeur absolue, mais de sa{" "}
        <strong>relation avec le prix</strong>. Quand les deux convergent (CVD
        monte, prix monte), la tendance est saine. Quand ils divergent (CVD
        baisse, prix monte), quelque chose cloche — et c&apos;est la que les
        meilleurs trades se cachent.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Definition precise</div>
        <h4>
          CVD = Σ(Delta de chaque bougie) depuis le debut de la session
        </h4>
        <p>
          Delta d&apos;une bougie = Volume Ask − Volume Bid. Le CVD est
          l&apos;accumulation de tous ces deltas. Si chaque bougie a un delta de
          +500 contrats, apres 10 bougies le CVD sera a +5000. C&apos;est la
          pression directionnelle cumulee.
        </p>
      </div>

      <h2 id="calcul">Comment le CVD est calcule</h2>
      <p>
        Le CVD repose sur une distinction fondamentale dans les donnees de
        marche : les <strong>ordres agressifs</strong> (market orders) vs les{" "}
        <strong>ordres passifs</strong> (limit orders).
      </p>
      <p>
        Quand un acheteur envoie un market buy order, il &quot;frappe&quot; le
        meilleur Ask disponible. Ce volume est comptabilise cote Ask — c&apos;est
        de l&apos;agressivite acheteuse. Quand un vendeur envoie un market sell
        order, il frappe le meilleur Bid — c&apos;est de l&apos;agressivite
        vendeuse.
      </p>
      <p>
        Le <strong>delta d&apos;une bougie</strong> = Volume Ask − Volume Bid.
        Exemples :
      </p>
      <ul>
        <li>
          Bougie avec 10 000 contrats Ask et 7 000 contrats Bid → Delta =
          +3 000 (pression acheteuse)
        </li>
        <li>
          Bougie avec 4 000 contrats Ask et 9 000 contrats Bid → Delta =
          −5 000 (pression vendeuse)
        </li>
        <li>
          Bougie avec 6 000 Ask et 6 000 Bid → Delta = 0 (equilibre parfait)
        </li>
      </ul>
      <p>
        Le CVD accumule ces deltas : CVD(n) = CVD(n-1) + Delta(bougie n). Le
        reset du CVD depend de votre configuration — generalement a chaque
        nouvelle session (00:00 UTC ou ouverture de la session principale).
      </p>

      <h2 id="delta-vs-cvd">
        Delta par bougie vs CVD : deux lectures differentes
      </h2>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Indicateur</th>
            <th>Mesure</th>
            <th>Horizon</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Delta (bougie)</td>
            <td>Ask − Bid sur une bougie</td>
            <td>Court terme (micro)</td>
            <td>
              Force de la bougie actuelle, confirmation d&apos;entree
            </td>
          </tr>
          <tr>
            <td>CVD</td>
            <td>Somme des deltas depuis le debut</td>
            <td>Session entiere (macro)</td>
            <td>Tendance de fond, divergences, epuisement</td>
          </tr>
        </tbody>
      </table>

      <p>
        Pensez-y comme ceci : le delta par bougie est comme regarder chaque coup
        individuel dans une partie de boxe. Le CVD est comme regarder le score
        du combat en temps reel. Les deux sont necessaires. Le delta vous dit qui
        gagne la bougie actuelle. Le CVD vous dit qui gagne le match de la
        journee.
      </p>

      <h2 id="divergences">
        Les divergences CVD/Prix : le signal d&apos;alerte ultime
      </h2>
      <p>
        Les divergences entre le CVD et le prix sont les signaux les plus
        puissants que l&apos;analyse de l&apos;order flow peut produire. Elles
        indiquent un <strong>epuisement</strong> de la tendance — le prix
        avance, mais la conviction derriere ce mouvement faiblit.
      </p>

      <h3>Divergence baissiere (Bearish CVD Divergence)</h3>
      <p>
        Le prix fait un nouveau sommet. Le CVD fait un sommet plus bas que le
        precedent. Signal : les acheteurs agressifs sont de moins en moins
        nombreux pour pousser le prix vers ces nouveaux niveaux. Les derniers
        mouvements haussiers sont portes par des ordres de moins en moins
        importants. La resistance vient d&apos;acheteurs passifs (limit orders)
        qui absorbent sans generer de CVD positif. Resultat probable :
        retournement ou pause significative.
      </p>

      <h3>Divergence haussiere (Bullish CVD Divergence)</h3>
      <p>
        Le prix fait un nouveau creux. Le CVD fait un creux moins profond que le
        precedent. Signal : les vendeurs agressifs s&apos;epuisent. Les
        nouvelles baisses de prix ne sont plus accompagnees de la meme pression
        vendeuse. Des acheteurs passifs absorbent les ventes en profondeur.
        Resultat probable : rebond ou retournement haussier.
      </p>

      <div className="info-box">
        <div className="info-box-title">
          Important : la divergence ne suffit pas seule
        </div>
        <p>
          Une divergence CVD/Prix est un signal d&apos;alerte, pas un signal
          d&apos;entree en soi. Elle indique que la tendance est potentiellement
          fragile. Combinez-la avec un niveau technique significatif (VAH, POC,
          resistance), un{" "}
          <a href="/blog/footprint-chart-trading/">Footprint</a> montrant de
          l&apos;absorption, et un{" "}
          <a href="/blog/carnet-ordres-dom-futures/">DOM</a> avec des murs
          passifs. La convergence de ces signaux transforme la divergence en
          trade de haute probabilite.
        </p>
      </div>

      <h2 id="absorption">
        CVD et absorption : quand les institutionnels se cachent
      </h2>
      <p>
        L&apos;une des configurations CVD les plus redoutables est celle de
        l&apos;<strong>absorption silencieuse</strong> : le CVD monte fortement
        (beaucoup d&apos;acheteurs agressifs), mais le prix ne monte pas — ou
        monte tres peu. Ce paradoxe apparent revele la presence de{" "}
        <strong>vendeurs institutionnels massifs</strong> places en passif (limit
        orders) qui absorbent chaque vague d&apos;achat sans se montrer dans le
        CVD.
      </p>
      <p>
        C&apos;est l&apos;une des formes d&apos;
        <a href="/blog/absorption-order-flow/">absorption</a> les plus
        difficiles a detecter sur un graphique classique — le prix semble en
        consolidation banale. Mais sur le CVD, la signature est claire : forte
        accumulation de delta positif sans progression de prix correspondante.
        Les professionnels appellent ca un &quot;CVD divergence at extremes&quot;
        — une des configurations les plus fiables pour anticiper un
        retournement.
      </p>

      <h3>Scenario inverse : distribution silencieuse</h3>
      <p>
        Le CVD baisse (beaucoup de vendeurs agressifs), mais le prix ne baisse
        pas. Des acheteurs institutionnels en limite absorbent chaque vente.
        C&apos;est de l&apos;accumulation camouflee — les mains fortes achetent
        discretement pendant que le retail vend. Ce pattern precede souvent une
        forte hausse une fois que l&apos;accumulation est terminee.
      </p>

      <h2 id="tendance-range">CVD en tendance vs en range</h2>

      <h3>CVD en tendance haussiere saine</h3>
      <p>
        Dans une tendance haussiere convaincante, le CVD forme des sommets et
        des creux successivement plus hauts — exactement comme le prix. Chaque
        vague haussiere est portee par un delta positif croissant. Les pullbacks
        presentent un CVD qui reste positif ou se corrige legerement. C&apos;est
        la signature d&apos;une tendance &quot;propre&quot; portee par une
        conviction reelle.
      </p>

      <h3>CVD en range (equilibre)</h3>
      <p>
        Dans un marche en range, le CVD oscille autour de zero — parfois
        positif, parfois negatif, sans tendance claire. C&apos;est le reflet
        d&apos;un equilibre entre acheteurs et vendeurs agressifs. Les extremes
        du CVD (valeurs tres positives ou negatives) dans ce contexte signalent
        des momentums a court terme qui ont tendance a se retourner — excellent
        pour le scalping des extremes de range.
      </p>

      <h2 id="extremes">
        Les extremes de CVD : quand aller trop loin devient dangereux
      </h2>
      <p>
        Un CVD qui atteint un extreme absolu (valeur tres elevee ou tres basse
        par rapport aux sessions recentes) est souvent suivi d&apos;un
        retournement. Pourquoi ? Parce qu&apos;un CVD extreme signifie
        qu&apos;un tres grand nombre d&apos;ordres agressifs dans une direction
        ont ete executes — et que ces traders ont maintenant des positions
        ouvertes. Si le marche ne suit pas, ils seront forces de couvrir (stop
        loss), ce qui genere une pression opposee.
      </p>
      <p>
        C&apos;est le mecanisme de &quot;squeeze&quot; : un CVD trop haussier
        dans un contexte de resistance fort peut mener a un retournement violent
        quand les stops des acheteurs sautent en cascade.
      </p>

      <blockquote>
        <strong>Regle des professionnels :</strong> Un CVD en extreme absolu +
        absorption visible au Footprint + niveau de Value Area en resistance =
        setup de retournement prioritaire. Ces trois elements ensemble ont une
        tres haute fiabilite sur les marches futures liquides (ES, NQ, CL).
      </blockquote>

      <h2 id="sierra">Configuration Sierra Chart pour le CVD</h2>
      <p>
        Sierra Chart permet d&apos;afficher le CVD comme sous-graphique
        directement sous vos chandeliers. Voici la configuration recommandee :
      </p>
      <ul>
        <li>
          <strong>Etude :</strong> &quot;Cumulative Delta Bars&quot; ou
          &quot;Volume by Price (Cumulative Delta)&quot; selon la version
        </li>
        <li>
          <strong>Type d&apos;affichage :</strong> Ligne ou histogramme — la
          ligne est plus lisible pour les divergences
        </li>
        <li>
          <strong>Reset :</strong> Par session (recommande pour le day trading)
          ou par periode fixe
        </li>
        <li>
          <strong>Couleurs :</strong> Vert pour CVD positif, rouge pour CVD
          negatif — ou une seule couleur avec ligne de zero
        </li>
        <li>
          <strong>Combinaison recommandee :</strong> CVD en sous-graphique 1 +
          Volume delta par bougie en sous-graphique 2
        </li>
      </ul>
      <p>
        Pour une configuration detaillee, consultez notre guide{" "}
        <a href="/blog/sierra-chart-configuration/">
          Sierra Chart : configuration complete
        </a>
        . Les templates du mentorat BASS integrent le CVD avec le Footprint et
        le Volume Profile dans un setup unifie.
      </p>

      <h2 id="bass">
        Apprendre a utiliser le CVD avec BASS Trading
      </h2>
      <p>
        Le CVD est l&apos;un des outils les plus mal utilises en trading. La
        plupart des traders qui l&apos;emploient regardent juste si il monte ou
        descend — ce qui revient a regarder le prix avec un outil different. La
        vraie puissance est dans les divergences, les extremes, et la relation
        avec l&apos;absorption aux niveaux structurels.
      </p>
      <p>
        Dans le mentorat BASS Trading, le CVD est integre dans la lecture
        d&apos;order flow globale : chaque session de live trading commence par
        un calibrage du CVD (a quel niveau est-il ? Y a-t-il deja une
        divergence en cours ?). Les entrees sur les divergences CVD sont parmi
        les trades les mieux notes du programme — precision d&apos;entree et
        risk/reward optimaux.
      </p>
    </>
  );
}
