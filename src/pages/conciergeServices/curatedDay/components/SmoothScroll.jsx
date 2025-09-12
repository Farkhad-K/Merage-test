// Libraries
import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    let scrollVelocity = 0;

    const updateScrollVelocity = () => {
      const currentScrollY = window.pageYOffset;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.1;
      lastScrollY = currentScrollY;
    };

    const updateScrollElements = () => {
      if (ticking) return;

      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        const viewportHeight = window.innerHeight;

        updateScrollVelocity();

        // Parallax
        document.querySelectorAll("[data-scroll-parallax]").forEach((el) => {
          const rect = el.getBoundingClientRect();
          const speed = parseFloat(
            el.getAttribute("data-scroll-parallax") || "0"
          );
          if (rect.bottom >= -200 && rect.top <= viewportHeight + 200) {
            const yPos = rect.top;
            const parallaxOffset = yPos * speed;
            el.style.transform = `translate3d(0, ${parallaxOffset.toFixed(
              2
            )}px, 0)`;
          }
        });

        // Reveal
        document
          .querySelectorAll("[data-scroll-reveal]:not(.revealed)")
          .forEach((el) => {
            const rect = el.getBoundingClientRect();
            const threshold = viewportHeight * 0.8;
            if (rect.top < threshold && rect.bottom > 0) {
              el.classList.add("revealed");
            }
          });

        // Fade
        document.querySelectorAll("[data-scroll-fade]").forEach((el) => {
          const rect = el.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(
            elementCenter - viewportHeight / 2
          );
          const maxDistance = viewportHeight;
          let opacity = 1 - distanceFromCenter / maxDistance;
          opacity = Math.max(0, Math.min(1, opacity));
          el.style.opacity = opacity.toFixed(3);
        });

        // Scale
        document.querySelectorAll("[data-scroll-scale]").forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom >= 0 && rect.top <= viewportHeight) {
            const elementCenter = rect.top + rect.height / 2;
            const distanceFromCenter = Math.abs(
              elementCenter - viewportHeight / 2
            );
            const maxDistance = viewportHeight / 2;
            const scale = 1 - (distanceFromCenter / maxDistance) * 0.02;
            const clampedScale = Math.max(0.98, Math.min(1, scale));
            el.style.transform = `scale(${clampedScale.toFixed(3)})`;
          }
        });

        // Rotate
        document.querySelectorAll("[data-scroll-rotate]").forEach((el) => {
          const maxRotation = parseFloat(
            el.getAttribute("data-scroll-rotate") || "0"
          );
          const rotation = scrollVelocity * maxRotation * 0.02;
          const clampedRotation = Math.max(
            -maxRotation,
            Math.min(maxRotation, rotation)
          );
          el.style.transform = `rotate(${clampedRotation.toFixed(2)}deg)`;
        });

        ticking = false;
      });

      ticking = true;
    };

    const handleScroll = () => updateScrollElements();

    // Intersection Observer for reveal
    const observerOptions = {
      root: null,
      rootMargin: "20% 0px",
      threshold: 0.1,
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const initializeElements = () => {
      document
        .querySelectorAll("[data-scroll-reveal]:not(.revealed)")
        .forEach((el) => revealObserver.observe(el));
      updateScrollElements();
    };

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => updateScrollElements(), 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    setTimeout(initializeElements, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      revealObserver.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  return <div className="smooth-scroll-wrapper">{children}</div>;
}
