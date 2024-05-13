import { Box, Heading } from "@chakra-ui/react";
import { ProductProvider, useProduct } from "@shopify/hydrogen-react";

export const ProductCardInternal: React.FC = () => {
  const { product } = useProduct();

  return (
    <Box my={2} p={3} bg="blue.100">
      <Heading size="xs">123</Heading>
    </Box>
  );
};
