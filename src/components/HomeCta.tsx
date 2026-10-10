import Image from "next/image";

export default function HomeCta() {
  return (
    <section className="bg-industrial-mist px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden xl:max-w-7xl">
        <Image
          src="/products/gallery-hoses.jpg"
          alt="Stainless steel flexible hose assemblies ready for dispatch"
          fill
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(18,28,34,0.92)_0%,rgba(24,38,46,0.85)_50%,rgba(217,4,41,0.65)_100%)]" />
        <div className="relative px-5 py-9 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <h2 className="max-w-3xl font-display text-[1.45rem] font-medium uppercase leading-[1.12] tracking-[0.02em] text-white sm:text-[1.85rem] lg:text-[2.1rem]">
            Stainless Steel Flexible Systems &amp; Expansion Bellows
          </h2>
          <p className="mt-3 max-w-4xl text-[13px] font-medium leading-relaxed tracking-wide text-white/90 sm:mt-4 sm:text-[14.5px] lg:text-[15.5px]">
            SS Corrugated Hose · SS Hose with Braid · SS Expansion Bellows · SS Fittings · Hose Assemblies · Rubber Bellows · Automotive Exhaust Connectors · EGR Tubes · Interlock Hoses
          </p>
        </div>
      </div>
    </section>
  );
}
