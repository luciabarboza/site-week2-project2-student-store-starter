import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import ProductGrid from "../ProductGrid/ProductGrid";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductDetail from "../ProductDetail/ProductDetail"
import Home from "../Home/Home";
import About from "../About/About";
import ProductDetailPage from "../ProductDetailPage 16-08-58-652/ProductDetailPage";
import "./App.css"
import Contact from "../Contact/Contact";
import Sidebar from "../Sidebar/Sidebar";
import ProductView from "../ProductView/ProductView";
import Counter from "../Counter/Counter";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

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

  const [shoppingCart, setShoppingCart]=useState([])


  const handleAddItemToCart= (product) => {
    let id= product.id;
    let newCart;
    if(!shoppingCart.find((item)=>item.id===id)){
      newCart=[
      ...shoppingCart,
      {name:product.name, price: product.price, id: id, quantity: 1}

      ]
    }
    else{
      newCart = shoppingCart?.map((item)=>{
        if(item.id===id){
          return{
            ...item, quantity: item.quantity+1
          }
        }
        return item;
      })
    }
    setShoppingCart(newCart)

  }


  const handleRemoveItemToCart= (product) => {
    let newCart = shoppingCart
    ?.map((item)=>{
      if(item.id===product.id && item.quantity===1)
      {
        let removedElements = shoppingCart.splice(item.id)
        return null;
      }else if (item.id===product.id){
        return {...item, quantity: item.quantity -1}
      }else{
        return item;
      }
    })
    .filter(Boolean)
    setShoppingCart(newCart)
  }
  


  //create product.id
//create new cart 
//if its not in the shopping cart, .find item using the id 
//adding item to cart, add conditional for finding item and => item id
//map 
//create newcart =
//









  // const handleAddItemToCart= (product) => {
  //   const ProductExist = cartItems.find(item=>item.id===product.id)
  //   if(ProductExist){
  //     setCartItems(
  //       cartItems.map(item=>
  //         item.id===product.id
  //         ? {...ProductExist, quantity: ProductExist.quantity+1} 
  //         : item
  //       )
  //     )
  //   } else{
  //     setCartItems([...cartItems, {
  //       ...product,
  //       quantity: 1
  //     }])
  //   }

    
    


  //  }






  //using splice 
//map ?
//
  // const handleRemoveItemToCart= () =>{

  // }




 


  

  return (

    
     

    <div className= "app">


     
      <BrowserRouter>
        <main>
          

           <Navbar />
           <Hero/>
           <Sidebar/>



             


          
           <Home products = {products}/>



           
          
          <Link to="/"></Link>
            
          <Link to="/about-us"></Link>
                        
          <Link to="/contact-us"></Link>
                 
         
         
         {/* Footer appears above products...??? */}



          <Routes>
          
            {/* removing this causes home hero and search to appear twice  but allows search bar to work properly*/}

            <Route
              path="/products/:id"
              element={<ProductDetailPage />}
              
            />

             <Route path="/"
              element={<ProductGrid products={products} />}
            /> 
            
            <Route path="/" element={
            <Home/>} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            

            

            







          </Routes>

          <div className="Footer">
          <Contact/>
          <Footer/>
          </div>

          {/* <Sidebar isOpen={this.state.sidebarOpen} toggleSidebar={this.handleViewSidebar} /> */}


          
        </main>
      </BrowserRouter>

     
    </div>
  );
}


  
         
           



