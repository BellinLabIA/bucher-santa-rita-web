import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Scale,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola, me interesa obtener información sobre sus servicios legales.");
    const whatsappUrl = `https://wa.me/525512345678?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-law-navy text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            {/* Logo placeholder - will be replaced with gray logo */}
            <div className="mb-6">
              <div className="w-48 h-16 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                <span className="text-white font-bodoni text-lg">BÜCHER SANTA RITA</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Más de 20 años de experiencia en derecho penal, 
              comprometidos con la defensa de sus derechos en la Ciudad de México.
            </p>
            <Button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-bodoni"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bodoni font-semibold mb-6 text-primary">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('socios')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Socios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bodoni font-semibold mb-6 text-primary">
              Servicios
            </h3>
            <ul className="space-y-3 text-white/80">
              <li>Defensa Penal</li>
              <li>Asesoría Legal</li>
              <li>Representación en Juicios</li>
              <li>Atención de Emergencia</li>
              <li>Delitos Empresariales</li>
              <li>Mediación y Conciliación</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bodoni font-semibold mb-6 text-primary">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  Av. Reforma 250, Piso 15<br/>
                  Col. Juárez, CDMX<br/>
                  C.P. 06600
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  +52 55 1234-5678
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  info@buchersantarita.mx
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <div className="flex items-center mb-4 md:mb-0">
            <Scale className="h-4 w-4 text-primary mr-2" />
            <span>
              © 2024 Bücher Santa Rita Abogados. Todos los derechos reservados.
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Código de Ética
            </a>
          </div>
        </div>

        {/* Professional Disclaimer */}
        <div className="mt-8 p-4 bg-white/5 rounded-lg">
          <p className="text-xs text-white/60 text-center leading-relaxed">
            IMPORTANTE: La información contenida en este sitio web es únicamente para fines informativos 
            y no constituye asesoría legal específica. Para obtener asesoría legal apropiada para su situación particular, 
            consulte directamente con nuestros abogados especializados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;