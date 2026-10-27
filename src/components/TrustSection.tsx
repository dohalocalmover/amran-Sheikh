import React from 'react';
import { ShieldCheck, Clock, Users, HeartHandshake, CheckCircle2, Truck, Package, Sparkles } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      title: 'Professional Service',
      description: 'Dedicated team of trained movers and experienced carpenters equipped with commercial tools for dismantling and assembling.',
      icon: Users,
    },
    {
      title: 'Careful Handling',
      description: 'Zero shortcuts: thick moving blankets, multi-layer bubble wrap, heavy-duty stretch film, and corner padding for every fragile item.',
      icon: ShieldCheck,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Seven days a week availability across Qatar, accommodating high-rise tower elevator booking slots and weekend moves.',
      icon: Clock,
    },
    {
      title: 'Customer-Focused Support',
      description: 'Direct communication via WhatsApp with real-time updates from pickup to final room placement at your destination.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-orange-50/40 p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-orange-200 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-orange-500 text-white flex items-center justify-center transition-colors mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-orange-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Doha Standard Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Highlights Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mx-auto sm:mx-0">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full-Service Relocation Experience</h4>
              <p className="text-sm text-slate-300 mt-0.5">
                From supplying packing boxes to unpacking and furniture reassembly at your new address.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300 shrink-0">
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700">
              ✓ Clean Covered Trucks
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700">
              ✓ Professional Carpenters
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700">
              ✓ No Hidden Charges
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
