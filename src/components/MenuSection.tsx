import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import type { MenuCategory } from "@/data/menuData";

interface MenuSectionProps {
  category: MenuCategory;
}

const MenuSection = ({ category }: MenuSectionProps) => {
  return (
    <section className="mb-16 last:mb-0">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-wood mb-8"
      >
        {category.emoji} {category.title}
      </motion.h3>
      <div className={`grid grid-cols-1 ${category.gridCols} gap-6`}>
        {category.items.map((item, index) => (
          <MenuCard key={`${category.id}-${index}`} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
