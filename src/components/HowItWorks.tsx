const steps = [
  {
    step: "1",
    title: "Get in Touch",
    text: "Book online or request a free consultation. Tell us what kind of support you are looking for, even if you are not yet entirely sure what would help most.",
  },
  {
    step: "2",
    title: "We Talk It Through",
    text: "A member of our team will contact you within 24–48 hours, often sooner, to understand your needs and answer any questions. There is no pressure and no obligation.",
  },
  {
    step: "3",
    title: "We Agree a Plan",
    text: "We confirm the type of support, visit times and costs clearly in writing before anything begins, so you know exactly what has been agreed.",
  },
  {
    step: "4",
    title: "Support Begins",
    text: "A suitable support worker visits at the agreed time. Wherever possible, we aim to provide familiar faces, so the support feels consistent, reassuring and personal.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#F8FAFA] py-20 sm:py-28" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F7A7A]">
            Simple Process
          </p>
          <h2
            id="how-it-works-heading"
            className="font-heading text-3xl font-bold text-[#1a3d3d] sm:text-4xl"
          >
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-[#5a6575]">
            From your first enquiry to your first visit, we keep everything
            clear, personal and straightforward.
          </p>
        </div>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F7A7A] text-sm font-bold text-white">
                {item.step}
              </span>
              <h3 className="font-heading mb-2 text-lg font-bold text-[#1a3d3d]">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#4a5568]">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
