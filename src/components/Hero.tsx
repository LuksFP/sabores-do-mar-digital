import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  const scrollToCardapio = () => {
    const element = document.getElementById("cardapio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="shimmer absolute inset-0" />
      
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Sabores do Brasil
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Experimente o verdadeiro gosto da culinária brasileira
          </p>
          <Button
            onClick={scrollToCardapio}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Ver Cardápio
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
