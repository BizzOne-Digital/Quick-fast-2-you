import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quickfast2you.com"),
  title: {
    default: site.name + " | Quality products, great prices",
    template: "%s | " + site.name,
  },
  description:
    "Quick Fast 2 You sells quality electronics and specialty products at affordable prices — security cameras, dash cameras, sports action cameras, metal detectors, diamond and gold testers, and gadgets. Our inventory changes weekly, with new deals arriving regularly from " +
    site.city +
    ".",
  keywords: [
    "security cameras",
    "dash cameras",
    "sports action cameras",
    "metal detectors",
    "diamond testers",
    "gold testers",
    "electronics and gadgets",
    "affordable electronics",
    "closeout electronics",
    "Dallas electronics",
  ],
  openGraph: {
    title: site.name,
    description:
      "Quality products at great prices. Security cameras, dash cameras, sports action cameras, metal detectors, diamond and gold testers, electronics and gadgets — new deals every week from " +
      site.city +
      ".",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-canvas">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[70] focus:rounded-full focus:bg-purple focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex flex-col">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
