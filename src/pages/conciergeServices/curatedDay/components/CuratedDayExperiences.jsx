// Libraries
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Award,
  Calendar,
  TreePine,
  Flower2,
  Building2,
} from "lucide-react";

// Components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Images
import cherryBlossomImage from "../assets/1.png";
import heroBackgroundImage from "../assets/2.png";
import { postCuratedDayAsync } from "../../../../untils/redux/curatedDaySlice";

const highlights = [
  {
    icon: Flower2,
    title: "Cherry Blossom Private Tours",
    description:
      "Intimate ceremonies and exclusive viewing spots away from crowds",
    image: cherryBlossomImage,
    premium: "Seasonal exclusivity",
  },
  {
    icon: TreePine,
    title: "Autumn Foliage Experiences",
    description:
      "Sacred temple grounds and mountain sanctuaries in peak autumn",
    image:
      "https://images.unsplash.com/photo-1602898794854-bc3bd4e96630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMGF1dHVtbiUyMGxhbnRlcm4lMjBwYXRod2F5fGVufDF8fHx8MTc1NTMyNTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    premium: "Private temple access",
  },
  {
    icon: Building2,
    title: "Temple & Shrine Rituals",
    description:
      "Participate in traditional ceremonies with cultural significance",
    image:
      "https://images.unsplash.com/photo-1698627152464-8d2627138673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwZmVzdGl2YWwlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NTUzMjUyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    premium: "Monk-guided ceremonies",
  },
  {
    icon: Calendar,
    title: "Heritage Town Explorations",
    description: "Artisan districts and cultural treasures with local masters",
    image:
      "https://images.unsplash.com/photo-1752089491090-79cfbdad61b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGhlcml0YWdlJTIwdG93biUyMHN0cmVldHxlbnwxfHx8fDE3NTUzMjUyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    premium: "Master artisan access",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share Your Vision",
    description:
      "Tell us your season and what inspires you. Nature, culture, or heritage—every season reveals Japan's soul.",
    icon: MapPin,
    timeframe: "Personalized consultation",
  },
  {
    step: "02",
    title: "We Curate Excellence",
    description:
      "Your concierge designs exclusive experiences with insider access, honoring Japan's traditions and natural rhythms.",
    icon: Star,
    timeframe: "Within 24 hours",
  },
  {
    step: "03",
    title: "Experience Imperial Service",
    description:
      "Travel in elegance while every detail is handled discreetly. Discover Japan's heritage through intimate encounters.",
    icon: CheckCircle,
    timeframe: "On your journey",
  },
];

