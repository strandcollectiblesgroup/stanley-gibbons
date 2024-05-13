"use client";

import { Heading, Image, Flex, LinkOverlay } from "@chakra-ui/react";
import { ProductProvider, useProduct } from "@shopify/hydrogen-react";
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import { Money } from "@shopify/hydrogen-react";
import { VariantObject } from "@repo/lib/script/shopify/variant-helpers";

interface ProductPageProps {
  product: Product;
  variants: VariantObject[];
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  variants,
}) => {
  return (
    <ProductProvider data={product}>
      <ProductPageInternal variants={variants} />
    </ProductProvider>
  );
};

interface ProductPageInternalProps {
  variants: VariantObject[];
}

export const ProductPageInternal: React.FC<ProductPageInternalProps> = () => {
  const { product } = useProduct();

  // console.log(product.product)
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
        <LinkOverlay
          href={`/product/${product?.handle}`}
          mt="auto"
          textAlign="right"
        >
          View item
        </LinkOverlay>
      </Flex>
    </Flex>
  );
};
