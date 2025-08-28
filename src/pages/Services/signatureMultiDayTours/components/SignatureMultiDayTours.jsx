import { useState, useEffect } from "react";
import {
  MapPin,
  Users,
  CheckCircle,
  Star,
  Award,
  Clock,
  ArrowRight,
  Compass,
  Calendar,
  Car,
  Luggage,
  MapIcon,
  Camera,
  TreePine,
  Building2,
  Shield,
  Coffee,
  X,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  ChevronUp,
  Calculator,
  CreditCard,
  Check,
  ChevronLeft,
  Mountain,
  Flower2,
  Palette,
  Cable,
  Ship,
  Waves,
  Flame,
  History,
  Anchor,
  Route,
  Sparkles,
  Crown,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

/**
 * SignatureMultiDayTours.jsx
 *
 * Converted from TSX → JSX.
 * - Removed TypeScript-only type annotations.
 * - Fixed variable naming (tours variable used by handlers).
 * - Preserves UI structure and styling classes.
 *
 * Save as: SignatureMultiDayTours.jsx
 */

export default function SignatureMultiDayTours() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    guestCount: "",
    selectedTour: "",
    destinationsOfInterest: "",
    travelStyle: "",
    specialRequests: "",
  });

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    // call once to initialize
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tours data (renamed to `tours` from original `setTours`)
  const tours = [
    {
      id: "golden-route",
      name: "The 7-Day Golden Route",
      route: "Tokyo → Hakone → Kyoto",
      summary:
        "A week of iconic highlights — temples, tea gardens, and scenic rides on Japan's bullet train. Ideal for first-time luxury travelers.",
      highlights: [
        "Bullet Train Experience",
        "Kyoto Temple Districts",
        "Hakone Hot Springs",
        "Tokyo Modern Culture",
      ],
      duration: "7 Days / 6 Nights",
      destinations: "3 Major Cities",
      image:
        "https://images.unsplash.com/photo-1681862417657-e5b9bfefea53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb2t5byUyMEt5b3RvJTIwZ29sZGVuJTIwcm91dGUlMjBKYXBhbiUyMHRyYXZlbHxlbnwxfHx8fDE3NTU3NTM3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "essence-japan",
      name: "The 10-Day Essence of Japan",
      route: "Tokyo → Mt. Fuji → Kyoto → Nara",
      summary:
        "A deeper immersion into Japan's spiritual sites and artistic heritage — with refined pacing and handpicked cultural experiences.",
      highlights: [
        "Mt. Fuji Views",
        "Nara Deer Park",
        "Spiritual Temples",
        "Cultural Workshops",
      ],
      duration: "10 Days / 9 Nights",
      destinations: "4 UNESCO Sites",
      image:
        "https://images.unsplash.com/photo-1719239488015-fc29a74ab22c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMGVzc2VuY2UlMjB0ZW1wbGVzJTIwZ2FyZGVucyUyMGN1bHR1cmFsfGVufDF8fHx8MTc1NTc1Mzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "imperial-circle",
      name: "The 14-Day Imperial Circle",
      route: "Tokyo → Hakone → Kyoto → Hiroshima → Osaka",
      summary:
        "A grand, privately guided voyage through ancient capitals and modern cities, bridging samurai history with Japanese innovation.",
      highlights: [
        "Imperial Palaces",
        "Hiroshima Peace Memorial",
        "Osaka Culinary Scene",
        "Private Guide Access",
      ],
      duration: "14 Days / 13 Nights",
      destinations: "5 Imperial Cities",
      image:
        "https://images.unsplash.com/photo-1728200697459-b9296ccf9773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMGltcGVyaWFsJTIwcGFsYWNlJTIwY3VsdHVyYWwlMjBoZXJpdGFnZXxlbnwxfHx8fDE3NTU3NTM3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const testimonials = [
    {
      name: "Catherine Williams",
      location: "London",
      rating: 5,
      text: "The 10-day Essence tour was phenomenal. Every detail was perfectly orchestrated, from the ryokan stays to the private temple visits. Nippon Imperial created memories that will last a lifetime.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Robert Chen",
      location: "New York",
      rating: 5,
      text: "Our 14-day Imperial Circle exceeded every expectation. The custom itinerary perfectly balanced our interests in history, culture, and cuisine. Exceptional service from start to finish.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Elena Rodriguez",
      location: "Madrid",
      rating: 5,
      text: "The 7-day Golden Route was the perfect introduction to Japan. Every moment was thoughtfully planned, creating an immersive cultural experience that felt both luxurious and authentic.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  // Handlers
  const handleTourRequest = (tourId) => {
    setSelectedTour(tourId);

    const selectedTourData = tours.find((tour) => tour.id === tourId);
    setFormData({
      ...formData,
      selectedTour: selectedTourData?.name || tourId,
    });

    setShowRequestModal(true);
  };

  const handleCustomRequest = () => {
    setSelectedTour("custom");
    setFormData({
      ...formData,
      selectedTour: "Custom Itinerary",
    });
    setShowRequestModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In real app, send to backend/CRM
    console.log("Tour request submitted:", formData);
    setShowRequestModal(false);
    // Show confirmation to user
    try {
      alert("Your tour request has been submitted!");
    } catch (err) {
      // graceful fallback in non-browser environments
      console.log("Submission confirmation could not be shown via alert.");
    }
  };

  const scrollToTours = () => {
    const el = document.getElementById("tour-options");
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Small presentational subcomponents to keep file self-contained
  function RatingStars({ value }) {
    const stars = [];
    for (let i = 0; i < (value || 0); i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-nippon-gold text-nippon-gold" />
      );
    }
    return <div className="flex items-center space-x-1">{stars}</div>;
  }

  function TourBadge({ children }) {
    return (
      <Badge className="bg-nippon-gold text-nippon-black text-luxury-xs">
        {children}
      </Badge>
    );
  }

  function DecorativeDivider() {
    return (
      <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto" />
    );
  }

  // Render
  return (
    <div className="relative">
      {/* Progress Bar - Fixed Top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-nippon-black/20">
        <div
          className="h-full bg-gradient-to-r from-nippon-gold via-nippon-gold-bright to-nippon-gold transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Request Form Modal */}
      <Dialog open={showRequestModal} onOpenChange={setShowRequestModal}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-0 bg-nippon-warm-white">
          <div className="relative">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-nippon-warm-white border-b border-nippon-border shadow-sm">
              <div className="px-6 py-4">
                <DialogHeader>
                  <DialogTitle className="text-luxury-xl text-nippon-black font-serif text-left">
                    Request Your Journey
                  </DialogTitle>
                  <DialogDescription className="text-luxury-sm text-nippon-gray font-sans text-left">
                    Share your travel vision and we'll craft the perfect
                    itinerary
                  </DialogDescription>
                </DialogHeader>

                {/* Selected Tour Summary */}
                {formData.selectedTour && (
                  <div className="mt-4 bg-nippon-gold/10 px-4 py-3 rounded border-l-3 border-nippon-gold">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Route className="w-4 h-4 text-nippon-gold" />
                        <div>
                          <span className="text-luxury-sm text-nippon-black font-serif">
                            {formData.selectedTour}
                          </span>
                          <span className="text-luxury-xs text-nippon-gray font-sans ml-2">
                            • Multi-Day Experience
                          </span>
                        </div>
                      </div>
                      <Button
                        type="button"
                        onClick={() => setShowRequestModal(false)}
                        className="p-1 bg-transparent hover:bg-nippon-gray/10 text-nippon-gray hover:text-nippon-black transition-colors"
                        title="Close request form"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form
                onSubmit={handleFormSubmit}
                className="max-w-3xl mx-auto space-y-6"
              >
                {/* Contact Information */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Contact Information
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      How can our concierge team reach you?
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-nippon-black font-serif flex items-center"
                      >
                        Full Name{" "}
                        <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="enhanced-luxury-input"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-nippon-black font-serif flex items-center"
                      >
                        Email Address{" "}
                        <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="enhanced-luxury-input"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-nippon-black font-serif flex items-center"
                    >
                      Phone Number{" "}
                      <span className="text-nippon-gray-light text-luxury-xs ml-1">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="enhanced-luxury-input"
                      placeholder="+1 (555) 123-4567 or international format"
                    />
                  </div>
                </div>

                {/* Travel Preferences */}
                <div className="bg-nippon-warm-white/80 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Travel Preferences
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      Help us understand your perfect journey
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="travelDates"
                        className="text-nippon-black font-serif"
                      >
                        Preferred Travel Dates
                      </Label>
                      <Input
                        id="travelDates"
                        value={formData.travelDates}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            travelDates: e.target.value,
                          })
                        }
                        className="enhanced-luxury-input"
                        placeholder="March 2024 or specific dates"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="guestCount"
                        className="text-nippon-black font-serif"
                      >
                        Number of Travelers
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, guestCount: value })
                        }
                      >
                        <SelectTrigger className="enhanced-luxury-input">
                          <SelectValue placeholder="Select number of travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Traveler{num > 1 ? "s" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="travelStyle"
                      className="text-nippon-black font-serif"
                    >
                      Travel Style / Pace
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, travelStyle: value })
                      }
                    >
                      <SelectTrigger className="enhanced-luxury-input">
                        <SelectValue placeholder="Select your preferred travel style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relaxed">
                          Relaxed & Leisurely
                        </SelectItem>
                        <SelectItem value="moderate">Moderate Pace</SelectItem>
                        <SelectItem value="active">
                          Active & Comprehensive
                        </SelectItem>
                        <SelectItem value="cultural">
                          Cultural Immersion Focus
                        </SelectItem>
                        <SelectItem value="luxury">
                          Ultra-Luxury Experience
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Journey Details
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      Tell us about your dream trip to Japan
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="destinationsOfInterest"
                      className="text-nippon-black font-serif"
                    >
                      Destinations of Interest
                    </Label>
                    <Textarea
                      id="destinationsOfInterest"
                      value={formData.destinationsOfInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          destinationsOfInterest: e.target.value,
                        })
                      }
                      className="enhanced-luxury-input min-h-[100px]"
                      placeholder="Tokyo, Kyoto, Mt. Fuji, Hiroshima, specific temples, hidden gems..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="specialRequests"
                      className="text-nippon-black font-serif"
                    >
                      Special Interests & Requests
                    </Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialRequests: e.target.value,
                        })
                      }
                      className="enhanced-luxury-input min-h-[120px]"
                      placeholder="Cultural workshops, culinary experiences, art interests, historical sites, accessibility needs, celebration occasions..."
                    />
                  </div>
                </div>

                {/* Selected Tour Confirmation */}
                {formData.selectedTour && (
                  <div className="bg-nippon-gold/5 p-6 rounded-lg border-2 border-nippon-gold/20 space-y-3">
                    <div className="border-b border-nippon-gold/20 pb-2">
                      <h3 className="text-luxury-lg text-nippon-black font-serif mb-1 flex items-center">
                        <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                        Selected Experience
                      </h3>
                    </div>

                    <div className="bg-nippon-warm-white p-4 rounded border border-nippon-gold/30">
                      <Label className="text-luxury-sm text-nippon-black font-serif">
                        Journey Type
                      </Label>
                      <p className="text-luxury-sm text-nippon-black font-sans mt-1">
                        {formData.selectedTour}
                      </p>
                      {formData.selectedTour === "Custom Itinerary" && (
                        <p className="text-luxury-xs text-nippon-gray font-sans mt-2 italic">
                          Our specialists will create a completely bespoke
                          experience based on your preferences
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4 space-y-3">
                  <Button
                    type="submit"
                    disabled={!formData.name || !formData.email}
                    className="group relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-6 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                    style={{
                      backdropFilter: "blur(20px)",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span className="tracking-wider font-medium">
                        Submit Your Request
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>

                  <p className="text-luxury-xs text-nippon-gray font-sans text-center">
                    Our concierge team will respond within 24 hours to begin
                    planning your journey. No commitment required.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1748878665715-55296eaea53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMG11bHRpJTIwZGVzdGluYXRpb24lMjBjb2xsYWdlJTIwTXQlMjBGdWppJTIwdGVtcGxlfGVufDF8fHx8MTc1NTc1Mzc1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sweeping Japan journey - Mt. Fuji, temples, and cultural landscapes"
            className="w-full h-full object-cover scale-110"
            style={{
              filter: "brightness(0.7) contrast(1.1) saturate(1.2)",
              animation: "cinematicZoom 30s ease-in-out infinite alternate",
            }}
          />

          <div
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 40% 60%, rgba(212, 175, 55, 0.15) 0%, rgba(26, 26, 45, 0.1) 40%, transparent 80%)",
              animation: "gradientMove 40s ease-in-out infinite",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-nippon-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/50 via-nippon-black/20 to-nippon-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/40 via-transparent to-nippon-black/30 z-10" />

        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-nippon-gold opacity-5 blur-3xl z-10" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-nippon-gold-bright opacity-4 blur-3xl z-10" />

        <div
          className="absolute inset-0 z-15"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        />

        <div
          className="relative z-20 max-w-6xl mx-auto px-8 pt-[70px]"
          data-scroll-reveal
        >
          <div className="max-w-4xl text-center">
            <h1
              className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
              style={{
                textShadow:
                  "0 4px 32px rgba(0, 0, 0, 0.9), 0 2px 16px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.3)",
              }}
            >
              Signature Multi-Day Tours
            </h1>

            <DecorativeDivider />

            <div className="space-y-12 max-w-3xl mx-auto">
              <p
                className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed text-center"
                style={{
                  textShadow:
                    "0 4px 24px rgba(0, 0, 0, 0.9), 0 2px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)",
                }}
              >
                Expertly crafted itineraries across Japan's most iconic regions
                — with luxury, depth, and cultural connection at every turn.
              </p>

              <div className="grid grid-cols-3 gap-8 py-8">
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    3
                  </div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">
                    Curated Journeys
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    14
                  </div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">
                    Days Maximum
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    ∞
                  </div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">
                    Custom Options
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <Button
                onClick={scrollToTours}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <Route className="w-4 h-4" />
                  <span className="tracking-wider font-medium">
                    Begin Your Journey
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Introduction */}
      <section className="relative bg-nippon-warm-white section-padding-compact overflow-hidden">
        <div
          className="relative z-10 max-w-4xl mx-auto content-padding text-center"
          data-scroll-reveal
        >
          <div className="space-y-12">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Sparkles className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>

            <div className="space-y-8 max-w-3xl mx-auto">
              <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                Each of our multi-day tours is a curated experience — balancing
                iconic landmarks with off-the-beaten-path immersion.
              </p>

              <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                Whether you're exploring for 7, 10, or 14 days, we design your
                route with precision, purpose, and personalization.
              </p>

              <p className="text-luxury-lg text-nippon-gold font-serif italic">
                Prefer a fully tailored itinerary? Our concierge will craft one
                from scratch — built around your rhythm, interests, and pace.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Crown className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  Luxury Accommodations
                </div>
              </div>
              <div className="text-center">
                <Route className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  Expert Routing
                </div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  Private Guides
                </div>
              </div>
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  Exclusive Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Set Tours Section */}
      <section
        id="tour-options"
        className="relative bg-nippon-black section-padding overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Signature Journeys
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Choose from our expertly designed multi-day experiences, each
              crafted for different depths of exploration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {tours.map((tour, index) => (
              <Card
                key={tour.id}
                className="group relative bg-nippon-warm-white hover:shadow-luxury-hover transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold"
                data-scroll-reveal
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent" />

                  <div className="absolute top-4 right-4">
                    <TourBadge>{tour.duration}</TourBadge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-nippon-black/80 text-nippon-warm-white text-luxury-xs backdrop-blur-sm">
                      {tour.destinations}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <CardHeader className="p-0">
                    <CardTitle className="text-luxury-xl text-nippon-black font-serif leading-tight">
                      {tour.name}
                    </CardTitle>
                    <p className="text-luxury-sm text-nippon-gold font-serif italic">
                      {tour.route}
                    </p>
                  </CardHeader>

                  <p className="text-luxury-base text-nippon-gray leading-relaxed font-sans">
                    {tour.summary}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-luxury-sm text-nippon-black font-serif">
                      Journey Highlights:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tour.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-nippon-gold flex-shrink-0" />
                          <span className="text-luxury-xs text-nippon-gray font-sans">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleTourRequest(tour.id)}
                    className="group relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-sm px-4 py-3 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                    style={{
                      backdropFilter: "blur(10px)",
                      backgroundColor: "rgba(248, 246, 240, 0.1)",
                    }}
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-2 text-nippon-gold group-hover:text-nippon-black">
                      <span className="tracking-wider font-medium">
                        Request This Journey
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Itinerary Block */}
      <section className="relative bg-nippon-warm-white section-padding-compact overflow-hidden">
        <div
          className="relative z-10 max-w-4xl mx-auto content-padding text-center"
          data-scroll-reveal
        >
          <div className="bg-nippon-gold/5 p-12 rounded-lg border-2 border-nippon-gold/20 space-y-8">
            <div className="space-y-6">
              <Crown className="w-16 h-16 text-nippon-gold mx-auto" />

              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
                Prefer a fully bespoke experience?
              </h2>

              <p className="text-luxury-xl text-nippon-gray leading-relaxed max-w-2xl mx-auto font-sans">
                Let our Japan travel specialists create a private journey just
                for you — complete with accommodations, guides, rail passes,
                luxury transport, and exclusive access.
              </p>
            </div>

            <Button
              onClick={handleCustomRequest}
              className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
              style={{
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative flex items-center space-x-3">
                <Sparkles className="w-4 h-4" />
                <span className="tracking-wider font-medium">
                  Begin Your Custom Consultation
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>

            <p className="text-luxury-sm text-nippon-gray-light font-sans italic">
              Need inspiration? Our travel specialists will guide you through
              all possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="relative bg-nippon-black section-padding-compact overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight">
              Extraordinary Journeys
            </h2>
            <p className="text-luxury-lg text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Discover how our multi-day experiences create lasting memories for
              discerning travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-nippon-warm-white border-l-4 border-nippon-gold shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
                data-scroll-reveal
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <RatingStars value={testimonial.rating} />
                  </div>

                  <p className="text-luxury-base text-nippon-gray font-sans leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center space-x-3 pt-4 border-t border-nippon-border">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-luxury-base text-nippon-black font-serif">
                        {testimonial.name}
                      </p>
                      <p className="text-luxury-sm text-nippon-gray font-sans">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Extra helper sections (footer, small FAQ, extra placeholders) --- */}
      <section className="relative bg-nippon-warm-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-luxury-lg font-serif text-nippon-black">
                Contact
              </h3>
              <p className="text-luxury-sm text-nippon-gray mt-2">
                Email: concierge@nippon.example
              </p>
              <p className="text-luxury-sm text-nippon-gray">
                Phone: +81 3-0000-0000
              </p>
            </div>
            <div>
              <h3 className="text-luxury-lg font-serif text-nippon-black">
                Quick Links
              </h3>
              <ul className="mt-3 space-y-2 text-luxury-sm text-nippon-gray">
                <li>
                  <a href="#tour-options" className="underline">
                    Signature Journeys
                  </a>
                </li>
                <li>
                  <a href="#contact" className="underline">
                    Contact Concierge
                  </a>
                </li>
                <li>
                  <a href="#faq" className="underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-luxury-lg font-serif text-nippon-black">
                Follow
              </h3>
              <p className="text-luxury-sm text-nippon-gray mt-2">
                Instagram • Facebook • LinkedIn
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-nippon-black py-8 text-center">
        <div className="max-w-4xl mx-auto text-luxury-sm text-nippon-gray">
          © {new Date().getFullYear()} Nippon Imperial Tours — All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
