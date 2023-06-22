import * as React from "react"
import "./Sidebar.css"
import { useState } from "react";
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"

import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
}from "react-icons/fa";

export default function Sidebar({children}) {

  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  }

  const handleSidebarClose = () => {
    setSidebarClose(false);
  }


  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  const sideItems=[
    {
      path: "/shopping-cart",
      name: "Shopping Cart"
    }
  ]

  // const sideItems = <button>Shopping Cart</button>

  

  




  return (
 

    <div className="container">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}}></h1> */}
                   <div  className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   sideItems.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           {/* Allows the items to stay hidden until called */}
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           {/* </div> */}
           <main>{children}</main>
        </div>
  )
}


