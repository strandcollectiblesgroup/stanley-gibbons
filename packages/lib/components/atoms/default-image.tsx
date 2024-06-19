import { Box } from "@chakra-ui/react";

interface DefaultImageProps {
  thing?: string;
}
export const DefaultImage: React.FC<DefaultImageProps> = ({ thing }) => {
  return (
    <Box>This is a box - {thing}</Box>
  );
};
