import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SigninPage.css";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign in</h1>
        </div>
        <div className="form-inner">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-inner">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-btn-wrapper">
          <button className="signin-btn" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <div className="new-customer-wrapper">
        <div className="new-customer-text">
          <p>New Customer?</p>
        </div>
        <Link to="/register">
          <button>Create Gamer account</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;
