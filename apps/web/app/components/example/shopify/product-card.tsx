"use client";

import { Heading, Image, Flex, Box, Text, Button } from "@chakra-ui/react";
import { ProductProvider, useCart, useProduct } from "@shopify/hydrogen-react";
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import { Money } from "@shopify/hydrogen-react";
import { useEffect } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <ProductProvider data={product}>
      <ProductCardInternal />
    </ProductProvider>
  );
};

export const ProductCardInternal: React.FC = () => {
  const { product, selectedVariant } = useProduct();
  const { linesAdd } = useCart();

  useEffect(() => {
    console.log("selectedVariant::", product);
  }, [product]);

  return (
    <Flex my={2} p={3} bg="white" borderRadius={3} w="100%" pos="relative">
      {product?.featuredImage && (
        <Image
          src={product.featuredImage.url}
          alt="image of stamp"
          width="100px"
        />
      )}
      <Flex pl={4} flexDirection="column" w="100%">
        <Heading size="md" mb={2}>
          {product?.title}
        </Heading>

        {selectedVariant?.price && selectedVariant.availableForSale && (
          <Box my={4}>
            <Text>
              <strong>Price:</strong>{" "}
              <Money as="span" data={selectedVariant.price} />
            </Text>
            <Button
              mt={2}
              onClick={(e) => {
                e.preventDefault();
                if (selectedVariant.id) {
                  linesAdd([
                    {
                      merchandiseId: selectedVariant.id,
                    },
                  ]);
                }
              }}
            >
              Add to cart
            </Button>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};
