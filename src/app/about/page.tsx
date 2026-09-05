import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { PageHero, heroPrimary, heroSecondary } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { heroes } from "@/lib/heroes";
import { productImageGallery, products } from "@/lib/catalog";
import { site, whatsappLink } from "@/lib/site";

const totalUnits = products.reduce((sum, p) => sum + p.stock, 0);

export const metadata: Metadata = {
  title: "Next-gen tech, unbeatable value",
  description:
    "Quick Fast 2 You is a security camera and surveillance wholesaler in " +
    site.city +
    ", supplying installers, integrators and resellers with cameras, recorders, storage and cabling direct, with no middleman markup.",
};

const numbers = [
  { value: "18,400", label: "Square feet of racking" },
  { value: totalUnits.toLocaleString("en-US"), label: "Cameras on the floor" },
  { value: "310", label: "Orders picked weekly" },
  { value: "640", label: "Installers on the books" },
];

const values = [
  {
    title: "Speed",
    body: "Cleared before 3pm Central and it ships that afternoon. Nothing on this site is a drop-ship promise against a container still at sea — if the count is printed, the boxes are on our racks.",
  },
  {
    title: "Quality",
    body: "A sample lives on our bench for a fortnight before a line gets a SKU: IR range measured in the dark, housing hosed at IP67, recorder run at full channel count for a week. Every pallet is then sampled on arrival and flashed to current firmware.",
  },
  {
    title: "Affordability",
    body: "We buy depth, in containers, and pass the break down the ladder. Five tiers are published beside every camera so nobody has to negotiate for a fair number.",
  },
  {
    title: "Open standards",
    body: "Every camera we carry is ONVIF Profile S with an open RTSP path, and every recorder speaks Profile G. Nothing in the catalogue locks your customer into one app or one cloud subscription.",
  },
];

const story = [
  {
    title: "It started with a lead time",
    body: "Installers around " +
      site.city +
      " were waiting three weeks on domes that a distributor two states away had sitting in a box. We bought a container of 4K domes, put them on a rack, and sold them in eleven days.",
  },
  {
    title: "We finished the system",
    body: "A camera on its own is half a job. Recorders came next, then surveillance-rated drives, PoE switches, outdoor Cat6, junction boxes and rack UPS — so a two-day install stopped needing three suppliers.",
  },
  {
    title: "The customer never changed",
    body: "People who put cameras on walls for a living. Security installers, integrators, locksmiths moving into CCTV, and the resellers who supply them — everything about how we operate is built around that one buyer.",
  },
];

const standOut = [
  {
    heading: "No middleman markup",
    body: "We import direct and hold title. There is no national distributor, no regional master, and no rep commission stacked on your cost before you ever see a number.",
  },
  {
    heading: "The count is real",
    body: "Stock figures on this site are a shelf count from our own racking. If it says 4,280 domes, you can order 4,280 and it will go out.",
  },
  {
    heading: "One invoice, one desk",
    body: "Cameras, the recorder with the drive already fitted, the PoE switch, the cable and the junction boxes on the same paperwork, from the same person, on the same truck.",
  },
  {
    heading: "Trade terms without the theatre",
    body: "No minimum spend to get a quote. No account application before a price. No salesperson calling you every week afterwards.",
  },
];

