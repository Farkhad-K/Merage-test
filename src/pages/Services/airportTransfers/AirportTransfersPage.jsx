import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import AirportTransfers from './components/AirportTransfers';
import Footer from './components/Footer';

export default function AirportTransfersPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Airport & Private Transfers Subpage - Third of 7 Concierge Service Pages */}
          <AirportTransfers />

          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
