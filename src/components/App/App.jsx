import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza';
import Home from '../Home/Home';
import Price from '../Price/Price';
import Admin from '../Admin/Admin.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <Price />
        <br/>
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
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