const orderPath = [
  {
    step: "01",
    title: "Tell us the site",
    body: "Send a list, a floor plan or a photo of the job. We check lens, IR range, PoE budget and retention before recommending a line.",
    stat: "Same-day sizing",
  },
  {
    step: "02",
    title: "Get the trade number",
    body: "Your quote shows the volume break, case pack, stock position and freight assumptions. There is no account application before the price.",
    stat: "Five volume tiers",
  },
  {
    step: "03",
    title: "We bench the kit",
    body: "Recorders can arrive with drives fitted and formatted. Cameras are checked for power, image, IR and current firmware before they leave.",
    stat: "ONVIF and RTSP",
  },
  {
    step: "04",
    title: "It leaves that day",
    body: "Orders cleared before 3pm Central are picked from our own racks, packed together and handed to the carrier that afternoon.",
    stat: "3pm CT cut-off",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={heroes.about}
        video="/videos/vid2.mp4"
        eyebrow="Our house"
        headline="Next-Gen Tech, Unbeatable Value"
        subheadline={
          "A security camera and surveillance wholesaler in " +
          site.city +
          ", built to get cameras, recorders and storage onto your van faster and cheaper than anyone standing between you and the factory."
        }
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
      />

      {/* Numbers */}
      <section aria-labelledby="numbers" className="border-t border-hairline">
        <div className="q-shell py-16 md:py-20">
          <h2 id="numbers" className="sr-only">
            The operation in numbers
          </h2>
          <Reveal>
            <dl className="q-num grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
              {numbers.map((item) => (
                <div key={item.label}>
                  <dd className="q-display text-frost">{item.value}</dd>
                  <dt className="q-eyebrow q-eyebrow--muted mt-3">
                    {item.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Inside the operation */}
      <section
        aria-labelledby="operation"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <Reveal className="grid grid-cols-[1.4fr_0.85fr] items-end gap-4">
              <div className="q-stage q-grain aspect-[4/5]">
                {productImageGallery[6] ? (
                  <Image
                    src={productImageGallery[6].src}
                    alt={productImageGallery[6].alt}
                    fill
                    sizes="(max-width: 1024px) 65vw, 42vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="q-stage q-grain mb-10 aspect-[3/4]">
                {productImageGallery[7] ? (
                  <Image
                    src={productImageGallery[7].src}
                    alt={productImageGallery[7].alt}
                    fill
                    sizes="(max-width: 1024px) 35vw, 24vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="q-eyebrow mb-4">Inside the operation</p>
              <h2 id="operation" className="q-display max-w-[16ch] text-frost">
                Stock is only useful when it is ready to work
              </h2>
              <p className="q-lede mt-7">
                Our job is not just to own boxes. It is to make sure the box
                you receive matches the site you quoted and can go straight to
                the installer’s bench.
              </p>

              <dl className="mt-10 border-t border-hairline">
                {[
                  ["Receive", "Sample every pallet and verify the count."],
                  ["Test", "Power up cameras, IR and recorder channels."],
                  ["Pack", "Keep the camera, storage and PoE on one dispatch."],
                ].map(([label, detail]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-hairline py-4"
                  >
                    <dt className="q-eyebrow q-eyebrow--muted text-[0.6875rem]">
                      {label}
                    </dt>
                    <dd className="text-[0.9375rem] leading-6 text-frost">
                      {detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section
        aria-labelledby="story"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal>
            <p className="q-eyebrow mb-4">Our story</p>
            <h2 id="story" className="q-display max-w-[20ch] text-frost">
              We started because the wait was ridiculous
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-x-12">
            {story.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90}>
                <p
                  className="q-display q-num text-blue-electric"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="q-rule my-6" />
                <h3 className="q-h3 text-frost">{step.title}</h3>
                <p className="q-body mt-3 text-[0.9375rem]">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission and values */}
      <section aria-labelledby="values" className="border-t border-hairline">
        <div className="q-shell q-band">
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="q-eyebrow mb-4">Mission and values</p>
              <h2 id="values" className="q-display max-w-[16ch] text-frost">
                Get the good stuff out fast, at a price that works
              </h2>
              <p className="q-lede mt-7">
                Four things decide every call we make: whether it ships faster,
                whether it holds up, whether it costs your customer less, and
                whether it is where the market is going next.
              </p>
            </div>

            <ul className="grid gap-px self-start overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
              {values.map((item) => (
                <li key={item.title} className="bg-surface p-8">
                  <h3 className="q-h3 text-frost">{item.title}</h3>
                  <p className="q-body mt-3 text-[0.9375rem]">{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why we stand out */}
      <section
        aria-labelledby="stand-out"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal>
            <p className="q-eyebrow mb-4">Why we stand out</p>
            <h2 id="stand-out" className="q-display max-w-[18ch] text-frost">
              Direct wholesale pricing, nobody in the middle
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2">
              {standOut.map((item) => (
                <div key={item.heading} className="bg-surface p-8 md:p-10">
                  <h3 className="q-h3 text-frost">{item.heading}</h3>
                  <p className="q-body mt-3 text-[0.9375rem]">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote to dispatch */}
      <section
        aria-labelledby="order-path"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal>
            <p className="q-eyebrow mb-4">How a trade order works</p>
            <h2 id="order-path" className="q-display max-w-[18ch] text-frost">
              From site photo to van-ready kit
            </h2>
            <p className="q-lede mt-7">
              The useful part of a wholesaler is what happens between the price
              and the delivery. This is the path we keep short.
            </p>
          </Reveal>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2">
            {orderPath.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 70}>
                <article className="flex h-full flex-col justify-between gap-8 bg-surface p-8 md:p-10">
                  <div>
                    <p className="q-display q-num text-blue-electric">{item.step}</p>
                    <div className="q-rule my-6" />
                    <h3 className="q-h3 text-frost">{item.title}</h3>
                    <p className="q-body mt-3 text-[0.9375rem]">{item.body}</p>
                  </div>
                  <p className="q-num border-t border-hairline pt-5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-purple-electric">
                    {item.stat}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Trade desk */}
      <section aria-labelledby="desk" className="border-t border-hairline">
        <div className="q-shell q-band">
          <Reveal className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="q-eyebrow mb-6">Your account contact</p>
              <h2 id="desk" className="q-display max-w-[18ch] text-frost">
                {site.contact} runs the trade desk
              </h2>
              <p className="q-lede mt-7">
                One number and one person, whether it is a first case or a
                container. Ask for a price without opening an account, and
                without a salesperson calling you every week afterwards.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappLink(
                  "Hi " +
                    site.contact +
                    ", I read about Quick Fast 2 You and would like to talk about trade supply.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-purple px-7 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-purple-electric"
              >
                <WhatsAppIcon className="size-4" />
                Message {site.contact}
              </a>
              <a
                href={site.phoneHref}
                className="q-num inline-flex h-12 items-center justify-center rounded-full border border-hairline px-7 text-[0.9375rem] text-frost transition-colors duration-300 hover:bg-white/5"
              >
                {site.phoneDisplay}
              </a>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.9375rem] text-muted-foreground transition-colors duration-300 hover:text-frost"
              >
                Read the trade terms
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
