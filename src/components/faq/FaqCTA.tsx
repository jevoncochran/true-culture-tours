import Button from "@/components/ui/Button";

export default function FaqCTA() {
  return (
    <section className="bg-[#050505] px-6 md:px-16 lg:px-24 pb-20">
      <div className="border border-[#C8A04D]/40 max-w-[1280px] mx-auto py-16 px-8 flex flex-col items-center text-center gap-5">
        <h3 className="font-serif text-3xl md:text-4xl font-light text-[#F8F8F5]">
          Ready to experience the real Chocó?
        </h3>
        <p className="font-sans text-sm text-[#B7B7B0] leading-relaxed max-w-lg">
          Join us for an unforgettable journey rooted in culture, community, and connection.
        </p>
        <Button variant="primary" href="/book" className="mt-2">
          Book Your Spot&nbsp;&nbsp;→
        </Button>
      </div>
    </section>
  );
}
