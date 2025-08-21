import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import teamLawyers from "@/assets/team-lawyers.jpg";

const PartnersSection = () => {
  const partners = [
    {
      name: "Lic. María Elena Bücher",
      position: "Socia Fundadora",
      specialty: "Derecho Penal Federal",
      experience: "25 años de experiencia",
      education: "Universidad Nacional Autónoma de México",
      certifications: ["Especialista en Derecho Penal", "Maestría en Ciencias Penales"],
      description: "Especialista en delitos federales con amplia experiencia en casos de alto perfil. Reconocida por su dedicación y resultados excepcionales."
    },
    {
      name: "Lic. Carlos Santa Rita",
      position: "Socio Fundador",
      specialty: "Derecho Penal Empresarial",
      experience: "22 años de experiencia",
      education: "Universidad Iberoamericana",
      certifications: ["Especialista en Compliance", "Certificación en Lavado de Dinero"],
      description: "Experto en delitos económicos y empresariales. Líder en la implementación de programas de cumplimiento normativo."
    },
    {
      name: "Lic. Ana Patricia Morales",
      position: "Socia Asociada",
      specialty: "Derecho Penal Juvenil",
      experience: "15 años de experiencia",
      education: "Universidad Panamericana",
      certifications: ["Especialista en Justicia Juvenil", "Mediación Penal"],
      description: "Especializada en justicia juvenil y mediación penal. Comprometida con la protección de los derechos de menores de edad."
    }
  ];

  return (
    <section id="socios" className="py-20 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bodoni font-bold text-law-navy mb-6">
            Nuestros <span className="text-primary">Socios</span>
          </h2>
          <p className="text-lg text-law-gray leading-relaxed mb-8">
            Un equipo de profesionales altamente calificados con décadas de experiencia 
            en derecho penal, comprometidos con la excelencia en cada caso.
          </p>
          
          {/* Team Image */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={teamLawyers}
              alt="Equipo de abogados de Bücher Santa Rita"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="h-full border-law-gold/20 hover:border-law-gold/40 transition-all duration-300 hover:shadow-lg bg-white">
              <CardContent className="p-8">
                {/* Profile placeholder */}
                <div className="w-24 h-24 bg-law-navy rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bodoni text-2xl">
                    {partner.name.split(' ')[1]?.[0]}{partner.name.split(' ')[2]?.[0]}
                  </span>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bodoni font-bold text-law-navy mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{partner.position}</p>
                  <Badge variant="outline" className="border-law-gold text-law-navy">
                    {partner.specialty}
                  </Badge>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-law-navy mb-1">Experiencia:</p>
                    <p className="text-law-gray">{partner.experience}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-law-navy mb-1">Educación:</p>
                    <p className="text-law-gray">{partner.education}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-law-navy mb-1">Certificaciones:</p>
                    <ul className="text-law-gray space-y-1">
                      {partner.certifications.map((cert, certIndex) => (
                        <li key={certIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-law-gray leading-relaxed mt-4">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional team info */}
        <div className="mt-16 bg-white rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bodoni font-bold text-law-navy mb-6">
            Respaldo <span className="text-primary">Profesional</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bodoni font-bold text-primary mb-2">3</div>
              <div className="text-law-gray">Socios Principales</div>
            </div>
            <div>
              <div className="text-3xl font-bodoni font-bold text-primary mb-2">62+</div>
              <div className="text-law-gray">Años de Experiencia Combinada</div>
            </div>
            <div>
              <div className="text-3xl font-bodoni font-bold text-primary mb-2">15+</div>
              <div className="text-law-gray">Especialidades Legales</div>
            </div>
            <div>
              <div className="text-3xl font-bodoni font-bold text-primary mb-2">100%</div>
              <div className="text-law-gray">Dedicación al Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;