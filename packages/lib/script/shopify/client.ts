import { createStorefrontClient } from "@shopify/hydrogen-react";
import * as process from "process";

export const client = createStorefrontClient({
  // load environment variables according to your framework and runtime
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN,
  publicStorefrontToken: process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN,
  privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN,
});
