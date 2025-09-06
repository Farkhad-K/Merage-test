// Components
import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import Partnership from './components/Partnership';

export default function PartnershipPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">          
          {/* Partnership Page */}
          <Partnership />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}