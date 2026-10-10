import Link from "next/link";
import BrandMark from "./BrandMark";
import HomeCta from "./HomeCta";
import Reveal from "./Reveal";
import SectionButton from "./SectionButton";
import { productGroups } from "@/data/site";

export default function Services() {
  return (
    <>
      {productGroups.map((group, index) => {
        const isDark = group.id === "flexible-hoses";
        return (
          <div key={group.id}>
            <section
              id={index === 0 ? "products" : group.id}
              className={`${
                isDark
                  ? "bg-industrial-dark text-white py-14 sm:py-20 lg:py-24"
                  : "bg-industrial-mist py-14 sm:py-18 lg:py-24"
              }`}
            >
              <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
                <Reveal
                  className={`flex flex-col sm:flex-row sm:items-end sm:justify-between ${
                    isDark ? "mb-8 gap-4 sm:mb-10" : "mb-8 gap-5 sm:mb-12 sm:gap-6"
                  }`}
                >
                  <div className="max-w-2xl">
                    <p
                      className={`mb-2.5 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.28em] sm:mb-3 font-bold ${
                        isDark ? "text-red-500" : "text-[#d90429]"
                      }`}
                    >
                      <BrandMark className="h-3.5 w-3.5" color="currentColor" />
                      {group.homeEyebrow}
                    </p>
                    <h2
                      className={`font-display font-medium uppercase leading-[1.08] tracking-[0.02em] ${
                        isDark
                          ? "text-[1.75rem] text-white sm:text-[2.2rem] lg:text-[2.6rem]"
                          : "text-[1.75rem] text-industrial-ink sm:text-[2.2rem] lg:text-[2.6rem]"
                      }`}
                    >
                      {group.homeTitle}
                    </h2>
                    <p
                      className={`mt-2.5 max-w-xl text-[14px] leading-relaxed sm:mt-4 sm:text-[15px] ${
                        isDark ? "text-white/70" : "text-neutral-600"
                      }`}
                    >
                      {group.homeSubtitle}
                    </p>
                  </div>
                  <SectionButton href={`/products?tab=${group.id}`} light={isDark}>
                    View All {group.label}
                  </SectionButton>
                </Reveal>

                <div
                  className={`grid gap-4 sm:gap-5 ${
                    group.items.length <= 2
                      ? "sm:grid-cols-2 max-w-3xl"
                      : "sm:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {group.items.map((item) => {
                    return (
                      <Link
                        key={item.slug}
                        href={`/products/${item.slug}`}
                        className="group relative flex flex-col justify-between overflow-hidden border border-[#e6e6e6]/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative h-48 w-full overflow-hidden bg-neutral-100 sm:h-52">
                          <div
                            aria-hidden
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-4 bg-white sm:p-5">
                          <div>
                            <h3 className="font-display text-[15px] font-bold uppercase leading-snug tracking-wide text-industrial-ink transition group-hover:text-[#d90429]">
                              {item.title}
                            </h3>
                            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#666]">
                              {item.description}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-[#f0f0f0] pt-3 text-[11px] font-mono uppercase tracking-wider text-[#d90429] font-bold">
                            <span>Specs & Details</span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
            {index === 0 ? <HomeCta /> : null}
          </div>
        );
      })}
    </>
  );
}
