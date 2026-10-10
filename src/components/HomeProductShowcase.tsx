"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Filter, Gauge, ShieldCheck, Sparkles, Thermometer, Wrench } from "lucide-react";
import BrandMark from "./BrandMark";
import Reveal from "./Reveal";
import SectionButton from "./SectionButton";

type ProductCardData = {
  slug: string;
  title: string;
  division: "Industrial" | "Automotive";
  category: "hose" | "bellows" | "fittings" | "automotive";
  image: string;
  tagline: string;
  description: string;
  sizeRange: string;
  tempRange: string;
  pressure: string;
  standards: string;
  badge: string;
};

const allProducts: ProductCardData[] = [
  {
    slug: "ss-corrugated-hose",
    title: "SS Corrugated Hose",
    division: "Industrial",
    category: "hose",
    image: "/products/product-corrugated.jpg",
    tagline: "Hydroformed Annular Core",
    description: "Close-pitch hydroformed convolutions in AISI 304/316L/321 for extreme cyclic flexing, vibration damping, and leak-free fluid transfer.",
    sizeRange: "DN 6 – DN 300 (1/4\" – 12\")",
    tempRange: "-270 °C to +700 °C",
    pressure: "Full Vacuum to 350 bar",
    standards: "BS 6501 Part 1 / ISO 10380",
    badge: "Annular Hydroformed",
  },
  {
    slug: "ss-braided-hose",
    title: "SS Hose with Braid",
    division: "Industrial",
    category: "hose",
    image: "/products/product-braid.jpg",
    tagline: "High-Tensile Wire Braid",
    description: "Single or double AISI 304/316 stainless wire braid locks axial length, prevents elongation, and multiplies working pressure up to 4×.",
    sizeRange: "DN 6 – DN 300 (1/4\" – 12\")",
    tempRange: "-200 °C to +600 °C",
    pressure: "Up to 400 bar WP",
    standards: "ISO 10380 Type 1 / BS 6501",
    badge: "High Pressure Rated",
  },
  {
    slug: "ss-unbraided-hose",
    title: "SS Hose without Braid",
    division: "Industrial",
    category: "hose",
    image: "/products/product-no-braid.jpg",
    tagline: "Maximum Movement Capacity",
    description: "Pure flexible metal convolutions delivering maximum axial, lateral, and angular movement without wire braid restraint.",
    sizeRange: "DN 6 – DN 200 (1/4\" – 8\")",
    tempRange: "-200 °C to +550 °C",
    pressure: "Low / Medium & Vacuum",
    standards: "ISO 10380 Type 2",
    badge: "Max Articulation",
  },
  {
    slug: "ss-bellows",
    title: "SS Expansion Bellows",
    division: "Industrial",
    category: "bellows",
    image: "/products/product-bellows.jpg",
    tagline: "Multi-Ply Engineered Joints",
    description: "Engineered to EJMA calculations to absorb thermal expansion, pressure thrust, and pipeline vibration across axial, lateral, and angular planes.",
    sizeRange: "DN 25 – DN 2000 (1\" – 80\")",
    tempRange: "-196 °C to +850 °C",
    pressure: "Full Vacuum to 64 bar",
    standards: "EJMA 10th Edition / ASME VIII",
    badge: "EJMA Calculated",
  },
  {
    slug: "ss-fittings",
    title: "SS Pipe Fittings",
    division: "Industrial",
    category: "fittings",
    image: "/products/product-fittings.jpg",
    tagline: "Precision CNC Machined",
    description: "Forged and buttweld flanges (ANSI, DIN, JIS), unions, elbows, tees, reducers, and nipples in ASTM A182 F304/F316L.",
    sizeRange: "1/4\" to 24\" (Sch 10 – Sch XXS)",
    tempRange: "-200 °C to +600 °C",
    pressure: "150 lb up to 6000 lb",
    standards: "ANSI B16.5 / EN 1092-1 / ASTM A182",
    badge: "Mill Heat Traceable",
  },
  {
    slug: "hose-assemblies",
    title: "SS Hose Assemblies",
    division: "Industrial",
    category: "fittings",
    image: "/products/product-assembly.jpg",
    tagline: "Custom Turnkey Assemblies",
    description: "Custom lengths TIG-welded by ASME Section IX qualified welders with customer-specified flange, union, or camlock end terminations.",
    sizeRange: "DN 6 – DN 300, Made to Drawing",
    tempRange: "-270 °C to +700 °C",
    pressure: "100% Tested at 1.5× WP",
    standards: "ASME Sec IX / EN ISO 15614",
    badge: "100% Tested at 1.5×",
  },
  {
    slug: "rubber-bellows",
    title: "Rubber Bellows",
    division: "Industrial",
    category: "bellows",
    image: "/products/product-rubber.jpg",
    tagline: "Vibration & Acoustic Damping",
    description: "Single and twin-sphere elastomeric expansion joints in EPDM, Neoprene, or Nitrile absorbing pump shock and water hammer.",
    sizeRange: "DN 25 – DN 600 (1\" – 24\")",
    tempRange: "-10 °C to +115 °C",
    pressure: "10 bar / 16 bar (Burst: 30 bar)",
    standards: "DIN / ANSI Flanged floating rings",
    badge: "Acoustic Insulation",
  },
  {
    slug: "interlock-hoses",
    title: "Interlock Hoses",
    division: "Industrial",
    category: "hose",
    image: "/products/product-interlock.png",
    tagline: "Armour Articulated Metal Strip",
    description: "Double-lock spirally interlocked profiled strip in AISI 304 or GI providing unmatched crush resistance and smooth 4-way flexibility.",
    sizeRange: "ID 25 mm – ID 300 mm",
    tempRange: "-50 °C to +600 °C",
    pressure: "Packed (gas-tight) / Unpacked",
    standards: "Heavy-duty mechanical armour",
    badge: "Crush & Kink Proof",
  },
  {
    slug: "exhaust-connectors",
    title: "Automotive Exhaust Connectors",
    division: "Automotive",
    category: "automotive",
    image: "/products/product-exhaust.png",
    tagline: "Powertrain Vibration Decoupler",
    description: "2-ply hydroformed bellows with outer braid and interlock liner isolating engine rock and thermal growth to meet BS-VI/Euro 6 standards.",
    sizeRange: "ID 38 mm – ID 127 mm (1.5\" – 5\")",
    tempRange: "Up to 650 °C Cyclic",
    pressure: "Gas-tight exhaust decoupler",
    standards: "BS-VI / Euro 6 Compliance",
    badge: "BS-VI / Euro 6",
  },
  {
    slug: "egr-tubes",
    title: "EGR Tubes",
    division: "Automotive",
    category: "automotive",
    image: "/products/product-egr.png",
    tagline: "Exhaust Gas Recirculation",
    description: "CNC bent and hydroformed stainless tubing with corrugated flex sections designed for 650 °C cyclic temperatures and severe powertrain vibration.",
    sizeRange: "Custom formed to OEM 3D prints",
    tempRange: "Up to 650 °C Exhaust Gas",
    pressure: "Helium leak rate < 1×10⁻⁶ mbar·l/s",
    standards: "OEM Automotive Architecture",
    badge: "650 °C Cyclic Rated",
  },
];

