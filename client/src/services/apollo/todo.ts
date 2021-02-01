import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodos($ownerId: ID!) {
    getTodos(ownerId: $ownerId) {
      id
      title
      isDone
    }
  }
`;
