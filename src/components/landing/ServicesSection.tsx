import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ArrowRight, Sun, Thermometer, Wind, Zap } from 'lucide-react';
import panneauxSolaires from '@/assets/services/panneaux-solaires.avif';
import pompeChaleur from '@/assets/services/pompe-chaleur.avif';
import climatisation from '@/assets/services/climatisation.avif';
import borneRecharge from '@/assets/services/borne-recharge.avif';

const services = [
  {
    icon: Sun,
    title: 'Produisez votre énergie',
    subtitle: 'Panneaux Solaires',
    description: 'Photovoltaïques, Thermiques et Hybrides. Produisez votre électricité et revendez le surplus. Rentabilité garantie sous 7 à 9 ans.',
    image: panneauxSolaires,
    gradient: 'from-amber-500 to-orange-600',
    stats: 'Jusqu\'à 70% d\'économies',
  },
  {
    icon: Thermometer,
    title: 'Chauffez sans gaspiller',
    subtitle: 'Pompe à Chaleur',
    description: 'Air-air (gainable) et air-eau. Chauffez et rafraîchissez votre maison avec une énergie propre et économique.',
    image: pompeChaleur,
    gradient: 'from-blue-500 to-cyan-600',
    stats: 'COP jusqu\'à 4.5',
  },
  {
    icon: Wind,
    title: 'Restez au frais',
    subtitle: 'Climatisation',
    description: 'Réversible air-air (gainable). Confort thermique toute l\'année avec des solutions performantes et silencieuses.',
    image: climatisation,
    gradient: 'from-sky-500 to-indigo-600',
    stats: 'Classe A+++',
  },
  {
    icon: Zap,
    title: 'Roulez électrique',
    subtitle: 'Borne de Recharge',
    description: 'IRVE pour véhicule électrique. Rechargez votre véhicule électrique à domicile en toute sécurité.',
    image: borneRecharge,
    gradient: 'from-green-500 to-emerald-600',
    stats: 'Jusqu\'à 22kW',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${index === 0 || index === 3 ? 'lg:col-span-2' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.subtitle}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-95' : 'opacity-80'
        }`} />
      </div>
      
      {/* Content */}
      <div className="relative h-full min-h-[400px] lg:min-h-[450px] flex flex-col justify-end p-8">
        {/* Icon Badge */}
        <div className={`absolute top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform transition-all duration-500 ${
          isHovered ? 'scale-110 rotate-3' : ''
        }`}>
          <service.icon className="w-7 h-7 text-white" />
        </div>

        {/* Stats Badge */}
        <div className={`absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 transition-all duration-500 ${
          isHovered ? 'bg-white/20' : ''
        }`}>
          <span className="text-white text-sm font-semibold">{service.stats}</span>
        </div>
        
        {/* Text Content */}
        <div className="space-y-4">
          <div>
            <span className={`inline-block text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
              {service.subtitle}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {service.title}
            </h3>
          </div>
          
          <p className={`text-white/80 leading-relaxed transition-all duration-500 ${
            isHovered ? 'opacity-100 max-h-32' : 'opacity-70 max-h-20 overflow-hidden'
          }`}>
            {service.description}
          </p>
          
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 text-white font-semibold transition-all duration-300 ${
              isHovered ? 'gap-4' : ''
            }`}
          >
            <span>Demander un devis</span>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4" />
            Nos Expertises
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            4 solutions pour votre <span className="text-primary">indépendance énergétique</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des installations clé en main, certifiées RGE, pour réduire vos factures et votre empreinte carbone.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
