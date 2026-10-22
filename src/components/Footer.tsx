import { buildWhatsAppHref, contactEmailHref } from "../config";
import { useI18n } from "../i18n";
import { ArrowUpRight, Mail, WhatsApp } from "./Icons";
import { Logo } from "./Logo";

const footerNavItems = [
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "portfolio", href: "#portfolio" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
] as const;

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const whatsappHref = buildWhatsAppHref(t.contact.enquiry.greeting);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo compact />
            <p>{t.footer.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label={t.nav.footer}>
            {footerNavItems.map((link) => (
              <a key={link.href} href={link.href}>
                {t.nav.items[link.key]}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            {t.footer.copyright.replace("{year}", String(year))}
          </p>

          <div className="footer__links">
            <a
              href="https://kundasanghomestay.my"
              target="_blank"
              rel="noopener noreferrer"
            >
              KundasangHomestay.my
              <ArrowUpRight size={13} />
            </a>
            {whatsappHref && (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsApp size={14} />
                {t.footer.whatsapp}
              </a>
            )}
            {contactEmailHref && (
              <a href={contactEmailHref}>
                <Mail size={14} />
                {t.footer.email}
              </a>
            )}
          </div>

          <a className="footer__top-link" href="#top">
            {t.common.backToTop}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
