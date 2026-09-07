import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Initial query
    const targets = document.querySelectorAll('.reveal, .reveal-up, .reveal-scale, [data-reveal]');
    targets.forEach((target) => observer.observe(target));

    // Observe dynamically added elements or tab changes
    const mutationObserver = new MutationObserver(() => {
      const currentTargets = document.querySelectorAll('.reveal:not(.is-visible), .reveal-up:not(.is-visible), .reveal-scale:not(.is-visible), [data-reveal]:not(.is-visible)');
      currentTargets.forEach((target) => observer.observe(target));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
