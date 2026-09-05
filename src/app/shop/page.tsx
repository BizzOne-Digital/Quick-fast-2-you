import { redirect } from "next/navigation";

/** /shop is the name buyers type; the catalogue lives at /products. */
export default function ShopPage() {
  redirect("/products");
}
