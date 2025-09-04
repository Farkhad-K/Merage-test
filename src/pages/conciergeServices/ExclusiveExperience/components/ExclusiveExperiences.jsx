// Libraries
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Crown,
  Mountain,
  Camera,
  Calendar,
  MapPin,
  Waves,
  Heart,
} from "lucide-react";

// Components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Images
import tokyoBridgeImage from "../assets/city.png";
import fireworksImage from "../assets/fireworks.png";
import helicopterFujiImage from "../assets/helicopter.png";
import coupleRomanticImage from "../assets/boyandgirl.png";
import { postExclusiveExperienceAsync } from "../../../../untils/redux/exclusiveExperienceSlice";

const highlights = [
  {
    icon: Crown,
    title: "Private Cultural Experiences",
    description:
      "Audience with revered masters and evening encounters with geiko in hidden sanctuaries",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
    badge: "Grand Masters",
  },
  {
    icon: Waves,
    title: "Aerial & Water Experiences",
    description:
      "Charter helicopters over Mt. Fuji, traditional yakatabune cruises in Tokyo Bay, and sunset yacht journeys near Enoshima",
    image: helicopterFujiImage,
    badge: "Cinematic Views",
  },
  {
    icon: Calendar,
    title: "Seasonal & Festival Experiences",
    description:
      "Design your visit with poetic timing — cherry blossom festivals, summer fireworks, and prefecture celebrations",
    image: fireworksImage,
    badge: "Seasonal Poetry",
  },
  {
    icon: Heart,
    title: "Celebrations & Surprises",
    description:
      "Proposals at ancient shrines, anniversary dinners on rooftops, birthday moments with floating candles on rivers",
    image: coupleRomanticImage,
    badge: "Milestone Moments",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share Your Dream",
    description:
      "Tell us the rare experience you wish to create — from cultural immersion to grand celebration.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "We Unlock Hidden Access",
    description:
      "Your concierge designs exclusive opportunities through our private network.",
    icon: Star,
  },
  {
    step: "03",
    title: "Live the Extraordinary",
    description:
      "Every detail is handled with precision and discretion, leaving you free to simply experience.",
    icon: CheckCircle,
  },
];

