import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo placeholder - will be replaced with actual logo */}
          <div className="h-12 flex items-center">
            <div className="w-48 h-12 bg-law-navy rounded flex items-center justify-center">
              <span className="text-white font-bodoni text-lg">BÜCHER</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors font-bodoni"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-foreground hover:text-primary transition-colors font-bodoni"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-colors font-bodoni"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('socios')}
              className="text-foreground hover:text-primary transition-colors font-bodoni"
            >
              Socios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors font-bodoni"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bodoni"
            >
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary transition-colors font-bodoni"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-foreground hover:text-primary transition-colors font-bodoni"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-foreground hover:text-primary transition-colors font-bodoni"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('socios')}
                className="text-left text-foreground hover:text-primary transition-colors font-bodoni"
              >
                Socios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-foreground hover:text-primary transition-colors font-bodoni"
              >
                Contacto
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bodoni w-fit"
              >
                Consulta Gratuita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;