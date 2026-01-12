import { Phone, Mail, MapPin, Star, Shield, ExternalLink } from 'lucide-react';
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
    <footer className="bg-card relative overflow-hidden border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={logoLynergie}
              alt="Lynergie"
              className="h-12 w-auto mb-6"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Votre partenaire de confiance pour la transition énergétique en Auvergne-Rhône-Alpes depuis plus de 10 ans.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-sm font-medium text-foreground">5.0 Google</span>
              </div>
              <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">RGE Certifié</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-6">Nos Services</h4>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-6">Entreprise</h4>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0623666839"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">06 23 66 68 39</p>
                    <p className="text-sm text-muted-foreground">Lun-Sam, 8h-19h</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lynergie.fr"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span>contact@lynergie.fr</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>Auvergne-Rhône-Alpes</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Lynergie. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {navigation.legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
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
