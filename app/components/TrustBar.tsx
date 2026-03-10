"use client";
import { useLang } from "../i18n/LangContext";
import { t } from "../i18n/translations";

export default function TrustBar() {
  const { lang } = useLang();
  const txt = t[lang].trust;

  return (
    <section className="bg-teal-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-teal-200 text-sm font-semibold uppercase tracking-widest mb-8">
          {txt.title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-6">
          {txt.stats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-bold">{s.value}</div>
              <div className="text-teal-200 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-teal-200 text-sm">{txt.countries}</p>
      </div>
    </section>
  );
}
