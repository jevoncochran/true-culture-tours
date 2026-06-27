import GoldDivider from "@/components/ui/GoldDivider";

const paragraphs = [
  "True Culture Tours was created to connect travelers with the people, culture, traditions, and stories that make destinations truly special.",
  "We believe the most meaningful travel experiences happen when you move beyond sightseeing and build genuine connections with the places you visit.",
  "Our experiences are intentionally designed for curious travelers who want more than a vacation.",
  "Through culture, food, music, history, and community, we create opportunities to experience destinations in a deeper and more authentic way.",
  "For our inaugural journey, we're proud to invite travelers to experience Quibdó and the San Pacho Festival—one of the most vibrant cultural celebrations in Colombia.",
];

function MissionImage() {
  return (
    <div className="w-full h-full min-h-[400px] overflow-hidden">
      <img
        src="/images/about/antioqueno.jpg"
        alt="Aboard a lancha on the Atrato river"
        className="w-full h-full object-cover min-h-[400px]"
      />
    </div>
  );
}

export default function MissionSection() {
  return (
    <section className="bg-[#050505] py-20 md:py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C8A04D] mb-3 block">
            More Than a Trip
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F8F8F5] mb-4">
            More Than a Trip
          </h2>
          <GoldDivider className="mb-6" width="w-8" />
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="font-sans text-sm text-[#B7B7B0] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
        <MissionImage />
      </div>
    </section>
  );
}
