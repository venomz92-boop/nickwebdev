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
};

const packages: PricingPackage[] = [
  {
    number: "01",
    name: "Landing Page Creation",
    price: "RM399",
    description:
      "A focused one-page website for a promotion, product, service, or small business.",
    includes: [
      "One-page responsive website",
      "Business introduction and service information",
      "Client-provided text and images",
      "WhatsApp contact button",
      "Contact details and social links",
      "Basic SEO metadata",
      "GitHub repository setup",
      "Cloudflare Pages deployment",
      "One round of revisions",
    ],
    delivery: "3–5 working days after receiving all required content.",
    cta: "Choose Landing Page",
    option: "Landing Page – RM399",
  },
  {
    number: "02",
    name: "Starter Website",
    price: "RM799",
    description:
      "A professional website for a small business that needs a stronger online presence.",
    includes: [
      "Responsive small-business website",
      "Business introduction and services",
      "Agreed sections and page structure",
      "Contact details and social media links",
      "WhatsApp integration",
      "Basic SEO metadata",
      "GitHub repository setup",
      "Cloudflare Pages deployment",
      "One round of revisions",
    ],
    delivery: "3–5 working days after receiving all required content.",
    cta: "Choose Starter",
    option: "Starter Website – RM799",
    featured: true,
  },
  {
    number: "03",
    name: "Business Website",
    price: "RM1,299",
    description:
      "A multi-page website for businesses that need more room to explain their services.",
    includes: [
      "Up to five pages",
      "Responsive layouts",
      "Business introduction and service pages",
      "WhatsApp integration",
      "Contact form setup and testing",
      "Basic SEO metadata",
      "GitHub repository setup",
      "Cloudflare Pages deployment",
      "Two rounds of revisions",
    ],
    delivery: "5–8 working days after receiving all required content.",
    cta: "Choose Business",
    option: "Business Website – RM1,299",
  },
];

const terms = [
  "A 50% deposit is required before work begins.",
  "The remaining 50% is due before final handover.",
  "The client must supply the required business information, text, and images.",
  "Domain registration and paid third-party services are not included.",
  "Additional revisions and requests outside the agreed scope may incur extra charges.",
  "Custom databases, booking systems, payment gateways, and complex integrations require separate assessment and quotation.",
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
            Clear packages for businesses at different stages. Every project has a
            defined scope, so you know what is included before work begins.
          </p>
        </Reveal>

        <div className="pricing__currency">
          <span>All prices in</span>
          <strong>Malaysian Ringgit (RM)</strong>
        </div>

        <div className="pricing-grid">
          {packages.map((item, index) => (
            <Reveal
              className={`pricing-card${item.featured ? " pricing-card--featured" : ""}`}
              key={item.option}
              delay={index * 80}
              as="article"
            >
              {item.featured && (
                <span className="pricing-card__badge">Recommended</span>
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

              <p className="pricing-card__includes-label">What's included</p>
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
                  <strong>Estimated delivery</strong>
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

        <Reveal className="pricing-terms">
          <div className="pricing-terms__intro">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              The finer details
            </p>
            <h3>Pricing terms</h3>
            <p>
              Every project begins with a written scope. These terms apply to the
              standard website packages listed above.
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
