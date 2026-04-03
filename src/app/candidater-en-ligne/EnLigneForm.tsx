"use client";

import { useState } from "react";

export default function EnLigneForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const exp = data.get("experience") as string;
    const objectif = data.get("objectif") as string;
    const dispo = data.get("disponibilite") as string;
    const motiv = (data.get("motivation") as string) || "Non renseigné";

    const tgText = `💻 CANDIDATURE EN LIGNE\n\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nExpérience: ${exp}\nObjectif: ${objectif}\nDispo 15h30: ${dispo}\nMotivation: ${motiv}`;

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
      <div className="cl-success">
        <div className="cl-success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Candidature reçue.</h3>
        <p>Vous recevrez un email sous 24h avec les informations d&apos;accès.</p>
      </div>
    );
  }

  return (
    <form className="cl-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Candidature En Ligne — BASS Trading" />
      <input type="hidden" name="_template" value="table" />

      <div className="cl-field">
        <label>Prénom &amp; Nom</label>
        <input type="text" name="name" required placeholder="Jean Dupont" />
      </div>

      <div className="cl-row">
        <div className="cl-field">
          <label>Email</label>
          <input type="email" name="email" required placeholder="jean@exemple.fr" />
        </div>
        <div className="cl-field">
          <label>Téléphone</label>
          <input type="tel" name="phone" required placeholder="06 12 34 56 78" />
        </div>
      </div>

      <div className="cl-row">
        <div className="cl-field">
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
        <div className="cl-field">
          <label>Objectif principal</label>
          <select name="objectif" required>
            <option value="">Choisir...</option>
            <option value="Passer un challenge prop firm">Passer un challenge prop firm</option>
            <option value="Devenir trader indépendant">Devenir trader indépendant</option>
            <option value="Améliorer ma régularité et ma discipline">Améliorer ma régularité</option>
            <option value="Comprendre le Market Profile et l'Order Flow">Comprendre MP &amp; OF</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
      </div>

      <div className="cl-field">
        <label>Disponible à 15h30 heure française ?</label>
        <div className="cl-radio-group">
          <label className="cl-radio">
            <input type="radio" name="disponibilite" value="Oui, disponible" required />
            <span className="cl-radio-mark" />
            <span>Oui, je suis disponible sur ce créneau</span>
          </label>
          <label className="cl-radio">
            <input type="radio" name="disponibilite" value="Pas toujours, replays" />
            <span className="cl-radio-mark" />
            <span>Pas toujours, mais je regarde les replays</span>
          </label>
        </div>
      </div>

      <div className="cl-field">
        <label>Motivation <span className="cl-opt">(optionnel)</span></label>
        <textarea name="motivation" rows={3} placeholder="Où en êtes-vous dans votre trading ?" />
      </div>

      <button type="submit" className="cl-submit" disabled={sending}>
        {sending ? "Envoi en cours..." : error || "Envoyer ma candidature"}
      </button>
    </form>
  );
}
