import Hero from "@/components/Hero";
import HeroPin from "@/components/HeroPin";
import About from "@/components/About";
import HomeProductShowcase from "@/components/HomeProductShowcase";
import HomeCta from "@/components/HomeCta";
import ExportMarkets from "@/components/ExportMarkets";
import ClientReviews from "@/components/ClientReviews";
import HomeContactCta from "@/components/HomeContactCta";

export default function HomePage() {
  return (
    <>
      <HeroPin variant="home">
        <Hero />
      </HeroPin>
      <div className="relative z-10">
        <About fit />
        <HomeProductShowcase />
        <HomeCta />
        <ExportMarkets fit />
        <HomeContactCta />
        <ClientReviews fit />
      </div>
    </>
  );
}
