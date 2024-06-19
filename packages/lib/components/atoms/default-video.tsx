import { Box } from "@chakra-ui/react";

interface DefaultVideoProps {
  thing?: string;
}
export const DefaultVideo: React.FC<DefaultVideoProps> = ({ thing }) => {
  return (
    <Box>This is a box - {thing}</Box>
  );
};
