import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import NikkoCulturalDiscovery from './components/NikkoCulturalDiscovery';
import Footer from './components/Footer';

export default function NikkoPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Nikko Cultural Discovery - Individual Tour Page */}
          <NikkoCulturalDiscovery />

          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}