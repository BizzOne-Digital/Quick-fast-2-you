import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero, heroPrimary, heroSecondary } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { heroes } from "@/lib/heroes";
import { money, pricedBySku, tierNames } from "@/lib/catalog";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing and bulk rates",
  description:
    "Published pricing from Quick Fast 2 You: five volume breaks from a first case to a container, with no account application and no negotiation. Quality products at great prices, on inventory that changes weekly.",
};

const tiers = [
  {
    name: "Retail Starter",
    tierIndex: 0,
    who: "Individual buyers, sole traders and shops testing a line",
    entry: "One case, any SKU",
    terms: "Card or transfer, paid up front",
    points: [
      "Buy one case per SKU, mix as many SKUs as you like",
      "Published tier price, no negotiation and no account form",
      "Same-day dispatch on anything cleared before 3pm CT",
      "Every security camera ONVIF Profile S, no cloud subscription to sell",
    ],
    featured: false,
  },
  {
    name: "Small Business",
    tierIndex: 2,
    who: "Shops, installers running crews, and resellers",
    entry: "From 4 cases per SKU",
    terms: "Card, transfer, or net 15 after three clean orders",
    points: [
      "Dealer break on every line, typically 25 to 30 percent under entry",
      "Everything you order consolidated on one invoice",
      "Stock held 72 hours against a confirmed order",
      "Direct WhatsApp line to " + site.contact + ", no ticket queue",
    ],
    featured: true,
  },
  {
    name: "Bulk Wholesale",
    tierIndex: 4,
    who: "Regional distributors, national buyers, container buyers",
    entry: "From 40 cases per SKU, or mixed container",
    terms: "30 percent deposit, balance before release",
    points: [
      "Container pricing, the floor of the ladder on every line",
      "Allocation held against deposit while you sell forward",
      "Production runs, OEM firmware and custom housings available",
      "Scheduled call-offs so you are not paying to store it",
    ],
    featured: false,
  },
];

const faqs = [
  {
    q: "What is the minimum order?",
    a: "One case. The case pack is printed on every product in the shop and varies by line — two on a 32-channel NVR, four on recorders, LPR bullets and cable, eight to twelve on domes and bullets, twenty on PoE injectors, twenty-four on junction boxes. You can mix as many SKUs as you like to reach a shipment; there is no minimum invoice value.",
  },
  {
    q: "How fast do orders ship?",
    a: "Anything paid and cleared before 3:00 PM Central leaves the same afternoon. Most of Texas has it next morning, the rest of the lower 48 in two to four working days on ground. Recorders ship with the surveillance drive already installed and formatted, so nothing waits on a build.",
  },
  {
    q: "How do the bulk discounts work?",
    a: "Every camera and every accessory has five published breaks — " +
      tierNames.join(", ") +
      ". You land on the break your quantity reaches, per SKU, automatically. There is no negotiation and no volume commitment to sign; order 480 domes this month and 12 next month and each order prices on its own.",
  },
  {
    q: "Do your cameras work with recorders I already have?",
    a: "Yes. Every camera we carry is ONVIF Profile S with an open RTSP path, so it will add to any ONVIF recorder or VMS — Hikvision, Dahua, Blue Iris, Milestone or our own NVRs. Our recorders speak Profile G for playback and export as well.",
  },
  {
    q: "Do I need a trade account to get a price?",
    a: "No. Every price is published on the shop and the ladder below. We only need your business details and a resale certificate once you decide to place a first order, so sales tax can be left off the invoice.",
  },
  {
    q: "Can I mix cameras and accessories to hit a better tier?",
    a: "Tiers are per SKU, so 100 of one line does not price 100 of another. What mixing does buy you is shipping: everything you order ships as one consignment on one invoice.",
  },
  {
    q: "How much storage does a job actually need?",
    a: "Roughly 24GB per 4K channel per day on continuous H.265+ at 15fps, or 15GB at 5MP. Sixteen 4K channels on a 4TB drive is about ten days; on 8TB it is three weeks. Motion-only recording typically triples it. Send the channel count, resolution and the retention the site has to meet and we will size the drive for you.",
  },
  {
    q: "What is the warranty, and what happens if something arrives faulty?",
    a: "Twelve months on cameras, recorders and switches, three years on surveillance drives. Send the serial and a photo — replacements go out on the next dispatch rather than waiting on a return, and dead-on-arrival units are collected at our cost.",
  },
];

