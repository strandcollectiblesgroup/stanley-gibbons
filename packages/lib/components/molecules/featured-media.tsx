import { Box } from "@chakra-ui/react";

interface FeaturedMediaProps {
  thing?: string;
}
export const FeaturedMedia: React.FC<FeaturedMediaProps> = ({ thing }) => {
  return (
    <Box>This is a box - {thing}</Box>
  );
};
