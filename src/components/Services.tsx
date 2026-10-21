import { Reveal } from "./Reveal";
import { ShowcaseDevices } from "./ShowcaseDevices";
import {
  ArrowUpRight,
  CloudUpload,
  FileStack,
  Layers,
  LayoutTemplate,
  Mail,
  WhatsApp,
} from "./Icons";

const services = [
  {
    title: "Landing Page Creation",
    description: "A focused page for one offer, service, or campaign.",
    icon: LayoutTemplate,
  },
  {
    title: "Starter Business Websites",
    description: "A clear home for your business essentials.",
    icon: Layers,
  },
  {
    title: "Multi-Page Business Websites",
    description: "Room to explain your services across multiple pages.",
    icon: FileStack,
  },
  {
    title: "WhatsApp Contact Integration",
    description: "A direct, familiar way for customers to reach you.",
    icon: WhatsApp,
  },
  {
    title: "Contact Form Setup",
    description: "A simple enquiry form connected to your workflow.",
    icon: Mail,
  },
  {
    title: "Deployment",
    description: "GitHub repository setup and Cloudflare Pages deployment.",
    icon: CloudUpload,
  },
];

export function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              What I offer
            </p>
            <h2 className="section-title" id="services-title">
              Website Solutions for{" "}
              <span className="text-gradient">Growing Businesses</span>
            </h2>
          </div>
          <p className="section-lede">
            From focused landing pages to multi-page business websites, I help small
            businesses establish a professional online presence without unnecessary
            complexity.
          </p>
        </Reveal>

        <div className="services__layout">
          <Reveal className="services__list-wrap">
            <ul className="services__list">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li className="service-row" key={service.title}>
                    <span className="service-row__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="service-row__icon">
                      <Icon size={20} />
                    </span>
                    <span className="service-row__copy">
                      <span className="service-row__title">{service.title}</span>
                      <span className="service-row__description">{service.description}</span>
                    </span>
                    <ArrowUpRight className="service-row__arrow" size={18} />
                  </li>
                );
              })}
            </ul>
            <p className="services__note">
              Need something outside this list? Custom databases, booking systems, and
              payment integrations require a separate assessment.
            </p>
          </Reveal>

          <Reveal className="services__showcase" delay={100}>
            <ShowcaseDevices />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
