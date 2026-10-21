import highland from "../assets/highland.jpg";
import { ArrowUpRight } from "./Icons";

export function HeroLaptop() {
  return (
    <div
      className="hero-device"
      role="img"
      aria-label="A laptop showing an example website for a fictional highland retreat, with a full-width landscape image, elegant navigation, and a booking panel."
    >
      <div className="hero-device__grid" aria-hidden="true" />
      <div className="hero-device__aura" aria-hidden="true" />
      <div className="hero-device__arc" aria-hidden="true" />

      <div className="laptop" aria-hidden="true">
        <div className="laptop__lid">
          <div className="laptop__bezel">
            <span className="laptop__camera" />
            <div className="laptop__screen">
              <div className="demo-site alpa">
                <div className="alpa__nav">
                  <span className="alpa__brand">ALPA</span>
                  <span className="alpa__links">Stays&nbsp;&nbsp;&nbsp;Journal&nbsp;&nbsp;&nbsp;About</span>
                  <span className="alpa__navcta">Book a stay</span>
                </div>

                <div className="alpa__hero">
                  <img src={highland} alt="" />
                  <div className="alpa__shade" />
                  <div className="alpa__copy">
                    <span className="alpa__kicker">Kundasang · Sabah</span>
                    <h3>
                      Find your quiet
                      <br />
                      above the clouds.
                    </h3>
                    <p>Considered stays in the highlands of Sabah.</p>
                    <span className="alpa__cta">
                      Explore stays <ArrowUpRight size={11} />
                    </span>
                  </div>

                  <div className="alpa__booking">
                    <span className="alpa__booking-title">Plan your stay</span>
                    <span className="alpa__field">
                      <small>Check in</small>
                      <strong>Add date</strong>
                    </span>
                    <span className="alpa__field">
                      <small>Check out</small>
                      <strong>Add date</strong>
                    </span>
                    <span className="alpa__field">
                      <small>Guests</small>
                      <strong>2 guests</strong>
                    </span>
                    <span className="alpa__bookbtn">Check availability</span>
                  </div>
                </div>

                <div className="alpa__foot">
                  <span>ALPA / Highland stays</span>
                  <span>Stays with a slower pace.</span>
                  <span>Sabah, Malaysia</span>
                </div>
              </div>

              <span className="laptop__glare" />
            </div>
          </div>
        </div>

        <div className="laptop__base">
          <span className="laptop__notch" />
        </div>
      </div>

      <div className="hero-device__caption" aria-hidden="true">
        <span />
        Design. Build. Launch.
      </div>
    </div>
  );
}
