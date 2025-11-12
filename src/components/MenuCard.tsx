import { motion } from "framer-motion";
import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  index: number;
}

const MenuCard = memo(({ image, title, description, price, index }: MenuCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4) }}
    >
      <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-smooth hover:scale-[1.02] bg-card wood-texture border-2 border-border h-full flex flex-col">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardHeader className="flex-1">
          <CardTitle className="text-xl text-foreground line-clamp-2">{title}</CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-accent">{price}</p>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth active:scale-95"
            aria-label={`Fazer pedido de ${title}`}
          >
            Fazer Pedido
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
});

MenuCard.displayName = "MenuCard";

export default MenuCard;
