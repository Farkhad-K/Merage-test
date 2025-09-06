// Libraries
import { Car, Crown, MapPin, ArrowRight } from "lucide-react";

// Components
import { Button } from "./ui/button";

// Images
import mtFujiImage from "../assets/mtFujiImage.png";
import mercedesImage from "../assets/mercedesImage.png";
import conciergeImage from "../assets/conciergeImage.png";

const services = [
  {
    icon: Crown,
    title: "Bespoke Journeys",
    subtitle: "Curated Experiences",
    description:
      "Private access to temples, gardens, and cultural sites unavailable to general visitors.",
    image: mtFujiImage,
    features: [
      "After-hours temple visits",
      "Master craftsman workshops",
      "Private cultural performances",
    ],
  },
  {
    icon: Car,
    title: "Seamless Transportation",
    subtitle: "Executive Mobility",
    description:
      "Executive vehicles with professional drivers who understand the art of discretion and punctuality.",
    image: mercedesImage,
    features: [
      "Mercedes S-Class & BMW 7 Series",
      "Bilingual professional drivers",
      "Real-time journey coordination",
    ],
  },
  {
    icon: MapPin,
    title: "Discreet Concierge",
    subtitle: "24/7 Excellence",
    description:
      "Dedicated assistance for reservations, arrangements, and spontaneous requests throughout Japan.",
    image: conciergeImage,
    features: [
      "Michelin restaurant reservations",
      "Last-minute arrangements",
      "24/7 multilingual support",
    ],
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = (serviceTitle) => {
    scrollToContact();
  };

  return (
    <section
      id="services"
      className="relative bg-nippon-warm-white section-padding overflow-hidden"
    >
      <div className="absolute inset-0 opacity-2">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto content-padding">
        <div className="text-center mb-16" data-scroll-reveal>
          <h2 className="text-luxury-5xl text-nippon-obsidian font-serif mb-8">
            Our Services
          </h2>
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-nippon-gold"></div>
            <div className="w-4 h-4 border border-nippon-gold rotate-45"></div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-nippon-gold"></div>
          </div>
          <p className="text-luxury-lg text-nippon-gray-dark max-w-3xl mx-auto leading-relaxed">
            Three pillars of luxury that define every Nippon Imperial experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-nippon-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden flex flex-col"
              data-scroll-reveal
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image and icon */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-nippon-black/20 group-hover:bg-nippon-black/10 transition-colors duration-500"></div>
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 bg-nippon-gold/90 backdrop-blur-sm flex items-center justify-center shadow-gold">
                    <service.icon className="w-8 h-8 text-nippon-black" />
                  </div>
                </div>
              </div>

              {/* Kontent */}
              <div className="p-8 flex flex-col h-full">
                <div className="space-y-2">
                  <h3 className="text-luxury-2xl text-nippon-black font-serif">
                    {service.title}
                  </h3>
                  <p className="text-luxury-base text-nippon-gold font-serif italic">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-luxury-sm text-nippon-gray leading-relaxed font-sans mt-3">
                  {service.description}
                </p>

                <ul className="space-y-3 mt-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-1.5 h-1.5 bg-nippon-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-nippon-gray-dark font-sans text-luxury-xs leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button doim pastda */}
                <div className="pt-6 mt-auto">
                  <Button
                    onClick={() => handleLearnMore(service.title)}
                    className="group/btn relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-sm px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-3">
                      <span className="tracking-wider font-medium uppercase">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pastki CTA */}
        <div className="text-center mt-16" data-scroll-reveal>
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-luxury-3xl text-nippon-obsidian font-serif">
              Ready to Experience Excellence?
            </h3>
            <p className="text-luxury-base text-nippon-midnight font-sans leading-relaxed">
              Let our concierge team craft your perfect Japanese journey with
              the attention to detail and cultural authenticity you deserve.
            </p>
            <div className="pt-4">
              <Button
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-obsidian font-sans text-luxury-base px-12 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">
                    Begin Your Journey
                  </span>
                  <Crown className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
