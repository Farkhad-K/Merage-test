// Component
import { ImageWithFallback } from './figma/ImageWithFallback';

// Images
import Img from "../assets/Flowers.png"

export default function Essence() {
  return (
    <section className="relative bg-nippon-warm-white section-padding overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-nippon-gold opacity-5 blur-3xl" data-scroll-parallax data-scroll-speed="0.1"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-nippon-gold opacity-8 blur-3xl" data-scroll-parallax data-scroll-speed="-0.05"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto content-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Content with refined typography */}
          <div className="space-y-10" data-scroll-reveal>
            <div>
              <h2 className="text-luxury-4xl text-nippon-black font-serif mb-6">
                Our Philosophy
                <br />
                <span className="text-nippon-gold">Omotenashi</span>
              </h2>
              <div className="gold-divider h-px w-24 mb-6"></div>
            </div>

            <div className="space-y-6">
              <p className="text-luxury-lg text-nippon-black font-sans leading-relaxed">
                At the heart of every Nippon Imperial experience lies omotenashi—the pinnacle of Japanese hospitality that anticipates needs before they are expressed, creating experiences that transcend expectations.
              </p>

              <p className="text-luxury-base text-nippon-gray-dark font-sans leading-relaxed">
                This ancient philosophy guides everything we do. Every moment of your journey is carefully orchestrated, from the gentle bow of greeting to the seamless transition between experiences, ensuring your complete satisfaction becomes our greatest honor.
              </p>
              
              <p className="text-luxury-base text-nippon-gray-dark font-sans leading-relaxed">
                Unlike Western hospitality that expects gratitude, omotenashi flows from the heart without expectation of reward. It is service elevated to art—the foundation upon which our three pillars of excellence are built.
              </p>

              <p className="text-luxury-base text-nippon-gray-dark font-sans leading-relaxed">
                Discover how this timeless philosophy translates into the exceptional services that define every Nippon Imperial journey.
              </p>
            </div>

            {/* Cultural elements with refined design - Pure white background */}
            <div className="bg-nippon-white p-8 shadow-elegant">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 border-2 border-nippon-gold mx-auto mb-3 flex items-center justify-center shadow-gold">
                    <span className="text-nippon-gold font-serif text-luxury-xl">心</span>
                  </div>
                  <p className="text-nippon-black font-sans text-luxury-xs">Heart</p>
                  <p className="text-nippon-gray font-sans text-luxury-xs">Kokoro</p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 border-2 border-nippon-gold mx-auto mb-3 flex items-center justify-center shadow-gold">
                    <span className="text-nippon-gold font-serif text-luxury-xl">和</span>
                  </div>
                  <p className="text-nippon-black font-sans text-luxury-xs">Harmony</p>
                  <p className="text-nippon-gray font-sans text-luxury-xs">Wa</p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 border-2 border-nippon-gold mx-auto mb-3 flex items-center justify-center shadow-gold">
                    <span className="text-nippon-gold font-serif text-luxury-xl">礼</span>
                  </div>
                  <p className="text-nippon-black font-sans text-luxury-xs">Respect</p>
                  <p className="text-nippon-gray font-sans text-luxury-xs">Rei</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - High-quality imagery */}
          <div className="relative" data-scroll-reveal>
            <div className="relative">
              {/* Main cherry blossom image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <ImageWithFallback
                  src={Img}
                  alt="Delicate cherry blossoms in traditional Japanese garden"
                  className="w-full h-full object-cover"
                />
                
                {/* Minimal overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-nippon-black/30 via-transparent to-transparent"></div>
                
                {/* Elegant gold accent border */}
                <div className="absolute inset-0 border border-nippon-gold/20 pointer-events-none"></div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border border-nippon-gold/30 bg-nippon-warm-white/60 backdrop-blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-nippon-gold/30 bg-nippon-warm-white/60 backdrop-blur-sm"></div>
            </div>

            {/* Minimal text overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-nippon-warm-white/90 font-serif text-luxury-xs italic text-with-elegant-shadow">
                "Beauty in simplicity, perfection in detail"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}