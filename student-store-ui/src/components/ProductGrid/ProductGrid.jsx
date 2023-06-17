import React from "react";
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({products,handleAddItemToCart,handleRemoveItemToCart}) => {
    return (
        <div className = "product-grid">

            {products && products.map((product,key)=>
            <ProductCard key = {key} product = {product}/>
        )}

        </div>

    );
}

export default ProductGrid;