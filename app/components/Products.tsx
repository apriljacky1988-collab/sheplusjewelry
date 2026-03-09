"use client";

import Image from "next/image";

const products = [
  {
    name: "Turquoise Earrings Gift Set",
    category: "Earrings",
    material: "Genuine Turquoise, 14K Gold Plated",
    moq: "1 piece (sample)",
    price: "From $12/pc",
    image: "/images/product-1.jpg"
  },
  {
    name: "Turquoise Beaded Necklace",
    category: "Necklaces",
    material: "Genuine Turquoise, Sterling Silver",
    moq: "1 piece (sample)",
    price: "From $18/pc",
    image: "/images/product-2.jpg"
  },
  {
    name: "Turquoise Beaded Bracelet",
    category: "Bracelets",
    material: "Genuine Turquoise, Silver Beads",
    moq: "10 pieces",
    price: "From $10/pc",
    image: "/images/product-3.jpg"
  },
  {
    name: "Turquoise Cross Necklace",
    category: "Necklaces",
    material: "Genuine Turquoise, 14K Gold Plated",
    moq: "20 pieces",
    price: "From $15/pc",
    image: "/images/product-4.jpg"
  },
  {
    name: "Freshwater Pearl Bracelet",
    category: "Bracelets",
    material: "Freshwater Pearl, Sterling Silver",
    moq: "20 pieces",
    price: "From $14/pc",
    image: "/images/product-5.jpg"
  },
  {
    name: "Baroque Pearl Long Earrings",
    category: "Earrings",
    material: "Baroque Freshwater Pearl, 18K Gold",
    moq: "10 pieces",
    price: "From $16/pc",
    image: "/images/product-6.jpg"
  }
  {
    name: "Floating Pearl Necklace",
    category: "Necklaces",
    material: "Freshwater Pearl, 14K Gold Plated",
    moq: "10 pieces",
    price: "From $20/pc",
    image: "/images/product-9.jpg"
  }
];

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
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group"
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
              </div>
            </div>
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
