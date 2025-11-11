import { Instagram, MessageCircle, MapIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg mb-4">© 2025 Sabores do Brasil — Todos os direitos reservados.</p>
          <div className="flex items-center justify-center space-x-6">
            <a
              href="#"
              className="hover:text-leaf-light transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-leaf-light transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-leaf-light transition-colors duration-200"
              aria-label="Google Maps"
            >
              <MapIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
