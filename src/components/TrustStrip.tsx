const trustPoints = [
  {
    title: "Practical, non-regulated support",
    text: "Companionship and everyday help at home, without personal care, nursing or medical tasks.",
  },
  {
    title: "Carefully selected support workers",
    text: "Our support workers are interviewed, DBS-checked and prepared to offer respectful, dependable support at home.",
  },
  {
    title: "Clear pricing, agreed in writing",
    text: "We confirm the cost in writing before you decide to proceed, so there are no unexpected charges.",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-[#e8ecec] bg-white py-10 sm:py-12" aria-label="Why families trust us">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <p className="font-heading text-[15px] font-bold text-[#1a3d3d]">{item.title}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[#64748b]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
