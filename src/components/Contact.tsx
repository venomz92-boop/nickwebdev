import { useEffect, useState, type MouseEvent } from "react";
import {
  buildWhatsAppHref,
  contactEmailHref,
  packageOptions,
  siteConfig,
  whatsappHref,
  type PackageOption,
} from "../config";
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Rocket,
  WhatsApp,
} from "./Icons";
import { Reveal } from "./Reveal";

type FormValues = {
  name: string;
  business: string;
  package: PackageOption;
  description: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = { type: "idle" } | { type: "opened" } | { type: "config-error" };

const initialValues: FormValues = {
  name: "",
  business: "",
  package: "Not Sure Yet",
  description: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!values.package) {
    errors.package = "Please choose a package.";
  }
  if (values.description.trim().length < 10) {
    errors.description = "Please share a little more about your project.";
  }

  return errors;
}

function buildEnquiryMessage(values: FormValues): string {
  const lines = [
    "Hi Nick, I'd like to discuss a website project.",
    "",
    `Name: ${values.name.trim()}`,
  ];

  if (values.business.trim()) {
    lines.push(`Business: ${values.business.trim()}`);
  }

  lines.push(
    `Package: ${values.package === "Not Sure Yet" ? "Not sure yet" : values.package}`,
    "",
    "Project details:",
    values.description.trim(),
  );

  return lines.join("\n");
}

type ContactProps = {
  selectedPackage: PackageOption;
  onPackageChange: (option: PackageOption) => void;
};

