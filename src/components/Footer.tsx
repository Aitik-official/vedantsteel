import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Products", href: "/products" },
  { label: "Technical Details", href: "/technical" },
  { label: "Certifications & QA", href: "/certifications" },
  { label: "Supply Network", href: "/network" },
  { label: "Blogs & Insights", href: "/blogs" },
  { label: "Contact & Enquiry", href: "/contact" },
];

const featuredProducts = [
  { label: "SS Corrugated Hose", href: "/products/ss-corrugated-hose" },
  { label: "SS Hose with Braid", href: "/products/ss-braided-hose" },
  { label: "SS Hose without Braid", href: "/products/ss-unbraided-hose" },
  { label: "SS Expansion Bellows", href: "/products/ss-bellows" },
  { label: "SS Pipe Fittings", href: "/products/ss-fittings" },
  { label: "SS Hose Assemblies", href: "/products/hose-assemblies" },
  { label: "Rubber Bellows", href: "/products/rubber-bellows" },
  { label: "Automotive Exhaust Connectors", href: "/products/exhaust-connectors" },
  { label: "EGR Tubes", href: "/products/egr-tubes" },
  { label: "Interlock Hoses", href: "/products/interlock-hoses" },
];

const featuredIndustries = [
  { label: "Power (Coal, Thermal & Gas)", href: "/industries/power-coal-thermal-gas" },
  { label: "Power (Nuclear & Atomic)", href: "/industries/power-nuclear-atomic" },
  { label: "Chemicals & Petrochemicals", href: "/industries/chemicals-petrochemicals-refinery" },
  { label: "Cryogenics & LNG Transfer", href: "/industries/cryogenics-lng-transfer" },
  { label: "Ship Building & Marine", href: "/industries/ship-building-marine" },
  { label: "Steel & Metallurgy", href: "/industries/steel-industry" },
  { label: "Automotive & OEM", href: "/industries/automotive-oem" },
  { label: "Data Centers", href: "/industries/data-centers" },
];

function SocialIcon({
  type,
  className,
}: {
  type: "linkedin" | "instagram" | "facebook";
  className?: string;
}) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm6.4-8.5a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zM12 2.2c-2.7 0-3 .01-4.1.06-2.8.13-4.1 1.45-4.2 4.2-.05 1.1-.06 1.4-.06 4.1s.01 3 .06 4.1c.13 2.75 1.45 4.07 4.2 4.2 1.1.05 1.4.06 4.1.06s3-.01 4.1-.06c2.75-.13 4.07-1.45 4.2-4.2.05-1.1.06-1.4.06-4.1s-.01-3-.06-4.1c-.13-2.75-1.45-4.07-4.2-4.2-1.1-.05-1.4-.06-4.1-.06zm0 1.8c2.6 0 2.9.01 4 .06 1.9.09 2.8.98 2.9 2.9.05 1.1.06 1.3.06 3.9s-.01 2.8-.06 3.9c-.09 1.9-.98 2.8-2.9 2.9-1.1.05-1.3.06-4 .06s-2.9-.01-4-.06c-1.9-.09-2.8-.98-2.9-2.9-.05-1.1-.06-1.3-.06-3.9s.01-2.8.06-3.9c.09-1.9.98-2.8 2.9-2.9 1.1-.05 1.4-.06 4-.06z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

export default function Footer() {
  const social = [
    { label: "LinkedIn", href: site.social.linkedin, type: "linkedin" as const },
    { label: "Instagram", href: site.social.instagram, type: "instagram" as const },
    { label: "Facebook", href: site.social.facebook, type: "facebook" as const },
  ];

  return (
    <footer className="relative z-10 bg-industrial-dark text-white border-t border-white/10">
      <div className="mx-auto w-full max-w-[92rem] px-6 py-12 sm:px-10 lg:px-14">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Company Column */}
          <div>
            <Link href="/" className="inline-flex bg-white px-3.5 py-2.5 sm:px-4 sm:py-3">
              <Image
                src={site.logo}
                alt={site.name}
                width={220}
                height={90}
                className="h-11 w-auto object-contain sm:h-13 lg:h-14"
              />
            </Link>
            <p className="mt-4 text-[13.5px] leading-relaxed text-white/70">
              Manufacturer, supplier, and exporter of stainless steel flexible hoses,
              expansion joint bellows, automotive exhaust connectors, and industrial steel products.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-[#d90429] uppercase tracking-wider font-bold">
              <span>ISO 9001:2015 Certified Company</span>
            </div>
            <div className="mt-6 flex items-center gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#d90429]"
                >
                  <SocialIcon type={s.type} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/70 transition hover:text-[#d90429]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-white">
              Flexible Hoses & Systems
            </h3>
            <ul className="mt-4 space-y-2">
              {featuredProducts.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-[13.5px] text-white/70 transition hover:text-[#d90429]"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Industries & Contact */}
          <div>
            <h3 className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-white">
              Key Industries
            </h3>
            <ul className="mt-4 space-y-2">
              {featuredIndustries.map((ind) => (
                <li key={ind.label}>
                  <Link
                    href={ind.href}
                    className="text-[13.5px] text-white/70 transition hover:text-[#d90429]"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                Direct Enquiry Desk
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-sm font-bold text-white hover:text-[#d90429]"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="mt-0.5 block text-xs text-white/70 hover:text-white"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-white/50 font-mono">
          <p>© {new Date().getFullYear()} Vedant Steel Corporation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Supply</Link>
            <Link href="/contact" className="hover:text-white text-[#d90429] font-bold">Enquiry Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
