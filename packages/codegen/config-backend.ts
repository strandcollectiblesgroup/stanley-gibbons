import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3005/graphql",
  documents: "graphql/backend/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "./backend/types.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
    "./backend/hooks.ts": {
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
