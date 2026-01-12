import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Phone, Clock, FileCheck, Sparkles, Zap, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px] animate-orb-1" />
        <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-accent/15 rounded-full blur-[100px] animate-orb-2" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* FOMO Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-destructive/10 border border-destructive/20 mb-8 animate-on-scroll ${isVisible ? 'visible' : ''}`}
          >
            <Zap className="w-4 h-4 text-destructive animate-pulse" />
            <span className="text-destructive font-semibold text-sm">
              ⚡ Aides de l'État en cours de révision — Profitez-en maintenant !
            </span>
          </div>

          {/* Main heading */}
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-shadow-lg animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Prêt à réduire vos factures de{' '}
            <span className="text-gradient">70%</span> ?
          </h2>

          {/* Subtitle */}
          <p 
            className={`text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Appelez maintenant pour une estimation gratuite et personnalisée. 
            Nos experts sont disponibles pour répondre à toutes vos questions.
          </p>

          {/* CTA Button - XXL */}
          <div 
            className={`mb-10 animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl md:text-2xl px-12 md:px-16 py-8 md:py-10 rounded-full animate-glow-pulse transition-transform duration-300 hover:scale-105 group"
            >
              <a href="tel:0623666839" className="flex items-center gap-4">
                <div className="relative">
                  <Phone className="w-7 h-7" />
                  {/* Pulse rings */}
                  <div className="absolute inset-0 animate-pulse-ring">
                    <Phone className="w-7 h-7 text-primary-foreground/50" />
                  </div>
                </div>
                <span>06 23 66 68 39</span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className={`flex flex-wrap justify-center gap-6 md:gap-10 mb-10 animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>Réponse en -2h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileCheck className="w-5 h-5 text-primary" />
              <span>Devis gratuit</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Sans engagement</span>
            </div>
          </div>

          {/* Availability */}
          <div 
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full glass animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-foreground font-medium">
              Équipe disponible du Lundi au Samedi, 8h-19h
            </span>
          </div>

          {/* Savings visualization */}
          <div 
            className={`mt-12 p-6 rounded-3xl glass max-w-md mx-auto animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Économies moyennes</span>
              <TrendingDown className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-green-500">-2 400€</span>
              <span className="text-muted-foreground">/an</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-green-500 rounded-full transition-all duration-1000"
                style={{ width: isVisible ? '70%' : '0%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
