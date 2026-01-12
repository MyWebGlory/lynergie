import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-lynergie.avif';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Processus' },
  { href: '#testimonials', label: 'Témoignages' },
  { href: '#about', label: 'À Propos' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 glass-dark shadow-lg' : 'py-5 bg-transparent'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo - Always show the actual logo, no filter */}
          <a href="#" className="relative z-10">
            <img 
              src={logo} 
              alt="Lynergie" 
              className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105" 
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="relative text-foreground/80 hover:text-foreground transition-colors text-sm font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 rounded-full glow-primary transition-all duration-300 hover:scale-105"
            >
              <a href="tel:0623666839" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>06 23 66 68 39</span>
              </a>
            </Button>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden relative z-[60] p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
        <nav className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-2xl font-semibold text-foreground hover:text-primary transition-all duration-300"
              style={{ 
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)', 
                opacity: isMobileMenuOpen ? 1 : 0, 
                transition: `all 0.4s ease ${index * 0.1}s` 
              }}
            >
              {link.label}
            </a>
          ))}
          <Button 
            asChild 
            className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full glow-primary animate-glow-pulse"
          >
            <a href="tel:0623666839" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>06 23 66 68 39</span>
            </a>
          </Button>
        </nav>
      </div>
    </>
  );
}
