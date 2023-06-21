import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import ProductGrid from "../ProductGrid/ProductGrid";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductDetail from "../ProductDetail/ProductDetail"
import Home from "../Home/Home";
import About from "../About/About"
import ProductDetailPage from "../ProductDetailPage 16-08-58-652/ProductDetailPage";
import "./App.css"
import Contact from "../Contact/Contact";

import Hero from "../Hero/Hero"
import {Link} from "react-router-dom"

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Unable to fetch data...", error);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <main>

           <Navbar />
           <Hero/>
           <About/>
           <Home products = {products}/>
           <Contact/>
           <Footer/> 

          
          <Link to="/"></Link>
            
          <Link to="/about-us"></Link>
                        
          <Link to="/contact-us"></Link>
                 
          <Link to="/products">Products</Link>


          <Routes>
            {/* <Route
              path="/"
              element={<ProductGrid products={products} />}
            /> */}
            <Route
              path="/products/:id"
              element={<ProductDetailPage />}
              
            />

            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/products/:id" element={<ProductDetail />} />







          </Routes>

          
        </main>
      </Router>
    </div>
  );
}


  
         
           



