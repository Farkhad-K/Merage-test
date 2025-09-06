import React from "react";
import { Award, Users, Globe, Heart, Briefcase, GraduationCap } from "lucide-react";

export default function TeamExpertise() {
  const expertise = [
    {
      icon: GraduationCap,
      title: "Cultural Expertise",
      description:
        "Our team combines decades of Japanese cultural study with international luxury hospitality experience.",
      credentials: [
        "Master's degrees in Japanese Studies",
        "15+ years living in Japan",
        "Certified cultural interpreters",
        "Fluent in Japanese & English",
      ],
    },
    {
      icon: Briefcase,
      title: "Luxury Hospitality",
      description:
        "Extensive background in premium travel and concierge services for discerning international clientele.",
      credentials: [
        "Former Four Seasons & Ritz-Carlton",
        "Certified luxury travel specialists",
        "Private client management",
        "International hospitality awards",
      ],
    },
    {
      icon: Heart,
      title: "Omotenashi Philosophy",
      description:
        "Deep understanding of Japanese hospitality principles through formal training and cultural immersion.",
      credentials: [
        "Traditional tea ceremony certification",
        "Japanese hospitality institute graduate",
        "Cultural ambassador recognition",
        "Meditation & mindfulness practice",
      ],
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising standards in every detail of your journey",
    },
    {
      icon: Users,
      title: "Discretion",
      description: "Absolute privacy and confidentiality for our valued clients",
    },
    {
      icon: Globe,
      title: "Authenticity",
      description: "Genuine cultural experiences beyond tourist attractions",
    },
  ];

  return (
    <section className="relative bg-nippon-rich-charcoal section-padding overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.08'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto content-padding">
        {/* Section header */}
        <div className="text-center mb-20" data-scroll-reveal>
          <h2 className="text-luxury-4xl text-nippon-pearl font-serif mb-6 text-with-elegant-shadow">
            Our Foundation
            <br />
            <span className="text-nippon-pure-gold">of Excellence</span>
          </h2>
          <div className="gold-divider h-px w-32 mx-auto mb-8"></div>
          <p className="text-luxury-base text-nippon-platinum-white/70 max-w-4xl mx-auto leading-relaxed font-sans">
            Built on decades of Japanese cultural expertise and international luxury hospitality experience, we bring
            authentic omotenashi to discerning travelers worldwide.
          </p>
        </div>

        {/* Team Expertise Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {expertise.map((expert, index) => {
            const Icon = expert.icon;
            return (
              <div
                key={index}
                className="group relative bg-nippon-pearl p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-500 warm-white-card-secondary"
                data-scroll-reveal
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gold accent icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-nippon-pure-gold/10 border-2 border-nippon-pure-gold flex items-center justify-center group-hover:bg-nippon-pure-gold transition-all duration-500 gold-glow">
                    <Icon className="w-8 h-8 text-nippon-pure-gold group-hover:text-nippon-obsidian transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-luxury-xl text-nippon-obsidian font-serif text-with-black-shadow">
                    {expert.title}
                  </h3>

                  <p className="text-luxury-sm text-nippon-midnight leading-relaxed font-sans">
                    {expert.description}
                  </p>

                  {/* Credentials list */}
                  <div className="pt-4">
                    <ul className="space-y-2">
                      {expert.credentials.map((credential, credIndex) => (
                        <li key={credIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-nippon-pure-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-nippon-soft-charcoal font-sans text-luxury-xs leading-relaxed">
                            {credential}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subtle hover accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-nippon-pure-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div
          className="bg-nippon-pearl mx-auto max-w-6xl shadow-luxury-hover p-12 lg:p-16 relative overflow-hidden"
          data-scroll-reveal
        >
          {/* Subtle ornamental corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-nippon-pure-gold/30"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-nippon-pure-gold/30"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-nippon-pure-gold/30"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-nippon-pure-gold/30"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-luxury-3xl text-nippon-obsidian font-serif mb-8">Our Guiding Principles</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const VIcon = value.icon;
                return (
                  <div key={index} className="space-y-4">
                    <div className="w-12 h-12 bg-nippon-pure-gold/10 border border-nippon-pure-gold mx-auto flex items-center justify-center">
                      <VIcon className="w-6 h-6 text-nippon-pure-gold" />
                    </div>
                    <h4 className="text-luxury-lg text-nippon-obsidian font-serif">{value.title}</h4>
                    <p className="text-luxury-sm text-nippon-midnight font-sans leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
