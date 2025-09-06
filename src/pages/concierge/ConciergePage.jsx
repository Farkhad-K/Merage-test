// Components
import SmoothScroll from "./components/SmoothScroll";
import ScrollReveal from "./components/ScrollReveal";
import Concierge from "./components/Concierge";
import ContactCTA from "./components/ContactCTA";

export default function ConciergePage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Concierge Page - Enhanced luxury landing page showcasing authentic Japanese experiences */}
          <Concierge />

          {/* Contact & CTA Section - Sophisticated contact methods */}
          <ContactCTA />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