export function Contact({ selectedPackage, onPackageChange }: ContactProps) {
  const [values, setValues] = useState<FormValues>({
    ...initialValues,
    package: selectedPackage,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>(
    {},
  );
  const [status, setStatus] = useState<Status>({ type: "idle" });

  useEffect(() => {
    setValues((current) => ({ ...current, package: selectedPackage }));
  }, [selectedPackage]);

  const updateField = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (touched[field]) {
      const nextErrors = validate({ ...values, [field]: value });
      setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
    }
    if (status.type !== "idle") {
      setStatus({ type: "idle" });
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((current) => ({ ...current, [field]: true }));
    const nextErrors = validate(values);
    setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
  };

  const handlePackageChange = (value: string) => {
    const option = packageOptions.includes(value as PackageOption)
      ? (value as PackageOption)
      : "Not Sure Yet";
    updateField("package", option);
    onPackageChange(option);
  };

  const enquiryHref = buildWhatsAppHref(buildEnquiryMessage(values));
  const isComplete = Object.keys(validate(values)).length === 0;
  const actionHref = isComplete && enquiryHref ? enquiryHref : "#contact";

  const handleWhatsAppClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!enquiryHref) {
      event.preventDefault();
      setStatus({ type: "config-error" });
      return;
    }

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setErrors(nextErrors);
      setTouched({ name: true, package: true, description: true });
      setStatus({ type: "idle" });
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    // The link is allowed to open normally; the message is built from the
    // current values. Nothing is sent until the visitor presses send in WhatsApp.
    setStatus({ type: "opened" });
  };

  const fieldError = (field: keyof FormValues) =>
    touched[field] && errors[field] ? errors[field] : undefined;

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-cta">
          <div className="contact-cta__graphic" aria-hidden="true">
            <span className="contact-cta__orbit contact-cta__orbit--one" />
            <span className="contact-cta__orbit contact-cta__orbit--two" />
            <span className="contact-cta__rocket">
              <Rocket size={40} />
            </span>
          </div>

          <div className="contact-cta__content">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Ready to get started?
            </p>
            <h2 className="contact-cta__title" id="contact-title">
              Let's build something{" "}
              <span className="text-gradient">great together</span>
            </h2>
            <p className="contact-cta__lede">
              Have a business idea or need a website? Tell me what you have in mind,
              and let's discuss the right solution for your business.
            </p>
          </div>

          <div className="contact-cta__actions">
            <a className="button button--primary" href="#contact-form">
              Start a project
              <ArrowUpRight size={18} />
            </a>
            <a
              className="button button--secondary"
              href={whatsappHref ?? "#contact-form"}
              target={whatsappHref ? "_blank" : undefined}
              rel={whatsappHref ? "noopener noreferrer" : undefined}
              aria-label={
                whatsappHref
                  ? "Contact Nick's WebDev on WhatsApp"
                  : "Go to the project enquiry section"
              }
              title={
                whatsappHref
                  ? "Chat on WhatsApp"
                  : "Use the project enquiry form to build a WhatsApp message."
              }
            >
              <WhatsApp size={17} />
              Contact on WhatsApp
            </a>
          </div>
        </Reveal>

        <div className="contact__layout">
          <Reveal className="contact__intro">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Start a conversation
            </p>
            <h2 className="contact__title">
              Tell me what you have <span className="text-gradient">in mind.</span>
            </h2>
            <p className="contact__lede">
              Share a few details about your business and the website you need. Your
              answers become a ready-to-send WhatsApp message — nothing is sent until
              you press send.
            </p>

            <ul className="contact__assurances">
              <li>
                <Check size={14} />
                Clear scope before work begins
              </li>
              <li>
                <Check size={14} />
                Straightforward communication on WhatsApp
              </li>
              <li>
                <Check size={14} />
                No payment details needed to start
              </li>
            </ul>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">
                  <MapPin size={17} />
                </span>
                <span>
                  <strong>Based in Malaysia</strong>
                  Working with businesses across the country.
                </span>
              </div>

              {whatsappHref && (
                <a
                  className="contact__detail contact__detail--link"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__detail-icon">
                    <WhatsApp size={17} />
                  </span>
                  <span>
                    <strong>WhatsApp</strong>
                    {siteConfig.whatsappDisplay}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              )}

              {contactEmailHref && (
                <a className="contact__detail contact__detail--link" href={contactEmailHref}>
                  <span className="contact__detail-icon">
                    <Mail size={17} />
                  </span>
                  <span>
                    <strong>Email</strong>
                    {siteConfig.email}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>

            {import.meta.env.DEV && !whatsappHref && !contactEmailHref && (
              <p className="contact__config-note">
                Developer note: add a WhatsApp number in <code>src/config.ts</code> to
                enable the WhatsApp enquiry.
              </p>
            )}
          </Reveal>

          <Reveal className="contact__form-wrap" delay={100}>
            <div
              className="enquiry-form"
              id="contact-form"
              role="group"
              aria-labelledby="enquiry-form-title"
            >
              <div className="enquiry-form__header">
                <div>
                  <span className="enquiry-form__label">Project enquiry</span>
                  <h3 id="enquiry-form-title">Let's start with the basics.</h3>
                </div>
                <span className="enquiry-form__step">VIA WHATSAPP</span>
              </div>

              <div className="enquiry-form__grid">
                <div className="form-field">
                  <label htmlFor="name">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={values.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    onBlur={() => handleBlur("name")}
                    aria-invalid={Boolean(fieldError("name"))}
                    aria-describedby={fieldError("name") ? "name-error" : undefined}
                    placeholder="Your name"
                  />
                  {fieldError("name") && (
                    <span className="form-field__error" id="name-error">
                      {fieldError("name")}
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="business">
                    Business name{" "}
                    <span className="form-field__optional">(optional)</span>
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    autoComplete="organization"
                    value={values.business}
                    onChange={(event) => updateField("business", event.target.value)}
                    placeholder="Your business"
                  />
                </div>

                <div className="form-field form-field--full">
                  <label htmlFor="package">
                    Website package <span aria-hidden="true">*</span>
                  </label>
                  <div className="select-wrap">
                    <select
                      id="package"
                      name="package"
                      required
                      value={values.package}
                      onChange={(event) => handlePackageChange(event.target.value)}
                      onBlur={() => handleBlur("package")}
                      aria-invalid={Boolean(fieldError("package"))}
                      aria-describedby={
                        fieldError("package") ? "package-error" : undefined
                      }
                    >
                      {packageOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  {fieldError("package") && (
                    <span className="form-field__error" id="package-error">
                      {fieldError("package")}
                    </span>
                  )}
                </div>

                <div className="form-field form-field--full">
                  <label htmlFor="description">
                    Project description <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    value={values.description}
                    onChange={(event) => updateField("description", event.target.value)}
                    onBlur={() => handleBlur("description")}
                    aria-invalid={Boolean(fieldError("description"))}
                    aria-describedby={
                      fieldError("description")
                        ? "description-error"
                        : "description-hint"
                    }
                    placeholder="What does your business do, and what would you like your website to help with?"
                  />
                  <span className="form-field__hint" id="description-hint">
                    A few sentences is enough to get started.
                  </span>
                  {fieldError("description") && (
                    <span className="form-field__error" id="description-error">
                      {fieldError("description")}
                    </span>
                  )}
                </div>
              </div>

              <div className="enquiry-form__footer">
                <a
                  className="button button--primary enquiry-form__submit"
                  href={actionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  aria-describedby="enquiry-form-note"
                >
                  <WhatsApp size={17} />
                  Continue on WhatsApp
                </a>
                <p id="enquiry-form-note">
                  Your message opens in WhatsApp for you to review before sending. You
                  can change or cancel it there.
                </p>
              </div>

              <div className="form-status" aria-live="polite">
                {status.type === "opened" && (
                  <div className="form-status__box form-status__box--info">
                    <WhatsApp size={17} />
                    <div>
                      <strong>WhatsApp is opening in a new tab.</strong>
                      <p>
                        Check the message, then press send. Your enquiry is only sent
                        once you do.
                      </p>
                    </div>
                  </div>
                )}
                {status.type === "config-error" && (
                  <div className="form-status__box form-status__box--error" role="alert">
                    <span className="form-status__error-mark" aria-hidden="true">!</span>
                    <div>
                      <strong>WhatsApp is not available right now.</strong>
                      <p>
                        No message was opened. Please try again later or use the contact
                        details on this page.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
