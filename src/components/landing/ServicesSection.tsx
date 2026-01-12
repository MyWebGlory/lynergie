import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useParallax } from '@/hooks/useParallax';
import { ArrowRight, Sun, Thermometer, Wind, Zap, Leaf, Home, Car } from 'lucide-react';
import { SectionFloatingIcons } from './SectionFloatingIcons';

import solarImg from '@/assets/services/panneaux-solaires.avif';
import heatPumpImg from '@/assets/services/pompe-chaleur.avif';
import acImg from '@/assets/services/climatisation.avif';
import evChargerImg from '@/assets/services/borne-recharge.avif';

const services = [
  {
    id: 'solar',
    title: 'Panneaux Solaires',
    subtitle: 'Produisez votre énergie',
    description: 'Transformez votre toit en centrale électrique. Réduisez vos factures et revendez votre surplus.',
    image: solarImg,
    Icon: Sun,
    stats: "Jusqu'à 70% d'économies",
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    id: 'heatpump',
    title: 'Pompe à Chaleur',
    subtitle: 'Chauffez sans gaspiller',
    description: 'Chauffage et eau chaude éco-responsables. Confort optimal, impact minimal.',
    image: heatPumpImg,
    Icon: Thermometer,
    stats: 'COP jusqu\'à 5',
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    id: 'ac',
    title: 'Climatisation',
    subtitle: 'Restez au frais',
    description: 'Climatisation réversible haute performance. Fraîcheur en été, douceur en hiver.',
    image: acImg,
    Icon: Wind,
    stats: 'Classe A+++',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'ev',
    title: 'Borne de Recharge',
    subtitle: 'Roulez à l\'électrique',
    description: 'Rechargez votre véhicule électrique chez vous. Rapide, pratique, économique.',
    image: evChargerImg,
    Icon: Zap,
    stats: 'Charge rapide 22kW',
    color: 'from-green-500/20 to-emerald-500/20',
  },
];

const floatingIcons = [
  { Icon: Sun, position: 'top-[8%] left-[5%]', delay: '0s', color: 'primary' as const },
  { Icon: Leaf, position: 'top-[15%] right-[8%]', delay: '1s', color: 'accent' as const },
  { Icon: Home, position: 'bottom-[25%] left-[3%]', delay: '2s', color: 'accent' as const },
  { Icon: Car, position: 'bottom-[10%] right-[5%]', delay: '3s', color: 'primary' as const },
  { Icon: Zap, position: 'top-[50%] right-[3%]', delay: '1.5s', color: 'primary' as const },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="group opacity-0"
      style={{ 
        perspective: '1000px',
        animation: isVisible 
          ? `${isEven ? 'fade-in-left' : 'fade-in-right'} 0.8s ease-out ${index * 0.15}s forwards` 
          : 'none'
      }}
    >
      <div 
        className="relative h-full rounded-3xl overflow-hidden glass hover-lift cursor-pointer transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-8 h-full flex flex-col justify-end min-h-[400px]">
          {/* Icon badge */}
          <div className="absolute top-6 right-6">
            <div className="p-3 rounded-2xl glass group-hover:bg-primary/20 group-hover:rotate-12 transition-all duration-300">
              <service.Icon className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Stats badge */}
          <div className="inline-flex self-start px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4 backdrop-blur-sm">
            {service.stats}
          </div>

          {/* Title and subtitle */}
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 text-shadow group-hover:text-gradient transition-all duration-300">
            {service.title}
          </h3>
          <p className="text-primary font-semibold mb-3">{service.subtitle}</p>
          
          {/* Description */}
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {service.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
            <span>En savoir plus</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        {/* Hover shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const parallaxOffset = useParallax(0.1);

  return (
    <section ref={sectionRef} id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Floating icons */}
      <SectionFloatingIcons icons={floatingIcons} />

      {/* Parallax background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-orb-1" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-orb-2" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header with tilt */}
        <div 
          className="text-center mb-16"
          style={{ perspective: '1000px' }}
        >
          <span 
            className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4 opacity-0"
            style={{ 
              animation: isSectionVisible ? 'tilt-in 0.8s ease-out 0.1s forwards' : 'none' 
            }}
          >
            Nos Solutions
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-shadow opacity-0"
            style={{ 
              animation: isSectionVisible ? 'title-reveal 1s ease-out 0.2s forwards' : 'none' 
            }}
          >
            Votre transition énergétique{' '}
            <span className="text-gradient animate-text-shimmer">sur mesure</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0"
            style={{ 
              animation: isSectionVisible ? 'slide-up-fade 0.8s ease-out 0.4s forwards' : 'none' 
            }}
          >
            Des solutions adaptées à vos besoins, installées par des experts certifiés RGE
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
