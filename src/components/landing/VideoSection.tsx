import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { YouTubeEmbed } from './YouTubeEmbed';
import { Quote, Play } from 'lucide-react';

export function VideoSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Quote */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <Quote className="absolute -top-8 -left-4 w-20 h-20 text-secondary/30" />
              
              <blockquote className="relative z-10">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                  "Réaliser chaque projet comme si nous équipions 
                  <span className="text-secondary"> un proche</span>."
                </p>
                
                <footer className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center text-white font-bold text-xl">
                    MV
                  </div>
                  <div>
                    <cite className="not-italic text-white font-semibold text-lg block">
                      Mr. VIARD
                    </cite>
                    <span className="text-white/60">Fondateur de Lynergie</span>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Stats under quote */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-secondary">+10</p>
                <p className="text-white/60 text-sm">ans d'expérience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">+500</p>
                <p className="text-white/60 text-sm">installations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">5.0★</p>
                <p className="text-white/60 text-sm">note Google</p>
              </div>
            </div>
          </div>

          {/* Right: YouTube Video */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-secondary/20 rounded-3xl" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <YouTubeEmbed
                  videoId="uk0kd_hw8z4"
                  title="Présentation par le fondateur de Lynergie"
                  isShort={true}
                />
              </div>

              {/* Label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-secondary-foreground ml-0.5" fill="currentColor" />
                </div>
                <span className="font-semibold text-foreground whitespace-nowrap">Découvrez notre vision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
