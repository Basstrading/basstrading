export default function PocPointOfControl() {
  return (
    <>
      <p>
        Chaque session de trading produit des milliers de transactions
        r&eacute;parties sur des dizaines de niveaux de prix. Pourtant, un seul
        de ces niveaux concentre plus de volume ou de temps que tous les
        autres. Ce niveau, c&apos;est le{" "}
        <strong>POC — Point of Control</strong>. C&apos;est le prix
        d&apos;&eacute;quilibre absolu, le point de gravit&eacute; autour
        duquel le march&eacute; organise toute son activit&eacute;.
      </p>

      <p>
        Que vous soyez scalper sur le ES, swing trader sur le NQ ou que vous
        analysiez le CL &agrave; l&apos;&eacute;chelle hebdomadaire, le POC
        est votre r&eacute;f&eacute;rence num&eacute;ro un. Il d&eacute;termine
        o&ugrave; le march&eacute; a trouv&eacute; le consensus maximum, o&ugrave;
        les acheteurs et les vendeurs se sont mis d&apos;accord sur un prix
        &quot;juste&quot;. Ma&icirc;triser le POC, c&apos;est comprendre la
        colonne vert&eacute;brale du{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a> et du{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a>.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Concept cl&eacute;</div>
        <h4>Le POC est le prix o&ugrave; le march&eacute; dit &quot;oui&quot;</h4>
        <p>
          Le march&eacute; est un m&eacute;canisme d&apos;ench&egrave;res.
          Chaque session, il explore des prix &agrave; la hausse et &agrave; la
          baisse. Le POC est le niveau o&ugrave; il s&apos;est arr&ecirc;t&eacute;
          le plus longtemps — o&ugrave; le plus de transactions ont eu lieu.
          C&apos;est l&apos;acceptation maximale. Tout le reste du profil se
          comprend par rapport &agrave; ce point.
        </p>
      </div>

      <hr />

      <h2 id="definition">Qu&apos;est-ce que le POC ?</h2>

      <p>
        Le <strong>Point of Control (POC)</strong> est le niveau de prix unique
        sur lequel la plus grande activit&eacute; a &eacute;t&eacute;
        enregistr&eacute;e pendant une p&eacute;riode donn&eacute;e. En{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile</a>,
        c&apos;est le prix avec le plus grand nombre de{" "}
        <strong>TPO (Time Price Opportunities)</strong> — autrement dit, le
        prix o&ugrave; le march&eacute; a pass&eacute; le plus de temps. En{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a>, c&apos;est le
        prix avec le <strong>volume &eacute;chang&eacute; le plus
        &eacute;lev&eacute;</strong>.
      </p>

      <p>
        Visuellement, le POC correspond &agrave; la rang&eacute;e la plus
        longue de l&apos;histogramme horizontal. Sur la plupart des
        plateformes (Sierra Chart, ATAS, Quantower), il est marqu&eacute; par
        une ligne horizontale bien visible — g&eacute;n&eacute;ralement en
        rouge ou en jaune. C&apos;est le premier rep&egrave;re que
        l&apos;&oelig;il cherche sur un profil.
      </p>

      <p>
        En termes de th&eacute;orie des march&eacute;s, le POC
        repr&eacute;sente le <strong>prix d&apos;&eacute;quilibre</strong> —
        le Fair Value de la session. C&apos;est le niveau autour duquel le
        march&eacute; gravite naturellement tant que les conditions
        fondamentales ne changent pas. Les institutionnels utilisent le POC
        comme benchmark : si le prix actuel est significativement
        &eacute;loign&eacute; du POC, il y a une tension non
        r&eacute;solue.
      </p>

      <p>
        Le POC n&apos;est pas un indicateur technique calcul&eacute; &agrave;
        partir d&apos;une formule arbitraire. C&apos;est une observation
        directe du march&eacute; : o&ugrave; est-ce que les participants ont
        effectivement &eacute;chang&eacute; le plus ? C&apos;est cette
        nature empirique qui en fait l&apos;un des niveaux les plus respect&eacute;s
        par les traders professionnels.
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
          Terminologie
        </div>
        <p>
          Vous verrez parfois le terme <strong>vPOC</strong> (volume POC) pour
          d&eacute;signer le POC calcul&eacute; sur le volume, et{" "}
          <strong>tPOC</strong> (time POC ou TPO POC) pour le POC
          calcul&eacute; sur le temps. Quand un trader dit simplement
          &quot;POC&quot;, il fait g&eacute;n&eacute;ralement
          r&eacute;f&eacute;rence au vPOC — le POC bas&eacute; sur le volume
          r&eacute;el.
        </p>
      </div>

      <hr />

      <h2 id="calcul">
        Comment le POC est d&eacute;termin&eacute; (TPO vs Volume)
      </h2>

      <p>
        La m&eacute;thode de calcul du POC d&eacute;pend de l&apos;outil
        utilis&eacute;. Les deux approches sont l&eacute;gitimes mais
        r&eacute;v&egrave;lent des informations diff&eacute;rentes.
      </p>

      <h3>POC en Market Profile (TPO)</h3>

      <p>
        En{" "}
        <a href="/blog/market-profile-guide-complet/">Market Profile classique</a>,
        la session est d&eacute;coup&eacute;e en p&eacute;riodes de 30
        minutes. Chaque p&eacute;riode re&ccedil;oit une lettre (A, B, C,
        D...). Pour chaque tick de prix touch&eacute; pendant cette
        p&eacute;riode, on place une lettre. Le <strong>tPOC</strong> est le
        prix qui accumule le plus de lettres — celui o&ugrave; le march&eacute;
        est revenu le plus souvent au cours de la session.
      </p>

      <p>
        Le tPOC mesure donc l&apos;<strong>acceptation temporelle</strong>.
        Un prix visit&eacute; pendant 10 p&eacute;riodes de 30 minutes sur
        13 est un prix extr&ecirc;mement accept&eacute;. C&apos;est la
        m&eacute;thode originale de Steidlmayer et elle reste pertinente
        car le temps pass&eacute; &agrave; un niveau traduit une conviction
        profonde du march&eacute;.
      </p>

      <h3>POC en Volume Profile (vPOC)</h3>

      <p>
        En{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a>, chaque niveau
        de prix se voit attribuer le volume total des contrats
        &eacute;chang&eacute;s. Le <strong>vPOC</strong> est simplement le
        prix avec le plus gros volume. Cette m&eacute;thode utilise les
        donn&eacute;es tick-by-tick ou les donn&eacute;es de volume
        r&eacute;el du CME (pour les futures).
      </p>

      <p>
        Le vPOC mesure l&apos;<strong>engagement
        financier</strong>. Un prix o&ugrave; 200 000 contrats ont
        &eacute;t&eacute; &eacute;chang&eacute;s contre 50 000 ailleurs
        r&eacute;v&egrave;le o&ugrave; l&apos;argent r&eacute;el s&apos;est
        concentr&eacute;. C&apos;est pourquoi la majorit&eacute; des
        traders modernes privil&eacute;gient le vPOC : il refl&egrave;te
        le flux r&eacute;el, pas seulement le temps.
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Crit&egrave;re</th>
            <th>tPOC (Market Profile)</th>
            <th>vPOC (Volume Profile)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base de calcul</td>
            <td>Nombre de TPO (lettres 30 min)</td>
            <td>Volume r&eacute;el &eacute;chang&eacute;</td>
          </tr>
          <tr>
            <td>Ce qu&apos;il mesure</td>
            <td>Acceptation temporelle</td>
            <td>Engagement financier</td>
          </tr>
          <tr>
            <td>Pr&eacute;cision</td>
            <td>Mod&eacute;r&eacute;e (30 min de granularit&eacute;)</td>
            <td>&Eacute;lev&eacute;e (tick-by-tick)</td>
          </tr>
          <tr>
            <td>Disponibilit&eacute;</td>
            <td>Tous les march&eacute;s</td>
            <td>March&eacute;s avec volume r&eacute;el (futures, actions)</td>
          </tr>
          <tr>
            <td>Cas d&apos;usage id&eacute;al</td>
            <td>Structure macro, type de journ&eacute;e</td>
            <td>Niveaux d&apos;entr&eacute;e pr&eacute;cis, scalping</td>
          </tr>
        </tbody>
      </table>

      <p>
        En pratique, les deux POC co&iuml;ncident souvent — mais pas
        toujours. Quand le tPOC et le vPOC divergent, c&apos;est un signal
        informatif. Par exemple, si le tPOC est &agrave; 5150 mais le vPOC
        &agrave; 5140, cela signifie que le march&eacute; a pass&eacute; du
        temps en haut mais que l&apos;argent r&eacute;el s&apos;est
        concentr&eacute; plus bas. C&apos;est souvent le signe d&apos;une{" "}
        <strong>distribution</strong> : les institutionnels ont vendu dans
        la partie haute pendant que le march&eacute; oscillait.
      </p>

      <hr />

      <h2 id="signification">
        Ce que le POC r&eacute;v&egrave;le sur le march&eacute;
      </h2>

      <p>
        Le POC n&apos;est pas qu&apos;un niveau sur un graphique. Sa
        position, son &eacute;volution et sa relation avec le prix actuel
        racontent une histoire compl&egrave;te sur l&apos;&eacute;tat du
        march&eacute;.
      </p>

      <h3>POC centr&eacute; : march&eacute; en &eacute;quilibre</h3>

      <p>
        Quand le POC se situe au milieu du range de la session, le
        march&eacute; est en <strong>&eacute;quilibre</strong>. Acheteurs et
        vendeurs s&apos;accordent autour d&apos;un prix m&eacute;dian. Le
        profil ressemble &agrave; une distribution normale (en cloche). Ce
        sont les journ&eacute;es de type Normal Day ou Normal Variation
        Day. L&apos;implication : le march&eacute; est satisfait de cette
        zone de prix et n&apos;a pas de raison imm&eacute;diate d&apos;en
        sortir.
      </p>

      <h3>POC excentr&eacute; : biais directionnel</h3>

      <p>
        Quand le POC est situ&eacute; dans le tiers sup&eacute;rieur ou
        inf&eacute;rieur du range, cela r&eacute;v&egrave;le un{" "}
        <strong>biais directionnel</strong>. Un POC dans le tiers
        sup&eacute;rieur signifie que le march&eacute; a accept&eacute; les
        prix &eacute;lev&eacute;s — les acheteurs dominent. Un POC dans le
        tiers inf&eacute;rieur traduit une acceptation des prix bas — les
        vendeurs ont le contr&ocirc;le. Les journ&eacute;es de type Trend
        Day ont typiquement un POC excentr&eacute;.
      </p>

      <h3>POC &eacute;troit vs POC large</h3>

      <p>
        La largeur du profil autour du POC est &eacute;galement
        informative. Un profil &eacute;troit avec un POC
        tr&egrave;s dominant (un seul prix concentre beaucoup plus de
        volume que les voisins) indique un{" "}
        <strong>consensus fort mais fragile</strong> — un mouvement
        directionnel peut survenir brutalement. Un profil large avec un POC
        qui ne se d&eacute;tache que l&eacute;g&egrave;rement indique une
        acceptation diffuse — le march&eacute; est confortable dans une
        large zone et un breakout n&eacute;cessitera un catalyseur
        ext&eacute;rieur.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">R&egrave;gle professionnelle</div>
        <h4>
          Le prix revient toujours au POC — sauf quand il ne le fait pas
        </h4>
        <p>
          La tendance naturelle du march&eacute; est de graviter vers son
          POC, comme un pendule vers son point d&apos;&eacute;quilibre.
          C&apos;est le principe de <strong>mean reversion</strong>.
          Cependant, quand le prix s&apos;&eacute;loigne du POC et{" "}
          <strong>refuse d&apos;y revenir</strong>, c&apos;est le signal le
          plus puissant du profil : les conditions fondamentales ont
          chang&eacute;, et un nouveau POC est en train de se former
          ailleurs.
        </p>
      </div>

      <hr />

      <h2 id="migration">
        Migration du POC : le signal directionnel
      </h2>

      <p>
        La <strong>migration du POC</strong> est l&apos;un des concepts les
        plus puissants et les moins compris du Market Profile. Elle
        d&eacute;signe le d&eacute;placement du POC d&apos;une session
        &agrave; l&apos;autre — ou au sein m&ecirc;me d&apos;une session.
      </p>

      <h3>Migration inter-sessions</h3>

      <p>
        Comparez la position du POC d&apos;une session &agrave; celle de
        la session pr&eacute;c&eacute;dente. Si le POC monte
        progressivement sur 3 &agrave; 5 sessions, vous avez une{" "}
        <strong>migration haussiere</strong> : les participants acceptent
        des prix de plus en plus &eacute;lev&eacute;s comme &quot;Fair
        Value&quot;. Cette migration est un indicateur de tendance plus
        fiable que la simple direction du prix, car elle traduit un
        changement de perception de la valeur par les acteurs de
        march&eacute;.
      </p>

      <p>
        &Agrave; l&apos;inverse, un POC qui descend session apr&egrave;s
        session signale une <strong>migration baissiere</strong> : le
        march&eacute; accepte des prix de plus en plus bas. Le prix peut
        temporairement rebondir, mais si le POC continue de migrer vers le
        bas, le biais vendeur reste intact.
      </p>

      <h3>Migration intra-session</h3>

      <p>
        En temps r&eacute;el, vous pouvez observer le POC migrer au cours
        de la journ&eacute;e. En d&eacute;but de session, le POC
        s&apos;installe dans la zone de l&apos;Initial Balance. Si le
        march&eacute; d&eacute;veloppe du volume en extension haute, le
        POC <strong>migre vers le haut</strong> — c&apos;est la
        confirmation d&apos;un Trend Day haussier. Jim Dalton
        consid&egrave;re que la migration intra-session du POC est l&apos;un
        des signaux les plus fiables pour rester dans un trade
        directionnel.
      </p>

      <p>
        Un POC qui <strong>ne migre pas</strong> malgr&eacute; une
        extension de prix indique que le mouvement manque de conviction.
        Le prix explore de nouveaux niveaux, mais le gros du volume reste
        ancr&eacute; au m&ecirc;me endroit. C&apos;est typiquement un faux
        breakout : le march&eacute; finira probablement par revenir au POC
        initial.
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
          Astuce pratique
        </div>
        <p>
          Sur Sierra Chart ou ATAS, activez l&apos;affichage du{" "}
          <strong>Developing POC</strong> — le POC en temps r&eacute;el qui
          se met &agrave; jour tick apr&egrave;s tick. Quand vous voyez le
          Developing POC sauter de 5150 &agrave; 5155 puis 5160 en
          l&apos;espace de 2 heures, vous avez la confirmation visuelle
          d&apos;une migration haussiere active.
        </p>
      </div>

      <hr />

      <h2 id="naked-poc">
        Naked POC : les niveaux magn&eacute;tiques non test&eacute;s
      </h2>

      <p>
        Un <strong>Naked POC</strong> (ou nPOC) est un POC de session pass&eacute;e
        qui n&apos;a jamais &eacute;t&eacute; retest&eacute; par le prix.
        C&apos;est un concept fondamental du{" "}
        <a href="/blog/volume-profile-guide/">Volume Profile</a> et l&apos;un
        des niveaux les plus fiables que vous trouverez sur vos
        graphiques.
      </p>

      <p>
        La logique est simple : le POC repr&eacute;sente le prix
        d&apos;&eacute;quilibre d&apos;une session. Si le march&eacute;
        s&apos;&eacute;loigne de ce POC sans jamais y revenir, il laisse
        derri&egrave;re lui une &quot;dette&quot; — un niveau de consensus
        non r&eacute;solu. Le march&eacute; a une tendance naturelle
        &agrave; revenir combler ces dettes, parfois des jours ou des
        semaines plus tard.
      </p>

      <h3>Pourquoi les Naked POC fonctionnent</h3>

      <p>
        Les participants qui ont transact&eacute; au POC de cette session
        pass&eacute;e ont des positions ouvertes r&eacute;f&eacute;renc&eacute;es
        &agrave; ce prix. Quand le march&eacute; y revient, ces participants
        r&eacute;agissent : soit ils prennent leurs profits, soit ils
        d&eacute;fendent leur position. Cette concentration d&apos;int&eacute;r&ecirc;ts
        cr&eacute;e une <strong>r&eacute;action quasi
        syst&eacute;matique</strong> du prix au contact d&apos;un Naked POC.
      </p>

      <h3>Comment identifier et utiliser les Naked POC</h3>

      <ul>
        <li>
          <strong>Identification :</strong> Affichez les vPOC des 10 &agrave; 20
          derni&egrave;res sessions. Tout POC dont le prix n&apos;a pas
          touch&eacute; depuis sa cr&eacute;ation est un nPOC. Sur Sierra
          Chart, l&apos;&eacute;tude &quot;Volume Profile - Session&quot;
          avec l&apos;option &quot;Show POC&quot; les affiche
          automatiquement.
        </li>
        <li>
          <strong>Utilisation comme support/r&eacute;sistance :</strong> Un
          nPOC en dessous du prix actuel est un support potentiel de haute
          qualit&eacute;. Un nPOC au-dessus est une r&eacute;sistance. Plus
          le nPOC est ancien, plus la r&eacute;action &agrave; son contact
          peut &ecirc;tre significative.
        </li>
        <li>
          <strong>Utilisation comme objectif :</strong> Si vous &ecirc;tes
          short et qu&apos;un nPOC se situe 20 points plus bas, c&apos;est
          un objectif naturel — le march&eacute; a une dette &agrave; combler
          &agrave; ce niveau.
        </li>
      </ul>

      <p>
        Attention : un nPOC n&apos;est pas une garantie de retournement.
        Le march&eacute; peut traverser un nPOC s&apos;il est en tendance
        forte. Le nPOC provoque une <strong>r&eacute;action</strong>, pas
        n&eacute;cessairement un renversement. Surveillez le comportement
        sur le{" "}
        <a href="/blog/volume-profile-guide/">footprint</a> au contact du
        nPOC pour d&eacute;terminer si c&apos;est un rebond ou une simple
        pause avant continuation.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">R&egrave;gle des Naked POC</div>
        <h4>Plus ancien = plus magn&eacute;tique, pas forc&eacute;ment plus fort</h4>
        <p>
          Un nPOC de 5 jours est tr&egrave;s pertinent pour le day trading.
          Un nPOC de 3 semaines est un niveau macro int&eacute;ressant mais
          la probabilit&eacute; d&apos;une r&eacute;action nette diminue
          avec le temps car les positions associ&eacute;es se sont
          progressivement liquid&eacute;es. Le sweet spot est
          g&eacute;n&eacute;ralement entre 2 et 10 sessions.
        </p>
      </div>

      <hr />

      <h2 id="session-vs-composite">
        POC de session vs POC composite
      </h2>

      <p>
        La p&eacute;riode sur laquelle vous calculez le POC change
        radicalement son interpr&eacute;tation. C&apos;est une distinction
        que trop de traders n&eacute;gligent.
      </p>

      <h3>POC de session (Daily POC)</h3>

      <p>
        Le POC de session est calcul&eacute; sur une seule journ&eacute;e de
        trading (RTH — Regular Trading Hours). C&apos;est le prix
        d&apos;&eacute;quilibre de cette session sp&eacute;cifique. Il est
        utile pour le <strong>day trading</strong> : le POC de la veille
        (vPOC J-1) est un niveau de r&eacute;f&eacute;rence
        quasi-universel parmi les traders professionnels.
      </p>

      <p>
        Le POC de session vous donne des niveaux tactiques pr&eacute;cis.
        Le march&eacute; qui revient sur le vPOC J-1 teste le consensus
        de la veille. La r&eacute;action &agrave; ce test r&eacute;v&egrave;le
        si les conditions ont chang&eacute; ou non.
      </p>

      <h3>POC composite (multi-sessions)</h3>

      <p>
        Le POC composite est calcul&eacute; sur plusieurs sessions
        empil&eacute;es — g&eacute;n&eacute;ralement 5, 10 ou 20
        jours. Il repr&eacute;sente le prix d&apos;&eacute;quilibre{" "}
        <strong>macro</strong> du march&eacute;, la zone de valeur
        structurelle autour de laquelle tout le march&eacute; s&apos;organise.
      </p>

      <p>
        Le POC composite est plus lent &agrave; bouger mais beaucoup plus
        significatif quand il se d&eacute;place. Un changement de POC
        composite indique un <strong>changement structurel</strong> dans la
        perception de la valeur par le march&eacute;. Les swing traders et
        les position traders l&apos;utilisent comme ancre de
        r&eacute;f&eacute;rence pour leur biais directionnel.
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Crit&egrave;re</th>
            <th>POC de session</th>
            <th>POC composite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P&eacute;riode</td>
            <td>1 session (1 jour)</td>
            <td>5 &agrave; 20 sessions</td>
          </tr>
          <tr>
            <td>Sensibilit&eacute;</td>
            <td>&Eacute;lev&eacute;e (change chaque jour)</td>
            <td>Faible (change lentement)</td>
          </tr>
          <tr>
            <td>Usage</td>
            <td>Day trading, niveaux tactiques</td>
            <td>Swing, biais macro, structure</td>
          </tr>
          <tr>
            <td>Naked POC</td>
            <td>Niveaux magn&eacute;tiques court terme</td>
            <td>Zones d&apos;attraction long terme</td>
          </tr>
          <tr>
            <td>Fiabilit&eacute; comme S/R</td>
            <td>Bonne (2-5 jours)</td>
            <td>Excellente (semaines &agrave; mois)</td>
          </tr>
        </tbody>
      </table>

      <p>
        La combinaison id&eacute;ale : utilisez le POC composite pour
        d&eacute;terminer votre biais directionnel (le march&eacute; est-il
        au-dessus ou en dessous du POC composite ?), puis utilisez les POC
        de session pour trouver vos niveaux d&apos;entr&eacute;e
        pr&eacute;cis. Quand un POC de session co&iuml;ncide avec le POC
        composite, vous avez un niveau de <strong>confluence
        exceptionnelle</strong>.
      </p>

      <hr />

      <h2 id="strategies">
        4 strat&eacute;gies bas&eacute;es sur le POC
      </h2>

      <h3>1. Mean reversion vers le POC</h3>

      <p>
        C&apos;est la strat&eacute;gie la plus intuitive. Quand le prix
        s&apos;&eacute;loigne significativement du POC en cours de session
        (au-del&agrave; de la Value Area), et que vous observez des signes
        d&apos;essoufflement — delta d&eacute;croissant, absorption visible
        sur le footprint, diminution du volume agressif — vous jouez le
        retour vers le POC.
      </p>

      <ul>
        <li>
          <strong>Entr&eacute;e :</strong> Quand le prix touche la VAH ou la
          VAL et montre des signes de rejet (wick, absorption, delta
          divergent)
        </li>
        <li>
          <strong>Objectif :</strong> Le POC de la session en cours
        </li>
        <li>
          <strong>Stop :</strong> Au-del&agrave; du dernier HVN ext&eacute;rieur
          &agrave; la Value Area
        </li>
        <li>
          <strong>Contexte id&eacute;al :</strong> Journ&eacute;e Normal Day
          ou Normal Variation Day, POC centr&eacute;
        </li>
      </ul>

      <h3>2. Rebond sur Naked POC</h3>

      <p>
        Identifiez les nPOC des sessions r&eacute;centes (2 &agrave; 10
        jours). Quand le prix approche d&apos;un nPOC, preparez-vous &agrave;
        une r&eacute;action. Confirmez avec l&apos;order flow : si vous
        voyez de l&apos;absorption au contact du nPOC (volume &eacute;lev&eacute;
        sur le footprint sans d&eacute;placement du prix), c&apos;est un
        signal de rebond.
      </p>

      <ul>
        <li>
          <strong>Entr&eacute;e :</strong> Au contact du nPOC avec
          confirmation order flow (absorption, delta)
        </li>
        <li>
          <strong>Objectif :</strong> POC de la session en cours ou prochain
          HVN significatif
        </li>
        <li>
          <strong>Stop :</strong> 3-5 points au-del&agrave; du nPOC (selon
          le march&eacute;)
        </li>
        <li>
          <strong>Contexte id&eacute;al :</strong> nPOC confluent avec un
          autre niveau (VAH/VAL, VWAP)
        </li>
      </ul>

      <h3>3. Breakout confirm&eacute; par la migration du POC</h3>

      <p>
        Un breakout au-dessus de la VAH ou en dessous de la VAL est
        valid&eacute; quand le <strong>Developing POC migre dans la
        direction du breakout</strong>. Si le prix casse la VAH mais que le
        POC reste ancr&eacute; au milieu du range, m&eacute;fiez-vous
        — le march&eacute; n&apos;a pas accept&eacute; les nouveaux prix.
        Si le POC migre vers le haut apr&egrave;s la cassure, le breakout
        est l&eacute;gitime.
      </p>

      <ul>
        <li>
          <strong>Entr&eacute;e :</strong> Apr&egrave;s la cassure de la
          VAH/VAL, quand le Developing POC migre dans la direction du breakout
        </li>
        <li>
          <strong>Objectif :</strong> Prochain HVN ou nPOC dans la direction
          du mouvement
        </li>
        <li>
          <strong>Stop :</strong> Retour &agrave; l&apos;int&eacute;rieur de
          la Value Area
        </li>
        <li>
          <strong>Contexte id&eacute;al :</strong> Trend Day, volume
          croissant sur le breakout
        </li>
      </ul>

      <h3>4. Divergence tPOC / vPOC</h3>

      <p>
        Quand le tPOC (temps) et le vPOC (volume) sont
        s&eacute;par&eacute;s de plusieurs ticks, il y a une divergence
        dans la structure du march&eacute;. Le prix a tendance &agrave;
        &ecirc;tre attir&eacute; vers le vPOC car c&apos;est l&agrave; que
        l&apos;argent r&eacute;el se trouve. Vous pouvez donc jouer le
        mouvement du tPOC vers le vPOC.
      </p>

      <ul>
        <li>
          <strong>Entr&eacute;e :</strong> Si le prix est proche du tPOC et
          que le vPOC est 10+ ticks plus bas/haut
        </li>
        <li>
          <strong>Objectif :</strong> Le vPOC
        </li>
        <li>
          <strong>Stop :</strong> Au-del&agrave; du tPOC dans la direction
          oppos&eacute;e au vPOC
        </li>
        <li>
          <strong>Contexte id&eacute;al :</strong> Session avec profil
          distribu&eacute; (non sym&eacute;trique), volume &eacute;lev&eacute;
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
          Rappel essentiel
        </div>
        <p>
          Aucune de ces strat&eacute;gies ne fonctionne isol&eacute;ment.
          Le POC est un <strong>niveau de r&eacute;f&eacute;rence</strong>,
          pas un signal d&apos;entr&eacute;e automatique. Vous devez
          toujours confirmer avec l&apos;order flow, le delta et le
          contexte macro avant d&apos;engager une position. Le POC vous dit{" "}
          <em>o&ugrave;</em> regarder — le footprint et le CVD vous disent{" "}
          <em>quoi</em> faire.
        </p>
      </div>

      <hr />

      <h2 id="convergence">
        POC + VWAP + VAH/VAL : les zones de confluence
      </h2>

      <p>
        Le POC devient exponentiellement plus puissant quand il
        converge avec d&apos;autres niveaux de r&eacute;f&eacute;rence. La
        <strong> confluence</strong> — le regroupement de plusieurs niveaux
        ind&eacute;pendants en une m&ecirc;me zone de prix — est le
        fondement de toute approche institutionnelle.
      </p>

      <h3>POC + VWAP</h3>

      <p>
        Le <a href="/blog/vwap-trading-guide/">VWAP</a> (Volume Weighted
        Average Price) est le prix moyen pond&eacute;r&eacute; par le
        volume depuis le d&eacute;but de la session. Quand le POC et le
        VWAP convergent sur le m&ecirc;me niveau de prix, vous avez un{" "}
        <strong>double consensus</strong> : le prix d&apos;&eacute;quilibre
        calcul&eacute; par le profil (POC) et le prix moyen
        pond&eacute;r&eacute; par le volume (VWAP) sont identiques. Les
        institutionnels traitent massivement autour du VWAP — quand il
        co&iuml;ncide avec le POC, le niveau devient quasi
        imperm&eacute;able.
      </p>

      <h3>POC + VAH ou VAL</h3>

      <p>
        Si le POC de la session en cours se situe tr&egrave;s
        pr&egrave;s de la VAH ou VAL de la session
        pr&eacute;c&eacute;dente, cette zone cumule deux
        significations : prix d&apos;&eacute;quilibre actuel et borne de
        valeur pass&eacute;e. Un rebond sur ce niveau a une probabilit&eacute;
        &eacute;lev&eacute;e.
      </p>

      <h3>La triple confluence</h3>

      <p>
        La configuration la plus puissante est la{" "}
        <strong>triple confluence</strong> : le POC de la session J-1,
        le <a href="/blog/vwap-trading-guide/">VWAP</a> de la session en
        cours, et la VAH ou VAL composite convergent sur une zone de 2
        &agrave; 5 ticks. Ces zones sont rares mais quand elles
        apparaissent, la r&eacute;action du march&eacute; est presque
        toujours significative.
      </p>

      <p>
        En pratique, identifiez ces confluences <strong>avant
        l&apos;ouverture</strong>. Placez le vPOC J-1, la VAH J-1, la VAL
        J-1 et le POC composite sur votre graphique. D&egrave;s
        l&apos;ouverture, observez o&ugrave; le{" "}
        <a href="/blog/vwap-trading-guide/">VWAP</a> dynamique se
        rapproche de ces niveaux. Quand 2 ou 3 niveaux convergent en une
        zone de 3-5 points sur le ES par exemple, marquez-la comme zone
        prioritaire.
      </p>

      <div className="key-concept">
        <div className="key-concept-label">Principe de confluence</div>
        <h4>Un niveau seul est une suggestion. Trois niveaux confluents sont un ordre.</h4>
        <p>
          Le POC seul est un rep&egrave;re utile. Le POC + VWAP est un
          niveau fort. Le POC + VWAP + VAH/VAL est un mur. En trading
          professionnel, on ne risque du capital que sur des niveaux
          &agrave; forte confluence. Si un seul indicateur vous donne un
          signal, ce n&apos;est pas suffisant pour entrer en position.
        </p>
      </div>

      <hr />

      <h2 id="erreurs">
        Les erreurs d&apos;interpr&eacute;tation du POC
      </h2>

      <p>
        Le POC est un outil puissant, mais son apparente simplicit&eacute;
        conduit &agrave; de nombreuses erreurs. Voici les pi&egrave;ges les
        plus fr&eacute;quents et comment les &eacute;viter.
      </p>

      <h3>Erreur 1 : Traiter le POC comme un support/r&eacute;sistance inconditionnel</h3>

      <p>
        Le POC est un prix d&apos;&eacute;quilibre, pas un mur infranchissable.
        En Trend Day, le prix traversera le POC de la veille comme s&apos;il
        n&apos;existait pas. Le POC n&apos;est fiable comme S/R que dans un
        march&eacute; en <strong>rotation</strong> (range). En tendance, il
        ne fait que ralentir le mouvement, pas l&apos;arr&ecirc;ter.
        Toujours &eacute;valuer le contexte de march&eacute; avant de
        jouer un rebond sur le POC.
      </p>

      <h3>Erreur 2 : Ignorer le volume derriere le POC</h3>

      <p>
        Tous les POC ne se valent pas. Un POC form&eacute; sur un jour de
        faible volume (veille de jour f&eacute;ri&eacute;, session
        &eacute;court&eacute;e) a beaucoup moins de poids qu&apos;un POC
        form&eacute; sur une session &agrave; volume normal ou
        &eacute;lev&eacute;. V&eacute;rifiez toujours le volume total de
        la session avant d&apos;accorder de l&apos;importance &agrave; son
        POC.
      </p>

      <h3>Erreur 3 : Confondre le POC Globex et le POC RTH</h3>

      <p>
        Le POC calcul&eacute; sur la session &eacute;lectronique
        compl&egrave;te (ETH, incluant la nuit) et celui calcul&eacute;
        sur la session r&eacute;guli&egrave;re (RTH, 9h30-16h00 ET) sont
        souvent diff&eacute;rents. Les deux ont de la valeur, mais les
        confondre cr&eacute;e de la confusion. L&apos;usage standard en
        day trading est de se r&eacute;f&eacute;rer au{" "}
        <strong>POC RTH</strong> pour les niveaux de session et au{" "}
        <strong>POC ETH</strong> pour le contexte overnight. Les deux
        doivent &ecirc;tre affich&eacute;s s&eacute;par&eacute;ment.
      </p>

      <h3>Erreur 4 : Ne regarder que le POC de la veille</h3>

      <p>
        Le vPOC J-1 est le plus utilis&eacute;, mais s&apos;arr&ecirc;ter
        l&agrave; est une erreur. Les <strong>Naked POC</strong> des 5
        &agrave; 10 derni&egrave;res sessions sont tout aussi importants,
        parfois plus. Un nPOC de J-5 peut provoquer une r&eacute;action
        plus forte que le POC de la veille si le march&eacute; a
        laiss&eacute; une dette de volume non r&eacute;solue &agrave; ce
        niveau.
      </p>

      <h3>Erreur 5 : Oublier le profil composite</h3>

      <p>
        Le POC de session change chaque jour. Le POC composite change
        lentement. Si vous ne regardez que les POC de session sans les
        ancrer dans le POC composite, vous perdez la vision macro. Le
        march&eacute; respecte davantage le POC composite que les POC de
        session individuels car il repr&eacute;sente l&apos;acceptation
        de valeur &agrave; long terme par l&apos;ensemble des
        participants.
      </p>

      <h3>Erreur 6 : Entrer sur le POC sans confirmation</h3>

      <p>
        Trop de traders posent un limit order au POC et esperent un
        rebond. Le POC vous dit <em>o&ugrave;</em> le march&eacute; a
        trouv&eacute; l&apos;&eacute;quilibre, pas <em>ce qui va se
        passer</em> quand il y reviendra. Vous avez besoin d&apos;une
        confirmation en temps r&eacute;el : le comportement du prix au
        contact du POC, l&apos;order flow, le delta, le CVD. Un POC
        sans confirmation order flow est un pari, pas un trade.
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
          En r&eacute;sum&eacute;
        </div>
        <p>
          Le POC est l&apos;un des concepts les plus importants du{" "}
          <a href="/blog/market-profile-guide-complet/">Market Profile</a> et du{" "}
          <a href="/blog/volume-profile-guide/">Volume Profile</a>. Il
          r&eacute;pond &agrave; la question fondamentale : o&ugrave; est le prix
          d&apos;&eacute;quilibre ? Combinez le POC de session pour vos niveaux
          tactiques, le POC composite pour votre biais macro, les Naked POC pour
          vos objectifs, et les confluences avec le{" "}
          <a href="/blog/vwap-trading-guide/">VWAP</a> pour vos entr&eacute;es
          de haute probabilit&eacute;. Et surtout, ne tradez jamais un POC
          sans confirmation order flow.
        </p>
      </div>
    </>
  );
}
