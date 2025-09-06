// Components
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Image
import cultural from "../assets/culturalImage.png";

const culturalPrinciples = [
  {
    japanese: "おもてなし",
    romanji: "Omotenashi",
    english: "Heartfelt Hospitality",
    description:
      "The art of anticipating needs without expectation of recognition or reward.",
  },
  {
    japanese: "侘寂",
    romanji: "Wabi-Sabi",
    english: "Perfect Imperfection",
    description:
      "Finding profound beauty in transience, imperfection, and incomplete things.",
  },
  {
    japanese: "間",
    romanji: "Ma",
    english: "Purposeful Space",
    description:
      "The powerful use of emptiness and pause to create meaning and depth.",
  },
];

const Essence = () => {
  return (
    <section className="relative py-24 bg-nippon-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Moonlit Japanese temple representing the spiritual foundation of our origins"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/90 via-nippon-black/85 to-nippon-black/90"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20" data-scroll-reveal>
          <div data-stagger-container>
            <div
              className="flex items-center justify-center gap-4 mb-8"
              data-stagger
            >
              <div className="w-16 h-px bg-nippon-gold-muted/40"></div>
              <span className="text-nippon-gold-muted text-luxury-lg font-serif">
                起源
              </span>
              <div className="w-16 h-px bg-nippon-gold-muted/40"></div>
            </div>

            <h2
              className="text-luxury-4xl md:text-luxury-5xl text-nippon-white font-serif font-medium mb-6"
              data-stagger
            >
              Our Origins & Philosophy
            </h2>

            <p
              className="text-luxury-lg text-nippon-ivory max-w-3xl mx-auto leading-relaxed font-sans font-light"
              data-stagger
            >
              Born from the shared vision of hospitality veterans who recognised
              the need for something extraordinary—a bridge between discerning
              travelers and the authentic soul of Japan.
            </p>
          </div>
        </div>

        {/* Origins Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <div data-scroll-reveal>
            <div data-stagger-container className="space-y-8">
              <div data-stagger>
                <h3 className="text-luxury-2xl text-nippon-gold-refined font-serif font-medium mb-4">
                  A Shared Vision
                </h3>
                <p className="text-nippon-gray text-luxury-base leading-relaxed font-sans">
                  Nippon Imperial was born from the shared vision of a small
                  group of hospitality veterans and travel aficionados. After
                  years of crafting itineraries for discerning friends and
                  diplomats, they realised there was no single service that
                  combined concierge-level attention, private transport and
                  immersive cultural experiences.
                </p>
              </div>

              <div data-stagger>
                <h3 className="text-luxury-2xl text-nippon-gold-refined font-serif font-medium mb-4">
                  Imperial Heritage
                </h3>
                <p className="text-nippon-gray text-luxury-base leading-relaxed font-sans">
                  Inspired by Japan's imperial heritage and the meticulous
                  artistry of its craftsmen, we launched Nippon Imperial to
                  provide travellers with an unrivalled gateway into the
                  country's traditions, landscapes and innovations.
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Visual */}
          <div className="relative" data-scroll-reveal>
            <div className="relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src={cultural}
                alt="Traditional Japanese garden representing the meticulous artistry that inspired our founding"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/60 to-transparent"></div>

              {/* Cultural Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <blockquote className="text-nippon-white text-luxury-lg font-serif italic leading-relaxed">
                  "We saw the gap between ordinary travel and extraordinary
                  connection."
                </blockquote>
                <cite className="text-nippon-gold-muted text-luxury-sm font-sans mt-2 block">
                  — Founding Vision, Nippon Imperial
                </cite>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-nippon-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-nippon-gold/5 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Cultural Principles */}
        <div data-scroll-reveal>
          <div className="text-center mb-16">
            <h3 className="text-luxury-3xl text-nippon-white font-serif font-medium mb-4">
              Guiding Principles
            </h3>
            <p className="text-nippon-gray text-luxury-base max-w-2xl mx-auto">
              Our approach is rooted in timeless Japanese principles that
              transform experiences into profound cultural encounters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {culturalPrinciples.map((principle, index) => (
              <div key={index} className="text-center" data-scroll-reveal>
                <div className="mb-6">
                  <div className="text-nippon-gold text-4xl font-serif mb-2">
                    {principle.japanese}
                  </div>
                  <div className="text-nippon-gold-refined text-lg font-sans tracking-luxury uppercase mb-1">
                    {principle.romanji}
                  </div>
                  <h4 className="text-nippon-white text-luxury-xl font-serif">
                    {principle.english}
                  </h4>
                </div>
                <p className="text-nippon-gray text-luxury-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essence;
