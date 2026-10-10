import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, Flame, Gauge, ArrowRight, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import Reveal from "@/components/Reveal";
import SectionButton from "@/components/SectionButton";

export const metadata: Metadata = {
  title: "Technical Specifications & Engineering Guide | Vedant Steel",
  description:
    "Engineering data for stainless steel flexible hoses and expansion bellows: material grades, size range, pressure ratings, bend radius, and EJMA design standards.",
};

export default function TechnicalPage() {
  const materials = [
    {
      grade: "AISI 304 / 304L",
      description: "Standard austenitic stainless steel for water, steam, general chemicals, and non-corrosive industrial atmospheres.",
      temp: "-200 °C to +500 °C",
      application: "General industrial, HVAC, cooling circuits, compressed air",
    },
    {
      grade: "AISI 316 / 316L",
      description: "Molybdenum-bearing austenitic alloy providing superior pitting and crevice corrosion resistance in chloride environments.",
      temp: "-200 °C to +600 °C",
      application: "Marine, offshore, chemical processing, pharmaceutical, petrochemical",
    },
    {
      grade: "AISI 321",
      description: "Titanium-stabilized stainless steel resisting chromium carbide precipitation during continuous high-temperature service.",
      temp: "-200 °C to +700 °C",
      application: "Turbine exhaust, furnace lines, thermal power bypass, hot flue gas",
    },
    {
      grade: "AISI 409 / 439",
      description: "Ferritic stainless steels engineered for automotive exhaust flex connectors and EGR tubes with excellent thermal cyclic fatigue strength.",
      temp: "Up to +650 °C cyclic",
      application: "Automotive OEM downpipes, catalytic converter decouplers, EGR loops",
    },
  ];

  const standards = [
    { title: "BS 6501 Part 1", desc: "Corrugated stainless steel hose assemblies for general industrial applications." },
    { title: "ISO 10380", desc: "Corrugated metal hoses and hose assemblies — Type 1 & 2 pressure and cycle fatigue tests." },
    { title: "EJMA 10th Edition", desc: "Standards of the Expansion Joint Manufacturers Association for bellows design calculations." },
    { title: "ASME Section IX", desc: "Welding and brazing procedure qualifications for pressure boundary integrity." },
    { title: "EN 10204 Type 3.1", desc: "Full inspection and chemical/mechanical test certification with mill heat number." },
  ];

  return (
    <>
      <HeroPin variant="compact">
        <PageHero
          eyebrow="ENGINEERING DATA & DESIGN STANDARDS"
          title="TECHNICAL DETAILS"
          image="/products/factory-floor.jpg"
          compact
        />
      </HeroPin>

      <div className="relative z-10 bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
          <Reveal className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d90429] font-bold">
              Engineering Excellence
            </span>
            <h1 className="font-display mt-2 text-3xl font-bold uppercase tracking-tight text-industrial-ink sm:text-4xl lg:text-5xl">
              Precision design guidelines for flexible metal systems
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#555]">
              Every flexible hose assembly and expansion joint bellow is engineered against four fundamental parameters:
              Operating Temperature, Media Chemistry, Dynamic Pressure, and Pipeline Movement.
            </p>
          </Reveal>

          {/* Material Grades */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-industrial-ink">
              1. Material Grades & Metallurgy
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {materials.map((m) => (
                <div key={m.grade} className="border border-[#e6e6e6] bg-[#fafafa] p-6 transition hover:border-industrial-steel">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-industrial-ink">{m.grade}</span>
                    <span className="font-mono text-xs font-semibold text-[#d90429] bg-red-50 px-2.5 py-1 rounded">
                      {m.temp}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[#555] leading-relaxed">{m.description}</p>
                  <p className="mt-4 border-t border-[#eee] pt-3 text-xs text-[#777]">
                    <strong className="text-industrial-ink">Primary Duty:</strong> {m.application}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Size & Pressure Guide */}
          <div className="mt-16 border-t border-[#e6e6e6] pt-14">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-industrial-ink">
              2. Size & Pressure Ratings (DN 6 to DN 300)
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-industrial-steel bg-industrial-soft">
                    <th className="py-3 px-4 font-mono text-xs uppercase tracking-wider text-industrial-ink">Nominal Bore</th>
                    <th className="py-3 px-4 font-mono text-xs uppercase tracking-wider text-industrial-ink">Bore (Inches)</th>
                    <th className="py-3 px-4 font-mono text-xs uppercase tracking-wider text-industrial-ink">Static Bend Radius</th>
                    <th className="py-3 px-4 font-mono text-xs uppercase tracking-wider text-industrial-ink">Dynamic Bend Radius</th>
                    <th className="py-3 px-4 font-mono text-xs uppercase tracking-wider text-industrial-ink">Single Braid WP</th>
                    <th className="py-3 px-4 font-mono text-xs uppercase tracking-wider text-industrial-ink">Double Braid WP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee]">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-industrial-ink">DN 6</td>
                    <td className="py-3 px-4 text-[#555]">1/4&quot;</td>
                    <td className="py-3 px-4 text-[#555]">25 mm</td>
                    <td className="py-3 px-4 text-[#555]">100 mm</td>
                    <td className="py-3 px-4 font-mono text-xs text-green-700">150 bar</td>
                    <td className="py-3 px-4 font-mono text-xs font-bold text-green-700">225 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-industrial-ink">DN 12</td>
                    <td className="py-3 px-4 text-[#555]">1/2&quot;</td>
                    <td className="py-3 px-4 text-[#555]">45 mm</td>
                    <td className="py-3 px-4 text-[#555]">150 mm</td>
                    <td className="py-3 px-4 font-mono text-xs text-green-700">80 bar</td>
                    <td className="py-3 px-4 font-mono text-xs font-bold text-green-700">120 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-industrial-ink">DN 25</td>
                    <td className="py-3 px-4 text-[#555]">1&quot;</td>
                    <td className="py-3 px-4 text-[#555]">90 mm</td>
                    <td className="py-3 px-4 text-[#555]">260 mm</td>
                    <td className="py-3 px-4 font-mono text-xs text-green-700">50 bar</td>
                    <td className="py-3 px-4 font-mono text-xs font-bold text-green-700">75 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-industrial-ink">DN 50</td>
                    <td className="py-3 px-4 text-[#555]">2&quot;</td>
                    <td className="py-3 px-4 text-[#555]">175 mm</td>
                    <td className="py-3 px-4 text-[#555]">480 mm</td>
                    <td className="py-3 px-4 font-mono text-xs text-green-700">28 bar</td>
                    <td className="py-3 px-4 font-mono text-xs font-bold text-green-700">42 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-industrial-ink">DN 100</td>
                    <td className="py-3 px-4 text-[#555]">4&quot;</td>
                    <td className="py-3 px-4 text-[#555]">290 mm</td>
                    <td className="py-3 px-4 text-[#555]">750 mm</td>
                    <td className="py-3 px-4 font-mono text-xs text-green-700">16 bar</td>
                    <td className="py-3 px-4 font-mono text-xs font-bold text-green-700">25 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-industrial-ink">DN 200</td>
                    <td className="py-3 px-4 text-[#555]">8&quot;</td>
                    <td className="py-3 px-4 text-[#555]">550 mm</td>
                    <td className="py-3 px-4 text-[#555]">1300 mm</td>
                    <td className="py-3 px-4 font-mono text-xs text-green-700">10 bar</td>
                    <td className="py-3 px-4 font-mono text-xs font-bold text-green-700">16 bar</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#888]">
              * Test pressure is standard 1.5× working pressure. Burst pressure rating is 4× working pressure.
            </p>
          </div>

          {/* Standards & Compliance */}
          <div className="mt-16 border-t border-[#e6e6e6] pt-14">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-industrial-ink">
              3. Standards & Quality Codes
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {standards.map((s) => (
                <div key={s.title} className="border border-[#e6e6e6] bg-[#fafafa] p-5">
                  <div className="flex items-center gap-2 font-display text-base font-bold text-industrial-ink">
                    <ShieldCheck className="h-4 w-4 text-[#d90429]" />
                    {s.title}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#666]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-industrial-dark p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
                Technical Consultation
              </span>
              <h3 className="font-display mt-2 text-2xl font-bold uppercase sm:text-3xl">
                Have specific pressure, temperature or bend calculations?
              </h3>
              <p className="mt-2 text-sm text-white/70 max-w-xl">
                Send us your pipe isometric drawing or equipment datasheets. Our engineers calculate the exact live length and braid configuration required.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[#d90429] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b00220] shrink-0"
            >
              Contact Engineering Desk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
