// Components
import SmoothScroll from "./components/SmoothScroll";
import ScrollReveal from "./components/ScrollReveal";
import PrivateChauffeurServices from "./components/PrivateChauffeurServices";

export default function PrivateChauffeurServicesPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          <>
            {/* Private Chauffeur Services Subpage */}
            <PrivateChauffeurServices />
          </>
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
