import React from "react";
import "../Styling/BasketItem.css";
import { useStateValue } from "../StateProvider";

const BasketItem = ({
  basketImage,
  itemTitle,
  itemPrice,
  itemRating,
  itemId,
}) => {
  const [{ basket }, dispatch] = useStateValue();
  let basketCopy = [...basket];
  // let s;
  const removeFromBasket = (id) => {
    basketCopy.splice(
      basketCopy.findIndex((obj) => obj.id === id),
      1
    );
    dispatch({
      type: "REMOVE_FROM_BASKET",
      items: basketCopy,
    });
  };
  return (
    <div className="basketItem">
      <img className="basketItem__image" src={basketImage} alt="" />
      <div className="basketItem__info">
        <h2 className="basketItem__title">{itemTitle}</h2>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{itemPrice}</strong>
        </p>
        <div className="basketItem__rating">
          {Array.from({ length: itemRating }, () => (
            <p>🌟</p>
          ))}
        </div>
        <button type="button" onClick={() => removeFromBasket(itemId)}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
