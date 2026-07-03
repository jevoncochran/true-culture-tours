import Logo from "@/components/Logo";
import {
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Book Now", href: "/book" },
];

const socialLinks = [
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/trueculturetours",
    label: "Instagram",
  },
  {
    Icon: TikTokIcon,
    href: "https://www.tiktok.com/@trueculturetours",
    label: "TikTok",
  },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: YouTubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0C0C0C] to-[#080808] border-t border-[#C8A04D]/40">
      {/* Gold accent line sitting on the top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-32 bg-[#C8A04D]" />
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-0 py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-5 md:max-w-xs">
            <a href="/" aria-label="True Culture Tours home">
              <Logo />
            </a>
            <p className="font-serif text-[17px] leading-relaxed text-[#F8F8F5]/70">
              Immersive cultural journeys rooted in authenticity, connection,
              and unforgettable experiences in Quibdó, Colombia.
            </p>
          </div>

          {/* Explore links */}
          <nav className="flex flex-col gap-4">
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#C8A04D]">
              Explore
            </span>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-sans text-[13px] tracking-[0.12em] uppercase text-[#F8F8F5]/80 hover:text-[#C8A04D] transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#C8A04D]">
              Connect
            </span>
            <a
              href="mailto:hello@trueculturetours.com"
              className="font-sans text-[13px] tracking-[0.05em] text-[#F8F8F5]/80 hover:text-[#C8A04D] transition-colors duration-200"
            >
              hello@trueculturetours.com
            </a>
            <div className="flex items-center gap-4 mt-1">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8F8F5] hover:text-[#C8A04D] transition-colors"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#C8A04D]/15 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-[#F8F8F5]/50">
            © {year} True Culture Tours. All rights reserved.
          </p>
          <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-[#F8F8F5]/50">
            Travel Beyond Tourism
          </p>
        </div>
      </div>
    </footer>
  );
}