/** Pre-costed systems, so a buyer can price a whole job in one line. */
const kits = [
  {
    name: "8-camera retail kit",
    covers: "A shop floor, a stock room and two entrances",
    parts: [
      ["QF-DM4K-08", 8],
      ["QF-NVR16-4T", 1],
      ["QF-HDD8T-SV", 1],
      ["QF-PSW8-120", 1],
    ] as [string, number][],
  },
  {
    name: "16-camera yard kit",
    covers: "A perimeter fence line, a gate and a loading bay",
    parts: [
      ["QF-BL4K-VF", 10],
      ["QF-TR5M-AI", 6],
      ["QF-NVR16-4T", 1],
      ["QF-HDD8T-SV", 1],
      ["QF-PSW8-120", 2],
    ] as [string, number][],
  },
  {
    name: "32-camera site kit",
    covers: "A multi-building site with a PTZ on the entrance",
    parts: [
      ["QF-DM4K-08", 16],
      ["QF-BL4K-VF", 12],
      ["QF-BL5M-04", 2],
      ["QF-PTZ25X", 2],
      ["QF-NVR16-4T", 2],
      ["QF-HDD8T-SV", 3],
      ["QF-PSW8-120", 4],
    ] as [string, number][],
  },
];

const ladderSkus = [
  "QF-DM4K-08",
  "QF-BL4K-VF",
  "QF-PTZ25X",
  "QF-NVR16-4T",
  "QF-HDD8T-SV",
];

