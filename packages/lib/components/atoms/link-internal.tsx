"use client";

import { Button } from "@chakra-ui/react";
import {
  LinkInternal as LinkInternalType,
  Product,
  Home,
  Page,
} from "sanity/sanity.types";
import { useMemo } from "react";
import NextLink from "next/link";

type AllAvailablePageTypes = Product | Home | Page;

interface LinkInternalProps extends LinkInternalType {
  label?: string;
  variant?: string;
}
export const LinkInternal: React.FC<LinkInternalProps> = ({
  label,
  variant,
  reference,
}) => {
  if (!reference) return <></>;

  const url = useMemo(() => {
    const linkObject = reference as unknown as AllAvailablePageTypes;

    switch (linkObject?._type) {
      case "product":
        return `product/${linkObject.store?.slug?.current}`;
      case "home":
        return "/";
      case "page":
        return linkObject.slug?.current;
      default:
        return "/";
    }
  }, [reference]);

  return (
    <Button as={NextLink} variant={variant} href={url}>
      {label}
    </Button>
  );
};
