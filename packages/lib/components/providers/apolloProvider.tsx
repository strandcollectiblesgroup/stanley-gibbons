"use client";

import { ApolloProvider } from "@apollo/client";
import { apolloSanityClient } from "../../script/sanity/apollo-sanity-client";

interface ApolloUIProviderProps {
  children?: React.ReactNode;
}

export function ApolloUIProvider({
  children,
}: ApolloUIProviderProps): React.ReactNode {
  return (
    <ApolloProvider client={apolloSanityClient}>{children}</ApolloProvider>
  );
}
