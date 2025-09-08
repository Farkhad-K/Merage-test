// Components
import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import PrivateTourGuide from './components/PrivateTourGuide';
import VideoTest from './components/VideoTest';

export default function GuideArrangementsPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Private Tour Guide Subpage - Third of 7 Concierge Service Pages */}
          <PrivateTourGuide />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
