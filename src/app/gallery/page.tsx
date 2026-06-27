import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Gallery — True Culture Tours",
  description:
    "Moments from Quibdó — the people, color, and energy of the Pacific and the San Pacho Festival.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Gallery"
        subtitle="Moments from Quibdó — the people, color, and energy of the Pacific."
        backgroundImage="/images/gallery/comparsa_girl.jpg"
        backgroundPosition="center 40%"
      />
      <section className="bg-[#050505] px-6 md:px-16 lg:px-24 py-24">
        <p className="max-w-[1280px] mx-auto text-center font-sans text-[#B7B7B0] tracking-widest uppercase text-sm">
          Gallery — coming soon
        </p>
      </section>
    </main>
  );
}
