// external imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// local imports
import Product from "../../components/Product/Product";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import { listProducts } from "../../redux/actions/productActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productList);
  const { loading, error, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
