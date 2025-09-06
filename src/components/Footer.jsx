function Footer() {
  const navigationLinks = [
    "The Imperial Story",
    "Concierge",
    "Services",
    "Partnership",
    "Contact Us",
  ];

  return (
    <footer className="bg-nippon-black text-nippon-white">
      {/* Elegant top divider for visual separation */}
      <div className="w-full h-px luxury-divider"></div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl mb-4 tracking-wider text-nippon-gold font-serif">
                NIPPON IMPERIAL
              </h3>
              <p className="text-nippon-white/80 leading-relaxed mb-6">
                Experience Japan in Imperial Elegance. Where discretion meets
                distinction.
              </p>
              <div className="text-sm text-nippon-white/60">
                <p>Tokyo | Kyoto | Osaka</p>
                <p>Available 24/7 for our guests</p>
              </div>

              {/* Gold accent line */}
              <div className="w-16 h-px bg-nippon-gold mt-6"></div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-6 text-nippon-gold">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-nippon-white/70 hover:text-nippon-gold transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-6 text-nippon-gold">Contact</h4>
              <div className="space-y-3 text-nippon-white/70 text-sm">
                <p className="hover:text-nippon-gold transition-colors cursor-pointer">
                  concierge@nipponimperial.com
                </p>
                <p className="hover:text-nippon-gold transition-colors cursor-pointer">
                  +81 (0)3-1234-5678
                </p>
                <div className="pt-4">
                  <p className="text-nippon-gold mb-2">Follow Us</p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="hover:text-nippon-gold transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="hover:text-nippon-gold transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="border-t border-nippon-gold/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Philanthropy Note */}
              <div className="text-center md:text-left">
                <p className="text-sm text-nippon-gold-muted italic">
                  A portion of Nippon Imperial's proceeds proudly supports
                  cancer treatment initiatives.
                </p>
              </div>

              {/* Copyright */}
              <div className="text-sm text-nippon-white/50">
                <p>&copy; 2024 Nippon Imperial. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
