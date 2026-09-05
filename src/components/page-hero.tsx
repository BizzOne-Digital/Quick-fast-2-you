import Image from "next/image";
import type { HeroImage } from "@/lib/heroes";
import { cn } from "@/lib/utils";

/**
 * The one hero used by every page: a full-width photograph under the brand
 * shade, with the copy column pinned to the bottom left. Pages supply the
 * image, the words and their own action buttons; nothing else varies.
 */
export function PageHero({
  image,
  video,
  eyebrow,
  headline,
  subheadline,
  actions,
  size = "page",
  children,
}: {
  image: HeroImage;
  video?: string;
  eyebrow?: string;
  headline: React.ReactNode;
  subheadline?: React.ReactNode;
  actions?: React.ReactNode;
  /** "home" is the tall opening frame; "page" is the shorter inner-page band. */
  size?: "home" | "page";
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative isolate flex w-full flex-col justify-end overflow-hidden",
        size === "home"
          ? "min-h-[88svh] pb-16 pt-40 md:min-h-[92svh] md:pb-24"
          : "min-h-[58svh] pb-14 pt-36 md:min-h-[62svh] md:pb-20",
      )}
    >
      {!video ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: image.position }}
          className="-z-10 object-cover"
        />
      ) : null}
      {video ? (
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 size-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
      <div aria-hidden="true" className="q-hero-shade -z-10" />
      <div aria-hidden="true" className="q-grain absolute inset-0 -z-10" />

      <div className="q-shell relative">
        {eyebrow ? <p className="q-eyebrow mb-5">{eyebrow}</p> : null}
        <h1
          className={cn(
            "text-white",
            size === "home" ? "q-hero max-w-[15ch]" : "q-display max-w-[18ch]",
          )}
        >
          {headline}
        </h1>
        {subheadline ? (
          <p className="q-lede mt-6 max-w-[52ch] text-[color:rgba(245,245,247,0.86)]">
            {subheadline}
          </p>
        ) : null}
        {actions ? (
          <div className="mt-9 flex flex-wrap items-center gap-3">{actions}</div>
        ) : null}
        {children}
      </div>

      <div aria-hidden="true" className="q-hero-edge" />
    </section>
  );
}

/**
 * Action classes, exported rather than wrapped, so a page can hang them on a
 * next/link <Link>, a plain <a> or a <button> without a second component.
 * One filled action per hero; everything else is outlined.
 */
export const heroPrimary =
  "inline-flex h-12 items-center gap-2 rounded-full bg-purple px-7 text-[0.9375rem] font-semibold tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-purple-electric";

export const heroSecondary =
  "inline-flex h-12 items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 text-[0.9375rem] font-medium tracking-[-0.01em] text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/60 hover:bg-white/[0.12]";
