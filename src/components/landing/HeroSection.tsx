import { Phone, ChevronDown, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  'Panneaux Solaires',
  'Pompe à Chaleur',
  'Climatisation',
  'Bornes de recharge',
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/hero-background.mp4"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-md border border-border/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">5.0 sur Google</span>
          <span className="text-white/50">•</span>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">RGE QualiPV</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Votre transition énergétique
          <br />
          <span className="text-secondary">clé en main</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 mb-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Entreprise de transition énergétique en Auvergne-Rhône-Alpes
        </p>

        {/* Services Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {services.map((service, index) => (
            <span
              key={service}
              className="bg-card/10 backdrop-blur-sm border border-border/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-card/20 transition-colors cursor-default"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {service}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <a href="tel:0623666839">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold gap-3 px-8 py-7 rounded-xl cta-glow animate-pulse-slow"
            >
              <Phone className="w-6 h-6" />
              <span>Appeler maintenant</span>
              <span className="hidden sm:inline">— 06 23 66 68 39</span>
            </Button>
          </a>
          <p className="text-white/60 text-sm mt-4">
            Équipe disponible du lundi au samedi
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Découvrir nos services"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </a>
    </section>
  );
}
