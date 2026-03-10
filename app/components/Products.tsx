"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "turquoise-earrings-gift-set",
    name: "Turquoise Earrings Gift Set",
    category: "Earrings",
    material: "Genuine Turquoise, 14K Gold Plated",
    moq: "1 piece (sample)",
    price: "From $12/pc",
    image: "/images/product-1.jpg",
    description: "A beautiful gift set featuring genuine turquoise earrings with 14K gold plated settings. Perfect for boutique resellers looking for eye-catching turquoise jewelry with a premium finish.",
    details: ["Genuine turquoise stone", "14K gold plated", "Hypoallergenic", "Gift box included", "MOQ: 1 piece for samples"]
  },
  {
    id: "turquoise-beaded-necklace",
    name: "Turquoise Beaded Necklace",
    category: "Necklaces",
    material: "Genuine Turquoise, Sterling Silver",
    moq: "1 piece (sample)",
    price: "From $18/pc",
    image: "/images/product-2.jpg",
    description: "Handcrafted turquoise beaded necklace with sterling silver accents. Each piece features natural turquoise with unique color variations, making every necklace one-of-a-kind.",
    details: ["Natural turquoise beads", "Sterling silver clasp", "18-20 inch length", "Handcrafted", "MOQ: 1 piece for samples"]
  },
  {
    id: "turquoise-beaded-bracelet",
    name: "Turquoise Beaded Bracelet",
    category: "Bracelets",
    material: "Genuine Turquoise, Silver Beads",
    moq: "10 pieces",
    price: "From $10/pc",
    image: "/images/product-3.jpg",
    description: "Elegant turquoise beaded bracelet with silver spacer beads. A bestseller for boutiques, this bracelet pairs beautifully with both casual and formal outfits.",
    details: ["Genuine turquoise beads", "Silver spacer beads", "Elastic band", "Fits most wrist sizes", "MOQ: 10 pieces"]
  },
  {
    id: "turquoise-cross-necklace",
    name: "Turquoise Cross Necklace",
    category: "Necklaces",
    material: "Genuine Turquoise, 14K Gold Plated",
    moq: "20 pieces",
    price: "From $15/pc",
    image: "/images/product-4.jpg",
    description: "Stunning turquoise cross pendant necklace with 14K gold plated chain. Combines spiritual symbolism with natural beauty, popular among western and boho jewelry lovers.",
    details: ["Genuine turquoise cross pendant", "14K gold plated chain", "18 inch chain length", "Lobster clasp", "MOQ: 20 pieces"]
  },
  {
    id: "freshwater-pearl-bracelet",
    name: "Freshwater Pearl Bracelet",
    category: "Bracelets",
    material: "Freshwater Pearl, Sterling Silver",
    moq: "20 pieces",
    price: "From $14/pc",
    image: "/images/product-5.jpg",
    description: "Delicate freshwater pearl bracelet with sterling silver toggle clasp. Classic and timeless design that appeals to a wide range of customers, from everyday wear to special occasions.",
    details: ["Genuine freshwater pearls", "Sterling silver toggle clasp", "7-7.5 inch length", "Natural luster", "MOQ: 20 pieces"]
  },
  {
    id: "baroque-pearl-long-earrings",
    name: "Baroque Pearl Long Earrings",
    category: "Earrings",
    material: "Baroque Freshwater Pearl, 18K Gold",
    moq: "10 pieces",
    price: "From $16/pc",
    image: "/images/product-6.jpg",
    description: "Sophisticated baroque freshwater pearl drop earrings with 18K gold plated hooks. The irregular shapes of baroque pearls give each pair a unique, artisanal character.",
    details: ["Baroque freshwater pearls", "18K gold plated hooks", "2.5 inch drop length", "Unique irregular shapes", "MOQ: 10 pieces"]
  },
  {
    id: "floating-pearl-necklace",
    name: "Floating Pearl Necklace",
    category: "Necklaces",
    material: "Freshwater Pearl, 14K Gold Plated",
    moq: "10 pieces",
    price: "From $20/pc",
    image: "/images/product-9.jpg",
    description: "Elegant floating pearl necklace with 14K gold plated chain. The illusion of floating pearls creates a modern, minimalist look that is perfect for both day and evening wear.",
    details: ["Genuine freshwater pearls", "14K gold plated chain", "16-18 inch adjustable length", "Modern minimalist design", "MOQ: 10 pieces"]
  }
];

export { products };

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600">
            Browse our popular designs or send us your own for custom manufacturing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link 
              key={index}
              href={`/products/${product.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group cursor-pointer block"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.material}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">MOQ: {product.moq}</span>
                  <span className="font-semibold text-teal-600">{product.price}</span>
                </div>
                <div className="mt-4 text-teal-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition"
          >
            Request Full Catalog
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
