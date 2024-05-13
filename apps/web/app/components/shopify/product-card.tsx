"use client";

import { Heading, Image, Flex, LinkOverlay } from "@chakra-ui/react";
import { ProductProvider, useProduct } from "@shopify/hydrogen-react";
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import { Money } from "@shopify/hydrogen-react";

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
  const { selectedVariant, product } = useProduct();

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
        {product?.priceRange?.minVariantPrice && (
          <Money data={product?.priceRange?.minVariantPrice} />
        )}
        {selectedVariant?.selectedOptions && (
          <LinkOverlay
            href={`/product/${product?.handle}`}
            mt="auto"
            textAlign="right"
          >
            View item
          </LinkOverlay>
        )}
      </Flex>
    </Flex>
  );
};
