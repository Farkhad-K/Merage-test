const differentiators = [
  {
    number: "01",
    title: "One Point of Contact",
    description: (
      <>
        <br />
        Seamless coordination through a single dedicated concierge team
      </>
    ),
    details:
      "No need to manage multiple vendors - we orchestrate every aspect of your journey",
  },
  {
    number: "02",
    title: "Bespoke Integration",
    description: (
      <>
        <br />
        Exclusive tours, luxury transport and 24/7 support perfectly combined
      </>
    ),
    details:
      "From private sushi masterclasses to helicopter transfers between ryokans",
  },
  {
    number: "03",
    title: "Curated Client Experience",
    description:
      "We limit clients served to ensure each itinerary receives dedicated attention",
    details:
      "Quality over quantity - every journey gets the time and care it deserves",
  },
  {
    number: "04",
    title: "Complete Luxury Ecosystem",
    description:
      "Personal shoppers, interpreters, and cultural experts at your service",
    details:
      "Seamless transitions from Tokyo sushi masters to secluded Kyoto ryokans",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-nippon-black overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-nippon-gold/10 via-transparent to-nippon-gold/5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20" data-scroll-reveal>
          <div data-stagger-container>
            <h2
              className="text-luxury-4xl md:text-luxury-5xl text-nippon-white font-serif font-medium mb-6"
              data-stagger
            >
              What Makes Us Different
            </h2>
            <div
              className="w-24 h-px bg-nippon-gold mx-auto mb-8"
              data-stagger
            ></div>
            <p
              className="text-luxury-lg text-nippon-ivory max-w-4xl mx-auto leading-relaxed font-sans font-light"
              data-stagger
            >
              Nippon Imperial is your one point of contact for a seamless
              journey. Unlike many travel agencies, we provide an integrated
              luxury experience that combines exclusivity with effortless
              coordination.
            </p>
          </div>
        </div>

        {/* Differentiator Cards */}
        <div className="grid lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="relative" data-scroll-reveal>
              {/* Connection Line */}
              {index < differentiators.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-nippon-gold/60 to-nippon-gold/20 transform translate-x-4"></div>
              )}

              <div className="luxury-card bg-nippon-charcoal/50 backdrop-blur-sm border border-nippon-gold/20 rounded-lg p-8 text-center hover:border-nippon-gold/40 transition-all duration-500">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-nippon-gold rounded-full flex items-center justify-center mx-auto">
                    <span className="text-nippon-black text-luxury-lg font-serif font-bold">
                      {item.number}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-nippon-gold/20 rounded-full blur-xl scale-150"></div>
                </div>

                {/* Content */}
                <h3 className="text-luxury-xl text-nippon-white font-serif font-medium mb-4">
                  {item.title}
                </h3>

                <p className="text-nippon-ivory text-luxury-base leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                <p className="text-nippon-gray text-luxury-sm leading-relaxed font-sans">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Description */}
        <div className="mt-20 text-center max-w-4xl mx-auto" data-scroll-reveal>
          <div data-stagger-container>
            <h3
              className="text-luxury-2xl text-nippon-gold-refined font-serif font-medium mb-6"
              data-stagger
            >
              Beyond Traditional Travel
            </h3>
            <p
              className="text-nippon-ivory text-luxury-base leading-relaxed mb-8 font-sans"
              data-stagger
            >
              We can whisk you from a private sushi masterclass in Tokyo to a
              secluded ryokan in Kyoto by limousine or helicopter, all while
              arranging a personal shopper or interpreter along the way. This
              seamless integration of luxury services sets us apart from
              conventional travel agencies.
            </p>
            <button className="imperial-button luxury-cta-button" data-stagger>
              Experience the Difference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
