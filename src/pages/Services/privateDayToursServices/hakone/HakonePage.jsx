import SmoothScroll from "./components/SmoothScroll.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import HakoneSerenity from "./components/HakoneSerenity.jsx";

export default function HakonePage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Hakone Serenity - Individual Tour Page */}
          <HakoneSerenity />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
