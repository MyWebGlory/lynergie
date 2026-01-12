import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Phone, Clock, AlertTriangle, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '6s' }} />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* FOMO Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-md border border-secondary/30 rounded-full px-5 py-2.5 mb-8 animate-pulse-slow">
            <AlertTriangle className="w-5 h-5 text-secondary" />
            <span className="text-white font-semibold">
              ⚡ Aides de l'État en cours de révision — Profitez-en maintenant !
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Prêt à réduire vos factures
            <br />
            <span className="text-secondary">de 70% ?</span>
          </h2>
          
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Rejoignez les +500 familles qui ont fait confiance à Lynergie pour leur transition énergétique.
          </p>

          {/* CTA Button */}
          <a href="tel:0623666839">
            <Button
              size="lg"
              className="relative bg-secondary hover:bg-secondary/90 text-secondary-foreground text-2xl font-black gap-4 px-14 py-10 rounded-2xl shadow-2xl shadow-secondary/40 hover:shadow-secondary/60 hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <Phone className="w-8 h-8 relative z-10" />
              <span className="relative z-10">06 23 66 68 39</span>
            </Button>
          </a>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Réponse en -2h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Devis gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Sans engagement</span>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center justify-center gap-2 mt-8 text-white/60">
            <Clock className="w-5 h-5" />
            <span>Équipe disponible du lundi au samedi, 8h-19h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
