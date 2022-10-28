
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
//   # This configuration file tells GraphQL Code Generator how
// # to generate types based on our schema.
  schema: "./schema.graphql",
  // documents: './**/!(*.d).{ts,tsx}',
  generates: {
    "./__generated__/resolvers-types.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers"
      ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
