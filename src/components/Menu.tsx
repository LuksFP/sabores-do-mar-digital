import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import bolinhoSiri from "@/assets/bolinho-siri.jpg";
import casquinhaMarisco from "@/assets/casquinha-marisco.jpg";
import tabuaFrutosMar from "@/assets/tabua-frutos-mar.jpg";
import moquecaBaiana from "@/assets/moqueca-baiana.jpg";
import boboCamarao from "@/assets/bobo-camarao.jpg";
import pescadaGrelhada from "@/assets/pescada-grelhada.jpg";
import marmitaFitness from "@/assets/marmita-fitness.jpg";
import sucoAbacaxi from "@/assets/suco-abacaxi.jpg";
import caipirinha from "@/assets/caipirinha.jpg";
import aguaCoco from "@/assets/agua-coco.jpg";

const Menu = () => {
  const entradas = [
    {
      image: bolinhoSiri,
      title: "Bolinho de Siri",
      description: "Bolinhos dourados e crocantes com recheio cremoso de siri",
      price: "R$ 24",
    },
    {
      image: casquinhaMarisco,
      title: "Casquinha de Marisco",
      description: "Mariscos gratinados em conchas naturais",
      price: "R$ 26",
    },
    {
      image: tabuaFrutosMar,
      title: "Tábua de Frutos do Mar",
      description: "Seleção de frutos do mar grelhados",
      price: "R$ 38",
    },
  ];

  const pratos = [
    {
      image: moquecaBaiana,
      title: "Moqueca Baiana",
      description: "Tradicional moqueca com peixe e camarão em panela de barro",
      price: "R$ 56",
    },
    {
      image: boboCamarao,
      title: "Bobó de Camarão",
      description: "Cremoso purê de mandioca com camarões frescos",
      price: "R$ 52",
    },
    {
      image: pescadaGrelhada,
      title: "Filé de Pescada Grelhado",
      description: "Peixe fresco grelhado com legumes da estação",
      price: "R$ 44",
    },
    {
      image: marmitaFitness,
      title: "Marmita Fitness",
      description: "Frango grelhado, legumes e arroz integral",
      price: "R$ 32",
    },
  ];

  const bebidas = [
    {
      image: sucoAbacaxi,
      title: "Suco Natural de Abacaxi com Hortelã",
      description: "Refrescante e natural",
      price: "R$ 10",
    },
    {
      image: caipirinha,
      title: "Caipirinha Clássica",
      description: "O clássico brasileiro feito na hora",
      price: "R$ 18",
    },
    {
      image: aguaCoco,
      title: "Água de Coco Gelada",
      description: "Direto do coco verde",
      price: "R$ 8",
    },
  ];

  return (
    <section id="cardapio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra os sabores autênticos da culinária brasileira
          </p>
        </motion.div>

        {/* Entradas */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-wood mb-8"
          >
            🍤 Entradas
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entradas.map((item, index) => (
              <MenuCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>

        {/* Pratos Principais */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-wood mb-8"
          >
            🍛 Pratos Principais
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pratos.map((item, index) => (
              <MenuCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>

        {/* Bebidas */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-wood mb-8"
          >
            🍹 Bebidas
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bebidas.map((item, index) => (
              <MenuCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
