import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, Plus } from "./Icons";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "My packages start at RM399 for a simple one-page website, RM799 for a business website with up to three pages, and RM1,299 for Business Website Plus with up to five pages.",
  },
  {
    question: "How long does it take?",
    answer:
      "A Simple Website usually takes 3–5 working days, a Business Website 5–7 working days, and Business Website Plus 7–10 working days after all required content is received. Timelines may vary with scope and feedback.",
  },
  {
    question: "Do I need to buy a domain?",
    answer:
      "Domain registration is separate. I can help explain the setup, and domain costs depend on the domain provider and extension.",
  },
  {
    question: "Can you add a booking system or online payments?",
    answer:
      "These features require separate technical assessment and quotation. They are not included in the standard packages.",
  },
  {
    question: "Can you modify my existing website?",
    answer:
      "My standard packages focus on new website creation. Changes to an existing website depend on its platform, access permissions, source code, and technical requirements.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Additional updates may be available by agreement. Ongoing maintenance and technical troubleshooting are not automatically included in the website packages.",
  },
  {
    question: "What do I need to prepare?",
    answer:
      "Please prepare your business details, services, contact information, and any text or images you would like included.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "A 50% deposit is required to begin work, with the remaining 50% due before final handover.",
  },
];

export function FAQ() {
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
            Frequently asked
          </p>
          <h2 className="section-title" id="faq-title">
            Questions, <span className="text-gradient">answered.</span>
          </h2>
          <p className="section-lede">
            The practical details about packages, timelines, and what to expect when
            working together.
          </p>
          <a className="faq__contact" href="#contact-form">
            Still have a question? Start a conversation
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
