function HeroOrnament() {
  return (
    <svg
      width="30"
      height="36"
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 1 L38 7 L38 27 Q38 40 20 47 Q2 40 2 27 L2 7 Z"
        stroke="#C8A04D"
        strokeWidth="0.8"
        fill="none"
        opacity="0.35"
      />
      <line x1="20" y1="5" x2="20" y2="37" stroke="#C8A04D" strokeWidth="1.2" />
      <line
        x1="13"
        y1="11"
        x2="13"
        y2="22"
        stroke="#C8A04D"
        strokeWidth="1.2"
      />
      <line
        x1="27"
        y1="11"
        x2="27"
        y2="22"
        stroke="#C8A04D"
        strokeWidth="1.2"
      />
      <path
        d="M11 5 L13 11 L15 5"
        stroke="#C8A04D"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M25 5 L27 11 L29 5"
        stroke="#C8A04D"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      <line
        x1="13"
        y1="22"
        x2="27"
        y2="22"
        stroke="#C8A04D"
        strokeWidth="1.2"
      />
      <path
        d="M16 37 L20 43 L24 37"
        stroke="#C8A04D"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  /** CSS background-position for the image (e.g. "center", "center 30%"). Defaults to "center". */
  backgroundPosition?: string;
  /** Small uppercase label shown above the title */
  eyebrow?: string;
  /** Emphasized line (e.g. dates / location) shown above the subtitle */
  detail?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  backgroundPosition = "center",
  eyebrow,
  detail,
}: PageHeroProps) {
  return (
    <section className="relative h-[58vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      {/* Gradient fallback sits at the back */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1208] via-[#0d0c0a] to-[#050505]" />
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundPosition,
          }}
        />
      )}
      {/* Dark overlay on top for text legibility */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-3xl mx-auto pt-24">
        {eyebrow && (
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C8A04D] mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-tight text-[#F8F8F5]">
          {title}
        </h1>
        <div className="my-5 flex items-center gap-4">
          <div className="h-px w-10 sm:w-16 bg-[#C8A04D]" />
          <HeroOrnament />
          <div className="h-px w-10 sm:w-16 bg-[#C8A04D]" />
        </div>
        {detail && (
          <p className="font-sans text-sm md:text-base text-[#F8F8F5] mb-2">
            {detail}
          </p>
        )}
        <p className="font-sans text-base md:text-lg text-[#F8F8F5]/85 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
