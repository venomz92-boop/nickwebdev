import { useI18n } from "../i18n";
import { ArrowUpRight, Check } from "./Icons";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroLaptop } from "./HeroLaptop";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroBackdrop />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>

          <h1
            className="hero__title"
            id="hero-title"
            aria-label={t.hero.titleLabel}
          >
            <span aria-hidden="true">{t.hero.titleLead}</span>
            <span className="hero__title-accent" aria-hidden="true">
              {t.hero.titleAccent}
            </span>
            <span aria-hidden="true">{t.hero.titleMid}</span>
            <span aria-hidden="true">{t.hero.titleEnd}</span>
          </h1>

          <p className="hero__lede">{t.hero.lede}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              {t.hero.primaryCta}
              <ArrowUpRight size={18} />
            </a>
            <a className="button button--secondary" href="#portfolio">
              {t.hero.secondaryCta}
            </a>
          </div>

          <p className="hero__note">
            <Check size={14} />
            {t.hero.note}
          </p>
        </div>

        <div className="hero__visual">
          <HeroLaptop label={t.hero.deviceLabel} />
        </div>
      </div>
    </section>
  );
}
