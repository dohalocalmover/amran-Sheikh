import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK } from '../utils/quote';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How do you calculate moving quotations in Qatar?',
    answer: 'Our quotations are based on the volume of items to be transported, the size of your property (apartment, villa, or office), the quantity of packing supplies needed, accessibility (elevators vs. stairs), and whether carpentry services are required. Because every home has different requirements, we assess your specific inventory to provide an accurate, transparent quote without surprise fees.',
  },
  {
    question: 'How far in advance should I book my move in Doha?',
    answer: 'We recommend booking 2 to 4 days in advance, especially for end-of-month dates and weekends which fill up fast across Qatar. For high-rise buildings in The Pearl, Lusail, or West Bay, advance notice also helps you secure move-in permits and service lift bookings from building management.',
  },
  {
    question: 'Do you bring your own packing boxes, bubble wrap, and tape?',
    answer: 'Yes. Our moving team arrives fully equipped with commercial-grade corrugated boxes, multi-layer bubble wrap, industrial stretch film, packing tape, furniture blankets, and corner protectors to ensure all your furniture and fragile items are completely shielded.',
  },
  {
    question: 'Can your team dismantle and reassemble heavy or complex furniture?',
    answer: 'Yes. Our team includes experienced carpenters who handle disassembling, labeling, and reassembling king beds, sliding wardrobes, IKEA units, dining sets, and executive office desks safely at your new location.',
  },
  {
    question: 'Do you offer same-day or emergency moving services?',
    answer: 'Same-day moving is available depending on our daily crew and truck schedule across Doha. If you need urgent assistance, contact us on WhatsApp (+974 50354956) as early as possible so we can check available slots.',
  },
  {
    question: 'What do I need to prepare before moving day in Qatar?',
    answer: 'We recommend keeping personal documents, jewelry, passports, and cash with you personally. If you reside in a gated compound or high-rise tower, check if your landlord or building security requires a move-out NOC (No Objection Certificate) or gate pass.',
  },
  {
    question: 'How does your storage service work during a move?',
    answer: 'If there is a gap between moving out of your old place and getting keys to your new home, we can hold your wrapped furniture and sealed boxes in our secure, clean staging space until your new property is ready for move-in.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Got Questions About <span className="text-orange-600">Moving in Qatar?</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about booking, packing materials, carpentry, and building permits.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 hover:text-orange-600 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-orange-100 text-orange-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-slate-700">Have a specific question not covered here?</span>
          <a
            href={OFFICIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
