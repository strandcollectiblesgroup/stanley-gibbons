"use client";

import { Heading, Image, Flex, LinkOverlay } from "@chakra-ui/react";
import { ProductProvider, useProduct, useCart } from "@shopify/hydrogen-react";
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import { Money } from "@shopify/hydrogen-react";
import {
  VariantObject,
  convertVariantToUrlParams,
} from "@repo/lib/script/shopify/variant-helpers";

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
  const all = useProduct();
  const { status } = useCart();

  // @ts-ignore
  const urlVarientParams = convertVariantToUrlParams(
    selectedVariant.selectedOptions as VariantObject,
  );

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
            href={`/product/${product?.handle}${urlVarientParams}`}
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
