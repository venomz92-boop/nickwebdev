import { websitePackages, type PackageOption } from "../config";
import { useI18n } from "../i18n";
import { ArrowUpRight, Check, Clock } from "./Icons";
import { Reveal } from "./Reveal";

type PricingProps = {
  onSelectPackage: (packageOption: PackageOption) => void;
};

export function Pricing({ onSelectPackage }: PricingProps) {
  const { t } = useI18n();
  const standardPackages = websitePackages.filter((item) => item.id !== "custom");
  const customPackage = websitePackages.find((item) => item.id === "custom");

  return (
    <section className="section pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="pricing__backdrop" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-head section-head--split section-head--pricing">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              {t.pricing.eyebrow}
            </p>
            <h2 className="section-title" id="pricing-title">
              {t.pricing.titleLead}{" "}
              <span className="text-gradient">{t.pricing.titleAccent}</span>
            </h2>
          </div>
          <p className="section-lede">{t.pricing.lede}</p>
        </Reveal>

        <div className="pricing__currency">
          <span>{t.pricing.currencyLabel}</span>
          <strong>{t.pricing.currencyValue}</strong>
        </div>

        <div className="pricing-grid">
          {standardPackages.map((item, index) => {
            const copy = t.pricing.packages[item.id];

            return (
              <Reveal
                className={`pricing-card${item.featured ? " pricing-card--featured" : ""}${item.premium ? " pricing-card--premium" : ""}`}
                key={item.id}
                delay={index * 80}
                as="article"
              >
                <span
                  className={`pricing-card__badge${item.premium ? " pricing-card__badge--premium" : ""}`}
                >
                  {copy.badge}
                </span>
                <div className="pricing-card__top">
                  <span className="pricing-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pricing-card__name">{copy.name}</h3>
                </div>
                <div className="pricing-card__price">
                  <span className="pricing-card__currency">RM</span>
                  <span className="pricing-card__amount">
                    {item.price.replace("RM", "")}
                  </span>
                </div>
                <p className="pricing-card__description">{copy.description}</p>

                <div className="pricing-card__divider" />

                <p className="pricing-card__includes-label">
                  {t.pricing.includesLabel}
                </p>
                <ul className="pricing-card__list">
                  {copy.includes.map((feature) => (
                    <li key={feature}>
                      <span className="pricing-card__check">
                        <Check size={12} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pricing-card__delivery">
                  <Clock size={16} />
                  <span>
                    <strong>{t.pricing.deliveryLabel}</strong>
                    {copy.delivery}
                  </span>
                </div>

                <button
                  className="pricing-card__cta"
                  type="button"
                  onClick={() => onSelectPackage(item.id)}
                >
                  {copy.cta}
                  <ArrowUpRight size={17} />
                </button>
              </Reveal>
            );
          })}

          {customPackage && (
            <Reveal className="pricing-custom" delay={standardPackages.length * 80}>
              <div className="pricing-custom__copy">
                <div className="pricing-custom__heading">
                  <span className="pricing-custom__badge">
                    {t.pricing.packages.custom.badge}
                  </span>
                  <h3>{t.pricing.packages.custom.name}</h3>
                </div>
                <p className="pricing-custom__description">
                  {t.pricing.packages.custom.description}
                </p>
                <ul className="pricing-custom__list">
                  {t.pricing.packages.custom.includes.map((feature) => (
                    <li key={feature}>
                      <span className="pricing-card__check">
                        <Check size={12} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-custom__aside">
                <div className="pricing-custom__price">
                  <span>{t.pricing.fromLabel}</span>
                  <strong>{customPackage.price}</strong>
                </div>

                <div className="pricing-card__delivery pricing-custom__delivery">
                  <Clock size={16} />
                  <span>
                    <strong>{t.pricing.deliveryLabel}</strong>
                    {t.pricing.packages.custom.delivery}
                  </span>
                </div>

                <button
                  className="pricing-card__cta pricing-custom__cta"
                  type="button"
                  onClick={() => onSelectPackage("custom")}
                >
                  {t.pricing.packages.custom.cta}
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal className="pricing-rounds" delay={80}>
          <span className="pricing-rounds__label">{t.pricing.rounds.label}</span>
          <div>
            <h3>{t.pricing.rounds.title}</h3>
            <p>{t.pricing.rounds.body}</p>
          </div>
        </Reveal>

        <Reveal className="pricing-terms">
          <div className="pricing-terms__intro">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              {t.pricing.terms.eyebrow}
            </p>
            <h3>{t.pricing.terms.title}</h3>
            <p>{t.pricing.terms.lede}</p>
          </div>
          <ul className="pricing-terms__list">
            {t.pricing.terms.items.map((term) => (
              <li key={term}>
                <span aria-hidden="true" />
                {term}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
