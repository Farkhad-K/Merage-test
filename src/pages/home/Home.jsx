// Components
import SmoothScroll from "./components/SmoothScroll";
import ScrollReveal from "./components/ScrollReveal";
import Hero from "./components/Hero";
import LuxuryCredentials from "./components/LuxuryCredentials";
import Services from "./components/Services";
import SectionTransition from "./components/SectionTransition";
import Essence from "./components/Essence";
import NipponDifference from "./components/NipponDifference";
import HowItWorks from "./components/HowItWorks";
import ContactCTA from "./components/ContactCTA";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollReveal>
        <div className="relative bg-nippon-warm-white">
          {/* Hero Section - Enhanced with exclusivity */}
          <Hero />

          {/* Luxury Credentials - Establish prestige immediately */}
          <LuxuryCredentials />

          {/* Subtle Transition */}
          <SectionTransition />

          {/* Our Philosophy Section - Foundation before services */}
          <div id="philosophy">
            <Essence />
          </div>

          {/* Subtle Transition */}
          <SectionTransition />

          {/* Services Section - Enhanced philosophy */}
          <div id="services">
            <Services />
          </div>

          {/* Subtle Transition */}
          <SectionTransition />

          {/* Nippon Difference Section - Enhanced with dark luxury */}
          <div id="difference">
            <NipponDifference />
          </div>

          {/* Subtle Transition */}
          <SectionTransition />

          {/* How It Works Section - Light background */}
          <div id="how-it-works">
            <HowItWorks />
          </div>

          {/* Subtle Transition */}
          <SectionTransition />

          {/* Contact CTA Section - Keep dark for footer impact */}
          <ContactCTA />

          {/* Contact Form Section - Keep dark as part of footer */}
          <div id="contact-form">
            <ContactUs />
          </div>
        </div>
      </ScrollReveal>
    </SmoothScroll>
  );
}
