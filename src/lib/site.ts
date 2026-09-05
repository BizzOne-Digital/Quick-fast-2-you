export const site = {
  name: "Quick Fast 2 You",
  contact: "Robert",
  email: "quickfast2you@gmail.com",
  phoneDisplay: "(469) 277-9025",
  phoneHref: "tel:+14692779025",
  whatsappNumber: "14692779025",
  city: "Dallas, Texas",
  address: "1910 Pacific Avenue, Suite 2000 #1044, Dallas, TX",
} as const;

export function whatsappLink(message: string) {
  return (
    "https://wa.me/" +
    site.whatsappNumber +
    "?text=" +
    encodeURIComponent(message)
  );
}
