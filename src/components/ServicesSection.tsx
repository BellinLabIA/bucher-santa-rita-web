import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileCheck, 
  UserCheck, 
  AlertTriangle, 
  Gavel, 
  ShieldCheck, 
  Users 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Gavel className="h-8 w-8 text-primary" />,
      title: "Defensa Penal",
      description: "Representación legal especializada en todos los aspectos del derecho penal, desde delitos menores hasta casos complejos.",
      features: [""]
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Asesoría Legal",
      description: "Consultoría preventiva y estratégica para evitar problemas legales y proteger sus intereses.",
      features: ["Consulta preventiva", "Análisis de riesgo", "Estrategia legal", "Documentación"]
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Representación en Juicios",
      description: "Defensa integral durante todo el proceso judicial con estrategias personalizadas para cada caso.",
      features: ["Juicios orales", "Recursos de apelación", "Amparos", "Procedimientos especiales"]
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Atención de Emergencia",
      description: "Servicio disponible 24/7 para situaciones urgentes que requieren atención legal inmediata.",
      features: ["Atención inmediata", "Disponibilidad 24/7", "Casos urgentes", "Asesoría telefónica"]
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Delitos Empresariales",
      description: "Especialización en delitos económicos y empresariales con enfoque en la protección corporativa.",
      features: ["Lavado de dinero", "Delitos fiscales", "Fraude empresarial", "Compliance penal"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Mediación y Conciliación",
      description: "Resolución alternativa de conflictos para encontrar soluciones eficaces fuera del litigio.",
      features: ["Acuerdos reparatorios", "Mediación penal", "Justicia restaurativa", "Negociación"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                <p className="text-law-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-law-gray">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-law-navy rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bodoni font-bold mb-4">
            ¿Necesita Asesoría Legal <span className="text-primary">Especializada</span>?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            No espere más. Nuestro equipo de expertos está listo para brindarle 
            la mejor defensa legal. Contáctenos para una consulta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bodoni text-lg px-8"
            >
              Consulta Gratuita
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-law-navy font-bodoni text-lg px-8"
            >
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
