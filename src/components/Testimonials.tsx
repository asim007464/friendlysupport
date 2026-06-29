import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F7A7A]">
            Families we support
          </p>
          <h2 id="testimonials-heading" className="font-heading text-3xl font-bold text-[#1a3d3d] sm:text-4xl">
            What people say
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm"
            >
              <p className="flex-1 text-[15px] leading-relaxed text-[#4a5568]">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 border-t border-[#f0f0f0] pt-4 text-[14px] font-medium text-[#1a3d3d]">
                {t.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
