// Libraries
import SmoothScroll from "./components/SmoothScroll";
import ScrollReveal from "./components/ScrollReveal";
import DiningReservations from "./components/DiningReservations";
import Footer from "./components/Footer";

export default function RestaurantPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Dining Reservations Subpage */}
          <DiningReservations />

          {/* Footer */}
          <Footer />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
