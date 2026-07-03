interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const titleSize = size === "sm" ? "text-[13px]" : "text-[16px]";
  const subtitleSize = size === "sm" ? "text-[9px]" : "text-[11px]";

  return (
    <div className={`inline-flex flex-col gap-0.5 ${className}`}>
      <span
        className={`font-sans font-semibold tracking-[0.22em] uppercase text-[#C8A04D] leading-none ${titleSize}`}
      >
        True Culture
      </span>
      <div className="flex items-center gap-1.5 w-full">
        <div className="h-px bg-[#C8A04D] flex-1" />
        <span
          className={`font-sans font-medium tracking-[0.3em] uppercase text-[#C8A04D] leading-none ${subtitleSize}`}
        >
          Tours
        </span>
        <div className="h-px bg-[#C8A04D] flex-1" />
      </div>
    </div>
  );
}
