import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail, Shield, FileText, X } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK, OFFICIAL_WHATSAPP_NUMBER } from '../utils/quote';
import { SERVICES_DATA } from '../data/services';
import { QATAR_SERVICE_AREAS } from '../data/areas';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/file_0000000093188207b1a2d13ffb752130_f62f0274.png"
                alt="Doha Local Movers & Packers"
                className="h-14 w-auto object-contain bg-white rounded-xl p-1"
              />
              <div>
                <span className="block text-xl font-extrabold text-white font-heading">
                  Doha Local Movers & Packers
                </span>
                <span className="block text-xs font-bold text-orange-400 tracking-wider uppercase">
                  Qatar-Based Services
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional moving, villa relocation, apartment moving, office relocation, furniture dismantling & reassembly, and secure storage solutions across Doha and all Qatar municipalities.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href={OFFICIAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: +974 50354956</span>
              </a>

              <a
                href="tel:+97450354956"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
              >
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Direct Line: +974 50354956</span>
              </a>

              <div className="inline-flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Service Center: Doha, State of Qatar</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-orange-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-orange-400 font-bold hover:underline">
                  View All 12 Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {QATAR_SERVICE_AREAS.slice(0, 7).map((area) => (
                <li key={area.id}>
                  <a href="#service-areas" className="hover:text-orange-400 transition-colors">
                    {area.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#service-areas" className="text-orange-400 font-bold hover:underline">
                  All Qatar Coverage →
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Quick Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="text-slate-300 hover:text-orange-400 text-left transition-colors cursor-pointer"
                >
                  Contact Business Details
                </button>
              </li>
              <li>
                <a href="#quote-form" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Request Moving Quote
                </a>
              </li>
              <li>
                <Link to="/storage-services" className="text-orange-400 hover:underline font-semibold flex items-center gap-1">
                  <span>Storage & Video Updates</span>
                  <span className="text-[10px] bg-orange-500/20 px-1.5 py-0.2 rounded">Facility</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-orange-400 font-semibold flex items-center gap-1">
                  <span>Moving & Storage Blog</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold">12 Guides</span>
                </Link>
              </li>
              <li>
                <a href="/#moving-resources" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Interactive Checklists
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-slate-300 hover:text-orange-400 transition-colors">
                  FAQ & Moving Guides
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-slate-300 hover:text-orange-400 text-left transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={OFFICIAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {t('companyFullName')}. {t('allRightsReserved')}</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageToggle variant="compact" />
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setShowContactModal(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact Support
            </button>
            <span>•</span>
            <span className="text-slate-400">Doha, Qatar</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold font-heading flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-600" />
                Privacy Policy Notice
              </h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Doha Local Movers & Packers</strong> is committed to safeguarding customer personal data. When you submit moving requests through our website or contact us via WhatsApp, we only collect essential moving details (name, contact number, pickup/drop-off areas, moving dates, and property inventory).
              </p>
              <p>
                Your details are strictly used to formulate accurate quotations, dispatch moving teams, coordinate logistics, and schedule truck assignments. We do not sell or lease your personal information to third-party telemarketers.
              </p>
              <p>
                For any data questions, you may message our support line directly at +974 50354956.
              </p>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Details Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold font-heading flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-600" />
                Contact Doha Local Movers
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Official Business Details:</p>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 border border-slate-200 text-xs">
                <div><strong>Brand Name:</strong> Doha Local Movers & Packers</div>
                <div><strong>Market Coverage:</strong> Doha and all serviceable areas across Qatar</div>
                <div><strong>WhatsApp Number:</strong> +974 50354956</div>
                <div><strong>Direct Call:</strong> +974 50354956</div>
                <div><strong>Working Hours:</strong> Daily 7:00 AM – 10:00 PM AST</div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={OFFICIAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-center font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp (+974 50354956)</span>
              </a>
              <button
                onClick={() => setShowContactModal(false)}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
