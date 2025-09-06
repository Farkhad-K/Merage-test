import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import KamakuraHeritageTrip from './components/KamakuraHeritageTrip';

export default function KamakuraHeritageTripPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Kamakura Heritage Trip - Individual Tour Page */}
          <KamakuraHeritageTrip />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
