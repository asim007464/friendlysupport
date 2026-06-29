import ContactBar from "@/components/ContactBar";
import { LIVE_IN_WEEK_GUIDE_SHORT } from "@/data/pricingCopy";

const nextSteps = [
  "We reply within 24–48 hours",
  "A friendly, no-pressure chat about your needs",
  "Arrange a first visit if it feels right",
];

export default function BookSidebar() {
  return (
    <aside className="w-full lg:w-[320px] lg:shrink-0">
      <div className="sticky top-24 space-y-5">
        <div className="rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm">
          <h2 className="font-heading mb-3 text-lg font-bold text-[#1a3d3d]">A friendly start</h2>
          <p className="text-[14px] leading-relaxed text-[#4a5568]">
            This form is the start of a conversation, not a contract. Tell us what you need and we
            will call or email back with a clear, honest answer.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-lg bg-[#1F7A7A]/10 px-3 py-1.5 text-[13px] font-semibold text-[#1a6565]">
              2hr minimum visits
            </span>
            <span className="rounded-lg bg-[#1F7A7A]/10 px-3 py-1.5 text-[13px] font-semibold text-[#1a6565]">
              8am–8pm hourly
            </span>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-[#64748b]">
            Live-in support is quoted weekly. {LIVE_IN_WEEK_GUIDE_SHORT}
          </p>
        </div>

        <div className="rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm">
          <h2 className="font-heading mb-4 text-lg font-bold text-[#1a3d3d]">Contact details</h2>
          <ContactBar className="!space-y-5" />
        </div>

        <div className="rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm">
          <h2 className="font-heading mb-4 text-lg font-bold text-[#1a3d3d]">What happens next?</h2>
          <ol className="space-y-4">
            {nextSteps.map((step, i) => (
              <li key={step} className="flex gap-3 text-[14px] leading-relaxed text-[#4a5568]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1F7A7A]/15 text-[13px] font-bold text-[#1F7A7A]">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </aside>
  );
}
