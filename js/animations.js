(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    document.documentElement.classList.add("reduced-motion");
  }

  // ---- Scroll reveal --------------------------------------------------
  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  } else {
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

    revealTargets.forEach((el) => observer.observe(el));
  }

  // ---- Header scroll state --------------------------------------------
  const header = document.getElementById("site-header");
  let lastScrollY = window.scrollY;

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("site-header--scrolled", y > 24);
    lastScrollY = y;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
