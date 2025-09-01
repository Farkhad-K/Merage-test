import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input.jsx';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from 'lucide-react';
import { Footer } from './Footer';

export function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
    contactViaPhone: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
        contactViaPhone: false
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-nippon-black relative flex items-center justify-center">
        {/* Black background (60% dominant) */}
        <div className="absolute inset-0 luxury-overlay"></div>
        
        {/* Subtle gold accent elements (10%) */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-nippon-gold opacity-8 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-nippon-gold opacity-5 blur-3xl"></div>
        
        {/* Warm white card (30% secondary) */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 warm-white-card-secondary p-12 shadow-luxury">
          <div className="cinematic-entrance">
            {/* Gold accent title (10%) */}
            <h1 className="text-luxury-6xl text-nippon-gold font-serif mb-8 text-with-gold-glow">
              Thank You
            </h1>
            <div className="gold-divider h-px w-32 mx-auto mb-6"></div>
            {/* Black text on warm white background */}
            <p className="text-luxury-lg text-nippon-black leading-relaxed text-with-elegant-shadow">
              Thank you. Our team has received your inquiry and will be in touch shortly with personalized assistance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nippon-black relative overflow-hidden">
      {/* Black dominant background (60%) */}
      <div className="absolute inset-0 luxury-overlay"></div>
      
      {/* Subtle black pattern overlay */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Cpolygon points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      ></div>
      
      {/* Gold accent floating elements (10%) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-4 blur-3xl" data-scroll-parallax data-scroll-speed="0.1"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-nippon-gold opacity-6 blur-3xl" data-scroll-parallax data-scroll-speed="-0.05"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-nippon-gold-muted opacity-3 blur-3xl" data-scroll-parallax data-scroll-speed="0.03"></div>
      
      <div className="relative z-10 min-h-screen">
        {/* Header Section - Black dominant with gold accents */}
        <div className="relative section-padding text-center" data-scroll-reveal>
          {/* Black card with warm white text (60% black, 30% warm white content) */}
          <div className="black-card-dominant p-12 shadow-black max-w-4xl mx-auto">
            {/* Gold accent title (10%) */}
            <h1 className="text-luxury-6xl text-nippon-gold font-serif text-with-gold-glow cinematic-entrance mb-6">
              Connect with Nippon Imperial
            </h1>
            <div className="gold-divider h-px w-32 mx-auto mb-8"></div>
            {/* Warm white text on black background */}
            <p className="text-luxury-xl text-nippon-warm-white font-sans italic leading-relaxed text-with-elegant-shadow">
              Discreet. Refined. Always at your service.
            </p>
          </div>
        </div>

        {/* Main Content following 60-30-10 distribution */}
        <div className="max-w-7xl mx-auto content-padding section-padding-sm">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column - Contact Info (Warm white secondary 30%) */}
            <div className="space-y-16" data-scroll-reveal>
              <div className="warm-white-card-secondary p-10 shadow-elegant">
                <h2 className="text-luxury-4xl text-nippon-black font-serif mb-12 text-with-black-shadow">
                  How to Contact Us
                </h2>
                
                {/* Personal Concierge Hotline */}
                <div className="mb-12 luxury-fade-up">
                  {/* Gold accent heading (10%) */}
                  <h3 className="text-luxury-xl text-nippon-gold font-serif mb-6 text-with-gold-glow">
                    Personal Concierge Hotline:
                  </h3>
                  <div className="flex items-start space-x-6">
                    {/* Gold accent icon (10%) */}
                    <div className="flex-shrink-0 w-12 h-12 border-2 border-nippon-gold bg-nippon-warm-white-light flex items-center justify-center mt-2 gold-glow shadow-gold hover:shadow-gold-hover transition-all duration-300">
                      <Phone className="w-6 h-6 text-nippon-gold" />
                    </div>
                    <div>
                      <p className="text-luxury-lg text-nippon-gray mb-3 font-sans">Available 24/7 for immediate assistance:</p>
                      <p className="text-luxury-2xl text-nippon-black font-serif text-with-black-shadow">+8 80 1234 7777</p>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="mb-12 luxury-fade-up">
                  {/* Gold accent heading (10%) */}
                  <h3 className="text-luxury-xl text-nippon-gold font-serif mb-6 text-with-gold-glow">
                    Email Address:
                  </h3>
                  <div className="flex items-start space-x-6">
                    {/* Gold accent icon (10%) */}
                    <div className="flex-shrink-0 w-12 h-12 border-2 border-nippon-gold bg-nippon-warm-white-light flex items-center justify-center mt-2 gold-glow shadow-gold hover:shadow-gold-hover transition-all duration-300">
                      <Mail className="w-6 h-6 text-nippon-gold" />
                    </div>
                    <div>
                      <p className="text-luxury-lg text-nippon-gray mb-3 font-sans">For detailed requests and consultations:</p>
                      <p className="text-luxury-2xl text-nippon-black font-serif text-with-black-shadow">contact@nipponimperial.com</p>
                    </div>
                  </div>
                </div>

                {/* Office Address */}
                <div className="mb-12 luxury-fade-up">
                  {/* Gold accent heading (10%) */}
                  <h3 className="text-luxury-xl text-nippon-gold font-serif mb-6 text-with-gold-glow">
                    Office Address:
                  </h3>
                  <div className="flex items-start space-x-6">
                    {/* Gold accent icon (10%) */}
                    <div className="flex-shrink-0 w-12 h-12 border-2 border-nippon-gold bg-nippon-warm-white-light flex items-center justify-center mt-2 gold-glow shadow-gold hover:shadow-gold-hover transition-all duration-300">
                      <MapPin className="w-6 h-6 text-nippon-gold" />
                    </div>
                    <div>
                      <p className="text-luxury-2xl text-nippon-black font-serif text-with-black-shadow mb-1">Japan, Tokyo</p>
                      <p className="text-luxury-2xl text-nippon-black font-serif text-with-black-shadow">Ginza 1-1-1</p>
                    </div>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="luxury-fade-up">
                  {/* Gold accent heading (10%) */}
                  <h3 className="text-luxury-xl text-nippon-gold font-serif mb-6 text-with-gold-glow">
                    Follow Us:
                  </h3>
                  <div className="flex space-x-6">
                    {/* Gold accent social icons (10%) */}
                    <div className="w-12 h-12 border-2 border-nippon-gold bg-nippon-warm-white-light flex items-center justify-center hover:bg-nippon-gold hover:text-nippon-black transition-all duration-500 cursor-pointer shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1">
                      <Facebook className="w-6 h-6" />
                    </div>
                    <div className="w-12 h-12 border-2 border-nippon-gold bg-nippon-warm-white-light flex items-center justify-center hover:bg-nippon-gold hover:text-nippon-black transition-all duration-500 cursor-pointer shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div className="w-12 h-12 border-2 border-nippon-gold bg-nippon-warm-white-light flex items-center justify-center hover:bg-nippon-gold hover:text-nippon-black transition-all duration-500 cursor-pointer shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div className="w-12 h-12 border-2 border-nippon-gold bg-nippon-warm-white-light flex items-center justify-center hover:bg-nippon-gold hover:text-nippon-black transition-all duration-500 cursor-pointer shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1">
                      <Twitter className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form (Warm white secondary 30%) */}
            <div data-scroll-reveal>
              <div className="warm-white-card-secondary p-10 shadow-elegant">
                <h2 className="text-luxury-4xl text-nippon-black font-serif mb-8 text-with-black-shadow">
                  Contact Form
                </h2>
                <div className="gold-divider h-px w-24 mb-8"></div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Full Name */}
                  <div className="luxury-fade-up">
                    <Input
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Full Name"
                      className="luxury-input h-14 text-luxury-lg"
                      required
                    />
                    <p className="text-luxury-sm text-nippon-gray mt-2 font-sans">(required)</p>
                  </div>

                  {/* Email */}
                  <div className="luxury-fade-up">
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Email"
                      className="luxury-input h-14 text-luxury-lg"
                      required
                    />
                    <p className="text-luxury-sm text-nippon-gray mt-2 font-sans">(required)</p>
                  </div>

                  {/* Phone Number */}
                  <div className="luxury-fade-up">
                    <Input
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      placeholder="Phone Number"
                      className="luxury-input h-14 text-luxury-lg"
                    />
                    <p className="text-luxury-sm text-nippon-gray mt-2 font-sans">(optional)</p>
                  </div>

                  {/* Subject */}
                  <div className="luxury-fade-up">
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="luxury-input h-14 text-luxury-lg">
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-nippon-warm-white border-2 border-nippon-gold shadow-luxury">
                        <SelectItem value="general" className="text-nippon-black hover:bg-nippon-gold hover:text-nippon-black font-sans text-luxury-lg py-3">General</SelectItem>
                        <SelectItem value="booking" className="text-nippon-black hover:bg-nippon-gold hover:text-nippon-black font-sans text-luxury-lg py-3">Booking</SelectItem>
                        <SelectItem value="partnership" className="text-nippon-black hover:bg-nippon-gold hover:text-nippon-black font-sans text-luxury-lg py-3">Partnership</SelectItem>
                        <SelectItem value="press" className="text-nippon-black hover:bg-nippon-gold hover:text-nippon-black font-sans text-luxury-lg py-3">Press</SelectItem>
                        <SelectItem value="other" className="text-nippon-black hover:bg-nippon-gold hover:text-nippon-black font-sans text-luxury-lg py-3">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="luxury-fade-up">
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Message"
                      rows={6}
                      className="luxury-input text-luxury-lg resize-none"
                      required
                    />
                    <p className="text-luxury-sm text-nippon-gray mt-2 font-sans">(required)</p>
                  </div>

                  {/* Contact via phone checkbox */}
                  <div className="flex items-center space-x-4 luxury-fade-up">
                    <Checkbox
                      id="contactPhone"
                      checked={formData.contactViaPhone}
                      onCheckedChange={(checked) => handleInputChange('contactViaPhone', checked)}
                      className="luxury-checkbox"
                    />
                    <label htmlFor="contactPhone" className="text-nippon-black font-sans text-luxury-lg">
                      I would like to be contacted via phone
                    </label>
                  </div>

                  {/* Gold CTA Button (10% accent - most important element) */}
                  <div className="pt-6 luxury-fade-up">
                    <Button
                      type="submit"
                      className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-lg px-12 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-1 hover:bg-nippon-gold luxury-button-gold"
                    >
                      {/* Elegant sweep effect */}
                      <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                      
                      {/* Button content */}
                      <span className="relative flex items-center space-x-3">
                        <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="tracking-wider font-medium">Send Your Inquiry</span>
                      </span>
                    </Button>
                    <p className="text-luxury-sm text-nippon-gray mt-3 font-sans italic text-center">
                      We respond to all inquiries within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer maintains black dominant (60%) */}
      <div className="relative z-20 mt-16">
        {/* Gold accent divider (10%) */}
        <div className="w-full h-px black-gold-divider mb-0"></div>
        {/* Black footer background */}
        <div className="bg-nippon-black-light text-nippon-warm-white">
          <Footer />
        </div>
      </div>
    </div>
  );
}