import { MapPin, Users, CheckCircle, Star, Award, Clock, ArrowRight, Compass, Calendar, Mountain, Heart, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import tokyoRainbowBridgeHero from 'figma:asset/9fcfb2c5e68356a22e81d907a680defc0313348c.png';
import tokyoTowerAerial from 'figma:asset/6907c13b1b87e286e8e9b7991380df3756161295.png';
import nikkoRedBridge from 'figma:asset/58dd20c0e49ae20333de7c7e3608b451af1b1975.png';
import kamakuraGreatBuddha from 'figma:asset/65362e46ad76230dbb004b1ec4a4962244494ba5.png';

export function SignatureDayEscapes() {
  const tours = [
    {
      id: 'tokyo-highlights',
      title: "Tokyo City Highlights",
      description: "Tradition, energy, and elegance across Japan's capital.",
      image: tokyoTowerAerial,
      icon: Users,
      culturalNote: "Urban elegance meets tradition"
    },
    {
      id: 'mt-fuji-escape',
      title: "Mt. Fuji Escape",
      description: "A day of iconic landscapes and serene culture.",
      image: "https://images.unsplash.com/photo-1683976886501-055f309e6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEZ1amklMjBMYWtlJTIwS2F3YWd1Y2hpa298ZW58MXx8fHwxNzU1NTkwODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Mountain,
      culturalNote: "Sacred mountain majesty"
    },
    {
      id: 'hakone-serenity',
      title: "Hakone Serenity Tour",
      description: "Onsen towns, mountain air, and lakeside beauty.",
      image: "https://images.unsplash.com/photo-1715134588078-4646f828b2ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYWtvbmUlMjBMYWtlJTIwQXNoaXxlbnwxfHx8fDE3NTU1OTA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Heart,
      culturalNote: "Tranquil hot springs await"
    },
    {
      id: 'nikko-cultural',
      title: "Nikko Cultural Discovery",
      description: "UNESCO shrines, forest trails, and sacred stillness.",
      image: nikkoRedBridge,
      icon: Star,
      culturalNote: "UNESCO world heritage"
    },
    {
      id: 'kamakura-heritage',
      title: "Kamakura Heritage Day Trip",
      description: "Zen temples, samurai history, and coastal charm.",
      image: kamakuraGreatBuddha,
      icon: Camera,
      culturalNote: "Ancient capital by the sea"
    },
    {
      id: 'custom-tour',
      title: "Create Your Own",
      description: "Design a personalized day journey with our concierge team.",
      image: "https://images.unsplash.com/photo-1720454206018-8d977e9e984a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb2t5byUyME1laWppJTIwU2hyaW5lfGVufDF8fHx8MTc1NTU5MDg3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Compass,
      culturalNote: "Your journey, your way"
    }
  ];

  const benefits = [
    {
      title: "100% Private Vehicles Only",
      description: "No crowded buses. Travel in comfort with dedicated luxury transport."
    },
    {
      title: "Flexible Itineraries Adjusted to You",
      description: "Every tour adapts to your pace, interests, and preferences."
    },
    {
      title: "Optional Bilingual Guides",
      description: "Deep cultural insights from expert local guides when desired."
    },
    {
      title: "Expert Concierge Planning",
      description: "Pre-trip consultation ensures every detail aligns with your vision."
    }
  ];

  const handleTourInquiry = (tourId) => {
    document.getElementById('concierge-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTours = () => {
    document.getElementById('tour-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConciergeContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* ... siz yuborgan qism o‘sha-o‘sha, faqat type olib tashlandi ... */}
    </div>
  );
}