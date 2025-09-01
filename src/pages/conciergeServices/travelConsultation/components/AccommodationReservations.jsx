import { MapPin, CheckCircle, ArrowRight, Clock, Star, Award, Hotel, Mountain, Building, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input.jsx';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';
import luxuryPenthouseImage from 'figma:asset/e7210fddee657827c318f9187383fdf564c08e3f.png';
import ryokanImage from 'figma:asset/193e56f8a0a5dc7b391435431609fbcea84b5176.png';
import cityHotelImage from 'figma:asset/e7210fddee657827c318f9187383fdf564c08e3f.png';
import vipServicesImage from 'figma:asset/740031435016cc2ff4c721aff2f73de9918ab347.png';
import historicMachiyaImage from 'figma:asset/43be00189321411be76f95a109160bd875f25f47.png';

export function AccommodationReservations() {
  const highlights = [
    {
      icon: Mountain,
      title: "Private Ryokan Suites",
      description: "Exclusive mountain retreats with centuries-old hospitality traditions",
      image: ryokanImage,
      premium: "From ¥180,000/night"
    },
    {
      icon: Building,
      title: "Luxury City Hotels",
      description: "Tokyo's most coveted addresses with unparalleled service",
      image: cityHotelImage,
      premium: "Michelin Key certified"
    },
    {
      icon: Hotel,
      title: "Historic Machiya",
      description: "Restored cultural treasures in Kyoto's most exclusive districts",
      image: historicMachiyaImage,
      premium: "UNESCO Heritage properties"
    },
    {
      icon: Users,
      title: "VIP Concierge Services",
      description: "Discreet arrangements preferred by diplomatic missions",
      image: vipServicesImage,
      premium: "24/7 dedicated service"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Curated Consultation",
      description: "Share your vision through our secure, personalized assessment. Every detail matters in crafting your perfect Japanese sanctuary.",
      icon: MapPin,
      timeframe: "Within 2 hours"
    },
    {
      step: "02", 
      title: "Exclusive Property Selection",
      description: "Access our private collection of properties, many unavailable through traditional channels, each personally vetted by our cultural experts.",
      icon: Star,
      timeframe: "Within 24 hours"
    },
    {
      step: "03",
      title: "Seamless Arrival Experience",
      description: "From private transfers to personalized welcome ceremonies, every moment is orchestrated for your absolute comfort and cultural immersion.",
      icon: CheckCircle,
      timeframe: "Upon confirmation"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Accommodation reservation inquiry submitted');
  };

  const scrollToForm = () => {
    document.getElementById('accommodation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section - Luxury Accommodation Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Luxury Cinematic Background - Tokyo Penthouse Theme */}
        <div className="absolute inset-0 z-0">
          {/* Primary luxury Tokyo penthouse - your uploaded image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${luxuryPenthouseImage}')`,
              filter: 'brightness(0.75) contrast(1.1) saturate(1.2)',
              animation: 'cinematicZoom 18s ease-in-out infinite alternate'
            }}
          ></div>
          
          {/* Tokyo luxury hotel layer - modern accommodation option */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90')`,
              filter: 'brightness(0.4) blur(1px)',
              animation: 'cinematicFloat 22s ease-in-out infinite alternate-reverse'
            }}
          ></div>
          
          {/* Traditional Japanese architecture overlay */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90')`,
              filter: 'brightness(0.3) blur(2px)',
              animation: 'luxuryPulse 20s ease-in-out infinite'
            }}
          ></div>
          
          {/* Dynamic light streaks - reduced */}
          <div 
            className="absolute inset-0 w-full h-full opacity-8"
            style={{
              background: 'linear-gradient(45deg, transparent 20%, rgba(212, 175, 55, 0.06) 40%, transparent 60%)',
              animation: 'cityLightStreaks 25s ease-in-out infinite'
            }}
          ></div>
          
          {/* Luxury accommodation ambiance overlay - reduced */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-12"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90')`,
              filter: 'brightness(0.6) contrast(1.1)',
              animation: 'cinematicFloat 30s ease-in-out infinite alternate'
            }}
          ></div>
          
          {/* Gold warmth gradient - subtle */}
          <div 
            className="absolute inset-0 w-full h-full opacity-6"
            style={{
              background: 'radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.12) 0%, transparent 60%)',
              animation: 'gradientMove 35s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        {/* Lighter overlays for better background visibility */}
        <div className="absolute inset-0 bg-nippon-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/30 via-nippon-black/25 to-nippon-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/35 via-transparent to-nippon-black/25 z-10"></div>
        
        {/* Luxury accent elements */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-nippon-gold opacity-5 blur-3xl z-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-3 blur-3xl z-10"></div>
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-4 z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        ></div>

        {/* Content - Hero */}
        <div className="relative z-20 max-w-6xl mx-auto px-8" data-scroll-reveal>
          <div className="max-w-4xl text-center">
            {/* Luxury Badge */}
            <div className="inline-flex items-center space-x-2 bg-nippon-gold/10 backdrop-blur-sm border border-nippon-gold/30 px-6 py-2 mb-12">
              <Award className="w-4 h-4 text-nippon-gold" />
              <span className="text-nippon-gold font-serif text-luxury-sm tracking-wider">Preferred by Fortune 500 Executives</span>
            </div>
            
            {/* Main Tagline */}
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
                style={{
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.5)'
                }}>
              Where Distinction Finds Its Home.
            </h1>
            
            {/* Gold divider */}
            <div className="h-px w-48 mx-auto mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold"></div>
            
            {/* Subtitle with metrics */}
            <div className="space-y-6 mb-16">
              <p className="text-luxury-xl text-nippon-warm-white font-sans leading-relaxed max-w-2xl mx-auto"
                 style={{
                   textShadow: '0 3px 8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.7)'
                 }}>
                Access Japan's most exclusive properties — from mountain sanctuaries to imperial penthouses.
              </p>
              
              {/* Social proof metrics */}
              <div className="flex justify-center items-center space-x-8 text-nippon-gold">
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">200+</span>
                  <span className="text-luxury-sm font-sans opacity-80">Exclusive Properties</span>
                </div>
                <div className="w-px h-8 bg-nippon-gold/30"></div>
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">4.9</span>
                  <span className="text-luxury-sm font-sans opacity-80">Michelin Keys</span>
                </div>
                <div className="w-px h-8 bg-nippon-gold/30"></div>
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">24/7</span>
                  <span className="text-luxury-sm font-sans opacity-80">Concierge Service</span>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div>
              <Button
                onClick={scrollToForm}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-10 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">Begin Your Journey</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Essence + Highlights Section */}
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

        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          {/* Essence Text */}
          <div className="text-center mb-20" data-scroll-reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-12">
                More Than A Place to Sleep
              </h2>
              
              <div className="space-y-6">
                <p className="text-luxury-xl text-nippon-black font-serif italic leading-relaxed">
                  At Nippon Imperial, accommodation is more than a place to sleep — it is the backdrop to your Japanese story.
                </p>
                
                <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                  From private ryokan suites hidden in mountain valleys to modern penthouses overlooking the city lights, every stay is curated with precision, discretion, and cultural authenticity. Our relationships with select properties ensure access to rooms, rates, and experiences often unavailable elsewhere.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-scroll-reveal>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-nippon-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-nippon-black/20 group-hover:bg-nippon-black/10 transition-colors duration-500"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-nippon-gold/90 backdrop-blur-sm flex items-center justify-center shadow-gold">
                      <highlight.icon className="w-6 h-6 text-nippon-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center space-y-4">
                  {/* Title */}
                  <h3 className="text-luxury-xl text-nippon-black font-serif leading-tight">
                    {highlight.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-nippon-gray font-sans text-luxury-base leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  {/* Premium */}
                  {highlight.premium && (
                    <p className="text-nippon-gold font-serif text-luxury-sm">
                      {highlight.premium}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          {/* Section Header */}
          <div className="text-center mb-20" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight mb-8">
              How It Works
            </h2>
            <div className="h-px w-24 mx-auto bg-nippon-gold"></div>
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative text-center space-y-8"
                data-scroll-reveal
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="relative">
                  <div className="mx-auto w-20 h-20 bg-nippon-gold flex items-center justify-center">
                    <span className="text-nippon-black font-serif text-luxury-2xl">{step.step}</span>
                  </div>
                  
                  {/* Connecting line (except last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-nippon-gold via-nippon-gold/50 to-transparent"></div>
                  )}
                </div>

                {/* Icon */}
                <div className="mx-auto w-14 h-14 bg-nippon-warm-white/10 backdrop-blur-sm flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-nippon-gold" />
                </div>
                
                {/* Title */}
                <h3 className="text-luxury-2xl text-nippon-warm-white font-serif leading-tight">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-nippon-gray-light font-sans text-luxury-base leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
                
                {/* Timeframe */}
                {step.timeframe && (
                  <p className="text-nippon-gold font-serif text-luxury-sm">
                    {step.timeframe}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Inquiry Form Section */}
      <section id="accommodation-form" className="relative bg-nippon-warm-white section-padding overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-2">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-8">
              Let Us Arrange Your Perfect Stay
            </h2>
            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-2xl mx-auto">
              Share your vision and we'll curate accommodation options that perfectly align with your Japanese journey.
            </p>
          </div>

          {/* Inquiry Form */}
          <div className="bg-nippon-white shadow-luxury p-12" data-scroll-reveal>
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-nippon-black font-sans">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="luxury-input"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-nippon-black font-sans">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="luxury-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-nippon-black font-sans">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="luxury-input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-nippon-black font-sans">Number of Guests *</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    required
                    className="luxury-input"
                    placeholder="2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkin" className="text-nippon-black font-sans">Check-in Date *</Label>
                  <Input
                    id="checkin"
                    type="date"
                    required
                    className="luxury-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="checkout" className="text-nippon-black font-sans">Check-out Date *</Label>
                  <Input
                    id="checkout"
                    type="date"
                    required
                    className="luxury-input"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests" className="text-nippon-black font-sans">Special Requests & Preferences</Label>
                <Textarea
                  id="requests"
                  className="luxury-input min-h-[120px] resize-none"
                  placeholder="Tell us about your ideal accommodation style, preferred locations, amenities, dietary requirements, or any special arrangements we should know about..."
                />
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                >
                  <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="relative flex items-center justify-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <span className="tracking-wider font-medium">Submit Accommodation Request</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </form>

            {/* Auto-confirmation note */}
            <div className="mt-8 p-6 bg-nippon-beige border-l-4 border-nippon-gold">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-nippon-gold mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-nippon-black font-sans text-luxury-sm leading-relaxed">
                    <strong>Immediate Confirmation:</strong> You'll receive a personalized response within 2 hours with your request ID and next steps.
                  </p>
                  <p className="text-nippon-gray font-sans text-luxury-xs leading-relaxed">
                    Our concierge team will follow up with curated accommodation options within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}