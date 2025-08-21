const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8">
            Nuestra Filosofía
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-open-sans max-w-3xl mx-auto">
            Creemos en la importancia de un análisis minucioso y estratégico de los asuntos penales. 
            Evitamos respuestas apresuradas y ofrecemos un acompañamiento integral, basado en la 
            honestidad, empatía y comunicación efectiva con nuestros clientes.
          </p>
          
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