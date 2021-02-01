export interface Todo {
  id: string;
  title: string;
  description?: string;
  isDone: boolean;
  owner: string;
  created_at?: string;
  updated_at?: string;
}