type CategoryKey = "all" | "hose" | "bellows" | "fittings" | "automotive";

const filterTabs: { id: CategoryKey; label: string; count: number }[] = [
  { id: "all", label: "All Systems", count: 10 },
  { id: "hose", label: "Flexible Hoses & Braids", count: 4 },
  { id: "bellows", label: "Expansion Bellows", count: 2 },
  { id: "fittings", label: "Assemblies & Fittings", count: 2 },
  { id: "automotive", label: "Automotive Division", count: 2 },
];

export default function HomeProductShowcase() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("all");

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      return activeTab === "all" || p.category === activeTab;
    });
  }, [activeTab]);

  return (
    <section id="products-showcase" className="relative z-10 bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        
        {/* Section Header */}
        <Reveal className="flex flex-col items-start justify-between gap-6 border-b border-[#eee] pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2.5 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#d90429]">
              <BrandMark className="h-3.5 w-3.5" color="currentColor" />
              Comprehensive Manufacturing Programme
            </p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-industrial-ink sm:text-4xl lg:text-5xl">
              10 Precision Engineered Product Lines
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#555]">
              Every flexible metal system is manufactured to order, hydroformed in our NCR plants,
              and 100% hydrostatically pressure tested at 1.5× working pressure before dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/technical"
              className="inline-flex items-center gap-2 border border-industrial-steel/30 bg-industrial-soft px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-industrial-ink transition hover:bg-industrial-panel"
            >
              <Gauge className="h-4 w-4 text-[#d90429]" />
              Technical Guide
            </Link>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 bg-[#d90429] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-[#b00220]"
            >
              <ShieldCheck className="h-4 w-4" />
              1.5× Test Standards
            </Link>
          </div>
        </Reveal>

        {/* Category Filter Tabs - All in One Clean Row without Scrollbar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 w-full">
          {filterTabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between gap-2 px-3.5 py-3 text-left transition border rounded-sm ${
                  active
                    ? "bg-[#d90429] border-[#d90429] text-white shadow-sm"
                    : "bg-[#f7f8fa] border-[#e2e5e9] text-industrial-ink hover:bg-[#ebeef2] hover:border-[#cbd0d8]"
                }`}
              >
                <span className="font-mono text-xs font-bold uppercase tracking-wider leading-tight">
                  {tab.label}
                </span>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[11px] font-bold ${
                    active ? "bg-white/20 text-white" : "bg-black/10 text-[#555]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.slug}
              className="group relative flex flex-col justify-between rounded-sm border border-[#e2e5e9] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d90429] hover:shadow-xl"
            >
              {/* Product Card Top: Image & Badge */}
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#d90429] px-2.5 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-white shadow-xs">
                      {product.badge}
                    </span>
                  </div>

                  {/* Division Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/75 backdrop-blur-xs px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white/90 border border-white/10">
                      {product.division}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3">
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-white font-semibold drop-shadow-sm">
                      {product.tagline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-industrial-ink transition group-hover:text-[#d90429]">
                    <Link href={`/products/${product.slug}`}>{product.title}</Link>
                  </h3>
                  
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#555]">
                    {product.description}
                  </p>

                  {/* Structured Spec Box */}
                  <div className="mt-4 rounded-sm border border-[#e5e7eb] bg-[#f8f9fa] p-3 text-xs space-y-2">
                    <div className="flex items-baseline justify-between gap-2 border-b border-[#e5e7eb] pb-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#6b7280] shrink-0">
                        Size Range:
                      </span>
                      <span className="font-mono text-[11px] font-bold text-industrial-ink text-right">
                        {product.sizeRange}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2 border-b border-[#e5e7eb] pb-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#6b7280] shrink-0">
                        Rating / Temp:
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-industrial-ink text-right">
                        {product.tempRange}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2 pt-0.5">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#6b7280] shrink-0">
                        Standard:
                      </span>
                      <span className="font-mono text-[10.5px] font-bold text-[#d90429] text-right" title={product.standards}>
                        {product.standards}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="border-t border-[#e5e7eb] bg-[#fafafa] p-4 flex items-center justify-between gap-2">
                <Link
                  href={`/products/${product.slug}`}
                  className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#d90429] transition hover:text-[#a0021e] flex items-center gap-1.5"
                >
                  <span>Specifications</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={`/contact?subject=${encodeURIComponent(`Enquiry for ${product.title}`)}`}
                  className="rounded-sm border border-[#d1d5db] bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-industrial-ink transition hover:border-[#d90429] hover:bg-[#d90429] hover:text-white shadow-xs"
                >
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* ENGINEERING COMPARISON MATRIX (Shows technical parameters of all 10 products) */}
        {/* ========================================================================= */}
        <div className="mt-20 border-t border-[#eee] pt-14">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#d90429] font-bold">
                Quick Selection Guide
              </span>
              <h3 className="font-display mt-1 text-2xl font-bold uppercase tracking-wide text-industrial-ink sm:text-3xl">
                Engineering Comparison Matrix
              </h3>
              <p className="mt-1 text-sm text-[#666]">
                Side-by-side operational ratings across our complete manufactured range.
              </p>
            </div>
            <Link
              href="/technical"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#d90429] hover:underline flex items-center gap-1"
            >
              <span>Full Technical Formulas &amp; Ratings</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto border border-[#dedede] bg-white shadow-xs">
            <table className="w-full min-w-[760px] border-collapse text-left text-xs">
              <thead>
                <tr className="bg-industrial-dark text-white font-mono uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Product Line</th>
                  <th className="py-3 px-4">Division</th>
                  <th className="py-3 px-4">Bore Size / ID</th>
                  <th className="py-3 px-4">Operating Temp</th>
                  <th className="py-3 px-4">Pressure Rating</th>
                  <th className="py-3 px-4">Design Code</th>
                  <th className="py-3 px-4 text-right">Datasheet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee]">
                {allProducts.map((p, idx) => (
                  <tr key={p.slug} className={idx % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                    <td className="py-3 px-4 font-bold text-industrial-ink flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#999]">0{idx + 1}</span>
                      <Link href={`/products/${p.slug}`} className="hover:text-[#d90429] transition">
                        {p.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4 font-mono text-[10px] text-[#666]">{p.division}</td>
                    <td className="py-3 px-4 font-mono font-semibold text-industrial-ink">{p.sizeRange}</td>
                    <td className="py-3 px-4 font-mono text-[#555]">{p.tempRange}</td>
                    <td className="py-3 px-4 font-mono font-bold text-green-700">{p.pressure}</td>
                    <td className="py-3 px-4 text-[#666] font-mono text-[10.5px]">{p.standards}</td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/products/${p.slug}`}
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#d90429] hover:underline"
                      >
                        <span>View</span>
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THREE FLAGSHIP ENGINEERING SPOTLIGHTS */}
        {/* ========================================================================= */}
        <div className="mt-24 space-y-16">
          
          {/* Spotlight 1: SS Braided & Corrugated Hoses */}
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-xl border border-[#dedede] bg-industrial-dark text-white p-6 sm:p-10 lg:p-12 overflow-hidden relative">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none" />
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#d90429]">
                (Spotlight 01) The Science of Pressure &amp; Flexibility
              </span>
              <h3 className="font-display mt-2 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
                Close-Pitch Annular Corrugation &amp; High-Tensile Wire Braid
              </h3>
              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                A bare corrugated hose carries fluid media with exceptional flexibility, but tends to elongate under internal pressure. By weaving high-tensile AISI 304/316 wire braiding tightly over the core, axial extension is arrested — boosting working pressure capacity up to 4× while retaining full mechanical movement and vibration isolation.
              </p>
              
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-white">DN 6–300</div>
                  <div className="font-mono text-[10px] uppercase text-white/60">Bore Range</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-[#d90429]">400 Bar</div>
                  <div className="font-mono text-[10px] uppercase text-white/60">Max Pressure</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-white">-270 °C</div>
                  <div className="font-mono text-[10px] uppercase text-white/60">Cryogenic Floor</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-white">+700 °C</div>
                  <div className="font-mono text-[10px] uppercase text-white/60">Peak Service</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products/ss-braided-hose"
                  className="bg-[#d90429] px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b00220]"
                >
                  Explore Braided Hoses
                </Link>
                <Link
                  href="/products/ss-corrugated-hose"
                  className="border border-white/30 px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white/10"
                >
                  View Corrugated Core
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 w-full rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/products/hero-hose.jpg"
                alt="Braided stainless steel hose macro view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Spotlight 2: SS Expansion Joint Bellows */}
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-xl border border-[#dedede] bg-[#fafafa] p-6 sm:p-10 lg:p-12">
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 w-full rounded-lg overflow-hidden border border-[#e0e0e0] order-2 lg:order-1">
              <Image
                src="/products/product-bellows.jpg"
                alt="Stainless steel expansion joint bellows"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#d90429]">
                (Spotlight 02) EJMA-Calculated Movement Absorption
              </span>
              <h3 className="font-display mt-2 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl text-industrial-ink">
                Multi-Ply Expansion Bellows &amp; Flex Joints
              </h3>
              <p className="mt-4 text-sm text-[#555] leading-relaxed">
                In thermal power plants, chemical refineries, and steam piping, massive temperature fluctuations induce destructive thermal expansion. Our multi-ply stainless steel bellows are calculated strictly to EJMA 10th edition formulas to absorb combined axial compression, lateral offset, and angular rotation without putting undue reaction forces on turbine nozzles or pump casings.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#e0e0e0] pt-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-industrial-ink">DN 2000</div>
                  <div className="font-mono text-[10px] uppercase text-[#777]">Max Diameter</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-[#d90429]">50,000+</div>
                  <div className="font-mono text-[10px] uppercase text-[#777]">Fatigue Cycles</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-industrial-ink">Multi-Ply</div>
                  <div className="font-mono text-[10px] uppercase text-[#777]">Low Spring Rate</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-industrial-ink">100% QA</div>
                  <div className="font-mono text-[10px] uppercase text-[#777]">EJMA Verified</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products/ss-bellows"
                  className="bg-industrial-dark px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-black"
                >
                  View Expansion Bellows
                </Link>
                <Link
                  href="/products/rubber-bellows"
                  className="border border-[#ccc] px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-industrial-ink transition hover:bg-white"
                >
                  View Rubber Bellows
                </Link>
              </div>
            </div>
          </div>

          {/* Spotlight 3: Automotive Exhaust Connectors & EGR */}
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-xl border border-[#dedede] bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#d90429]">
                (Spotlight 03) Automotive Powertrain &amp; Emission Compliance
              </span>
              <h3 className="font-display mt-2 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl text-industrial-ink">
                BS-VI / Euro 6 Exhaust Decouplers &amp; EGR Tubes
              </h3>
              <p className="mt-4 text-sm text-[#555] leading-relaxed">
                Mounted between engine manifolds and catalytic converters, our 2-ply hydroformed exhaust connectors isolate high-amplitude engine rock and eliminate vehicle cabin NVH (Noise, Vibration &amp; Harshness). For exhaust gas recirculation loops, our formed AISI 304/409 EGR tubes endure 650 °C cyclic thermal spikes and high-frequency vibration without fatigue cracking.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#eee] pt-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-industrial-ink">650 °C</div>
                  <div className="font-mono text-[10px] uppercase text-[#777]">Cyclic Temp</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-[#d90429]">BS-VI</div>
                  <div className="font-mono text-[10px] uppercase text-[#777]">Euro 6 Ready</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-industrial-ink">Interlock</div>
                  <div className="font-mono text-[10px] uppercase text-[#777]">Gas Flow Liner</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-industrial-ink">&lt; 10⁻⁶</div>
                  <div className="font-mono text-[10px] uppercase text-[#777]">Helium Leak Tight</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products/exhaust-connectors"
                  className="bg-[#d90429] px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b00220]"
                >
                  Automotive Exhaust Flex
                </Link>
                <Link
                  href="/products/egr-tubes"
                  className="border border-[#ccc] px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-industrial-ink transition hover:bg-[#f5f5f5]"
                >
                  EGR Tubes Datasheet
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 w-full rounded-lg overflow-hidden border border-[#eee] bg-[#fdfdfd]">
              <Image
                src="/products/product-exhaust.png"
                alt="Automotive exhaust flexible connector"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
