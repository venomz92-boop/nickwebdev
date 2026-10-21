import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    label: "Brief",
    title: "Tell Me About Your Project",
    description:
      "Share your business details, goals, and the type of website you need.",
  },
  {
    number: "02",
    label: "Build & review",
    title: "Build and Review",
    description:
      "I create the agreed website and give you an opportunity to review the work within the included revision limit.",
  },
  {
    number: "03",
    label: "Handover",
    title: "Deploy and Handover",
    description:
      "After final payment, I complete the agreed handover and deployment process.",
  },
];

export function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              The process
            </p>
            <h2 className="section-title" id="process-title">
              Simple, Clear, and <span className="text-gradient">Straightforward</span>
            </h2>
          </div>
          <p className="section-lede">
            A defined path from the first conversation to the finished website.
          </p>
        </Reveal>

        <ol className="process__steps">
          {steps.map((step, index) => (
            <Reveal className="process-step" key={step.number} delay={index * 90} as="li">
              <div className="process-step__top">
                <span className="process-step__number">{step.number}</span>
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
