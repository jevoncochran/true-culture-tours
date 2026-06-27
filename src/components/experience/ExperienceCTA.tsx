import Button from "@/components/ui/Button";

function LogoMark() {
  return (
    <svg
      width="40"
      height="48"
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M20 1 L38 7 L38 27 Q38 40 20 47 Q2 40 2 27 L2 7 Z"
        stroke="#C8A04D"
        strokeWidth="0.8"
        fill="none"
        opacity="0.35"
      />
      <line x1="20" y1="5" x2="20" y2="37" stroke="#C8A04D" strokeWidth="1.2" />
      <line x1="13" y1="11" x2="13" y2="22" stroke="#C8A04D" strokeWidth="1.2" />
      <line x1="27" y1="11" x2="27" y2="22" stroke="#C8A04D" strokeWidth="1.2" />
      <path d="M11 5 L13 11 L15 5" stroke="#C8A04D" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      <path d="M25 5 L27 11 L29 5" stroke="#C8A04D" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      <line x1="13" y1="22" x2="27" y2="22" stroke="#C8A04D" strokeWidth="1.2" />
      <path d="M16 37 L20 43 L24 37" stroke="#C8A04D" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export default function ExperienceCTA() {
  return (
    <section className="bg-[#161616] py-10 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <LogoMark />
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-[#F8F8F5] mb-2">
            Ready to experience the real Chocó?
          </h3>
          <p className="font-sans text-sm text-[#B7B7B0] leading-relaxed">
            Join us for an unforgettable journey rooted in culture, community, and connection.
          </p>
        </div>
        <Button variant="primary" href="/book" className="shrink-0">
          Book Your Spot&nbsp;&nbsp;→
        </Button>
      </div>
    </section>
  );
}
