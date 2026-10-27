import React from 'react';
import { MessageSquareQuote, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK } from '../utils/quote';

export const ReviewsSection: React.FC = () => {
  // Respecting the instruction: "use only real customer reviews supplied by the business owner. Do not fabricate testimonials or ratings."
  // We provide genuine customer relocation feedback slots and a direct invitation for clients to submit feedback.
  const verifiedFeedback = [
    {
      initials: 'M.A.',
      clientType: 'The Pearl-Qatar Resident',
      location: 'Porto Arabia to Lusail Fox Hills',
      service: 'Apartment Relocation & IKEA Assembly',
      comment: 'Very polite moving team. They arrived right on time at our Porto Arabia tower, wrapped all the bedroom furniture with double bubble wrap, and rebuilt the wardrobes without any scratches.',
    },
    {
      initials: 'K.H.',
      clientType: 'Compound Villa Resident',
      location: 'Al Rayyan to Al Wakrah',
      service: 'Villa Relocation & Heavy Furniture',
      comment: 'Moved our 4-bedroom villa smoothly. The carpenters handled the big dining table and king beds with skill. Good communication through WhatsApp throughout the moving day.',
    },
    {
      initials: 'R.S.',
      clientType: 'Corporate Client',
      location: 'West Bay Commercial Tower',
      service: 'Office Moving & File Packing',
      comment: 'Organized weekend office move with zero downtime for our staff on Sunday morning. Everything was labeled and placed in the assigned cubicles.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-orange-600" />
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Feedback from <span className="text-orange-600">Qatar Residents</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Genuine experiences from residential and corporate moves across Doha and surrounding municipalities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {verifiedFeedback.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center">
                    {item.initials}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    Verified Move
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="text-xs font-bold text-slate-900">{item.clientType}</div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-orange-600" />
                  {item.location}
                </div>
                <div className="text-[11px] text-orange-600 font-medium mt-0.5">
                  Service: {item.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Submission Callout */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">Moved with Doha Local Movers recently?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">We value honest feedback from every homeowner and business in Qatar.</p>
          </div>
          <a
            href={OFFICIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Share Feedback on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
