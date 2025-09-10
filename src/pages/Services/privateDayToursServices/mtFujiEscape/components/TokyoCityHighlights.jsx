import { MapPin, Users, CheckCircle, Star, Award, Clock, ArrowRight, Compass, Calendar, Car, Luggage, MapIcon, Camera, TreePine, Building2, Shield, Coffee, X, Phone, Mail, Globe, ChevronDown, ChevronUp, Calculator, CreditCard, Check, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { useState, useEffect } from 'react';
import harajukuImage from 'figma:asset/210b6c32205622e96ec47f61d67564085ce91054.png';
import shibuyaImage from 'figma:asset/12633a6c078e7d41f71a169c7341e08ddd64cc79.png';
import imperialPalaceImage from 'figma:asset/c685448e42bd4dc116bfefc63bf745b81071f73b.png';
import ginzaImage from 'figma:asset/0c1553e9afbe64e24d9847c036f8aad7cc97deab.png';
import tsukijiImage from 'figma:asset/f3fbd0922d50526b0b5ba089a8d04d34af5319f7.png';
import tokyoTowerImage from 'figma:asset/a26961badfdf19824c99633ce0262145a328e7e2.png';
import tokyoNightSkylineImage from 'figma:asset/defc735fd260b7727cf105f3e931fc5e9eead62e.png';

export function TokyoCityHighlights() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [expandedItinerary, setExpandedItinerary] = useState<number | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourDate: '',
    pickupAddress: '',
    guestCount: '',
    luggageCount: '',
    specialNotes: ''
  });

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Price calculation
  useEffect(() => {
    if (selectedVehicle && formData.guestCount) {
      const basePrice = vehicles.find(v => v.id === selectedVehicle)?.basePrice || 75000;
      const guestMultiplier = parseInt(formData.guestCount) > 4 ? 1.2 : 1;
      setEstimatedPrice(Math.round(basePrice * guestMultiplier));
    }
  }, [selectedVehicle, formData.guestCount]);

  const itineraryHighlights = [
    {
      icon: Star,
      title: "Asakusa & Senso-ji Temple",
      description: "Tokyo's oldest Buddhist temple, paired with the vibrant Nakamise shopping street.",
      detailedDescription: "Begin your journey at Tokyo's spiritual heart, where centuries-old traditions thrive. Walk through the iconic Thunder Gate, browse traditional crafts on Nakamise Street, and experience the serene atmosphere of this 1,400-year-old temple.",
      duration: "90 minutes",
      highlights: ["Thunder Gate (Kaminarimon)", "Five-story Pagoda", "Traditional Shopping Street", "Temple Prayers"],
      image: "https://images.unsplash.com/photo-1667314432098-6fd47117aa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2FrdXNhJTIwU2Vuc28tamklMjB0ZW1wbGV8ZW58MXx8fHwxNzU1NTk1OTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: TreePine,
      title: "Meiji Jingu Shrine",
      description: "A serene Shinto sanctuary nestled in a tranquil forest — a spiritual haven in the heart of the city.",
      detailedDescription: "Step into a 175-acre forest oasis dedicated to Emperor Meiji. This sacred space offers a peaceful contrast to Tokyo's urban energy, featuring towering trees, traditional ceremonies, and Japan's most important Shinto shrine.",
      duration: "75 minutes",
      highlights: ["Sacred Forest Walk", "Main Shrine Building", "Traditional Ceremonies", "Peaceful Gardens"],
      image: "https://images.unsplash.com/photo-1720454206018-8d977e9e984a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZWlqaSUyMFNocmluZSUyMFRva3lvfGVufDF8fHx8MTc1NTU5NTk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Building2,
      title: "Omotesando & Harajuku",
      description: "Striking architecture, luxury boutiques, and Tokyo's most eclectic youth culture.",
      detailedDescription: "Discover Tokyo's creative pulse where high fashion meets street style. Marvel at architectural masterpieces by world-renowned designers, explore luxury flagships, and witness the colorful expression of Japanese youth culture.",
      duration: "2 hours",
      highlights: ["Luxury Flagship Stores", "Architectural Marvels", "Takeshita Street", "Kawaii Culture"],
      image: harajukuImage
    },
    {
      icon: Users,
      title: "Shibuya Scramble & Sky Deck",
      description: "Panoramic city views and the pulse of the world's busiest crossing.",
      detailedDescription: "Experience Tokyo's kinetic energy at the world's busiest intersection. Take in panoramic city views from Shibuya Sky, and feel the pulse of urban Japan as thousands of people cross in perfect choreographed chaos.",
      duration: "90 minutes",
      highlights: ["Shibuya Crossing Experience", "Sky Deck Panoramic Views", "Hachiko Statue", "Urban Energy"],
      image: shibuyaImage
    },
    {
      icon: TreePine,
      title: "Imperial Palace East Gardens",
      description: "Historic stone ruins and peaceful traditional gardens amid Tokyo's political heart.",
      detailedDescription: "Walk through Japan's imperial history in these meticulously maintained gardens. Explore ancient castle foundations, seasonal flora, and traditional landscape design that has inspired gardens worldwide.",
      duration: "75 minutes",
      highlights: ["Historic Castle Ruins", "Traditional Gardens", "Seasonal Flowers", "Imperial History"],
      image: imperialPalaceImage
    },
    {
      icon: Building2,
      title: "Ginza District",
      description: "Flagship fashion, modern art, and refined Japanese design in a luxury retail setting.",
      detailedDescription: "Stroll through Tokyo's most prestigious shopping district, where luxury meets Japanese refinement. Explore flagship stores, art galleries, and experience the sophisticated atmosphere of Japan's premier luxury destination.",
      duration: "2 hours",
      highlights: ["Luxury Shopping", "Art Galleries", "Fine Dining", "Sophisticated Architecture"],
      image: ginzaImage
    },
    {
      icon: Coffee,
      title: "Tsukiji Outer Market",
      description: "A culinary hub for fresh seafood, street food, and Japanese kitchen culture.",
      detailedDescription: "Immerse yourself in Tokyo's culinary soul at this vibrant market. Sample the freshest sushi, discover unique Japanese ingredients, and experience the energy of Tokyo's food culture at its most authentic.",
      duration: "90 minutes",
      highlights: ["Fresh Sushi Tasting", "Street Food Culture", "Japanese Ingredients", "Culinary Traditions"],
      image: tsukijiImage
    },
    {
      icon: Camera,
      title: "Tokyo Tower or Skytree (optional)",
      description: "Soar above the skyline with iconic views from one of Tokyo's tallest landmarks.",
      detailedDescription: "Crown your Tokyo experience with breathtaking panoramic views. Choose between the classic Tokyo Tower or the modern Skytree for unforgettable vistas spanning from Mount Fuji to Tokyo Bay.",
      duration: "60 minutes",
      highlights: ["Panoramic City Views", "Mount Fuji Visibility", "Sunset Experience", "Photo Opportunities"],
      image: tokyoTowerImage
    }
  ];

  const vehicles = [
    {
      id: 'sclass',
      name: 'Mercedes S-Class',
      image: "figma:asset/f77a1955b16c68feb7cfeaa3e2cd043382d997c2.png",
      guests: '1-3 guests',
      luggage: '2-3 large bags',
      rate: 'From ¥75,000',
      basePrice: 75000,
      description: 'Ultimate luxury sedan with premium comfort',
      features: ['Premium leather seats', 'Climate control', 'Wi-Fi', 'Bottled water', 'Phone chargers']
    },
    {
      id: 'vclass',
      name: 'Mercedes V-Class',
      image: "figma:asset/1abec3c99661c35bd51190c4ecccb5e06be8eaf9.png",
      guests: '4-6 guests',
      luggage: '4-6 large bags',
      rate: 'From ¥95,000',
      basePrice: 95000,
      description: 'Spacious luxury van for families and groups',
      features: ['Captain seats', 'Extra legroom', 'Privacy glass', 'Entertainment system', 'Refreshments']
    },
    {
      id: 'alphard',
      name: 'Toyota Alphard',
      image: "figma:asset/10f096718853d26c3e0b44de94b9b54501853194.png",
      guests: '4-7 guests',
      luggage: '4-6 large bags',
      rate: 'From ¥85,000',
      basePrice: 85000,
      description: 'Japanese luxury MPV with captain seats',
      features: ['Massage seats', 'Premium sound', 'Mood lighting', 'Sliding doors', 'Japanese hospitality']
    },
    {
      id: 'hiace',
      name: 'Toyota HiAce Premium',
      image: "https://images.unsplash.com/photo-1748621019980-8c9278b61974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBIaUFjZSUyMGx1eHVyeSUyMG1pbml2YW58ZW58MXx8fHwxNzU1NTk1OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      guests: '6-9 guests',
      luggage: '6-8 large bags',
      rate: 'From ¥105,000',
      basePrice: 105000,
      description: 'Premium minivan for larger groups',
      features: ['Spacious interior', 'Multiple seating configs', 'Group communication', 'Ample storage', 'Comfort features']
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Singapore",
      rating: 5,
      text: "The Tokyo City Highlights tour exceeded every expectation. Our chauffeur was punctual, knowledgeable, and made excellent recommendations. The flexibility to adjust our itinerary was perfect.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      location: "Los Angeles",
      rating: 5,
      text: "Absolutely flawless service. The Mercedes S-Class was immaculate, and seeing Tokyo's highlights in such comfort and style made this an unforgettable experience.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      location: "London",
      rating: 5,
      text: "From the Imperial Palace to Shibuya Crossing, every stop was perfectly timed. The luxury van accommodated our family of 5 beautifully. Worth every yen!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const included = [
    'Private luxury vehicle with professional chauffeur (full-day)',
    'Hotel pick-up and drop-off within Tokyo',
    'Bottled water and in-car Wi-Fi',
    'Fuel, tolls, and insurance',
    'Concierge support before and during the tour',
    'Flexible itinerary adjustments'
  ];

  const notIncluded = [
    'Meals and refreshments',
    'Entrance fees (e.g., observation decks)',
    'Licensed guide (available on request)',
    'Gratuities (optional but appreciated)'
  ];

 const handleVehicleSelect = (vehicleId) => {
  setSelectedVehicle(vehicleId);
  setShowBookingModal(true);
  setBookingStep(1);
};


  const handleVehicleChange = () => {
    setSelectedVehicle(null);
    setShowBookingModal(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      tourDate: '',
      pickupAddress: '',
      guestCount: '',
      luggageCount: '',
      specialNotes: ''
    });
  };

  const handleNextStep = () => {
    setBookingStep(bookingStep + 1);
  };

  const handlePreviousStep = () => {
    setBookingStep(bookingStep - 1);
  };

  const handleFormSubmit = (e) => {
  e.preventDefault();
  if (bookingStep < 3) {
    handleNextStep();
  } else {
    // Handle final submission - would integrate with Stripe
    console.log('Form submitted:', formData);
  }
};

  const scrollToVehicles = () => {
    document.getElementById('vehicle-selection')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleItinerary = (index) => {
  setExpandedItinerary(expandedItinerary === index ? null : index);
};

  const selectedVehicleData = vehicles.find(v => v.id === selectedVehicle);

  return (
    <div className="relative">
      {/* Progress Bar - Fixed Top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-nippon-black/20">
        <div 
          className="h-full bg-gradient-to-r from-nippon-gold via-nippon-gold-bright to-nippon-gold transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Enhanced Booking Modal - Compact Header, Maximum Form Space */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-0 bg-nippon-warm-white">
          <div className="relative">
            {/* Compact Sticky Header */}
            <div className="sticky top-0 z-10 bg-nippon-warm-white border-b border-nippon-border shadow-sm">
              <div className="px-6 py-4">
                <DialogHeader>
                  <DialogTitle className="text-luxury-xl text-nippon-black font-serif text-left">
                    Book Your Tokyo Experience
                  </DialogTitle>
                  <DialogDescription className="text-luxury-sm text-nippon-gray font-sans text-left">
                    Complete your booking details below
                  </DialogDescription>
                </DialogHeader>
                
                {/* Compact Vehicle & Price Summary */}
                {selectedVehicleData && (
                  <div className="mt-4 bg-nippon-gold/10 px-4 py-3 rounded border-l-3 border-nippon-gold">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Car className="w-4 h-4 text-nippon-gold" />
                        <div>
                          <span className="text-luxury-sm text-nippon-black font-serif">{selectedVehicleData.name}</span>
                          <span className="text-luxury-xs text-nippon-gray font-sans ml-2">• Tokyo City Highlights</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {estimatedPrice > 0 && (
                          <span className="text-luxury-lg text-nippon-gold font-serif">¥{estimatedPrice.toLocaleString()}</span>
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

            {/* Maximum Space Form Area */}
            <div className="p-6">
              <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto space-y-6">
                
                {/* Tour Details Section */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Tour Details
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">Basic information for your Tokyo experience</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tourDate" className="text-nippon-black font-serif flex items-center">
                        Tour Date <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="tourDate"
                        type="date"
                        value={formData.tourDate}
                        onChange={(e) => setFormData({...formData, tourDate: e.target.value})}
                        className="enhanced-luxury-input"
                        required
                      />
                      <p className="text-luxury-xs text-nippon-gray font-sans">Select your preferred tour date</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="guestCount" className="text-nippon-black font-serif flex items-center">
                        Number of Guests <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Select onValueChange={(value) => setFormData({...formData, guestCount: value})}>
                        <SelectTrigger className="enhanced-luxury-input">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num} Guest{num > 1 ? 's' : ''}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-luxury-xs text-nippon-gray font-sans">Used to validate vehicle capacity</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="luggageCount" className="text-nippon-black font-serif">Number of Luggage</Label>
                    <Select onValueChange={(value) => setFormData({...formData, luggageCount: value})}>
                      <SelectTrigger className="enhanced-luxury-input">
                        <SelectValue placeholder="Select luggage count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No luggage</SelectItem>
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <SelectItem key={num} value={num.toString()}>{num} bag{num > 1 ? 's' : ''}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-luxury-xs text-nippon-gray font-sans">For vehicle loading coordination</p>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="bg-nippon-warm-white/80 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Contact Information
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">For reservation and confirmation purposes</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-nippon-black font-serif flex items-center">
                        Full Name <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="enhanced-luxury-input"
                        placeholder="Your full name"
                        required
                      />
                      <p className="text-luxury-xs text-nippon-gray font-sans">For reservation and confirmation purposes</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-nippon-black font-serif flex items-center">
                        Email Address <span className="text-nippon-gold ml-1">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="enhanced-luxury-input"
                        placeholder="your@email.com"
                        required
                      />
                      <p className="text-luxury-xs text-nippon-gray font-sans">Used for confirmation, updates, and concierge follow-up</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-nippon-black font-serif flex items-center">
                      Phone Number <span className="text-nippon-gray-light text-luxury-xs ml-1">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="enhanced-luxury-input"
                      placeholder="+81 90-1234-5678 (international format supported)"
                    />
                    <p className="text-luxury-xs text-nippon-gray font-sans">Optional field - helpful for day-of contact if needed</p>
                  </div>
                </div>

                {/* Pickup Information Section */}
                <div className="bg-nippon-beige/30 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Pickup Information
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">Where should we meet you?</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickupAddress" className="text-nippon-black font-serif flex items-center">
                      Pickup Location (Hotel or Address in Tokyo) <span className="text-nippon-gold ml-1">*</span>
                    </Label>
                    <Input
                      id="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={(e) => setFormData({...formData, pickupAddress: e.target.value})}
                      className="enhanced-luxury-input"
                      placeholder="Hotel name or precise location for morning pickup"
                      required
                    />
                    <p className="text-luxury-xs text-nippon-gray font-sans">Enter hotel name or precise location for morning pickup</p>
                  </div>
                </div>

                {/* Special Requests Section */}
                <div className="bg-nippon-warm-white/80 p-6 rounded-lg border border-nippon-border space-y-4">
                  <div className="border-b border-nippon-gold/20 pb-3">
                    <h3 className="text-luxury-xl text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Special Requests
                    </h3>
                    <p className="text-luxury-sm text-nippon-gray font-sans">Any special requirements for your tour?</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialNotes" className="text-nippon-black font-serif flex items-center">
                      Special Requests / Notes <span className="text-nippon-gray-light text-luxury-xs ml-1">(optional)</span>
                    </Label>
                    <Textarea
                      id="specialNotes"
                      value={formData.specialNotes}
                      onChange={(e) => setFormData({...formData, specialNotes: e.target.value})}
                      className="enhanced-luxury-input min-h-[120px]"
                      placeholder="We'd love to prioritize food markets, or One guest has mobility concerns, dietary preferences, celebration occasions, etc."
                    />
                    <p className="text-luxury-xs text-nippon-gray font-sans">Open-ended field for any special requests or requirements</p>
                  </div>
                </div>

                {/* Auto-filled Information - Compact */}
                <div className="bg-nippon-gold/5 p-6 rounded-lg border-2 border-nippon-gold/20 space-y-3">
                  <div className="border-b border-nippon-gold/20 pb-2">
                    <h3 className="text-luxury-lg text-nippon-black font-serif mb-1 flex items-center">
                      <span className="w-2 h-2 bg-nippon-gold rounded-full mr-3"></span>
                      Tour Summary
                    </h3>
                    <p className="text-luxury-xs text-nippon-gray font-sans">Automatically filled based on your selections</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-nippon-warm-white p-4 rounded border border-nippon-gold/30">
                      <Label className="text-luxury-sm text-nippon-black font-serif">Selected Vehicle</Label>
                      <p className="text-luxury-sm text-nippon-black font-sans mt-1">{selectedVehicleData?.name}</p>
                    </div>
                    
                    <div className="bg-nippon-warm-white p-4 rounded border border-nippon-gold/30">
                      <Label className="text-luxury-sm text-nippon-black font-serif">Tour Name</Label>
                      <p className="text-luxury-sm text-nippon-black font-sans mt-1">Tokyo City Highlights</p>
                    </div>
                  </div>
                </div>

                {/* Dynamic Price Display - Compact */}
                {estimatedPrice > 0 && (
                  <div className="bg-nippon-gold/10 p-4 rounded border border-nippon-gold">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-luxury-lg text-nippon-black font-serif">Pricing Summary</h4>
                      <span className="text-luxury-xl text-nippon-gold font-serif">¥{estimatedPrice.toLocaleString()}</span>
                    </div>
                    
                    <div className="space-y-2 text-luxury-sm">
                      <div className="flex justify-between">
                        <span className="text-nippon-gray font-sans">Base price ({selectedVehicleData?.name}):</span>
                        <span className="text-nippon-black font-sans">¥{selectedVehicleData?.basePrice.toLocaleString()}</span>
                      </div>
                      
                      {parseInt(formData.guestCount) > 4 && (
                        <div className="flex justify-between">
                          <span className="text-nippon-gray font-sans">Group surcharge (5+ guests):</span>
                          <span className="text-nippon-black font-sans">+20%</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-nippon-gray font-sans">Taxes & fees:</span>
                        <span className="text-nippon-black font-sans">Included</span>
                      </div>
                    </div>
                    
                    <p className="text-luxury-xs text-nippon-gray font-sans text-center mt-3">
                      Final price confirmed after booking review. No hidden fees.
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                  <Button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.tourDate || !formData.guestCount || !formData.pickupAddress}
                    className="w-full bg-nippon-gold hover:bg-nippon-gold-dark text-nippon-black font-serif text-luxury-base px-6 py-4 transition-all duration-300 shadow-gold hover:shadow-gold-hover disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <CreditCard className="w-4 h-4" />
                      <span>Proceed to Payment</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                  
                  <p className="text-luxury-xs text-nippon-gray font-sans text-center">
                    Payment collected at time of booking. You'll receive an auto-confirmation email with all tour details.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section - Enhanced with Better CTA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1645273093011-f2ecef5fdd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGlidXlhJTIwY3Jvc3NpbmclMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc1NTU5NTk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
              filter: 'brightness(0.7) contrast(1.2) saturate(1.1)',
              animation: 'cinematicZoom 30s ease-in-out infinite alternate'
            }}
          ></div>
          
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1578910537786-301723c3382d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaW56YSUyMFRva3lvJTIwbHV4dXJ5JTIwc3RyZWV0fGVufDF8fHx8MTc1NTU5NTk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
              filter: 'brightness(0.4) blur(2px)',
              animation: 'cinematicFloat 35s ease-in-out infinite alternate-reverse'
            }}
          ></div>
          
          <div 
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              background: 'radial-gradient(ellipse at 70% 30%, rgba(255, 215, 0, 0.3) 0%, rgba(212, 175, 55, 0.2) 40%, transparent 80%)',
              animation: 'gradientMove 40s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        <div className="absolute inset-0 bg-nippon-black/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/40 via-nippon-black/15 to-nippon-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/30 via-transparent to-nippon-black/20 z-10"></div>
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-8 blur-3xl z-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-nippon-gold-bright opacity-6 blur-3xl z-10"></div>
        
        <div className="absolute inset-0 z-15" style={{
          background: 'radial-gradient(ellipse at center, transparent 15%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0.7) 100%)'
        }}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-8" data-scroll-reveal>
          <div className="max-w-4xl text-center">
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
                style={{
                  textShadow: '0 4px 32px rgba(0, 0, 0, 0.9), 0 2px 16px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.4)'
                }}>
              Tokyo City Highlights
            </h1>
            
            <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>
            
            <div className="space-y-12 max-w-3xl mx-auto">
              <p className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed text-center"
                 style={{
                   textShadow: '0 4px 24px rgba(0, 0, 0, 0.9), 0 2px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)'
                 }}>
                A curated journey through Tokyo's vibrant contrasts — from timeless shrines to cutting-edge design.
              </p>

              <div className="grid grid-cols-3 gap-8 py-8">
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">8</div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">Iconic Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">10</div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">Hours Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">100%</div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">Private Experience</div>
                </div>
              </div>
            </div>

            <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToVehicles}
                className="group relative overflow-hidden bg-nippon-gold text-nippon-black hover:bg-nippon-gold-dark font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2"
              >
                <span className="relative flex items-center space-x-3">
                  <Car className="w-4 h-4" />
                  <span className="tracking-wider font-medium">Choose Your Vehicle</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button
                onClick={() => document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative flex items-center space-x-3">
                  <MapIcon className="w-4 h-4" />
                  <span className="tracking-wider font-medium">View Itinerary</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Introduction - Enhanced */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto content-padding text-center" data-scroll-reveal>
          <div className="space-y-12">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <MapIcon className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>

            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-3xl mx-auto">
              Discover Tokyo's many layers in a single, elegant day. From the historic streets of Asakusa to the sleek sophistication of Ginza, this tour blends culture, architecture, and atmosphere — with a flexible route tailored to your pace.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Shield className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">Licensed & Insured</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">5-Star Rated</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">2000+ Guests</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-nippon-gold mx-auto mb-3" />
                <div className="text-luxury-sm text-nippon-black font-serif">24/7 Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Itinerary Highlights */}
      <section id="itinerary" className="relative bg-nippon-black section-padding overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Interactive Itinerary
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Click on each location to explore detailed information and highlights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {itineraryHighlights.map((highlight, index) => (
              <div
                key={index}
                className={`group relative bg-nippon-warm-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold cursor-pointer ${
                  expandedItinerary === index ? 'col-span-full md:col-span-2' : ''
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent"></div>
                  
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
                    {expandedItinerary === index ? <ChevronUp className="w-5 h-5 text-nippon-gold" /> : <ChevronDown className="w-5 h-5 text-nippon-gold" />}
                  </div>
                  
                  <p className="text-luxury-sm text-nippon-gray leading-relaxed font-sans">
                    {expandedItinerary === index ? highlight.detailedDescription : highlight.description}
                  </p>

                  {expandedItinerary === index && (
                    <div className="mt-4 space-y-3 border-t border-nippon-border pt-4">
                      <h4 className="text-luxury-sm text-nippon-black font-serif">Highlights Include:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {highlight.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-nippon-gold flex-shrink-0" />
                            <span className="text-luxury-xs text-nippon-gray font-sans">{item}</span>
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
              Flexible routing based on traffic, your interests, and optimal timing for each location.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Duration & Details */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto content-padding" data-scroll-reveal>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
                Tour Details
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">Duration: 10 hours</p>
                    <p className="text-luxury-base text-nippon-gray font-sans">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Users className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">Perfect For:</p>
                    <p className="text-luxury-base text-nippon-gray font-sans">First-time visitors, families, photographers</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">Availability:</p>
                    <p className="text-luxury-base text-nippon-gray font-sans">Daily, advance booking required</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-luxury-2xl text-nippon-black font-serif">What's Included</h3>
              <div className="space-y-3">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-nippon-gold mt-0.5 flex-shrink-0" />
                    <p className="text-luxury-base text-nippon-gray font-sans">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-luxury-2xl text-nippon-black font-serif">What's Not Included</h3>
              <div className="space-y-3">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-nippon-gray mt-0.5 flex-shrink-0" />
                    <p className="text-luxury-base text-nippon-gray font-sans">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selection with Immediate Booking */}
      <section id="vehicle-selection" className="relative bg-nippon-black section-padding overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-5xl text-nippon-warm-white font-serif leading-tight">
              Choose Your Luxury Vehicle
            </h2>
            <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
              Select your preferred vehicle to start the booking process with instant pricing.
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/40 via-nippon-black/10 to-transparent"></div>
                  
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
                      <span className="text-luxury-sm text-nippon-gray font-sans">{vehicle.guests}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Luggage className="w-4 h-4 text-nippon-gold" />
                      <span className="text-luxury-sm text-nippon-gray font-sans">{vehicle.luggage}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-luxury-sm text-nippon-black font-serif">Features:</h4>
                    {vehicle.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-nippon-gold flex-shrink-0" />
                        <span className="text-luxury-xs text-nippon-gray font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-nippon-gold hover:bg-nippon-gold-dark text-nippon-black font-serif text-luxury-sm px-4 py-3 transition-all duration-300 shadow-gold hover:shadow-gold-hover">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Select Vehicle</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
              What Our Guests Say
            </h2>
            <p className="text-luxury-lg text-nippon-gray font-sans leading-relaxed max-w-2xl mx-auto">
              Real experiences from travelers who've discovered Tokyo with Nippon Imperial.
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
                      <Star key={i} className="w-4 h-4 fill-nippon-gold text-nippon-gold" />
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
                      <p className="text-luxury-base text-nippon-black font-serif">{testimonial.name}</p>
                      <p className="text-luxury-sm text-nippon-gray font-sans">{testimonial.location}</p>
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
        <div className="relative z-10 max-w-4xl mx-auto content-padding text-center" data-scroll-reveal>
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight">
                Need Assistance?
              </h2>
              
              <p className="text-luxury-xl text-nippon-gray-light font-sans leading-relaxed max-w-2xl mx-auto">
                Our concierge team is available 24/7 to customize your Tokyo experience and answer any questions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-nippon-gold mx-auto mb-4" />
                <p className="text-luxury-base text-nippon-warm-white font-serif">Call Us</p>
                <p className="text-luxury-sm text-nippon-gray-light font-sans">+81 3-1234-5678</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-nippon-gold mx-auto mb-4" />
                <p className="text-luxury-base text-nippon-warm-white font-serif">Email Us</p>
                <p className="text-luxury-sm text-nippon-gray-light font-sans">concierge@nipponimperial.com</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-nippon-gold mx-auto mb-4" />
                <p className="text-luxury-base text-nippon-warm-white font-serif">Live Chat</p>
                <p className="text-luxury-sm text-nippon-gray-light font-sans">Available on website</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}