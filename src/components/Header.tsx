import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Close, Menu } from "./Icons";
import { Logo } from "./Logo";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
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

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="button button--small button--header" href="#contact">
              Start a project
              <ArrowUpRight size={16} />
            </a>
            <button
              ref={toggleRef}
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <Close size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 35}ms` }}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
          <a
            className="button button--primary mobile-menu__cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Start a project
            <ArrowUpRight size={17} />
          </a>
          <p className="mobile-menu__note">Professional websites. Built for growing businesses.</p>
        </div>
      )}
    </>
  );
}
