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
          {/* Logo con fondo azul rectangular más grande */}
          <div className="mb-12 flex justify-center">
            <div className="bg-[#232c57] w-96 h-60 flex items-center justify-center p-12 rounded-lg shadow-lg">
              <img
                src={logoGris}
                alt="Bücher Santa Rita Abogados"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
