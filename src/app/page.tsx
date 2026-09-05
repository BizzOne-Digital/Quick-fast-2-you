import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Cable,
  Cctv,
  ChevronRight,
  HardDrive,
  Network,
  Quote,
  Truck,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PageHero, heroPrimary, heroSecondary } from "@/components/page-hero";
import { DomeCamera } from "@/components/renders/dome-camera";
import { BulletCamera } from "@/components/renders/bullet-camera";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { TypingHeadline } from "@/components/typing-headline";
import { heroes, promoImage } from "@/lib/heroes";
import {
  bySku,
  daysOfFootage,
  money,
  productImageGallery,
  products,
  retention,
  slug,
  stockByCategory,
} from "@/lib/catalog";
import { site, whatsappLink } from "@/lib/site";

const totalUnits = products.reduce((sum, p) => sum + p.stock, 0);

const numbers = [
  { value: totalUnits.toLocaleString("en-US"), label: "Cameras on the floor" },
  { value: "310", label: "Orders picked weekly" },
  { value: "640", label: "Installers on the books" },
  { value: "3pm CT", label: "Same-day cut-off" },
];

const featuredCategories = [
  {
    category: "Dome Cameras",
    copy: "Vandal-rated domes and turrets from 5MP to 4K, with on-board human and vehicle detection so the recorder stops filling with rain.",
  },
  {
    category: "Bullet Cameras",
    copy: "Long-throw perimeter units to 60m of IR, plus an LPR bullet that reads a plate at 60mph in the dark.",
  },
  {
    category: "PTZ & Panoramic",
    copy: "25x auto-tracking speed domes and 12MP fisheyes that cover a whole floor from one ceiling point and one licence.",
  },
  {
    category: "Recorders & Storage",
    copy: "16 and 32 channel NVRs shipped with the drive already fitted and formatted, plus 24/7-rated surveillance disks.",
  },
] as const;

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

const values = [
  {
    icon: Truck,
    title: "Lightning Fast Shipping",
    copy: "Cleared before 3pm Central and it leaves the same afternoon, packed to survive a freight yard. Cameras, the recorder, the switch and the cable go out on one consignment, so the van is not waiting on a second supplier.",
    stat: "Same day dispatch",
  },
  {
    icon: Wallet,
    title: "Wholesale Prices",
    copy: "We import direct and hold title, so no national distributor or regional master is stacked on your cost. Five volume breaks are published beside every camera — no account form, no negotiation.",
    stat: "Up to 70% under MSRP",
  },
  {
    icon: BadgeCheck,
    title: "Top Quality",
    copy: "A sample lives on the bench for a fortnight before a line gets a SKU. Every pallet is sampled on arrival, powered up, IR checked and flashed to current firmware before it is put away.",
    stat: "12-month cover, ONVIF",
  },
];

const testimonials = [
  {
    quote:
      "The stock count is the reason I moved. I can quote a forty-camera job on a Monday knowing the domes, the thirty-two channel and the drives are all on one shelf in Dallas.",
    name: "Marcus",
    role: "Security integrator, Arlington",
  },
  {
    quote:
      "Recorders arriving with the drive already fitted and formatted saves my guys an hour on every install. Over a year that is a fortnight of labour I stopped paying for.",
    name: "Dee",
    role: "CCTV installer, Fort Worth",
  },
  {
    quote:
      "I put their LPR bullet on two lanes of a truck yard and it reads plates at night that my old kit missed in daylight. The margin on it is the best in my catalogue.",
    name: "Aisha",
    role: "Reseller, Dallas",
  },
];

const deal = bySku("QF-DM4K-08");
const dealMate = bySku("QF-NVR16-4T");
const stock = stockByCategory();
const stageDome = bySku("QF-DM4K-08");
const stageBullet = bySku("QF-BL4K-VF");

