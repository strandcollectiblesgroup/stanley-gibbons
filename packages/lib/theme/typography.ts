import { defineStyleConfig } from "@chakra-ui/react";

export const fonts = {
  heading: "var(--font-heading)",
  body: "var(--font-body)",
};

export const copyVariants = {
  body: {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 400,
  },
};

export const headingVariants = {
  h1: {
    fontSize: "50px",
    lineHeight: "65px",
  },
};

export const textStyle = defineStyleConfig({
  sizes: { ...copyVariants, ...headingVariants },
  defaultProps: {
    size: "body",
  },
});

export const labelStyles = defineStyleConfig({
  sizes: copyVariants,
  defaultProps: {
    size: "body",
  },
});

export const headingStyle = defineStyleConfig({
  sizes: headingVariants,
  defaultProps: {},
  baseStyle: {
    fontFamily: "heading",
    fontWeight: 500,
  },
});
