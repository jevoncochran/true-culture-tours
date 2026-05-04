interface IconProps {
  size?: number;
  className?: string;
}

export default function HeartIcon({ size = 48, className = "" }: IconProps) {
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
      <path d="M24 40 C24 40 6 28 6 16 A10 10 0 0 1 24 12 A10 10 0 0 1 42 16 C42 28 24 40 24 40 Z" />
    </svg>
  );
}
