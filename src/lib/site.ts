export const site = {
  name: "Quick Fast 2 You",
  contact: "Robert",
  email: "quickfast2you@gmail.com",
  phoneDisplay: "(469) 654-4949",
  phoneHref: "tel:+14696544949",
  whatsappNumber: "14696544949",
  storeUrl: "https://store143130504.company.site",
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
