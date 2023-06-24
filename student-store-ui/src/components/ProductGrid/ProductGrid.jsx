import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  if (!Array.isArray(products)) {
    return <p>No items found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product, key) => (
        <ProductCard
          key={key}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
