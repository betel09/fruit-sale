import React from "react";
import "./Card.css";

const Card = ({ img, alt, name, price }) => {
  return (
    <div className="card shadow-sm rounded-3">
      <div className="card-body">
        <img src={img} alt={alt} />
        <h5 className="product-name card-title">{name}</h5>
        <p className="product-price card-text">{price}</p>
        <button className="btn btn-danger add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};
export default Card;
