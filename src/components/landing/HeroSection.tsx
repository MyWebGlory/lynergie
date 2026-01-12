import { Phone, ChevronDown, Star, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGradient } from './AnimatedGradient';
import { FloatingElements } from './FloatingElements';

const services = [
  'Panneaux Solaires',
  'Pompe à Chaleur',
  'Climatisation',
  'Bornes de Recharge',
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradient />

      {/* Floating Elements with Parallax */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in shadow-2xl">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">5.0 sur Google</span>
          <div className="w-px h-4 bg-white/30" />
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">RGE Certifié</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
          <span className="block animate-fade-in" style={{ animationDelay: '0.1s' }}>
            L'énergie de demain
          </span>
          <span 
            className="block bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-clip-text text-transparent animate-fade-in bg-[length:200%_auto] animate-gradient-x"
            style={{ animationDelay: '0.2s' }}
          >
            chez vous aujourd'hui
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl lg:text-2xl text-white/70 mb-8 max-w-2xl mx-auto animate-fade-in font-light"
          style={{ animationDelay: '0.3s' }}
        >
          Experts en transition énergétique depuis +10 ans en Auvergne-Rhône-Alpes
        </p>

        {/* Services Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {services.map((service, index) => (
            <span
              key={service}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-default overflow-hidden"
            >
              <span className="relative z-10">{service}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.6s, opacity 0.3s' }} />
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in space-y-4" style={{ animationDelay: '0.5s' }}>
          <a href="tel:0623666839">
            <Button
              size="lg"
              className="relative bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg md:text-xl font-bold gap-4 px-10 py-8 rounded-2xl shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <Phone className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
              <span className="relative z-10">Appeler maintenant</span>
              <span className="hidden sm:inline relative z-10 text-secondary-foreground/80">— 06 23 66 68 39</span>
            </Button>
          </a>
          
          <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Devis gratuit • Réponse sous 2h</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors group"
        aria-label="Découvrir"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Découvrir</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll-indicator" />
        </div>
      </a>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
