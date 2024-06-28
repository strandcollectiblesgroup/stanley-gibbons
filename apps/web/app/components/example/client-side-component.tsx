"use client";

import { Box } from "@chakra-ui/react";
import { useHelloQuery } from "@repo/codegen/backend/hooks";
import { useEffect } from "react";

export const ClientSideComponent: React.FC = () => {
  const { loading, data, error } = useHelloQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box
      py={1}
      px={3}
      borderRadius={4}
      bg={error ? "red.500" : loading ? "orange.500" : "green.500"}
      mx={2}
    ></Box>
  );
};
