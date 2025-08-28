import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Play, Crown, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Auto-play video background after 3 seconds
    const timer = setTimeout(() => {
      setIsVideoPlaying(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nippon-obsidian">
      {/* Background with enhanced parallax */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1618546490165-16b44ecf3d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb2t5byUyMHNreWxpbmUlMjBuaWdodCUyMHNreXNjcmFwZXJzJTIwbHV4dXJ5fGVufDF8fHx8MTc1NTI0Mjk0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tokyo skyline at night with illuminated skyscrapers"
          className="w-full h-full object-cover scale-105"
          style={{
            filter: "contrast(1.1) saturate(0.9) brightness(0.7)",
          }}
        />

        {/* Enhanced cinematic gradient overlay */}
        <div
          className="absolute inset-0 cinematic-gradient"
          style={{
            background: `
              linear-gradient(135deg, rgba(5, 5, 5, 0.98) 0%, rgba(12, 12, 12, 0.95) 30%, rgba(10, 10, 10, 0.97) 70%, rgba(5, 5, 5, 0.98) 100%),
              radial-gradient(ellipse at center top, rgba(255, 215, 0, 0.08) 0%, transparent 50%)
            `,
          }}
        ></div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 silk-texture opacity-30"></div>
      </div>

      {/* Floating ornamental elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top ornamental corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-nippon-gold/40"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-nippon-gold/40"></div>

        {/* Bottom ornamental corners */}
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-nippon-gold/40"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-nippon-gold/40"></div>

        {/* Floating accent elements with animation */}
        <div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-nippon-gold opacity-50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-nippon-rose-gold opacity-70 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-nippon-gold opacity-60 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-[70px] text-center">
        {/* Enhanced hero typography */}
        <div className="space-y-6 mb-12" data-scroll-reveal>
          {/* Japanese characters accent */}
          <div className="text-nippon-rose-gold/70 font-serif text-luxury-2xl mb-4">
            日本帝国
          </div>

          <h1 className="text-nippon-pearl font-serif text-luxury-7xl lg:text-luxury-8xl leading-none tracking-tight text-with-elegant-shadow">
            Nippon
            <br />
            <span className="text-nippon-gold">Imperial</span>
          </h1>

          <div className="flex items-center justify-center space-x-8 my-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-nippon-gold"></div>
            <div className="w-3 h-3 border border-nippon-gold rotate-45"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-nippon-gold"></div>
          </div>

          <p className="text-nippon-champagne font-serif text-luxury-2xl lg:text-luxury-3xl italic max-w-4xl mx-auto leading-relaxed text-with-elegant-shadow">
            Experience Japan in Imperial Elegance
          </p>

          <p className="text-nippon-platinum-white/80 font-sans text-luxury-lg max-w-3xl mx-auto leading-relaxed mt-8">
            For the discerning few who seek authentic cultural immersion beyond
            the ordinary—where every detail embodies the spirit of omotenashi
            and every moment becomes an extraordinary memory.
          </p>
        </div>

        {/* Enhanced CTA section */}
        <div className="space-y-8" data-scroll-reveal>
          {/* Primary CTA */}
          <div className="flex justify-center">
            <Button
              onClick={scrollToContact}
              className="group relative overflow-hidden bg-nippon-gold text-nippon-obsidian font-sans text-luxury-base px-12 py-4 transition-all duration-500 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold-bright luxury-button-gold"
            >
              <span className="relative flex items-center space-x-3 text-nippon-obsidian">
                <Crown className="w-5 h-5 text-nippon-obsidian" />
                <span className="tracking-wider font-medium text-nippon-obsidian">
                  Request Private Consultation
                </span>
              </span>
            </Button>
          </div>

          {/* Exclusive indicators */}
          <div className="flex items-center justify-center space-x-12 mt-12 text-nippon-platinum-white/60">
            <div className="text-center">
              <div className="text-nippon-gold font-serif text-luxury-xl">
                12
              </div>
              <div className="text-luxury-xs tracking-wider uppercase">
                Clients Annually
              </div>
            </div>
            <div className="w-px h-8 bg-nippon-gold/30"></div>
            <div className="text-center">
              <div className="text-nippon-gold font-serif text-luxury-xl">
                15+
              </div>
              <div className="text-luxury-xs tracking-wider uppercase">
                Years Excellence
              </div>
            </div>
            <div className="w-px h-8 bg-nippon-gold/30"></div>
            <div className="text-center">
              <div className="text-nippon-gold font-serif text-luxury-xl">
                100%
              </div>
              <div className="text-luxury-xs tracking-wider uppercase">
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-nippon-platinum-white/60"
        data-scroll-reveal
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-luxury-xs tracking-widest uppercase">
            Discover
          </span>
          <div className="w-px h-8 bg-nippon-gold animate-pulse"></div>
        </div>
      </div>

      {/* Premium video overlay trigger */}
      {!isVideoPlaying && (
        <button
          onClick={() => setIsVideoPlaying(true)}
          className="absolute top-8 right-8 z-20 group flex items-center space-x-3 bg-nippon-black-light/80 backdrop-blur-sm border border-nippon-gold/30 px-6 py-3 rounded-none transition-all duration-500 hover:bg-nippon-gold hover:text-nippon-black"
        >
          <Play className="w-5 h-5 text-nippon-gold group-hover:text-nippon-black transition-colors duration-300" />
          <span className="text-nippon-warm-white group-hover:text-nippon-black font-sans text-luxury-sm tracking-wide">
            Experience
          </span>
        </button>
      )}

      {/* Cinematic video background when activated */}
      {isVideoPlaying && (
        <div className="absolute inset-0 z-5">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-40"
            style={{
              filter: "brightness(0.3) contrast(1.2) saturate(1.1)",
            }}
          >
            <source
              src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Enhanced video overlay */}
          <div className="absolute inset-0 luxury-overlay opacity-80"></div>
        </div>
      )}
    </section>
  );
}
