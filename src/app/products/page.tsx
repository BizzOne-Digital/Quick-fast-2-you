import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Cable,
  Cctv,
  ChevronRight,
  HardDrive,
  Network,
} from "lucide-react";
import { PageHero, heroPrimary, heroSecondary } from "@/components/page-hero";
import { ProductBrowser } from "@/components/product-browser";
import { DomeCamera } from "@/components/renders/dome-camera";
import { BulletCamera } from "@/components/renders/bullet-camera";
import { Reveal } from "@/components/reveal";
import { heroes } from "@/lib/heroes";
import {
  categories,
  countByCategory,
  daysOfFootage,
  money,
  productCategories,
  pricedBySku,
  productImageGallery,
  products,
  retention,
  slug,
} from "@/lib/catalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop this week's stock",
  description:
    "Shop quality electronics and specialty products at great prices, held in stock in " +
    site.city +
    " and shipped the same day. Our inventory changes weekly, so new deals arrive regularly.",
};

const siteSystems = [
  {
    site: "Retail and office",
    title: "Clear faces at the door",
    detail: "Use 4MP or 5MP domes at entrances and tills, with a 2.8mm lens for a wide view and smart detection to cut false alarms.",
    spec: "4–5MP · 2.8mm · 30m IR",
  },
  {
    site: "Warehouse and yard",
    title: "Long sight lines, fewer blind spots",
    detail: "Pair varifocal bullets with a PTZ at the loading gate. Put the recorder and switch inside, then protect every outdoor run in conduit.",
    spec: "8MP · 60m IR · PoE+",
  },
  {
    site: "Apartment and housing",
    title: "Small cameras, simple coverage",
    detail: "Turrets and compact domes cover corridors, lobbies and parking without making the building feel like a checkpoint.",
    spec: "4MP · WDR · H.265+",
  },
  {
    site: "Gate and vehicle access",
    title: "Capture the plate, not just the car",
    detail: "An LPR bullet needs the right angle, shutter and IR. We help size the lane before you buy the camera.",
    spec: "8MP · 60mph · 6–30m read",
  },
] as const;

const packages = [
  {
    name: "Starter",
    bestFor: "Small shops and offices",
    detail: "A clean first system for entrances, tills and a small back office.",
    kit: "4 cameras · 8-channel NVR · 2TB",
  },
  {
    name: "Trade",
    bestFor: "Multi-site installers",
    detail: "The balanced package for repeat jobs that need margin and dependable stock.",
    kit: "8 cameras · 16-channel NVR · 4TB",
  },
  {
    name: "Perimeter",
    bestFor: "Yards and vehicle gates",
    detail: "Long-range coverage with the storage and PoE headroom outdoor sites need.",
    kit: "16 cameras · 32-channel NVR · 8TB",
  },
] as const;

const systemChain = [
  {
    icon: Cctv,
    step: "Camera",
    title: "Pick the sensor for the job",
    copy: "4MP for an interior corridor, 8MP where a face or a plate has to hold up. Fixed lens for a doorway, motorised for anything you cannot reach twice.",
  },
  {
    icon: Cable,
    step: "Cable",
    title: "One Cat6 run does both",
    copy: "Outdoor-jacketed Cat6 carries the video and the power on the same run to 100 metres. Past that, an extend-mode switch port takes you to 250.",
  },
  {
    icon: Network,
    step: "Switch",
    title: "Budget the watts, not the ports",
    copy: "Count 6W for a fixed camera, 15W with the IR on, up to 60W for a PTZ or a heated housing. Size the PoE budget to the worst night, not the datasheet.",
  },
  {
    icon: HardDrive,
    step: "Recorder",
    title: "Buy the retention, not the box",
    copy: "Channels are cheap; days of footage are not. Work the storage back from how long the site has to be able to look back, then fit the drive.",
  },
];

const counts = countByCategory();
const stageDome = pricedBySku("QF-DM4K-08");
const stageBullet = pricedBySku("QF-BL4K-VF");

