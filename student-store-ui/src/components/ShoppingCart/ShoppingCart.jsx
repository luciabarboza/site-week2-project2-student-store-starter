import React, { useState, useEffect } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch products from API
  useEffect(() => {
    fetch("https://codepath-store-api.herokuapp.com/store")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    setTotalQuantity(totalQuantity + 1);
    setTotalPrice(totalPrice + product.price);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ProductGrid products={products} onAddToCart={addToCart} />

      <div>
        <h3>Cart Summary</h3>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>

      <CheckoutForm />
    </div>
  );
};

export default ShoppingCart;
