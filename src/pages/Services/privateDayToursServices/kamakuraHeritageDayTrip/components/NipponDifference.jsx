import { Shield, Star, Clock, Users, Sparkles, Award } from 'lucide-react';

export function NipponDifference() {
  const differences = [
    {
      icon: Shield,
      title: "Absolute Discretion",
      description: "Your privacy and confidentiality are paramount. We operate with the highest level of professional discretion.",
      highlight: "100% Confidential"
    },
    {
      icon: Star,
      title: "Exclusive Access",
      description: "Private temples, master craftsmen, Michelin-starred restaurants, and experiences unavailable to the general public.",
      highlight: "VIP Only"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock concierge service with immediate response times and seamless coordination across time zones.",
      highlight: "Always Available"
    },
    {
      icon: Users,
      title: "Cultural Expertise",
      description: "Our team combines deep Japanese cultural knowledge with international luxury service standards.",
      highlight: "Expert Guides"
    },
    {
      icon: Sparkles,
      title: "Personalized Curation",
      description: "Every experience is tailored to your preferences, creating unique moments that cannot be replicated.",
      highlight: "Bespoke Service"
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "We maintain the highest standards in every aspect, from transportation to accommodation to dining.",
      highlight: "Premium Standards"
    }
  ];

  return (
    <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
      {/* Clean background pattern */}
      <div className="absolute inset-0 opacity-2">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.02'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto content-padding">
        {/* Section header with generous whitespace */}
        <div className="text-center mb-24" data-scroll-reveal>
          <h2 className="text-luxury-6xl text-nippon-black font-serif mb-8 text-with-black-shadow">
            The Nippon Imperial
            <br />
            <span className="text-nippon-gold">Difference</span>
          </h2>
          <div className="gold-divider h-px w-32 mx-auto mb-12"></div>
          <p className="text-luxury-xl text-nippon-gray max-w-4xl mx-auto leading-relaxed font-sans">
            What sets us apart is not just what we do, but how we do it—with meticulous attention to detail, unwavering commitment to excellence, and genuine care for your experience.
          </p>
        </div>

        {/* Differences grid with clean spacing */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {differences.map((difference, index) => (
            <div
              key={index}
              className="group relative bg-nippon-white p-10 shadow-elegant hover:shadow-elegant-hover transition-all duration-500 warm-white-card-secondary"
              data-scroll-reveal
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gold accent icon */}
              <div className="mb-8">
                <div className="w-20 h-20 bg-nippon-gold/10 border-2 border-nippon-gold flex items-center justify-center group-hover:bg-nippon-gold transition-all duration-500 gold-glow">
                  <difference.icon className="w-10 h-10 text-nippon-gold group-hover:text-nippon-black transition-colors duration-500" />
                </div>
              </div>

              {/* Clean content layout */}
              <div className="space-y-6">
                {/* Gold highlight badge */}
                <div className="inline-block">
                  <span className="bg-nippon-gold/20 text-nippon-gold px-4 py-2 text-luxury-sm font-sans tracking-wide">
                    {difference.highlight}
                  </span>
                </div>

                <h3 className="text-luxury-2xl text-nippon-black font-serif text-with-black-shadow">
                  {difference.title}
                </h3>

                <p className="text-luxury-base text-nippon-gray leading-relaxed font-sans">
                  {difference.description}
                </p>
              </div>

              {/* Subtle hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Testimonial section with generous spacing */}
        <div className="bg-nippon-black p-16 shadow-luxury" data-scroll-reveal>
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-16 h-16 bg-nippon-gold mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-nippon-black" />
              </div>
            </div>
            
            <blockquote className="text-luxury-2xl text-nippon-warm-white font-serif italic mb-8 leading-relaxed text-with-gold-glow">
              "Nippon Imperial transformed our understanding of luxury travel. Every moment was orchestrated with such precision and care that it felt like being welcomed into an exclusive world we never knew existed."
            </blockquote>
            
            <div className="gold-divider h-px w-24 mx-auto mb-6"></div>
            
            <cite className="text-nippon-gold font-sans text-luxury-lg tracking-wide">
              Elizabeth & James Morrison
              <span className="block text-nippon-gray-light text-luxury-base mt-2">Private Cultural Tour, Kyoto</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}