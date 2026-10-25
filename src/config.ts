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
 *
 * Anything a visitor reads lives in src/i18n (one dictionary per
 * language), including the WhatsApp greeting, so this file only holds
 * the numbers and the package structure.
 */
export const siteConfig = {
  name: "Nick's WebDev",
  email: "",
  whatsappNumber: "60165833713",
  whatsappDisplay: "+60 16-583 3713",
};

export function buildWhatsAppHref(message: string): string | null {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const contactEmailHref = siteConfig.email
  ? `mailto:${siteConfig.email}`
  : null;

/**
 * Website packages, in the order they are shown on the page.
 *
 * `id` is a stable key shared by the pricing cards and the enquiry form,
 * so it never changes with the language. Names, descriptions and features
 * come from the translation dictionaries, keyed by this id.
 */
export type WebsitePackageId = "simple" | "business" | "plus" | "custom";

export const websitePackages: ReadonlyArray<{
  id: WebsitePackageId;
  price: string;
  originalPrice?: string;
  featured?: boolean;
  premium?: boolean;
}> = [
  { id: "simple", price: "RM399", originalPrice: "RM899" },
  { id: "business", price: "RM799", originalPrice: "RM1,599", featured: true },
  { id: "plus", price: "RM1,299", originalPrice: "RM2,499", premium: true },
  { id: "custom", price: "RM2,499", originalPrice: "RM4,999" },
];

/** Package choices offered in the enquiry form, including "not sure yet". */
export type PackageOption = WebsitePackageId | "unsure";

export const packageOptions: readonly PackageOption[] = [
  "simple",
  "business",
  "plus",
  "custom",
  "unsure",
];

export const defaultPackageOption: PackageOption = "unsure";

export function isPackageOption(value: string): value is PackageOption {
  return packageOptions.includes(value as PackageOption);
}
