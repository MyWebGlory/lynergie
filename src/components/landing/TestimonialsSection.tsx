import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Marie L.',
    location: 'Lyon (69)',
    rating: 5,
    text: "Installation impeccable de nos panneaux solaires. L'équipe était très professionnelle et a pris le temps de tout nous expliquer. Nous sommes ravis des économies réalisées !",
    date: 'Janvier 2026',
    avatar: 'ML',
  },
  {
    name: 'Jean-Pierre D.',
    location: 'Saint-Étienne (42)',
    rating: 5,
    text: "Pompe à chaleur installée rapidement et proprement. Le SAV est réactif et le suivi de performances est un vrai plus. Je recommande vivement Lynergie.",
    date: 'Décembre 2025',
    avatar: 'JD',
  },
  {
    name: 'Sophie M.',
    location: 'Grenoble (38)',
    rating: 5,
    text: "Excellent accompagnement de A à Z. Ils ont géré toutes les démarches administratives. Installation de qualité et équipe très sympathique.",
    date: 'Novembre 2025',
    avatar: 'SM',
  },
  {
    name: 'Thomas B.',
    location: 'Clermont-Ferrand (63)',
    rating: 5,
    text: "Borne de recharge installée en une journée. Travail soigné et tarif compétitif. Je suis très satisfait de mon choix !",
    date: 'Octobre 2025',
    avatar: 'TB',
  },
  {
    name: 'Christine R.',
    location: 'Annecy (74)',
    rating: 5,
    text: "Merci à l'équipe Lynergie pour leur professionnalisme. Notre maison est maintenant équipée de panneaux solaires et d'une pompe à chaleur. Les factures ont drastiquement baissé !",
    date: 'Septembre 2025',
    avatar: 'CR',
  },
];

const youtubeVideos = [
  {
    id: 'interview-1',
    title: 'Interview client - Installation solaire à Lyon',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: 'interview-2',
    title: 'Témoignage - Pompe à chaleur à Grenoble',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <div
      className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-[340px] md:w-[380px]"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>

      {/* Text */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        "{testimonial.text}"
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{testimonial.date}</span>
        <span className="inline-flex items-center gap-1 text-primary font-medium">
          <ExternalLink className="w-3 h-3" />
          Avis vérifié Google
        </span>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    
    const scrollAmount = 400;
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : scrollPosition + scrollAmount;
    
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Ce que nos <span className="text-primary">clients</span> disent
          </h2>
          
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-6 py-3 shadow-md border border-border">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
            </div>
            <span className="text-muted-foreground">sur 90+ avis Google</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors -translate-x-1/2 hidden md:flex"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors translate-x-1/2 hidden md:flex"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Carousel Container */}
          <div
            id="testimonials-container"
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* Video Interviews Section */}
        <div className={`mt-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Interviews clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="relative group overflow-hidden rounded-2xl bg-muted aspect-video cursor-pointer"
              >
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[20px] border-l-secondary-foreground border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-card text-sm font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
