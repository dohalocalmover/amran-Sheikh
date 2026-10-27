import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Clock, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { checkQatarBusinessHours, OFFICIAL_WHATSAPP_LINK, OFFICIAL_WHATSAPP_NUMBER } from '../utils/quote';
import { useLanguage } from '../context/LanguageContext';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionUrl?: string;
  actionText?: string;
}

const QUICK_INQUIRIES = [
  {
    chip: '💰 Moving Prices',
    question: 'How do you determine moving prices in Qatar?',
    answer: 'Moving prices depend on the volume of items (1BHK, 2BHK, or Villa), packing supplies required (bubble wrap, boxes, blankets), and whether carpentry (IKEA dismantling/reassembly) is needed. We offer transparent quotes with zero hidden fees!',
    actionText: 'Get Exact Quote on WhatsApp',
    actionQuery: 'Hello Doha Local Movers, I would like to get a moving price quote for my home in Qatar.',
  },
  {
    chip: '📦 Packing Boxes',
    question: 'Do you bring packing boxes, bubble wrap, and tape?',
    answer: 'Yes! Our moving team arrives fully equipped with heavy-duty corrugated cartons, multi-layer bubble wrap, stretch film, mattress covers, and furniture blankets to protect every item.',
    actionText: 'Ask About Packing on WhatsApp',
    actionQuery: 'Hello, I have questions about your furniture packing supplies and fragile handling.',
  },
  {
    chip: '🛠️ Furniture Dismantling',
    question: 'Do you dismantle and assemble IKEA & bedroom sets?',
    answer: 'Yes! Our experienced carpenters carefully dismantle, label, and safely rebuild wardrobes, king beds, dining tables, and IKEA furniture at your destination.',
    actionText: 'Book Carpentry on WhatsApp',
    actionQuery: 'Hello, I have large furniture/IKEA wardrobes that need dismantling and reassembly.',
  },
  {
    chip: '🏢 Tower Permits (Pearl/Lusail)',
    question: 'Do you handle tower permits for The Pearl or West Bay?',
    answer: 'Yes! We regularly coordinate with building managements across The Pearl-Qatar, Lusail, and West Bay to meet security requirements and reserve service lifts.',
    actionText: 'Coordinate Tower Move on WhatsApp',
    actionQuery: 'Hello, I am planning a move in The Pearl/Lusail and need advice on tower permits.',
  },
  {
    chip: '⚡ Same-Day Move',
    question: 'Can I book an urgent same-day move today?',
    answer: 'Same-day moves are available depending on our daily crew and truck schedules in Doha. Contact us on WhatsApp right away to check today’s availability!',
    actionText: 'Check Availability on WhatsApp',
    actionQuery: 'Hello, do you have an available truck and team for a same-day move today in Doha?',
  },
  {
    chip: '📹 Storage & Video Updates',
    question: 'How do your in-house storage facility and real-time video updates work?',
    answer: 'We store your belongings at our own facility in Qatar. When items enter storage, our supervisor records a clear video walkthrough of your protected items and sends it directly to your WhatsApp, so you can visually verify your belongings anytime!',
    actionText: 'Inquire About Storage on WhatsApp',
    actionQuery: 'Hello Doha Local Movers, I would like to inquire about your in-house storage facility and video footage updates in Qatar.',
  },
];

