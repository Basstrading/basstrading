import Image from "next/image";
import { generateSeoMetadata } from "@/lib/seo";
import { OrganizationJsonLd, CourseJsonLd, FaqJsonLd } from "@/lib/jsonld";
import Preloader from "@/components/Preloader";
import FAQ from "@/components/FAQ";
import HomeAnimations from "./HomeAnimations";
import ApplyForm from "./ApplyForm";
import "./home.css";

export const metadata = generateSeoMetadata({
  title: "BASS — Comprendre les marches. Pas les deviner.",
  description:
    "Mentorat trading premium par Sebastien Constant. Market Profile, Order Flow, Footprint, CVD. 10 places max. 4.9/5 Trustpilot (126 avis). Formation certifiee Qualiopi, eligible CPF.",
  path: "/",
});

const homeFaq = [
  { question: "C'est quoi le Market Profile ?", answer: "Le Market Profile est un outil d'analyse qui organise le prix et le temps pour montrer ou le marche accepte la valeur. C'est l'outil central enseigne dans le mentorat BASS Trading." },
  { question: "La formation BASS Trading est-elle eligible CPF ?", answer: "Oui. La formation est eligible au CPF grace au partenariat avec EMSCA, organisme certifie Qualiopi. Le cursus de 70 heures est disponible en presentiel ou en ligne." },
  { question: "Combien coute la formation BASS Trading ?", answer: "Le prix depend de la formule choisie. C'est un investissement de plusieurs milliers d'euros, coherent avec 70 heures de mentorat individuel et un acces a vie aux outils." },
  { question: "Quels marches sont couverts ?", answer: "La formation couvre principalement les Futures (ES, NQ, indices). La methode est universelle et applicable a tout marche avec du volume." },
  { question: "C'est quoi x-trade.ai ?", answer: "x-trade.ai est un outil de gestion du risque automatique developpe par Sebastien Constant. Il coupe automatiquement les positions quand le trader depasse ses limites. Inclus dans le mentorat." },
  { question: "Quel logiciel est utilise ?", answer: "Sierra Chart, le standard professionnel pour l'analyse Market Profile et Order Flow." },
  { question: "Je suis debutant, la formation est-elle pour moi ?", answer: "Le mentorat s'adresse a des traders qui ont les bases mais stagnent. Un minimum de 6 mois d'experience est recommande. 10 places max par session." },
];

