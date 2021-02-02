import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodos($ownerId: ID!) {
    getTodos(ownerId: $ownerId) {
      id
      title
      isDone
      owner
      description
      created_at
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: ID!) {
    toggleTodo(id: $id) {
      id
      title
      isDone
      owner
      description
      created_at
    }
  }
`;
