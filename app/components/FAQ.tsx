"use client";
import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import { t } from "../i18n/translations";

export default function FAQ() {
  const { lang } = useLang();
  const txt = t[lang].faq;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">{txt.title}</h2>
          <p className="text-lg text-gray-600">{txt.subtitle}</p>
        </div>
        <div className="space-y-3">
          {txt.items.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-teal-600 flex-shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
