import PageHero from "@/components/shared/PageHero";
import BookingExperience from "@/components/book/BookingExperience";
import TrustBadges from "@/components/book/TrustBadges";
import { tripDetails } from "@/data/booking";

export const metadata = {
  title: "Book — San Pacho 2026 | True Culture Tours",
  description:
    "Reserve your spot for San Pacho 2026 in Quibdó, Chocó, Colombia — one of Colombia's most vibrant cultural celebrations.",
};

export default function BookPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reserve Your Spot"
        title="San Pacho 2026"
        detail={`${tripDetails.dates}  •  ${tripDetails.location}`}
        subtitle="Experience one of Colombia's most vibrant cultural celebrations with True Culture Tours."
        backgroundImage="/images/book/lancha.jpg"
        backgroundPosition="center 56%"
      />
      <BookingExperience />
      <TrustBadges />
    </main>
  );
}
