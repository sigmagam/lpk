"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale-pop, .anim-card, .hero-highlight"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
