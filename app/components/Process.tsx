"use client";
import { useLang } from "../i18n/LangContext";
import { t } from "../i18n/translations";

export default function Process() {
  const { lang } = useLang();
  const txt = t[lang].process;

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">{txt.badge}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">{txt.title}</h2>
          <p className="text-lg text-gray-600">{txt.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {txt.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-teal-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              {index < txt.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-teal-100 -ml-4">
                  <div className="absolute right-0 -top-1.5 w-3 h-3 bg-teal-200 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
