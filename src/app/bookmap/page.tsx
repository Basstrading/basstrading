import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import {
  CollectionPageJsonLd,
  FaqJsonLd,
  BreadcrumbJsonLd,
} from "@/lib/jsonld";
import BlogTOC from "@/components/BlogTOC";
import FAQ from "@/components/FAQ";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata = generateSeoMetadata({
  title: "Bookmap : Le Guide Francophone Complet (Heatmap, Liquidite, DOM)",
  description:
    "Bookmap en francais : heatmap de liquidite, detection iceberg orders, spoofing, configuration data feed CME, comparatif Sierra Chart. Le seul guide francophone pro — par Sebastien Constant.",
  path: "/bookmap/",
});

const toc = [
  { id: "presentation", label: "Qu'est-ce que Bookmap ?" },
  { id: "heatmap", label: "La heatmap : voir la liquidite en couleur" },
  { id: "iceberg", label: "Detecter les iceberg orders" },
  { id: "spoofing", label: "Identifier le spoofing" },
  { id: "configuration", label: "Configuration et data feed" },
  { id: "vs-sierra", label: "Bookmap vs Sierra Chart" },
  { id: "applications", label: "Applications en trading" },
  { id: "limites", label: "Limites et pieges" },
  { id: "faq", label: "Questions frequentes" },
];

const faq = [
  {
    question: "Bookmap est-il payant ?",
    answer:
      "Oui. Bookmap propose 4 plans : Free (limitations majeures), Digital 49 $/mois (accessible), Global 99 $/mois (full features), Global Plus 195 $/mois (multi-exchange + addons). Pour la majorite des traders Futures CME, le plan Digital ou Global est suffisant. La licence inclut le data feed CME basique.",
  },
  {
    question: "Bookmap remplace-t-il Sierra Chart ?",
    answer:
      "Non, ils sont complementaires. Bookmap est specialise dans la VISUALISATION de la liquidite (heatmap, DOM dynamique). Sierra Chart est plus general (Market Profile, Footprint, charts). Beaucoup de traders pros utilisent les deux : Sierra Chart pour Market Profile + Footprint, Bookmap a cote pour la heatmap et la detection iceberg.",
  },
  {
    question: "Bookmap fonctionne-t-il sur Mac ?",
    answer:
      "Bookmap est multi-plateforme : Windows, Mac et Linux. C'est un avantage majeur sur Sierra Chart (Windows uniquement). Pour les traders sur Mac qui cherchent une plateforme order flow native, Bookmap est souvent le meilleur choix.",
  },
  {
    question: "La heatmap Bookmap montre-t-elle vraiment les vrais ordres ?",
    answer:
      "Oui. La heatmap visualise les ordres limit reels postes sur le carnet d'ordres a chaque niveau de prix, en temps reel. Plus la couleur est intense (jaune/rouge), plus la liquidite est concentree. Mais attention : certains ordres sont des iceberg (cachent leur taille reelle) et d'autres sont du spoofing (ordres faux destines a tromper). Bookmap aide a detecter ces deux types.",
  },
  {
    question: "Peut-on coder ses propres indicateurs sur Bookmap ?",
    answer:
      "Oui via l'API Bookmap (Java SDK). Plus difficile que ACSIL Sierra Chart pour les non-developpeurs. Mais Bookmap propose un marketplace d'addons (gratuits et payants) qui couvre 90 % des besoins : Volume Bubbles, Big Trades Detector, Heatmap Replay, etc.",
  },
  {
    question: "Quel data feed pour Bookmap sur les Futures CME ?",
    answer:
      "Bookmap inclut un data feed CME dans certains plans (Global, Global Plus). Sinon, tu peux connecter Rithmic, CQG ou ION via les credentials de ton broker / prop firm. Pour Topstep, Apex, Bulenox : Rithmic est generalement deja inclus.",
  },
];

