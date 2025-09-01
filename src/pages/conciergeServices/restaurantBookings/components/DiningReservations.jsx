// Libraries
import { useState } from "react";
import {
  Utensils,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Award,
  Wine,
  ChefHat,
  Calendar,
  MapPin,
} from "lucide-react";

// Components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Images
import tokyoNightDiningImage from "../assets/1.png";
import michelinRestaurantImage from "../assets/2.png";
import omakaseSushiImage from "../assets/3.png";

export default function DiningReservations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    preferences: "",
    specialRequests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const highlights = [
    {
      icon: Star,
      title: "Legendary Sushi Masters",
      description:
        "Private access to Japan's most revered sushi artisans and their intimate dining sanctuaries",
      image: michelinRestaurantImage,
      badge: "Michelin",
    },
    {
      icon: Wine,
      title: "Hidden Nightlife Temples",
      description:
        "Exclusive entry to Japan's secretive cocktail havens and rooftop sanctuaries",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
      badge: "Private Access",
    },
    {
      icon: ChefHat,
      title: "Kaiseki & Omakase",
      description:
        "Seasonal artistry from Japan's most celebrated culinary masters",
      image: omakaseSushiImage,
      badge: "Artisan",
    },
    {
      icon: MapPin,
      title: "Complete Cultural Coordination",
      description:
        "Transportation, etiquette guidance, and seamless cultural immersion",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
      badge: "Full Service",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Share Your Preferences",
      description: "Cuisine style, ambiance, occasion, and preferred location.",
      icon: MapPin,
    },
    {
      step: "02",
      title: "Curated Recommendations",
      description:
        "We present carefully chosen options, each vetted for quality, privacy, and authenticity.",
      icon: Star,
    },
    {
      step: "03",
      title: "Enjoy With Ease",
      description:
        "Your table, time, and any special arrangements are confirmed — all you need to do is arrive.",
      icon: CheckCircle,
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        preferences: "",
        specialRequests: "",
      });
    }, 3000);
  };

  const scrollToForm = () => {
    document
      .getElementById("dining-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Hero Section - Luxury Dining Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Tokyo Night Dining Scene Background */}
        <div className="absolute inset-0 z-0">
          {/* Primary Tokyo night dining scene - your uploaded image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${tokyoNightDiningImage}')`,
              filter: "brightness(0.8) contrast(1.05) saturate(1.1)",
              animation: "cinematicZoom 20s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Subtle fine dining overlay for depth */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-8"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90')`,
              filter: "brightness(0.3) blur(2px)",
              animation:
                "cinematicFloat 25s ease-in-out infinite alternate-reverse",
            }}
          ></div>

          {/* Night city lights enhancement */}
          <div
            className="absolute inset-0 w-full h-full opacity-5"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)",
              animation: "gradientMove 30s ease-in-out infinite",
            }}
          ></div>

          {/* Warm city glow effect */}
          <div
            className="absolute inset-0 w-full h-full opacity-4"
            style={{
              background:
                "linear-gradient(135deg, transparent 30%, rgba(255, 215, 0, 0.08) 50%, transparent 70%)",
              animation: "cityLightStreaks 35s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Optimized overlays for night dining scene */}
        <div className="absolute inset-0 bg-nippon-black/25 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/20 via-transparent to-nippon-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/20 via-transparent to-nippon-black/15 z-10"></div>

        {/* Night dining accent elements - subtle enhancement */}
        <div className="absolute top-1/5 right-1/3 w-64 h-64 rounded-full bg-nippon-gold opacity-3 blur-3xl z-10"></div>
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 rounded-full bg-nippon-gold opacity-2 blur-3xl z-10"></div>

        {/* Minimal texture overlay for depth */}
        <div
          className="absolute inset-0 opacity-2 z-10"
          style={{
            backgroundImage: `url("data/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' seed='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px",
          }}
        ></div>

        {/* Content - Hero - Sophisticated centered positioning */}
        <div
          className="relative z-20 max-w-7xl pt-[80px] mx-auto px-8 h-full flex items-center justify-center"
          data-scroll-reveal
        >
          <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center space-y-12">
            {/* Top Japanese character with positioning */}
            <div className="relative">
              <div className="text-nippon-gold text-luxury-2xl md-luxury-3xl font-serif tracking-[0.3em] opacity-75 mb-8">
                饗宴
              </div>

              {/* Subtle decorative lines */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-px bg-nippon-gold opacity-40"></div>
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-px bg-nippon-gold opacity-40"></div>
            </div>

            {/* Main headline with dramatic spacing */}
            <div className="space-y-6">
              <h1
                className="text-luxury-6xl md-luxury-7xl lg-luxury-8xl text-nippon-warm-white font-serif leading-[0.85] tracking-tight"
                style={{
                  textShadow:
                    "0 6px 16px rgba(0, 0, 0, 0.9), 0 3px 8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                <span className="text-nippon-warm-white">Culinary </span>
                <span className="text-nippon-gold">Mastery</span>
              </h1>

              {/* Secondary line with different positioning */}
              <div className="relative mt-8">
                <h2
                  className="text-luxury-4xl md-luxury-5xl lg-luxury-6xl text-nippon-warm-white font-serif tracking-wide opacity-90"
                  style={{
                    textShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Imperial Access
                </h2>

                {/* Decorative dot */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-nippon-gold opacity-60"></div>
              </div>
            </div>

            {/* Brand divider with sophisticated spacing */}
            <div className="flex items-center space-x-8 my-12">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-nippon-gold to-nippon-gold opacity-50"></div>
              <div className="text-nippon-gold text-luxury-sm font-serif tracking-[0.2em] uppercase opacity-80">
                Nippon Imperial
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-nippon-gold to-nippon-gold opacity-50"></div>
            </div>

            {/* Subtitle with constrained width but centered */}
            <div className="max-w-2xl">
              <p
                className="text-luxury-lg md-luxury-xl text-nippon-pearl font-sans leading-relaxed"
                style={{
                  textShadow:
                    "0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.8)",
                }}
              >
                From legendary sushi masters to hidden izakaya sanctuaries,
                experience Japan's most coveted culinary temples through our
                exclusive network of cultural artisans and epicurean guardians
                across Tokyo, Kyoto, Osaka, and beyond.
              </p>
            </div>

            {/* CTA button with enhanced spacing */}
            <div className="pt-8">
              <Button
                onClick={scrollToForm}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover-nippon-black font-sans text-luxury-base px-12 py-5 transition-all duration-500 shadow-gold hover-gold-hover transform hover:-translate-y-2 hover-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: "blur(12px)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  textShadow: "0 2px 6px rgba(0, 0, 0, 0.9)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">
                    Reserve Your Experience
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Subtle bottom accent */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-2 opacity-40">
                <div className="w-px h-8 bg-nippon-gold"></div>
                <div className="w-1 h-1 bg-nippon-gold rounded-full"></div>
              </div>
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
              backgroundImage: `url("data/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          {/* Essence Text */}
          <div className="text-center mb-20" data-scroll-reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-12">
                Culinary Excellence Beyond Reservations
              </h2>

              <div className="space-y-6">
                <p className="text-luxury-xl text-nippon-black font-serif italic leading-relaxed">
                  From discreet omakase counters to exclusive rooftop lounges,
                  Nippon Imperial opens doors to Japan's most sought-after
                  tables and nightlife experiences.
                </p>

                <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                  Whether you seek a quiet, candlelit dinner or a lively evening
                  in the city's hidden gems, each reservation is curated to
                  match your taste, style, and occasion. Our relationships with
                  select establishments ensure access to tables, experiences,
                  and moments often unavailable elsewhere.
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

                  {/* Badge */}
                  {highlight.badge && (
                    <div className="text-nippon-gold font-serif text-sm uppercase tracking-wider">
                      {highlight.badge}
                    </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Inquiry Form Section */}
      <section
        id="dining-form"
        className="relative bg-nippon-warm-white section-padding overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-2">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-8">
              Secure Your Table
            </h2>
            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-2xl mx-auto">
              Share your dining preferences and let our culinary concierge
              curate an extraordinary evening tailored to your taste.
            </p>
          </div>

          {/* Inquiry Form */}
          <div
            className="bg-nippon-white shadow-luxury p-12"
            data-scroll-reveal
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-nippon-gold mx-auto mb-6" />
                <h3 className="text-luxury-2xl font-serif text-nippon-black mb-4">
                  Dining Request Received
                </h3>
                <p className="text-nippon-gray font-sans leading-relaxed">
                  Thank you for your dining reservation request. Our culinary
                  concierge will contact you within 2 hours to confirm your
                  exceptional table.
                  <br />
                  <br />
                  <strong>Request ID:</strong> DR-
                  {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="grid md-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-nippon-black font-sans"
                    >
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
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
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="luxury-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-nippon-black font-sans"
                    >
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="luxury-input"
                      placeholder="+81 (optional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="guests"
                      className="text-nippon-black font-sans"
                    >
                      Number of Guests *
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="luxury-input"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div className="grid md-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="date"
                      className="text-nippon-black font-sans"
                    >
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="luxury-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="time"
                      className="text-nippon-black font-sans"
                    >
                      Preferred Time *
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="preferences"
                    className="text-nippon-black font-sans"
                  >
                    Cuisine or Venue Preferences
                  </Label>
                  <Textarea
                    id="preferences"
                    name="preferences"
                    value={formData.preferences}
                    onChange={handleInputChange}
                    className="luxury-input min-h-[120px] resize-none"
                    placeholder="Omakase sushi, kaiseki, modern fusion, rooftop bar, traditional ryotei, Michelin-starred venues..."
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="specialRequests"
                    className="text-nippon-black font-sans"
                  >
                    Special Requests & Preferences
                  </Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="luxury-input min-h-[120px] resize-none"
                    placeholder="Dietary restrictions, celebration details, seating preferences, transportation needs, wine pairings..."
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover-nippon-black font-serif text-luxury-lg px-8 py-4 transition-all duration-500 shadow-gold hover-gold-hover transform hover:-translate-y-2 hover-nippon-gold luxury-button-gold"
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-3">
                      <Utensils className="w-5 h-5" />
                      <span className="tracking-wider font-medium">
                        Submit Dining Request
                      </span>
                      <ArrowRight className="w-5 h-5 transform group-hover-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </form>
            )}

            {/* Auto-confirmation note */}
            <div className="mt-8 p-6 bg-nippon-beige border-l-4 border-nippon-gold">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-nippon-gold mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-nippon-black font-sans text-luxury-sm leading-relaxed">
                    <strong>Immediate Confirmation:</strong> You'll receive a
                    personalized response within 2 hours with your request ID
                    and next steps.
                  </p>
                  <p className="text-nippon-gray font-sans text-luxury-xs leading-relaxed">
                    Our culinary concierge will follow up with curated dining
                    options within 24 hours.
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
