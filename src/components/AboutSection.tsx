const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título agregado */}
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Abogados Penalistas
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          {/* Texto justificado y con separación de párrafos */}
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground font-open-sans max-w-3xl mx-auto text-justify space-y-6">
            <p>
              Karl Bücher y Gilberto Santa Rita forman una alianza estratégica, comparten la misma visión analítica y detallada de los asuntos, sobre la cual desarrollan acciones concretas y definidas.
            </p>
            <p>
              Complementan su metodología de trabajo con una visión teórica dogmática y la práctica procesal y argumentativa.
            </p>
            <p>
              El análisis y tratamiento actual de los delitos es específico y meticuloso, ciertos detalles impactan profundamente en las consecuencias y efectos de los casos expuestos ante las autoridades.
            </p>
            <p>
              Son conscientes de la importancia del análisis detallado de los asuntos, evitando acciones apresuradas o recomendaciones superfluas.
            </p>
            <p>
              Ambos litigaron bajo el anterior sistema de procesamiento penal, y buscan un nuevo enfoque para la atención de los asuntos y la Justicia en México.
            </p>
          </div>

          {/* Bloques de valores */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                Análisis Estratégico
              </h3>
              <p className="text-muted-foreground font-open-sans">
                Evaluación minuciosa de cada caso para desarrollar la mejor estrategia de defensa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                Comunicación Efectiva
              </h3>
              <p className="text-muted-foreground font-open-sans">
                Mantenemos informados a nuestros clientes en cada etapa del proceso legal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                Compromiso Total
              </h3>
              <p className="text-muted-foreground font-open-sans">
                Dedicación completa a la defensa de los derechos e intereses de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
