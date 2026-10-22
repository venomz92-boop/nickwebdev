import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function Process() {
  const { t } = useI18n();

  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              {t.process.eyebrow}
            </p>
            <h2 className="section-title" id="process-title">
              {t.process.titleLead}{" "}
              <span className="text-gradient">{t.process.titleAccent}</span>
            </h2>
          </div>
          <p className="section-lede">{t.process.lede}</p>
        </Reveal>

        <ol className="process__steps">
          {t.process.steps.map((step, index) => (
            <Reveal
              className="process-step"
              key={step.label}
              delay={index * 90}
              as="li"
            >
              <div className="process-step__top">
                <span className="process-step__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="process-step__label">{step.label}</span>
              </div>
              <span className="process-step__rule" aria-hidden="true">
                <span />
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
