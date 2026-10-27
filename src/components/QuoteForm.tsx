import React, { useState, useEffect } from 'react';
import {
  QuoteFormData,
  validateQuoteRequest,
  buildWhatsAppQuoteUrl,
  OFFICIAL_WHATSAPP_LINK,
  OFFICIAL_WHATSAPP_NUMBER,
} from '../utils/quote';
import {
  Send,
  MessageCircle,
  Calendar,
  MapPin,
  User,
  Phone,
  Package,
  Home,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { QATAR_SERVICE_AREAS } from '../data/areas';
import { SERVICES_DATA } from '../data/services';

interface QuoteFormProps {
  initialService?: string;
  initialArea?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService, initialArea }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    movingFrom: initialArea || '',
    movingTo: '',
    movingDate: '',
    serviceType: initialService || 'Home Moving',
    propertyType: '2 Bedroom Apartment',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync external selections
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialArea) {
      setFormData((prev) => ({ ...prev, movingFrom: initialArea }));
    }
  }, [initialArea]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateQuoteRequest(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setSubmittedData(formData);
    setShowSuccessModal(true);
  };

  const handleCopyDetails = () => {
    if (!submittedData) return;
    const summary = `Moving Quote Request:\nName: ${submittedData.name}\nPhone: ${submittedData.phone}\nFrom: ${submittedData.movingFrom}\nTo: ${submittedData.movingTo}\nDate: ${submittedData.movingDate}\nService: ${submittedData.serviceType}\nProperty: ${submittedData.propertyType || 'N/A'}\nDetails: ${submittedData.additionalDetails || 'None'}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappRedirectUrl = submittedData ? buildWhatsAppQuoteUrl(submittedData) : '';

  return (
    <section id="quote-form" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-3">
            Quick Quotation Request
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Get Your Free Moving Quote
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Tell us about your upcoming move in Qatar. We will calculate team size, truck requirements, and packing materials to give you an honest quotation.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-orange-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Tariq Al-Mansoor"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                    errors.name
                      ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                      : 'border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +974 5035 4956"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                    errors.phone
                      ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                      : 'border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Moving From */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  Moving From (Area in Qatar) *
                </label>
                <input
                  type="text"
                  name="movingFrom"
                  value={formData.movingFrom}
                  onChange={handleChange}
                  placeholder="e.g. The Pearl, Porto Arabia"
                  list="area-suggestions"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                    errors.movingFrom
                      ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                      : 'border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                  }`}
                />
                {errors.movingFrom && <p className="text-xs text-red-600 mt-1 font-medium">{errors.movingFrom}</p>}
              </div>

              {/* Moving To */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  Moving To (Destination) *
                </label>
                <input
                  type="text"
                  name="movingTo"
                  value={formData.movingTo}
                  onChange={handleChange}
                  placeholder="e.g. Lusail, Fox Hills"
                  list="area-suggestions"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                    errors.movingTo
                      ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                      : 'border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                  }`}
                />
                {errors.movingTo && <p className="text-xs text-red-600 mt-1 font-medium">{errors.movingTo}</p>}
              </div>

              <datalist id="area-suggestions">
                {QATAR_SERVICE_AREAS.map((a) => (
                  <option key={a.id} value={a.name} />
                ))}
              </datalist>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Moving Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-orange-600" />
                  Moving Date *
                </label>
                <input
                  type="date"
                  name="movingDate"
                  value={formData.movingDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                    errors.movingDate
                      ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-400'
                      : 'border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                  }`}
                />
                {errors.movingDate && <p className="text-xs text-red-600 mt-1 font-medium">{errors.movingDate}</p>}
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-orange-600" />
                  Service Required *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Size */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-orange-600" />
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                >
                  <option value="Studio Apartment">Studio Apartment</option>
                  <option value="1 Bedroom Apartment">1 Bedroom Apartment</option>
                  <option value="2 Bedroom Apartment">2 Bedroom Apartment</option>
                  <option value="3+ Bedroom Apartment">3+ Bedroom Apartment</option>
                  <option value="Small Villa / Townhouse">Small Villa / Townhouse</option>
                  <option value="Large Standalone Villa">Large Standalone Villa</option>
                  <option value="Office / Commercial Space">Office / Commercial Space</option>
                  <option value="Few Furniture Items Only">Few Furniture Items Only</option>
                </select>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                rows={3}
                placeholder="Mention any heavy items (safe, piano, double-door fridge), elevator access or tower security permits..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            {/* Submit Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto flex-1 py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Review & Dispatch Moving Quote</span>
                <Send className="w-4 h-4 text-orange-400" />
              </button>

              <a
                href={OFFICIAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              🔒 We respect your privacy. Inquiries are handled directly via official WhatsApp (+974 50354956) with zero unsolicited spam.
            </p>
          </form>
        </div>
      </div>

      {/* Confirmation & Direct WhatsApp Dispatch Modal */}
      {showSuccessModal && submittedData && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-900 font-heading">
              Moving Request Formatted!
            </h3>
            <p className="text-sm text-slate-600 text-center mt-2">
              To give you an exact, prompt quotation, our dispatch team receives customer requests directly on WhatsApp.
            </p>

            <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5 font-mono">
              <div><strong className="font-semibold text-slate-900">Name:</strong> {submittedData.name}</div>
              <div><strong className="font-semibold text-slate-900">Route:</strong> {submittedData.movingFrom} to {submittedData.movingTo}</div>
              <div><strong className="font-semibold text-slate-900">Date:</strong> {submittedData.movingDate}</div>
              <div><strong className="font-semibold text-slate-900">Service:</strong> {submittedData.serviceType} ({submittedData.propertyType})</div>
              {submittedData.additionalDetails && (
                <div><strong className="font-semibold text-slate-900">Notes:</strong> {submittedData.additionalDetails}</div>
              )}
            </div>

            <div className="space-y-3">
              <a
                href={whatsappRedirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-center text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send to Moving Team on WhatsApp (+974 50354956)</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied Details' : 'Copy Details'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowSuccessModal(false)}
                  className="py-2.5 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
