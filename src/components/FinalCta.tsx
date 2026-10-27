import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK } from '../utils/quote';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-blue-600/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
          Ready to Relocate?
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white max-w-3xl mx-auto leading-tight">
          Planning Your Next Move in Qatar?
        </h2>

        <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need to move and request a quotation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={OFFICIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold text-base shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Get a Quote on WhatsApp</span>
          </a>

          <a
            href="tel:+97450354956"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-orange-400" />
            <span>Call +974 50354956</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Serving Doha, Lusail, The Pearl-Qatar, West Bay, Al Wakrah, Al Rayyan & all Qatar districts.
        </p>
      </div>
    </section>
  );
};
