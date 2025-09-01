import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function AlternativeHeroLayout() {
  const scrollToForm = () => {
    document.getElementById('dining-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* OPTION 1: Dramatic Bottom-Third Positioning */}
      <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-2 self-start pt-12">
              <div className="text-nippon-gold text-luxury-8xl font-serif opacity-60 transform rotate-90 origin-center">
                饗
              </div>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div className="text-nippon-gold text-luxury-sm font-serif tracking-[0.3em] uppercase opacity-75">
                Nippon Imperial Dining
              </div>
              <h1 className="text-luxury-7xl md:text-luxury-8xl text-nippon-warm-white font-serif leading-[0.8] tracking-tight">
                <span className="block">Culinary</span>
                <span className="block text-nippon-gold ml-12">Mastery</span>
                <span className="block text-luxury-5xl mt-4 opacity-90">Imperial Access</span>
              </h1>
              <div className="max-w-2xl ml-12">
                <p className="text-luxury-lg text-nippon-pearl font-sans leading-relaxed">
                  Experience Japan's most coveted culinary temples through our exclusive network across Tokyo, Kyoto, Osaka, and beyond.
                </p>
              </div>
              <div className="ml-12 pt-4">
                <Button onClick={scrollToForm} className="luxury-button-gold">
                  <span className="tracking-wider font-medium">Reserve Your Experience</span>
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 self-center hidden lg:block">
              <div className="h-48 w-px bg-gradient-to-b from-transparent via-nippon-gold to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* OPTION 2: Split Screen Diagonal */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="relative z-20 max-w-none w-full">
          <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 max-w-xl">
            <div className="space-y-8">
              <div className="text-nippon-gold text-luxury-3xl font-serif tracking-wider opacity-75">
                饗宴
              </div>
              <h1 className="text-luxury-8xl md:text-luxury-9xl text-nippon-warm-white font-serif leading-[0.75] tracking-tight">
                <span className="block">Culinary</span>
              </h1>
            </div>
          </div>
          <div className="absolute right-8 md:right-16 bottom-1/3 max-w-lg text-right">
            <div className="space-y-6">
              <h2 className="text-luxury-5xl text-nippon-gold font-serif tracking-wide">
                Mastery
              </h2>
              <div className="h-px w-32 bg-nippon-gold ml-auto mb-6"></div>
              <p className="text-luxury-lg text-nippon-pearl font-sans leading-relaxed">
                Imperial access to Japan's most coveted culinary temples
              </p>
              <Button onClick={scrollToForm} className="luxury-button-gold">
                Reserve Experience
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-nippon-gold text-luxury-base font-serif tracking-[0.5em] opacity-30 rotate-90">
              NIPPON IMPERIAL
            </div>
          </div>
        </div>
      </section>

      {/* OPTION 3: Minimalist Top-Third */}
      <section className="relative min-h-screen flex items-start pt-32 overflow-hidden">
        <div className="relative z-20 max-w-6xl mx-auto px-8 w-full">
          <div className="text-center space-y-16">
            <div className="space-y-4">
              <div className="text-nippon-gold text-luxury-sm font-serif tracking-[0.3em] uppercase opacity-75">
                Nippon Imperial
              </div>
              <div className="w-24 h-px bg-nippon-gold mx-auto opacity-40"></div>
            </div>
            <div className="relative">
              <h1 className="text-luxury-7xl md:text-luxury-8xl text-nippon-warm-white font-serif leading-[0.9] tracking-tight">
                <span className="block opacity-90">Culinary</span>
                <span className="block text-nippon-gold transform translate-x-8">Mastery</span>
              </h1>
              <div className="absolute -top-8 -right-16 text-nippon-gold text-luxury-4xl font-serif opacity-20">
                饗
              </div>
            </div>
            <div className="pt-12">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-luxury-3xl text-nippon-warm-white font-serif tracking-wide opacity-85">
                  Imperial Access
                </h2>
                <p className="text-luxury-lg text-nippon-pearl font-sans leading-relaxed">
                  From legendary sushi masters to hidden izakaya sanctuaries, experience Japan's most coveted culinary temples through our exclusive network across Tokyo, Kyoto, Osaka, and beyond.
                </p>
              </div>
            </div>
            <div className="pt-16">
              <Button onClick={scrollToForm} className="luxury-button-gold px-12 py-5">
                <span className="tracking-wider font-medium">Reserve Your Experience</span>
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
