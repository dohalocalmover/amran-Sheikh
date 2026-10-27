/**
 * Pure utility functions for quote validation, WhatsApp link generation,
 * and Qatar business hours calculation.
 */

export interface QuoteFormData {
  name: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  movingDate: string;
  serviceType: string;
  propertyType?: string;
  additionalDetails?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const OFFICIAL_WHATSAPP_NUMBER = '97450354956';
export const OFFICIAL_WHATSAPP_LINK = 'https://wa.me/97450354956';

/**
 * Validates the moving quote enquiry form.
 */
export function validateQuoteRequest(data: QuoteFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  // Clean phone input
  const cleanPhone = (data.phone || '').replace(/[\s\-()+]/g, '');
  if (!cleanPhone || cleanPhone.length < 7 || !/^\d+$/.test(cleanPhone)) {
    errors.phone = 'Please provide a valid phone or WhatsApp number.';
  }

  if (!data.movingFrom || data.movingFrom.trim().length < 2) {
    errors.movingFrom = 'Please specify your current area or pickup location.';
  }

  if (!data.movingTo || data.movingTo.trim().length < 2) {
    errors.movingTo = 'Please specify your destination area in Qatar.';
  }

  if (!data.movingDate || data.movingDate.trim().length === 0) {
    errors.movingDate = 'Please select your preferred moving date.';
  }

  if (!data.serviceType || data.serviceType.trim().length === 0) {
    errors.serviceType = 'Please select the service required.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats a structured WhatsApp message and returns the direct WhatsApp URL.
 */
export function buildWhatsAppQuoteUrl(
  data: QuoteFormData,
  whatsappNumber: string = OFFICIAL_WHATSAPP_NUMBER
): string {
  const lines: string[] = [
    `*Moving Quote Request - Doha Local Movers & Packers*`,
    `----------------------------------------`,
    `👤 *Name:* ${data.name.trim()}`,
    `📱 *WhatsApp:* ${data.phone.trim()}`,
    `📍 *Pickup Area:* ${data.movingFrom.trim()}`,
    `🏁 *Destination Area:* ${data.movingTo.trim()}`,
    `📅 *Moving Date:* ${data.movingDate}`,
    `📦 *Service Required:* ${data.serviceType}`,
  ];

  if (data.propertyType) {
    lines.push(`🏠 *Property Type:* ${data.propertyType}`);
  }

  if (data.additionalDetails && data.additionalDetails.trim().length > 0) {
    lines.push(`📝 *Additional Details:* ${data.additionalDetails.trim()}`);
  }

  lines.push(`----------------------------------------`);
  lines.push(`Please review and let me know the moving quotation & availability. Thank you!`);

  const fullMessage = lines.join('\n');
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
}

/**
 * Business hours in Qatar (UTC+3 / Arabia Standard Time).
 * Operating daily from 07:00 AM to 10:00 PM AST.
 */
export interface BusinessHoursStatus {
  isOpen: boolean;
  qatarTimeString: string;
  statusText: string;
  hoursLabel: string;
}

export function checkQatarBusinessHours(customDate?: Date): BusinessHoursStatus {
  const now = customDate || new Date();
  
  // Calculate Qatar Time (UTC + 3)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const qatarTime = new Date(utc + 3600000 * 3);

  const hours = qatarTime.getHours();
  const minutes = qatarTime.getMinutes();

  // 7 AM (07:00) to 10 PM (22:00)
  const isOpen = hours >= 7 && hours < 22;

  const formattedHours = hours % 12 || 12;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const padMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const qatarTimeString = `${formattedHours}:${padMin} ${ampm} AST (Qatar)`;

  return {
    isOpen,
    qatarTimeString,
    statusText: isOpen
      ? 'Online Now - Fast WhatsApp Reply'
      : 'Currently After-Hours - We reply on WhatsApp at 7:00 AM AST',
    hoursLabel: '7:00 AM - 10:00 PM (Everyday)',
  };
}
