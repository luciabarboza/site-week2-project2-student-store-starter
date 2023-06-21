import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import Counter from "../Counter/Counter"



const ProductCard = ({ product }) => {
    
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img id="product-image-grid" src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
      </Link>

      <div id = "price"></div>{product.price}

      {/* Other product card content */}
      <Counter/>
    </div>
  );
};

export default ProductCard;
