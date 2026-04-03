import { notFound } from "next/navigation";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/jsonld";
import { VilleJsonLd } from "./VilleJsonLd";
import FAQ from "@/components/FAQ";
import { villes, getVilleBySlug } from "@/content/pages/villes/_data";
import "./ville.css";

export function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville: slug } = await params;
  const v = getVilleBySlug(slug);
  if (!v) return {};
  return generateSeoMetadata({
    title: `Formation Trading ${v.ville} | Présentiel + CPF`,
    description: `Formation trading à ${v.ville} avec Sébastien Constant. Market Profile, Order Flow, Gamma. 8 places max. Éligible CPF. Session confirmée dès 8 inscrits.`,
    path: `/formation-trading/${v.slug}/`,
  });
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 18, height: 18, flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default async function FormationVillePage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville: slug } = await params;
  const v = getVilleBySlug(slug);
  if (!v) notFound();

  const otherVilles = villes.filter((o) => o.slug !== v.slug);

  const faqItems = [
    {
      question: `Sébastien Constant vient-il vraiment à ${v.ville} ?`,
      answer: `Oui. Je me déplace dans toute la France. La session à ${v.ville} est animée par moi, en direct, pas par un formateur délégué.`,
    },
    {
      question: `Quand est la prochaine session à ${v.ville} ?`,
      answer:
        "La session se confirme dès 8 inscrits. Rejoignez la liste d\u2019attente pour être prévenu en premier.",
    },
    {
      question: `La formation est-elle éligible CPF depuis ${v.ville} ?`,
      answer:
        "Oui. La formation est certifiée Qualiopi via EMSCA, éligible CPF sur tout le territoire français.",
    },
    {
      question: `Je suis débutant, puis-je faire la session à ${v.ville} ?`,
      answer:
        "Le mentorat BASS s\u2019adresse aux traders qui ont les bases mais stagnent. Un minimum de 6 mois de pratique est recommandé.",
    },
    {
      question:
        "Quelle est la différence avec une formation classique ?",
      answer:
        "Les formations classiques enseignent des indicateurs. BASS enseigne la structure du marché — Market Profile, Order Flow, Gamma — les outils des institutionnels.",
    },
  ];

  return (
    <div className="ville-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Formation Présentiel", url: "/formation-trading/" },
          { name: `Formation Trading ${v.ville}` },
        ]}
      />
      <VilleJsonLd ville={v.ville} region={v.region} />
      <FaqJsonLd items={faqItems} />

      {/* HERO */}
      <section className="v-hero">
        <div className="v-hero-content">
          <div className="v-hero-badge">
            <span className="v-dot" /> 8 places max — Présentiel
          </div>
          <h1 className="v-hero-title">
            Formation Trading à{" "}
            <em>{v.ville}</em>
            <br />
            <span>Présentiel &amp; En ligne</span>
          </h1>
          <p className="v-hero-sub">
            Apprenez à lire les marchés comme les institutionnels.
            <br />
            Session à {v.ville} — 8 participants maximum.
          </p>
          <div className="v-hero-ctas">
            <Link href={`/candidater-presentiel/?ville=${v.slug}`} className="v-cta-primary">
              Réserver ma place <Arrow />
            </Link>
            <Link href="/candidater-en-ligne/" className="v-cta-secondary">
              Formation en ligne disponible immédiatement
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO LOCALE */}
      <section className="v-sec v-sec-light">
        <div className="v-narrow">
          <p className="v-intro">{v.intro}</p>
        </div>
      </section>

      {/* MÉTHODE BASS */}
      <section className="v-sec v-sec-dark">
        <div className="sec-center">
          <div className="sec-label" style={{ color: "rgba(255,255,255,.25)" }}>
            La méthode
          </div>
          <h2 className="sec-title" style={{ color: "var(--pure)" }}>
            Une méthode. Pas des indicateurs.
          </h2>
          <p className="v-method-intro">
            La plupart des formations vous apprennent des patterns et des
            indicateurs. BASS vous apprend à lire ce que font les
            institutionnels — puis à vous protéger comme eux.
          </p>
        </div>

        {/* BLOC 1 — ANALYSE */}
        <div className="v-method-block">
          <div className="v-method-label">Bloc 1 — Analyse du contexte</div>
          <p className="v-method-sublabel">Avant de toucher un trade</p>

          <div className="v-method-grid">
            <div className="v-method-card">
              <h3>Options &amp; Gamma</h3>
              <p>
                Avant même de regarder un graphique, on analyse le
                positionnement des options. Gamma négatif ou positif ? Où sont
                les walls gamma ? Où est le flip ? Ces niveaux dictent le
                comportement des market makers — et donc du prix.
              </p>
            </div>
            <div className="v-method-card">
              <h3>Market Profile</h3>
              <p>
                Le marché est un mécanisme d&apos;enchères. Le Market Profile
                rend visible où le marché a accepté la valeur, où il l&apos;a
                rejetée, et si on est en équilibre ou en déséquilibre. C&apos;est
                la carte du terrain avant d&apos;entrer dans la bataille.
              </p>
            </div>
            <div className="v-method-card">
              <h3>VWAP Multi-Timeframe</h3>
              <p>
                On analyse 4 niveaux de VWAP avec écarts-types : Annuel (le
                contexte institutionnel de fond), Mensuel (la tendance de fond),
                Hebdomadaire (la dynamique en cours), Daily (le niveau
                d&apos;exécution du jour). Quand ces niveaux convergent, on a
                une zone à fort enjeu.
              </p>
            </div>
          </div>

          <div className="v-method-result">
            <Check />
            <p>
              À ce stade, on sait si on veut acheter, vendre, ou potentiellement
              les deux selon le contexte. Pas une intuition. Une lecture
              structurée.
            </p>
          </div>
        </div>

        {/* BLOC 2 — EXÉCUTION */}
        <div className="v-method-block">
          <div className="v-method-label">Bloc 2 — Exécution</div>
          <p className="v-method-sublabel">Le moment précis</p>

          <div className="v-method-grid v-method-grid-2">
            <div className="v-method-card">
              <h3>CVD — Cumulative Volume Delta</h3>
              <p>
                Le CVD mesure la pression directionnelle réelle — pas ce que le
                prix fait, mais ce que les ordres font. Une divergence CVD/prix
                est souvent le meilleur signal d&apos;entrée disponible.
              </p>
            </div>
            <div className="v-method-card">
              <h3>Tape Reading</h3>
              <p>
                La confirmation finale vient du tape. Time &amp; Sales, activité
                institutionnelle en temps réel. On entre quand tout est aligné —
                pas avant.
              </p>
            </div>
          </div>
        </div>

        {/* BLOC 3 — PROTECTION */}
        <div className="v-method-block">
          <div className="v-method-label">Bloc 3 — Protection</div>
          <p className="v-method-sublabel">Ce que personne n&apos;enseigne</p>

          <div className="v-method-card v-method-card-highlight">
            <h3>x-trade.ai — Risk Manager Institutionnel</h3>
            <p>
              Inclus dans le mentorat. x-trade.ai coupe automatiquement vos
              positions avant que vos émotions ne le fassent. Limite journalière,
              drawdown max, verrouillage automatique. C&apos;est ce
              qu&apos;utilisent les desks institutionnels — adapté au prop firm
              français.
            </p>
          </div>
        </div>
      </section>

      {/* FORMAT SESSION */}
      <section className="v-sec v-sec-light">
        <div className="sec-center">
          <div className="sec-label">Format</div>
          <h2 className="sec-title">Session BASS à {v.ville}</h2>
        </div>
        <div className="v-format-grid">
          <div className="v-format-item">
            <div className="v-format-label">Format</div>
            <div className="v-format-value">
              Présentiel intensif, 3-4 jours consécutifs
            </div>
          </div>
          <div className="v-format-item">
            <div className="v-format-label">Groupe</div>
            <div className="v-format-value">
              8 participants maximum (suivi individuel garanti)
            </div>
          </div>
          <div className="v-format-item">
            <div className="v-format-label">Lieu</div>
            <div className="v-format-value">
              Centre-ville de {v.ville} — confirmé 2 semaines avant
            </div>
          </div>
          <div className="v-format-item">
            <div className="v-format-label">Prochaine session</div>
            <div className="v-format-value">
              Ouverte aux inscriptions — démarre dès 8 participants confirmés
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href={`/candidater-presentiel/?ville=${v.slug}`} className="btn-p">
            Rejoindre la liste d&apos;attente {v.ville} <Arrow />
          </Link>
        </div>

        {/* FINANCEMENT */}
        <div className="v-financement">
          <div className="v-financement-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h3>Financement</h3>
            <p>{v.financement}</p>
          </div>
        </div>
      </section>

      {/* PREUVES */}
      <section className="v-sec v-sec-light" style={{ paddingTop: 0 }}>
        <div className="v-stats">
          <div className="v-stat">
            <div className="v-stat-num">$700K+</div>
            <div className="v-stat-label">Comptes funded</div>
          </div>
          <div className="v-stat">
            <div className="v-stat-num">4.9/5</div>
            <div className="v-stat-label">126 avis Trustpilot</div>
          </div>
          <div className="v-stat">
            <div className="v-stat-num">10+</div>
            <div className="v-stat-label">Ans d&apos;expérience</div>
          </div>
        </div>
        <div className="v-testimonial">
          <div className="v-testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>&quot;{v.testimonial.text}&quot;</p>
          <div className="v-testimonial-author">{v.testimonial.author}</div>
          <div className="v-testimonial-src">Avis Trustpilot vérifié</div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* MAILLAGE */}
      <section className="v-sec v-sec-light">
        <div className="sec-center">
          <div className="sec-label">Autres villes</div>
          <h2 className="sec-title">
            Formation BASS dans d&apos;autres villes
          </h2>
        </div>
        <div className="v-maillage">
          {otherVilles.map((o) => (
            <Link
              key={o.slug}
              href={`/formation-trading/${o.slug}/`}
              className="v-maillage-link"
            >
              Formation Trading {o.ville}
            </Link>
          ))}
        </div>
        <div className="v-maillage-extra">
          <Link href="/candidater/" className="btn-p">
            Candidater au mentorat BASS <Arrow />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="v-final-cta">
        <div className="sec-center">
          <h2 className="sec-title" style={{ color: "var(--pure)" }}>
            Prêt à trader comme un institutionnel ?
          </h2>
          <p style={{ color: "rgba(255,255,255,.4)", marginBottom: 36 }}>
            Session à {v.ville} — 8 places maximum. Démarre dès 8 inscrits.
          </p>
          <Link
            href="/#candidater"
            className="v-cta-primary"
            style={{ display: "inline-flex" }}
          >
            Réserver ma place <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
