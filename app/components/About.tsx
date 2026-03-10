"use client";
import Image from "next/image";
import { useLang } from "../i18n/LangContext";
import { t } from "../i18n/translations";

export default function About() {
  const { lang } = useLang();
  const txt = t[lang].about;

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-teal-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-wide">{txt.badge}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">{txt.title}</h2>
            <div className="space-y-4 text-gray-300">
              <p>{txt.p1}</p>
              <p>{txt.p2}</p>
              <p>{txt.p3}</p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400">20+</div>
                <div className="text-sm text-gray-400 mt-1">{txt.stat1}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400">50+</div>
                <div className="text-sm text-gray-400 mt-1">{txt.stat2}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400">160+</div>
                <div className="text-sm text-gray-400 mt-1">{txt.stat3}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/product-8.jpg" alt="Sheplus Gift Box" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-sm italic">&ldquo;{txt.quote}&rdquo;</p>
              <p className="text-xs text-gray-500 mt-2">{txt.quoteAuthor}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
