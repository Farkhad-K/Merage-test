import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Award,
  Car,
  Shield,
  Route,
  Users,
  Crown,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import mercedesHero from "figma:asset/83ecb49154d5d0287182c782e6c53348c51b4c9d.png";
import premiumFleetImage from "figma:asset/d730ccd50738654d0059df5329457cf9ee960bf9.png";
import professionalChauffeurImage from "figma:asset/9b3497750eb2468951e3bbe3e801e498b160f112.png";
import vipExperienceImage from "figma:asset/4999a6474b686d14ed943c947892e44b77e1bb15.png";
import customRoutesImage from "figma:asset/86a7534bf5cd9fbb25212cfe4de73e31b89feea0.png";

export function LuxuryTransport() {
  const highlights = [
    {
      icon: Car,
      title: "Premium Fleet",
      description:
        "Mercedes S-Class, V-Class, and Toyota Alphard executive vehicles",
      image: premiumFleetImage,
      premium: "Executive Grade",
    },
    {
      icon: Shield,
      title: "Professional Chauffeurs",
      description: "Multilingual, trained professionals with local expertise",
      image: professionalChauffeurImage,
      premium: "Security Cleared",
    },
    {
      icon: Route,
      title: "Custom Routes",
      description: "Flexible scheduling and personalized journey planning",
      image: customRoutesImage,
      premium: "Bespoke Service",
    },
    {
      icon: Crown,
      title: "VIP Experience",
      description:
        "Discreet, punctual transport for executives and dignitaries",
      image: vipExperienceImage,
      premium: "Diplomatic Grade",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Share Your Plans",
      description:
        "Tell us your pickup and drop-off locations, preferred vehicle type, and any special requirements for your journey.",
      icon: MapPin,
      timeframe: "Immediate response",
    },
    {
      step: "02",
      title: "We Arrange Your Journey",
      description:
        "Your concierge confirms availability, route optimization, and vehicle specifications, ensuring every detail meets your standards.",
      icon: Star,
      timeframe: "Within 30 minutes",
    },
    {
      step: "03",
      title: "Enjoy the Ride",
      description:
        "Relax in supreme comfort while your professional chauffeur handles navigation, timing, and all transportation logistics.",
      icon: CheckCircle,
      timeframe: "On arrival",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Luxury transport inquiry submitted");
  };

  const scrollToForm = () => {
    document
      .getElementById("transport-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Hero Section - Premium Mercedes Studio Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Premium Mercedes Studio Background */}
        <div className="absolute inset-0 z-0">
          {/* Primary Mercedes studio background */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${mercedesHero})`,
              filter: "brightness(0.8) contrast(1.25) saturate(1.15)",
            }}
          ></div>

          {/* Subtle depth overlay for premium feel */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1650921906719-d163a7970a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZXJjZWRlcyUyMHMtY2xhc3MlMjBibGFjayUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwxfHx8fDE3NTUyNTEzOTN8MA&ixlib=rb-4.1.0&q=80&w=1920')`,
              filter: "brightness(0.3) blur(3px)",
              transform: "scale(1.1)",
              animation: "cinematicFloat 50s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Premium studio light effects */}
          <div
            className="absolute inset-0 w-full h-full opacity-8"
            style={{
              background:
                "linear-gradient(135deg, transparent 20%, rgba(212, 175, 55, 0.12) 40%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)",
              animation: "cityLightStreaks 40s ease-in-out infinite",
            }}
          ></div>

          {/* Luxury accent gradient for studio ambiance */}
          <div
            className="absolute inset-0 w-full h-full opacity-6"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(212, 175, 55, 0.2) 0%, transparent 60%)",
              animation: "gradientMove 45s ease-in-out infinite",
            }}
          ></div>

          {/* Premium highlight reflection */}
          <div
            className="absolute inset-0 w-full h-full opacity-4"
            style={{
              background:
                "linear-gradient(90deg, transparent 30%, rgba(255, 255, 255, 0.08) 45%, rgba(212, 175, 55, 0.15) 55%, transparent 70%)",
              animation: "luxuryPulse 35s ease-in-out infinite",
            }}
          ></div>

          {/* Studio atmosphere enhancement */}
          <div
            className="absolute inset-0 w-full h-full opacity-3"
            style={{
              background:
                "conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(212, 175, 55, 0.1) 90deg, transparent 180deg, rgba(255, 255, 255, 0.05) 270deg, transparent 360deg)",
              animation: "cinematicFloat 60s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Enhanced cinematic overlay gradients for studio lighting */}
        <div className="absolute inset-0 bg-nippon-black/55 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/40 via-nippon-black/30 to-nippon-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/50 via-transparent to-nippon-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/60 via-transparent to-nippon-black/20 z-10"></div>

        {/* Enhanced luxury accent elements for studio theme */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-nippon-gold opacity-6 blur-3xl z-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-nippon-gold-bright opacity-4 blur-3xl z-10"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-nippon-pearl opacity-2 blur-3xl z-10"></div>

        {/* Premium texture overlay */}
        <div
          className="absolute inset-0 opacity-4 z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Content - Hero */}
        <div
          className="relative z-20 max-w-6xl mx-auto px-8"
          data-scroll-reveal
        >
          <div className="max-w-4xl text-center">
            {/* Luxury Badge */}
            <div className="inline-flex items-center space-x-2 bg-nippon-gold/15 backdrop-blur-sm border border-nippon-gold/40 px-6 py-2 mb-12">
              <Zap className="w-4 h-4 text-nippon-gold" />
              <span className="text-nippon-gold font-serif text-luxury-sm tracking-wider">
                Trusted by Diplomatic Missions
              </span>
            </div>

            {/* Main Tagline - enhanced for studio scene */}
            <h1
              className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
              style={{
                textShadow:
                  "0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 0, 0, 0.85), 0 0 50px rgba(212, 175, 55, 0.4)",
              }}
            >
              Every Journey, First Class.
            </h1>

            {/* Enhanced gold divider */}
            <div className="h-px w-48 mx-auto mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold"></div>

            {/* Subtitle with metrics - enhanced for studio lighting */}
            <div className="space-y-6 mb-16">
              <p
                className="text-luxury-xl text-nippon-warm-white font-sans leading-relaxed max-w-2xl mx-auto"
                style={{
                  textShadow:
                    "0 3px 12px rgba(0, 0, 0, 0.9), 0 1px 8px rgba(0, 0, 0, 0.75), 0 0 30px rgba(212, 175, 55, 0.2)",
                }}
              >
                Experience Japan's finest luxury transport — where every mile is
                a testament to excellence.
              </p>

              {/* Social proof metrics - enhanced for premium appeal */}
              <div className="flex justify-center items-center space-x-8 text-nippon-gold">
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">50+</span>
                  <span className="text-luxury-sm font-sans opacity-90">
                    Premium Vehicles
                  </span>
                </div>
                <div className="w-px h-8 bg-nippon-gold/40"></div>
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">24/7</span>
                  <span className="text-luxury-sm font-sans opacity-90">
                    Service Available
                  </span>
                </div>
                <div className="w-px h-8 bg-nippon-gold/40"></div>
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">15min</span>
                  <span className="text-luxury-sm font-sans opacity-90">
                    Response Time
                  </span>
                </div>
              </div>
            </div>

            {/* CTA button - enhanced for studio theme */}
            <div>
              <Button
                onClick={scrollToForm}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-10 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: "blur(12px)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  textShadow: "0 2px 6px rgba(0, 0, 0, 0.8)",
                  boxShadow: "0 4px 20px rgba(212, 175, 55, 0.25)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">
                    Arrange Your Transport
                  </span>
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
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          {/* Essence Text */}
          <div className="text-center mb-20" data-scroll-reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-12">
                More Than Getting From A to B
              </h2>

              <div className="space-y-6">
                <p className="text-luxury-xl text-nippon-black font-serif italic leading-relaxed">
                  Luxury transport with Nippon Imperial is more than getting
                  from A to B — it's a seamless experience that blends comfort,
                  privacy, and impeccable service.
                </p>

                <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                  Our fleet of premium vehicles and professional chauffeurs
                  ensures every ride is as memorable as your destination. From
                  airport transfers to full-day excursions, every journey is
                  executed with precision and elegance, maintaining the highest
                  standards of discretion and punctuality.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid with Images */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-scroll-reveal
          >
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
              backgroundSize: "100px 100px",
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
                    <span className="text-nippon-black font-serif text-luxury-2xl">
                      {step.step}
                    </span>
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
      <section
        id="transport-form"
        className="relative bg-nippon-warm-white section-padding overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-2">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-8">
              Let Us Arrange Your Luxury Transport
            </h2>
            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-2xl mx-auto">
              Share your transport requirements and we'll ensure every journey
              exceeds your expectations.
            </p>
          </div>

          {/* Inquiry Form */}
          <div
            className="bg-nippon-white shadow-luxury p-12"
            data-scroll-reveal
          >
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-nippon-black font-sans">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="luxury-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-nippon-black font-sans"
                  >
                    Email *
                  </Label>
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
                  <Label
                    htmlFor="phone"
                    className="text-nippon-black font-sans"
                  >
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="luxury-input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="passengers"
                    className="text-nippon-black font-sans"
                  >
                    Number of Passengers *
                  </Label>
                  <Input
                    id="passengers"
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
                  <Label
                    htmlFor="pickup"
                    className="text-nippon-black font-sans"
                  >
                    Pickup Location *
                  </Label>
                  <Input
                    id="pickup"
                    type="text"
                    required
                    className="luxury-input"
                    placeholder="e.g., Haneda Airport, Hotel name, Address"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="dropoff"
                    className="text-nippon-black font-sans"
                  >
                    Drop-off Location *
                  </Label>
                  <Input
                    id="dropoff"
                    type="text"
                    required
                    className="luxury-input"
                    placeholder="e.g., Shibuya district, Meeting venue, Address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="service-date"
                    className="text-nippon-black font-sans"
                  >
                    Service Date *
                  </Label>
                  <Input
                    id="service-date"
                    type="date"
                    required
                    className="luxury-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="service-time"
                    className="text-nippon-black font-sans"
                  >
                    Service Time *
                  </Label>
                  <Input
                    id="service-time"
                    type="time"
                    required
                    className="luxury-input"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="vehicle-preference"
                  className="text-nippon-black font-sans"
                >
                  Vehicle Preference
                </Label>
                <Input
                  id="vehicle-preference"
                  type="text"
                  className="luxury-input"
                  placeholder="e.g., Mercedes S-Class, Toyota Alphard, Executive Van"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="special-requests"
                  className="text-nippon-black font-sans"
                >
                  Special Requests & Requirements
                </Label>
                <Textarea
                  id="special-requests"
                  className="luxury-input min-h-[120px] resize-none"
                  placeholder="Tell us about any special requirements, such as child seats, accessibility needs, multiple stops, waiting time, or specific amenities..."
                />
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                >
                  <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="relative flex items-center justify-center space-x-3">
                    <Car className="w-5 h-5" />
                    <span className="tracking-wider font-medium">
                      Submit Transport Request
                    </span>
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
                    <strong>Immediate Confirmation:</strong> You'll receive a
                    response within 15 minutes with your booking reference and
                    vehicle details.
                  </p>
                  <p className="text-nippon-gray font-sans text-luxury-xs leading-relaxed">
                    Our transport team will coordinate all logistics and send
                    chauffeur contact information 1 hour before pickup.
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
