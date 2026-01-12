import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useParallax } from '@/hooks/useParallax';
import { YouTubeEmbed } from './YouTubeEmbed';
import { Star, Quote, BadgeCheck, Sun, Leaf, Home, Zap } from 'lucide-react';
import { SectionFloatingIcons } from './SectionFloatingIcons';

const videoTestimonials = [
  { id: '75adOPvX8Uc', title: 'Témoignage client - Installation solaire' },
  { id: '_9Hwd5s3Hv8', title: 'Témoignage client - Pompe à chaleur' },
  { id: 'v9gfXGFvlcI', title: 'Témoignage client - Rénovation énergétique' },
];

const reviews = [
  {
    name: 'Marie L.',
    location: 'Lyon',
    rating: 5,
    text: "Installation impeccable de nos panneaux solaires. L'équipe est professionnelle et le suivi parfait. Nous économisons déjà 60% sur nos factures !",
    date: 'Il y a 2 semaines',
  },
  {
    name: 'Pierre D.',
    location: 'Grenoble',
    rating: 5,
    text: "Très satisfait de notre pompe à chaleur. Installation rapide, équipe à l'écoute. Je recommande vivement Lynergie.",
    date: 'Il y a 1 mois',
  },
  {
    name: 'Sophie M.',
    location: 'Saint-Étienne',
    rating: 5,
    text: "Service client au top ! Ils nous ont accompagnés pour toutes les démarches administratives. Un vrai gain de temps.",
    date: 'Il y a 3 semaines',
  },
  {
    name: 'Jean-Claude R.',
    location: 'Annecy',
    rating: 5,
    text: "Notre borne de recharge a été installée en une demi-journée. Travail propre et soigné. Merci Lynergie !",
    date: 'Il y a 2 mois',
  },
];

const floatingIcons = [
  { Icon: Star, position: 'top-[5%] left-[4%]', delay: '0s', color: 'primary' as const, size: 'lg' as const },
  { Icon: Sun, position: 'top-[10%] right-[6%]', delay: '1s', color: 'accent' as const, size: 'md' as const },
  { Icon: Quote, position: 'top-[35%] left-[2%]', delay: '1.5s', color: 'accent' as const, size: 'lg' as const },
  { Icon: Home, position: 'top-[50%] right-[4%]', delay: '2s', color: 'primary' as const, size: 'md' as const },
  { Icon: BadgeCheck, position: 'bottom-[35%] left-[5%]', delay: '2.5s', color: 'primary' as const, size: 'lg' as const },
  { Icon: Leaf, position: 'bottom-[20%] right-[3%]', delay: '3s', color: 'accent' as const, size: 'md' as const },
  { Icon: Zap, position: 'bottom-[8%] left-[8%]', delay: '3.5s', color: 'accent' as const, size: 'md' as const },
];

function ReviewCard({ review, index, isSectionVisible }: { review: typeof reviews[0]; index: number; isSectionVisible: boolean }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{ 
        perspective: '1000px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(15deg)',
        transition: `all 0.8s ease-out ${index * 0.1}s`
      }}
    >
      <div className="h-full p-6 rounded-2xl glass hover-lift group">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
              {review.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{review.name}</span>
                <BadgeCheck className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">{review.location}</span>
            </div>
          </div>
          <Quote className="w-8 h-8 text-primary/20" />
        </div>

        {/* Stars with animation */}
        <div className="flex gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 fill-primary text-primary"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transition: `all 0.3s ease-out ${0.3 + i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Text */}
        <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>

        {/* Date */}
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const parallaxOffset = useParallax(0.1);

  return (
    <section 
      ref={sectionRef} 
      id="testimonials" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(var(--muted)/0.1) 0%, hsl(var(--background)) 30%, hsl(var(--muted)/0.2) 70%, hsl(var(--background)) 100%)' }}
    >
      {/* Floating icons */}
      <SectionFloatingIcons icons={floatingIcons} opacity={0.5} />

      {/* Enhanced gradient orbs */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary)/0.1) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)/0.1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header with tilt */}
        <div 
          className="text-center mb-16"
          style={{ perspective: '1000px' }}
        >
          <span 
            className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4"
            style={{ 
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'rotateX(0) translateY(0)' : 'rotateX(20deg) translateY(20px)',
              transition: 'all 0.8s ease-out 0.1s'
            }}
          >
            Témoignages
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-shadow"
            style={{ 
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'rotateX(0) translateY(0) skewX(0)' : 'rotateX(25deg) translateY(40px) skewX(-5deg)',
              transition: 'all 1s ease-out 0.2s'
            }}
          >
            Ils nous font{' '}
            <span className="text-gradient animate-text-shimmer">confiance</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ 
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            Découvrez les retours de nos clients satisfaits à travers la région
          </p>
        </div>

        {/* Video testimonials */}
        <div className="mb-16">
          <div 
            className="flex items-center justify-center gap-2 mb-8"
            style={{ 
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.3s'
            }}
          >
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-semibold text-foreground">Témoignages vidéo</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <div 
                key={video.id}
                style={{ 
                  perspective: '1000px',
                  opacity: isSectionVisible ? 1 : 0,
                  transform: isSectionVisible ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(15deg)',
                  transition: `all 0.8s ease-out ${0.4 + index * 0.15}s`
                }}
              >
                <div className="rounded-2xl overflow-hidden glass p-2 hover-lift">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <YouTubeEmbed videoId={video.id} title={video.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google reviews badge */}
        <div 
          className="flex justify-center mb-8"
          style={{ 
            opacity: isSectionVisible ? 1 : 0,
            transform: isSectionVisible ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.6s ease-out 0.7s'
          }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="w-px h-6 bg-border" />
            <span className="font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">sur Google</span>
            <BadgeCheck className="w-5 h-5 text-accent" />
          </div>
        </div>

        {/* Written reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} isSectionVisible={isSectionVisible} />
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
