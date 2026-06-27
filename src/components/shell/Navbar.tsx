"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/shell/MobileMenu";
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-24 flex items-center transition-colors duration-500 ${
          scrolled ? "bg-[#050505]" : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-0 flex items-center justify-between">
          <a href="/" aria-label="True Culture Tours home">
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`font-sans text-[13px] tracking-[0.15em] uppercase transition-colors duration-200 border-b pb-0.5 ${
                  pathname === href
                    ? "text-[#C8A04D] border-[#C8A04D]"
                    : "text-[#F8F8F5] border-transparent hover:text-[#C8A04D]"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="/book"
              className="font-sans text-[13px] tracking-[0.15em] uppercase text-[#C8A04D] border border-[#C8A04D] px-6 py-3 hover:bg-[#C8A04D] hover:text-[#050505] transition-all duration-200"
            >
              Book Now
            </a>
          </nav>

          {/* Desktop social icons */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#F8F8F5] hover:text-[#C8A04D] transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
