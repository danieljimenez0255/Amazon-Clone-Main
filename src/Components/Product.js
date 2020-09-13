import React from "react";
import "../Styling/Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch some action
    //dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array.from({ length: rating }, () => (
            <p>🌟</p>
          ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket} type="button">
        Add to Basket
      </button>{" "}
    </div>
  );
};

export default Product;
