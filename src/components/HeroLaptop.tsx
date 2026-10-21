import { ArrowUpRight } from "./Icons";

const keyboardRows = Array.from({ length: 6 });

export function HeroLaptop() {
  return (
    <div
      className="hero-device"
      role="img"
      aria-label="An angled laptop showing an example website for a fictional digital studio, with a dark violet abstract backdrop, editorial headline, and a keyboard lit by a soft purple glow."
    >
      <div className="hero-device__grid" aria-hidden="true" />
      <div className="hero-device__aura" aria-hidden="true" />
      <div className="hero-device__arc" aria-hidden="true" />

      <div className="laptop" aria-hidden="true">
        <div className="laptop__lid">
          <div className="laptop__bezel">
            <span className="laptop__camera" />
            <div className="laptop__screen">
              <div className="demo-site nova">
                <div className="nova__art">
                  <span className="nova__smoke nova__smoke--one" />
                  <span className="nova__smoke nova__smoke--two" />
                  <span className="nova__ring" />
                </div>

                <div className="nova__nav">
                  <span className="nova__brand">
                    <span className="nova__mark" />
                    NOVA
                  </span>
                  <span className="nova__links">Work&nbsp;&nbsp;&nbsp;Studio&nbsp;&nbsp;&nbsp;Contact</span>
                  <span className="nova__navcta">Let's talk</span>
                </div>

                <div className="nova__copy">
                  <span className="nova__kicker">Independent digital studio</span>
                  <h3>
                    Websites with
                    <br />
                    <span>a point of view.</span>
                  </h3>
                  <p>Brand, web and digital product design for ambitious teams.</p>
                  <span className="nova__cta">
                    View selected work <ArrowUpRight size={11} />
                  </span>
                </div>

                <div className="nova__foot">
                  <span>Strategy · Design · Development</span>
                  <span>Kuala Lumpur</span>
                  <span>Scroll ↓</span>
                </div>

                <span className="nova__vignette" />
              </div>

              <span className="laptop__glare" />
            </div>
          </div>
        </div>

        <div className="laptop__deck">
          <span className="laptop__hinge" />
          <div className="laptop__keyboard">
            {keyboardRows.map((_, row) => (
              <div className="laptop__keyrow" key={row}>
                {row === 5 ? (
                  <>
                    <span className="laptop__key laptop__key--wide" />
                    <span className="laptop__key" />
                    <span className="laptop__key laptop__key--space" />
                    <span className="laptop__key" />
                    <span className="laptop__key laptop__key--wide" />
                  </>
                ) : (
                  Array.from({ length: 14 }).map((__, key) => (
                    <span className="laptop__key" key={key} />
                  ))
                )}
              </div>
            ))}
          </div>
          <span className="laptop__trackpad" />
          <span className="laptop__deck-shine" />
          <span className="laptop__notch" />
        </div>
      </div>
    </div>
  );
}
