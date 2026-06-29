const steps = [
  {
    step: "1",
    title: "Get in touch",
    text: "Book online or ask for a free consultation. Tell us what would help, even if you are not sure yet.",
  },
  {
    step: "2",
    title: "We talk it through",
    text: "A real person from our team calls or emails within 24–48 hours. No scripts, no pressure.",
  },
  {
    step: "3",
    title: "We agree a plan",
    text: "Visit times, type of support and costs are confirmed in writing before anything starts.",
  },
  {
    step: "4",
    title: "Support begins",
    text: "A familiar support worker visits or stays with you. We aim for the same faces each time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#F8FAFA] py-20 sm:py-28" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F7A7A]">
            Simple process
          </p>
          <h2 id="how-it-works-heading" className="font-heading text-3xl font-bold text-[#1a3d3d] sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-[#5a6575]">
            From your first message to your first visit. Clear steps, no confusion.
          </p>
        </div>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li key={item.step} className="relative rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F7A7A] text-sm font-bold text-white">
                {item.step}
              </span>
              <h3 className="font-heading mb-2 text-lg font-bold text-[#1a3d3d]">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#4a5568]">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
