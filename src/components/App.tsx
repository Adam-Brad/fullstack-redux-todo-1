import React, { Dispatch, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import StoreState, { Todo, TodoAction, TodoDraft } from "../interfaces";
import { sortTodos } from "../helpers";

const API_URL = '/api/todo/';

interface Props {
    list: Todo[];
    setList: (list: Todo[]) => void;
}

const App = ({list, setList}: Props) => {
    const [task, setTask] = useState<string>('');

    function fetchTodos() {
        axios.get(API_URL)
          .then(({data}) => setList(data))
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const handleAdd = () => {
        const todoToAdd: TodoDraft = {
            text: task,
            is_done: false,
        };
        axios.post(API_URL, todoToAdd)
          .then(() => fetchTodos())
          .catch(error => console.error(error))
    }

    const handleDelete = (todo: Todo) => {
        axios.delete(API_URL + `/${todo.id}`)
          .then(() => fetchTodos())
          .catch(error => console.error(error))
    }

    const sortedAndMappedTodos = sortTodos(list).map((todo) => (
        <>
            <li key={todo.id}>{todo.text}</li>
            <button onClick={() => handleDelete(todo)}>Delete</button>
        </>
      )
    );

    return (
      <div>
          <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}/>
          <button onClick={() => handleAdd()}>Click to add</button>
          {sortedAndMappedTodos}
      </div>
    );
};

function mapStateToProps(state: StoreState) {
    return {
        list: state.list
    };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
    return {
        setList: (list: Todo[]) => dispatch({
            type: 'SET_LIST',
            payload: list
        })
    };
}

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
