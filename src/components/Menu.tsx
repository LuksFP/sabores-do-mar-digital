import { motion } from "framer-motion";
import MenuSection from "./MenuSection";
import { menuCategories } from "@/data/menuData";

const Menu = () => {

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

        {menuCategories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
