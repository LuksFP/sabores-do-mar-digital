import { motion } from "framer-motion";
import sobreImage from "@/assets/sobre-interior.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-6">
              Sobre Nós
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                O <span className="font-semibold text-accent">Sabores do Brasil</span> nasceu 
                à beira da Praia do Tombo, no Guarujá, com o propósito de unir o sabor da 
                culinária brasileira ao clima acolhedor do litoral.
              </p>
              <p>
                Nossos pratos combinam tradição, saúde e aquele toque de frescor do mar. 
                Cada refeição é preparada com ingredientes selecionados e muito carinho, 
                proporcionando uma experiência única aos nossos clientes.
              </p>
              <p>
                Venha nos visitar e descubra por que somos o destino favorito de quem 
                busca autenticidade, sabor e uma vista deslumbrante do mar.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={sobreImage}
                alt="Interior do restaurante"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
