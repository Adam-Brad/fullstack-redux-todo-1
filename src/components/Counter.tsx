import React, { Dispatch, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {Action} from "redux";
import StoreState, { Todo, TodoAction } from "../reducers/listReducer";
import axios from "axios";

const API_URL = '/api/todo/';

interface Props {
    setList: (list: Todo[]) => void;
}

const App = ({ setList }: Props) => {
    const [task, setTask] = useState<string>('');

    useEffect(() => {
        axios.get(API_URL)
          .then(({data}) => setList(data))
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    return (
      <div>
          <input onChange={() => handleChange}/>
          <button onClick={() => ({})}>Click to add</button>
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

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
