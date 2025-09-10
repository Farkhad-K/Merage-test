// Alternative structural options for Travel Consultation & Custom Journeys

import { Car, Crown, MapPin, Calendar, Sparkles, Users, Compass, ArrowRight, CheckCircle, Star, Award, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// OPTION A: Elevated 7th Service Card (Premium Grid Position)
export function OptionA_ElevatedCard() {
  return (
    <div className="relative bg-nippon-warm-white section-padding">
      <div className="max-w-7xl mx-auto content-padding">
        {/* 6 Regular Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Regular service cards */}
        </div>

        {/* Elevated Flagship Service */}
        <div className="relative bg-gradient-to-br from-nippon-black to-nippon-black-light p-12 shadow-luxury-hover overflow-hidden">
          {/* Premium badge */}
          <div className="absolute top-8 right-8">
            <div className="bg-nippon-gold px-4 py-2 flex items-center space-x-2">
              <Star className="w-4 h-4 text-nippon-black" />
              <span className="text-luxury-xs text-nippon-black font-sans uppercase tracking-wider">Signature Service</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-luxury-4xl text-nippon-gold font-serif">
                Travel Consultation & Custom Journeys
              </h3>
              <p className="text-luxury-xl text-nippon-warm-white font-serif leading-relaxed">
                A bespoke itinerary shaped around your desires, interests and pace—one conversation, endless possibilities.
              </p>
              {/* Features and CTA */}
            </div>
            <div className="aspect-[4/5] relative overflow-hidden">
              {/* Image */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// OPTION B: Full-Width Consultation Banner
export function OptionB_FullWidthBanner() {
  return (
    <section className="relative bg-nippon-black section-padding">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Custom Journey Consultation"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-nippon-black/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto content-padding text-center">
        <div className="space-y-8">
          {/* Icon */}
          <div className="mx-auto w-20 h-20 bg-nippon-gold flex items-center justify-center shadow-gold">
            <Compass className="w-10 h-10 text-nippon-black" />
          </div>

          {/* Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-luxury-6xl text-nippon-warm-white font-serif text-with-gold-glow">
              Ready for Something Extraordinary?
            </h2>
            <p className="text-luxury-2xl text-nippon-gold font-serif italic">
              Travel Consultation & Custom Journeys
            </p>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed">
              A bespoke itinerary shaped around your desires, interests and pace—one conversation, endless possibilities.
            </p>
          </div>

          {/* CTA */}
          <Button className="luxury-button-gold text-luxury-lg px-16 py-6">
            Begin Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}

// OPTION C: Process-Driven Consultation Section
export function OptionC_ProcessDriven() {
  const consultationProcess = [
    {
      step: "01",
      title: "Discovery Call",
      description: "45-minute consultation to understand your vision, preferences, and travel dreams.",
      icon: Users
    },
    {
      step: "02", 
      title: "Bespoke Design",
      description: "Our specialists craft a personalized itinerary with exclusive access and hidden gems.",
      icon: Compass
    },
    {
      step: "03",
      title: "Seamless Execution", 
      description: "Every detail arranged, every moment perfected, with 24/7 support throughout.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-nippon-warm-white to-nippon-cream section-padding">
      <div className="max-w-7xl mx-auto content-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-luxury-5xl text-nippon-black font-serif mb-6">
            Custom Journey Consultation
          </h2>
          <div className="gold-divider h-px w-32 mx-auto mb-8"></div>
          <p className="text-luxury-xl text-nippon-gray max-w-3xl mx-auto">
            From concept to completion, our master consultants transform your vision into an unforgettable Japanese experience.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {consultationProcess.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-nippon-gold text-nippon-black flex items-center justify-center font-sans font-medium text-luxury-sm">
                {step.step}
              </div>

              <div className="bg-nippon-white p-8 shadow-luxury group-hover:shadow-luxury-hover transition-all duration-500">
                <div className="w-16 h-16 bg-nippon-black mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-nippon-gold" />
                </div>
                
                <h3 className="text-luxury-2xl text-nippon-black font-serif mb-4">
                  {step.title}
                </h3>
                
                <p className="text-luxury-base text-nippon-gray font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="luxury-button-gold text-luxury-lg px-12 py-5">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}

// OPTION D: Split Approach - Multiple Touchpoints
export function OptionD_SplitApproach() {
  return (
    <>
      {/* Consultation Teaser in Services Grid */}
      <div className="bg-nippon-gold-muted/10 p-6 text-center">
        <h4 className="text-luxury-lg text-nippon-black font-serif mb-4">
          Need Everything Coordinated?
        </h4>
        <p className="text-nippon-gray mb-4 font-sans">
          Our signature consultation service combines all offerings into one seamless experience.
        </p>
        <Button className="luxury-button-gold text-luxury-sm px-8 py-3">
          Learn About Consultations
        </Button>
      </div>

      {/* Detailed Consultation Section Later */}
      <section className="bg-nippon-black section-padding">
        <div className="max-w-6xl mx-auto content-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-nippon-gold" />
                <span className="text-luxury-lg text-nippon-gold font-serif italic">Our Signature Service</span>
              </div>
              
              <h2 className="text-luxury-5xl text-nippon-warm-white font-serif">
                Travel Consultation & Custom Journeys
              </h2>
              
              {/* Detailed content */}
            </div>

            {/* Stats/Testimonial */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-luxury-3xl text-nippon-gold font-serif">500+</div>
                  <div className="text-nippon-gray-light font-sans text-luxury-sm">Bespoke Journeys</div>
                </div>
                <div>
                  <div className="text-luxury-3xl text-nippon-gold font-serif">24/7</div>
                  <div className="text-nippon-gray-light font-sans text-luxury-sm">Dedicated Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// OPTION E: Consultation as Overlay/Modal Trigger
export function OptionE_OverlayTrigger() {
  return (
    <div className="relative">
      {/* Fixed consultation trigger */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="bg-nippon-gold hover:bg-nippon-gold-dark text-nippon-black px-6 py-4 shadow-gold-hover">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5" />
            <span className="font-sans text-luxury-sm">Book Consultation</span>
          </div>
        </Button>
      </div>

      {/* Inline consultation preview */}
      <div className="bg-nippon-black/95 backdrop-blur-sm p-12 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-luxury-3xl text-nippon-gold font-serif">
            Custom Journey Consultation
          </h3>
          <p className="text-nippon-gray-light font-sans">
            One conversation. Endless possibilities. Let our specialists craft your perfect Japanese experience.
          </p>
          <Button className="luxury-button-gold">
            Schedule 45-Min Discovery Call
          </Button>
        </div>
      </div>
    </div>
  );
}
