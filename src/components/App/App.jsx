import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza';
import Home from '../Home/Home';
import Price from '../Price/Price';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <Price />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/select">Select Pizza</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/select">
          <SelectPizza />
        </Route>
        <Route exact path="/customersInfo">

        </Route>
        <Route exact path="/checkout">

        </Route>
        <Route exact path="admin">
          
        </Route>
      </Router>
    </div>
  );
}

export default App;
