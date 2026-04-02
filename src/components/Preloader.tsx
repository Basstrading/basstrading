"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.remove();
      return;
    }

    const tl = gsap.timeline();
    tl.to(".pre-word span", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.3,
    })
      .to(
        "#preLine",
        { width: "80px", duration: 0.7, ease: "power2.inOut" },
        "<+0.2"
      )
      .to(
        ".preloader",
        { yPercent: -100, duration: 0.8, ease: "power3.inOut", delay: 0.4 },
      )
      .set(".preloader", { display: "none" });
  }, []);

  return (
    <div className="preloader" id="preloader" ref={ref}>
      <div style={{ textAlign: "center" }}>
        <div className="pre-word">
          <span>B</span>
          <span>A</span>
          <span>S</span>
          <span>S</span>
        </div>
        <div className="pre-line" id="preLine" />
      </div>
    </div>
  );
}
