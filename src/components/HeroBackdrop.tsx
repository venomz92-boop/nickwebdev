export function HeroBackdrop() {
  return (
    <div className="hero__backdrop" aria-hidden="true">
      <span className="hero__grid" />

      <svg
        className="hero__monogram"
        viewBox="0 0 1000 1000"
        fill="none"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="hero-monogram-gradient"
            x1="168"
            y1="794"
            x2="832"
            y2="206"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4c70ff" />
            <stop offset="0.54" stopColor="#7d5cff" />
            <stop offset="1" stopColor="#b15eff" />
          </linearGradient>
        </defs>

        <g className="hero__monogram-frame">
          <path d="M168 206H832V794H168Z" strokeDasharray="2 12" />
          <path d="M132 206H168M132 794H168M832 206H868M832 794H868" />
          <path d="M168 170V206M832 170V206M168 794V830M832 794V830" />
        </g>

        <path className="hero__monogram-path" d="M168 794V206L832 794V206" />
        <path
          className="hero__monogram-trace"
          d="M168 794V206L832 794V206"
          pathLength="1"
          stroke="url(#hero-monogram-gradient)"
        />

        <g className="hero__monogram-nodes">
          <circle cx="168" cy="206" r="5" />
          <circle cx="168" cy="794" r="5" />
          <circle cx="832" cy="794" r="5" />
          <circle cx="832" cy="206" r="5" />
        </g>
      </svg>

      <span className="hero__guide hero__guide--x" />
      <span className="hero__guide hero__guide--y" />
      <span className="hero__scan" />
    </div>
  );
}
