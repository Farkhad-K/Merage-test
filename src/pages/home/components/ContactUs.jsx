// Libraries
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

// Components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Footer } from "./Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
    contactViaPhone: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
        contactViaPhone: false,
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-nippon-black relative flex items-center justify-center">
        <div className="absolute inset-0 luxury-overlay"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-nippon-gold opacity-8 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-nippon-gold opacity-5 blur-3xl"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 warm-white-card-secondary p-10 shadow-luxury">
          <div className="cinematic-entrance">
            <h1 className="text-luxury-4xl text-nippon-gold font-serif mb-6 text-with-gold-glow">
              Thank You
            </h1>
            <div className="gold-divider h-px w-32 mx-auto mb-4"></div>
            <p className="text-luxury-base text-nippon-black leading-relaxed text-with-elegant-shadow">
              Thank you. Our team has received your inquiry and will be in touch
              shortly with personalized assistance.
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
          backgroundSize: "120px 120px",
        }}
      ></div>

      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-4 blur-3xl"
        data-scroll-parallax
        data-scroll-speed="0.1"
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-nippon-gold opacity-6 blur-3xl"
        data-scroll-parallax
        data-scroll-speed="-0.05"
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-nippon-gold-muted opacity-3 blur-3xl"
        data-scroll-parallax
        data-scroll-speed="0.03"
      ></div>

      <div className="relative z-10 min-h-screen">
        <div
          className="relative section-padding text-center"
          data-scroll-reveal
        >
          <div className="black-card-dominant p-10 shadow-black max-w-4xl mx-auto">
            <h1 className="text-luxury-4xl text-nippon-gold font-serif text-with-gold-glow cinematic-entrance mb-4">
              Connect with Nippon Imperial
            </h1>
            <div className="gold-divider h-px w-32 mx-auto mb-6"></div>
            <p className="text-luxury-base text-nippon-warm-white font-sans italic leading-relaxed text-with-elegant-shadow">
              Discreet. Refined. Always at your service.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto content-padding section-padding-sm">
          {/* gridga items-stretch qo‘shildi */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Chap quti */}
            <div className="space-y-12" data-scroll-reveal>
              <div className="warm-white-card-secondary p-8 shadow-elegant h-full">
                <h2 className="text-luxury-3xl text-nippon-black font-serif mb-8 text-with-black-shadow">
                  How to Contact Us
                </h2>

                <div className="space-y-6 text-nippon-black text-luxury-base">
                  <div className="flex items-center gap-4">
                    <Phone className="text-nippon-gold w-6 h-6" />
                    <span>+81 3 XXXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-nippon-gold w-6 h-6" />
                    <span>contact@nipponimperial.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-nippon-gold w-6 h-6" />
                    <span>Tokyo, Japan</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3 text-nippon-gold">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <Facebook className="w-6 h-6 cursor-pointer hover:text-nippon-gold" />
                    <Instagram className="w-6 h-6 cursor-pointer hover:text-nippon-gold" />
                    <Linkedin className="w-6 h-6 cursor-pointer hover:text-nippon-gold" />
                    <Twitter className="w-6 h-6 cursor-pointer hover:text-nippon-gold" />
                  </div>
                </div>
              </div>
            </div>

            {/* O‘ng quti */}
            <div data-scroll-reveal>
              <div className="warm-white-card-secondary p-8 shadow-elegant h-full">
                <h2 className="text-luxury-3xl text-nippon-black font-serif mb-6 text-with-black-shadow">
                  Contact Form
                </h2>
                <div className="gold-divider h-px w-24 mb-6"></div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <Input
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    placeholder="Full Name"
                    className="h-12 text-luxury-base text-black placeholder-gray-500 border border-gray-300 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    style={{ backgroundColor: "#f9f9f9", color: "#000" }}
                    required
                  />

                  {/* Email */}
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Email"
                    className="h-12 text-luxury-base text-black placeholder-gray-500 border border-gray-300 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    style={{ backgroundColor: "#f9f9f9", color: "#000" }}
                    required
                  />

                  {/* Phone */}
                  <Input
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    placeholder="Phone Number"
                    className="h-12 text-luxury-base text-black border border-gray-300 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    style={{ backgroundColor: "#f9f9f9", color: "#000" }}
                  />

                  {/* Subject (Select) */}
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                  >
                    <SelectTrigger
                      className="h-12 text-luxury-base text-black border border-gray-300 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                      style={{ backgroundColor: "#f9f9f9", color: "#6B7280" }}
                    >
                      <SelectValue
                        placeholder="Subject"
                        className="text-black data-[placeholder]:text-gray-500"
                      />
                    </SelectTrigger>

                    <SelectContent className="bg-[#f9f9f9] text-black border border-gray-300">
                      <SelectItem value="general" className="focus:bg-gray-200">
                        General
                      </SelectItem>
                      <SelectItem value="booking" className="focus:bg-gray-200">
                        Booking
                      </SelectItem>
                      <SelectItem
                        value="partnership"
                        className="focus:bg-gray-200"
                      >
                        Partnership
                      </SelectItem>
                      <SelectItem value="press" className="focus:bg-gray-200">
                        Press
                      </SelectItem>
                      <SelectItem value="other" className="focus:bg-gray-200">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Message */}
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Message"
                    rows={5}
                    className="text-luxury-base resize-none text-black placeholder-gray-500 border border-gray-300 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    style={{ backgroundColor: "#f9f9f9", color: "#000" }}
                    required
                  />

                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="contactPhone"
                      checked={formData.contactViaPhone}
                      onCheckedChange={(checked) =>
                        handleInputChange("contactViaPhone", !!checked)
                      }
                    />
                    <label
                      htmlFor="contactPhone"
                      className="text-sm text-nippon-black"
                    >
                      Prefer phone contact
                    </label>
                  </div>

                  <Button type="submit">Send Your Inquiry</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-12">
        <div className="w-full h-px black-gold-divider mb-0"></div>
        <div className="bg-nippon-black-light text-nippon-warm-white">
          <Footer />
        </div>
      </div>
    </div>
  );
}
