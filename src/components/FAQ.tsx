import { useRef, useState, type KeyboardEvent } from "react";
import { useI18n } from "../i18n";
import { ArrowUpRight, Plus } from "./Icons";
import { Reveal } from "./Reveal";

export function FAQ() {
  const { t } = useI18n();
  const faqs = t.faq.items;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown") nextIndex = (index + 1) % faqs.length;
    if (event.key === "ArrowUp") nextIndex = (index - 1 + faqs.length) % faqs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = faqs.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      buttonRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <Reveal className="faq__intro">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {t.faq.eyebrow}
          </p>
          <h2 className="section-title" id="faq-title">
            {t.faq.titleLead}{" "}
            <span className="text-gradient">{t.faq.titleAccent}</span>
          </h2>
          <p className="section-lede">{t.faq.lede}</p>
          <a className="faq__contact" href="#contact-form">
            {t.faq.contact}
            <span>
              <ArrowUpRight size={16} />
            </span>
          </a>
        </Reveal>

        <Reveal className="faq__list" delay={100}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                <h3>
                  <button
                    ref={(element) => {
                      buttonRefs.current[index] = element;
                    }}
                    className="faq-item__trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  >
                    <span className="faq-item__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="faq-item__question">{faq.question}</span>
                    <span className="faq-item__icon" aria-hidden="true">
                      <Plus size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-item__panel"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
