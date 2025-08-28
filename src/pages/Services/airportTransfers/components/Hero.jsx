import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Auto-play video background after 3 seconds
    const timer = setTimeout(() => {
      setIsVideoPlaying(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nippon-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        {/* High-quality hero image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2148&q=80"
          alt="Luxury Tokyo cityscape at sunset"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.4) contrast(1.1) saturate(1.2)'
          }}
        />
        
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 luxury-overlay"></div>
        
        {/* Subtle gold accent elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-3 blur-3xl" data-scroll-parallax data-scroll-speed="0.2"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-nippon-gold opacity-4 blur-3xl" data-scroll-parallax data-scroll-speed="-0.1"></div>
      </div>

      {/* Minimal Text Overlay */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-8" data-scroll-reveal>
        <div className="cinematic-entrance">
          {/* Main headline with generous whitespace */}
          <h1 className="text-luxury-8xl lg:text-luxury-9xl text-nippon-warm-white font-serif mb-12 text-with-gold-glow leading-none tracking-tight">
            Nippon Imperial
          </h1>
          
          {/* Gold divider - strategic accent (10%) */}
          <div className="gold-divider h-px w-48 mx-auto mb-12"></div>
          
          {/* Minimal supporting text */}
          <p className="text-luxury-2xl lg:text-luxury-3xl text-nippon-warm-white font-serif italic mb-16 leading-relaxed text-with-elegant-shadow">
            Curated luxury experiences across Japan
          </p>
          
          {/* Single strategic CTA button */}
          <div className="mb-20">
            <Button
              onClick={scrollToServices}
              className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-xl px-16 py-6 transition-all duration-700 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
            >
              {/* Elegant sweep effect */}
              <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              
              {/* Button content with updated text */}
              <span className="relative flex items-center space-x-4">
                <span className="tracking-wider font-medium">Discover Imperial Excellence</span>
                <ChevronDown className="w-6 h-6 transform group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10" data-scroll-reveal>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-nippon-gold to-transparent opacity-60"></div>
          <ChevronDown className="w-6 h-6 text-nippon-gold animate-bounce opacity-60" />
        </div>
      </div>

      {/* Premium video overlay trigger */}
      {!isVideoPlaying && (
        <button
          onClick={() => setIsVideoPlaying(true)}
          className="absolute top-8 right-8 z-20 group flex items-center space-x-3 bg-nippon-black-light/80 backdrop-blur-sm border border-nippon-gold/30 px-6 py-3 rounded-none transition-all duration-500 hover:bg-nippon-gold hover:text-nippon-black"
        >
          <Play className="w-5 h-5 text-nippon-gold group-hover:text-nippon-black transition-colors duration-300" />
          <span className="text-nippon-warm-white group-hover:text-nippon-black font-sans text-luxury-sm tracking-wide">Experience</span>
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
              filter: 'brightness(0.3) contrast(1.2) saturate(1.1)'
            }}
          >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          
          {/* Enhanced video overlay */}
          <div className="absolute inset-0 luxury-overlay opacity-80"></div>
        </div>
      )}
    </section>
  );
}