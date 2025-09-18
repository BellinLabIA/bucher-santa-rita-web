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
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-border transition-all duration-300 overflow-hidden ${
        isMenuOpen ? "pb-6" : "pb-0"
      }`}
    >
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="h-12 flex items-center">
          <img
            src={logoAzul}
            alt="Bücher Santa Rita Abogados"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Menú hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-foreground focus:outline-none"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú expandido en el mismo fondo */}
      {isMenuOpen && (
        <div className="px-4 pt-2 flex flex-col space-y-4">
          {[
            { id: "inicio", label: "Inicio" },
            { id: "nosotros", label: "Sobre Nosotros" },
            { id: "servicios", label: "Servicios" },
            { id: "socios", label: "Socios" },
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
            Contacto
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
