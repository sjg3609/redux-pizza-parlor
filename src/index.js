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
    const checkoutPrice = (state = 0, action) => {
        if (action.type === 'ADD_PIZZA_TO_CART') {
            return Number(state) + Number(action.payload.price);
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

    const zipCode = (state = '55404', action) => {
        if (action.type === 'SET_ZIP_CODE') {
            return action.payload;
        } else if (action.type === 'CLEAR_FORM') {
            return '';
        }
        return state;
    }

    const type = (state = '', action) => {
        if (action.type === 'SET_PICKUP') {
            return action.payload;
        } else if (action.type === 'SET_DELIVERY') {
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
            cart,
            checkoutPrice,
            type
        }),
        applyMiddleware(logger)
    )

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Provider store={storeInstance}>
                <App />
            </Provider>
        </React.StrictMode>
    );
