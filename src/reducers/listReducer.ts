import {Action} from "redux";

export interface Todo {
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

const initialState = { list: [] };

export const listReducer = (state: StoreState = initialState, action: TodoAction) => {
  switch (action.type) {
    case 'SET_LIST':
      return {list: action.payload};
    default:
      return state;
  }
};
