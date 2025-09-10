// src/components/ui/ContactSection.tsx
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert("Por favor complete todos los campos requeridos.");
      return;
    }

    const mailtoLink = `mailto:gs@bsrabogados.net?subject=Consulta%20desde%20el%20sitio%20web&body=Nombre:%20${encodeURIComponent(
      formData.nombre
    )}%0ACorreo:%20${encodeURIComponent(
      formData.email
    )}%0ATeléfono:%20${encodeURIComponent(
      formData.telefono
    )}%0AMensaje:%20${encodeURIComponent(formData.mensaje)}`;

    window.location.href = mailtoLink;

    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bodoni font-bold text-law-navy mb-6">
            <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-lg text-law-gray leading-relaxed">
            Estamos aquí para ayudarle. Contáctenos para una consulta y descubra
            cómo podemos proteger sus derechos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda: información */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-law-gold/20">
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

            <Card className="border-law-gold/20">
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

            <Card className="border-law-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center text-law-navy font-bodoni">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  Dirección
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-law-gray">
                  Paseo de los Tamarindos 400-B Piso 6
                  <br />
                  Col. Bosques de las Lomas, Ciudad de México
                  <br />
                  C.P. 05120, CDMX
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha: formulario */}
          <div className="lg:col-span-2">
            <Card className="border-law-gold/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bodoni text-law-navy text-center">
                  Solicitar <span className="text-primary">Consulta</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nombre" className="text-law-navy font-bodoni">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-law-navy font-bodoni">
                        Teléfono
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-law-navy font-bodoni">
                      Correo Electrónico *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-law-navy font-bodoni">
                      Describa su Caso *
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="mt-2 min-h-32"
                      placeholder="Proporcione los detalles de su situación legal..."
                      required
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bodoni text-lg px-8"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Correo
                    </Button>
                  </div>

                  <p className="text-sm text-law-gray text-center">
                    * Campos requeridos. Sus datos serán tratados con total
                    confidencialidad.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
