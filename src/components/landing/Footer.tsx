import { Phone, Mail, MapPin, Star, Shield } from 'lucide-react';
import logoLynergie from '@/assets/logo-lynergie.avif';

const navigation = {
  services: [
    { name: 'Panneaux Solaires', href: '#services' },
    { name: 'Pompe à Chaleur', href: '#services' },
    { name: 'Climatisation', href: '#services' },
    { name: 'Bornes de recharge', href: '#services' },
  ],
  company: [
    { name: 'À propos', href: '#about' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Processus', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={logoLynergie}
              alt="Lynergie"
              className="h-10 w-auto mb-6"
            />
            <p className="text-card/70 text-sm mb-6">
              Votre partenaire de confiance pour la transition énergétique en Auvergne-Rhône-Alpes.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1 bg-card/10 rounded-full px-3 py-1.5 text-xs">
                <Star className="w-3 h-3 fill-secondary text-secondary" />
                <span>5.0 Google</span>
              </div>
              <div className="flex items-center gap-1 bg-card/10 rounded-full px-3 py-1.5 text-xs">
                <Shield className="w-3 h-3 text-accent" />
                <span>RGE QualiPV</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-card mb-4">Nos Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-card/70 hover:text-card transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-card mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-card/70 hover:text-card transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-card mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0623666839"
                  className="flex items-center gap-3 text-card/70 hover:text-card transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>06 23 66 68 39</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lynergie.fr"
                  className="flex items-center gap-3 text-card/70 hover:text-card transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>contact@lynergie.fr</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-card/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Auvergne-Rhône-Alpes, France</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-card/50 text-sm">
            © {currentYear} Lynergie. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {navigation.legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-card/50 hover:text-card transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
