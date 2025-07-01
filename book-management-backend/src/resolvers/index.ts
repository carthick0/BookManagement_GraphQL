import { authorResolvers } from "./author_resolver";
import { bookResolvers } from "./book_resolver";
import { mergeResolvers } from "@graphql-tools/merge";

export const resolvers = mergeResolvers([
  bookResolvers,
  authorResolvers
]);