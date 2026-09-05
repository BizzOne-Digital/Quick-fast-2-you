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
    default: site.name + " | Wholesale security cameras and surveillance",
    template: "%s | " + site.name,
  },
  description:
    "Quick Fast 2 You is a security camera wholesaler supplying installers, integrators and resellers with domes, bullets, PTZ, LPR, NVRs, surveillance storage and cabling, shipped same day from " +
    site.city +
    ".",
  keywords: [
    "wholesale security cameras",
    "CCTV wholesale",
    "dome camera wholesale",
    "bullet camera wholesale",
    "PTZ camera",
    "LPR camera",
    "NVR wholesale",
    "surveillance hard drive",
    "PoE switch CCTV",
    "ONVIF cameras",
    "Dallas CCTV distributor",
  ],
  openGraph: {
    title: site.name,
    description:
      "Security cameras, recorders and surveillance storage, wholesale from " +
      site.city +
      ".",
    type: "website",
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