export default function CuratedDayExperiences() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [numberOfGuest, setNumberOfGuest] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [seasonalInterest, setSeasonalInterest] = useState("");

  const handleOrder = () => {
    if (
      name &&
      email &&
      phoneNumber &&
      numberOfGuest &&
      preferredDate &&
      seasonalInterest
    ) {
      const curatedDayData = {
        fullName: name,
        email: email,
        additionalNotes: notes,
        numberOfGuests: Number(numberOfGuest),
        phoneNumber: phoneNumber,
        preferredDate: preferredDate,
        seasonalInterest: seasonalInterest,
      };

      dispatch(postCuratedDayAsync(curatedDayData))
        .unwrap()
        .then(() => {
          console.log("successful");
        })
        .catch((error) => alert(error));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Curated day experiences inquiry submitted");
  };

  const scrollToForm = () => {
    document
      .getElementById("experiences-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Hero Section - Seasonal Curated Experiences Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background - Cherry Blossom & Seasonal Theme */}
        <div className="absolute inset-0 z-0">
          {/* Primary cherry blossom temple scene - properly dimmed */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${heroBackgroundImage}')`,
              filter: "brightness(1.0) contrast(1.1) saturate(1.2)",
              animation: "cinematicZoom 18s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Kyoto autumn lantern pathway layer */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1602898794854-bc3bd4e96630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMGF1dHVtbiUyMGxhbnRlcm4lMjBwYXRod2F5fGVufDF8fHx8MTc1NTMyNTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
              filter: "brightness(0.4) blur(1px)",
              animation:
                "cinematicFloat 22s ease-in-out infinite alternate-reverse",
            }}
          ></div>

          {/* Traditional festival ceremony overlay */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1698627152464-8d2627138673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwZmVzdGl2YWwlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NTUzMjUyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
              filter: "brightness(0.3) blur(2px)",
              animation: "luxuryPulse 20s ease-in-out infinite",
            }}
          ></div>

          {/* Dynamic light streaks - reduced */}
          <div
            className="absolute inset-0 w-full h-full opacity-8"
            style={{
              background:
                "linear-gradient(45deg, transparent 20%, rgba(212, 175, 55, 0.06) 40%, transparent 60%)",
              animation: "cityLightStreaks 25s ease-in-out infinite",
            }}
          ></div>

          {/* Heritage town ambiance overlay - reduced */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-12"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1752089491090-79cfbdad61b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGhlcml0YWdlJTIwdG93biUyMHN0cmVldHxlbnwxfHx8fDE3NTUzMjUyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
              filter: "brightness(0.6) contrast(1.1)",
              animation: "cinematicFloat 30s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Gold warmth gradient - subtle */}
          <div
            className="absolute inset-0 w-full h-full opacity-6"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.12) 0%, transparent 60%)",
              animation: "gradientMove 35s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Professional overlays for text readability */}
        <div className="absolute inset-0 bg-nippon-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/40 via-nippon-black/30 to-nippon-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/40 via-transparent to-nippon-black/30 z-10"></div>

        {/* Luxury accent elements */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-nippon-gold opacity-5 blur-3xl z-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-3 blur-3xl z-10"></div>

        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-4 z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Content - Hero */}
        <div
          className="relative z-20 max-w-6xl mx-auto px-8"
          data-scroll-reveal
        >
          <div className="max-w-4xl text-center">
            {/* Luxury Badge */}
            <div className="inline-flex items-center space-x-2 bg-nippon-gold/10 backdrop-blur-sm border border-nippon-gold/30 px-6 py-2 mb-12">
              <Award className="w-4 h-4 text-nippon-gold" />
              <span className="text-nippon-gold font-serif text-luxury-sm tracking-wider">
                Seasonal Exclusivity
              </span>
            </div>

            {/* Main Tagline */}
            <h1
              className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
              style={{
                textShadow:
                  "0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.5)",
              }}
            >
              Seasons Shaped Into Journeys.
            </h1>

            {/* Gold divider */}
            <div className="h-px w-48 mx-auto mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold"></div>

            {/* Subtitle with metrics */}
            <div className="space-y-6 mb-16">
              <p
                className="text-luxury-xl text-nippon-warm-white font-sans leading-relaxed max-w-2xl mx-auto"
                style={{
                  textShadow:
                    "0 3px 8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                Discover Japan through its natural rhythms and cultural
                traditions — from fleeting cherry blossoms to exclusive temple
                ceremonies.
              </p>

              {/* Social proof metrics */}
              <div className="flex justify-center items-center space-x-8 text-nippon-gold">
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">4</span>
                  <span className="text-luxury-sm font-sans opacity-80">
                    Seasons
                  </span>
                </div>
                <div className="w-px h-8 bg-nippon-gold/30"></div>
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">50+</span>
                  <span className="text-luxury-sm font-sans opacity-80">
                    Exclusive Sites
                  </span>
                </div>
                <div className="w-px h-8 bg-nippon-gold/30"></div>
                <div className="text-center">
                  <span className="block text-luxury-lg font-serif">
                    Private
                  </span>
                  <span className="text-luxury-sm font-sans opacity-80">
                    Access
                  </span>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div>
              <Button
                onClick={scrollToForm}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-10 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                style={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <span className="tracking-wider font-medium">
                    Plan Your Experience
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
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
                Honoring Japan's Natural Rhythms
              </h2>

              <div className="space-y-6">
                <p className="text-luxury-xl text-nippon-black font-serif italic leading-relaxed">
                  Our curated day experiences are designed to honor Japan's
                  natural rhythms and cultural traditions.
                </p>

                <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                  From the fleeting beauty of spring blossoms to exclusive
                  temple visits, each journey is a rare glimpse into the heart
                  of Japan's living heritage. Experience seasonal ceremonies,
                  private temple access, and cultural encounters that reveal the
                  deeper spirit of Japan through intimate, expertly guided
                  moments.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid with Images */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-scroll-reveal
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-nippon-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
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
                <div className="p-8 text-center space-y-4">
                  {/* Title */}
                  <h3 className="text-luxury-xl text-nippon-black font-serif leading-tight">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-nippon-gray font-sans text-luxury-base leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Premium */}
                  {highlight.premium && (
                    <p className="text-nippon-gold font-serif text-luxury-sm">
                      {highlight.premium}
                    </p>
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

                {/* Timeframe */}
                {step.timeframe && (
                  <p className="text-nippon-gold font-serif text-luxury-sm">
                    {step.timeframe}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Inquiry Form Section */}
      <section
        id="experiences-form"
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
              Discover Japan in Season
            </h2>
            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-2xl mx-auto">
              Share your seasonal vision and we'll curate experiences that honor
              Japan's natural rhythms and cultural traditions.
            </p>
          </div>

          {/* Inquiry Form */}
          <div
            className="bg-nippon-white shadow-luxury p-12"
            data-scroll-reveal
          >
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-nippon-black font-sans">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
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
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="luxury-input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="guests"
                    className="text-nippon-black font-sans"
                  >
                    Number of Guests *
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    value={numberOfGuest}
                    onChange={(e) => setNumberOfGuest(e.target.value)}
                    min="1"
                    required
                    className="luxury-input"
                    placeholder="2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="dates"
                    className="text-nippon-black font-sans"
                  >
                    Preferred Date(s) *
                  </Label>
                  <Input
                    id="dates"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    required
                    className="luxury-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="seasonal-interest"
                    className="text-nippon-black font-sans"
                  >
                    Seasonal Interest *
                  </Label>
                  <Select
                    required
                    value={seasonalInterest}
                    onValueChange={(value) => setSeasonalInterest(value)}
                  >
                    <SelectTrigger className="luxury-input">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cherry-blossoms">
                        Cherry Blossoms
                      </SelectItem>
                      <SelectItem value="autumn-leaves">
                        Autumn Leaves
                      </SelectItem>
                      <SelectItem value="festivals">Festivals</SelectItem>
                      <SelectItem value="temples-shrines">
                        Temples & Shrines
                      </SelectItem>
                      <SelectItem value="heritage-towns">
                        Heritage Towns
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="requests"
                  className="text-nippon-black font-sans"
                >
                  Special Requests
                </Label>
                <Textarea
                  id="requests"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="luxury-input min-h-[120px] resize-none"
                  placeholder="Tell us about your cultural interests, seasonal preferences, accessibility needs, or any special arrangements we should know about..."
                />
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  onClick={handleOrder}
                  className="w-full group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
                >
                  <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="relative flex items-center justify-center space-x-3">
                    <Calendar className="w-5 h-5" />
                    <span className="tracking-wider font-medium">
                      Submit Experience Request
                    </span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </form>

            {/* Auto-confirmation note */}
            <div className="mt-8 p-6 bg-nippon-beige border-l-4 border-nippon-gold">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-nippon-gold mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-nippon-black font-sans text-luxury-sm leading-relaxed">
                    <strong>Thank you for your request:</strong> Your Nippon
                    Imperial concierge will contact you shortly to finalize your
                    seasonal journey.
                  </p>
                  <p className="text-nippon-gray font-sans text-luxury-xs leading-relaxed">
                    Our cultural experts will follow up within 24 hours with
                    curated seasonal experiences perfectly matched to your
                    interests and travel dates.
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
