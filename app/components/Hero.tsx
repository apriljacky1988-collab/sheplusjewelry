"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            Sheplus<span className="text-teal-600">Jewelry</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-teal-600 transition">Products</a>
            <a href="#process" className="text-gray-700 hover:text-teal-600 transition">Process</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition">About</a>
            <a href="#contact" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
            <a href="#products" className="block py-2 text-gray-700">Products</a>
            <a href="#process" className="block py-2 text-gray-700">Process</a>
            <a href="#about" className="block py-2 text-gray-700">About</a>
            <a href="#contact" className="block py-2 text-teal-600 font-semibold">Get Quote</a>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
              Small Batch Jewelry Manufacturer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Custom Jewelry for{" "}
              <span className="text-teal-600">Boutiques</span> & Etsy Sellers
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Premium small-batch jewelry manufacturing with MOQ as low as 1 piece for samples. 
              Specializing in turquoise, gold, and custom designs for US retailers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
              >
                Request Sample
              </a>
              <a 
                href="#products" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-teal-600 hover:text-teal-600 transition"
              >
                View Products
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">US Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">MOQ:1</div>
                <div className="text-sm text-gray-600">For Samples</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-amber-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Product Image Placeholder</span>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Turquoise Collection</h3>
                <p className="text-gray-600 mt-2">Genuine stones, 14K gold plated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
