import { Lang } from "../i18n/translations";

export interface Product {
  id: string;
  name: { en: string; es: string };
  category: { en: string; es: string };
  material: { en: string; es: string };
  moq: string;
  price: string;
  image: string;
  images: string[];
  description: { en: string; es: string };
  details: { en: string[]; es: string[] };
}

export const products: Product[] = [
  {
    id: "turquoise-earrings-gift-set",
    name: { en: "Turquoise Earrings Gift Set", es: "Set de Aretes de Turquesa" },
    category: { en: "Earrings", es: "Aretes" },
    material: { en: "Genuine Turquoise, 14K Gold Plated", es: "Turquesa Genuina, Baño de Oro 14K" },
    moq: "1 piece (sample)",
    price: "From $12/pc",
    image: "/images/product-1.jpg",
    images: ["/images/product-1.jpg", "/images/product-7.jpg", "/images/product-8.jpg"],
    description: {
      en: "A beautiful gift set featuring genuine turquoise earrings with 14K gold plated settings. Perfect for boutique resellers looking for eye-catching turquoise jewelry with a premium finish.",
      es: "Un hermoso set de regalo con aretes de turquesa genuina y engarces bañados en oro 14K. Perfecto para revendedores de boutique que buscan joyería de turquesa llamativa con acabado premium.",
    },
    details: {
      en: ["Genuine turquoise stone", "14K gold plated", "Hypoallergenic", "Gift box included", "MOQ: 1 piece for samples"],
      es: ["Piedra de turquesa genuina", "Baño de oro 14K", "Hipoalergénico", "Caja de regalo incluida", "MOQ: 1 pieza para muestras"],
    },
  },
  {
    id: "turquoise-beaded-necklace",
    name: { en: "Turquoise Beaded Necklace", es: "Collar de Cuentas de Turquesa" },
    category: { en: "Necklaces", es: "Collares" },
    material: { en: "Genuine Turquoise, Sterling Silver", es: "Turquesa Genuina, Plata de Ley" },
    moq: "1 piece (sample)",
    price: "From $18/pc",
    image: "/images/product-2.jpg",
    images: ["/images/product-2.jpg", "/images/product-10.jpg", "/images/product-4.jpg"],
    description: {
      en: "Handcrafted turquoise beaded necklace with sterling silver accents. Each piece features natural turquoise with unique color variations, making every necklace one-of-a-kind.",
      es: "Collar de cuentas de turquesa artesanal con acentos de plata de ley. Cada pieza presenta turquesa natural con variaciones de color únicas, haciendo que cada collar sea irrepetible.",
    },
    details: {
      en: ["Natural turquoise beads", "Sterling silver clasp", "18-20 inch length", "Handcrafted", "MOQ: 1 piece for samples"],
      es: ["Cuentas de turquesa natural", "Cierre de plata de ley", "Largo 45-50 cm", "Hecho a mano", "MOQ: 1 pieza para muestras"],
    },
  },
  {
    id: "turquoise-beaded-bracelet",
    name: { en: "Turquoise Beaded Bracelet", es: "Pulsera de Cuentas de Turquesa" },
    category: { en: "Bracelets", es: "Pulseras" },
    material: { en: "Genuine Turquoise, Silver Beads", es: "Turquesa Genuina, Cuentas de Plata" },
    moq: "10 pieces",
    price: "From $10/pc",
    image: "/images/product-3.jpg",
    images: ["/images/product-3.jpg", "/images/product-5.jpg", "/images/product-8.jpg"],
    description: {
      en: "Elegant turquoise beaded bracelet with silver spacer beads. A bestseller for boutiques, this bracelet pairs beautifully with both casual and formal outfits.",
      es: "Elegante pulsera de cuentas de turquesa con separadores de plata. Un éxito de ventas para boutiques, esta pulsera combina perfectamente con outfits casuales y formales.",
    },
    details: {
      en: ["Genuine turquoise beads", "Silver spacer beads", "Elastic band", "Fits most wrist sizes", "MOQ: 10 pieces"],
      es: ["Cuentas de turquesa genuina", "Separadores de plata", "Banda elástica", "Se adapta a la mayoría de muñecas", "MOQ: 10 piezas"],
    },
  },
  {
    id: "turquoise-cross-necklace",
    name: { en: "Turquoise Cross Necklace", es: "Collar Cruz de Turquesa" },
    category: { en: "Necklaces", es: "Collares" },
    material: { en: "Genuine Turquoise, 14K Gold Plated", es: "Turquesa Genuina, Baño de Oro 14K" },
    moq: "20 pieces",
    price: "From $15/pc",
    image: "/images/product-4.jpg",
    images: ["/images/product-4.jpg", "/images/product-2.jpg", "/images/product-10.jpg"],
    description: {
      en: "Stunning turquoise cross pendant necklace with 14K gold plated chain. Combines spiritual symbolism with natural beauty, popular among western and boho jewelry lovers.",
      es: "Impresionante collar con colgante de cruz de turquesa y cadena bañada en oro 14K. Combina simbolismo espiritual con belleza natural, popular entre los amantes de la joyería western y boho.",
    },
    details: {
      en: ["Genuine turquoise cross pendant", "14K gold plated chain", "18 inch chain length", "Lobster clasp", "MOQ: 20 pieces"],
      es: ["Colgante de cruz de turquesa genuina", "Cadena bañada en oro 14K", "Largo de cadena 45 cm", "Cierre de langosta", "MOQ: 20 piezas"],
    },
  },
  {
    id: "freshwater-pearl-bracelet",
    name: { en: "Freshwater Pearl Bracelet", es: "Pulsera de Perlas de Agua Dulce" },
    category: { en: "Bracelets", es: "Pulseras" },
    material: { en: "Freshwater Pearl, Sterling Silver", es: "Perla de Agua Dulce, Plata de Ley" },
    moq: "20 pieces",
    price: "From $14/pc",
    image: "/images/product-5.jpg",
    images: ["/images/product-5.jpg", "/images/product-9.jpg", "/images/product-6.jpg"],
    description: {
      en: "Delicate freshwater pearl bracelet with sterling silver toggle clasp. Classic and timeless design that appeals to a wide range of customers.",
      es: "Delicada pulsera de perlas de agua dulce con cierre de palanca de plata de ley. Diseño clásico y atemporal que atrae a una amplia gama de clientes.",
    },
    details: {
      en: ["Genuine freshwater pearls", "Sterling silver toggle clasp", "7-7.5 inch length", "Natural luster", "MOQ: 20 pieces"],
      es: ["Perlas de agua dulce genuinas", "Cierre de palanca de plata de ley", "Largo 18-19 cm", "Brillo natural", "MOQ: 20 piezas"],
    },
  },
  {
    id: "baroque-pearl-long-earrings",
    name: { en: "Baroque Pearl Long Earrings", es: "Aretes Largos de Perla Barroca" },
    category: { en: "Earrings", es: "Aretes" },
    material: { en: "Baroque Freshwater Pearl, 18K Gold", es: "Perla Barroca de Agua Dulce, Oro 18K" },
    moq: "10 pieces",
    price: "From $16/pc",
    image: "/images/product-6.jpg",
    images: ["/images/product-6.jpg", "/images/product-1.jpg", "/images/product-7.jpg"],
    description: {
      en: "Sophisticated baroque freshwater pearl drop earrings with 18K gold plated hooks. The irregular shapes of baroque pearls give each pair a unique, artisanal character.",
      es: "Sofisticados aretes colgantes de perla barroca de agua dulce con ganchos bañados en oro 18K. Las formas irregulares de las perlas barrocas dan a cada par un carácter único y artesanal.",
    },
    details: {
      en: ["Baroque freshwater pearls", "18K gold plated hooks", "2.5 inch drop length", "Unique irregular shapes", "MOQ: 10 pieces"],
      es: ["Perlas barrocas de agua dulce", "Ganchos bañados en oro 18K", "Largo colgante 6.5 cm", "Formas irregulares únicas", "MOQ: 10 piezas"],
    },
  },
  {
    id: "floating-pearl-necklace",
    name: { en: "Floating Pearl Necklace", es: "Collar de Perlas Flotantes" },
    category: { en: "Necklaces", es: "Collares" },
    material: { en: "Freshwater Pearl, 14K Gold Plated", es: "Perla de Agua Dulce, Baño de Oro 14K" },
    moq: "10 pieces",
    price: "From $20/pc",
    image: "/images/product-9.jpg",
    images: ["/images/product-9.jpg", "/images/product-5.jpg", "/images/product-10.jpg"],
    description: {
      en: "Elegant floating pearl necklace with 14K gold plated chain. The illusion of floating pearls creates a modern, minimalist look perfect for day and evening wear.",
      es: "Elegante collar de perlas flotantes con cadena bañada en oro 14K. La ilusión de perlas flotantes crea un look moderno y minimalista perfecto para el día y la noche.",
    },
    details: {
      en: ["Genuine freshwater pearls", "14K gold plated chain", "16-18 inch adjustable length", "Modern minimalist design", "MOQ: 10 pieces"],
      es: ["Perlas de agua dulce genuinas", "Cadena bañada en oro 14K", "Largo ajustable 40-45 cm", "Diseño moderno minimalista", "MOQ: 10 piezas"],
    },
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function localizedProduct(p: Product, lang: Lang) {
  return {
    ...p,
    name: p.name[lang],
    category: p.category[lang],
    material: p.material[lang],
    description: p.description[lang],
    details: p.details[lang],
  };
}
