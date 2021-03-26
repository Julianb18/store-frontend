import React from "react";
// import { Link } from "react-router-dom";

import Rating from "../Rating/Rating";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`} className="card-image">
        {/* <a href={`/product/${product._id}`}> */}
        <img src={product.image} alt={product.name} />
        {/* </a> */}
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">€{product.price}</div>
      </div>
    </div>
  );
};

export default Product;
