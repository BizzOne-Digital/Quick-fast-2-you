import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronRight,
  Quote,
  Truck,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PageHero, heroPrimary, heroSecondary } from "@/components/page-hero";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { TypingHeadline } from "@/components/typing-headline";
import { heroes, promoImage } from "@/lib/heroes";
import {
  bySku,
  countByCategory,
  isPriced,
  money,
  pricedBySku,
  productCategories,
  productImages,
  products,
  slug,
} from "@/lib/catalog";
import { site, whatsappLink } from "@/lib/site";

const numbers = [
  { value: products.length.toString(), label: "Products listed" },
  { value: "Weekly", label: "New stock arriving" },
  { value: "640", label: "Customers on the books" },
  { value: "3pm CT", label: "Same-day cut-off" },
];

/** One line from each category, so the strip reads as the whole shop. */
const featured = [
  "QF-ACT-4K",
  "QF-DASH-HD",
  "QF-TST-COMBO",
  "QF-DM4K-08",
  "QF-EG-BUDS",
  "QF-MD-ENTRY",
].map(bySku);

const values = [
  {
    icon: Truck,
    title: "Lightning Fast Shipping",
    copy: "Cleared before 3pm Central and it leaves the same afternoon, packed properly. Everything on the order goes out on one consignment, so you are not waiting on a second delivery to finish the job.",
    stat: "Same day dispatch",
  },
  {
    icon: Wallet,
    title: "Affordable Prices",
    copy: "We buy through company closeouts, auctions and other closeout sources, so there is no national distributor or regional master stacked on your cost. Five volume breaks are published beside every product — no account form, no negotiation.",
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

const counts = countByCategory();
const deal = pricedBySku("QF-DM4K-08");
const dealMate = pricedBySku("QF-NVR16-4T");

export default function Home() {
  return (
    <>
      <PageHero
        size="home"
        image={heroes.home}
        video="/videos/vid1.mp4"
        eyebrow={site.name + " · New deals weekly · " + site.city}
        headline={
          <span className="q-luxury">
            <TypingHeadline text="Quality Products, Great Prices" />
          </span>
        }
        subheadline="New deals arrive regularly. Shop electronics and specialty products at prices that make sense — our inventory changes weekly, so it is worth checking back."
        actions={
          <>
            <Link href="/products" className={heroPrimary}>
              Shop All Products
              <ArrowUpRight className="size-4" />
            </Link>
            <Link href="#new-in" className={heroSecondary}>
              See This Week&rsquo;s Deals
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

      {/* ---------- What we sell ---------- */}
      <section
        aria-labelledby="featured"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">What we sell</p>
              <h2 id="featured" className="q-display max-w-[18ch] text-frost">
                Five categories, on an inventory that changes every week
              </h2>
            </div>
            <Link href="/products" className="q-link">
              Browse the shop
              <ChevronRight className="q-link__chev size-4" />
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2">
              {productCategories.map((item, i) => (
                <li
                  key={item.name}
                  className={
                    i === productCategories.length - 1
                      ? "md:col-span-2"
                      : undefined
                  }
                >
                  <Link
                    href={"/products#" + slug(item.name)}
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

      {/* ---------- New this week ---------- */}
      <section
        aria-labelledby="new-in-heading"
        id="new-in"
        className="scroll-mt-24 border-t border-hairline"
      >
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">New this week</p>
              <h2
                id="new-in-heading"
                className="q-display max-w-[18ch] text-frost"
              >
                A few of the lines on the shelf right now
              </h2>
            </div>
            <Link href="/products" className="q-link">
              See all {products.length} products
              <ChevronRight className="q-link__chev size-4" />
            </Link>
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featured.map((product, i) => {
              const image = productImages[product.sku];
              const priced = isPriced(product) ? product : null;
              return (
                <Reveal as="li" key={product.sku} delay={(i % 3) * 80}>
                  <Link
                    href={"/products#" + slug(product.category)}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-colors duration-300 hover:bg-surface-2"
                  >
                    <div className="q-stage q-grain relative aspect-[4/3] rounded-none">
                      <div className="q-stage__key" />
                      <div className="q-stage__vignette" />
                      {image ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="q-stage__subject object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : null}
                      {product.badge ? (
                        <span className="q-stage__subject absolute left-5 top-5 rounded-full bg-purple px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white">
                          {product.badge}
                        </span>
                      ) : null}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="q-eyebrow q-eyebrow--muted">
                        {product.category}
                      </p>
                      <h3 className="q-h3 mt-2 text-frost">{product.name}</h3>
                      <p className="q-body mt-3 flex-1 text-[0.9375rem]">
                        {product.blurb}
                      </p>
                      <p className="q-num mt-5 flex items-center justify-between border-t border-hairline pt-4 text-[0.9375rem] text-frost">
                        {priced
                          ? "From " +
                            money(priced.tiers[priced.tiers.length - 1].unit, 2)
                          : "Ask for this week’s price"}
                        <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- Why choose us ---------- */}
      <section
        aria-labelledby="why"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal>
            <p className="q-eyebrow mb-4">Why customers come back</p>
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
            <p className="q-eyebrow mb-4">Social proof &middot; security cameras</p>
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
                Retail and trade. No account needed for a quote, and no
                salesperson calling you every week afterwards.
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
