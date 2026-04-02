export default function DeltaFootprintTrading() {
  return (
    <>
      <h2 id="definition">Qu&apos;est-ce que le delta ?</h2>
      <p>
        Le marche fonctionne avec deux types d&apos;ordres : les{" "}
        <strong>ordres passifs</strong> (limit orders — ils attendent
        d&apos;etre executes) et les <strong>ordres agressifs</strong> (market
        orders — ils frappent immediatement la meilleure contrepartie
        disponible). Le delta mesure l&apos;equilibre entre ces deux types
        d&apos;agressivite.
      </p>
      <p>
        <strong>Delta = Volume Ask − Volume Bid</strong>
      </p>
      <p>
        Volume Ask = tous les contrats executes contre des vendeurs passifs
        (acheteurs agressifs qui frappent l&apos;Ask). Volume Bid = tous les
        contrats executes contre des acheteurs passifs (vendeurs agressifs qui
        frappent le Bid).
      </p>
      <p>
        Un delta <strong>positif</strong> : plus d&apos;achats agressifs que de
        ventes agressives. Des acheteurs ont decide d&apos;entrer maintenant,
        sans attendre. Un delta <strong>negatif</strong> : plus de ventes
        agressives. Des vendeurs veulent sortir ou shorter au marche. Un delta{" "}
        <strong>nul</strong> : parfait equilibre — autant d&apos;acheteurs que
        de vendeurs agressifs.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Formule</div>
        <h4>Delta = Ask Volume − Bid Volume</h4>
        <p>
          Exemple concret sur ES (S&amp;P 500 Futures) : bougie 5 minutes avec
          45 000 contrats echanges cote Ask et 38 000 cote Bid → Delta = +7 000.
          Les acheteurs agressifs ont domine cette bougie de 7 000 contrats nets.
        </p>
      </div>

      <h2 id="positif-negatif">
        Delta positif vs negatif : ce que ca signifie vraiment
      </h2>
      <p>
        L&apos;erreur classique des debutants : croire qu&apos;un delta positif
        = bougie haussiere et delta negatif = bougie baissiere. C&apos;est faux.
        Et cette incomprehension est exactement ce que les institutionnels
        exploitent.
      </p>

      <h3>Delta positif + bougie haussiere = confirmation saine</h3>
      <p>
        Le prix monte, les acheteurs agressifs dominent. La tendance est saine —
        portee par une conviction reelle. Les ordres market buy confirment le
        mouvement. C&apos;est le pattern a suivre en tendance : restez long,
        trailing stop.
      </p>

      <h3>Delta positif + bougie baissiere = signal d&apos;alerte</h3>
      <p>
        Plus d&apos;acheteurs agressifs que de vendeurs, mais le prix baisse
        quand meme. Ce paradoxe apparent s&apos;explique : des{" "}
        <strong>vendeurs passifs massifs</strong> (limit orders) absorbent chaque
        achat agressif et font descendre le prix. C&apos;est de la distribution
        institutionnelle. Les retail achetent en pensant que le marche va monter
        — les mains fortes vendent en limitant contre eux. Signal baissier
        puissant.
      </p>

      <h3>Delta negatif + bougie haussiere = signal d&apos;alerte</h3>
      <p>
        Le prix monte mais les vendeurs agressifs dominent. Des{" "}
        <strong>acheteurs passifs massifs</strong> absorbent les ventes et
        poussent le prix vers le haut. C&apos;est de l&apos;accumulation
        institutionnelle silencieuse. Signal haussier cache.
      </p>

      <h3>Delta negatif + bougie baissiere = confirmation saine</h3>
      <p>
        Le prix baisse, les vendeurs agressifs dominent. La tendance baissiere
        est portee par une conviction reelle. Restez short, trailing stop.
      </p>

      <h2 id="divergences">Les divergences delta/prix</h2>
      <p>
        Les divergences entre le delta et le prix sont parmi les signaux les
        plus puissants du{" "}
        <a href="/blog/footprint-chart-trading/">Footprint Chart</a>. Voici les
        patterns les plus importants.
      </p>

      <h3>Divergence baissiere classique</h3>
      <p>
        Le prix fait un nouveau sommet. Le delta de la bougie de sommet est plus
        faible (moins positif ou meme negatif) que le delta du sommet precedent.
        La poussee haussiere s&apos;essouffle — de moins en moins
        d&apos;acheteurs agressifs pour atteindre ces nouveaux niveaux. Signal :
        retournement ou pause significative imminente. Confirmation : bougie
        suivante avec delta negatif fort et cloture en dessous du milieu de la
        bougie de sommet.
      </p>

      <h3>Divergence haussiere classique</h3>
      <p>
        Le prix fait un nouveau creux. Le delta du creux est moins negatif que
        le creux precedent. La pression vendeuse s&apos;epuise. Des acheteurs
        passifs absorbent de plus en plus efficacement. Signal : rebond imminent.
        Confirmation : bougie avec delta positif fort et cassure du plus haut de
        la bougie de creux.
      </p>

      <div className="info-box">
        <div className="info-box-title">
          Divergences sur niveaux cles = trades premium
        </div>
        <p>
          Une divergence delta/prix sur un niveau structurel fort (VAH, VAL,
          POC, resistance horizontale) a une probabilite de reussite bien
          superieure a une divergence en plein milieu d&apos;un range. Le niveau
          donne le contexte, la divergence donne le timing. C&apos;est la
          combinaison que les traders BASS recherchent quotidiennement.
        </p>
      </div>

      <h2 id="absorbe">
        Le delta absorbe : la signature des institutionnels
      </h2>
      <p>
        Le <strong>delta absorbe</strong> est l&apos;une des configurations les
        plus importantes de l&apos;analyse delta. Elle se produit quand un fort
        delta dans une direction ne parvient pas a deplacer le prix de maniere
        correspondante.
      </p>

      <h3>Absorption vendeuse (delta positif absorbe)</h3>
      <p>
        Scenario : +8 000 delta sur une bougie de 5 minutes, mais le prix ne
        monte que de 2 ticks. Des vendeurs institutionnels en limite ont absorbe
        7 900 contrats d&apos;achats agressifs — le prix n&apos;a presque pas
        bouge malgre une pression acheteuse massive. Ce niveau est un plafond
        institutionnel. Les professionnels vendent massivement ici. Signal
        baissier de haute conviction.
      </p>

      <h3>Absorption acheteuse (delta negatif absorbe)</h3>
      <p>
        Inverse : −6 000 delta, prix monte de 1 tick. Des acheteurs
        institutionnels absorbent toutes les ventes agressives. Le plancher est
        defendu. Signal haussier de haute conviction — c&apos;est exactement ici
        que les mains fortes accumulent. Surveiller le retournement.
      </p>

      <h3>Comment quantifier l&apos;absorption</h3>
      <p>
        La regle empirique des professionnels : si le delta est superieur a 2-3x
        le mouvement de prix habituel de la session sans deplacement
        correspondant du prix, vous avez de l&apos;absorption. Sur Sierra Chart,
        vous pouvez afficher le &quot;Delta per Tick&quot; pour normaliser cette
        mesure.
      </p>

      <h2 id="delta-footprint">
        Comment le delta s&apos;affiche dans le Footprint
      </h2>
      <p>
        Dans le <a href="/blog/footprint-chart-trading/">Footprint Chart</a>, le
        delta n&apos;est pas un seul chiffre — il est decompose{" "}
        <strong>niveau par niveau</strong>. Chaque cellule du Footprint montre le
        volume Ask et Bid a ce prix precis. Le delta de chaque cellule est la
        difference.
      </p>
      <p>
        Cela permet de voir des choses qu&apos;un delta de bougie agrege masque :
      </p>
      <ul>
        <li>
          <strong>Delta positif en bas de bougie, negatif en haut</strong> : des
          acheteurs ont pousse au milieu, mais des vendeurs ont pris le dessus en
          haut. Signe de resistance dans le haut de la bougie.
        </li>
        <li>
          <strong>
            Delta negatif concentre sur 2-3 niveaux de prix
          </strong>{" "}
          : de gros vendeurs se sont concentres a ces niveaux precis — c&apos;est
          une zone de resistance technique forte.
        </li>
        <li>
          <strong>
            Delta positif massif dans le bas d&apos;une bougie baissiere
          </strong>{" "}
          : acheteurs institutionnels en embuscade dans les bas — potentiel de
          rebond fort.
        </li>
      </ul>

      <h2 id="max-delta">Max delta et retournements intrabougie</h2>
      <p>
        Le <strong>max delta</strong> est le delta maximum atteint pendant la
        formation de la bougie — pas le delta de cloture. La difference entre le
        max delta et le delta de cloture vous dit combien de pression
        directionnelle a ete <em>absorbee</em> pendant la formation de la
        bougie.
      </p>
      <p>
        Exemple : une bougie a atteint un delta de +12 000 contrats en cours de
        formation, mais cloture a +2 000. Cela signifie que 10 000 contrats de
        pression acheteuse ont ete absorbes. C&apos;est un signal de resistance
        forte dans cette bougie — les vendeurs passifs ont tenu leur position.
      </p>
      <p>
        Le max delta est disponible dans Sierra Chart sous forme d&apos;etude
        additionnelle. C&apos;est l&apos;un des outils les plus utilises par les
        traders BASS pour qualifier la force reelle d&apos;un mouvement.
      </p>

      <h2 id="vs-cvd">Delta vs CVD : quelle difference ?</h2>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Indicateur</th>
            <th>Fenetre temporelle</th>
            <th>Usage principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Delta (bougie)</td>
            <td>Une seule bougie</td>
            <td>Conviction de la bougie actuelle, divergences ponctuelles</td>
          </tr>
          <tr>
            <td>CVD (session)</td>
            <td>Toute la session</td>
            <td>Tendance de fond, divergences sur la journee entiere</td>
          </tr>
          <tr>
            <td>Delta (Footprint)</td>
            <td>Niveau de prix dans une bougie</td>
            <td>Analyse micro, absorption precise</td>
          </tr>
        </tbody>
      </table>

      <p>
        En pratique, utilisez le{" "}
        <a href="/blog/cvd-cumulative-volume-delta/">CVD</a> pour le biais
        directionnel de la session et le delta par bougie pour qualifier chaque
        signal d&apos;entree individuel. Le delta Footprint (niveau par niveau)
        est votre outil de precision pour les entrees et les stops.
      </p>

      <h2 id="seuils">Seuils et calibration du delta</h2>
      <p>
        Un delta de +500 contrats est-il significatif ? Tout depend du marche et
        de la periode. La calibration est essentielle.
      </p>
      <ul>
        <li>
          <strong>ES (S&amp;P 500 Futures) :</strong> en session principale, un
          delta significatif sur 5 min est generalement &gt;5 000 contrats. Aux
          heures creuses, 1 000 peut suffire.
        </li>
        <li>
          <strong>NQ (Nasdaq Futures) :</strong> volumes naturellement plus
          faibles. 2 000 a 3 000 contrats sur 5 min est deja significatif.
        </li>
        <li>
          <strong>CL (Crude Oil) :</strong> tres liquide en session US, delta
          significatif a partir de 500-1 000 contrats sur 5 min.
        </li>
      </ul>
      <p>
        La regle pratique : comparez le delta actuel aux deltas des bougies
        recentes. Un delta 2x a 3x superieur a la moyenne des 10 dernieres
        bougies est un signal a surveiller, quel que soit le marche.
      </p>

      <h2 id="bass">Apprendre a lire le delta avec BASS Trading</h2>
      <p>
        Le delta est l&apos;ADN de chaque bougie dans l&apos;analyse order flow.
        Dans le mentorat BASS, chaque entree est validee par le delta : est-ce
        que la pression directionnelle confirme le setup ? Y a-t-il de
        l&apos;absorption ? La divergence est-elle sur un niveau structurel ?
      </p>
      <p>
        Cette discipline — verifier le delta avant chaque entree — elimine une
        grande partie des faux signaux qui coutent des comptes aux traders
        retail. Le delta ne garantit pas le succes, mais il filtre les trades a
        faible conviction.
      </p>
    </>
  );
}
