import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, FileCheck, UserCheck, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Asesoría Legal",
      description: "Consultoría preventiva y estratégica. Análisis jurídico y diagnóstico de casos.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Acompañamiento legal ",
      description: "Representación legal especializada ante las autoridades ministeriales y judiciales. Defensa y asesoría integral durante todo el procedimiento.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Alternativas y enfoque integral",
      description: "Aplicación de medios alternos como mediación y conciliación, tendientes a evitar procedimientos burocráticos y facilitar soluciones ágiles dependiendo de los intereses y necesidades de cada cliente.",
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bodoni font-bold text-law-navy mb-6">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg text-law-gray leading-relaxed">
            Ofrecemos una amplia gama de servicios jurídicos, conforme a las necesidades concretas  
            de cada cliente y cada caso en particular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full border-law-gold/20 hover:border-law-gold/40 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bodoni text-law-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-law-gray leading-relaxed text-justify">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
