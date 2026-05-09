import Image from "next/image";
import { generateSeoMetadata } from "@/lib/seo";
import { EventJsonLd, BreadcrumbJsonLd } from "@/lib/jsonld";
import FAQ from "@/components/FAQ";
import Countdown from "./Countdown";
import MalagaAnimations from "./MalagaAnimations";
import "./malaga.css";

export const metadata = generateSeoMetadata({
  title: "Seminaire Trading Malaga — 28 sept. au 2 oct. 2026",
  description:
    "5 jours intensifs a Malaga avec Sebastien Constant. Market Profile, Order Flow, Footprint, live trading. 20 places max. 1 490 euros le seminaire complet (paiement 3x sans frais Klarna).",
  path: "/malaga/",
});

const STRIPE_URL =
  "https://buy.stripe.com/00w00i4Za0jT25W0yK9EI0t";

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const malagaFaq = [
  {
    question: "Quel niveau faut-il pour participer ?",
    answer:
      "Tu dois avoir les bases du trading (chandeliers, supports/resistances, savoir passer un ordre). Le seminaire est fait pour les traders qui ont de l'experience mais qui stagnent. Si tu es debutant total, c'est premature.",
  },
  {
    question: "L'hebergement est-il inclus ?",
    answer:
      "Non, l'hebergement et le transport sont a ta charge. On peut te recommander des hotels et Airbnb proches du lieu du seminaire a Malaga. Compte 50-100 euros/nuit selon tes preferences.",
  },
  {
    question: "Peut-on payer en plusieurs fois ?",
    answer:
      "Oui, paiement en 3x sans frais disponible. Les details sont communiques apres la reservation.",
  },
  {
    question: "Que se passe-t-il si les places sont prises ?",
    answer:
      "Le seminaire est limite a 20 places. Si c'est complet, tu seras inscrit en liste d'attente pour la prochaine session. Les places partent generalement vite — d'ou l'interet de reserver tot.",
  },
  {
    question: "Quels marches sont trades pendant le seminaire ?",
    answer:
      "On trade principalement les Futures (marche reglemente et centralise), mais la methode s'applique a tous les marches : forex, indices, matieres premieres, crypto. Les concepts de Market Profile et Order Flow sont universels.",
  },
];

