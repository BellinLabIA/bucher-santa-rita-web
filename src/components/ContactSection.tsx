// src/components/ui/ContactSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bodoni font-bold text-law-navy mb-6">
            <span className="text-primary">Contacto</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Teléfono */}
          <Card className="border-law-gold/20 h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-law-navy font-bodoni">
                <Phone className="h-5 w-5 text-primary mr-3" />
                Teléfono
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-law-gray mb-2">Oficina Principal:</p>
              <p className="font-semibold text-law-navy">+52 55 6820-5547</p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-law-gold/20 h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-law-navy font-bodoni">
                <Mail className="h-5 w-5 text-primary mr-3" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-law-gray mb-2">Consultas Generales:</p>
              <p className="font-semibold text-law-navy">
                gs@bsrabogados.net
              </p>
            </CardContent>
          </Card>

          {/* Dirección */}
          <Card className="border-law-gold/20 h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-law-navy font-bodoni">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                Dirección
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-law-gray">
                Paseo de los Tamarindos 400-B Piso 6<br />
                Col. Bosques de las Lomas, Ciudad de México<br />
                C.P. 05120, CDMX
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
