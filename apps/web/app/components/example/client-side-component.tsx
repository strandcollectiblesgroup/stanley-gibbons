"use client";

import { Box, Text, Tooltip } from "@chakra-ui/react";
import { useHelloQuery } from "@repo/codegen/hooks";

export const ClientSideComponent: React.FC = () => {
  // Use the useQuery hook to fetch data
  const { loading, data, error } = useHelloQuery();

  return (
    <Box
      py={1}
      px={3}
      borderRadius={4}
      bg={error ? "red.500" : loading ? "orange.500" : "green.500"}
      mx={2}
    >
      <Tooltip label={`Server: ${data?.hello}`}>
        <Text size="body">Client</Text>
      </Tooltip>
    </Box>
  );
};
