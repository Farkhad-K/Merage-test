// Components
import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import LuxuryTransport from './components/LuxuryTransport';
import VideoTest from './components/VideoTest';

export default function LuxuryTransportPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Luxury Transport Subpage - Second of 7 Concierge Service Pages */}
          <LuxuryTransport />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
