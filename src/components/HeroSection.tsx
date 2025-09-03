const HeroSection = () => {
  const logoGris = `${import.meta.env.BASE_URL}bsr-logo-gris.png`;
  const fondo = `${import.meta.env.BASE_URL}cdmx-legal-hero.jpg`;

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="relative z-10 text-center text-white w-full px-4">
        <div className="max-w-5xl mx-auto">
          {/* Logo con fondo azul */}
          <div className="mb-12 flex justify-center">
            <div className="bg-[#232c57] w-71 h-50 flex items-center justify-center">
              <img
                src={logoGris}
                alt="Bücher Santa Rita Abogados"
                className="h-30 w-auto object-contain"
              />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-light text-accent mb-8">
            Despacho Penalista de Excelencia
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-white/90 font-light">
            Litigio penal y consultoría jurídica de alto nivel con enfoque estratégico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
