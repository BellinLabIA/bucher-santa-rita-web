import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const logoAzul = `${import.meta.env.BASE_URL}bsr-logo-azul.png`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo azul en header */}
          <div className="h-12 flex items-center">
            <img
              src={logoAzul}
              alt="Bücher Santa Rita Abogados"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "nosotros", label: "Sobre Nosotros" },
              { id: "socios", label: "Socios" },
              { id: "servicios", label: "Servicios" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-open-sans font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "nosotros", label: "Sobre Nosotros" },
                { id: "socios", label: "Socios" },
                { id: "servicios", label: "Servicios" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors font-open-sans font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold w-fit"
              >
                Agendar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
