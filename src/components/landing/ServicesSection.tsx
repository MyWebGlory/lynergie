import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ArrowRight } from 'lucide-react';
import panneauxSolaires from '@/assets/services/panneaux-solaires.avif';
import pompeChaleur from '@/assets/services/pompe-chaleur.avif';
import climatisation from '@/assets/services/climatisation.avif';
import borneRecharge from '@/assets/services/borne-recharge.avif';

const services = [
  {
    title: 'Panneaux Solaires',
    subtitle: 'Photovoltaïques, Thermiques et Hybrides',
    description: 'Produisez votre propre électricité et revendez le surplus. Rentabilité garantie sous 7 à 9 ans.',
    image: panneauxSolaires,
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Pompe à Chaleur',
    subtitle: 'Air-air (gainable) et air-eau',
    description: 'Chauffez et rafraîchissez votre maison avec une énergie propre et économique.',
    image: pompeChaleur,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Climatisation',
    subtitle: 'Réversible air-air (gainable)',
    description: 'Confort thermique toute l\'année avec des solutions performantes et silencieuses.',
    image: climatisation,
    color: 'from-sky-500/20 to-indigo-500/20',
  },
  {
    title: 'Borne de recharge',
    subtitle: 'IRVE pour véhicule électrique',
    description: 'Rechargez votre véhicule électrique à domicile en toute sécurité.',
    image: borneRecharge,
    color: 'from-green-500/20 to-emerald-500/20',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent opacity-60`} />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-primary font-medium mb-3">
          {service.subtitle}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
        >
          <span>En savoir plus</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Des solutions énergétiques <span className="text-primary">complètes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lynergie fait de votre bien-être, de la réduction de votre empreinte carbone et de vos dépenses ses priorités incontournables.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
