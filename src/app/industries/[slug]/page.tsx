import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Wrench, Factory } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import Reveal from "@/components/Reveal";
import SectionButton from "@/components/SectionButton";
import { industriesList, productGroups } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industriesList.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesList.find((item) => item.slug === slug);
  if (!industry) return { title: "Industry" };
  const cleanTitle = industry.title.replace(/&amp;/g, "&");
  return {
    title: `${cleanTitle} — SS Flexible Hoses & Bellows | Vedant Steel`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industriesList.find((item) => item.slug === slug);
  if (!industry) notFound();

  const cleanTitle = industry.title.replace(/&amp;/g, "&");

  type ProductItem = {
    slug: string;
    title: string;
    image: string;
    description: string;
  };

  const flexibleGroup = productGroups.find((g) => g.id === "flexible-hoses");
  const automotiveGroup = productGroups.find((g) => g.id === "automotive");
  const recommendedItems: readonly ProductItem[] =
    industry.slug === "automotive-oem"
      ? (automotiveGroup?.items ?? [])
      : ((flexibleGroup?.items as readonly ProductItem[])?.slice(0, 4) ?? []);

  const currentIndex = industriesList.findIndex((item) => item.slug === slug);
  const prevIndustry = industriesList[(currentIndex - 1 + industriesList.length) % industriesList.length];
  const nextIndustry = industriesList[(currentIndex + 1) % industriesList.length];

  return (
    <>
      <HeroPin variant="compact">
        <PageHero
          eyebrow="APPLICATION SECTOR"
          title={cleanTitle}
          image="/products/factory-floor.jpg"
          compact
        />
      </HeroPin>

      <article className="relative z-10 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#888]">
            <Link href="/industries" className="flex items-center gap-1.5 transition hover:text-industrial-steel">
              <ArrowLeft className="h-3.5 w-3.5" /> All Industries
            </Link>
            <span>/</span>
            <span className="text-industrial-ink font-semibold">{cleanTitle}</span>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-widest text-[#d90429] font-bold">
                  Sector Overview
                </span>
                <h1 className="font-display mt-2 text-3xl font-bold uppercase tracking-tight text-industrial-ink sm:text-4xl lg:text-5xl">
                  {cleanTitle}
                </h1>
                <p className="mt-6 border-l-4 border-[#d90429] pl-5 text-lg leading-relaxed font-medium text-industrial-ink">
                  {industry.description}
                </p>

                {industry.paras && industry.paras.length > 0 ? (
                  <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#555]">
                    {industry.paras.map((p, i) => (
                      <p key={i}>{p.replace(/&amp;/g, "&")}</p>
                    ))}
                  </div>
                ) : null}
              </Reveal>

              {/* Engineering Capabilities */}
              <div className="mt-12 border-t border-[#e6e6e6] pt-10">
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-industrial-ink">
                  Engineering Solutions for this Sector
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="border border-[#e6e6e6] bg-[#fafafa] p-5">
                    <div className="flex items-center gap-2.5 text-[#d90429] font-bold font-mono text-xs uppercase tracking-wider">
                      <Shield className="h-4 w-4" /> Thermal & Pressure Containment
                    </div>
                    <p className="mt-2 text-sm text-[#555] leading-relaxed">
                      Hydroformed annular corrugations and EJMA-compliant multi-ply bellows handle thermal expansion and high working pressures without convolution squirm.
                    </p>
                  </div>
                  <div className="border border-[#e6e6e6] bg-[#fafafa] p-5">
                    <div className="flex items-center gap-2.5 text-[#d90429] font-bold font-mono text-xs uppercase tracking-wider">
                      <Wrench className="h-4 w-4" /> Vibration & Mechanical Decoupling
                    </div>
                    <p className="mt-2 text-sm text-[#555] leading-relaxed">
                      Absorbs dynamic cyclic oscillations and protects pumps, turbines, manifolds, and rigid pipeline infrastructure from premature fatigue failures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommended Products */}
              <div className="mt-14 border-t border-[#e6e6e6] pt-10">
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-industrial-ink">
                  Recommended Products & Systems
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {recommendedItems.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}`}
                      className="group flex flex-col justify-between border border-[#e6e6e6] bg-[#fafafa] p-5 transition duration-300 hover:border-industrial-steel hover:bg-white hover:shadow-lg"
                    >
                      <div>
                        <div
                          className="h-40 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                          style={{ backgroundImage: `url(${prod.image})` }}
                        />
                        <h3 className="font-display mt-4 text-base font-bold uppercase tracking-wide text-industrial-ink group-hover:text-industrial-steel">
                          {prod.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#666]">
                          {prod.description}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#d90429]">
                        <span>View Specifications</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="border border-[#e6e6e6] bg-[#fafafa] p-6 sm:p-8">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#d90429]">
                  Inquiry & Specs
                </span>
                <h3 className="font-display mt-2 text-xl font-bold uppercase text-industrial-ink">
                  Specify For {cleanTitle}
                </h3>
                <p className="mt-3 text-sm text-[#555] leading-relaxed">
                  Provide your operating temperature, pressure, medium, and required movement. We configure the exact hose, bellows, and end connections.
                </p>
                <div className="mt-6">
                  <SectionButton
                    href={`/contact?subject=${encodeURIComponent(`Enquiry for ${cleanTitle} Applications`)}`}
                  >
                    Request Technical Quote
                  </SectionButton>
                </div>
              </div>

              <div className="border border-[#e6e6e6] bg-white p-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#888]">
                  Quality Assurance
                </span>
                <ul className="mt-4 space-y-2.5 text-xs text-[#555]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>ISO 9001:2015 Certified Manufacturing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>100% Hydrostatic Pressure Tested at 1.5×</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>EN 10204 Type 3.1 Mill Heat Traceability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>EJMA / BS 6501 / ISO 10380 Compliance</span>
                  </li>
                </ul>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center justify-between border-t border-[#e6e6e6] pt-4 text-xs font-medium">
                <Link
                  href={`/industries/${prevIndustry.slug}`}
                  className="flex items-center gap-1 text-[#666] hover:text-industrial-steel"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Previous
                </Link>
                <Link
                  href={`/industries/${nextIndustry.slug}`}
                  className="flex items-center gap-1 text-[#666] hover:text-industrial-steel"
                >
                  Next <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
