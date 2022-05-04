import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers,createStore } from 'redux';
import { cartReducer, shopReducer} from './components/redux/reducer';



const root = ReactDOM.createRoot(document.getElementById('root'));

let rootReducer = combineReducers({cart: cartReducer, products:shopReducer});
const myStore = createStore(rootReducer);

root.render(
    <Provider store={ myStore}>
        <App />
    </Provider>
);

