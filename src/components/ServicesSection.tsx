import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/services';
import {
  Home,
  Building2,
  Building,
  Briefcase,
  PackageCheck,
  Wrench,
  Truck,
  Compass,
  Warehouse,
  Zap,
  Boxes,
  Hammer,
  ArrowRight,
  Check,
  MessageCircle,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../utils/quote';

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Building2,
  Building,
  Briefcase,
  PackageCheck,
  Wrench,
  Truck,
  Compass,
  Warehouse,
  Zap,
  Boxes,
  Hammer,
};

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'packing' | 'specialized'>('all');

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeTab === 'all') return true;
    return s.category === activeTab;
  });

  const handleBookService = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const quoteElement = document.getElementById('quote-form');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Relocation Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Complete Moving Solutions in <span className="text-orange-600">Qatar</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Whether you are moving a 5-bedroom villa, an executive corporate office, or need delicate furniture dismantled and transported, we provide end-to-end relocation services.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services (12)' },
              { id: 'residential', label: 'Residential Moving' },
              { id: 'commercial', label: 'Commercial & Office' },
              { id: 'packing', label: 'Packing & Carpentry' },
              { id: 'specialized', label: 'Transport & Storage' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white hover:bg-slate-200 text-slate-600 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Home;
            const waQuery = encodeURIComponent(
              `Hello Doha Local Movers, I would like to book or inquire about your "${service.title}" service in Qatar.`
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-slate-100 text-slate-700 group-hover:bg-orange-100 group-hover:text-orange-700 transition-colors">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => handleBookService(service)}
                    className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${waQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl transition-colors border border-emerald-200"
                    title="Inquire on WhatsApp"
                    aria-label={`Inquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-base">Need a tailored combination or custom relocation package?</h4>
            <p className="text-xs sm:text-sm text-slate-500">We customize trucks, packing crew, and carpenters to your exact moving inventory.</p>
          </div>
          <a
            href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Doha Local Movers, I need a custom moving quotation for my house/office in Qatar.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Moving Specialist</span>
          </a>
        </div>
      </div>
    </section>
  );
};
