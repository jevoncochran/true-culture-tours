import { hosts } from "@/data/hosts";
import HostCard from "@/components/about/HostCard";

export default function HostsSection() {
  return (
    <section className="bg-[#050505] py-20 md:py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-[#C8A04D]/20" />
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C8A04D] shrink-0">
            Meet Your Hosts
          </span>
          <div className="flex-1 h-px bg-[#C8A04D]/20" />
        </div>

        <div className="flex flex-col gap-0">
          <HostCard host={hosts[0]} />
          <div className="mt-20" />
          <HostCard host={hosts[1]} />
        </div>
      </div>
    </section>
  );
}
