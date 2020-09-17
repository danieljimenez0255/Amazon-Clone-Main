import React, { useState } from "react";
import "../Styling/Login.css";
import { Link, Redirect } from "react-router-dom";
import { userAuth } from "../firebase";
import { useStateValue } from "../StateProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(false);
  const [, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login shittttt
    userAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({
          type: "DISPLAY_EMAIL",
          userEmail: email,
        });
        setLoginState(true);
        /*   could use useHistory hook instead of Redirect component
        to switch to main page after logging in or when creating a new 
        account */
      })
      .catch((error) => alert(`${error.code}\n${error.message}`));
  };

  const register = (e) => {
    e.preventDefault();
    //   some more fancy firebase login shittttt
    userAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({
          type: "DISPLAY_EMAIL",
          userEmail: email,
        });
        setLoginState(true);
      })
      .catch((error) => alert(`${error.code}\n${error.message}`));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://wallpaperaccess.com/full/1383586.jpg"
          alt=""
        />
      </Link>
      {loginState === true && <Redirect to="/" />}
      <div className="login__container">
        <h1>Sign in:</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            onClick={signIn}
            className="login__signInButton"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
