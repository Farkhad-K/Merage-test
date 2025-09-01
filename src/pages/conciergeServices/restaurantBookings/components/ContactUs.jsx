import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
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
        <div className="absolute inset-0 luxury-overlay"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-nippon-gold opacity-8 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-nippon-gold opacity-5 blur-3xl"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 warm-white-card-secondary p-12 shadow-luxury">
          <div className="cinematic-entrance">
            <h1 className="text-luxury-6xl text-nippon-gold font-serif mb-8 text-with-gold-glow">
              Thank You
            </h1>
            <div className="gold-divider h-px w-32 mx-auto mb-6"></div>
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
      <div className="absolute inset-0 luxury-overlay"></div>
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Cpolygon points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      ></div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-4 blur-3xl" data-scroll-parallax data-scroll-speed="0.1"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-nippon-gold opacity-6 blur-3xl" data-scroll-parallax data-scroll-speed="-0.05"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-nippon-gold-muted opacity-3 blur-3xl" data-scroll-parallax data-scroll-speed="0.03"></div>

      <div className="relative z-10 min-h-screen">
        <div className="relative section-padding text-center" data-scroll-reveal>
          <div className="black-card-dominant p-12 shadow-black max-w-4xl mx-auto">
            <h1 className="text-luxury-6xl text-nippon-gold font-serif text-with-gold-glow cinematic-entrance mb-6">
              Connect with Nippon Imperial
            </h1>
            <div className="gold-divider h-px w-32 mx-auto mb-8"></div>
            <p className="text-luxury-xl text-nippon-warm-white font-sans italic leading-relaxed text-with-elegant-shadow">
              Discreet. Refined. Always at your service.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto content-padding section-padding-sm">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-16" data-scroll-reveal>
              {/* Contact info cards */}
              {/* ... Boshqa kodlar o'zgarmaydi */}
            </div>

            <div data-scroll-reveal>
              <div className="warm-white-card-secondary p-10 shadow-elegant">
                <h2 className="text-luxury-4xl text-nippon-black font-serif mb-8 text-with-black-shadow">
                  Contact Form
                </h2>
                <div className="gold-divider h-px w-24 mb-8"></div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <Input
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Full Name"
                    className="luxury-input h-14 text-luxury-lg"
                    required
                  />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email"
                    className="luxury-input h-14 text-luxury-lg"
                    required
                  />
                  <Input
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="Phone Number"
                    className="luxury-input h-14 text-luxury-lg"
                  />
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="luxury-input h-14 text-luxury-lg">
                      <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-nippon-warm-white border-2 border-nippon-gold shadow-luxury">
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="booking">Booking</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="press">Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Message"
                    rows={6}
                    className="luxury-input text-luxury-lg resize-none"
                    required
                  />
                  <Checkbox
                    id="contactPhone"
                    checked={formData.contactViaPhone}
                    onCheckedChange={(checked) => handleInputChange('contactViaPhone', checked)}
                  />
                  <Button type="submit">
                    Send Your Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-16">
        <div className="w-full h-px black-gold-divider mb-0"></div>
        <div className="bg-nippon-black-light text-nippon-warm-white">
          <Footer />
        </div>
      </div>
    </div>
  );
}
