import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Instagram, MessageCircle, MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica de envio do formulário
    alert("Mensagem enviada! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="py-20 bg-wood-dark/10 wood-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para recebê-lo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card p-6 rounded-xl shadow-lg wood-texture">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(13) 99999-0000</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg wood-texture">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua das Gaivotas, 45<br />
                    Praia do Tombo, Guarujá - SP
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg wood-texture">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Horário</h3>
                  <p className="text-muted-foreground">
                    Todos os dias<br />
                    das 10h às 22h
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 pt-4">
              <Button
                size="lg"
                variant="outline"
                className="bg-card hover:bg-accent hover:text-accent-foreground border-2 border-accent"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-card hover:bg-leaf hover:text-accent-foreground border-2 border-leaf"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-card hover:bg-sea hover:text-white border-2 border-sea"
              >
                <MapIcon className="w-5 h-5 mr-2" />
                Maps
              </Button>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-lg wood-texture space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Sua mensagem..."
                  rows={6}
                  required
                  className="bg-background border-border"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
