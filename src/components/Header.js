import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <header id="Header">
        <div className="logo_wrapper">
          <Link id="logo" to="/">
            Mkh<span>Shop.</span>
          </Link>
        </div>
        <div className="nav">
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </header>
    </div>
  );
}
export default Header;
