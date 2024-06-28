"use client";

import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

interface Props {
  data?: any;
  clear?: boolean;
}

export const ClientSideLogger: React.FC<Props> = ({ data, clear = false }) => {
  useEffect(() => {
    if (clear) console.clear();
    console.log(data);
  }, [data]);

  return <Box />;
};
