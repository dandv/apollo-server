declare module 'apollo-upload-server' {
  import { GraphQLScalarType } from 'graphql';

  export const GraphQLUpload: GraphQLScalarType;

  export type ApolloUploadOptions = {
    /**
     * Max allowed non-file multipart form field size in bytes; enough for your queries (default: 1 MB)
     */
    maxFieldSize?: number;
    /**
     * Max allowed file size in bytes (default: Infinity)
     */
    maxFileSize?: number;
    /**
     * Max allowed number of files (default: Infinity)
     */
    maxFiles?: number;
  };

  export function processRequest(
    request: any,
    options?: ApolloUploadOptions,
  ): Promise<any>;
}
