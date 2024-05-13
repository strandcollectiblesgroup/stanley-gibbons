import { Box, Text } from "@chakra-ui/react";

// Define props if necessary. For example:
interface LogoProps {
  color?: string;
}

// Define the component using these props
export const Logo: React.FC<LogoProps> = ({ color = "inherit" }) => {
  return (
    <Box display="inline-block" color={color}>
      <Text size="sm" textTransform="uppercase">
        (Stanley Gibbons)
      </Text>
    </Box>
  );
};
