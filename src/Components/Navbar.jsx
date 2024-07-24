import React from "react";
import logo from "./../Assets/Logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./../Css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_container">
        <div className="logo">
          <img src={logo} alt="" width={200} />
        </div>
        <div className="nav_Links">
          <li>
            <a href="">
              <Link to="/">Home</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/About">About</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/Services">Services</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/Skills">Skills</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/Portfolio">Portfolio</Link>
            </a>
          </li>
        </div>
        <div className="contact_me">
          <Link to="/Contact">
            <Button value="Contact" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
