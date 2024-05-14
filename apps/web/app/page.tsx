import { StickyDevNav } from "@repo/lib/components";
import { GetProducts } from "./components/example/shopify/get-products";

export default function Home() {
  return (
    <>
      <StickyDevNav />
      <GetProducts />
    </>
  );
}
