import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, FileCheck, UserCheck, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Gavel className="h-8 w-8 text-primary" />,
      title: "Defensa Penal",
      description: "Representación legal especializada en todos los aspectos del derecho penal, desde delitos menores hasta casos complejos.",
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Asesoría Legal",
      description: "Consultoría preventiva y estratégica para evitar problemas legales y proteger sus intereses.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Representación en Juicios",
      description: "Defensa integral durante todo el proceso judicial con estrategias personalizadas para cada caso.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Mediación y Conciliación",
      description: "Resolución alternativa de conflictos para encontrar soluciones eficaces fuera del litigio.",
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
            Ofrecemos una amplia gama de servicios legales especializados en derecho penal, 
            adaptados a las necesidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full border-law-gold/20 hover:border-law-gold/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bodoni text-law-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-law-gray leading-relaxed">
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
