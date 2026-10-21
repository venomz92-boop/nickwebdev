/**
 * Nick's WebDev — site configuration
 * ------------------------------------------------------------------
 * Enquiries go to WhatsApp. The number below was supplied directly and
 * is used to build every WhatsApp link on the site, including the
 * pre-filled project enquiry message.
 *
 * whatsappNumber: international format, digits only.
 * whatsappDisplay: the same number, formatted for display.
 * email: optional. Leave blank to hide email links.
 */
export const siteConfig = {
  name: "Nick's WebDev",
  tagline: "Professional websites for growing businesses.",
  email: "",
  whatsappNumber: "60165833713",
  whatsappDisplay: "+60 16-583 3713",
  whatsappMessage: "Hi Nick, I'd like to discuss a website project.",
};

export function buildWhatsAppHref(message: string): string | null {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const whatsappHref = buildWhatsAppHref(siteConfig.whatsappMessage);

export const contactEmailHref = siteConfig.email
  ? `mailto:${siteConfig.email}`
  : null;

export const packageOptions = [
  "Landing Page – RM399",
  "Starter Website – RM799",
  "Business Website – RM1,299",
  "Not Sure Yet",
] as const;

export type PackageOption = (typeof packageOptions)[number];