export default function Home() {
  return (
    <>
      <PageHero
        size="home"
        image={heroes.home}
        video="/videos/vid1.mp4"
        eyebrow={"Security camera wholesale · " + site.city}
        headline={
          <span className="q-luxury">
            <TypingHeadline text="Welcome to Quick Fast 2 You" />
          </span>
        }
        subheadline="Security cameras, recorders and everything between them — at container prices, on our own racks in Dallas, out the door the same day you order. Domes, bullets, PTZ, LPR, NVRs and the cable to hang it all."
        actions={
          <>
            <Link href="/products" className={heroPrimary}>
              Shop All Cameras
              <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/pricing" className={heroSecondary}>
              View Wholesale Deals
              <ChevronRight className="size-4" />
            </Link>
          </>
        }
      >
        <dl className="q-num mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4">
          {numbers.map((item) => (
            <div key={item.label}>
              <dd className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold tracking-[-0.028em] text-white">
                {item.value}
              </dd>
              <dt className="q-eyebrow mt-2 text-[0.6875rem] text-white/55">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* ---------- Package chooser ---------- */}
      <section aria-labelledby="packages" className="border-t border-hairline bg-stage">
        <div className="q-shell py-10 md:py-12">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-3">Ready-made starting points</p>
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
        </div>
      </section>

      {/* ---------- Featured categories ---------- */}
      <section aria-labelledby="featured" className="border-t border-hairline">
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">The collection</p>
              <h2 id="featured" className="q-display max-w-[16ch] text-frost">
                Every part of a camera system, on one invoice
              </h2>
            </div>
            <Link href="/products" className="q-link">
              All six categories
              <ChevronRight className="q-link__chev size-4" />
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2">
              {featuredCategories.map((item) => {
                const units =
                  stock.find((row) => row.category === item.category)?.units ??
                  0;
                return (
                  <li key={item.category}>
                    <Link
                      href={"/products#" + slug(item.category)}
                      className="group flex h-full flex-col justify-between gap-10 bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 md:p-10"
                    >
                      <div>
                        <h3 className="q-h3 text-frost">{item.category}</h3>
                        <p className="q-body mt-3 text-[0.9375rem]">
                          {item.copy}
                        </p>
                      </div>
                      <span className="q-num flex items-center justify-between text-[0.8125rem] text-muted-foreground">
                        {units.toLocaleString("en-US")} units in stock
                        <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>

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
                      {entry.product.headline[0]} &middot;{" "}
                      {entry.product.headline[1]} &middot; from{" "}
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
      <section
        aria-labelledby="system"
        className="border-t border-hairline bg-stage"
      >
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
      <section aria-labelledby="site-guide" className="border-t border-hairline">
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

      {/* ---------- Why choose us ---------- */}
      <section
        aria-labelledby="why"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal>
            <p className="q-eyebrow mb-4">Why installers switch</p>
            <h2 id="why" className="q-display max-w-[18ch] text-frost">
              Fast, cheap and good. Pick all three.
            </h2>
          </Reveal>

          <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-x-12">
            {values.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
                <span
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-full border border-hairline bg-surface"
                >
                  <item.icon className="size-5 text-blue-electric" />
                </span>
                <div className="q-rule my-6" />
                <h3 className="q-h3 text-frost">{item.title}</h3>
                <p className="q-body mt-3 text-[0.9375rem]">{item.copy}</p>
                <p className="q-num mt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-purple-electric">
                  {item.stat}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Deal of the week ---------- */}
      <section aria-labelledby="deal" className="border-t border-hairline">
        <div className="q-shell q-band">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-lg">
              <Image
                src={promoImage.src}
                alt={promoImage.alt}
                fill
                sizes="(min-width: 1440px) 1312px, 100vw"
                style={{ objectPosition: promoImage.position }}
                className="-z-10 object-cover"
              />
              <div aria-hidden="true" className="q-hero-shade -z-10" />
              <div
                aria-hidden="true"
                className="q-grain absolute inset-0 -z-10"
              />

              <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:p-16">
                <div>
                  <p className="q-eyebrow mb-5 text-purple-electric">
                    Deal of the week &middot; ends Sunday
                  </p>
                  <h2 id="deal" className="q-display max-w-[16ch] text-white">
                    The sixteen-camera kit, at dealer rate
                  </h2>
                  <p className="q-lede mt-6 text-[color:rgba(245,245,247,0.86)]">
                    Take 144 of the {deal.name} with 12 of the {dealMate.name}{" "}
                    and both drop to the dealer break, whatever your usual tier.
                    That is twelve complete sixteen-channel systems, drives
                    fitted, out of one order.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappLink(
                        "Hi " +
                          site.contact +
                          ", I want the deal of the week kit: 144 x " +
                          deal.sku +
                          " and 12 x " +
                          dealMate.sku +
                          ".",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={heroPrimary}
                    >
                      <WhatsAppIcon className="size-4" />
                      Claim the kit
                    </a>
                    <Link href="/pricing" className={heroSecondary}>
                      See all tiers
                      <ChevronRight className="size-4" />
                    </Link>
                  </div>
                </div>

                <dl className="q-num grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  {[
                    [deal.sku, money(deal.tiers[2].unit, 2)],
                    [dealMate.sku, money(dealMate.tiers[2].unit, 2)],
                    ["Kit builds", "12 systems"],
                    ["Dispatch", "Same day"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="q-eyebrow text-[0.6875rem] text-white/55">
                        {label}
                      </dt>
                      <dd className="mt-2 text-[1.375rem] font-semibold tracking-[-0.022em] text-white">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section
        aria-labelledby="proof"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal>
            <p className="q-eyebrow mb-4">Social proof</p>
            <h2 id="proof" className="q-display max-w-[18ch] text-frost">
              What the installers actually say
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal as="li" key={item.name} delay={i * 90}>
                <figure className="flex h-full flex-col justify-between gap-8 bg-surface p-8 md:p-10">
                  <Quote
                    aria-hidden="true"
                    className="size-6 shrink-0 text-purple-electric"
                  />
                  <blockquote className="text-[1.0625rem] leading-[1.6] tracking-[-0.011em] text-frost">
                    {item.quote}
                  </blockquote>
                  <figcaption className="border-t border-hairline pt-5">
                    <span className="block text-[0.9375rem] text-frost">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] text-muted-foreground">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="q-rule mt-14" />
            <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
              <p className="q-body text-[0.9375rem]">
                Trade only. No account needed for a quote, and no salesperson
                calling you every week afterwards.
              </p>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-purple px-7 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-purple-electric"
              >
                Get your price
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
