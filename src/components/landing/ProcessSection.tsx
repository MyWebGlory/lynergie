import { useEffect, useRef, useState } from 'react';
import { Phone, Search, FileText, ClipboardCheck, Wrench, Shield, Check, Sun, Leaf } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Prise de contact',
    description: 'Appelez-nous ou remplissez notre formulaire.',
    Icon: Phone,
  },
  {
    number: '02',
    title: 'Visite technique',
    description: 'Un expert se déplace gratuitement chez vous.',
    Icon: Search,
  },
  {
    number: '03',
    title: 'Étude personnalisée',
    description: 'Une solution sur mesure pour vos besoins.',
    Icon: FileText,
  },
  {
    number: '04',
    title: 'Accompagnement administratif',
    description: 'Nous gérons aides et autorisations.',
    Icon: ClipboardCheck,
  },
  {
    number: '05',
    title: 'Installation',
    description: 'Équipes certifiées RGE à votre service.',
    Icon: Wrench,
  },
  {
    number: '06',
    title: 'Suivi et garantie',
    description: 'Support technique à vie.',
    Icon: Shield,
  },
];

const floatingIcons = [
  { Icon: Sun, top: '8%', left: '4%', delay: 0, size: 24 },
  { Icon: Leaf, top: '15%', right: '5%', delay: 2, size: 20 },
  { Icon: Sun, bottom: '20%', right: '4%', delay: 4, size: 22 },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let scrollTriggerInstance: any = null;

    const initGSAP = async () => {
      try {
        const gsapModule = await import('gsap');
        const scrollTriggerModule = await import('gsap/ScrollTrigger');
        
        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger === section) t.kill();
        });

        scrollTriggerInstance = ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => `+=${steps.length * 80}%`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const currentStep = Math.floor(progress * steps.length);
            const newVisible = [];
            for (let i = 0; i <= Math.min(currentStep, steps.length - 1); i++) {
              newVisible.push(i);
            }
            setVisibleSteps(newVisible);
          },
        });

        ScrollTrigger.refresh();
      } catch (error) {
        console.error('Failed to load GSAP:', error);
        setVisibleSteps([0, 1, 2, 3, 4, 5]);
      }
    };

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
      className="relative min-h-screen overflow-hidden py-16"
      style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.2) 50%, hsl(var(--background)) 100%)' }}
    >
      {/* Minimal floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, top, left, right, bottom, delay, size }, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-20"
            style={{ top, left, right, bottom, animationDelay: `${delay}s`, animationDuration: `${14 + index * 3}s` }}
          >
            <div 
              className="rounded-xl backdrop-blur-sm flex items-center justify-center"
              style={{
                width: size * 1.8,
                height: size * 1.8,
                background: index % 2 === 0 
                  ? 'linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--primary)/0.05))' 
                  : 'linear-gradient(135deg, hsl(var(--accent)/0.15), hsl(var(--accent)/0.05))',
              }}
            >
              <Icon style={{ width: size, height: size }} className={index % 2 === 0 ? 'text-primary/50' : 'text-accent/50'} />
            </div>
          </div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary)/0.06) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)/0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-5 gap-8 items-center w-full">
          {/* Left: Header - 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold"
              style={{ 
                background: 'linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--primary)/0.08))',
                border: '1px solid hsl(var(--primary)/0.2)',
                color: 'hsl(var(--primary))'
              }}
            >
              Notre Processus
            </span>
            
            <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
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
            
            <p className="text-muted-foreground">
              De votre premier appel à la mise en service, nous gérons tout.
            </p>

            {/* Quick stats */}
            <div className="flex gap-4 pt-2">
              <div 
                className="px-4 py-3 rounded-xl backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--card)/0.8), hsl(var(--card)/0.4))',
                  border: '1px solid hsl(var(--border)/0.5)'
                }}
              >
                <div className="text-xl font-black text-primary">48h</div>
                <div className="text-xs text-muted-foreground">Délai d'étude</div>
              </div>
              <div 
                className="px-4 py-3 rounded-xl backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--card)/0.8), hsl(var(--card)/0.4))',
                  border: '1px solid hsl(var(--border)/0.5)'
                }}
              >
                <div className="text-xl font-black text-accent">100%</div>
                <div className="text-xs text-muted-foreground">Aides gérées</div>
              </div>
            </div>
          </div>

          {/* Right: Steps Timeline - 3 columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {steps.map((step, index) => {
                const isVisible = visibleSteps.includes(index);
                const isLatest = visibleSteps.length > 0 && index === visibleSteps[visibleSteps.length - 1];

                return (
                  <div
                    key={step.number}
                    className="relative"
                  >
                    {/* Connecting line to next step */}
                    {index < steps.length - 1 && index !== 2 && (
                      <div 
                        className="absolute top-1/2 -right-3 w-6 h-0.5 transition-all duration-500"
                        style={{
                          background: isVisible && visibleSteps.includes(index + 1) 
                            ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))' 
                            : 'hsl(var(--border))',
                          opacity: isVisible ? 1 : 0.3
                        }}
                      />
                    )}

                    <div 
                      className="p-4 rounded-2xl transition-all duration-500"
                      style={{
                        opacity: isVisible ? 1 : 0.3,
                        transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(10px)',
                        background: isLatest 
                          ? 'linear-gradient(135deg, hsl(var(--card)), hsl(var(--card)/0.8))' 
                          : 'hsl(var(--card)/0.5)',
                        border: isLatest 
                          ? '1px solid hsl(var(--primary)/0.3)' 
                          : '1px solid hsl(var(--border)/0.3)',
                        boxShadow: isLatest 
                          ? '0 10px 40px -15px hsl(var(--primary)/0.3)' 
                          : 'none',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div 
                          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500"
                          style={{
                            background: isVisible 
                              ? 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)/0.8))' 
                              : 'hsl(var(--muted))',
                          }}
                        >
                          <step.Icon className="w-5 h-5 text-primary-foreground" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-primary font-bold">{step.number}</span>
                            {isVisible && (
                              <div 
                                className="w-4 h-4 rounded-full flex items-center justify-center"
                                style={{ background: 'hsl(var(--accent))' }}
                              >
                                <Check className="w-2.5 h-2.5 text-accent-foreground" />
                              </div>
                            )}
                          </div>
                          <h3 className="text-sm font-bold text-foreground mb-1 truncate">
                            {step.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vertical connecting lines for mobile/between rows */}
            <div 
              className="hidden md:flex justify-center mt-3 gap-1"
            >
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: visibleSteps.includes(index) 
                      ? 'hsl(var(--primary))' 
                      : 'hsl(var(--muted))',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-60">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Scrollez</span>
        <div 
          className="w-5 h-8 rounded-full border flex items-start justify-center p-1"
          style={{ borderColor: 'hsl(var(--primary)/0.4)' }}
        >
          <div 
            className="w-1 h-2 rounded-full"
            style={{ background: 'hsl(var(--primary))' }}
          />
        </div>
      </div>
    </section>
  );
}
