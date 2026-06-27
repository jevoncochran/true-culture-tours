import { itineraryDays } from "@/data/itinerary";
import ItineraryDay from "@/components/experience/ItineraryDay";

export default function ItineraryTimeline() {
  return (
    <section className="bg-[#050505] px-6 md:px-16 lg:px-24 py-16 pb-24">
      {itineraryDays.map((day, index) => (
        <ItineraryDay key={day.day} day={day} index={index} />
      ))}
    </section>
  );
}
