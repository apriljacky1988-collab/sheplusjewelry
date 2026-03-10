"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";

function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-100">
        <Image
          src={images[active]}
          alt={name}
          fill
          className="object-cover transition duration-300"
        />
        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActive((active - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActive((active + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                active === i ? "border-teal-500" : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image src={img} alt={`${name} ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductPageClient({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const images = product.images || [product.image];

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <ImageGallery images={images} name={product.name} />

          {/* Info */}
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-teal-600 mb-6">
              {product.price}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Details */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="bg-teal-50 rounded-lg px-4 py-2">
                <span className="text-teal-700 font-medium text-sm">MOQ: {product.moq}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="flex-1 bg-teal-600 text-white text-center py-4 px-8 rounded-xl font-semibold hover:bg-teal-700 transition text-lg"
              >
                Request a Sample
              </a>
              <a
                href="mailto:crossborderstar@gmail.com"
                className="flex-1 border-2 border-teal-600 text-teal-600 text-center py-4 px-8 rounded-xl font-semibold hover:bg-teal-50 transition text-lg"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* More Products */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p, i) => (
                <Link key={i} href={`/products/${p.id}`} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-teal-600 font-semibold uppercase">{p.category}</p>
                    <p className="font-medium text-gray-900 mt-1 text-sm">{p.name}</p>
                    <p className="text-teal-600 font-semibold text-sm mt-1">{p.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
