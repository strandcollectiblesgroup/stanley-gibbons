"use client";

import type { ChakraProps } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextFont } from "next/dist/compiled/@next/font";
import { theme } from "@repo/lib/theme";

interface ChakraUIProviderProps {
  children?: React.ReactNode;
  bodyFont: NextFont;
  headingFont: NextFont;
}

export function ChakraUIProvider({
  children,
  headingFont,
  bodyFont,
}: ChakraUIProviderProps): React.ReactNode {
  return (
    <>
      <style
        //@ts-ignore
        global
        jsx
        suppressHydrationWarning
      >
        {`
          :root {
            --font-body: ${bodyFont.style.fontFamily};
            --font-heading: ${headingFont.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme as ChakraProps}>{children}</ChakraProvider>
    </>
  );
}