export default function HomePage() {
  return (
    <>
      <Preloader />
      <OrganizationJsonLd />
      <CourseJsonLd />
      <FaqJsonLd items={homeFaq} />
      <HomeAnimations />
<section className="hero" id="hero">
  <div className="hero-portrait" id="heroPortrait">
    <Image src="/images/bass-presenting.jpg" alt="Sebastien Constant" id="heroImg" fill sizes="52vw" priority style={{objectFit:"cover",objectPosition:"center 20%"}} />
  </div>
  <div className="hero-content" id="heroContent">
    <div className="hero-brand">bass trading</div>
    <h1 className="hero-title">Comprendre les<br />marchés. Pas les<br />deviner.</h1>
    <p className="hero-sub">Mentorat trading par Sébastien Constant. La vraie structure du marché — pour traders sérieux uniquement.</p>
    <div className="hero-tags">
      <span className="hero-tag">Market Profile</span>
      <span className="hero-tag">Order Flow</span>
      <span className="hero-tag">Footprint</span>
    </div>
    <div className="hero-cta-row">
      <a href="#candidater" className="btn-p">Candidater — 10 places max <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
      <a href="#resultats" className="btn-s">Voir les résultats</a>
    </div>
  </div>
  <div className="hero-scroll" id="heroScroll">
    <div className="hero-scroll-dot"></div>
    <span>Défiler</span>
  </div>
</section>

<section className="intro">
  <svg className="intro-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  <p className="intro-text" id="introText">BASS est le premier mentorat trading en France à enseigner la vraie structure du marché — Market Profile, Footprint, Order Flow — et non des indicateurs retardés.</p>
</section>

<section className="dark" id="methode">
  <div className="dark-center">
    <div className="dark-pill">La méthode</div>
    <h2 className="dark-title">Comprendre la structure.<br />Pas deviner les patterns.</h2>
    <p className="dark-desc">Ce que vous apprendrez ici n&apos;est enseigné nulle part ailleurs en France. La structure du marché — pourquoi le prix bouge, qui le fait bouger.</p>
  </div>
  <div className="method-grid">
    <div className="method-card"><div className="method-num">01</div><h3>Market Profile</h3><p>Value Area, POC, structure TPO. La carte qui montre où le marché trouve — et rejette — la valeur.</p></div>
    <div className="method-card"><div className="method-num">02</div><h3>Footprint & CVD</h3><p>Volume delta, absorption, imbalances. La pression acheteuse et vendeuse avant qu&apos;elle se reflète dans le prix.</p></div>
    <div className="method-card"><div className="method-num">03</div><h3>Tape Reading</h3><p>Time & Sales, Depth of Market. L'activité institutionnelle en temps réel, pas après coup.</p></div>
    <div className="method-card"><div className="method-num">04</div><h3>Spot / Futures / Options</h3><p>Fixing d&apos;options, gamma exposure, basis trades. Le niveau que personne n&apos;enseigne.</p></div>
    <div className="method-card"><div className="method-num">05</div><h3>Market Makers</h3><p>Qui fournit la liquidité. Comment ils se couvrent. Pourquoi le prix revient toujours à certains niveaux.</p></div>
    <div className="method-card"><div className="method-num">06</div><h3>Live Trading</h3><p>Une session par jour, ensemble, sur les marchés réels. On le prend — ou pas.</p></div>
  </div>
  <div className="dark-img" id="darkImg1">
    <img src="/images/bass-tv-closeup.jpg" alt="Analyse Market Profile en direct" loading="lazy" />
  </div>
  <div className="feat-grid">
    <div className="feat-col" id="feat1">
      <h4>Market Profile & Footprint</h4>
      <p>Les mêmes outils utilisés par les desks institutionnels. Pas des indicateurs de YouTube — la vraie mécanique du prix.</p>
    </div>
    <div className="feat-col" id="feat2">
      <h4>Analyse structurelle en temps réel</h4>
      <p>Comprendre le positionnement des market makers, le delta cumulé, les déséquilibres de volume — en live, chaque jour.</p>
    </div>
  </div>
</section>

<section className="overlap" id="overlap">
  <div className="overlap-giant" id="overlapGiant">
    L'approche<br /><span className="line2">invisible.</span>
  </div>
  <div className="overlap-img" id="overlapImg">
    <img src="/images/bass-tv-teaching.jpg" alt="Formation Market Profile" loading="lazy" />
  </div>
  <div className="overlap-sub" id="overlapSub">
    Pas de signal Telegram. Pas d&apos;indicateur magique. Vous apprenez à lire le marché par vous-même — pour ne plus jamais dépendre de personne.
    <br /><br />
    <strong>10 places max par session.</strong>
  </div>
  <div className="mini-form-wrap" id="overlapCta">
    <a href="#candidater" className="btn-p">Verifier mon eligibilite <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg></a>
    <p>Appel decouverte de 15 min — aucun engagement.</p>
  </div>
</section>

<section className="editorial" id="resultats">
  <div className="ed-header">
    <div className="ed-left">
      <h2>La nouvelle méthode.</h2>
      <div className="ed-tag">
        <svg width="10" height="10" viewBox="0 0 16 16" fill="var(--blue)"><circle cx="8" cy="8" r="8"/></svg>
        Trading en direct
      </div>
    </div>
    <div className="ed-right">
      <p>À la croisée du Market Profile, de l&apos;Order Flow et de la gestion du risque automatisée, BASS forme des traders capables de lire — et d&apos;exploiter — la structure du marché en temps réel. Pas de théorie abstraite. Des sessions quotidiennes sur les marchés réels. En partenariat avec EMSCA, organisme certifié Qualiopi. Éligible CPF. Retrouvez nos analyses et ressources complémentaires sur <a href="https://hubtrading.fr" target="_blank" rel="noopener">HubTrading.fr</a>.</p>
    </div>
  </div>
  <div className="ed-video">
    <video controls playsInline preload="metadata" poster="images/bass-tv-closeup.jpg">
      <source src="/images/bass-malaga-video.mp4" type="video/mp4" />
    </video>
  </div>
</section>

<div className="gallery">
  <div className="gallery-track">
    <div className="gi"><img src="/images/bass-tv-closeup.jpg" alt="Bass Market Profile" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-presenting.jpg" alt="Bass présentation" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-tv-teaching.jpg" alt="Formation TV" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-group-screens.jpg" alt="Groupe écrans" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-pointing.jpg" alt="Bass niveau clé" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-classroom.jpg" alt="Salle formation" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-closeup-screen.jpg" alt="Analyse Market Profile" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-teaching.jpg" alt="Coaching" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-portrait.jpg" alt="Bass portrait" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-malaga-group.jpg" alt="Malaga" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-tv-closeup.jpg" alt="" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-presenting.jpg" alt="" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-tv-teaching.jpg" alt="" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-group-screens.jpg" alt="" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-pointing.jpg" alt="" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-classroom.jpg" alt="" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-closeup-screen.jpg" alt="" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-teaching.jpg" alt="" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-portrait.jpg" alt="" height="300" loading="lazy" /></div>
    <div className="gi"><img src="/images/bass-malaga-group.jpg" alt="" height="300" loading="lazy" /></div>
  </div>
</div>

<section className="dark">
  <div className="dark-center">
    <div className="dark-label">Résultats</div>
    <div className="ds-val">126 avis. 4.9/5.</div>
    <p className="dark-desc">L'avenir du trading se lit, il ne se devine pas.<br />Le vôtre non plus.</p>
  </div>
  <div className="dark-split">
    <div className="ds-left">
      <div className="ds-label">Comptes financés</div>
      <div className="ds-val">$700K+</div>
      <div className="ds-desc">Montants cumulés des comptes financés par les élèves du programme BASS.</div>
    </div>
    <div className="ds-right">
      <div className="ds-label">Expérience</div>
      <div className="ds-val">10+ ans</div>
      <div className="ds-desc">Sébastien Constant trade en live chaque jour devant ses élèves. Pas de PowerPoint.</div>
    </div>
  </div>
</section>

<section className="blue-sec" id="certification">
  <div>
    <div className="dark-pill">Certification</div>
    <h2 className="blue-title">Formation certifiée Qualiopi.<br />Éligible CPF.</h2>
    <p className="blue-desc">En partenariat avec EMSCA. 70 heures de cursus. Certificat de compétences EMSCA délivré à l&apos;issue du cursus.</p>
    <div>
      <a href="#candidater" className="blue-cta">Candidater <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
    </div>
  </div>
</section>

<section className="diff-sec">
  <div className="sec-center">
    <div className="sec-label">La différence</div>
    <h2 className="sec-title">Ce n&apos;est pas une école.<br />C'est un mentorat.</h2>
  </div>
  <div className="diff-grid">
    <div className="diff-col">
      <h3 className="faded">Formations classiques</h3>
      <div className="diff-item diff-bad"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"/></svg>Une stratégie qui marche — jusqu&apos;au jour où elle ne marche plus</div>
      <div className="diff-item diff-bad"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"/></svg>Des centaines d&apos;élèves, aucun suivi individuel</div>
      <div className="diff-item diff-bad"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"/></svg>Théorie sans pratique en conditions réelles</div>
      <div className="diff-item diff-bad"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"/></svg>Pas de formateur qui trade en live</div>
      <div className="diff-item diff-bad"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"/></svg>Indicateurs retardés, patterns de manuels</div>
    </div>
    <div className="diff-col">
      <h3>Avec BASS</h3>
      <div className="diff-item diff-good"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/></svg>Structure du marché — applicable dans toutes les conditions</div>
      <div className="diff-item diff-good"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/></svg>10 personnes max — suivi personnalisé</div>
      <div className="diff-item diff-good"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/></svg>Certifié Qualiopi via EMSCA — éligible CPF</div>
      <div className="diff-item diff-good"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/></svg>Trading en direct quotidien — vous voyez, vous faites</div>
      <div className="diff-item diff-good"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/></svg>x-trade.ai PRO inclus — gestion du risque automatique</div>
    </div>
  </div>
</section>

<section className="dark">
  <div className="dark-center">
    <div className="dark-pill">Outil inclus</div>
    <h2 className="dark-title"><a href="https://x-trade.ai" target="_blank" rel="noopener">x-trade.ai</a> PRO</h2>
    <p className="dark-desc">Votre gestionnaire de risque personnel. Il coupe vos positions avant que vos émotions ne le fassent. Inclus dans le mentorat — accès à vie.</p>
  </div>
  <div className="feat-grid">
    <div className="feat-col" id="xt1">
      <h4>Protection automatique</h4>
      <p>Limite de perte journalière &middot; Stop suiveur quotidien &middot; Verrouillage après pertes consécutives &middot; Temps de pause forcé</p>
    </div>
    <div className="feat-col" id="xt2">
      <h4>Contrôle total</h4>
      <p>Nombre max de trades / jour &middot; Taille max de position &middot; Clôture automatique &middot; Verrouillage auto &middot; 9 modules</p>
    </div>
  </div>
</section>

<section className="dark" id="malaga">
  <div className="dark-center">
    <div className="dark-pill">Session présentielle</div>
    <a href="/malaga/"><h2 className="dark-title">Formation intensive<br />à Malaga.</h2></a>
    <p className="dark-desc">4 jours d&apos;immersion totale. Market Profile, Footprint, Order Flow en live. Petit groupe. Soleil en bonus.</p>
    <a href="/malaga/"><div>28 sept. — 2 oct. 2026</div></a>
    <div>Malaga, Espagne — Places très limitées</div>
    <a href="/malaga/" className="btn-p">Découvrir le séminaire <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
  </div>
  <div className="dark-img">
    <img src="/images/bass-malaga-group.jpg" alt="Formation à Malaga" loading="lazy" />
  </div>
</section>

<section className="editorial">
  <div className="ed-header">
    <div className="ed-left">
      <div className="sec-label">Le fondateur</div>
      <h2>Sébastien Constant.</h2>
      <p>Trader depuis plus de 10 ans. Spécialiste Market Profile, Order Flow et Footprint. Il trade en direct chaque jour devant ses élèves — pas de théorie en PowerPoint, pas de signaux Telegram. La peau dans le jeu, chaque matin.</p>
      <p>Créateur de <a href="https://x-trade.ai" target="_blank" rel="noopener">x-trade.ai</a>, l&apos;outil de gestion du risque utilisé par ses élèves pour protéger leurs comptes automatiquement. Formateur certifié via EMSCA (Qualiopi).</p>
    </div>
    <div className="ed-right">
      <div>
        <img src="/images/bass-portrait.jpg" alt="Sébastien Constant — fondateur BASS Trading" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section className="reviews" id="avis">
  <div className="sec-center">
    <div className="tp-badge"><span className="tp-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.9/5 — 126 avis</div>
    <div className="sec-label">Témoignages</div>
    <h2 className="sec-title">Ils ont arrêté de deviner.</h2>
  </div>
  <div className="reviews-grid">
    <div className="rc"><div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"Grâce à l&apos;accompagnement de Bass, j&apos;ai appris la chose la plus importante qui est la compréhension du marché."</p><div><div className="rc-name">Kevin Trading</div><div className="rc-date">Déc. 2025</div></div></div>
    <div className="rc"><div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"Bass nous permet de lire et de comprendre le fonctionnement du marché à l&apos;aide d&apos;outils qu&apos;il connaît parfaitement."</p><div><div className="rc-name">EricM</div><div className="rc-date">Déc. 2025</div></div></div>
    <div className="rc"><div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"La formation est extrêmement bien structurée et embrasse tous les pans du trading."</p><div><div className="rc-name">OUADI</div><div className="rc-date">Oct. 2025</div></div></div>
    <div className="rc"><div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"BASS se distingue par une disponibilité exemplaire envers ses apprenants."</p><div><div className="rc-name">Christophe</div><div className="rc-date">Oct. 2025</div></div></div>
    <div className="rc"><div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"Après des années en recherche d&apos;une vraie Formation, j&apos;ai enfin trouvé ce qu&apos;il me manquait."</p><div><div className="rc-name">Trading Académy</div><div className="rc-date">Oct. 2025</div></div></div>
    <div className="rc"><div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"Une formation Market Profile signée Bass… tout simplement magistrale."</p><div><div className="rc-name">Harold Glaude</div><div className="rc-date">Oct. 2025</div></div></div>
    <div className="rc"><div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"Formation complète, avec des explications claires et détaillées. Bass est un super professeur."</p><div><div className="rc-name">Yannick</div><div className="rc-date">Oct. 2025</div></div></div>
    <div className="rc"><div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"Depuis mon entrée dans l&apos;école et la découverte du market profile ma vision et ma compréhension ont totalement changé."</p><div><div className="rc-name">J Lo Rungi</div><div className="rc-date">Juin 2025</div></div></div>
    <div className="rc"><div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>"Formation complète sur le market profile qui vous donnera toutes les clés de compréhension."</p><div><div className="rc-name">MicK</div><div className="rc-date">Juil. 2025</div></div></div>
  </div>
</section>

<section className="dark" id="programme">
  <div className="dark-center">
    <div className="dark-pill">Le programme</div>
    <h2 className="dark-title">70 heures. 12 modules.<br />De zéro à autonome.</h2>
    <p className="dark-desc">Un cursus progressif qui vous emmène de la théorie du Market Profile jusqu&apos;au trading en direct — avec un suivi individuel à chaque étape.</p>
  </div>
  <div>
    <div className="prog-item">
      <div>Module 1 — 4</div>
      <div>Les fondations</div>
      <div>Structure du marché, Market Profile, Value Area, POC, types de journées, lecture TPO.</div>
    </div>
    <div className="prog-item">
      <div>Module 5 — 7</div>
      <div>L'analyse avancée</div>
      <div>Footprint, CVD, delta cumulé, déséquilibres de volume, absorption, lecture du carnet d&apos;ordres.</div>
    </div>
    <div className="prog-item">
      <div>Module 8 — 10</div>
      <div>Le niveau institutionnel</div>
      <div>Spot / Futures / Options, gamma exposure, fixing d&apos;options, market makers, positionnement des dealers.</div>
    </div>
    <div className="prog-item">
      <div>Module 11 — 12</div>
      <div>La pratique en direct</div>
      <div>Sessions de trading quotidiennes, plan de trading, gestion du risque avec x-trade.ai, passage au compte réel.</div>
    </div>
  </div>
  <div>
    <a href="#candidater" className="btn-p">Candidater pour la prochaine session <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
  </div>
</section>

<section className="dark" id="retraits">
  <div className="dark-center">
    <div className="dark-pill">Résultats concrets</div>
    <h2 className="dark-title">Nos élèves retirent de l&apos;argent.<br />Pas des promesses.</h2>
    <p className="dark-desc">Captures authentiques des retraits effectués par les élèves du programme BASS sur leurs comptes financés.</p>
  </div>
  <div className="retraits-grid">
    <div className="retrait-card">
      <img src="/images/retraits/kevin-ftmo-6006.jpg" alt="Kevin — retrait $6 006 via FTMO" loading="lazy" />
      <div>$6 006</div>
      <div>Kevin — FTMO</div>
    </div>
    <div className="retrait-card">
      <img src="/images/retraits/fouad-ftt-6000.jpg" alt="Fouad — retrait $6 000 via Fast Track Trading" loading="lazy" />
      <div>$6 000</div>
      <div>Fouad — Fast Track Trading</div>
    </div>
    <div className="retrait-card">
      <img src="/images/retraits/fouad-topstep-5000.jpg" alt="Fouad — retrait $5 000 via Topstep" loading="lazy" />
      <div>$5 000</div>
      <div>Fouad — Topstep</div>
    </div>
    <div className="retrait-card">
      <img src="/images/retraits/damien-deel-3553.jpg" alt="Damien — retrait 3 553€ via Deel" loading="lazy" />
      <div>3 553 €</div>
      <div>Damien — Deel</div>
    </div>
    <div className="retrait-card">
      <img src="/images/retraits/benjamin-bulenox-3000.jpg" alt="Benjamin — retrait $3 000 via Bulenox" loading="lazy" />
      <div>$3 000</div>
      <div>Benjamin — Bulenox</div>
    </div>
    <div className="retrait-card">
      <img src="/images/retraits/moufidath-2300.jpg" alt="Moufidath — retrait $2 300" loading="lazy" />
      <div>$2 300</div>
      <div>Moufidath — Prop Firm</div>
    </div>
  </div>
  <div>
    <p>Captures non retouchées. Les résultats passés ne garantissent pas les résultats futurs. Le trading comporte des risques de perte en capital.</p>
  </div>
</section>

<section className="reviews">
  <div className="sec-center">
    <div className="sec-label">Ils témoignent</div>
    <h2 className="sec-title">Écoutez ceux qui sont passés<br />par le programme.</h2>
  </div>
  <div className="video-grid">
    <div className="vid-card">
      <video controls playsInline preload="metadata">
        <source src="/images/temoignages/samy.mp4" type="video/mp4" />
      </video>
      <div>
        <div>Samy</div>
        <div>Élève du programme BASS</div>
      </div>
    </div>
    <div className="vid-card">
      <video controls playsInline preload="metadata">
        <source src="/images/temoignages/bruno.mp4" type="video/mp4" />
      </video>
      <div>
        <div>Bruno</div>
        <div>Élève du programme BASS</div>
      </div>
    </div>
    <div className="vid-card">
      <video controls playsInline preload="metadata">
        <source src="/images/temoignages/damien.mp4" type="video/mp4" />
      </video>
      <div>
        <div>Damien</div>
        <div>Élève du programme BASS</div>
      </div>
    </div>
    <div className="vid-card">
      <video controls playsInline preload="metadata">
        <source src="/images/temoignages/laurent.mp4" type="video/mp4" />
      </video>
      <div>
        <div>Laurent</div>
        <div>Élève du programme BASS</div>
      </div>
    </div>
  </div>
</section>

{/* Form and FAQ are rendered by React components below */}

<section className="blog-sec" id="blog">
  <div className="sec-center">
    <div className="sec-label">Ressources</div>
    <h2 className="sec-title">Apprendre le trading autrement.</h2>
    <p className="sec-desc">Articles, guides et analyses pour comprendre la structure du marché — gratuitement.</p>
  </div>
  <div className="blog-grid">
    <a href="/blog/market-profile-guide-complet" className="blog-card">
      <div className="blog-cat">Guide</div>
      <h3>Market Profile : le guide complet pour débutants</h3>
      <p>Value Area, POC, types de journées — tout ce qu&apos;il faut savoir pour commencer à lire la structure du marché.</p>
      <span className="blog-link">Lire l&apos;article &rarr;</span>
    </a>
    <a href="/blog/footprint-chart-trading" className="blog-card">
      <div className="blog-cat">Analyse</div>
      <h3>Footprint Chart : lire le volume comme un professionnel</h3>
      <p>Comment utiliser le delta, les déséquilibres et l&apos;absorption pour anticiper les mouvements de prix.</p>
      <span className="blog-link">Lire l&apos;article &rarr;</span>
    </a>
    <a href="/blog/order-flow-trading-france" className="blog-card">
      <div className="blog-cat">Méthode</div>
      <h3>Order Flow Trading : le guide complet pour les traders francophones</h3>
      <p>Le carnet d&apos;ordres, le Time & Sales et la lecture du flux institutionnel — décryptage.</p>
      <span className="blog-link">Lire l&apos;article &rarr;</span>
    </a>
    <a href="/blog/formation-trading-cpf-qualiopi" className="blog-card">
      <div className="blog-cat">Formation</div>
      <h3>Formation trading éligible CPF : comment choisir en 2026</h3>
      <p>Qualiopi, EMSCA, certification — les critères pour distinguer une vraie formation d&apos;un simple cours en ligne.</p>
      <span className="blog-link">Lire l&apos;article &rarr;</span>
    </a>
    <a href="/blog/prop-firm-funded-trader" className="blog-card">
      <div className="blog-cat">Prop Firm</div>
      <h3>Devenir funded trader : la méthode qui fonctionne vraiment</h3>
      <p>Comment nos élèves ont décroché plus de $700K de comptes financés — et ce qu&apos;ils font différemment.</p>
      <span className="blog-link">Lire l&apos;article &rarr;</span>
    </a>
    <a href="/blog/sierra-chart-configuration" className="blog-card">
      <div className="blog-cat">Tutoriel</div>
      <h3>Sierra Chart : configuration complète pour le Market Profile</h3>
      <p>Le setup pas à pas pour configurer Sierra Chart avec les bons indicateurs de structure.</p>
      <span className="blog-link">Lire l&apos;article &rarr;</span>
    </a>
  </div>
</section>


      {/* CANDIDATURE */}
      <section className="form-sec" id="candidater">
        <div className="form-inner">
          <div className="sec-label">Candidature</div>
          <h2 className="sec-title">Verifier mon eligibilite.</h2>
          <p className="sec-desc">10 places max par session. On revient vers vous sous 48h.</p>
          <ApplyForm />
        </div>
      </section>

      <FAQ items={homeFaq} />
    </>
  );
}
