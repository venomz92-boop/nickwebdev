import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function IconBase({
  size = 20,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </IconBase>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

export function Check(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4.2 4.2L19 6.5" />
    </IconBase>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export function MonitorSmartphone(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="2.5" y="4" width="14" height="10" rx="1.5" />
      <path d="M7 18h5" />
      <path d="M9.5 14v4" />
      <rect x="16" y="9" width="5.5" height="11" rx="1.2" />
      <path d="M18.8 17.8h.01" />
    </IconBase>
  );
}

export function Gauge(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="m12 14 3.5-4" />
      <path d="M5 18h2" />
      <path d="M17 18h2" />
      <path d="M12 4v2" />
      <path d="M6.3 6.8 7.8 8.2" />
      <path d="m17.7 6.8-1.5 1.4" />
    </IconBase>
  );
}

export function CloudUpload(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7.5 18.5H6a4 4 0 0 1-.4-8 6 6 0 0 1 11.8-1.2A3.5 3.5 0 0 1 18 16.4" />
      <path d="M12 20V11" />
      <path d="m8.8 13.8 3.2-3 3.2 3" />
    </IconBase>
  );
}

export function Briefcase(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3 12h18" />
      <path d="M10.5 12v2h3v-2" />
    </IconBase>
  );
}

export function LayoutTemplate(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3.5" width="18" height="17" rx="2" />
      <path d="M3 9h18" />
      <path d="M9.5 9v11.5" />
    </IconBase>
  );
}

export function Layers(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </IconBase>
  );
}

export function FileStack(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 2.8h6.7L19 7v9.7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 7 16.7V4.3A1.5 1.5 0 0 1 8.5 2.8Z" />
      <path d="M14.5 3v4.5H19" />
      <path d="M4 7.5v12A2.5 2.5 0 0 0 6.5 22h8" />
    </IconBase>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.4 7.6L3.5 20.5l1.3-4.4a8.5 8.5 0 1 1 15.7-4.5Z" />
      <path d="M8.4 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.5l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .6.5.9 1.2 1.6 2.1 2.1.3.2.5.1.6 0l.7-.8c.2-.2.3-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .3-.2 1.5-1.3 2-.4.2-.9.3-1.4.2-1-.2-2.5-.9-4-2.3-1.3-1.2-2.1-2.6-2.3-3.6-.1-.7.1-1.4.3-1.8Z" />
    </IconBase>
  );
}

export function Mail(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </IconBase>
  );
}

export function MapPin(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.7" />
    </IconBase>
  );
}

export function Clock(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </IconBase>
  );
}

export function Rocket(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M13.1 4.1c2.4-1.7 5.5-1.4 5.5-1.4s.3 3.1-1.4 5.5l-4.7 6.4-5.8-5.8 6.4-4.7Z" />
      <path d="m8.4 13.1-3.2 3.2" />
      <path d="M5.9 15.7c-1.5 1-1.4 3.8-1.4 3.8s2.8.1 3.8-1.4" />
      <path d="m10.2 8.3 5.5 5.5" />
      <circle cx="15.5" cy="7.8" r="1.25" />
    </IconBase>
  );
}

export function Menu(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function Close(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}

export function Plus(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </IconBase>
  );
}

export function Globe(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </IconBase>
  );
}
