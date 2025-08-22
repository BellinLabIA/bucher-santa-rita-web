import { Button } from "@/components/ui/button";
import cdmxHero from "@/assets/cdmx-legal-hero.jpg";
import logoGris from "@/assets/bsr-logo-gris.png";


const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cdmxHero}
          alt="Ciudad de México skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo gris en centro del hero */}
        <div className="mb-12 flex justify-center">
          <div className="h-40 md:h-48 lg:h-56 bg-white/20 backdrop-blur-sm rounded-lg px-8 flex items-center justify-center">
            <img 
              src="/bsr-logo-gris.png" 
              alt="Bücher Santa Rita Abogados" 
              className="h-24 md:h-28 lg:h-32 w-auto object-contain"
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-playfair font-normal mb-8 text-white/90">
          Despacho Penalista de Excelencia
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold text-lg px-10 py-4 rounded-lg"
          >
            Agendar Consulta
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold text-lg px-10 py-4 rounded-lg"
          >
            Conocer Más
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-playfair font-bold text-primary mb-3">15+</div>
            <div className="text-white/80 font-open-sans">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-4xl font-playfair font-bold text-primary mb-3">300+</div>
            <div className="text-white/80 font-open-sans">Casos Exitosos</div>
          </div>
          <div>
            <div className="text-4xl font-playfair font-bold text-primary mb-3">24/7</div>
            <div className="text-white/80 font-open-sans">Atención Disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
