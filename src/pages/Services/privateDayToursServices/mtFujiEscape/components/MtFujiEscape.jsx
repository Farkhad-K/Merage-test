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

// Demo rasmlar (hozircha barchasi bir xil yo'lga ulangan)
import mtFujiNightImage from "../assets/home.png";
import sClassImage from "../assets/car1.png";
import vClassImage from "../assets/car2.png";
import alphardImage from "../assets/car3.png";
import hiaceImage from "../assets/car4.png";

// --------------------------------------------------------

export function MtFujiEscape() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [expandedItinerary, setExpandedItinerary] = useState(null);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourDate: "",
    pickupAddress: "",
    guestCount: "",
    luggageCount: "",
    specialNotes: "",
  });

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Price calculation
  useEffect(() => {
    if (selectedVehicle && formData.guestCount) {
      const basePrice =
        vehicles.find((v) => v.id === selectedVehicle)?.basePrice || 150000;
      const guestMultiplier = parseInt(formData.guestCount, 10) > 4 ? 1.2 : 1;
      setEstimatedPrice(Math.round(basePrice * guestMultiplier));
    }
  }, [selectedVehicle, formData.guestCount]);

  const itineraryHighlights = [
    {
      icon: Mountain,
      title: "Mt. Fuji 5th Station (Seasonal)",
      description:
        "Scenic mid-mountain viewpoint with forest trails and crisp alpine air.",
      detailedDescription:
        "Experience Japan's most sacred mountain up close at 2,300 meters above sea level. Walk through pristine forest trails, breathe the crisp alpine air, and enjoy unparalleled views across the Fuji Five Lakes region. This mid-mountain station offers the perfect balance of accessibility and authentic mountain atmosphere.",
      duration: "90 minutes",
      highlights: [
        "Alpine Forest Trails",
        "Mountain Observatory",
        "Sacred Mountain Views",
        "Fresh Mountain Air",
      ],
      image:
        "https://images.unsplash.com/photo-1736246147574-ea1ed1ddbaca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdCUyMEZ1amklMjA1dGglMjBzdGF0aW9uJTIwbW91bnRhaW58ZW58MXx8fHwxNzU1NjU1MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Coffee,
      title: "Oshino Hakkai",
      description: "A peaceful village of crystal-clear spring-fed ponds.",
      detailedDescription:
        "Discover this enchanting village where eight pristine spring-fed ponds create a mystical landscape. These crystal-clear waters, filtered through Mt. Fuji's volcanic rock over decades, maintain a constant temperature year-round. Stroll through this UNESCO World Heritage site and experience the pure tranquility of rural Japan.",
      duration: "75 minutes",
      highlights: [
        "Crystal Spring Ponds",
        "Traditional Village Architecture",
        "Sacred Water Sources",
        "Mountain Views",
      ],
      image:
        "https://images.unsplash.com/photo-1727803778186-b76e67ff81c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPc2hpbm8lMjBIYWtrYWklMjB2aWxsYWdlJTIwcG9uZHMlMjBKYXBhbnxlbnwxfHx8fDE3NTU2NTUzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Camera,
      title: "Chureito Pagoda",
      description:
        "Photograph Mt. Fuji from a hilltop shrine framed by cherry trees or autumn leaves.",
      detailedDescription:
        "Climb to one of Japan's most photographed viewpoints, where the five-story Chureito Pagoda creates a perfect frame for Mt. Fuji. This iconic spot offers breathtaking seasonal beauty - cherry blossoms in spring and vibrant maple leaves in autumn - making it a photographer's paradise and spiritual retreat.",
      duration: "60 minutes",
      highlights: [
        "Iconic Mt. Fuji Views",
        "Five-Story Pagoda",
        "Seasonal Beauty",
        "Photography Paradise",
      ],
      image:
        "https://images.unsplash.com/photo-1574236170880-fbbca132d83d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHVyZWl0byUyMFBhZ29kYSUyME10JTIwRnVqaSUyMGF1dHVtbnxlbnwxfHx8fDE3NTU2NTUzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Flower2,
      title: "Oishi Park",
      description: "Lakeside flower gardens with stunning Fuji views.",
      detailedDescription:
        "Wander through beautifully manicured flower gardens that bloom in vibrant seasonal displays, all set against the dramatic backdrop of Mt. Fuji and Lake Kawaguchiko. This peaceful park offers perfect spots for contemplation, photography, and experiencing the harmonious relationship between cultivated beauty and natural majesty.",
      duration: "45 minutes",
      highlights: [
        "Seasonal Flower Gardens",
        "Lake Kawaguchiko Views",
        "Mt. Fuji Backdrop",
        "Peaceful Walking Paths",
      ],
      image:
        "https://images.unsplash.com/photo-1719284633229-e583e5535457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPaXNoaSUyMFBhcmslMjBNdCUyMEZ1amklMjBmbG93ZXJzfGVufDF8fHx8MTc1NTY1NTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: MapPin,
      title: "Lake Kawaguchiko",
      description:
        "Leisurely walk, optional cable car ride, and lunch by the water.",
      detailedDescription:
        "Experience the serene beauty of Mt. Fuji's most accessible lake. Take a leisurely waterfront stroll, enjoy an optional cable car ride for elevated panoramic views, and savor a peaceful lunch with the mountain's reflection dancing on the lake's surface. This is where tranquility and natural beauty converge.",
      duration: "2.5 hours",
      highlights: [
        "Lakeside Promenade",
        "Cable Car Experience",
        "Waterfront Dining",
        "Mountain Reflections",
      ],
      image:
        "https://images.unsplash.com/photo-1556032818-683e550a2c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdCUyMEZ1amklMjBMYWtlJTIwS2F3YWd1Y2hpa28lMjBjaGVycnklMjBibG9zc29tc3xlbnwxfHx8fDE3NTU2NTUzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Building2,
      title: "Iyashino Sato",
      description:
        "Thatched-roof village with artisan shops and a window into rural tradition.",
      detailedDescription:
        "Step back in time at this beautifully preserved traditional village featuring authentic thatched-roof farmhouses. Browse local artisan workshops, witness traditional crafts being made, and gain insight into Japan's rural heritage. This living museum offers a peaceful escape from modernity while honoring centuries-old traditions.",
      duration: "90 minutes",
      highlights: [
        "Traditional Thatched Houses",
        "Artisan Workshops",
        "Cultural Heritage",
        "Rural Japan Experience",
      ],
      image:
        "https://images.unsplash.com/photo-1659090833777-fcdb820ce4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJeWFzaGlubyUyMFNhdG8lMjB0aGF0Y2hlZCUyMHJvb2YlMjB2aWxsYWdlfGVufDF8fHx8MTc1NTY1NTM5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: TreePine,
      title: "Aokigahara Forest (Optional)",
      description:
        "Explore the Wind or Ice Caves along the edge of this storied woodland.",
      detailedDescription:
        "Venture to the edge of Japan's most mysterious forest to explore remarkable natural ice and wind caves formed by ancient lava flows. These geological wonders maintain cool temperatures year-round and offer a unique perspective on Mt. Fuji's volcanic history while respecting the forest's profound cultural significance.",
      duration: "60 minutes",
      highlights: [
        "Natural Ice Caves",
        "Wind Cave Formation",
        "Volcanic History",
        "Ancient Forest Edge",
      ],
      image:
        "https://images.unsplash.com/photo-1736418629900-ce9e8ff526ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBb2tpZ2FoYXJhJTIwZm9yZXN0JTIwSmFwYW4lMjBjYXZlc3xlbnwxfHx8fDE3NTU2NTUzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const vehicles = [
    {
      id: "sclass",
      name: "Mercedes S-Class",
      image: sClassImage,
      guests: "1-3 guests",
      rate: "From ¥150,000",
      basePrice: 150000,
      description: "Ultimate luxury sedan with premium comfort",
      features: [
        "Premium leather seats",
        "Climate control",
        "Wi-Fi",
        "Bottled water",
        "Phone chargers",
      ],
    },
    {
      id: "vclass",
      name: "Mercedes V-Class",
      image: vClassImage,
      guests: "4-6 guests",
      rate: "From ¥105,000",
      basePrice: 105000,
      description: "Spacious luxury van for families and groups",
      features: [
        "Captain seats",
        "Extra legroom",
        "Privacy glass",
        "Entertainment system",
        "Refreshments",
      ],
    },
    {
      id: "alphard",
      name: "Toyota Alphard",
      image: alphardImage,
      guests: "4-7 guests",
      rate: "From ¥90,000",
      basePrice: 90000,
      description: "Japanese luxury MPV with captain seats",
      features: [
        "Massage seats",
        "Premium sound",
        "Mood lighting",
        "Sliding doors",
        "Japanese hospitality",
      ],
    },
    {
      id: "hiace",
      name: "Toyota HiAce Premium",
      image: hiaceImage,
      guests: "6-9 guests",
      rate: "From ¥105,000",
      basePrice: 105000,
      description: "Premium minivan for larger groups",
      features: [
        "Spacious interior",
        "Multiple seating configs",
        "Group communication",
        "Ample storage",
        "Comfort features",
      ],
    },
  ];

  const testimonials = [
    {
      name: "James Wilson",
      location: "New York",
      rating: 5,
      text: "The Mt. Fuji Escape exceeded all expectations. The serenity of the lakes, the majesty of the mountain, and the luxury of our vehicle created an unforgettable experience. Our driver was incredibly knowledgeable about the region.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sophie Larsson",
      location: "Stockholm",
      rating: 5,
      text: "A perfect blend of natural beauty and cultural immersion. The traditional villages and spring-fed ponds at Oshino Hakkai were magical. The flexibility to adjust our itinerary based on weather was invaluable.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "David Kim",
      location: "Seoul",
      rating: 5,
      text: "Chureito Pagoda during autumn was breathtaking. The professional service and luxury transportation made this day trip feel like a premium retreat. Worth every yen for the memories created.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const included = [
    "Private luxury vehicle with professional chauffeur (round-trip from Tokyo)",
    "Hotel pick-up and drop-off within Tokyo",
    "Bottled water and in-car Wi-Fi",
    "Fuel, tolls, and insurance",
    "Concierge support before and during the tour",
    "Flexible itinerary adjustments",
  ];

  const notIncluded = [
    "Meals and refreshments",
    "Entrance fees (e.g., ropeway, caves)",
    "Licensed guide (available on request)",
    "Gratuities (optional but appreciated)",
  ];

  const handleVehicleSelect = (vehicleId) => {
    setSelectedVehicle(vehicleId);
    setShowBookingModal(true);
    setBookingStep(1);
  };

  const handleVehicleChange = () => {
    setSelectedVehicle(null);
    setShowBookingModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      tourDate: "",
      pickupAddress: "",
      guestCount: "",
      luggageCount: "",
      specialNotes: "",
    });
  };

  const handleNextStep = () => setBookingStep(bookingStep + 1);
  const handlePreviousStep = () => setBookingStep(bookingStep - 1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (bookingStep < 3) {
      handleNextStep();
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const scrollToVehicles = () => {
    const el = document.getElementById("vehicle-selection");
    if (el && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleItinerary = (index) => {
    setExpandedItinerary(expandedItinerary === index ? null : index);
  };

  const selectedVehicleData = vehicles.find((v) => v.id === selectedVehicle);

  return (
    <div className="relative">
      {/* Progress Bar - Fixed Top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-nippon-black/20">
        <div
          className="h-full bg-gradient-to-r from-nippon-gold via-nippon-gold-bright to-nippon-gold transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Booking Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-0 bg-nippon-warm-white">
          <div className="relative">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-nippon-warm-white border-b border-nippon-border shadow-sm">
              <div className="px-6 py-4">
                <DialogHeader>
                  <DialogTitle className="text-luxury-xl text-nippon-black font-serif text-left">
                    Book Your Mt. Fuji Experience
                  </DialogTitle>
                  <DialogDescription className="text-luxury-sm text-nippon-gray font-sans text-left">
                    Complete your booking details below
                  </DialogDescription>
                </DialogHeader>

                {selectedVehicleData && (
                  <div className="mt-4 bg-nippon-gold/10 px-4 py-3 rounded border-l-3 border-nippon-gold">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Car className="w-4 h-4 text-nippon-gold" />
                        <div>
                          <span className="text-luxury-sm text-nippon-black font-serif">
                            {selectedVehicleData.name}
                          </span>
                          <span className="text-luxury-xs text-nippon-gray font-sans ml-2">
                            • Mt. Fuji Escape
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {estimatedPrice > 0 && (
                          <span className="text-luxury-lg text-nippon-gold font-serif">
                            ¥{estimatedPrice.toLocaleString()}
                          </span>
                        )}
                        <Button
                          type="button"
                          onClick={handleVehicleChange}
                          className="p-1 bg-transparent hover:bg-nippon-gray/10 text-nippon-gray hover:text-nippon-black transition-colors"
                          title="Change vehicle selection"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <form
                onSubmit={handleFormSubmit}
                className="max-w-3xl mx-auto space-y-6"
              >
                {/* Tour Details */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Tour Details
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      Basic information for your Mt. Fuji experience
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="tourDate"
                        className="text-nippon-black font-serif flex items-center"
                      >
                        Tour Date{" "}
                        <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="tourDate"
                        type="date"
                        value={formData.tourDate}
                        onChange={(e) =>
                          setFormData({ ...formData, tourDate: e.target.value })
                        }
                        className="enhanced-luxury-input"
                        required
                      />
                      <p className="text-luxury-xs text-nippon-gray font-sans">
                        Select your preferred tour date
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="guestCount"
                        className="text-nippon-black font-serif flex items-center"
                      >
                        Number of Guests{" "}
                        <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, guestCount: value })
                        }
                      >
                        <SelectTrigger className="enhanced-luxury-input">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Guest{num > 1 ? "s" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-luxury-xs text-nippon-gray font-sans">
                        Used to validate vehicle capacity
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="luggageCount"
                      className="text-nippon-black font-serif"
                    >
                      Number of Luggage
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, luggageCount: value })
                      }
                    >
                      <SelectTrigger className="enhanced-luxury-input">
                        <SelectValue placeholder="Select luggage count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No luggage</SelectItem>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} bag{num > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      For vehicle loading coordination
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-nippon-warm-white/80 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Contact Information
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      For reservation and confirmation purposes
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
                      <p className="text-luxury-xs text-nippon-gray font-sans">
                        For reservation and confirmation purposes
                      </p>
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
                      <p className="text-luxury-xs text-nippon-gray font-sans">
                        Used for confirmation, updates, and concierge follow-up
                      </p>
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
                      placeholder="+81 90-1234-5678 (international format supported)"
                    />
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      Optional field - helpful for day-of contact if needed
                    </p>
                  </div>
                </div>

                {/* Pickup Information */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Pickup Information
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      Where should we meet you?
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="pickupAddress"
                      className="text-nippon-black font-serif flex items-center"
                    >
                      Pickup Location (Hotel or Address in Tokyo){" "}
                      <span className="text-nippon-gold ml-1">*</span>
                    </Label>
                    <Input
                      id="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickupAddress: e.target.value,
                        })
                      }
                      className="enhanced-luxury-input"
                      placeholder="Hotel name or precise location for morning pickup"
                      required
                    />
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      Enter hotel name or precise location for morning pickup
                    </p>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="bg-nippon-warm-white/80 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Special Requests
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">
                      Any special requirements for your tour?
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="specialNotes"
                      className="text-nippon-black font-serif flex items-center"
                    >
                      Special Requests / Notes{" "}
                      <span className="text-nippon-gray-light text-luxury-xs ml-1">
                        (optional)
                      </span>
                    </Label>
                    <Textarea
                      id="specialNotes"
                      value={formData.specialNotes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialNotes: e.target.value,
                        })
                      }
                      className="enhanced-luxury-input min-h-[120px]"
                      placeholder="We'd love to prioritize seasonal highlights, or One guest has mobility concerns, dietary preferences, celebration occasions, etc."
                    />
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      Open-ended field for any special requests or requirements
                    </p>
                  </div>
                </div>

                {/* Tour Summary */}
                <div className="bg-nippon-gold/5 p-6 rounded-lg border-2 border-nippon-gold/20 space-y-3">
                  <div className="border-b border-nippon-gold/20 pb-2">
                    <h3 className="text-luxury-lg text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Tour Summary
                    </h3>
                    <p className="text-luxury-xs text-nippon-gray font-sans">
                      Automatically filled based on your selections
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-nippon-warm-white p-4 rounded border border-nippon-gold/30">
                      <Label className="text-luxury-sm text-nippon-black font-serif">
                        Selected Vehicle
                      </Label>
                      <p className="text-luxury-sm text-nippon-black font-sans mt-1">
                        {selectedVehicleData?.name}
                      </p>
                    </div>

                    <div className="bg-nippon-warm-white p-4 rounded border border-nippon-gold/30">
                      <Label className="text-luxury-sm text-nippon-black font-serif">
                        Tour Name
                      </Label>
                      <p className="text-luxury-sm text-nippon-black font-sans mt-1">
                        Mt. Fuji Escape
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing Summary */}
                {estimatedPrice > 0 && (
                  <div className="bg-nippon-gold/10 p-4 rounded border border-nippon-gold">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-luxury-lg text-nippon-black font-serif">
                        Pricing Summary
                      </h4>
                      <span className="text-luxury-xl text-nippon-gold font-serif">
                        ¥{estimatedPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="space-y-2 text-luxury-sm">
                      <div className="flex justify-between">
                        <span className="text-nippon-gray font-sans">
                          Base price ({selectedVehicleData?.name}):
                        </span>
                        <span className="text-nippon-black font-sans">
                          ¥{selectedVehicleData?.basePrice.toLocaleString()}
                        </span>
                      </div>

                      {parseInt(formData.guestCount || "0", 10) > 4 && (
                        <div className="flex justify-between">
                          <span className="text-nippon-gray font-sans">
                            Group surcharge (5+ guests):
                          </span>
                          <span className="text-nippon-black font-sans">
                            +20%
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-nippon-gray font-sans">
                          Taxes & fees:
                        </span>
                        <span className="text-nippon-black font-sans">
                          Included
                        </span>
                      </div>
                    </div>

                    <p className="text-luxury-xs text-nippon-gray font-sans text-center mt-3">
                      Final price confirmed after booking review. No hidden
                      fees.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <div className="pt-4 space-y-3">
                  <Button
                    type="submit"
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.tourDate ||
                      !formData.guestCount ||
                      !formData.pickupAddress
                    }
                    className="group relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-6 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                    style={{
                      backdropFilter: "blur(20px)",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-2">
                      <CreditCard className="w-4 h-4" />
                      <span className="tracking-wider font-medium">
                        Proceed to Payment
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>

                  <p className="text-luxury-xs text-nippon-gray font-sans text-center">
                    Payment collected at time of booking. You'll receive an
                    auto-confirmation email with all tour details.
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
            src={mtFujiNightImage}
            alt="Mt. Fuji at night with starry sky and lake reflection"
            className="w-full h-full object-cover scale-110"
            style={{
              filter: "brightness(0.8) contrast(1.1) saturate(1.2)",
              animation: "cinematicZoom 30s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 30% 70%, rgba(212, 175, 55, 0.15) 0%, rgba(26, 26, 45, 0.1) 40%, transparent 80%)",
              animation: "gradientMove 40s ease-in-out infinite",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-nippon-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/50 via-nippon-black/20 to-nippon-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/40 via-transparent to-nippon-black/30 z-10" />

        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-5 blur-3xl z-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-nippon-gold-bright opacity-4 blur-3xl z-10" />

        <div
          className="absolute inset-0 z-15"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        />

        <div
          className="relative z-20 max-w-6xl mx-auto px-8"
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
              Mt. Fuji Escape
            </h1>

            <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto" />

            <div className="space-y-12 max-w-3xl mx-auto">
              <p
                className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed text-center"
                style={{
                  textShadow:
                    "0 4px 24px rgba(0, 0, 0, 0.9), 0 2px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)",
                }}
              >
                A day of scenic beauty, tranquil villages, and cultural
                connection — curated for quiet luxury and personalized flow.
              </p>

              <div className="grid grid-cols-3 gap-8 py-8">
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    7
                  </div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">
                    Scenic Destinations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    10
                  </div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">
                    Hours Duration
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">
                    100%
                  </div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">
                    Private Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToVehicles}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <Car className="w-4 h-4" />
                  <span className="tracking-wider font-medium">
                    Choose Your Vehicle
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                onClick={() =>
                  document
                    .getElementById("itinerary")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <MapIcon className="w-4 h-4" />
                  <span className="tracking-wider font-medium">
                    View Itinerary
                  </span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Introduction */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div
          className="relative z-10 max-w-4xl mx-auto content-padding text-center"
          data-scroll-reveal
        >
          <div className="space-y-12">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Mountain className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>

            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-3xl mx-auto">
              Discover Mt. Fuji's majesty through a carefully curated journey
              from Tokyo. From ancient shrines to pristine lakes, this tour
              blends natural wonder with cultural depth — flexible routing
              tailored to weather and your interests.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Shield className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  Licensed & Insured
                </div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  5-Star Rated
                </div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  1500+ Guests
                </div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Itinerary */}
      <section
        id="itinerary"
        className="relative bg-nippon-black section-padding overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Interactive Itinerary
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Click on each location to explore detailed information and
              highlights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {itineraryHighlights.map((highlight, index) => (
              <div
                key={index}
                className={`group relative bg-nippon-warm-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold cursor-pointer ${
                  expandedItinerary === index
                    ? "col-span-full md:col-span-2"
                    : ""
                }`}
                data-scroll-reveal
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => toggleItinerary(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-nippon-gold to-nippon-gold-dark backdrop-blur-sm flex items-center justify-center shadow-gold border border-nippon-gold-light rounded-sm">
                      <highlight.icon className="w-5 h-5 text-nippon-black" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-nippon-gold text-nippon-black text-luxury-xs">
                      {highlight.duration}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-luxury-base text-nippon-black font-serif leading-tight">
                      {highlight.title}
                    </h3>
                    {expandedItinerary === index ? (
                      <ChevronUp className="w-5 h-5 text-nippon-gold" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-nippon-gold" />
                    )}
                  </div>

                  <p className="text-luxury-sm text-nippon-gray leading-relaxed font-sans">
                    {expandedItinerary === index
                      ? highlight.detailedDescription
                      : highlight.description}
                  </p>

                  {expandedItinerary === index && (
                    <div className="mt-4 space-y-3 border-t border-nippon-border pt-4">
                      <h4 className="text-luxury-sm text-nippon-black font-serif">
                        Highlights Include:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {highlight.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-nippon-gold flex-shrink-0" />
                            <span className="text-luxury-xs text-nippon-gray font-sans">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" data-scroll-reveal>
            <p className="text-luxury-base text-nippon-gray-light font-sans italic leading-relaxed max-w-2xl mx-auto">
              <MapPin className="w-4 h-4 inline mr-2" />
              Flexible routing based on weather conditions, seasonal access, and
              your interests for optimal Mt. Fuji viewing.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div
          className="relative z-10 max-w-6xl mx-auto content-padding"
          data-scroll-reveal
        >
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
                Tour Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">
                      Duration: 10 hours
                    </p>
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Users className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">
                      Perfect For:
                    </p>
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      Nature lovers, photographers, cultural enthusiasts
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">
                      Availability:
                    </p>
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      Daily, weather dependent (advance booking required)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-luxury-2xl text-nippon-black font-serif">
                What's Included
              </h3>
              <div className="space-y-3">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-nippon-gold mt-0.5 flex-shrink-0" />
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-luxury-2xl text-nippon-black font-serif">
                What's Not Included
              </h3>
              <div className="space-y-3">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-nippon-gray mt-0.5 flex-shrink-0" />
                    <p className="text-luxury-base text-nippon-gray font-sans">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selection */}
      <section
        id="vehicle-selection"
        className="relative bg-nippon-black section-padding overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Choose Your Luxury Vehicle
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Select your preferred vehicle to start the booking process with
              instant pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card
                key={vehicle.id}
                className="group relative bg-nippon-warm-white hover:shadow-luxury-hover transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold cursor-pointer"
                data-scroll-reveal
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleVehicleSelect(vehicle.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-nippon-gold text-nippon-black text-luxury-sm font-medium">
                      {vehicle.rate}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <CardHeader className="p-0">
                    <CardTitle className="text-luxury-xl text-nippon-black font-serif leading-tight">
                      {vehicle.name}
                    </CardTitle>
                    <p className="text-luxury-sm text-nippon-gray font-sans italic">
                      {vehicle.description}
                    </p>
                  </CardHeader>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-nippon-gold" />
                      <span className="text-luxury-sm text-nippon-gray font-sans">
                        {vehicle.guests}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-luxury-sm text-nippon-black font-serif">
                      Premium Features:
                    </h4>
                    {vehicle.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-nippon-gold flex-shrink-0" />
                        <span className="text-luxury-xs text-nippon-gray font-sans">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="group relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-sm px-4 py-3 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                    style={{
                      backdropFilter: "blur(10px)",
                      backgroundColor: "rgba(248, 246, 240, 0.1)",
                    }}
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-2 text-nippon-gold group-hover:text-nippon-black">
                      <span className="tracking-wider font-medium">
                        Select Vehicle
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

      {/* Testimonials */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
              What Our Guests Say
            </h2>
            <p className="text-luxury-lg text-nippon-gray font-sans leading-relaxed max-w-2xl mx-auto">
              Real experiences from travelers who've discovered Mt. Fuji with
              Nippon Imperial.
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
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-nippon-gold text-nippon-gold"
                      />
                    ))}
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

      {/* Contact CTA */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        <div
          className="relative z-10 max-w-4xl mx-auto content-padding text-center"
          data-scroll-reveal
        >
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight">
                Need Assistance?
              </h2>
              <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
                Our concierge team is available 24/7 to customize your Mt. Fuji
                experience and answer any questions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-nippon-gold mx-auto mb-4" />
                <p className="text-luxury-base text-nippon-warm-white font-serif">
                  Call Us
                </p>
                <p className="text-luxury-sm text-nippon-gray-light font-sans">
                  +81 3-1234-5678
                </p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-nippon-gold mx-auto mb-4" />
                <p className="text-luxury-base text-nippon-warm-white font-serif">
                  Email Us
                </p>
                <p className="text-luxury-sm text-nippon-gray-light font-sans">
                  fuji@nipponimperial.com
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-nippon-gold mx-auto mb-4" />
                <p className="text-luxury-base text-nippon-warm-white font-serif">
                  Live Chat
                </p>
                <p className="text-luxury-sm text-nippon-gray-light font-sans">
                  Available on website
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {false &&
        Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="hidden">
            {i}
          </div>
        ))}
    </div>
  );
}

export default MtFujiEscape;
