import { Todo } from "../interfaces";
import React from "react";

export const sortTodos = (todos: Todo[]) => todos.sort((a,b) => a.id - b.id);
