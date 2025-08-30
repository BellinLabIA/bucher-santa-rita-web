import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const base = import.meta.env.BASE_URL;
  const logoGris = `${base}bsr-logo-gris.png`;
  const fondo = `${base}cdmx-legal-hero.jpg`;

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="relative z-10 text-center w-full px-4">
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

          <div className="mx-auto h-[2px] w-24 bg-accent mb-10" />

          <p className="text-xl leading-relaxed mb-10 max-w-3xl mx-auto text-white/90 font-light">
            Litigio penal y consultoría jurídica de alto nivel con enfoque estratégico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 px-10 py-4 text-lg font-semibold transition-colors"
            >
              <a href="#contacto">Agendar Consulta</a>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 px-10 py-4 text-lg font-semibold transition-colors"
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
