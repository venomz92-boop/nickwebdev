import { useId, type SVGProps } from "react";

export function LogoMark({ size = 36, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  const gradientId = `logo-gradient-${useId().replace(/:/g, "")}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="3" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4C70FF" />
          <stop offset="1" stopColor="#9855FF" />
        </linearGradient>
      </defs>
      <rect x="0.75" y="0.75" width="34.5" height="34.5" rx="10" fill="#0D111B" />
      <rect
        x="0.75"
        y="0.75"
        width="34.5"
        height="34.5"
        rx="10"
        stroke={`url(#${gradientId})`}
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 26V10l15 16V10"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className="logo" href="#top" aria-label="Nick's WebDev — back to top">
      <LogoMark size={compact ? 32 : 36} />
      <span className="logo__text">
        Nick's <span>WebDev</span>
      </span>
    </a>
  );
}
