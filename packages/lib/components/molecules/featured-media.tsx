"use client";

import { DefaultImage, DefaultVideo } from "../atoms";
import { FeaturedMedia as FeaturedMediaType } from "sanity/sanity.types";

interface FeaturedMediaProps extends FeaturedMediaType {}
export const FeaturedMedia: React.FC<FeaturedMediaProps> = ({
  featuredMedia,
}) => {
  return featuredMedia?.map((media) => {
    switch (media._type) {
      case "defaultImage":
        return <DefaultImage {...media} />;
      case "defaultVideo":
        return <DefaultVideo {...media} />;
      default:
        return <></>;
    }
  });
};
