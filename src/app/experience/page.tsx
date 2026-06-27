import PageHero from "@/components/shared/PageHero";
import ItineraryTimeline from "@/components/experience/ItineraryTimeline";
import ExperienceCTA from "@/components/experience/ExperienceCTA";

export const metadata = {
  title: "The Experience — True Culture Tours",
  description:
    "Five days of culture, connection, and unforgettable experiences during the San Pacho Festival in Quibdó, Colombia.",
};

export default function ExperiencePage() {
  return (
    <main>
      <PageHero
        title="The Itinerary"
        subtitle="Five days of culture, connection, and unforgettable experiences during the San Pacho Festival."
        backgroundImage="/images/experience/quibdo_facing_east.jpg"
        backgroundPosition="center 40%"
      />
      <ItineraryTimeline />
      <ExperienceCTA />
    </main>
  );
}
