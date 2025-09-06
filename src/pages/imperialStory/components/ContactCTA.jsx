// Libraries
import { useState } from "react";
import { Target, Car, Palette } from "lucide-react";

// Components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Images
import BG from "../assets/contactImage.png";

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const teamMembers = [
    {
      role: "Concierge Specialists",
      description:
        "Multilingual professionals with backgrounds in five‑star hospitality and luxury retail",
      icon: Target,
    },
    {
      role: "Expert Chauffeurs",
      description:
        "Licensed experts who navigate Japan's cities and countryside with grace and discretion",
      icon: Car,
    },
    {
      role: "Cultural Guides",
      description:
        "Scholars, chefs and artists who have spent decades honing their craft",
      icon: Palette,
    },
  ];

  const testimonials = [
    {
      quote:
        "Nippon Imperial transformed our anniversary trip into a once‑in‑a‑lifetime memory. Every detail was perfect.",
      author: "E. T.",
      location: "United States",
    },
    {
      quote:
        "From the moment we stepped off the plane, we felt like royalty. The team's knowledge and connections unlocked a side of Japan we never knew existed.",
      author: "T. S.",
      location: "Singapore",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <section className="relative py-24 bg-nippon-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-nippon-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-nippon-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Our Team Section */}
        <div className="mb-24">
          <div className="text-center mb-16" data-scroll-reveal>
            <div data-stagger-container>
              <h2
                className="text-luxury-4xl md:text-luxury-5xl text-nippon-black font-serif font-medium mb-6"
                data-stagger
              >
                Our Team
              </h2>
              <div
                className="w-24 h-px bg-nippon-gold mx-auto mb-8"
                data-stagger
              ></div>
              <p
                className="text-luxury-lg text-nippon-charcoal max-w-3xl mx-auto leading-relaxed font-sans"
                data-stagger
              >
                Together, we make your journey effortless through expertise,
                cultural understanding, and unwavering dedication to your
                comfort.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center" data-scroll-reveal>
                <div className="luxury-card bg-nippon-beige/30 p-8 rounded-lg border border-nippon-gold/20 hover:border-nippon-gold/40 transition-all duration-500">
                  <div className="text-4xl mb-4">
                    <member.icon className="w-10 h-10 mx-auto text-nippon-gold" />
                  </div>
                  <h3 className="text-luxury-lg text-nippon-black font-serif font-medium mb-4">
                    {member.role}
                  </h3>
                  <p className="text-nippon-charcoal text-luxury-base leading-relaxed font-sans">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CTA Content */}
          <div data-scroll-reveal>
            <div data-stagger-container>
              <h2
                className="text-luxury-4xl md:text-luxury-5xl text-nippon-black font-serif font-medium mb-6"
                data-stagger
              >
                Join Us
              </h2>

              <p
                className="text-luxury-lg text-nippon-charcoal leading-relaxed mb-8 font-sans"
                data-stagger
              >
                Experience Japan the way you've always imagined—personal,
                luxurious and deeply authentic. Contact our concierge today to
                start designing your Imperial journey.
              </p>

              <div className="space-y-6 mb-12" data-stagger>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-nippon-gold rounded-full mr-4"></div>
                  <span className="text-nippon-charcoal text-luxury-base font-sans">
                    Dedicated concierge consultation
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-nippon-gold rounded-full mr-4"></div>
                  <span className="text-nippon-charcoal text-luxury-base font-sans">
                    Bespoke itinerary crafted by experts
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-nippon-gold rounded-full mr-4"></div>
                  <span className="text-nippon-charcoal text-luxury-base font-sans">
                    Seamless luxury from start to finish
                  </span>
                </div>
              </div>

              {/* Strategic Gold CTA */}
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <button
                    className="imperial-button luxury-cta-button"
                    data-stagger
                  >
                    Start Your Imperial Journey
                  </button>
                </DialogTrigger>

                {/* Contact Form Modal */}
                <DialogContent className="max-w-3xl bg-nippon-white border border-nippon-gold/20 p-0 overflow-hidden">
                  <div className="p-8 md:p-12">
                    <DialogHeader className="text-center mb-8">
                      <DialogTitle className="text-nippon-black text-luxury-3xl font-serif font-medium mb-4">
                        Design Your Imperial Journey
                      </DialogTitle>
                      <DialogDescription className="text-nippon-charcoal text-luxury-base font-sans leading-relaxed max-w-md mx-auto">
                        Share your vision and we'll craft a bespoke Japanese
                        experience that exceeds your expectations.
                      </DialogDescription>
                    </DialogHeader>

                    {isFormSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-nippon-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-8 h-8 text-nippon-gold"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h3 className="text-nippon-black text-luxury-2xl font-serif mb-4">
                          Welcome to the Imperial Family
                        </h3>
                        <p className="text-nippon-charcoal text-luxury-base font-sans leading-relaxed max-w-md mx-auto">
                          Our concierge team will contact you within 24 hours to
                          begin crafting your extraordinary Japanese journey.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label className="text-nippon-charcoal text-luxury-sm font-sans uppercase tracking-wide mb-3 block">
                              Full Name *
                            </Label>
                            <Input
                              required
                              className="bg-nippon-beige/30 border border-nippon-gold/30 text-nippon-black placeholder:text-nippon-charcoal/50 font-sans text-luxury-base h-12 rounded-lg focus:border-nippon-gold/60 transition-colors duration-300"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <Label className="text-nippon-charcoal text-luxury-sm font-sans uppercase tracking-wide mb-3 block">
                              Email Address *
                            </Label>
                            <Input
                              type="email"
                              required
                              className="bg-nippon-beige/30 border border-nippon-gold/30 text-nippon-black placeholder:text-nippon-charcoal/50 font-sans text-luxury-base h-12 rounded-lg focus:border-nippon-gold/60 transition-colors duration-300"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        {/* Travel Preferences */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label className="text-nippon-charcoal text-luxury-sm font-sans uppercase tracking-wide mb-3 block">
                              Preferred Travel Date
                            </Label>
                            <Input
                              type="date"
                              className="bg-nippon-beige/30 border border-nippon-gold/30 text-nippon-black font-sans text-luxury-base h-12 rounded-lg focus:border-nippon-gold/60 transition-colors duration-300"
                            />
                          </div>
                          <div>
                            <Label className="text-nippon-charcoal text-luxury-sm font-sans uppercase tracking-wide mb-3 block">
                              Duration
                            </Label>
                            <Select>
                              <SelectTrigger className="bg-nippon-beige/30 border border-nippon-gold/30 text-nippon-black font-sans text-luxury-base h-12 rounded-lg focus:border-nippon-gold/60">
                                <SelectValue placeholder="Select duration" />
                              </SelectTrigger>
                              <SelectContent className="bg-nippon-white border border-nippon-gold/30">
                                <SelectItem value="3-5-days">
                                  3-5 Days
                                </SelectItem>
                                <SelectItem value="1-week">1 Week</SelectItem>
                                <SelectItem value="2-weeks">2 Weeks</SelectItem>
                                <SelectItem value="3-weeks">3 Weeks</SelectItem>
                                <SelectItem value="1-month">1 Month</SelectItem>
                                <SelectItem value="longer">Longer</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Experience Type & Locations */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label className="text-nippon-charcoal text-luxury-sm font-sans uppercase tracking-wide mb-3 block">
                              Experience Type
                            </Label>
                            <Select>
                              <SelectTrigger className="bg-nippon-beige/30 border border-nippon-gold/30 text-nippon-black font-sans text-luxury-base h-12 rounded-lg focus:border-nippon-gold/60">
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                              <SelectContent className="bg-nippon-white border border-nippon-gold/30">
                                <SelectItem value="cultural-immersion">
                                  Cultural Immersion
                                </SelectItem>
                                <SelectItem value="culinary-journey">
                                  Culinary Journey
                                </SelectItem>
                                <SelectItem value="luxury-hotels">
                                  Luxury Hotels
                                </SelectItem>
                                <SelectItem value="traditional-ryokan">
                                  Traditional Ryokan
                                </SelectItem>
                                <SelectItem value="spiritual-retreat">
                                  Spiritual Retreat
                                </SelectItem>
                                <SelectItem value="business-travel">
                                  Business Travel
                                </SelectItem>
                                <SelectItem value="family-adventure">
                                  Family Adventure
                                </SelectItem>
                                <SelectItem value="custom">
                                  Custom Experience
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-nippon-charcoal text-luxury-sm font-sans uppercase tracking-wide mb-3 block">
                              Desired Locations
                            </Label>
                            <Select>
                              <SelectTrigger className="bg-nippon-beige/30 border border-nippon-gold/30 text-nippon-black font-sans text-luxury-base h-12 rounded-lg focus:border-nippon-gold/60">
                                <SelectValue placeholder="Select locations" />
                              </SelectTrigger>
                              <SelectContent className="bg-nippon-white border border-nippon-gold/30">
                                <SelectItem value="tokyo-kyoto">
                                  Tokyo & Kyoto
                                </SelectItem>
                                <SelectItem value="tokyo">
                                  Tokyo Only
                                </SelectItem>
                                <SelectItem value="kyoto">
                                  Kyoto Only
                                </SelectItem>
                                <SelectItem value="osaka-kansai">
                                  Osaka & Kansai
                                </SelectItem>
                                <SelectItem value="hiroshima">
                                  Hiroshima
                                </SelectItem>
                                <SelectItem value="hakone-fuji">
                                  Hakone & Mt. Fuji
                                </SelectItem>
                                <SelectItem value="kanazawa">
                                  Kanazawa
                                </SelectItem>
                                <SelectItem value="multiple">
                                  Multiple Regions
                                </SelectItem>
                                <SelectItem value="flexible">
                                  I'm Flexible
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Special Requests */}
                        <div>
                          <Label className="text-nippon-charcoal text-luxury-sm font-sans uppercase tracking-wide mb-3 block">
                            Tell Us About Your Imperial Vision
                          </Label>
                          <Textarea
                            placeholder="Share your interests, special occasions, cultural preferences, accessibility needs, or any specific experiences you're dreaming of..."
                            rows={4}
                            className="bg-nippon-beige/30 border border-nippon-gold/30 text-nippon-black placeholder:text-nippon-charcoal/50 font-sans text-luxury-base rounded-lg focus:border-nippon-gold/60 transition-colors duration-300 resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-6">
                          <Button
                            type="submit"
                            className="bg-nippon-gold hover:bg-nippon-gold-refined text-nippon-black font-sans font-medium text-luxury-base px-12 py-4 rounded-lg transition-all duration-300 tracking-wide uppercase"
                          >
                            Begin My Imperial Journey
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Visual Element - Updated with Imperial Castle Image */}
          <div className="relative" data-scroll-reveal>
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img
                src={BG}
                alt="Majestic Japanese castle framed by delicate cherry blossoms - representing the beauty and elegance of your Imperial journey"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/60 to-transparent"></div>

              {/* Floating Imperial Promise Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-nippon-white/95 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-nippon-charcoal text-luxury-base font-serif italic leading-relaxed mb-3">
                  "Your Imperial journey begins with a single conversation."
                </p>
                <cite className="text-nippon-gold-muted text-luxury-sm font-sans">
                  — Nippon Imperial Promise
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
