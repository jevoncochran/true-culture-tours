"use client";

import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import GoldDivider from "@/components/ui/GoldDivider";
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

const socials = [
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "TikTok", Icon: TikTokIcon, href: "#" },
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "YouTube", Icon: YouTubeIcon, href: "#" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-[#050505]/96 backdrop-blur-sm flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 h-20">
            <Logo />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-[#F8F8F5] hover:text-[#C8A04D] transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 flex flex-col items-center justify-center px-8">
            {navLinks.map(({ label, href }, i) => (
              <div key={label} className="w-full text-center">
                <a
                  href={href}
                  onClick={onClose}
                  className="block py-6 font-sans text-base font-light tracking-[0.2em] uppercase text-[#F8F8F5] hover:text-[#C8A04D] transition-colors"
                >
                  {label}
                </a>
                {i < navLinks.length - 1 && (
                  <GoldDivider className="mx-auto" width="w-8" />
                )}
              </div>
            ))}

            <div className="w-full mt-8">
              <a
                href="#book"
                onClick={onClose}
                className="block w-full py-5 text-center font-sans text-xs font-semibold tracking-[0.15em] uppercase bg-[#C8A04D] text-[#050505] hover:brightness-110 transition-all"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="px-8 pb-12">
            <GoldDivider className="mb-6" width="w-full" />
            <p className="text-center text-[10px] font-sans tracking-[0.25em] uppercase text-[#C8A04D] mb-6">
              Connect With Us
            </p>
            <div className="flex flex-col">
              {socials.map(({ label, Icon, href }) => (
                <div key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 text-[#F8F8F5] hover:text-[#C8A04D] transition-colors"
                  >
                    <Icon size={20} />
                    <span className="font-sans text-sm tracking-[0.12em] uppercase">
                      {label}
                    </span>
                  </a>
                  <GoldDivider width="w-full" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