export default function ProductsPage() {
  return (
    <>
      <PageHero
        image={heroes.products}
        eyebrow="The shop"
        headline="Explore This Week's Stock"
        subheadline={
          "Security cameras, dash cameras, sports action cameras, metal detectors, diamond and gold testers, electronics and gadgets — " +
          products.length +
          " lines across " +
          categories.length +
          " categories. Our inventory changes weekly, so what is on this page is what is here right now."
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

      {/* ---------- What we carry ---------- */}
      <section aria-labelledby="range" className="border-t border-hairline bg-stage">
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">What we carry</p>
              <h2 id="range" className="q-display max-w-[18ch] text-frost">
                Five categories, restocked weekly
              </h2>
            </div>
            <p className="q-body max-w-[36ch] text-[0.9375rem]">
              New deals arrive regularly. Our products change weekly, so check
              back often to see what&rsquo;s new.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2">
              {productCategories.map((item, i) => (
                <li
                  key={item.name}
                  id={slug(item.name)}
                  className={
                    "scroll-mt-24" +
                    (i === productCategories.length - 1 ? " md:col-span-2" : "")
                  }
                >
                  <Link
                    href={"#grid"}
                    className="group relative isolate flex h-full flex-col justify-between gap-10 overflow-hidden bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 md:p-10"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 right-0 -z-10 w-2/5"
                    >
                      <Image
                        src={item.image.src}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/45 to-transparent" />
                    </div>
                    <div>
                      <h3 className="q-h3 text-frost">{item.name}</h3>
                      <p className="q-body mt-3 max-w-[34ch] text-[0.9375rem]">
                        {item.blurb}
                      </p>
                    </div>
                    <span className="q-num flex items-center justify-between text-[0.8125rem] text-muted-foreground">
                      {counts[i].count} products listed
                      <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="grid-heading" id="grid" className="scroll-mt-24">
        <div className="q-shell q-band">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">This week&rsquo;s listings</p>
              <h2
                id="grid-heading"
                className="q-display max-w-[16ch] text-frost"
              >
                Filter it. Add it. Price it.
              </h2>
            </div>
            <p className="q-body max-w-[38ch] text-[0.9375rem]">
              Filter by category to see what is in. Lines we hold at a published
              price show the floor and the entry tier; everything between is on
              the{" "}
              <Link href="/pricing" className="text-blue-electric">
                pricing page
              </Link>
              , and nothing here needs an account.
            </p>
          </Reveal>

          <ProductBrowser />
        </div>
      </section>

      {/* ---------- Security camera packages ---------- */}
      <section aria-labelledby="packages" className="border-t border-hairline bg-stage">
        <div className="q-shell py-10 md:py-12">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-3">Ready-made systems</p>
              <h2 id="packages" className="q-display max-w-[16ch] text-frost">
                Start with a package, then tune the job
              </h2>
            </div>
            <Link href="/pricing" className="q-link">
              Compare trade pricing
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-3">
            {packages.map((item, i) => (
              <Reveal as="li" key={item.name} delay={i * 80}>
                <Link
                  href="/products"
                  className={`group relative flex h-full min-h-[15rem] flex-col justify-between gap-8 overflow-hidden bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 md:p-8 ${i === 0 ? "md:col-span-2" : ""}`}
                >
                  {i === 0 && productImageGallery[5] ? (
                    <div className="absolute inset-y-0 right-0 hidden w-2/5 overflow-hidden md:block">
                      <Image
                        src={productImageGallery[5].src}
                        alt={productImageGallery[5].alt}
                        fill
                        sizes="30vw"
                        className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/45 to-transparent" />
                    </div>
                  ) : null}
                  <div className="relative z-10 max-w-[30rem]">
                    <p className="q-eyebrow q-eyebrow--muted">{item.bestFor}</p>
                    <h3 className="q-h3 mt-3 text-frost">{item.name} package</h3>
                    <p className="q-body mt-3 text-[0.9375rem]">
                      {item.detail}
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center justify-between gap-4 border-t border-hairline pt-5">
                    <span className="q-num text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-purple-electric">
                      {item.kit}
                    </span>
                    <ChevronRight className="size-5 shrink-0 text-frost transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
          {/* Two lit subjects, the house treatment */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {[
              { product: stageDome, render: "dome" as const },
              { product: stageBullet, render: "bullet" as const },
            ].map((entry, i) => (
              <Reveal key={entry.product.sku} delay={i * 90}>
                <article className="q-stage q-grain aspect-[4/3]">
                  <div className="q-stage__key" />
                  <div className="q-stage__vignette" />
                  <div className="q-stage__subject flex h-full items-center justify-center p-10 pb-32">
                    {productImageGallery[i + 2] ? (
                      <Image
                        src={productImageGallery[i + 2].src}
                        alt={productImageGallery[i + 2].alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : entry.render === "dome" ? (
                      <DomeCamera className="max-w-[24rem]" />
                    ) : (
                      <BulletCamera className="max-w-[24rem]" />
                    )}
                  </div>
                  <div className="q-stage__subject absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                    <p className="q-eyebrow q-eyebrow--muted">
                      {entry.product.sku}
                    </p>
                    <h3 className="q-h3 mt-2 max-w-[22ch] text-frost">
                      {entry.product.name}
                    </h3>
                    <p className="q-num mt-2 text-[0.8125rem] text-muted-foreground">
                      {entry.product.headline?.[0]} &middot;{" "}
                      {entry.product.headline?.[1]} &middot; from{" "}
                      {money(
                        entry.product.tiers[entry.product.tiers.length - 1]
                          .unit,
                        2,
                      )}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Anatomy of a system ---------- */}
      <section aria-labelledby="system" className="border-t border-hairline">
        <div className="q-shell q-band">
          <Reveal>
            <p className="q-eyebrow mb-4">How a system comes together</p>
            <h2 id="system" className="q-display max-w-[20ch] text-frost">
              Four parts. Get them right and nobody calls you back.
            </h2>
            <p className="q-lede mt-7">
              Most failed CCTV jobs are not a bad camera. They are an
              under-budgeted switch, a cable run past 100 metres, or a drive
              sized for channels instead of days. Here is the order we spec it
              in.
            </p>
          </Reveal>

          <ol className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-16 xl:grid-cols-4">
            {systemChain.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 80}>
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-12 items-center justify-center rounded-full border border-hairline bg-surface"
                  >
                    <item.icon className="size-5 text-blue-electric" />
                  </span>
                  <span className="q-num q-eyebrow q-eyebrow--muted">
                    {String(i + 1).padStart(2, "0")} &middot; {item.step}
                  </span>
                </div>
                <div className="q-rule my-6" />
                <h3 className="q-h3 text-frost">{item.title}</h3>
                <p className="q-body mt-3 text-[0.9375rem]">{item.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Site type guide ---------- */}
      <section aria-labelledby="site-guide" className="border-t border-hairline bg-stage">
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">Start with the site</p>
              <h2 id="site-guide" className="q-display max-w-[18ch] text-frost">
                The right camera depends on what is moving through the frame
              </h2>
            </div>
            <p className="q-body max-w-[36ch] text-[0.9375rem]">
              A doorway, a loading gate and a car park need different lenses,
              night ranges and storage plans. Use the job as the starting point.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2">
            {siteSystems.map((item, i) => (
              <Reveal as="li" key={item.site} delay={i * 70}>
                <article className="flex h-full flex-col justify-between gap-8 bg-surface p-8 md:p-10">
                  <div>
                    <p className="q-eyebrow q-eyebrow--muted">{item.site}</p>
                    <h3 className="q-h3 mt-4 text-frost">{item.title}</h3>
                    <p className="q-body mt-3 text-[0.9375rem]">{item.detail}</p>
                  </div>
                  <p className="q-num border-t border-hairline pt-5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-purple-electric">
                    {item.spec}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Retention table ---------- */}
      <section aria-labelledby="storage" className="border-t border-hairline">
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">Spec it properly</p>
              <h2 id="storage" className="q-display max-w-[16ch] text-frost">
                How many days will that drive actually hold?
              </h2>
            </div>
            <p className="q-body max-w-[36ch] text-[0.9375rem]">
              Continuous recording, H.265+ at 15fps, sixteen channels. Motion-only
              recording typically triples every figure below.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 overflow-x-auto rounded-lg border border-hairline">
              <table className="q-num w-full min-w-[42rem] border-collapse text-left">
                <caption className="sr-only">
                  Days of continuous footage retained by drive size, at sixteen
                  channels
                </caption>
                <thead>
                  <tr className="border-b border-hairline bg-surface">
                    <th
                      scope="col"
                      className="q-eyebrow q-eyebrow--muted px-6 py-4 text-[0.6875rem]"
                    >
                      Resolution
                    </th>
                    <th
                      scope="col"
                      className="q-eyebrow q-eyebrow--muted px-6 py-4 text-right text-[0.6875rem]"
                    >
                      Per channel / day
                    </th>
                    {[4, 8, 16].map((tb) => (
                      <th
                        key={tb}
                        scope="col"
                        className="q-eyebrow q-eyebrow--muted px-6 py-4 text-right text-[0.6875rem]"
                      >
                        {tb}TB
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {retention.map((row) => (
                    <tr
                      key={row.res}
                      className="border-b border-hairline last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="px-6 py-5 text-left font-normal"
                      >
                        <span className="block text-[0.9375rem] text-frost">
                          {row.res}
                        </span>
                        <span className="mt-1 block text-[0.75rem] text-muted-foreground">
                          {row.label}
                        </span>
                      </th>
                      <td className="px-6 py-5 text-right text-[0.9375rem] text-muted-foreground">
                        {row.gbPerDay} GB
                      </td>
                      {[4, 8, 16].map((tb) => (
                        <td
                          key={tb}
                          className="px-6 py-5 text-right text-[0.9375rem] text-frost"
                        >
                          {daysOfFootage(tb, 16, row.gbPerDay)} days
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/products#recorders-storage" className="q-link">
                Recorders and surveillance drives
                <ChevronRight className="q-link__chev size-4" />
              </Link>
              <p className="text-[0.8125rem] text-muted-foreground">
                Need thirty days at 4K on thirty-two channels? Message the desk
                and we will size it for you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="gallery-heading"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">In the wild</p>
              <h2 id="gallery-heading" className="q-display max-w-[16ch] text-frost">
                Products in real use
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
                A dash cam, an action camera, a metal detector, a gold or
                diamond tester, or a specific piece of electronics — send the
                model or a photo. If it is a line we can buy through a closeout
                or an auction, {site.contact} comes back with a price and a lead
                time, usually the same working day.
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
