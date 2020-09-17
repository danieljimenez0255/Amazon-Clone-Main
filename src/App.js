import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Spinner from "react-bootstrap/Spinner";

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
