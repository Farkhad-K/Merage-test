import { useEffect } from 'react';

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

        const parallaxElements = document.querySelectorAll('[data-scroll-parallax]');
        parallaxElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const speed = parseFloat(element.getAttribute('data-scroll-parallax') || '0');

          if (rect.bottom >= -200 && rect.top <= viewportHeight + 200) {
            const yPos = rect.top;
            const parallaxOffset = yPos * speed;
            element.style.transform = `translate3d(0, ${parallaxOffset.toFixed(2)}px, 0)`;
          }
        });

        const revealElements = document.querySelectorAll('[data-scroll-reveal]:not(.revealed)');
        revealElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const threshold = viewportHeight * 0.8;

          if (rect.top < threshold && rect.bottom > 0) {
            element.classList.add('revealed');
          }
        });

        const fadeElements = document.querySelectorAll('[data-scroll-fade]');
        fadeElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(elementCenter - viewportHeight / 2);
          const maxDistance = viewportHeight;

          let opacity = 1 - (distanceFromCenter / maxDistance);
          opacity = Math.max(0, Math.min(1, opacity));
          element.style.opacity = opacity.toFixed(3);
        });

        const scaleElements = document.querySelectorAll('[data-scroll-scale]');
        scaleElements.forEach((element) => {
          const rect = element.getBoundingClientRect();

          if (rect.bottom >= 0 && rect.top <= viewportHeight) {
            const elementCenter = rect.top + rect.height / 2;
            const distanceFromCenter = Math.abs(elementCenter - viewportHeight / 2);
            const maxDistance = viewportHeight / 2;

            const scale = 1 - (distanceFromCenter / maxDistance) * 0.02;
            const clampedScale = Math.max(0.98, Math.min(1, scale));

            element.style.transform = `scale(${clampedScale.toFixed(3)})`;
          }
        });

        const rotateElements = document.querySelectorAll('[data-scroll-rotate]');
        rotateElements.forEach((element) => {
          const maxRotation = parseFloat(element.getAttribute('data-scroll-rotate') || '0');
          const rotation = scrollVelocity * maxRotation * 0.02;
          const clampedRotation = Math.max(-maxRotation, Math.min(maxRotation, rotation));

          element.style.transform = `rotate(${clampedRotation.toFixed(2)}deg)`;
        });

        ticking = false;
      });

      ticking = true;
    };

    const handleScroll = () => {
      updateScrollElements();
    };

    const observerOptions = {
      root: null,
      rootMargin: '20% 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const initializeElements = () => {
      const revealElements = document.querySelectorAll('[data-scroll-reveal]:not(.revealed)');
      revealElements.forEach((el) => revealObserver.observe(el));

      updateScrollElements();
    };

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateScrollElements();
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    setTimeout(initializeElements, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      revealObserver.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  return <div className="smooth-scroll-wrapper">{children}</div>;
}
