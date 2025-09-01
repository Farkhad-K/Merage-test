import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import TravelConsultation from './components/TravelConsultation';
import VideoTest from './components/VideoTest';
import Footer from './components/Footer';

export default function TravelConsultationPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Travel Consultation Subpage - Ultimate Bespoke Service */}
          <TravelConsultation />
          
          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}