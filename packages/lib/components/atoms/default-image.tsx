import { Image } from "@chakra-ui/react";
import {
  DefaultImage as DefaultImageType,
  SanityImageAsset,
} from "sanity/sanity.types";

interface DefaultImageProps extends DefaultImageType {
  layout?: "fill";
}
export const DefaultImage: React.FC<DefaultImageProps> = ({
  image,
  layout,
}) => {
  const asset = image?.asset as unknown as SanityImageAsset;
  const fillLayout = layout === "fill";
  const assetHeight = fillLayout ? "100%" : "auto";
  const assetWidth = fillLayout ? "100%" : asset.metadata?.dimensions?.width;

  return (
    <Image
      objectFit="cover"
      src={asset.url}
      width={assetWidth}
      maxWidth="100%"
      height={assetHeight}
      alt={image?.alt || ""}
    />
  );
};
