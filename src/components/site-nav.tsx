"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("relative block h-10 w-36 sm:h-11 sm:w-40", className)}>
      <Image
        src="/Logo/logo.png"
        alt="Quick Fast 2 You"
        fill
        sizes="160px"
        className="object-contain object-left"
        priority
      />
    </span>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
      <div className="q-shell">
        <div
          className={cn(
            "flex h-14 items-center justify-between gap-6 rounded-full border pl-5 pr-2 transition-colors duration-500 sm:pl-6",
            scrolled || open
              ? "border-hairline bg-black/70 backdrop-blur-xl"
              : "border-transparent bg-black/25 backdrop-blur-md",
          )}
        >
          <Link href="/" aria-label={site.name + " home"}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full px-4 py-2 text-[0.8125rem] tracking-[-0.01em] transition-colors duration-300",
                        active
                          ? "bg-white/10 text-frost"
                          : "text-muted-foreground hover:text-frost",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-purple px-5 py-2.5 text-[0.8125rem] font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-purple-electric sm:inline-block"
            >
              Request a quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center rounded-full text-frost transition-colors duration-300 hover:bg-white/10 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 top-0 -z-10 bg-black/95 pt-24 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Main" className="q-shell">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-hairline">
                <Link
                  href={item.href}
                  className="block py-5 text-[1.75rem] font-semibold tracking-[-0.028em] text-frost"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 block rounded-full bg-purple px-6 py-4 text-center text-[0.9375rem] font-medium text-white"
          >
            Request a quote
          </Link>
          <a
            href={site.phoneHref}
            className="q-num mt-4 block text-center text-sm text-muted-foreground"
          >
            {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
