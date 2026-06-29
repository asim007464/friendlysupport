import Link from "next/link";
import { SERVICE_AREA_SHORT } from "@/data/areasCopy";
import { SITE_EMAIL, SITE_HOURS, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/data/siteContact";

export default function ContactBar({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 text-[15px] text-[#4a5568] ${className}`}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">Email</p>
        <a href={`mailto:${SITE_EMAIL}`} className="mt-1 block font-medium text-[#1F7A7A] hover:underline">
          {SITE_EMAIL}
        </a>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">Phone</p>
        {SITE_PHONE_TEL ? (
          <a href={`tel:${SITE_PHONE_TEL}`} className="mt-1 block font-medium text-[#1a3d3d] hover:text-[#1F7A7A]">
            {SITE_PHONE_DISPLAY}
          </a>
        ) : (
          <p className="mt-1 font-medium text-[#1a3d3d]">{SITE_PHONE_DISPLAY}</p>
        )}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">Office hours</p>
        <p className="mt-1 font-medium text-[#1a3d3d]">{SITE_HOURS}</p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">Area</p>
        <p className="mt-1 font-medium text-[#1a3d3d]">{SERVICE_AREA_SHORT}</p>
      </div>
      <p className="text-[14px] leading-relaxed text-[#64748b]">
        Prefer to talk? Call or email. You don&apos;t have to use the online form.
      </p>
      <Link href="/faq" className="inline-block text-[14px] font-semibold text-[#1F7A7A] hover:underline">
        Common questions →
      </Link>
    </div>
  );
}
