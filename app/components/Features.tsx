"use client";
import { useLang } from "../i18n/LangContext";
import { t } from "../i18n/translations";

export default function Features() {
  const { lang } = useLang();
  const txt = t[lang].features;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{txt.title}</h2>
          <p className="text-lg text-gray-600">{txt.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {txt.items.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-teal-50 transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
