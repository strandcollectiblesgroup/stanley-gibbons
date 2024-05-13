import { Box, Heading } from "@chakra-ui/react";
import { client } from "@repo/lib/script/shopify/client";

const GRAPHQL_QUERY = `
  query {
    shop {
      name
    }
  }
`;

const getFromShopify = async () => {
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
    }),
    headers: client.getPrivateTokenHeaders(),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  return json.data;
};

export const GetSiteTitle: React.FC = async () => {
  const { shop } = await getFromShopify();

  return (
    <Box p={3} bg="gray.200">
      <Heading size="md">{shop.name}</Heading>
    </Box>
  );
};
