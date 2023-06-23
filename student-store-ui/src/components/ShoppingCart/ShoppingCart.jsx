

// import React, { useState, useEffect } from "react";

// const ShoppingCart = () => {
//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Fetch products from API (example)
//   useEffect(() => {
//     // Simulating API call
//     setTimeout(() => {
//       const response = [
//         { id: 1, name: "Product 1", price: 10 },
//         { id: 2, name: "Product 2", price: 20 },
//         { id: 3, name: "Product 3", price: 15 },
//       ];
//       setProducts(response);
//     }, 1000);
//   }, []);

//   // Add item to cart
//   const addToCart = (product) => {
//     const updatedCartItems = [...cartItems, product];
//     setCartItems(updatedCartItems);
//     setTotalQuantity(totalQuantity + 1);
//     setTotalPrice(totalPrice + product.price);
//   };

//   return (
//     <div className="shopping-cart-content">
//       <h2>Shopping Cart</h2>
//       <div>
//         <h3>Products</h3>
//         {products.map((product) => (
//           <div key={product.id}>
//             <span>{product.name}</span>
//             <span>${product.price}</span>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3>Cart Summary</h3>
//         <p>Total Quantity: {totalQuantity}</p>
//         <p>Total Price: ${totalPrice}</p>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;


import React, { useState, useEffect } from "react";

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
      <div>
        <h3>Products</h3>
        {Array.isArray(products) ? (
          products.map((product) => (
            <div key={product.id}>
              <span>{product.name}</span>
              <span>${product.price}</span>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div>
        <h3>Cart Summary</h3>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;

