import React from "react";
import "../Styling/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const hist = useHistory();
  const [{ basket }] = useStateValue();

  const getBasketTotal = (items) => {
    let total = 0;
    for (let cost of items) {
      total += cost.price;
    }
    return total;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket?.length} items):
                <strong>{`${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
              <button onClick={(e) => hist.push("/payment")}>
                Proceed to Checkout
              </button>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Subtotal;
