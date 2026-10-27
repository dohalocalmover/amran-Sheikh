import React from 'react';
import { MessageCircle, ShieldCheck, Truck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK } from '../utils/quote';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Visual Accent Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headings & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-orange-400 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t('heroKicker')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.15]">
              {t('heroTitlePrefix')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                {t('heroTitleSuffix')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t('heroDescription')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#quote-form"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold text-base shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t('btnGetQuote')}</span>
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </a>

              <a
                href={OFFICIAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-base shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('btnChatWhatsApp')}</span>
              </a>
            </div>

            {/* Operational Commitments */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-start">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">{t('carefulHandling')}</h4>
                  <p className="text-xs text-slate-400">{t('carefulHandlingDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Truck className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">{t('enclosedTrucks')}</h4>
                  <p className="text-xs text-slate-400">{t('enclosedTrucksDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">{t('punctualCrew')}</h4>
                  <p className="text-xs text-slate-400">{t('punctualCrewDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Border Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl p-2.5 sm:p-3">
                {/* Real Relocation Visual */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
                  <img
                    src="/hero-moving-truck.jpg"
                    alt="Professional Moving Crew Loading Enclosed Truck in Doha, Qatar"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Badge floating over image */}
                  <div className="absolute top-4 start-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-semibold text-white shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{t('expertsBadge')}</span>
                  </div>

                  {/* Bottom Image Overlay Pill */}
                  <div className="absolute bottom-4 start-4 end-4 bg-slate-900/95 backdrop-blur-md border border-slate-700/90 rounded-2xl p-3.5 text-xs text-slate-200 shadow-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold shrink-0">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm font-heading">{t('enclosedTrucks')}</div>
                        <div className="text-slate-400 text-[11px]">{t('enclosedTrucksDesc')}</div>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold text-xs">{t('truckReady')}</span>
                  </div>
                </div>

                {/* Sub-card with Qatar fleet detail */}
                <div className="mt-3 p-4 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/assets/aistudio/file_0000000093188207b1a2d13ffb752130_f62f0274.png"
                      alt="Doha Movers Logo"
                      className="w-8 h-8 rounded-lg object-contain bg-white p-0.5"
                    />
                    <div>
                      <span className="block font-bold text-white font-heading">{t('qatarFleet')}</span>
                      <span className="block text-slate-400 text-[11px]">{t('directCoordination')}</span>
                    </div>
                  </div>
                  <a
                    href={OFFICIAL_WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-semibold hover:bg-emerald-600/30 transition-colors dir-ltr"
                  >
                    +974 50354956
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
