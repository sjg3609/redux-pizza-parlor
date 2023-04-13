import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const checkoutPrice = (state = 0, action) => {
    if (action.type === 'ADD_PIZZA_TO_CART') {
        return state + action.payload.price;
    }
    return state;
}

const cart = (state = [], action) => {
    if (action.type === 'ADD_PIZZA_TO_CART') {
        return [...state, action.payload.name]
    } else if (action.type === 'EMPTY_CART') {
        return [];
    } else if (action.type === 'UPDATE_CART') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        checkoutPrice,
        cart,
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
