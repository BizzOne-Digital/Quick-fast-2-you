import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const defaultMessage =
  "Hi " +
  site.contact +
  ", I found Quick Fast 2 You online. I would like trade pricing on ";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-5", className)}
      fill="currentColor"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.42 1.31-1.96 1.36-.54.05-1.04.24-3.5-.72-2.96-1.17-4.83-4.24-4.98-4.44-.14-.2-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.56.81 1.97.88 2.11.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.04 1.3 2.33 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.19-.29.39-.24.65-.15.27.1 1.68.79 1.97.94.29.15.48.22.55.34.07.13.07.75-.17 1.43Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full border border-border bg-background/70 pl-[0.9rem] pr-[0.9rem] backdrop-blur-2xl transition-[padding,border-color,box-shadow] duration-500 hover:border-transparent hover:pr-5 hover:shadow-[0_10px_40px_-8px_color-mix(in_oklch,var(--amethyst)_60%,transparent)] sm:bottom-8 sm:right-8"
      style={{ height: "3.5rem" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[image:var(--jewel)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <WhatsAppIcon className="size-[1.375rem] shrink-0 text-foreground" />
      <span className="max-w-0 whitespace-nowrap text-sm font-medium text-foreground opacity-0 transition-all duration-500 group-hover:ml-2.5 group-hover:max-w-[8rem] group-hover:opacity-100">
        WhatsApp us
      </span>
      <span className="sr-only">Message us on WhatsApp</span>
    </a>
  );
}
