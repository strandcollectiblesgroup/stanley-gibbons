"use client";

import { ChakraUIProvider } from "./chakraProvider";
import { ApolloUIProvider } from "./apolloProvider";
import type { NextFont } from "next/dist/compiled/@next/font";

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
        {children}
      </ChakraUIProvider>
    </ApolloUIProvider>
  );
}
