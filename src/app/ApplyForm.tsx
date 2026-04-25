"use client";

import { useState } from "react";

export default function ApplyForm() {
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
    const exp = data.get("experience") as string;
    const motiv = (data.get("motivation") as string) || "Non renseigne";

    const tgText = `Nouvelle candidature BASS Trading\n\nNom: ${name}\nEmail: ${email}\nExperience: ${exp}\nMotivation: ${motiv}`;

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
        setError("Erreur — Reessayez");
      }
    } catch {
      setError("Erreur reseau — Reessayez");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <p style={{ fontSize: "1.2rem", fontWeight: 700 }}>
          Candidature envoyee !
        </p>
        <p style={{ color: "var(--g1)", marginTop: "8px" }}>
          On revient vers vous sous 48h.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Prenom &amp; Nom</label>
        <input type="text" name="name" required />
      </div>
      <div className="field">
        <label>Email</label>
        <input type="email" name="email" id="mainEmail" required />
      </div>
      <div className="field">
        <label>Experience en trading</label>
        <select name="experience" required>
          <option value="">Choisir...</option>
          <option value="0-6 mois">0-6 mois</option>
          <option value="6-12 mois">6-12 mois</option>
          <option value="1-2 ans">1-2 ans</option>
          <option value="2-5 ans">2-5 ans</option>
          <option value="5+ ans">5+ ans</option>
        </select>
      </div>
      <div className="field">
        <label>Motivation (optionnel)</label>
        <textarea name="motivation" rows={3} />
      </div>
      <button type="submit" className="sub-btn" disabled={sending}>
        {sending ? "Envoi en cours..." : error || "Envoyer ma candidature"}
      </button>
      <p className="form-note">
        10 places max par session. Reponse sous 48h.
      </p>
    </form>
  );
}
