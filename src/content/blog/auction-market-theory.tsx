export default function AuctionMarketTheory() {
  return (
    <>
      <h2 id="marche-encheres">
        Le marche comme mecanisme d&apos;encheres
      </h2>
      <p>
        La plupart des traders voient le marche comme un affrontement : haussiers
        contre baissiers, acheteurs contre vendeurs, bulls contre bears. Cette
        vision binaire est vraie a l&apos;echelle de la milliseconde. Elle est
        profondement fausse a l&apos;echelle qui compte pour prendre des
        decisions.
      </p>
      <p>
        L&apos;<strong>Auction Market Theory</strong> (AMT), developpee par J.
        Peter Steidlmayer dans les annees 1980 au Chicago Board of Trade,
        propose une autre lecture : le marche est un{" "}
        <strong>mecanisme d&apos;encheres bilaterales</strong> dont
        l&apos;objectif unique est de{" "}
        <strong>faciliter les echanges</strong>. Comme une salle des ventes, il
        cherche en permanence un prix &quot;juste&quot; — un prix ou assez
        d&apos;acheteurs et de vendeurs se rencontrent pour que les transactions
        aient lieu.
      </p>
      <p>
        Ce changement de paradigme est fondamental. Le marche ne monte pas
        &quot;parce que les acheteurs sont plus forts&quot;. Il monte parce
        qu&apos;a un niveau donne,{" "}
        <strong>les vendeurs ont refuse de vendre</strong> — le marche doit
        explorer des niveaux plus hauts pour trouver de nouveaux vendeurs
        disposes a fermer leurs positions. La direction du prix revele la
        recherche de nouveaux participants, pas la force brute d&apos;un camp.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Concept fondateur</div>
        <h4>
          Le prix ne fait qu&apos;une chose : faciliter les echanges
        </h4>
        <p>
          Le marche monte pour trouver des vendeurs. Il baisse pour trouver des
          acheteurs. Quand il trouve suffisamment des deux, il s&apos;arrete et
          oscille — c&apos;est l&apos;equilibre. Quand il n&apos;en trouve pas
          assez, il continue a explorer — c&apos;est le desequilibre. Tout le
          reste n&apos;est que variation sur ce theme.
        </p>
      </div>

      <h2 id="acceptation-rejet">
        Acceptation vs Rejet de prix : la cle de lecture
      </h2>
      <p>
        Le concept le plus operationnel de l&apos;AMT est la distinction entre{" "}
        <strong>acceptation</strong> et <strong>rejet</strong> d&apos;un niveau
        de prix.
      </p>

      <h3>L&apos;acceptation</h3>
      <p>
        Un prix est <em>accepte</em> quand le marche y passe du temps — quand il
        y a suffisamment d&apos;acheteurs et de vendeurs a ce niveau pour que
        les echanges durent. Visuellement : le marche consolide, oscille, forme
        une Value Area autour de ce prix. Le{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a>{" "}
        affichera de nombreux TPO. Le{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a> montrera un HVN
        (High Volume Node). L&apos;acceptance est une signature de consensus —
        les deux camps acceptent que ce prix est &quot;correct&quot;.
      </p>

      <h3>Le rejet</h3>
      <p>
        Un prix est <em>rejete</em> quand le marche y passe tres peu de temps —
        il y arrive, ne trouve pas suffisamment de contrepartie, et repart.
        Visuellement : un long wick, une tail dans le profil Market Profile, un
        LVN dans le Volume Profile, un spike de volume sans suite. Le rejet est
        une signature de desaccord — l&apos;un des camps refuse d&apos;accepter
        ce prix et le marche doit repartir chercher ailleurs.
      </p>

      <div className="info-box">
        <div className="info-box-title">Regle d&apos;or AMT</div>
        <p>
          Apprenez a distinguer les bougies de rejet (longs wicks, retours
          rapides) des bougies d&apos;acceptance (corps larges, consolidation au
          niveau). Les premieres indiquent des retournements potentiels. Les
          secondes confirment la continuation. Cette distinction seule ameliore
          radicalement la qualite de vos entrees.
        </p>
      </div>

      <h2 id="equilibre">
        Equilibre et desequilibre : les deux etats du marche
      </h2>
      <p>
        Comprendre dans quel etat se trouve le marche a un instant donne est la
        competence centrale de l&apos;AMT. Les deux etats sont fondamentalement
        differents et necessitent des approches de trading opposees.
      </p>

      <h3>Le marche en equilibre (Balancing)</h3>
      <p>
        Un marche en equilibre a trouve son prix juste. Il oscille dans une
        range bien definie, alternant entre VAH et VAL. Les deux camps sont
        presents et actifs. Le volume est distribue uniformement dans la Value
        Area, creant un profil en cloche (distribution normale).
      </p>
      <p>
        <strong>Comment trader l&apos;equilibre :</strong> vendre les extremes
        hauts (VAH, resistances), acheter les extremes bas (VAL, supports), avec
        pour objectif le POC central. Les probabilites favorisent le retour vers
        le centre — c&apos;est la <em>mean reversion</em> dans son expression la
        plus pure.
      </p>

      <h3>Le marche en desequilibre (Trending)</h3>
      <p>
        Un marche en desequilibre explore des nouveaux territoires. Un camp
        domine, et le marche cree de nouvelles Value Areas successives, chacune
        legerement decalee dans la direction dominante. Le profil est allonge,
        asymetrique — une serie de &quot;D&quot; empiles en haussier, de
        &quot;P&quot; en baissier.
      </p>
      <p>
        <strong>Comment trader le desequilibre :</strong> suivre la tendance,
        acheter les retours dans la VA lors des pullbacks, ne pas vendre contre
        la tendance. En desequilibre, la mean reversion tue les comptes — le
        marche cherche un NOUVEL equilibre plus haut (ou plus bas), pas
        l&apos;ancien.
      </p>

      <blockquote>
        <strong>L&apos;erreur classique :</strong> trader en mode mean reversion
        dans un marche en desequilibre. La Value Area monte, le trader vend au
        VAH, le marche n&apos;inverse jamais, le stop saute. Reconnaitre
        l&apos;etat du marche avant de choisir votre approche est plus important
        que n&apos;importe quelle technique d&apos;entree.
      </blockquote>

      <h2 id="value-area">
        La Value Area et l&apos;efficience du marche
      </h2>
      <p>
        Dans le cadre de l&apos;AMT, la <strong>Value Area</strong> (70% du
        volume ou des TPO) represente la{" "}
        <em>zone d&apos;efficience</em> du marche — le territoire ou les deux
        camps estiment que le prix est &quot;juste&quot;. Sortir de la Value
        Area est une inefficience temporaire que le marche cherche a corriger.
      </p>

      <h3>Le principe du retour a la valeur</h3>
      <p>
        Statistiquement, un marche qui sort de sa Value Area revient dans cette
        zone 70 a 80% du temps (selon les etudes sur les marches futures). Ce
        n&apos;est pas un hasard — c&apos;est la mecanique de l&apos;enchere :
        sortir de la VA, c&apos;est aller a un prix que la majorite des
        participants juge &quot;trop cher&quot; ou &quot;trop bon marche&quot;.
        Le consensus rappelle le prix vers la valeur.
      </p>

      <h3>Quand le retour a la valeur echoue</h3>
      <p>
        Quand le marche sort de la VA et <em>n&apos;y revient pas</em> — quand
        il accepte le nouveau niveau (via de l&apos;activite, du volume, des TPO
        dans la nouvelle zone) — c&apos;est le signal d&apos;un vrai changement
        de Value Area. Le marche a trouve un nouveau consensus. C&apos;est le
        moment ou les traders institutionnels repositionnent leurs books. Sur le{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a>, vous verrez un
        nouveau HVN se former au niveau du breakout.
      </p>

      <h2 id="types-journees">Les types de journees AMT</h2>
      <p>
        L&apos;AMT a ete a l&apos;origine du concept de &quot;types de
        journees&quot; — une classification des comportements quotidiens du
        marche qui permet d&apos;anticiper les probabilites du reste de la
        session.
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Caracteristique</th>
            <th>Approche</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal</td>
            <td>
              Range etablie dans l&apos;Initial Balance, extensions moderees
            </td>
            <td>Mean reversion dans la range</td>
          </tr>
          <tr>
            <td>Normal Variation</td>
            <td>Extension d&apos;un seul cote de l&apos;IB</td>
            <td>Trend following du cote de l&apos;extension</td>
          </tr>
          <tr>
            <td>Trend Day</td>
            <td>
              Marche en tendance toute la journee, peu de rotation
            </td>
            <td>Suivre la tendance, ne pas vendre contre</td>
          </tr>
          <tr>
            <td>Double Distribution</td>
            <td>Deux VA distinctes separees par un LVN</td>
            <td>Attendre la direction entre les deux VA</td>
          </tr>
          <tr>
            <td>Non-Trend</td>
            <td>Range etroite, faible volume, peu de mouvement</td>
            <td>Eviter ou scalper les extremes</td>
          </tr>
        </tbody>
      </table>

      <p>
        La cle pour identifier le type de journee : l&apos;
        <strong>Initial Balance</strong> (IB) — le range des premieres 30
        minutes a 1 heure de trading. Une IB large suggere une journee normale
        ou de range. Une IB etroite avec un breakout fort indique un potential
        Trend Day.{" "}
        <strong>
          Adapter sa strategie au type de journee est plus important
          qu&apos;avoir le meilleur setup technique.
        </strong>
      </p>

      <h2 id="rotation">
        Rotation et tendance : lire le flux directionnel
      </h2>
      <p>
        Dans le cadre AMT, la tendance se manifeste par des{" "}
        <strong>rotations directionnelles</strong> — chaque rotation emporte le
        prix vers un niveau plus haut (haussier) ou plus bas (baissier) que la
        precedente.
      </p>
      <p>
        Une rotation haussiere en cours : le marche monte depuis le VAL, teste
        le VAH, repart legerement sous le VAH (pullback), puis repart a la
        hausse — vers un nouveau plus haut et une nouvelle VA plus haute. Chaque
        creux de pullback est plus haut que le precedent. C&apos;est le pattern
        des tendances saines en AMT.
      </p>
      <p>
        La rupture du pattern (un pullback qui revient sous le VAL precedent)
        est le premier signal que la tendance s&apos;essouffle. Combine avec un{" "}
        <a href="/blog/footprint-chart-trading/">Footprint</a> montrant de
        l&apos;absorption aux nouveaux hauts, c&apos;est une alerte de
        retournement potentiel.
      </p>

      <h2 id="application">Applications pratiques de l&apos;AMT</h2>
      <p>
        L&apos;AMT n&apos;est pas qu&apos;une theorie — elle se traduit en
        regles de trading concretes que les professionnels appliquent
        quotidiennement.
      </p>

      <h3>Regle 1 : Identifier l&apos;etat avant d&apos;entrer</h3>
      <p>
        Avant chaque session, posez-vous la question : le marche est-il en
        equilibre ou en desequilibre ? Regardez le profil composite des 5
        dernieres sessions. Un profil en cloche = equilibre (mean reversion). Un
        profil allonge asymetrique = desequilibre (trend following). Cette
        decision binaire conditionne tout le reste.
      </p>

      <h3>Regle 2 : Les tails comme zones d&apos;entree</h3>
      <p>
        Une tail (buying tail en bas, selling tail en haut) dans le profil
        Market Profile est une zone de rejet fort. Les institutionnels placent
        souvent des ordres limites a ces niveaux pour les retests. Sur le{" "}
        <a href="/blog/footprint-chart-trading/">Footprint Chart</a>, un retest
        d&apos;une tail avec absorption confirme l&apos;entree.
      </p>

      <h3>Regle 3 : Le POC comme aimant</h3>
      <p>
        Dans un marche en equilibre, le POC est l&apos;objectif naturel de tout
        mouvement. Si vous etes a 20 ticks du POC, ne vous attendez pas a ce que
        le marche s&apos;arrete avant d&apos;y avoir touche. Placez vos targets
        sur le POC, pas sur des niveaux arbitraires.
      </p>

      <h3>Regle 4 : Valider les breakouts par l&apos;acceptance</h3>
      <p>
        Un breakout sans acceptance est un piege. Un vrai breakout doit etre
        suivi d&apos;au moins 2-3 periodes de trading au-dela de la VA — le
        marche doit &quot;rester&quot; a ces nouveaux niveaux. Si le prix
        revient dans la VA en moins d&apos;une bougie, c&apos;est un faux
        breakout. Ce pattern est l&apos;un des plus trades par les
        institutionnels.
      </p>

      <h2 id="outils">
        AMT et Volume Profile : une alliance naturelle
      </h2>
      <p>
        L&apos;AMT est la theorie. Le{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a> et le{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a> sont ses outils
        de visualisation. Ensemble, ils forment un systeme coherent de lecture du
        marche.
      </p>
      <p>
        Le Market Profile traduit l&apos;AMT en lettres TPO :
        l&apos;equilibre devient un profil en cloche, le desequilibre devient un
        profil allonge, les zones de rejet deviennent des tails visibles. Le
        Volume Profile ajoute la dimension financiere : la ou l&apos;AMT dit
        &quot;le marche a accepte ce niveau&quot;, le Volume Profile dit
        &quot;voici combien d&apos;argent s&apos;y est echange&quot;.
      </p>
      <p>
        Pour completer l&apos;analyse, le{" "}
        <a href="/blog/footprint-chart-trading/">Footprint Chart</a> apporte la
        dimension micro : a chaque niveau d&apos;acceptance ou de rejet
        identifie par l&apos;AMT, le Footprint revele la mecanique
        sous-jacente —{" "}
        <a href="/blog/absorption-order-flow/">absorption</a>,{" "}
        <a href="/blog/imbalance-footprint/">desequilibres</a>,{" "}
        <a href="/blog/delta-footprint-trading/">delta</a>. C&apos;est
        l&apos;union du macro et du micro.
      </p>

      <h2 id="bass">Apprendre l&apos;AMT avec BASS Trading</h2>
      <p>
        L&apos;Auction Market Theory est le socle conceptuel de toute la methode
        BASS Trading. Avant d&apos;apprendre a lire un Footprint ou a utiliser
        Sierra Chart, vous devez comprendre <em>pourquoi</em> le marche se
        comporte comme il le fait. L&apos;AMT repond a cette question.
      </p>
      <p>
        Dans le mentorat, chaque morning briefing commence par une lecture AMT
        de la session precedente : quel etait l&apos;etat du marche ? Equilibre
        ou desequilibre ? Quel type de journee s&apos;est developpe ? Y a-t-il
        eu acceptance ou rejet aux niveaux cles ? Ce rituel quotidien construit
        progressivement un &quot;oeil&quot; qui voit le marche differemment.
      </p>
    </>
  );
}
