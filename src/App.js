import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Spinner from "react-bootstrap/Spinner";
import { Payment } from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Orders } from "./Components/Orders";
const promise = loadStripe(
  "pk_test_51HWl83BbG9uzYWRnlP0ARjPuzCwMCyAerCkhy2evOM7VQTT75G18M20aTctC0lPMTr82ceSBmQXiYETa4BwBKQYk00hYpE8432"
);

function App() {
  const [aniState, setAniState] = useState(false);
  const [spinState, setSpinState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAniState(true);
    }, 1500);
    setTimeout(() => {
      setSpinState(true);
    }, 1000);
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header cAniState={aniState} />
            <Orders />
          </Route>
          <Route path="/login">
            <Header cAniState={aniState} />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header cAniState={aniState} />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header cAniState={aniState} />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* Make sure default route is always at bottom.  */}
          <Route path="/">
            {spinState === true ? (
              <>
                <Header cAniState={aniState} />
                <Home cAniState={aniState} />
              </>
            ) : (
              <Spinner animation="border" variant="info">
                <h1 style={{ textAlign: "center" }}>
                  Amazon clone is loading...
                </h1>
              </Spinner>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
