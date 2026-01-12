import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Phone, Search, FileText, ClipboardCheck, Wrench, Shield, Check, Zap, Home, Sun, Leaf } from 'lucide-react';
import { SectionFloatingIcons } from './SectionFloatingIcons';

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
  { Icon: Sun, position: 'top-[10%] left-[5%]', delay: '0s', color: 'primary' as const },
  { Icon: Home, position: 'top-[20%] right-[8%]', delay: '1s', color: 'accent' as const },
  { Icon: Zap, position: 'top-[50%] left-[3%]', delay: '2s', color: 'primary' as const },
  { Icon: Leaf, position: 'bottom-[30%] right-[5%]', delay: '3s', color: 'accent' as const },
  { Icon: Sun, position: 'bottom-[15%] left-[8%]', delay: '4s', color: 'accent' as const },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    const section = sectionRef.current;
    const pinned = pinnedRef.current;
    const timeline = timelineRef.current;

    if (!section || !pinned || !timeline) return;

    // Dynamic import to avoid SSR issues
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      // Only apply pinning on desktop
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        // Pin the left side while scrolling through the timeline
        ScrollTrigger.create({
          trigger: section,
          start: 'top top+=100',
          end: () => `+=${timeline.offsetHeight - pinned.offsetHeight + 100}`,
          pin: pinned,
          pinSpacing: false,
        });

        // Animate each step
        const stepElements = timeline.querySelectorAll('.process-step');
        stepElements.forEach((step) => {
          gsap.fromTo(
            step,
            { opacity: 0, x: 50, rotateY: 15 },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Animate the connecting line
          const line = step.querySelector('.connecting-line-fill');
          if (line) {
            gsap.fromTo(
              line,
              { scaleY: 0 },
              {
                scaleY: 1,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: step,
                  start: 'top 60%',
                  end: 'bottom 60%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });

        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      });

      return () => {
        mm.revert();
      };
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Floating background icons */}
      <SectionFloatingIcons icons={floatingIcons} />

      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-orb-1" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-orb-2" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header - Pinned on desktop */}
          <div ref={pinnedRef} className="lg:pt-8">
            <div 
              ref={headerRef}
              className={`transition-all duration-1000 ${isHeaderVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <span 
                className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4 animate-tilt-in"
                style={{ animationDelay: '0.1s' }}
              >
                Notre Processus
              </span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 text-shadow animate-title-reveal"
                style={{ animationDelay: '0.2s' }}
              >
                Un accompagnement{' '}
                <span className="text-gradient inline-block animate-text-shimmer">de A à Z</span>
              </h2>
              <p 
                className="text-lg text-muted-foreground mb-8 animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                De votre premier appel à la mise en service, nous gérons tout. 
                Concentrez-vous sur les économies, on s'occupe du reste.
              </p>

              {/* Quick stats with animation */}
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="p-4 rounded-2xl glass hover-lift animate-fade-in-up"
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="text-2xl font-bold text-primary mb-1 animate-bounce-subtle">48h</div>
                  <div className="text-sm text-muted-foreground">Délai d'étude</div>
                </div>
                <div 
                  className="p-4 rounded-2xl glass hover-lift animate-fade-in-up"
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="text-2xl font-bold text-accent mb-1 animate-bounce-subtle" style={{ animationDelay: '0.3s' }}>100%</div>
                  <div className="text-sm text-muted-foreground">Aides gérées</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div ref={timelineRef}>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="process-step relative"
                style={{ perspective: '1000px' }}
              >
                <div className="flex gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    {/* Step circle */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center bg-primary glow-primary group hover:scale-110 transition-transform duration-300">
                      <step.Icon className="w-7 h-7 text-primary-foreground" />
                      
                      {/* Completion check */}
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                    </div>

                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="relative w-0.5 flex-1 min-h-[80px] bg-border mt-4">
                        <div className="connecting-line-fill absolute inset-0 bg-gradient-to-b from-primary to-accent origin-top" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-mono text-sm font-bold">{step.number}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[100px]" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 hover:text-gradient transition-all duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
