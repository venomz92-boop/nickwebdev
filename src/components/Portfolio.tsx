import kundasangPreview from "../assets/kundasang-preview.jpg";
import { useI18n } from "../i18n";
import { ArrowUpRight, Globe } from "./Icons";
import { Reveal } from "./Reveal";

export function Portfolio() {
  const { t } = useI18n();

  return (
    <section
      className="section portfolio"
      id="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              {t.portfolio.eyebrow}
            </p>
            <h2 className="section-title" id="portfolio-title">
              {t.portfolio.titleLead}{" "}
              <span className="text-gradient">{t.portfolio.titleAccent}</span>
            </h2>
          </div>
          <p className="section-lede">{t.portfolio.lede}</p>
        </Reveal>

        <Reveal className="project" as="article">
          <a
            className="project__preview"
            href="https://kundasanghomestay.my"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.portfolio.previewLabel}
          >
            <div className="project__browserbar" aria-hidden="true">
              <span className="project__browser-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="project__url">
                <Globe size={12} />
                kundasanghomestay.my
              </span>
              <span className="project__browser-open">
                <ArrowUpRight size={14} />
              </span>
            </div>
            <div className="project__image-wrap">
              <img
                src={kundasangPreview}
                alt={t.portfolio.imageAlt}
                loading="lazy"
                width="1281"
                height="886"
              />
              <span className="project__preview-overlay">
                <span>{t.portfolio.visit}</span>
                <ArrowUpRight size={20} />
              </span>
            </div>
          </a>

          <div className="project__body">
            <div className="project__meta">
              <span>{t.portfolio.projectNumber}</span>
              <span>{t.portfolio.projectType}</span>
            </div>
            <h3 className="project__title">{t.portfolio.projectTitle}</h3>
            <p className="project__description">{t.portfolio.description}</p>
            <ul className="project__tags" aria-label={t.portfolio.tagsLabel}>
              {t.portfolio.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a
              className="project__link"
              href="https://kundasanghomestay.my"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.portfolio.visit}
              <span className="project__link-icon">
                <ArrowUpRight size={17} />
              </span>
            </a>
            <p className="project__note">{t.portfolio.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
