"use client";

import { ChakraUIProvider } from "./chakraProvider";
import type { NextFont } from "next/dist/compiled/@next/font";
import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";

interface AllProvidersProps {
  children?: React.ReactNode;
  bodyFont: NextFont;
  headingFont: NextFont;
}

export function AllProviders({
  children,
  headingFont,
  bodyFont,
}: AllProvidersProps): React.ReactNode {
  return (
    <ChakraUIProvider bodyFont={bodyFont} headingFont={headingFont}>
      <ShopifyProvider
        storeDomain={process.env.NEXT_PUBLIC_STORE_DOMAIN as string}
        storefrontToken={process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN as string}
        storefrontApiVersion={
          process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION as string
        }
        countryIsoCode="CA"
        languageIsoCode="EN"
      >
        <CartProvider>{children}</CartProvider>
      </ShopifyProvider>
    </ChakraUIProvider>
  );
}
