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
        storeDomain="55d517-d8.myshopify.com"
        storefrontToken="64ba32cf55e4865edd44a903e0767e8a"
        storefrontApiVersion="2024-04"
        countryIsoCode="CA"
        languageIsoCode="EN"
      >
        <CartProvider>{children}</CartProvider>
      </ShopifyProvider>
    </ChakraUIProvider>
  );
}
