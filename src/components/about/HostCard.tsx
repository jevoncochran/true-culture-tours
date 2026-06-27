import GoldDivider from "@/components/ui/GoldDivider";
import { Host } from "@/data/hosts";

function GlobeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function HostPhoto({ src, alt, objectPosition = "center" }: { src: string; alt: string; objectPosition?: string }) {
  return (
    <div className="w-full aspect-[3/4] overflow-hidden shrink-0">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" style={{ objectPosition }} />
      ) : (
        <div className="w-full h-full bg-[#161616] flex items-center justify-center">
          <span className="font-sans text-xs tracking-widest uppercase text-[#B7B7B0]/40">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}

export default function HostCard({ host }: { host: Host }) {
  const content = (
    <div className="flex flex-col justify-start">
      <h3 className="font-serif text-3xl md:text-4xl font-light text-[#F8F8F5] mb-2">
        {host.name}
      </h3>
      <div className="mb-3">
        {host.roles.map((row, i) => (
          <p key={i} className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#C8A04D]">
            {row.join(" · ")}
          </p>
        ))}
      </div>
      <GoldDivider className="mb-4" width="w-8" />
      <div className="space-y-3 mb-5">
        {host.bio.map((para, i) => (
          <p key={i} className="font-sans text-sm text-[#B7B7B0] leading-relaxed">
            {para}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[#C8A04D]">
        <GlobeIcon />
        <span className="font-sans text-xs">{host.languages}</span>
      </div>
    </div>
  );

  const photo = <HostPhoto src={host.image} alt={host.imageAlt} objectPosition={host.objectPosition} />;

  return (
    <div className={`grid grid-cols-1 gap-6 md:gap-10 ${host.photoSide === "left" ? "md:grid-cols-[360px_1fr]" : "md:grid-cols-[1fr_360px]"}`}>
      {host.photoSide === "left" ? (
        <>
          {photo}
          {content}
        </>
      ) : (
        <>
          {content}
          {photo}
        </>
      )}
    </div>
  );
}
