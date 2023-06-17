import React from "react";
import "./ProductCard.css"
import ProductGrid from "../ProductGrid/ProductGrid";
import Counter from "../Counter/Counter";

const ProductCard = ({product})=>{
    return(
        <div className="product-card">
            <img id="product-image-grid" src= {product.image}/>
            <Counter/>
            <h1>{product.name}</h1>
            <div id = "price"></div>{product.price}
            
        </div>

    );
}

export default ProductCard;