import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import { useParallax } from '@/hooks/useParallax';
import { Home, Award, Star, TrendingUp, Sun, Leaf, Zap, Wind } from 'lucide-react';
import { SectionFloatingIcons } from './SectionFloatingIcons';

const stats = [
  { 
    value: 500, 
    suffix: '+', 
    label: 'Installations réalisées',
    description: 'Maisons équipées en Auvergne-Rhône-Alpes',
    Icon: Home,
    color: 'primary',
    decimals: 0,
  },
  { 
    value: 10, 
    suffix: ' ans+', 
    label: "D'expertise",
    description: 'Une décennie au service de la transition énergétique',
    Icon: Award,
    color: 'accent',
    decimals: 0,
  },
  { 
    value: 5.0, 
    suffix: '★', 
    label: 'Note Google',
    description: 'Satisfaction client maximale vérifiée',
    Icon: Star,
    color: 'primary',
    decimals: 1,
  },
  { 
    value: 70, 
    suffix: '%', 
    label: "D'économies",
    description: 'Réduction moyenne sur les factures énergétiques',
    Icon: TrendingUp,
    color: 'accent',
    decimals: 0,
  },
];

const floatingIcons = [
  { Icon: Sun, position: 'top-[5%] left-[5%]', delay: '0s', color: 'primary' as const, size: 'lg' as const },
  { Icon: TrendingUp, position: 'top-[10%] right-[8%]', delay: '1s', color: 'accent' as const, size: 'md' as const },
  { Icon: Leaf, position: 'top-[40%] left-[3%]', delay: '1.5s', color: 'accent' as const, size: 'lg' as const },
  { Icon: Home, position: 'top-[55%] right-[4%]', delay: '2s', color: 'primary' as const, size: 'md' as const },
  { Icon: Zap, position: 'bottom-[25%] left-[6%]', delay: '2.5s', color: 'primary' as const, size: 'md' as const },
  { Icon: Wind, position: 'bottom-[15%] right-[5%]', delay: '3s', color: 'accent' as const, size: 'lg' as const },
];

function StatCard({ stat, index, isSectionVisible }: { stat: typeof stats[0]; index: number; isSectionVisible: boolean }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const count = useCountUp(stat.value, stat.decimals, 2000, isVisible);

  const colorClasses = {
    primary: 'text-primary border-primary/20 bg-primary/5',
    accent: 'text-accent border-accent/20 bg-accent/5',
  };

  return (
    <div
      ref={ref}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(15deg)',
        transition: `all 0.8s ease-out ${index * 0.15}s`
      }}
    >
      <div className="group relative p-8 rounded-3xl glass hover-lift h-full" style={{ perspective: '1000px' }}>
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-2xl ${colorClasses[stat.color as keyof typeof colorClasses]} mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          <stat.Icon className="w-7 h-7" />
        </div>

        {/* Counter */}
        <div className="mb-4">
          <span className={`text-5xl md:text-6xl font-black ${stat.color === 'primary' ? 'text-gradient' : 'text-accent'}`}>
            {stat.decimals ? count.toFixed(stat.decimals) : Math.round(count)}
          </span>
          <span className="text-3xl md:text-4xl font-bold text-foreground/80 ml-1">
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>
        <p className="text-muted-foreground text-sm">{stat.description}</p>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
          <div className={`absolute -top-10 -right-10 w-20 h-20 ${stat.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rotate-45`} />
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const parallaxOffset = useParallax(0.15);

  return (
    <section 
      ref={sectionRef} 
      id="stats" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(var(--muted)/0.15) 0%, hsl(var(--background)) 30%, hsl(var(--muted)/0.1) 70%, hsl(var(--background)) 100%)' }}
    >
      {/* Floating icons */}
      <SectionFloatingIcons icons={floatingIcons} opacity={0.5} />

      {/* Enhanced gradient orbs */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary)/0.1) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)/0.1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header with tilt animation */}
        <div 
          className="text-center mb-16"
          style={{ perspective: '1000px' }}
        >
          <span 
            className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4"
            style={{ 
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'rotateX(0) translateY(0)' : 'rotateX(20deg) translateY(20px)',
              transition: 'all 0.8s ease-out 0.1s'
            }}
          >
            Nos Résultats
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-shadow"
            style={{ 
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'rotateX(0) translateY(0) skewX(0)' : 'rotateX(25deg) translateY(40px) skewX(-5deg)',
              transition: 'all 1s ease-out 0.2s'
            }}
          >
            Des chiffres qui{' '}
            <span className="text-gradient animate-text-shimmer">parlent</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ 
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            Plus d'une décennie d'excellence au service de votre transition énergétique
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isSectionVisible={isSectionVisible} />
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
