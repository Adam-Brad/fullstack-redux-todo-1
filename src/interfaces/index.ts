export interface Todo {
  text: string;
  is_done: boolean;
  id: number;
}

export interface TodoDraft {
  text: string;
  is_done: boolean;
}

export default interface StoreState {
  list: Todo[];
}

export interface TodoAction {
  type: string;
  payload: Todo[]
}
