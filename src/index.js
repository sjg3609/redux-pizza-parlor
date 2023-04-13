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

const streetAddress = (state = [], action) => {
    if (action.type === 'ADD_STREET_ADDRESS') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return [];
    }
    return state;
}

const city = (state = '', action) => {
    if (action.type === 'ADD_CITY') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}

const zipCode = (state = '', action) => {
    if (action.type === 'SET_ZIP_CODE') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    } 
    return state;
}



const storeInstance = createStore(
    combineReducers({
        customerName,
        streetAddress,
        city,
        zipCode,
    })
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={storeInstance}>
        <App />
    </Provider>
    </React.StrictMode>
);
