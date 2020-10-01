import React from "react";
import "../Styling/Order.css";
import moment from "moment";
import BasketItem from "./BasketItem";
import CurrencyFormat from "react-currency-format";

export const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <BasketItem
          key={Math.random() * 300}
          basketImage={item.image}
          itemTitle={item.title}
          itemPrice={item.price}
          itemRating={item.rating}
          itemId={item.id}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <h3 className="order__total">Order Total: {value}</h3>
            </>
          );
        }}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};
