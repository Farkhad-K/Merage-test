import { Button } from './ui/button';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactCTA() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative bg-nippon-warm-white section-padding overflow-hidden">
      {/* Clean background with high-quality imagery */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2148&q=80"
          alt="Traditional Japanese architecture with modern luxury"
          className="w-full h-full object-cover opacity-10"
        />
        
        {/* Warm white overlay for text readability */}
        <div className="absolute inset-0 warm-white-overlay"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto content-padding text-center">
        {/* Main CTA section with generous whitespace */}
        <div className="space-y-12" data-scroll-reveal>
          <h2 className="text-luxury-7xl text-nippon-black font-serif text-with-black-shadow leading-tight">
            Your Journey
            <br />
            <span className="text-nippon-gold">Begins Here</span>
          </h2>
          
          <div className="gold-divider h-px w-48 mx-auto"></div>
          
          <p className="text-luxury-2xl text-nippon-gray max-w-4xl mx-auto leading-relaxed font-sans">
            Ready to experience Japan through the lens of true luxury and cultural authenticity? 
            Let our concierge team craft your perfect journey.
          </p>
        </div>

        {/* Contact options with clean layout */}
        <div className="grid md:grid-cols-2 gap-12 mt-20" data-scroll-reveal>
          {/* Immediate contact option */}
          <div className="warm-white-card-secondary p-12 space-y-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-500">
            <div className="w-20 h-20 bg-nippon-gold mx-auto flex items-center justify-center shadow-gold">
              <Phone className="w-10 h-10 text-nippon-black" />
            </div>
            
            <h3 className="text-luxury-3xl text-nippon-black font-serif text-with-black-shadow">
              Speak with Our Concierge
            </h3>
            
            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
              Available 24/7 for immediate assistance and consultation.
            </p>
            
            <div className="space-y-4">
              <p className="text-luxury-2xl text-nippon-gold font-serif">+8 80 1234 7777</p>
              <p className="text-nippon-gray font-sans text-luxury-base">
                International rates apply
              </p>
            </div>
          </div>

          {/* Form contact option */}
          <div className="warm-white-card-secondary p-12 space-y-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-500">
            <div className="w-20 h-20 bg-nippon-gold mx-auto flex items-center justify-center shadow-gold">
              <Mail className="w-10 h-10 text-nippon-black" />
            </div>
            
            <h3 className="text-luxury-3xl text-nippon-black font-serif text-with-black-shadow">
              Detailed Inquiry Form
            </h3>
            
            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
              Share your vision and preferences for a personalized response.
            </p>
            
            {/* Strategic CTA button with gold accent (10%) */}
            <Button
              onClick={scrollToContact}
              className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-10 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1 hover:bg-nippon-gold luxury-button-gold w-full"
            >
              {/* Elegant sweep effect */}
              <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              
              {/* Button content */}
              <span className="relative flex items-center justify-center space-x-3">
                <span className="tracking-wider font-medium">Begin Planning</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>

        {/* Additional reassurance with clean typography */}
        <div className="mt-20 pt-12 border-t border-nippon-gold/20" data-scroll-reveal>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-nippon-gold/20 border-2 border-nippon-gold mx-auto flex items-center justify-center">
                <span className="text-nippon-gold font-serif text-luxury-xl">24</span>
              </div>
              <h4 className="text-nippon-black font-serif text-luxury-lg">Hours Response</h4>
              <p className="text-nippon-gray font-sans text-luxury-sm">Maximum reply time</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-nippon-gold/20 border-2 border-nippon-gold mx-auto flex items-center justify-center">
                <span className="text-nippon-gold font-serif text-luxury-xl">∞</span>
              </div>
              <h4 className="text-nippon-black font-serif text-luxury-lg">No Obligation</h4>
              <p className="text-nippon-gray font-sans text-luxury-sm">Complimentary consultation</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-nippon-gold/20 border-2 border-nippon-gold mx-auto flex items-center justify-center">
                <span className="text-nippon-gold font-serif text-luxury-xl">✓</span>
              </div>
              <h4 className="text-nippon-black font-serif text-luxury-lg">Complete Privacy</h4>
              <p className="text-nippon-gray font-sans text-luxury-sm">Absolute discretion assured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}