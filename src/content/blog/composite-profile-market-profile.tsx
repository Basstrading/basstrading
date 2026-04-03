export default function CompositeProfile() {
  return (
    <>
      <p>
        Un session profile vous montre ce qui s&apos;est passe aujourd&apos;hui.
        Mais le marche ne repart pas de zero chaque matin. Les niveaux
        d&apos;hier, de la semaine derniere et du mois precedent continuent
        d&apos;influencer le comportement du prix. Le{" "}
        <strong>Composite Profile</strong> est l&apos;outil qui capture cette
        memoire multi-sessions — il agrege plusieurs journees de donnees en un
        seul profil pour reveler la <strong>structure profonde</strong> du
        marche.
      </p>

      <p>
        Si vous tradez les Futures et que vous vous limitez au profil de la
        session en cours, vous manquez l&apos;essentiel. Les institutions ne
        raisonnent pas en journees isolees. Elles raisonnent en{" "}
        <strong>cycles de valeur</strong> — des phases ou le marche construit
        une zone d&apos;acceptation, puis migre vers une nouvelle zone. Le
        Composite Profile rend ces cycles visibles.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cle</div>
        <h4>Le Composite Profile revele ce que les sessions isolees cachent</h4>
        <p>
          Un niveau de prix peut sembler anodin sur le profil d&apos;une seule
          session. Mais quand ce meme niveau apparait comme le POC d&apos;un
          composite de 20 jours, il porte un poids considerable. Le Composite
          Profile transforme le bruit quotidien en signal structurel.
        </p>
      </div>

      <hr />

      <h2 id="definition">Qu&apos;est-ce que le Composite Profile ?</h2>

      <p>
        Le <strong>Composite Profile</strong> (aussi appele{" "}
        <em>Composite Value Area</em> ou <em>Multi-Session Profile</em>) est un{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a> qui
        combine les donnees TPO ou volume de{" "}
        <strong>plusieurs sessions</strong> en un seul graphique. Au lieu de
        voir un profil par jour, vous obtenez un profil agrege qui montre ou le
        marche a passe le plus de temps sur une periode etendue.
      </p>

      <p>
        Concretement, un Composite Profile de 20 sessions prend les TPO (ou les
        volumes) de chaque journee et les empile sur un meme axe de prix. Le
        resultat est une distribution qui revele :
      </p>

      <ul>
        <li>
          <strong>Le POC composite</strong> — le prix ou le marche a concentre
          le plus d&apos;activite sur la periode
        </li>
        <li>
          <strong>La Value Area composite</strong> — la zone contenant 70% de
          l&apos;activite totale
        </li>
        <li>
          <strong>Les extremes</strong> — les niveaux de prix ou le marche a ete
          rejete a plusieurs reprises
        </li>
        <li>
          <strong>Les zones de faible volume</strong> — les niveaux que le
          marche a traverses rapidement, qui peuvent agir comme support ou
          resistance
        </li>
      </ul>

      <p>
        Le concept a ete formalise par <strong>Jim Dalton</strong> dans{" "}
        <em>Markets in Profile</em>, ou il insiste sur l&apos;importance de
        comprendre le marche a travers des{" "}
        <strong>horizons temporels multiples</strong>. Le Composite Profile est
        l&apos;implementation pratique de cette vision.
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
          TPO vs Volume
        </div>
        <p>
          Un Composite Profile peut etre construit avec des TPO (temps passe a
          chaque prix) ou avec du volume ({" "}
          <a href="/blog/volume-profile-guide/">Volume Profile</a>). Les deux
          approches sont valides et complementaires. Les TPO mesurent
          l&apos;acceptation temporelle, le volume mesure la conviction
          financiere. Dans la pratique, beaucoup de traders utilisent le volume
          composite car il reflete directement l&apos;engagement des
          participants.
        </p>
      </div>

      <hr />

      <h2 id="vs-session">Session Profile vs Composite Profile</h2>

      <p>
        La confusion entre Session Profile et Composite Profile est
        l&apos;erreur la plus frequente chez les traders qui decouvrent le
        Market Profile. Les deux outils repondent a des questions{" "}
        <strong>fondamentalement differentes</strong>.
      </p>

      <p>
        Le <strong>Session Profile</strong> repond a la question : &quot;Que
        s&apos;est-il passe aujourd&apos;hui ?&quot; Il montre la distribution
        intra-journaliere — l&apos;
        <a href="/blog/types-journees-market-profile/">
          type de journee
        </a>
        , l&apos;Initial Balance, les extensions, les rotations.
      </p>

      <p>
        Le <strong>Composite Profile</strong> repond a la question : &quot;Ou
        se situe la valeur a moyen terme ?&quot; Il montre la structure
        multi-sessions — les zones d&apos;equilibre, les migrations de valeur,
        les niveaux cles qui persistent dans le temps.
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Critere</th>
            <th>Session Profile</th>
            <th>Composite Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Periode</td>
            <td>1 session (RTH ou 24h)</td>
            <td>3 a 65+ sessions</td>
          </tr>
          <tr>
            <td>Question cle</td>
            <td>Que fait le marche aujourd&apos;hui ?</td>
            <td>Ou est la valeur a moyen terme ?</td>
          </tr>
          <tr>
            <td>Utilite principale</td>
            <td>Timing d&apos;entree intra-day</td>
            <td>Biais directionnel et niveaux cles</td>
          </tr>
          <tr>
            <td>POC</td>
            <td>Prix le plus trade de la session</td>
            <td>Prix le plus trade sur N sessions</td>
          </tr>
          <tr>
            <td>Value Area</td>
            <td>Zone de juste valeur du jour</td>
            <td>Zone de juste valeur multi-jours</td>
          </tr>
          <tr>
            <td>Reactivite</td>
            <td>Tres reactive aux mouvements du jour</td>
            <td>Stable, change lentement</td>
          </tr>
          <tr>
            <td>Lecture</td>
            <td>Micro-structure</td>
            <td>Macro-structure</td>
          </tr>
        </tbody>
      </table>

      <p>
        L&apos;analogie la plus parlante : le Session Profile est une{" "}
        <strong>photo</strong>, le Composite Profile est un{" "}
        <strong>timelapse</strong>. La photo capture un instant. Le timelapse
        revele le mouvement d&apos;ensemble.
      </p>

      <p>
        En pratique, les traders professionnels utilisent les deux
        simultanement. Le Composite Profile definit le{" "}
        <strong>contexte</strong> et le <strong>biais directionnel</strong>. Le
        Session Profile fournit le <strong>timing</strong> et les{" "}
        <strong>points d&apos;entree</strong>. Ignorer l&apos;un des deux,
        c&apos;est trader avec un oeil ferme.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Principe operationnel</div>
        <h4>Le composite donne le biais, la session donne le trigger</h4>
        <p>
          Si le prix est en dessous de la Value Area composite mais au-dessus du
          POC de session, vous savez que le marche est sous-evalue a moyen
          terme mais accepte a court terme. Ce type de lecture croisee
          n&apos;est possible que si vous combinez les deux horizons.
        </p>
      </div>

      <hr />

      <h2 id="construction">Comment construire un Composite Profile</h2>

      <p>
        La construction d&apos;un Composite Profile suit une logique simple,
        mais les choix que vous faites a chaque etape impactent directement la
        qualite du signal obtenu.
      </p>

      <h3>Etape 1 : Choisir la periode</h3>

      <p>
        La premiere decision est le nombre de sessions a inclure. Ce choix
        depend de votre horizon de trading et de la question a laquelle vous
        cherchez a repondre. Nous detaillerons les periodes standard dans la
        section <a href="#multi-day">analyse multi-jours</a>.
      </p>

      <h3>Etape 2 : Definir le type de session</h3>

      <p>
        Vous devez choisir entre les sessions <strong>RTH</strong> (Regular
        Trading Hours — heures regulieres) et les sessions{" "}
        <strong>ETH/Globex</strong> (Extended Trading Hours — 24h). Sur les
        Futures americains :
      </p>

      <ul>
        <li>
          <strong>RTH</strong> : 9h30 - 16h15 (heure de New York) pour le
          S&amp;P 500 (ES), 8h30 - 15h00 pour les Treasuries (ZB, ZN)
        </li>
        <li>
          <strong>ETH</strong> : session complete incluant le Globex (overnight)
        </li>
      </ul>

      <p>
        La recommandation de Jim Dalton est claire : utilisez les{" "}
        <strong>sessions RTH</strong> pour construire vos composites. La raison
        est que le volume et la participation institutionnelle sont concentres
        pendant les heures regulieres. Le Globex contient souvent du bruit lie
        aux sessions asiatiques et europeennes qui peut diluer les niveaux
        significatifs.
      </p>

      <h3>Etape 3 : Choisir entre TPO et Volume</h3>

      <p>
        Un Composite TPO empile les lettres de chaque session sur un seul
        graphique. Un Composite Volume empile les histogrammes de volume de
        chaque session. Les deux methodes produisent des resultats similaires
        mais pas identiques :
      </p>

      <ul>
        <li>
          <strong>Composite TPO</strong> — Donne plus de poids au temps. Un
          marche qui reste 4 heures a un prix aura plus de TPO qu&apos;un flash
          crash qui genere du volume enorme en 5 minutes.
        </li>
        <li>
          <strong>Composite Volume</strong> — Donne plus de poids a la
          conviction. Un niveau ou 50 000 contrats se sont echanges porte plus
          de poids qu&apos;un niveau visite longtemps mais avec peu de volume.
        </li>
      </ul>

      <p>
        Pour la plupart des traders, le{" "}
        <strong>Composite Volume Profile</strong> est plus pertinent car il
        reflete l&apos;engagement reel du capital. Cependant, le Composite TPO
        reste precieux pour identifier les zones d&apos;acceptation pure.
      </p>

      <h3>Etape 4 : Identifier les niveaux cles</h3>

      <p>
        Une fois le composite construit, identifiez systematiquement :
      </p>

      <ul>
        <li>
          Le <strong>POC composite</strong> — le niveau de prix le plus trade
        </li>
        <li>
          La <strong>VAH composite</strong> — la limite haute de la Value Area
        </li>
        <li>
          La <strong>VAL composite</strong> — la limite basse de la Value Area
        </li>
        <li>
          Les <strong>HVN</strong> (High Volume Nodes) — les pics secondaires du
          profil
        </li>
        <li>
          Les <strong>LVN</strong> (Low Volume Nodes) — les creux du profil, ou
          le volume est faible
        </li>
        <li>
          Les <strong>Naked POC</strong> — les POC de sessions individuelles qui
          n&apos;ont pas ete retestes
        </li>
      </ul>

      <hr />

      <h2 id="value-area">Lire la Value Area composite</h2>

      <p>
        La <strong>Value Area composite</strong> est la zone contenant 70% de
        l&apos;activite (TPO ou volume) sur la periode du composite. C&apos;est
        le coeur de l&apos;analyse multi-sessions — elle vous dit ou le marche
        considere que le prix est &quot;juste&quot; a moyen terme.
      </p>

      <h3>Interpretation de la position du prix</h3>

      <p>
        La relation entre le prix actuel et la Value Area composite fournit un
        biais directionnel immediat :
      </p>

      <ul>
        <li>
          <strong>Prix dans la Value Area</strong> — Le marche est en equilibre.
          Attendez-vous a des rotations. Favorisez le mean reversion vers le
          POC composite. La strategie dominante est le fade aux extremes de la
          VA.
        </li>
        <li>
          <strong>Prix au-dessus de la VAH</strong> — Le marche tente de migrer
          vers une valeur plus haute. Si le prix reste au-dessus de la VAH avec
          du volume, c&apos;est un signal haussier. Les anciens niveaux de la
          VA deviennent des supports potentiels.
        </li>
        <li>
          <strong>Prix en dessous de la VAL</strong> — Le marche tente de
          migrer vers une valeur plus basse. Si le prix reste en dessous de la
          VAL avec du volume, c&apos;est un signal baissier.
        </li>
      </ul>

      <h3>Migration de la Value Area</h3>

      <p>
        L&apos;un des signaux les plus puissants du Composite Profile est la{" "}
        <strong>migration de la Value Area</strong>. Quand la Value Area
        composite se deplace — meme lentement — elle indique un changement de
        perception de la valeur par les participants.
      </p>

      <p>
        Selon l&apos;
        <a href="/blog/auction-market-theory/">Auction Market Theory</a>, le
        marche alterne entre phases d&apos;equilibre et de desequilibre. Une
        Value Area composite qui migre vers le haut signifie que le marche
        construit progressivement de la valeur a des prix superieurs — les
        acheteurs sont prets a payer plus cher, et les vendeurs acceptent de
        vendre plus haut.
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
          Signal de migration
        </div>
        <p>
          Pour confirmer une migration, verifiez que le POC composite se deplace
          dans la meme direction que la Value Area. Si la VA monte mais le POC
          reste fixe, le mouvement manque de conviction. Quand les deux migrent
          ensemble, le signal est fort — le marche accepte activement une
          nouvelle zone de valeur.
        </p>
      </div>

      <h3>Value Area overlap</h3>

      <p>
        Comparez la Value Area composite actuelle avec celle de la periode
        precedente. Le degre de chevauchement (overlap) vous indique si le
        marche est en transition ou en continuation :
      </p>

      <ul>
        <li>
          <strong>Overlap important</strong> (&gt;70%) — Le marche reste dans la
          meme zone de valeur. Equilibre. Favorisez les trades de rotation.
        </li>
        <li>
          <strong>Overlap partiel</strong> (30-70%) — Le marche commence a
          migrer. Soyez attentif a la direction du deplacement.
        </li>
        <li>
          <strong>Pas d&apos;overlap</strong> (&lt;30%) — Le marche a migre
          significativement. Une nouvelle zone de valeur se forme. C&apos;est
          souvent la consequence d&apos;un catalyseur fondamental (FOMC, NFP,
          earnings).
        </li>
      </ul>

      <hr />

      <h2 id="naked-poc">Naked POC : les niveaux non testes</h2>

      <p>
        Un <strong>Naked POC</strong> (nPOC) est le Point of Control d&apos;une
        session passee qui n&apos;a jamais ete revisite par le prix lors des
        sessions suivantes. C&apos;est l&apos;un des concepts les plus
        puissants du Composite Profile — et l&apos;un des moins compris.
      </p>

      <h3>Pourquoi les Naked POC attirent le prix</h3>

      <p>
        Le POC d&apos;une session represente le prix ou l&apos;activite a ete
        maximale — c&apos;est la ou le marche a trouve le plus d&apos;accord
        entre acheteurs et vendeurs. Quand le prix s&apos;eloigne de ce niveau
        sans y revenir, il laisse derriere lui un{" "}
        <strong>aimant non resolu</strong>.
      </p>

      <p>
        La theorie derriere les Naked POC est ancree dans l&apos;
        <a href="/blog/auction-market-theory/">Auction Market Theory</a> : le
        marche est un processus d&apos;encheres qui cherche constamment a
        revenir aux zones d&apos;equilibre. Un POC non teste represente une
        zone d&apos;equilibre passee que le marche &quot;doit&quot; revisiter
        pour completer le processus d&apos;encheres.
      </p>

      <p>
        En pratique, les Naked POC fonctionnent comme des{" "}
        <strong>niveaux magnets</strong>. Le prix a une tendance statistiquement
        significative a revisiter ces niveaux — souvent dans les jours ou
        semaines qui suivent. Plus un Naked POC est ancien, plus il est
        significatif quand le prix s&apos;en approche.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Regle operationnelle</div>
        <h4>Les Naked POC recents ont plus de poids</h4>
        <p>
          Un Naked POC datant de 2-3 sessions a plus de probabilites d&apos;etre
          revisite rapidement qu&apos;un nPOC vieux de 30 sessions. Cependant,
          les nPOC anciens qui survivent longtemps deviennent des niveaux de
          reference extremement puissants quand le prix s&apos;en approche
          finalement. Marquez les deux types sur vos graphiques.
        </p>
      </div>

      <h3>Comment utiliser les Naked POC</h3>

      <ul>
        <li>
          <strong>Comme cible de profit</strong> — Si vous etes en position et
          qu&apos;un Naked POC se trouve devant le prix, c&apos;est un objectif
          naturel. Le prix a de fortes chances de s&apos;y arreter ou au moins
          d&apos;y ralentir.
        </li>
        <li>
          <strong>Comme zone de support/resistance</strong> — Un Naked POC peut
          agir comme support ou resistance lorsque le prix le revisite pour la
          premiere fois. Observez la reaction du prix a ce niveau.
        </li>
        <li>
          <strong>Comme filtre de direction</strong> — Si plusieurs Naked POC
          se trouvent au-dessus du prix actuel, cela suggere un biais haussier
          a moyen terme. Le marche a du &quot;travail inacheve&quot; au-dessus.
        </li>
      </ul>

      <h3>Gestion des Naked POC sur le Composite</h3>

      <p>
        Sur un Composite Profile, les Naked POC apparaissent comme des niveaux
        au sein du profil qui correspondent aux POC de sessions individuelles.
        La bonne pratique est de les marquer comme des lignes horizontales sur
        votre graphique et de les mettre a jour quotidiennement : des qu&apos;un
        POC est &quot;touche&quot; par le prix, il n&apos;est plus naked et
        peut etre retire de votre liste.
      </p>

      <hr />

      <h2 id="multi-day">Analyse multi-jours : 3, 5, 20, 65 sessions</h2>

      <p>
        Le choix du nombre de sessions dans votre Composite Profile n&apos;est
        pas arbitraire. Chaque horizon temporel revele une couche differente de
        la structure du marche. Les traders professionnels utilisent
        generalement <strong>plusieurs composites simultanement</strong> pour
        obtenir une lecture complete.
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Composite</th>
            <th>Horizon</th>
            <th>Usage principal</th>
            <th>Profil type de trader</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3 sessions</td>
            <td>Court terme</td>
            <td>Contexte immediat, confirmation de breakout</td>
            <td>Day trader, scalper</td>
          </tr>
          <tr>
            <td>5 sessions</td>
            <td>Hebdomadaire</td>
            <td>Value Area de la semaine, biais weekly</td>
            <td>Day trader, swing court</td>
          </tr>
          <tr>
            <td>20 sessions</td>
            <td>Mensuel</td>
            <td>Tendance de fond, niveaux institutionnels</td>
            <td>Swing trader</td>
          </tr>
          <tr>
            <td>65 sessions</td>
            <td>Trimestriel</td>
            <td>Structure macro, zones d&apos;accumulation majeure</td>
            <td>Position trader</td>
          </tr>
        </tbody>
      </table>

      <h3>Composite 3 sessions</h3>

      <p>
        Le composite de 3 sessions est le plus reactif. Il capture la dynamique
        des 3 derniers jours et est particulierement utile pour evaluer si le
        marche est en train de construire de la valeur ou de migrer. Utilisez-le
        pour :
      </p>

      <ul>
        <li>
          Confirmer un breakout — si le prix sort de la VA du composite 3
          jours avec du volume, le mouvement est probablement valide
        </li>
        <li>
          Identifier les rotations de court terme — un POC stable sur 3 jours
          indique un equilibre
        </li>
        <li>
          Evaluer la force d&apos;un mouvement recent — la forme du profil
          (large vs etroit) revele si le marche construit ou rejette
        </li>
      </ul>

      <h3>Composite 5 sessions</h3>

      <p>
        Le composite de 5 sessions correspond a une semaine de trading. C&apos;est
        le composite le plus utilise par les day traders. La Value Area
        hebdomadaire est un repere puissant car elle aligne la lecture technique
        avec le cycle naturel du marche (lundi ouverture, vendredi cloture,
        rebalancing hebdomadaire des fonds).
      </p>

      <p>
        Chaque lundi, comparez la position du prix par rapport a la VA
        composite de la semaine precedente. Si le prix ouvre a l&apos;interieur,
        le marche est en continuation. S&apos;il ouvre en dehors, une migration
        est peut-etre en cours.
      </p>

      <h3>Composite 20 sessions</h3>

      <p>
        Le composite de 20 sessions (environ un mois) est la reference pour
        identifier la <strong>tendance de fond</strong>. Un POC de 20 sessions
        est un niveau que les institutions connaissent et respectent. C&apos;est
        souvent la que les algorithmes de mean reversion sont calibres.
      </p>

      <p>
        La Value Area du composite 20 sessions definit le{" "}
        <strong>terrain de jeu du mois</strong>. Tant que le prix reste a
        l&apos;interieur, le marche est en equilibre mensuel. Une sortie de
        cette VA avec acceptation (le prix reste en dehors pendant 2+ sessions)
        signale un changement de regime.
      </p>

      <h3>Composite 65 sessions</h3>

      <p>
        Le composite de 65 sessions (un trimestre) est l&apos;horizon
        strategique. Il filtre tout le bruit et ne montre que les niveaux
        structurellement importants. Ce composite est surtout utile pour :
      </p>

      <ul>
        <li>
          Identifier les zones d&apos;accumulation/distribution majeures
        </li>
        <li>
          Placer des stops de position trading a des niveaux significatifs
        </li>
        <li>
          Comprendre le contexte macro dans lequel s&apos;inscrit
          l&apos;action du prix quotidienne
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
          Approche multi-composites
        </div>
        <p>
          La methode la plus efficace est de superposer les composites. Affichez
          le composite 5 sessions et le composite 20 sessions simultanement.
          Quand les deux Value Areas convergent, le niveau est extremement fort.
          Quand elles divergent, le marche est en transition — un signal
          d&apos;alerte pour ajuster votre taille de position.
        </p>
      </div>

      <hr />

      <h2 id="strategies">3 strategies basees sur le Composite</h2>

      <p>
        Voici trois strategies operationnelles qui exploitent directement les
        niveaux du Composite Profile. Chacune repose sur un principe different
        de l&apos;
        <a href="/blog/auction-market-theory/">Auction Market Theory</a>.
      </p>

      <h3>Strategie 1 : Fade de la VAH/VAL composite</h3>

      <p>
        C&apos;est la strategie de mean reversion la plus classique basee sur le
        Composite Profile. Le principe est simple : quand le prix atteint un
        extreme de la Value Area composite, vous tradez le retour vers le POC.
      </p>

      <ul>
        <li>
          <strong>Setup long</strong> — Le prix touche la VAL composite. Vous
          observez un rejet (par exemple via le{" "}
          <a href="/blog/volume-profile-guide/">Volume Profile</a> intra-day qui
          montre un bid fort). Vous entrez long avec un objectif au POC
          composite.
        </li>
        <li>
          <strong>Setup short</strong> — Le prix touche la VAH composite. Vous
          observez un rejet avec absorption des acheteurs. Vous entrez short
          avec un objectif au POC composite.
        </li>
        <li>
          <strong>Stop</strong> — Au-dela de la VAH/VAL + un filtre (par
          exemple 2-3 ticks au-dela pour eviter les stop runs).
        </li>
        <li>
          <strong>Condition d&apos;invalidation</strong> — Si le prix accepte
          au-dela de la VA (reste 30+ minutes en dehors), la strategie est
          invalide. Sortez immediatement.
        </li>
      </ul>

      <div className="key-concept">
        <div className="key-concept-label">Filtre critique</div>
        <h4>Ne fadez jamais contre la tendance de fond</h4>
        <p>
          Si le composite 20 sessions montre une migration haussiere, ne shortez
          pas la VAH du composite 5 sessions. Vous seriez contre la tendance de
          fond. Le fade de la VA composite fonctionne mieux en marche equilibre
          — quand le composite 20 sessions montre un profil large et symetrique.
        </p>
      </div>

      <h3>Strategie 2 : Breakout de la Value Area composite</h3>

      <p>
        Cette strategie est l&apos;inverse de la premiere. Quand le marche sort
        de la Value Area composite <strong>avec conviction</strong>, vous
        suivez le mouvement. La cle est la confirmation — un breakout sans
        volume est un faux breakout.
      </p>

      <ul>
        <li>
          <strong>Signal d&apos;entree</strong> — Le prix casse la VAH ou VAL
          composite et construit de la valeur en dehors (les TPO s&apos;accumulent
          au-dessus de la VAH ou en dessous de la VAL).
        </li>
        <li>
          <strong>Confirmation</strong> — Le{" "}
          <a href="/blog/volume-profile-guide/">Volume Profile</a> intra-day
          montre un POC qui se forme en dehors de la VA composite. Le delta
          cumulatif confirme la direction.
        </li>
        <li>
          <strong>Objectif</strong> — Le prochain HVN (High Volume Node) visible
          sur un composite plus large, ou le Naked POC le plus proche dans la
          direction du breakout.
        </li>
        <li>
          <strong>Stop</strong> — Retour a l&apos;interieur de la VA composite.
          Si le prix reintegre la VA, le breakout a echoue.
        </li>
      </ul>

      <h3>Strategie 3 : Trading des Naked POC</h3>

      <p>
        Cette strategie exploite la tendance du marche a revisiter les POC
        non testes. Elle fonctionne particulierement bien en marche range
        quand le prix oscille entre differents Naked POC.
      </p>

      <ul>
        <li>
          <strong>Identification</strong> — Marquez tous les Naked POC des 10-20
          dernieres sessions sur votre graphique. Identifiez ceux qui se
          trouvent au-dessus et en dessous du prix actuel.
        </li>
        <li>
          <strong>Entree</strong> — Quand le prix se dirige vers un Naked POC,
          attendez qu&apos;il l&apos;atteigne. Observez la reaction. Si le prix
          montre un rejet au nPOC (meche, absorption dans l&apos;Order Flow),
          prenez position dans le sens du rejet.
        </li>
        <li>
          <strong>Objectif</strong> — Le prochain Naked POC dans la direction
          opposee, ou le POC du composite 5 sessions.
        </li>
        <li>
          <strong>Gestion</strong> — Un Naked POC &quot;rempli&quot; (touche par
          le prix) perd son statut. Retirez-le de votre graphique et passez au
          suivant.
        </li>
      </ul>

      <hr />

      <h2 id="sierra-chart">Configuration sur Sierra Chart</h2>

      <p>
        Sierra Chart est la plateforme de reference pour l&apos;analyse en
        Market Profile et Composite Profile. Voici comment configurer un
        Composite Profile pas a pas.
      </p>

      <h3>Ajouter un Composite Profile</h3>

      <ol>
        <li>
          Ouvrez votre graphique sur le timeframe de votre choix (recommande :
          graphique en 30 minutes pour les TPO, ou en ticks/volume pour le
          Volume Profile).
        </li>
        <li>
          Allez dans <strong>Analysis</strong> &gt;{" "}
          <strong>Studies</strong> &gt; <strong>Add Custom Study</strong>.
        </li>
        <li>
          Recherchez <strong>&quot;TPO Profile Chart&quot;</strong> ou{" "}
          <strong>&quot;Volume by Price&quot;</strong> selon votre preference.
        </li>
        <li>
          Dans les parametres de l&apos;etude, configurez le{" "}
          <strong>Period Type</strong> sur{" "}
          <strong>&quot;Number of Days&quot;</strong>.
        </li>
        <li>
          Definissez le <strong>Number of Periods</strong> sur le nombre de
          sessions souhaite (5, 20, 65...).
        </li>
        <li>
          Activez <strong>&quot;Display Volume in Profile&quot;</strong> si vous
          voulez un composite base sur le volume plutot que les TPO.
        </li>
      </ol>

      <h3>Parametres recommandes</h3>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Parametre</th>
            <th>Valeur recommandee</th>
            <th>Explication</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Session Times</td>
            <td>RTH uniquement</td>
            <td>Filtre le bruit overnight</td>
          </tr>
          <tr>
            <td>TPO Letter Size</td>
            <td>2-4 ticks</td>
            <td>Granularite adaptee au Futures trade</td>
          </tr>
          <tr>
            <td>Value Area %</td>
            <td>70%</td>
            <td>Standard Steidlmayer</td>
          </tr>
          <tr>
            <td>Show POC</td>
            <td>Oui</td>
            <td>Ligne horizontale sur le POC composite</td>
          </tr>
          <tr>
            <td>Show VA Lines</td>
            <td>Oui</td>
            <td>VAH et VAL visibles</td>
          </tr>
          <tr>
            <td>Highlight Naked POC</td>
            <td>Oui</td>
            <td>Etendez les POC non testes</td>
          </tr>
          <tr>
            <td>Couleur du profil</td>
            <td>Semi-transparent</td>
            <td>Permet de voir le graphique derriere</td>
          </tr>
        </tbody>
      </table>

      <h3>Afficher les Naked POC automatiquement</h3>

      <p>
        Sierra Chart peut afficher automatiquement les Naked POC comme des
        lignes horizontales qui s&apos;etendent jusqu&apos;a ce que le prix les
        touche. Dans les parametres du TPO Profile Chart :
      </p>

      <ol>
        <li>
          Activez <strong>&quot;Extend POC Until Touched&quot;</strong> dans les
          options d&apos;affichage.
        </li>
        <li>
          Choisissez une couleur distinctive (recommande : orange ou jaune) pour
          differencier les nPOC des lignes de VA.
        </li>
        <li>
          Optionnellement, activez <strong>&quot;Show Historical POCs&quot;</strong>{" "}
          pour voir les POC de chaque session individuelle en plus du POC
          composite.
        </li>
      </ol>

      <p>
        Pour une configuration complete de Sierra Chart incluant le Market
        Profile, le Volume Profile et les Footprint Charts, consultez notre{" "}
        <strong>guide dedie Sierra Chart</strong>.
      </p>

      <h3>Template multi-composites</h3>

      <p>
        La configuration ideale utilise plusieurs instances de l&apos;etude sur
        le meme graphique avec des periodes differentes. Configurez trois
        Composite Profiles :
      </p>

      <ul>
        <li>
          <strong>Composite 5 jours</strong> — Couleur bleue, opacite 40%
        </li>
        <li>
          <strong>Composite 20 jours</strong> — Couleur verte, opacite 30%
        </li>
        <li>
          <strong>Composite 65 jours</strong> — Couleur rouge, opacite 20%
        </li>
      </ul>

      <p>
        Les opacites decroissantes permettent de superposer les profils sans
        surcharger le graphique. Les niveaux ou plusieurs composites convergent
        apparaissent visuellement comme des zones de forte opacite — ce sont vos
        niveaux les plus significatifs.
      </p>

      <hr />

      <h2 id="erreurs">Les erreurs courantes</h2>

      <p>
        Le Composite Profile est un outil puissant, mais son utilisation
        incorrecte peut generer de faux signaux et des pertes evitables. Voici
        les erreurs les plus frequentes et comment les eviter.
      </p>

      <h3>Erreur 1 : Utiliser un seul horizon temporel</h3>

      <p>
        Se fier uniquement au composite 5 jours (ou pire, au composite 20
        jours) sans croiser les informations est une erreur de debutant. Un
        niveau significatif sur le composite 5 jours peut etre completement
        insignifiant sur le composite 20 jours. Utilisez toujours{" "}
        <strong>au moins deux horizons</strong> pour valider vos niveaux.
      </p>

      <h3>Erreur 2 : Ignorer le contexte du marche</h3>

      <p>
        Un Composite Profile construit pendant une periode de range ne sera pas
        utile si le marche est entre en tendance. Les composites sont des
        photographies du passe — ils ne predisent pas l&apos;avenir. Si un
        catalyseur fondamental (decision de la Fed, chiffres economiques
        majeurs) change la donne, les niveaux du composite perdent
        temporairement leur pertinence.
      </p>

      <h3>Erreur 3 : Confondre le POC composite avec un niveau exact</h3>

      <p>
        Le POC composite n&apos;est pas un prix precis au tick pres —
        c&apos;est une <strong>zone</strong>. Sur le S&amp;P 500, traitez le
        POC composite avec une tolerance de 2-4 points. Ne placez pas un limit
        order exactement au POC en esperant un fill parfait. Utilisez-le comme
        une zone d&apos;interet ou vous affinez votre lecture avec l&apos;Order
        Flow en temps reel.
      </p>

      <h3>Erreur 4 : Garder des Naked POC trop anciens</h3>

      <p>
        Certains traders accumulent des dizaines de Naked POC sur leur
        graphique, y compris ceux datant de plusieurs mois. Le resultat est un
        graphique illisible et une analyse paralysee. Limitez-vous aux{" "}
        <strong>Naked POC des 20-30 dernieres sessions</strong>. Au-dela, ne
        gardez que ceux qui correspondent a des niveaux de volume
        significatifs.
      </p>

      <h3>Erreur 5 : Trader le composite sans trigger session</h3>

      <p>
        Le Composite Profile donne le contexte et les niveaux, mais il ne
        donne pas le timing. Entrer en position simplement parce que le prix
        touche la VAH composite est une recette pour le desastre. Attendez
        toujours un <strong>trigger sur le Session Profile</strong> ou dans
        l&apos;Order Flow avant d&apos;executer — un rejet visible, un delta
        shift, une absorption dans le Footprint.
      </p>

      <h3>Erreur 6 : Construire le composite avec des sessions ETH sur les Futures</h3>

      <p>
        Inclure les sessions overnight (Globex) dans votre Composite Profile
        dilue la qualite des niveaux. Le volume overnight est souvent faible et
        domine par le trading algorithmique. Sauf raison specifique, construisez
        vos composites sur les <strong>sessions RTH uniquement</strong>. Si vous
        avez besoin d&apos;inclure le Globex, faites-le separement pour ne pas
        corrompre vos niveaux RTH.
      </p>

      <h3>Erreur 7 : Ne pas mettre a jour les niveaux</h3>

      <p>
        Le Composite Profile est un outil dynamique — il change chaque jour
        quand une nouvelle session s&apos;ajoute et que la plus ancienne
        disparait (pour les composites glissants). Utiliser les niveaux de la
        semaine derniere sans les mettre a jour, c&apos;est conduire en
        regardant dans le retroviseur. Mettez a jour vos niveaux composites
        chaque matin avant le debut de la session.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Checklist quotidienne</div>
        <h4>Avant chaque session de trading</h4>
        <p>
          1. Mettez a jour les composites 5 et 20 sessions. 2. Notez la
          position du prix par rapport a la VA composite. 3. Identifiez les
          Naked POC au-dessus et en dessous du prix. 4. Verifiez si la Value
          Area migre ou reste stable. 5. Definissez votre biais (haussier,
          baissier, neutre) en fonction du composite. Seulement apres ces 5
          etapes, cherchez un trigger sur le Session Profile.
        </p>
      </div>

      <hr />

      <p>
        Le Composite Profile est l&apos;outil qui separe les traders qui lisent
        le marche jour par jour de ceux qui comprennent la{" "}
        <strong>structure multi-sessions</strong>. Il ne remplace pas le Session
        Profile — il le complete en fournissant le contexte macro dans lequel
        s&apos;inscrit l&apos;action du prix. Maitrisez les deux, et vous aurez
        une lecture du marche que 95% des traders retail n&apos;ont pas.
      </p>

      <p>
        Pour approfondir les concepts fondamentaux, consultez notre{" "}
        <a href="/blog/market-profile-guide-complet/">
          guide complet du Market Profile
        </a>{" "}
        et notre article sur l&apos;
        <a href="/blog/auction-market-theory/">Auction Market Theory</a>. Pour
        la dimension volume, explorez le{" "}
        <a href="/blog/volume-profile-guide/">guide du Volume Profile</a>.
      </p>
    </>
  );
}
