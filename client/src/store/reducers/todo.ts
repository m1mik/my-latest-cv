import { Todo } from "../types/todo";
import { AnyAction } from "redux";
import { GET_TODOS } from "../actions/actionTypes";

interface TodoState {
  todos: Todo[];
}

const todoInitialState: TodoState = {
  todos: [],
};

const todo = (
  state: TodoState = todoInitialState,
  action: AnyAction
): TodoState => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS: {
      return {
        ...state,
        todos: payload,
      };
    }
    default:
      return state;
  }
};

export default todo;
