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
        <div className="my-5 flex items-center justify-center">
          <div className="h-px w-20 sm:w-32 bg-[#C8A04D]" />
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
