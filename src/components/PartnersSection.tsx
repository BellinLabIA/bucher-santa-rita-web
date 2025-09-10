import karlBucher from "@/assets/karl-bucher.jpg";
import gilbertoSantaRita from "@/assets/gilberto-santa-rita.jpg";

const PartnersSection = () => {
  return (
    <section id="socios" className="py-20 bg-corp-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
            Socios
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Karl Bucher */}
          <div className="flex flex-col lg:flex-row items-start gap-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="lg:w-1/3">
              <img 
                src={karlBucher}
                alt="Karl Bucher"
                className="w-64 h-64 object-cover rounded-xl shadow-2xl mx-0"
              />
            </div>
            <div className="lg:w-2/3 text-justify">
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Karl Bucher
              </h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <div className="space-y-4 text-white/90 font-open-sans text-lg leading-relaxed">
                <p>
                  Se desempeña en la práctica libre del ejercicio profesional como abogado ligante en materia penal, especializado en estrategias procesales y argumentativas, principalmente dedicado a la atención de asuntos relacionados con aspectos patrimoniales, fiscales y financieros.
                </p>
                <p>
                  Tiene amplia experiencia en la práctica, ejerce profesionalmente desde hace más de 15 años, lo que le ha permitido desarrollarse adquiriendo un estilo propio.
                </p>
                <p>
                  Define estrategias que trascienden a resultados concretos. Fomenta comunicaciones efectivas y permanentes con sus clientes, con quienes sostiene un involucramiento activo y coordinado para la mejor solución de las causas que ha tenido el privilegio y ha decidido representar. Es promotor de la transparencia y la honestidad.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Licenciado en Derecho por la Universidad Iberoamericana.</li>
                  <li>Maestro en Argumentación Jurídica por el Centro de Estudios Jurídicos Carbonell (reconocimiento promedio sobresaliente).</li>
                  <li>Especialidad en Sistema Acusatorio por la Escuela Libre de Derecho.</li>
                  <li>Cursó el Máster en Razonamiento Probatorio por el Centro de Estudios Jurídicos Carbonell.</li>
                  <li>Diplomado en Técnicas de Cabildeo y Negociación Política por la Universidad Iberoamericana.</li>
                  <li>Diplomado en Derecho de Daños por el Centro de Estudios Jurídicos Carbonell.</li>
                  <li>Cursos sobre interrogatorio especializado y contrainterrogatorio por la Escuela de Ciencias Jurídicas y Sociales de Guanajuato.</li>
                  <li>Curso sobre delitos patrimoniales y juicios orales por el IIJ-UNAM.</li>
                  <li>Cursos ABC de la reforma penal, juicios orales y prueba pericial por el Instituto Nacional de Ciencias Penales.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gilberto Santa Rita Tamés */}
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="lg:w-1/3">
              <img 
                src={gilbertoSantaRita}
                alt="Gilberto Santa Rita Tamés"
                className="w-64 h-64 object-cover rounded-xl shadow-2xl mx-0"
              />
            </div>
            <div className="lg:w-2/3 text-justify">
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Gilberto Santa Rita Tamés
              </h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <div className="space-y-4 text-white/90 font-open-sans text-lg leading-relaxed">
                <p>
                  Abogado especialista en dogmática penal, lo que le permite desarrollar un análisis detallado y con un enfoque diferenciado en los casos, consultas y opiniones legales que realiza.
                </p>
                <p>
                  Fungió como asesor técnico-jurídico para el GIEI en el caso Ayotzinapa. Ha publicado más de 20 artículos y cuatro libros de autoría propia en diversos espacios de alto impacto nacional e internacional.
                </p>
                <p>
                  Ha fungido como asesor de diversas instancias del gobierno a lo largo de los años, y también ha participado como profesor invitado en el INACIPE. Ha sido entrevistado por diversos medios de comunicación y es asesor de la A.C. SIN TRATA.
                </p>
                <p>
                  Ha tenido una intensa labor desde la academia durante más de 10 años, formando parte del Sistema Nacional de Investigadores (SNI-NIVEL 1), recibiendo diferentes premios y galardones a nivel nacional e internacional. Asimismo, traduce textos jurídicos en alemán e inglés.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Doctorado cum laude en Derecho penal y procesal, por la Universidad de Sevilla.</li>
                  <li>Diploma de Estudios Avanzados por la Universidad de Sevilla.</li>
                  <li>Licenciado en Derecho por la Universidad Iberoamericana, Ciudad de México.</li>
                </ul>
                <p className="font-semibold mt-4">Libros de autoría exclusiva:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><em>El delito de organización terrorista. Un modelo de Derecho penal del enemigo</em>, JM BOSCH, Barcelona, 2015.</li>
                  <li><em>Sistema de combate a la violencia de género</em>, Flores Editor y Distribuidor, CDMX, 2017.</li>
                  <li><em>Legítima defensa</em>, Flores Editor y Distribuidor, CDMX, 2022.</li>
                  <li><em>Criterios de oportunidad</em>, Flores Editor y Distribuidor, CDMX, 2023.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

