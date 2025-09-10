// Components
import SmoothScroll from "./components/SmoothScroll";
import ScrollReveal from "./components/ScrollReveal";
import MtFujiEscape from "./components/MtFujiEscape";

export default function MtFujiEscapePage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Mt. Fuji Escape - Individual Tour Page */}
          <MtFujiEscape />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
