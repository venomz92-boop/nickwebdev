import { Briefcase, CloudUpload, Gauge, MonitorSmartphone } from "./Icons";

const features = [
  {
    title: "Responsive Design",
    description: "Layouts designed for mobile, tablet, and desktop.",
    icon: MonitorSmartphone,
  },
  {
    title: "Performance Focused",
    description: "Lightweight pages built with efficient web technologies.",
    icon: Gauge,
  },
  {
    title: "Reliable Deployment",
    description: "Pages deployment setup.",
    icon: CloudUpload,
  },
  {
    title: "Business Ready",
    description: "Clear information and contact options for your customers.",
    icon: Briefcase,
  },
];

export function FeatureStrip() {
  return (
    <section className="feature-section" aria-label="What every website includes">
      <div className="container">
        <div className="feature-strip">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature" key={feature.title}>
                <span className="feature__icon">
                  <Icon size={22} />
                </span>
                <div>
                  <h2 className="feature__title">{feature.title}</h2>
                  <p className="feature__description">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
