import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import {listReducer} from "./reducers/listReducer";
import {Provider} from "react-redux";
import {CounterContainer} from "./components/Counter";

// @ts-ignore
const store = createStore(listReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
);
