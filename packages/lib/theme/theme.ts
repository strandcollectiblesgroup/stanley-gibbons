import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { spacing as space } from "./spacing";
import { fonts, headingStyle, labelStyles, textStyle } from "./typography";

export const theme = extendTheme({
  colors,
  fonts,
  space,
  components: {
    Text: textStyle,
    FormLabel: labelStyles,
    Heading: headingStyle,
  },
  breakpoints: {
    base: "0em",
    sm: "480px",
    md: "769px",
    lg: "992px",
    xl: "1280px",
    "2xl": "1536px",
  },
  styles: {
    global: {
      body: {
        minWidth: "320px",
        bg: "gray.50",
      },
    },
  },
  config: {
    useSystemColorMode: false,
  },
});
