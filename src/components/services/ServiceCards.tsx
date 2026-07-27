import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import ServiceIconByName from "@/components/services/ServiceIconByName";

const iconAccents = [
  "bg-[#1F7A7A]/15 text-[#1F7A7A]",
  "bg-[#6BAED6]/15 text-[#2a7a9e]",
  "bg-[#7FBF7F]/20 text-[#2d7a2d]",
  "bg-[#1F7A7A]/15 text-[#1F7A7A]",
  "bg-[#6BAED6]/15 text-[#2a7a9e]",
  "bg-[#1F7A7A]/15 text-[#1F7A7A]",
];

type ServiceCardsProps = {
  limit?: number;
};

export default function ServiceCards({ limit }: ServiceCardsProps) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const accent = iconAccents[index % iconAccents.length];

        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group overflow-hidden rounded-2xl border border-[#e8ecec] bg-white shadow-[0_1px_3px_rgba(26,61,61,0.08)] transition-all duration-300 hover:border-[#1F7A7A]/40 hover:shadow-[0_12px_40px_rgba(26,61,61,0.12)]"
          >
            <div className="relative h-44 w-full sm:h-48">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3d3d]/60 via-[#1a3d3d]/10 to-transparent" />
              <div
                className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${accent} bg-white/95 shadow-sm`}
              >
                <ServiceIconByName name={service.icon} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading mb-2 text-lg font-bold text-[#1a3d3d] group-hover:text-[#1F7A7A]">
                {service.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#4a5568]">{service.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-[#1F7A7A]">
                View details & pricing →
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
