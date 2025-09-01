import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Award,
  Users,
  Shield,
  Book,
  Crown,
  Zap,
  Compass,
  Phone,
  Calendar,
  Globe2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import consultationImage from "../assets/2b14b7a2c710c0db1e486f8213e0806d30ce9be5.png";
import heroBackgroundImage from "../assets/f2ca2fb1ca45d2f12114c2812b6a3f4fc87c622c.png";
import supportImage from "../assets/d9cd84406971ffca0600d80bacbfe0ccd632f794.png";

export default function TravelConsultation() {
  const serviceHighlights = [
    {
      icon: Users,
      title: "Private Consultation with Certified Japan Travel Specialists",
      description:
        "One-on-one planning sessions with experts who understand your unique travel aspirations and preferences",
      image: consultationImage,
      premium: "Certified Specialist",
    },
    {
      icon: Compass,
      title: "Completely Customized Multi-City Travel Itinerary",
      description:
        "Bespoke journeys crafted to your interests, pace, and travel style across Japan's most compelling destinations",
      image:
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMG1hcCUyMGl0aW5lcmFyeSUyMHBsYW5uaW5nJTIwdHJhdmVsfGVufDF8fHx8MTc1NTMzMTQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      premium: "Bespoke Planning",
    },
    {
      icon: Phone,
      title: "24/7 Dedicated Support Throughout Your Entire Trip",
      description:
        "Real-time assistance, cultural guidance, and seamless coordination from arrival to departure",
      image: supportImage,
      premium: "24/7 Concierge",
    },
    {
      icon: Crown,
      title: "Exclusive Access to Our Network of Premium Partners",
      description:
        "Private dining, after-hours temple visits, master craftsman workshops, and experiences unavailable to the public",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRlbXBsZSUyMHByaXZhdGUlMjBhY2Nlc3N8ZW58MXx8fHwxNzU1MzMxNDExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      premium: "Exclusive Access",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Share Your Vision",
      description:
        "Tell us your interests, destinations, and travel style preferences during our private consultation.",
      icon: Users,
      timeframe: "60-minute consultation",
    },
    {
      step: "02",
      title: "Bespoke Planning",
      description:
        "Our specialists design your tailored itinerary, integrating accommodations, transport, and exclusive experiences.",
      icon: Compass,
      timeframe: "7-14 days development",
    },
    {
      step: "03",
      title: "Concierge Support",
      description:
        "We handle every detail before and during your trip, ensuring a seamless journey from start to finish.",
      icon: Phone,
      timeframe: "Throughout your journey",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Travel consultation inquiry submitted");
  };

  const scrollToForm = () => {
    document
      .getElementById("consultation-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Hero Section - Luxury Consultation Room Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Consultation Room Background */}
        <div className="absolute inset-0 z-0">
          {/* Primary luxury consultation lounge background */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroBackgroundImage})`,
              filter: "brightness(0.9) contrast(1.15) saturate(1.05)",
            }}
          ></div>

          {/* Subtle luxury overlay for depth */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhjb25jaWVyZ2UlMjBzZXJ2aWNlJTIwbHV4dXJ5JTIwaG90ZWx8ZW58MXx8fHwxNzU1MzMxNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
              filter: "brightness(0.3) blur(3px)",
              transform: "scale(1.1)",
              animation: "cinematicFloat 50s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Luxury consultation atmosphere */}
          <div
            className="absolute inset-0 w-full h-full opacity-8"
            style={{
              background:
                "linear-gradient(135deg, transparent 20%, rgba(212, 175, 55, 0.12) 40%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)",
              animation: "cityLightStreaks 45s ease-in-out infinite",
            }}
          ></div>

          {/* Warm consultation gradient */}
          <div
            className="absolute inset-0 w-full h-full opacity-6"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(212, 175, 55, 0.18) 0%, transparent 60%)",
              animation: "gradientMove 50s ease-in-out infinite",
            }}
          ></div>

          {/* Premium consultation highlight */}
          <div
            className="absolute inset-0 w-full h-full opacity-4"
            style={{
              background:
                "linear-gradient(90deg, transparent 30%, rgba(255, 255, 255, 0.08) 45%, rgba(212, 175, 55, 0.15) 55%, transparent 70%)",
              animation: "luxuryPulse 40s ease-in-out infinite",
            }}
          ></div>

          {/* Consultation atmosphere enhancement */}
          <div
            className="absolute inset-0 w-full h-full opacity-3"
            style={{
              background:
                "conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(212, 175, 55, 0.1) 90deg, transparent 180deg, rgba(255, 255, 255, 0.05) 270deg, transparent 360deg)",
              animation: "cinematicFloat 65s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Enhanced cinematic overlay gradients - adjusted for brighter background */}
        <div className="absolute inset-0 bg-nippon-black/45 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/35 via-nippon-black/25 to-nippon-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/40 via-transparent to-nippon-black/35 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/50 via-transparent to-nippon-black/15 z-10"></div>

        {/* Enhanced luxury accent elements */}
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
                Bespoke Travel Planning Since 1985
              </span>
            </div>

            {/* Main Tagline */}
            <h1
              className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
              style={{
                textShadow:
                  "0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 0, 0, 0.85), 0 0 50px rgba(212, 175, 55, 0.4)",
              }}
            >
              Travel Consultation
            </h1>

            {/* Enhanced gold divider */}
            <div className="h-px w-48 mx-auto mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold"></div>

            {/* Subtitle with philosophy */}
            <div className="space-y-6 mb-16">
              <p
                className="text-luxury-xl text-nippon-warm-white font-serif italic leading-relaxed max-w-2xl mx-auto"
                style={{
                  textShadow:
                    "0 3px 12px rgba(0, 0, 0, 0.9), 0 1px 8px rgba(0, 0, 0, 0.75), 0 0 30px rgba(212, 175, 55, 0.2)",
                }}
              >
                Where every element of your journey flows as one seamless story.
              </p>

              {/* Social proof metrics */}
              <div className="flex justify-center items-center space-x-8 text-nippon-gold">
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">800+</span>
                  <span className="text-luxury-sm font-sans opacity-90">
                    Bespoke Journeys
                  </span>
                </div>
                <div className="w-px h-8 bg-nippon-gold/40"></div>
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">24/7</span>
                  <span className="text-luxury-sm font-sans opacity-90">
                    Dedicated Support
                  </span>
                </div>
                <div className="w-px h-8 bg-nippon-gold/40"></div>
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">18+</span>
                  <span className="text-luxury-sm font-sans opacity-90">
                    Years of Expertise
                  </span>
                </div>
              </div>
            </div>

            {/* CTA button */}
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
                    Begin Your Consultation
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
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
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          {/* Philosophy Text */}
          <div className="text-center mb-20" data-scroll-reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-12">
                The Ultimate Experience
              </h2>

              <div className="space-y-6">
                <p className="text-luxury-xl text-nippon-black font-serif italic leading-relaxed">
                  Each service, meticulously crafted. Together, they become
                  something extraordinary.
                </p>

                <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                  What if every element of your journey could flow as one
                  seamless experience? Our certified Japan travel specialists
                  work closely with you to design a completely personalized
                  itinerary that matches your interests, pace, and travel style.
                  From cultural immersion to luxury relaxation, we handle every
                  detail while ensuring authentic Japanese experiences
                  throughout your journey.
                </p>
              </div>
            </div>
          </div>

          {/* What's Included Grid */}
          <div className="grid md:grid-cols-2 gap-8" data-scroll-reveal>
            {serviceHighlights.map((highlight, index) => (
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

      {/* Cross-Link to Multi-Day Tours */}
      <section className="relative bg-nippon-black section-padding-sm overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div
          className="relative z-10 max-w-4xl mx-auto content-padding text-center"
          data-scroll-reveal
        >
          <div className="space-y-6">
            <h3 className="text-luxury-2xl text-nippon-warm-white font-serif leading-tight">
              Prefer inspiration first?
            </h3>

            <p className="text-luxury-lg text-nippon-gray-light leading-relaxed font-sans">
              Explore our curated{" "}
              <span className="text-nippon-gold font-serif">
                Signature Multi-Day Tours
              </span>{" "}
              as a starting point — then let us transform them into a journey
              entirely your own.
            </p>

            <div className="pt-4">
              <Button
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-base px-8 py-3 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: "blur(12px)",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <Globe2 className="w-5 h-5" />
                  <span className="tracking-wider font-medium">
                    View Multi-Day Tours
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
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

        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          {/* Section Header */}
          <div className="text-center mb-20" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-8">
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
                <div className="mx-auto w-14 h-14 bg-nippon-gold/10 backdrop-blur-sm flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-nippon-gold" />
                </div>

                {/* Title */}
                <h3 className="text-luxury-2xl text-nippon-black font-serif leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-nippon-gray font-sans text-luxury-base leading-relaxed max-w-sm mx-auto">
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

      {/* CTA + Consultation Form Section */}
      <section
        id="consultation-form"
        className="relative bg-nippon-black section-padding overflow-hidden"
      >
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

        <div className="relative z-10 max-w-4xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight mb-8">
              Let's Begin With a Conversation
            </h2>
            <p className="text-luxury-lg text-nippon-gray-light leading-relaxed font-sans max-w-2xl mx-auto">
              Share your vision for the perfect Japanese journey, and we'll
              craft an experience that exceeds your expectations.
            </p>
          </div>

          {/* Consultation Form */}
          <div
            className="bg-nippon-warm-white shadow-luxury p-12"
            data-scroll-reveal
          >
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-nippon-black font-sans">
                    Full Name *
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
                    htmlFor="travel-dates"
                    className="text-nippon-black font-sans"
                  >
                    Preferred Travel Dates *
                  </Label>
                  <Input
                    id="travel-dates"
                    type="text"
                    required
                    className="luxury-input"
                    placeholder="e.g., April 10-25, 2024"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="guests"
                    className="text-nippon-black font-sans"
                  >
                    Number of Guests *
                  </Label>
                  <Input
                    id="guests"
                    type="text"
                    required
                    className="luxury-input"
                    placeholder="e.g., 2 adults"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="budget"
                    className="text-nippon-black font-sans"
                  >
                    Estimated Budget Range
                  </Label>
                  <Input
                    id="budget"
                    type="text"
                    className="luxury-input"
                    placeholder="e.g., $15,000 - $25,000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="destinations"
                  className="text-nippon-black font-sans"
                >
                  Destinations of Interest *
                </Label>
                <Input
                  id="destinations"
                  type="text"
                  required
                  className="luxury-input"
                  placeholder="e.g., Tokyo, Kyoto, Osaka, Mount Fuji, Hiroshima"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="interests"
                  className="text-nippon-black font-sans"
                >
                  Travel Interests & Preferences
                </Label>
                <Textarea
                  id="interests"
                  className="luxury-input min-h-[100px] resize-none"
                  placeholder="Tell us about your interests: culture, cuisine, history, art, nature, luxury experiences, etc."
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="special-requests"
                  className="text-nippon-black font-sans"
                >
                  Special Requests
                </Label>
                <Textarea
                  id="special-requests"
                  className="luxury-input min-h-[120px] resize-none"
                  placeholder="Any specific requirements, accessibility needs, dietary restrictions, celebration occasions, or unique experiences you'd like to include..."
                />
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                >
                  <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="relative flex items-center justify-center space-x-3">
                    <Calendar className="w-5 h-5" />
                    <span className="tracking-wider font-medium">
                      Submit Consultation Request
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
                    <strong>Personalized Service:</strong> You'll receive your
                    Request ID immediately, with your assigned concierge
                    contacting you within 4 hours to schedule your private
                    consultation.
                  </p>
                  <p className="text-nippon-gray font-sans text-luxury-xs leading-relaxed">
                    Our bespoke travel specialists will prepare a preliminary
                    discussion based on your preferences, followed by detailed
                    itinerary development.
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
