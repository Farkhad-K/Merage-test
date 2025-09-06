// Components
import SmoothScroll from './components/SmoothScroll';
import TextureBackground from './components/TextureBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import Essence  from './components/Essence';
import TestimonialsShowcase from './components/TestimonialsShowcase';
import HowItWorks  from './components/HowItWorks';
import ContactCTA from './components/ContactCTA';

export default function ImperialStoryPage() {
  return (
    <div className="min-h-screen bg-nippon-black relative">
      <TextureBackground />
      <SmoothScroll>
        <div id="story">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="essence">
          <Essence />
        </div>
        <div id="testimonials">
          <TestimonialsShowcase />
        </div>
        <div id="process">
          <HowItWorks />
        </div>
        <div id="contact">
          <ContactCTA />
        </div>
      </SmoothScroll>
    </div>
  );
}
