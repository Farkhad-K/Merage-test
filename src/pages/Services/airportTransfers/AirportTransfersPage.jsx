// Components
import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import AirportTransfers from './components/AirportTransfers';

export default function AirportTransfersPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Airport & Private Transfers Subpage - Third of 7 Concierge Service Pages */}
          <AirportTransfers />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
