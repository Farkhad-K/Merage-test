import { Car, Crown, MapPin, Users, Calendar, Shield, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import mercedesImage from 'figma:asset/9948d5089e04b0bae684a10345e9181d8241957c.png';
import mtFujiImage from 'figma:asset/a7d7becbfaac8671f61ce7e868f34db957f077b3.png';
import conciergeImage from 'figma:asset/caf22c6624cdfce91d85d85a56c79f8736c3d221.png';

export function Services() {
  const services = [
    {
      icon: Car,
      title: "Premium Chauffeur",
      subtitle: "Seamless Transportation",
      description: "Executive vehicles with professional drivers who understand the art of discretion and punctuality.",
      image: mercedesImage,
      features: ["Mercedes S-Class & BMW 7 Series", "Bilingual professional drivers", "Real-time journey coordination"]
    },
    {
      icon: Crown,
      title: "VIP Cultural Tours",
      subtitle: "Exclusive Experiences",
      description: "Private access to temples, gardens, and cultural sites unavailable to general visitors.",
      image: mtFujiImage,
      features: ["After-hours temple visits", "Master craftsman workshops", "Private cultural performances"]
    },
    {
      icon: MapPin,
      title: "Personal Concierge",
      subtitle: "24/7 Excellence",
      description: "Dedicated assistance for reservations, arrangements, and spontaneous requests throughout Japan.",
      image: conciergeImage,
      features: ["Michelin restaurant reservations", "Last-minute arrangements", "24/7 multilingual support"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = (serviceTitle) => {
    // This would typically navigate to a detailed service page
    // For now, we'll scroll to contact
    scrollToContact();
  };

  return (
    <section id="services" className="relative bg-nippon-warm-white section-padding overflow-hidden">
      {/* Clean background with subtle patterns */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto content-padding">
        {/* Mission Statement as Section Header */}
        <div className="text-center mb-20" data-scroll-reveal>
          <h2 className="text-luxury-5xl text-nippon-black font-serif mb-8 text-with-black-shadow">
            Our Mission
          </h2>
          <div className="gold-divider h-px w-32 mx-auto mb-12"></div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-luxury-2xl text-nippon-black font-serif leading-relaxed">
              At Nippon Imperial, we believe luxury is not just about lavishness—it is about feeling utterly cared for.
            </p>
            
            <p className="text-luxury-xl text-nippon-gray font-sans leading-relaxed">
              Our mission is to curate bespoke journeys, seamless transportation and discreet concierge services that embody the spirit of omotenashi and introduce you to Japan's most extraordinary experiences.
            </p>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-nippon-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden"
              data-scroll-reveal
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Minimal overlay */}
                <div className="absolute inset-0 bg-nippon-black/20 group-hover:bg-nippon-black/10 transition-colors duration-500"></div>
                
                {/* Gold accent icon */}
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 bg-nippon-gold/90 backdrop-blur-sm flex items-center justify-center shadow-gold">
                    <service.icon className="w-8 h-8 text-nippon-black" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 space-y-6">
                {/* Title and Subtitle */}
                <div className="space-y-2">
                  <h3 className="text-luxury-3xl text-nippon-black font-serif">
                    {service.title}
                  </h3>
                  <p className="text-luxury-lg text-nippon-gold font-serif italic">
                    {service.subtitle}
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-luxury-base text-nippon-gray leading-relaxed font-sans">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-nippon-gold rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-nippon-gray-dark font-sans text-luxury-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Enhanced Learn More CTA - Same prominence as main CTA */}
                <div className="pt-6">
                  <Button
                    onClick={() => handleLearnMore(service.title)}
                    className="group/btn relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                  >
                    {/* Elegant sweep effect */}
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                    
                    {/* Button content */}
                    <span className="relative flex items-center justify-center space-x-3">
                      <span className="tracking-wider font-medium uppercase">Learn More</span>
                      <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic CTA Section */}
        <div className="text-center" data-scroll-reveal>
          <div className="mb-12">
            <h3 className="text-luxury-4xl text-nippon-black font-serif mb-6 text-with-black-shadow">
              Ready to Experience Excellence?
            </h3>
            <p className="text-luxury-lg text-nippon-gray font-sans">
              Let our concierge team craft your perfect Japanese journey.
            </p>
          </div>
          
          {/* Gold accent CTA button (10%) */}
          <Button
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-12 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
          >
            {/* Elegant sweep effect */}
            <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            
            {/* Button content */}
            <span className="relative flex items-center space-x-3">
              <span className="tracking-wider font-medium">Begin Your Journey</span>
              <Crown className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}