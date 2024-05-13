import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { Routes } from "../../script";
import { Logo } from "./logo";

// Define props if necessary. For example:
interface StickyDevNavProps {
  children?: React.ReactNode;
}

// Define the component using these props
export const StickyDevNav: React.FC<StickyDevNavProps> = ({ children }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100%"
      py={2}
      px={4}
      bg="gray.300"
      zIndex="1000"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <HStack spacing={4}>
            <Logo />
            <Link as={NextLink} href={Routes.HOME}>
              Home
            </Link>
          </HStack>
        </Box>
        <Flex>{children}</Flex>
      </Flex>
    </Box>
  );
};
