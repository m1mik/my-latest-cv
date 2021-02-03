import { gql, makeVar } from "@apollo/client";
import { Todo, TodoListStates } from "@store/types";
export const todosVar = makeVar<Todo[]>([
  {
    id: "6018fbec288eb19db1e744e3",
    title: "launch apollo",
    owner: "601405f529d03b2674ac1a51",
    isDone: false,
    created_at: new Date().toDateString(),
  },
]);

export const dropListController = {
  current: false,
  finished: false,
  all: false,
};
export const todoListControllerVar = makeVar<TodoListStates>({
  current: false,
  finished: false,
  all: true,
});

export const GET_LOCAL_TODOS = gql`
  query GetTestTodos {
    todos @client {
      id
      title
      isDone
      owner
    }
  }
`;

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
