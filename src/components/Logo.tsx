interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const w = size === "sm" ? 36 : 48;
  const h = size === "sm" ? 44 : 58;
  const titleSize = size === "sm" ? "text-[11px]" : "text-[14px]";
  const subtitleSize = size === "sm" ? "text-[9px]" : "text-[11px]";
  const lineW = size === "sm" ? "w-3" : "w-4";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield outline */}
        <path
          d="M20 1 L38 7 L38 27 Q38 40 20 47 Q2 40 2 27 L2 7 Z"
          stroke="#C8A04D"
          strokeWidth="0.8"
          fill="none"
          opacity="0.35"
        />
        {/* Center staff */}
        <line x1="20" y1="5" x2="20" y2="37" stroke="#C8A04D" strokeWidth="1.2" />
        {/* Left arm */}
        <line x1="13" y1="11" x2="13" y2="22" stroke="#C8A04D" strokeWidth="1.2" />
        {/* Right arm */}
        <line x1="27" y1="11" x2="27" y2="22" stroke="#C8A04D" strokeWidth="1.2" />
        {/* Left fork */}
        <path
          d="M11 5 L13 11 L15 5"
          stroke="#C8A04D"
          strokeWidth="1.2"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Right fork */}
        <path
          d="M25 5 L27 11 L29 5"
          stroke="#C8A04D"
          strokeWidth="1.2"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Cross bar */}
        <line x1="13" y1="22" x2="27" y2="22" stroke="#C8A04D" strokeWidth="1.2" />
        {/* Bottom point */}
        <path
          d="M16 37 L20 43 L24 37"
          stroke="#C8A04D"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      <div className="flex flex-col gap-0.5">
        <span
          className={`font-sans font-semibold tracking-[0.22em] uppercase text-[#C8A04D] leading-none ${titleSize}`}
        >
          True Culture
        </span>
        <div className="flex items-center gap-1.5">
          <div className={`h-px bg-[#C8A04D] ${lineW}`} />
          <span
            className={`font-sans font-medium tracking-[0.3em] uppercase text-[#C8A04D] leading-none ${subtitleSize}`}
          >
            Tours
          </span>
          <div className={`h-px bg-[#C8A04D] ${lineW}`} />
        </div>
      </div>
    </div>
  );
}
