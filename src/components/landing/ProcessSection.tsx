import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Phone, MapPin, Calculator, FileText, Wrench, CheckCircle, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: 1,
    title: 'Prise de contact',
    description: 'Appelez-nous pour discuter de votre projet. Nous répondons en moins de 2 heures.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: MapPin,
    number: 2,
    title: 'Visite technique',
    description: 'Un expert se déplace chez vous pour évaluer vos besoins et les spécificités de votre installation.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Calculator,
    number: 3,
    title: 'Étude personnalisée',
    description: 'Nous calculons votre rentabilité et préparons un devis détaillé et transparent.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: FileText,
    number: 4,
    title: 'Démarches administratives',
    description: 'Nous gérons toutes les formalités : mairie, Consuel, demandes d\'aides...',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Wrench,
    number: 5,
    title: 'Installation',
    description: 'Nos artisans certifiés RGE réalisent l\'installation dans les règles de l\'art.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: BarChart3,
    number: 6,
    title: 'Suivi et garantie',
    description: 'Suivez vos performances en temps réel et bénéficiez de notre garantie complète.',
    color: 'from-secondary to-orange-600',
  },
];

export function ProcessSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="process" className="py-24 lg:py-32 bg-card relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4" />
            Notre Processus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Du premier appel à <span className="text-primary">l'installation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un accompagnement clé en main, transparent et sans surprise à chaque étape.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block" style={{ transform: 'translateX(-50%)' }} />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative lg:flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div
                      className={`group bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      {/* Mobile Icon */}
                      <div className={`lg:hidden w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          Étape {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon (Desktop) */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} items-center justify-center shadow-xl transition-all duration-500 hover:scale-110 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ 
                      transform: 'translateX(-50%)',
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-background border-2 border-current rounded-full flex items-center justify-center text-sm font-bold" style={{ borderColor: 'hsl(var(--primary))' }}>
                      {step.number}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
