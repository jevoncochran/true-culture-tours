interface IconProps {
  size?: number;
  className?: string;
}

export default function SmallGroupIcon({
  size = 48,
  className = "",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Top person (leader) */}
      <circle cx="24" cy="10" r="4" />
      <path d="M17 22 Q17 16 24 16 Q31 16 31 22" />
      {/* Bottom-left person */}
      <circle cx="12" cy="30" r="3.5" />
      <path d="M6 40 Q6 34 12 34 Q18 34 18 40" />
      {/* Bottom-right person */}
      <circle cx="36" cy="30" r="3.5" />
      <path d="M30 40 Q30 34 36 34 Q42 34 42 40" />
      {/* Connecting lines */}
      <line x1="24" y1="22" x2="14" y2="28" strokeOpacity="0.5" />
      <line x1="24" y1="22" x2="34" y2="28" strokeOpacity="0.5" />
    </svg>
  );
}
