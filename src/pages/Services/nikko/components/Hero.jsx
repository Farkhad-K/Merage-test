import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import luxuryChauffeurImage from 'figma:asset/ea905dca512369d220aa435547b190500ef27c06.png';

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
    document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nippon-black">
      {/* Luxury Chauffeur Background */}
      <div className="absolute inset-0 z-0">
        {/* Main luxury chauffeur hero image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${luxuryChauffeurImage}')`,
            filter: 'brightness(0.5) contrast(1.2) saturate(0.9)',
            animation: 'cinematicZoom 25s ease-in-out infinite alternate'
          }}
        ></div>
        
        {/* Secondary layered background for depth */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2148&q=80"
          alt="Luxury Tokyo cityscape"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          style={{
            filter: 'brightness(0.3) blur(2px)',
            animation: 'luxuryPulse 30s ease-in-out infinite'
          }}
        />
        
        {/* Professional overlays for perfect readability */}
        <div className="absolute inset-0 bg-nippon-black/45 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/70 via-nippon-black/30 to-nippon-black/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-nippon-black/60 via-transparent to-nippon-black/50 z-10"></div>
        
        {/* Subtle gold accent elements - strategic 10% use */}
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-nippon-gold opacity-3 blur-3xl z-10" data-scroll-parallax data-scroll-speed="0.2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-nippon-gold opacity-2 blur-3xl z-10" data-scroll-parallax data-scroll-speed="-0.1"></div>
      </div>

      {/* Elegant Content Overlay */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-8" data-scroll-reveal>
        <div className="cinematic-entrance">
          {/* Main headline with premium typography */}
          <h1 className="text-luxury-8xl lg:text-luxury-9xl text-nippon-warm-white font-serif mb-12 leading-none tracking-tight"
              style={{
                textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.3)'
              }}>
            Nippon Imperial
          </h1>
          
          {/* Gold divider - strategic accent (10%) */}
          <div className="h-px w-48 mb-12 bg-gradient-to-r from-transparent via-nippon-gold to-transparent shadow-gold mx-auto"></div>
          
          {/* Refined supporting text */}
          <p className="text-luxury-2xl lg:text-luxury-3xl text-nippon-warm-white font-serif italic mb-16 leading-relaxed max-w-4xl mx-auto"
             style={{
               textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.8)'
             }}>
            Where exceptional service meets imperial elegance
          </p>
          
          {/* Strategic CTA button */}
          <div className="mb-20">
            <Button
              onClick={scrollToServices}
              className="group relative overflow-hidden bg-transparent border-2 border-nippon-gold text-nippon-gold hover:text-nippon-black font-serif text-luxury-xl px-16 py-6 transition-all duration-700 shadow-gold hover:shadow-gold-hover transform hover:-translate-y-2 hover:bg-nippon-gold luxury-button-gold"
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Elegant sweep effect */}
              <span className="absolute inset-0 bg-nippon-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              
              {/* Button content */}
              <span className="relative flex items-center space-x-4">
                <span className="tracking-wider font-medium">Discover Imperial Excellence</span>
                <ChevronDown className="w-6 h-6 transform group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20" data-scroll-reveal>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-nippon-gold to-transparent opacity-60"></div>
          <ChevronDown className="w-6 h-6 text-nippon-gold animate-bounce opacity-60" />
        </div>
      </div>

      {/* Premium video overlay trigger */}
      {!isVideoPlaying && (
        <button
          onClick={() => setIsVideoPlaying(true)}
          className="absolute top-8 right-8 z-30 group flex items-center space-x-3 bg-nippon-black-light/80 backdrop-blur-sm border border-nippon-gold/30 px-6 py-3 rounded-none transition-all duration-500 hover:bg-nippon-gold hover:text-nippon-black"
        >
          <Play className="w-5 h-5 text-nippon-gold group-hover:text-nippon-black transition-colors duration-300" />
          <span className="text-nippon-warm-white group-hover:text-nippon-black font-sans text-luxury-sm tracking-wide">Experience</span>
        </button>
      )}

      {/* Cinematic video background when activated */}
      {isVideoPlaying && (
        <div className="absolute inset-0 z-15">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-30"
            style={{
              filter: 'brightness(0.4) contrast(1.1) saturate(0.8)'
            }}
          >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          
          {/* Enhanced video overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/80 via-nippon-black/50 to-nippon-black/90"></div>
        </div>
      )}
    </section>
  );
}