import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useParallax } from '@/hooks/useParallax';
import { YouTubeEmbed } from './YouTubeEmbed';
import { Play, Quote, Sun, Leaf, Zap } from 'lucide-react';
import { SectionFloatingIcons } from './SectionFloatingIcons';

const floatingIcons = [
  { Icon: Sun, position: 'top-[5%] left-[4%]', delay: '0s', color: 'primary' as const, size: 'lg' as const },
  { Icon: Play, position: 'top-[15%] right-[6%]', delay: '0.8s', color: 'accent' as const, size: 'md' as const },
  { Icon: Leaf, position: 'top-[40%] left-[2%]', delay: '1.5s', color: 'accent' as const, size: 'lg' as const },
  { Icon: Quote, position: 'top-[60%] right-[5%]', delay: '2s', color: 'primary' as const, size: 'md' as const },
  { Icon: Zap, position: 'bottom-[30%] left-[5%]', delay: '2.5s', color: 'primary' as const, size: 'md' as const },
  { Icon: Sun, position: 'bottom-[15%] right-[8%]', delay: '3s', color: 'accent' as const, size: 'lg' as const },
];

export function VideoSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const parallaxOffset = useParallax(0.2);

  return (
    <section 
      ref={ref} 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.15) 50%, hsl(var(--background)) 100%)' }}
    >
      {/* Floating icons */}
      <SectionFloatingIcons icons={floatingIcons} opacity={0.5} />

      {/* Video background with parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Founder video */}
          <div 
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-3xl" />
              
              {/* Video container */}
              <div className="relative rounded-2xl overflow-hidden glass p-2">
                <div className="aspect-[9/16] max-w-[320px] mx-auto rounded-xl overflow-hidden">
                  <YouTubeEmbed 
                    videoId="uk0kd_hw8z4" 
                    title="Présentation par le fondateur"
                    isShort={true}
                  />
                </div>
              </div>

              {/* Play badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Play className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium text-foreground">Rencontrez le fondateur</span>
              </div>
            </div>
          </div>

          {/* Right: Quote and text */}
          <div 
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            <Quote 
              className="w-12 h-12 text-primary/40 mb-6"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) rotate(0)' : 'scale(0.5) rotate(-20deg)',
                transition: 'all 0.6s ease-out 0.3s'
              }}
            />
            
            <blockquote 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed mb-8 text-shadow"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'rotateX(0) translateY(0)' : 'rotateX(20deg) translateY(30px)',
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              "Chaque projet est réalisé comme si nous équipions{' '}
              <span className="text-gradient">un proche.</span>"
            </blockquote>

            <div className="space-y-4">
              <p 
                className="text-lg text-muted-foreground"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out 0.5s'
                }}
              >
                Chez Lynergie, nous croyons que la transition énergétique doit être accessible à tous. 
                Notre équipe d'experts vous accompagne de A à Z pour transformer votre habitat.
              </p>
              
              <div 
                className="flex items-center gap-4 pt-4"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out 0.6s'
                }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  LY
                </div>
                <div>
                  <p className="font-semibold text-foreground">L'équipe Lynergie</p>
                  <p className="text-sm text-muted-foreground">Plus de 500 installations réalisées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
