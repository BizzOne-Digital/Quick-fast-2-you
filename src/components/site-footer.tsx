import Link from "next/link";
import { Logo } from "@/components/site-nav";
import { productCategories, slug } from "@/lib/catalog";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Products",
    links: [
      { href: "/products", label: "All products" },
      ...productCategories.map((item) => ({
        href: "/products#" + slug(item.name),
        label: item.name,
      })),
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-hairline bg-stage">
      <div className="q-shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="q-body mt-5 max-w-[32ch] text-[0.9375rem]">
              Quality products at great prices. We source through company
              closeouts, auctions and other closeout sources, so our inventory
              changes weekly and new deals arrive regularly.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="q-eyebrow q-eyebrow--muted mb-5">
                {column.heading}
              </h2>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.9375rem] text-muted-foreground transition-colors duration-300 hover:text-frost"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="q-rule my-12" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <dl className="q-num grid gap-6 sm:grid-cols-3 sm:gap-10">
            <div>
              <dt className="q-eyebrow q-eyebrow--muted mb-2">Contact</dt>
              <dd className="text-[0.9375rem] text-frost">{site.contact}</dd>
            </div>
            <div>
              <dt className="q-eyebrow q-eyebrow--muted mb-2">Telephone</dt>
              <dd>
                <a
                  href={site.phoneHref}
                  className="text-[0.9375rem] text-frost transition-colors hover:text-blue-electric"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="q-eyebrow q-eyebrow--muted mb-2">Email</dt>
              <dd>
                <a
                  href={"mailto:" + site.email}
                  className="text-[0.9375rem] text-frost transition-colors hover:text-blue-electric"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
          <p className="text-[0.8125rem] text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.name}. {site.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
