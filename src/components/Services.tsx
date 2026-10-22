import { useI18n } from "../i18n";
import {
  ArrowUpRight,
  CloudUpload,
  FileStack,
  Layers,
  LayoutTemplate,
  Mail,
  WhatsApp,
} from "./Icons";
import { Reveal } from "./Reveal";
import { ShowcaseDevices } from "./ShowcaseDevices";

const serviceIcons = [
  LayoutTemplate,
  Layers,
  FileStack,
  WhatsApp,
  Mail,
  CloudUpload,
];

export function Services() {
  const { t } = useI18n();

  return (
    <section
      className="section services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              {t.services.eyebrow}
            </p>
            <h2 className="section-title" id="services-title">
              {t.services.titleLead}{" "}
              <span className="text-gradient">{t.services.titleAccent}</span>
            </h2>
          </div>
          <p className="section-lede">{t.services.lede}</p>
        </Reveal>

        <div className="services__layout">
          <Reveal className="services__list-wrap">
            <ul className="services__list">
              {t.services.items.map((service, index) => {
                const Icon = serviceIcons[index] ?? LayoutTemplate;

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
                      <span className="service-row__description">
                        {service.description}
                      </span>
                    </span>
                    <ArrowUpRight className="service-row__arrow" size={18} />
                  </li>
                );
              })}
            </ul>
            <p className="services__note">{t.services.note}</p>
          </Reveal>

          <Reveal className="services__showcase" delay={100}>
            <ShowcaseDevices
              label={t.services.showcase.label}
              note={t.services.showcase.note}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
