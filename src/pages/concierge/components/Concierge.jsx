import {
  Car,
  Crown,
  MapPin,
  Calendar,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Leaf,
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import consultationImage from "../assets/Hotel.png";
import guideImage from "../assets/User.png";
import luxuryCarImage from "../assets/car.png";
import conciergeWelcomeImage from "../assets/Concierge Services Leviticus Lifestyle.jpg";
import { useNavigate } from "react-router";
import ROUTES from "../../../router/routes";

export default function Concierge() {
  const navigate = useNavigate();

  const services = [
    {
      icon: MapPin,
      title: "Luxury Accommodations",
      subtitle: "Ryokan & Premium Hotels",
      description:
        "Exceptional stays in Japan's finest traditional ryokan and contemporary luxury hotels, each selected for their unparalleled service and cultural authenticity.",
      image:
        "https://images.unsplash.com/photo-1706058358041-19f10e95a89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBKYXBhbmVzZSUyMHJ5b2thbiUyMGludGVyaW9yJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU1MjQ4Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cta: "Book Your Stay",
      culturalNote: "Omotenashi hospitality awaits",
      route: `${ROUTES.ACCOMMODATION}`,
    },
    {
      icon: Crown,
      title: "Fine Dining Reservations",
      subtitle: "Michelin Stars & Hidden Gems",
      description:
        "Exclusive access to Japan's most coveted restaurants, from intimate sushi counters to centuries-old kaiseki masters and innovative culinary artists.",
      image:
        "https://images.unsplash.com/photo-1678129456271-f37da2c63e56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBKYXBhbmVzZSUyMHNha2UlMjB0YXN0aW5nJTIwcHJpdmF0ZXxlbnwxfHx8fDE3NTUyNDg0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cta: "Reserve Your Table",
      culturalNote: "Seasonal omakase experiences",
      route: null,
    },
    {
      icon: Car,
      title: "Private Transportation",
      subtitle: "Chauffeur & Luxury Vehicles",
      description:
        "Premium chauffeur services in luxury vehicles with English-speaking drivers, ensuring seamless travel between cities and destinations throughout Japan.",
      image: luxuryCarImage,
      cta: "Arrange Transport",
      culturalNote: "Tokyo to Kyoto in comfort",
      route: `${ROUTES.LUXURY}`,
    },
    {
      icon: Calendar,
      title: "Curated Day Experiences",
      subtitle: "Cultural Tours & Seasonal Activities",
      description:
        "Thoughtfully designed day tours and seasonal experiences, from cherry blossom ceremonies to private temple visits, timed to Japan's natural rhythms.",
      image:
        "https://images.unsplash.com/photo-1705990775020-ec23afbba2e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbmVzZSUyMGdhcmRlbiUyMHRlbXBsZSUyMGx1eHVyeXxlbnwxfHx8fDE3NTUyNDg0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cta: "Meet Your Guide",
      culturalNote: "Seasonal beauty & traditions",
      route: `${ROUTES.CURATED}`,
    },
    {
      icon: Sparkles,
      title: "Exclusive Experiences",
      subtitle: "Private Access & VIP Services",
      description:
        "Once-in-a-lifetime experiences including private Mount Fuji helicopter tours, exclusive tea ceremonies with grand masters, and VIP cultural encounters.",
      image:
        "https://images.unsplash.com/photo-1495554698253-681539e9ea84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb250JTIwRnVqaSUyMGx1eHVyeSUyMHZpZXclMjBoZWxpY29wdGVyJTIwcHJpdmF0ZXxlbnwxfHx8fDE3NTUyNDg0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cta: "Create Your Moment",
      culturalNote: "Unforgettable encounters",
      route: `${ROUTES.EXCLUSIVE}`,
    },
    {
      icon: Users,
      title: "Private Tour Guides",
      subtitle: "Expert Cultural Specialists",
      description:
        "Licensed private guides fluent in your language and passionate about Japanese culture, providing insider access and deep cultural insights throughout your journey.",
      image: guideImage,
      cta: "Meet Your Guide",
      culturalNote: "Cultural fluency guaranteed",
      route: `${ROUTES.TRAVEL}`,
    },
  ];

  // Enhanced flagship service with more depth and authenticity
  const flagshipService = {
    icon: Compass,
    title: "Complete Journey Planning",
    subtitle: "Bespoke Travel Consultation",
    description:
      "Comprehensive travel planning service where our Japan specialists create your perfect itinerary through detailed consultation and cultural expertise.",
    expandedDescription:
      "Our certified Japan travel specialists work closely with you to design a completely personalized itinerary that matches your interests, pace, and travel style. From cultural immersion to luxury relaxation, we handle every detail while ensuring authentic Japanese experiences throughout your journey.",
    image: consultationImage,
    philosophy:
      "Like Japanese artisans who perfect their craft over generations, we approach your journey with the same dedication to excellence and attention to detail.",
    features: [
      "Private consultation with certified Japan travel specialists",
      "Completely customized multi-city travel itinerary",
      "24/7 dedicated support throughout your entire trip",
      "Exclusive access to our network of premium partners",
      "Pre-travel cultural briefing and practical guidance",
      "Real-time itinerary adjustments based on your preferences",
    ],
    cta: "Start Planning Your Journey",
    stats: {
      journeys: "800+",
      support: "24/7",
      experience: "18+",
    },
  };

  const handleServiceDiscover = (service) => {
    if (service.route) {
      navigate(service.route);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    document
      .getElementById("concierge-services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Hero Section - Luxury Concierge Welcome Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Main Concierge Welcome Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${conciergeWelcomeImage})`,
              filter: "brightness(0.85) contrast(1.1) saturate(1.05)",
              animation: "cinematicZoom 20s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Subtle luxury enhancement layer */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90')`,
              filter: "brightness(0.4) blur(1px)",
              animation:
                "cinematicFloat 25s ease-in-out infinite alternate-reverse",
            }}
          ></div>

          {/* Elegant gold light accent */}
          <div
            className="absolute inset-0 w-full h-full opacity-8"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, rgba(212, 175, 55, 0.12) 0%, transparent 60%)",
              animation: "gradientMove 30s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Professional overlays for perfect readability */}
        <div className="absolute inset-0 bg-nippon-black/40 z-10"></div>

        {/* Elegant gradient overlays for content area */}
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/50 via-nippon-black/30 to-nippon-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/45 via-transparent to-nippon-black/25 z-10"></div>

        {/* Luxury gold accent elements */}
        <div
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-nippon-gold opacity-4 blur-3xl z-10"
          data-scroll-parallax
          data-scroll-speed="0.1"
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-2 blur-3xl z-10"
          data-scroll-parallax
          data-scroll-speed="-0.05"
        ></div>

        {/* Subtle texture overlay for luxury feel */}
        <div
          className="absolute inset-0 opacity-3 z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Content - Streamlined and Concise */}
        <div
          className="relative z-20 max-w-6xl mx-auto px-8"
          data-scroll-reveal
        >
          <div className="max-w-4xl">
            {/* Main headline - shortened and more impactful */}
            <h1
              className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
              style={{
                textShadow:
                  "0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.5)",
              }}
            >
              Your life, seamlessly arranged.
            </h1>

            {/* Gold divider */}
            <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold"></div>

            {/* Streamlined intro - much shorter, more breathing room */}
            <div className="text-left space-y-12 max-w-3xl">
              <p
                className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed"
                style={{
                  textShadow:
                    "0 4px 10px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.8)",
                }}
              >
                At Nippon Imperial, concierge is devotion.
              </p>

              <p
                className="text-luxury-xl text-nippon-warm-white font-sans leading-relaxed"
                style={{
                  textShadow:
                    "0 3px 8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                Every detail of your Japanese journey, arranged with precision
                and calm.
              </p>
            </div>

            {/* CTA button */}
            <div className="mt-20">
              <Button
                onClick={scrollToServices}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">
                    Explore Our Services
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Services - Consistent Warm White Background */}
      <section
        id="concierge-services"
        className="relative bg-nippon-warm-white section-padding overflow-hidden"
      >
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

        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          {/* Core Services Grid - Enhanced with cultural authenticity */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-nippon-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold"
                data-scroll-reveal
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Service Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={`${service.title} - ${service.subtitle}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Refined tint overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent group-hover:from-nippon-black/30 transition-colors duration-500"></div>

                  {/* Gold framed icon with enhanced styling */}
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

                {/* Enhanced Card Content */}
                <div className="p-8 flex flex-col min-h-[380px]">
                  {/* Upper part */}
                  <div>
                    <div className="text-nippon-gold font-sans text-luxury-sm uppercase tracking-wider font-medium">
                      {service.subtitle}
                    </div>

                    <h3 className="text-luxury-2xl text-nippon-black font-serif leading-tight mb-4">
                      {service.title}
                    </h3>

                    <p className="text-luxury-base text-nippon-gray leading-relaxed font-sans">
                      {service.description}
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-nippon-gold/30 to-transparent my-6"></div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto mb-4">
                    <Button
                      onClick={() => handleServiceDiscover(service)}
                      className="group/btn relative overflow-hidden w-full 
                 bg-transparent border border-nippon-gold text-nippon-gold 
                 hover:text-nippon-black font-sans text-luxury-sm px-6 py-4 
                 transition-all duration-500 shadow-gold hover:shadow-gold-hover 
                 transform hover:-translate-y-2 hover:bg-nippon-gold 
                 luxury-button-gold flex items-center justify-center"
                    >
                      <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                      <span className="relative flex items-center justify-center space-x-2">
                        <span className="tracking-wider font-medium">
                          {service.cta}
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Elegant Transition Bridge */}
          <div className="text-center space-y-12 mb-20" data-scroll-reveal>
            <div className="space-y-10">
              <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="h-px w-16 bg-nippon-gold"></div>
                <Star className="w-8 h-8 text-nippon-gold" />
                <div className="h-px w-16 bg-nippon-gold"></div>
              </div>

              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight max-w-4xl mx-auto">
                Each service, meticulously crafted. Together, they become
                something extraordinary.
              </h2>

              {/* Enhanced visibility for the philosophical question */}
              <div className="relative max-w-3xl mx-auto">
                {/* Subtle background for better contrast */}
                <div className="absolute inset-0 bg-nippon-black/5 backdrop-blur-sm rounded-lg"></div>
                <div className="relative px-10 py-8">
                  <p className="text-luxury-2xl text-nippon-black font-serif italic leading-relaxed">
                    What if every element of your journey could flow as one
                    seamless experience?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Flagship Service - Travel Consultation Card */}
          <div
            className="group relative bg-nippon-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden"
            data-scroll-reveal
          >
            {/* Premium Badge */}
            <div className="absolute top-8 left-8 z-10">
              <div className="bg-nippon-black px-6 py-3 flex items-center space-x-3">
                <Award className="w-5 h-5 text-nippon-gold" />
                <span className="text-luxury-sm text-nippon-gold font-sans uppercase tracking-wider font-medium">
                  The Ultimate Experience
                </span>
              </div>
            </div>

            {/* Service Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <ImageWithFallback
                src={flagshipService.image}
                alt="Luxury Hotel Lobby - Premium Travel Consultation Setting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/60 via-nippon-black/20 to-transparent group-hover:from-nippon-black/50 transition-colors duration-500"></div>

              {/* Gold framed icon - larger for flagship */}
              <div className="absolute top-8 right-8">
                <div className="w-20 h-20 bg-nippon-gold/95 backdrop-blur-sm flex items-center justify-center shadow-gold border border-nippon-gold-dark">
                  <flagshipService.icon className="w-10 h-10 text-nippon-black" />
                </div>
              </div>

              {/* Title overlay on image for dramatic effect */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight text-with-gold-glow mb-4">
                  {flagshipService.title}
                </h3>
                <p className="text-luxury-xl text-nippon-warm-white font-serif italic leading-relaxed">
                  {flagshipService.description}
                </p>
              </div>
            </div>

            {/* Expanded Card Content */}
            <div className="p-12 space-y-8">
              {/* Expanded Description */}
              <div className="space-y-6">
                <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                  {flagshipService.expandedDescription}
                </p>
              </div>

              {/* Features Grid */}
              <div className="space-y-6">
                <h4 className="text-luxury-2xl text-nippon-black font-serif flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-nippon-gold" />
                  <span>What's Included:</span>
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {flagshipService.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-nippon-gold mt-0.5 flex-shrink-0" />
                      <span className="text-nippon-gray font-sans text-luxury-base leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-8 py-8 border-t border-nippon-border">
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    {flagshipService.stats.journeys}
                  </div>
                  <div className="text-nippon-gray font-sans text-luxury-sm">
                    Bespoke Journeys
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    {flagshipService.stats.support}
                  </div>
                  <div className="text-nippon-gray font-sans text-luxury-sm">
                    Dedicated Support
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    {flagshipService.stats.experience}
                  </div>
                  <div className="text-nippon-gray font-sans text-luxury-sm">
                    Years Experience
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <div className="pt-6">
                <Button
                  onClick={() => handleServiceDiscover(flagshipService.title)}
                  className="group/btn relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-8 py-5 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                >
                  <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="relative flex items-center justify-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <span className="tracking-wider font-medium">
                      {flagshipService.cta}
                    </span>
                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Elegant Closing Line */}
          <div className="text-center mt-20" data-scroll-reveal>
            <p className="text-luxury-2xl text-nippon-black font-serif italic leading-relaxed max-w-3xl mx-auto">
              Whatever you seek in Japan—stillness, discovery, indulgence—your
              concierge is ready.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
