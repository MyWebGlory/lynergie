import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useParallax } from '@/hooks/useParallax';
import { Zap, Leaf, TrendingUp, PiggyBank, Home, ShieldCheck, Sun, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { SectionFloatingIcons } from './SectionFloatingIcons';

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

const floatingIcons = [
  { Icon: Sun, position: 'top-[8%] left-[4%]', delay: '0s', color: 'primary' as const, size: 'md' as const },
  { Icon: Leaf, position: 'bottom-[12%] right-[5%]', delay: '2s', color: 'accent' as const, size: 'md' as const },
];

export function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const parallaxOffset = useParallax(0.1);

  return (
    <section 
      id="about" 
      className="relative py-16 lg:py-20 overflow-hidden" 
      ref={ref}
      style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.15) 50%, hsl(var(--background)) 100%)' }}
    >
      {/* Floating icons */}
      <SectionFloatingIcons icons={floatingIcons} opacity={0.25} />

      {/* Subtle gradient orbs */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div 
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary)/0.06) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)/0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with tilt */}
        <div 
          className="text-center mb-16"
          style={{ perspective: '1000px' }}
        >
          <span 
            className="inline-flex items-center px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'rotateX(0) translateY(0)' : 'rotateX(20deg) translateY(20px)',
              transition: 'all 0.8s ease-out 0.1s'
            }}
          >
            <Leaf className="w-4 h-4 mr-2" />
            Pourquoi nous choisir
          </span>
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4 text-shadow"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'rotateX(0) translateY(0)' : 'rotateX(15deg) translateY(30px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            L'indépendance énergétique{' '}
            <span className="text-gradient">accessible à tous</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            Votre bien-être, la réduction de votre empreinte carbone et de vos dépenses sont nos priorités incontournables.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              style={{ 
                perspective: '1000px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(15deg)',
                transition: `all 0.8s ease-out ${0.3 + index * 0.1}s`
              }}
            >
              <div className="group relative rounded-2xl p-8 glass hover-lift h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
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
        <div 
          className="text-center"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.8s ease-out 0.8s'
          }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold gap-3 px-10 py-7 rounded-full glow-primary hover:scale-105 transition-all duration-300"
          >
            <a href="tel:0623666839">
              <Phone className="w-6 h-6 animate-bounce-subtle" />
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
