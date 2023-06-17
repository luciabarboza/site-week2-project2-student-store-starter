import * as React from "react"
import {BrowserRouter,Routes, Route, Router,} from "react-router-dom"
// import Search from "../Search/Search"
import {Link} from "react-router-dom"
import axios from "axios"

import Navbar from "../Navbar/Navbar"

import About from "../About/About"
import Contact from "../Contact/Contact"

import Counter from "../Counter/Counter"




import Logo from "../Logo/Logo"

import Sidebar from "../Sidebar/Sidebar"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"


import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import ProductGrid  from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"

import ProductDetail from "../ProductDetail/ProductDetail"
import ProductView from "../ProductView/ProductView"

import NotFound from "../NotFound/NotFound"

import Footer from "../Footer/Footer"

import { useState, useEffect } from "react"


import "./App.css"


//complete functions 

// const handleAddItemToCart = () => () {


// }

// const handleRemoveItemToCart = () => () {

// }



export default function App() {


    const[products, setProducts] = useState([])


  

  useEffect(()=>{
    axios
    .get("https://codepath-store-api.herokuapp.com/store")
    .then((response) => {
      setProducts(response.data.products)
      console.log(products)
    })
    .catch((error) => {
      console.error("Unable to fetch data...",error)
    })
  },[]);

  // const{name,category,image,source,description,price} = productDetails

const isFetching = false;


  return (
   
    <div className="app">
      
      <BrowserRouter>
        <main>

        <Navbar/>
        <Hero/>


        

          
        <div>

        
        
              <Link to="/"></Link>
            
              <Link to="/about-us"></Link>
            
              <Link to="/contact-us"></Link>

              
            
        

        <Routes>
          
          {/* <Route exact path="/">
            <ProductGrid products={products}/>
          </Route>

          <Route path="/products/:productID">
            <ProductDetail products={products}/>
          </Route> */}

          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
    </div>
  
         
           
              
         
          {/* <Home products = {products}/> */}


          <Sidebar />
          <Home products = {products}/>
          <Footer/>


        </main>
        
      </BrowserRouter>



      
    </div>
  )
}

