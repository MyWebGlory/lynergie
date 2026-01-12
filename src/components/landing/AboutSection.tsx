import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Quote, Zap, Leaf, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Économies et revente',
    description: 'Produisez votre propre électricité, stockez ou revendez le surplus.',
  },
  {
    icon: Leaf,
    title: 'Énergie décarbonée',
    description: 'Réduisez votre empreinte carbone grâce à une énergie propre et infinie.',
  },
  {
    icon: TrendingUp,
    title: 'Rendements durables',
    description: 'Bénéficiez de rendements constants, amorti sous 7 à 9 ans.',
  },
];

export function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Quote */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Quote Icon */}
              <Quote className="absolute -top-6 -left-4 w-16 h-16 text-primary/20" />
              
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-6 relative z-10">
                "Réaliser chaque projet comme si nous équipions un proche."
              </blockquote>
              
              <cite className="not-italic">
                <span className="text-primary font-semibold text-lg">Mr. VIARD</span>
                <span className="text-muted-foreground"> — Gérant de Lynergie</span>
              </cite>
            </div>

            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fort d'une expérience de <strong className="text-foreground">+10 ans</strong> dans l'industrie du photovoltaïque, Mr. VIARD a su construire une équipe de poseurs et dépanneurs compétents prêts à accompagner les particuliers dans leur projet.
              </p>
              <p>
                Constatant une demande croissante pour des solutions énergétiques de qualité et respectueuses de l'environnement, Lynergie propose une gamme complète de services incluant l'installation de pompes à chaleur, bornes de recharge pour véhicules électriques, et solutions de climatisation.
              </p>
            </div>
          </div>

          {/* Right Content - Benefits */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                L'Indépendance Énergétique
              </h3>
              <p className="text-primary font-semibold mb-8">accessible à tous</p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 group"
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <a href="tel:0623666839">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold gap-2 py-6">
                    <Phone className="w-5 h-5" />
                    <span>Obtenir mon estimation gratuite</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
