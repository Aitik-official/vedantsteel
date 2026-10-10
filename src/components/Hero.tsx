"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BrandMark from "./BrandMark";

const AUTO_MS = 5000;

const slides = [
  {
    src: "/products/hero-hose.jpg",
    alt: "Macro view of braided stainless steel flexible hose",
    eyebrow: "ENGINEERED PERFECTION",
    title1: "SS Flexible",
    title2: "Hoses & Braids",
    description:
      "Manufacturer and exporter of stainless steel corrugated and wire-braided flexible hoses for extreme temperatures, high working pressures, and severe vibration.",
    href: "/products/ss-braided-hose",
    cta: "View Braided Hoses",
  },
  {
    src: "/products/product-bellows.jpg",
    alt: "Stainless steel expansion joint bellows",
    eyebrow: "EJMA COMPLIANT",
    title1: "SS Expansion",
    title2: "Joint Bellows",
    description:
      "Multi-ply expansion bellows engineered to EJMA calculations to absorb thermal cycling, pipeline expansion, and mechanical vibration across axial, lateral, and angular planes.",
    href: "/products/ss-bellows",
    cta: "View SS Bellows",
  },
  {
    src: "/products/product-corrugated.jpg",
    alt: "Stainless steel corrugated hose close-up",
    eyebrow: "HYDROFORMED CONVOLUTIONS",
    title1: "Annular Corrugated",
    title2: "Metal Hoses",
    description:
      "Close-pitch hydroformed stainless steel flexible core in AISI 304, 316L, and 321 delivering leak-tight containment across fluids, cryogenics, steam, and gases.",
    href: "/products/ss-corrugated-hose",
    cta: "View Corrugated Hose",
  },
  {
    src: "/products/product-assembly.jpg",
    alt: "Braided stainless steel hose assembly with welded end fittings",
    eyebrow: "CUSTOM FABRICATION",
    title1: "Engineered Hose",
    title2: "Assemblies",
    description:
      "Turnkey flexible hose assemblies TIG-welded by qualified welders to approved drawings with ANSI, DIN, BS, and JIS flanges, 100% hydrostatically tested.",
    href: "/products/hose-assemblies",
    cta: "View Hose Assemblies",
  },
  {
    src: "/products/product-exhaust.png",
    alt: "Automotive exhaust flexible connector and EGR tubes",
    eyebrow: "AUTOMOTIVE DIVISION",
    title1: "Automotive Exhaust",
    title2: "Connectors & EGR",
    description:
      "2-ply flexible connectors and formed stainless EGR tubes isolating engine vibration and thermal growth to meet BS-VI and Euro 6 emission standards.",
    href: "/products/exhaust-connectors",
    cta: "View Automotive Systems",
  },
] as const;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [next, index]);

  return (
    <section
      id="hero"
      className="relative h-full min-h-[400px] overflow-hidden bg-industrial-dark text-white sm:min-h-[500px] lg:min-h-[100svh]"
    >
      {slides.map((item, i) => (
        <div
          key={item.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "z-0 opacity-100" : "-z-10 opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={i === 0 || i === 1}
            className={`object-cover object-center ${i === index ? "hero-ken" : ""}`}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,28,34,0.92)_0%,rgba(18,28,34,0.72)_52%,rgba(18,28,34,0.38)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full min-h-[400px] max-w-6xl flex-col justify-end px-4 pb-6 pt-16 sm:min-h-[500px] sm:px-6 sm:pb-12 sm:pt-28 lg:min-h-[100svh] lg:justify-center lg:pb-20 lg:pt-28 xl:max-w-7xl xl:px-8">
        <div key={slide.src} className="hero-animate max-w-2xl lg:max-w-3xl">
          <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-industrial-steel sm:mb-4 sm:gap-2.5 sm:text-[11px] lg:mb-6">
            <BrandMark className="h-3 w-3 sm:h-3.5 sm:w-3.5" color="currentColor" />
            {slide.eyebrow}
          </p>
          <h1 className="font-display text-[1.75rem] font-medium uppercase leading-[0.95] tracking-[0.02em] text-white sm:text-4xl md:text-5xl lg:text-[4.8rem] xl:text-[5.4rem]">
            {slide.title1}
            <br />
            {slide.title2}
          </h1>
          <p className="mt-2 line-clamp-2 max-w-lg text-xs leading-relaxed text-white/80 sm:mt-4 sm:line-clamp-none sm:text-[14px] lg:text-base">
            {slide.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3 lg:mt-8">
            <Link
              href={slide.href}
              className="logo-grad inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wide text-white shadow-md transition hover:brightness-110 sm:gap-2 sm:px-6 sm:py-3.5 sm:text-[13px]"
            >
              {slide.cta}
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 border border-white/40 px-4 py-2.5 text-xs font-medium tracking-wide text-white transition hover:border-industrial-steel hover:bg-industrial-steel hover:text-white sm:gap-2 sm:px-6 sm:py-3.5 sm:text-[13px]"
            >
              Get a quote
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
            <div className="ml-1 flex items-center gap-1.5 sm:gap-2">
              {slides.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 sm:w-7 bg-industrial-steel" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
