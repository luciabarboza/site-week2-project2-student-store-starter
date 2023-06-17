import * as React from "react"
import "./Navbar.css"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"
import Logo from "../Logo/Logo"





export default function Navbar() {
  return (
    
  
    <nav className="navbar">
    {/* Renders logo component...? */}

    {/* <Route path='/' element={<Home/>}/> */}
  
    <Link to= "/"> <img id = "home-logo" src = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"></img> </Link>
   
   {/* Social media images
    <ul>
      <li> <Link to = "contact-us"> <img id= "twitter" src= ""></img></Link></li> 

      <li> <Link to = "contact-us"> <img id= "instagram" src= ""></img></Link></li> 

      <li> <Link to = "contact-us"> <img id= "facebook" src= ""></img></Link></li> 

       */}

    {/* </ul>

      {/* <p>Navbar</p> */}


<li> <Link to = "/" className = "nav-text" id="home"> Home </Link> </li>
     <li><br></br><br></br></li>

      <li> <Link to ="about-us" className = "nav-text" id="about">About Us</Link> </li>
      <li><br></br><br></br></li>

      <li><Link to="contact-us" className = "nav-text" id="contact">Contact Us</Link> </li>

      <li><br></br><br></br></li>

      <li><Link to="buy-now" className = "nav-text" id="buynow">Buy Now</Link> </li>

      <li><br></br><br></br></li>

      











      {/* <br></br>

      <ul> */} 




    
    </nav>
    



  )
}

