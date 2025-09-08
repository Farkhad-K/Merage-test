import SmoothScroll from "./components/SmoothScroll";
import ScrollReveal from "./components/ScrollReveal";
import SignatureDayEscapes from "./components/SignatureDayEscapes";

export default function PrivateDayToursPage() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative">
          {/* Signature Day Escapes - Private Day Tours Main Page */}
          <SignatureDayEscapes />
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
