import PageHero from "@/components/shared/PageHero";
import MissionSection from "@/components/about/MissionSection";
import HostsSection from "@/components/about/HostsSection";
import ExperienceCTA from "@/components/experience/ExperienceCTA";

export const metadata = {
  title: "About Us — True Culture Tours",
  description:
    "We create immersive cultural experiences that connect travelers with the people, traditions, and stories that make destinations truly unforgettable.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="We create immersive cultural experiences that connect travelers with the people, traditions, and stories that make destinations truly unforgettable."
        backgroundImage="/images/about/atrato_different_paths.jpg"
        backgroundPosition="center 70%"
      />
      <MissionSection />
      <HostsSection />
      <ExperienceCTA />
    </main>
  );
}
