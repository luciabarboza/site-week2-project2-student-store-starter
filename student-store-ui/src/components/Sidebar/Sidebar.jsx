import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  

  return (
    <div>
      <div id="mySidenav" className="sidenav">

        <ShoppingCart/>
        
        <Link to="#" className="closebtn" onClick={closeNav}> &times; </Link>
{/* 
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/contact">Contact</Link> */}

        
       
      </div>
      <button className = "openButton" onClick={openNav}>open</button>
      {/* could also put span..??? */}
      <div id="main">
        {/* Add the main content of the page here */}
      </div>
    </div>
  );
};

export default Sidebar;

 




