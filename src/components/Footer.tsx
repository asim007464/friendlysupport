import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#1a3d3d]">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient accent */}
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#1F7A7A]/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#6BAED6]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo size="md" showTagline variant="dark" />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
              Founded by someone with many years of experience working in the NHS
              with older adults. Today, we use that understanding to offer warm,
              practical home support across Barnet and Enfield.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/90">
                Serving Barnet & Enfield
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Quick links
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA column */}
          <div className="lg:col-span-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Get in touch
            </h3>
            <p className="mb-6 text-[15px] leading-relaxed text-white/70">
              Ready to talk about support at home? We&apos;re here to help with a
              friendly, no-pressure conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-[#1F7A7A] transition-all hover:bg-white/95 hover:shadow-lg"
            >
              Contact us
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Friendly Support Limited. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/contact"
              className="text-white/50 transition-colors hover:text-white/80"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-white/50 transition-colors hover:text-white/80"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
