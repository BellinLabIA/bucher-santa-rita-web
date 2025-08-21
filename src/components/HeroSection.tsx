import { Button } from "@/components/ui/button";
import cdmxHero from "@/assets/cdmx-hero.jpg";

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
        {/* Logo placeholder - will be replaced with gray logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-80 h-32 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
            <span className="text-white font-bodoni text-2xl">BÜCHER SANTA RITA</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bodoni font-bold mb-6">
          Defensa Legal <span className="text-primary">Especializada</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Más de dos décadas de experiencia en derecho penal. 
          Protegemos sus derechos con dedicación y profesionalismo en la Ciudad de México.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bodoni text-lg px-8 py-4"
          >
            Consulta Gratuita
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-white text-white hover:bg-white hover:text-law-navy font-bodoni text-lg px-8 py-4"
          >
            Conocer Más
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bodoni font-bold text-primary mb-2">20+</div>
            <div className="text-white/80">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-3xl font-bodoni font-bold text-primary mb-2">500+</div>
            <div className="text-white/80">Casos Exitosos</div>
          </div>
          <div>
            <div className="text-3xl font-bodoni font-bold text-primary mb-2">24/7</div>
            <div className="text-white/80">Atención Disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;