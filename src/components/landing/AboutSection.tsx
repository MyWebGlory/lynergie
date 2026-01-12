import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useParallax } from '@/hooks/useParallax';
import { Zap, Leaf, TrendingUp, PiggyBank, Home, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const benefits = [
  {
    icon: PiggyBank,
    title: 'Économies massives',
    description: 'Réduisez vos factures d\'énergie jusqu\'à 70% dès la première année.',
  },
  {
    icon: Home,
    title: 'Valorisation immobilière',
    description: 'Augmentez la valeur de votre bien de 5 à 15% avec une installation énergétique.',
  },
  {
    icon: Leaf,
    title: 'Impact écologique',
    description: 'Réduisez votre empreinte carbone et participez à la transition énergétique.',
  },
  {
    icon: TrendingUp,
    title: 'Rentabilité garantie',
    description: 'Amortissement en 7-9 ans avec des rendements constants sur 25+ ans.',
  },
  {
    icon: ShieldCheck,
    title: 'Aides de l\'État',
    description: 'Bénéficiez de MaPrimeRénov\', TVA réduite, et autres aides cumulables.',
  },
  {
    icon: Zap,
    title: 'Indépendance énergétique',
    description: 'Produisez, consommez et revendez votre propre énergie verte.',
  },
];

export function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const parallaxOffset = useParallax(0.1);

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Parallax background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4">
            <Leaf className="w-4 h-4 inline mr-2" />
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 text-shadow">
            L'indépendance énergétique{' '}
            <span className="text-gradient">accessible à tous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Votre bien-être, la réduction de votre empreinte carbone et de vos dépenses sont nos priorités incontournables.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`animate-on-scroll-scale ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="group relative rounded-2xl p-8 glass hover-lift h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold gap-3 px-10 py-7 rounded-full glow-primary hover:scale-105 transition-all duration-300"
          >
            <a href="tel:0623666839">
              <Phone className="w-6 h-6" />
              Obtenir mon estimation gratuite
            </a>
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            Devis gratuit • Sans engagement • Réponse sous 2h
          </p>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
