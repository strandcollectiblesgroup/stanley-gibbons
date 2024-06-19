import { Box } from "@chakra-ui/react";

interface MediaAndTextModuleProps {
  thing?: string;
}
export const MediaAndTextModule: React.FC<MediaAndTextModuleProps> = ({ thing }) => {
  return (
    <Box>This is a box - {thing}</Box>
  );
};
