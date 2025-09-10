import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children }) {
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer for scroll reveal animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Unobserve the element once it's been revealed
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Observe all elements with data-scroll-reveal
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    revealElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // Handle parallax elements
    const parallaxElements = document.querySelectorAll('[data-scroll-parallax]');

    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-scroll-speed') || '0.1');
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    // Throttle scroll events for performance
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
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return <>{children}</>;
}
