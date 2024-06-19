import type { ResponsiveValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

interface SectionWrapperProps {
  children: React.ReactNode;
  spacing?: ResponsiveValue<string | number>;
  paddingTop?: ResponsiveValue<string | number>;
  paddingBottom?: ResponsiveValue<string | number>;
  background?: ResponsiveValue<string>;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  paddingTop,
  paddingBottom,
  spacing = { base: 9, md: 14 },
  background,
  id,
}) => {
  if (paddingTop || paddingBottom) {
    return (
      <Box
        as="section"
        bg={background}
        pb={paddingBottom}
        pt={paddingTop}
        id={id}
      >
        {children}
      </Box>
    );
  }
  return (
    <Box as="section" bg={background} py={spacing} id={id}>
      {children}
    </Box>
  );
};
