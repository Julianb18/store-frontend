import React from "react";

const Product = ({ product }) => {
  return (
    <div key={product._id} className="card">
      <div className="card-image">
        {/* <a href={`/product/${product._id}`}> */}
        <img src={product.image} alt={product.name} />
        {/* </a> */}
      </div>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <div className="rating">
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="price">€{product.price}</div>
      </div>
    </div>
  );
};

export default Product;
