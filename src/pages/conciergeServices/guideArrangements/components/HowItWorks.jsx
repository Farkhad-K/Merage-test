import { MessageSquare, Calendar, Star, Crown } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Initial Consultation",
      description: "Share your vision and preferences with our expert concierge team through a detailed consultation.",
      details: [
        "Personal preferences assessment",
        "Travel dates and duration",
        "Special interests and requirements",
        "Budget and accommodation preferences"
      ]
    },
    {
      icon: Calendar,
      step: "02", 
      title: "Bespoke Planning",
      description: "We craft a personalized itinerary with exclusive access and seamless logistics coordination.",
      details: [
        "Custom itinerary design",
        "Premium reservations secured",
        "Private access arrangements",
        "Transportation coordination"
      ]
    },
    {
      icon: Star,
      step: "03",
      title: "Experience Curation",
      description: "Every detail is refined and perfected to ensure your journey exceeds all expectations.",
      details: [
        "Final itinerary approval",
        "Welcome briefing materials",
        "24/7 concierge contact",
        "Emergency support protocols"
      ]
    },
    {
      icon: Crown,
      step: "04",
      title: "Flawless Execution",
      description: "Experience Japan through our carefully orchestrated luxury journey with continuous support.",
      details: [
        "Real-time assistance",
        "Seamless transitions",
        "Unexpected delights",
        "Memory preservation"
      ]
    }
  ];

  return (
    <section className="relative bg-nippon-black section-padding overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-2 blur-3xl" data-scroll-parallax data-scroll-speed="0.1"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-nippon-gold opacity-3 blur-3xl" data-scroll-parallax data-scroll-speed="-0.05"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto content-padding">
        {/* Section header with generous whitespace */}
        <div className="text-center mb-24" data-scroll-reveal>
          <h2 className="text-luxury-6xl text-nippon-warm-white font-serif mb-8 text-with-gold-glow">
            How It Works
          </h2>
          <div className="gold-divider h-px w-32 mx-auto mb-12"></div>
          <p className="text-luxury-xl text-nippon-gray-light max-w-3xl mx-auto leading-relaxed font-sans">
            From initial consultation to flawless execution, our process ensures every aspect of your journey is perfected.
          </p>
        </div>

        {/* Steps with clean, vertical flow */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              data-scroll-reveal
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Content side */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {/* Step indicator with gold accent */}
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-nippon-gold flex items-center justify-center shadow-gold">
                    <span className="text-nippon-black font-serif text-luxury-2xl tracking-wider">
                      {step.step}
                    </span>
                  </div>
                  <div className="h-px w-24 bg-nippon-gold"></div>
                </div>

                <h3 className="text-luxury-4xl text-nippon-warm-white font-serif text-with-gold-glow">
                  {step.title}
                </h3>

                <p className="text-luxury-xl text-nippon-gray-light leading-relaxed font-sans">
                  {step.description}
                </p>

                {/* Step details with clean spacing */}
                <div className="space-y-4 pt-4">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-nippon-gold flex-shrink-0"></div>
                      <span className="text-nippon-warm-white font-sans text-luxury-lg">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Icon side with elegant presentation */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  {/* Large icon container */}
                  <div className="w-80 h-80 mx-auto relative">
                    {/* Background circles for depth */}
                    <div className="absolute inset-0 rounded-full border border-nippon-gold/20"></div>
                    <div className="absolute inset-4 rounded-full border border-nippon-gold/30"></div>
                    <div className="absolute inset-8 rounded-full border border-nippon-gold/40"></div>
                    
                    {/* Central icon with gold accent */}
                    <div className="absolute inset-16 rounded-full bg-nippon-gold/10 backdrop-blur-sm border-2 border-nippon-gold flex items-center justify-center gold-glow">
                      <step.icon className="w-24 h-24 text-nippon-gold" />
                    </div>
                  </div>

                  {/* Floating accent elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 border border-nippon-gold/40 bg-nippon-gold/10"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-nippon-gold/40 bg-nippon-gold/10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection lines between steps (desktop only) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-nippon-gold/30 to-transparent"></div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-32 pt-16 border-t border-nippon-gold/20 text-center" data-scroll-reveal>
          <h3 className="text-luxury-4xl text-nippon-gold font-serif mb-8 text-with-gold-glow">
            Ready to Begin?
          </h3>
          <p className="text-luxury-xl text-nippon-warm-white font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
            Your extraordinary Japanese journey starts with a single conversation.
          </p>
          <div className="gold-divider h-px w-24 mx-auto"></div>
        </div>
      </div>
    </section>
  );
}