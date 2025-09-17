const HeroSection = () => {
  const logoGris = `${import.meta.env.BASE_URL}bsr-logo-gris.png`;
  const fondo = `${import.meta.env.BASE_URL}cdmx-legal-hero.jpg`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute inset-0 bg-black/0 z-0" /> {/* Oscurecer un poco el fondo si lo deseas */}

      <div className="relative z-10 w-full px-4">
        <div className="flex items-center justify-center min-h-screen">
          {/* Logo centrado vertical y horizontal */}
          <div className="bg-[#232c57] w-[360px] h-[360px] flex items-center justify-center p-8 rounded-2xl shadow-2xl">
            <img
              src={logoGris}
              alt="Bücher Santa Rita Abogados"
              className="max-h-[300px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
