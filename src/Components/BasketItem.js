import React from "react";
import "../Styling/BasketItem.css";

const BasketItem = ({ basketImage, itemTitle, itemPrice, itemRating }) => {
  return (
    <div className="basketItem">
      <img className="basketItem__image" src={basketImage} alt="" />
      <div className="basketItem__info">
        <div className="basketItem__title">{itemTitle}</div>
        <div className="basketItem__price">{itemPrice}</div>
        <div className="basketItem__rating">
          {Array.from({ length: itemRating }, () => (
            <p>🌟</p>
          ))}
        </div>
        <button type="button">Remove from basket</button>
      </div>
    </div>
  );
};

export default BasketItem;
