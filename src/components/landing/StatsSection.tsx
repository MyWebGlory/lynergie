import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import { Award, Users, Star, Calendar } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Installations réalisées',
    description: 'Familles accompagnées vers l\'indépendance énergétique',
    decimals: 0,
  },
  {
    icon: Calendar,
    value: 10,
    suffix: '+',
    label: 'Années d\'expertise',
    description: 'D\'expérience dans le photovoltaïque et les énergies renouvelables',
    decimals: 0,
  },
  {
    icon: Star,
    value: 5.0,
    decimals: 1,
    suffix: '★',
    label: 'Note Google',
    description: 'Basée sur plus de 90 avis clients vérifiés',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Certifié RGE',
    description: 'Qualifications QualiPV & QualiPac reconnues par l\'État',
    decimals: 0,
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const count = useCountUp(stat.value, 0, 2000, isVisible);

  return (
    <div
      ref={ref}
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Card */}
      <div className={`relative bg-card rounded-3xl p-8 border border-border/50 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <stat.icon className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Value */}
        <div className="relative mb-2">
          <span className="text-5xl md:text-6xl font-black text-foreground">
            {stat.decimals ? count.toFixed(stat.decimals) : count}
          </span>
          <span className="text-3xl md:text-4xl font-bold text-secondary ml-1">
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <h3 className="relative text-xl font-bold text-foreground mb-2">
          {stat.label}
        </h3>
        
        {/* Description */}
        <p className="relative text-muted-foreground text-sm">
          {stat.description}
        </p>
      </div>
    </div>
  );
}

export function StatsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="stats" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Award className="w-4 h-4" />
            Nos Chiffres
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            La confiance de <span className="text-primary">+500 familles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des résultats concrets qui témoignent de notre engagement envers la qualité et la satisfaction client.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
