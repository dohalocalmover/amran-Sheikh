import React from 'react';
import { Layers, ShieldCheck, MessageSquare, CalendarCheck, Check, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Organized Moving Process',
      subtitle: 'Systematic room-by-room methodology',
      description: 'We do not throw random items into random boxes. Every box is inventoried and color/room labeled so that unpacking in your new kitchen, master bedroom, or living room is effortless.',
      icon: Layers,
      points: [
        'Room-specific box labelling and numbering',
        'Hardware screws & parts bagged and taped to respective furniture',
        'Logical loading order to ensure quick unloading into proper rooms',
      ],
    },
    {
      title: 'Careful Multi-Layer Packing',
      subtitle: 'Materials chosen for Qatar conditions',
      description: 'Qatar heat and desert dust demand superior protection. We utilize high-density bubble wrap, industrial stretch wrap, heavy-duty carton corners, and clean furniture blankets.',
      icon: ShieldCheck,
      points: [
        'Padded wraps prevent friction scratches on glossy dining tables & TVs',
        'Dust-proof plastic stretch wrapping for sofas and mattresses',
        'Specialized dish packs & cell partitions for delicate glassware',
      ],
    },
    {
      title: 'Clear, Direct Communication',
      subtitle: 'Transparent updates via WhatsApp',
      description: 'No dealing with opaque call centers. You communicate directly with a dedicated relocation coordinator who provides arrival timeframes, truck details, and clear itemized pricing.',
      icon: MessageSquare,
      points: [
        'Direct WhatsApp contact (+974 50354956) from start to finish',
        'Upfront quotations based on your specific inventory',
        'Regular arrival and transit updates on moving day',
      ],
    },
    {
      title: 'Convenient & Flexible Booking',
      subtitle: 'Designed around your schedule',
      description: 'We adapt to your building lease expiry, handover dates, and security permit windows in compounds or high-rise towers across Doha.',
      icon: CalendarCheck,
      points: [
        'Weekend, evening, and early morning moving time slots',
        'Guidance on high-rise service elevator booking windows',
        'Same-day emergency move options when availability permits',
      ],
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            The Doha Movers Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Why Choose <span className="text-orange-600">Doha Local Movers?</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We focus on organized logistics, careful protective packing, and responsive communication to take the stress out of moving in Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 hover:bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{reason.title}</h3>
                      <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                        {reason.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                    {reason.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