export default function PricingPage() {
  const ladder = ladderSkus.map(pricedBySku);

  return (
    <>
      <PageHero
        image={heroes.pricing}
        eyebrow="Pricing"
        headline="Quality Products, Great Prices"
        subheadline="Lines we hold in depth carry five volume breaks, published in the open. The rest changes weekly, so ask the desk for today’s price. No account application, no gatekeeping, no haggling."
        actions={
          <>
            <Link href="#quote" className={heroPrimary}>
              See Current Prices
              <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/products" className={heroSecondary}>
              Shop All Products
              <ChevronRight className="size-4" />
            </Link>
          </>
        }
      />

      {/* Tier cards */}
      <section aria-labelledby="tiers" className="border-t border-hairline">
        <div className="q-shell q-band">
          <Reveal>
            <p className="q-eyebrow mb-4">Three ways to buy</p>
            <h2 id="tiers" className="q-display max-w-[16ch] text-frost">
              Pick the tier that matches your order
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const sample = pricedBySku("QF-DM4K-08");
              const unit = sample.tiers[tier.tierIndex];
              return (
                <Reveal as="li" key={tier.name} delay={i * 90}>
                  <article
                    className={cn(
                      "flex h-full flex-col rounded-lg border p-8 md:p-10",
                      tier.featured
                        ? "border-purple bg-surface"
                        : "border-hairline bg-surface",
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="q-h3 text-frost">{tier.name}</h3>
                      {tier.featured ? (
                        <span className="rounded-full bg-purple px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white">
                          Most taken
                        </span>
                      ) : null}
                    </div>
                    <p className="q-body mt-3 text-[0.9375rem]">{tier.who}</p>

                    <div className="q-rule my-7" />

                    <div className="q-num">
                      <p className="q-eyebrow q-eyebrow--muted text-[0.6875rem]">
                        Example &middot; {sample.sku}
                      </p>
                      <p className="mt-2 text-[2rem] font-semibold tracking-[-0.028em] text-frost">
                        {money(unit.unit, 2)}
                        <span className="ml-2 text-[0.875rem] font-normal text-muted-foreground">
                          / unit at {unit.min}+
                        </span>
                      </p>
                      <p className="mt-2 text-[0.8125rem] text-muted-foreground">
                        {Math.round((1 - unit.unit / sample.msrp) * 100)}% under
                        MSRP of {money(sample.msrp, 0)}
                      </p>
                    </div>

                    <ul className="mt-8 flex flex-1 flex-col gap-3.5">
                      {tier.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 size-4 shrink-0 text-blue-electric"
                          />
                          <span className="text-[0.9375rem] leading-[1.55] text-muted-foreground">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <dl className="q-num mt-8 border-t border-hairline pt-6 text-[0.8125rem]">
                      <div className="flex justify-between gap-4 py-1.5">
                        <dt className="text-muted-foreground">Entry</dt>
                        <dd className="text-right text-frost">{tier.entry}</dd>
                      </div>
                      <div className="flex justify-between gap-4 py-1.5">
                        <dt className="text-muted-foreground">Terms</dt>
                        <dd className="text-right text-frost">{tier.terms}</dd>
                      </div>
                    </dl>

                    <Link
                      href="#quote"
                      className={cn(
                        "mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full text-[0.9375rem] font-medium transition-colors duration-300",
                        tier.featured
                          ? "bg-purple text-white hover:bg-purple-electric"
                          : "border border-hairline text-frost hover:bg-white/5",
                      )}
                    >
                      Get this rate
                      <ChevronRight className="size-4" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Pre-costed system kits */}
      <section
        aria-labelledby="kits"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">Costed bundles &middot; security cameras</p>
              <h2 id="kits" className="q-display max-w-[18ch] text-frost">
                Price a whole job, not a parts list
              </h2>
            </div>
            <p className="q-body max-w-[36ch] text-[0.9375rem]">
              Three systems we ship most weeks, costed at the dealer break.
              Every part is a live SKU — swap a camera and the desk reprices it
              the same day.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {kits.map((kit, i) => {
              const rows = kit.parts.map(([sku, qty]) => {
                const product = pricedBySku(sku);
                const unit = product.tiers[2].unit;
                return { product, qty, unit, line: unit * qty };
              });
              const total = rows.reduce((sum, row) => sum + row.line, 0);
              const cameras = rows
                .filter((row) => row.product.art !== "nvr" &&
                  row.product.art !== "hdd" &&
                  row.product.art !== "switchbox")
                .reduce((sum, row) => sum + row.qty, 0);
              return (
                <Reveal as="li" key={kit.name} delay={i * 90}>
                  <article className="flex h-full flex-col rounded-lg border border-hairline bg-surface p-8 md:p-10">
                    <h3 className="q-h3 text-frost">{kit.name}</h3>
                    <p className="q-body mt-3 text-[0.9375rem]">{kit.covers}</p>

                    <div className="q-rule my-7" />

                    <dl className="q-num flex-1">
                      {rows.map((row) => (
                        <div
                          key={row.product.sku}
                          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-hairline py-2.5 text-[0.8125rem] last:border-b-0"
                        >
                          <dt className="text-muted-foreground">
                            {row.qty} &times; {row.product.sku}
                          </dt>
                          <dd className="text-right text-frost">
                            {money(row.line, 2)}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="q-num mt-7 border-t border-hairline pt-6">
                      <p className="q-eyebrow q-eyebrow--muted text-[0.6875rem]">
                        Dealer break, {cameras} cameras
                      </p>
                      <p className="mt-2 text-[2rem] font-semibold tracking-[-0.028em] text-frost">
                        {money(total, 0)}
                      </p>
                      <p className="mt-2 text-[0.8125rem] text-muted-foreground">
                        Ex-works {site.city}, before shipping
                      </p>
                    </div>

                    <a
                      href={whatsappLink(
                        "Hi " +
                          site.contact +
                          ", I would like a quote on the " +
                          kit.name +
                          ":\n\n" +
                          kit.parts
                            .map(([sku, qty]) => qty + " x " + sku)
                            .join("\n"),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-hairline text-[0.9375rem] font-medium text-frost transition-colors duration-300 hover:bg-white/5"
                    >
                      <WhatsAppIcon className="size-4" />
                      Quote this kit
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* The full ladder */}
      <section aria-labelledby="ladder" className="border-t border-hairline">
        <div className="q-shell q-band">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="q-eyebrow mb-4">The published ladder</p>
              <h2 id="ladder" className="q-display max-w-[16ch] text-frost">
                Five breaks, printed in the open
              </h2>
            </div>
            <Link href="/products" className="q-link">
              Every line in the shop
              <ChevronRight className="q-link__chev size-4" />
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 overflow-x-auto rounded-lg border border-hairline">
              <table className="q-num w-full min-w-[46rem] border-collapse text-left">
                <caption className="sr-only">
                  Unit price by volume break for five representative products
                </caption>
                <thead>
                  <tr className="border-b border-hairline bg-surface">
                    <th
                      scope="col"
                      className="q-eyebrow q-eyebrow--muted px-6 py-4 text-[0.6875rem]"
                    >
                      Product
                    </th>
                    {tierNames.map((name) => (
                      <th
                        key={name}
                        scope="col"
                        className="q-eyebrow q-eyebrow--muted px-6 py-4 text-right text-[0.6875rem]"
                      >
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ladder.map((product) => (
                    <tr
                      key={product.sku}
                      className="border-b border-hairline last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="px-6 py-5 text-left font-normal"
                      >
                        <span className="block text-[0.9375rem] text-frost">
                          {product.name}
                        </span>
                        <span className="mt-1 block text-[0.75rem] text-muted-foreground">
                          {product.sku} &middot; MSRP {money(product.msrp, 0)}
                        </span>
                      </th>
                      {product.tiers.map((tier) => (
                        <td
                          key={tier.min}
                          className="px-6 py-5 text-right align-middle"
                        >
                          <span className="block text-[0.9375rem] text-frost">
                            {money(tier.unit, 2)}
                          </span>
                          <span className="mt-1 block text-[0.75rem] text-muted-foreground">
                            {tier.min}+
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="q-body mt-6 text-[0.8125rem]">
              Representative lines. Every product we hold in depth carries the same
              five-break structure — see each tile in the{" "}
              <Link href="/products" className="text-blue-electric">
                shop
              </Link>{" "}
              for its own ladder. Prices are per unit, ex-works {site.city},
              before shipping.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bulk quote */}
      <section
        aria-labelledby="quote-heading"
        id="quote"
        className="scroll-mt-24 border-t border-hairline"
      >
        <div className="q-shell q-band">
          <Reveal className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="q-eyebrow mb-5">Bulk quote</p>
              <h2
                id="quote-heading"
                className="q-display max-w-[16ch] text-frost"
              >
                Send the list. Get a written number back today.
              </h2>
              <p className="q-lede mt-7">
                Lines, quantities and a delivery zip is all {site.contact}{" "}
                needs. A written figure with shipping comes back the same working
                day — and it holds for seven days, so you can quote your own
                customer off it.
              </p>
              <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  "No account needed",
                  "Same working day",
                  "Price held 7 days",
                  "Shipping included",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-[0.9375rem] text-muted-foreground"
                  >
                    <Check
                      aria-hidden="true"
                      className="size-4 text-blue-electric"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={whatsappLink(
                  "Hi " +
                    site.contact +
                    ", I would like a bulk quote from Quick Fast 2 You.\n\nLines and quantities:\n\nDelivery zip:",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-purple px-7 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-purple-electric"
              >
                <WhatsAppIcon className="size-4" />
                See Current Prices
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-hairline px-7 text-[0.9375rem] text-frost transition-colors duration-300 hover:bg-white/5"
              >
                Use the enquiry form
                <ChevronRight className="size-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="q-num inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.9375rem] text-muted-foreground transition-colors duration-300 hover:text-frost"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="q-eyebrow mb-4">Questions</p>
              <h2 id="faq" className="q-display max-w-[14ch] text-frost">
                The things buyers ask first
              </h2>
              <p className="q-body mt-6 text-[0.9375rem]">
                Anything not covered here, message {site.contact} directly. He
                answers the phone.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full border-t border-hairline"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={"faq-" + i}
                  className="border-b border-hairline"
                >
                  <AccordionTrigger className="py-6 text-left text-[1.0625rem] font-medium tracking-[-0.014em] text-frost hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="q-body max-w-[62ch] text-[0.9375rem]">
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
