import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Globe, Building2, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeroPin from "@/components/HeroPin";
import Reveal from "@/components/Reveal";
import SectionButton from "@/components/SectionButton";

export const metadata: Metadata = {
  title: "Manufacturing Plants & Global Supply Network | Vedant Steel",
  description:
    "Two high-capacity production plants in Delhi NCR & Reliance MET City supplying stainless steel flexible hoses and bellows to industrial customers worldwide.",
};

export default function NetworkPage() {
  const plants = [
    {
      name: "Plant 1 — DSIIDC Bawana, Delhi",
      focus: "Flexible Hose Forming & Wire Braiding Division",
      address: "C-225, Sector-3, DSIIDC Industrial Area, Bawana, New Delhi - 110039",
      capabilities: [
        "Hydroforming & mechanical tube corrugation lines (DN 6 to DN 300)",
        "Multi-carrier precision stainless wire braiding machinery",
        "Hydrostatic pressure testing up to 400 bar and pneumatic leak detection",
        "Clean room assembly & packaging for high-purity sectors",
      ],
    },
    {
      name: "Plant 2 — Reliance MET City, Jhajjar, Haryana",
      focus: "Expansion Bellows & Automotive Systems Division",
      address: "Reliance MET City, Model Economic Township, Jhajjar, Haryana",
      capabilities: [
        "Multi-ply hydraulic expansion joint bellows forming up to DN 2000",
        "Automotive exhaust decoupler and EGR tube production cells",
        "Automated multi-axis CNC tube bending and robotic welding",
        "Helium leak testing and dynamic fatigue endurance test rigs",
      ],
    },
  ];

  const regions = [
    { name: "Domestic India Supply", desc: "Rapid dispatch across Delhi-NCR, Gujarat, Maharashtra, Tamil Nadu, and industrial belts nationwide." },
    { name: "Middle East & GCC Hub", desc: "Dedicated logistics center in UAE serving Dubai, Abu Dhabi, Saudi Arabia, Qatar, and Oman." },
    { name: "Global Exports", desc: "Regular containerized and airfreight shipments to Europe, Southeast Asia, Africa, and the Americas." },
  ];

  return (
    <>
      <HeroPin variant="compact">
        <PageHero
          eyebrow="MANUFACTURING PLANTS & LOGISTICS INFRASTRUCTURE"
          title="GLOBAL SUPPLY NETWORK"
          image="/products/factory-floor.jpg"
          compact
        />
      </HeroPin>

      <div className="relative z-10 bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
          <Reveal className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d90429] font-bold">
              Two Advanced Facilities · One Quality Standard
            </span>
            <h1 className="font-display mt-2 text-3xl font-bold uppercase tracking-tight text-industrial-ink sm:text-4xl lg:text-5xl">
              Engineered in Delhi NCR. Supplied Worldwide.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#555]">
              With synchronized manufacturing facilities across Northern India and an international distribution
              desk in the UAE, Vedant Steel delivers mission-critical flexible metal solutions with prompt turnaround
              for planned project schedules and emergency breakdown needs.
            </p>
          </Reveal>

          {/* Plant facilities */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {plants.map((p) => (
              <div key={p.name} className="border border-[#e6e6e6] bg-[#fafafa] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#d90429] font-mono text-xs uppercase tracking-wider font-bold">
                    <Building2 className="h-4 w-4" /> Production Facility
                  </div>
                  <h2 className="font-display mt-3 text-2xl font-bold text-industrial-ink">
                    {p.name}
                  </h2>
                  <p className="font-mono text-xs text-[#777] mt-1">{p.focus}</p>
                  <p className="mt-4 flex items-start gap-2 text-sm text-[#555]">
                    <MapPin className="h-4 w-4 text-[#d90429] shrink-0 mt-0.5" />
                    <span>{p.address}</span>
                  </p>

                  <div className="mt-6 border-t border-[#eee] pt-4">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-industrial-ink block mb-3">
                      Key Plant Capabilities:
                    </span>
                    <ul className="space-y-2 text-xs text-[#555]">
                      {p.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#d90429] font-bold">•</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Distribution Coverage */}
          <div className="mt-16 border-t border-[#e6e6e6] pt-14">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-industrial-ink">
              Supply Reach & Global Delivery
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {regions.map((r) => (
                <div key={r.name} className="border border-[#e6e6e6] p-6 bg-[#fafafa]">
                  <Globe className="h-6 w-6 text-[#d90429]" />
                  <h3 className="font-display mt-4 text-lg font-bold text-industrial-ink uppercase">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#666] leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry Banner */}
          <div className="mt-16 bg-industrial-dark p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
                Supply Chain & Logistics Desk
              </span>
              <h3 className="font-display mt-2 text-2xl font-bold uppercase sm:text-3xl">
                Ready to coordinate your project dispatch?
              </h3>
              <p className="mt-2 text-sm text-white/70 max-w-xl">
                Contact our dispatch and commercial team for export shipping terms, container loading, and mill test certificates.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[#d90429] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b00220] shrink-0"
            >
              Contact Supply Desk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
