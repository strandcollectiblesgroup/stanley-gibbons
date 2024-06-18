import { apolloClient } from "@repo/lib/script/apollo/apollo-client";
import { Box } from "@chakra-ui/react";
import { HelloDocument } from "@repo/codegen/backend/types";

const getHello = async () => {
  const { data } = await apolloClient.query({
    query: HelloDocument,
  });
  return data;
};

export const ServerSideComponent: React.FC = async () => {
  // Use the useQuery hook to fetch data
  const data = await getHello();
  console.log(data);

  return <Box py={1} px={3} borderRadius={4} bg="green.500" mx={2}></Box>;
};
