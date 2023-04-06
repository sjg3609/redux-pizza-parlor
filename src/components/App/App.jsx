import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza.jsx';
import Home from '../Home/Home.jsx';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/select">Menu</Link>
          </li>
          <li>
            <Link to="/customersInfo">Info</Link>
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
          <CustomerForm />
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
