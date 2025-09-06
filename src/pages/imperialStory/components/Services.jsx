// Libraries
import { useState } from "react";

// Components
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Images
import toriGateImage from "../assets/toriGateImage.jpg";
import carInteriorImage from "../assets/carInteriorImage.jpg";
import hotelBellImage from "../assets/hotelBellImage.jpg";

// Seasonal Images
import spring from "../assets/springImage.png";
import summer from "../assets/summerImage.png";
import autumn from "../assets/autumnImage.png";
import winter from "../assets/winterImage.png";

const missionPillars = [
  {
    title: "Bespoke Journeys",
    subtitle: "Tailored Experiences",
    description:
      "Every itinerary is crafted uniquely for you, reflecting your personal interests and desires for authentic Japanese experiences.",
    image: toriGateImage,
    alt: "Traditional torii gates pathway representing personalized spiritual and cultural journeys",
    features: [
      "Personalized cultural immersion",
      "Exclusive venue access",
      "Flexible scheduling",
    ],
    kanji: "旅",
  },
  {
    title: "Seamless Transportation",
    subtitle: "Effortless Movement",
    description:
      "Professional chauffeur services and luxury vehicles ensure every journey between destinations is comfortable and dignified.",
    image: carInteriorImage,
    alt: "Luxury vehicle interior with premium leather seating and modern amenities",
    features: [
      "Executive vehicle fleet",
      "Professional chauffeurs",
      "Punctual coordination",
    ],
    kanji: "移",
  },
  {
    title: "Discreet Concierge",
    subtitle: "Omotenashi Excellence",
    description:
      "Our dedicated team anticipates your needs with the timeless grace of Japanese hospitality, ensuring complete comfort.",
    image: hotelBellImage,
    alt: "Elegant hotel concierge bell representing attentive and discreet service",
    features: [
      "24/7 availability",
      "Cultural expertise",
      "Absolute discretion",
    ],
    kanji: "心",
  },
];

const seasonalExperiences = [
  {
    season: "Spring",
    kanji: "春",
    title: "Cherry Blossom Imperial",
    description:
      "Experience hanami season with exclusive access to private imperial gardens and centuries-old viewing traditions.",
    highlights: [
      "Private dawn viewing at Shinjuku Gyoen",
      "Traditional kaiseki beneath ancient sakura",
      "Personal poetry master for hanami composition",
      "Helicopter tour of Mount Fuji cherry groves",
    ],
    availability: "March 20 - May 5",
    exclusivity: "Limited to 8 guests annually",
    imageUrl: spring,
  },
  {
    season: "Summer",
    kanji: "夏",
    title: "Festival of Illumination",
    description:
      "Immerse in Japan's vibrant summer festivals with VIP access to the most prestigious matsuri celebrations.",
    highlights: [
      "Gion Matsuri private viewing pavilion",
      "Fireworks from exclusive Tokyo Bay yacht",
      "Master craftsman yukata fitting",
      "Temple blessing ceremonies",
    ],
    availability: "June 15 - August 31",
    exclusivity: "By invitation only",
    imageUrl: summer,
  },
  {
    season: "Autumn",
    kanji: "秋",
    title: "Maple Meditation Retreat",
    description:
      "Witness the transformation of Japanese landscapes in a journey of contemplation and artistic inspiration.",
    highlights: [
      "Private temple stays in Kyoto",
      "Guided meditation with zen masters",
      "Traditional art workshops",
      "Exclusive momiji viewing locations",
    ],
    availability: "September 20 - December 1",
    exclusivity: "Maximum 6 participants",
    imageUrl: autumn,
  },
  {
    season: "Winter",
    kanji: "冬",
    title: "Snow Country Serenity",
    description:
      "Discover the profound beauty of Japan's winter landscapes through luxury ryokan experiences and cultural immersion.",
    highlights: [
      "Private onsen in Hakone mountains",
      "Kaiseki dining in snow gardens",
      "Traditional pottery with master artisans",
      "Exclusive snow monkey encounters",
    ],
    availability: "December 15 - March 15",
    exclusivity: "Family groups of 4-8",
    imageUrl: winter,
  },
];

