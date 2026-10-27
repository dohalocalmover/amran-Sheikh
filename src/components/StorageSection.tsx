import React from 'react';
import { Warehouse, Video, ShieldCheck, Home, Briefcase, RefreshCw, ArrowRight, MessageCircle, Play, Eye, Camera, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OFFICIAL_WHATSAPP_NUMBER } from '../utils/quote';
import { useLanguage } from '../context/LanguageContext';

export const StorageSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const waQuery = encodeURIComponent(
    'Hello Doha Local Movers, I would like to ask about your storage services and video footage updates in Qatar.'
  );

  const features = [
    {
      title: t('ourOwnFacility'),
      description: t('ourOwnFacilityDesc'),
      icon: Warehouse,
      tag: t('inHouseFacilityPill'),
    },
    {
      title: t('videoUpdatesTitle'),
      description: t('videoUpdatesDesc'),
      icon: Video,
      tag: t('visualPeaceOfMind'),
    },
    {
      title: t('householdStorage'),
      description: t('householdStorageDesc'),
      icon: Home,
      tag: t('residentialTag'),
    },
    {
      title: t('officeStorage'),
      description: t('officeStorageDesc'),
      icon: Briefcase,
      tag: t('commercialTag'),
    },
    {
      title: t('relocationStorage'),
      description: t('relocationStorageDesc'),
      icon: RefreshCw,
      tag: t('flexibleStagingTag'),
    },
  ];

  return (
    <section id="storage" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-slate-800/40 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Warehouse className="w-3.5 h-3.5" />
            <span>{t('storageKicker')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            {t('storageHeadline')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              {t('storageHeadlineHighlight')}
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {t('storageDescription')}
          </p>
        </div>

        {/* Facility Spotlight Showcase with Authentic Storage Photo */}
        <div className="mb-14 rounded-3xl overflow-hidden bg-slate-800/90 border border-slate-700 shadow-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Storage Photo */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-[4/3] sm:aspect-[16/10] bg-slate-950 shadow-inner group">
                <img
                  src="/storage-facility.jpg"
                  alt="Doha Local Movers In-House Storage Facility in Qatar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 start-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-bold text-white shadow-lg">
                  <Warehouse className="w-4 h-4 text-orange-400" />
                  <span>{t('ourOwnFacility')} • Doha</span>
                </div>

                {/* Bottom Video Feature Bar */}
                <div className="absolute bottom-4 start-4 end-4 bg-slate-900/95 backdrop-blur-md border border-slate-700/90 rounded-2xl p-3.5 sm:p-4 text-xs text-slate-200 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm font-heading">{t('videoUpdatesTitle')}</div>
                      <div className="text-slate-400 text-[11px]">{t('videoUpdatesDesc')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Overview & Action */}
            <div className="lg:col-span-5 space-y-5 text-start">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  {t('inHouseFacilityPill')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                  {t('ourOwnFacility')}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {t('ourOwnFacilityDesc')}
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${waQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('askStorageWhatsApp')}</span>
                </a>

                <Link
                  to="/storage-services"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-950 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{t('dedicatedStoragePage')}</span>
                  <ArrowRight className={`w-4 h-4 text-orange-400 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Highlighted Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isHighlight = idx === 1; // Real-time video footage updates

            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between text-start ${
                  isHighlight
                    ? 'bg-gradient-to-b from-orange-500/15 via-slate-800 to-slate-800/90 border-orange-500/60 shadow-xl shadow-orange-500/10 ring-1 ring-orange-500/30'
                    : 'bg-slate-800/80 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isHighlight
                          ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                          : 'bg-slate-900 text-orange-400 border border-slate-700'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        isHighlight
                          ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                          : 'bg-slate-700/80 text-slate-300'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-heading">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {isHighlight && (
                  <div className="mt-5 pt-3 border-t border-orange-500/30 flex items-center gap-2 text-xs font-semibold text-orange-300">
                    <Eye className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{t('videoUpdatesDesc')}</span>
                  </div>
                )}
              </div>
            );
          })}

          {/* 6th Card: Direct WhatsApp Inquiries */}
          <div className="rounded-2xl p-6 sm:p-7 bg-slate-800/90 border border-slate-700 flex flex-col justify-between text-start">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <Play className="w-6 h-6 fill-emerald-400" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {t('qatarFleet')}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-heading">
                {t('askStorageWhatsApp')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {t('directCoordination')} (+974 50354956)
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-700">
              <a
                href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${waQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('whatsappChat')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
