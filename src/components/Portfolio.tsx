import kundasangPreview from "../assets/kundasang-preview.jpg";
import { ArrowUpRight, Globe } from "./Icons";
import { Reveal } from "./Reveal";

export function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Selected work
            </p>
            <h2 className="section-title" id="portfolio-title">
              Built with <span className="text-gradient">Purpose</span>
            </h2>
          </div>
          <p className="section-lede">
            Explore my work and see how modern web design can help businesses present
            themselves online.
          </p>
        </Reveal>

        <Reveal className="project" as="article">
          <a
            className="project__preview"
            href="https://kundasanghomestay.my"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit KundasangHomestay.my in a new tab"
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
                alt="Homepage of KundasangHomestay.my showing a Mount Kinabalu landscape, the headline 'Cozy, verified properties in Kundasang & Ranau', and a search panel."
                loading="lazy"
                width="1281"
                height="886"
              />
              <span className="project__preview-overlay">
                <span>Visit website</span>
                <ArrowUpRight size={20} />
              </span>
            </div>
          </a>

          <div className="project__body">
            <div className="project__meta">
              <span>Project 01</span>
              <span>Personal project</span>
            </div>
            <h3 className="project__title">KundasangHomestay.my</h3>
            <p className="project__description">
              A homestay-related web project demonstrating my experience with website
              development, deployment, and presenting business information online.
            </p>
            <ul className="project__tags" aria-label="Project disciplines">
              <li>Website development</li>
              <li>Deployment</li>
              <li>Online business information</li>
            </ul>
            <a
              className="project__link"
              href="https://kundasanghomestay.my"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
              <span className="project__link-icon">
                <ArrowUpRight size={17} />
              </span>
            </a>
            <p className="project__note">
              A live personal project, shown as an example of my work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
