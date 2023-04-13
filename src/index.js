import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const customerName = (state = '', action) => {
    if (action.type === 'SET_CUSTOMER_NAME') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
