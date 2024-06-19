import { Box } from "@chakra-ui/react";

interface PortableTextProps {
  thing?: string;
}
export const PortableText: React.FC<PortableTextProps> = ({ thing }) => {
  return <Box>This is a box - {thing}</Box>;
};
