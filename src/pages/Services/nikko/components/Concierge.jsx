import { Car, Crown, MapPin, Calendar, Sparkles, Users, Compass, ArrowRight, CheckCircle, Star, Award, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import consultationImage from 'figma:asset/e654dcd247d0b6bca931259a67b2c604ee0ad2aa.png';
import guideImage from 'figma:asset/ac87db3b62b60e6f679a297949b3130f64b8384b.png';
import luxuryCarImage from 'figma:asset/bbf3cb046228cd4944c5a70eaaf77e4c846fc311.png';
import conciergeWelcomeImage from 'figma:asset/5831822065d669e75a9269aa92acea69f4668b68.png';

export function Concierge() {
  const services = [
    {
      icon: MapPin,
      title: "Luxury Accommodations",
      subtitle: "Ryokan & Premium Hotels",
      description: "Exceptional stays in Japan's finest traditional ryokan and contemporary luxury hotels, each selected for their unparalleled service and cultural authenticity.",
      image: "https://images.unsplash.com/photo-1706058358041-19f10e95a89a?auto=format&fit=crop&w=1080&q=80",
      cta: "Book Your Stay",
      culturalNote: "Omotenashi hospitality awaits"
    },
    {
      icon: Crown,
      title: "Fine Dining Reservations", 
      subtitle: "Michelin Stars & Hidden Gems",
      description: "Exclusive access to Japan's most coveted restaurants, from intimate sushi counters to centuries-old kaiseki masters and innovative culinary artists.",
      image: "https://images.unsplash.com/photo-1678129456271-f37da2c63e56?auto=format&fit=crop&w=1080&q=80",
      cta: "Reserve Your Table",
      culturalNote: "Seasonal omakase experiences"
    },
    {
      icon: Car,
      title: "Private Transportation",
      subtitle: "Chauffeur & Luxury Vehicles",
      description: "Premium chauffeur services in luxury vehicles with English-speaking drivers, ensuring seamless travel between cities and destinations throughout Japan.",
      image: luxuryCarImage,
      cta: "Arrange Transport",
      culturalNote: "Tokyo to Kyoto in comfort"
    },
    {
      icon: Calendar,
      title: "Curated Day Experiences",
      subtitle: "Cultural Tours & Seasonal Activities",
      description: "Thoughtfully designed day tours and seasonal experiences, from cherry blossom ceremonies to private temple visits, timed to Japan's natural rhythms.",
      image: "https://images.unsplash.com/photo-1705990775020-ec23afbba2e4?auto=format&fit=crop&w=1080&q=80",
      cta: "Plan Your Experience",
      culturalNote: "Seasonal beauty & traditions"
    },
    {
      icon: Sparkles,
      title: "Exclusive Experiences",
      subtitle: "Private Access & VIP Services",
      description: "Once-in-a-lifetime experiences including private Mount Fuji helicopter tours, exclusive tea ceremonies with grand masters, and VIP cultural encounters.",
      image: "https://images.unsplash.com/photo-1495554698253-681539e9ea84?auto=format&fit=crop&w=1080&q=80",
      cta: "Create Your Moment",
      culturalNote: "Unforgettable encounters"
    },
    {
      icon: Users,
      title: "Private Tour Guides",
      subtitle: "Expert Cultural Specialists",
      description: "Licensed private guides fluent in your language and passionate about Japanese culture, providing insider access and deep cultural insights throughout your journey.",
      image: guideImage,
      cta: "Meet Your Guide",
      culturalNote: "Cultural fluency guaranteed"
    }
  ];

  const flagshipService = {
    icon: Compass,
    title: "Complete Journey Planning",
    subtitle: "Bespoke Travel Consultation",
    description: "Comprehensive travel planning service where our Japan specialists create your perfect itinerary through detailed consultation and cultural expertise.",
    expandedDescription: "Our certified Japan travel specialists work closely with you to design a completely personalized itinerary...",
    image: consultationImage,
    features: [
      "Private consultation with certified Japan travel specialists",
      "Completely customized multi-city travel itinerary", 
      "24/7 dedicated support throughout your entire trip",
    ],
    cta: "Start Planning Your Journey",
    stats: {
      journeys: "800+",
      support: "24/7",
      experience: "18+"
    }
  };

  const handleServiceDiscover = (serviceTitle) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('concierge-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${conciergeWelcomeImage})` }}
          ></div>
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-6xl text-nippon-warm-white font-serif">
            Your life, seamlessly arranged.
          </h1>
          <Button onClick={scrollToServices} className="mt-8 border border-nippon-gold text-nippon-gold">
            Explore Our Services <ArrowRight className="ml-2 inline-block w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Services */}
      <section id="concierge-services" className="bg-nippon-warm-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="bg-white shadow p-6">
              <service.icon className="w-10 h-10 text-nippon-gold mb-4" />
              <h3 className="text-xl font-serif">{service.title}</h3>
              <p className="text-nippon-gray">{service.description}</p>
              <Button onClick={() => handleServiceDiscover(service.title)} className="mt-4 border border-nippon-gold text-nippon-gold">
                {service.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}