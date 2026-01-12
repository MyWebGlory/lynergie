import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useParallax } from '@/hooks/useParallax';
import { YouTubeEmbed } from './YouTubeEmbed';
import { Star, Quote, BadgeCheck } from 'lucide-react';

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

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`animate-on-scroll-scale ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="h-full p-6 rounded-2xl glass hover-lift">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-primary-foreground">
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

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
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
    <section ref={sectionRef} id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-16 animate-on-scroll ${isSectionVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-shadow">
            Ils nous font{' '}
            <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les retours de nos clients satisfaits à travers la région
          </p>
        </div>

        {/* Video testimonials */}
        <div className={`mb-16 animate-on-scroll ${isSectionVisible ? 'visible' : ''} stagger-2`}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-semibold text-foreground">Témoignages vidéo</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <div 
                key={video.id}
                className={`animate-on-scroll-scale ${isSectionVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
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
        <div className="flex justify-center mb-8">
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
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