export default function BookmapHubPage() {
  return (
    <>
      <ReadingProgress />
      <CollectionPageJsonLd
        name="Bookmap — Guide complet francophone"
        description="Guide francophone de Bookmap : heatmap de liquidite, iceberg orders, spoofing, configuration."
        url="/bookmap/"
        articleUrls={[
          "/blog/spoofing-iceberg-orders/",
          "/blog/carnet-ordres-dom-futures/",
          "/blog/tape-reading-flux-ordres/",
          "/blog/footprint-chart-trading/",
        ]}
      />
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Bookmap" }]}
      />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Bookmap</span>
          </nav>
          <div className="blog-hero-cat">Hub thematique</div>
          <h1 className="blog-hero-title">
            Bookmap.<br />
            La liquidite en couleur.
          </h1>
          <p className="blog-hero-desc">
            Le guide francophone le plus complet sur Bookmap : heatmap de
            liquidite, detection des iceberg orders et du spoofing,
            configuration data feed, applications concretes en trading. Tout
            ce qui n&apos;existe pas en francais — par{" "}
            <Link href="/sebastien-constant/">Sebastien Constant</Link>.
          </p>
        </div>
      </section>

      <div className="article-wrap">
        <aside className="article-sidebar">
          <BlogTOC items={toc} />
        </aside>
        <article className="article-body">
          <h2 id="presentation">Qu&apos;est-ce que Bookmap ?</h2>

          <p>
            <strong>Bookmap</strong> est une plateforme de trading specialisee
            dans la visualisation de l&apos;<em>order book</em> (carnet
            d&apos;ordres) sous forme de <strong>heatmap couleur</strong>.
            Developpee depuis 2014 a Israel, elle a revolutionne la facon
            dont les traders pros visualisent la liquidite en temps reel.
          </p>

          <p>
            La promesse de Bookmap : voir la <strong>VRAIE liquidite</strong>{" "}
            postee a chaque niveau de prix, identifier les <strong>icebergs</strong>{" "}
            (gros ordres caches qui se devoilent au fur et a mesure),
            detecter le <strong>spoofing</strong> (faux ordres places puis
            retires pour induire en erreur), et visualiser le flux des trades
            executes via les <em>volume bubbles</em>.
          </p>

          <p>
            Bookmap est complementaire a Sierra Chart, ATAS ou NinjaTrader.
            Beaucoup de traders pros utilisent <strong>Bookmap a cote de
            leur plateforme principale</strong> uniquement pour la heatmap.
            C&apos;est devenu un standard institutionnel — particulierement
            chez les scalpers Futures et les traders Order Flow avances.
          </p>

          <h2 id="heatmap">La heatmap : voir la liquidite en couleur</h2>

          <p>
            La <strong>heatmap</strong> est l&apos;innovation centrale de
            Bookmap. Elle affiche, en temps reel, la quantite d&apos;ordres
            limit postes a chaque niveau de prix au-dessus et en dessous du
            prix actuel.
          </p>

          <p>
            <strong>Code couleur</strong> :
          </p>
          <ul>
            <li>
              <strong>Bleu fonce / noir</strong> : peu ou pas de liquidite (le
              carnet est vide a ce niveau).
            </li>
            <li>
              <strong>Bleu / violet</strong> : liquidite legere (ordres
              eparpilles).
            </li>
            <li>
              <strong>Jaune</strong> : liquidite moyenne (mur d&apos;ordres
              consequent).
            </li>
            <li>
              <strong>Rouge / orange vif</strong> : liquidite extreme (mur
              d&apos;ordres massif — un niveau institutionnel).
            </li>
          </ul>

          <p>
            La heatmap se met a jour <strong>tick par tick</strong>. Tu vois
            les ordres apparaitre, grossir, disparaitre. C&apos;est une
            vision dynamique du marche que les charts statiques ne montrent
            pas. La signature visuelle d&apos;un mur de liquidite : une bande
            jaune ou rouge horizontale qui persiste au-dessus ou en dessous
            du prix.
          </p>

          <h3>Lecture pratique de la heatmap</h3>

          <p>
            Quand tu vois un <strong>mur jaune au-dessus du prix</strong>
            (Ask side), cela signifie que les vendeurs ont poste massivement
            a ce niveau. Le prix va probablement <strong>etre rejete</strong>{" "}
            quand il essaie de monter — sauf si les acheteurs absorbent
            (consomment) ce mur. Si le mur disparait avant que le prix
            l&apos;atteigne, c&apos;etait du spoofing : faux signal.
          </p>

          <p>
            Inversement, un <strong>mur jaune en dessous du prix</strong>{" "}
            (Bid side) est un <strong>support institutionnel potentiel</strong>.
            Si le prix descend jusqu&apos;a ce niveau et que le mur tient
            (les acheteurs absorbent les ventes agressives), c&apos;est un
            signal de retournement haussier potentiel.
          </p>

          <h2 id="iceberg">Detecter les iceberg orders</h2>

          <p>
            Un <strong>iceberg order</strong> est un gros ordre limit dont
            seule une petite partie est visible publiquement. Le trader
            institutionnel poste 1 000 contrats au prix X mais affiche
            seulement 50 contrats a la fois. Quand les 50 sont executes, 50
            nouveaux apparaissent automatiquement, jusqu&apos;a epuisement
            des 1 000.
          </p>

          <p>
            Pourquoi cacher la taille ? Pour eviter de bouger le marche.
            Si un trader poste publiquement 1 000 contrats au prix X, tout le
            monde voit le mur, le prix se decale immediatement, et
            l&apos;executeur n&apos;obtient pas son fill. Avec un iceberg, le
            marche ne voit jamais l&apos;intention reelle.
          </p>

          <h3>Detection sur Bookmap</h3>

          <p>
            Bookmap detecte les icebergs via <strong>l&apos;analyse de la
            volumetrie executee vs la liquidite affichee</strong>. Si un
            niveau a affiche 50 contrats mais a deja absorbe 500 contrats
            d&apos;ordres agressifs sans bouger, c&apos;est un iceberg : la
            taille reelle est bien superieure a ce qui est affiche.
          </p>

          <p>
            Visuellement sur Bookmap : un <strong>iceberg apparait comme un
            niveau avec beaucoup de volume bubbles execute mais peu ou pas de
            heatmap visible</strong>. C&apos;est un signal d&apos;intervention
            institutionnelle — quelqu&apos;un de gros achete ou vend
            silencieusement.
          </p>

          <p>
            Pour comprendre les iceberg en profondeur, lis notre guide{" "}
            <Link href="/blog/spoofing-iceberg-orders/">
              Spoofing et Iceberg Orders : Detecter les Manipulations
            </Link>
            .
          </p>

          <h2 id="spoofing">Identifier le spoofing</h2>

          <p>
            Le <strong>spoofing</strong> est l&apos;inverse de
            l&apos;iceberg : un trader poste un GROS ordre visible (par
            exemple 500 contrats sur le bid) sans intention de l&apos;executer.
            Le but : <strong>tromper le marche</strong> en faisant croire a
            une demande forte, pousser les autres a se positionner long, puis
            <strong>retirer l&apos;ordre</strong> avant qu&apos;il ne se fasse
            executer. Le spoofing est <strong>illegal</strong> sur les
            marches reglementes (CME, NASDAQ) mais reste pratique malgre
            tout.
          </p>

          <h3>Detection sur Bookmap</h3>

          <p>
            Le spoofing apparait sur Bookmap comme un <strong>mur jaune ou
            rouge qui apparait soudainement, persiste quelques secondes a
            quelques minutes, puis disparait sans etre execute</strong>. Si
            le prix s&apos;approche du mur, le mur recule (l&apos;ordre est
            annule). C&apos;est la signature visuelle classique.
          </p>

          <p>
            Le spoofing est plus frequent sur les Futures les moins liquides
            (microES, Bund) et pendant les heures creuses. Sur l&apos;ES
            pendant la session RTH, c&apos;est rare car le volume est trop
            eleve et le risque de detection trop important.
          </p>

          <h2 id="configuration">Configuration et data feed</h2>

          <p>
            Configuration de Bookmap (apres installation) :
          </p>

          <ol>
            <li>
              <strong>Connecter ton data feed</strong>. Pour Futures CME :
              Rithmic (recommande), CQG, ION, ou direct CME via le plan
              Global Plus.
            </li>
            <li>
              <strong>Choisir l&apos;instrument</strong>. Pour ES : symbole{" "}
              <code>ESM6</code> (juin 2026) ou contrat front month.
            </li>
            <li>
              <strong>Activer la heatmap</strong>. Par defaut activee.
              Parametres : Heatmap Intensity = 70 % (regler selon volume du
              marche), Heatmap Range = 50 ticks au-dessus/en dessous du prix.
            </li>
            <li>
              <strong>Activer les volume bubbles</strong>. Affiche les trades
              executes en bulles dont la taille est proportionnelle au
              volume. Tres utile pour reperer les big trades.
            </li>
            <li>
              <strong>Configurer les addons</strong>. Le marketplace Bookmap
              propose des addons gratuits comme <em>Big Trades Detector</em>{" "}
              (alerte sur les trades &gt; X contrats) et <em>Heatmap
              Replay</em> (rejouer une session passee).
            </li>
          </ol>

          <h2 id="vs-sierra">Bookmap vs Sierra Chart</h2>

          <p>
            Comparaison rapide entre Bookmap et Sierra Chart pour aider au
            choix :
          </p>

          <ul>
            <li>
              <strong>Bookmap</strong> : meilleur pour la heatmap, la
              visualisation de la liquidite, les volume bubbles, la detection
              iceberg/spoofing. Multi-plateforme (Windows, Mac, Linux).
            </li>
            <li>
              <strong>Sierra Chart</strong> : meilleur pour le Market Profile,
              le Footprint Chart, le Volume Profile multi-sessions, les
              charts complexes, le backtest. Windows uniquement.
            </li>
          </ul>

          <p>
            <strong>Recommandation</strong> : pour le scalping Order Flow
            avance, utiliser <strong>les deux ensemble</strong>. Sierra Chart
            comme plateforme principale (Market Profile, Footprint, Charts)
            et Bookmap a cote en fenetre dediee pour la heatmap. Beaucoup de
            traders pros francophones utilisent ce setup combine.
          </p>

          <h2 id="applications">Applications en trading</h2>

          <p>
            Cas d&apos;usage concrets de Bookmap pour les traders Futures :
          </p>

          <h3>1. Detecter le support/resistance institutionnel</h3>
          <p>
            Un mur jaune persistant au-dessus du prix = resistance
            institutionnelle. Un mur jaune persistant en dessous = support
            institutionnel. Si le mur tient face a une attaque agressive
            (volume bubbles dans sa direction sans baisse de la heatmap),
            c&apos;est un niveau de retournement potentiel.
          </p>

          <h3>2. Confirmer une cassure de niveau</h3>
          <p>
            Si le prix casse un niveau Market Profile (VAH par exemple) et que
            la heatmap au-dessus de ce niveau est <strong>vide ou
            faible</strong>, la cassure a peu de resistance — bon trade
            momentum. Si la heatmap montre un mur immediat au-dessus, la
            cassure va probablement echouer ou rebondir.
          </p>

          <h3>3. Anticiper un retournement court terme</h3>
          <p>
            Apres une longue tendance baissiere, l&apos;apparition d&apos;un
            <strong> gros mur d&apos;achat sur le Bid</strong> qui ABSORBE
            les ventes agressives sans flecher, c&apos;est un signal d&apos;
            absorption. Si le mur tient et que les volume bubbles passent du
            cote acheteur, retournement haussier probable.
          </p>

          <h3>4. Eviter les pieges du spoofing</h3>
          <p>
            Quand tu vois un mur jaune se former rapidement sans contexte
            structural (pas de niveau Market Profile a proximite, pas de
            cluster de volume), reste prudent. Si le mur disparait sans etre
            execute des que le prix s&apos;approche, c&apos;etait du
            spoofing. Ne base jamais une decision uniquement sur la heatmap.
          </p>

          <h2 id="limites">Limites et pieges</h2>

          <p>
            Bookmap est puissant mais a ses limites :
          </p>

          <ul>
            <li>
              <strong>La heatmap ne montre PAS les iceberg en temps reel</strong>{" "}
              — par definition les ordres caches ne sont pas visibles. Tu ne
              les detectes que par leur consommation (volume bubbles vs
              heatmap).
            </li>
            <li>
              <strong>Le spoofing est confus avec la vraie liquidite</strong>{" "}
              en debut de session. Tant que tu n&apos;as pas vu le pattern
              exact (apparition rapide, retrait avant execution), la heatmap
              donne une fausse impression de support/resistance.
            </li>
            <li>
              <strong>Surcharge cognitive</strong>. Suivre 4 instruments en
              meme temps sur Bookmap est tres fatiguant pour les yeux. Limite
              a 1-2 instruments en simultane.
            </li>
            <li>
              <strong>Pas de Market Profile / TPO natif</strong>. Bookmap se
              concentre sur l&apos;order flow. Pour le Market Profile, il
              faut Sierra Chart en complement.
            </li>
            <li>
              <strong>Cout cumule</strong>. Bookmap (49-99 $/mois) + Sierra
              Chart (36 $/mois) + data feeds = facilement 100+ $/mois. A
              budgeter.
            </li>
          </ul>

          <FAQ items={faq} />

          <div
            style={{
              padding: 32,
              background: "var(--ink)",
              color: "var(--pure)",
              borderRadius: 16,
              marginTop: 48,
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "var(--pure)", marginBottom: 12 }}>
              Apprendre Bookmap en mentorat
            </h3>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 24,
                maxWidth: 540,
                margin: "0 auto 24px",
              }}
            >
              Le mentorat BASS Trading enseigne la lecture de la heatmap
              Bookmap en complement de Sierra Chart, avec sessions live de
              detection iceberg et identification des manipulations.
            </p>
            <Link
              href="/candidater/"
              style={{
                display: "inline-block",
                padding: "16px 32px",
                background: "var(--gold)",
                color: "var(--ink)",
                borderRadius: 100,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Candidater au mentorat →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
