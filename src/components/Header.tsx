import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n";
import { ArrowUpRight, Close, Menu } from "./Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

const navItems = [
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "portfolio", href: "#portfolio" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 1040) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.body.classList.add("menu-open");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const firstLink = document.querySelector<HTMLElement>(".mobile-menu__nav a");
    window.requestAnimationFrame(() => firstLink?.focus());

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("menu-open");
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <Logo />

          <nav className="desktop-nav" aria-label={t.nav.primary}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {t.nav.items[item.key]}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <LanguageSwitcher />
            <a className="button button--small button--header" href="#contact">
              {t.header.cta}
              <ArrowUpRight size={16} />
            </a>
            <button
              ref={toggleRef}
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <Close size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <nav className="mobile-menu__nav" aria-label={t.nav.mobile}>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 35}ms` }}
              >
                <span>{t.nav.items[item.key]}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
          <a
            className="button button--primary mobile-menu__cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            {t.header.cta}
            <ArrowUpRight size={17} />
          </a>
          <p className="mobile-menu__note">{t.header.note}</p>
        </div>
      )}
    </>
  );
}
