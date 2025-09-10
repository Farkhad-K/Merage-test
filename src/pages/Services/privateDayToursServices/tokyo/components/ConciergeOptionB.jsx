import { Car, Crown, MapPin, Calendar, Sparkles, Users, Compass, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// OPTION B: Transition Bridge with Same Background as Services
export function ConciergeOptionB() {
  return (
    <div className="relative">
      {/* ... (same hero and services sections) */}

      {/* OPTION B: Elegant Transition Bridge - Same Background as Services */}
      <section className="relative bg-nippon-warm-white overflow-hidden">
        {/* Same background pattern as services */}
        <div className="absolute inset-0 opacity-2">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto content-padding py-16">
          <div className="text-center space-y-12" data-scroll-reveal>
            {/* Elegant transition content */}
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="h-px w-16 bg-nippon-gold"></div>
                <Star className="w-8 h-8 text-nippon-gold" />
                <div className="h-px w-16 bg-nippon-gold"></div>
              </div>

              <h2 className="text-luxury-3xl text-nippon-black font-serif leading-tight max-w-3xl mx-auto">
                Each service, meticulously crafted. Together, they become something extraordinary.
              </h2>
              
              <p className="text-luxury-xl text-nippon-gray font-serif italic max-w-2xl mx-auto leading-relaxed">
                What if every element of your journey could flow as one seamless experience?
              </p>
            </div>
          </div>
        </div>

        {/* Subtle bottom fade to prepare for black section */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-nippon-black/5"></div>
      </section>

      {/* ... (same flagship service section) */}
    </div>
  );
}
