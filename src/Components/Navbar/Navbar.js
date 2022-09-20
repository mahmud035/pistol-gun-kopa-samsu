import React from 'react';
import './Navbar.css';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = ({ cart }) => {
  console.log(cart);

  return (
    <div className="navbar">
      <h1>Kopa Samsu Store</h1>
      <div className="navbar-cart-container">
        <BsFillCartFill className="icon-navbar-cart"></BsFillCartFill>
        <sup className="item-number">{cart.length}</sup>
      </div>
    </div>
  );
};

export default Navbar;
