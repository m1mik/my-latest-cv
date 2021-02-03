export interface User {
  id: string;
  name: string;
  email: string;
}
export interface Todo {
  id: string;
  title: string;
  description?: string;
  isDone: boolean;
  owner: string;
  created_at: string;
  done_at?: string;
}

export interface TodoListStates {
  current: boolean;
  finished: boolean;
  all: boolean;
}
