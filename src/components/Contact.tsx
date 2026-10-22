import { useEffect, useState, type MouseEvent } from "react";
import {
  buildWhatsAppHref,
  contactEmailHref,
  defaultPackageOption,
  isPackageOption,
  packageOptions,
  siteConfig,
  websitePackages,
  type PackageOption,
} from "../config";
import { useI18n } from "../i18n";
import type { Dictionary } from "../i18n/en";
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
  package: defaultPackageOption,
  description: "",
};

/** Visible label for a package, e.g. "Laman Web Ringkas – RM399". */
function packageLabel(option: PackageOption, t: Dictionary): string {
  if (option === "unsure") return t.contact.form.packageUnsure;

  const registered = websitePackages.find((item) => item.id === option);
  const name = t.pricing.packages[option].name;

  return registered ? `${name} – ${registered.price}` : name;
}

function validate(values: FormValues, t: Dictionary): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = t.contact.errors.name;
  }
  if (!values.package) {
    errors.package = t.contact.errors.package;
  }
  if (values.description.trim().length < 10) {
    errors.description = t.contact.errors.description;
  }

  return errors;
}

function buildEnquiryMessage(values: FormValues, t: Dictionary): string {
  const lines = [
    t.contact.enquiry.greeting,
    "",
    `${t.contact.enquiry.name}: ${values.name.trim()}`,
  ];

  if (values.business.trim()) {
    lines.push(`${t.contact.enquiry.business}: ${values.business.trim()}`);
  }

  lines.push(
    `${t.contact.enquiry.package}: ${packageLabel(values.package, t)}`,
    "",
    `${t.contact.enquiry.details}:`,
    values.description.trim(),
  );

  return lines.join("\n");
}

type ContactProps = {
  selectedPackage: PackageOption;
  onPackageChange: (option: PackageOption) => void;
};

export function Contact({ selectedPackage, onPackageChange }: ContactProps) {
  const { t } = useI18n();
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
      const nextErrors = validate({ ...values, [field]: value }, t);
      setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
    }
    if (status.type !== "idle") {
      setStatus({ type: "idle" });
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((current) => ({ ...current, [field]: true }));
    const nextErrors = validate(values, t);
    setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
  };

  const handlePackageChange = (value: string) => {
    const option = isPackageOption(value) ? value : defaultPackageOption;
    updateField("package", option);
    onPackageChange(option);
  };

  const enquiryHref = buildWhatsAppHref(buildEnquiryMessage(values, t));
  const whatsappHref = buildWhatsAppHref(t.contact.enquiry.greeting);
  const isComplete = Object.keys(validate(values, t)).length === 0;
  const actionHref = isComplete && enquiryHref ? enquiryHref : "#contact";

  const handleWhatsAppClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!enquiryHref) {
      event.preventDefault();
      setStatus({ type: "config-error" });
      return;
    }

    const nextErrors = validate(values, t);
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
              {t.contact.cta.eyebrow}
            </p>
            <h2 className="contact-cta__title" id="contact-title">
              {t.contact.cta.titleLead}{" "}
              <span className="text-gradient">{t.contact.cta.titleAccent}</span>
            </h2>
            <p className="contact-cta__lede">{t.contact.cta.lede}</p>
          </div>

          <div className="contact-cta__actions">
            <a className="button button--primary" href="#contact-form">
              {t.contact.cta.primary}
              <ArrowUpRight size={18} />
            </a>
            <a
              className="button button--secondary"
              href={whatsappHref ?? "#contact-form"}
              target={whatsappHref ? "_blank" : undefined}
              rel={whatsappHref ? "noopener noreferrer" : undefined}
              aria-label={
                whatsappHref
                  ? t.contact.cta.whatsappLabel
                  : t.contact.cta.whatsappFallbackLabel
              }
              title={
                whatsappHref
                  ? t.contact.cta.whatsappTitle
                  : t.contact.cta.whatsappFallbackTitle
              }
            >
              <WhatsApp size={17} />
              {t.contact.cta.whatsapp}
            </a>
          </div>
        </Reveal>

        <div className="contact__layout">
          <Reveal className="contact__intro">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              {t.contact.intro.eyebrow}
            </p>
            <h2 className="contact__title">
              {t.contact.intro.titleLead}{" "}
              <span className="text-gradient">{t.contact.intro.titleAccent}</span>
            </h2>
            <p className="contact__lede">{t.contact.intro.lede}</p>

            <ul className="contact__assurances">
              {t.contact.intro.assurances.map((assurance) => (
                <li key={assurance}>
                  <Check size={14} />
                  {assurance}
                </li>
              ))}
            </ul>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">
                  <MapPin size={17} />
                </span>
                <span>
                  <strong>{t.contact.intro.locationLabel}</strong>
                  {t.contact.intro.locationNote}
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
                    <strong>{t.contact.intro.whatsappLabel}</strong>
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
                    <strong>{t.contact.intro.emailLabel}</strong>
                    {siteConfig.email}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>

            {import.meta.env.DEV && !whatsappHref && !contactEmailHref && (
              <p className="contact__config-note">
                {t.contact.intro.configNote.lead} <code>src/config.ts</code>{" "}
                {t.contact.intro.configNote.tail}
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
                  <span className="enquiry-form__label">{t.contact.form.label}</span>
                  <h3 id="enquiry-form-title">{t.contact.form.title}</h3>
                </div>
                <span className="enquiry-form__step">{t.contact.form.via}</span>
              </div>

              <div className="enquiry-form__grid">
                <div className="form-field">
                  <label htmlFor="name">
                    {t.contact.form.name} <span aria-hidden="true">*</span>
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
                    placeholder={t.contact.form.namePlaceholder}
                  />
                  {fieldError("name") && (
                    <span className="form-field__error" id="name-error">
                      {fieldError("name")}
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="business">
                    {t.contact.form.business}{" "}
                    <span className="form-field__optional">
                      {t.contact.form.optional}
                    </span>
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    autoComplete="organization"
                    value={values.business}
                    onChange={(event) => updateField("business", event.target.value)}
                    placeholder={t.contact.form.businessPlaceholder}
                  />
                </div>

                <div className="form-field form-field--full">
                  <label htmlFor="package">
                    {t.contact.form.package} <span aria-hidden="true">*</span>
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
                          {packageLabel(option, t)}
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
                    {t.contact.form.description} <span aria-hidden="true">*</span>
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
                    placeholder={t.contact.form.descriptionPlaceholder}
                  />
                  <span className="form-field__hint" id="description-hint">
                    {t.contact.form.descriptionHint}
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
                  {t.contact.form.submit}
                </a>
                <p id="enquiry-form-note">{t.contact.form.submitNote}</p>
              </div>

              <div className="form-status" aria-live="polite">
                {status.type === "opened" && (
                  <div className="form-status__box form-status__box--info">
                    <WhatsApp size={17} />
                    <div>
                      <strong>{t.contact.form.openedTitle}</strong>
                      <p>{t.contact.form.openedBody}</p>
                    </div>
                  </div>
                )}
                {status.type === "config-error" && (
                  <div className="form-status__box form-status__box--error" role="alert">
                    <span className="form-status__error-mark" aria-hidden="true">!</span>
                    <div>
                      <strong>{t.contact.form.errorTitle}</strong>
                      <p>{t.contact.form.errorBody}</p>
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
