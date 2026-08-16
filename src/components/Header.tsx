"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/data/siteContact";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8ecec] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-85">
          <Logo size="md" />
        </Link>

        {/* Desktop Nav: Home | Services | About | FAQ | Contact | Phone | Book Now */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[15px] font-medium text-[#4a5568] after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-0 after:bg-[#1F7A7A] after:transition-all after:duration-200 hover:text-[#1F7A7A] hover:after:w-full after:content-['']"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="text-[14px] font-semibold text-[#1a3d3d] hover:text-[#1F7A7A]"
          >
            {SITE_PHONE_DISPLAY}
          </a>
          <Link
            href="/apply"
            className="ml-1 rounded-lg border-2 border-[#1F7A7A] px-5 py-2.5 text-[15px] font-semibold text-[#1F7A7A] transition-colors hover:bg-[#1F7A7A]/5"
          >
            Apply Now
          </Link>
          <Link
            href="/book"
            className="rounded-lg bg-[#1F7A7A] px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1a6565]"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile: click-to-call phone + menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="rounded-lg px-2 py-2 text-[13px] font-semibold text-[#1F7A7A] sm:text-[14px]"
          >
            {SITE_PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#e8ecec] transition-colors hover:bg-[#F5F7F7]"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-[#1F7A7A] transition-all duration-200 ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-[#1F7A7A] transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-[#1F7A7A] transition-all duration-200 ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="border-t border-[#e8ecec] bg-[#F8FAFA] px-4 py-4">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#2d3748] transition-colors hover:bg-white hover:text-[#1F7A7A]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#1F7A7A] transition-colors hover:bg-white"
              >
                {SITE_PHONE_DISPLAY}
              </a>
              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-lg border-2 border-[#1F7A7A] px-4 py-3 text-center text-[15px] font-semibold text-[#1F7A7A] transition-colors hover:bg-white"
              >
                Apply Now
              </Link>
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-lg bg-[#1F7A7A] px-4 py-3 text-center text-[15px] font-semibold text-white transition-colors hover:bg-[#1a6565]"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
