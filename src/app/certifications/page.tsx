import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, ShieldCheck, Gauge, SearchCheck, FileCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import Reveal from "@/components/Reveal";
import SectionButton from "@/components/SectionButton";

export const metadata: Metadata = {
  title: "Quality Certifications & Testing Standards | Vedant Steel",
  description:
    "ISO 9001:2015 certified manufacturing. 100% Hydrostatic pressure testing at 1.5x working pressure, helium leak detection, and full EN 10204 3.1 material traceability.",
};

export default function CertificationsPage() {
  const testingProcedures = [
    {
      title: "1. Hydrostatic Pressure Testing",
      spec: "1.5× Design Working Pressure",
      icon: Gauge,
      body: "Every single flexible hose assembly and expansion joint bellow manufactured in our plants undergoes full hydrostatic water pressure testing at 1.5 times the maximum rated working pressure per BS 6501 and ISO 10380 to guarantee mechanical structural integrity.",
    },
    {
      title: "2. Pneumatic & Bubble Leak Testing",
      spec: "Air Under Water Testing",
      icon: SearchCheck,
      body: "Assemblies intended for gas, vacuum, or sensitive refrigerant lines are pressurized with clean dry air or nitrogen and submerged completely in water to verify zero micro-porosity across all hydroformed corrugations and circumferential welds.",
    },
    {
      title: "3. Helium Mass Spectrometer Testing",
      spec: "Vacuum & Ultra-Purity Duty",
      icon: ShieldCheck,
      body: "For semiconductor, cryogenic, and ultra-high-vacuum duty, helium leak detection verifies tightness down to leak rates smaller than 1 × 10⁻⁸ mbar·l/s, ensuring absolute zero molecule escape.",
    },
    {
      title: "4. Liquid Penetrant Weld Inspection",
      spec: "ASME Section IX WPS / PQR",
      icon: CheckCircle2,
      body: "TIG welds joining end fittings, flanges, and braid collars are inspected with visible dye penetrant examination to verify 100% root penetration and zero surface pinholes, undercut, or cracks.",
    },
    {
      title: "5. Dimensional & CMM Validation",
      spec: "100% Approval Against Drawing",
      icon: Award,
      body: "Critical dimensions including overall length (OAL), flange PCD, bolt hole orientations, thread tolerances, and bend angles are verified with calibrated inspection fixtures and CMM systems.",
    },
    {
      title: "6. Raw Material Heat Traceability",
      spec: "EN 10204 Type 3.1 Inspection Certificates",
      icon: FileCheck,
      body: "From incoming coils of AISI 304, 316L, and 321 to raw forged flanges, every batch maintains unbroken mill heat number traceability verified through chemical spectrometry and tensile testing.",
    },
  ];

  return (
    <>
      <HeroPin variant="compact">
        <PageHero
          eyebrow="QUALITY MANAGEMENT & RIGOROUS TESTING"
          title="TESTED. CERTIFIED. TRACEABLE."
          image="/products/quality-check.jpg"
          compact
        />
      </HeroPin>

      <div className="relative z-10 bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
          <Reveal className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d90429] font-bold">
              ISO 9001:2015 Accredited
            </span>
            <h1 className="font-display mt-2 text-3xl font-bold uppercase tracking-tight text-industrial-ink sm:text-4xl lg:text-5xl">
              Zero-defect quality verification for critical infrastructure
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#555]">
              In mission-critical industrial applications, a failed hose or bellow causes catastrophic shutdowns.
              That is why our quality policy dictates 100% non-destructive testing on every live assembly before it leaves the plant.
            </p>
          </Reveal>

          {/* Testing procedures grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testingProcedures.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="border border-[#e6e6e6] bg-[#fafafa] p-6 sm:p-8 flex flex-col justify-between transition hover:border-industrial-steel hover:bg-white hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-[#d90429]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#888] bg-white border px-2 py-1">
                        Standard
                      </span>
                    </div>

                    <h2 className="font-display mt-5 text-lg font-bold uppercase tracking-wide text-industrial-ink">
                      {item.title}
                    </h2>
                    <span className="font-mono text-xs font-semibold text-[#d90429] block mt-1">
                      {item.spec}
                    </span>

                    <p className="mt-3 text-sm leading-relaxed text-[#555]">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Documentation Banner */}
          <div className="mt-16 rounded-xl border border-industrial-steel/20 bg-industrial-dark p-8 sm:p-12 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
                  Document Package Supplied With Every Dispatch
                </span>
                <h3 className="font-display mt-2 text-2xl font-bold uppercase sm:text-3xl">
                  Comprehensive Certification Dossier
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d90429]" />
                    <span>Hydrostatic Pressure Test Certificate signed by QA Inspector</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d90429]" />
                    <span>EN 10204 3.1 Mill Test Certificate (Chemical & Mechanical)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d90429]" />
                    <span>Certificate of Conformity (CoC)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d90429]" />
                    <span>Third-party inspection support (TUV, BV, DNV, Lloyds, SGS on request)</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="bg-[#d90429] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b00220] shrink-0"
              >
                Request Sample Certificate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
