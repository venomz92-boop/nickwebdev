import type { PackageOption } from "../config";
import { ArrowUpRight, Check, Clock } from "./Icons";
import { Reveal } from "./Reveal";

type PricingPackage = {
  number: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
  delivery: string;
  cta: string;
  option: PackageOption;
  featured?: boolean;
  premium?: boolean;
  badge?: string;
};

const packages: PricingPackage[] = [
  {
    number: "01",
    name: "Simple Website",
    price: "RM399",
    description:
      "A clear one-page website for businesses that need a simple, professional place online.",
    includes: [
      "One-page website",
      "Business introduction, services, photos and contact details",
      "WhatsApp contact button",
      "Works on phones and computers",
      "Website published online",
      "One round of changes",
    ],
    delivery: "3–5 working days",
    cta: "Choose Simple",
    option: "Simple Website – RM399",
  },
  {
    number: "02",
    name: "Business Website",
    price: "RM799",
    description:
      "A website of up to three pages, with room to introduce your business and explain your services.",
    includes: [
      "Everything in Simple Website",
      "Up to three pages, such as Home, About and Services",
      "Separate pages for business information and services",
      "Navigation menu",
      "Basic Google search information setup",
      "Two rounds of changes",
    ],
    delivery: "5–7 working days",
    cta: "Choose Business",
    option: "Business Website – RM799",
    featured: true,
    badge: "Recommended",
  },
  {
    number: "03",
    name: "Business Website Plus",
    price: "RM1,299",
    description:
      "A larger website of up to five pages, with a contact form and useful extra sections.",
    includes: [
      "Everything in Business Website",
      "Up to five pages",
      "Customer contact form with submission testing",
      "FAQ section",
      "Photo gallery or portfolio section",
      "Three rounds of changes",
    ],
    delivery: "7–10 working days",
    cta: "Choose Plus",
    option: "Business Website Plus – RM1,299",
    premium: true,
    badge: "Most complete",
  },
];

const terms = [
  "50% deposit before work begins and 50% before final handover.",
  "Clients provide their business information, text and photos.",
  "Domain fees and paid third-party services are excluded.",
  "Complex booking systems, online payments and custom features require a separate quotation.",
];

type PricingProps = {
  onSelectPackage: (packageOption: PackageOption) => void;
};

export function Pricing({ onSelectPackage }: PricingProps) {
  return (
    <section className="section pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="pricing__backdrop" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-head section-head--split section-head--pricing">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Straightforward pricing
            </p>
            <h2 className="section-title" id="pricing-title">
              Choose the Right Website{" "}
              <span className="text-gradient">for Your Business</span>
            </h2>
          </div>
          <p className="section-lede">
            Three clear packages for different stages of business. Each package lists
            exactly what is included, so you know what to expect before work begins.
          </p>
        </Reveal>

        <div className="pricing__currency">
          <span>All prices in</span>
          <strong>Malaysian Ringgit (RM)</strong>
        </div>

        <div className="pricing-grid">
          {packages.map((item, index) => (
            <Reveal
              className={`pricing-card${item.featured ? " pricing-card--featured" : ""}${item.premium ? " pricing-card--premium" : ""}`}
              key={item.option}
              delay={index * 80}
              as="article"
            >
              {item.badge && (
                <span
                  className={`pricing-card__badge${item.premium ? " pricing-card__badge--premium" : ""}`}
                >
                  {item.badge}
                </span>
              )}
              <div className="pricing-card__top">
                <span className="pricing-card__number">{item.number}</span>
                <h3 className="pricing-card__name">{item.name}</h3>
              </div>
              <div className="pricing-card__price">
                <span className="pricing-card__currency">RM</span>
                <span className="pricing-card__amount">
                  {item.price.replace("RM", "")}
                </span>
              </div>
              <p className="pricing-card__description">{item.description}</p>

              <div className="pricing-card__divider" />

              <p className="pricing-card__includes-label">What you get</p>
              <ul className="pricing-card__list">
                {item.includes.map((feature) => (
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
                  <strong>Estimated completion</strong>
                  {item.delivery}
                </span>
              </div>

              <button
                className="pricing-card__cta"
                type="button"
                onClick={() => onSelectPackage(item.option)}
              >
                {item.cta}
                <ArrowUpRight size={17} />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="pricing-rounds" delay={80}>
          <span className="pricing-rounds__label">Good to know</span>
          <div>
            <h3>What counts as a round of changes?</h3>
            <p>
              A round of changes means one submitted list of reasonable changes to the
              agreed website. New pages, new features and major changes outside the
              agreed scope may cost extra.
            </p>
          </div>
        </Reveal>

        <Reveal className="pricing-terms">
          <div className="pricing-terms__intro">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              The finer details
            </p>
            <h3>Pricing terms</h3>
            <p>
              Every project starts with a clear written plan. These terms apply to all
              three packages above.
            </p>
          </div>
          <ul className="pricing-terms__list">
            {terms.map((term) => (
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
