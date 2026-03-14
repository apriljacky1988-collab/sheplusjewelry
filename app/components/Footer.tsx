"use client";
import { useLang } from "../i18n/LangContext";
import { t } from "../i18n/translations";

export default function Footer() {
  const { lang } = useLang();
  const txt = t[lang].footer;
  const nav = t[lang].nav;

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Sheplus<span className="text-teal-400">Jewelry</span>
            </div>
            <p className="max-w-sm">{txt.desc}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{txt.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-teal-400 transition">{nav.products}</a></li>
              <li><a href="#process" className="hover:text-teal-400 transition">{nav.process}</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition">{nav.about}</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">{nav.quote}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{txt.contact}</h4>
            <ul className="space-y-2">
              <li>anna@sheplusjewelry.com</li>
              <li>{txt.whatsapp}</li>
              <li>{txt.support}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">{txt.copyright}</p>
          <p className="text-sm mt-4 md:mt-0">{txt.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
