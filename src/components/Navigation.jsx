// Libraries
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

// Components
import { Button } from "../pages/home/components/ui/button";

const conciergeServices = [
  {
    name: "Accommodation Reservations",
    path: "/concierge/accommodation-reservations",
  },
  {
    name: "Restaurant Bookings",
    path: "/concierge/restaurant",
  },
  {
    name: "Luxury Transport",
    path: "/concierge/luxury-transportation",
  },
  {
    name: "Special Arrangements",
    path: "/concierge/special-arrangements",
  },
  {
    name: "Curated Day Experiences",
    path: "/concierge/curated-day",
  },
  {
    name: "Exclusive Experiences",
    path: "/concierge/exclusive-experience",
  },
  {
    name: "Travel Consultation",
    path: "/concierge/travel-consultation",
  },
];

const services = [
  {
    name: "Private Chauffeur Services",
    path: "/services/private-chauffeur",
  },
  {
    name: "Airport Transfers",
    path: "/services/airport-transfers",
  },
  {
    name: "Private Day Tours",
    path: "/services/private-day-tours",
  },
  {
    name: "Signature Multi-Day Tours",
    path: "/services/signature-multi-day-tours",
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-nippon-black/95 backdrop-blur-md border-b border-nippon-gold/20 shadow-luxury"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => navigate("/")} className="group">
              <div className="flex flex-col relative">
                <span className="text-nippon-warm-white font-serif text-luxury-2xl font-medium tracking-wide group-hover:text-nippon-gold transition-colors duration-300">
                  Nippon Imperial
                </span>
                <div className="h-px bg-nippon-gold w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12 relative">
              <button
                onClick={() => navigate("/imperial-story")}
                className="group relative font-sans text-luxury-base font-medium tracking-wide text-nippon-warm-white transition-colors duration-300 hover:text-nippon-gold"
              >
                Imperial Story
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-nippon-gold transition-all duration-500 group-hover:w-full"></span>
              </button>

              {/* Concierge with dropdown */}
              <div className="relative group">
                <button
                  onClick={() => navigate("/concierge")}
                  className="group relative font-sans text-luxury-base font-medium tracking-wide text-nippon-warm-white transition-colors duration-300 hover:text-nippon-gold"
                >
                  Concierge
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-nippon-gold transition-all duration-500 group-hover:w-full"></span>
                </button>

                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  >
                    <ul className="py-3 text-white font-sans font-light tracking-wide space-y-1">
                      {conciergeServices.map((service, idx) => (
                        <li
                          key={idx}
                          onClick={() => navigate(service.path)}
                          className="px-5 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-nippon-gold/10 hover:text-nippon-gold"
                        >
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Services with dropdown */}
              <div className="relative group">
                <button
                  onClick={() => navigate("/services")}
                  className="group relative font-sans text-luxury-base font-medium tracking-wide text-nippon-warm-white transition-colors duration-300 hover:text-nippon-gold"
                >
                  Services
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-nippon-gold transition-all duration-500 group-hover:w-full"></span>
                </button>

                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  >
                    <ul className="py-3 text-white font-sans font-light tracking-wide space-y-1">
                      {services.map((service, idx) => (
                        <li
                          key={idx}
                          onClick={() => navigate(service.path)}
                          className="px-5 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-nippon-gold/10 hover:text-nippon-gold"
                        >
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={() => navigate("/partnership")}
                className="group relative font-sans text-luxury-base font-medium tracking-wide text-nippon-warm-white transition-colors duration-300 hover:text-nippon-gold"
              >
                Partnership
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-nippon-gold transition-all duration-500 group-hover:w-full"></span>
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+81-3-XXXX-XXXX"
                className="group relative flex items-center space-x-2 text-nippon-warm-white hover:text-nippon-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="font-sans text-luxury-sm font-medium">
                  +81 3 XXXX XXXX
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-nippon-gold transition-all duration-500 group-hover:w-full"></span>
              </a>
              <Button
                onClick={() => scrollToSection("contact-form")}
                className="luxury-button-gold bg-transparent border-2 border-nippon-gold text-nippon-gold hover:bg-nippon-gold hover:text-nippon-black px-8 py-3 font-sans text-luxury-sm font-medium tracking-wide relative group"
              >
                Begin Journey
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-nippon-warm-white hover:text-nippon-gold transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden absolute top-full left-0 right-0 bg-nippon-black/98 backdrop-blur-md border-b border-nippon-gold/20"
            >
              <div className="px-8 py-8 space-y-6">
                {/* Imperial Story */}
                <button
                  onClick={() => navigate("/imperial-story")}
                  className="block w-full text-left text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-lg font-medium transition-colors duration-300"
                >
                  Imperial Story
                </button>

                {/* Concierge with submenu */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        navigate("/concierge");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-lg font-medium transition-colors duration-300"
                    >
                      Concierge
                    </button>
                    <button
                      onClick={() => setConciergeOpen(!conciergeOpen)}
                      className="text-nippon-warm-white hover:text-nippon-gold transition-transform duration-300"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          conciergeOpen ? "rotate-180 text-nippon-gold" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {conciergeOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden mt-2 ml-4 space-y-2 text-nippon-warm-white"
                      >
                        {conciergeServices.map((service, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              navigate(service.path);
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-sm py-1 cursor-pointer hover:text-nippon-gold transition-colors"
                          >
                            {service.name}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services with submenu */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        navigate("/services");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-lg font-medium transition-colors duration-300"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="text-nippon-warm-white hover:text-nippon-gold transition-transform duration-300"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          servicesOpen ? "rotate-180 text-nippon-gold" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden mt-2 ml-4 space-y-2 text-nippon-warm-white"
                      >
                        {services.map((service, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              navigate(service.path);
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-sm py-1 cursor-pointer hover:text-nippon-gold transition-colors"
                          >
                            {service.name}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Partnership */}
                <button
                  onClick={() => navigate("/partnership")}
                  className="block w-full text-left text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-lg font-medium transition-colors duration-300"
                >
                  Partnership
                </button>

                {/* CTA & Contact */}
                <div className="pt-6 border-t border-nippon-gold/20">
                  <a
                    href="tel:+81-3-XXXX-XXXX"
                    className="flex items-center space-x-3 mb-6 text-nippon-warm-white hover:text-nippon-gold transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-sans text-luxury-base font-medium">
                      +81 3 XXXX XXXX
                    </span>
                  </a>
                  <Button
                    onClick={() => scrollToSection("contact-form")}
                    className="w-full luxury-button-gold bg-transparent border-2 border-nippon-gold text-nippon-gold hover:bg-nippon-gold hover:text-nippon-black py-4 font-sans text-luxury-base font-medium tracking-wide"
                  >
                    Begin Your Journey
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
