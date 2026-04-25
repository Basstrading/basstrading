"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const villeOptions = [
  "Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux",
  "Lille", "Nantes", "Strasbourg", "Nice", "Montpellier",
  "Rennes", "Grenoble", "Toulon", "Aix-en-Provence",
  "Rouen", "Dijon", "Angers", "Reims", "Nîmes", "Le Havre",
  "Autre ville",
];

export default function PresentielForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [selectedVille, setSelectedVille] = useState("");

  useEffect(() => {
    const villeParam = searchParams.get("ville");
    if (villeParam) {
      const match = villeOptions.find(
        (v) => v.toLowerCase().replace(/\s+/g, "-") === villeParam ||
               v.toLowerCase() === villeParam
      );
      if (match) setSelectedVille(match);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const ville = data.get("ville") as string;
    const exp = data.get("experience") as string;
    const financement = data.get("financement") as string;
    const motiv = (data.get("motivation") as string) || "Non renseigné";

    const tgText = `📍 CANDIDATURE PRÉSENTIEL\n\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nVille: ${ville}\nExpérience: ${exp}\nFinancement: ${financement}\nMotivation: ${motiv}`;

    try {
      const [emailRes] = await Promise.all([
        fetch("https://formsubmit.co/ajax/support@iftrading.fr", {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }),
        fetch(
          "https://api.telegram.org/bot8226810369:AAFi8mLA7jrQzP_5mIIuQcsAzeX-6am300Y/sendMessage",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: 5216224966, text: tgText }),
          }
        ),
      ]);

      if (emailRes.ok) {
        setSubmitted(true);
      } else {
        setError("Erreur — Réessayez");
      }
    } catch {
      setError("Erreur réseau — Réessayez");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="cp-success">
        <div className="cp-success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Candidature reçue.</h3>
        <p>Sébastien vous recontacte sous 48h pour valider votre place.</p>
      </div>
    );
  }

  return (
    <form className="cp-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Candidature Présentiel — BASS Trading" />
      <input type="hidden" name="_template" value="table" />

      <div className="cp-field">
        <label>Prénom &amp; Nom</label>
        <input type="text" name="name" required placeholder="Jean Dupont" />
      </div>

      <div className="cp-row">
        <div className="cp-field">
          <label>Email</label>
          <input type="email" name="email" required placeholder="jean@exemple.fr" />
        </div>
        <div className="cp-field">
          <label>Téléphone</label>
          <input type="tel" name="phone" required placeholder="06 12 34 56 78" />
        </div>
      </div>

      <div className="cp-field">
        <label>Ville souhaitée</label>
        <select name="ville" required value={selectedVille} onChange={(e) => setSelectedVille(e.target.value)}>
          <option value="">Choisir une ville...</option>
          {villeOptions.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className="cp-row">
        <div className="cp-field">
          <label>Expérience en trading</label>
          <select name="experience" required>
            <option value="">Choisir...</option>
            <option value="Moins de 6 mois">Moins de 6 mois</option>
            <option value="6 à 12 mois">6 à 12 mois</option>
            <option value="1 à 2 ans">1 à 2 ans</option>
            <option value="2 à 5 ans">2 à 5 ans</option>
            <option value="Plus de 5 ans">Plus de 5 ans</option>
          </select>
        </div>
        <div className="cp-field">
          <label>Financement envisagé</label>
          <select name="financement" required>
            <option value="">Choisir...</option>
            <option value="CPF">CPF</option>
            <option value="France Travail">France Travail</option>
            <option value="Financement personnel">Financement personnel</option>
            <option value="Prise en charge entreprise">Prise en charge entreprise</option>
            <option value="Je ne sais pas encore">Je ne sais pas encore</option>
          </select>
        </div>
      </div>

      <div className="cp-field">
        <label>Motivation <span className="cp-opt">(optionnel)</span></label>
        <textarea name="motivation" rows={3} placeholder="Qu'est-ce qui vous amène vers BASS Trading ?" />
      </div>

      <button type="submit" className="cp-submit" disabled={sending}>
        {sending ? "Envoi en cours..." : error || "Envoyer ma candidature"}
      </button>
    </form>
  );
}
