import { useEffect, useRef } from 'react';

export function ScrollReveal({ children }) {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer yaratish
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Scroll reveal elementlarini kuzatish
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    revealElements.forEach((el) => observerRef.current?.observe(el));

    // Parallax elementlar
    const parallaxElements = document.querySelectorAll('[data-scroll-parallax]');
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-scroll-speed') || '0.1');
        el.style.transform = `translate3d(0, ${-(scrolled * speed)}px, 0)`;
      });
    };

    // Scroll event throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return <>{children}</>;
}
