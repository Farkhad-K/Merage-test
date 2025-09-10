import { Car, MapPin, Plane, Calendar, CheckCircle, Star, Award, Clock, ArrowRight, Users, Compass } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import airportTransferImage from 'figma:asset/fbaefe2825955d470e77f68a4dd84d68d962599b.png';
import luxuryChauffeurHeroImage from 'figma:asset/ea905dca512369d220aa435547b190500ef27c06.png';
import privateChauffeurImage from 'figma:asset/eb71a45bb9f3d08ace63ec47b966c8b0f5dcbed1.png';

export function Services() {
  const coreServices = [
    {
      icon: Car,
      title: "Private Chauffeur Services",
      description: "Travel Japan in elegance with a professional driver and luxury vehicle — available by the hour or for full-day hire.",
      image: privateChauffeurImage,
      culturalNote: "Tokyo to Kyoto in elegance"
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Seamless VIP pickups and drop-offs with meet & greet, flight tracking, and discreet service between airport and hotel.",
      image: airportTransferImage,
      culturalNote: "Arrival perfected"
    },
    {
      icon: MapPin,
      title: "Signature Day Escapes",
      description: "One-day private tours to Mt. Fuji, Hakone, Nikko, and more — guided, customizable, and beautifully paced.",
      image: "https://images.unsplash.com/photo-1713001206325-fa191927c2a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMG11bHRpJTIwZGF5JTIwdG91ciUyMGl0aW5lcmFyeXxlbnwxfHx8fDE3NTUzMzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      culturalNote: "Cultural immersion awaits"
    },
    {
      icon: Calendar,
      title: "Signature Multi-Day Tours",
      description: "Curated multi-day journeys through Japan's iconic regions — including transport, accommodation, and cultural experiences.",
      image: "https://images.unsplash.com/photo-1551560231-c37681ebbd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMHByaXZhdGUlMjB0b3VyJTIwZ3VpZGUlMjBjdWx0dXJhbHxlbnwxfHx8fDE3NTUzMzU2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      culturalNote: "Japan, completely unveiled"
    }
  ];

  const trustIndicators = {
    journeys: "800+",
    support: "24/7",
    experience: "18+"
  };

  const handleServiceInquiry = (serviceTitle) => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  const scrollToServices = () => {
    document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConciergeContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section with Luxury Chauffeur Background - "Crafted for Your Journey" */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Luxury Chauffeur Background - Much More Visible */}
        <div className="absolute inset-0 z-0">
          {/* Main luxury chauffeur hero image - increased brightness */}
          <ImageWithFallback
            src={luxuryChauffeurHeroImage}
            alt="Luxury chauffeur service"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.7) contrast(1.1) saturate(1.0)',
              animation: 'cinematicZoom 25s ease-in-out infinite alternate'
            }}
          />
          
          {/* Secondary layered backgrounds for depth - reduced opacity */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url('${privateChauffeurImage}')`,
              filter: 'brightness(0.4) blur(1px)',
              animation: 'cinematicFloat 28s ease-in-out infinite alternate-reverse'
            }}
          ></div>
          
          {/* Elegant gold accent overlay - very subtle */}
          <div 
            className="absolute inset-0 w-full h-full opacity-5"
            style={{
              background: 'radial-gradient(circle at 40% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
              animation: 'gradientMove 35s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        {/* Much lighter overlays so the chauffeur image shows through clearly */}
        <div className="absolute inset-0 bg-nippon-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/40 via-nippon-black/20 to-nippon-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/30 via-transparent to-nippon-black/20 z-10"></div>
        
        {/* Subtle luxury gold accent elements */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-nippon-gold opacity-2 blur-3xl z-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-1 blur-3xl z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-8" data-scroll-reveal>
          <div className="max-w-4xl text-center">
            {/* Main headline */}
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.5)'
                }}>
              Crafted for Your Journey
            </h1>
            
            {/* Gold divider */}
            <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>
            
            {/* Subline */}
            <div className="text-left space-y-12 max-w-3xl mx-auto">
              <p className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed text-center"
                 style={{
                   textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.8)'
                 }}>
                Seamless transport. Curated exploration. Discreet lifestyle assistance — tailored entirely to you.
              </p>
            </div>

            {/* CTA button */}
            <div className="mt-20">
              <Button
                onClick={scrollToServices}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: 'blur(15px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Essence Section */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        {/* Clean background pattern */}
        <div className="absolute inset-0 opacity-2">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto content-padding text-center" data-scroll-reveal>
          <div className="space-y-12">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Star className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>

            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-8">
              No two journeys are alike — and neither are our services.
            </h2>
            
            <div className="space-y-8 text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-3xl mx-auto">
              <p>
                From the moment you arrive until your final farewell, every offering is shaped around your rhythm and desires.
              </p>
              
              <p>
                Whether you need an elegant airport transfer, a cultural day tour, or a multi-day itinerary across Japan's iconic regions, each service is designed to deliver comfort, precision, and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid - Black Background with Warm White Cards */}
      <section id="core-services" className="relative bg-nippon-black section-padding overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          {/* Section Header */}
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Four Essential Services
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Each crafted to seamlessly integrate into your Japanese experience.
            </p>
          </div>

          {/* 2x2 Services Grid - Warm White Cards on Black Background */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-nippon-warm-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold"
                data-scroll-reveal
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Service Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Refined overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent group-hover:from-nippon-black/30 transition-colors duration-500"></div>
                  
                  {/* Gold framed icon */}
                  <div className="absolute top-6 right-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-nippon-gold to-nippon-gold-dark backdrop-blur-sm flex items-center justify-center shadow-gold border-2 border-nippon-gold-light rounded-sm">
                      <service.icon className="w-8 h-8 text-nippon-black" />
                    </div>
                  </div>

                  {/* Cultural note badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-nippon-black/80 backdrop-blur-sm px-4 py-2 rounded-sm">
                      <p className="text-nippon-gold font-sans text-luxury-xs italic">
                        {service.culturalNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8 space-y-6">
                  <h3 className="text-luxury-2xl text-nippon-black font-serif leading-tight uppercase tracking-wider">
                    {service.title}
                  </h3>
                  
                  <p className="text-luxury-base text-nippon-gray leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Elegant divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-nippon-gold/30 to-transparent my-6"></div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button
                      onClick={() => handleServiceInquiry(service.title)}
                      className="group/btn relative overflow-hidden w-full bg-transparent border border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-sm px-6 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                    >
                      <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                      <span className="relative flex items-center justify-center space-x-2">
                        <span className="tracking-wider font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nippon Imperial - Trust Indicators */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto content-padding text-center" data-scroll-reveal>
          <div className="space-y-12">
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
              Why Nippon Imperial
            </h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
              <div className="text-center space-y-4">
                <div className="text-luxury-6xl text-nippon-gold font-serif">{trustIndicators.journeys}</div>
                <div className="text-luxury-lg text-nippon-black font-sans">Bespoke Journeys Crafted</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-luxury-6xl text-nippon-gold font-serif">{trustIndicators.support}</div>
                <div className="text-luxury-lg text-nippon-black font-sans">Concierge Support</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-luxury-6xl text-nippon-gold font-serif">{trustIndicators.experience}</div>
                <div className="text-luxury-lg text-nippon-black font-sans">Years of Cultural Insight</div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans italic">
                Every detail, every guest, every journey — handled with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Suggestion Block */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto content-padding text-center" data-scroll-reveal>
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight">
                Not sure where to begin?
              </h2>
              
              <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
                Our concierge team is here to guide you — whether you need a single transfer or a complete itinerary.
              </p>
            </div>

            <div className="pt-8">
              <Button
                onClick={handleConciergeContact}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-8 py-5 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span className="tracking-wider font-medium">Speak with Our Concierge</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}