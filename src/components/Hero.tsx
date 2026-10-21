import { ArrowUpRight, Check } from "./Icons";
import { HeroLaptop } from "./HeroLaptop";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Modern websites. Stronger businesses.
          </p>

          <h1 className="hero__title" id="hero-title" aria-label="We build websites that grow your business">
            <span aria-hidden="true">We build</span>
            <span className="hero__title-accent" aria-hidden="true">websites</span>
            <span aria-hidden="true">that grow</span>
            <span aria-hidden="true">your business</span>
          </h1>

          <p className="hero__lede">
            Professional, responsive websites for small businesses that want to build
            credibility, showcase their services, and reach more customers online.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Get started
              <ArrowUpRight size={18} />
            </a>
            <a className="button button--secondary" href="#portfolio">
              View my work
            </a>
          </div>

          <p className="hero__note">
            <Check size={14} />
            Clear pricing. Defined scope. Practical solutions.
          </p>
        </div>

        <div className="hero__visual">
          <HeroLaptop />
        </div>
      </div>
    </section>
  );
}
