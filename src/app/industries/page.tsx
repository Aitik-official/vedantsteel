import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Factory, ShieldCheck, Flame, Cpu, Waves, Anchor, Fuel } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import Reveal from "@/components/Reveal";
import { industriesList } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries Served | Stainless Steel Flexible Solutions | Vedant Steel",
  description:
    "Supplying engineered SS flexible hoses, expansion bellows, and piping systems to Power, Chemicals, Cryogenics, Marine, Steel, Aerospace, and Data Centers.",
};

const industryIcons: Record<string, any> = {
  "power-coal-thermal-gas": Flame,
  "power-nuclear-atomic": Cpu,
  "chemicals-petrochemicals-refinery": Fuel,
  "cryogenics-lng-transfer": Waves,
  "ship-building-marine": Anchor,
  "steel-industry": Factory,
};

export default function IndustriesIndexPage() {
  return (
    <>
      <HeroPin variant="compact">
        <PageHero
          eyebrow="ENGINEERED APPLICATION SECTORS"
          title="INDUSTRIES SERVED"
          image="/products/factory-floor.jpg"
          compact
        />
      </HeroPin>

      <section className="relative z-10 bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-industrial-steel">
              CRITICAL OPERATING ENVIRONMENTS
            </p>
            <h1 className="font-display mt-3 text-3xl font-medium uppercase tracking-[0.02em] text-industrial-ink sm:text-4xl lg:text-5xl">
              Engineered for extreme duty across 15 global industrial sectors
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#555]">
              From supercritical thermal and nuclear power plants to cryogenic LNG transfer,
              chemical refineries, and automotive exhaust systems — our stainless steel flexible
              hoses and expansion bellows are engineered to withstand extreme pressures,
              high-frequency vibration, and temperatures ranging from -270 °C to +700 °C.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industriesList.map((ind, idx) => {
              const Icon = industryIcons[ind.slug] || Factory;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group relative flex flex-col justify-between border border-[#e6e6e6] bg-[#fafafa] p-6 transition duration-300 hover:-translate-y-1 hover:border-industrial-steel hover:bg-white hover:shadow-xl sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#999] group-hover:text-industrial-steel">
                        ({String(idx + 1).padStart(2, "0")})
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-industrial-soft text-industrial-steel transition group-hover:bg-[#d90429] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h2 className="font-display mt-6 text-xl font-medium uppercase tracking-[0.03em] text-industrial-ink transition group-hover:text-industrial-steel">
                      {ind.title.replace(/&amp;/g, "&")}
                    </h2>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#666]">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 pt-4 border-t border-[#eee] text-xs font-bold uppercase tracking-widest text-industrial-steel group-hover:text-[#d90429]">
                    <span>Explore Solutions</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 rounded-xl border border-industrial-steel/20 bg-industrial-dark p-8 text-white sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-red-500">
                  Custom Engineering
                </span>
                <h3 className="font-display mt-2 text-2xl font-bold uppercase tracking-wide sm:text-3xl">
                  Require custom flexible assemblies for your specific plant duty?
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/70">
                  Our engineering team assists with EJMA calculations, material selection (AISI 304,
                  316L, 321, Inconel), and tailored flange/threaded end configurations.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 bg-[#d90429] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b00220]"
              >
                Request Technical Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
