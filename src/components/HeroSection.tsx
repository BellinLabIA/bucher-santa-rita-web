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
          {/* Logo con fondo azul cuadrado proporcionado */}
          <div className="mb-12 flex justify-center">
            <div className="bg-[#232c57] w-[340px] h-[340px] flex items-center justify-center p-8 rounded-2xl shadow-2xl">
              <img
                src={logoGris}
                alt="Bücher Santa Rita Abogados"
                className="max-h-[280px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
