import { useState } from 'react';
import { Plane, CheckCircle, ArrowRight, Clock, Star, Award, Car, Shield, Route, Users, Crown, Zap, MapPin, Luggage, Timer, PlaneLanding, PlaneTakeoff, X, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import the premium vehicle images
import mercedesSClassImage from '../assets/car1.png';
import mercedesVClassImage from '../assets/car2.png';
import toyotaHiAceImage from '../assets/car4.png';

// Keep the existing Alphard image
import alphardImage from '../assets/car3.png';

// Import the luxury car and jet background image for hero
import luxuryCarJetBackground from '../assets/image.png';


export default function AirportTransfers() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [transferType, setTransferType] = useState('airport');
  const [showModal, setShowModal] = useState(false);
  const [openFAQs, setOpenFAQs] = useState([]);

  const fleetOptions = [
    {
      name: "Mercedes-Benz S-Class",
      capacity: "1–2 guests",
      luggage: "2 suitcases",
      naritaPrice: "¥30,000",
      hanedaPrice: "¥18,000",
      image: mercedesSClassImage,
      features: ["Ultimate luxury", "Business class", "Premium materials"]
    },
    {
      name: "Mercedes-Benz V-Class",
      capacity: "4–5 guests",
      luggage: "5 suitcases",
      naritaPrice: "¥25,000",
      hanedaPrice: "¥18,000",
      image: mercedesVClassImage,
      features: ["Group comfort", "Premium van", "Business interior"]
    },
    {
      name: "Toyota Alphard",
      capacity: "3–4 guests",
      luggage: "4 suitcases",
      naritaPrice: "¥25,000",
      hanedaPrice: "¥18,000",
      image: alphardImage,
      features: ["Premium comfort", "Executive seating", "Spacious interior"]
    },
    {
      name: "Toyota HiAce Premium",
      capacity: "6–8 guests",
      luggage: "9 suitcases",
      naritaPrice: "¥25,000",
      hanedaPrice: "¥18,000",
      image: toyotaHiAceImage,
      features: ["Large groups", "Maximum luggage", "Extended comfort"]
    }
  ];

  const testimonials = [
    {
      name: "James Wellington",
      title: "Managing Director",
      content: "Our chauffeur was waiting with a name sign exactly where promised. Despite our 2-hour flight delay, he tracked our arrival and was perfectly on time. The Mercedes was immaculate.",
      rating: 5,
      route: "Narita → Park Hyatt Tokyo"
    },
    {
      name: "Sarah Chen",
      title: "Family Traveler",
      content: "Traveling with two children and extensive luggage, we needed reliability. The Toyota Alphard was spacious, the driver helped with everything, and we felt completely taken care of.",
      rating: 5,
      route: "Haneda → Shibuya"
    },
    {
      name: "Robert Fitzgerald",
      title: "Executive",
      content: "I've used many transfer services globally. Nippon Imperial's attention to detail and genuine hospitality sets them apart. The service feels authentically Japanese.",
      rating: 5,
      route: "Tokyo → Narita"
    }
  ];

  const faqs = [
    {
      id: "advance-booking",
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 24 hours in advance for airport transfers. For custom routes or special requirements, 48 hours ensures optimal vehicle availability and routing."
    },
    {
      id: "flight-delays",
      question: "What happens if my flight is delayed?",
      answer: "All airport transfers include real-time flight monitoring. Our drivers automatically adjust pickup times based on actual arrival data, with complimentary waiting time included."
    },
    {
      id: "extra-charges",
      question: "Are there extra charges for luggage or tolls?",
      answer: "No. Our fixed airport rates include all tolls, parking fees, and reasonable luggage assistance. Night surcharges (11 PM - 6 AM) and extended waiting time are clearly disclosed upfront."
    },
    {
      id: "child-seats",
      question: "Do you provide child seats?",
      answer: "Yes, we provide complimentary child seats and booster seats. Please specify ages and requirements when booking to ensure proper safety equipment is installed."
    },
    {
      id: "cancellation",
      question: "What is your cancellation policy?",
      answer: "Airport transfers can be cancelled up to 2 hours before pickup with no charge. Custom transfers require 24-hour notice. Weather or flight cancellations are always refunded in full."
    },
    {
      id: "payment-methods",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Payment is processed securely during booking for airport transfers, or after service completion for custom quotes."
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`${transferType} transfer inquiry submitted`);
    setShowModal(false);
  };

  const selectVehicle = (vehicle, type) => {
    setSelectedVehicle(vehicle);
    setTransferType(type);
    setShowModal(true);
  };

  const scrollToTransferTypes = () => {
    document.getElementById('transfer-types')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFAQ = (faqId) => {
    setOpenFAQs(prev => 
      prev.includes(faqId) 
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  return (
    <div className="relative">
      {/* Hero Section with Luxury Car & Jet Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={luxuryCarJetBackground}
            alt="Luxury car with private jet at sunset airport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-nippon-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/50 via-nippon-black/40 to-nippon-black/70"></div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-8" data-scroll-reveal>
          <div className="max-w-4xl text-center">
            <h1 className="text-luxury-7xl lg:text-luxury-8xl text-nippon-warm-white font-serif mb-16 leading-none tracking-tight"
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 0, 0, 0.85), 0 0 50px rgba(212, 175, 55, 0.4)'
                }}>
              Airport & Private Transfers
            </h1>
            
            <div className="h-px w-48 mx-auto mb-16 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold"></div>
            
            <p className="text-luxury-xl text-nippon-warm-white font-sans leading-relaxed max-w-3xl mx-auto mb-12"
               style={{
                 textShadow: '0 3px 12px rgba(0, 0, 0, 0.9), 0 1px 8px rgba(0, 0, 0, 0.75)'
               }}>
              Arrive and depart in quiet comfort. Whether from airport, port, or city, our private transfers ensure every journey is seamless, polished, and personalized.
            </p>

            <Button
              onClick={scrollToTransferTypes}
              className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-sans text-luxury-base px-10 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
              style={{
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)'
              }}
            >
              <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative flex items-center space-x-3">
                <span className="tracking-wider font-medium">View Our Fleet</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Paragraph - BACK TO ORIGINAL LIGHT BACKGROUND */}
      <section className="relative bg-nippon-warm-white section-padding">
        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8" data-scroll-reveal>
            <p className="text-luxury-xl text-nippon-black font-serif leading-relaxed">
              From airport runways to cruise terminals and countryside ryokans, our private transfers cover every point of arrival and departure.
            </p>
            
            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans">
              Our professional chauffeurs, premium vehicles, and concierge-level attention ensure a smooth ride — whether for 30 minutes or 3 hours.
            </p>
            
            <p className="text-luxury-base text-nippon-gray-dark font-sans">
              Available for Haneda, Narita, Yokohama Port, regional cities, and custom destinations upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Selection Section - MOVED UP */}
      <section id="transfer-types" className="relative bg-nippon-black section-padding">
        <div className="relative z-10 max-w-7xl mx-auto content-padding">
          <div className="text-center mb-20" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight mb-8">
              Choose Your Preferred Vehicle
            </h2>
            <div className="h-px w-24 mx-auto bg-nippon-gold mb-8"></div>
            <p className="text-luxury-lg text-nippon-gray-light leading-relaxed font-sans max-w-3xl mx-auto">
              All include private chauffeur, fuel, tolls, and insured coverage. Choose airport transfer for fixed pricing or custom transfer for personalized routes.
            </p>
          </div>

          {/* 4-Card Grid Layout */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6" data-scroll-reveal>
            {fleetOptions.map((vehicle, index) => (
              <div
                key={index}
                className="bg-nippon-warm-white shadow-luxury overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-luxury-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-nippon-black/20"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-luxury-lg text-nippon-black font-serif mb-3 leading-tight">{vehicle.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-nippon-gold" />
                      <span className="text-nippon-gray font-sans text-luxury-sm">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Luggage className="w-4 h-4 text-nippon-gold" />
                      <span className="text-nippon-gray font-sans text-luxury-sm">{vehicle.luggage}</span>
                    </div>
                  </div>

                  {/* Simplified Pricing Display */}
                  <div className="bg-nippon-beige p-4 mb-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-nippon-black font-sans text-luxury-xs">Narita (NRT):</span>
                      <span className="text-nippon-gold font-serif text-luxury-sm">{vehicle.naritaPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-nippon-black font-sans text-luxury-xs">Haneda (HND):</span>
                      <span className="text-nippon-gold font-serif text-luxury-sm">{vehicle.hanedaPrice}</span>
                    </div>
                    <div className="border-t border-nippon-gold/30 pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-nippon-black font-sans text-luxury-xs">Custom routes:</span>
                        <span className="text-nippon-gray font-sans text-luxury-xs italic">By quote</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => selectVehicle(vehicle, 'airport')}
                      className="w-full group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-sm px-4 py-3 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1 hover:bg-nippon-gold luxury-button-gold"
                    >
                      <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                      <span className="relative flex items-center justify-center space-x-2">
                        <PlaneLanding className="w-4 h-4" />
                        <span className="tracking-wider font-medium">Book Now</span>
                      </span>
                    </Button>
                    
                    <Button
                      onClick={() => selectVehicle(vehicle, 'custom')}
                      className="w-full group relative overflow-hidden bg-nippon-black border-2 border-nippon-black text-nippon-warm-white hover:text-nippon-gold font-sans text-luxury-sm px-4 py-3 transition-all duration-500 transform hover:-translate-y-1 hover:border-nippon-gold"
                    >
                      <span className="relative flex items-center justify-center space-x-2">
                        <Route className="w-4 h-4" />
                        <span className="tracking-wider font-medium">Get Quote</span>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Transfer Types Section */}
      <section className="relative bg-nippon-warm-white section-padding">
        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          <div className="grid lg:grid-cols-2 gap-12" data-scroll-reveal>
            {/* Airport Transfers */}
            <div className="bg-nippon-white p-8 shadow-luxury">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-nippon-gold flex items-center justify-center">
                  <PlaneLanding className="w-6 h-6 text-nippon-black" />
                </div>
                <div>
                  <h3 className="text-luxury-xl text-nippon-black font-serif">Airport Transfers</h3>
                  <p className="text-nippon-gold font-serif text-luxury-sm">Fixed Pricing</p>
                </div>
              </div>

              <p className="text-nippon-gray font-sans text-luxury-base leading-relaxed mb-6">
                Fixed-rate one-way transfers to/from Narita and Haneda. Includes flight tracking, meet & greet, luggage handling, and direct hotel delivery.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-nippon-beige">
                  <span className="font-sans text-nippon-black text-luxury-sm">Narita (NRT) → Central Tokyo</span>
                  <span className="font-serif text-nippon-gold text-luxury-sm">From ¥25,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-nippon-beige">
                  <span className="font-sans text-nippon-black text-luxury-sm">Haneda (HND) → Central Tokyo</span>
                  <span className="font-serif text-nippon-gold text-luxury-sm">From ¥18,000</span>
                </div>
              </div>

              <p className="text-nippon-gray font-sans text-luxury-xs text-center italic">
                Add-ons: Night surcharge / Waiting time / Return trip on request
              </p>
            </div>

            {/* Custom Transfers */}
            <div className="bg-nippon-white p-8 shadow-luxury">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-nippon-gold flex items-center justify-center">
                  <Route className="w-6 h-6 text-nippon-black" />
                </div>
                <div>
                  <h3 className="text-luxury-xl text-nippon-black font-serif">Custom Transfers</h3>
                  <p className="text-nippon-gold font-serif text-luxury-sm">Quote-Based</p>
                </div>
              </div>

              <p className="text-nippon-gray font-sans text-luxury-base leading-relaxed mb-6">
                Transfers between cities, ports, and regions are custom priced based on distance and duration. Perfect for cruise arrivals, long-distance transfers, or special locations.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-nippon-gold flex-shrink-0" />
                  <span className="text-nippon-gray font-sans text-luxury-sm">Yokohama Port → Tokyo Hotel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-nippon-gold flex-shrink-0" />
                  <span className="text-nippon-gray font-sans text-luxury-sm">Tokyo → Mt. Fuji</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-nippon-gold flex-shrink-0" />
                  <span className="text-nippon-gray font-sans text-luxury-sm">Kyoto → Osaka Airport</span>
                </div>
              </div>

              <p className="text-nippon-black font-sans text-luxury-xs text-center italic">
                Submit your route for a tailored quote from our concierge team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Quick Features */}
      <section className="relative bg-nippon-black section-padding-sm">
        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          <div className="grid md:grid-cols-4 gap-8 text-center" data-scroll-reveal>
            <div className="space-y-4">
              <Timer className="w-8 h-8 text-nippon-gold mx-auto" />
              <div>
                <div className="text-luxury-xl text-nippon-gold font-serif">100%</div>
                <p className="text-nippon-gray-light font-sans text-luxury-sm">Flight Monitoring</p>
              </div>
            </div>
            <div className="space-y-4">
              <Clock className="w-8 h-8 text-nippon-gold mx-auto" />
              <div>
                <div className="text-luxury-xl text-nippon-gold font-serif">24/7</div>
                <p className="text-nippon-gray-light font-sans text-luxury-sm">Driver Dispatch</p>
              </div>
            </div>
            <div className="space-y-4">
              <Shield className="w-8 h-8 text-nippon-gold mx-auto" />
              <div>
                <div className="text-luxury-xl text-nippon-gold font-serif">All</div>
                <p className="text-nippon-gray-light font-sans text-luxury-sm">Licensed Chauffeurs</p>
              </div>
            </div>
            <div className="space-y-4">
              <CheckCircle className="w-8 h-8 text-nippon-gold mx-auto" />
              <div>
                <div className="text-luxury-xl text-nippon-gold font-serif">Fully</div>
                <p className="text-nippon-gray-light font-sans text-luxury-sm">Insured & Tracked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Social Proof Section */}
      <section className="relative bg-nippon-warm-white section-padding">
        <div className="relative z-10 max-w-6xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-black font-serif leading-tight mb-8">
              Trusted by Discerning Travelers
            </h2>
            <div className="h-px w-24 mx-auto bg-nippon-gold mb-8"></div>
            <p className="text-luxury-lg text-nippon-gray leading-relaxed font-sans max-w-3xl mx-auto">
              Our commitment to punctuality, comfort, and authentic Japanese hospitality has earned the trust of executives and families worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8" data-scroll-reveal>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-nippon-white p-8 shadow-luxury relative transform transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-hover"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-nippon-gold/30" />
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-nippon-gold text-nippon-gold" />
                  ))}
                </div>

                <p className="text-nippon-gray font-sans text-luxury-base leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-nippon-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-nippon-black font-serif text-luxury-base font-medium">{testimonial.name}</h4>
                      <p className="text-nippon-gray font-sans text-luxury-sm">{testimonial.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-nippon-gold font-sans text-luxury-xs uppercase tracking-wider">Route</p>
                      <p className="text-nippon-gray-dark font-sans text-luxury-sm">{testimonial.route}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-scroll-reveal>
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-nippon-gold text-nippon-gold" />
                <span className="text-nippon-black font-serif text-luxury-lg">4.9/5</span>
              </div>
              <div className="h-8 w-px bg-nippon-border"></div>
              <div>
                <span className="text-nippon-gray font-sans text-luxury-sm">Based on 150+ verified reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-nippon-black section-padding">
        <div className="relative z-10 max-w-4xl mx-auto content-padding">
          <div className="text-center mb-16" data-scroll-reveal>
            <h2 className="text-luxury-4xl text-nippon-warm-white font-serif leading-tight mb-8">
              Frequently Asked Questions
            </h2>
            <div className="h-px w-24 mx-auto bg-nippon-gold mb-8"></div>
            <p className="text-luxury-lg text-nippon-gray-light leading-relaxed font-sans max-w-2xl mx-auto">
              Everything you need to know about our airport and private transfer services.
            </p>
          </div>

          <div className="space-y-4" data-scroll-reveal>
            {faqs.map((faq, index) => (
              <Collapsible
                key={faq.id}
                open={openFAQs.includes(faq.id)}
                onOpenChange={() => toggleFAQ(faq.id)}
              >
                <CollapsibleTrigger className="w-full group">
                  <div 
                    className="flex items-center justify-between p-6 bg-nippon-warm-white hover:bg-nippon-beige transition-colors duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-nippon-black font-serif text-luxury-lg text-left group-hover:text-nippon-gold transition-colors duration-300">
                      {faq.question}
                    </h3>
                    {openFAQs.includes(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-nippon-gold flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-nippon-gray flex-shrink-0 group-hover:text-nippon-gold transition-colors duration-300" />
                    )}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 bg-nippon-warm-white border-t border-nippon-border">
                    <p className="text-nippon-gray font-sans text-luxury-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="text-center mt-12" data-scroll-reveal>
            <p className="text-nippon-gray-light font-sans text-luxury-base mb-6">
              Still have questions? Our concierge team is available 24/7.
            </p>
            <Button className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-base px-8 py-3 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1 hover:bg-nippon-gold luxury-button-gold">
              <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative tracking-wider font-medium">Contact Our Team</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-2xl bg-nippon-warm-white border-nippon-gold max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-luxury-2xl text-nippon-black font-serif text-center">
              {transferType === 'airport' ? 'Confirm Your Airport Transfer' : 'Submit Your Transfer Request'}
            </DialogTitle>
            <DialogDescription className="text-nippon-gray font-sans text-luxury-base text-center">
              {transferType === 'airport' 
                ? 'Complete your booking details for airport transfer with fixed pricing'
                : 'Provide your custom transfer details and receive a personalized quote'
              }
            </DialogDescription>
          </DialogHeader>

          {selectedVehicle && (
            <div className="bg-nippon-beige p-6 mb-6">
              <div className="text-center space-y-2">
                <h3 className="text-luxury-lg text-nippon-black font-serif">{selectedVehicle.name}</h3>
                <p className="text-nippon-gray font-sans text-luxury-sm">
                  {selectedVehicle.capacity} • {selectedVehicle.luggage}
                </p>
                {transferType === 'airport' && (
                  <div className="space-y-1">
                    <p className="text-nippon-gold font-serif text-luxury-base">Airport Transfer Rates</p>
                    <p className="text-nippon-black font-sans text-luxury-sm">
                      Narita (NRT): {selectedVehicle.naritaPrice} | Haneda (HND): {selectedVehicle.hanedaPrice}
                    </p>
                  </div>
                )}
                {transferType === 'custom' && (
                  <p className="text-nippon-gray font-sans text-luxury-sm italic">
                    Custom route pricing will be confirmed by our concierge team.
                  </p>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-nippon-black font-sans">Full Name *</Label>
                <Input id="name" type="text" required className="luxury-input" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-nippon-black font-sans">Email Address *</Label>
                <Input id="email" type="email" required className="luxury-input" placeholder="your@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-nippon-black font-sans">Phone Number (optional)</Label>
              <Input id="phone" type="tel" className="luxury-input" placeholder="+81 90 1234 5678" />
            </div>

            {transferType === 'airport' ? (
              <>
                <div className="space-y-4">
                  <Label className="text-nippon-black font-sans">Transfer Type *</Label>
                  <RadioGroup defaultValue="arrival" className="flex space-x-8">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="arrival" id="arrival" />
                      <Label htmlFor="arrival" className="text-nippon-black font-sans flex items-center space-x-2">
                        <PlaneLanding className="w-4 h-4" />
                        <span>Arrival</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="departure" id="departure" />
                      <Label htmlFor="departure" className="text-nippon-black font-sans flex items-center space-x-2">
                        <PlaneTakeoff className="w-4 h-4" />
                        <span>Departure</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="airport" className="text-nippon-black font-sans">Airport *</Label>
                    <Select>
                      <SelectTrigger className="luxury-input">
                        <SelectValue placeholder="Select airport" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="haneda">Haneda (HND)</SelectItem>
                        <SelectItem value="narita">Narita (NRT)</SelectItem>
                        <SelectItem value="other">Other Airport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="flight" className="text-nippon-black font-sans">Airline + Flight Number *</Label>
                    <Input id="flight" type="text" required className="luxury-input" placeholder="JAL123" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-nippon-black font-sans">Date of Service *</Label>
                    <Input id="date" type="date" required className="luxury-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-nippon-black font-sans">Arrival/Departure Time *</Label>
                    <Input id="time" type="time" required className="luxury-input" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-nippon-black font-sans">Pickup or Drop-off Address *</Label>
                  <Input id="address" type="text" required className="luxury-input" placeholder="Hotel name or address" />
                </div>
              </>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup" className="text-nippon-black font-sans">Pickup Address *</Label>
                    <Input id="pickup" type="text" required className="luxury-input" placeholder="Full pickup address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dropoff" className="text-nippon-black font-sans">Drop-off Address *</Label>
                    <Input id="dropoff" type="text" required className="luxury-input" placeholder="Full destination address" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="route" className="text-nippon-black font-sans">Preferred Route (optional)</Label>
                  <Input id="route" type="text" className="luxury-input" placeholder="Any specific route preferences" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-nippon-black font-sans">Date of Service *</Label>
                    <Input id="date" type="date" required className="luxury-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-nippon-black font-sans">Pickup Time *</Label>
                    <Input id="time" type="time" required className="luxury-input" />
                  </div>
                </div>
              </>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-nippon-black font-sans">Number of Guests *</Label>
                <Input id="guests" type="number" min="1" required className="luxury-input" placeholder="2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="luggage" className="text-nippon-black font-sans">Number of Luggage</Label>
                <Input id="luggage" type="number" min="0" className="luxury-input" placeholder="3" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-nippon-black font-sans">Notes / Requests</Label>
              <Textarea id="notes" className="luxury-input min-h-[100px] resize-none" placeholder="Any special requests or requirements..." />
            </div>

            {transferType === 'airport' && selectedVehicle && (
              <div className="bg-nippon-beige p-4 text-center">
                <p className="text-nippon-black font-serif text-luxury-lg">
                  Estimated Fare: {selectedVehicle.naritaPrice} (Narita) / {selectedVehicle.hanedaPrice} (Haneda)
                </p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-8 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
            >
              <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative flex items-center justify-center space-x-3">
                {transferType === 'airport' ? (
                  <>
                    <Plane className="w-5 h-5" />
                    <span className="tracking-wider font-medium">Proceed to Payment</span>
                  </>
                ) : (
                  <>
                    <Route className="w-5 h-5" />
                    <span className="tracking-wider font-medium">Submit for Quote</span>
                  </>
                )}
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
