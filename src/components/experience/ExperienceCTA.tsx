import Button from "@/components/ui/Button";

export default function ExperienceCTA() {
  return (
    <section className="bg-[#161616] py-10 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
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
