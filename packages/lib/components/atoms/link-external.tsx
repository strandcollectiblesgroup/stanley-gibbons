import { Box } from "@chakra-ui/react";

interface LinkExternalProps {
  thing?: string;
}
export const LinkExternal: React.FC<LinkExternalProps> = ({ thing }) => {
  return <Box>This is a box - {thing}</Box>;
};
