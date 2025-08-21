
const PartnersSection = () => {
  return (
    <section id="socios" className="py-20 bg-corp-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
            Socios Fundadores
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Karl Bucher */}
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="lg:w-1/3">
              <div className="w-64 h-64 bg-white/10 rounded-xl mx-auto shadow-2xl flex items-center justify-center">
                <span className="text-white font-playfair text-lg font-bold text-center">
                  Foto<br/>Karl Bucher
                </span>
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Karl Bucher
              </h3>
              <div className="w-16 h-1 bg-primary mb-6 mx-auto lg:mx-0"></div>
              <p className="text-white/90 font-open-sans text-lg leading-relaxed">
                Especialista en delitos de cuello blanco, con más de 15 años de experiencia 
                en el ámbito penal. Su formación especializada en argumentación jurídica y 
                razonamiento probatorio lo posiciona como uno de los litigantes más respetados 
                en el sector. Ha participado en casos de alta complejidad y relevancia nacional.
              </p>
            </div>
          </div>

          {/* Gilberto Santa Rita Tamés */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="lg:w-1/3">
              <div className="w-64 h-64 bg-white/10 rounded-xl mx-auto shadow-2xl flex items-center justify-center">
                <span className="text-white font-playfair text-lg font-bold text-center">
                  Foto<br/>Gilberto Santa Rita
                </span>
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Gilberto Santa Rita Tamés
              </h3>
              <div className="w-16 h-1 bg-primary mb-6 mx-auto lg:mx-0"></div>
              <p className="text-white/90 font-open-sans text-lg leading-relaxed">
                Doctor en Derecho Penal y Procesal. Reconocido académico, investigador y 
                autor de múltiples libros jurídicos especializados en materia penal. 
                Asesor estratégico en casos de relevancia nacional y consultor de instituciones 
                gubernamentales en temas de justicia penal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;