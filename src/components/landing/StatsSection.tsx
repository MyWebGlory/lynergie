import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import { Shield, MapPin } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  isVisible: boolean;
}

function StatItem({ value, suffix = '', prefix = '', label, isVisible }: StatItemProps) {
  const count = useCountUp(value, 0, 2000, isVisible);
  
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-2">
        {prefix}{count}{suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="stats" className="py-20 bg-card relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <StatItem
            value={10}
            prefix="+"
            suffix=" ans"
            label="d'expérience"
            isVisible={isVisible}
          />
          <StatItem
            value={500}
            prefix="+"
            label="installations réalisées"
            isVisible={isVisible}
          />
          <StatItem
            value={5}
            suffix=".0★"
            label="Note Google moyenne"
            isVisible={isVisible}
          />
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-3 bg-muted/50 rounded-full px-6 py-3 hover:bg-muted transition-colors">
            <Shield className="w-6 h-6 text-accent" />
            <span className="font-semibold text-foreground">RGE QualiPV</span>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 rounded-full px-6 py-3 hover:bg-muted transition-colors">
            <Shield className="w-6 h-6 text-accent" />
            <span className="font-semibold text-foreground">RGE QualiPac</span>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 rounded-full px-6 py-3 hover:bg-muted transition-colors">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="font-semibold text-foreground">Auvergne-Rhône-Alpes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
