// graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      year
      author {
        id
        name
      }
    }
  }
`;
