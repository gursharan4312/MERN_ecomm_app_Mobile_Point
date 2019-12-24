import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MiniCart from "./Cart/MiniCart";

export default function Navbar() {
  return (
    <Nav className="navbar p-3 ">
      <div className="container">
        <div className="row w-100">
          <div className="col-10">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="brand logo" />
            </Link>
            {/* Logo reference:
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
            <ul className="navbar-nav d-inline-flex">
              <li className="nav-item ml-5">
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </div>
          <div className="col-2 cart-btn-container">
            <Link to="/cart" className="ml-auto cart-btn">
              <button className="btn btn-warning cart-btn">my cart</button>
            </Link>
            <MiniCart />
          </div>
        </div>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 90;
  background: #aaa;
`;
