import { useEffect, useRef } from 'react';
import { Phone, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGradient } from './AnimatedGradient';
import { FloatingElements } from './FloatingElements';
import { useParallax } from '@/hooks/useParallax';

const services = [
  'Panneaux Solaires',
  'Pompe à Chaleur',
  'Climatisation',
  'Borne de Recharge',
];

export function HeroSection() {
  const parallaxOffset = useParallax(0.3);
  const heroRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR/module loading issues
    const initAnimations = async () => {
      const { gsap } = await import('gsap');
      
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Animate stars one by one
        if (starsRef.current) {
          const stars = starsRef.current.querySelectorAll('.hero-star');
          tl.fromTo(
            stars,
            { scale: 0, rotation: -180, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
            0.2
          );
        }

        // Badge slide in with tilt
        if (badgeRef.current) {
          tl.fromTo(
            badgeRef.current,
            { y: 30, opacity: 0, rotateX: 45 },
            { y: 0, opacity: 1, rotateX: 0, duration: 0.8 },
            0.1
          );
        }

        // Title lines with stagger and tilt
        if (titleRef.current) {
          const lines = titleRef.current.querySelectorAll('.title-line');
          tl.fromTo(
            lines,
            { y: 80, opacity: 0, rotateX: 30, skewX: -5 },
            { y: 0, opacity: 1, rotateX: 0, skewX: 0, duration: 1, stagger: 0.15 },
            0.3
          );
        }

        // Subtitle
        if (subtitleRef.current) {
          tl.fromTo(
            subtitleRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            0.7
          );
        }

        // Service pills stagger
        if (pillsRef.current) {
          const pills = pillsRef.current.querySelectorAll('.service-pill');
          tl.fromTo(
            pills,
            { y: 30, opacity: 0, scale: 0.8 },
            { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08 },
            0.9
          );
        }

        // CTA button with bounce
        if (ctaRef.current) {
          tl.fromTo(
            ctaRef.current,
            { y: 50, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
            1.1
          );
        }

        // Scroll indicator
        if (scrollRef.current) {
          tl.fromTo(
            scrollRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            1.4
          );
        }
      }, heroRef);

      return () => ctx.revert();
    };

    initAnimations();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background with parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <AnimatedGradient />
      </div>

      {/* Floating elements - behind content */}
      <FloatingElements />

      {/* Main content - above everything */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center" style={{ perspective: '1000px' }}>
          {/* Trust badge */}
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-8 opacity-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div ref={starsRef} className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="hero-star w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground/90 font-medium text-sm">5.0 sur Google</span>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-accent animate-bounce-subtle" />
              <span className="text-foreground/90 font-medium text-sm">RGE Certifié</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 ref={titleRef} className="mb-6" style={{ transformStyle: 'preserve-3d' }}>
            <span className="title-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground text-shadow-lg leading-tight opacity-0">
              L'énergie de demain,
            </span>
            <span className="title-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gradient animate-gradient-x leading-tight opacity-0">
              chez vous aujourd'hui
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-shadow opacity-0"
          >
            Experts en transition énergétique depuis plus de 10 ans. 
            Réduisez vos factures jusqu'à 70% avec nos solutions sur mesure.
          </p>

          {/* Services pills */}
          <div ref={pillsRef} className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <span
                key={service}
                className="service-pill px-4 py-2 rounded-full text-sm font-medium glass text-foreground/90 hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default opacity-0"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="opacity-0">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-full animate-glow-pulse transition-transform duration-300 hover:scale-105 group"
            >
              <a href="tel:0623666839" className="flex items-center gap-3">
                <Phone className="w-5 h-5 animate-bounce-subtle" />
                <span>Appeler : 06 23 66 68 39</span>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
            </Button>

            <p className="mt-4 text-sm text-muted-foreground">
              Réponse en moins de 2h • Devis gratuit • Sans engagement
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-0">
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Découvrir</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-scroll-indicator" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
