import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const TRANSLATIONS: Translations = {
  // Brand
  brandName: { en: 'DOHA LOCAL', ar: 'دوحة لوكال' },
  moversAndPackers: { en: 'Movers & Packers', ar: 'نقل وتغليف الأثاث' },
  companyFullName: { en: 'Doha Local Movers & Packers', ar: 'دوحة لوكال لنقل الأثاث والتغليف' },

  // Top Bar & Navigation
  qatarLocalTime: { en: 'Qatar Local Time:', ar: 'توقيت قطر المحلي:' },
  workingHours: { en: 'Hours: 7:00 AM – 10:00 PM (Daily)', ar: 'ساعات العمل: 7:00 ص – 10:00 م (يومياً)' },
  navServices: { en: 'Services', ar: 'خدماتنا' },
  navChecklists: { en: 'Checklists', ar: 'قوائم الانتقال' },
  navServiceAreas: { en: 'Service Areas', ar: 'مناطق الخدمة' },
  navStorageServices: { en: 'Storage Services', ar: 'خدمات التخزين' },
  navBlog: { en: 'Blog', ar: 'المدونة' },
  navFaq: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  getFreeQuote: { en: 'Get Free Quote', ar: 'احصل على عرض سعر' },
  whatsappChat: { en: 'WhatsApp Chat', ar: 'محادثة واتساب' },
  videoUpdatesBadge: { en: 'Video Updates', ar: 'فيديو للمعاينة' },

  // Hero Section
  heroKicker: { en: 'Serving Doha, Lusail, The Pearl & Across Qatar', ar: 'نخدم الدوحة، لوسيل، اللؤلؤة وكافة مدن قطر' },
  heroTitlePrefix: { en: 'Reliable Movers & Packers in', ar: 'شركة موثوقة لنقل وتغليف الأثاث في' },
  heroTitleSuffix: { en: 'Doha, Qatar', ar: 'الدوحة، قطر' },
  heroDescription: {
    en: 'Moving home or office? We help make your move easier with professional packing, careful furniture handling, transportation, and storage solutions.',
    ar: 'هل تنتقل لمنزل أو مكتب جديد؟ نوفر تجربة انتقال سلسة ومريحة مع خدمات التغليف الاحترافي، والتعامل الحذر مع الأثاث، والسيارات المغلقة، وحلول التخزين الآمن.',
  },
  btnGetQuote: { en: 'Get a Free Moving Quote', ar: 'طلب عرض سعر مجاني' },
  btnChatWhatsApp: { en: 'Chat on WhatsApp', ar: 'محادثة عبر واتساب' },
  carefulHandling: { en: 'Careful Handling', ar: 'تعامل حذر واحترافي' },
  carefulHandlingDesc: { en: 'Protective padding & wrap', ar: 'تغليف نايلون وبطانيات حماية' },
  punctualCrew: { en: 'Punctual Crew', ar: 'التزام تام بالمواعيد' },
  punctualCrewDesc: { en: 'On-time arrival in Qatar', ar: 'وصول دقيق في الوقت المحدد' },
  skilledCarpenters: { en: 'Skilled Carpenters', ar: 'نجارون متخصصون' },
  skilledCarpentersDesc: { en: 'Dismantling & reassembly', ar: 'فك وتركيب غرف النوم والأثاث' },
  enclosedTrucks: { en: 'Enclosed Moving Trucks', ar: 'شاحنات نقل مغلقة ونظيفة' },
  enclosedTrucksDesc: { en: 'Clean, carpet-padded, heat-shielded', ar: 'معزولة عن حرارة وغبار صيف قطر' },
  qatarFleet: { en: 'Qatar-Based Service Fleet', ar: 'أسطول مجهز في دولة قطر' },
  directCoordination: { en: 'Direct WhatsApp Coordination', ar: 'تنسيق مباشر وسريع عبر واتساب' },
  truckReady: { en: 'Ready', ar: 'جاهز' },
  expertsBadge: { en: 'Doha Local Moving Experts', ar: 'خبراء نقل الأثاث في الدوحة' },

  // Storage Section
  storageKicker: { en: 'Secure Storage Services in Qatar', ar: 'خدمات التخزين الآمن في قطر' },
  storageHeadline: { en: 'Your Belongings, Stored With Care.', ar: 'مقتنياتك في أمان تام.' },
  storageHeadlineHighlight: { en: 'Updates You Can See.', ar: 'تحديثات بالصوت والصورة.' },
  storageDescription: {
    en: 'Need storage during your move, renovation, or office relocation? Doha Local Movers & Packers offers storage at our own facility. We also provide customers with real-time video footage updates of their stored belongings, helping them stay informed while their items are in storage.',
    ar: 'هل تحتاج إلى مساحة تخزين أثناء الانتقال أو التجديد أو نقل مكتبك؟ توفر دوحة لوكال لنقل الأثاث مساحات تخزين في مستودعنا الخاص. كما نوفر لعملائنا مقاطع فيديو دورية لمعاينة أغراضهم المخزنة للاطمئنان عليها طوال فترة التخزين.',
  },
  ourOwnFacility: { en: 'Our Own Storage Facility', ar: 'مستودعنا الخاص' },
  ourOwnFacilityDesc: {
    en: 'Managed directly by our team in Qatar, ensuring your household or business items remain secure in our care.',
    ar: 'مستودع مدار مباشرة من قبل فريقنا في قطر لضمان بقاء أثاث منزلك أو شركتك في أمان تام.',
  },
  videoUpdatesTitle: { en: 'Real-Time Video Footage Updates for Customers', ar: 'تحديثات مصورة بالفيديو للعملاء' },
  videoUpdatesDesc: {
    en: 'We record and send video footage updates of your stored belongings directly to your WhatsApp, helping you stay informed while items are in storage.',
    ar: 'نقوم بتسجيل وإرسال مقاطع فيديو لأثاثك ومقتنياتك المخزنة مباشرة عبر واتساب لتكون مطمئناً طوال فترة التخزين.',
  },
  householdStorage: { en: 'Household Furniture Storage', ar: 'تخزين أثاث المنازل والفلل' },
  householdStorageDesc: {
    en: 'Safe storage for bedroom suites, sofas, dining sets, appliances, and packed cartons with protective blanket wrapping.',
    ar: 'تخزين آمن لغرف النوم، الكنب، طاولات الطعام، والأجهزة الكهربائية مع التغليف المحكم.',
  },
  officeStorage: { en: 'Office Furniture & Equipment Storage', ar: 'تخزين أثاث ومعدات المكاتب' },
  officeStorageDesc: {
    en: 'Storage for workstations, executive desks, conference chairs, archived documents, and office fixtures.',
    ar: 'تخزين مكاتب الموظفين، الطاولات، كراسي الاجتماعات، الملفات المؤرشفة ومستلزمات الشركات.',
  },
  relocationStorage: { en: 'Storage Support During Relocation', ar: 'دعم التخزين المؤقت أثناء الانتقال' },
  relocationStorageDesc: {
    en: 'Ideal when there is a waiting period between tenancy contracts, villa handover, or ongoing interior renovations.',
    ar: 'حل مثالي عند وجود فترة انتظار بين عقود الإيجار، تسليم الفلل، أو أعمال الديكور والصيانة.',
  },
  askStorageWhatsApp: { en: 'Ask About Storage on WhatsApp', ar: 'استفسر عن التخزين عبر واتساب' },
  dedicatedStoragePage: { en: 'Dedicated Page', ar: 'صفحة التخزين المخصصة' },
  inHouseFacilityPill: { en: 'In-House Facility', ar: 'مستودعنا الخاص' },
  visualPeaceOfMind: { en: 'Visual Peace of Mind', ar: 'راحة بال ومعاينة مرئية' },
  residentialTag: { en: 'Residential', ar: 'سكني' },
  commercialTag: { en: 'Commercial', ar: 'تجاري' },
  flexibleStagingTag: { en: 'Flexible Staging', ar: 'تخزين مرن' },

  // Moving Resources / Checklists
  resourcesKicker: { en: 'Qatar Moving Resources', ar: 'دليل الانتقال في قطر' },
  resourcesTitle: { en: 'Interactive Moving Checklists', ar: 'قوائم تفاعلية لتنظيم الانتقال' },
  resourcesDesc: {
    en: 'Step-by-step preparation checklists tailored for residential and corporate relocations in Qatar.',
    ar: 'قوائم مراجعة مجهزة خطوة بخطوة لمساعدتك في التخطيط للانتقال السكني أو المكتبي في قطر دون نسيان أي تفصيل.',
  },
  homeChecklistTab: { en: 'Home Moving Checklist', ar: 'قائمة انتقال المنازل' },
  officeChecklistTab: { en: 'Office Relocation Checklist', ar: 'قائمة انتقال المكاتب' },
  printChecklistBtn: { en: 'Print / Save Checklist', ar: 'طباعة / حفظ القائمة' },
  progressLabel: { en: 'Completed Tasks', ar: 'المهام المنجزة' },

  // Interactive Map
  mapKicker: { en: 'Coverage Across Qatar', ar: 'تغطية واسعة في قطر' },
  mapTitle: { en: 'Our Service Areas in Qatar', ar: 'مناطق خدماتنا في قطر' },
  mapDesc: {
    en: 'We operate covered moving trucks and experienced crews across all key residential and commercial districts.',
    ar: 'أسطول شاحناتنا وفرق عملنا تغطي يومياً كافة المناطق السكنية والتجارية الرئيسية في قطر.',
  },

  // Quote Form
  quoteFormKicker: { en: 'Fast & Transparent Pricing', ar: 'تسعير سريع وبدون رسوم خفية' },
  quoteFormTitle: { en: 'Get Your Free Moving Quote', ar: 'احصل على عرض سعر مجاني فوري' },
  quoteFormDesc: {
    en: 'Fill in your details below or send us an inventory photo directly on WhatsApp for an immediate quotation.',
    ar: 'أدخل تفاصيل انتقالك أو راسلنا عبر واتساب مع صور الأثاث لتحديد السعر بدقة وبشكل فوري.',
  },
  formNameLabel: { en: 'Full Name', ar: 'الاسم الكامل' },
  formPhoneLabel: { en: 'WhatsApp / Phone Number', ar: 'رقم الهاتف أو الواتساب' },
  formFromLabel: { en: 'Moving From (Pickup District)', ar: 'منطقة الاستلام (من أين تنتقل؟)' },
  formToLabel: { en: 'Moving To (Destination District)', ar: 'منطقة التسليم (إلى أين تنتقل؟)' },
  formDateLabel: { en: 'Moving Date', ar: 'تاريخ الانتقال' },
  formServiceLabel: { en: 'Service Required', ar: 'نوع الخدمة المطلوبة' },
  formPropertyLabel: { en: 'Property Type', ar: 'نوع العقار' },
  formDetailsLabel: { en: 'Additional Details (Optional)', ar: 'ملاحظات إضافية أو تفاصيل الأثاث' },
  formSubmitBtn: { en: 'Send Moving Request on WhatsApp', ar: 'إرسال طلب التسعير عبر واتساب' },

  // FAQ
  faqKicker: { en: 'Common Questions', ar: 'أسئلة يتكرر طرحها' },
  faqTitle: { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },
  faqDesc: {
    en: 'Everything you need to know about our moving process, permits, and storage facilities in Qatar.',
    ar: 'كل ما تحتاج لمعرفته حول خطوات الانتقال، تصاريح الأبراج، وخدمات التخزين في قطر.',
  },

  // Footer & Mobile Bar
  footerDesc: {
    en: 'Reliable movers and packers in Doha, Qatar. Professional home, villa, apartment, and office relocation, furniture handling, and secure storage.',
    ar: 'شركة نقل وتغليف أثاث احترافية في الدوحة، قطر. نقل منازل وفلل وشقق ومكاتب، فك وتركيب الأثاث، ومستودع تخزين مجهز.',
  },
  allRightsReserved: { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  callNowBtn: { en: 'Call Now', ar: 'اتصال هاتفي' },
  whatsappQuoteBtn: { en: 'WhatsApp Quote', ar: 'تسعير واتساب' },
  quickFormBtn: { en: 'Quick Form', ar: 'نموذج التسعير' },
  chatConciergeGreeting: {
    en: 'Hello! How can we assist with your move or storage in Qatar today?',
    ar: 'مرحباً بك! كيف يمكننا مساعدتك في نقل الأثاث أو التخزين في قطر اليوم؟',
  },

  // Blog & Related Articles
  blogKicker: { en: 'Doha Moving & Storage Insights', ar: 'أدلة وإرشادات النقل والتخزين' },
  blogMainTitle: { en: 'Qatar Relocation & Storage Expert Guides', ar: 'دليل خبراء الانتقال والتخزين في قطر' },
  blogMainDesc: {
    en: 'Practical advice, checklists, and packing tips written for homeowners, tenants, and businesses relocating in Doha and across Qatar.',
    ar: 'نصائح عملية وقوائم مراجعة مخصصة للعائلات والشركات أثناء الانتقال والتخزين في الدوحة ومختلف مناطق قطر.',
  },
  relatedArticlesBadge: { en: 'Related Articles', ar: 'مقالات ذات صلة' },
  suggestedReadingTitle: { en: 'Suggested Reading for Your Move', ar: 'قراءات مقترحة لخطتك' },
  viewAllGuidesLink: { en: 'View all 12 guides', ar: 'عرض جميع الأدلة الـ 12' },
  readFullGuideBtn: { en: 'Read Full Guide', ar: 'قراءة الدليل' },
  searchGuidesPlaceholder: {
    en: 'Search guides (e.g., permits, storage, villa moving, checklist)...',
    ar: 'ابحث في المقالات (مثل: تصاريح، تخزين، نقل فيلا، قائمة مراجعة)...',
  },
  allGuidesCategory: { en: 'All', ar: 'الكل' },
  needMovingHelp: { en: 'Need moving help? Ask us!', ar: 'تحتاج مساعدة في النقل؟ اسألنا!' },
};

interface LanguageContextType {
  language: Language;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'doha_movers_preferred_lang';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === 'en' || saved === 'ar') return saved;
    }
    return 'en';
  });

  const isRTL = language === 'ar';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [language, isRTL]);

  const t = (key: string, fallback?: string): string => {
    const entry = TRANSLATIONS[key];
    if (entry && entry[language]) {
      return entry[language];
    }
    if (fallback) return fallback;
    if (entry && entry.en) return entry.en;
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, isRTL, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
