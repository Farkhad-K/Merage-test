import React from "react";
import {
  Car,
  MapPin,
  Plane,
  Calendar,
  Star,
  ArrowRight,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import airportTransferImage from "../assets/image.png";
import luxuryChauffeurHeroImage from "../assets/home.png";
import privateChauffeurImage from "../assets/card1.png";

export default function Services({ onNavigateToService }) {
  const coreServices = [
    {
      key: "private-chauffeur",
      icon: Car,
      title: "Private Chauffeur Services",
      description:
        "Travel Japan in elegance with a professional driver and luxury vehicle — available by the hour or for full-day hire.",
      image: privateChauffeurImage,
      culturalNote: "Tokyo to Kyoto in elegance",
    },
    {
      key: "airport-transfers",
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Seamless VIP pickups and drop-offs with meet & greet, flight tracking, and discreet service between airport and hotel.",
      image: airportTransferImage,
      culturalNote: "Arrival perfected",
    },
    {
      key: "day-escapes",
      icon: MapPin,
      title: "Signature Day Escapes",
      description:
        "One-day private tours to Mt. Fuji, Hakone, Nikko, and more — guided, customizable, and beautifully paced.",
      image:
        "https://images.unsplash.com/photo-1713001206325-fa191927c2a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      culturalNote: "Cultural immersion awaits",
    },
    {
      key: "multi-day-tours",
      icon: Calendar,
      title: "Signature Multi-Day Tours",
      description:
        "Curated multi-day journeys through Japan's iconic regions — including transport, accommodation, and cultural experiences.",
      image:
        "https://images.unsplash.com/photo-1551560231-c37681ebbd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      culturalNote: "Japan, completely unveiled",
    },
  ];

  const trustIndicators = {
    journeys: "800+",
    support: "24/7",
    experience: "18+",
  };

  const handleServiceInquiry = (serviceKey, serviceTitle) => {
    if (serviceKey === "private-chauffeur" && onNavigateToService) {
      onNavigateToService(serviceKey);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    document
      .getElementById("core-services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleConciergeContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={luxuryChauffeurHeroImage}
            alt="Luxury chauffeur service"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "brightness(0.7) contrast(1.1) saturate(1.0)",
              animation: "cinematicZoom 25s ease-in-out infinite alternate",
            }}
          />

          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url(${privateChauffeurImage})`,
              filter: "brightness(0.4) blur(1px)",
              animation:
                "cinematicFloat 28s ease-in-out infinite alternate-reverse",
            }}
          ></div>

          <div
            className="absolute inset-0 w-full h-full opacity-5"
            style={{
              background:
                "radial-gradient(circle at 40% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)",
              animation: "gradientMove 35s ease-in-out infinite",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-nippon-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/40 via-nippon-black/20 to-nippon-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/30 via-transparent to-nippon-black/20 z-10"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-8">
          <div className="max-w-4xl text-center">
            <h1
              className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
              style={{
                textShadow:
                  "0 4px 20px rgba(0,0,0,0.9),0 2px 10px rgba(0,0,0,0.8),0 0 40px rgba(212,175,55,0.5)",
              }}
            >
              Crafted for Your Journey
            </h1>
            <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>
            <p
              className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed text-center"
              style={{
                textShadow:
                  "0 4px 16px rgba(0,0,0,0.9),0 2px 8px rgba(0,0,0,0.8)",
              }}
            >
              Seamless transport. Curated exploration. Discreet lifestyle
              assistance — tailored entirely to you.
            </p>
            <div className="mt-20">
              <Button
                onClick={scrollToServices}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black px-8 py-4 transition-all duration-500"
                style={{
                  backdropFilter: "blur(15px)",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Essence Section */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
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
              From the moment you arrive until your final farewell, every
              offering is shaped around your rhythm and desires.
            </p>
            <p>
              Whether you need an elegant airport transfer, a cultural day tour,
              or a multi-day itinerary across Japan's iconic regions, each
              service is designed to deliver comfort, precision, and
              authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section
        id="core-services"
        className="relative bg-nippon-black section-padding overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Four Essential Services
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light">
              Each crafted to seamlessly integrate into your Japanese
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-nippon-warm-white shadow-luxury hover:shadow-luxury-hover transition-all overflow-hidden border-l-4 border-nippon-gold"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-nippon-gold to-nippon-gold-dark flex items-center justify-center shadow-gold border-2 border-nippon-gold-light">
                      {React.createElement(service.icon, {
                        className: "w-8 h-8 text-nippon-black",
                      })}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-nippon-black/80 px-4 py-2">
                    <p className="text-nippon-gold text-luxury-xs italic">
                      {service.culturalNote}
                    </p>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-luxury-2xl text-nippon-black font-serif uppercase">
                    {service.title}
                  </h3>
                  <p className="text-luxury-base text-nippon-gray">
                    {service.description}
                  </p>
                  <Button
                    onClick={() =>
                      handleServiceInquiry(service.key, service.title)
                    }
                    className="group relative overflow-hidden bg-transparent border border-nippon-gold text-nippon-gold hover:bg-nippon-gold hover:text-nippon-black px-6 py-4 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="relative flex items-center justify-center">
                      {service.key === "private-chauffeur"
                        ? "View Details"
                        : "Learn More"}
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nippon Imperial */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
            Why Nippon Imperial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
            <div>
              <div className="text-luxury-6xl text-nippon-gold font-serif">
                {trustIndicators.journeys}
              </div>
              <div>Bespoke Journeys Crafted</div>
            </div>
            <div>
              <div className="text-luxury-6xl text-nippon-gold font-serif">
                {trustIndicators.support}
              </div>
              <div>Concierge Support</div>
            </div>
            <div>
              <div className="text-luxury-6xl text-nippon-gold font-serif">
                {trustIndicators.experience}
              </div>
              <div>Years of Cultural Insight</div>
            </div>
          </div>
          <p className="text-luxury-lg text-nippon-gray italic">
            Every detail, every guest, every journey — handled with precision
            and care.
          </p>
        </div>
      </section>

      {/* Concierge Suggestion */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight">
            Not sure where to begin?
          </h2>
          <p className="text-luxury-xl text-nippon-gray-light max-w-2xl mx-auto">
            Our concierge team is here to guide you — whether you need a single
            transfer or a complete itinerary.
          </p>
          <Button
            onClick={handleConciergeContact}
            className="group relative overflow-hidden mt-8 bg-transparent border-2 border-nippon-gold text-nippon-gold hover:bg-nippon-gold hover:text-nippon-black px-8 py-5 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="relative flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Speak with Our Concierge
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
}
