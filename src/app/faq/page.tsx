import PageHero from "@/components/shared/PageHero";
import FaqAccordion from "@/components/faq/FaqAccordion";
import ExperienceCTA from "@/components/experience/ExperienceCTA";

export const metadata = {
  title: "FAQ — True Culture Tours",
  description:
    "Everything you need to know about your journey to Quibdó and the San Pacho Festival.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero
        title="FAQ"
        subtitle="Everything you need to know about your journey to Quibdó and the San Pacho Festival."
        backgroundImage="/images/faq/quibdo_sign.jpg"
        backgroundPosition="center 63%"
      />
      <section className="bg-[#050505] px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-[1280px] mx-auto">
          <FaqAccordion />
        </div>
      </section>
      <ExperienceCTA />
    </main>
  );
}
