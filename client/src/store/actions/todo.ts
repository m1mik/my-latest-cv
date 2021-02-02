import { Dispatch } from "redux";
import { Todo } from "../types/todo";
import { SAVE_FETCHED_TODOS } from "./actionTypes";

export const saveFetchedTodos = (todos: Todo[]) => (
  dispatch: Dispatch
): void => {
  dispatch({ type: SAVE_FETCHED_TODOS, payload: todos });
};
