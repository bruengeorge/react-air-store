//import logo from "./logo.svg";
import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from './Payment';
import Login from "./Login";
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe('pk_test_51HjmoxHuoAMSNauq7NMSFmmtDkOVOHy1w56zghuczY0qR8cf3J0UvQJ7RSzA1qV5rNEUVm11rg6Ob5cByZJNYkna00F8NbSyrt');



function App() {


const [{}, dispatch] = useStateValue();

useEffect(() => {
  //will only run once - when the app compent loads

  auth.onAuthStateChanged(authUser => {
    console.log('USER NAME >>>', authUser);

    if(authUser) {
      // the user just logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    }else{
      // the user is notlogged in
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
},[])

  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/orders" >
            <Orders />
          </Route>


          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>


          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
