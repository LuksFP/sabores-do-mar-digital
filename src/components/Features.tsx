import { motion } from "framer-motion";
import { memo } from "react";
import { Palmtree, Salad, Sparkles } from "lucide-react";

const features = [
  {
    icon: Palmtree,
    title: "Pratos típicos do litoral",
    description: "Sabores autênticos da costa brasileira",
  },
  {
    icon: Salad,
    title: "Ingredientes frescos e saudáveis",
    description: "Qualidade em cada ingrediente",
  },
  {
    icon: Sparkles,
    title: "Ambiente acolhedor e familiar",
    description: "Conforto e hospitalidade à beira-mar",
  },
] as const;

const Features = memo(() => {

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-smooth md:hover:scale-105 wood-texture overflow-hidden group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-accent/10 p-4 rounded-full mb-4 transition-smooth group-hover:bg-accent/20">
                    <Icon className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Features.displayName = "Features";

export default Features;
