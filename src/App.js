import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const itemArr = cartItems.map((item) => item.qty);
  const cartTotal = itemArr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              LOGO
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartTotal}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/product/:id" component={ProductPage} exact></Route>
          <Route path="/cart/:id?" component={CartPage}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
