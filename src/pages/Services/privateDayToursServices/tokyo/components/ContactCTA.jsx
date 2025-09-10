import { Mail, Phone, MessageCircle, ArrowRight, Globe, Clock, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactCTA() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Begin Your Journey",
      subtitle: "Personal Consultation",
      description: "Schedule a private conversation with one of our Japan Cultural Specialists to discuss your dreams and desires.",
      action: "Start Conversation",
      culturalNote: "Complimentary 30-minute session"
    },
    {
      icon: Mail,
      title: "Written Inquiries",
      subtitle: "Detailed Planning",
      description: "Share your vision, timeline, and preferences. We respond within 4 hours with thoughtful recommendations.",
      action: "Send Inquiry",
      culturalNote: "English & Japanese available"
    },
    {
      icon: Phone,
      title: "Immediate Response",
      subtitle: "Direct Connection",
      description: "Speak directly with our Tokyo-based concierge team for urgent requests or real-time assistance.",
      action: "Call Now",
      culturalNote: "24/7 availability for guests"
    }
  ];

  const handleContactMethod = (method) => {
    if (method === "Begin Your Journey") {
      window.open('mailto:concierge@nipponimperial.com?subject=Journey Consultation Request', '_blank');
    } else if (method === "Written Inquiries") {
      window.open('mailto:concierge@nipponimperial.com?subject=Detailed Planning Request', '_blank');
    } else if (method === "Immediate Response") {
      window.open('tel:+81-3-1234-5678', '_self');
    }
  };

  return (
    <section id="contact" className="relative bg-nippon-black overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578910537786-301723c3382d?...')`,
            filter: 'brightness(0.3) blur(1px)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/95 via-nippon-black/90 to-nippon-black/95"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-3 blur-3xl" style={{ animation: 'luxuryPulse 25s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-nippon-gold opacity-2 blur-3xl" style={{ animation: 'luxuryPulse 30s ease-in-out infinite reverse' }}></div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto content-padding">
          <div className="text-center space-y-12 mb-20" data-scroll-reveal>
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="h-px w-16 bg-nippon-gold"></div>
                <Heart className="w-8 h-8 text-nippon-gold" />
                <div className="h-px w-16 bg-nippon-gold"></div>
              </div>
              <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight max-w-4xl mx-auto text-with-gold-glow">
                Your Japan awaits your voice.
              </h2>
              <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-3xl mx-auto">
                Three pathways to begin your imperial journey—each designed to honor your time and intentions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative bg-nippon-black-light border border-nippon-gold/20 hover:border-nippon-gold/50 transition-all duration-500 overflow-hidden shadow-gold hover:shadow-gold-hover"
                data-scroll-reveal
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nippon-gold to-transparent group-hover:from-nippon-gold/50 group-hover:via-nippon-gold group-hover:to-nippon-gold/50 transition-all duration-500"></div>
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-nippon-gold/10 border border-nippon-gold/30 flex items-center justify-center group-hover:bg-nippon-gold/20 transition-colors duration-500">
                      <method.icon className="w-8 h-8 text-nippon-gold" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-nippon-gold/10 px-4 py-2">
                      <p className="text-nippon-gold font-sans text-luxury-xs italic">
                        {method.culturalNote}
                      </p>
                    </div>
                  </div>
                  <div className="text-nippon-gold font-sans text-luxury-sm uppercase tracking-wider font-medium text-center">
                    {method.subtitle}
                  </div>
                  <h3 className="text-luxury-2xl text-nippon-warm-white font-serif leading-tight text-center">
                    {method.title}
                  </h3>
                  <p className="text-luxury-base text-nippon-gray-light leading-relaxed font-sans text-center">
                    {method.description}
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-nippon-gold/30 to-transparent my-6"></div>
                  <div className="pt-4">
                    <Button
                      onClick={() => handleContactMethod(method.title)}
                      className="group/btn relative overflow-hidden w-full bg-transparent border border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-sm px-6 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                    >
                      <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                      <span className="relative flex items-center justify-center space-x-2">
                        <span className="tracking-wider font-medium">{method.action}</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-8" data-scroll-reveal>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-nippon-gold">
                  <Mail className="w-5 h-5" />
                  <span className="font-sans text-luxury-sm uppercase tracking-wider">Email</span>
                </div>
                <p className="text-nippon-warm-white font-sans text-luxury-base">
                  concierge@nipponimperial.com
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-nippon-gold">
                  <Phone className="w-5 h-5" />
                  <span className="font-sans text-luxury-sm uppercase tracking-wider">Tokyo Direct</span>
                </div>
                <p className="text-nippon-warm-white font-sans text-luxury-base">
                  +81 (0)3-1234-5678
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-nippon-gold">
                  <Clock className="w-5 h-5" />
                  <span className="font-sans text-luxury-sm uppercase tracking-wider">Availability</span>
                </div>
                <p className="text-nippon-warm-white font-sans text-luxury-base">
                  24/7 for Our Guests
                </p>
              </div>
            </div>
            <div className="mt-16 max-w-3xl mx-auto">
              <p className="text-luxury-xl text-nippon-gray-light font-serif italic leading-relaxed">
                "In Japan, we believe that every meeting is a treasure. We look forward to the treasure of meeting you."
              </p>
              <div className="mt-4 text-nippon-gold font-sans text-luxury-sm">
                — The Nippon Imperial Concierge Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
