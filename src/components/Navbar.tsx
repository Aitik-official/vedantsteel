"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";
import { navItems } from "@/data/site";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  children?: readonly NavChild[];
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(pathname !== "/");
  const navContainerRef = useRef<HTMLDivElement>(null);
  const closeMenuTimer = useRef<number | null>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    return () => {
      if (closeMenuTimer.current) window.clearTimeout(closeMenuTimer.current);
    };
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!navContainerRef.current?.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setPastHero(pathname !== "/");
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    function update() {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      if (pathname !== "/") {
        setPastHero(true);
        return;
      }
      setPastHero(y > (window.innerWidth < 1024 ? 180 : window.innerHeight * 0.65));
    }
    update();
    window.addEventListener("scroll", update, { passive: true, capture: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, { capture: true });
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const solidNav = !isHome || pastHero || open;
  const linkBase = solidNav
    ? "text-[#2b2b2b] hover:text-[#d90429]"
    : "text-white/85 hover:text-white";
  const linkActive = solidNav
    ? "text-[#d90429] font-bold"
    : "text-white font-bold";

  const headerClass = `fixed inset-x-0 top-0 ${
    solidNav
      ? "border-b border-[#e6e6e6] bg-white shadow-sm"
      : "border-b border-transparent bg-transparent"
  }`;

  return (
    <>
      <header className={`z-50 transition-colors duration-300 ${headerClass}`}>
        <div
          ref={navContainerRef}
          className="relative mx-auto flex w-full max-w-[92rem] items-center justify-between gap-3 px-4 py-2 sm:gap-5 sm:px-8 lg:px-12"
        >
          {/* Brand Logo */}
          <div className="shrink-0">
            <Logo light={!solidNav} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {(navItems as readonly NavItem[]).map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const isDropdownOpen = activeDropdown === item.label;

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (closeMenuTimer.current) window.clearTimeout(closeMenuTimer.current);
                      setActiveDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      closeMenuTimer.current = window.setTimeout(() => {
                        setActiveDropdown(null);
                      }, 180);
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown((curr) => (curr === item.label ? null : item.label))
                      }
                      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest font-semibold transition py-2 ${
                        isActive || isDropdownOpen ? linkActive : linkBase
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen ? (
                      <div className="absolute left-0 top-full z-50 pt-1">
                        <div
                          className={`border border-[#dedede] bg-[#f5f6f7] py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] ${
                            item.label === "Industries"
                              ? "w-80 max-h-[min(80vh,520px)] overflow-y-auto"
                              : "w-72"
                          }`}
                        >
                          {item.children?.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`block px-4 py-2.5 text-[12.5px] leading-snug font-medium transition ${
                                  isChildActive
                                    ? "bg-[#d90429] text-white font-bold"
                                    : "text-[#2b2b2b] hover:bg-[#d90429] hover:text-white"
                                }`}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-mono text-[11px] uppercase tracking-widest font-semibold transition py-2 ${
                    isActive ? linkActive : linkBase
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Red Enquiry Button */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              className="bg-[#d90429] hover:bg-[#b00220] px-5 py-2 font-mono text-[11px] uppercase tracking-widest text-white font-bold transition shadow-sm"
            >
              ENQUIRY
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex shrink-0 items-center lg:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`flex h-10 w-10 items-center justify-center transition ${
                solidNav
                  ? "border border-[#e6e6e6] bg-industrial-soft text-industrial-ink hover:bg-industrial-panel"
                  : "border border-white/25 bg-transparent text-white hover:bg-white/15"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open ? (
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setOpen(false)}
            />
            <div className="absolute left-3 right-3 top-full z-50 mt-2 max-h-[min(80vh,540px)] overflow-y-auto border border-black/10 bg-white px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:left-6 sm:right-6">
              <nav className="flex flex-col gap-1">
                {(navItems as readonly NavItem[]).map((item) => {
                  const hasChildren = Boolean(item.children && item.children.length > 0);
                  const isExpanded = mobileExpanded[item.label];

                  if (hasChildren) {
                    return (
                      <div key={item.label} className="border-b border-[#eee] pb-1">
                        <button
                          type="button"
                          onClick={() =>
                            setMobileExpanded((prev) => ({
                              ...prev,
                              [item.label]: !prev[item.label],
                            }))
                          }
                          className="flex w-full items-center justify-between py-3 text-left font-mono text-[12px] font-bold uppercase tracking-widest text-industrial-ink hover:text-[#d90429]"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isExpanded ? "rotate-180 text-[#d90429]" : ""
                            }`}
                          />
                        </button>

                        {isExpanded ? (
                          <div className="mb-2 max-h-60 overflow-y-auto pl-3 space-y-1">
                            {item.children?.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block py-1.5 text-[13px] text-[#444] hover:text-[#d90429] font-medium"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-[#eee] py-3 font-mono text-[12px] font-bold uppercase tracking-widest text-industrial-ink hover:text-[#d90429]"
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex w-full items-center justify-center bg-[#d90429] py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-[#b00220]"
                >
                  ENQUIRY
                </Link>
              </nav>
            </div>
          </>
        ) : null}
      </header>

      {isHome ? null : (
        <div className="h-[calc(4.5rem*140/232+1.5rem)] sm:h-[calc(5rem*140/232+1.5rem)]" aria-hidden />
      )}
    </>
  );
}
