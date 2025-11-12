import { memo } from "react";
import MenuSection from "./MenuSection";
import SectionTitle from "./ui/SectionTitle";
import { menuCategories } from "@/data/menuData";

const Menu = memo(() => {
  return (
    <section id="cardapio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Descubra os sabores autênticos da culinária brasileira">
          Nosso Cardápio
        </SectionTitle>

        {menuCategories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
});

Menu.displayName = "Menu";

export default Menu;
