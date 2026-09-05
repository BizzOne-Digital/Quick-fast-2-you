import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { PageHero, heroPrimary, heroSecondary } from "@/components/page-hero";
import { ProductBrowser } from "@/components/product-browser";
import { Reveal } from "@/components/reveal";
import { heroes } from "@/lib/heroes";
import { categories, productImageGallery, products } from "@/lib/catalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop all cameras",
  description:
    "Dome, bullet, turret, PTZ, fisheye and LPR security cameras, NVRs, surveillance drives, PoE switches and cable at wholesale rates, held in stock in " +
    site.city +
    " and shipped the same day.",
};

const totalUnits = products.reduce((sum, p) => sum + p.stock, 0);

export default function ProductsPage() {
  return (
    <>
      <PageHero
        image={heroes.products}
        eyebrow="The shop"
        headline="Explore the Latest Surveillance Cameras"
        subheadline={
          "Domes, bullets, turrets, PTZ, fisheye and LPR — plus the recorders, drives, switches and cable that go with them. " +
          totalUnits.toLocaleString("en-US") +
          " units across " +
          categories.length +
          " categories, all on our racks right now. Filter it, quick add what you want, and send the list for a written price."
        }
        actions={
          <>
            <Link href="#grid" className={heroPrimary}>
              Start browsing
              <ChevronRight className="size-4" />
            </Link>
            <Link href="/pricing" className={heroSecondary}>
              See the price ladder
              <ArrowUpRight className="size-4" />
            </Link>
          </>
        }
      />

      <section aria-labelledby="grid-heading" id="grid" className="scroll-mt-24">
        <div className="q-shell q-band">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">Live stock</p>
              <h2
                id="grid-heading"
                className="q-display max-w-[16ch] text-frost"
              >
                Filter it. Add it. Price it.
              </h2>
            </div>
            <p className="q-body max-w-[38ch] text-[0.9375rem]">
              Every camera is ONVIF Profile S and works with any of our
              recorders. Prices shown are the trade floor and the entry tier;
              everything between is on the{" "}
              <Link href="/pricing" className="text-blue-electric">
                pricing page
              </Link>
              , and nothing here needs an account.
            </p>
          </Reveal>

          <ProductBrowser />
        </div>
      </section>

      <section
        aria-labelledby="gallery-heading"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">On the job</p>
              <h2 id="gallery-heading" className="q-display max-w-[16ch] text-frost">
                Cameras built for real places
              </h2>
            </div>
            <p className="q-body max-w-[38ch] text-[0.9375rem]">
              A closer look at the hardware and installations behind the
              range. Choose the form factor, then match the sensor to the job.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {productImageGallery.map((image, index) => (
                <li
                  key={image.src}
                  className={index === 0 ? "col-span-2 row-span-2" : undefined}
                >
                  <div className="q-stage aspect-square">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="cant-see"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="q-eyebrow mb-5">Not listed?</p>
              <h2 id="cant-see" className="q-display max-w-[18ch] text-frost">
                We source what we do not stock
              </h2>
              <p className="q-lede mt-6">
                Thermal, explosion-proof, ANPR gate kits, wireless bridges or a
                specific housing — send the model or a photo. If it is a line we
                can buy in container volume, {site.contact} comes back with a
                landed price and a lead time, usually the same working day.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-purple px-7 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-purple-electric"
            >
              Ask for a source
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
