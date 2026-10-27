import React, { useState } from 'react';
import {
  ClipboardCheck,
  Home,
  Briefcase,
  Printer,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK, OFFICIAL_WHATSAPP_NUMBER } from '../utils/quote';

interface ChecklistItem {
  id: string;
  task: string;
  tip?: string;
}

interface ChecklistCategory {
  phase: string;
  timeframe: string;
  items: ChecklistItem[];
}

const HOME_CHECKLIST: ChecklistCategory[] = [
  {
    phase: 'Phase 1: 2 to 3 Weeks Out',
    timeframe: 'Early Planning',
    items: [
      { id: 'h1', task: 'Book your moving date with Doha Local Movers (+974 50354956) to secure your preferred slot.', tip: 'End-of-month and weekend dates fill up fast across Doha.' },
      { id: 'h2', task: 'Request a Move-Out NOC from building management (required in The Pearl, Lusail & West Bay).', tip: 'Most tower offices require 48 hours to issue elevator permits.' },
      { id: 'h3', task: 'Declutter room-by-room; donate or sell items you do not wish to transport.', tip: 'Reduces truck volume and packing time.' },
      { id: 'h4', task: 'Segregate personal documents (passports, Qatar IDs, leases, jewelry) to keep with you personally.', tip: 'Never pack high-value passports or cash in moving cartons.' },
    ],
  },
  {
    phase: 'Phase 2: 3 to 5 Days Out',
    timeframe: 'Final Countdown',
    items: [
      { id: 'h5', task: 'Confirm service lift booking and underground loading dock height clearance with security.', tip: 'Ensure building security has your truck registration if needed.' },
      { id: 'h6', task: 'Defrost, empty, and dry your refrigerator and deep freezer 24 hours prior to moving.', tip: 'Prevents water leakage onto other items during transit.' },
      { id: 'h7', task: 'Pack a 2-day "Essentials Box" with toiletries, chargers, change of clothes, and medications.', tip: 'Keep this easily accessible in your personal vehicle.' },
      { id: 'h8', task: 'Identify any fragile artwork, mirrors, or oversized furniture for special packing attention.', tip: 'Point these out to our supervisor on arrival.' },
    ],
  },
  {
    phase: 'Phase 3: Moving Day & Arrival',
    timeframe: 'Execution & Setup',
    items: [
      { id: 'h9', task: 'Conduct a morning walkthrough with the Doha Movers supervisor to review room labels.', tip: 'Our team places colored tags on boxes corresponding to destination rooms.' },
      { id: 'h10', task: 'Check all closets, kitchen cabinets, and balcony storage areas before final truck departure.', tip: 'Ensures nothing is left behind.' },
      { id: 'h11', task: 'Guide carpenters on bed and wardrobe positioning in the new bedrooms.', tip: 'Our carpenters reassemble, level, and stabilize all major units.' },
      { id: 'h12', task: 'Inspect high-value items upon unloading and verify full inventory completion.', tip: 'Confirm satisfactory placement before concluding.' },
    ],
  },
];

const OFFICE_CHECKLIST: ChecklistCategory[] = [
  {
    phase: 'Phase 1: Pre-Move Coordination',
    timeframe: '3 to 4 Weeks Out',
    items: [
      { id: 'o1', task: 'Designate department moving coordinators and establish workstation numbering system.', tip: 'Every employee workstation receives a unique tag number.' },
      { id: 'o2', task: 'Coordinate building management approval for weekend or after-hours commercial moves.', tip: 'Minimizes downtime for your business operations.' },
      { id: 'o3', task: 'Back up all server data, critical network storage, and cloud drives prior to disconnection.', tip: 'Ensure complete IT recovery protocols.' },
    ],
  },
  {
    phase: 'Phase 2: Packing & IT Equipment',
    timeframe: '1 Week Out',
    items: [
      { id: 'o4', task: 'Distribute moving crates and numbered tags for employees personal desk items.', tip: 'Crates prevent box collapse and keep files orderly.' },
      { id: 'o5', task: 'Label monitors, docking stations, and peripherals with employee names and desk numbers.', tip: 'Cables should be bagged and taped to the corresponding monitor.' },
      { id: 'o6', task: 'Identify executive conference tables and modular partitions requiring carpentry dismantling.', tip: 'Our team brings specialized tools for commercial cubicle furniture.' },
    ],
  },
  {
    phase: 'Phase 3: Move-In & Workspace Setup',
    timeframe: 'Move Weekend',
    items: [
      { id: 'o7', task: 'Provide new office floor plan map at entrance and elevator lobbies for quick routing.', tip: 'Movers route each numbered crate directly to the assigned cubicle.' },
      { id: 'o8', task: 'Verify electrical and network connectivity before re-installing workstations.', tip: 'Ensures immediate staff productivity on Sunday morning.' },
      { id: 'o9', task: 'Collect all packaging cartons and stretch film debris for eco-friendly clearing.', tip: 'Our team cleans up moving materials upon request.' },
    ],
  },
];

