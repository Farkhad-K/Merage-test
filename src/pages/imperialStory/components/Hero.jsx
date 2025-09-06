// Image
import BG from "../assets/homeImage.jpg"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-nippon-black">
      {/* Enhanced Cinematic Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG}
          alt="Majestic Japanese castle illuminated in dramatic black and white - embodying Imperial grandeur and heritage"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Layered Overlays */}
        <div className="absolute inset-0 bg-nippon-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-nippon-black/40 via-transparent to-nippon-black/70"></div>
        <div className="absolute inset-0 warm-dusk-overlay opacity-30"></div>
        
        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-nippon-black/40"></div>
      </div>
      
      {/* Cultural Pattern Overlay */}
      <div className="absolute inset-0 z-5 opacity-10">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="hero-asanoha" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3">
                <path d="M60,0 L90,50 L60,100 L30,50 Z"/>
                <path d="M0,50 L30,0 L60,50 L30,100 Z"/>
                <path d="M120,50 L90,0 L60,50 L90,100 Z"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-asanoha)"/>
        </svg>
      </div>
      
      {/* Enhanced Text Overlay with Deeper Hierarchy */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6" data-scroll-reveal>
        <div data-stagger-container>
          {/* Refined Imperial Subtitle */}
          <div className="text-nippon-gold-muted text-sm tracking-imperial uppercase mb-6 font-sans" data-stagger>
            Since 2008 • Curated Japanese Experiences
          </div>
          
          <h1 className="text-luxury-6xl md:text-luxury-7xl lg:text-luxury-8xl uppercase tracking-imperial text-nippon-gold font-serif font-medium mb-8 text-with-gold-glow" data-stagger>
            THE IMPERIAL STORY
          </h1>
          
          <p className="text-luxury-xl md:text-luxury-2xl italic text-nippon-ivory font-serif font-light leading-relaxed mb-12 max-w-4xl mx-auto" data-stagger>
            Where centuries of tradition meet uncompromising luxury in the most intimate cultural journey through Japan
          </p>
          
          {/* Enhanced CTA with Supporting Text */}
          <div className="space-y-6" data-stagger>
            <button className="imperial-button luxury-cta-button">
              Begin Your Journey
            </button>
            <div className="text-nippon-gray text-sm uppercase tracking-wide">
              By Invitation & Referral Only
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Cultural Elements */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-nippon-gold-muted/60 text-sm font-serif mb-2">
          物語 (monogatari)
        </div>
        <div className="text-nippon-gold-muted/40 text-xs tracking-wide">
          The Art of Storytelling
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center space-y-2">
        <div className="text-nippon-gold-muted/60 text-xs tracking-wide vertical-writing">
          SCROLL
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-nippon-gold-muted/60 to-transparent"></div>
      </div>
    </section>
  );
}