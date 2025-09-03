// Libraries
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Car,
  Map,
  Users,
  Luggage,
  Clock,
  CheckCircle,
  Star,
  Shield,
  Award,
  MapPin,
  ChevronDown,
  MessageCircle,
  Sparkles,
  Calendar,
  CreditCard,
  Phone,
  Mail,
  MapIcon,
  Filter,
  ChevronRight,
  Heart,
  Zap,
  Search,
  SortAsc,
  Grid,
  List,
  X,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Images
import luxuryChauffeurHeroImage from "../assets/home.png";
import sClassChauffeurImage from "../assets/car1.png";
import sClassLuxurySedanImage from "../assets/car1.png";
import vClassLuxuryImage from "../assets/car4.png";
import alphardCulturalImage from "../assets/car2.png";
import hiAceFamilyImage from "../assets/car3.png";

const fleet = [
  {
    id: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    shortName: "S-Class Executive",
    image: sClassChauffeurImage,
    images: [
      sClassChauffeurImage,
      sClassLuxurySedanImage,
      "https://images.unsplash.com/photo-1563720223185-11003d516935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMHMlMjBjbGFzcyUyMGludGVyaW9yfGVufDF8fHx8MTc1NTMzNTk1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    maxPassengers: 2,
    minPassengers: 1,
    luggage: 2,
    basePrice: 15000,
    hourlyRate: 12000,
    description:
      "Ultimate executive transport with unmatched sophistication and comfort. Perfect for business executives and VIP clients who demand the finest.",
    features: [
      "Executive Massage Seats",
      "Business Conference Setup",
      "Privacy Glass",
      "Premium Sound System",
      "Climate Zones",
      "Champagne Service",
    ],
    amenities: [
      "Professional Chauffeur",
      "Multilingual Service",
      "Airport Meet & Greet",
      "Complimentary Water",
      "Real-time Traffic Updates",
      "Cultural Insights",
    ],
    bestFor: "Business & VIP",
    priority: "luxury",
    popularRating: 95,
    availability: "available",
    airportTransfer: true,
    cityTour: true,
    businessMeeting: true,
    highlight: "Most Popular",
    tags: ["Executive", "Business", "VIP", "Premium"],
    occasions: [
      "Business Travel",
      "Airport Transfer",
      "Client Meetings",
      "Special Events",
    ],
    certifications: ["JD Power Award", "ISO 9001", "Luxury Travel Council"],
    coverage: "Tokyo, Kyoto, Osaka",
    yearIntroduced: 2015,
    bookingCount: 2847,
  },
  {
    id: "mercedes-v-class",
    name: "Mercedes-Benz V-Class",
    shortName: "V-Class Luxury",
    image: vClassLuxuryImage,
    images: [
      vClassLuxuryImage,
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8dmFuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU1MzM1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    maxPassengers: 5,
    minPassengers: 3,
    luggage: 5,
    basePrice: 15000,
    hourlyRate: 12000,
    description:
      "Spacious luxury van perfect for group comfort and extended journeys. Ideal for small groups who want to travel together in style.",
    features: [
      "Conference Seating",
      "Individual Climate Control",
      "Entertainment System",
      "Power Outlets",
      "Premium Materials",
      "Flexible Configuration",
    ],
    amenities: [
      "Group Coordination",
      "Multiple Stops",
      "Luggage Assistance",
      "Snack Service",
      "Route Planning",
      "Family Services",
    ],
    bestFor: "Small Groups",
    priority: "space",
    popularRating: 88,
    availability: "available",
    airportTransfer: true,
    cityTour: true,
    businessMeeting: false,
    highlight: "Group Travel",
    tags: ["Groups", "Family", "Spacious", "Comfort"],
    occasions: [
      "Family Tours",
      "Group Events",
      "Multi-day Travel",
      "Cultural Tours",
    ],
    certifications: [
      "Safety Excellence",
      "Family Friendly",
      "Group Travel Award",
    ],
    coverage: "All major cities",
    yearIntroduced: 2018,
    bookingCount: 1926,
  },
  {
    id: "toyota-alphard",
    name: "Toyota Alphard",
    shortName: "Alphard Cultural",
    image: alphardCulturalImage,
    images: [
      alphardCulturalImage,
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lvdGElMjBhbHBoYXJkJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU1MzM1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    maxPassengers: 4,
    minPassengers: 2,
    luggage: 4,
    basePrice: 15000,
    hourlyRate: 12000,
    description:
      "Premium Japanese craftsmanship with exceptional comfort and cultural authenticity. Perfect for those seeking an authentic Japanese luxury experience.",
    features: [
      "Cultural Guide Integration",
      "Traditional Japanese Materials",
      "Zen Interior Design",
      "Silent Operation",
      "Local Insight System",
      "Cultural Audio Guide",
    ],
    amenities: [
      "Cultural Commentary",
      "Photo Assistance",
      "Restaurant Recommendations",
      "Traditional Music",
      "Local Experiences",
      "Hidden Gems",
    ],
    bestFor: "Cultural Tours",
    priority: "efficiency",
    popularRating: 92,
    availability: "limited",
    airportTransfer: true,
    cityTour: true,
    businessMeeting: false,
    highlight: "Japanese Luxury",
    tags: ["Cultural", "Japanese", "Authentic", "Traditional"],
    occasions: [
      "Cultural Immersion",
      "Temple Tours",
      "Traditional Events",
      "Photography Tours",
    ],
    certifications: [
      "Cultural Heritage Certified",
      "Local Experience Award",
      "Authenticity Verified",
    ],
    coverage: "Traditional districts",
    yearIntroduced: 2020,
    bookingCount: 1543,
  },
  {
    id: "toyota-hiace-premium",
    name: "Toyota HiAce Premium",
    shortName: "HiAce Family",
    image: hiAceFamilyImage,
    images: [
      hiAceFamilyImage,
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8dmFuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU1MzM1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    maxPassengers: 8,
    minPassengers: 5,
    luggage: 9,
    basePrice: 15000,
    hourlyRate: 12000,
    description:
      "Maximum capacity premium transport perfect for large groups and family tours. Ideal for families and large groups who want to explore Japan together.",
    features: [
      "Family Entertainment System",
      "Multiple Safety Zones",
      "Flexible Seating",
      "Extra Storage",
      "Family Comfort Features",
      "Multi-Zone Climate",
    ],
    amenities: [
      "Family Coordination",
      "Child Seats Available",
      "Entertainment",
      "Snack Storage",
      "Multiple Device Charging",
      "Family Activities",
    ],
    bestFor: "Large Families",
    priority: "space",
    popularRating: 85,
    availability: "available",
    airportTransfer: true,
    cityTour: true,
    businessMeeting: false,
    highlight: "Large Groups",
    tags: ["Family", "Large Groups", "Spacious", "Entertainment"],
    occasions: [
      "Family Vacations",
      "Group Tours",
      "School Trips",
      "Corporate Retreats",
    ],
    certifications: [
      "Family Safety Certified",
      "Large Group Specialist",
      "Entertainment Award",
    ],
    coverage: "Tourist routes",
    yearIntroduced: 2019,
    bookingCount: 1284,
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Global Director, Tech Innovation",
    company: "Fortune 500 Company",
    content:
      "The S-Class service exceeded every expectation. Punctual, elegant, and the chauffeur's cultural knowledge made our Tokyo meetings truly special.",
    rating: 5,
    service: "Mercedes S-Class",
    location: "Tokyo Business District",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b332c3c5?w=150&h=150&fit=crop&crop=face",
    verifiedClient: true,
    serviceDate: "November 2024",
  },
  {
    name: "The Morrison Family",
    role: "International Travelers",
    company: "Private Clients",
    content:
      "Perfect for our family of 6. The V-Class was spacious, comfortable, and our driver became our cultural guide throughout Kyoto.",
    rating: 5,
    service: "Mercedes V-Class",
    location: "Kyoto Cultural Tour",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    verifiedClient: true,
    serviceDate: "October 2024",
  },
  {
    name: "James Richardson",
    role: "Investment Banker",
    company: "Goldman Sachs",
    content:
      "Booked the Alphard for client meetings. The cultural insights and seamless service impressed our Japanese partners immensely.",
    rating: 5,
    service: "Toyota Alphard",
    location: "Tokyo Business Circuit",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verifiedClient: true,
    serviceDate: "December 2024",
  },
];

const faqItems = [
  {
    question: "How far in advance should I book?",
    answer:
      "For guaranteed availability, we recommend booking at least 24 hours in advance. Same-day bookings are possible subject to availability, especially for popular vehicles like the S-Class during peak business hours.",
    category: "Booking",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "We monitor all flights in real-time and adjust pickup times automatically. Our chauffeurs track your flight status and will be waiting when you arrive, regardless of delays. No additional charges apply for flight delays.",
    category: "Airport",
  },
  {
    question: "Are there extra charges for luggage or tolls?",
    answer:
      "No, all tolls, parking fees, and standard luggage are included in our pricing. We can accommodate up to the specified luggage capacity for each vehicle at no extra cost.",
    category: "Pricing",
  },
  {
    question: "Do you provide child seats?",
    answer:
      "Yes, we provide complimentary child seats and booster seats upon request. Please specify the age and weight of children when booking so we can ensure proper safety equipment is installed.",
    category: "Family",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Bookings can be modified or canceled up to 4 hours before the scheduled time without penalty. Cancellations within 4 hours incur a 50% charge, and no-shows are charged the full amount.",
    category: "Policy",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and corporate accounts. Payment is processed securely through encrypted gateways.",
    category: "Payment",
  },
];

const trustMetrics = [
  {
    icon: Shield,
    number: "800+",
    label: "VIP Journeys Completed",
    subtext: "Since 2009",
    highlight: "Excellence Record",
  },
  {
    icon: Award,
    number: "98%",
    label: "Client Satisfaction",
    subtext: "Consistently Rated",
    highlight: "5-Star Service",
  },
  {
    icon: MapPin,
    number: "24/7",
    label: "Available Service",
    subtext: "Always Ready",
    highlight: "Round the Clock",
  },
  {
    icon: Star,
    number: "15+",
    label: "Years Excellence",
    subtext: "Trusted Experience",
    highlight: "Industry Leader",
  },
];

const coverageAreas = [
  { city: "Tokyo", districts: 15, popular: true },
  { city: "Kyoto", districts: 8, popular: true },
  { city: "Osaka", districts: 12, popular: true },
  { city: "Nara", districts: 4, popular: false },
  { city: "Hakone", districts: 3, popular: false },
  { city: "Nikko", districts: 2, popular: false },
];

export default function PrivateChauffeurServices() {
  const [currentStep, setCurrentStep] = useState("selection");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    passengers: null | null,
    priority: null | null,
    occasion: null | null,
    priceRange: null | null,
  });
  const [selectedVehicleModal, setSelectedVehicleModal] = useState(null);
  const [favoriteVehicles, setFavoriteVehicles] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    startTime: "",
    duration: "",
    pickupLocation: "",
    dropoffLocation: "",
    numberOfGuests: "",
    occasion: "",
    notes: "",
  });

  const getFilteredFleet = () => {
    let filtered = [...fleet];

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.bestFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          vehicle.occasions.some((occasion) =>
            occasion.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Passenger filter
    if (filters.passengers) {
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.maxPassengers >= filters.passengers &&
          vehicle.minPassengers <= filters.passengers
      );
    }

    // Priority filter
    if (filters.priority) {
      filtered = filtered.filter(
        (vehicle) => vehicle.priority === filters.priority
      );
    }

    // Occasion filter
    if (filters.occasion && typeof filters.occasion === "string") {
      filtered = filtered.filter((vehicle) =>
        vehicle.occasions.some((occasion) =>
          occasion.toLowerCase().includes(filters.occasion.toLowerCase())
        )
      );
    }

    // Price filter
    if (filters.priceRange) {
      // Add price filtering logic here
    }

    // Sorting
    switch (sortBy) {
      case "popularity":
        filtered = filtered.sort((a, b) => b.popularRating - a.popularRating);
        break;
      case "price-low":
        filtered = filtered.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case "price-high":
        filtered = filtered.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case "capacity":
        filtered = filtered.sort((a, b) => b.maxPassengers - a.maxPassengers);
        break;
      case "bookings":
        filtered = filtered.sort((a, b) => b.bookingCount - a.bookingCount);
        break;
    }

    return filtered;
  };

  const handleVehicleSelect = (vehicleId) => {
    setSelectedVehicle(vehicleId);
    setCurrentStep("booking");

    setTimeout(() => {
      const formElement = document.getElementById("booking-form");
      if (formElement) {
        formElement.classList.add("form-reveal-animation");
        formElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentStep("confirmation");

    setTimeout(() => {
      document.getElementById("confirmation-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleInputChange = (field) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const scrollToSelector = () => {
    document
      .getElementById("vehicle-selector")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const getSelectedVehicle = () => {
    return fleet.find((v) => v.id === selectedVehicle);
  };

  const toggleFavorite = (vehicleId) => {
    setFavoriteVehicles((prev) =>
      prev.includes(vehicleId)
        ? prev.filter((id) => id !== vehicleId)
        : [...prev, vehicleId]
    );
  };

  const clearAllFilters = () => {
    setFilters({
      passengers: null,
      priority: null,
      occasion: null,
      priceRange: null,
    });
    setSearchQuery("");
  };

  const getAvailabilityBadge = (availability) => {
    switch (availability) {
      case "available":
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            ✓ Available Now
          </Badge>
        );
      case "limited":
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
            ⚡ Limited Slots
          </Badge>
        );
      default:
        return (
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
            ✗ Fully Booked
          </Badge>
        );
    }
  };

  const activeFiltersCount =
    Object.values(filters).filter((v) => v !== null).length +
    (searchQuery ? 1 : 0);

  return (
    <div className="relative">
      {/* Enhanced Progress Indicator */}
      {currentStep !== "selection" && (
        <div className="fixed top-8 right-8 z-50">
          <div className="bg-nippon-black/95 backdrop-blur-sm border border-nippon-gold/30 p-4 rounded-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-nippon-gold rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-nippon-black" />
                </div>
                <span className="text-nippon-warm-white font-sans text-luxury-sm">
                  Vehicle Selected
                </span>
              </div>

              <div className="h-px w-8 bg-nippon-gold"></div>

              <div className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    currentStep === "booking"
                      ? "bg-nippon-gold"
                      : "bg-nippon-gold/30"
                  }`}
                >
                  <Calendar
                    className={`w-4 h-4 ${
                      currentStep === "booking"
                        ? "text-nippon-black"
                        : "text-nippon-gold"
                    }`}
                  />
                </div>
                <span
                  className={`font-sans text-luxury-sm transition-colors duration-300 ${
                    currentStep === "booking"
                      ? "text-nippon-warm-white"
                      : "text-nippon-warm-white/60"
                  }`}
                >
                  Booking Details
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Hero Section - FIXED CTA BUTTON VISIBILITY */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={luxuryChauffeurHeroImage}
            alt="Luxury chauffeur opening car door in Tokyo"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "brightness(0.6) contrast(1.1) saturate(0.9)",
              animation: "cinematicZoom 25s ease-in-out infinite alternate",
            }}
          />

          <div className="absolute inset-0 bg-nippon-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/60 via-nippon-black/30 to-nippon-black/70 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/50 via-transparent to-nippon-black/30 z-10"></div>
        </div>

        <div
          className="relative z-30 max-w-6xl mx-auto px-8 text-center"
          data-scroll-reveal
        >
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-nippon-gold/10 backdrop-blur-sm border border-nippon-gold/30 px-6 py-2 mb-6">
              <Star className="w-4 h-4 text-nippon-gold" />
              <span className="text-nippon-gold font-sans text-luxury-sm font-medium tracking-wider">
                PREMIUM CHAUFFEUR SERVICES
              </span>
              <Star className="w-4 h-4 text-nippon-gold" />
            </div>

            <h1
              className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-8 leading-none tracking-tight"
              style={{
                textShadow:
                  "0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.5)",
              }}
            >
              Your Personal Fleet
            </h1>

            <div className="h-px w-48 mb-12 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>

            <p
              className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed max-w-4xl mx-auto mb-16"
              style={{
                textShadow:
                  "0 4px 16px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.8)",
              }}
            >
              Luxury vehicles. Expert chauffeurs. Cultural immersion.
              <span className="text-nippon-gold">
                {" "}
                — Crafted exclusively for you.
              </span>
            </p>

            {/* Enhanced CTAs - FIXED BUTTON TEXT VISIBILITY */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={scrollToSelector}
                className="group relative overflow-hidden bg-nippon-gold text-nippon-black hover:bg-nippon-gold-dark border-2 border-nippon-gold font-sans text-luxury-lg px-10 py-5 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 min-w-[280px]"
                style={{
                  zIndex: 40,
                  position: "relative",
                }}
              >
                <span className="relative z-10 flex items-center space-x-3 text-nippon-black font-medium">
                  <Car className="w-5 h-5" />
                  <span className="tracking-wider">Explore Our Fleet</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button className="group bg-transparent border-2 border-nippon-warm-white text-nippon-warm-white hover:bg-nippon-warm-white hover:text-nippon-black font-sans text-luxury-lg px-10 py-5 transition-all duration-500 min-w-[280px]">
                <span className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span className="tracking-wider font-medium">
                    Speak to Concierge
                  </span>
                </span>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-nippon-warm-white/80 text-luxury-sm font-sans">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Real-time Availability</span>
              </div>
              <div className="h-4 w-px bg-nippon-gold/30"></div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-nippon-gold" />
                <span>Instant Confirmation</span>
              </div>
              <div className="h-4 w-px bg-nippon-gold/30"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-nippon-gold" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Introduction with Social Proof */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div
          className="relative z-10 max-w-6xl mx-auto content-padding"
          data-scroll-reveal
        >
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-nippon-gold/10 px-4 py-2 mb-4">
                  <Award className="w-4 h-4 text-nippon-gold" />
                  <span className="text-nippon-gold font-sans text-luxury-sm font-medium">
                    AWARD-WINNING SERVICE
                  </span>
                </div>

                <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
                  Beyond Transport — A Cultural Journey
                </h2>

                <div className="space-y-4 text-luxury-lg text-nippon-gray leading-relaxed font-sans">
                  <p>
                    Every journey becomes an experience when you travel with
                    Nippon Imperial. Our chauffeurs are cultural ambassadors,
                    our vehicles are mobile sanctuaries, and your comfort is our
                    obsession.
                  </p>
                </div>
              </div>

              {/* Enhanced Service Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3 p-6 bg-nippon-beige">
                  <div className="w-10 h-10 bg-nippon-gold rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-nippon-black" />
                  </div>
                  <h4 className="font-serif text-nippon-black font-medium">
                    Cultural Experts
                  </h4>
                  <p className="text-luxury-sm text-nippon-gray">
                    Every chauffeur is certified in Japanese culture and
                    hospitality
                  </p>
                </div>
                <div className="space-y-3 p-6 bg-nippon-beige">
                  <div className="w-10 h-10 bg-nippon-gold rounded-full flex items-center justify-center">
                    <Map className="w-5 h-5 text-nippon-black" />
                  </div>
                  <h4 className="font-serif text-nippon-black font-medium">
                    Complete Coverage
                  </h4>
                  <p className="text-luxury-sm text-nippon-gray">
                    From Tokyo's business districts to Kyoto's ancient temples
                  </p>
                </div>
                <div className="space-y-3 p-6 bg-nippon-beige">
                  <div className="w-10 h-10 bg-nippon-gold rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-nippon-black" />
                  </div>
                  <h4 className="font-serif text-nippon-black font-medium">
                    Flexible Timing
                  </h4>
                  <p className="text-luxury-sm text-nippon-gray">
                    Hourly, daily, or multi-day arrangements available
                  </p>
                </div>
                <div className="space-y-3 p-6 bg-nippon-beige">
                  <div className="w-10 h-10 bg-nippon-gold rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-nippon-black" />
                  </div>
                  <h4 className="font-serif text-nippon-black font-medium">
                    Premium Safety
                  </h4>
                  <p className="text-luxury-sm text-nippon-gray">
                    Comprehensive insurance and certified professional drivers
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Coverage Areas */}
            <div className="space-y-6">
              <div className="bg-nippon-black p-8 shadow-luxury">
                <div className="space-y-6">
                  <h3 className="text-nippon-warm-white font-serif text-luxury-xl">
                    Service Coverage
                  </h3>
                  <div className="h-px bg-nippon-gold"></div>

                  {coverageAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            area.popular
                              ? "bg-nippon-gold"
                              : "bg-nippon-gold/50"
                          }`}
                        ></div>
                        <span className="text-nippon-warm-white font-sans">
                          {area.city}
                        </span>
                        {area.popular && (
                          <Badge className="bg-nippon-gold/20 text-nippon-gold text-luxury-xs px-2 py-0">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <span className="text-nippon-gold font-sans text-luxury-sm">
                        {area.districts} districts
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-nippon-gold/10 border border-nippon-gold/20 p-6">
                <h4 className="text-nippon-black font-serif text-luxury-lg mb-4">
                  This Month
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-nippon-gray font-sans">
                      Bookings completed
                    </span>
                    <span className="text-nippon-black font-serif">247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-nippon-gray font-sans">
                      Average rating
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-nippon-gold fill-current" />
                      <span className="text-nippon-black font-serif">4.96</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-nippon-gray font-sans">
                      Instant booking
                    </span>
                    <span className="text-nippon-gold font-serif">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Vehicle Selection Section */}
      <section
        id="vehicle-selector"
        className="relative bg-nippon-black section-padding overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          {currentStep === "selection" && (
            <>
              {/* Enhanced Header */}
              <div className="text-center space-y-8 mb-12" data-scroll-reveal>
                <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
                  Select Your Perfect Vehicle
                </h2>
                <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-3xl mx-auto">
                  Each vehicle in our curated fleet offers a unique luxury
                  experience. From intimate executive transport to spacious
                  family adventures — find your perfect match.
                </p>
              </div>

              {/* Advanced Search & Filter System */}
              <div
                className="bg-nippon-warm-white/10 backdrop-blur-sm border border-nippon-gold/20 p-8 rounded-sm mb-12"
                data-scroll-reveal
              >
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-nippon-gold" />
                    <Input
                      placeholder="Search vehicles, occasions, or features..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-4 bg-nippon-warm-white/10 border-nippon-gold/30 text-nippon-warm-white placeholder:text-nippon-gray-light text-luxury-lg"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-nippon-gold hover:text-nippon-gold-light"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Enhanced Filters */}
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="space-y-3">
                    <Label className="text-nippon-warm-white font-serif text-luxury-base">
                      Passengers
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 4, 8].map((count) => (
                        <Button
                          key={count}
                          onClick={() =>
                            setFilters((prev) => ({
                              ...prev,
                              passengers:
                                prev.passengers === count ? null : count,
                            }))
                          }
                          className={`h-10 font-sans text-luxury-sm ${
                            filters.passengers === count
                              ? "bg-nippon-gold text-nippon-black"
                              : "bg-transparent border border-nippon-warm-white text-nippon-warm-white hover:bg-nippon-gold hover:text-nippon-black"
                          }`}
                        >
                          {count}+
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-nippon-warm-white font-serif text-luxury-base">
                      Experience
                    </Label>
                    <Select
                      value={filters.priority || ""}
                      onValueChange={(value) =>
                        setFilters((prev) => ({
                          ...prev,
                          priority: value === filters.priority ? null : value,
                        }))
                      }
                    >
                      <SelectTrigger className="luxury-input h-10 bg-nippon-warm-white/10 border-nippon-gold/30 text-nippon-warm-white">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="luxury">Ultimate Luxury</SelectItem>
                        <SelectItem value="space">Maximum Space</SelectItem>
                        <SelectItem value="efficiency">
                          Cultural Focus
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-nippon-warm-white font-serif text-luxury-base">
                      Occasion
                    </Label>
                    <Select
                      value={filters.occasion || ""}
                      onValueChange={(value) =>
                        setFilters((prev) => ({
                          ...prev,
                          occasion: value === filters.occasion ? null : value,
                        }))
                      }
                    >
                      <SelectTrigger className="luxury-input h-10 bg-nippon-warm-white/10 border-nippon-gold/30 text-nippon-warm-white">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">
                          Business Travel
                        </SelectItem>
                        <SelectItem value="family">Family Tours</SelectItem>
                        <SelectItem value="cultural">
                          Cultural Immersion
                        </SelectItem>
                        <SelectItem value="special">Special Events</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-nippon-warm-white font-serif text-luxury-base">
                      Sort By
                    </Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="luxury-input h-10 bg-nippon-warm-white/10 border-nippon-gold/30 text-nippon-warm-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popularity">Popularity</SelectItem>
                        <SelectItem value="price-low">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-high">
                          Price: High to Low
                        </SelectItem>
                        <SelectItem value="capacity">
                          Passenger Capacity
                        </SelectItem>
                        <SelectItem value="bookings">Most Booked</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-nippon-warm-white font-serif text-luxury-base">
                      View
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={() => setViewMode("grid")}
                        className={`h-10 px-3 ${
                          viewMode === "grid"
                            ? "bg-nippon-gold text-nippon-black"
                            : "bg-transparent border border-nippon-warm-white text-nippon-warm-white hover:bg-nippon-gold hover:text-nippon-black"
                        }`}
                      >
                        <Grid className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => setViewMode("list")}
                        className={`h-10 px-3 ${
                          viewMode === "list"
                            ? "bg-nippon-gold text-nippon-black"
                            : "bg-transparent border border-nippon-warm-white text-nippon-warm-white hover:bg-nippon-gold hover:text-nippon-black"
                        }`}
                      >
                        <List className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Active Filters & Results */}
                <div className="flex items-center justify-between pt-6 border-t border-nippon-gold/20">
                  <div className="flex items-center space-x-4">
                    <span className="text-nippon-warm-white font-sans text-luxury-sm">
                      {getFilteredFleet().length} vehicles found
                    </span>
                    {activeFiltersCount > 0 && (
                      <Button
                        onClick={clearAllFilters}
                        className="bg-transparent text-nippon-gold hover:text-nippon-gold-light font-sans text-luxury-sm px-3 py-1 border border-nippon-gold/30 hover:border-nippon-gold"
                      >
                        Clear all ({activeFiltersCount})
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Vehicle Display - SMOOTHER HOVER TRANSITIONS */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 gap-8 mb-20"
                    : "space-y-6 mb-20"
                }
              >
                {getFilteredFleet().map((vehicle, index) => (
                  <div
                    key={vehicle.id}
                    className={`group relative transition-all duration-300 ease-out overflow-hidden ${
                      viewMode === "grid"
                        ? "bg-nippon-warm-white shadow-luxury hover:shadow-luxury-hover hover:transform hover:-translate-y-2"
                        : "bg-nippon-warm-white shadow-luxury hover:shadow-luxury-hover flex hover:transform hover:-translate-y-1"
                    }`}
                    data-scroll-reveal
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Enhanced Badges */}
                    <div className="absolute top-4 left-4 z-20 flex space-x-2">
                      {vehicle.highlight && (
                        <Badge className="bg-nippon-black text-nippon-gold px-3 py-1 text-luxury-xs font-medium tracking-wider border-nippon-gold">
                          {vehicle.highlight}
                        </Badge>
                      )}
                      {vehicle.bookingCount > 2000 && (
                        <Badge className="bg-nippon-gold/20 text-nippon-gold text-luxury-xs px-2 py-1">
                          Top Choice
                        </Badge>
                      )}
                    </div>

                    {/* Availability & Favorite */}
                    <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
                      <button
                        onClick={() => toggleFavorite(vehicle.id)}
                        className="w-8 h-8 bg-nippon-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            favoriteVehicles.includes(vehicle.id)
                              ? "text-red-500 fill-current"
                              : "text-nippon-warm-white"
                          }`}
                        />
                      </button>
                      {getAvailabilityBadge(vehicle.availability)}
                    </div>

                    {/* Vehicle Image */}
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "grid"
                          ? "aspect-[16/9]"
                          : "w-64 h-48 flex-shrink-0"
                      }`}
                    >
                      <ImageWithFallback
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/50 via-nippon-black/10 to-transparent transition-all duration-300 group-hover:from-nippon-black/30"></div>

                      {/* Enhanced Service Icons */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-1">
                        {vehicle.airportTransfer && (
                          <Badge className="bg-nippon-black/80 text-nippon-warm-white text-luxury-xs px-2 py-1">
                            ✈️ Airport
                          </Badge>
                        )}
                        {vehicle.cityTour && (
                          <Badge className="bg-nippon-black/80 text-nippon-warm-white text-luxury-xs px-2 py-1">
                            🏛️ City
                          </Badge>
                        )}
                        {vehicle.businessMeeting && (
                          <Badge className="bg-nippon-black/80 text-nippon-warm-white text-luxury-xs px-2 py-1">
                            💼 Business
                          </Badge>
                        )}
                      </div>

                      {/* Quick Book Overlay */}
                      <div className="absolute inset-0 bg-nippon-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          onClick={() => handleVehicleSelect(vehicle.id)}
                          className="bg-nippon-gold text-nippon-black hover:bg-nippon-gold-light px-8 py-3 transform scale-90 group-hover:scale-100 transition-transform duration-300"
                        >
                          Quick Book
                        </Button>
                      </div>
                    </div>

                    {/* Enhanced Vehicle Details */}
                    <div
                      className={`p-6 space-y-4 ${
                        viewMode === "list" ? "flex-1" : ""
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h3 className="text-luxury-xl font-serif text-nippon-black leading-tight">
                              {vehicle.shortName}
                            </h3>
                            <div className="flex items-center space-x-3">
                              <p className="text-luxury-sm text-nippon-gold font-sans font-medium">
                                {vehicle.bestFor}
                              </p>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-nippon-gold fill-current" />
                                <span className="text-luxury-sm text-nippon-gold font-medium">
                                  {vehicle.popularRating}%
                                </span>
                                <span className="text-luxury-xs text-nippon-gray">
                                  ({vehicle.bookingCount} bookings)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-nippon-gray font-sans text-luxury-sm leading-relaxed">
                          {vehicle.description}
                        </p>

                        {/* Enhanced Tags */}
                        <div className="flex flex-wrap gap-1">
                          {vehicle.tags.slice(0, 3).map((tag, idx) => (
                            <Badge
                              key={idx}
                              className="bg-nippon-beige text-nippon-black text-luxury-xs px-2 py-0"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Specs Grid */}
                      <div className="grid grid-cols-4 gap-3 text-center py-4 border-y border-nippon-border">
                        <div className="space-y-1">
                          <div className="flex items-center justify-center space-x-1">
                            <Users className="w-4 h-4 text-nippon-gold" />
                            <span className="text-nippon-black font-medium text-luxury-sm">
                              {vehicle.minPassengers}–{vehicle.maxPassengers}
                            </span>
                          </div>
                          <div className="text-luxury-xs text-nippon-gray">
                            passengers
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-center space-x-1">
                            <Luggage className="w-4 h-4 text-nippon-gold" />
                            <span className="text-nippon-black font-medium text-luxury-sm">
                              {vehicle.luggage}
                            </span>
                          </div>
                          <div className="text-luxury-xs text-nippon-gray">
                            bags
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-center space-x-1">
                            <Clock className="w-4 h-4 text-nippon-gold" />
                            <span className="text-nippon-black font-medium text-luxury-sm">
                              1hr+
                            </span>
                          </div>
                          <div className="text-luxury-xs text-nippon-gray">
                            minimum
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-center space-x-1">
                            <Map className="w-4 h-4 text-nippon-gold" />
                            <span className="text-nippon-black font-medium text-luxury-sm">
                              {vehicle.coverage.split(",").length}
                            </span>
                          </div>
                          <div className="text-luxury-xs text-nippon-gray">
                            cities
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Pricing with Value Proposition */}
                      <div className="space-y-3">
                        <div className="bg-nippon-beige p-4 rounded-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-nippon-black font-serif text-luxury-lg font-medium">
                              ¥{vehicle.basePrice.toLocaleString()}
                            </span>
                            <span className="text-nippon-gold font-sans text-luxury-sm">
                              Best Value
                            </span>
                          </div>
                          <div className="text-nippon-gray font-sans text-luxury-xs mb-2">
                            first hour included • then ¥
                            {vehicle.hourlyRate.toLocaleString()}/hr
                          </div>
                          <div className="flex items-center justify-between text-luxury-xs">
                            <span className="text-nippon-gray">
                              Coverage: {vehicle.coverage}
                            </span>
                            <span className="text-nippon-gold">
                              Since {vehicle.yearIntroduced}
                            </span>
                          </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="grid grid-cols-2 gap-2">
                          {vehicle.features.slice(0, 2).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-1"
                            >
                              <Zap className="w-3 h-3 text-nippon-gold flex-shrink-0" />
                              <span className="text-luxury-xs text-nippon-gray truncate">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Actions */}
                      <div className="flex space-x-3 pt-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              onClick={() =>
                                setSelectedVehicleModal(vehicle.id)
                              }
                              style={{ color: "#000000" }}
                              className="flex-1 bg-transparent border border-nippon-black hover:bg-nippon-black hover:text-nippon-warm-white font-sans text-luxury-sm px-4 py-3 transition-all duration-300 font-medium"
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl bg-nippon-warm-white">
                            <DialogHeader>
                              <DialogTitle className="sr-only">
                                {vehicle.name} - Vehicle Details
                              </DialogTitle>
                              <DialogDescription className="sr-only">
                                Detailed information about the {vehicle.name}{" "}
                                including features, specifications, and pricing
                                for your chauffeur service booking.
                              </DialogDescription>
                            </DialogHeader>
                            <EnhancedVehicleModal vehicle={vehicle} />
                          </DialogContent>
                        </Dialog>

                        <Button
                          onClick={() => handleVehicleSelect(vehicle.id)}
                          className="flex-1 bg-nippon-gold text-nippon-black hover:bg-nippon-gold-dark font-sans text-luxury-sm px-4 py-3 transition-all duration-300 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1 font-medium"
                        >
                          <span className="flex items-center justify-center space-x-2">
                            <span>Reserve Now</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Enhanced Trust Indicators */}
      <section className="relative bg-nippon-warm-white section-padding-sm overflow-hidden">
        <div
          className="relative z-10 max-w-6xl mx-auto content-padding text-center"
          data-scroll-reveal
        >
          <div className="mb-12">
            <h2 className="text-luxury-3xl text-nippon-black font-serif mb-6">
              Why Choose Nippon Imperial
            </h2>
            <p className="text-luxury-lg text-nippon-gray font-sans max-w-2xl mx-auto">
              We've built our reputation on delivering exceptional experiences
              that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {trustMetrics.map((indicator, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="relative">
                  <div className="w-20 h-20 bg-nippon-gold rounded-full flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110">
                    <indicator.icon className="w-10 h-10 text-nippon-black" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-nippon-black text-nippon-gold rounded-full flex items-center justify-center text-luxury-xs font-medium">
                    {index + 1}
                  </div>
                </div>
                <div className="text-luxury-4xl text-nippon-gold font-serif">
                  {indicator.number}
                </div>
                <div className="text-luxury-lg text-nippon-black font-sans">
                  {indicator.label}
                </div>
                <div className="text-luxury-sm text-nippon-gray font-sans">
                  {indicator.subtext}
                </div>
                <div className="text-luxury-xs text-nippon-gold font-sans font-medium">
                  {indicator.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Social Proof & Testimonials */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        <div
          className="relative z-10 max-w-6xl mx-auto content-padding"
          data-scroll-reveal
        >
          <div className="text-center space-y-8 mb-12">
            <div className="inline-flex items-center space-x-2 bg-nippon-gold/10 px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-nippon-gold" />
              <span className="text-nippon-gold font-sans text-luxury-sm font-medium">
                CLIENT TESTIMONIALS
              </span>
            </div>
            <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight">
              Trusted by Global Leaders
            </h2>
            <p className="text-luxury-lg text-nippon-gray-light font-sans leading-relaxed max-w-3xl mx-auto">
              From Fortune 500 executives to discerning families, our clients
              trust us with their most important journeys across Japan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-nippon-warm-white p-8 shadow-luxury luxury-card-hover relative overflow-hidden"
                data-scroll-reveal
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Verified Badge */}
                {testimonial.verifiedClient && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/20 text-green-600 text-luxury-xs px-2 py-1">
                      ✓ Verified
                    </Badge>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-nippon-gold fill-current"
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <p className="text-nippon-gray font-sans italic leading-relaxed text-luxury-base">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-start space-x-4 pt-4 border-t border-nippon-gold/20">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="space-y-1">
                      <div className="text-nippon-black font-serif font-medium text-luxury-base">
                        {testimonial.name}
                      </div>
                      <div className="text-nippon-gray font-sans text-luxury-sm">
                        {testimonial.role}
                      </div>
                      <div className="text-nippon-gold font-sans text-luxury-xs font-medium">
                        {testimonial.company}
                      </div>
                      <div className="flex items-center space-x-4 text-nippon-gray text-luxury-xs">
                        <span>Service: {testimonial.service}</span>
                        <span>{testimonial.serviceDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Corporate Clients */}
          <div className="text-center space-y-8">
            <h3 className="text-luxury-2xl text-nippon-warm-white font-serif">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              <div className="text-nippon-gray-light font-serif text-luxury-lg">
                Goldman Sachs
              </div>
              <div className="text-nippon-gray-light font-serif text-luxury-lg">
                McKinsey & Co
              </div>
              <div className="text-nippon-gray-light font-serif text-luxury-lg">
                Four Seasons
              </div>
              <div className="text-nippon-gray-light font-serif text-luxury-lg">
                Sony Corporation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section - FIXED BADGE VISIBILITY */}
      <section className="relative bg-nippon-black section-padding overflow-hidden">
        <div
          className="relative z-10 max-w-4xl mx-auto content-padding"
          data-scroll-reveal
        >
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-nippon-gold/10 px-4 py-2 mb-4">
              <MessageCircle className="w-4 h-4 text-nippon-gold" />
              <span className="text-nippon-gold font-sans text-luxury-sm font-medium">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Everything You Need to Know
            </h2>
            <p className="text-luxury-lg text-nippon-gray-light font-sans leading-relaxed max-w-3xl mx-auto">
              Quick answers to common questions about our premium chauffeur
              services, booking process, and luxury travel experience.
            </p>
          </div>

          {/* FAQ Items - FIXED CATEGORY BADGE VISIBILITY */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-nippon-warm-white border-none rounded-sm overflow-hidden shadow-luxury"
                >
                  <AccordionTrigger className="text-nippon-black font-sans text-luxury-lg py-6 px-8 hover:text-nippon-gold transition-colors hover:no-underline font-medium [&[data-state=open]>svg]:rotate-180">
                    <span className="text-left flex items-center space-x-3">
                      <Badge
                        className="bg-nippon-gold text-nippon-black font-medium text-luxury-xs px-3 py-1 border border-nippon-gold-dark"
                        style={{
                          backgroundColor: "#D4AF37",
                          color: "#000000",
                          fontWeight: "600",
                        }}
                      >
                        {item.category}
                      </Badge>
                      <span className="text-nippon-black">{item.question}</span>
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-nippon-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent
                    className="font-sans leading-relaxed px-8 pb-6 pt-0 text-luxury-base"
                    style={{ color: "#333333" }}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          {/* Enhanced Contact CTA */}
          <div className="mt-20 pt-12 border-t border-nippon-gold/30">
            <div className="relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-nippon-gold rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-nippon-gold rounded-full opacity-50 animate-pulse"></div>
              </div>

              <div className="absolute top-8 left-8">
                <Sparkles className="w-6 h-6 text-nippon-gold opacity-60" />
              </div>
              <div className="absolute top-12 right-12">
                <Sparkles className="w-4 h-4 text-nippon-gold opacity-40" />
              </div>

              <div className="relative z-10 text-center space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-nippon-gold"></div>
                    <Star className="w-6 h-6 text-nippon-gold animate-pulse" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-nippon-gold"></div>
                  </div>

                  <h3 className="text-luxury-3xl text-nippon-warm-white font-serif leading-tight">
                    Still have questions?
                  </h3>

                  <p className="text-luxury-xl text-nippon-warm-white font-serif italic leading-relaxed max-w-2xl mx-auto">
                    Our luxury travel specialists are standing by to craft your
                    perfect Japanese experience.
                  </p>
                </div>

                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-nippon-gold to-nippon-gold-dark text-nippon-black hover:text-nippon-black font-sans text-luxury-lg px-16 py-6 transition-all duration-700 transform hover:-translate-y-3 shadow-gold hover:shadow-gold-hover luxury-button-gold border-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)",
                    boxShadow:
                      "0 8px 32px rgba(212, 175, 55, 0.4), 0 4px 16px rgba(212, 175, 55, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
                    borderRadius: "0",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <span className="relative flex items-center space-x-4 font-medium tracking-wider">
                    <MessageCircle className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-luxury-lg">
                      Contact Our Concierge Team
                    </span>
                    <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-1 h-1 bg-nippon-black rounded-full animate-bounce"></div>
                      <div
                        className="w-1 h-1 bg-nippon-black rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-nippon-black rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </span>
                </Button>

                <div className="flex items-center justify-center space-x-8 text-nippon-warm-white/80 text-luxury-sm font-sans mt-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-nippon-gold" />
                    <span>Immediate Response</span>
                  </div>
                  <div className="h-4 w-px bg-nippon-gold/30"></div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-nippon-gold" />
                    <span>Private & Secure</span>
                  </div>
                  <div className="h-4 w-px bg-nippon-gold/30"></div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-nippon-gold" />
                    <span>White-Glove Service</span>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-nippon-gold/20">
                  <p className="text-nippon-gold font-serif text-luxury-lg italic max-w-3xl mx-auto leading-relaxed">
                    "Experience the pinnacle of Japanese hospitality — where
                    every detail is crafted for your complete satisfaction."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Booking Form - IMPROVED FORM FIELD VISIBILITY */}
      {currentStep === "booking" && selectedVehicle && (
        <>
          <div className="relative bg-nippon-black">
            <div className="max-w-7xl mx-auto content-padding">
              <div className="flex items-center justify-center py-8">
                <div className="flex items-center space-x-4">
                  <div className="h-px w-24 bg-nippon-gold"></div>
                  <div className="w-4 h-4 bg-nippon-gold rounded-full"></div>
                  <div className="h-px w-24 bg-nippon-gold"></div>
                </div>
              </div>
            </div>
          </div>

          <section
            id="booking-form"
            className="relative bg-nippon-black section-padding overflow-hidden"
          >
            <div
              className="relative z-10 max-w-5xl mx-auto content-padding"
              data-scroll-reveal
            >
              <div className="grid md:grid-cols-3 gap-12">
                {/* Booking Form */}
                <div className="md:col-span-2">
                  <div className="text-center space-y-6 mb-12">
                    <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight">
                      Complete Your Reservation
                    </h2>
                    <p className="text-luxury-lg text-nippon-gray-light font-sans max-w-2xl mx-auto">
                      Secure your luxury chauffeur experience with our
                      streamlined booking process.
                    </p>
                  </div>

                  <form
                    onSubmit={handleFormSubmit}
                    className="space-y-8 bg-nippon-warm-white p-8 shadow-luxury"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="fullName"
                          className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                          style={{ color: "#000000" }}
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#000000",
                            borderColor: "rgba(0, 0, 0, 0.3)",
                          }}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="email"
                          className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                          style={{ color: "#000000" }}
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#000000",
                            borderColor: "rgba(0, 0, 0, 0.3)",
                          }}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="phone"
                        className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                        style={{ color: "#000000" }}
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                        style={{
                          backgroundColor: "#FFFFFF",
                          color: "#000000",
                          borderColor: "rgba(0, 0, 0, 0.3)",
                        }}
                        placeholder="+81 or international format"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <Label
                          htmlFor="date"
                          className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                          style={{ color: "#000000" }}
                        >
                          Service Date *
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            handleInputChange("date", e.target.value)
                          }
                          className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#000000",
                            borderColor: "rgba(0, 0, 0, 0.3)",
                          }}
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="startTime"
                          className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                          style={{ color: "#000000" }}
                        >
                          Pickup Time *
                        </Label>
                        <Input
                          id="startTime"
                          type="time"
                          value={formData.startTime}
                          onChange={(e) =>
                            handleInputChange("startTime", e.target.value)
                          }
                          className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#000000",
                            borderColor: "rgba(0, 0, 0, 0.3)",
                          }}
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="duration"
                          className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                          style={{ color: "#000000" }}
                        >
                          Service Duration *
                        </Label>
                        <Select
                          value={formData.duration}
                          onValueChange={(value) =>
                            handleInputChange("duration", value)
                          }
                        >
                          <SelectTrigger
                            className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                            style={{
                              backgroundColor: "#FFFFFF",
                              color: "#000000",
                              borderColor: "rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-hour">1 Hour</SelectItem>
                            <SelectItem value="2-hours">2 Hours</SelectItem>
                            <SelectItem value="3-hours">3 Hours</SelectItem>
                            <SelectItem value="half-day">
                              Half Day (4-6 hours)
                            </SelectItem>
                            <SelectItem value="full-day">
                              Full Day (8+ hours)
                            </SelectItem>
                            <SelectItem value="multi-day">Multi-day</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="pickupLocation"
                          className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                          style={{ color: "#000000" }}
                        >
                          Pickup Location *
                        </Label>
                        <Input
                          id="pickupLocation"
                          type="text"
                          value={formData.pickupLocation}
                          onChange={(e) =>
                            handleInputChange("pickupLocation", e.target.value)
                          }
                          className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#000000",
                            borderColor: "rgba(0, 0, 0, 0.3)",
                          }}
                          placeholder="Hotel, address, or landmark"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="dropoffLocation"
                          className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                          style={{ color: "#000000" }}
                        >
                          Destination
                        </Label>
                        <Input
                          id="dropoffLocation"
                          type="text"
                          value={formData.dropoffLocation}
                          onChange={(e) =>
                            handleInputChange("dropoffLocation", e.target.value)
                          }
                          className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#000000",
                            borderColor: "rgba(0, 0, 0, 0.3)",
                          }}
                          placeholder="Final destination (optional for tours)"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label
                          htmlFor="numberOfGuests"
                          className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                          style={{ color: "#000000" }}
                        >
                          Party Size *
                        </Label>
                        <Select
                          value={formData.numberOfGuests}
                          onValueChange={(value) =>
                            handleInputChange("numberOfGuests", value)
                          }
                        >
                          <SelectTrigger
                            className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                            style={{
                              backgroundColor: "#FFFFFF",
                              color: "#000000",
                              borderColor: "rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <SelectValue placeholder="Number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Just me</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5">5 Guests</SelectItem>
                            <SelectItem value="6">6 Guests</SelectItem>
                            <SelectItem value="7">7 Guests</SelectItem>
                            <SelectItem value="8">8+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="occasion"
                          className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                          style={{ color: "#000000" }}
                        >
                          Occasion
                        </Label>
                        <Select
                          value={formData.occasion}
                          onValueChange={(value) =>
                            handleInputChange("occasion", value)
                          }
                        >
                          <SelectTrigger
                            className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 font-sans"
                            style={{
                              backgroundColor: "#FFFFFF",
                              color: "#000000",
                              borderColor: "rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <SelectValue placeholder="Type of trip" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="business">
                              Business Travel
                            </SelectItem>
                            <SelectItem value="leisure">
                              Leisure/Tourism
                            </SelectItem>
                            <SelectItem value="family">
                              Family Vacation
                            </SelectItem>
                            <SelectItem value="cultural">
                              Cultural Experience
                            </SelectItem>
                            <SelectItem value="special">
                              Special Event
                            </SelectItem>
                            <SelectItem value="airport">
                              Airport Transfer
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="notes"
                        className="block text-nippon-black font-sans font-semibold text-luxury-base mb-2"
                        style={{ color: "#000000" }}
                      >
                        Special Requests & Preferences
                      </Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) =>
                          handleInputChange("notes", e.target.value)
                        }
                        className="w-full bg-white border-2 border-nippon-black/30 text-nippon-black px-4 py-3 rounded-none focus:border-nippon-gold focus:outline-none focus:ring-2 focus:ring-nippon-gold/20 transition-all duration-300 min-h-[120px] resize-none font-sans"
                        style={{
                          backgroundColor: "#FFFFFF",
                          color: "#000000",
                          borderColor: "rgba(0, 0, 0, 0.3)",
                        }}
                        placeholder="Share any special requirements, preferred routes, cultural interests, accessibility needs, or specific requests for your journey..."
                      />
                    </div>

                    <div className="bg-nippon-beige border-2 border-nippon-gold/20 p-6 rounded-sm">
                      <h4 className="text-nippon-black font-serif text-luxury-lg mb-4">
                        What's Included
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-nippon-gold" />
                          <span className="text-nippon-gray text-luxury-sm">
                            Professional chauffeur
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-nippon-gold" />
                          <span className="text-nippon-gray text-luxury-sm">
                            All fuel & tolls
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-nippon-gold" />
                          <span className="text-nippon-gray text-luxury-sm">
                            Cultural insights
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-nippon-gold" />
                          <span className="text-nippon-gray text-luxury-sm">
                            24/7 support
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="group relative overflow-hidden w-full bg-nippon-gold text-nippon-black hover:bg-nippon-gold-dark font-sans text-luxury-lg px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2"
                      >
                        <span className="relative flex items-center justify-center space-x-3">
                          <CreditCard className="w-5 h-5" />
                          <span className="tracking-wider font-medium">
                            Secure Booking & Payment
                          </span>
                          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Enhanced Booking Summary */}
                <div className="space-y-6">
                  <div className="bg-nippon-warm-white p-8 shadow-luxury sticky top-8">
                    <h3 className="text-nippon-black font-serif text-luxury-xl mb-6">
                      Booking Summary
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={getSelectedVehicle()?.image}
                          alt={getSelectedVehicle()?.name}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div>
                          <div className="text-nippon-black font-serif font-medium">
                            {getSelectedVehicle()?.name}
                          </div>
                          <div className="text-nippon-gold font-sans text-luxury-sm">
                            {getSelectedVehicle()?.bestFor}
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-nippon-border pt-4 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-nippon-gray">
                            Base service (1 hour)
                          </span>
                          <span className="text-nippon-black">
                            ¥{getSelectedVehicle()?.basePrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-nippon-gray">
                            Additional hours
                          </span>
                          <span className="text-nippon-gray">
                            ¥{getSelectedVehicle()?.hourlyRate.toLocaleString()}
                            /hour
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-nippon-border pt-4">
                        <h4 className="text-nippon-black font-serif text-luxury-base mb-3">
                          Premium Included
                        </h4>
                        <div className="space-y-2">
                          {getSelectedVehicle()
                            ?.amenities.slice(0, 4)
                            .map((amenity, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="w-3 h-3 text-nippon-gold" />
                                <span className="text-nippon-gray text-luxury-xs">
                                  {amenity}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-nippon-gold/10 border border-nippon-gold/20 p-6">
                    <h4 className="text-nippon-warm-white font-serif text-luxury-base mb-3">
                      Booking Protection
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-nippon-gold" />
                        <span className="text-nippon-gray-light text-luxury-sm">
                          Free cancellation up to 4 hours
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-nippon-gold" />
                        <span className="text-nippon-gray-light text-luxury-sm">
                          Instant confirmation
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-nippon-gold" />
                        <span className="text-nippon-gray-light text-luxury-sm">
                          24/7 support hotline
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Confirmation Section */}
      {currentStep === "confirmation" && (
        <section
          id="confirmation-section"
          className="relative bg-nippon-black section-padding overflow-hidden"
        >
          <div
            className="relative z-10 max-w-4xl mx-auto content-padding text-center"
            data-scroll-reveal
          >
            <div className="space-y-8">
              <div className="w-20 h-20 bg-nippon-gold rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-nippon-black" />
              </div>

              <h2 className="text-luxury-4xl text-nippon-warm-white font-serif">
                Booking Confirmed
              </h2>

              <p className="text-luxury-lg text-nippon-gray-light font-sans max-w-2xl mx-auto">
                Your luxury chauffeur service has been reserved. Check your
                email for confirmation details and next steps.
              </p>

              <div className="bg-nippon-warm-white/10 border border-nippon-gold/20 p-8 text-left max-w-2xl mx-auto">
                <h3 className="text-nippon-gold font-serif text-luxury-lg mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-nippon-gold rounded-full flex items-center justify-center text-nippon-black font-medium text-luxury-xs mt-1">
                      1
                    </div>
                    <div>
                      <div className="text-nippon-warm-white font-medium">
                        Confirmation Email
                      </div>
                      <div className="text-nippon-gray-light text-luxury-sm">
                        Sent within 5 minutes with booking details
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-nippon-gold rounded-full flex items-center justify-center text-nippon-black font-medium text-luxury-xs mt-1">
                      2
                    </div>
                    <div>
                      <div className="text-nippon-warm-white font-medium">
                        Concierge Contact
                      </div>
                      <div className="text-nippon-gray-light text-luxury-sm">
                        Personal contact 24 hours before service
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-nippon-gold rounded-full flex items-center justify-center text-nippon-black font-medium text-luxury-xs mt-1">
                      3
                    </div>
                    <div>
                      <div className="text-nippon-warm-white font-medium">
                        Luxury Experience
                      </div>
                      <div className="text-nippon-gray-light text-luxury-sm">
                        Your chauffeur arrives 15 minutes early
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="bg-nippon-gold text-nippon-black hover:bg-nippon-gold-dark px-12 py-4 font-sans text-luxury-lg">
                Return to Services
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// Enhanced Vehicle Modal Component
function EnhancedVehicleModal({ vehicle }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <h2 className="text-luxury-3xl text-nippon-black font-serif">
            {vehicle.name}
          </h2>
          <div className="flex items-center space-x-4">
            <p className="text-nippon-gold font-sans text-luxury-base font-medium">
              {vehicle.bestFor}
            </p>
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-nippon-gold fill-current" />
              <span className="text-nippon-black font-medium">
                {vehicle.popularRating}%
              </span>
              <span className="text-nippon-gray text-luxury-sm">
                ({vehicle.bookingCount} bookings)
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {vehicle.tags.map((tag, idx) => (
              <Badge
                key={idx}
                className="bg-nippon-gold/10 text-nippon-gold text-luxury-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Image Gallery */}
      <div className="space-y-4">
        <div className="aspect-video overflow-hidden rounded-sm relative">
          <img
            src={vehicle.images[currentImageIndex]}
            alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-nippon-black/80 text-nippon-warm-white px-3 py-1 rounded text-luxury-xs">
            {currentImageIndex + 1} of {vehicle.images.length}
          </div>
        </div>
        <div className="flex space-x-2">
          {vehicle.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-20 h-16 overflow-hidden rounded-sm border-2 transition-colors ${
                currentImageIndex === index
                  ? "border-nippon-gold"
                  : "border-nippon-border"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Tabs */}
      <div className="border-b border-nippon-border">
        <div className="flex space-x-8">
          {[
            { key: "overview", label: "Overview", icon: Car },
            { key: "features", label: "Features & Amenities", icon: Star },
            { key: "pricing", label: "Pricing & Policies", icon: CreditCard },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                activeTab === key
                  ? "border-nippon-gold text-nippon-gold"
                  : "border-transparent text-nippon-gray hover:text-nippon-black"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-sans font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Specifications */}
            <div>
              <h3 className="text-nippon-black font-serif text-luxury-xl mb-4">
                Vehicle Specifications
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 bg-nippon-beige rounded-sm">
                <div className="text-center space-y-2">
                  <Users className="w-8 h-8 text-nippon-gold mx-auto" />
                  <div className="text-nippon-black font-medium text-luxury-lg">
                    {vehicle.minPassengers}–{vehicle.maxPassengers}
                  </div>
                  <div className="text-nippon-gray text-luxury-sm">
                    Passengers
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <Luggage className="w-8 h-8 text-nippon-gold mx-auto" />
                  <div className="text-nippon-black font-medium text-luxury-lg">
                    {vehicle.luggage}
                  </div>
                  <div className="text-nippon-gray text-luxury-sm">
                    Luggage Pieces
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <Clock className="w-8 h-8 text-nippon-gold mx-auto" />
                  <div className="text-nippon-black font-medium text-luxury-lg">
                    1 hour+
                  </div>
                  <div className="text-nippon-gray text-luxury-sm">
                    Minimum Service
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <Map className="w-8 h-8 text-nippon-gold mx-auto" />
                  <div className="text-nippon-black font-medium text-luxury-lg">
                    {vehicle.coverage.split(",").length}
                  </div>
                  <div className="text-nippon-gray text-luxury-sm">
                    Coverage Areas
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-nippon-black font-serif text-luxury-xl mb-4">
                Perfect For
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {vehicle.occasions.map((occasion, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-nippon-beige rounded-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-nippon-gold flex-shrink-0" />
                    <span className="text-nippon-gray">{occasion}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-nippon-black font-serif text-luxury-xl mb-4">
                Service Area Coverage
              </h3>
              <p className="text-nippon-gray leading-relaxed mb-3">
                {vehicle.coverage}
              </p>
              <div className="text-luxury-sm text-nippon-gold">
                Serving these areas since {vehicle.yearIntroduced} •{" "}
                {vehicle.bookingCount}+ successful journeys
              </div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-nippon-black font-serif text-luxury-xl mb-4">
                Premium Vehicle Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vehicle.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-nippon-beige rounded-sm"
                  >
                    <Zap className="w-4 h-4 text-nippon-gold flex-shrink-0" />
                    <span className="text-nippon-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-nippon-black font-serif text-luxury-xl mb-4">
                Included Service Amenities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vehicle.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-nippon-beige rounded-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-nippon-gold flex-shrink-0" />
                    <span className="text-nippon-gray">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-nippon-black font-serif text-luxury-xl mb-4">
                Certifications & Awards
              </h3>
              <div className="flex flex-wrap gap-3">
                {vehicle.certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    className="bg-nippon-gold/20 text-nippon-gold px-3 py-2 text-luxury-sm"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "pricing" && (
          <div className="space-y-6">
            <div className="bg-nippon-beige p-6 rounded-sm">
              <h3 className="text-nippon-black font-serif text-luxury-xl mb-6">
                Transparent Pricing
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-luxury-lg">
                  <span className="text-nippon-black">
                    Base service (first hour)
                  </span>
                  <span className="text-nippon-black font-serif">
                    ¥{vehicle.basePrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-nippon-gray">Additional hours</span>
                  <span className="text-nippon-gray">
                    ¥{vehicle.hourlyRate.toLocaleString()}/hour
                  </span>
                </div>
                <div className="border-t border-nippon-border pt-4">
                  <div className="grid grid-cols-2 gap-4 text-luxury-sm">
                    <div>
                      <span className="text-nippon-gray block">
                        Half day (4 hours)
                      </span>
                      <span className="text-nippon-black font-medium">
                        ¥
                        {(
                          vehicle.basePrice +
                          vehicle.hourlyRate * 3
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-nippon-gray block">
                        Full day (8 hours)
                      </span>
                      <span className="text-nippon-black font-medium">
                        ¥
                        {(
                          vehicle.basePrice +
                          vehicle.hourlyRate * 7
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-nippon-black font-serif text-luxury-xl mb-4">
                Booking Policies
              </h3>
              <div className="space-y-3">
                <div className="p-4 border-l-4 border-nippon-gold bg-nippon-beige">
                  <div className="font-medium text-nippon-black">
                    Cancellation Policy
                  </div>
                  <div className="text-nippon-gray text-luxury-sm">
                    Free cancellation up to 4 hours before service. 50% charge
                    within 4 hours.
                  </div>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <div className="font-medium text-nippon-black">Payment</div>
                  <div className="text-nippon-gray text-luxury-sm">
                    Secure payment processed at booking. Major cards accepted.
                  </div>
                </div>
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <div className="font-medium text-nippon-black">
                    Service Guarantee
                  </div>
                  <div className="text-nippon-gray text-luxury-sm">
                    100% satisfaction guaranteed or full refund within 24 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
