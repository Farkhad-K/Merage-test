import { MapPin, Users, CheckCircle, Star, Award, Clock, ArrowRight, Compass, Calendar, Car, Luggage, MapIcon, Camera, TreePine, Building2, Shield, Coffee, X, Phone, Mail, Globe, ChevronDown, ChevronUp, Calculator, CreditCard, Check, ChevronLeft, Mountain, Flower2, Palette, Cable, Ship, Waves, Flame } from 'lucide-react';
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
import sClassImage from '../assets/sClass.png';
import vClassImage from '../assets/1abec3c99661c35bd51190c4ecccb5e06be8eaf9.png';
import alphardImage from '../assets/10f096718853d26c3e0b44de94b9b54501853194.png';
import hiaceImage from '../assets/d28d3e789c7a5e943af014e9dfb7bd39c9bd8ab6.png';
import toshoguShrineImage from '../assets/toshoguShrineImage.jpg';
import shinkyoBridgeImage from '../assets/shinkyoBridgeImage.jpg';
import lakeChuzenjiImage from '../assets/lakeChuzenjiImage.jpg';
import irohazakaRoadImage from '../assets/irohazakaRoadImage.jpg';

export default function NikkoCulturalDiscovery() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [expandedItinerary, setExpandedItinerary] = useState(null);
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
      const basePrice = vehicles.find(v => v.id === selectedVehicle)?.basePrice || 150000;
      const guestMultiplier = parseInt(formData.guestCount) > 4 ? 1.2 : 1;
      setEstimatedPrice(Math.round(basePrice * guestMultiplier));
    }
  }, [selectedVehicle, formData.guestCount]);

  const itineraryHighlights = [
    {
      icon: Building2,
      title: "Toshogu Shrine",
      description: "Lavishly decorated resting place of Tokugawa Ieyasu, Japan's first shogun.",
      detailedDescription: "Step into the opulent world of the Tokugawa era at this UNESCO World Heritage shrine complex, where thousands of intricate wood carvings, gold leaf decorations, and colorful paintings create a breathtaking display of Edo-period artistry. This sacred site, dedicated to Japan's first shogun, represents the pinnacle of Japanese decorative architecture.",
      duration: "90 minutes",
      highlights: ["UNESCO World Heritage", "Tokugawa Mausoleum", "Intricate Wood Carvings", "Gold Leaf Decorations"],
      image: toshoguShrineImage
    },
    {
      icon: Cable,
      title: "Shinkyo Bridge",
      description: "One of Japan's three most beautiful bridges, a sacred vermillion gateway to Nikko's shrines.",
      detailedDescription: "Cross the legendary Shinkyo Bridge, a stunning vermillion lacquered bridge that has served as the sacred entrance to Nikko's shrine district for over 350 years. This architectural masterpiece spans the Daiya River with elegant curves that embody traditional Japanese aesthetics. Considered one of Japan's three most beautiful bridges, its brilliant red color against the mountain backdrop creates one of the most photographed scenes in all of Japan.",
      duration: "45 minutes",
      highlights: ["Sacred Bridge", "Traditional Architecture", "Photography Icon", "Cultural Symbol"],
      image: shinkyoBridgeImage
    },
    {
      icon: Waves,
      title: "Kegon Falls",
      description: "One of Japan's most famous waterfalls, plunging dramatically into a rocky basin.",
      detailedDescription: "Marvel at the spectacular 97-meter cascade of Kegon Falls, one of Japan's three most beautiful waterfalls. Fed by Lake Chuzenji above, this natural wonder creates a mesmerizing display as it plunges into the Daiya River gorge below. The observation deck and elevator provide stunning viewpoints, especially during autumn foliage season.",
      duration: "60 minutes",
      highlights: ["97-Meter Waterfall", "Observation Deck", "Autumn Colors", "Natural Wonder"],
      image: "https://images.unsplash.com/photo-1698618416413-f5e57f530bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZWdvbiUyMEZhbGxzJTIwTmlra28lMjB3YXRlcmZhbGx8ZW58MXx8fHwxNzU1NjcyODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Mountain,
      title: "Lake Chuzenji",
      description: "Tranquil crater lake at the foot of Mt. Nantai with panoramic mountain reflections.",
      detailedDescription: "Discover the serene beauty of Lake Chuzenji, a pristine crater lake formed over 20,000 years ago at the foot of the sacred Mt. Nantai. This alpine sanctuary offers breathtaking reflections of surrounding mountains, peaceful walking paths, and a spiritual atmosphere that has inspired poets and artists for centuries.",
      duration: "75 minutes",
      highlights: ["Crater Lake Beauty", "Mt. Nantai Views", "Alpine Serenity", "Photography Paradise"],
      image: lakeChuzenjiImage
    },
    {
      icon: TreePine,
      title: "Irohazaka Winding Road",
      description: "A scenic and iconic ascent with 48 curves through Nikko's forests.",
      detailedDescription: "Experience one of Japan's most famous mountain roads, where 48 curves wind through pristine forests, each named after a character from the traditional Japanese alphabet. This engineering marvel offers spectacular seasonal views, from vibrant autumn foliage to winter snow scenes, creating an unforgettable journey through Nikko's natural beauty.",
      duration: "45 minutes",
      highlights: ["48 Named Curves", "Forest Scenery", "Seasonal Beauty", "Engineering Marvel"],
      image: irohazakaRoadImage
    },
    {
      icon: Coffee,
      title: "Traditional Japanese Lunch (Recommended)",
      description: "Dine near the lake or river, savoring regional flavors.",
      detailedDescription: "Savor the authentic flavors of Nikko's regional cuisine at a carefully selected traditional restaurant. Enjoy seasonal specialties that reflect the mountain region's bounty, from fresh river fish to locally grown vegetables, all prepared with centuries-old techniques and presented in the elegant Japanese style.",
      duration: "90 minutes",
      highlights: ["Regional Specialties", "Seasonal Ingredients", "Traditional Preparation", "Scenic Dining"],
      image: "https://images.unsplash.com/photo-1719464453353-abffa00097ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwbHVuY2glMjBjdWlzaW5lfGVufDF8fHx8MTc1NTY3Mjg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const vehicles = [
    {
      id: 'sclass',
      name: 'Mercedes S-Class',
      image: sClassImage,
      guests: '1-3 guests',
      rate: 'From ¥150,000',
      basePrice: 150000,
      description: 'Ultimate luxury sedan with premium comfort',
      features: ['Premium leather seats', 'Climate control', 'Wi-Fi', 'Bottled water', 'Phone chargers']
    },
    {
      id: 'vclass',
      name: 'Mercedes V-Class',
      image: vClassImage,
      guests: '4-6 guests',
      rate: 'From ¥105,000',
      basePrice: 105000,
      description: 'Spacious luxury van for families and groups',
      features: ['Captain seats', 'Extra legroom', 'Privacy glass', 'Entertainment system', 'Refreshments']
    },
    {
      id: 'alphard',
      name: 'Toyota Alphard',
      image: alphardImage,
      guests: '4-7 guests',
      rate: 'From ¥90,000',
      basePrice: 90000,
      description: 'Japanese luxury MPV with captain seats',
      features: ['Massage seats', 'Premium sound', 'Mood lighting', 'Sliding doors', 'Japanese hospitality']
    },
    {
      id: 'hiace',
      name: 'Toyota HiAce Premium',
      image: hiaceImage,
      guests: '6-9 guests',
      rate: 'From ¥105,000',
      basePrice: 105000,
      description: 'Premium minivan for larger groups',
      features: ['Spacious interior', 'Multiple seating configs', 'Group communication', 'Ample storage', 'Comfort features']
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      text: "The Nikko Cultural Discovery was absolutely breathtaking. Toshogu Shrine's intricate details were mesmerizing, and the autumn colors at Kegon Falls were unforgettable. Perfect blend of culture and nature.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      location: "London",
      rating: 5,
      text: "A truly spiritual experience at the UNESCO World Heritage sites. The journey through Irohazaka's winding road was scenic perfection, and our traditional lunch overlooking Lake Chuzenji was sublime.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      location: "New York",
      rating: 5,
      text: "Exceptional cultural immersion in Nikko. The contrast between the lavish Toshogu decorations and the natural beauty of the mountain scenery created the perfect Japanese experience.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const included = [
    'Private luxury vehicle with professional chauffeur (round-trip from Tokyo)',
    'Hotel pick-up and drop-off within Tokyo',
    'Bottled water and in-car Wi-Fi',
    'Fuel, tolls, and insurance',
    'Concierge support before and during the tour',
    'Flexible itinerary adjustments'
  ];

  const notIncluded = [
    'Meals and refreshments',
    'Entrance tickets (e.g., shrine, elevator at falls)',
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

      {/* Enhanced Booking Modal - EXACT MATCH */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-0 bg-nippon-warm-white">
          <div className="relative">
            {/* Compact Sticky Header */}
            <div className="sticky top-0 z-10 bg-nippon-warm-white border-b border-nippon-border shadow-sm">
              <div className="px-6 py-4">
                <DialogHeader>
                  <DialogTitle className="text-luxury-xl text-nippon-black font-serif text-left">
                    Book Your Nikko Cultural Discovery
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
                          <span className="text-luxury-xs text-nippon-gray font-sans ml-2">• Nikko Cultural Discovery</span>
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
                    <p className="text-luxury-sm text-nippon-gray font-sans">Basic information for your Nikko Cultural Discovery</p>
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
                      placeholder="Cultural interests, avoid long hikes, interested in seasonal foliage, photography preferences, etc."
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
                      <p className="text-luxury-sm text-nippon-black font-sans mt-1">Nikko Cultural Discovery</p>
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

                {/* Action Buttons - Updated to Match View Itinerary Style */}
                <div className="pt-4 space-y-3">
                  <Button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.tourDate || !formData.guestCount || !formData.pickupAddress}
                    className="group relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-6 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                    style={{
                      backdropFilter: 'blur(20px)',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-2">
                      <CreditCard className="w-4 h-4" />
                      <span className="tracking-wider font-medium">Proceed to Payment</span>
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

      {/* Hero Section - Enhanced with Nikko Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Main Background - Nikko Image */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672026365121-d94661de37d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtrbyUyMGF1dHVtbiUyMGZvbGlhZ2UlMjB0ZW1wbGV8ZW58MXx8fHwxNzU1NjcyODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Nikko temples and autumn foliage"
            className="w-full h-full object-cover scale-110"
            style={{
              filter: 'brightness(0.7) contrast(1.1) saturate(1.2)',
              animation: 'cinematicZoom 30s ease-in-out infinite alternate'
            }}
          />
          
          {/* Subtle overlay to enhance the spiritual atmosphere */}
          <div 
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              background: 'radial-gradient(ellipse at 40% 60%, rgba(212, 175, 55, 0.15) 0%, rgba(26, 26, 45, 0.1) 40%, transparent 80%)',
              animation: 'gradientMove 40s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        {/* Enhanced overlays for better text readability */}
        <div className="absolute inset-0 bg-nippon-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/50 via-nippon-black/20 to-nippon-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/40 via-transparent to-nippon-black/30 z-10"></div>
        
        {/* Subtle golden glow effects to complement the cultural atmosphere */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-nippon-gold opacity-5 blur-3xl z-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-nippon-gold-bright opacity-4 blur-3xl z-10"></div>
        
        {/* Enhanced vignette effect */}
        <div className="absolute inset-0 z-15" style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.6) 100%)'
        }}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-8" data-scroll-reveal>
          <div className="max-w-4xl text-center">
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
                style={{
                  textShadow: '0 4px 32px rgba(0, 0, 0, 0.9), 0 2px 16px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.3)'
                }}>
              Nikko Cultural Discovery
            </h1>
            
            <div className="h-px w-48 mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>
            
            <div className="space-y-12 max-w-3xl mx-auto">
              <p className="text-luxury-2xl text-nippon-warm-white font-serif italic leading-relaxed text-center"
                 style={{
                   textShadow: '0 4px 24px rgba(0, 0, 0, 0.9), 0 2px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)'
                 }}>
                A sacred mountain escape filled with heritage, forested landscapes, and World Heritage beauty — all within reach of Tokyo.
              </p>

              <div className="grid grid-cols-3 gap-8 py-8">
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">6</div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">Cultural Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">11</div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">Hours Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-luxury-3xl text-nippon-gold font-serif mb-2">100%</div>
                  <div className="text-luxury-sm text-nippon-warm-white font-sans">Private Experience</div>
                </div>
              </div>
            </div>

            {/* Updated Hero CTAs to Match View Itinerary Style */}
            <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToVehicles}
                className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
              >
                <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
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

      {/* Tour Introduction - COMPACT PADDING */}
      <section className="relative bg-nippon-warm-white section-padding-compact overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto content-padding text-center" data-scroll-reveal>
          <div className="space-y-12">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-16 bg-nippon-gold"></div>
              <Building2 className="w-8 h-8 text-nippon-gold" />
              <div className="h-px w-16 bg-nippon-gold"></div>
            </div>

            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-3xl mx-auto">
              Venture into the mysticism and grandeur of Nikko — a UNESCO World Heritage region where Shinto legends, Edo architecture, and mountain serenity converge. This full-day private tour invites you to breathe fresh alpine air, explore ancient shrines, and connect with Japan's spiritual heartland.
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
                <div className="text-luxury-sm text-nippon-black font-serif">1500+ Guests</div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {itineraryHighlights.map((highlight, index) => (
              <div
                key={index}
                className={`group relative bg-nippon-warm-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden border-l-4 border-nippon-gold cursor-pointer ${
                  expandedItinerary === index ? 'col-span-full md:col-span-2 lg:col-span-2' : ''
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
              Your guide and driver will adapt the route to your pace, interests, and weather conditions for optimal experience.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Duration & Details - COMPACT PADDING */}
      <section className="relative bg-nippon-warm-white section-padding-compact overflow-hidden">
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
                    <p className="text-luxury-lg text-nippon-black font-serif">Duration: 10-11 hours</p>
                    <p className="text-luxury-base text-nippon-gray font-sans">8:00 AM - 7:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Users className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">Perfect For:</p>
                    <p className="text-luxury-base text-nippon-gray font-sans">Nature lovers, spiritual travelers, heritage photographers</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-nippon-gold" />
                  <div>
                    <p className="text-luxury-lg text-nippon-black font-serif">Availability:</p>
                    <p className="text-luxury-base text-nippon-gray font-sans">Daily, weather dependent (advance booking required)</p>
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

      {/* Vehicle Selection */}
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
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-luxury-sm text-nippon-black font-serif">Premium Features:</h4>
                    {vehicle.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-nippon-gold flex-shrink-0" />
                        <span className="text-luxury-xs text-nippon-gray font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Updated Vehicle Select Button to Match View Itinerary Style */}
                  <Button 
                    className="group relative overflow-hidden w-full bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-sm px-4 py-3 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold"
                    style={{
                      backdropFilter: 'blur(10px)',
                      backgroundColor: 'rgba(248, 246, 240, 0.1)',
                    }}
                  >
                    <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="relative flex items-center justify-center space-x-2 text-nippon-gold group-hover:text-nippon-black">
                      <span className="tracking-wider font-medium">Select Vehicle</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials - COMPACT PADDING */}
      <section className="relative bg-nippon-warm-white section-padding-compact overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          <div className="text-center space-y-8 mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight">
              What Our Guests Say
            </h2>
            <p className="text-luxury-lg text-nippon-gray font-sans leading-relaxed max-w-2xl mx-auto">
              Real experiences from travelers who've discovered Nikko's cultural heritage with Nippon Imperial.
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
                Our concierge team is available 24/7 to customize your Nikko cultural discovery and answer any questions.
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
                <p className="text-luxury-sm text-nippon-gray-light font-sans">nikko@nipponimperial.com</p>
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