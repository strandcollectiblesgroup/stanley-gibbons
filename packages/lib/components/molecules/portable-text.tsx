"use client";

import { Heading, Text } from "@chakra-ui/react";
import { PortableText as PortableTextType } from "sanity/sanity.types";
import {
  PortableText as PortableTextReact,
  PortableTextComponents,
} from "@portabletext/react";

export interface PortableTextProps {
  text: PortableTextType;
}

const components: PortableTextComponents = {
  block: {
    h1: (props) => <Heading as="h1" {...props} mb={2} />,
    h2: (props) => <Heading as="h2" {...props} mb={2} />,
    h3: (props) => <Heading as="h3" {...props} mb={2} />,
    h4: (props) => <Heading as="h4" {...props} mb={2} />,
    h5: (props) => <Heading as="h5" {...props} mb={2} />,
    h6: (props) => <Heading as="h6" {...props} mb={2} />,
    normal: ({ children }) => <Text mb={2}>{children}</Text>,
  },
};

export const PortableText: React.FC<PortableTextProps> = ({ text }) => {
  return <PortableTextReact value={text} components={components} />;
};
