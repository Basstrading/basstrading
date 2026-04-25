export default function SierraChartConfiguration() {
  return (
    <>
      <h2 id="pourquoi">Pourquoi Sierra Chart ?</h2>

      <p>
        Sierra Chart est le logiciel de trading utilise par les professionnels du
        Market Profile et de l&apos;Order Flow. Pas le plus joli — mais{" "}
        <strong>
          le plus fiable, le plus configurable, et le plus stable
        </strong>
        .
      </p>

      <p>Trois raisons qui en font le standard :</p>

      <ul>
        <li>
          <strong>Integration native CME Denali</strong> — Les donnees de marche
          les plus fiables, directement depuis la source. Pas de broker
          intermediaire qui filtre ou retarde.
        </li>
        <li>
          <strong>Market Profile natif</strong> — Le TPO Chart est integre avec
          une personnalisation complete (couleurs, periodes, Value Area, POC,
          Initial Balance).
        </li>
        <li>
          <strong>Numbers Bars (Footprint)</strong> — L&apos;implementation la
          plus complete du Footprint Chart : Bid x Ask, delta, imbalances, volume
          total par niveau.
        </li>
      </ul>

      <div className="key-concept">
        <div className="key-concept-label">Le standard</div>
        <h4>
          L&apos;outil ne fait pas le trader — mais le mauvais outil le freine
        </h4>
        <p>
          Sierra Chart est austere. Son interface ressemble a un logiciel des
          annees 2000. Mais sous le capot, c&apos;est le moteur le plus puissant
          du marche pour l&apos;analyse du flux. La forme est secondaire — la
          fiabilite des donnees est tout.
        </p>
      </div>

      <hr />

      <h2 id="installation">Installation et premier lancement</h2>

      <h3>Telechargement et licence</h3>

      <ol>
        <li>
          Telechargez Sierra Chart sur le site officiel (sierrachart.com)
        </li>
        <li>
          Installez le logiciel (Windows uniquement, fonctionne sous
          Wine/Parallels sur Mac)
        </li>
        <li>
          Creez un compte et choisissez le <strong>Package 3</strong>{" "}
          ($46/mois) — c&apos;est celui qui inclut le Market Profile, les Numbers
          Bars et le CVD
        </li>
        <li>
          Activez le service de donnees <strong>Denali Exchange</strong> —
          c&apos;est le flux CME natif de Sierra Chart
        </li>
      </ol>

      <h3>Connexion aux donnees</h3>

      <p>
        Une fois le package active, connectez-vous :{" "}
        <strong>File &gt; Data/Trade Service Settings</strong>. Selectionnez
        &quot;SC Data - All Services&quot; et entrez vos identifiants. La
        connexion est automatique.
      </p>

      <p>
        Pour les donnees CME (Futures ES, NQ, CL, etc.), vous devrez accepter
        les accords d&apos;echange CME. Cout :{" "}
        <strong>~$9/mois pour les non-professionnels</strong> (CME
        Non-Professional Market Data).
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
          Cout total
        </div>
        <p>
          Sierra Chart Package 3 ($46) + CME Non-Pro ($9) = ~$55/mois. C&apos;est
          le cout d&apos;un outil professionnel complet. A comparer avec ATAS
          ($69/mois) ou Bookmap ($49/mois) qui offrent moins de profondeur.
        </p>
      </div>

      <hr />

      <h2 id="market-profile">Configurer le Market Profile (TPO Chart)</h2>

      <p>
        Le Market Profile dans Sierra Chart s&apos;appelle{" "}
        <strong>TPO Profile Chart</strong>. Voici la configuration etape par
        etape :
      </p>

      <h3>Creer un nouveau graphique TPO</h3>

      <ol>
        <li>
          <strong>File &gt; Find Symbol</strong> — Tapez le symbole (ex:
          ESH26.CME pour l&apos;E-mini S&amp;P 500)
        </li>
        <li>
          <strong>Chart &gt; Chart Settings</strong> — Dans &quot;Chart
          Type&quot;, selectionnez &quot;TPO Profile Chart&quot;
        </li>
        <li>
          Reglez la periode TPO sur <strong>30 minutes</strong> (standard pour
          les Futures US)
        </li>
      </ol>

      <h3>Parametres essentiels</h3>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Parametre</th>
            <th>Valeur recommandee</th>
            <th>Pourquoi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TPO Letter Period</td>
            <td>30 minutes</td>
            <td>Standard du marche pour les Futures</td>
          </tr>
          <tr>
            <td>Value Area %</td>
            <td>70%</td>
            <td>Regle de Steidlmayer (68.2% arrondi)</td>
          </tr>
          <tr>
            <td>Display POC</td>
            <td>Active</td>
            <td>Point of Control — le prix le plus echange</td>
          </tr>
          <tr>
            <td>Display VA Lines</td>
            <td>Active</td>
            <td>Value Area High et Low</td>
          </tr>
          <tr>
            <td>Initial Balance</td>
            <td>Active (60 min)</td>
            <td>Le range de la premiere heure</td>
          </tr>
          <tr>
            <td>Split Profile At</td>
            <td>Daily</td>
            <td>Un profil par jour de trading</td>
          </tr>
        </tbody>
      </table>

      <h3>Couleurs et lisibilite</h3>

      <p>
        Le defaut de Sierra Chart est moche. Personnalisez : fond noir ou gris
        tres fonce, TPO en couleur par periode (lettres colorees), POC en trait
        rouge ou blanc epais, Value Area en zone semi-transparente.{" "}
        <strong>La lisibilite prime sur l&apos;esthetique.</strong>
      </p>

      <hr />

      <h2 id="volume-profile">Configurer le Volume Profile</h2>

      <p>
        Le Volume Profile complete le TPO en montrant le{" "}
        <strong>volume reel echange</strong> a chaque niveau de prix (pas le
        temps passe).
      </p>

      <p>
        Dans Sierra Chart :{" "}
        <strong>Studies &gt; Add Study &gt; Volume by Price</strong>. Configurez :
      </p>

      <ul>
        <li>
          <strong>VPOC (Volume Point of Control)</strong> — Le prix avec le plus
          grand volume
        </li>
        <li>
          <strong>Value Area High/Low</strong> — La zone de 70% du volume total
        </li>
        <li>
          <strong>Histogramme</strong> — Barres horizontales montrant la
          distribution du volume
        </li>
      </ul>

      <p>
        Astuce : affichez le TPO et le Volume Profile sur le meme graphique,
        l&apos;un a gauche et l&apos;autre a droite. La convergence entre le POC
        du TPO et le VPOC est un signal de haute conviction.
      </p>

      <hr />

      <h2 id="footprint">Ajouter le Footprint Chart</h2>

      <p>
        Le Footprint Chart dans Sierra Chart s&apos;appelle{" "}
        <strong>Numbers Bars</strong>. C&apos;est l&apos;implementation la plus
        complete du marche.
      </p>

      <h3>Activation</h3>

      <ol>
        <li>
          <strong>Chart &gt; Chart Settings &gt; Chart Type</strong> —
          Selectionnez un graphique en bougies classique (pas TPO)
        </li>
        <li>
          <strong>
            Studies &gt; Add Study &gt; Numbers Bars Calculated Values
          </strong>
        </li>
        <li>
          Dans les settings, choisissez le mode{" "}
          <strong>&quot;AskVol x BidVol&quot;</strong> — c&apos;est le format
          Footprint standard
        </li>
      </ol>

      <h3>Parametres cles</h3>

      <ul>
        <li>
          <strong>Imbalance Ratio</strong> — Reglez sur 300% (3:1). C&apos;est le
          seuil standard pour detecter les desequilibres.
        </li>
        <li>
          <strong>Couleurs</strong> — Ask en vert/bleu, Bid en rouge, imbalances
          surlignees en couleur vive
        </li>
        <li>
          <strong>Delta total</strong> — Activez l&apos;affichage du delta cumule
          en bas de chaque bougie
        </li>
        <li>
          <strong>Volume total</strong> — Affichez le volume total par bougie a
          cote du delta
        </li>
      </ul>

      <hr />

      <h2 id="numbers">Les Numbers Bars en detail</h2>

      <p>
        Les Numbers Bars de Sierra Chart offrent plusieurs modes
        d&apos;affichage :
      </p>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Mode</th>
            <th>Affichage</th>
            <th>Utilisation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AskVol x BidVol</td>
            <td>Volume acheteur x vendeur par niveau</td>
            <td>
              Footprint standard — desequilibres et absorption
            </td>
          </tr>
          <tr>
            <td>Delta</td>
            <td>Ask - Bid par niveau</td>
            <td>Pression nette a chaque prix</td>
          </tr>
          <tr>
            <td>Total Volume</td>
            <td>Volume total par niveau</td>
            <td>
              Identifier les niveaux d&apos;interet institutionnel
            </td>
          </tr>
          <tr>
            <td>Bid/Ask Volume</td>
            <td>Bid et Ask separes en colonnes</td>
            <td>Vue detaillee pour le tape reading avance</td>
          </tr>
        </tbody>
      </table>

      <p>
        Pour commencer, utilisez <strong>&quot;AskVol x BidVol&quot;</strong>.
        C&apos;est le mode le plus lisible et le plus utile pour reperer les
        imbalances et l&apos;absorption.
      </p>

      <hr />

      <h2 id="cvd">Configurer le CVD</h2>

      <p>
        Le CVD (Cumulative Volume Delta) trace la somme cumulee de tous les
        deltas dans le temps. C&apos;est un indicateur de momentum base sur le
        flux reel.
      </p>

      <p>
        Configuration :{" "}
        <strong>
          Studies &gt; Add Study &gt; Cumulative Delta Bars - Volume
        </strong>
        . Affichez-le dans un sous-graphique separe sous votre graphique
        principal.
      </p>

      <p>Parametres recommandes :</p>

      <ul>
        <li>
          <strong>Reset period</strong> — Daily (reset a chaque session)
        </li>
        <li>
          <strong>Display</strong> — Barres colorees (vert si delta positif,
          rouge si negatif)
        </li>
        <li>
          <strong>MA overlay</strong> — Ajoutez une moyenne mobile 20 periodes
          pour lisser le signal
        </li>
      </ul>

      <div className="key-concept">
        <div className="key-concept-label">Signal cle</div>
        <h4>La divergence prix/CVD</h4>
        <p>
          Si le prix fait de nouveaux plus hauts mais le CVD ne suit pas
          (divergence baissiere), le rallye manque de conviction acheteuse.
          C&apos;est un des signaux les plus fiables de retournement imminent.
          L&apos;inverse est vrai pour les divergences haussieres.
        </p>
      </div>

      <hr />

      <h2 id="workspace">Le workspace optimal</h2>

      <p>
        Un workspace Sierra Chart bien organise est crucial pour
        l&apos;efficacite. Voici la disposition recommandee pour un setup a 2
        ecrans :
      </p>

      <h3>Ecran 1 — Analyse</h3>

      <ul>
        <li>
          <strong>Gauche</strong> — Market Profile TPO (session courante +
          veille)
        </li>
        <li>
          <strong>Centre</strong> — Footprint Chart (Numbers Bars) en 5 minutes
        </li>
        <li>
          <strong>Bas</strong> — CVD en sous-graphique
        </li>
      </ul>

      <h3>Ecran 2 — Execution</h3>

      <ul>
        <li>
          <strong>Gauche</strong> — DOM (Depth of Market) avec ordres
        </li>
        <li>
          <strong>Centre</strong> — Graphique en bougies 1 minute (pour le
          timing)
        </li>
        <li>
          <strong>Droite</strong> — Time &amp; Sales / Tape
        </li>
      </ul>

      <p>
        Sauvegardez votre workspace :{" "}
        <strong>File &gt; Save Chartbook As</strong>. Creez des templates pour
        chaque marche (ES, NQ, CL) que vous tradez.
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
          Templates BASS
        </div>
        <p>
          Le mentorat BASS Trading fournit un Chartbook Sierra Chart complet avec
          tous les graphiques pre-configures : Market Profile, Footprint, CVD,
          DOM. Vous l&apos;importez et tout est operationnel en 5 minutes — sans
          passer 3 jours a configurer.
        </p>
      </div>

      <hr />

      <h2 id="erreurs">Erreurs courantes de configuration</h2>

      <h3>1. Trop d&apos;indicateurs</h3>

      <p>
        Sierra Chart permet d&apos;ajouter des centaines d&apos;etudes.{" "}
        <strong>N&apos;en abusez pas.</strong> Market Profile + Footprint + CVD +
        DOM = suffisant. Chaque indicateur supplementaire ajoute du bruit, pas du
        signal.
      </p>

      <h3>2. Mauvaise periode TPO</h3>

      <p>
        30 minutes est le standard pour les Futures US. Ne passez pas a 15
        minutes ou 1 heure sans raison — vous perdez la comparabilite avec les
        autres traders et les etudes historiques.
      </p>

      <h3>3. Seuil d&apos;imbalance trop bas</h3>

      <p>
        Un seuil de 150% genere trop de faux signaux. Gardez{" "}
        <strong>300% minimum</strong>. Mieux vaut moins de signaux mais de
        meilleure qualite.
      </p>

      <h3>4. Ne pas sauvegarder les templates</h3>

      <p>
        Sierra Chart peut planter (rarement, mais ca arrive). Sauvegardez vos
        Chartbooks regulierement et faites un backup de votre dossier Sierra
        Chart.
      </p>

      <h3>5. Donnees retardees sans le savoir</h3>

      <p>
        Si vous n&apos;avez pas active les donnees CME en temps reel, vous tradez
        avec un retard de 10-15 minutes. Verifiez :{" "}
        <strong>Window &gt; Message Log</strong> — si vous voyez &quot;delayed
        data&quot;, activez les donnees CME Non-Professional.
      </p>
    </>
  );
}
