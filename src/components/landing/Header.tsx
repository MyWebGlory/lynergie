import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoLynergie from '@/assets/logo-lynergie.avif';

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'À propos', href: '#about' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'Processus', href: '#process' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="relative z-50">
              <img
                src={logoLynergie}
                alt="Lynergie"
                className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="tel:0623666839">
                <Button
                  className={`gap-2 font-semibold transition-all duration-300 ${
                    isScrolled
                      ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">06 23 66 68 39</span>
                  <span className="xl:hidden">Appeler</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors ${
                isMobileMenuOpen 
                  ? 'text-foreground' 
                  : isScrolled 
                    ? 'text-foreground hover:bg-muted' 
                    : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-background shadow-2xl transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-foreground text-2xl font-semibold py-4 border-b border-border/50 hover:text-primary transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-auto space-y-4">
              <a href="tel:0623666839" className="block">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6 gap-3">
                  <Phone className="w-5 h-5" />
                  06 23 66 68 39
                </Button>
              </a>
              <p className="text-center text-muted-foreground text-sm">
                Disponible du lundi au samedi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