export const LiveChatWidget: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const businessStatus = checkQatarBusinessHours();

  // Initialize initial greeting based on language
  useEffect(() => {
    const isArabic = language === 'ar';
    const greetingText = businessStatus.isOpen
      ? isArabic
        ? `مرحباً بك في دوحة لوكال لنقل الأثاث والتغليف! 👋 فريقنا متصل الآن (${businessStatus.qatarTimeString}). كيف يمكننا مساعدتك في انتقالك أو تخزين أثاثك اليوم؟`
        : `Welcome to Doha Local Movers & Packers! 👋 We are currently ONLINE in Doha (${businessStatus.qatarTimeString}). How can we assist with your move today?`
      : isArabic
        ? `أهلاً بك في دوحة لوكال! 👋 توقيت قطر الآن (${businessStatus.qatarTimeString}) خارج ساعات العمل. يبدأ فريقنا بالرد في تمام الساعة 7:00 صباحاً بتوقيت الدوحة. يمكنك ترك رسالتك وسنوافيك بالرد فوراً!`
        : `Welcome to Doha Local Movers & Packers! 👋 It is currently after hours in Qatar (${businessStatus.qatarTimeString}). Our team replies first thing at 7:00 AM AST. You can select a quick topic below or message us directly on WhatsApp!`;

    setMessages([
      {
        id: 'msg-1',
        sender: 'bot',
        text: greetingText,
        time: isArabic ? 'الآن' : 'Just now',
      },
    ]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
    }
  }, [isOpen]);

  const handleSelectQuickInquiry = (item: typeof QUICK_INQUIRIES[0]) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: item.question,
      time: 'Just now',
    };

    const botMsg: ChatMessage = {
      id: `bot-${Date.now() + 1}`,
      sender: 'bot',
      text: item.answer,
      time: 'Just now',
      actionText: item.actionText,
      actionUrl: `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(item.actionQuery)}`,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setTimeout(scrollToBottom, 150);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      time: 'Just now',
    };

    setInputText('');

    const botMsg: ChatMessage = {
      id: `bot-${Date.now() + 1}`,
      sender: 'bot',
      text: `Thanks for your inquiry! To get a customized quotation and verify truck scheduling, tap below to forward your message directly to our official WhatsApp support (+974 50354956).`,
      time: 'Just now',
      actionText: 'Forward to WhatsApp Team',
      actionUrl: `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Doha Local Movers, I sent this inquiry on your website live chat: "${userText}"`)}`,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setTimeout(scrollToBottom, 150);
  };

  return (
    <div className={`fixed bottom-20 z-50 ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} sm:bottom-6`}>
      {/* Launcher Bubble */}
      {!isOpen && (
        <div className="relative">
          {hasUnread && (
            <div className={`absolute -top-10 ${isRTL ? 'left-0' : 'right-0'} bg-slate-900 text-white text-xs px-3 py-1.5 rounded-xl shadow-xl border border-slate-700 whitespace-nowrap hidden sm:flex items-center gap-1.5 animate-bounce`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{t('needMovingHelp')}</span>
            </div>
          )}
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-white ring-4 ring-orange-500/20"
            aria-label="Open Moving Assistant Chat"
          >
            <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
            {hasUnread && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
            )}
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[390px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/assets/aistudio/file_0000000093188207b1a2d13ffb752130_f62f0274.png"
                  alt="Doha Local Movers Logo"
                  className="w-9 h-9 rounded-full object-cover bg-white p-0.5 border border-slate-700"
                />
                <span
                  className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-900 ${
                    businessStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-400'
                  }`}
                />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                  Doha Movers Concierge
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                </h3>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  {businessStatus.statusText}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Chat Window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Business Hours Bar */}
          <div className="bg-slate-100 px-3.5 py-1.5 text-[11px] text-slate-600 border-b border-slate-200 flex items-center justify-between">
            <span>Operating Hours: 7:00 AM – 10:00 PM AST</span>
            <a
              href={OFFICIAL_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-semibold flex items-center gap-1 hover:underline"
            >
              WhatsApp (+974 50354956)
            </a>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-orange-500 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.actionUrl && (
                    <a
                      href={msg.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{msg.actionText || 'Continue on WhatsApp'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Topics Pills Bar */}
          <div className="p-2.5 bg-slate-100/90 border-t border-slate-200">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 px-1 flex items-center justify-between">
              <span>Quick Relocation Topics:</span>
              <span className="text-orange-600 font-semibold">1-Tap Answer</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {QUICK_INQUIRIES.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectQuickInquiry(item)}
                  className="whitespace-nowrap text-xs bg-white hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 text-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs font-medium cursor-pointer transition-colors shrink-0"
                >
                  {item.chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your moving question..."
                className="flex-1 bg-slate-100 text-slate-900 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl transition-colors cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 px-1">
              <span>Instant WhatsApp connection</span>
              <a
                href={OFFICIAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-semibold hover:underline"
              >
                +974 50354956
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
