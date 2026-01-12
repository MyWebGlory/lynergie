import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MapPin, Calculator, FileText, Wrench, CheckCircle, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    number: 1,
    title: 'Visite technique',
    description: 'Visite à domicile pour comprendre quel est votre besoin, et vous aider dans votre choix.',
  },
  {
    icon: Calculator,
    number: 2,
    title: 'Étude personnalisée',
    description: 'Calcul de rentabilité et réalisation d\'un devis, pour que vous puissiez prendre la meilleure décision.',
  },
  {
    icon: FileText,
    number: 3,
    title: 'Démarches administratives',
    description: 'Demande en mairie et consuel, pour assurer la conformité de votre installation.',
  },
  {
    icon: Wrench,
    number: 4,
    title: 'Installation et raccordement',
    description: 'Pose et mise en service réglementée par nos artisans certifiés d\'État.',
  },
  {
    icon: CheckCircle,
    number: 5,
    title: 'Contrôle post-installation',
    description: 'Pour assurer la sécurité et la longévité de votre installation.',
  },
  {
    icon: BarChart3,
    number: 6,
    title: 'Suivi de performances',
    description: 'Suivi de vos gains et économies en temps réel, grâce à nos solutions connectées.',
  },
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex items-center gap-6 md:gap-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'} hidden md:block`}>
        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
        <p className="text-muted-foreground">{step.description}</p>
      </div>

      {/* Icon Circle */}
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg relative z-10">
          <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
          {step.number}
        </div>
        {/* Connection Line */}
        {index < steps.length - 1 && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 md:h-24 bg-border" />
        )}
      </div>

      {/* Mobile Content */}
      <div className="flex-1 md:hidden">
        <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
        <p className="text-muted-foreground text-sm">{step.description}</p>
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export function ProcessSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="process" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Notre Processus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Déroulé de votre <span className="text-primary">projet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un accompagnement complet, de l'étude initiale au suivi de vos performances.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-20">
          {steps.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
