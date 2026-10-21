import { contactEmailHref, siteConfig, whatsappHref } from "../config";
import { ArrowUpRight, Mail, WhatsApp } from "./Icons";
import { Logo } from "./Logo";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo compact />
            <p>{siteConfig.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} Nick's WebDev. All rights reserved.
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
                WhatsApp
              </a>
            )}
            {contactEmailHref && (
              <a href={contactEmailHref}>
                <Mail size={14} />
                Email
              </a>
            )}
          </div>

          <a className="footer__top-link" href="#top">
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
