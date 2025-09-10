import { MapPin, Users, CheckCircle, Star, Award, Clock, ArrowRight, Compass, Calendar, Mountain, Heart, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import tokyoRainbowBridgeHero from 'figma:asset/9fcfb2c5e68356a22e81d907a680defc0313348c.png';
import tokyoTowerAerial from 'figma:asset/6907c13b1b87e286e8e9b7991380df3756161295.png';
import nikkoRedBridge from 'figma:asset/58dd20c0e49ae20333de7c7e3608b451af1b1975.png';
import kamakuraGreatBuddha from 'figma:asset/65362e46ad76230dbb004b1ec4a4962244494ba5.png';

export function SignatureDayEscapes() {
  const tours = [
    {
      id: 'tokyo-highlights',
      title: "Tokyo City Highlights",
      description: "Tradition, energy, and elegance across Japan's capital.",
      image: tokyoTowerAerial,
      icon: Users,
      culturalNote: "Urban elegance meets tradition"
    },
    {
      id: 'mt-fuji-escape',
      title: "Mt. Fuji Escape",
      description: "A day of iconic landscapes and serene culture.",
      image: "https://images.unsplash.com/photo-1683976886501-055f309e6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEZ1amklMjBMYWtlJTIwS2F3YWd1Y2hpa298ZW58MXx8fHwxNzU1NTkwODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Mountain,
      culturalNote: "Sacred mountain majesty"
    },
    {
      id: 'hakone-serenity',
      title: "Hakone Serenity Tour",
      description: "Onsen towns, mountain air, and lakeside beauty.",
      image: "https://images.unsplash.com/photo-1715134588078-4646f828b2ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYWtvbmUlMjBMYWtlJTIwQXNoaXxlbnwxfHx8fDE3NTU1OTA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Heart,
      culturalNote: "Tranquil hot springs await"
    },
    {
      id: 'nikko-cultural',
      title: "Nikko Cultural Discovery",
      description: "UNESCO shrines, forest trails, and sacred stillness.",
      image: nikkoRedBridge,
      icon: Star,
      culturalNote: "UNESCO world heritage"
    },
    {
      id: 'kamakura-heritage',
      title: "Kamakura Heritage Day Trip",
      description: "Zen temples, samurai history, and coastal charm.",
      image: kamakuraGreatBuddha,
      icon: Camera,
      culturalNote: "Ancient capital by the sea"
    },
    {
      id: 'custom-tour',
      title: "Create Your Own",
      description: "Design a personalized day journey with our concierge team.",
      image: "https://images.unsplash.com/photo-1720454206018-8d977e9e984a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb2t5byUyME1laWppJTIwU2hyaW5lfGVufDF8fHx8MTc1NTU5MDg3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Compass,
      culturalNote: "Your journey, your way"
    }
  ];

  const benefits = [
    {
      title: "100% Private Vehicles Only",
      description: "No crowded buses. Travel in comfort with dedicated luxury transport."
    },
    {
      title: "Flexible Itineraries Adjusted to You",
      description: "Every tour adapts to your pace, interests, and preferences."
    },
    {
      title: "Optional Bilingual Guides",
      description: "Deep cultural insights from expert local guides when desired."
    },
    {
      title: "Expert Concierge Planning",
      description: "Pre-trip consultation ensures every detail aligns with your vision."
    }
  ];

  const handleTourInquiry = (tourId) => {
  // Hozircha faqat scroll qiladi (keyinchalik tour sahifasiga yo'naltirish qo'shish mumkin)
  const element = document.getElementById('concierge-cta');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  const scrollToTours = () => {
    document.getElementById('tour-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConciergeContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section - Tokyo Rainbow Bridge Night Scene - Much More Visible */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Tokyo Rainbow Bridge Night Scene - Primary Background - Enhanced Visibility */}
        <div className="absolute inset-0 z-0">
          {/* Primary layer - Tokyo Rainbow Bridge night scene - much brighter */}
          <ImageWithFallback
            src={tokyoRainbowBridgeHero}
            alt="Tokyo Rainbow Bridge at night with city lights and water reflections"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.9) contrast(1.25) saturate(1.2)',
              animation: 'cinematicZoom 28s ease-in-out infinite alternate'
            }}
          />
          
          {/* Secondary layer - Mt. Fuji serenity for depth - reduced opacity */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-5"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1683976886501-055f309e6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEZ1amklMjBMYWtlJTIwS2F3YWd1Y2hpa298ZW58MXx8fHwxNzU1NTkwODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
              filter: 'brightness(0.25) blur(3px)',
              animation: 'cinematicFloat 32s ease-in-out infinite alternate-reverse'
            }}
          ></div>
          
          {/* Enhanced gold accent overlay to complement the bridge's colorful lighting - more prominent */}
          <div 
            className="absolute inset-0 w-full h-full opacity-15"
            style={{
              background: 'radial-gradient(ellipse at 65% 45%, rgba(212, 175, 55, 0.2) 0%, rgba(255, 215, 0, 0.12) 35%, transparent 70%)',
              animation: 'gradientMove 45s ease-in-out infinite'
            }}
          ></div>

          {/* City lights enhancement effect - more vibrant */}
          <div 
            className="absolute inset-0 w-full h-full opacity-12"
            style={{
              background: 'linear-gradient(120deg, transparent 20%, rgba(0, 191, 255, 0.12) 40%, rgba(255, 69, 0, 0.08) 50%, rgba(255, 215, 0, 0.15) 60%, transparent 80%)',
              animation: 'cityLightStreaks 40s ease-in-out infinite'
            }}
          ></div>

          {/* Water reflection enhancement - more visible */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10"
            style={{
              background: 'linear-gradient(to top, rgba(212, 175, 55, 0.15) 0%, rgba(0, 191, 255, 0.08) 30%, transparent 100%)',
              animation: 'luxuryPulse 35s ease-in-out infinite reverse'
            }}
          ></div>
        </div>
        
        {/* Much lighter overlays - Let the bridge shine through clearly */}
        <div className="absolute inset-0 bg-nippon-black/15 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/25 via-transparent to-nippon-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/20 via-transparent to-nippon-black/15 z-10"></div>
        
        {/* Luxury gold accent elements that complement the colorful bridge lighting */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-nippon-gold opacity-6 blur-3xl z-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-nippon-gold-bright opacity-5 blur-3xl z-10"></div>
        
        {/* Enhanced text backdrop for perfect readability */}
        <div className="absolute inset-0 z-15" style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.6) 100%)'
        }}></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-8" data-scroll-reveal>
          <div className="max-w-4xl text-center">
            {/* Main headline with enhanced text shadow for readability */}
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
                style={{
                  textShadow: '0 4px 32px rgba(0, 0, 0, 0.9), 0 2px 16px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.4)'
                }}>
              Private Day Tours
            </h1>
            
            {/* Gold divider */}
            <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>
            
            {/* Subheading with enhanced readability */}
            <div className="space-y-12 max-w-3xl mx-auto">
              <p className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed text-center"
                 style={{
                   textShadow: '0 4px 24px rgba(0, 0, 0, 0.9), 0 2px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)'
                 }}>
                Curated one-day journeys that balance cultural depth, visual beauty, and seamless comfort — each experience, exclusively yours.
              </p>
            </div>

            {/* CTA button with enhanced backdrop */}
            <div className="mt-20">
              <Button
                onClick={scrollToTours}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">Explore Destinations</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              <Compass className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>

            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-8">
              Not all tours are created equal.
            </h2>
            
            <div className="space-y-8 text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-3xl mx-auto">
              <p>
                At Nippon Imperial, our Private Day Tours are handpicked to give you a deeper sense of place — blending iconic highlights with hidden charm.
              </p>
              
              <p>
                Whether you seek temples, coastlines, mountain views, or city contrasts, every tour is guided by elegance, flexibility, and the rhythm of your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Grid - 2x3 Layout */}
      <section id="tour-grid" className="relative bg-nippon-black section-padding overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          {/* Section Header */}
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Current Selection
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Six carefully curated journeys — each offering a distinct perspective on Japan's beauty and culture.
            </p>
          </div>

          {/* 2x3 Tours Grid - Warm White Cards on Black Background */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {tours.map((tour, index) => (
              <div
                key={tour.id}
                className="group relative bg-nippon-warm-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold cursor-pointer"
                data-scroll-reveal
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleTourInquiry(tour.id)}
              >
                {/* Tour Image */}
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Refined overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/50 via-nippon-black/10 to-transparent group-hover:from-nippon-black/40 transition-colors duration-500"></div>
                  
                  {/* Gold framed icon */}
                  <div className="absolute top-6 right-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-nippon-gold to-nippon-gold-dark backdrop-blur-sm flex items-center justify-center shadow-gold border-2 border-nippon-gold-light rounded-sm">
                      <tour.icon className="w-6 h-6 text-nippon-black" />
                    </div>
                  </div>

                  {/* Cultural note badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-nippon-black/80 backdrop-blur-sm px-4 py-2 rounded-sm">
                      <p className="text-nippon-gold font-sans text-luxury-xs italic">
                        {tour.culturalNote}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-nippon-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                    <div className="text-center space-y-4">
                      <p className="text-nippon-warm-white text-luxury-base font-sans leading-relaxed">
                        {tour.description}
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-nippon-gold">
                        <span className="text-luxury-sm font-sans tracking-wider">Click to Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tour Title */}
                <div className="p-6">
                  <h3 className="text-luxury-xl text-nippon-black font-serif leading-tight tracking-wide">
                    {tour.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nippon Imperial */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto content-padding" data-scroll-reveal>
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-8">
                Why Choose Nippon Imperial
              </h2>
              <p className="text-luxury-lg text-nippon-gray font-sans leading-relaxed max-w-2xl mx-auto">
                No crowded buses. No fixed routes. Just meaningful travel — at your pace.
              </p>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="space-y-4"
                  data-scroll-reveal
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-nippon-gold mt-1" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-luxury-xl text-nippon-black font-serif leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-luxury-base text-nippon-gray font-sans leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Deciding CTA */}
      <section id="concierge-cta" className="relative bg-nippon-black section-padding overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto content-padding text-center" data-scroll-reveal>
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight">
                Still Deciding?
              </h2>
              
              <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
                Not sure which destination is right for you? Tell us your interests and travel dates — our concierge team will match you with the perfect tour.
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