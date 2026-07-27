import { SITE_EMERGENCY } from "@/data/siteContact";

export default function EmergencyNote() {
  return (
    <section
      className="border-y border-[#fde68a] bg-[#fffbeb] py-4"
      aria-label="Emergency information"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[14px] leading-relaxed text-[#92400e]">
          <strong className="font-semibold">Emergency:</strong> {SITE_EMERGENCY}
        </p>
      </div>
    </section>
  );
}
