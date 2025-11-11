import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  index: number;
}

const MenuCard = ({ image, title, description, price, index }: MenuCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card wood-texture border-2 border-border">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-foreground">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-accent">{price}</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Fazer Pedido
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default MenuCard;
