import { Box } from "@chakra-ui/react";

interface DefaultButtonProps {
  thing?: string;
}
export const DefaultButton: React.FC<DefaultButtonProps> = ({ thing }) => {
  return (
    <Box>This is a box - {thing}</Box>
  );
};
