import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Phone, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* FOMO Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-8">
            <AlertTriangle className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground text-sm font-medium">
              Profitez des aides de l'État avant leur révision !
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6">
            Prêt à réduire vos factures d'énergie ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Contactez-nous maintenant pour une estimation gratuite et sans engagement. Notre équipe d'experts vous accompagne dans votre projet de transition énergétique.
          </p>

          {/* CTA Button */}
          <a href="tel:0623666839">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl font-bold gap-4 px-12 py-8 rounded-2xl cta-glow animate-pulse-slow"
            >
              <Phone className="w-7 h-7" />
              <span>06 23 66 68 39</span>
            </Button>
          </a>

          {/* Availability */}
          <div className="flex items-center justify-center gap-2 mt-6 text-primary-foreground/70">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Équipe disponible du lundi au samedi, 8h-19h</span>
          </div>

          {/* Additional Contact */}
          <p className="mt-8 text-primary-foreground/60 text-sm">
            Ou par email : <a href="mailto:contact@lynergie.fr" className="underline hover:text-primary-foreground transition-colors">contact@lynergie.fr</a>
          </p>
        </div>
      </div>
    </section>
  );
}
