"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const villesNav = [
  {
    region: "Ile-de-France",
    items: [{ slug: "paris", label: "Paris" }],
  },
  {
    region: "Auvergne-Rhone-Alpes",
    items: [
      { slug: "lyon", label: "Lyon" },
      { slug: "grenoble", label: "Grenoble" },
    ],
  },
  {
    region: "PACA",
    items: [
      { slug: "marseille", label: "Marseille" },
      { slug: "nice", label: "Nice" },
      { slug: "toulon", label: "Toulon" },
      { slug: "aix-en-provence", label: "Aix-en-Provence" },
    ],
  },
  {
    region: "Occitanie",
    items: [
      { slug: "toulouse", label: "Toulouse" },
      { slug: "montpellier", label: "Montpellier" },
      { slug: "nimes", label: "Nimes" },
    ],
  },
  {
    region: "Nouvelle-Aquitaine",
    items: [{ slug: "bordeaux", label: "Bordeaux" }],
  },
  {
    region: "Hauts-de-France",
    items: [{ slug: "lille", label: "Lille" }],
  },
  {
    region: "Pays de la Loire",
    items: [
      { slug: "nantes", label: "Nantes" },
      { slug: "angers", label: "Angers" },
    ],
  },
  {
    region: "Grand Est",
    items: [
      { slug: "strasbourg", label: "Strasbourg" },
      { slug: "reims", label: "Reims" },
    ],
  },
  {
    region: "Bretagne",
    items: [{ slug: "rennes", label: "Rennes" }],
  },
  {
    region: "Normandie",
    items: [
      { slug: "rouen", label: "Rouen" },
      { slug: "le-havre", label: "Le Havre" },
    ],
  },
  {
    region: "Bourgogne-Franche-Comte",
    items: [{ slug: "dijon", label: "Dijon" }],
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav${scrolled ? " scrolled" : ""}`}
      id="nav"
    >
      <Link href="/" className="nav-logo">
        BASS
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/#methode">Methode</Link>
        </li>
        <li>
          <Link href="/#resultats">Resultats</Link>
        </li>
        <li>
          <Link href="/#avis">Avis</Link>
        </li>
        <li
          className="nav-drop-wrap"
          onMouseEnter={() => setDropOpen(true)}
          onMouseLeave={() => setDropOpen(false)}
        >
          <button
            className="nav-drop-trigger"
            onClick={() => setDropOpen(!dropOpen)}
            aria-expanded={dropOpen}
          >
            Formation Presentiel
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`nav-drop-chevron${dropOpen ? " open" : ""}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {dropOpen && (
            <div className="nav-dropdown">
              <div className="nav-drop-inner">
                {villesNav.map((group) => (
                  <div key={group.region} className="nav-drop-group">
                    <div className="nav-drop-region">{group.region}</div>
                    {group.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/formation-trading/${item.slug}/`}
                        className="nav-drop-link"
                        onClick={() => setDropOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>
        <li>
          <Link href="/malaga/" style={{ color: "var(--gold, #C9A84C)", fontWeight: 600 }}>Malaga 2026</Link>
        </li>
        <li>
          <Link href="/#faq">FAQ</Link>
        </li>
        <li>
          <Link href="/blog/">Blog</Link>
        </li>
      </ul>
      <Link href="/#candidater" className="nav-cta">
        Candidater
      </Link>
      <button
        className={`nav-burger${menuOpen ? " active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
