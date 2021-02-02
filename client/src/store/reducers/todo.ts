import { Todo } from "../types/todo";
import { AnyAction } from "redux";
import { SAVE_FETCHED_TODOS } from "../actions/actionTypes";

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
    case SAVE_FETCHED_TODOS: {
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
