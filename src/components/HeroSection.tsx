import { Button } from "@/components/ui/button";

const HeroSection = () => {
  
  const base = import.meta.env.BASE_URL;
  const logoGris = `${base}bsr-logo-gris.png`;
  const fondo = `${base}cdmx-legal-hero.jpg`;
  const sociosUrl = `${base}socios`; // ruta a la página de Socios

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${fondo})`,
      
        backgroundPosition: "center 50%",
      }}
    >
      
      <div className="relative z-10 text-center text-white container-padding w-full px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img
              src={logoGris}
              alt="Bücher Santa Rita Abogados"
              className="mx-auto h-24 md:h-28 w-auto object-contain"
            />
          </div>

          <h1 className="text-4xl font-light text-accent mb-12">
            Despacho Penalista de Excelencia
          </h1>

          <div className="accent-divider mx-auto bg-accent" />

          <p className="text-xl leading-relaxed mb-10 max-w-3xl mx-auto text-white/90 font-light">
            Litigio penal y consultoría jurídica de alto nivel con enfoque estratégico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <Button
            
              size="lg"
              "bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 text-lg font-semibold"
  >
           
              <a href="#contacto">Agendar Consulta</a>
           <Button
    size="lg"
    className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 text-lg font-semibold"
  >
    <a href="#socios">Conocer Socios</a>
  </Button>
</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
