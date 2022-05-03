import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { reducer } from "./redux/reducer";
import { Provider } from "react-redux";

let myStore = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);

