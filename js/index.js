import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";
import todoReducer from "./reducers/todoReducer";

if (localStorage.getItem('todos') == null)
    localStorage.setItem('todos', JSON.stringify([]));
let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('todos'))
};

const store = createStore(todoReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
