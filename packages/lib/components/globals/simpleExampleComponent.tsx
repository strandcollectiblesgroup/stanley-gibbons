import { Box } from "@chakra-ui/react";

// Define props if necessary. For example:
interface SimpleExampleComponentProps {
  label: string;
}

// Define the component using these props
export const SimpleExampleComponent: React.FC<SimpleExampleComponentProps> = ({
  label,
}) => {
  return <Box>{label}</Box>;
};