export default function ExclusiveExperiences() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [numberOfGuest, setNumberOfGuest] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredDates, setPreferredDates] = useState("");
  const [location, setLocation] = useState("");
  const [desiredExperience, setDesiredExperience] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOrder = () => {
    if (
      name &&
      email &&
      phoneNumber &&
      numberOfGuest &&
      preferredDates &&
      location &&
      desiredExperience
    ) {
      const exclusiveExperiencesData = {
        fullName: name,
        email: email,
        additionalNotes: notes,
        numberOfGuests: Number(numberOfGuest),
        phoneNumber: phoneNumber,
        preferredDates: preferredDates,
        location: location,
        desiredExperience: desiredExperience,
      };

      dispatch(postExclusiveExperienceAsync(exclusiveExperiencesData))
        .unwrap()
        .then(() => {
          console.log("successful");
        })
        .catch((error) => alert(error));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Form yuborilishini simulyatsiya qilish
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const scrollToForm = () => {
    document
      .getElementById("exclusive-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Hero Section - Exclusive Experiences Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Tokyo Bridge Twilight Scene Background */}
        <div className="absolute inset-0 z-0">
          {/* Primary Tokyo bridge twilight scene */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${tokyoBridgeImage}')`,
              filter: "brightness(0.8) contrast(1.05) saturate(1.1)",
              animation: "cinematicZoom 20s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Subtle helicopter overlay for depth */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-8"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90')`,
              filter: "brightness(0.3) blur(2px)",
              animation:
                "cinematicFloat 25s ease-in-out infinite alternate-reverse",
            }}
          ></div>

          {/* Tokyo bay golden hour enhancement */}
          <div
            className="absolute inset-0 w-full h-full opacity-5"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)",
              animation: "gradientMove 30s ease-in-out infinite",
            }}
          ></div>

          {/* Bridge illumination light streaks */}
          <div
            className="absolute inset-0 w-full h-full opacity-4"
            style={{
              background:
                "linear-gradient(135deg, transparent 30%, rgba(255, 215, 0, 0.08) 50%, transparent 70%)",
              animation: "cityLightStreaks 35s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Optimized overlays for Tokyo bridge twilight scene */}
        <div className="absolute inset-0 bg-nippon-black/25 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/20 via-transparent to-nippon-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/20 via-transparent to-nippon-black/15 z-10"></div>

        {/* Tokyo bay twilight accent elements */}
        <div className="absolute top-1/5 right-1/3 w-64 h-64 rounded-full bg-nippon-gold opacity-3 blur-3xl z-10"></div>
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 rounded-full bg-nippon-gold opacity-2 blur-3xl z-10"></div>

        {/* Minimal texture overlay for Tokyo bay depth */}
        <div
          className="absolute inset-0 opacity-2 z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' seed='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px",
          }}
        ></div>

        {/* Content - Hero - Sophisticated centered positioning */}
        <div
          className="relative z-20 max-w-7xl pt-[100px] mx-auto px-8 h-full flex items-center justify-center"
          data-scroll-reveal
        >
          <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center space-y-12">
            {/* Top Japanese character with positioning */}
            <div className="relative">
              <div className="text-nippon-gold text-luxury-2xl md:text-luxury-3xl font-serif tracking-[0.3em] opacity-75 mb-8">
                特別
              </div>

              {/* Subtle decorative lines */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-px bg-nippon-gold opacity-40"></div>
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-px bg-nippon-gold opacity-40"></div>
            </div>

            {/* Main headline with dramatic spacing */}
            <div className="space-y-6">
              <h1
                className="text-luxury-6xl md:text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif leading-[0.85] tracking-tight"
                style={{
                  textShadow:
                    "0 6px 16px rgba(0, 0, 0, 0.9), 0 3px 8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                <span className="text-nippon-warm-white">Moments Beyond </span>
                <span className="text-nippon-gold">Imagination</span>
              </h1>

              {/* Secondary line with different positioning */}
              <div className="relative mt-8">
                <h2
                  className="text-luxury-4xl md:text-luxury-5xl lg:text-luxury-6xl text-nippon-warm-white font-serif tracking-wide opacity-90"
                  style={{
                    textShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Exclusive Access
                </h2>

                {/* Decorative dot */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-nippon-gold opacity-60"></div>
              </div>
            </div>

            {/* Brand divider with sophisticated spacing */}
            <div className="flex items-center space-x-8 my-12">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-nippon-gold to-nippon-gold opacity-50"></div>
              <div className="text-nippon-gold text-luxury-sm font-serif tracking-[0.2em] uppercase opacity-80">
                Nippon Imperial
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-nippon-gold to-nippon-gold opacity-50"></div>
            </div>

            {/* Subtitle with constrained width but centered */}
            <div className="max-w-2xl">
              <p
                className="text-luxury-lg md:text-luxury-xl text-nippon-pearl font-sans leading-relaxed"
                style={{
                  textShadow:
                    "0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.8)",
                }}
              >
                From private helicopter tours over Mt. Fuji and Tokyo's
                illuminated skylines to once-in-a-lifetime encounters with
                cultural masters, each moment is bespoke, discreetly
                orchestrated, and elevated to its finest form.
              </p>
            </div>

            {/* CTA button with enhanced spacing */}
            <div className="pt-8">
              <Button
                onClick={scrollToForm}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-12 py-5 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: "blur(12px)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  textShadow: "0 2px 6px rgba(0, 0, 0, 0.9)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">
                    Create Your Moment
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Subtle bottom accent */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-2 opacity-40">
                <div className="w-px h-8 bg-nippon-gold"></div>
                <div className="w-1 h-1 bg-nippon-gold rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essence + Highlights Section */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        {/* Clean background pattern */}
        <div className="absolute inset-0 opacity-2">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          {/* Essence Text */}
          <div className="text-center mb-20" data-scroll-reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-12">
                Reserved for the Extraordinary
              </h2>

              <div className="space-y-6">
                <p className="text-luxury-xl text-nippon-black font-serif italic leading-relaxed">
                  Exclusive Experiences are reserved for those who wish to step
                  beyond the ordinary.
                </p>

                <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                  From private helicopter tours soaring over Mt. Fuji's sacred
                  peaks and Tokyo's neon-lit metropolitan sprawl to
                  once-in-a-lifetime encounters with cultural masters, Nippon
                  Imperial curates experiences that cannot be found elsewhere.
                  Each moment is bespoke, discreetly orchestrated, and elevated
                  to its finest form.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid with Images */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
            data-scroll-reveal
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-nippon-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-[530px]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-nippon-black/20 group-hover:bg-nippon-black/10 transition-colors duration-500"></div>

                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-nippon-gold/90 backdrop-blur-sm flex items-center justify-center shadow-gold">
                      <highlight.icon className="w-6 h-6 text-nippon-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-luxury-xl text-nippon-black font-serif leading-tight">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-nippon-gray font-sans text-luxury-base leading-relaxed mt-4">
                    {highlight.description}
                  </p>

                  {/* Badge - always bottom */}
                  {highlight.badge && (
                    <div className="text-nippon-gold font-serif text-sm uppercase tracking-wider mt-auto">
                      {highlight.badge}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          {/* Section Header */}
          <div className="text-center mb-20" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight mb-8">
              How It Works
            </h2>
            <div className="h-px w-24 mx-auto bg-nippon-gold"></div>
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative text-center space-y-8"
                data-scroll-reveal
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="relative">
                  <div className="mx-auto w-20 h-20 bg-nippon-gold flex items-center justify-center">
                    <span className="text-nippon-black font-serif text-luxury-2xl">
                      {step.step}
                    </span>
                  </div>

                  {/* Connecting line (except last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-nippon-gold via-nippon-gold/50 to-transparent"></div>
                  )}
                </div>

                {/* Icon */}
                <div className="mx-auto w-14 h-14 bg-nippon-warm-white/10 backdrop-blur-sm flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-nippon-gold" />
                </div>

                {/* Title */}
                <h3 className="text-luxury-2xl text-nippon-warm-white font-serif leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-nippon-gray-light font-sans text-luxury-base leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Inquiry Form Section */}
      <section
        id="exclusive-form"
        className="relative bg-nippon-warm-white section-padding overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-2">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-8">
              Your Extraordinary Awaits
            </h2>
            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-2xl mx-auto">
              Share your vision for an unforgettable moment, and our exclusive
              experience concierge will bring it to life with precision and
              discretion.
            </p>
          </div>

          {/* Inquiry Form */}
          <div
            className="bg-nippon-white shadow-luxury p-12"
            data-scroll-reveal
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-nippon-gold mx-auto mb-6" />
                <h3 className="text-luxury-2xl font-serif text-nippon-black mb-4">
                  Experience Request Received
                </h3>
                <p className="text-nippon-gray font-sans leading-relaxed">
                  Thank you for your exclusive experience request. Our concierge
                  will contact you within 4 hours to discuss your extraordinary
                  moment.
                  <br />
                  <br />
                  <strong>Request ID:</strong> EX-
                  {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-nippon-black font-sans"
                    >
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="luxury-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-nippon-black font-sans"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="luxury-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-nippon-black font-sans"
                    >
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="luxury-input"
                      placeholder="+81 (optional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="guests"
                      className="text-nippon-black font-sans"
                    >
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={numberOfGuest}
                      onChange={(e) => setNumberOfGuest(e.target.value)}
                      className="luxury-input"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="preferredDate"
                      className="text-nippon-black font-sans"
                    >
                      Preferred Date(s)
                    </Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="text"
                      value={preferredDates}
                      onChange={(e) => setPreferredDates(e.target.value)}
                      className="luxury-input"
                      placeholder="March 2025, flexible dates"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="location"
                      className="text-nippon-black font-sans"
                    >
                      Location Preference
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="luxury-input"
                      placeholder="Tokyo, Kyoto, Mt. Fuji area..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="desiredExperience"
                    className="text-nippon-black font-sans"
                  >
                    Desired Experience *
                  </Label>
                  <Textarea
                    id="desiredExperience"
                    name="desiredExperience"
                    value={desiredExperience}
                    onChange={(e) => setDesiredExperience(e.target.value)}
                    required
                    className="luxury-input min-h-[120px] resize-none w-full"
                    placeholder="Private geiko evening, Mt. Fuji helicopter tour, yakatabune cruise, cherry blossom festival, shrine proposal, rooftop anniversary dinner..."
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="specialNotes"
                    className="text-nippon-black font-sans"
                  >
                    Special Notes or Requests
                  </Label>
                  <Textarea
                    id="specialNotes"
                    name="specialNotes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="luxury-input min-h-[120px] resize-none w-full"
                    placeholder="Celebration details, seasonal preferences, cultural interests, photography requirements, special occasion needs, accessibility requirements..."
                  />
                </div>

                <div className="pt-6">
                  <Button
                    onClick={handleOrder}
                    type="submit"
                    className="w-full group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-3">
                      <Sparkles className="w-5 h-5" />
                      <span className="tracking-wider font-medium">
                        Submit Experience Request
                      </span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </form>
            )}

            {/* Auto-confirmation note */}
            <div className="mt-8 p-6 bg-nippon-beige border-l-4 border-nippon-gold">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-nippon-gold mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-nippon-black font-sans text-luxury-sm leading-relaxed">
                    <strong>Immediate Confirmation:</strong> You'll receive a
                    personalized response within 4 hours with your request ID
                    and next steps.
                  </p>
                  <p className="text-nippon-gray font-sans text-luxury-xs leading-relaxed">
                    Our exclusive experience team will work discreetly to
                    arrange every detail of your extraordinary moment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
