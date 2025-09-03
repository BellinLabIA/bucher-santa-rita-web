import karlBucher from "@/assets/karl-bucher.jpg";
import gilbertoSantaRita from "@/assets/gilberto-santa-rita.jpg";

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
              <img 
                src={karlBucher}
                alt="Karl Bucher"
                className="w-64 h-64 object-cover rounded-xl mx-auto shadow-2xl"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Karl Bucher
              </h3>
              <div className="w-16 h-1 bg-primary mb-6 mx-auto lg:mx-0"></div>
              <p className="text-white/90 font-open-sans text-lg leading-relaxed">
                 

Se desempeña en la práctica libre del ejercicio profesional como abogado ligante en materia penal, especializado en estrategias procesales y argumentativas, 
principalmente dedicado a la atención de asuntos relacionados con aspectos patrimoniales, fiscales y financieros. Tiene amplia experiencia en la práctica, 
ejerce profesionalmente desde hace más de 15 años, lo que le ha permitido desarrollarse adquiriendo un estilo propio. 

Define estrategias que trascienden a resultados concretos. Fomenta comunicaciones efectivas y permanentes con sus clientes, 
con quienes sostiene un involucramiento activo y coordinado para la mejor solución de las causas que ha tenido el privilegio y ha decidido representar. 
Es promotor de la transparencia y la honestidad. 

-	Licenciado en Derecho por la Universidad Iberoamericana.
                
-	Maestro en Argumentación Jurídica por el Centro de Estudios Jurídicos Carbonell (reconocimiento promedio sobresaliente)
                
-	Especialidad en Sistema Acusatorio por la Escuela Libre de Derecho.
                
-	Cursó el Máster en Razonamiento Probatorio por el Centro de Estudios Jurídicos Carbonell (medio de titulación).
                
-	Diplomado en Técnicas de Cabildeo y Negociación Política por la Universidad Iberoamericana.
                
-	Diplomado en Derecho de Daños por el Centro de Estudios Jurídicos Carbonell.
                
-	Cursos sobre El Interrogatorio especializado y procedimientos para producir prueba en juicio oral y El Contrainterrogatorio especializado, 
  ambos por la Escuela de Ciencias Jurídicas y Sociales de Guanajuato.
                
-	Curso sobre Delitos patrimoniales y juicios orales por el Instituto de Investigaciones Jurídicas de la Universidad Nacional Autónoma de México.
                
-	Cursos ABC de la reforma penal, Juicios orales (primera parte) y La prueba pericial en los juicios orales, por el Instituto Nacional de Ciencias Penales.

              </p>
            </div>
          </div>

          {/* Gilberto Santa Rita Tamés */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="lg:w-1/3">
              <img 
                src={gilbertoSantaRita}
                alt="Gilberto Santa Rita Tamés"
                className="w-64 h-64 object-cover rounded-xl mx-auto shadow-2xl"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Gilberto Santa Rita Tamés
              </h3>
              <div className="w-16 h-1 bg-primary mb-6 mx-auto lg:mx-0"></div>
              <p className="text-white/90 font-open-sans text-lg leading-relaxed">
               

Abogado especialista en dogmática penal, lo que le permite desarrollar un análisis detallado y con un enfoque diferenciado en los casos, 
consultas y opiniones legales que realiza. Fungió como asesor técnico-jurídico para el GIEI en el caso Ayotzinapa. 


                Ha publicado más de 20 artículos y cuatro libros de autoría propia en diversos espacios de alto impacto nacional e internacional. 

                Ha fungido como asesor de diversas instancias del gobierno a lo largo de los años, y también ha participado como profesor invitado en el INACIPE. 

                Ha sido entrevistado por diversos medios de comunicación y es asesor de la A.C. SIN TRATA. 

                Ha tenido una intensa labor desde la académica durante más de 10 años, formando parte del Sistema Nacional de Investigadores (SIN-NIVEL 1),
                recibiendo diferentes premios y galardones a nivel nacional e internacional. Asimismo, traduce textos jurídicos en alemán e inglés. 

-	Doctorado cum laude en Derecho penal y procesal, por la Universidad de Sevilla, bajo la tesis: “El delito de organización terrorista.
  Un modelo de Derecho penal del enemigo”, dirigida por el profesor Miguel Polaino-Orts.
                
-	Diploma de Estudios Avanzados por la Universidad de Sevilla.
                
-	Licenciado en Derecho por la Universidad Iberoamericana, Ciudad de México.
                
-	Libros de autoría exclusiva: 
El delito de organización terrorista. Un modelo de Derecho penal del enemigo. Un estudio desde la teoría de la imputación objetiva, JM BOSCH, Barcelona, 2015.
Sistema de combate a la violencia de género. Una aproximación desde el Derecho administrativo y penal, Flores Editor y Distribuidor, Ciudad de México, 2017.
Legítima defensa. Un estudio desde los derechos humanos y la dogmática jurídico-penal, Flores Editor y Distribuidor, Ciudad de México, 2022.
Criterios de oportunidad. Un abordaje funcionalista, Flores Editor y Distribuidor, Ciudad de México, 2023.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
