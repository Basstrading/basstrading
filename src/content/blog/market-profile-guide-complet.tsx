export default function MarketProfileGuideComplet() {
  return (
    <>
      <h2 id="quest-ce-que">Qu&apos;est-ce que le Market Profile ?</h2>

      <p>
        Le Market Profile est un outil d&apos;analyse du marche qui organise le{" "}
        <strong>prix</strong> et le <strong>temps</strong> pour reveler ou le
        marche accepte la valeur. Contrairement aux chandeliers japonais qui
        montrent l&apos;ouverture, le plus haut, le plus bas et la cloture, le
        Market Profile montre <strong>combien de temps</strong> le marche a passe
        a chaque niveau de prix.
      </p>

      <p>
        C&apos;est la difference fondamentale. Un chandelier vous dit ce qui
        s&apos;est passe. Le Market Profile vous dit <strong>pourquoi</strong>.
      </p>

      <blockquote>
        <strong>
          &quot;Le marche est un mecanisme d&apos;encheres.&quot;
        </strong>{" "}
        Il monte pour trouver des vendeurs, descend pour trouver des acheteurs.
        Le Market Profile rend cette dynamique visible.
      </blockquote>

      <p>
        Quand le marche passe beaucoup de temps a un niveau de prix, cela
        signifie que les acheteurs et les vendeurs s&apos;accordent sur la
        valeur. Quand il passe peu de temps, c&apos;est un rejet — le prix est
        percu comme trop cher ou trop bon marche. Cette logique simple est au
        coeur de tout ce que vous lirez dans ce guide.
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
          A retenir
        </div>
        <p>
          Le Market Profile ne predit pas le futur. Il revele la{" "}
          <strong>structure actuelle du marche</strong> — ou se trouve la valeur,
          ou elle migre, et quels niveaux sont importants. C&apos;est un outil de
          lecture, pas une boule de cristal.
        </p>
      </div>

      <hr />

      <h2 id="origine">Origine et histoire</h2>

      <p>
        Le Market Profile a ete developpe dans les{" "}
        <strong>annees 1980</strong> par{" "}
        <strong>J. Peter Steidlmayer</strong>, trader au Chicago Board of Trade
        (CBOT). Steidlmayer cherchait un moyen de visualiser l&apos;activite du
        marche au-dela des simples barres de prix.
      </p>

      <p>
        Son idee : representer chaque demi-heure de trading par une lettre
        unique. En empilant ces lettres, on obtient un profil — une distribution
        qui montre ou le marche a passe le plus de temps. Cette visualisation a
        revolutionne la facon dont les traders institutionnels analysent les
        marches.
      </p>

      <p>
        Le CBOT a officiellement adopte le Market Profile comme outil
        d&apos;analyse dans les annees 1980. Depuis, il est devenu un standard
        dans les salles de marche du monde entier, particulierement pour le
        trading de Futures.
      </p>

      <h3>L&apos;evolution du concept</h3>

      <p>
        Steidlmayer a continue a affiner sa methode. Dans les annees 2000, il a
        introduit le concept de <strong>Capital Flow</strong> — une evolution du
        Market Profile qui integre le volume. Parallelement, d&apos;autres
        traders comme <strong>Jim Dalton</strong> ont popularise l&apos;approche
        avec leur livre <em>Mind Over Markets</em>, devenu une reference.
      </p>

      <p>
        Aujourd&apos;hui, le Market Profile est souvent utilise en combinaison
        avec le <strong>Volume Profile</strong>, l&apos;
        <strong>Order Flow</strong> et le <strong>Footprint Chart</strong> pour
        une lecture complete de la structure du marche.
      </p>

      <hr />

      <h2 id="concepts-cles">Les concepts cles du Market Profile</h2>

      <p>
        Avant de plonger dans les details, voici les termes essentiels que vous
        devez maitriser :
      </p>

      <ul>
        <li>
          <strong>TPO (Time Price Opportunity)</strong> — Chaque lettre
          representant une demi-heure de trading a un niveau de prix
        </li>
        <li>
          <strong>POC (Point of Control)</strong> — Le prix ou le marche a passe
          le plus de temps (la ligne TPO la plus longue)
        </li>
        <li>
          <strong>Value Area (VA)</strong> — La zone contenant 70% de
          l&apos;activite du marche
        </li>
        <li>
          <strong>VAH (Value Area High)</strong> — La limite haute de la Value
          Area
        </li>
        <li>
          <strong>VAL (Value Area Low)</strong> — La limite basse de la Value
          Area
        </li>
        <li>
          <strong>Initial Balance (IB)</strong> — Le range de la premiere heure
          de trading
        </li>
        <li>
          <strong>Single Prints</strong> — Zones ou une seule lettre TPO est
          presente (rejet rapide du prix)
        </li>
        <li>
          <strong>Distribution</strong> — La forme globale du profil (normale,
          allongee, en B, en P)
        </li>
      </ul>

      <hr />

      <h2 id="tpo">Comprendre les TPO</h2>

      <p>
        Les <strong>TPO</strong> (Time Price Opportunities) sont la brique de
        base du Market Profile. Chaque session de trading est decoupee en
        periodes de 30 minutes, et chaque periode se voit attribuer une lettre.
      </p>

      <p>
        La premiere demi-heure recoit la lettre <strong>A</strong>, la deuxieme
        la lettre <strong>B</strong>, et ainsi de suite. Chaque fois que le prix
        visite un niveau pendant une periode donnee, la lettre correspondante est
        placee a ce niveau.
      </p>

      <h3>Comment lire les TPO ?</h3>

      <p>
        Plus il y a de lettres a un meme niveau de prix, plus le marche a{" "}
        <strong>accepte</strong> ce prix comme juste. Inversement, un niveau avec
        une seule lettre (single print) indique un <strong>rejet</strong> — le
        marche a brievement visite ce prix puis l&apos;a quitte.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cle</div>
        <h4>Acceptation vs Rejet</h4>
        <p>
          L&apos;acceptation (beaucoup de TPO) signifie que les acheteurs et
          vendeurs s&apos;accordent sur le prix. Le rejet (peu de TPO) signifie
          qu&apos;un cote du marche a trouve le prix inacceptable. Ces deux
          dynamiques sont tout ce que vous devez comprendre pour lire un Market
          Profile.
        </p>
      </div>

      <p>
        Les periodes sont generalement identifiees par des lettres de A a X pour
        une session complete sur les Futures americains (de l&apos;ouverture de
        la session reguliere a la cloture). Le code couleur varie selon la
        plateforme — Sierra Chart permet une personnalisation complete des
        couleurs TPO.
      </p>

      <hr />

      <h2 id="value-area">Value Area et Point of Control (POC)</h2>

      <h3>La Value Area</h3>

      <p>
        La <strong>Value Area</strong> est la zone de prix contenant{" "}
        <strong>70% de l&apos;activite TPO</strong> de la session. Ce
        pourcentage correspond a un ecart-type dans une distribution normale —
        c&apos;est la zone ou le marche a passe le plus de temps et ou le prix
        est considere comme &quot;juste&quot;.
      </p>

      <p>Elle est delimitee par deux niveaux :</p>

      <ul>
        <li>
          <strong>VAH (Value Area High)</strong> — La limite haute. Au-dessus, le
          prix est percu comme cher par le marche.
        </li>
        <li>
          <strong>VAL (Value Area Low)</strong> — La limite basse. En dessous, le
          prix est percu comme bon marche.
        </li>
      </ul>

      <p>
        La Value Area est <strong>le concept le plus important</strong> du Market
        Profile. C&apos;est elle qui definit ou le marche percoit la valeur.
        Quand le prix sort de la Value Area, deux choses peuvent se passer : soit
        il est rejete et revient, soit il est accepte et une nouvelle zone de
        valeur se forme.
      </p>

      <h3>Le Point of Control (POC)</h3>

      <p>
        Le <strong>POC</strong> est le prix ou la ligne de TPO est la plus longue
        — le niveau ou le marche a passe le plus de temps. C&apos;est le prix le
        plus &quot;juste&quot; de la session selon le consensus
        acheteurs/vendeurs.
      </p>

      <p>
        Le POC est un <strong>aimant</strong>. Le prix a naturellement tendance a
        revenir vers le POC, surtout dans des marches en rotation (range). En
        tendance, le deplacement du POC d&apos;une session a l&apos;autre indique
        la direction dans laquelle la valeur migre.
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
          Astuce pro
        </div>
        <p>
          Comparez le <strong>POC d&apos;aujourd&apos;hui</strong> avec celui de
          la veille. S&apos;il monte, la valeur migre vers le haut — les
          acheteurs dominent. S&apos;il descend, les vendeurs prennent le
          controle. Ce simple check donne le biais directionnel de la journee.
        </p>
      </div>

      <hr />

      <h2 id="initial-balance">L&apos;Initial Balance (IB)</h2>

      <p>
        L&apos;<strong>Initial Balance</strong> est le range forme pendant la{" "}
        <strong>premiere heure de trading</strong> de la session reguliere
        (periodes A et B). C&apos;est une reference majeure pour le reste de la
        journee.
      </p>

      <h3>Pourquoi l&apos;IB est si important</h3>

      <p>
        L&apos;Initial Balance revele l&apos;intention des premiers participants
        — souvent les institutionnels qui definissent le terrain de jeu de la
        journee. La taille de l&apos;IB et sa position par rapport a la Value
        Area de la veille donnent des indices precieux :
      </p>

      <ul>
        <li>
          <strong>IB large</strong> — Les institutionnels ont ete agressifs des
          l&apos;ouverture. La journee a de grandes chances de rester dans ce
          range (journee de rotation).
        </li>
        <li>
          <strong>IB etroit</strong> — Peu de conviction a l&apos;ouverture. Le
          prix a de grandes chances de casser l&apos;IB et de se developper dans
          une direction (journee de tendance).
        </li>
        <li>
          <strong>IB au-dessus de la VA veille</strong> — Gap de valeur haussier.
          Les acheteurs ont pris le controle pendant la nuit.
        </li>
        <li>
          <strong>IB en dessous de la VA veille</strong> — Gap de valeur
          baissier. Les vendeurs dominent.
        </li>
      </ul>

      <div className="key-concept">
        <div className="key-concept-label">Regle d&apos;or</div>
        <h4>L&apos;extension de l&apos;Initial Balance</h4>
        <p>
          Quand le prix casse le haut ou le bas de l&apos;IB, on parle
          d&apos;extension. Une extension de l&apos;IB dans une direction avec du
          volume et de la conviction indique souvent une journee de tendance. La
          cible minimale de l&apos;extension est generalement la taille de
          l&apos;IB elle-meme reportee au point de cassure.
        </p>
      </div>

      <hr />

      <h2 id="formes">Les formes de profil</h2>

      <p>
        La forme du Market Profile raconte l&apos;histoire de la journee. Quatre
        formes principales se distinguent :
      </p>

      <div className="shapes-grid">
        <div className="shape-card">
          <div className="shape-icon">D</div>
          <h4>Profil Normal (en D)</h4>
          <p>
            Distribution gaussienne classique. Beaucoup d&apos;activite au centre
            (POC), moins aux extremes. Indique un marche en equilibre ou les
            acheteurs et vendeurs s&apos;accordent sur la valeur.
          </p>
        </div>
        <div className="shape-card">
          <div className="shape-icon">b</div>
          <h4>Profil en b</h4>
          <p>
            Accumulation en bas, queue fine en haut. Le marche a baisse en debut
            de session puis a trouve de la valeur en bas. Souvent observe apres
            une vente agressive suivie d&apos;une stabilisation.
          </p>
        </div>
        <div className="shape-card">
          <div className="shape-icon">P</div>
          <h4>Profil en P</h4>
          <p>
            Accumulation en haut, queue fine en bas. Le marche a monte en debut
            de session puis a trouve de la valeur en haut. Souvent observe apres
            un achat agressif suivi d&apos;une rotation.
          </p>
        </div>
        <div className="shape-card">
          <div className="shape-icon">|</div>
          <h4>Profil Allonge</h4>
          <p>
            Distribution etroite et verticale. Le marche a fortement tendu dans
            une direction sans trouver de zone d&apos;equilibre. Indique une
            forte conviction directionnelle — journee de tendance.
          </p>
        </div>
      </div>

      <p>
        Ces formes ne sont pas des signaux de trading. Ce sont des{" "}
        <strong>diagnostics</strong>. Elles vous disent ce que le marche fait —
        rotation ou tendance, equilibre ou desequilibre — et vous permettent
        d&apos;adapter votre approche en consequence.
      </p>

      <hr />

      <h2 id="types-journees">Les types de journees</h2>

      <p>
        Steidlmayer et Dalton ont identifie plusieurs types de journees
        recurrentes. Reconnaitre le type de journee en cours est essentiel pour
        savoir comment trader :
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Type de journee</th>
            <th>Caracteristiques</th>
            <th>Strategie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal Day</td>
            <td>
              IB large, peu d&apos;extension. Le marche reste dans le range
              initial.
            </td>
            <td>Fade les extremes, trade la rotation vers le POC.</td>
          </tr>
          <tr>
            <td>Normal Variation</td>
            <td>
              IB moyen, une extension moderee dans une direction.
            </td>
            <td>Trade l&apos;extension, utilise l&apos;IB comme reference.</td>
          </tr>
          <tr>
            <td>Trend Day</td>
            <td>
              IB etroit, forte extension unidirectionnelle. Profil allonge.
            </td>
            <td>
              Ne pas fader. Suivre la tendance, ajouter sur les retracements.
            </td>
          </tr>
          <tr>
            <td>Double Distribution</td>
            <td>
              Deux zones de valeur distinctes avec single prints entre les deux.
            </td>
            <td>
              Le marche a change de perception. Trader la nouvelle VA.
            </td>
          </tr>
          <tr>
            <td>Non-Trend Day</td>
            <td>
              IB tres etroit, pas d&apos;extension significative. Faible volume.
            </td>
            <td>
              Ne pas trader. Le marche n&apos;offre pas d&apos;opportunite
              claire.
            </td>
          </tr>
          <tr>
            <td>Neutral Day</td>
            <td>
              Extensions des deux cotes de l&apos;IB. Le marche teste les deux
              directions.
            </td>
            <td>
              Trader les retours vers le POC. Pas de conviction directionnelle.
            </td>
          </tr>
        </tbody>
      </table>

      <blockquote>
        <strong>L&apos;erreur numero un des debutants :</strong> essayer de
        trader une tendance dans un marche en rotation, ou fader une tendance. Le
        Market Profile vous donne les outils pour eviter cette erreur — si vous
        l&apos;ecoutez.
      </blockquote>

      <hr />

      <h2 id="mp-vs-vp">Market Profile vs Volume Profile</h2>

      <p>
        La confusion entre Market Profile et Volume Profile est frequente. Les
        deux sont utiles, mais ils mesurent des choses differentes :
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Critere</th>
            <th>Market Profile (TPO)</th>
            <th>Volume Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mesure</td>
            <td>
              Le <strong>temps</strong> passe a chaque prix
            </td>
            <td>
              Le <strong>volume</strong> echange a chaque prix
            </td>
          </tr>
          <tr>
            <td>Unite</td>
            <td>Lettres TPO (periodes de 30 min)</td>
            <td>Contrats/lots echanges</td>
          </tr>
          <tr>
            <td>POC</td>
            <td>Prix avec le plus de TPO</td>
            <td>Prix avec le plus de volume</td>
          </tr>
          <tr>
            <td>Value Area</td>
            <td>70% des TPO</td>
            <td>70% du volume</td>
          </tr>
          <tr>
            <td>Force</td>
            <td>Lecture temporelle de l&apos;acceptation</td>
            <td>Lecture du flux reel d&apos;argent</td>
          </tr>
          <tr>
            <td>Limite</td>
            <td>Ne reflete pas l&apos;intensite du volume</td>
            <td>Ne montre pas la dimension temporelle</td>
          </tr>
        </tbody>
      </table>

      <p>
        Les deux se completent parfaitement. Le TPO montre{" "}
        <strong>ou le marche accepte le prix dans le temps</strong>. Le Volume
        Profile montre <strong>ou l&apos;argent reel s&apos;echange</strong>.
        Quand les deux POC convergent au meme niveau, ce niveau est
        particulierement fort. Quand ils divergent, il y a une information a
        extraire.
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
          Dans la pratique
        </div>
        <p>
          Chez BASS Trading, on utilise les deux. Le Market Profile (TPO) donne
          le contexte de la session et identifie le type de journee. Le Volume
          Profile donne la precision sur les niveaux ou le volume s&apos;est
          concentre. Les deux combines avec l&apos;Order Flow et le Footprint
          donnent une lecture complete de la structure du marche.
        </p>
      </div>

      <hr />

      <h2 id="logiciels">Logiciels et setup pour le Market Profile</h2>

      <p>
        Tous les logiciels ne se valent pas pour l&apos;analyse Market Profile.
        Voici les principales options :
      </p>

      <h3>Sierra Chart — Le standard professionnel</h3>

      <p>
        <strong>Sierra Chart</strong> est la reference pour le Market Profile et
        l&apos;Order Flow. Il offre :
      </p>
      <ul>
        <li>
          Market Profile natif avec personnalisation complete (couleurs TPO, VA,
          POC)
        </li>
        <li>Volume Profile, Footprint Chart, et Order Flow integres</li>
        <li>Donnees en temps reel via Denali Exchange Data Feed</li>
        <li>
          Performance excellente meme avec des millions de points de donnees
        </li>
        <li>Scripting avance (ACSIL) pour des etudes personnalisees</li>
      </ul>

      <p>
        C&apos;est le logiciel utilise dans le{" "}
        <strong>mentorat BASS Trading</strong>. Sebastien Constant accompagne
        chaque eleve dans le setup complet de la plateforme.
      </p>

      <h3>Autres options</h3>

      <ul>
        <li>
          <strong>ATAS (Order Flow Trading)</strong> — Bonne alternative avec une
          interface plus moderne. Market Profile correct, excellent Footprint.
        </li>
        <li>
          <strong>Quantower</strong> — Solution multi-broker avec Market Profile
          integre. Bon rapport qualite/prix pour debuter.
        </li>
        <li>
          <strong>Exocharts</strong> — Specialise dans les Footprint et Heatmap.
          Market Profile basique.
        </li>
        <li>
          <strong>TradingView</strong> — Volume Profile seulement. Pas de Market
          Profile TPO natif. Insuffisant pour une analyse serieuse.
        </li>
      </ul>

      <div className="key-concept">
        <div className="key-concept-label">Recommandation</div>
        <h4>Commencez avec Sierra Chart</h4>
        <p>
          Ne perdez pas de temps a tester dix logiciels. Sierra Chart est le
          standard pour une raison. L&apos;interface est austere, oui. Mais une
          fois configure correctement, c&apos;est l&apos;outil le plus puissant
          du marche pour l&apos;analyse Market Profile et Order Flow. La courbe
          d&apos;apprentissage est un investissement, pas un obstacle.
        </p>
      </div>

      <hr />

      <h2 id="erreurs">Les 7 erreurs courantes avec le Market Profile</h2>

      <p>
        Apres avoir forme plus de 100 traders au Market Profile, voici les
        erreurs que l&apos;on voit revenir systematiquement :
      </p>

      <ol>
        <li>
          <strong>
            Utiliser le Market Profile comme un indicateur de trading
          </strong>{" "}
          — Le MP est un outil de contexte, pas un signal d&apos;achat/vente. Il
          vous dit ou vous etes dans la structure. A vous de decider comment
          trader.
        </li>
        <li>
          <strong>Ignorer le contexte multi-jour</strong> — Un profil isole ne
          dit pas grand-chose. La relation entre le profil d&apos;aujourd&apos;hui,
          celui d&apos;hier et le composite weekly est fondamentale.
        </li>
        <li>
          <strong>
            Fader systematiquement les extremes de la Value Area
          </strong>{" "}
          — La VA n&apos;est pas un support/resistance magique. Elle doit etre
          combinee avec le volume, l&apos;Order Flow et le contexte.
        </li>
        <li>
          <strong>Oublier l&apos;Initial Balance</strong> — L&apos;IB donne le
          ton de la journee. L&apos;ignorer, c&apos;est entrer dans le marche a
          l&apos;aveugle.
        </li>
        <li>
          <strong>Confondre Market Profile et Volume Profile</strong> — Ce ne
          sont pas les memes outils. Les utiliser de maniere interchangeable mene
          a des erreurs d&apos;interpretation.
        </li>
        <li>
          <strong>Ne pas identifier le type de journee</strong> — Trader une
          rotation comme une tendance (ou l&apos;inverse) est la recette de la
          perte. Le MP vous dit quel type de journee vous avez — ecoutez-le.
        </li>
        <li>
          <strong>Surcharger le graphique</strong> — Le Market Profile est
          efficace par sa simplicite. Ajouter quinze indicateurs par-dessus
          detruit sa lisibilite. Gardez-le propre.
        </li>
      </ol>

      <hr />

      <h2 id="conclusion">Conclusion</h2>

      <p>
        Le Market Profile n&apos;est pas un indicateur de plus a ajouter sur vos
        graphiques. C&apos;est un{" "}
        <strong>changement de paradigme</strong> dans la facon de lire les
        marches. Au lieu de deviner la direction avec des moyennes mobiles et des
        RSI, vous comprenez <strong>ou se trouve la valeur</strong>,{" "}
        <strong>comment elle migre</strong>, et{" "}
        <strong>quel type d&apos;activite</strong> le marche vous offre.
      </p>

      <p>
        Ce guide couvre les fondamentaux. La maitrise vient avec la pratique —
        des centaines d&apos;heures a lire des profils, a identifier les types de
        journees, a observer comment le prix reagit aux niveaux cles.
      </p>

      <p>
        Le Market Profile, combine a l&apos;Order Flow et au Footprint, est
        exactement ce que l&apos;on enseigne dans le{" "}
        <strong>mentorat BASS Trading</strong>. Pas de la theorie. De la lecture
        de marche appliquee, en temps reel, chaque jour.
      </p>
    </>
  );
}
