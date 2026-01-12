import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Zap, Leaf, TrendingUp, PiggyBank, Home, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const benefits = [
  {
    icon: PiggyBank,
    title: 'Économies massives',
    description: 'Réduisez vos factures d\'énergie jusqu\'à 70% dès la première année.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Home,
    title: 'Valorisation immobilière',
    description: 'Augmentez la valeur de votre bien de 5 à 15% avec une installation énergétique.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Leaf,
    title: 'Impact écologique',
    description: 'Réduisez votre empreinte carbone et participez à la transition énergétique.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: TrendingUp,
    title: 'Rentabilité garantie',
    description: 'Amortissement en 7-9 ans avec des rendements constants sur 25+ ans.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: ShieldCheck,
    title: 'Aides de l\'État',
    description: 'Bénéficiez de MaPrimeRénov\', TVA réduite, et autres aides cumulables.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Zap,
    title: 'Indépendance énergétique',
    description: 'Produisez, consommez et revendez votre propre énergie verte.',
    color: 'from-secondary to-orange-600',
  },
];

export function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 lg:py-32 bg-card relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Leaf className="w-4 h-4" />
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            L'indépendance énergétique <span className="text-primary">accessible à tous</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Votre bien-être, la réduction de votre empreinte carbone et de vos dépenses sont nos priorités incontournables.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="tel:0623666839">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold gap-3 px-10 py-7 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              Obtenir mon estimation gratuite
            </Button>
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Devis gratuit • Sans engagement • Réponse sous 2h
          </p>
        </div>
      </div>
    </section>
  );
}
