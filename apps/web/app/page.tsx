import { StickyDevNav } from "@repo/lib/components";
import { ServerSideComponent } from "./components/example/server-side-component";
import { ClientSideComponent } from "./components/example/client-side-component";
import { GetProducts } from "./components/shopify/get-products";

export default function Home() {
  return (
    <>
      <StickyDevNav />
      <GetProducts />
    </>
  );
}
