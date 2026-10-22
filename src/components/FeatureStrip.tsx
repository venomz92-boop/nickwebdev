import { useI18n } from "../i18n";
import { Briefcase, CloudUpload, Gauge, MonitorSmartphone } from "./Icons";

const featureIcons = [MonitorSmartphone, Gauge, CloudUpload, Briefcase];

export function FeatureStrip() {
  const { t } = useI18n();

  return (
    <section className="feature-section" aria-label={t.features.label}>
      <div className="container">
        <div className="feature-strip">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index] ?? MonitorSmartphone;

            return (
              <article className="feature" key={feature.title}>
                <span className="feature__icon">
                  <Icon size={22} />
                </span>
                <div>
                  <h2 className="feature__title">{feature.title}</h2>
                  <p className="feature__description">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
