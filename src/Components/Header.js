import React from "react";
import "../Styling/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { userAuth } from "../firebase";
import { Flipper, Flipped } from "react-flip-toolkit";

const Header = ({ cAniState }) => {
  const [{ basket, loginEmail: email }, dispatch] = useStateValue();

  const signOutEmail = () => {
    if (email !== "Hello Guest") {
      userAuth.signOut();
      dispatch({
        type: "DISPLAY_EMAIL",
        userEmail: "Hello Guest",
      });
    }
  };

  return (
    <Flipper flipKey={cAniState}>
      <Flipped flipId="smoothHeader" stagger="header-bg">
        <div className={cAniState ? "header" : "header__start"}>
          <Link to="/">
            <Flipped
              flipId="smoothImg"
              stagger="header-item"
              delayUntil="smoothHeader"
            >
              <img
                className={cAniState ? "header__logo" : "header__logoStart"}
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Flipped>
          </Link>{" "}
          <Flipped
            flipId="smoothSearch"
            stagger="header-item"
            delayUntil="smoothHeader"
          >
            <div
              className={cAniState ? "header__search" : "header__searchStart"}
            >
              <input className="header__searchInput" type="text" />
              <SearchIcon className="header__searchIcon" />
            </div>
          </Flipped>
          <div className="header__nav">
            <Link to={email === "Hello Guest" ? "/login" : "/"}>
              <Flipped
                flipId="smoothEmail"
                stagger="header-item"
                delayUntil="smoothHeader"
              >
                <div
                  onClick={signOutEmail}
                  className={
                    cAniState ? "header__option" : "header__optionStart"
                  }
                >
                  <span className="header__optionLineOne">
                    {email === "Hello Guest" ? email : "Hello " + email}
                  </span>
                  <span className="header__optionLineTwo">
                    {email === "Hello Guest" ? "Sign in" : "Sign out"}
                  </span>
                </div>
              </Flipped>
            </Link>
            <Flipped
              flipId="smoothOrders"
              stagger="header-item"
              delayUntil="smoothHeader"
            >
              <div
                className={cAniState ? "header__option" : "header__optionStart"}
              >
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& orders</span>
              </div>
            </Flipped>
            <Flipped
              flipId="smoothPrime"
              stagger="header-item"
              delayUntil="smoothHeader"
            >
              <div
                className={cAniState ? "header__option" : "header__optionStart"}
              >
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>
            </Flipped>
            <Link to="/checkout">
              <Flipped
                flipId="smoothCheckout"
                stagger="header-item"
                delayUntil="smoothHeader"
              >
                <div
                  className={
                    cAniState
                      ? "header__optionBasket"
                      : "header__optionBasketStart"
                  }
                >
                  <ShoppingBasket />
                  <span className="header__optionLineTwo header__basketCount">
                    {basket?.length}
                  </span>
                </div>
              </Flipped>
            </Link>
          </div>
        </div>
      </Flipped>
    </Flipper>
  );
};

export default Header;
