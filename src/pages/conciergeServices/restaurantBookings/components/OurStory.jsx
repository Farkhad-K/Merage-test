import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function OurStory() {
  return (
    <section className="relative py-24 overflow-hidden bg-nippon-charcoal">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-nippon-charcoal via-nippon-black/95 to-nippon-charcoal"></div>
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-r from-nippon-gold/10 via-transparent to-nippon-gold/10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-nippon-white font-serif">
            Our Story
          </h2>
          <p className="text-xl md:text-2xl text-nippon-gold/90 max-w-4xl mx-auto leading-relaxed italic">
            Born from a passion for Japan's refined culture and an unwavering commitment to excellence
          </p>
          
          {/* Gold accent line */}
          <div className="w-24 h-px bg-nippon-gold mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Elegant Japanese Temple Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop"
                alt="Elegant Japanese Temple with traditional architecture"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Elegant overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nippon-charcoal/40 via-transparent to-transparent"></div>
              
              {/* Gold accent corners */}
              <div className="absolute top-6 right-6 w-12 h-12 border-2 border-nippon-gold/60"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-2 border-nippon-gold/60"></div>
            </div>
            
            {/* Floating accents */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-nippon-gold opacity-20 rotate-45"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-nippon-gold opacity-30 rotate-45"></div>
          </div>

          {/* Right side - Story Content */}
          <div className="space-y-10">
            <h3 className="text-3xl md:text-4xl text-nippon-gold font-serif">
              A Legacy of Distinction
            </h3>
            
            <div className="space-y-8 text-lg md:text-xl leading-relaxed">
              <p className="text-nippon-white/90">
                Founded by a team of hospitality virtuosos who understood that true luxury lies in the details, 
                Nippon Imperial was born from a simple yet profound vision: to offer discerning travelers access 
                to Japan's most exclusive experiences through unparalleled personalized service.
              </p>
              
              <p className="text-nippon-white/85">
                Our journey began with a deep reverence for Japanese omotenashi—the art of selfless hospitality. 
                We've cultivated relationships with Japan's most prestigious establishments, from hidden culinary gems 
                known only to locals, to private cultural experiences that reveal the soul of this extraordinary nation.
              </p>
              
              <p className="text-nippon-white/80">
                Today, Nippon Imperial stands as the definitive concierge service for those who understand that true 
                luxury is not about what you can buy, but what you can experience. Every journey we craft is a 
                masterpiece of discretion, elegance, and imperial-level attention to detail.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                size="lg"
                className="bg-nippon-gold hover:bg-nippon-gold-muted text-nippon-charcoal transition-all duration-300 px-10 py-4 text-lg font-medium hover:shadow-xl hover:shadow-nippon-gold/30"
              >
                Discover The Imperial Story
              </Button>
            </div>
            
            {/* Elegant accent */}
            <div className="flex items-center space-x-4 pt-6">
              <div className="w-16 h-px bg-nippon-gold/60"></div>
              <div className="w-2 h-2 bg-nippon-gold opacity-60 rotate-45"></div>
              <div className="w-16 h-px bg-nippon-gold/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
