import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/login">
            <FaUser />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