export const MovingResourcesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'office'>('home');
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const currentList = activeTab === 'home' ? HOME_CHECKLIST : OFFICE_CHECKLIST;
  const allItems = currentList.flatMap((cat) => cat.items);
  const totalCount = allItems.length;
  const completedCount = allItems.filter((item) => completedItems[item.id]).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const resetChecklist = () => {
    setCompletedItems({});
  };

  return (
    <section id="moving-resources" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
            <ClipboardCheck className="w-3.5 h-3.5" />
            Moving Resources & Planning Tools
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Interactive Qatar <span className="text-orange-600">Moving Checklists</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Stay organized and stress-free. Track your progress with our step-by-step relocation checklists tailored for homes, apartments, and corporate offices across Qatar.
          </p>

          {/* Toggle between Home and Office */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => {
                setActiveTab('home');
                resetChecklist();
              }}
              className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              <Home className="w-4 h-4 text-orange-400" />
              <span>Home Moving Checklist</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('office');
                resetChecklist();
              }}
              className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'office'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span>Office Relocation Checklist</span>
            </button>
          </div>
        </div>

        {/* Progress & Tools Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {activeTab === 'home' ? 'Residential Moving Progress' : 'Corporate Office Progress'}
              </span>
              <div className="flex items-center gap-3 mt-1">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {completedCount} of {totalCount} Tasks Done
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 font-bold text-xs">
                  {progressPercent}% Complete
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={handlePrint}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Checklist</span>
              </button>

              <button
                onClick={resetChecklist}
                className="px-3 py-2.5 text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Interactive Progress Bar */}
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mt-6">
            <div
              className="bg-gradient-to-r from-orange-500 to-amber-400 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Checklist Content by Phase */}
        <div className="space-y-6">
          {currentList.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-orange-600 font-bold text-xs flex items-center justify-center">
                    0{catIdx + 1}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {category.phase}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {category.timeframe}
                </span>
              </div>

              <div className="space-y-3">
                {category.items.map((item) => {
                  const isChecked = !!completedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                        isChecked
                          ? 'bg-emerald-50/50 border-emerald-300'
                          : 'bg-slate-50/60 border-slate-200 hover:border-orange-200 hover:bg-orange-50/30'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="w-5 h-5 mt-0.5 rounded text-orange-600 focus:ring-orange-500 cursor-pointer accent-orange-600 shrink-0"
                      />
                      <div className="flex-1">
                        <p
                          className={`text-sm font-semibold leading-snug ${
                            isChecked ? 'line-through text-slate-400' : 'text-slate-800'
                          }`}
                        >
                          {item.task}
                        </p>
                        {item.tip && (
                          <p className="text-xs text-slate-500 mt-1 font-normal flex items-center gap-1">
                            <span className="text-orange-500 font-bold">💡 Qatar Tip:</span>
                            {item.tip}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Assistance Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold font-heading text-white">
              Prefer a 100% Hands-Off Moving Experience?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our professional team supplies all boxes, wraps furniture, and handles carpentry dismantling so you don't lift a finger.
            </p>
          </div>

          <a
            href={OFFICIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book Moving & Packing on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