export default function MalagaPage() {
  return (
    <div className="malaga-page">
      <EventJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Seminaire Malaga" },
        ]}
      />
      <MalagaAnimations />

      {/* HERO */}
      <section className="m-hero">
        <div className="m-hero-bg">
          <Image
            src="/images/bass-malaga-group.jpg"
            alt="Seminaire BASS Trading Malaga"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="m-hero-content">
          <div className="m-hero-badge">
            <span className="dot" /> 28 sept. — 2 oct. 2026 — 20 places
          </div>
          <h1 className="m-hero-title">
            5 jours pour ne plus jamais
            <br />
            subir le marche. <em>Malaga.</em>
          </h1>
          <p className="m-hero-sub">
            Cours le matin. Trading live ensemble l&apos;apres-midi. Pendant 5
            jours, Sebastien vous transmet ce qu&apos;il n&apos;a jamais partage
            publiquement — et vous repartez avec un plan d&apos;action clair que
            vous aurez deja mis en pratique.
          </p>
          <div className="m-hero-meta">
            <div className="m-hero-meta-item">
              <span className="m-hero-meta-label">Dates</span>
              <span className="m-hero-meta-value">
                Lun. 28 sept. — Ven. 2 oct. 2026
              </span>
            </div>
            <div className="m-hero-meta-item">
              <span className="m-hero-meta-label">Lieu</span>
              <span className="m-hero-meta-value">Malaga, Espagne</span>
            </div>
            <div className="m-hero-meta-item">
              <span className="m-hero-meta-label">Places</span>
              <span className="m-hero-meta-value">20 max</span>
            </div>
          </div>
          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener"
            className="m-hero-cta"
          >
            Reserver ma place <Arrow />
          </a>
        </div>
      </section>

      <Countdown />

      {/* PAIN POINTS */}
      <section className="m-sec m-sec-dark">
        <div className="sec-center">
          <div className="sec-label m-sec-label-gold">Le constat</div>
          <h2 className="sec-title" style={{ color: "var(--pure)" }}>
            Et si dans 5 jours,
            <br />
            tu ne subissais plus le marche ?
          </h2>
          <p
            className="sec-desc"
            style={{ color: "rgba(255,255,255,.45)", margin: "0 auto" }}
          >
            Imagine ouvrir tes ecrans le lundi matin et savoir exactement quoi
            regarder, ou attendre, et pourquoi. C&apos;est ce que tu rameneras
            de Malaga.
          </p>
        </div>
        <div className="pain-grid">
          <div className="pain-card">
            <div className="pain-icon">01</div>
            <h3>Fini de trader dans le brouillard</h3>
            <p>
              Tu ne sais plus par ou commencer quand tu ouvres tes ecrans ? En 5
              jours, tu repars avec un processus clair — de la preparation de
              session a la derniere bougie — que tu auras deja applique chaque
              apres-midi en live.
            </p>
          </div>
          <div className="pain-card">
            <div className="pain-icon">02</div>
            <h3>Comprendre enfin pourquoi le prix bouge</h3>
            <p>
              Les marches ne sont pas aleatoires. Les operateurs ont des
              contraintes precises. Sebastien va te montrer exactement lesquelles
              — des elements qu&apos;il n&apos;a jamais partages publiquement.
            </p>
          </div>
          <div className="pain-card">
            <div className="pain-icon">03</div>
            <h3>Rentrer chez toi et savoir quoi faire</h3>
            <p>
              Le vrai probleme, c&apos;est le lundi d&apos;apres. On construit
              ensemble ton plan etape par etape, et tu le mets en application
              pendant le seminaire.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section className="m-sec m-sec-light">
        <div className="sec-center">
          <div className="sec-label">Programme</div>
          <h2 className="sec-title">
            Comprendre le matin.
            <br />
            Appliquer l&apos;apres-midi.
          </h2>
          <p className="sec-desc" style={{ margin: "0 auto" }}>
            Chaque journee : un concept cle le matin, puis on trade ensemble
            l&apos;apres-midi sur les vrais marches.
          </p>
        </div>
        <div className="prog-grid">
          {[
            {
              day: "Jour 1",
              title: "Tu sauras lire le marche avant qu'il ouvre",
              desc: "Market Profile : Value Area, POC, Initial Balance. Tu apprendras a preparer ta session comme un pro.",
            },
            {
              day: "Jour 2",
              title: "Tu verras ce que les autres ne voient pas",
              desc: "Footprint et CVD : l'activite reelle a chaque niveau de prix. Imbalances, absorption, divergences.",
            },
            {
              day: "Jour 3",
              title: "Tu liras le flux en temps reel",
              desc: "Tape Reading et VWAP : qui achete, qui vend, ou se trouvent les zones de decision.",
            },
            {
              day: "Jour 4",
              title: "Tu comprendras pourquoi le prix bouge vraiment",
              desc: "Les contraintes des operateurs institutionnels — ce que Sebastien n'a jamais partage publiquement.",
            },
            {
              day: "Jour 5",
              title: "Tu repartiras avec ton plan — deja teste",
              desc: "On construit ensemble TON plan de trading : preparation, execution, journal. L'apres-midi, derniere session live.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="prog-day"
              style={i === 4 ? { border: "none" } : undefined}
            >
              <div className="prog-day-num">{item.day}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTOS */}
      <div className="photo-grid">
        <div>
          <Image
            src="/images/bass-teaching.jpg"
            alt="Sebastien enseigne le trading"
            width={800}
            height={320}
            style={{ width: "100%", height: "320px", objectFit: "cover" }}
          />
        </div>
        <div>
          <Image
            src="/images/bass-tv-teaching.jpg"
            alt="Session live Market Profile"
            width={800}
            height={320}
            style={{ width: "100%", height: "320px", objectFit: "cover" }}
          />
        </div>
        <div className="photo-full">
          <Image
            src="/images/bass-tv-closeup.jpg"
            alt="Analyse Market Profile en detail"
            width={1600}
            height={400}
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* SEBASTIEN */}
      <section className="m-sec m-sec-light">
        <div className="seb-grid">
          <div className="seb-img">
            <Image
              src="/images/bass-portrait.jpg"
              alt="Sebastien Constant"
              width={340}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="sec-label">Ton formateur</div>
            <h2 className="sec-title">Sebastien Constant</h2>
            <p className="sec-desc">
              Trader actif depuis plus de 10 ans. Specialiste Market Profile,
              Order Flow et Footprint sur les Futures CME. Createur de
              x-trade.ai. Il trade tous les jours, en live, devant ses eleves.
            </p>
            <p className="sec-desc" style={{ marginTop: "16px" }}>
              Lors de ce seminaire, Sebastien partagera des elements qu&apos;il
              n&apos;a jamais devoiles publiquement — sa lecture des contraintes
              des operateurs institutionnels, ses grilles de decision, et le
              processus exact qu&apos;il applique chaque jour.
            </p>
            <div className="seb-stat">
              <div className="seb-stat-item">
                <div className="seb-stat-num">4.9/5</div>
                <div className="seb-stat-label">Trustpilot (126 avis)</div>
              </div>
              <div className="seb-stat-item">
                <div className="seb-stat-num">10+</div>
                <div className="seb-stat-label">Ans d&apos;experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="m-sec m-sec-light" style={{ paddingTop: 0 }}>
        <div className="sec-center">
          <div className="sec-label">Temoignages</div>
          <h2 className="sec-title">Ce qu&apos;ils en disent.</h2>
        </div>
        <div className="test-grid">
          {[
            {
              text: "Un stage intensif et immersif a Malaga en Market Profile entre les mains de Bass pour progresser et continuer l'apprentissage dans une ambiance incroyable. La qualite de l'enseignement de Bass est remarquable et remarquee. Merci pour tout. A quand le prochain ?",
              author: "Laurent Ouanich",
            },
            {
              text: "Nous avons pu rencontrer Bass au seminaire a Malaga. Bass est une personne fort sympathique et bon pedagogue, fort d'avoir etabli une belle communaute. Nous avons pu ressentir un reel merite a son apprentissage et une grande reconnaissance de ses eleves envers lui !",
              author: "Lorton",
            },
            {
              text: "Rencontre a un seminaire, Bass est un tres bon formateur et une tres bonne personne, bienveillant. Je vous recommande sa formation pour completer vos connaissances en bourse ou meme pour commencer dans ce domaine. Merci a toi Bass.",
              author: "Va Fr",
            },
          ].map((t, i) => (
            <div key={i} className="test-card">
              <div className="test-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="test-text">&quot;{t.text}&quot;</p>
              <div className="test-author">{t.author}</div>
              <div className="test-role">Avis Trustpilot verifie</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="m-sec m-sec-light" id="inscription">
        <div className="sec-center">
          <div className="sec-label m-sec-label-gold">Inscription</div>
          <h2 className="sec-title">Reserve ta place.</h2>
          <p className="sec-desc" style={{ margin: "0 auto" }}>
            20 places maximum pour le seminaire complet. Paiement 3x sans frais
            disponible via Klarna.
          </p>
        </div>
        <div className="price-card">
          <div className="price-alert">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <strong>20 places maximum — places limitees</strong>
              <span>Lun. 28 sept. — Ven. 2 oct. 2026 — Malaga, Espagne</span>
            </div>
          </div>
          <div className="price-badge">Seminaire 5 jours</div>
          <div className="price-amount">
            1 490<span>euros</span>
          </div>
          <div className="price-period">
            Seminaire complet — 5 jours a Malaga
          </div>
          <div className="price-includes">
            <div className="price-item">
              <Check /> 5 jours de formation intensive en presentiel
            </div>
            <div className="price-item">
              <Check /> Market Profile, Order Flow, Footprint, CVD
            </div>
            <div className="price-item">
              <Check /> Sessions live trading quotidiennes
            </div>
            <div className="price-item">
              <Check /> x-trade.ai inclus a vie
            </div>
            <div className="price-item">
              <Check /> Preparation prop firms + plan de trading
            </div>
            <div className="price-item">
              <Check /> Acces communaute + replays a vie
            </div>
          </div>
          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener"
            className="price-cta"
          >
            Reserver ma place — 1 490 euros
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "12px",
              fontSize: ".75rem",
              color: "rgba(255,255,255,.4)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="1" y="4" width="22" height="16" rx="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            ou en 3x sans frais avec Klarna (497 euros/mois)
          </div>
          <div className="price-urgency">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>{" "}
            20 places maximum — derniers seats avant la session de septembre
          </div>
          <p className="price-note">
            Paiement en 3x sans frais disponible via Klarna — selectionne
            &quot;Klarna&quot; comme moyen de paiement lors du checkout.
            Hebergement et transport non inclus.
          </p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="m-sec m-sec-light" style={{ paddingTop: 0 }}>
        <div className="guarantee">
          <div className="guarantee-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h3>Garantie satisfait ou rembourse</h3>
            <p>
              Si a la fin de la premiere journee tu estimes que le seminaire ne
              correspond pas a tes attentes, tu es rembourse integralement. Zero
              risque.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={malagaFaq} />

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="sec-center">
          <div className="sec-label m-sec-label-gold">
            Lundi 28 sept. — Vendredi 2 oct. 2026
          </div>
          <h2 className="sec-title" style={{ color: "var(--pure)" }}>
            Dans 5 jours, tu ouvriras
            <br />
            tes ecrans differemment.
          </h2>
          <p
            className="sec-desc"
            style={{
              color: "rgba(255,255,255,.4)",
              margin: "0 auto 36px",
            }}
          >
            Plus de brouillard. Plus de doute. Un plan clair, des outils que tu
            maitrises, et une comprehension du marche que 99% des traders
            n&apos;auront jamais. Tarif 1 490 euros — paiement 3x sans frais
            disponible via Klarna. 20 places maximum.
          </p>
          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener"
            className="m-hero-cta"
            style={{ display: "inline-flex" }}
          >
            Reserver — 1 490 euros <Arrow />
          </a>
        </div>
      </section>
    </div>
  );
}
