import { Todo } from "../interfaces";
import React from "react";

export const sortAndMapTodos = (todos: Todo[]) => todos.sort((a,b) => a.id - b.id).map((todo) => <li key={todo.id}>{todo.text}</li>);
