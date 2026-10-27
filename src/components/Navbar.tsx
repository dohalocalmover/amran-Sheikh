import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Clock } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK, checkQatarBusinessHours } from '../utils/quote';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = checkQatarBusinessHours();
  const location = useLocation();
  const { t, isRTL, language } = useLanguage();

  const navLinks = [
    { name: t('navServices'), href: '/#services' },
    { name: t('navChecklists'), href: '/#moving-resources' },
    { name: t('navServiceAreas'), href: '/#service-areas' },
    { name: t('navStorageServices'), href: '/storage-services', isRoute: true, highlight: true },
    { name: t('navBlog'), href: '/blog', isRoute: true },
    { name: t('navFaq'), href: '/#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Notification / Availability Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="hidden sm:inline font-medium">{t('qatarLocalTime')}</span>
              <span className="text-white font-bold">{status.qatarTimeString}</span>
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-orange-400" />
              <span>{t('workingHours')}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Top Bar Compact Language Switcher */}
            <LanguageToggle variant="compact" />

            <a
              href="tel:+97450354956"
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span className="font-semibold dir-ltr">+974 50354956</span>
            </a>
            <a
              href={OFFICIAL_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>{t('whatsappChat')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/assets/aistudio/file_0000000093188207b1a2d13ffb752130_f62f0274.png"
            alt="Doha Local Movers & Packers Logo"
            className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden min-[420px]:block">
            <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 font-heading leading-tight">
              {t('brandName')}
            </span>
            <span className="block text-xs sm:text-sm font-bold text-orange-600 tracking-wider uppercase font-heading">
              {t('moversAndPackers')}
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.isRoute) {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'text-orange-600 font-bold'
                      : 'text-slate-700 hover:text-orange-600'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.highlight && (
                    <span className="text-[10px] bg-orange-100 text-orange-700 font-bold px-1.5 py-0.5 rounded-full">
                      {t('videoUpdatesBadge')}
                    </span>
                  )}
                </Link>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Header CTAs & Desktop Language Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <LanguageToggle variant="pill" />

          <a
            href={OFFICIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('whatsappChat')}</span>
          </a>

          <a
            href="/#quote-form"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-slate-900/20 transition-all cursor-pointer"
          >
            <span>{t('getFreeQuote')}</span>
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageToggle variant="compact" />

          <a
            href={OFFICIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-600 text-white"
            aria-label="WhatsApp Contact"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2">
          {/* Prominent Mobile Language Switcher */}
          <LanguageToggle variant="mobile" />

          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="/#quote-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-center rounded-xl text-sm shadow-md"
            >
              {t('btnGetQuote')}
            </a>
            <a
              href={OFFICIAL_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('btnChatWhatsApp')} (+974 50354956)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
