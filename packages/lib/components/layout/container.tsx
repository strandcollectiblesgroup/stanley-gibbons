import { Box, Center, ResponsiveValue } from "@chakra-ui/react";
import { spacing } from "../../theme/spacing";
interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  paddingX?: ResponsiveValue<string | number>;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "1200px",
  paddingX = spacing.containerPadding,
}) => {
  return (
    <Center minWidth="320px" paddingX={paddingX} w="100%">
      <Box maxWidth={maxWidth} w="100%">
        {children}
      </Box>
    </Center>
  );
};
