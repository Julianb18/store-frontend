import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const CartPage = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);
  return (
    <div>
      <h1>Cart</h1>
      <p>
        ADD TO CART : ProductId: {productId} Qty: {qty}
      </p>
    </div>
  );
};

export default CartPage;
