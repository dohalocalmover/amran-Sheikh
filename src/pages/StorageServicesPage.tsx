import React, { useState, useEffect } from 'react';
import {
  Warehouse,
  Video,
  ShieldCheck,
  Home,
  Briefcase,
  RefreshCw,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  HelpCircle,
  ChevronDown,
  Layers,
  MapPin,
  Play,
  Eye,
  Camera,
  Check,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { OFFICIAL_WHATSAPP_LINK, OFFICIAL_WHATSAPP_NUMBER, checkQatarBusinessHours } from '../utils/quote';
import { useSEO } from '../utils/seo';

export const StorageServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const status = checkQatarBusinessHours();

  // Storage form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    storageType: 'Household Furniture',
    estimatedDuration: '1 - 3 Months',
    pickupLocation: '',
    notes: '',
  });

  const [formError, setFormError] = useState('');

  useSEO({
    title: 'Secure Storage Services in Qatar | Doha Local Movers & Packers',
    description: 'In-house storage facility in Qatar with supervisor-recorded real-time video updates. Safe storage for household furniture and office equipment during moves.',
    canonicalPath: '/storage-services',
    ogType: 'website',
    ogImage: '/storage-facility.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Storage Services in Qatar',
      serviceType: 'Furniture and Household Storage',
      provider: {
        '@type': 'MovingCompany',
        name: 'Doha Local Movers & Packers',
        telephone: '+97450354956',
        url: 'https://wa.me/97450354956',
      },
      areaServed: 'Qatar',
      description: 'Storage at our own facility with real-time video footage updates for household and office belongings.',
    },
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please enter your name and contact number.');
      return;
    }

    const messageLines = [
      `*Storage Service Inquiry - Doha Local Movers & Packers*`,
      `----------------------------------------`,
      `👤 *Name:* ${formData.name}`,
      `📱 *WhatsApp:* ${formData.phone}`,
      `📦 *Storage Type:* ${formData.storageType}`,
      `⏳ *Estimated Duration:* ${formData.estimatedDuration}`,
      `📍 *Pickup Area in Qatar:* ${formData.pickupLocation || 'To be specified'}`,
    ];

    if (formData.notes.trim()) {
      messageLines.push(`📝 *Items/Details:* ${formData.notes}`);
    }

    messageLines.push(`----------------------------------------`);
    messageLines.push(`Please send me storage availability, video footage update details, and a quote. Thank you!`);

    const waUrl = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join('\n'))}`;
    window.open(waUrl, '_blank');
  };

  const storageFaqs = [
    {
      q: 'How do the real-time video footage updates work for customers?',
      a: 'When your items are transported into our storage facility and placed into their designated section, our team supervisor records a detailed video showing the wrapped and secured condition of your belongings. During your storage period or upon your request, we send updated video footage directly to your WhatsApp so you can see your items without having to travel.',
    },
    {
      q: 'Is this your own storage facility or third-party rented space?',
      a: 'We store your items at our own facility managed directly by Doha Local Movers & Packers. We do not hand off your belongings to unknown third parties, meaning our moving crew and management handle your goods from initial pickup to final return.',
    },
    {
      q: 'What types of household items can be stored?',
      a: 'We store bedroom sets, sofas, dining tables, major home appliances (refrigerators, washers), carpets, boxed kitchenware, home gym equipment, and personal belongings. All furniture is carefully padded with blankets and wrapped in heavy-duty stretch film prior to storage.',
    },
    {
      q: 'Can I store commercial and office furniture?',
      a: 'Yes, we frequently store office workstations, conference tables, executive office suites, archival storage boxes, and retail fixtures during office renovations or commercial relocations across Doha.',
    },
    {
      q: 'What is the minimum or maximum storage duration?',
      a: 'We offer flexible durations ranging from short-term transit storage (a few days or weeks between tenancy handovers) to several months while awaiting villa renovations or overseas assignments.',
    },
    {
      q: 'Do you provide pickup and delivery back to our home?',
      a: 'Yes, our moving team handles the complete door-to-door process. We arrive at your current address, dismantle and pack the items, transport them in our enclosed trucks to our facility, and deliver and reassemble them at your new address whenever you are ready.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-400 font-medium">Storage Services in Qatar</span>
          </nav>

          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Operating Hours: 7:00 AM – 10:00 PM AST</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <Warehouse className="w-3.5 h-3.5" />
                Doha Local Movers & Packers
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
                Secure Storage Services in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Doha & Qatar
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                Your belongings, stored with care. Updates you can see. We offer storage at our own facility, backed by real-time video footage updates sent straight to your WhatsApp so you can check on your items anytime.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Doha Local Movers, I need a storage quote and details on your video footage updates.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Ask About Storage on WhatsApp</span>
                </a>

                <a
                  href="#storage-quote"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Storage Estimate</span>
                </a>
              </div>

              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Our Own Facility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Real-Time Video Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Door-to-Door Handling</span>
                </div>
              </div>
            </div>

            {/* Video Update Feature Spotlight */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Real-Time Video Footage</h3>
                      <p className="text-[11px] text-slate-400">Direct to Customer WhatsApp</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    Active Service
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-700/80 mb-4">
                  <img
                    src="/storage-facility.jpg"
                    alt="Doha Local Movers In-House Storage Facility in Qatar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/80 text-xs text-slate-200 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Camera className="w-3.5 h-3.5 text-orange-400" />
                      Recorded Staging Video Updates
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">WhatsApp Ready</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Instead of wondering how your furniture is placed, our team records video footage showing all your wrapped and blanket-protected items in place, sent directly to your phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Core Features Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Our Own Storage Facility in <span className="text-orange-600">Qatar</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Unlike brokers who forward items to unknown spaces, Doha Local Movers & Packers manages your goods in our own storage facility with dedicated moving personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-orange-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md mb-5">
                <Warehouse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">Our Own Storage Facility</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct oversight from start to finish. Because we operate our own storage facility, the same dedicated crew handles loading, staging, and final delivery back to your property.
              </p>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-orange-300 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-orange-400 flex items-center justify-center shadow-md mb-5">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">Real-Time Video Footage Updates</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Stay informed while your items are in storage. Our supervisors provide clear video walkthroughs of your stored items sent to your WhatsApp, giving you visual confirmation whenever needed.
              </p>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-orange-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md mb-5">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">Household Furniture Storage</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete solutions for beds, wardrobes, plush sofas, dining tables, carpets, and appliances. Items are padded with furniture blankets and wrapped securely to preserve cleanliness.
              </p>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-orange-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-orange-400 flex items-center justify-center shadow-md mb-5">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">Office Furniture & Equipment</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Organized staging for corporate relocations and business transitions. We store modular workstations, conference seating, executive desks, and boxed office inventory.
              </p>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-orange-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md mb-5">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">Storage Support During Relocation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ideal when moving dates between properties do not align. We pick up from your current address, store your goods safely, and deliver to your new home on your move-in day.
              </p>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 hover:border-orange-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-orange-400 flex items-center justify-center shadow-md mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">Storage During Home Renovation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protect your furniture from dust, paint fumes, and construction debris during interior painting, flooring replacement, or kitchen remodeling in Qatar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
              Transparent Logistics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mt-2">
              How Our Storage Service Works
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              A hassle-free 4-step process from initial pickup to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Request & Plan',
                desc: 'Message us on WhatsApp with the items you need stored, your current location in Qatar, and estimated duration.',
              },
              {
                step: '02',
                title: 'Pickup & Wrapping',
                desc: 'Our team arrives with protective moving blankets and stretch film, carefully packing and loading everything into enclosed trucks.',
              },
              {
                step: '03',
                title: 'Staging & Video Update',
                desc: 'Your goods are stored at our own facility. Our supervisor films a walkthrough video of your items and forwards it to your WhatsApp.',
              },
              {
                step: '04',
                title: 'Scheduled Redelivery',
                desc: 'Whenever your new home or office is ready, we schedule delivery, unpack, and reassemble your furniture in the new space.',
              },
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-orange-400 font-heading block mb-3">
                    {s.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Quote Form & Contact */}
      <section id="storage-quote" className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Direct WhatsApp Quote
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
                Request a Storage Space Quote
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Fill in your details below and we will connect with you directly on WhatsApp (+974 50354956) to confirm space availability.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Abdullah Al-Kuwari"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +974 5035 4956"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Storage Category
                  </label>
                  <select
                    value={formData.storageType}
                    onChange={(e) => setFormData({ ...formData, storageType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Household Furniture">Household Furniture</option>
                    <option value="Apartment Full Contents">Apartment Full Contents</option>
                    <option value="Villa Full Contents">Villa Full Contents</option>
                    <option value="Office Furniture & Workstations">Office Furniture & Workstations</option>
                    <option value="Few Bulky Items Only">Few Bulky Items Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Estimated Duration
                  </label>
                  <select
                    value={formData.estimatedDuration}
                    onChange={(e) => setFormData({ ...formData, estimatedDuration: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="1 - 2 Weeks (Short Transit)">1 - 2 Weeks (Short Transit)</option>
                    <option value="1 Month">1 Month</option>
                    <option value="2 - 3 Months">2 - 3 Months</option>
                    <option value="4 - 6 Months">4 - 6 Months</option>
                    <option value="Longer / Flexible">Longer / Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Pickup Area in Qatar
                  </label>
                  <input
                    type="text"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="e.g. The Pearl, Lusail, Al Wakrah"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Key Items or Special Requests (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  placeholder="e.g. King bedroom set, 6 dining chairs, 12 packed cartons..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {formError && (
                <p className="text-xs text-red-600 font-semibold">{formError}</p>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Storage Request on WhatsApp</span>
                </button>

                <a
                  href={`tel:${OFFICIAL_WHATSAPP_NUMBER}`}
                  className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call +974 50354956</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Storage FAQs */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-heading">
              Storage Services FAQ
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers regarding our in-house facility, video updates, and scheduling.
            </p>
          </div>

          <div className="space-y-3.5">
            {storageFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-orange-600 border-orange-300' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Return to Home / Navigation Footer Strip */}
      <div className="py-8 bg-slate-900 text-slate-400 text-center text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-orange-400 hover:underline font-semibold flex items-center gap-1.5">
            ← Back to Doha Local Movers & Packers Homepage
          </Link>
          <span>Doha, Qatar • WhatsApp: +974 50354956</span>
        </div>
      </div>
    </div>
  );
};
