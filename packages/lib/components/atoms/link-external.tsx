import { Button, Link } from "@chakra-ui/react";
import { LinkExternal as LinkExternalType } from "sanity/sanity.types";

interface LinkExternalProps extends LinkExternalType {
  label?: string;
  variant?: string;
}
export const LinkExternal: React.FC<LinkExternalProps> = ({
  url,
  newWindow,
  label,
  variant,
}) => {
  const openInNewWindow = newWindow ? {} : { target: "_blank" };
  return (
    <Button as={Link} variant={variant} href={url} {...openInNewWindow}>
      {label}
    </Button>
  );
};
