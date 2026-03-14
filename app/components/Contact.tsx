"use client";
import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import { t } from "../i18n/translations";

export default function Contact() {
  const { lang } = useLang();
  const txt = t[lang].contact;

  const [formData, setFormData] = useState({ name: "", email: "", company: "", productInterest: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to send');
      setIsSubmitted(true);
    } catch {
      alert('Failed to send message. Please email us directly at anna@sheplusjewelry.com');
    } finally {
      setIsSubmitting(false);
    }
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", productInterest: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">{txt.badge}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">{txt.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{txt.subtitle}</p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{txt.email}</h3>
                  <p className="text-gray-600">anna@sheplusjewelry.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{txt.whatsapp}</h3>
                  <p className="text-gray-600">{txt.whatsappDesc}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{txt.responseTime}</h3>
                  <p className="text-gray-600">{txt.responseTimeDesc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{txt.successTitle}</h3>
                <p className="text-gray-600">{txt.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{txt.name} *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{txt.emailLabel} *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{txt.company}</label>
                  <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" placeholder={txt.companyPlaceholder} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{txt.interest}</label>
                  <select value={formData.productInterest} onChange={(e) => setFormData({...formData, productInterest: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition">
                    <option value="">{txt.interestDefault}</option>
                    {txt.interestOptions.map((opt, i) => <option key={i} value={opt.toLowerCase()}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{txt.message} *</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" placeholder={txt.messagePlaceholder} />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? txt.sending : txt.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
