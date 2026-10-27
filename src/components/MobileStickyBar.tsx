import React from 'react';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK } from '../utils/quote';
import { useLanguage } from '../context/LanguageContext';

export const MobileStickyBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl flex items-center gap-2">
      <a
        href="tel:+97450354956"
        className="flex-1 py-3 px-2 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        aria-label="Call Moving Team"
      >
        <Phone className="w-4 h-4 text-orange-400" />
        <span>{t('callNowBtn')}</span>
      </a>

      <a
        href={OFFICIAL_WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span>{t('whatsappQuoteBtn')}</span>
      </a>

      <a
        href="#quote-form"
        className="py-3 px-3 rounded-xl bg-orange-500 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-transform"
        aria-label="Open Quote Form"
      >
        <FileText className="w-4 h-4" />
        <span className="sr-only">{t('quickFormBtn')}</span>
      </a>
    </div>
  );
};
