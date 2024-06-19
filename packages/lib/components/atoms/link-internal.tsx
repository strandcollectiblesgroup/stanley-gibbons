import { Box } from "@chakra-ui/react";

interface LinkInternalProps {
  thing?: string;
}
export const LinkInternal: React.FC<LinkInternalProps> = ({ thing }) => {
  return (
    <Box>This is a box - {thing}</Box>
  );
};
