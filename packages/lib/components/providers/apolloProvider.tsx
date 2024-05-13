"use client";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../../script";

interface ApolloUIProviderProps {
  children?: React.ReactNode;
}

export function ApolloUIProvider({
  children,
}: ApolloUIProviderProps): React.ReactNode {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
