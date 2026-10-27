import React from 'react';
import { MessageSquare, ClipboardList, Receipt, CalendarCheck2, CheckCircle, ArrowRight } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK } from '../utils/quote';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Contact Us',
      description: 'Reach out via our online quote form or send a quick WhatsApp message to +974 50354956.',
      icon: MessageSquare,
    },
    {
      step: '02',
      title: 'Share Moving Details',
      description: 'Tell us your pickup area, destination in Qatar, preferred date, and major items or apartment size.',
      icon: ClipboardList,
    },
    {
      step: '03',
      title: 'Receive a Quotation',
      description: 'We review your requirements and provide a clear, competitive quotation with no surprise charges.',
      icon: Receipt,
    },
    {
      step: '04',
      title: 'Confirm Your Booking',
      description: 'Choose your desired time slot, coordinate any tower move permits, and lock in your moving date.',
      icon: CalendarCheck2,
    },
    {
      step: '05',
      title: 'Complete the Move',
      description: 'Our punctual crew arrives with covered trucks, packs, moves, and assembles your items in your new home.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Smooth 5-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
            How It Works
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A straightforward, transparent moving journey from your initial WhatsApp inquiry to final furniture setup.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-lg hover:border-orange-500/50 transition-all duration-200 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-orange-500 font-heading">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-orange-400 border border-slate-700 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-700/60 flex items-center gap-1 text-[11px] font-semibold text-slate-400 group-hover:text-orange-400">
                  <span>Step {item.step} of 05</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={OFFICIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all"
          >
            <span>Start Step 1: Contact Us on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
