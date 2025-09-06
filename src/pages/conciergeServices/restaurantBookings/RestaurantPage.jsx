// Components
import SmoothScroll from "./components/SmoothScroll";
import ScrollReveal from "./components/ScrollReveal";
import DiningReservations from "./components/DiningReservations";

export default function RestaurantPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Dining Reservations Subpage */}
          <DiningReservations />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
