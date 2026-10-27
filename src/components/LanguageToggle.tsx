import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Check } from 'lucide-react';

interface LanguageToggleProps {
  variant?: 'compact' | 'pill' | 'mobile';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'pill',
  className = '',
}) => {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        onClick={toggleLanguage}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white cursor-pointer ${className}`}
        aria-label={`Switch language to ${language === 'en' ? 'Arabic' : 'English'}`}
        title={`Switch language to ${language === 'en' ? 'العربية' : 'English'}`}
      >
        <Globe className="w-3.5 h-3.5 text-orange-400" />
        <span className="font-heading tracking-wide">
          {language === 'en' ? 'العربية' : 'English'}
        </span>
      </button>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`p-3 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-orange-500" />
            <span>Select Language / اختر اللغة</span>
          </span>
          <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
            {language === 'en' ? 'English Active' : 'العربية مفعلة'}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setLanguage('en')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              language === 'en'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span>English (EN)</span>
            {language === 'en' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
          </button>
          <button
            onClick={() => setLanguage('ar')}
            className={`py-2 px-3 rounded-xl text-xs font-bold font-cairo transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              language === 'ar'
                ? 'bg-orange-500 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span>العربية (AR)</span>
            {language === 'ar' && <Check className="w-3.5 h-3.5 text-white" />}
          </button>
        </div>
      </div>
    );
  }

  // Default 'pill' variant for Main Navbar
  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold shadow-2xs ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
          language === 'en'
            ? 'bg-white text-slate-900 shadow-xs font-bold'
            : 'text-slate-500 hover:text-slate-800'
        }`}
        aria-pressed={language === 'en'}
      >
        <span>EN</span>
      </button>

      <span className="w-px h-3.5 bg-slate-300 mx-0.5" />

      <button
        onClick={() => setLanguage('ar')}
        className={`px-2.5 py-1 rounded-lg font-cairo transition-all flex items-center gap-1 cursor-pointer ${
          language === 'ar'
            ? 'bg-orange-500 text-white shadow-xs font-bold'
            : 'text-slate-500 hover:text-slate-800'
        }`}
        aria-pressed={language === 'ar'}
      >
        <span>عربي</span>
      </button>
    </div>
  );
};
