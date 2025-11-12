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

export interface MenuItem {
  image: string;
  title: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  emoji: string;
  items: MenuItem[];
  gridCols: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    emoji: "🍤",
    gridCols: "md:grid-cols-2 lg:grid-cols-3",
    items: [
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
    ],
  },
  {
    id: "pratos",
    title: "Pratos Principais",
    emoji: "🍛",
    gridCols: "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    items: [
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
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    emoji: "🍹",
    gridCols: "md:grid-cols-2 lg:grid-cols-3",
    items: [
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
    ],
  },
];
