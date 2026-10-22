import cabin from "../assets/cabin.jpg";
import cafe from "../assets/cafe.jpg";
import highland from "../assets/highland.jpg";
import { ArrowUpRight } from "./Icons";

type ShowcaseDevicesProps = {
  label: string;
  note: string;
};

export function ShowcaseDevices({ label, note }: ShowcaseDevicesProps) {
  return (
    <div className="showcase" role="img" aria-label={label}>
      <div className="showcase__grid" aria-hidden="true" />
      <div className="showcase__glow" aria-hidden="true" />
      <span className="showcase__halo" aria-hidden="true" />

      <div className="showcase__device showcase__device--laptop" aria-hidden="true">
        <div className="mini-laptop">
          <div className="mini-laptop__bezel">
            <div className="mini-laptop__screen">
              <div className="demo-site rimba">
                <div className="rimba__nav">
                  <span className="mini-brand">RIMBA</span>
                  <span className="rimba__links">Tours&nbsp;&nbsp;&nbsp;Stays&nbsp;&nbsp;&nbsp;Contact</span>
                  <span className="rimba__navcta">Plan a trip</span>
                </div>
                <div className="rimba__hero">
                  <img src={highland} alt="" />
                  <span className="rimba__shade" />
                  <div className="rimba__copy">
                    <span className="mini-kicker">Sabah · Borneo</span>
                    <h3>
                      Go further.
                      <br />
                      Feel closer.
                    </h3>
                    <p>Small-group journeys into the highlands.</p>
                    <span className="mini-cta">
                      Explore journeys <ArrowUpRight size={10} />
                    </span>
                  </div>
                </div>
                <div className="rimba__strip">
                  <span>01 — Sunrise ridge</span>
                  <span>02 — Forest trails</span>
                  <span>03 — Village walks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mini-laptop__base">
            <span />
          </div>
        </div>
      </div>

      <div className="showcase__device showcase__device--tablet" aria-hidden="true">
        <div className="tablet">
          <div className="tablet__camera" />
          <div className="tablet__screen">
            <div className="demo-site kopi">
              <img src={cafe} alt="" />
              <span className="kopi__shade" />
              <div className="kopi__nav">
                <span className="mini-brand">KOPI KITA</span>
                <span>Menu&nbsp;&nbsp;Visit</span>
              </div>
              <div className="kopi__copy">
                <span className="mini-kicker">Kuala Lumpur</span>
                <h3>
                  Slow mornings,
                  <br />
                  good coffee.
                </h3>
                <span className="mini-cta mini-cta--light">Roasted here</span>
              </div>
              <div className="kopi__foot">
                <span>Open daily</span>
                <span>8am — 5pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="showcase__device showcase__device--phone" aria-hidden="true">
        <div className="phone">
          <span className="phone__speaker" />
          <div className="phone__screen">
            <div className="demo-site nipah">
              <img src={cabin} alt="" />
              <span className="nipah__shade" />
              <div className="nipah__nav">
                <span className="mini-brand">NIPAH</span>
                <span className="nipah__menu">Menu</span>
              </div>
              <div className="nipah__copy">
                <span className="mini-kicker">Ranau · Sabah</span>
                <h3>Stay close to the mountain.</h3>
                <span className="mini-cta mini-cta--light">Check dates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="showcase__label" aria-hidden="true">
        <span className="showcase__label-dot" />
        {note}
      </span>
    </div>
  );
}
