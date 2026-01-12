import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useParallax } from '@/hooks/useParallax';
import { Phone, Search, FileText, ClipboardCheck, Wrench, Shield, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Prise de contact',
    description: 'Appelez-nous ou remplissez notre formulaire. Nous vous recontactons sous 2 heures.',
    Icon: Phone,
  },
  {
    number: '02',
    title: 'Visite technique',
    description: 'Un expert se déplace gratuitement chez vous pour étudier votre projet.',
    Icon: Search,
  },
  {
    number: '03',
    title: 'Étude personnalisée',
    description: 'Nous concevons une solution sur mesure adaptée à vos besoins et votre budget.',
    Icon: FileText,
  },
  {
    number: '04',
    title: 'Accompagnement administratif',
    description: 'Nous gérons toutes les démarches : aides, subventions, autorisations.',
    Icon: ClipboardCheck,
  },
  {
    number: '05',
    title: 'Installation',
    description: 'Nos équipes certifiées RGE réalisent l\'installation dans les règles de l\'art.',
    Icon: Wrench,
  },
  {
    number: '06',
    title: 'Suivi et garantie',
    description: 'Maintenance, garanties étendues et support technique à vie.',
    Icon: Shield,
  },
];

function ProcessStep({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`relative animate-on-scroll ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="flex gap-6">
        {/* Timeline */}
        <div className="flex flex-col items-center">
          {/* Step circle */}
          <div 
            className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              isVisible 
                ? 'bg-primary glow-primary' 
                : 'bg-secondary'
            }`}
          >
            <step.Icon className={`w-7 h-7 ${isVisible ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
            
            {/* Completion check */}
            {isVisible && (
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center animate-scale-in">
                <Check className="w-3 h-3 text-accent-foreground" />
              </div>
            )}
          </div>

          {/* Connecting line */}
          {!isLast && (
            <div className="relative w-0.5 flex-1 min-h-[80px] bg-border mt-4">
              <div 
                className="absolute inset-0 bg-gradient-to-b from-primary to-accent origin-top transition-transform duration-1000"
                style={{ 
                  transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                  transitionDelay: `${index * 0.15 + 0.3}s`
                }}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-primary font-mono text-sm font-bold">{step.number}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[100px]" />
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            {step.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed max-w-md">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const parallaxOffset = useParallax(0.1);

  return (
    <section ref={sectionRef} id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header - Sticky */}
          <div className="lg:sticky lg:top-32">
            <div className={`animate-on-scroll ${isSectionVisible ? 'visible' : ''}`}>
              <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4">
                Notre Processus
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 text-shadow">
                Un accompagnement{' '}
                <span className="text-gradient">de A à Z</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                De votre premier appel à la mise en service, nous gérons tout. 
                Concentrez-vous sur les économies, on s'occupe du reste.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl glass">
                  <div className="text-2xl font-bold text-primary mb-1">48h</div>
                  <div className="text-sm text-muted-foreground">Délai d'étude</div>
                </div>
                <div className="p-4 rounded-2xl glass">
                  <div className="text-2xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Aides gérées</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            {steps.map((step, index) => (
              <ProcessStep 
                key={step.number} 
                step={step} 
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
