interface IconProps {
  size?: number;
  className?: string;
}

export default function AuthenticCultureIcon({
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
      {/* Center person */}
      <circle cx="24" cy="13" r="5" />
      <path d="M14 36 Q14 26 24 26 Q34 26 34 36" />
      {/* Left person */}
      <circle cx="10" cy="16" r="4" />
      <path d="M2 36 Q2 28 10 28 Q14 28 16 30" />
      {/* Right person */}
      <circle cx="38" cy="16" r="4" />
      <path d="M46 36 Q46 28 38 28 Q34 28 32 30" />
    </svg>
  );
}
