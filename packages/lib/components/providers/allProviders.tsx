"use client";

import { ChakraUIProvider } from "./chakraProvider";
import { ApolloUIProvider } from "./apolloProvider";
import type { NextFont } from "next/dist/compiled/@next/font";
import { CartProvider } from "@shopify/hydrogen-react";

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
    <ApolloUIProvider>
      <ChakraUIProvider bodyFont={bodyFont} headingFont={headingFont}>
        <CartProvider>{children}</CartProvider>
      </ChakraUIProvider>
    </ApolloUIProvider>
  );
}
