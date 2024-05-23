import type { CodegenConfig } from "@graphql-codegen/cli";
import * as process from "process";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_SANITY_GQL_API,
  documents: "graphql/sanity/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "./sanity/types.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
    "./sanity/hooks.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
  hooks: {
    afterAllFileWrite: 'prettier --write "**/*.{ts,tsx,md}"',
  },
};

export default config;
