import { Card, CardContent } from "@/components/ui/card";
import { Scale, Shield, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bodoni font-bold text-law-navy mb-6">
            Nuestra <span className="text-primary">Trayectoria</span>
          </h2>
          <p className="text-lg text-law-gray leading-relaxed">
            Bücher Santa Rita Abogados es un despacho especializado en derecho penal con más de dos décadas 
            de experiencia defendiendo los derechos de nuestros clientes en la Ciudad de México.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bodoni font-semibold text-law-navy mb-6">
              Compromiso con la Excelencia
            </h3>
            <p className="text-law-gray mb-6 leading-relaxed">
              Desde nuestros inicios, hemos mantenido un compromiso inquebrantable con la defensa 
              de los derechos fundamentales de nuestros clientes. Nuestra experiencia abarca desde 
              casos complejos de derecho penal hasta asesoría preventiva.
            </p>
            <p className="text-law-gray mb-6 leading-relaxed">
              Entendemos que cada caso es único y requiere una estrategia personalizada. Por ello, 
              nuestro equipo se dedica a analizar minuciosamente cada situación para ofrecer la 
              mejor defensa posible.
            </p>
            <p className="text-law-gray leading-relaxed">
              La confianza de nuestros clientes es nuestro mayor patrimonio, y trabajamos 
              incansablemente para mantener los más altos estándares de calidad y ética profesional.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 border-law-gold/20 hover:border-law-gold/40 transition-colors">
              <CardContent className="p-0">
                <Scale className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-bodoni font-semibold text-law-navy mb-2">Justicia</h4>
                <p className="text-sm text-law-gray">Defensa íntegra de sus derechos</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-law-gold/20 hover:border-law-gold/40 transition-colors">
              <CardContent className="p-0">
                <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-bodoni font-semibold text-law-navy mb-2">Protección</h4>
                <p className="text-sm text-law-gray">Resguardo legal especializado</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-law-gold/20 hover:border-law-gold/40 transition-colors">
              <CardContent className="p-0">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-bodoni font-semibold text-law-navy mb-2">Experiencia</h4>
                <p className="text-sm text-law-gray">Más de 20 años de práctica</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-law-gold/20 hover:border-law-gold/40 transition-colors">
              <CardContent className="p-0">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-bodoni font-semibold text-law-navy mb-2">Excellence</h4>
                <p className="text-sm text-law-gray">Reconocimiento profesional</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values section */}
        <div className="bg-white rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bodoni font-bold text-law-navy text-center mb-12">
            Nuestros <span className="text-primary">Valores</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bodoni font-semibold text-law-navy mb-4">Integridad</h4>
              <p className="text-law-gray">
                Actuamos con honestidad y transparencia en todos nuestros procesos, 
                manteniendo siempre la confianza de nuestros clientes.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bodoni font-semibold text-law-navy mb-4">Dedicación</h4>
              <p className="text-law-gray">
                Cada caso recibe nuestra atención completa y personalizada, 
                asegurando la mejor estrategia de defensa posible.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bodoni font-semibold text-law-navy mb-4">Profesionalismo</h4>
              <p className="text-law-gray">
                Mantenemos los más altos estándares de calidad y ética profesional 
                en cada aspecto de nuestro trabajo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;