export default function FiscaliteTrading() {
  return (
    <>
      <p>La fiscalit&eacute; du trading en France est un sujet que la plupart des traders ignorent — jusqu&apos;au jour o&ugrave; ils re&ccedil;oivent un courrier du fisc. Apr&egrave;s plus de 10 ans de trading sur les Futures et des centaines de d&eacute;clarations g&eacute;r&eacute;es (les miennes et celles de mes &eacute;l&egrave;ves), je vous donne ici tout ce qu&apos;il faut savoir pour &ecirc;tre en r&egrave;gle et optimiser l&eacute;galement votre imposition.</p>
      <p>Cet article est &agrave; jour pour <strong>l&apos;ann&eacute;e fiscale 2026</strong>. Il couvre les r&eacute;gimes fiscaux, la flat tax, la d&eacute;claration pas &agrave; pas, les statuts juridiques, les cas particuliers (prop firms, Futures, comptes &agrave; l&apos;&eacute;tranger) et les strat&eacute;gies d&apos;optimisation fiscale l&eacute;gales.</p>

      <div className="key-concept">
        <div className="key-concept-label">Avertissement</div>
        <h4>Cet article est informatif, pas un conseil fiscal personnalis&eacute;</h4>
        <p>Chaque situation est diff&eacute;rente. Je partage mon exp&eacute;rience et ma compr&eacute;hension de la fiscalit&eacute; du trading en France, mais <strong>consultez un expert-comptable ou un avocat fiscaliste</strong> pour votre cas pr&eacute;cis. Les montants et seuils indiqu&eacute;s sont ceux en vigueur au 1er janvier 2026.</p>
      </div>

      <hr />

      <h2 id="regime">Quel r&eacute;gime fiscal pour les traders en France ?</h2>
      <p>En France, la fiscalit&eacute; de vos gains de trading d&eacute;pend de <strong>votre statut</strong> et de <strong>la nature de votre activit&eacute;</strong>. Deux grandes cat&eacute;gories existent :</p>

      <h3>1. Le trader particulier (occasionnel)</h3>
      <p>Si vous tradez &agrave; titre personnel, sans que ce soit votre activit&eacute; principale, vos gains sont class&eacute;s en <strong>plus-values de cessions de valeurs mobili&egrave;res</strong>. C&apos;est le cas de la majorit&eacute; des traders particuliers en France. Vos gains rel&egrave;vent alors du <strong>Pr&eacute;l&egrave;vement Forfaitaire Unique (PFU)</strong>, aussi appel&eacute; &quot;flat tax&quot;, au taux global de 30%.</p>
      <p>Ce r&eacute;gime s&apos;applique automatiquement. Vous n&apos;avez rien &agrave; demander, rien &agrave; d&eacute;clarer comme statut. Vous d&eacute;clarez simplement vos gains sur votre d&eacute;claration de revenus annuelle.</p>

      <h3>2. Le trader professionnel (habituel)</h3>
      <p>Si le trading constitue votre <strong>activit&eacute; principale</strong> — c&apos;est-&agrave;-dire que vous y consacrez l&apos;essentiel de votre temps, que vos gains repr&eacute;sentent votre source de revenus principale, et que vous op&eacute;rez de mani&egrave;re r&eacute;guli&egrave;re avec des montants significatifs — l&apos;administration fiscale peut requalifier vos gains en <strong>B&eacute;n&eacute;fices Non Commerciaux (BNC)</strong>.</p>
      <p>La distinction est cruciale car elle change compl&egrave;tement votre imposition. Le BNC est soumis au bar&egrave;me progressif de l&apos;imp&ocirc;t sur le revenu + cotisations sociales.</p>

      <div className="info-box">
        <div className="info-box-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
          {' '}Crit&egrave;res de requalification
        </div>
        <p>L&apos;administration fiscale regarde plusieurs indices pour d&eacute;terminer si vous &ecirc;tes &quot;professionnel&quot; : <strong>la fr&eacute;quence des op&eacute;rations</strong>, <strong>les montants engag&eacute;s</strong>, <strong>le temps consacr&eacute;</strong>, <strong>les outils utilis&eacute;s</strong> (abonnements professionnels, flux de donn&eacute;es, logiciels sp&eacute;cialis&eacute;s), et surtout <strong>si c&apos;est votre source de revenus principale</strong>. Il n&apos;y a pas de seuil fixe — c&apos;est un faisceau d&apos;indices.</p>
      </div>

      <table className="compare-table">
        <thead>
          <tr><th>Crit&egrave;re</th><th>Trader particulier</th><th>Trader professionnel</th></tr>
        </thead>
        <tbody>
          <tr><td>R&eacute;gime fiscal</td><td>PFU (flat tax 30%)</td><td>BNC (bar&egrave;me progressif + cotisations)</td></tr>
          <tr><td>D&eacute;claration</td><td>2042 + 2074 (ex-2086)</td><td>2035 + 2042</td></tr>
          <tr><td>Cotisations sociales</td><td>17,2% (inclus dans les 30%)</td><td>URSSAF ~22% + imp&ocirc;t sur le revenu</td></tr>
          <tr><td>D&eacute;duction des charges</td><td>Non</td><td>Oui (mat&eacute;riel, formation, abonnements)</td></tr>
          <tr><td>Report des pertes</td><td>Oui, sur 10 ans</td><td>Oui, sur 6 ans</td></tr>
          <tr><td>Taux effectif (TMI 30%)</td><td>30% fixe</td><td>~45-55% selon les revenus</td></tr>
        </tbody>
      </table>

      <hr />

      <h2 id="flat-tax">La flat tax &agrave; 30% : comment &ccedil;a marche exactement</h2>
      <p>Le Pr&eacute;l&egrave;vement Forfaitaire Unique (PFU), instaur&eacute; par la loi de finances 2018, est le r&eacute;gime par d&eacute;faut pour les gains de trading des particuliers en France. Il se d&eacute;compose ainsi :</p>
      <ul>
        <li><strong>12,8%</strong> d&apos;imp&ocirc;t sur le revenu</li>
        <li><strong>17,2%</strong> de pr&eacute;l&egrave;vements sociaux (CSG 9,2% + CRDS 0,5% + pr&eacute;l&egrave;vement de solidarit&eacute; 7,5%)</li>
      </ul>
      <p>Total : <strong>30% de vos plus-values nettes</strong>. C&apos;est simple, c&apos;est pr&eacute;visible, et c&apos;est souvent avantageux.</p>

      <h3>Exemple concret</h3>
      <p>Vous avez r&eacute;alis&eacute; <strong>25 000 &euro; de gains nets</strong> en trading sur l&apos;ann&eacute;e 2025 (d&eacute;clar&eacute;s en 2026). Voici le calcul :</p>
      <ul>
        <li>Imp&ocirc;t sur le revenu : 25 000 &times; 12,8% = <strong>3 200 &euro;</strong></li>
        <li>Pr&eacute;l&egrave;vements sociaux : 25 000 &times; 17,2% = <strong>4 300 &euro;</strong></li>
        <li>Total d&ucirc; : <strong>7 500 &euro;</strong></li>
        <li>Il vous reste : <strong>17 500 &euro; net</strong></li>
      </ul>

      <h3>L&apos;option pour le bar&egrave;me progressif</h3>
      <p>Vous pouvez renoncer au PFU et opter pour le <strong>bar&egrave;me progressif de l&apos;imp&ocirc;t sur le revenu</strong>. Cette option est globale — elle s&apos;applique &agrave; <strong>tous</strong> vos revenus du capital (dividendes, int&eacute;r&ecirc;ts, plus-values).</p>
      <p>Quand est-ce int&eacute;ressant ? Si votre tranche marginale d&apos;imposition (TMI) est &agrave; <strong>0% ou 11%</strong>. Dans ce cas, vous payez moins que les 12,8% du PFU. En revanche, si vous &ecirc;tes dans la tranche &agrave; 30% ou plus, la flat tax est presque toujours plus avantageuse.</p>

      <div className="key-concept">
        <div className="key-concept-label">R&egrave;gle pratique</div>
        <h4>Bar&egrave;me progressif de l&apos;IR en 2026</h4>
        <p>Tranche &agrave; 0% : jusqu&apos;&agrave; 11 497 &euro; | Tranche &agrave; 11% : de 11 497 &agrave; 29 315 &euro; | Tranche &agrave; 30% : de 29 315 &agrave; 83 823 &euro; | Tranche &agrave; 41% : de 83 823 &agrave; 180 294 &euro; | Tranche &agrave; 45% : au-del&agrave; de 180 294 &euro;. <strong>Si votre revenu imposable total (salaire + trading) vous place dans la tranche &agrave; 30% ou plus, gardez la flat tax.</strong></p>
      </div>

      <h3>Le report des pertes</h3>
      <p>Point essentiel : si vous avez r&eacute;alis&eacute; des <strong>moins-values</strong>, elles sont reportables sur <strong>10 ans</strong>. Vous pouvez les imputer sur vos plus-values futures. C&apos;est un m&eacute;canisme puissant mais souvent oubli&eacute;.</p>
      <p>Exemple : en 2024, vous perdez 8 000 &euro;. En 2025, vous gagnez 15 000 &euro;. Vous ne payez la flat tax que sur 15 000 - 8 000 = <strong>7 000 &euro;</strong>, soit 2 100 &euro; d&apos;imp&ocirc;t au lieu de 4 500 &euro;. &Eacute;conomie : <strong>2 400 &euro;</strong>.</p>
      <p>Encore faut-il avoir <strong>d&eacute;clar&eacute; les pertes l&apos;ann&eacute;e o&ugrave; elles se sont produites</strong>. Si vous ne d&eacute;clarez pas vos moins-values, vous perdez d&eacute;finitivement le droit de les reporter.</p>

      <hr />

      <h2 id="declaration">Comment d&eacute;clarer ses gains de trading (&eacute;tape par &eacute;tape)</h2>
      <p>La d&eacute;claration des gains de trading se fait lors de la d&eacute;claration annuelle de revenus, g&eacute;n&eacute;ralement entre avril et juin. Voici la proc&eacute;dure compl&egrave;te :</p>

      <h3>&Eacute;tape 1 : R&eacute;unir vos documents</h3>
      <p>Avant de commencer, vous avez besoin de :</p>
      <ul>
        <li><strong>L&apos;IFU (Imprim&eacute; Fiscal Unique)</strong> — fourni par votre courtier fran&ccedil;ais (si applicable). Les courtiers &eacute;trangers n&apos;en fournissent g&eacute;n&eacute;ralement pas.</li>
        <li><strong>Votre historique de trades</strong> — Toutes les op&eacute;rations de l&apos;ann&eacute;e avec les dates, montants d&apos;achat, montants de vente, frais.</li>
        <li><strong>Le r&eacute;capitulatif annuel</strong> de votre plateforme (gains/pertes r&eacute;alis&eacute;s, frais de commission).</li>
        <li><strong>Les taux de change</strong> si vous tradez en dollars (la plupart des Futures sont en USD).</li>
      </ul>

      <h3>&Eacute;tape 2 : Calculer votre plus-value nette</h3>
      <p>La formule est simple en th&eacute;orie :</p>
      <p><strong>Plus-value nette = Total des gains r&eacute;alis&eacute;s - Total des pertes r&eacute;alis&eacute;es - Frais (commissions, spread, abonnements aux donn&eacute;es)</strong></p>
      <p>Attention : seules les plus-values <strong>r&eacute;alis&eacute;es</strong> comptent. Tant que vous n&apos;avez pas cl&ocirc;tur&eacute; une position, il n&apos;y a ni gain ni perte fiscale. Les positions ouvertes au 31 d&eacute;cembre ne sont pas imposables (sauf pour les Futures, voir la section d&eacute;di&eacute;e).</p>

      <h3>&Eacute;tape 3 : Remplir les formulaires</h3>
      <p>Sur <strong>impots.gouv.fr</strong>, cochez les cases suivantes dans les annexes :</p>
      <ol>
        <li><strong>Formulaire 2074</strong> (anciennement 2086 pour les actifs num&eacute;riques) — D&eacute;tail des plus-values et moins-values de cession de valeurs mobili&egrave;res. C&apos;est ici que vous d&eacute;taillez chaque op&eacute;ration ou, si vous avez beaucoup de trades, le r&eacute;capitulatif global.</li>
        <li><strong>Formulaire 2042</strong> — D&eacute;claration principale. Reportez le montant net dans la case <strong>3VG</strong> (plus-values) ou <strong>3VH</strong> (moins-values). Pour la flat tax, c&apos;est la case 3VG qui s&apos;applique par d&eacute;faut.</li>
        <li><strong>Formulaire 2042-C</strong> — Si vous optez pour le bar&egrave;me progressif, cochez la case <strong>2OP</strong>.</li>
        <li><strong>Formulaire 3916 / 3916-bis</strong> — Si vous avez un compte de trading &agrave; l&apos;&eacute;tranger (voir section d&eacute;di&eacute;e).</li>
      </ol>

      <div className="info-box">
        <div className="info-box-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
          {' '}Astuce pratique
        </div>
        <p>Si vous avez des centaines ou des milliers de trades, vous n&apos;&ecirc;tes pas oblig&eacute; de lister chaque op&eacute;ration dans le formulaire 2074. Vous pouvez joindre un <strong>r&eacute;capitulatif annuel</strong> (fichier Excel ou PDF export&eacute; de votre plateforme) et indiquer le total net. Gardez l&apos;historique d&eacute;taill&eacute; pendant <strong>3 ans</strong> (d&eacute;lai de reprise de l&apos;administration fiscale, pouvant aller &agrave; 6 ans en cas d&apos;activit&eacute; occulte).</p>
      </div>

      <h3>&Eacute;tape 4 : V&eacute;rifier et valider</h3>
      <p>Relisez tout. V&eacute;rifiez que le montant en <strong>3VG</strong> correspond bien &agrave; votre calcul. Si vous avez des moins-values report&eacute;es des ann&eacute;es pr&eacute;c&eacute;dentes, v&eacute;rifiez qu&apos;elles apparaissent bien et sont imput&eacute;es correctement. Validez. C&apos;est fait.</p>

      <hr />

      <h2 id="statut">BNC, micro-BNC, soci&eacute;t&eacute; : quel statut pour un trader ?</h2>
      <p>Si vous d&eacute;passez le stade du trading occasionnel et que c&apos;est votre activit&eacute; principale, vous devez choisir un statut. Voici les options :</p>

      <h3>1. BNC au r&eacute;el (d&eacute;claration contr&ocirc;l&eacute;e)</h3>
      <p>C&apos;est le r&eacute;gime le plus courant pour le <strong>trader ind&eacute;pendant professionnel</strong>. Les BNC (B&eacute;n&eacute;fices Non Commerciaux) s&apos;appliquent aux activit&eacute;s lib&eacute;rales et assimil&eacute;es.</p>
      <ul>
        <li><strong>Avantages</strong> : D&eacute;duction int&eacute;grale des charges r&eacute;elles (mat&eacute;riel informatique, abonnements aux donn&eacute;es de march&eacute;, formations, logiciels comme Sierra Chart, d&eacute;placement, bureau &agrave; domicile...). Cr&eacute;dibilit&eacute; aupr&egrave;s de l&apos;administration.</li>
        <li><strong>Inconv&eacute;nients</strong> : Comptabilit&eacute; obligatoire (d&eacute;claration 2035), cotisations URSSAF (~22% du b&eacute;n&eacute;fice), imp&ocirc;t sur le revenu au bar&egrave;me progressif.</li>
        <li><strong>Taux effectif</strong> : Pour un b&eacute;n&eacute;fice de 60 000 &euro;, comptez environ 22% de cotisations + imp&ocirc;t sur le revenu (TMI 30%), soit un taux global d&apos;environ <strong>45-50%</strong>.</li>
      </ul>

      <h3>2. Micro-BNC</h3>
      <p>Le r&eacute;gime simplifi&eacute; pour les revenus BNC inf&eacute;rieurs &agrave; <strong>77 700 &euro; par an</strong> (seuil 2026). L&apos;administration applique un abattement forfaitaire de <strong>34%</strong> pour frais professionnels.</p>
      <ul>
        <li><strong>Avantages</strong> : Simplicit&eacute; extr&ecirc;me. Pas de comptabilit&eacute;, pas de d&eacute;claration 2035. Juste le chiffre d&apos;affaires &agrave; reporter.</li>
        <li><strong>Inconv&eacute;nients</strong> : Si vos charges r&eacute;elles d&eacute;passent 34% de votre CA, vous payez trop d&apos;imp&ocirc;t. Pas de d&eacute;duction des pertes.</li>
        <li><strong>Taux effectif</strong> : Sur 50 000 &euro; de gains, base imposable = 33 000 &euro; (apr&egrave;s abattement 34%). Cotisations + IR sur cette base.</li>
      </ul>

      <h3>3. EURL / SASU</h3>
      <p>Cr&eacute;er une soci&eacute;t&eacute; pour trader est une option viable &agrave; partir d&apos;un certain niveau de revenus (g&eacute;n&eacute;ralement au-del&agrave; de <strong>80 000 - 100 000 &euro; de b&eacute;n&eacute;fice annuel</strong>).</p>

      <table className="compare-table">
        <thead>
          <tr><th>Structure</th><th>EURL (IS)</th><th>SASU (IS)</th></tr>
        </thead>
        <tbody>
          <tr><td>Imp&ocirc;t sur les b&eacute;n&eacute;fices</td><td>IS 15% jusqu&apos;&agrave; 42 500 &euro;, puis 25%</td><td>IS 15% jusqu&apos;&agrave; 42 500 &euro;, puis 25%</td></tr>
          <tr><td>R&eacute;mun&eacute;ration du dirigeant</td><td>TNS (cotisations ~45%)</td><td>Assimil&eacute; salari&eacute; (cotisations ~80%)</td></tr>
          <tr><td>Dividendes</td><td>Flat tax 30% (au-del&agrave; de 10% du capital : cotisations TNS)</td><td>Flat tax 30% uniquement</td></tr>
          <tr><td>Comptabilit&eacute;</td><td>Obligatoire (bilan, compte de r&eacute;sultat)</td><td>Obligatoire (bilan, compte de r&eacute;sultat)</td></tr>
          <tr><td>Co&ucirc;t annuel comptable</td><td>1 500 - 3 000 &euro;</td><td>2 000 - 4 000 &euro;</td></tr>
        </tbody>
      </table>

      <p>L&apos;int&eacute;r&ecirc;t de la soci&eacute;t&eacute; : vous pouvez vous verser une <strong>r&eacute;mun&eacute;ration optimis&eacute;e</strong> (juste assez pour couvrir vos besoins) et laisser le reste dans la soci&eacute;t&eacute; (impos&eacute; &agrave; 15% ou 25%). Vous pouvez ensuite vous verser des dividendes soumis &agrave; la flat tax. Le taux global peut descendre &agrave; <strong>35-40%</strong> contre 50%+ en BNC pur.</p>

      <div className="key-concept">
        <div className="key-concept-label">Mon conseil</div>
        <h4>Ne vous pr&eacute;cipitez pas sur la soci&eacute;t&eacute;</h4>
        <p>Cr&eacute;er une EURL ou SASU a un co&ucirc;t fixe (comptable, CFE, formalit&eacute;s). En dessous de 80 000 &euro; de b&eacute;n&eacute;fice annuel, le BNC au r&eacute;el est g&eacute;n&eacute;ralement plus simple et &eacute;quivalent fiscalement. <strong>Commencez en BNC, passez en soci&eacute;t&eacute; quand les chiffres le justifient.</strong></p>
      </div>

      <hr />

      <h2 id="prop-firm">Fiscalit&eacute; des gains en prop firm</h2>
      <p>Les <a href="/blog/prop-firm-funded-trader/">prop firms</a> posent un probl&egrave;me fiscal sp&eacute;cifique que beaucoup de traders ignorent. Et l&apos;administration fiscale commence &agrave; s&apos;y int&eacute;resser de pr&egrave;s.</p>

      <h3>Le probl&egrave;me : ce ne sont pas des plus-values classiques</h3>
      <p>Quand vous tradez avec le capital d&apos;une prop firm, <strong>vous ne poss&eacute;dez pas les actifs</strong>. Vous ne r&eacute;alisez pas de plus-values de cession au sens fiscal du terme. Ce que vous recevez, c&apos;est une <strong>r&eacute;mun&eacute;ration pour service rendu</strong> — la gestion du capital de la firme.</p>
      <p>Cons&eacute;quence : les payouts de prop firms ne rel&egrave;vent pas de la flat tax &agrave; 30%. Ils sont imposables dans la cat&eacute;gorie des <strong>BNC (B&eacute;n&eacute;fices Non Commerciaux)</strong>, comme n&apos;importe quelle activit&eacute; lib&eacute;rale.</p>

      <h3>Implications concr&egrave;tes</h3>
      <ul>
        <li><strong>Bar&egrave;me progressif de l&apos;IR</strong> + pr&eacute;l&egrave;vements sociaux (pas de flat tax)</li>
        <li><strong>Cotisations URSSAF</strong> si vous d&eacute;passez un certain seuil de r&eacute;gularit&eacute;</li>
        <li>Obligation de <strong>d&eacute;clarer les comptes &agrave; l&apos;&eacute;tranger</strong> (les prop firms sont g&eacute;n&eacute;ralement bas&eacute;es hors de France)</li>
        <li>Le <strong>formulaire 3916</strong> est obligatoire pour chaque compte de prop firm</li>
      </ul>

      <h3>Exemple chiffr&eacute; : payout prop firm</h3>
      <p>Vous recevez <strong>3 000 &euro; par mois</strong> de payout d&apos;une prop firm, soit 36 000 &euro; par an. Si c&apos;est votre seule activit&eacute; :</p>
      <ul>
        <li>En micro-BNC : base imposable = 36 000 &times; 66% = 23 760 &euro;. IR + cotisations sur cette base.</li>
        <li>En BNC au r&eacute;el : vous d&eacute;duisez vos charges r&eacute;elles (abonnements, challenges rat&eacute;s, mat&eacute;riel). Si charges = 8 000 &euro;, base = 28 000 &euro;.</li>
        <li>Taux effectif estim&eacute; : entre <strong>30 et 40%</strong> selon votre situation familiale et vos autres revenus.</li>
      </ul>

      <div className="info-box">
        <div className="info-box-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
          {' '}Important pour les funded traders
        </div>
        <p>Les challenges de prop firm que vous payez et &eacute;chouez sont des <strong>charges d&eacute;ductibles</strong> en BNC au r&eacute;el. Si vous avez pay&eacute; 5 challenges &agrave; 200 &euro; avant de r&eacute;ussir, ces 1 000 &euro; viennent en d&eacute;duction de vos revenus. <strong>Gardez toutes les factures.</strong></p>
      </div>

      <hr />

      <h2 id="futures">Cas particulier : Futures et march&eacute;s r&eacute;glement&eacute;s</h2>
      <p>Si vous tradez les Futures sur le CME (ES, NQ, CL, GC...) — ce qui est le cas de la majorit&eacute; des &eacute;l&egrave;ves BASS Trading — il y a des sp&eacute;cificit&eacute;s fiscales &agrave; conna&icirc;tre.</p>

      <h3>La r&egrave;gle du mark-to-market</h3>
      <p>Les contrats Futures sont des <strong>instruments financiers &agrave; terme (IFT)</strong>. En droit fiscal fran&ccedil;ais, les gains et pertes sur IFT sont des <strong>plus-values de cessions de valeurs mobili&egrave;res</strong> et rel&egrave;vent de l&apos;article 150 ter du CGI.</p>
      <p>Particularit&eacute; : les Futures sont sold&eacute;s quotidiennement (<strong>daily settlement</strong>). Chaque jour, votre profit ou perte est mat&eacute;rialis&eacute;. Fiscalement, c&apos;est le <strong>r&eacute;sultat r&eacute;alis&eacute; &agrave; la cl&ocirc;ture de chaque position</strong> qui compte, pas le mark-to-market journalier. Tant que vous maintenez une position ouverte, il n&apos;y a pas d&apos;&eacute;v&eacute;nement fiscal.</p>

      <h3>Le probl&egrave;me du dollar</h3>
      <p>Les Futures du CME sont libell&eacute;s en <strong>dollars am&eacute;ricains</strong>. Or, l&apos;administration fiscale fran&ccedil;aise raisonne en euros. Vous devez convertir chaque gain/perte au <strong>taux de change du jour de la cl&ocirc;ture de la position</strong>.</p>
      <p>En pratique, la plupart des traders utilisent le <strong>taux de change moyen annuel</strong> publi&eacute; par la Banque de France ou la BCE. C&apos;est accept&eacute; par l&apos;administration tant que vous &ecirc;tes coh&eacute;rent d&apos;une ann&eacute;e sur l&apos;autre.</p>

      <h3>Les frais d&eacute;ductibles sur Futures</h3>
      <p>En tant que particulier soumis &agrave; la flat tax, vous pouvez d&eacute;duire les <strong>frais d&apos;acquisition et de cession</strong> directement du calcul de la plus-value. Cela inclut :</p>
      <ul>
        <li>Les <strong>commissions</strong> de courtage (par trade)</li>
        <li>Les <strong>frais de bourse</strong> (exchange fees, NFA fees)</li>
        <li>Les <strong>frais de compensation</strong> (clearing fees)</li>
      </ul>
      <p>En revanche, les <strong>abonnements aux donn&eacute;es de march&eacute;</strong> (CME market data, Sierra Chart) ne sont d&eacute;ductibles qu&apos;en BNC, pas en flat tax.</p>

      <hr />

      <h2 id="comptes-etranger">D&eacute;claration des comptes &agrave; l&apos;&eacute;tranger (formulaire 3916)</h2>
      <p>C&apos;est la bombe &agrave; retardement fiscale la plus fr&eacute;quente chez les traders. <strong>Si vous avez un compte de trading chez un courtier &eacute;tranger, vous devez le d&eacute;clarer.</strong> Point.</p>

      <h3>Qui est concern&eacute; ?</h3>
      <p>Tout r&eacute;sident fiscal fran&ccedil;ais qui d&eacute;tient, utilise ou cl&ocirc;ture un compte &agrave; l&apos;&eacute;tranger au cours de l&apos;ann&eacute;e. Cela inclut :</p>
      <ul>
        <li>Les comptes chez <strong>Interactive Brokers</strong> (si&egrave;ge aux USA / Irlande / UK)</li>
        <li>Les comptes chez <strong>AMP Futures, NinjaTrader Brokerage, Tradovate</strong> (USA)</li>
        <li>Les comptes de <strong>prop firms</strong> (FTMO, TopStep, Apex, etc.)</li>
        <li>Les comptes <strong>Wise, Payoneer, Revolut</strong> utilis&eacute;s pour recevoir des payouts</li>
        <li>Tout compte <strong>PayPal</strong> rattach&eacute; &agrave; une entit&eacute; &eacute;trang&egrave;re si utilis&eacute; pour des transactions financi&egrave;res</li>
      </ul>

      <h3>Le formulaire 3916 / 3916-bis</h3>
      <p>Le formulaire <strong>3916</strong> sert &agrave; d&eacute;clarer les comptes bancaires &agrave; l&apos;&eacute;tranger. Le <strong>3916-bis</strong> concerne sp&eacute;cifiquement les comptes d&apos;actifs num&eacute;riques. Pour un compte de trading Futures chez un courtier am&eacute;ricain, c&apos;est le <strong>3916</strong> qui s&apos;applique.</p>
      <p>Informations &agrave; fournir :</p>
      <ul>
        <li>Nom et adresse de l&apos;&eacute;tablissement financier</li>
        <li>Num&eacute;ro de compte</li>
        <li>Date d&apos;ouverture (et de cl&ocirc;ture le cas &eacute;ch&eacute;ant)</li>
        <li>Pays du si&egrave;ge de l&apos;&eacute;tablissement</li>
      </ul>

      <div className="key-concept">
        <div className="key-concept-label">Sanction</div>
        <h4>1 500 &euro; d&apos;amende par compte non d&eacute;clar&eacute;</h4>
        <p>L&apos;amende est de <strong>1 500 &euro; par compte et par ann&eacute;e</strong> de non-d&eacute;claration. Elle monte &agrave; <strong>10 000 &euro;</strong> si le compte est dans un &Eacute;tat non coop&eacute;ratif (liste noire). De plus, l&apos;administration peut pr&eacute;sumer que les sommes sont des revenus imposables et appliquer une <strong>majoration de 80%</strong>. Ne jouez pas avec &ccedil;a.</p>
      </div>

      <h3>Cas pratique : Interactive Brokers</h3>
      <p>Vous avez un compte chez Interactive Brokers (entit&eacute; irlandaise, IBKR Ireland). Vous devez d&eacute;clarer :</p>
      <ul>
        <li><strong>Formulaire 3916</strong> : compte n&deg;UXXXXXX, Interactive Brokers Ireland Limited, 10 Earlsfort Terrace, Dublin 2, Irlande</li>
        <li><strong>Formulaire 2074</strong> : gains/pertes de l&apos;ann&eacute;e sur ce compte</li>
        <li><strong>Case 3VG ou 3VH</strong> du 2042 : total net</li>
      </ul>
      <p>M&ecirc;me si votre compte est &agrave; z&eacute;ro ou si vous n&apos;avez pas trad&eacute; de l&apos;ann&eacute;e, tant que le compte est ouvert, vous devez le d&eacute;clarer.</p>

      <hr />

      <h2 id="optimisation">Strat&eacute;gies d&apos;optimisation fiscale l&eacute;gales</h2>
      <p>Optimiser sa fiscalit&eacute; ne veut pas dire frauder. Il existe des leviers parfaitement l&eacute;gaux pour r&eacute;duire votre charge fiscale. Voici ceux que j&apos;utilise et recommande &agrave; mes &eacute;l&egrave;ves :</p>

      <h3>1. Reporter syst&eacute;matiquement les moins-values</h3>
      <p>Je le r&eacute;p&egrave;te : <strong>d&eacute;clarez toujours vos pertes</strong>. M&ecirc;me si vous n&apos;avez pas de gains cette ann&eacute;e-l&agrave;. Elles seront reportables pendant 10 ans et viendront s&apos;imputer sur vos gains futurs. C&apos;est de l&apos;argent que vous r&eacute;cup&eacute;rez plus tard.</p>

      <h3>2. Choisir le bon r&eacute;gime (flat tax vs bar&egrave;me)</h3>
      <p>Faites le calcul chaque ann&eacute;e. Si vos revenus totaux vous placent dans les tranches basses (0% ou 11%), le bar&egrave;me progressif peut &ecirc;tre plus avantageux que la flat tax. L&apos;option est exerc&eacute;e chaque ann&eacute;e — vous pouvez changer d&apos;un an sur l&apos;autre.</p>
      <p>Sc&eacute;nario : un &eacute;tudiant qui fait du trading avec 10 000 &euro; de gains et pas d&apos;autre revenu. Au bar&egrave;me progressif : ~0% d&apos;IR (sous le seuil) + 17,2% de pr&eacute;l&egrave;vements sociaux = <strong>17,2%</strong> au lieu de 30%. &Eacute;conomie : <strong>1 280 &euro;</strong>.</p>

      <h3>3. D&eacute;duire toutes les charges en BNC</h3>
      <p>Si vous &ecirc;tes en BNC au r&eacute;el, d&eacute;duisez <strong>tout ce qui est l&eacute;gitime</strong> :</p>
      <ul>
        <li>Abonnement Sierra Chart, data CME, CQG</li>
        <li>Mat&eacute;riel informatique (PC, &eacute;crans, UPS)</li>
        <li>Formations de trading (d&eacute;ductibles &agrave; 100%)</li>
        <li>Connexion internet (quote-part professionnelle)</li>
        <li>Bureau &agrave; domicile (quote-part du loyer, &eacute;lectricit&eacute;)</li>
        <li>Frais de challenges prop firm</li>
        <li>Honoraires comptable et avocat fiscaliste</li>
        <li>Livres et ressources de trading</li>
      </ul>

      <h3>4. Le PEA pour les actions (si applicable)</h3>
      <p>Si vous tradez aussi des actions fran&ccedil;aises et europ&eacute;ennes, le <strong>Plan d&apos;&Eacute;pargne en Actions (PEA)</strong> offre une exon&eacute;ration d&apos;imp&ocirc;t sur le revenu apr&egrave;s 5 ans de d&eacute;tention (vous ne payez que les 17,2% de pr&eacute;l&egrave;vements sociaux). Le plafond de versement est de <strong>150 000 &euro;</strong>. Attention : le PEA ne permet pas de trader les Futures ou les CFD.</p>

      <h3>5. Timing des pertes (tax-loss harvesting)</h3>
      <p>En fin d&apos;ann&eacute;e, si vous avez des positions perdantes, vous pouvez les cl&ocirc;turer pour <strong>cristalliser la moins-value</strong> et la d&eacute;duire de vos gains. Rien ne vous emp&ecirc;che de reprendre la m&ecirc;me position en janvier. Cette technique, appel&eacute;e &quot;tax-loss harvesting&quot;, est parfaitement l&eacute;gale en France (contrairement aux USA o&ugrave; la &quot;wash sale rule&quot; l&apos;interdit dans les 30 jours).</p>

      <h3>6. Passer en soci&eacute;t&eacute; au bon moment</h3>
      <p>Comme vu plus haut, la soci&eacute;t&eacute; (EURL/SASU &agrave; l&apos;IS) devient int&eacute;ressante quand vos b&eacute;n&eacute;fices d&eacute;passent <strong>80 000 - 100 000 &euro; par an</strong>. L&apos;IS &agrave; 15% sur les premiers 42 500 &euro; est imbattable. Mais ne le faites que si vos r&eacute;sultats sont <strong>r&eacute;guliers et pr&eacute;visibles</strong> — une mauvaise ann&eacute;e en soci&eacute;t&eacute; avec des charges fixes co&ucirc;te tr&egrave;s cher.</p>

      <hr />

      <h2 id="erreurs">Les 5 erreurs fiscales qui co&ucirc;tent cher</h2>
      <p>Apr&egrave;s des ann&eacute;es &agrave; accompagner des traders, je vois toujours les m&ecirc;mes erreurs. Voici celles qui co&ucirc;tent le plus cher — en argent et en stress :</p>

      <h3>Erreur #1 : Ne pas d&eacute;clarer ses comptes &agrave; l&apos;&eacute;tranger</h3>
      <p>C&apos;est la plus fr&eacute;quente et la plus dangereuse. <strong>1 500 &euro; d&apos;amende par compte et par ann&eacute;e</strong>, plus la majoration sur les revenus pr&eacute;sum&eacute;s. J&apos;ai vu des traders recevoir des rappels de 15 000 &euro;+ pour 3-4 comptes non d&eacute;clar&eacute;s sur 3 ans. Remplissez le formulaire 3916. C&apos;est 5 minutes par compte.</p>

      <h3>Erreur #2 : Ne pas d&eacute;clarer ses pertes</h3>
      <p>Beaucoup de traders ne d&eacute;clarent rien les ann&eacute;es o&ugrave; ils perdent de l&apos;argent. Erreur monumentale. Ces pertes sont reportables sur <strong>10 ans</strong>. Ne pas les d&eacute;clarer, c&apos;est jeter de l&apos;argent par la fen&ecirc;tre. D&eacute;clarez syst&eacute;matiquement, m&ecirc;me en cas de perte.</p>

      <h3>Erreur #3 : Confondre prop firm et trading personnel</h3>
      <p>Les gains de prop firm ne sont pas des plus-values. Ce sont des revenus BNC. Appliquer la flat tax &agrave; des payouts de prop firm est une erreur qui peut mener &agrave; un redressement. Si vous avez des gains personnels ET des payouts prop firm, il faut les d&eacute;clarer s&eacute;par&eacute;ment, dans les bonnes cat&eacute;gories.</p>

      <h3>Erreur #4 : Ne pas convertir correctement les devises</h3>
      <p>Vos gains en dollars doivent &ecirc;tre convertis en euros pour la d&eacute;claration. Utiliser un taux fantaisiste ou ne pas convertir du tout peut mener &agrave; des &eacute;carts significatifs. Utilisez le <strong>taux de change moyen annuel de la BCE</strong> et gardez une trace de votre m&eacute;thode de conversion.</p>

      <h3>Erreur #5 : Ne pas garder ses justificatifs</h3>
      <p>L&apos;administration fiscale peut vous demander des justificatifs pendant <strong>3 ans</strong> (d&eacute;lai normal) &agrave; <strong>6 ans</strong> (en cas d&apos;activit&eacute; occulte). Si vous ne pouvez pas prouver vos gains et pertes avec des relev&eacute;s de courtier, l&apos;administration peut reconstituer vos revenus &agrave; sa mani&egrave;re — et elle ne sera pas g&eacute;n&eacute;reuse. <strong>T&eacute;l&eacute;chargez et archivez vos relev&eacute;s chaque ann&eacute;e.</strong></p>

      <div className="key-concept">
        <div className="key-concept-label">La r&egrave;gle d&apos;or</div>
        <h4>D&eacute;clarez tout, tout le temps, m&ecirc;me quand vous perdez</h4>
        <p>La transparence fiscale est votre meilleure protection. Un trader qui d&eacute;clare correctement n&apos;a rien &agrave; craindre d&apos;un contr&ocirc;le. Un trader qui cache ou oublie prend un risque disproportionn&eacute;. Les montants en jeu ne valent jamais le risque d&apos;un redressement.</p>
      </div>

      <hr />

      <h2 id="conclusion">En r&eacute;sum&eacute;</h2>
      <p>La fiscalit&eacute; du trading en France n&apos;est pas compliqu&eacute;e — elle est juste mal expliqu&eacute;e. Voici les points essentiels &agrave; retenir :</p>
      <ul>
        <li><strong>Trader particulier</strong> : flat tax 30% (PFU) sur vos plus-values nettes. Simple et efficace.</li>
        <li><strong>Trader professionnel</strong> : BNC au bar&egrave;me progressif + cotisations. Plus lourd mais charges d&eacute;ductibles.</li>
        <li><strong>Prop firms</strong> : BNC obligatoirement (pas de flat tax). D&eacute;clarez les comptes &eacute;trangers.</li>
        <li><strong>Comptes &agrave; l&apos;&eacute;tranger</strong> : formulaire 3916 syst&eacute;matiquement, sous peine d&apos;amende.</li>
        <li><strong>Moins-values</strong> : d&eacute;clarez-les toujours, elles sont reportables 10 ans.</li>
        <li><strong>Soci&eacute;t&eacute;</strong> : &agrave; envisager au-del&agrave; de 80-100K&euro; de b&eacute;n&eacute;fice r&eacute;gulier.</li>
      </ul>
      <p>Si vous voulez comprendre comment <a href="/blog/vivre-du-trading/">vivre du trading</a> de mani&egrave;re durable, la ma&icirc;trise de la fiscalit&eacute; n&apos;est pas optionnelle — c&apos;est un pilier de votre activit&eacute;. Et si vous cherchez &agrave; passer des <a href="/blog/prop-firm-funded-trader/">challenges de prop firms</a>, comprenez bien que vos payouts seront impos&eacute;s diff&eacute;remment de vos gains personnels.</p>
      <p>Prenez le temps de bien comprendre votre situation, faites-vous accompagner par un professionnel si n&eacute;cessaire, et surtout : <strong>d&eacute;clarez tout, gardez tout, anticipez tout.</strong></p>
    </>
  );
}
