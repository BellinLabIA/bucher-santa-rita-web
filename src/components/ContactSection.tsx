import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos requeridos.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Le responderemos a la brevedad.",
    });

    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola, me interesa obtener información sobre sus servicios legales.");
    const whatsappUrl = `https://wa.me/525512345678?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bodoni font-bold text-law-navy mb-6">
            <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-lg text-law-gray leading-relaxed">
            Estamos aquí para ayudarle. Contáctenos para una consulta 
            y descubra cómo podemos proteger sus derechos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
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
                <p className="font-semibold text-law-navy">+52 55 1234-5678</p>
                <p className="text-law-gray mb-2 mt-4">Emergencias 24/7:</p>
                <p className="font-semibold text-law-navy">+52 55 8765-4321</p>
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
                <p className="font-semibold text-law-navy">info@buchersantarita.mx</p>
                <p className="text-law-gray mb-2 mt-4">Casos Urgentes:</p>
                <p className="font-semibold text-law-navy">urgente@buchersantarita.mx</p>
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
                  Paseo de los Tamarindos 400-B<br/>
                  Col. Bosques de las Lomas, Ciudad de México<br/>
                  C.P. 05120, CDMX
                </p>
              </CardContent>
            </Card>

            <Card className="border-law-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center text-law-navy font-bodoni">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  Horarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-law-gray">Lunes - Viernes:</span>
                    <span className="text-law-navy font-semibold">9:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-law-gray">Sábados:</span>
                    <span className="text-law-navy font-semibold">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-law-gray">Emergencias:</span>
                    <span className="text-primary font-semibold">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Button */}
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bodoni text-lg py-6"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contactar por WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-law-gold/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bodoni text-law-navy text-center">
                  Solicitar <span className="text-primary">Consulta Gratuita</span>
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
                      Enviar Consulta
                    </Button>
                  </div>

                  <p className="text-sm text-law-gray text-center">
                    * Campos requeridos. Sus datos serán tratados con total confidencialidad.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-law-navy rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bodoni font-bold mb-4">
            <span className="text-primary">Atención Inmediata</span> para Casos Urgentes
          </h3>
          <p className="text-lg mb-6 text-white/90 max-w-3xl mx-auto">
            Si se encuentra en una situación legal urgente, no espere. 
            Nuestro equipo está disponible 24/7 para brindarle la asistencia que necesita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bodoni text-lg px-8"
            >
              <Phone className="h-5 w-5 mr-2" />
              Línea de Emergencia
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={openWhatsApp}
              className="border-white text-white hover:bg-white hover:text-law-navy font-bodoni text-lg px-8"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp 24/7
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
