import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Star, ExternalLink, Play } from 'lucide-react';
import { YouTubeEmbed } from './YouTubeEmbed';

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
  {
    name: 'François G.',
    location: 'Chambéry (73)',
    rating: 5,
    text: "Très satisfait de l'installation de notre climatisation réversible. L'équipe est ponctuelle, propre et efficace. Un vrai plaisir !",
    date: 'Août 2025',
    avatar: 'FG',
  },
];

const videoTestimonials = [
  {
    id: '75adOPvX8Uc',
    title: 'Interview client - Installation panneaux solaires',
    client: 'Famille Martin',
  },
  {
    id: '_9Hwd5s3Hv8',
    title: 'Témoignage - Pompe à chaleur et économies',
    client: 'M. et Mme Dubois',
  },
  {
    id: 'v9gfXGFvlcI',
    title: 'Retour d\'expérience - Borne de recharge',
    client: 'M. Laurent',
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={`group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Quote mark */}
      <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif leading-none">"</div>
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground/80 leading-relaxed mb-4 relative z-10">
        "{testimonial.text}"
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm pt-4 border-t border-border/50">
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

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="w-4 h-4" />
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Ils nous ont fait <span className="text-primary">confiance</span>
          </h2>
          
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 shadow-xl border border-border/50">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-foreground">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
                ))}
              </div>
            </div>
            <div className="w-px h-8 bg-border" />
            <span className="text-muted-foreground font-medium">+90 avis Google vérifiés</span>
          </div>
        </div>

        {/* Video Testimonials */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Play className="w-5 h-5 text-secondary-foreground ml-0.5" fill="currentColor" />
            </div>
            Interviews clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="group">
                <YouTubeEmbed
                  videoId={video.id}
                  title={video.title}
                  className="shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                />
                <p className="text-center text-muted-foreground text-sm mt-3">{video.client}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Written Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
