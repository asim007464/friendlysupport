import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceIconByName from "@/components/services/ServiceIconByName";
import {
  SERVICES,
  getOtherServices,
  getServiceBySlug,
} from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: `${service.title} | Friendly Support Limited`,
    description: `${service.summary} Home help across Greater London. ${service.pricing}`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = getOtherServices(slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[42vh] overflow-hidden">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1a3d3d]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3d3d] via-transparent to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <Link
              href="/services"
              className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All services
            </Link>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
              <ServiceIconByName name={service.icon} className="h-8 w-8" color="#ffffff" />
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
              {service.summary}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
              <div>
                <h2 className="font-heading text-2xl font-bold text-[#1a3d3d] sm:text-3xl">
                  About this service
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-[#4a5568]">{service.details}</p>

                <h3 className="font-heading mt-10 text-xl font-bold text-[#1a3d3d]">
                  What we can help with
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#4a5568]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1F7A7A]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-5">
                  <p className="text-[14px] font-semibold text-[#92400e]">Good to know</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#78350f]">
                    {service.goodToKnow}
                  </p>
                </div>
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-[#1a3d3d]">Price guide</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#4a5568]">{service.pricing}</p>
                  <p className="mt-4 text-[14px] leading-relaxed text-[#64748b]">
                    We confirm exact costs in writing before you agree. No surprises.
                  </p>
                  <div className="mt-6 space-y-3">
                    <Link
                      href="/book"
                      className="flex w-full items-center justify-center rounded-xl bg-[#1F7A7A] px-5 py-3.5 text-[15px] font-semibold text-white hover:bg-[#1a6565]"
                    >
                      Book this service
                    </Link>
                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-center rounded-xl border-2 border-[#1F7A7A] px-5 py-3.5 text-[15px] font-semibold text-[#1F7A7A] hover:bg-[#1F7A7A]/5"
                    >
                      Free consultation
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Other services */}
        {others.length > 0 && (
          <section className="border-t border-[#e8ecec] bg-white py-14 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl font-bold text-[#1a3d3d] sm:text-3xl">
                Other services
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="group overflow-hidden rounded-2xl border border-[#e8ecec] bg-[#F8FAFA] transition-all hover:border-[#1F7A7A]/30 hover:shadow-md"
                  >
                    <div className="relative h-32">
                      <Image
                        src={other.image.src}
                        alt={other.image.alt}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-heading text-[15px] font-bold text-[#1a3d3d] group-hover:text-[#1F7A7A]">
                        {other.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
