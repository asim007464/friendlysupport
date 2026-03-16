"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8ecec] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-85">
          <Logo size="md" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[15px] font-medium text-[#4a5568] after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-0 after:bg-[#1F7A7A] after:transition-all after:duration-200 hover:text-[#1F7A7A] hover:after:w-full after:content-['']"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-lg bg-[#1F7A7A] px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1a6565]"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#e8ecec] transition-colors hover:bg-[#F5F7F7] md:hidden"
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

      {/* Mobile Menu */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="border-t border-[#e8ecec] bg-[#F5F7F7] px-4 py-4">
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
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-lg bg-[#1F7A7A] px-4 py-3 text-center text-[15px] font-semibold text-white transition-colors hover:bg-[#1a6565]"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
