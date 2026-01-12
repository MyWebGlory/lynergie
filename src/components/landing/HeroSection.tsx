import { Phone, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGradient } from './AnimatedGradient';
import { FloatingElements } from './FloatingElements';
import { useParallax } from '@/hooks/useParallax';

const services = [
  'Panneaux Solaires',
  'Pompe à Chaleur',
  'Climatisation',
  'Borne de Recharge',
];

export function HeroSection() {
  const parallaxOffset = useParallax(0.3);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background with parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <AnimatedGradient />
      </div>

      {/* Floating elements - behind content */}
      <FloatingElements />

      {/* Main content - above everything */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust badge */}
          <div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground/90 font-medium text-sm">5.0 sur Google</span>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-foreground/90 font-medium text-sm">RGE Certifié</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="mb-6">
            <span 
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground text-shadow-lg leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              L'énergie de demain,
            </span>
            <span 
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gradient animate-gradient-x leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              chez vous aujourd'hui
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-shadow animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Experts en transition énergétique depuis plus de 10 ans. 
            Réduisez vos factures jusqu'à 70% avec nos solutions sur mesure.
          </p>

          {/* Services pills */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {services.map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full text-sm font-medium glass text-foreground/90 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div 
            className="animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-full animate-glow-pulse transition-transform duration-300 hover:scale-105 group"
            >
              <a href="tel:0623666839" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Appeler : 06 23 66 68 39</span>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
            </Button>

            <p className="mt-4 text-sm text-muted-foreground">
              Réponse en moins de 2h • Devis gratuit • Sans engagement
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up z-10" style={{ animationDelay: '1s' }}>
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Découvrir</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-scroll-indicator" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
