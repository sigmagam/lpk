"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered after route change
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll(
        ".anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale-pop, .anim-card, .hero-highlight"
      );

      // Reset: remove is-visible from elements that are still below viewport
      // (so they animate again when scrolled to)
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          el.classList.remove("is-visible");
        }
      });

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

      // Only observe elements that don't yet have is-visible
      const unobserved = document.querySelectorAll(
        ".anim-fade-up:not(.is-visible), .anim-fade-left:not(.is-visible), .anim-fade-right:not(.is-visible), .anim-scale-pop:not(.is-visible), .anim-card:not(.is-visible), .hero-highlight:not(.is-visible)"
      );
      unobserved.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
