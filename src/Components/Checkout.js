import React from "react";
import "../Styling/Checkout.css";
import Subtotal from "../Components/Subtotal";
import BasketItem from "./BasketItem";
import { useStateValue } from "../StateProvider";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div className="checkout__itemContainer">
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <div className="checkout__itemContainerItems">
            {basket?.length > 0 ? (
              basket.map((item) => (
                <BasketItem
                  basketImage={item.image}
                  itemTitle={item.title}
                  itemPrice={item.price}
                  itemRating={item.rating}
                />
              ))
            ) : (
              <h2>Basket is empty</h2>
            )}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
