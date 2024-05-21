import { Box, Heading } from "@chakra-ui/react";
import { client } from "@repo/lib/script/shopify/client";
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";
import { ProductCard } from "./product-card";

const GRAPHQL_QUERY = `
  query ProductsQuery($first: Int!) {
    products(first: $first) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      nodes {
        id
        handle
        title
        featuredImage {
          id
          altText
          url
          width
          height
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          nodes {
            availableForSale
            compareAtPrice {
              amount
              currencyCode
            }
            id
            image {
              __typename
              id
              url
              altText
              width
              height
            }
            price {
              amount
              currencyCode
            }
            product {
              title
              handle
            }
            selectedOptions {
              name
              value
            }
            sku
            title
            unitPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

const getFromShopify = async () => {

  const headers = client.getPrivateTokenHeaders();
  const url = client.getStorefrontApiUrl();

  console.log(headers, url);

  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
      variables: {
        first: 25,
      },
    }),
    headers: client.getPrivateTokenHeaders(),
    method: "POST",
  });



  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  return json.data.products;
};

export const GetProducts: React.FC = async () => {
  const { nodes }: { nodes: Product[] } = await getFromShopify();
  return (
    <Box p={3} mt={10} maxW="600px" mx="auto">
      <Heading size="md">Products:</Heading>

      {nodes.map((product) => {
        return (
          <Box key={product.id}>
            <ProductCard product={product} />
          </Box>
        );
      })}
    </Box>
  );
};
