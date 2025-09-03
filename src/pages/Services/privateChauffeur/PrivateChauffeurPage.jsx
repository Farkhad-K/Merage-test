import SmoothScroll from "./components/SmoothScroll";
import ScrollReveal from "./components/ScrollReveal";
import PrivateChauffeurServices from "./components/PrivateChauffeurServices";
import Footer from "./components/Footer";

export default function PrivateChauffeurServicesPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          <>
            {/* Private Chauffeur Services Subpage */}
            <PrivateChauffeurServices />

            {/* Footer */}
            <Footer />
          </>
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
