"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [days, setDays] = useState("--");
  const [hours, setHours] = useState("--");
  const [mins, setMins] = useState("--");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    function update() {
      const target = new Date("2026-09-28T09:00:00+02:00").getTime();
      const diff = target - Date.now();
      if (diff <= 0) {
        setStarted(true);
        return;
      }
      setDays(String(Math.floor(diff / (1000 * 60 * 60 * 24))));
      setHours(
        String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0")
      );
      setMins(
        String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0")
      );
    }
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown-bar">
      <span className="countdown-label">Debut du seminaire dans</span>
      {started ? (
        <span style={{ color: "var(--gold)", fontWeight: 700 }}>
          Seminaire en cours
        </span>
      ) : (
        <div className="countdown-timer">
          <div className="cd-block">
            <div className="cd-num">{days}</div>
            <div className="cd-unit">Jours</div>
          </div>
          <div className="cd-block">
            <div className="cd-num">{hours}</div>
            <div className="cd-unit">Heures</div>
          </div>
          <div className="cd-block">
            <div className="cd-num">{mins}</div>
            <div className="cd-unit">Min</div>
          </div>
        </div>
      )}
      <span className="countdown-price">
        <strong>1 490 euros</strong> — 20 places max — paiement 3x sans frais
        Klarna
      </span>
    </div>
  );
}
