"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "../i18n/LangContext";
import { t } from "../i18n/translations";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { lang, setLang } = useLang();
  const txt = t[lang];

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
            {/* Products 下拉菜单 */}
            <div className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <a href="#products" className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition">
                {txt.nav.products}
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <a href="/products/necklaces" className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition">
                    {txt.nav.necklaces}
                  </a>
                  <a href="/products/earrings" className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition">
                    {txt.nav.earrings}
                  </a>
                  <a href="/products/bracelets" className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition">
                    {txt.nav.bracelets}
                  </a>
                </div>
              )}
            </div>
            <a href="#custom-design" className="text-amber-600 hover:text-amber-500 transition font-semibold">Custom Design</a>
            <a href="#process" className="text-gray-700 hover:text-teal-600 transition">{txt.nav.process}</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition">{txt.nav.about}</a>
            <a href="/blog" className="text-gray-700 hover:text-teal-600 transition font-medium">Blog</a>
            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-gray-200 rounded-full px-2 py-1">
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-full text-sm font-medium transition ${lang === "en" ? "bg-teal-600 text-white" : "text-gray-600 hover:text-teal-600"}`}
              >EN</button>
              <button
                onClick={() => setLang("es")}
                className={`px-2 py-0.5 rounded-full text-sm font-medium transition ${lang === "es" ? "bg-teal-600 text-white" : "text-gray-600 hover:text-teal-600"}`}
              >ES</button>
            </div>
            <a href="#contact" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
              {txt.nav.quote}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 border border-gray-200 rounded-full px-2 py-1">
              <button onClick={() => setLang("en")} className={`px-2 py-0.5 rounded-full text-xs font-medium transition ${lang === "en" ? "bg-teal-600 text-white" : "text-gray-600"}`}>EN</button>
              <button onClick={() => setLang("es")} className={`px-2 py-0.5 rounded-full text-xs font-medium transition ${lang === "es" ? "bg-teal-600 text-white" : "text-gray-600"}`}>ES</button>
            </div>
            <button className="text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
            <a href="#products" className="block py-2 text-gray-700">{txt.nav.products}</a>
            <a href="/products/necklaces" className="block py-1.5 pl-4 text-sm text-gray-500 hover:text-teal-600">{txt.nav.necklaces}</a>
            <a href="/products/earrings" className="block py-1.5 pl-4 text-sm text-gray-500 hover:text-teal-600">{txt.nav.earrings}</a>
            <a href="/products/bracelets" className="block py-1.5 pl-4 text-sm text-gray-500 hover:text-teal-600">{txt.nav.bracelets}</a>
            <a href="#custom-design" className="block py-2 text-amber-600 font-semibold">Custom Design</a>
            <a href="#process" className="block py-2 text-gray-700">{txt.nav.process}</a>
            <a href="#about" className="block py-2 text-gray-700">{txt.nav.about}</a>
            <a href="/blog" className="block py-2 text-gray-700 font-medium">Blog</a>
            <a href="#contact" className="block py-2 text-teal-600 font-semibold">{txt.nav.quote}</a>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
              {txt.hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {txt.hero.title1}{" "}
              <span className="text-teal-600">{txt.hero.title2}</span>{" "}
              {txt.hero.title3}
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">{txt.hero.desc}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl">
                {txt.hero.cta1}
              </a>
              <a href="#products" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-teal-600 hover:text-teal-600 transition">
                {txt.hero.cta2}
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600">{txt.hero.stat1}</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">160+</div>
                <div className="text-sm text-gray-600">{txt.hero.stat2}</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">MOQ:1</div>
                <div className="text-sm text-gray-600">{txt.hero.stat3}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-amber-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-4">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src="/images/hero.jpg" alt="Turquoise Cross Necklace - SheplusJewelry" fill className="object-cover" priority />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Turquoise Collection</h3>
                <p className="text-gray-600 mt-1">Genuine stones, 14K gold plated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
