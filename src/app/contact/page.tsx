import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero, heroPrimary, heroSecondary } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { heroes } from "@/lib/heroes";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get in touch",
  description:
    "Reach " +
    site.contact +
    " at Quick Fast 2 You by WhatsApp, telephone or email for retail and wholesale pricing on security cameras, NVRs, surveillance storage and cabling.",
};

const hours: [string, string][] = [
  ["Monday to Friday", "8:00 AM to 6:00 PM CT"],
  ["Saturday", "9:00 AM to 1:00 PM CT"],
  ["Sunday", "Closed, WhatsApp monitored"],
  ["Dispatch cutoff", "3:00 PM CT"],
];

const notes = [
  {
    heading: "Retail or wholesale, both welcome",
    body: "The smallest order we ship is one case — two on a 32-channel NVR, twenty-four on junction boxes. There is no minimum spend to get a quote either way.",
  },
  {
    heading: "Bring your resale certificate",
    body: "We need it on file before the first invoice so sales tax can be left off. Send a photo with your enquiry and it is handled in one step.",
  },
  {
    heading: "Send us the site, not just the part number",
    body:
      "Channel count, the resolution you need and how many days the site has to look back, and we will size the recorder and the drive for you. If you are local to " +
      site.city +
      ", collections from the warehouse are welcome — message ahead and it will be on a pallet ready to load.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={heroes.contact}
        eyebrow="The trade desk"
        headline="Get in Touch with Quick Fast 2 You"
        subheadline={
          "One number, one person. " +
          site.contact +
          " answers the desk in " +
          site.city +
          " — send the camera counts, the recorder and a delivery zip, and a written price with freight comes back the same working day."
        }
        actions={
          <>
            <a
              href={whatsappLink(
                "Hi " +
                  site.contact +
                  ", I would like pricing from Quick Fast 2 You on security cameras: ",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={heroPrimary}
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp {site.contact}
            </a>
            <a href={site.phoneHref} className={heroSecondary}>
              <Phone className="size-4" />
              {site.phoneDisplay}
            </a>
          </>
        }
      />

      <section aria-labelledby="reach" className="border-t border-hairline">
        <div className="q-shell q-band">
          <h2 id="reach" className="sr-only">
            How to reach us
          </h2>

          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="q-eyebrow mb-5">Direct lines</p>
              <h3 className="q-display max-w-[14ch] text-frost">
                Ask for a price. No account needed.
              </h3>

              <div className="mt-12 flex flex-col gap-px overflow-hidden rounded-lg border border-hairline bg-hairline">
                <a
                  href={whatsappLink(
                    "Hi " +
                      site.contact +
                      ", I would like pricing from Quick Fast 2 You on security cameras: ",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-5 bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
                >
                  <span className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-full bg-purple"
                    >
                      <WhatsAppIcon className="size-5 text-white" />
                    </span>
                    <span>
                      <span className="q-eyebrow q-eyebrow--muted block text-[0.6875rem]">
                        WhatsApp, fastest reply
                      </span>
                      <span className="q-num mt-1.5 block text-xl text-frost">
                        {site.phoneDisplay}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-blue-electric" />
                </a>

                <a
                  href={site.phoneHref}
                  className="group flex items-center justify-between gap-5 bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
                >
                  <span className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-hairline"
                    >
                      <Phone className="size-4 text-blue-electric" />
                    </span>
                    <span>
                      <span className="q-eyebrow q-eyebrow--muted block text-[0.6875rem]">
                        Call {site.contact}
                      </span>
                      <span className="q-num mt-1.5 block text-xl text-frost">
                        {site.phoneDisplay}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-blue-electric" />
                </a>

                <a
                  href={"mailto:" + site.email}
                  className="group flex items-center justify-between gap-5 bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
                >
                  <span className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-hairline"
                    >
                      <Mail className="size-4 text-blue-electric" />
                    </span>
                    <span className="min-w-0">
                      <span className="q-eyebrow q-eyebrow--muted block text-[0.6875rem]">
                        Email the desk
                      </span>
                      <span className="mt-1.5 block break-all text-lg text-frost">
                        {site.email}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-blue-electric" />
                </a>

                <div className="flex items-center gap-4 bg-surface p-6">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-hairline"
                  >
                    <Globe className="size-4 text-blue-electric" />
                  </span>
                  <span className="min-w-0">
                    <span className="q-eyebrow q-eyebrow--muted block text-[0.6875rem]">
                      Website
                    </span>
                    <span className="mt-1.5 block break-all text-lg text-frost">
                      quickfast2you.com
                    </span>
                  </span>
                </div>

                <div className="bg-surface p-6">
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-hairline"
                    >
                      <MapPin className="size-4 text-blue-electric" />
                    </span>
                    <div>
                      <h4 className="q-eyebrow q-eyebrow--muted text-[0.6875rem]">
                        Warehouse and opening hours
                      </h4>
                      <p className="mt-1.5 text-[0.9375rem] text-frost">
                        {site.address}
                      </p>
                    </div>
                  </div>
                  <dl className="q-num mt-5">
                    {hours.map(([day, time]) => (
                      <div
                        key={day}
                        className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-hairline py-2.5 text-sm last:border-b-0"
                      >
                        <dt className="text-muted-foreground">{day}</dt>
                        <dd className="text-frost">{time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90} className="flex flex-col gap-12">
              <ContactForm />

              <aside className="flex flex-col gap-9">
                {notes.map((note) => (
                  <div key={note.heading}>
                    <h3 className="q-h3 text-frost">{note.heading}</h3>
                    <p className="q-body mt-2.5 text-[0.9375rem]">
                      {note.body}
                    </p>
                  </div>
                ))}
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="browse"
        className="border-t border-hairline bg-stage"
      >
        <div className="q-shell q-band">
          <Reveal className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="q-eyebrow mb-5">Before you write</p>
              <h2 id="browse" className="q-display max-w-[18ch] text-frost">
                Every camera price is already on the site
              </h2>
              <p className="q-lede mt-6">
                Browse the shop, quick add the domes, bullets and recorder you
                want at case quantity, and the list writes itself into a
                message. It is the fastest route to a number.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-purple px-7 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-purple-electric"
            >
              Shop All Cameras
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
