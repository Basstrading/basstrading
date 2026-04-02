"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
