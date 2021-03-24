function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            LOGO
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            <div className="card">
              <a href="product.html">
                {/* <div
                  className="img-container"
                  style="
                    background-image: url(https://www.buyabroadweb.com/assets/images/71nHh1FKYrL._AC_SL1500_.jpg);
                  "
                ></div> */}
                <img
                  className="medium"
                  src="./images/razer.jpg"
                  alt="product"
                />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>Razer Viper Ultimate</h2>
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
                <div className="price">€120</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
