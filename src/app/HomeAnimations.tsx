"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Hero parallax
    gsap.to("#heroImg", {
      yPercent: 8,
      scale: 1.1,
      ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to("#heroContent", {
      yPercent: -20,
      opacity: 0,
      ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "60% top", scrub: true },
    });

    // Intro word-by-word reveal
    const introEl = document.getElementById("introText");
    if (introEl) {
      const text = introEl.textContent || "";
      const words = text.split(" ");
      introEl.innerHTML = words
        .map((w) => `<span style="opacity:.1;display:inline-block;transition:opacity .3s">${w}</span>`)
        .join(" ");
      const spans = introEl.querySelectorAll("span");
      ScrollTrigger.create({
        trigger: introEl,
        start: "top 80%",
        end: "bottom 40%",
        onUpdate: (self) => {
          const p = self.progress;
          const total = spans.length;
          spans.forEach((s, i) => {
            (s as HTMLElement).style.opacity = p > i / total ? "1" : ".1";
          });
        },
      });
    }

    // Method cards
    gsap.utils.toArray<HTMLElement>(".method-card").forEach((c, i) => {
      gsap.to(c, { y: 0, opacity: 1, duration: 0.5, delay: i * 0.06, ease: "power2.out", scrollTrigger: { trigger: c, start: "top 92%" } });
    });

    // Dark images
    gsap.utils.toArray<HTMLElement>(".dark-img").forEach((d) => {
      gsap.to(d, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: d, start: "top 85%" } });
    });

    // Feature columns
    gsap.utils.toArray<HTMLElement>(".feat-col").forEach((c, i) => {
      gsap.to(c, { y: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: "power2.out", scrollTrigger: { trigger: c, start: "top 88%" } });
    });

    // Overlap section
    gsap.to("#overlapGiant", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: "#overlap", start: "top 70%" } });
    gsap.to("#overlapImg", { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: "#overlapImg", start: "top 80%" } });
    gsap.to("#overlapSub", { y: 0, opacity: 1, duration: 0.5, scrollTrigger: { trigger: "#overlapSub", start: "top 85%" } });
    gsap.to("#overlapGiant", { yPercent: -10, ease: "none", scrollTrigger: { trigger: "#overlap", start: "top bottom", end: "bottom top", scrub: true } });

    // Diff items
    gsap.utils.toArray<HTMLElement>(".diff-item").forEach((d, i) => {
      gsap.to(d, { y: 0, opacity: 1, duration: 0.4, delay: i * 0.03, ease: "power2.out", scrollTrigger: { trigger: d, start: "top 92%" } });
    });

    // Review cards
    gsap.utils.toArray<HTMLElement>(".rc").forEach((c, i) => {
      gsap.to(c, { y: 0, opacity: 1, duration: 0.4, delay: i * 0.04, ease: "power2.out", scrollTrigger: { trigger: c, start: "top 92%" } });
    });

    // Retrait cards
    gsap.utils.toArray<HTMLElement>(".retrait-card").forEach((c, i) => {
      gsap.to(c, { y: 0, opacity: 1, duration: 0.4, delay: i * 0.05, ease: "power2.out", scrollTrigger: { trigger: c, start: "top 92%" } });
    });

    // Video testimonial cards
    gsap.utils.toArray<HTMLElement>(".vid-card").forEach((c, i) => {
      gsap.to(c, { y: 0, opacity: 1, duration: 0.5, delay: i * 0.08, ease: "power2.out", scrollTrigger: { trigger: c, start: "top 92%" } });
    });

    // Blog cards
    gsap.utils.toArray<HTMLElement>(".blog-card").forEach((c, i) => {
      gsap.to(c, { y: 0, opacity: 1, duration: 0.4, delay: i * 0.05, ease: "power2.out", scrollTrigger: { trigger: c, start: "top 92%" } });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
