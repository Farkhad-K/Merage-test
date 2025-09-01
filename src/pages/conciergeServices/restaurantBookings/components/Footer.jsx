import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative">
      {/* Clear Visual Separator */}
      <div className="relative bg-nippon-black">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-nippon-gold to-transparent"></div>
        <div className="h-16"></div>
      </div>

      {/* Footer Main Section */}
      <div className="relative bg-nippon-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto content-padding py-16">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <button onClick={scrollToTop} className="group inline-block transition-all duration-300">
                  <h2 className="text-luxury-2xl text-nippon-gold font-serif group-hover:text-nippon-gold-light transition-colors duration-300 mb-4">
                    NIPPON IMPERIAL
                  </h2>
                </button>
              </div>
              
              <p className="text-luxury-sm text-nippon-gray-light font-sans leading-relaxed mb-6">
                Experience Japan in Imperial Elegance. Where discretion meets distinction.
              </p>
              
              <div className="space-y-2">
                <p className="text-luxury-sm text-nippon-warm-white font-sans">Tokyo | Kyoto | Osaka</p>
                <p className="text-luxury-xs text-nippon-gray font-sans">Available 24/7 for our guests</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-luxury-base text-nippon-warm-white font-sans">Navigation</h3>
              <ul className="space-y-3">
                {[
                  { label: 'The Imperial Story', id: 'story' },
                  { label: 'Concierge', id: 'concierge' },
                  { label: 'Services', id: 'services' },
                  { label: 'Partnership', id: 'partnership' },
                  { label: 'Contact Us', id: 'contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className="text-luxury-sm text-nippon-gray-light hover:text-nippon-gold font-sans transition-colors duration-300 block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-luxury-base text-nippon-warm-white font-sans">Contact</h3>
              <div className="space-y-3">
                <div className="text-luxury-sm text-nippon-gray-light font-sans">concierge@nipponimperial.com</div>
                <div className="text-luxury-sm text-nippon-gray-light font-sans">+81 (0)3-1234-5678</div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-4">
              <h3 className="text-luxury-base text-nippon-warm-white font-sans">Follow Us</h3>
              <div className="space-y-3">
                <div className="text-luxury-sm text-nippon-gray-light font-sans">Instagram</div>
                <div className="text-luxury-sm text-nippon-gray-light font-sans">LinkedIn</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
            <p className="text-luxury-sm text-nippon-gray-light font-sans">
              A portion of Nippon Imperial's proceeds proudly supports cancer treatment initiatives.
            </p>
            
            <p className="text-luxury-sm text-nippon-gray-light font-sans">
              © {currentYear} Nippon Imperial. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