export default function Services() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <section className="relative py-24 bg-nippon-white overflow-hidden">
      {/* Section Header */}
      <div
        className="max-w-7xl mx-auto px-6 text-center mb-20"
        data-scroll-reveal
      >
        <div data-stagger-container>
          <h2
            className="text-luxury-4xl md:text-luxury-5xl text-nippon-black font-serif font-medium mb-6"
            data-stagger
          >
            Our Mission
          </h2>
          <div
            className="w-24 h-px bg-nippon-gold mx-auto mb-8"
            data-stagger
          ></div>
          <p
            className="text-luxury-lg text-nippon-charcoal max-w-4xl mx-auto leading-relaxed font-sans"
            data-stagger
          >
            At Nippon Imperial, we believe luxury is not just about
            lavishness—it is about feeling utterly cared for. Our mission is to
            curate bespoke journeys, seamless transportation and discreet
            concierge services that embody the spirit of omotenashi and
            introduce you to Japan's most extraordinary experiences.
          </p>
        </div>
      </div>

      {/* Mission Pillars Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {missionPillars.map((pillar, index) => (
            <div key={index} className="group" data-scroll-reveal>
              <div className="luxury-card bg-nippon-white border border-nippon-beige/50 rounded-lg overflow-hidden shadow-luxury hover:shadow-floating transition-all duration-500">
                {/* Pillar Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/50 to-transparent"></div>

                  {/* Japanese Character Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-nippon-gold/90 rounded-full flex items-center justify-center">
                    <span className="text-nippon-black font-serif text-lg">
                      {pillar.kanji}
                    </span>
                  </div>
                </div>

                {/* Pillar Content */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-luxury-2xl text-nippon-black font-serif font-medium mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-nippon-gold-muted font-serif italic text-luxury-base">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-nippon-charcoal text-luxury-base leading-relaxed mb-8 font-sans">
                    {pillar.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {pillar.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-nippon-charcoal text-luxury-sm font-sans"
                      >
                        <div className="w-2 h-2 bg-nippon-gold rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pillar CTA */}
                  <div className="text-center">
                    <button className="imperial-button text-luxury-sm px-8 py-3 border-2 border-nippon-gold-refined text-nippon-gold-refined hover:bg-nippon-gold-refined hover:text-nippon-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seasonal Experiences Section */}
      <div className="max-w-7xl mx-auto px-6" data-scroll-reveal>
        <div className="text-center mb-16">
          <div className="text-nippon-gold-muted text-sm tracking-imperial uppercase mb-4 font-sans">
            Seasonal Exclusives
          </div>
          <h3 className="text-luxury-3xl text-nippon-black font-serif font-medium mb-4">
            Four Seasons of Imperial Experiences
          </h3>
          <p className="text-nippon-charcoal text-luxury-base max-w-2xl mx-auto leading-relaxed">
            Each season reveals unique facets of Japanese culture, accessible
            only through our curated seasonal experiences that honor traditional
            timing and natural rhythms
          </p>
        </div>

        {/* Interactive Seasonal Experience Display */}
        <div className="relative">
          {/* Season Navigation */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-4 gap-2 p-2 bg-nippon-beige/50 rounded-lg border border-nippon-gold/20">
              {seasonalExperiences.map((experience, index) => (
                <button
                  key={index}
                  className={`px-6 py-4 transition-all duration-300 relative group ${
                    activeExperience === index
                      ? "text-nippon-gold bg-nippon-white rounded-md shadow-md"
                      : "text-nippon-charcoal hover:text-nippon-gold-muted"
                  }`}
                  onClick={() => setActiveExperience(index)}
                >
                  <div className="text-2xl font-serif mb-1">
                    {experience.kanji}
                  </div>
                  <div className="text-sm uppercase tracking-wide">
                    {experience.season}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Experience Content */}
          <div className="relative min-h-[400px]">
            {seasonalExperiences.map((experience, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === activeExperience
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-luxury-3xl font-serif text-nippon-black mb-4">
                        {experience.title}
                      </h4>
                      <p className="text-nippon-charcoal text-lg leading-relaxed mb-8">
                        {experience.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h5 className="text-nippon-gold text-lg font-sans tracking-refined uppercase mb-4">
                        Experience Highlights
                      </h5>
                      <ul className="space-y-3">
                        {experience.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-nippon-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-nippon-charcoal">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Availability & Exclusivity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-nippon-gold/20">
                      <div>
                        <div className="text-nippon-gold-muted text-sm uppercase tracking-wide mb-2">
                          Availability
                        </div>
                        <div className="text-nippon-black">
                          {experience.availability}
                        </div>
                      </div>
                      <div>
                        <div className="text-nippon-gold-muted text-sm uppercase tracking-wide mb-2">
                          Exclusivity
                        </div>
                        <div className="text-nippon-black">
                          {experience.exclusivity}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6">
                      <button className="imperial-button text-nippon-gold-refined border-nippon-gold-refined hover:bg-nippon-gold-refined hover:text-nippon-white">
                        Reserve {experience.season} Experience
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-[4/5] overflow-hidden rounded-lg bg-nippon-charcoal/20 border border-nippon-gold/10">
                      <ImageWithFallback
                        src={experience.imageUrl}
                        alt={`${experience.title} - Seasonal luxury experience in Japan`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Floating Season Character */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-nippon-gold/90 rounded-full flex items-center justify-center shadow-luxury">
                      <span className="text-nippon-black text-2xl font-serif">
                        {experience.kanji}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Limited Availability Notice */}
        <div className="mt-16 text-center">
          <div className="bg-nippon-beige/40 p-8 max-w-2xl mx-auto rounded-lg border border-nippon-gold/20">
            <div className="text-nippon-gold text-sm uppercase tracking-imperial mb-4">
              Exclusive Availability
            </div>
            <p className="text-nippon-charcoal leading-relaxed">
              Our seasonal experiences honor traditional Japanese timing and
              natural cycles. Each offering is carefully limited to preserve
              authenticity and ensure the most intimate cultural immersion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
