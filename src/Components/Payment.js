import React, { useState, useEffect } from "react";
import "../Styling/Payment.css";
import { useStateValue } from "../StateProvider";
import BasketItem from "./BasketItem";
import { Link } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { useHistory } from "react-router-dom";
import { db, userAuth } from "../firebase";

export const Payment = () => {
  const [{ basket, loginEmail: email }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  useEffect(() => {
    // generates special stripe secret which allows us to charge a customer
    const getCleientSecret = async () => {
      if (getBasketTotal(basket) * 100 > 0) {
        const response = await axios({
          method: "post",
          // stripe expects currency subunits so if payment in dollars, it expects it in cents
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      } else {
        setClientSecret("");
      }
    };
    getCleientSecret();
  }, [basket]);
  console.log("CS", clientSecret);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // fancy stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(userAuth.currentUser.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);

        dispatch({
          type: "EMPTY_BASKET",
        });
        setProcessing(false);
        history.replace("/orders");
      });
  };

  const onHandleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const getBasketTotal = (items) => {
    let total = 0;
    for (let cost of items) {
      total += cost.price;
    }
    return total;
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/Checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <BasketItem
                key={Math.random() * 300}
                basketImage={item.image}
                itemTitle={item.title}
                itemPrice={item.price}
                itemRating={item.rating}
                itemId={item.id}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={onHandleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => {
                    return (
                      <>
                        <h3>Order Total: {value}</h3>
                      </>
                    );
                  }}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
