import { useEffect, useRef, useState } from 'react';
import { Phone, Search, FileText, ClipboardCheck, Wrench, Shield, Check, Zap, Home, Sun, Leaf, Wind, Battery, Sparkles } from 'lucide-react';

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

const floatingIcons = [
  { Icon: Sun, top: '5%', left: '3%', delay: 0, size: 32 },
  { Icon: Home, top: '12%', right: '5%', delay: 1, size: 28 },
  { Icon: Zap, top: '25%', left: '8%', delay: 2, size: 24 },
  { Icon: Leaf, top: '35%', right: '3%', delay: 3, size: 30 },
  { Icon: Wind, top: '50%', left: '2%', delay: 4, size: 26 },
  { Icon: Battery, top: '60%', right: '6%', delay: 5, size: 28 },
  { Icon: Sparkles, top: '75%', left: '5%', delay: 6, size: 22 },
  { Icon: Sun, top: '85%', right: '4%', delay: 7, size: 26 },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const stepsContainer = stepsContainerRef.current;

    if (!section || !container || !stepsContainer) return;

    let scrollTriggerInstance: any = null;

    const initGSAP = async () => {
      try {
        const gsapModule = await import('gsap');
        const scrollTriggerModule = await import('gsap/ScrollTrigger');
        
        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);

        // Kill any existing triggers
        ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger === section) t.kill();
        });

        // SCROLL PINNING - Pin the entire section
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => `+=${steps.length * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const stepIndex = Math.min(
              Math.floor(progress * steps.length),
              steps.length - 1
            );
            setActiveStep(stepIndex);
          },
        });

        // Force a refresh
        ScrollTrigger.refresh();

      } catch (error) {
        console.error('Failed to load GSAP:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timeout = setTimeout(initGSAP, 100);

    return () => {
      clearTimeout(timeout);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.3) 50%, hsl(var(--background)) 100%)' }}
    >
      {/* Enhanced floating background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, top, left, right, delay, size }, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{ 
              top, 
              left, 
              right,
              animationDelay: `${delay}s`,
              animationDuration: `${12 + index * 2}s`
            }}
          >
            <div 
              className="rounded-2xl backdrop-blur-sm flex items-center justify-center"
              style={{
                width: size * 2,
                height: size * 2,
                background: index % 2 === 0 
                  ? 'linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--primary)/0.05))' 
                  : 'linear-gradient(135deg, hsl(var(--accent)/0.15), hsl(var(--accent)/0.05))',
                border: `1px solid ${index % 2 === 0 ? 'hsl(var(--primary)/0.2)' : 'hsl(var(--accent)/0.2)'}`,
              }}
            >
              <Icon 
                style={{ width: size, height: size }}
                className={index % 2 === 0 ? 'text-primary/40' : 'text-accent/40'} 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Large gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary)/0.08) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)/0.08) 0%, transparent 70%)', animationDelay: '1s' }}
        />
      </div>

      <div ref={containerRef} className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Header */}
          <div className="space-y-6">
            <span 
              className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wide"
              style={{ 
                background: 'linear-gradient(135deg, hsl(var(--primary)/0.2), hsl(var(--primary)/0.1))',
                border: '1px solid hsl(var(--primary)/0.3)',
                color: 'hsl(var(--primary))'
              }}
            >
              Notre Processus
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              Un accompagnement{' '}
              <span 
                className="inline-block"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                de A à Z
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              De votre premier appel à la mise en service, nous gérons tout. 
              Concentrez-vous sur les économies, on s'occupe du reste.
            </p>

            {/* Progress indicator */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-sm text-muted-foreground">Progression</span>
              <div className="flex-1 h-2 rounded-full bg-muted max-w-[200px] overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${((activeStep + 1) / steps.length) * 100}%`,
                    background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))'
                  }}
                />
              </div>
              <span className="text-sm font-bold text-primary">
                {activeStep + 1}/{steps.length}
              </span>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div 
                className="p-5 rounded-2xl backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--card)/0.8), hsl(var(--card)/0.4))',
                  border: '1px solid hsl(var(--border)/0.5)'
                }}
              >
                <div 
                  className="text-3xl font-black mb-1"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)/0.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  48h
                </div>
                <div className="text-sm text-muted-foreground">Délai d'étude</div>
              </div>
              <div 
                className="p-5 rounded-2xl backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--card)/0.8), hsl(var(--card)/0.4))',
                  border: '1px solid hsl(var(--border)/0.5)'
                }}
              >
                <div 
                  className="text-3xl font-black mb-1"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent)/0.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Aides gérées</div>
              </div>
            </div>
          </div>

          {/* Right: Animated Steps */}
          <div ref={stepsContainerRef} className="relative h-[500px] flex items-center justify-center">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              const isFuture = index > activeStep;

              return (
                <div
                  key={step.number}
                  className="absolute w-full max-w-md transition-all duration-700 ease-out"
                  style={{
                    opacity: isActive ? 1 : isPast ? 0 : 0.3,
                    transform: isActive 
                      ? 'translateY(0) scale(1) rotateX(0deg)' 
                      : isPast 
                        ? 'translateY(-100px) scale(0.8) rotateX(-20deg)' 
                        : 'translateY(100px) scale(0.9) rotateX(20deg)',
                    zIndex: isActive ? 10 : 1,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div 
                    className="p-8 rounded-3xl backdrop-blur-xl"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--card)/0.95), hsl(var(--card)/0.7))',
                      border: '1px solid hsl(var(--primary)/0.3)',
                      boxShadow: isActive 
                        ? '0 25px 80px -20px hsl(var(--primary)/0.4), 0 10px 30px -10px hsl(var(--background)/0.5)' 
                        : 'none',
                    }}
                  >
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div 
                        className="relative shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-500"
                        style={{
                          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)/0.8))',
                          boxShadow: '0 10px 40px -10px hsl(var(--primary)/0.5)',
                          transform: isActive ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                        }}
                      >
                        <step.Icon className="w-10 h-10 text-primary-foreground" />
                        
                        {/* Step number badge */}
                        <div 
                          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                          style={{
                            background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent)/0.8))',
                            color: 'hsl(var(--accent-foreground))',
                            boxShadow: '0 4px 15px -5px hsl(var(--accent)/0.5)'
                          }}
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 
                          className="text-2xl font-bold text-foreground mb-3 transition-all duration-500"
                          style={{
                            transform: isActive ? 'translateX(0)' : 'translateX(20px)',
                            opacity: isActive ? 1 : 0.5
                          }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="text-muted-foreground leading-relaxed transition-all duration-500"
                          style={{
                            transform: isActive ? 'translateX(0)' : 'translateX(30px)',
                            opacity: isActive ? 1 : 0.3
                          }}
                        >
                          {step.description}
                        </p>

                        {/* Completion indicator */}
                        <div 
                          className="mt-4 flex items-center gap-2 transition-all duration-500"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? 'translateY(0)' : 'translateY(10px)'
                          }}
                        >
                          <div 
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ background: 'hsl(var(--accent))' }}
                          >
                            <Check className="w-4 h-4 text-accent-foreground" />
                          </div>
                          <span className="text-sm text-accent font-medium">Étape en cours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Step indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="transition-all duration-300"
                  style={{
                    width: index === activeStep ? 32 : 12,
                    height: 12,
                    borderRadius: 6,
                    background: index === activeStep 
                      ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))' 
                      : index < activeStep 
                        ? 'hsl(var(--primary)/0.5)' 
                        : 'hsl(var(--muted))',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Scrollez</span>
        <div 
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: 'hsl(var(--primary)/0.5)' }}
        >
          <div 
            className="w-1.5 h-3 rounded-full animate-pulse"
            style={{ background: 'hsl(var(--primary))' }}
          />
        </div>
      </div>
    </section>
  );
}
