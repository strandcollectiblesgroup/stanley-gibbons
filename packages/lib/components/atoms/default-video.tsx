"use client";

import { Box, AspectRatio } from "@chakra-ui/react";
import { DefaultVideo as DefaultVideoType } from "sanity/sanity.types";
import { DefaultImage } from "./default-image";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface DefaultVideoProps extends DefaultVideoType {}
export const DefaultVideo: React.FC<DefaultVideoProps> = ({ image, video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Suspense fallback={<Box />}>
      <Box position="relative">
        <Box
          onClick={() => {
            setIsPlaying(true);
          }}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={isPlaying ? -1 : 1}
        >
          <DefaultImage _type={"defaultImage"} image={image} layout="fill" />
        </Box>
        <AspectRatio ratio={16 / 9} id="awesome">
          <ReactPlayer
            controls
            height="100%"
            onPlay={() => {
              setIsPlaying(true);
            }}
            playing={isPlaying}
            url={video}
            width="100%"
          />
        </AspectRatio>
      </Box>
    </Suspense>
  );
};
