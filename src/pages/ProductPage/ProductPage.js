import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";

import data from "../../data";
import "./ProductPage.css";

const ProductPage = (props) => {
  const product = data.products.find((p) => p._id === props.match.params.id);

  return (
    <>
      {!product ? (
        <div>Product Not Found</div>
      ) : (
        <div>
          <Link to="/">Back to home</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>Price : €{product.price}</li>
                <li>
                  Description: <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="to-cart-card">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">€{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div className="price">
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="error">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="cart-btn">Add To Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
