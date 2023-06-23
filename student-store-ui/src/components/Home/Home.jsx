import * as React from "react"
//import { ReactDOM } from "react"
import "./Home.css"
import axios from "axios"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Navbar from "../Navbar/Navbar"
import { Form } from "react-router-dom"
import {useState, useEffect} from "react"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {


  //something to do with product view

   //  console.log("Home",products)
  //  if(products.length===0){
  //   console.log("Products empty")
  //   return(
  //   <p>Loading...</p>
  //   )


  const[searchTerm,setSearchTerm] = useState("")
  const[filteredProducts, setFilteredProducts] = useState([])

  const[selectedProduct, setSelectedProduct] = useState("")


  //to make sure the products are rendering 
  useEffect(()=>{
    setFilteredProducts(products)
  }, [products])

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm)
    setFilteredProducts(products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    )
  }
  const handleFilterByCategory = (category) => {
    if(category === "all"){
      setFilteredProducts(products)
    }
    else{
      const filteredByCategory = products.filter((item)=> item.category ===category)
      setFilteredProducts(filteredByCategory)
    }

  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  return (

    
   
    <div className="home">



      

      <br/>
      <div className = "search">
        <input type = "search" value={searchTerm} placeholder = "Find your next item..." onChange = {handleSearch}/>

        <button onClick={()=>handleFilterByCategory("all")}>All Categories</button>
        <button onClick={()=>handleFilterByCategory("clothing")}>Clothing</button>
        <button onClick={()=>handleFilterByCategory("food")}>Food</button>
        <button onClick={()=>handleFilterByCategory("accessories")}>Accessories</button>
        <button onClick={()=>handleFilterByCategory("tech")}>Tech</button>

      
      </div>



      

    
      
        
      
    


      

      {/* When we click on a product image, we want to link to a page that shows product image and product description */}

      
      
      {/* <ShoppingCart/> */}

      
{/* causes searchbar to mess up but allows you to click on products and go to a new page */}
      
      {/* <ProductGrid products = {filteredProducts} onProductClick={handleProductClick}/> */}



      <ProductDetail product ={selectedProduct}/>
      




      

    </div>
    
  )




 }
