"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Plus, X } from "lucide-react";
import Image from "next/image";
import { ProductArt } from "@/components/product-art";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import {
  categories,
  money,
  productImages,
  products,
  slug,
  type Badge,
  type Category,
  type Product,
} from "@/lib/catalog";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Filter = "All" | Category;

const filters: Filter[] = ["All", ...categories];

const badgeStyles: Record<Badge, string> = {
  Hot: "bg-purple text-white",
  Sale: "bg-blue-electric text-white",
  New: "bg-frost text-ink",
  "Wholesale Pack": "border border-white/40 bg-black/70 text-white",
};

/**
 * The shop: a category filter bar over a product grid. "Quick add" builds an
 * order line at the product's case quantity and collects them in a sticky
 * tray, which hands the finished list to WhatsApp — the same route every other
 * enquiry on the site takes.
 */
export function ProductBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const [tray, setTray] = useState<Record<string, number>>({});

  // Links elsewhere point at /products#dome-cameras and friends. The grid is
  // one flat list, so the hash selects the filter rather than scrolling.
  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const match = categories.find((c) => slug(c) === hash);
      if (match) setFilter(match);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const shown = useMemo(
    () =>
      filter === "All"
        ? products
        : products.filter((p) => p.category === filter),
    [filter],
  );

  const lines = Object.entries(tray);
  const totalUnits = lines.reduce((sum, [, qty]) => sum + qty, 0);

  function add(product: Product) {
    setTray((prev) => ({
      ...prev,
      [product.sku]: (prev[product.sku] ?? 0) + product.casePack,
    }));
  }

  function clear() {
    setTray({});
  }

  function orderMessage() {
    const body = lines
      .map(([sku, qty]) => {
        const product = products.find((p) => p.sku === sku);
        return `${qty} x ${sku} — ${product?.name ?? ""}`;
      })
      .join("\n");
    return (
      "Hi " +
      site.contact +
      ", I would like a quote from Quick Fast 2 You on:\n\n" +
      body +
      "\n\nPlease confirm price and freight."
    );
  }

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-20 z-30 -mx-6 border-y border-hairline bg-canvas/85 px-6 py-3 backdrop-blur-xl md:-mx-10 md:px-10 xl:-mx-16 xl:px-16">
        <div
          role="group"
          aria-label="Filter by category"
          className="flex gap-2 overflow-x-auto pb-1"
        >
          {filters.map((item) => {
            const active = filter === item;
            const count =
              item === "All"
                ? products.length
                : products.filter((p) => p.category === item).length;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] tracking-[-0.01em] transition-colors duration-300",
                  active
                    ? "border-purple bg-purple text-white"
                    : "border-hairline text-muted-foreground hover:border-white/25 hover:text-frost",
                )}
              >
                {item}
                <span
                  className={cn(
                    "q-num text-[0.6875rem]",
                    active ? "text-white/70" : "text-muted-foreground/70",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <ul
        className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        aria-live="polite"
      >
        {shown.map((product) => {
          const floor = product.tiers[product.tiers.length - 1].unit;
          const entry = product.tiers[0].unit;
          const inTray = tray[product.sku] ?? 0;
          const image = productImages[product.sku];
          return (
            <li
              key={product.sku}
              className="flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface"
            >
              <div className="q-stage q-grain relative aspect-[4/3] rounded-none">
                <div className="q-stage__key" />
                <div className="q-stage__vignette" />
                <div className="q-stage__subject flex h-full items-center justify-center p-8">
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <ProductArt art={product.art} />
                  )}
                </div>
                {product.badge ? (
                  <span
                    className={cn(
                      "q-stage__subject absolute left-5 top-5 rounded-full px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]",
                      badgeStyles[product.badge],
                    )}
                  >
                    {product.badge}
                  </span>
                ) : null}
                <span className="q-stage__subject q-num absolute right-5 top-5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[0.6875rem] uppercase tracking-[0.12em] text-white/80">
                  {product.stock.toLocaleString("en-US")} in stock
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="q-eyebrow q-eyebrow--muted">{product.sku}</p>
                <h3 className="q-h3 mt-2 text-frost">{product.name}</h3>

                <ul className="q-num mt-4 flex flex-wrap gap-2">
                  {product.headline.map((figure) => (
                    <li
                      key={figure}
                      className="rounded-full border border-hairline px-3 py-1 text-[0.75rem] text-frost"
                    >
                      {figure}
                    </li>
                  ))}
                </ul>

                <p className="q-body mt-4 flex-1 text-[0.9375rem]">
                  {product.blurb}
                </p>

                <details className="group mt-4">
                  <summary className="q-eyebrow q-eyebrow--muted cursor-pointer list-none text-[0.6875rem] transition-colors duration-300 hover:text-frost">
                    Full specification
                  </summary>
                  <dl className="q-num mt-3 border-t border-hairline">
                    {product.specs.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-hairline py-2 text-[0.8125rem] last:border-b-0"
                      >
                        <dt className="text-muted-foreground">{label}</dt>
                        <dd className="text-right text-frost">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </details>

                <dl className="q-num mt-6 flex items-end justify-between gap-4 border-t border-hairline pt-5">
                  <div>
                    <dt className="q-eyebrow q-eyebrow--muted text-[0.6875rem]">
                      Trade from
                    </dt>
                    <dd className="mt-1.5 text-[1.5rem] font-semibold tracking-[-0.028em] text-frost">
                      {money(floor, 2)}
                      <span className="ml-1.5 text-[0.8125rem] font-normal text-muted-foreground">
                        / unit
                      </span>
                    </dd>
                  </div>
                  <div className="text-right">
                    <dt className="q-eyebrow q-eyebrow--muted text-[0.6875rem]">
                      Entry tier
                    </dt>
                    <dd className="mt-1.5 text-[0.9375rem] text-muted-foreground">
                      {money(entry, 2)} at {product.moq}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => add(product)}
                  className={cn(
                    "mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full text-[0.9375rem] font-medium transition-colors duration-300",
                    inTray
                      ? "border border-hairline text-frost hover:bg-white/5"
                      : "bg-purple text-white hover:bg-purple-electric",
                  )}
                >
                  {inTray ? (
                    <>
                      <Check className="size-4 text-blue-electric" />
                      {inTray} in list &middot; add {product.casePack} more
                    </>
                  ) : (
                    <>
                      <Plus className="size-4" />
                      Quick add {product.casePack}
                    </>
                  )}
                </button>
                <p className="mt-2.5 text-center text-[0.75rem] text-muted-foreground">
                  Case pack {product.casePack} &middot; MOQ {product.moq}{" "}
                  &middot; {product.lead}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Order tray */}
      {lines.length ? (
        <div className="sticky bottom-6 z-40 mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-hairline bg-black/85 py-3 pl-6 pr-3 backdrop-blur-xl">
            <p className="q-num text-[0.9375rem] text-frost">
              {lines.length} {lines.length === 1 ? "line" : "lines"}
              <span className="text-muted-foreground">
                {" "}
                &middot; {totalUnits.toLocaleString("en-US")} units
              </span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={clear}
                className="inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-[0.8125rem] text-muted-foreground transition-colors duration-300 hover:text-frost"
              >
                <X className="size-4" />
                Clear
              </button>
              <a
                href={whatsappLink(orderMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-purple px-6 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-purple-electric"
              >
                <WhatsAppIcon className="size-4" />
                Send for a quote
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
