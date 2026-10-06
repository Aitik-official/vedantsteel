import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type LogoProps = {
  compact?: boolean;
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center py-1">
      <div
        className={`flex items-center rounded transition-all duration-300 ${
          light
            ? "bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-xs ring-1 ring-black/5 hover:bg-white"
            : "px-1 py-1"
        }`}
      >
        <Image
          src={site.logo}
          alt={site.name}
          width={220}
          height={90}
          className="h-9 w-auto object-contain sm:h-11 lg:h-12"
          priority
        />
      </div>
    </Link>
  );
}
