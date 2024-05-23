import { apolloSanityClient } from "@repo/lib/script/sanity/apollo-sanity-client";
import { Box } from "@chakra-ui/react";
import { DemoProductsDocument } from "@repo/codegen/sanity/types";

const getHello = async () => {
  const { data } = await apolloSanityClient.query({
    query: DemoProductsDocument,
  });
  return data;
};

export const ServerSideComponent: React.FC = async () => {
  // Use the useQuery hook to fetch data
  const data = await getHello();
  console.log(data);

  return <Box py={1} px={3} borderRadius={4} bg="green.500" mx={2}></Box>;
};
