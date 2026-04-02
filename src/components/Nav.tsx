"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Show nav after preloader (delay 2s) or immediately if no preloader
    const timer = setTimeout(() => setVisible(true), 2000);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`nav${scrolled ? " scrolled" : ""}${visible ? " visible" : ""}`}
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
